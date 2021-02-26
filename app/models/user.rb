# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    # VALIDATIONS - START
    validates :email, :fname, :lname, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    # VALIDATIONS - END

    # ASSOCIATIONS - START
    has_many :clients,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :Client

    has_many :brackets,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :Bracket

    has_one :lower_bracket,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :LowerBracket
    # ASSOCIATIONS - END

    # AUTHENTIFICATION METHODS - START
    attr_reader :password
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    # AUTHENTIFICATION METHODS - END
end

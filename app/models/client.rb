# == Schema Information
#
# Table name: clients
#
#  id            :bigint           not null, primary key
#  email         :string           not null
#  fname         :string           not null
#  lname         :string           not null
#  income        :integer          not null
#  accountant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Client < ApplicationRecord
    # VALIDATIONS - START
    validates :email, :fname, :lname, :income, :accountant_id, presence: true
    validates :email, uniqueness: { scope: :accountant_id }
    # VALIDATIONS - END

    # ASSOCIATIONS - START
    belongs_to :accountant,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :User
    # ASSOCIATIONS - END
end

# == Schema Information
#
# Table name: brackets
#
#  id            :bigint           not null, primary key
#  type          :string           not null
#  boundary      :integer          not null
#  rate          :integer          not null
#  accountant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Bracket < ApplicationRecord
    validates :type, :boundary, :rate, :accountant_id, presence: true

    belongs_to :accountant,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :User
end

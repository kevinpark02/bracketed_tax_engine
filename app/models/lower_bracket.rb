# == Schema Information
#
# Table name: lower_brackets
#
#  id             :bigint           not null, primary key
#  lower_boundary :integer          not null
#  lower_rate     :integer          not null
#  accountant_id  :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class LowerBracket < ApplicationRecord
    validates :lower_boundary, :lower_rate, :accountant_id, presence: true

    belongs_to :accountant,
        primary_key: :id,
        foreign_key: :accountant_id,
        class_name: :User
end

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
require 'test_helper'

class LowerBracketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

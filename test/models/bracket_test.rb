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
require 'test_helper'

class BracketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

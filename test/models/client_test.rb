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
require 'test_helper'

class ClientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

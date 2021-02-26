require 'test_helper'

class Api::LowerBracketsControllerTest < ActionDispatch::IntegrationTest
  test "should get controller" do
    get api_lower_brackets_controller_url
    assert_response :success
  end

end

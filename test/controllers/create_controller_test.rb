require 'test_helper'

class CreateControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get create_show_url
    assert_response :success
  end

  test "should get index" do
    get create_index_url
    assert_response :success
  end

  test "should get update" do
    get create_update_url
    assert_response :success
  end

  test "should get delete" do
    get create_delete_url
    assert_response :success
  end

end

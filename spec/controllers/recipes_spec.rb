require "spec_helper.rb"

describe RecipesController do
  describe "GET index" do
    context "with valid params" do
#      it "assigns a paginated list as @recipes" do 
      it "returns a list of recipes" do
        get :index
        response.code.should eq("200")
        assigns(:recipes).should_not be_nil
      end
    end
  end
end

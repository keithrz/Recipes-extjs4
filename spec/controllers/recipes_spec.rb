require "spec_helper.rb"

describe RecipesController do
  describe "GET index" do
    describe "with valid params" do
##      describe "with :html format" do
##      end
##      describe "with :json format" do
      it "returns a set of recipes" do 
        get :index
        response.code.should eq("200")
#        response.body.should include 
      end
##    end
#    describe "without valid params" do
    end
  end
end

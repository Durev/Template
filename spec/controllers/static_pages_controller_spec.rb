RSpec.describe StaticPagesController, type: :controller do
  describe "GET home" do
    it "responds with status code :ok (200)" do
      get(:home)
      expect(response).to have_http_status(:ok)
    end
  end
end

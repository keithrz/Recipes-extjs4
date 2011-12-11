Resque::Server.use(Rack::Auth::Basic) do |user, password|
  user == "keithrz"
  password == "keithrz"
end

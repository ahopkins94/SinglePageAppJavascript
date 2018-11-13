require 'sinatra'

class SinglePageApp < Sinatra::Base

get '/' do
  erb :index
end

get '/people' do
  erb :index
end

  run! if app_file == $0
end

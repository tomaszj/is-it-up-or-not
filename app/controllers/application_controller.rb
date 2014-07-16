class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  BASIC_HTTP_AUTH_USERNAME = "BASIC_HTTP_AUTH_USERNAME"
  BASIC_HTTP_AUTH_PASSWORD = "BASIC_HTTP_AUTH_PASSWORD"
  
  unless ENV[BASIC_HTTP_AUTH_USERNAME].blank? || ENV[BASIC_HTTP_AUTH_PASSWORD].blank?
    http_basic_authenticate_with name: ENV[BASIC_HTTP_AUTH_USERNAME], password: ENV[BASIC_HTTP_AUTH_PASSWORD]
  end
end

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    if session[:id] != ""
     @current_user ||= User.find(session[:id]) if session[:id]
    end
  end

  helper_method :current_user

  def authorize_user
   redirect_to '/login' unless current_user
  end

end

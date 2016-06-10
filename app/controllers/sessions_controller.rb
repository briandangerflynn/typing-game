class SessionsController < ApplicationController

  def new
    render 'new'
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
       session[:id] = user.id
       redirect_to "/users/#{user.id}"
    else
      redirect_to '/login'
    end
  end

  def destroy
    session.clear
    session[:id] = ""
    redirect_to '/'
  end

end

class UsersController < ApplicationController
  def index
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
     if @user.save
       session[:id] = @user.id
       redirect_to @user
     else
       redirect_to 'users/new'
     end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    redirect_to @user
  end

  def destroy
    @user = Users.find(params[:id])
    session.clear
    @user.destroy
    redirect_to '/users/new'
  end

  def level_one
  end

  def level_two
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :description, :image)
  end

end

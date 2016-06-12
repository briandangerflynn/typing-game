class UsersController < ApplicationController

  def index
  end

  def show
    @user = User.find(params[:id])
    if @user.level == nil
      @user.update_attribute :level, 1
    end
    # if @user.level == 1
    #   redirect_to '/level_one'
    # end
    # if @user.level == 2
    #   redirect_to '/level_two'
    # end
    # if @user.level == 3
    #   redirect_to '/level_three'
    # end
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
    @user = current_user
    if @user.level < 2
      @user.update_attribute :level, 2
    end
  end

  def level_three
    @user = current_user
    if @user.level < 3
      @user.update_attribute :level, 3
    end
  end

  def level_four
    @user = current_user
    if @user.level < 4
      @user.update_attribute :level, 4
    end
  end

  def learn_one
  end

  def learn_two
  end

  def learn_three
  end

  def learn_four
  end

  def about
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :description, :image, :level)
  end

end

class Api::UsersController < ApplicationController
    def show
        @user = User.includes(:clients).find_by(id: params[:id])
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end
end

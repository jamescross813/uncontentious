class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: user,
            except: [:create_at, :updated_at]
        else
            render json: {message: "Could not create user, try again"}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end

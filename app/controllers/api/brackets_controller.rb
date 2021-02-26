class Api::BracketsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @bracket = Bracket.new(bracket_params)

        if @bracket.save
            render :show
        else
            render json: @bracket.errors.full_messages, status: 422
        end
    end

    def update
        @bracket = Bracket.find_by(id: params[:id])

        if @bracket && @bracket.update(bracket_params)
            render :show
        else
            render json: @bracket.errors.full_messages, status: 422
        end
    end

    def destroy
        @bracket = current_user.brackets.find_by(id: params[:id])

        if @bracket && @bracket.destroy
            render json: ["You have deleted your bracket"]
        else
            render json: ["You can't destroy someone else's bracket"], status: 401
        end
    end

    private
    
    def bracket_params
        params.require(:bracket).permit(:boundary_type, :boundary, :rate, :accountant_id)
    end
end

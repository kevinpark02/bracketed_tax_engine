class Api::LowerBracketsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @lower_bracket = LowerBracket.new(lower_bracket_params)

        if @lower_bracket.save
            render :show
        else
            render json: @lower_bracket.errors.full_messages, status: 422
        end
    end

    def update
        @lower_bracket = LowerBracket.find_by(id: params[:id])

        if @lower_bracket && @lower_bracket.update(lower_bracket_params)
            render :show
        else
            render json: @lower_bracket.errors.full_messages, status: 422
        end
    end

    def destroy
        @lower_bracket = current_user.lower_brackets.find_by(id: params[:id])

        if @lower_bracket && @lower_bracket.destroy
            render json: ["You have deleted your lower boundary bracket"]
        else
            render json: ["You can't destroy someone else's lower boundary bracket"], status: 401
        end
    end

    private
    
    def lower_bracket_params
        params.require(:lowerBracket).permit(:lower_boundary, :lower_rate, :accountant_id)
    end
end

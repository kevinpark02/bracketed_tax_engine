class Api::ClientsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @client = Client.new(client_params)

        if @client.save
            render :show
        else
            render json: @client.errors.full_messages, status: 422
        end
    end

    def update
        @client = Client.find_by(id: params[:id])

        if @client && @client.update(client_params)
            render :show
        else
            render json: @client.errors.full_messages, status: 422
        end
    end

    def destroy
        @client = current_user.clients.find_by(id: params[:id])

        if @client && @client.destroy
            render json: ["You have deleted your client"]
        else
            render json: ["You can't destroy someone else's client"], status: 401
        end
    end

    private
    
    def client_params
        params.require(:client).permit(:email, :fname, :lname, :income, :accountant_id)
    end
end

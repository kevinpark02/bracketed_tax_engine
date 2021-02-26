Rails.application.routes.draw do
  namespace :api do
    get 'lower_brackets/controller'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :show]
    resources :clients, only: [:create, :update, :destroy]
    resources :brackets, only: [:create, :update, :destroy]
    resources :lower_brackets, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end

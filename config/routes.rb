Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :steps, only: [:edit, :update, :show, :destroy]
    resources :recipes do
      resources :steps, except: [:edit, :update, :show, :destroy]
      resources :comments
    end
  end
  root "static_pages#root"
end

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :recipes do
      resources :steps
    end
  end
  root "static_pages#root"
end

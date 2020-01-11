Rails.application.routes.draw do
  get 'create/show'
  get 'create/index'
  get 'create/update'
  get 'create/delete'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end

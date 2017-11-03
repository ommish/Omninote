Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :notebooks, only: [:create, :destroy]
    resources :notes, only: [:create, :update, :destroy]
    resources :tags, only: [:create, :destroy]
    resources :photos, only: [:create]
    resources :all_items, only: [:index]
  end
end

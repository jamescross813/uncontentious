Rails.application.routes.draw do
  resources :user_games
  resources :notes
  resources :users
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
Rails.application.routes.draw do
  root to: "users#index"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/level_one' => 'users#level_one'
  get '/level_two' => 'users#level_two'
  resources :users
end

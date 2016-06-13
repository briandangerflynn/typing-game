Rails.application.routes.draw do
  root to: "users#index"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/about' => 'users#about'

  get '/level_one' => 'users#level_one'
  get '/level_two' => 'users#level_two'
  get '/level_three' => 'users#level_three'
  get '/level_four' => 'users#level_four'
  get '/level_five' => 'users#level_five'

  get '/learn_one' => 'users#learn_one'
  get '/learn_two' => 'users#learn_two'
  get '/learn_three' => 'users#learn_three'
  get '/learn_four' => 'users#learn_four'
  get '/learn_five' => 'users#learn_five'
  resources :users
end

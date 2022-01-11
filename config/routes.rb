Rails.application.routes.draw do
  resources :highscores
  resources :game_tables
  resources :games
  resources :users
  get '/hello', to: 'application#hello_world'

  
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  get "/test", to: "users#test"
  delete "/logout", to: "sessions#destroy" 
  patch "/edit", to: "users#update"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end

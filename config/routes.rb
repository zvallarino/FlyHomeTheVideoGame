Rails.application.routes.draw do
  resources :highscores
  resources :game_tables
  resources :games
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end

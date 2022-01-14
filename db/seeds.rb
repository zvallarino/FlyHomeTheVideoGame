# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Game.create(link: "https://en.wikipedia.org/wiki/Satoshi_Kon", picture: "https://i.imgur.com/EyIgbRy.png", name: "Weeb Warriors II")
Game.create(link: "https://qte4000.herokuapp.com", picture: "https://i.imgur.com/9vf9Qfb.png", name: "QTE")
Game.create(link: "https://isw4000.herokuapp.com", picture: "https://i.imgur.com/hid1U5d.png", name: "Illegal Streaming Website")
Game.create(link: "https://gestate010922.herokuapp.com/home", picture: "https://i.imgur.com/k3Hvebc.png", name: "Fetch-A-Sketch")
GameTable.create(game_id: 1, user_id: 1) 
GameTable.create(game_id: 2, user_id: 1) 
GameTable.create(game_id: 3, user_id: 1) 

p "done seeding yo"

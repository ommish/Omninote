# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(email: "demo@gmail.com", password: "demoaccount")
ommi = User.create!(email: "ommi@gmail.com", password: "appacademy")

earthworm = Notebook.create!(title: "The hungry earthworm", user_id: demo.id)
breakfast = Notebook.create!(title: "The best meal of the day", user_id: ommi.id)
lunch = Notebook.create!(title: "Also great", user_id: ommi.id)

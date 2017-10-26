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

demo_earthworm = Notebook.create!(title: "The hungry earthworm", user_id: demo.id)
demo_computers = Notebook.create!(title: "What this is?", user_id: demo.id)
ommi_breakfast = Notebook.create!(title: "The best meal of the day", user_id: ommi.id)
ommi_lunch = Notebook.create!(title: "Also great", user_id: ommi.id)

note1 = Note.create!(
  title: "The great raspberry",
  body: "What a delicious raspberry, yum yum yum",
  notebook_id: demo_earthworm.id
)
note2 = Note.create!(
  title: "Some helpful tips",
  body: "1. do this thing 2. this other thing too 3. apples",
  notebook_id: demo_earthworm.id
)
note3 = Note.create!(
  title: "Things to eat",
  body: "1. breakfast 2. lunch 3. dinner",
  notebook_id: demo_computers.id
)
note4 = Note.create!(
  title: "Let's go camping",
  body: "Don't forget your tent",
  notebook_id: demo_computers.id
)

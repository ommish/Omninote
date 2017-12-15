# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

demo = User.create!(email: "demo@gmail.com", password: "demoaccount")

elephants = Notebook.create!(title: "Elephants", user_id: demo.id)
tusk = Notebook.create!(title: "Tusk", user_id: demo.id)
proboscidea = Notebook.create!(title: "proboscidea", user_id: demo.id)
eritherium = Notebook.create!(title: "eritherium", user_id: demo.id)
war_elephants = Notebook.create!(title: "War Elephants", user_id: demo.id)
mammoths = Notebook.create!(title: "mammoths", user_id: demo.id)
communication = Notebook.create!(title: "Communication", user_id: demo.id)
mastadons = Notebook.create!(title: "Mastadons", user_id: demo.id)
savannah = Notebook.create!(title: "Savannah Life", user_id: demo.id)
cognition = Notebook.create!(title: "Elephant Cognition", user_id: demo.id)
indian = Notebook.create!(title: "Indian Elephant", user_id: demo.id)


note1 = Note.create!(
  title: "Three species",
  body_plain: "Elephants are large mammals of the family Elephantidae and the orde",
  body: "<p><b>Elephants</b> are large mammals of the family <a href=\"/wiki/Elephantidae\" title=\"Elephantidae\">Elephantidae</a>and the order <a href=\"/wiki/Proboscidea\" title=\"Proboscidea\">Proboscidea</a>. Three species are currently recognized: the <a href=\"/wiki/African_bush_elephant\" title=\"African bush elephant\">African bush elephant</a> (<i>Loxodonta africana</i>), the <a href=\"/wiki/African_forest_elephant\" title=\"African forest elephant\">African forest elephant</a> (<i>L. cyclotis</i>), and the <a href=\"/wiki/Asian_elephant\" title=\"Asian elephant\">Asian elephant</a> (<i>Elephas maximus</i>). Elephants are scattered throughout <a href=\"/wiki/Sub-Saharan_Africa\" title=\"Sub-Saharan Africa\">sub-Saharan Africa</a>, <a href=\"/wiki/South_Asia\" title=\"South Asia\">South Asia</a>, and <a href=\"/wiki/Southeast_Asia\" title=\"Southeast Asia\">Southeast Asia</a>. Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include <a href=\"/wiki/Deinotheriidae\" title=\"Deinotheriidae\">deinotheres</a>, <a href=\"/wiki/Gomphothere\" title=\"Gomphothere\">gomphotheres</a>, <a href=\"/wiki/Mammoth\" title=\"Mammoth\">mammoths</a>, and <a href=\"/wiki/Mastodon\" title=\"Mastodon\">mastodons</a>.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>",
  notebook_id: elephants.id
)

note2 = Note.create!(
  title: "Reproduction",
  body_plain: "Mating Season: Mostly during the rainy season.
Gestation: 22 months.
Litter size: 1 calf (twins rare).",
  body: "<p><strong>Mating Season:</strong> Mostly during the rainy season.<br><strong>Gestation:</strong> 22 months.<br><strong>Litter size:</strong> 1 calf (twins rare).<br>
	Calves weigh between 200-250 lbs at birth. At birth, a calf's trunk has no muscle tone, therefore it will suckle through its mouth. It takes several months for a calf to gain full control of its trunk.</p><a href=\"http://www.defenders.org/elephant/basic-facts\"/> ",
  notebook_id: elephants.id
)

note3 = Note.create!(
  title: "Fission-fusion society",
  body_plain: "Elephants have a fission–fusion society in which multiple family groups come together to",
  body: "<p>Elephants have a <a href=\"/wiki/Fission%E2%80%93fusion_society\" title=\"Fission–fusion society\">fission–fusion society</a> in which multiple family groups come together to socialise. Males (\"bulls\") leave their family groups when they reach puberty and may live alone or with other males.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>
",
  notebook_id: elephants.id
)
note4 = Note.create!(
  title: "They're teeth",
  body_plain: "Their incisors grow into tusks, which can serve as weapons and as tools for moving",
  body: "<p>Their <a href=\"/wiki/Incisor\" title=\"Incisor\">incisors</a> grow into tusks, which can serve as weapons and as tools for moving objects and digging.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>
",
  notebook_id: tusk.id
)
note5 = Note.create!(
  title: "Intelligence",
  body_plain: "Elephant intelligence has been compared with that of primates and cetaceans. They appear to have",
  body: "<p>Elephant <a href=\"/wiki/Elephant_cognition\" title=\"Elephant cognition\">intelligence</a> has been compared with that of <a href=\"/wiki/Primate\" title=\"Primate\">primates</a> and <a href=\"/wiki/Cetacea\" title=\"Cetacea\">cetaceans</a>. They appear to have <a href=\"/wiki/Self-awareness\" title=\"Self-awareness\">self-awareness</a> and show <a href=\"/wiki/Empathy\" title=\"Empathy\">empathy</a> for dying or dead individuals of their kind.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>
",
  notebook_id: proboscidea.id
)
note6 = Note.create!(
  title: "Conservation Status",
  body_plain: "African elephants are listed as vulnerable by the International Union for Conservation of Nature (IUCN)",
  body: "<p>African elephants are listed as <a href=\"/wiki/Vulnerable_species\" title=\"Vulnerable species\">vulnerable</a> by the <a href=\"/wiki/International_Union_for_Conservation_of_Nature\" title=\"International Union for Conservation of Nature\">International Union for Conservation of Nature</a> (IUCN) while the Asian elephant is classed as <a href=\"/wiki/Endangered_species\" title=\"Endangered species\">endangered</a>. One of the biggest threats to elephant populations is the <a href=\"/wiki/Ivory_trade\" title=\"Ivory trade\">ivory trade</a>, as the animals are <a href=\"/wiki/Poaching\" title=\"Poaching\">poached</a> for their ivory tusks.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>
",
  notebook_id: elephants.id
  )

note7 = Note.create!(
  title: "Diet Staples",
  body_plain: "DIET
Staples: Grasses, leaves, bamboo, bark, roots. Elephants are also known to eat crops like banana and sugarcane",
  body: "<p><strong>Staples:</strong> Grasses, leaves, bamboo, bark, roots. Elephants are also known to eat crops like banana and sugarcane which are grown by farmers. Adult elephants eat 300-400 lbs of food per day.</p><a href=\"http://www.defenders.org/elephant/basic-facts\"/>",
  notebook_id: elephants.id
)

note8 = Note.create!(
  title: "Herbivores",
  body_plain: "Elephants are herbivorous and can be found in different habitats including savannahs, forests, de",
  body: "<p>Elephants are herbivorous and can be found in different habitats including <a href=\"/wiki/Savanna\" title=\"Savanna\">savannahs</a>, forests, deserts, and <a href=\"/wiki/Marsh\" title=\"Marsh\">marshes</a>. They prefer to stay near water. They are considered to be <a href=\"/wiki/Keystone_species\" title=\"Keystone species\">keystone species</a> due to their impact on their environments.</p><a href=\"https://en.wikipedia.org/wiki/Elephant\">https://en.wikipedia.org/wiki/Elephant</a>
",
  notebook_id: elephants.id
)

note9= Note.create!(
title: "Savanna Elephant Facts",
body_plain: "As a result of their visibility within the open areas where they live, Savanna elephants are well studied",
body: "<p>Savanna elephants are the largest subspecies of elephant. They are easily distinguished by their very large ears—which allow them to radiate excess heat—and front legs which are noticeably longer than the hind legs. They are found throughout the grassy plains and bushlands of Africa. Savanna elephants live in eastern and southern Africa, where the highest densities are found in Botswana, Tanzania, Zimbabwe, Kenya, Namibia, Mozambique and South Africa.</p><a href=\"https://www.worldwildlife.org/species/savanna-elephant\"></a>",
notebook_id: savannah.id
)

note10 = Note.create!(
title: "Human-Elephant Conflict",
body_plain: "Human-elephant conflict impacts savanna elephant populations. Killings are often retaliatory as elephants",
body: "<p>Human-elephant conflict impacts savanna elephant populations. Killings are often retaliatory as elephants eat and trample crops, raid food stores, and damage village infrastructure including precious water sources. Since an elephant can eat over 600 pounds of food a day, even a small herd can wipe out a farmer’s annual crop in a single night. Elephants disrupt community life—occasionally leading to injury and death of people. In such instances, authorities are obliged to take action and as a result, many elephants are shot. As elephant and human populations grow, the threat only worsens. Small protected areas are inadequate to stop conflict since elephants require plenty of freedom to roam.
</p><a href=\"https://www.worldwildlife.org/species/savanna-elephant\"></a>",
notebook_id: elephants.id
)

tag1 = Tag.create!(user_id: demo.id, title: "basics", note_ids: [note7.id, note9.id])
tag2 = Tag.create!(user_id: demo.id, title: "behavior", note_ids: [note5.id, note2.id, note3.id, note9.id])
tag3 = Tag.create!(user_id: demo.id, title: "diet", note_ids: [note9.id, note7.id])
tag4 = Tag.create!(user_id: demo.id, title: "types", note_ids: [note1.id])
tag5 = Tag.create!(user_id: demo.id, title: "captivity", note_ids: [])
tag6 = Tag.create!(user_id: demo.id, title: "facts", note_ids: [note9.id, note4.id])

flag1 = Flag.create!(place_id: 123456, lat: 40.0583, lng: -74.4057, user_id: demo.id, title: "nyuuyaaaahk", note_ids: [note9.id])
flag2 = Flag.create!(place_id: 123567, lat: 44.1247, lng: -73.8693, user_id: demo.id, title: "coloradooooododododo", note_ids: [note5.id, note2.id, note3.id])
flag3 = Flag.create!(place_id: 123678, lat: 42.0192, lng: -72.2345, user_id: demo.id, title: "juyzee", note_ids: [note7.id])
flag4 = Flag.create!(place_id: 123789, lat: 41.3223, lng: -76.2432, user_id: demo.id, title: "other places in da world", note_ids: [note1.id])
flag5 = Flag.create!(place_id: 123098, lat: 41.1221, lng: -76.1122, user_id: demo.id, title: "lots of space here", note_ids: [])
flag6 = Flag.create!(place_id: 123321, lat: 43.0932, lng: -74.2237, user_id: demo.id, title: "oh tokyo hi", note_ids: [note4.id])

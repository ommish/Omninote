# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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
  body_plain: "hree species are currently recognized: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus).
  https://en.wikipedia.org/wiki/Elephant",
  body: "Three species are currently recognized: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus).
  https://en.wikipedia.org/wiki/Elephant",
  notebook_id: elephants.id
)
note2 = Note.create!(
  title: "Only surviving family",
  body_plain: "Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include deinotheres, gomphotheres, mammoths, and mastodons.
  https://en.wikipedia.org/wiki/Elephant",
  body: "Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include deinotheres, gomphotheres, mammoths, and mastodons.
  https://en.wikipedia.org/wiki/Elephant",
  notebook_id: elephants.id
)
note3 = Note.create!(
  title: "Fission-fusion society",
  body_plain: "Elephants have a fission–fusion society in which multiple family groups come together to socialise. Males ('bulls') leave their family groups when they reach puberty and may live alone or with other males.
  https://en.wikipedia.org/wiki/Elephant",
  body: "{Elephants have a fission–fusion society in which multiple family groups come together to socialise. Males ('bulls') leave their family groups when they reach puberty and may live alone or with other males.
  https://en.wikipedia.org/wiki/Elephant",
  notebook_id: elephants.id
)
note4 = Note.create!(
  title: "They're teeth",
  body_plain: "Tusks are elongated, continuously growing front teeth, usually but not always in pairs, that protrude well beyond the mouth of certain mammal species. They are most commonly canines, as with warthogs, pig, and walruses, or, in the case of elephants, elongated incisors.
  https://en.wikipedia.org/wiki/Tusk",
  body: "Tusks are elongated, continuously growing front teeth, usually but not always in pairs, that protrude well beyond the mouth of certain mammal species. They are most commonly canines, as with warthogs, pig, and walruses, or, in the case of elephants, elongated incisors.
  https://en.wikipedia.org/wiki/Tusk",
  notebook_id: tusk.id
)
note5 = Note.create!(
  title: "Most extict",
  body_plain: "Most families of Proboscidea are now extinct, many since the end of the last glacial period. Recently extinct species include the last examples of gomphotheres in Central and South America, the American mastodon of family Mammutidae in North America, numerous stegodonts once found in Asia, the last of the mammoths, and several island species of dwarf elephants.[7]
  https://en.wikipedia.org/wiki/Proboscidea",
  body: "Most families of Proboscidea are now extinct, many since the end of the last glacial period. Recently extinct species include the last examples of gomphotheres in Central and South America, the American mastodon of family Mammutidae in North America, numerous stegodonts once found in Asia, the last of the mammoths, and several island species of dwarf elephants.[7]
  https://en.wikipedia.org/wiki/Proboscidea",
  notebook_id: proboscidea.id
)
note6 = Note.create!(
  title: "African forest elephant",
body_plain: "The African forest elephant (Loxodonta cyclotis) is a forest-dwelling species of elephant found in the Congo Basin.  https://en.wikipedia.org/wiki/Eritherium",
body: "The African forest elephant (Loxodonta cyclotis) is a forest-dwelling species of elephant found in the Congo Basin.  https://en.wikipedia.org/wiki/Eritherium",
  notebook_id: eritherium.id)

note7 = Note.create!(
  title: "African bush elephant",
body_plain: "The African bush elephant is the largest and heaviest land animal on Earth, being up to 3.96 m (13.0 ft) tall at the shoulder and 10.4 tonnes (11.5 short tons) in weight (a male shot in 1974, near Mucusso, southern Angola).[5][6]
https://en.wikipedia.org/wiki/African_bush_elephant",
body: "The African bush elephant is the largest and heaviest land animal on Earth, being up to 3.96 m (13.0 ft) tall at the shoulder and 10.4 tonnes (11.5 short tons) in weight (a male shot in 1974, near Mucusso, southern Angola).[5][6]
https://en.wikipedia.org/wiki/African_bush_elephant",
  notebook_id: elephants.id
)

note8 = Note.create!(
  title: "Conservation Status",
  body_plain: "African elephants were listed as vulnerable by the International Union for Conservation of Nature (IUCN) in 2008, with no independent assessment of the conservation status of the two forms.[163]
  https://en.wikipedia.org/wiki/Elephant",
  body: "African elephants were listed as vulnerable by the International Union for Conservation of Nature (IUCN) in 2008, with no independent assessment of the conservation status of the two forms.[163]
  https://en.wikipedia.org/wiki/Elephant",
  notebook_id: elephants.id
)

note10 = Note.create!(
  title: "Herbivores",
  body_plain: "Elephants are herbivorous and can be found in different habitats including savannahs, forests, deserts, and marshes. They prefer to stay near water. They are considered to be keystone species due to their impact on their environments. Other animals tend to keep their distance from elephants while predators, such as lions, tigers, hyenas, and any wild dogs, usually target only young elephants (or 'calves').
  https://en.wikipedia.org/wiki/Elephant ",
  body: "Elephants are herbivorous and can be found in different habitats including savannahs, forests, deserts, and marshes. They prefer to stay near water. They are considered to be keystone species due to their impact on their environments. Other animals tend to keep their distance from elephants while predators, such as lions, tigers, hyenas, and any wild dogs, usually target only young elephants (or 'calves').
  https://en.wikipedia.org/wiki/Elephant ",
  notebook_id: elephants.id
)

note9 = Note.create!(
  title: "Basics",
  body_plain: "The first elephant species to be tamed was the Asian elephant, for use in agriculture. Elephant taming – not full domestication, as they are still captured in the wild, rather than being bred in captivity – may have begun in any of three different places. The oldest evidence comes from the Indus Valley Civilization, around roughly 4500 BC.[2] Archaeological evidence for the presence of wild elephants in the Yellow River valley in Shang China (1600–1100 BC) may suggest that they also used elephants in warfare.[3] The wild elephant populations of Mesopotamia and China declined quickly because of deforestation and human population growth: by c. 850 BC the Mesopotamian elephants were extinct, and by c. 500 BC the Chinese elephants were seriously reduced in numbers and limited to areas well south of the Yellow River.

Capturing elephants from the wild remained a difficult task, but a necessary one given the difficulties of breeding in captivity and the long time required for an elephant to reach sufficient maturity to engage in battle. It is commonly thought that all war elephants were male because of males' greater aggression, but it is rather because a female elephant in battle will run from a male; therefore only males could be used in war, whereas female elephants were more commonly used for logistics.[4]
https://en.wikipedia.org/wiki/War_elephant",
body: "The first elephant species to be tamed was the Asian elephant, for use in agriculture. Elephant taming – not full domestication, as they are still captured in the wild, rather than being bred in captivity – may have begun in any of three different places. The oldest evidence comes from the Indus Valley Civilization, around roughly 4500 BC.[2] Archaeological evidence for the presence of wild elephants in the Yellow River valley in Shang China (1600–1100 BC) may suggest that they also used elephants in warfare.[3] The wild elephant populations of Mesopotamia and China declined quickly because of deforestation and human population growth: by c. 850 BC the Mesopotamian elephants were extinct, and by c. 500 BC the Chinese elephants were seriously reduced in numbers and limited to areas well south of the Yellow River.

Capturing elephants from the wild remained a difficult task, but a necessary one given the difficulties of breeding in captivity and the long time required for an elephant to reach sufficient maturity to engage in battle. It is commonly thought that all war elephants were male because of males' greater aggression, but it is rather because a female elephant in battle will run from a male; therefore only males could be used in war, whereas female elephants were more commonly used for logistics.[4]
https://en.wikipedia.org/wiki/War_elephant",
  notebook_id: war_elephants.id
)

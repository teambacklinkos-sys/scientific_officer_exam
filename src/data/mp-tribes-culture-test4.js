const questions = [
  {
    id: 1,
    question: "Which Bhil rebel of Nimar, who looted the rich and colonial treasuries to help the poor, was called the 'Indian Robin Hood' in the press of his time?",
    options: ["Tantya Bhil", "Bhima Nayak", "Khajya Naik", "Badal Bhoi"],
    answer: 0,
    explanation: "Tantya Bhil, also called Tantya Mama, fought the British and their allies in Nimar and Malwa for over a decade. In 1889 the New York Times described him as the 'Indian Robin Hood'. In MP he is honoured as 'Krantisurya' and 'Jananayak'."
  },
  {
    id: 2,
    question: "Tantya Bhil was captured by treachery and hanged by the British on 4 December 1889 at which place?",
    options: ["Indore", "Mhow", "Jabalpur", "Khandwa"],
    answer: 2,
    explanation: "Tantya Bhil was tried and hanged at Jabalpur jail on 4 December 1889. Every year on 4 December, MP marks his martyrdom with events in Nimar and Indore."
  },
  {
    id: 3,
    question: "Tantya Bhil was born around 1842 in Pandhana tehsil of which present-day district?",
    options: ["Barwani", "Khandwa", "Jhabua", "Dhar"],
    answer: 1,
    explanation: "Tantya Bhil was born in Pandhana tehsil of the old East Nimar district, now Khandwa. His area of activity covered Nimar, the Satpura forests and the Indore-Mhow region."
  },
  {
    id: 4,
    question: "A memorial temple of Tantya Bhil, where trains on the hill railway near Indore traditionally paused in his honour, is at which place?",
    options: ["Omkareshwar", "Maheshwar", "Mandu", "Patalpani, near Mhow"],
    answer: 3,
    explanation: "Tantya Bhil's body is believed to have been left near Patalpani on the Mhow-Khandwa railway line, and a temple to him stands there. Locomotive drivers traditionally stopped or slowed there to pay their respects. Patalpani is also known for its waterfall."
  },
  {
    id: 5,
    question: "Bhima Nayak, a Bhil hero of the 1857 period, led anti-British resistance mainly in which area?",
    options: ["Mandla", "Barwani", "Chhindwara", "Sheopur"],
    answer: 1,
    explanation: "Bhima Nayak led the Bhils of the Barwani-Sendhwa hills of Nimar against the British during and after 1857. A memorial to him has been built in Barwani district."
  },
  {
    id: 6,
    question: "After his capture, Bhima Nayak was deported by the British and died in 1876 at which place?",
    options: ["Port Blair, Andaman Islands", "Jabalpur jail", "Mandalay, Burma", "Rangoon"],
    answer: 0,
    explanation: "Bhima Nayak was sentenced to transportation for life and died in Port Blair in the Andamans (the Kala Pani) in 1876. Many 1857 rebels were sent there. Mandalay and Rangoon are linked with other exiles, such as Tilak and Bahadur Shah Zafar."
  },
  {
    id: 7,
    question: "Which pair of Bhil leaders fought the British together in the Sendhwa-Barwani area of Nimar during the Revolt of 1857?",
    options: ["Tantya Bhil and Badal Bhoi", "Raja Shankar Shah and Kunwar Raghunath Shah", "Ganjan Singh Korku and Badal Bhoi", "Bhima Nayak and Khajya Naik"],
    answer: 3,
    explanation: "Khajya Naik and Bhima Nayak led the Bhil uprising in the Satpura hills around Sendhwa and Barwani during 1857-58. Shankar Shah and Raghunath Shah were Gond royals of Jabalpur, and Badal Bhoi and Ganjan Singh Korku belong to the 20th-century Jungle Satyagraha."
  },
  {
    id: 8,
    question: "Raja Shankar Shah and his son Kunwar Raghunath Shah, executed by the British in 1857, belonged to which royal lineage?",
    options: ["The Bundelas of Orchha", "The Holkars of Indore", "The Gond dynasty of Garha-Mandla", "The Baghels of Rewa"],
    answer: 2,
    explanation: "Shankar Shah was a descendant of the Gond rulers of Garha-Mandla, the dynasty of Sangram Shah and Rani Durgavati, and lived on a pension near Jabalpur. He and his son became leading figures of the 1857 revolt in Mahakoshal."
  },
  {
    id: 9,
    question: "In September 1857 at Jabalpur, a Gond king and his son were tied to the mouths of cannons and blown up. What had they done?",
    options: ["Composed poems calling on people to rise against the British", "Killed the British Resident at Jabalpur", "Given shelter to Tantya Tope", "Refused to pay land revenue"],
    answer: 0,
    explanation: "Raja Shankar Shah and Kunwar Raghunath Shah were arrested after British spies found their patriotic poems urging people to overthrow the British, and were blown from cannons. Their execution sparked a mutiny among Indian soldiers of the 52nd Native Infantry at Jabalpur. A memorial marks the site."
  },
  {
    id: 10,
    question: "On which date is the martyrdom of Raja Shankar Shah and Kunwar Raghunath Shah observed?",
    options: ["10 May", "18 September", "24 June", "4 December"],
    answer: 1,
    explanation: "They were executed at Jabalpur on 18 September 1857, and this date is observed as their Balidan Diwas. 24 June is Rani Durgavati's martyrdom day, and 4 December is Tantya Bhil's."
  },
  {
    id: 11,
    question: "Badal Bhoi, the Gond leader who led tribals in the Jungle Satyagraha against forest laws, belonged to which district?",
    options: ["Betul", "Seoni", "Chhindwara", "Mandla"],
    answer: 2,
    explanation: "Badal Bhoi of Chhindwara district organised tribals to defy restrictive forest laws in the 1920s and during the 1930 Civil Disobedience Movement. He was repeatedly jailed for his role."
  },
  {
    id: 12,
    question: "Badal Bhoi died in 1940 while imprisoned in which jail?",
    options: ["Indore jail", "Bhopal jail", "Nagpur jail", "Jabalpur jail"],
    answer: 3,
    explanation: "Badal Bhoi died in Jabalpur Central Jail in 1940. It is widely believed that he was poisoned by the authorities. He is remembered as one of the foremost tribal freedom fighters of the Mahakoshal region."
  },
  {
    id: 13,
    question: "The state tribal museum named after Badal Bhoi is located in which city?",
    options: ["Chhindwara", "Bhopal", "Jabalpur", "Mandla"],
    answer: 0,
    explanation: "The Shri Badal Bhoi State Tribal Museum in Chhindwara is one of the oldest tribal museums in MP. It displays the life and material culture of the Gond, Bharia, Korku and other tribes of the region. It was renamed in Badal Bhoi's honour in 1997."
  },
  {
    id: 14,
    question: "Ganjan Singh Korku led the 1930 Jungle Satyagraha at Banjari Dhal in which district?",
    options: ["Seoni", "Betul", "Chhindwara", "Harda"],
    answer: 1,
    explanation: "Ganjan Singh Korku led tribals in breaking forest laws at Banjari Dhal in Betul district during the Civil Disobedience Movement of 1930. Betul is a Korku and Gond district of the Satpura region."
  },
  {
    id: 15,
    question: "The Turia Jungle Satyagraha of October 1930, in which police firing killed tribal satyagrahis including women, took place in which district?",
    options: ["Betul", "Chhindwara", "Mandla", "Seoni"],
    answer: 3,
    explanation: "Turia is in Seoni district. Tribals there defied the forest laws by cutting grass in reserved forests during the Civil Disobedience Movement, and police firing killed several of them, including women. The Turia martyrs are remembered as a major episode of MP's freedom struggle."
  },
  {
    id: 16,
    question: "Rani Durgavati ruled which kingdom?",
    options: ["Deogarh", "Chanda", "Garha-Mandla (Garha-Katanga)", "Kherla"],
    answer: 2,
    explanation: "Durgavati ruled the Gond kingdom of Garha-Mandla, also called Garha-Katanga, centred on the Jabalpur-Mandla region, as regent for her young son Vir Narayan after her husband died. Deogarh, Chanda and Kherla were other Gond kingdoms."
  },
  {
    id: 17,
    question: "Rani Durgavati was a princess of which ruling house before her marriage into the Gond dynasty?",
    options: ["The Chandelas of Kalinjar-Mahoba", "The Bundelas of Orchha", "The Baghels of Rewa", "The Paramaras of Malwa"],
    answer: 0,
    explanation: "Durgavati was born in 1524 into the Chandela royal family at Kalinjar. Her marriage to Dalpat Shah allied the Chandelas with the Gonds of Garha-Mandla. Her 500th birth anniversary was celebrated in 2024."
  },
  {
    id: 18,
    question: "Rani Durgavati died in 1564 near Narrai nala, Jabalpur, fighting a Mughal army led by whom?",
    options: ["Sher Shah Suri", "Asaf Khan, Akbar's governor of Kara-Manikpur", "Baz Bahadur of Malwa", "Raja Man Singh of Amber"],
    answer: 1,
    explanation: "Akbar's general Asaf Khan invaded Garha-Mandla in 1564. Wounded in battle, Durgavati stabbed herself rather than be captured. She had earlier defeated Baz Bahadur of Malwa, which makes him a tempting distractor."
  },
  {
    id: 19,
    question: "On which date is Rani Durgavati's Balidan Diwas observed?",
    options: ["5 October", "18 September", "15 November", "24 June"],
    answer: 3,
    explanation: "Durgavati died on 24 June 1564, and that day is observed as her Balidan Diwas. 5 October is her birth anniversary, 18 September is Shankar Shah's martyrdom day, and 15 November is Janjatiya Gaurav Diwas."
  },
  {
    id: 20,
    question: "Veerangana Durgavati Tiger Reserve, notified in 2023 as MP's seventh tiger reserve, was formed mainly from which protected areas?",
    options: ["Ratapani and Singhori sanctuaries", "Madhav National Park", "Nauradehi and Rani Durgavati wildlife sanctuaries", "Kuno National Park and Palpur"],
    answer: 2,
    explanation: "The reserve brings together Nauradehi Wildlife Sanctuary and Rani Durgavati Wildlife Sanctuary in Sagar, Damoh and Narsinghpur districts. Naming it after Durgavati is part of MP's effort to honour her legacy. Ratapani and Madhav became tiger reserves later."
  },
  {
    id: 21,
    question: "Rani Durgavati's husband, the Gond king of Garha-Mandla, was whom?",
    options: ["Sangram Shah", "Dalpat Shah", "Vir Narayan", "Hirde Shah"],
    answer: 1,
    explanation: "Durgavati married Dalpat Shah, son of the powerful Gond king Sangram Shah. After Dalpat Shah's early death she ruled as regent for their son Vir Narayan. Hirde Shah was a later ruler of the dynasty."
  },
  {
    id: 22,
    question: "The Madhya Pradesh Tribal Museum (Janjatiya Sangrahalaya), opened in 2013 and known for galleries created by tribal artists themselves, is in which city?",
    options: ["Bhopal", "Jabalpur", "Chhindwara", "Mandla"],
    answer: 0,
    explanation: "The museum is on Shyamla Hills in Bhopal. Its galleries on tribal life, aesthetics, the spirit world and games were built by artists from MP's major tribes. It is separate from the Indira Gandhi Rashtriya Manav Sangrahalaya, which is also in Bhopal."
  },
  {
    id: 23,
    question: "Under which body does the Indira Gandhi Rashtriya Manav Sangrahalaya (National Museum of Mankind), Bhopal function?",
    options: ["Union Ministry of Tribal Affairs", "MP Department of Culture", "Union Ministry of Culture", "Archaeological Survey of India"],
    answer: 2,
    explanation: "IGRMS is an autonomous organisation of the Union Ministry of Culture. It began in Delhi in 1977 and moved to Bhopal in 1979. The MP Tribal Museum, by contrast, is a state institution."
  },
  {
    id: 24,
    question: "What is the Indira Gandhi Rashtriya Manav Sangrahalaya in Bhopal especially noted for?",
    options: ["Its collection of Mughal miniatures", "The largest coin collection in India", "Dinosaur fossils of the Narmada valley", "Open-air exhibitions of life-size tribal and rural dwellings from across India"],
    answer: 3,
    explanation: "IGRMS covers a large campus on Shyamla Hills and is famous for open-air exhibitions such as the Tribal Habitat, coastal, desert and Himalayan villages, and rock art. Communities from across India built the dwellings themselves, using traditional materials."
  },
  {
    id: 25,
    question: "Vanya Prakashan, which publishes books and material on tribal life, culture and languages, works under which department of the MP government?",
    options: ["Culture Department", "Tribal Affairs (Janjatiya Karya) Department", "Forest Department", "School Education Department"],
    answer: 1,
    explanation: "Vanya Prakashan is the publication unit of MP's Tribal Affairs Department. It documents and spreads tribal culture, literature and art. The Adivasi Lok Kala evam Boli Vikas Academy, by contrast, works under the Culture Department's MP Sanskriti Parishad."
  },
  {
    id: 26,
    question: "Which journal on folk and tribal culture is published by the Adivasi Lok Kala evam Boli Vikas Academy of MP?",
    options: ["Chaumasa", "Vagarth", "Poorvagrah", "Kala Samay"],
    answer: 0,
    explanation: "'Chaumasa' is the academy's journal on folk and tribal arts, literature and dialects. 'Poorvagrah' is the literary journal of Bharat Bhavan, and Vagarth is Bharat Bhavan's poetry wing. The academy is part of the MP Sanskriti Parishad."
  },
  {
    id: 27,
    question: "Lokrang, a festival of folk and tribal arts held every year around Republic Day (26 January), takes place in which city?",
    options: ["Khajuraho", "Ujjain", "Gwalior", "Bhopal"],
    answer: 3,
    explanation: "Lokrang has been held in Bhopal since the 1980s, organised by the Adivasi Lok Kala evam Boli Vikas Academy. It brings together folk and tribal dance, music, crafts and food from MP and other states."
  },
  {
    id: 28,
    question: "Bharat Bhavan, the multi-arts centre on the Upper Lake in Bhopal, was designed by which architect and inaugurated in which year?",
    options: ["Laurie Baker, 1975", "B.V. Doshi, 1985", "Charles Correa, 1982", "Raj Rewal, 1990"],
    answer: 2,
    explanation: "Charles Correa designed Bharat Bhavan as a terraced building that steps down to the Upper Lake. Prime Minister Indira Gandhi inaugurated it in February 1982. It brings visual arts, theatre, poetry, music and cinema together on one campus."
  },
  {
    id: 29,
    question: "Which wing of Bharat Bhavan is its museum of fine arts, holding both urban contemporary art and tribal and folk art?",
    options: ["Rangmandal", "Roopankar", "Vagarth", "Anhad"],
    answer: 1,
    explanation: "Roopankar, first directed by J. Swaminathan, was one of the first Indian museums to show tribal art next to modern urban art as equals. Rangmandal is theatre, Vagarth is poetry and literature, and Anhad is music."
  },
  {
    id: 30,
    question: "Which wing of Bharat Bhavan is its repertory theatre company, first headed by B.V. Karanth?",
    options: ["Rangmandal", "Chhavi", "Vagarth", "Anhad"],
    answer: 0,
    explanation: "Rangmandal is Bharat Bhavan's theatre repertory, and B.V. Karanth was its first director. Chhavi is the cinema wing, Vagarth the poetry wing, and Anhad the music wing."
  },
  {
    id: 31,
    question: "Women of Malwa dance at weddings and festivals with earthen pots balanced on their heads, to the beat of the dhol. Which folk dance is this?",
    options: ["Rai", "Badhai", "Kaathi", "Matki"],
    answer: 3,
    explanation: "Matki is the women's folk dance of Malwa, named after the earthen pot (matki). Aada and Khada Nach are its forms. Rai and Badhai belong to Bundelkhand, and Kaathi to Nimar."
  },
  {
    id: 32,
    question: "Which traditional folk theatre of Malwa, which originated in Ujjain and features sung dialogue on a raised stage, is named after that stage?",
    options: ["Maach", "Swang", "Nautanki", "Tamasha"],
    answer: 0,
    explanation: "Maach (meaning a raised platform) is Malwa's folk musical theatre, which developed in Ujjain. Its plays are sung in Malvi with dhol accompaniment. Swang belongs to Bundelkhand, Nautanki to Uttar Pradesh, and Tamasha to Maharashtra."
  },
  {
    id: 33,
    question: "On festivals, women of Malwa draw auspicious geometric designs on floors and walls in white chalk (khadiya) over a red ochre (geru) base. What is this folk art called?",
    options: ["Sanjhi", "Pithora", "Mandana", "Digna"],
    answer: 2,
    explanation: "Mandana is the floor and wall art of Malwa and the Rajasthan border, made with khadiya on a geru-coated surface, especially at Diwali. Pithora is Bhilala ritual art, and Digna is Gond wall decoration."
  },
  {
    id: 34,
    question: "During Pitru Paksha, unmarried girls of Malwa make figures on walls with cow-dung, flowers and leaves, and worship them each evening with songs. What is this tradition called?",
    options: ["Mandana", "Sanjha", "Rangoli", "Alpana"],
    answer: 1,
    explanation: "Sanjha (or Sanjhi) is made on the walls over the sixteen days of the Shraddh period, with a new design each day, and girls sing Sanjha songs to the goddess. Mandana is festival floor art, and Alpana is the floor art of Bengal."
  },
  {
    id: 35,
    question: "Which is the most important folk festival of Nimar, in which women worship Ranubai and Dhaniyar Raja, forms of Gauri and Shiva, with songs?",
    options: ["Bhagoria", "Madai", "Karma", "Gangaur"],
    answer: 3,
    explanation: "Nimar's Gangaur is celebrated in Chaitra with the worship of Ranubai (Gauri) and Dhaniyar Raja (Shiva) and with Gangaur songs and dances. Bhagoria is a Bhil festival, while Madai and Karma are Gond festivals."
  },
  {
    id: 36,
    question: "The Kaathi dance-drama belongs to which folk region of Madhya Pradesh?",
    options: ["Nimar", "Bundelkhand", "Baghelkhand", "Gwalior-Chambal"],
    answer: 0,
    explanation: "Kaathi is a traditional dance of Nimar, performed by groups of men in costume who travel from village to village over a long season. It is linked with the worship of the goddess. Rai, Badhai and Diwari belong to Bundelkhand."
  },
  {
    id: 37,
    question: "Which saint-poet of Nimar has devotional songs that are a treasured part of Nimadi literature, and has a thermal power project in Khandwa district named after him?",
    options: ["Isuri", "Jagnik", "Sant Singaji", "Padmakar"],
    answer: 2,
    explanation: "Sant Singaji was a 16th-century saint of Nimar whose Nimadi bhajans are still sung widely. A fair is held at his samadhi, and the Shri Singaji Thermal Power Project is named after him. Isuri was a Bundeli poet, Jagnik composed the Alha, and Padmakar was a riti-kaal poet of Sagar."
  },
  {
    id: 38,
    question: "In which folk region does the Rai dance belong? It is performed by Bedni women dancers to the beat of the mridang played by men.",
    options: ["Malwa", "Bundelkhand", "Nimar", "Baghelkhand"],
    answer: 1,
    explanation: "Rai is the best-known folk dance of Bundelkhand, performed at celebrations, fairs and childbirth festivities. The female dancer, traditionally a Bedni, dances while men play the mridang and sing. It is especially popular in Sagar, Damoh, Chhatarpur and Tikamgarh."
  },
  {
    id: 39,
    question: "Ram Sahay Pandey of Sagar, awarded the Padma Shri in 2022, is famous for which folk art?",
    options: ["Matki dance", "Badhai dance", "Alha singing", "Rai dance"],
    answer: 3,
    explanation: "Ram Sahay Pandey spent decades performing and popularising the Rai dance of Bundelkhand, both in India and abroad. He is a rare male artist celebrated in a form traditionally led by Bedni women dancers."
  },
  {
    id: 40,
    question: "Which Bundelkhand folk dance is performed to celebrate auspicious events such as the birth of a child, a wedding, or the fulfilment of a vow?",
    options: ["Matki", "Kaathi", "Badhai", "Lahangi"],
    answer: 2,
    explanation: "Badhai means congratulations, and the dance is performed by men and women in colourful dress to celebrate good news. Matki is a Malwa dance, Kaathi a Nimar dance, and Lahangi a Sahariya dance."
  },
  {
    id: 41,
    question: "The heroic ballad of Alha and Udal, sung across Bundelkhand, is traditionally attributed to which poet?",
    options: ["Jagnik", "Isuri", "Chand Bardai", "Padmakar"],
    answer: 0,
    explanation: "Jagnik, the court poet of the Chandela king Parmardi Dev (Parmal) of Mahoba, is credited with the Alha Khand, which describes the exploits of the brothers Alha and Udal. Chand Bardai wrote the Prithviraj Raso about their rival, Prithviraj Chauhan."
  },
  {
    id: 42,
    question: "In which season is the Alha traditionally sung in Bundelkhand?",
    options: ["Holi (Phalgun)", "The rainy season (Sawan)", "Winter (Paush)", "Summer (Jyeshtha)"],
    answer: 1,
    explanation: "Alha singing is closely tied to the monsoon, especially the month of Sawan, when groups gather in villages to hear the ballad sung to the beat of the dholak. Its rousing verses about valour are a central part of Bundeli folk literature."
  },
  {
    id: 43,
    question: "Isuri, the most celebrated folk poet of Bundeli, is famous for which song form?",
    options: ["Alha", "Birha", "Dadaria", "Phag"],
    answer: 3,
    explanation: "Isuri's 'Phag' (Isuri ki Phagen) are short, lyrical Bundeli songs of love, beauty and rural life, still widely sung at Holi. Alha is Jagnik's heroic ballad, Birha is an Ahir song form, and Dadaria are Gond-Baiga love songs."
  },
  {
    id: 44,
    question: "Which vigorous dance is performed by Ahir (Yadav) men of Bundelkhand with sticks, around the festival of lights?",
    options: ["Matki", "Rai", "Diwari", "Kaathi"],
    answer: 2,
    explanation: "Diwari dance takes its name from Diwali. Ahir and other cattle-herding men perform it with sticks in mock-combat movements in the days after Diwali. It is one of Bundelkhand's main folk dances."
  },
  {
    id: 45,
    question: "Birha folk songs, traditionally sung by Ahirs, are a prominent part of the folk culture of which region of MP?",
    options: ["Baghelkhand", "Malwa", "Nimar", "Gwalior-Chambal"],
    answer: 0,
    explanation: "Birha is a popular Ahir song tradition of Baghelkhand (Rewa, Satna, Sidhi), sung in Bagheli. The songs often deal with separation and longing. The same form is also found in the Bhojpuri belt of eastern Uttar Pradesh."
  },
  {
    id: 46,
    question: "What does the Khajuraho Dance Festival, held every February since 1975, feature?",
    options: ["Only folk dances of Bundelkhand", "Tribal dances of Madhya Pradesh", "Hindustani vocal music recitals", "Indian classical dance forms performed against the backdrop of the Western Group of temples"],
    answer: 3,
    explanation: "The festival, organised by MP's Culture Department, presents Kathak, Bharatanatyam, Odissi, Kuchipudi, Manipuri, Mohiniyattam and other classical forms in front of the floodlit Western Group of temples in Chhatarpur district. The temples are a UNESCO World Heritage Site."
  },
  {
    id: 47,
    question: "In which city is the Tansen Samaroh, a festival of Hindustani classical music, held every December near the tomb of Tansen?",
    options: ["Ujjain", "Gwalior", "Maihar", "Indore"],
    answer: 1,
    explanation: "The Tansen Samaroh is held at Hazira in Gwalior, beside the tombs of Tansen and his spiritual guide Muhammad Ghaus. It began in 1924, and the 100th edition was celebrated in 2024. The national Tansen Samman is presented at the festival."
  },
  {
    id: 48,
    question: "Where and when is the Kalidas Samaroh, devoted to the Sanskrit poet-dramatist Kalidasa, held every year?",
    options: ["Ujjain, on Dev Prabodhini Ekadashi", "Gwalior, in December", "Khajuraho, in February", "Bhopal, on 26 January"],
    answer: 0,
    explanation: "The Akhil Bharatiya Kalidas Samaroh is held in Ujjain, the city most associated with Kalidasa, beginning on Dev Prabodhini Ekadashi (Kartik Shukla 11). It started in 1958 and features Sanskrit drama, classical arts and scholarly sessions. The Kalidas Samman is MP's major national arts award."
  },
  {
    id: 49,
    question: "Prahlad Singh Tipanya, awarded the Padma Shri in 2011, is a leading exponent of which folk tradition?",
    options: ["Bundeli Alha singing", "Nimadi Gangaur songs", "The Kabir bhajan tradition of Malwa", "Bagheli Birha singing"],
    answer: 2,
    explanation: "Prahlad Singh Tipanya of Malwa sings Kabir's poetry in the Malwi folk style to the tambura and other instruments. Kabir singing is a living tradition in Dewas, Ujjain, Shajapur and nearby districts."
  },
  {
    id: 50,
    question: "Which folk theatre form, with satire, music and improvised dialogue, is popular in Bundelkhand?",
    options: ["Maach", "Tamasha", "Yakshagana", "Swang"],
    answer: 3,
    explanation: "Swang is the popular folk theatre of Bundelkhand, performed at village festivals with humour, songs and social satire. Maach is Malwa's folk theatre, Tamasha belongs to Maharashtra, and Yakshagana to Karnataka."
  }
];

export default questions;

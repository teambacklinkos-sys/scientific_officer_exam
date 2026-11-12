const questions = [
  {
    id: 1,
    question: "The Bhimbetka rock shelters, a UNESCO World Heritage Site, are located in which district of Madhya Pradesh?",
    options: ["Raisen", "Sehore", "Vidisha", "Narmadapuram"],
    answer: 0,
    explanation: "Bhimbetka lies in Raisen district, about 45 km south of Bhopal, on the southern edge of the Vindhya hills. It has hundreds of rock shelters, many of them painted, with occupation going back to the Lower Palaeolithic. It is often wrongly placed in Bhopal or Sehore district."
  },
  {
    id: 2,
    question: "Who discovered the Bhimbetka rock shelters as a prehistoric rock-art site in 1957?",
    options: ["V.S. Wakankar", "H.D. Sankalia", "Alexander Cunningham", "R.D. Banerji"],
    answer: 0,
    explanation: "Vishnu Shridhar Wakankar spotted the shelters in 1957 while travelling by train and later documented them in detail. He is called the father of Indian rock-art studies. H.D. Sankalia is known for excavating Navdatoli, and Cunningham for surveys of Sanchi and Bharhut."
  },
  {
    id: 3,
    question: "In which year were the Rock Shelters of Bhimbetka inscribed on the UNESCO World Heritage List?",
    options: ["1989", "1986", "2003", "2004"],
    answer: 2,
    explanation: "Bhimbetka was inscribed in 2003 as a cultural site. Among MP's other sites, Khajuraho was inscribed in 1986 and Sanchi in 1989. 2004 is the year Champaner-Pavagadh in Gujarat was listed."
  },
  {
    id: 4,
    question: "The cupules (cup-shaped hollows) in the 'Auditorium Cave' at Bhimbetka are important because they are considered to be among the world's oldest known:",
    options: ["Burial chambers", "Petroglyphs (rock markings)", "Pottery kilns", "Copper smelting pits"],
    answer: 1,
    explanation: "The cupules in the Auditorium Cave are linked to Lower Palaeolithic (Acheulian) levels. Researchers such as R.G. Bednarik treat them as some of the oldest petroglyphs known anywhere. They are markings made on rock, not structures or industrial features."
  },
  {
    id: 5,
    question: "The fossil skull known as 'Narmada Man' was found at Hathnora, which lies in which district?",
    options: ["Raisen", "Sehore", "Dewas", "Jabalpur"],
    answer: 1,
    explanation: "Hathnora is on the north bank of the Narmada in Budhni tehsil of Sehore district. Arun Sonakia of the Geological Survey of India found the skull cap there in December 1982, during GSI survey work in the Hoshangabad area; the village itself is about 35 km east of Narmadapuram town, across the river in Sehore district. It is still the only hominin fossil of its kind from the Indian subcontinent."
  },
  {
    id: 6,
    question: "Arun Sonakia, who found the Hathnora skull in 1982, first classified 'Narmada Man' as:",
    options: ["Homo habilis", "Australopithecus", "Homo neanderthalensis", "Homo erectus"],
    answer: 3,
    explanation: "Sonakia named the fossil Homo erectus narmadensis. Later studies, notably by K.A.R. Kennedy, reclassified it as archaic Homo sapiens. It was never assigned to Australopithecus or Homo habilis, which are known only from Africa."
  },
  {
    id: 7,
    question: "Adamgarh hill, which along with Bagor in Rajasthan has given some of the earliest evidence of animal domestication in India, lies near which town?",
    options: ["Narmadapuram (Hoshangabad)", "Raisen", "Mandla", "Jabalpur"],
    answer: 0,
    explanation: "Adamgarh is a group of rock shelters next to Narmadapuram (Hoshangabad) town on the Narmada. R.V. Joshi's excavations in the 1960s found Mesolithic microliths with bones of domesticated animals. Adamgarh and Bagor are the standard textbook examples of early domestication."
  },
  {
    id: 8,
    question: "An excavation at a rock shelter in the Vindhyan region yields large numbers of tiny geometric blades, lunates and triangles made of chalcedony, along with animal bones but no pottery. These finds most likely belong to which period?",
    options: ["Mesolithic", "Lower Palaeolithic", "Chalcolithic", "Early Historic"],
    answer: 0,
    explanation: "Microliths, tiny geometric tools often hafted to make composite weapons, are the defining feature of the Mesolithic. Bhimbetka and Adamgarh have produced them in large numbers. Lower Palaeolithic sites have heavy hand axes, and Chalcolithic sites would also have painted pottery and copper."
  },
  {
    id: 9,
    question: "The Lower Palaeolithic tools found in the Narmada valley and at Bhimbetka mainly belong to which tool tradition?",
    options: ["Microlithic", "Acheulian (hand axes and cleavers)", "Neolithic ground-stone", "Upper Palaeolithic blade-burin"],
    answer: 1,
    explanation: "Lower Palaeolithic levels in the Narmada valley and at Bhimbetka contain Acheulian bifaces: hand axes, cleavers and choppers. The Narmada gravels are among India's richest sources of these tools. Microliths come later, in the Mesolithic, and blade-burin industries belong to the Upper Palaeolithic."
  },
  {
    id: 10,
    question: "At a site in Madhya Pradesh, an archaeologist finds ground and polished stone celts (axes) with no metal objects. Which cultural stage do these finds most clearly indicate?",
    options: ["Lower Palaeolithic", "Mesolithic", "Iron Age", "Neolithic"],
    answer: 3,
    explanation: "Grinding and polishing stone into celts is the hallmark of the Neolithic, when farming and settled life began. Palaeolithic and Mesolithic tools were made by flaking, not grinding. Iron Age sites would have iron objects."
  },
  {
    id: 11,
    question: "The painted rock shelters around Pachmarhi belong to which mountain range?",
    options: ["Satpura", "Vindhya", "Aravalli", "Kaimur"],
    answer: 0,
    explanation: "Pachmarhi is in the Mahadeo hills of the Satpura range, in Narmadapuram district. Its shelters hold many paintings of hunting, battle and daily life. Bhimbetka, by contrast, is in the Vindhya hills north of the Narmada."
  },
  {
    id: 12,
    question: "Kayatha, the type site of the Kayatha Chalcolithic culture, is in which district?",
    options: ["Dewas", "Shajapur", "Ujjain", "Mandsaur"],
    answer: 2,
    explanation: "Kayatha is on the Chhoti Kali Sindh river in Ujjain district. V.S. Wakankar first explored it, and Deccan College later excavated it more fully. The Kayatha culture gave its name to the earliest Chalcolithic phase of Malwa."
  },
  {
    id: 13,
    question: "Which is regarded as the earliest Chalcolithic culture of the Malwa region of Madhya Pradesh?",
    options: ["Kayatha culture", "Malwa culture", "Jorwe culture", "Painted Grey Ware culture"],
    answer: 0,
    explanation: "The Kayatha culture, dated to roughly 2400–2000 BCE, comes before the Malwa culture in the sequence at Kayatha and other sites. It is known for sturdy chocolate-slipped pottery and copper tools. Jorwe is a later Chalcolithic culture centred in Maharashtra, and Painted Grey Ware belongs to the Gangetic plains."
  },
  {
    id: 14,
    question: "The Chalcolithic site of Navdatoli, opposite Maheshwar, was excavated mainly by:",
    options: ["B.B. Lal", "V.S. Wakankar", "H.D. Sankalia", "Mortimer Wheeler"],
    answer: 2,
    explanation: "H.D. Sankalia of Deccan College led the Maheshwar–Navdatoli excavations in the 1950s, working with S.B. Deo and Z.D. Ansari. They found a farming village with painted pottery, mud houses and copper tools. Wakankar is better known for Bhimbetka and Kayatha."
  },
  {
    id: 15,
    question: "On the bank of which river does the protohistoric site of Navdatoli lie?",
    options: ["Chambal", "Kshipra", "Betwa", "Narmada"],
    answer: 3,
    explanation: "Navdatoli is on the south bank of the Narmada, facing Maheshwar in Khargone district. The fertile Narmada valley supported early farming villages there. Kayatha, by contrast, is on the Chhoti Kali Sindh."
  },
  {
    id: 16,
    question: "Navdatoli is a key site of a Chalcolithic culture named after the region of western Madhya Pradesh in which it lies. That culture is the:",
    options: ["Ahar culture", "Jorwe culture", "Malwa culture", "Kayatha culture"],
    answer: 2,
    explanation: "The Malwa culture (c. 1700–1400 BCE) is named after the Malwa plateau. Navdatoli is its best-known site, and its typical pottery is black-painted on a buff or orange slip. Ahar and Jorwe are named after sites in Rajasthan and Maharashtra, and Kayatha is also named after a site, not a region."
  },
  {
    id: 17,
    question: "Eran, an important site with remains from the Chalcolithic to the Gupta period, is on the Bina river in which district?",
    options: ["Vidisha", "Damoh", "Sagar", "Guna"],
    answer: 2,
    explanation: "Eran is in Sagar district on the Bina river, a tributary of the Betwa. It has Chalcolithic levels, some of the earliest punch-marked and inscribed coins, and several important Gupta and Huna inscriptions. It is a frequent exam favourite."
  },
  {
    id: 18,
    question: "What was the ancient name of Eran, as found in inscriptions and on coins?",
    options: ["Dashapura", "Airikina", "Kakanadabota", "Mahishmati"],
    answer: 1,
    explanation: "Eran appears as Airikina (Erakina) in its inscriptions and on early local coins. Dashapura is the ancient name of Mandsaur, Kakanadabota of Sanchi, and Mahishmati of Maheshwar."
  },
  {
    id: 19,
    question: "Which inscription is regarded as the earliest epigraphic evidence of the practice of sati in India?",
    options: ["Mandsaur inscription of Yashodharman", "Junagadh inscription of Rudradaman", "Allahabad pillar inscription of Samudragupta", "Eran inscription of Bhanugupta (510 CE)"],
    answer: 3,
    explanation: "The Eran pillar inscription of Bhanugupta (Gupta year 191, 510 CE) records that the general Goparaja died in battle and his wife joined him on the funeral pyre. This makes it the earliest dated epigraphic reference to sati. The other inscriptions record conquests and public works."
  },
  {
    id: 20,
    question: "The colossal Varaha (boar) image at Eran carries an inscription dated to the first regnal year of which Huna ruler?",
    options: ["Toramana", "Mihirakula", "Kidara", "Khingila"],
    answer: 0,
    explanation: "The Eran Varaha inscription is dated to the first year of Toramana's reign. It shows that the Hunas had taken eastern Malwa from the Guptas by the early sixth century. Toramana's son Mihirakula is known from a Gwalior inscription and was later defeated by Yashodharman."
  },
  {
    id: 21,
    question: "According to tradition, the southern capital of the Avanti mahajanapada was:",
    options: ["Mahishmati", "Vidisha", "Dashapura", "Tripuri"],
    answer: 0,
    explanation: "Avanti was divided by the Vindhyas: Ujjayini was the capital of the northern part and Mahishmati of the southern part. Mahishmati is usually identified with Maheshwar (some scholars say Mandhata) on the Narmada. Tripuri became prominent much later under the Kalachuris."
  },
  {
    id: 22,
    question: "What was the capital of the Chedi mahajanapada?",
    options: ["Ujjayini", "Mahishmati", "Kaushambi", "Suktimati"],
    answer: 3,
    explanation: "Chedi, which corresponds roughly to the Bundelkhand region, had its capital at Suktimati (Sotthivatinagara in Pali texts). Ujjayini and Mahishmati were the capitals of Avanti, and Kaushambi was the capital of Vatsa."
  },
  {
    id: 23,
    question: "Which ruler of Avanti was a contemporary of the Buddha and is remembered in Buddhist texts for his fierce temper?",
    options: ["Bimbisara", "Chanda Pradyota", "Udayana", "Prasenajit"],
    answer: 1,
    explanation: "Chanda Pradyota of the Pradyota dynasty ruled Avanti from Ujjayini in the Buddha's time. Buddhist sources say Bimbisara sent the physician Jivaka to treat him. Bimbisara ruled Magadha, Udayana Vatsa and Prasenajit Kosala."
  },
  {
    id: 24,
    question: "Avanti was finally annexed to the kingdom of Magadha by:",
    options: ["Ajatashatru", "Bimbisara", "Mahapadma Nanda", "Shishunaga"],
    answer: 3,
    explanation: "Shishunaga ended the Pradyota dynasty and annexed Avanti, which removed Magadha's main rival. Ajatashatru had fortified Rajagriha against a threatened Avanti attack, but he did not conquer it."
  },
  {
    id: 25,
    question: "Before his accession, the Mauryan prince Ashoka served as viceroy (governor) at:",
    options: ["Tosali", "Ujjain", "Suvarnagiri", "Pataliputra"],
    answer: 1,
    explanation: "Bindusara made Ashoka viceroy of Avanti, with his seat at Ujjain. Ujjain was the headquarters of the western province of the Mauryan empire. Tosali and Suvarnagiri were the provincial seats of Kalinga and the south."
  },
  {
    id: 26,
    question: "Devi, Ashoka's wife and the mother of Mahendra and Sanghamitra, was the daughter of a merchant of which city?",
    options: ["Ujjain", "Sanchi", "Vidisha", "Tripuri"],
    answer: 2,
    explanation: "The Sri Lankan chronicles say Ashoka married Devi, a merchant's daughter from Vidisha (Vedisa), while he was in Avanti. Mahendra is said to have visited her at the Vedisagiri monastery before leaving for Sri Lanka. This link helps explain Ashoka's patronage of Sanchi near Vidisha."
  },
  {
    id: 27,
    question: "The Ashokan minor rock edict at Rupnath is in which district of Madhya Pradesh?",
    options: ["Datia", "Sehore", "Katni", "Shahdol"],
    answer: 2,
    explanation: "Rupnath is in Bahoriband tehsil of Katni district. Older books give Jabalpur, because Katni was carved out of Jabalpur in 1998. Ashokan minor rock edicts are also found at Gujarra (Datia) and Saru Maru (Sehore)."
  },
  {
    id: 28,
    question: "The Gujarra minor rock edict in Datia district is especially important because it:",
    options: ["Describes the Kalinga war", "Mentions Ashoka by his personal name", "Is written in Greek and Aramaic", "Records Ashoka's conversion by Upagupta"],
    answer: 1,
    explanation: "Most edicts call the emperor only 'Devanampiya Piyadasi'. Gujarra is one of the few, along with Maski, Nittur and Udegolam, that uses the name Ashoka. The Kalinga war is described in Major Rock Edict XIII, and the Greek-Aramaic edicts are from Kandahar."
  },
  {
    id: 29,
    question: "Saru Maru (Pangoraria), the site of an Ashokan minor rock edict and Buddhist remains, is in which district?",
    options: ["Raisen", "Datia", "Katni", "Sehore"],
    answer: 3,
    explanation: "Saru Maru near Pangoraria village in Budhni tehsil of Sehore district has an Ashokan minor rock edict. Rupnath is in Katni and Gujarra is in Datia."
  },
  {
    id: 30,
    question: "Ashoka's pillar inscription at Sanchi, also found at Sarnath and Allahabad, is known by what name?",
    options: ["The Kalinga Edict, on the treatment of frontier people", "The Rummindei Edict, on tax remission", "The Dhamma Mahamatta Edict, on appointing officials", "The Schism Edict, warning against splitting the Sangha"],
    answer: 3,
    explanation: "The Sanchi pillar carries the Schism Edict. It orders that monks or nuns who split the Buddhist Sangha are to be expelled and made to wear white robes. Copies exist at Sarnath and on the Allahabad (Kaushambi) pillar."
  },
  {
    id: 31,
    question: "The Great Stupa at Sanchi, built in brick under Ashoka, was enlarged with a stone casing, railings and a harmika during the rule of the:",
    options: ["Satavahanas", "Shungas", "Guptas", "Kushanas"],
    answer: 1,
    explanation: "In the 2nd century BCE, under the Shungas, the Ashokan brick stupa was roughly doubled in size, faced with stone, and given a plain railing and an umbrella. The four carved toranas (gateways) were added later, in the Satavahana period."
  },
  {
    id: 32,
    question: "An inscription on the southern gateway (torana) of the Great Stupa at Sanchi records a gift by Ananda, foreman of the artisans of 'Rajan Siri Satakarni'. To which dynasty did this king belong?",
    options: ["Shunga", "Satavahana", "Gupta", "Western Kshatrapa"],
    answer: 1,
    explanation: "Siri Satakarni was a Satavahana king, so this inscription dates the carved gateways to Satavahana rule over eastern Malwa in the 1st century BCE. The Shungas had built the stone casing earlier. The toranas are carved with Jataka stories and scenes from the Buddha's life."
  },
  {
    id: 33,
    question: "James Prinsep's decipherment of the Brahmi script in 1837 relied heavily on short donative inscriptions from:",
    options: ["Bharhut", "Amaravati", "Sarnath", "Sanchi"],
    answer: 3,
    explanation: "Prinsep noticed that many short records on the Sanchi railings ended with the same two characters, which he read as 'danam' (gift). This gave him the key to reading Brahmi and hence the Ashokan edicts. Bharhut was discovered only in 1873."
  },
  {
    id: 34,
    question: "Heliodorus, who set up the Garuda pillar at Besnagar (Vidisha), was the ambassador of which Indo-Greek king?",
    options: ["Antialcidas", "Menander", "Demetrius", "Strato"],
    answer: 0,
    explanation: "The inscription says Heliodorus, son of Dion and a native of Taxila, came as envoy of the Indo-Greek king Antialcidas to the court of King Kashiputra Bhagabhadra. It dates to the late 2nd century BCE, in the Shunga period. Menander (Milinda) is better known for his dialogues with the monk Nagasena."
  },
  {
    id: 35,
    question: "The Heliodorus pillar (Khamba Baba) at Vidisha was set up as a Garudadhvaja in honour of which deity, showing a Greek envoy's adoption of the Bhagavata faith?",
    options: ["Shiva", "Surya", "Buddha", "Vasudeva"],
    answer: 3,
    explanation: "The inscription calls the pillar a Garuda standard of Vasudeva, god of gods, and calls Heliodorus a Bhagavata, a devotee of Vasudeva-Krishna. It is one of the earliest pieces of evidence for the Bhagavata (early Vaishnava) cult. Locally the pillar is worshipped as Khamba Baba."
  },
  {
    id: 36,
    question: "The Bharhut stupa, whose railing inscription mentions the 'reign of the Shungas', was located in which present-day district?",
    options: ["Rewa", "Panna", "Satna", "Sidhi"],
    answer: 2,
    explanation: "Bharhut is in Satna district. Alexander Cunningham found its remains in 1873. Most of the carved railing and gateway is now in the Indian Museum, Kolkata, and its reliefs carry many labels identifying Jataka scenes."
  },
  {
    id: 37,
    question: "Kalidasa's play Malavikagnimitram has as its hero the Shunga prince Agnimitra, who governed from which city?",
    options: ["Vidisha", "Ujjain", "Pataliputra", "Mahishmati"],
    answer: 0,
    explanation: "Agnimitra, son of Pushyamitra Shunga, ruled as viceroy at Vidisha, and the play is set at his court. It is one of the literary sources for Shunga history, including a war with Vidarbha and a Yavana (Greek) encounter. Vidisha was a major Shunga centre, as the Heliodorus pillar also shows."
  },
  {
    id: 38,
    question: "The Nasik inscription of Gautami Balashri credits Gautamiputra Satakarni with ruling 'Akara' and 'Avanti'. These two regions correspond to:",
    options: ["Gujarat and Saurashtra", "East and West Malwa", "Vidarbha and Konkan", "Bundelkhand and Baghelkhand"],
    answer: 1,
    explanation: "Akara was eastern Malwa, the Vidisha region, and Avanti was western Malwa, the Ujjain region. Gautamiputra won them back after defeating the Kshaharata ruler Nahapana. Saurashtra and Vidarbha appear separately in the same list as Suratha and Vidabha."
  },
  {
    id: 39,
    question: "Which Western Kshatrapa ruler, called 'Tiastenes' by Ptolemy, ruled with his capital at Ujjain (Ozene)?",
    options: ["Nahapana", "Chashtana", "Rudrasimha III", "Bhumaka"],
    answer: 1,
    explanation: "Ptolemy's Geography names 'Tiastenes' at Ozene, who is identified with Chashtana, founder of the Kardamaka line of Western Kshatrapas. His grandson Rudradaman I made the dynasty famous. Nahapana and Bhumaka belonged to the earlier Kshaharata line."
  },
  {
    id: 40,
    question: "The Western Kshatrapa rule over Malwa and Gujarat ended when Chandragupta II defeated which ruler?",
    options: ["Rudrasimha III", "Nahapana", "Chashtana", "Rudradaman I"],
    answer: 0,
    explanation: "Around 400 CE Chandragupta II defeated Rudrasimha III, the last Western Kshatrapa. This brought Malwa, Gujarat and Saurashtra into the Gupta empire and gave Chandragupta the title 'Shakari'. Gupta silver coins in the Kshatrapa style followed."
  },
  {
    id: 41,
    question: "The Udayagiri caves near Vidisha are dated mainly to the reign of Chandragupta II. One cave inscription there records a Shaiva cave made by his minister Virasena, who held which post?",
    options: ["Commander of the cavalry", "Chief priest (purohita)", "Minister of peace and war (sandhivigrahika)", "Governor of Avanti"],
    answer: 2,
    explanation: "The Virasena inscription at Udayagiri says that Virasena (also called Shaba), a poet from Pataliputra who was Chandragupta II's sandhivigrahika (minister of peace and war), came there with the king during his campaigns. Another cave has an inscription dated 401 CE of a feudatory of Chandragupta II. Udayagiri is among the earliest groups of Hindu rock-cut shrines."
  },
  {
    id: 42,
    question: "The colossal relief in Cave 5 at Udayagiri near Vidisha shows which incarnation of Vishnu rescuing the earth goddess?",
    options: ["Varaha", "Narasimha", "Vamana", "Matsya"],
    answer: 0,
    explanation: "The Varaha panel at Udayagiri shows Vishnu as a boar-headed man lifting Bhudevi from the cosmic ocean, with rows of sages and gods around him. It is one of the finest early Gupta sculptures. Varaha imagery was also important at Eran nearby."
  },
  {
    id: 43,
    question: "Inscriptions on Jain tirthankara images found at Durjanpur near Vidisha are important because they confirm the historicity of which Gupta king?",
    options: ["Ramagupta", "Kachagupta", "Purugupta", "Ghatotkacha"],
    answer: 0,
    explanation: "Three Jain images from Durjanpur carry inscriptions naming Maharajadhiraja Ramagupta. Together with copper coins from the Vidisha–Eran area, they show that Ramagupta, Chandragupta II's elder brother in the play Devichandraguptam, really existed. Before these finds he was known only from literature."
  },
  {
    id: 44,
    question: "The Sondani victory pillars near Mandsaur record the victory of the Aulikara king Yashodharman over which Huna ruler?",
    options: ["Toramana", "Mihirakula", "Kidara", "Khingila"],
    answer: 1,
    explanation: "Yashodharman's Mandsaur (Sondani) pillar inscriptions, composed by the poet Vasula in the 530s CE, boast that Mihirakula paid homage at his feet. This was a major setback for Huna power in north India. Toramana, Mihirakula's father, is the king named on the Eran Varaha."
  },
  {
    id: 45,
    question: "The Mandsaur inscription composed by Vatsabhatti (436–437 CE) records that a guild of silk weavers from Lata built a temple dedicated to:",
    options: ["Vishnu", "Shiva", "Surya (the Sun god)", "Mahavira"],
    answer: 2,
    explanation: "The silk weavers' guild from Lata (south Gujarat) settled at Dashapura and built a temple of the Sun in 436 CE, under Kumaragupta I and his feudatory Bandhuvarman. It was repaired in 473 CE. The inscription is a key source on guilds and on the mobility of craftsmen in Gupta times."
  },
  {
    id: 46,
    question: "Dashapura, the ancient capital of the Aulikara rulers, is the present-day town of:",
    options: ["Dhar", "Dewas", "Ratlam", "Mandsaur"],
    answer: 3,
    explanation: "Dashapura is modern Mandsaur, on the Shivna river. The Aulikaras ruled from there in the 5th–6th centuries, and it is the findspot of the Yashodharman and silk weavers' inscriptions. Dhar was the later Paramara capital."
  },
  {
    id: 47,
    question: "In Kalidasa's Meghaduta, the exiled yaksha asks the cloud to make a detour from its northward path to see which city?",
    options: ["Pataliputra", "Ayodhya", "Ujjayini", "Kanchi"],
    answer: 2,
    explanation: "In Purvamegha, the yaksha urges the cloud to take a 'crooked path' to see Ujjayini and the Mahakala temple, even though it is out of the way. Vidisha and the Vetravati (Betwa) are also described. This is why Ujjain is so closely linked to Kalidasa."
  },
  {
    id: 48,
    question: "In ancient Indian astronomy, as in the Surya Siddhanta, which city served as the prime meridian for calculating longitude and time?",
    options: ["Pataliputra", "Varanasi", "Kanyakubja", "Ujjain"],
    answer: 3,
    explanation: "Indian astronomers took the meridian through Ujjain as zero longitude, much as Greenwich is used today. Ujjain's place in astronomy is reflected in its association with Varahamihira and, much later, in Jai Singh II's observatory (Vedh Shala). It also lies close to the Tropic of Cancer."
  },
  {
    id: 49,
    question: "The Buddhist Bagh caves, famous for murals in the same tradition as Ajanta, are on the Baghini river in which district?",
    options: ["Jhabua", "Alirajpur", "Dhar", "Barwani"],
    answer: 2,
    explanation: "The Bagh caves are in Kukshi tehsil of Dhar district and date to about the 5th–6th centuries CE. Their murals, painted on a mud-plaster base, are often compared with Ajanta. Many panels were moved to the Gwalior museum for conservation."
  },
  {
    id: 50,
    question: "The Parvati temple at Nachna-Kuthara, one of the earliest structural Hindu temples of the Gupta period, is in which district?",
    options: ["Satna", "Panna", "Damoh", "Chhatarpur"],
    answer: 1,
    explanation: "Nachna-Kuthara is in Panna district. Its Parvati temple has a square sanctum, an ambulatory and an upper storey, in the early Gupta style. The Gupta Shiva temple at Bhumara is in the neighbouring Satna district."
  }
];

export default questions;

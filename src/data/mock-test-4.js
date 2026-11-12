const questions = [
  {
    id: 1,
    question: "Asirgarh fort, historically called the 'key to the Deccan' because it guarded the route from the north into the peninsula, is in which district?",
    options: ["Chhindwara", "Khandwa", "Betul", "Burhanpur"],
    answer: 3,
    explanation: "Asirgarh stands on a Satpura ridge in Burhanpur district, commanding the pass between the Narmada and Tapti valleys. Akbar captured it in 1601, completing his conquest of Khandesh. Burhanpur also has the Shahi Qila and the Mughal-era Kundi Bhandara water system."
  },
  {
    id: 2,
    question: "The Heliodorus pillar at Besnagar (Vidisha), dedicated to Vasudeva, was erected by Heliodorus, an envoy sent by which Indo-Greek king?",
    options: ["Menander", "Antialcidas", "Demetrius", "Kanishka"],
    answer: 1,
    explanation: "Heliodorus came from Taxila as the ambassador of the Indo-Greek king Antialcidas to the court of Bhagabhadra, probably a Shunga ruler, around 113 BCE. Its inscription calls him a Bhagavata, so it is early evidence of a Greek following Vaishnavism. It is locally called the Khamba Baba."
  },
  {
    id: 3,
    question: "Orchha, known for its palaces and the Ram Raja temple, was founded in the early 16th century by which Bundela ruler?",
    options: ["Bir Singh Deo", "Rudra Pratap Singh", "Madhukar Shah", "Chhatrasal"],
    answer: 1,
    explanation: "Rudra Pratap Singh founded Orchha on the Betwa around 1531. Bir Singh Deo later built the Jahangir Mahal there to mark Jahangir's visit, and Madhukar Shah was a 16th-century ruler known for his devotion. Chhatrasal was the Bundela leader of Panna, a century later."
  },
  {
    id: 4,
    question: "Bhopal state was founded in the early 18th century by an Afghan soldier who had served in the Mughal army. He was",
    options: ["Bakht Buland Shah", "Hamidullah Khan", "Nawab Nazar Muhammad Khan", "Dost Mohammad Khan"],
    answer: 3,
    explanation: "Dost Mohammad Khan, a Pathan officer from Tirah, established himself at Islamnagar and Bhopal after Aurangzeb's death. Hamidullah Khan was the last ruling Nawab, whose state merged with India in 1949. Bakht Buland Shah was a Gond ruler of Deogarh."
  },
  {
    id: 5,
    question: "The Treaty of Doraha (1738), by which the Nizam ceded Malwa to the Marathas, followed whose victory over the Nizam near Bhopal?",
    options: ["Balaji Vishwanath", "Baji Rao I", "Balaji Baji Rao", "Madhav Rao I"],
    answer: 1,
    explanation: "Peshwa Baji Rao I besieged and defeated Nizam-ul-Mulk near Bhopal in December 1737, and the Treaty of Doraha (Duraha Sarai) followed in January 1738. Maratha control of Malwa was confirmed, and the Holkars and Scindias established themselves at Indore and Gwalior. Baji Rao died at Raverkhedi on the Narmada in 1740."
  },
  {
    id: 6,
    question: "Who was the first of the four Begums who ruled Bhopal State between 1819 and 1926?",
    options: ["Sikandar Begum", "Shah Jahan Begum", "Qudsia Begum", "Sultan Jahan Begum"],
    answer: 2,
    explanation: "Qudsia Begum (Gohar Begum) took charge in 1819 after her husband's death and built the Jama Masjid of Bhopal. She was followed by Sikandar Begum, Shah Jahan Begum and Sultan Jahan Begum. Sultan Jahan Begum abdicated in 1926 in favour of her son Hamidullah Khan."
  },
  {
    id: 7,
    question: "After a popular merger agitation (Vilinikaran Andolan), Bhopal State formally merged with the Indian Union on",
    options: ["15 August 1947", "26 January 1948", "1 June 1949", "1 November 1956"],
    answer: 2,
    explanation: "Nawab Hamidullah Khan resisted accession, but after the merger movement Bhopal was taken over by the Union on 1 June 1949 and run as a Chief Commissioner's (Part C) state. It became part of Madhya Pradesh on 1 November 1956, and Bhopal became the capital. 1 June is celebrated as Bhopal's merger day."
  },
  {
    id: 8,
    question: "The Gond kingdom of Deogarh, whose ruler Bakht Buland Shah is credited with founding Nagpur, had its seat in which present-day district of Madhya Pradesh?",
    options: ["Seoni", "Mandla", "Chhindwara", "Balaghat"],
    answer: 2,
    explanation: "Deogarh lies in Chhindwara district, and its Gond rulers controlled much of the Satpura region before the Marathas. Bakht Buland Shah shifted the centre of power towards Nagpur in the late 17th century. Garha-Mandla was the other great Gond kingdom, centred on Jabalpur and Mandla."
  },
  {
    id: 9,
    question: "The Bagh caves, whose Gupta-period murals resemble those of Ajanta, are located in which district of Madhya Pradesh?",
    options: ["Mandsaur", "Raisen", "Vidisha", "Dhar"],
    answer: 3,
    explanation: "The nine Buddhist Bagh caves lie on the bank of the Baghini river in Dhar district and date to about the 5th–6th centuries CE. Many of their paintings were damaged and some were moved to the Gwalior museum. Bagh is also known for its hand block print."
  },
  {
    id: 10,
    question: "The Sondhani pillar inscriptions at Mandsaur (ancient Dashapura) record the victory of King Yashodharman over",
    options: ["Harshavardhana", "the Huna ruler Mihirakula", "Pulakeshin II", "Skandagupta"],
    answer: 1,
    explanation: "Yashodharman of the Aulikara dynasty defeated the Huna king Mihirakula around 528–532 CE, and the Sondhani victory pillars celebrate it. Mandsaur was then an important centre in western Malwa. Skandagupta had fought the Hunas earlier, in the 450s."
  },
  {
    id: 11,
    question: "Diamonds in Panna district occur in which type of host rock?",
    options: ["Basalt", "Gneiss", "Laterite", "Kimberlite"],
    answer: 3,
    explanation: "Diamonds crystallise deep in the mantle and are carried up in kimberlite pipes, which are mined at Majhgawan in Panna; alluvial gravels derived from them are also worked. Madhya Pradesh is the only state with organised diamond production in India. Deccan basalt covers much of western MP but carries no diamonds."
  },
  {
    id: 12,
    question: "Malanjkhand, the site of India's largest open-cast copper mine operated by Hindustan Copper Limited, is in which district of Madhya Pradesh?",
    options: ["Mandla", "Balaghat", "Seoni", "Dindori"],
    answer: 1,
    explanation: "The Malanjkhand Copper Project in Balaghat district works a large porphyry-type copper deposit and makes MP one of India's leading copper-ore producers. Balaghat is also the main manganese district of the state, with mines around Bharweli and Ukwa. Mandla, Seoni and Dindori are neighbouring districts without a comparable copper mine."
  },
  {
    id: 13,
    question: "Madhya Pradesh is a leading producer of diaspore and pyrophyllite, which are used in refractories and ceramics. They are mined mainly in which group of districts?",
    options: ["Chhatarpur, Tikamgarh and Shivpuri", "Balaghat, Mandla and Seoni", "Jhabua, Alirajpur and Dhar", "Shahdol, Umaria and Anuppur"],
    answer: 0,
    explanation: "Diaspore and pyrophyllite occur in the Bundelkhand granite area, especially in Chhatarpur, Tikamgarh and Shivpuri, and MP and UP are India's main producers. Balaghat is known for manganese, and Shahdol–Umaria–Anuppur for coal. Jhabua has rock phosphate and dolomite."
  },
  {
    id: 14,
    question: "Vindhyachal Super Thermal Power Station, the largest coal-based power station of NTPC with a capacity of about 4,760 MW, is located in which district?",
    options: ["Khandwa", "Shahdol", "Betul", "Singrauli"],
    answer: 3,
    explanation: "Vindhyachal STPS is in Singrauli, the coal hub of MP, where Northern Coalfields Limited is headquartered. Singrauli is sometimes called India's energy capital because of its many pithead power plants. Satpura TPS is at Sarni (Betul) and Shri Singaji TPS is in Khandwa."
  },
  {
    id: 15,
    question: "Satpura Thermal Power Station, one of the oldest coal-based stations of the Madhya Pradesh Power Generating Company, is located at Sarni in which district?",
    options: ["Betul", "Khandwa", "Chhindwara", "Narmadapuram"],
    answer: 0,
    explanation: "Satpura TPS at Sarni in Betul district draws coal from the Pathakhera mines nearby. Shri Singaji TPS is at Dongalia in Khandwa district, and Amarkantak TPS is at Chachai in Anuppur. MPPGCL also runs hydel stations on the Narmada and Chambal."
  },
  {
    id: 16,
    question: "One of India's largest floating solar projects, with a planned capacity of about 600 MW, is being built on the reservoir of which dam in Khandwa district?",
    options: ["Gandhi Sagar", "Omkareshwar", "Bargi", "Tawa"],
    answer: 1,
    explanation: "The Omkareshwar floating solar park is on the Narmada reservoir behind the Omkareshwar dam, and its first phase was commissioned in 2024. Floating panels save land and reduce evaporation from the reservoir. Gandhi Sagar is on the Chambal, and Bargi and Tawa are in Jabalpur and Narmadapuram districts."
  },
  {
    id: 17,
    question: "Indira Sagar, one of India's largest reservoirs by storage, with a 1,000 MW hydroelectric station at Punasa (Khandwa), is on which river?",
    options: ["Chambal", "Betwa", "Son", "Narmada"],
    answer: 3,
    explanation: "Indira Sagar is the main storage dam of the Narmada Valley projects and is operated by NHDC. Omkareshwar, downstream, also generates hydropower. Bansagar is on the Son and Gandhi Sagar on the Chambal."
  },
  {
    id: 18,
    question: "Mandideep, a large industrial area near Bhopal with engineering and pharmaceutical units, lies in which district?",
    options: ["Sehore", "Rajgarh", "Vidisha", "Raisen"],
    answer: 3,
    explanation: "Mandideep is in Raisen district, just south-east of Bhopal. Govindpura is Bhopal's own industrial estate, Malanpur is in Bhind and Pithampur in Dhar. MP's industrial areas are developed by the MP Industrial Development Corporation."
  },
  {
    id: 19,
    question: "Which of these security printing units, producing Indian currency notes, is located in Madhya Pradesh?",
    options: ["Bank Note Press, Dewas", "Currency Note Press, Nashik", "Bharatiya Reserve Bank Note Mudran, Mysuru", "Security Printing Press, Hyderabad"],
    answer: 0,
    explanation: "The Bank Note Press at Dewas, set up in 1974 and now run by the Security Printing and Minting Corporation of India (SPMCIL), prints currency notes. The Security Paper Mill at Narmadapuram (Hoshangabad) makes the paper for notes. Nashik, Mysuru and Hyderabad are outside MP."
  },
  {
    id: 20,
    question: "Bina Refinery, Madhya Pradesh's only crude oil refinery, is located in which district?",
    options: ["Guna", "Sagar", "Vidisha", "Raisen"],
    answer: 1,
    explanation: "Bina Refinery in Sagar district was built by Bharat Oman Refineries Ltd and is now owned by BPCL. It gets crude through a pipeline from the Vadinar terminal on the Gujarat coast. A petrochemical complex is being added there."
  },
  {
    id: 21,
    question: "The Government Opium and Alkaloid Works, which processes licit opium into alkaloids such as morphine and codeine, has one of its two factories at",
    options: ["Mandsaur", "Ujjain", "Ratlam", "Neemuch"],
    answer: 3,
    explanation: "The Government Opium and Alkaloid Factories are at Neemuch (MP) and Ghazipur (UP), under the Ministry of Finance. Mandsaur and Neemuch are the main licensed opium poppy areas of India. The alkaloids are supplied to the pharmaceutical industry."
  },
  {
    id: 22,
    question: "The Central Bureau of Narcotics, which licenses and supervises opium poppy cultivation under the NDPS Act, is headquartered at",
    options: ["Neemuch", "New Delhi", "Gwalior", "Lucknow"],
    answer: 2,
    explanation: "CBN, under the Department of Revenue, has its headquarters at Gwalior. It licenses farmers in MP, Rajasthan and UP, measures their opium yield and fights illicit trafficking. The Narcotics Control Bureau, a separate agency, is headquartered in New Delhi."
  },
  {
    id: 23,
    question: "Nepa Mills at Nepanagar in Burhanpur district is known for producing",
    options: ["fertiliser", "cement", "newsprint", "sugar"],
    answer: 2,
    explanation: "Nepa Mills was India's first newsprint mill and uses bamboo and wood from the nearby forests. It is a central public sector unit. Orient Paper Mills at Amlai (Anuppur district, formerly part of Shahdol) is another major paper unit of MP."
  },
  {
    id: 24,
    question: "The Invest Madhya Pradesh Global Investors Summit of February 2025, where investment proposals worth over ₹30 lakh crore were announced, was held in",
    options: ["Indore", "Gwalior", "Jabalpur", "Bhopal"],
    answer: 3,
    explanation: "The 2025 summit was held in Bhopal on 24–25 February 2025 and was inaugurated by the Prime Minister. Earlier editions were mostly held at Indore. It was preceded by regional industry conclaves in cities such as Ujjain, Jabalpur and Gwalior."
  },
  {
    id: 25,
    question: "Northern Coalfields Limited, a subsidiary of Coal India that works the large open-cast mines supplying nearby power stations, has its headquarters at",
    options: ["Singrauli", "Shahdol", "Chhindwara", "Umaria"],
    answer: 0,
    explanation: "NCL is headquartered at Singrauli (Waidhan) and works mines such as Jayant, Nigahi and Dudhichua. South Eastern Coalfields and Western Coalfields work other parts of central India. The coal is mostly burnt in pithead thermal stations."
  },
  {
    id: 26,
    question: "The Satna–Maihar–Katni belt of Madhya Pradesh is an important centre of which industry, based on local limestone deposits?",
    options: ["Cement", "Textiles", "Paper", "Glass"],
    answer: 0,
    explanation: "Thick limestone beds of the Vindhyan system support large cement plants at Satna, Maihar and Katni. MP is among the leading cement-producing states of India. Damoh and Neemuch also have cement plants."
  },
  {
    id: 27,
    question: "In which year was the Madhya Pradesh Human Rights Commission constituted under the Protection of Human Rights Act, 1993?",
    options: ["1993", "1995", "2000", "2005"],
    answer: 1,
    explanation: "The MP Human Rights Commission was set up in September 1995, among the earliest state commissions. Its chairperson is usually a retired Chief Justice or Judge of a High Court. The National Human Rights Commission was set up in 1993."
  },
  {
    id: 28,
    question: "The Madhya Pradesh State Finance Commission, which recommends the devolution of state resources to panchayats and municipalities, is constituted under which Article of the Constitution?",
    options: ["Article 243I", "Article 243K", "Article 280", "Article 266"],
    answer: 0,
    explanation: "Article 243I requires the Governor to constitute a State Finance Commission every five years for panchayats, and Article 243Y extends its work to municipalities. Article 243K provides for the State Election Commission. Article 280 concerns the (central) Finance Commission."
  },
  {
    id: 29,
    question: "Revenue administration in Madhya Pradesh, including land records, tehsils and revenue courts, is governed by the Madhya Pradesh Land Revenue Code of",
    options: ["1950", "1959", "1972", "1984"],
    answer: 1,
    explanation: "The MP Land Revenue Code, 1959 consolidated the revenue laws of the units merged in 1956 and still governs land records, diversion of land use and revenue courts. The Board of Revenue is the highest revenue court under it. Patwaris, tehsildars and collectors exercise powers defined in the Code."
  },
  {
    id: 30,
    question: "Madhya Pradesh's districts are grouped for administrative purposes into how many revenue divisions, each headed by a Commissioner?",
    options: ["7", "8", "10", "12"],
    answer: 2,
    explanation: "MP has ten revenue divisions: Bhopal, Indore, Ujjain, Gwalior, Chambal, Jabalpur, Rewa, Sagar, Shahdol and Narmadapuram. Each is headed by a Divisional Commissioner who supervises the district collectors. Divisions are also the units for many departmental zonal offices."
  },
  {
    id: 31,
    question: "Bewar, a traditional form of shifting (slash-and-burn) cultivation practised on hill slopes, is associated with which tribe?",
    options: ["Baiga", "Bhil", "Korku", "Sahariya"],
    answer: 0,
    explanation: "The Baiga of Mandla, Dindori and Balaghat traditionally practised bewar and avoided ploughing, which they regarded as wounding Mother Earth. The Baiga Chak area of Dindori was set aside for them in colonial times. They are a PVTG known for forest-based livelihoods and herbal knowledge."
  },
  {
    id: 32,
    question: "The Korku, a major tribe of Madhya Pradesh whose language belongs to the Munda group, are concentrated in which districts?",
    options: ["Rewa, Satna and Sidhi", "Mandla, Dindori and Balaghat", "Sheopur, Shivpuri and Guna", "Betul, Khandwa and Harda"],
    answer: 3,
    explanation: "Korku villages are found in Betul, Khandwa, Harda, Burhanpur and Chhindwara, in the Satpura belt. Their language is Austroasiatic, unlike the Dravidian Gondi and the Indo-Aryan Bhili. The Baiga are concentrated in Mandla, Dindori and Balaghat."
  },
  {
    id: 33,
    question: "Pithora painting, a ritual wall painting made on the house walls to honour the deity Baba Pithora, is a tradition of which community of western Madhya Pradesh?",
    options: ["Bhil and Bhilala", "Gond", "Baiga", "Kol"],
    answer: 0,
    explanation: "Pithora paintings are made by the Bhil, Bhilala and Rathwa communities of Jhabua, Alirajpur and neighbouring Gujarat, usually to give thanks or fulfil a vow. A trained painter, the lakhindra, draws horses, riders and other figures. Gond painting is a separate tradition of eastern MP."
  },
  {
    id: 34,
    question: "Under the Fifth Schedule, who has the power to declare an area in Madhya Pradesh to be a Scheduled Area?",
    options: ["The Governor", "The President", "The State Legislature", "The Tribes Advisory Council"],
    answer: 1,
    explanation: "Paragraph 6 of the Fifth Schedule empowers the President to declare, alter or cease Scheduled Areas by order. The Governor has wide powers inside those areas, including deciding whether a central or state law applies and making regulations. The Tribes Advisory Council only advises."
  },
  {
    id: 35,
    question: "The state tribal museum at Chhindwara, founded in 1954, is named after which tribal freedom fighter?",
    options: ["Badal Bhoi", "Tantya Bhil", "Raja Shankar Shah", "Birsa Munda"],
    answer: 0,
    explanation: "Badal Bhoi, a Gond leader from Chhindwara, led tribals in the 1930 Jungle Satyagraha and died in Jabalpur jail. The Shri Badal Bhoi State Tribal Museum displays the life and culture of the tribes of the region. Birsa Munda was from Jharkhand."
  },
  {
    id: 36,
    question: "The elaborate traditional tattooing done on the bodies of Baiga women, often regarded as their permanent ornament, is called",
    options: ["Sanjhi", "Mandana", "Pithora", "Godna"],
    answer: 3,
    explanation: "Godna tattoos are made with needles and natural pigments, and the Baiga believe they are the only ornament that accompanies a person after death. Mandana is a floor and wall art of Malwa, and Sanjhi is a ritual art made by girls during Pitru Paksha. Pithora belongs to the Bhils."
  },
  {
    id: 37,
    question: "Gangaur, celebrated by women with songs and the Gangaur dance in honour of Gauri and Shiva, is one of the main festivals of which region of Madhya Pradesh?",
    options: ["Baghelkhand", "Bundelkhand", "Nimar", "Mahakoshal"],
    answer: 2,
    explanation: "In Nimar (Khargone, Khandwa, Barwani), Gangaur is a major nine-day festival after Holi, with women carrying decorated images of Rannu Bai and Dhaniyar Raja (Gauri and Shiva). The festival is also big in Rajasthan. Rai and Badhai are typical dances of Bundelkhand."
  },
  {
    id: 38,
    question: "Maheshwari sarees, a GI-tagged handloom known for reversible borders, were promoted by Ahilyabai Holkar and are woven in which district?",
    options: ["Khargone", "Ashoknagar", "Dhar", "Burhanpur"],
    answer: 0,
    explanation: "Maheshwar on the Narmada, in Khargone district, was Ahilyabai Holkar's capital, and she brought weavers from Surat and Mandu in the 1760s. Today the Rehwa Society supports the weavers. Chanderi sarees come from Ashoknagar district."
  },
  {
    id: 39,
    question: "Under the Fifth Schedule, the Tribes Advisory Council of a state such as Madhya Pradesh can have at most how many members, three-fourths of whom must be ST members of the Legislative Assembly?",
    options: ["10", "15", "20", "25"],
    answer: 2,
    explanation: "Paragraph 4 of the Fifth Schedule provides for a TAC of not more than 20 members, of whom as nearly as possible three-fourths are ST MLAs. The Council advises on the welfare and advancement of STs. The Governor reports annually to the President on the administration of Scheduled Areas."
  },
  {
    id: 40,
    question: "Chanderi sarees, known for their sheer texture and gold butis and given a GI tag, are woven in which district of Madhya Pradesh?",
    options: ["Burhanpur", "Khargone", "Ashoknagar", "Shivpuri"],
    answer: 2,
    explanation: "Chanderi town lies in Ashoknagar district, which was carved out of Guna in 2003. Chanderi weaving uses silk and cotton yarn with zari work. Maheshwari sarees come from Maheshwar in Khargone district."
  },
  {
    id: 41,
    question: "The first uncrewed Gaganyaan mission, G1, which the government told Parliament in August 2026 was targeted for the last quarter of 2026, is to carry which half-humanoid robot?",
    options: ["Manav", "Pragyan", "Shakti", "Vyommitra"],
    answer: 3,
    explanation: "Vyommitra, a half-humanoid robot developed by ISRO, will fly on G1 to test life-support and crew systems before astronauts fly. The Minister of State told the Rajya Sabha in August 2026 that G1 was targeted for the fourth quarter of 2026, with further uncrewed flights to follow before astronauts fly. Pragyan was the Chandrayaan-3 rover."
  },
  {
    id: 42,
    question: "On 29 June 2026 Union Minister Pralhad Joshi and Chief Minister Mohan Yadav inaugurated two solar parks in Madhya Pradesh with a combined capacity of 950 MW. Where are they?",
    options: ["Neemuch and Shajapur", "Rewa and Sidhi", "Agar and Morena", "Chhatarpur and Khandwa"],
    answer: 0,
    explanation: "The 500 MW Neemuch Solar Park and the 450 MW Shajapur Solar Park were inaugurated on 29 June 2026, adding 950 MW. Both are in the Malwa region, which has high solar radiation and wasteland. The Rewa Ultra Mega Solar project, commissioned earlier, is 750 MW."
  },
  {
    id: 43,
    question: "In March 2026 a company received a letter of intent, after a Ministry of Mines auction, to explore the Padhar block in Madhya Pradesh for which critical minerals?",
    options: ["Lithium", "Platinum group elements", "Rare earth elements", "Graphite"],
    answer: 1,
    explanation: "A Hindustan Power group firm was the preferred bidder for the Padhar platinum group elements (PGE) block, and the LoI was announced in March 2026. PGEs such as platinum and palladium are used in catalytic converters, electronics and hydrogen fuel cells. The Centre has been auctioning critical mineral blocks since 2023 under the amended MMDR Act."
  },
  {
    id: 44,
    question: "In June 2026 Madhya Pradesh signed the state's first power purchase agreement for a solar-plus-battery storage project, of 440 MW. Where is this project?",
    options: ["Rewa", "Neemuch", "Morena", "Khandwa"],
    answer: 2,
    explanation: "The 440 MW solar-plus-storage project is in Morena, and its PPA was signed alongside the Neemuch and Shajapur inaugurations in June 2026. Battery storage lets solar power be supplied in the evening peak. Gandhi Sagar is the site of a large pumped-storage project, another form of storage."
  },
  {
    id: 45,
    question: "A deepfake video showing a public figure saying things they never said is most commonly created with which AI technique?",
    options: ["Generative adversarial networks or similar generative models", "Optical character recognition", "Relational databases", "Public key infrastructure"],
    answer: 0,
    explanation: "Deepfakes are usually made with GANs, autoencoders or diffusion models, which learn to generate realistic faces and voices. In a GAN, a generator creates fakes and a discriminator tries to spot them, so both improve. Forensic detection looks for artefacts in blinking, lighting, lip-sync and compression."
  },
  {
    id: 46,
    question: "In machine learning, a model that performs very well on its training data but poorly on new data is said to be",
    options: ["underfitted", "overfitted", "regularised", "normalised"],
    answer: 1,
    explanation: "Overfitting means the model has learned noise and peculiarities of the training set instead of the general pattern. Remedies include more training data, simpler models, regularisation and cross-validation. Underfitting is the opposite problem, where the model is too simple to capture the pattern."
  },
  {
    id: 47,
    question: "An e-mail service used through a web browser, where the provider manages the software, servers and storage, is an example of which cloud service model?",
    options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "On-premises hosting"],
    answer: 2,
    explanation: "In SaaS the provider runs complete applications, and users simply log in, as with web e-mail or office suites. PaaS gives developers a platform to build and run their own apps, and IaaS rents out virtual machines, storage and networks. On-premises hosting is not a cloud model."
  },
  {
    id: 48,
    question: "A digital forensic examiner calculates a SHA-256 hash value of a seized hard disk before and after imaging. The main purpose is to",
    options: ["encrypt the data", "compress the image", "prove the copy is identical and unaltered", "recover deleted files"],
    answer: 2,
    explanation: "A cryptographic hash changes completely if even one bit of data changes, so matching hashes show the image is an exact, unaltered copy. Examiners record hashes to support the chain of custody and the certificate under Section 63 BSA. Hashing is one-way and does not encrypt or compress data."
  },
  {
    id: 49,
    question: "A model is trained to identify seized tablets using thousands of tablet images, each already tagged with the correct drug name. This is an example of",
    options: ["unsupervised learning", "supervised learning", "reinforcement learning", "rule-based expert systems"],
    answer: 1,
    explanation: "Supervised learning uses labelled examples (inputs with known correct outputs) to learn a mapping, here from image to drug name. Unsupervised learning finds groups in unlabelled data, and reinforcement learning learns from rewards and penalties. Image classification of this kind usually uses convolutional neural networks."
  },
  {
    id: 50,
    question: "Which type of neural network is best suited to tasks such as recognising faces or tablet logos in images?",
    options: ["Convolutional neural network (CNN)", "Recurrent neural network (RNN)", "Decision tree", "k-means clustering"],
    answer: 0,
    explanation: "CNNs use convolutional filters that detect edges, textures and shapes and build them into higher-level features, which suits image data. RNNs are designed for sequences such as text and speech, although transformers now dominate there. Decision trees and k-means are not neural networks."
  },
  {
    id: 51,
    question: "Blowfly larvae recovered from a body give an estimated age that is older than the true age when the deceased had taken certain stimulant drugs. For the post-mortem interval, this means the estimate is likely to be",
    options: ["too long", "too short", "unaffected", "impossible to make"],
    answer: 0,
    explanation: "Some drugs accelerate larval development, so larvae appear more advanced than their true age and the PMI is overestimated. Others slow development and cause the opposite error. The study of drugs in carrion insects and their effect on development is entomotoxicology."
  },
  {
    id: 52,
    question: "A badly decomposed body yields no blood or urine fit for analysis. Which specimen can still be submitted for qualitative drug testing?",
    options: ["Blowfly larvae collected from the remains", "Soil taken 10 metres from the body", "Clothing labels", "Pollen from nearby trees"],
    answer: 0,
    explanation: "Larvae take up drugs from the tissues they consume, and residues can even be found in empty puparial cases. These specimens are useful when the usual matrices are gone. Levels in larvae do not reflect tissue concentrations, so results are treated as qualitative."
  },
  {
    id: 53,
    question: "Segmental analysis of a 6 cm scalp hair detects a drug only in the segment 4–6 cm from the root. This pattern suggests",
    options: ["use only in the past week", "contamination of the root end", "use about 4–6 months before collection, since stopped", "continuous use over the past six months"],
    answer: 2,
    explanation: "Scalp hair grows about 1 cm a month, so the 4–6 cm segment corresponds to roughly 4–6 months before sampling. Absence of drug nearer the root suggests use stopped. Decontamination washes and metabolite-to-parent ratios help rule out external contamination."
  },
  {
    id: 54,
    question: "Transverse white bands on the fingernails (Mees' lines), appearing some weeks after an episode of poisoning, are classically described with which element?",
    options: ["Arsenic", "Iron", "Zinc", "Calcium"],
    answer: 0,
    explanation: "Arsenic, and also thallium, disturbs the nail matrix and leaves transverse white bands that move distally as the nail grows, which helps date the exposure. Arsenic is deposited in hair and nails, so these are collected in suspected chronic cases. Neutron activation analysis and AAS are used for quantification."
  },
  {
    id: 55,
    question: "Children in some villages of western Madhya Pradesh show chalky white and brown mottling of the teeth. Chronic exposure through drinking water to which ion is the usual cause?",
    options: ["Fluoride", "Arsenite", "Nitrate", "Sulphate"],
    answer: 0,
    explanation: "Fluoride above about 1.5 mg/L in groundwater causes dental fluorosis, and higher long-term intake causes skeletal fluorosis. Several MP districts, including Jhabua, Dhar, Seoni and Mandla, have fluoride-affected villages. Fluoride in water is usually measured with an ion-selective electrode."
  },
  {
    id: 56,
    question: "Which cells in a buccal swab provide the DNA used for reference profiling?",
    options: ["Keratinised squames only", "Bacterial cells of the oral flora", "Erythrocytes in saliva", "Nucleated buccal epithelial cells and leukocytes"],
    answer: 3,
    explanation: "A buccal swab collects nucleated epithelial cells shed from the cheek lining, together with white cells present in saliva. Fully keratinised squames have lost their nuclei, and red cells have none. Oral bacteria contribute non-human DNA, which human-specific quantification kits ignore."
  },
  {
    id: 57,
    question: "Which feature seen on microscopy of a questioned hair indicates that it was forcibly pulled rather than naturally shed?",
    options: ["A club-shaped root with no sheath material", "A cut, square-ended tip", "A root with adhering follicular tag and sheath material", "A fragmented medulla"],
    answer: 2,
    explanation: "A pulled anagen hair often carries a follicular tag of tissue, which is rich in nuclear DNA and allows STR typing. A naturally shed telogen hair has a club-shaped root with no tissue, so usually only mitochondrial DNA can be obtained. The tip shows how the hair was cut, not how it was removed."
  },
  {
    id: 58,
    question: "Diatoms recovered from the bone marrow of a body taken from a river are forensically significant mainly because they",
    options: ["give the exact time of death", "indicate the depth of the water", "prove the victim could not swim", "support ante-mortem drowning at a water body with that diatom flora"],
    answer: 3,
    explanation: "Diatoms can reach marrow only if water was inhaled while the circulation was working, so their presence supports drowning rather than disposal of a body after death. Comparing the species with samples from the suspected water body can link the death to that site. Diatom tests must be run with strict controls, because laboratory contamination is a known problem."
  },
  {
    id: 59,
    question: "Which skeletal measurement is generally the most reliable single indicator for estimating sex in an adult skeleton?",
    options: ["Length of the radius", "Length of the metatarsals", "Circumference of the skull", "Dimensions of the pelvis"],
    answer: 3,
    explanation: "The pelvis is the most sexually dimorphic part of the skeleton because of obstetric adaptation, and the skull is next. Long bone lengths and robustness overlap considerably between the sexes. Population-specific standards must be used for any metric method."
  },
  {
    id: 60,
    question: "The rule of thumb that the total body height is roughly 3.7 times the length of the ______ is used for rapid stature estimates from a single long bone.",
    options: ["femur", "humerus", "clavicle", "fibula"],
    answer: 0,
    explanation: "The femur is about 27% of stature, so stature is roughly 3.7 times femur length (1 ÷ 0.27 ≈ 3.7). Regression equations specific to sex and population, such as those of Trotter and Gleser or Indian series, are far more accurate. Lower limb bones give better estimates than upper limb bones."
  },
  {
    id: 61,
    question: "In Gustafson's method of dental age estimation, which single change is regarded as the most reliable indicator?",
    options: ["Attrition", "Periodontosis", "Root transparency", "Root resorption"],
    answer: 2,
    explanation: "Root dentine becomes progressively transparent with age, and this change correlates best with chronological age among Gustafson's six criteria. Attrition depends heavily on diet and habits such as chewing tobacco. The criteria are scored on ground longitudinal sections of extracted teeth."
  },
  {
    id: 62,
    question: "A yellowish-white, greasy, soapy change in the subcutaneous fat of a body recovered from a well is best described as",
    options: ["mummification", "adipocere formation", "maceration", "putrefaction"],
    answer: 1,
    explanation: "Adipocere (saponification) is the hydrolysis and hydrogenation of body fat into fatty acids and soaps, favoured by moist, cool, anaerobic conditions such as wells and water bodies. It can preserve facial features and injuries for months. Mummification needs dry, hot and airy conditions."
  },
  {
    id: 63,
    question: "Which group of insects typically colonises a body late, when it has dried out and become largely skeletal?",
    options: ["Calliphoridae", "Sarcophagidae", "Dermestidae", "Muscidae"],
    answer: 2,
    explanation: "Dermestid beetles (skin and hide beetles) feed on dried tissue, skin and hair, so they arrive in the dry and skeletal stages. Blowflies and flesh flies are early colonisers of fresh remains. Museums use dermestid colonies to clean skeletons for the same reason."
  },
  {
    id: 64,
    question: "Which statement about a Barr body in a buccal smear is correct?",
    options: ["It is an inactivated X chromosome, so a 47,XXY cell shows one", "It is an inactivated Y chromosome", "It is seen in all male cells", "Its number equals the total number of X chromosomes"],
    answer: 0,
    explanation: "One X chromosome remains active in each cell and the others are condensed as Barr bodies, so the number of Barr bodies is the number of X chromosomes minus one. A 47,XXY (Klinefelter) cell therefore shows one Barr body, and a normal 46,XX cell also shows one. The Y chromosome is never seen as a Barr body."
  },
  {
    id: 65,
    question: "Which cell organelle is the main site of the enzyme systems that metabolise most drugs and xenobiotics in the liver?",
    options: ["Smooth endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Nucleolus"],
    answer: 0,
    explanation: "Cytochrome P450 enzymes are membrane proteins of the smooth (agranular) endoplasmic reticulum, recovered as the microsomal fraction after differential centrifugation. The Golgi handles protein sorting and lysosomes intracellular digestion. Some conjugation enzymes are cytosolic."
  },
  {
    id: 66,
    question: "Which statement about mitochondrial DNA makes it valuable for examining old bones and shed hair?",
    options: ["It is present in only one copy per cell", "It is inherited only from the father", "It recombines at each generation", "It is present in hundreds to thousands of copies per cell"],
    answer: 3,
    explanation: "High copy number means mtDNA often survives in samples where nuclear DNA is too degraded for STR typing. It is maternally inherited and does not recombine, so all maternal relatives share a haplotype, which limits its discriminating power. That makes it a tool of exclusion and of lineage matching rather than individual identification."
  },
  {
    id: 67,
    question: "A single forensic laboratory examiner handles both the questioned sample and the suspect's reference sample at the same bench without changing gloves. The main risk is",
    options: ["loss of chain of custody", "PCR inhibition by humic acid", "degradation of DNA by heat", "sample-to-sample contamination that can create a false match"],
    answer: 3,
    explanation: "Carry-over between an evidence sample and a reference sample can transfer the suspect's DNA to the evidence and create a false association. Protocols therefore require separate times, spaces, tools and gloves for evidence and reference samples, plus negative controls. Chain of custody concerns documentation rather than physical transfer at the bench."
  },
  {
    id: 68,
    question: "Which feature distinguishes most animal hairs from human hairs on microscopic examination?",
    options: ["Presence of a cuticle", "A broad, continuous medulla occupying most of the shaft", "Presence of pigment granules", "A cortex"],
    answer: 1,
    explanation: "Animal hairs usually have a wide, continuous or latticed medulla with a medullary index of 0.5 or more, while human hairs have a narrow, fragmented or absent medulla. All mammalian hairs have a cuticle, cortex and pigment. Scale pattern and pigment distribution also differ between species."
  },
  {
    id: 69,
    question: "The outermost scale pattern of a human head hair, as seen by scanning electron microscopy, is described as",
    options: ["coronal", "spinous", "imbricate", "petal-shaped"],
    answer: 2,
    explanation: "Human hair has flattened, overlapping imbricate scales. Coronal (crown-like) scales occur in small rodents and bats, and spinous scales in cats, mink and seals. Scale casts in a soft medium can show the pattern without an electron microscope."
  },
  {
    id: 70,
    question: "Which statement about prokaryotic and eukaryotic cells is correct?",
    options: ["Prokaryotes have a nuclear membrane but no ribosomes", "Eukaryotic DNA is always circular", "Eukaryotes lack a cytoskeleton", "Prokaryotes lack membrane-bound organelles and have 70S ribosomes"],
    answer: 3,
    explanation: "Prokaryotes have no nuclear envelope or membrane-bound organelles, and their ribosomes are 70S. Eukaryotes have a nucleus, mitochondria and a cytoskeleton, with linear nuclear chromosomes. Mitochondrial DNA, however, is circular, a trace of its bacterial ancestry."
  },
  {
    id: 71,
    question: "Which real-time PCR chemistry uses a probe carrying a fluorophore at one end and a quencher at the other, which is cleaved by the 5′ nuclease activity of Taq polymerase?",
    options: ["SYBR Green", "TaqMan", "Molecular beacon", "Scorpion primer"],
    answer: 1,
    explanation: "In TaqMan assays the polymerase degrades the hybridised probe during extension, separating reporter from quencher and releasing fluorescence proportional to amplification. SYBR Green binds any double-stranded DNA and so cannot distinguish specific product from primer-dimers without melt analysis. Forensic quantification kits generally use probe-based chemistry with an internal PCR control."
  },
  {
    id: 72,
    question: "In STR interpretation, the analytical threshold is the peak height above which",
    options: ["a peak is accepted as signal rather than baseline noise", "a locus is called homozygous", "stutter is ignored", "the sample is declared a mixture"],
    answer: 0,
    explanation: "The analytical threshold, set during validation from blank and negative data, separates genuine signal from instrument noise. A higher stochastic threshold is used to judge whether a single peak can be relied on as a true homozygote. Peaks between the two thresholds risk undetected allele drop-out."
  },
  {
    id: 73,
    question: "A sexual assault swab extract shows total human DNA of 1.0 ng/µL and male DNA of 0.5 ng/µL. The autosomal-to-male ratio is 2:1, which suggests",
    options: ["predominantly female DNA with a trace of male DNA", "no interpretable result", "male DNA only", "roughly equal contributions from one male and one female"],
    answer: 3,
    explanation: "If all the male DNA is autosomal as well, 0.5 ng/µL of the 1.0 ng/µL total is male, leaving about 0.5 ng/µL female, so the contributions are roughly equal. A ratio of 10:1 or more would indicate a trace of male DNA in a large female background. Such ratios guide whether Y-STR testing is needed."
  },
  {
    id: 74,
    question: "Degradation of DNA in an old bloodstain typically produces an electropherogram showing",
    options: ["loss of the smaller loci first", "increased peak heights at all loci", "uniform loss across all loci", "a 'ski-slope' with loss of the larger loci first"],
    answer: 3,
    explanation: "Degradation breaks DNA into short fragments, so large amplicons fail before small ones and the profile slopes downwards from left to right within each dye channel. Mini-STR kits with shortened amplicons help recover such profiles. Inhibition can also cause downward sloping, which is why the IPC is checked."
  },
  {
    id: 75,
    question: "Pull-up (bleed-through) peaks in an STR electropherogram are usually caused by",
    options: ["too little template DNA", "off-scale peaks from too much template or a poor spectral calibration", "degraded DNA", "a worn capillary"],
    answer: 1,
    explanation: "When a peak saturates the detector, the software cannot fully separate the dyes, so false peaks appear at the same position in other colour channels. Re-injecting less product or re-running the matrix/spectral calibration removes them. Too little template causes drop-out and stochastic imbalance instead."
  },
  {
    id: 76,
    question: "Amelogenin-based sex typing can give a false 'female' result in a male sample because of",
    options: ["a deletion in the Y-chromosome amelogenin region", "an extra X chromosome", "a mutation in the SRY gene", "high stutter at the locus"],
    answer: 0,
    explanation: "Deletions in the AMELY region, reported in a few per cent of men in some South Asian populations, remove the Y peak and the sample looks female. Laboratories therefore use additional Y markers such as SRY or Y-STRs to confirm sex. This is an important caveat in Indian casework."
  },
  {
    id: 77,
    question: "Which statement about Y-STR analysis in a sexual assault case with a vasectomised suspect is correct?",
    options: ["Y-STRs cannot be used, because semen has no sperm", "Y-STRs require intact sperm heads", "Y-STRs type only female DNA", "Y-STRs can be typed from male epithelial cells and seminal fluid even without sperm"],
    answer: 3,
    explanation: "Y-STR typing needs male nuclear DNA from any source, including epithelial cells shed into the seminal fluid, so sperm are not essential. Y-STRs are also useful when a large female background swamps the male autosomal profile. All paternal male relatives share the haplotype, so the evidential weight is lower than for autosomal STRs."
  },
  {
    id: 78,
    question: "In Sanger sequencing, the chain-terminating nucleotides are",
    options: ["deoxynucleotides", "methylated nucleotides", "ribonucleotides", "dideoxynucleotides"],
    answer: 3,
    explanation: "Dideoxynucleotides lack the 3′-OH needed for the next phosphodiester bond, so extension stops wherever one is incorporated. Fluorescent ddNTPs with capillary electrophoresis give the sequence read. Sanger sequencing remains the standard for mtDNA control-region work in many laboratories."
  },
  {
    id: 79,
    question: "Heteroplasmy in a mitochondrial DNA sequence from a hair sample means that",
    options: ["two different mtDNA sequences are present in the same sample", "the sample contains both male and female DNA", "nuclear DNA has contaminated the result", "the sequence has a frameshift"],
    answer: 0,
    explanation: "Heteroplasmy is the presence of more than one mtDNA type in an individual or tissue, often as a mixture at a single position (point heteroplasmy) or a length variant in a homopolymer. Shared heteroplasmy between a questioned and reference sample can strengthen an association. Interpretation guidelines require it to be documented rather than treated as a mismatch."
  },
  {
    id: 80,
    question: "The non-coding control region of human mtDNA, which contains the hypervariable segments HV1 and HV2 used in forensic work, is also called the",
    options: ["D-loop", "ori C", "telomere", "centromere"],
    answer: 0,
    explanation: "The displacement loop (D-loop) spans about 1,100 bp and includes HV1 (roughly 16024–16365) and HV2 (roughly 73–340). Positions are numbered against the revised Cambridge Reference Sequence. Whole-mitogenome sequencing is now used where more discrimination is needed."
  },
  {
    id: 81,
    question: "Massively parallel sequencing (NGS) offers which clear advantage over capillary electrophoresis for forensic STR typing?",
    options: ["It is always cheaper per sample", "It eliminates the need for reference samples", "It needs no PCR", "It reveals sequence variation within STR alleles of the same length"],
    answer: 3,
    explanation: "Sequencing distinguishes isoalleles that have the same repeat number but different sequences, which increases discrimination power and can help deconvolve mixtures. It also types STRs, SNPs and mtDNA in one workflow. The trade-offs are cost, run time, data handling and the need for new interpretation rules."
  },
  {
    id: 82,
    question: "A hot-start DNA polymerase is used in multiplex PCR mainly to",
    options: ["increase the extension rate", "digest inhibitors", "lower the annealing temperature", "prevent primer extension before the first denaturation step"],
    answer: 3,
    explanation: "Antibody- or chemically blocked polymerases are inactive until the first high-temperature step, which prevents non-specific extension and primer-dimer formation during setup. That improves specificity and yield in crowded multiplexes. It also allows reactions to be assembled at room temperature."
  },
  {
    id: 83,
    question: "In allele-specific PCR (ARMS), discrimination between two alleles is achieved by",
    options: ["a probe that binds only one allele after amplification", "placing the 3′ end of a primer on the variant base", "restriction digestion of the product", "using two different polymerases"],
    answer: 1,
    explanation: "A mismatch at the primer's 3′ terminus prevents efficient extension, so only the matching allele amplifies. Separate reactions or differently sized products distinguish the alleles. ARMS is used in molecular diagnosis of point mutations such as sickle cell disease."
  },
  {
    id: 84,
    question: "Single-strand conformation polymorphism (SSCP) detects sequence variants because single-stranded DNA fragments of the same length",
    options: ["have different charges", "bind different intercalating dyes", "melt at the same temperature", "fold into different conformations that migrate differently in a native gel"],
    answer: 3,
    explanation: "A single base change can alter the folded shape of a single strand, changing its electrophoretic mobility in a non-denaturing gel. SSCP is a cheap screening method but does not tell you what the change is, so bands of interest are sequenced. DGGE separates fragments by their melting behaviour in a denaturant gradient instead."
  },
  {
    id: 85,
    question: "In a two-person STR mixture, which observation most strongly supports assigning a locus's alleles to a major and a minor contributor?",
    options: ["Four alleles of roughly equal height", "Peaks below the analytical threshold", "A single peak at every locus", "Two tall peaks and two short peaks with consistent height ratios across loci"],
    answer: 3,
    explanation: "A consistent peak-height ratio across loci lets the analyst group the tall peaks as the major contributor and the short peaks as the minor one. Four peaks of similar height indicate a roughly 1:1 mixture that cannot be separated this way. Probabilistic genotyping software now does this using peak heights and stutter models."
  },
  {
    id: 86,
    question: "Which control, run alongside casework samples, is designed to detect contamination introduced during extraction?",
    options: ["Positive amplification control", "Reagent blank (extraction negative)", "Allelic ladder", "Internal size standard"],
    answer: 1,
    explanation: "A reagent blank goes through extraction and amplification with no sample, so any profile from it reveals contamination of reagents, tubes or the workspace. The positive control checks that amplification and detection work, and the allelic ladder and internal size standard are used for sizing. All of them appear on a validated casework batch sheet."
  },
  {
    id: 87,
    question: "In capillary electrophoresis of STR products, fragments are sized by comparison with",
    options: ["an internal size standard co-injected with each sample", "the allelic ladder only", "the positive control", "the migration time of the primer peak"],
    answer: 0,
    explanation: "A labelled internal size standard runs in every capillary injection, so the software can convert migration time to base pairs for that run. The allelic ladder then converts sizes to allele designations. Using ladders alone would not correct for injection-to-injection variation."
  },
  {
    id: 88,
    question: "Trinucleotide repeat expansion in the HTT gene causes Huntington disease. In a diagnostic laboratory, the repeat number is usually determined by",
    options: ["karyotyping", "PCR across the repeat followed by fragment sizing, with triplet-primed PCR for large expansions", "FISH", "flow cytometry"],
    answer: 1,
    explanation: "PCR with flanking primers and capillary sizing counts the CAG repeats, and triplet-repeat-primed PCR or Southern blotting is used when very large expansions fail to amplify. Karyotyping cannot resolve repeat numbers. Forensic relevance arises in identification and in paternity casework involving affected families."
  },
  {
    id: 89,
    question: "Multiplex PCR in modern STR kits requires that all primer pairs",
    options: ["have widely different annealing temperatures", "amplify the same locus", "work at a common annealing temperature without cross-reaction, giving products that differ in size or dye label", "be used at identical concentrations"],
    answer: 2,
    explanation: "Multiplexing needs compatible primers that do not form dimers or amplify each other's targets and that work in one thermal profile. Products are distinguished by amplicon size within a dye channel and by different fluorescent labels across channels. Primer concentrations are deliberately balanced, not identical, to even out peak heights."
  },
  {
    id: 90,
    question: "Low-template (low copy number) DNA typing is prone to allele drop-out mainly because",
    options: ["the polymerase is inhibited", "by chance, one allele may not be sampled or amplified in the early cycles", "the primers are degraded", "the capillary is overloaded"],
    answer: 1,
    explanation: "With only a few template molecules, random sampling in the first cycles can leave one allele greatly under-represented, so a heterozygote may appear homozygous. Drop-in, raised stutter and extreme heterozygote imbalance are related stochastic effects. Replicate amplifications and probabilistic interpretation are used to handle such profiles."
  },
  {
    id: 91,
    question: "An immunoassay screen on a urine sample reports a positive result for opiates, but confirmatory GC-MS finds no opiate. The most likely explanation is",
    options: ["cross-reactivity of the antibody with a structurally related compound", "an error in the GC-MS calibration", "degradation of the urine sample", "the antibody titre was too high"],
    answer: 0,
    explanation: "Immunoassays respond to a class of structurally similar molecules, so related drugs and some foods or medicines can give positives. That is why screening results must always be confirmed by a chromatographic-mass spectrometric method. Reporting an unconfirmed screening result as a finding is a serious error."
  },
  {
    id: 92,
    question: "Which pair correctly matches a body fluid with an immunological marker used for its confirmation?",
    options: ["Saliva — semenogelin", "Urine — glycophorin A", "Blood — amylase", "Semen — prostate-specific antigen"],
    answer: 3,
    explanation: "PSA (p30) is a prostate protein used to confirm seminal fluid, and semenogelin is the other common semen marker. Amylase indicates saliva, and glycophorin A is a red cell membrane protein used to confirm human blood. Uromodulin is a urine marker."
  },
  {
    id: 93,
    question: "In a sandwich ELISA for a protein antigen, the enzyme-labelled antibody binds to",
    options: ["the plate directly", "the blocking protein", "the substrate", "an epitope on the captured antigen different from the one bound by the capture antibody"],
    answer: 3,
    explanation: "The capture antibody immobilises the antigen and the labelled detection antibody binds a second, distinct epitope, which makes the assay highly specific. A sandwich format needs an antigen with at least two accessible epitopes, so it is unsuitable for very small haptens. Competitive ELISA is used for small molecules such as drugs."
  },
  {
    id: 94,
    question: "A competitive ELISA for a drug in serum shows a colour intensity that is",
    options: ["directly proportional to the drug concentration", "independent of the drug concentration", "inversely proportional to the drug concentration", "proportional to the square of the concentration"],
    answer: 2,
    explanation: "In a competitive format, drug in the sample competes with a labelled analogue for limited antibody sites, so more drug means less label bound and less colour. The calibration curve therefore slopes downwards. This format suits small haptens that cannot form a sandwich."
  },
  {
    id: 95,
    question: "In the absorption-elution technique for grouping a bloodstain, the final step reads the ABO group from",
    options: ["antibodies left in the supernatant", "antibody eluted from the stain by gentle heating, tested against known red cells", "a crystal test", "the colour of the stain"],
    answer: 1,
    explanation: "Specific antibody binds the antigen on the stain, unbound antibody is washed away, and the bound antibody is then released by heating at about 56 °C and identified with indicator cells. Absorption-inhibition instead measures the antibody removed from the serum. Elution is more sensitive and suits small, old stains."
  },
  {
    id: 96,
    question: "Species identification of a bloodstain by the precipitin test depends on",
    options: ["a species-specific antiserum raised against serum proteins of that species", "the ABO group of the stain", "the haem crystal shape", "the stain's peroxidase activity"],
    answer: 0,
    explanation: "Antisera raised in rabbits against human, bovine, canine or other serum proteins react only with that species' proteins, giving a visible precipitate. Related species may cross-react, so results are interpreted with care. Modern alternatives include species-specific immunochromatographic cards and mtDNA sequencing."
  },
  {
    id: 97,
    question: "Which statement about the Bombay (Oh) phenotype is correct?",
    options: ["Such a person's red cells are agglutinated by anti-H lectin", "Such a person types as AB", "Such a person can safely receive group O blood", "Such a person lacks H antigen and the serum contains anti-H"],
    answer: 3,
    explanation: "A homozygous non-functional FUT1 (h/h) genotype means no H substance is made, so A and B antigens cannot be built either; the cells are not agglutinated by anti-H lectin from Ulex europaeus. The serum contains anti-A, anti-B and anti-H, so only Bombay-phenotype blood can be transfused. The phenotype was first described from Mumbai in 1952."
  },
  {
    id: 98,
    question: "A woman who is Rh(D)-negative delivers an Rh(D)-positive baby. Anti-D immunoglobulin is given to the mother to",
    options: ["treat the baby's anaemia", "prevent the mother from forming anti-D that could harm a later fetus", "neutralise the baby's antibodies", "convert the mother to Rh-positive"],
    answer: 1,
    explanation: "Passive anti-D clears fetal D-positive cells from the mother's circulation before her immune system responds, preventing alloimmunisation. Without it, anti-D in a later pregnancy can cross the placenta and cause haemolytic disease of the newborn. The direct antiglobulin (Coombs) test on cord blood detects such coated fetal cells."
  },
  {
    id: 99,
    question: "Which technique separates serum proteins electrophoretically in a gel and then reacts them with antiserum poured into a trough beside the separation, forming precipitin arcs?",
    options: ["Western blotting", "Radial immunodiffusion", "Immunoelectrophoresis", "Isoelectric focusing"],
    answer: 2,
    explanation: "Grabar and Williams' immunoelectrophoresis combines electrophoretic separation with immunodiffusion, producing characteristic arcs for albumin and the globulins. Radial immunodiffusion quantifies a single antigen from the ring diameter in antibody-containing gel. Western blotting transfers separated proteins to a membrane before immunodetection."
  },
  {
    id: 100,
    question: "In rocket immunoelectrophoresis (the Laurell technique), the quantity of antigen in a well is proportional to",
    options: ["the width of the rocket at its base", "the height of the rocket-shaped precipitate", "the time taken for the gel to set", "the applied voltage"],
    answer: 1,
    explanation: "Antigen is electrophoresed into an antibody-containing gel and forms a tapering rocket whose height increases with antigen concentration. Standards of known concentration are run alongside to construct a calibration line. The method is faster than radial immunodiffusion because migration is driven by the electric field."
  },
  {
    id: 101,
    question: "A questioned stain gives a positive leucomalachite green test. The examiner should regard this as",
    options: ["confirmation of human blood", "a presumptive indication of blood, needing confirmation", "proof of menstrual blood", "evidence of saliva"],
    answer: 1,
    explanation: "Leucomalachite green, like Kastle-Meyer and TMB, detects the peroxidase-like activity of haem and can respond to plant peroxidases and chemical oxidants. Crystal tests such as Takayama confirm blood, and immunological tests confirm that it is human. Presumptive tests are valuable because they are quick, cheap and very sensitive."
  },
  {
    id: 102,
    question: "Luminol is especially useful at a scene where blood has been washed away because it",
    options: ["distinguishes human from animal blood", "identifies the ABO group", "detects traces at very high dilution and can be viewed over large areas in the dark", "preserves DNA for later typing"],
    answer: 2,
    explanation: "Luminol chemiluminescence can reveal bloodstains diluted many thousand-fold, letting investigators map a scene or find cleaned trails. It does not identify species or group, and it reacts with bleach, some metals and plant material. Used carefully it does not prevent subsequent DNA typing, though excess spraying can dilute stains."
  },
  {
    id: 103,
    question: "Which reagent is used as a presumptive test for saliva at a scene by detecting amylase activity?",
    options: ["Barberio reagent", "Takayama reagent", "Starch-iodine (amylase) test", "Lugol's iodine on epithelial cells"],
    answer: 2,
    explanation: "A starch-iodine based test shows amylase activity by loss of the blue starch-iodine colour; Phadebas press tests work on the same principle with dye-linked starch. Takayama confirms blood and Barberio is a semen crystal test. Lugol's iodine stains glycogen-rich vaginal epithelial cells."
  },
  {
    id: 104,
    question: "The main reason a lateral-flow immunochromatographic card is suited to on-scene screening is that it",
    options: ["needs no antibodies", "gives a visual result in minutes without instruments", "quantifies the analyte precisely", "is unaffected by antigen excess"],
    answer: 1,
    explanation: "Lateral-flow cards carry dried antibody-gold conjugates and give a visible line within a few minutes, which suits field use. They are qualitative and can fail by the high-dose hook effect, so laboratory confirmation is still required. A valid result needs the control line to appear."
  },
  {
    id: 105,
    question: "During putrefaction, RNA in a tissue sample degrades faster than DNA chiefly because",
    options: ["DNA is protected by the cell membrane", "RNA has no phosphate backbone", "RNA is single-stranded and attacked by abundant RNases", "RNA contains thymine"],
    answer: 2,
    explanation: "RNA is single-stranded, has a reactive 2′-OH group and is attacked by ubiquitous ribonucleases, so it degrades quickly. Despite this, mRNA markers have been used to identify body fluids and estimate the age of stains when samples are handled carefully. RNA contains uracil in place of thymine."
  },
  {
    id: 106,
    question: "Autolysis, an early post-mortem change, is caused by",
    options: ["bacterial enzymes from the gut", "the body's own lysosomal enzymes released after cell death", "insect activity", "oxidation of haemoglobin"],
    answer: 1,
    explanation: "When the cell can no longer maintain its membranes, lysosomal hydrolases escape and digest the cell from within; organs rich in enzymes, such as the pancreas, are affected first. Bacterial action is putrefaction, which follows. Both processes degrade biological evidence and must be considered when interpreting results."
  },
  {
    id: 107,
    question: "Which of these would most strongly indicate that a questioned stain is menstrual blood rather than circulating blood?",
    options: ["A positive Kastle-Meyer test", "Detection of endometrial markers such as matrix metalloproteinases, with vaginal epithelial cells", "Presence of haem crystals", "A high amylase level"],
    answer: 1,
    explanation: "Menstrual blood contains endometrial tissue and shed vaginal cells, so markers such as MMP-7 and MMP-11 and the cellular picture help distinguish it. Haem tests and crystal tests only show that blood is present. Amylase points to saliva, not menstrual fluid."
  },
  {
    id: 108,
    question: "Why must indicator red cells used in serological grouping of stains be washed before use?",
    options: ["To increase their antigen density", "To lyse the cells", "To remove plasma proteins and free antibody that could neutralise the reagent antiserum", "To make them agglutinate spontaneously"],
    answer: 2,
    explanation: "Residual plasma can carry antibodies and complement that interfere with the reaction and give false results. Washing in saline leaves clean cells with intact surface antigens. Poor washing is a common cause of unreliable absorption-elution results."
  },
  {
    id: 109,
    question: "A negative result in an antigen-antibody test performed on a very old, heat-damaged bloodstain should be interpreted as",
    options: ["proof that the stain is not blood", "proof that the stain is not human", "inconclusive, because the antigens may have been destroyed", "proof of animal origin"],
    answer: 2,
    explanation: "Protein antigens denature with age, heat, moisture and microbial action, so a negative immunological result does not exclude blood or human origin. The examiner reports it as inconclusive and may try DNA-based species identification. Rh antigens degrade faster than ABO antigens in dried stains."
  },
  {
    id: 110,
    question: "Polyclonal antisera for diagnostic tests such as the precipitin test are commonly raised in animals such as rabbits and goats because",
    options: ["their antibodies do not bind antigens", "they mount a strong antibody response to injected antigen and can supply polyclonal antiserum", "they lack an immune system", "their serum needs no purification"],
    answer: 1,
    explanation: "Immunising an animal with a purified antigen produces polyclonal antiserum containing antibodies against several epitopes, which is useful for precipitin and diffusion tests. Monoclonal antibodies from hybridomas give greater specificity and batch consistency, and are used in most modern kits. Ethical approval and animal welfare rules govern such work."
  },
  {
    id: 111,
    question: "Which detector in gas chromatography responds selectively to halogen-containing compounds such as organochlorine pesticides?",
    options: ["Flame ionisation detector", "Refractive index detector", "Thermal conductivity detector", "Electron capture detector"],
    answer: 3,
    explanation: "An ECD uses a β-emitting source, and electronegative species such as halogens capture electrons and reduce the standing current, giving very high sensitivity for organochlorines. The FID responds to almost all organic compounds but not selectively. Refractive index detectors belong to HPLC."
  },
  {
    id: 112,
    question: "The nitrogen-phosphorus detector (thermionic detector) in GC is particularly useful in toxicology because it responds selectively to",
    options: ["aromatic hydrocarbons", "halogenated solvents", "compounds containing nitrogen or phosphorus, such as many drugs and organophosphates", "metals"],
    answer: 2,
    explanation: "An alkali bead heated in the detector gives high selectivity for nitrogen- and phosphorus-containing molecules, which covers most alkaloids, many drugs and organophosphate pesticides. It greatly reduces interference from hydrocarbon matrix. GC-MS is still used for confirmation."
  },
  {
    id: 113,
    question: "In GC-MS, the standard ionisation technique that produces reproducible fragmentation patterns searchable against libraries such as NIST is",
    options: ["electron ionisation at 70 eV", "electrospray ionisation", "MALDI", "chemical ionisation at atmospheric pressure"],
    answer: 0,
    explanation: "Electron ionisation at 70 eV gives characteristic fragment patterns that are consistent between instruments, which is why spectral libraries work. Chemical ionisation is softer and favours the molecular ion. ESI and MALDI are used for polar and large molecules in LC-MS and proteomics."
  },
  {
    id: 114,
    question: "Selected ion monitoring (SIM) in GC-MS improves the detection of a known drug because the instrument",
    options: ["scans a wider mass range", "spends all its time measuring a few diagnostic ions, raising sensitivity", "needs no calibration", "ignores the retention time"],
    answer: 1,
    explanation: "By monitoring only two or three characteristic ions, the detector collects far more data per ion and the signal-to-noise ratio improves, which lowers the limit of detection. The trade-off is that unexpected compounds are missed, so full-scan screening is done first. Confirmation requires both the retention time and the correct ion ratios."
  },
  {
    id: 115,
    question: "Polar drug metabolites are derivatised with a silylating reagent such as BSTFA before GC-MS mainly to",
    options: ["increase their volatility and thermal stability", "add a fluorescent label", "ionise them in the source", "remove the matrix"],
    answer: 0,
    explanation: "Replacing active hydrogens of hydroxyl, carboxyl and amine groups with trimethylsilyl groups makes the molecule more volatile, less polar and better behaved on the column. Acetylation and methylation are alternatives. Derivatisation also improves peak shape and gives characteristic fragment ions."
  },
  {
    id: 116,
    question: "Why is LC-MS generally preferred to GC-MS for analysing thermally labile and polar drugs such as glucuronide conjugates?",
    options: ["LC-MS needs no mobile phase", "GC has no detector for drugs", "LC-MS cannot detect small molecules", "LC separates without heating the sample to high temperature"],
    answer: 3,
    explanation: "GC requires analytes to be volatile and thermally stable, and polar metabolites often need chemical derivatisation. LC separates in the liquid phase at mild temperatures, so conjugates and polar drugs can be analysed directly. This makes LC-MS/MS the workhorse of modern forensic toxicology."
  },
  {
    id: 117,
    question: "A reflectron (ion mirror) is added to a time-of-flight mass analyser mainly to",
    options: ["increase the ion source temperature", "improve resolution by compensating for the spread of ion kinetic energies", "generate multiply charged ions", "separate ions by charge only"],
    answer: 1,
    explanation: "Ions of the same m/z leave the source with slightly different energies; the reflectron makes faster ions travel a longer path, so they arrive together and peaks become sharper. Delayed extraction serves a similar purpose. Better resolution allows accurate mass measurement of peptides."
  },
  {
    id: 118,
    question: "The matrix in MALDI serves to",
    options: ["neutralise the ions", "separate the analytes", "absorb the laser energy and assist desorption and ionisation of the analyte", "cool the sample"],
    answer: 2,
    explanation: "An organic matrix such as α-cyano-4-hydroxycinnamic acid co-crystallises with the sample, absorbs the UV laser pulse and transfers energy and protons to the analyte without destroying it. Choice of matrix and sample preparation strongly affect spectral quality. TOF is paired with MALDI because both are pulsed techniques."
  },
  {
    id: 119,
    question: "Headspace gas chromatography is the method of choice for blood alcohol because it",
    options: ["analyses the vapour above the heated sample, avoiding injection of blood onto the column", "needs no internal standard", "measures alcohol by colour", "requires protein precipitation with acid"],
    answer: 0,
    explanation: "Equilibrating blood in a sealed vial and injecting only the vapour keeps proteins and salts out of the column and gives clean, reproducible results. An internal standard such as n-propanol is added to correct for variation. A dual-column or GC-MS confirmation is used for medico-legal reporting."
  },
  {
    id: 120,
    question: "Which chromatographic mode in HPLC uses a non-polar C18 stationary phase with a polar mobile phase such as water-acetonitrile?",
    options: ["Normal-phase chromatography", "Size-exclusion chromatography", "Ion-exchange chromatography", "Reversed-phase chromatography"],
    answer: 3,
    explanation: "Reversed-phase HPLC on octadecyl silica is the most widely used mode for drugs, with elution order broadly from more polar to less polar. Normal phase uses a polar stationary phase and non-polar solvents. Ion exchange separates by charge, and size exclusion by molecular size."
  },
  {
    id: 121,
    question: "In HPLC, gradient elution means that during the run",
    options: ["the column temperature is increased", "the detector wavelength is scanned", "the composition of the mobile phase is changed progressively", "the flow is stopped periodically"],
    answer: 2,
    explanation: "Increasing the proportion of the stronger solvent during the run elutes strongly retained compounds in reasonable time while keeping early peaks resolved. Isocratic runs keep the composition constant. Gradient methods need equilibration between runs for reproducible retention times."
  },
  {
    id: 122,
    question: "A short guard column is fitted before the analytical column in HPLC in order to",
    options: ["increase the flow rate", "raise the column temperature", "trap particulates and strongly retained matrix components, protecting the analytical column", "mix the mobile phase"],
    answer: 2,
    explanation: "The guard column has the same packing as the analytical column and is replaced cheaply when it becomes fouled, which greatly extends the life of the main column. Sample filtration and clean-up reduce the load on it. It adds a little to retention times and should be allowed for when methods are transferred."
  },
  {
    id: 123,
    question: "In thin-layer chromatography of drug extracts, visualising the plate under UV at 254 nm with a fluorescent-indicator plate shows analytes as",
    options: ["bright spots on a dark plate", "dark spots on a fluorescent background", "coloured crystals", "charred rings"],
    answer: 1,
    explanation: "On a silica plate containing a fluorescent indicator, UV-absorbing compounds quench the fluorescence and appear as dark spots against a bright green background. Specific chromogenic sprays such as Dragendorff's reagent for alkaloids give colours. Spots are compared with standards run on the same plate."
  },
  {
    id: 124,
    question: "Dragendorff's reagent, used as a TLC spray and spot test, gives an orange precipitate or spot with",
    options: ["sugars", "barbiturates", "alkaloids", "fatty acids"],
    answer: 2,
    explanation: "Dragendorff's reagent (potassium bismuth iodide) reacts with the nitrogen of alkaloids to give an orange-brown colour, so it is a general alkaloid screen. Mandelin and Marquis reagents give different colours with specific drug classes. All such tests are presumptive."
  },
  {
    id: 125,
    question: "In SDS-PAGE, proteins are separated essentially by molecular mass because SDS",
    options: ["removes all charges from proteins", "coats proteins with a uniform negative charge and denatures them", "cross-links proteins", "binds only basic residues"],
    answer: 1,
    explanation: "SDS unfolds proteins and binds along the chain, giving a nearly constant charge-to-mass ratio so that migration in the polyacrylamide sieve depends on size. Reducing agents such as β-mercaptoethanol break disulphide bonds for complete denaturation. In native PAGE, charge and shape also influence mobility."
  },
  {
    id: 126,
    question: "Isoelectric focusing separates proteins by moving each to the pH at which it",
    options: ["is most soluble", "denatures completely", "binds the most SDS", "carries no net charge and therefore stops migrating"],
    answer: 3,
    explanation: "In a stable pH gradient a protein migrates until the pH equals its isoelectric point, where its net charge is zero and it focuses as a sharp band. IEF resolves variants differing by a single charge, such as haemoglobin and transferrin types. It forms the first dimension of 2D-PAGE."
  },
  {
    id: 127,
    question: "In atomic absorption spectroscopy for metals in biological samples, the hollow-cathode lamp provides",
    options: ["a continuum of all wavelengths", "the nebuliser gas", "the flame", "narrow emission lines of the element being measured"],
    answer: 3,
    explanation: "A hollow-cathode lamp made of the target element emits its own characteristic narrow lines, which the free atoms in the flame or graphite furnace absorb. Absorbance is then related to concentration through the Beer-Lambert law and a calibration curve. A different lamp is needed for each element, unlike ICP-MS, which is multi-element."
  },
  {
    id: 128,
    question: "Which spectroscopic technique identifies a pure drug powder from its characteristic pattern of molecular vibrations without destroying the sample?",
    options: ["Atomic absorption spectroscopy", "Flame photometry", "Fourier transform infrared (FTIR) spectroscopy", "Electron ionisation mass spectrometry"],
    answer: 2,
    explanation: "FTIR with an ATR accessory records a fingerprint spectrum of functional groups and the crystal form, so a seized powder can be compared with reference spectra in seconds. Raman spectroscopy serves a similar purpose and can read through packaging. AAS and flame photometry measure elements, not molecular structure, and EI mass spectrometry consumes the sample and measures fragment masses rather than vibrations."
  },
  {
    id: 129,
    question: "Polarised light microscopy is used to examine a synthetic textile fibre mainly because it reveals",
    options: ["birefringence and sign of elongation, which help identify the fibre type", "the DNA content of the fibre", "the fibre's elemental composition", "the dye's mass spectrum"],
    answer: 0,
    explanation: "Oriented polymers are anisotropic, so measuring refractive indices parallel and perpendicular to the fibre axis gives birefringence, which differs between nylon, polyester, acrylic and others. The Michel-Lévy chart and interference colours assist the measurement. SEM-EDX, not PLM, gives elemental composition."
  },
  {
    id: 130,
    question: "In comparing a questioned glass fragment with a control, elemental analysis by ICP-MS is valuable because it",
    options: ["measures trace elements at very low concentrations, improving discrimination between glass sources", "destroys no sample at all", "shows the fracture pattern", "measures refractive index"],
    answer: 0,
    explanation: "Modern float glass is very uniform in refractive index, so trace-element profiles measured by LA-ICP-MS or solution ICP-MS discriminate much better between manufacturing sources. Refractive index is measured by the immersion or GRIM method. Fracture patterns and direction of breakage are examined physically."
  },
  {
    id: 131,
    question: "Which division of a State Forensic Science Laboratory would examine a seized powder for narcotic drugs under the NDPS Act?",
    options: ["Biology and serology division", "Chemistry and narcotics division", "Ballistics division", "Documents division"],
    answer: 1,
    explanation: "Drug and poison analysis is handled by the chemistry or toxicology and narcotics divisions, which use colour tests, TLC, GC-MS and FTIR. The biology and serology division examines blood, semen, hair and tissue, and DNA work is usually a separate division. Ballistics deals with firearms and documents with handwriting and forgery."
  },
  {
    id: 132,
    question: "Under the Directorate of Forensic Science Services (DFSS), which Central Forensic Science Laboratory is the designated centre of excellence for biological sciences?",
    options: ["CFSL Kolkata", "CFSL Hyderabad", "CFSL Guwahati", "CFSL Chandigarh"],
    answer: 2,
    explanation: "DFSS has designated CFSL Guwahati for biological sciences, CFSL Bhopal for physical sciences, CFSL Pune for psychology and CFSL Kolkata for explosives. The older scheme of Kolkata for biology, Hyderabad for chemistry and Chandigarh for physics is outdated. DFSS now runs seven CFSLs, including CFSL Delhi, which it took over from the CBI in 2022."
  },
  {
    id: 133,
    question: "A Regional Forensic Science Laboratory in a state such as Madhya Pradesh differs from the State FSL mainly in that it",
    options: ["reports to the Ministry of Home Affairs directly", "examines only cyber evidence", "handles only court liaison and no analysis", "serves a group of districts, usually with fewer specialised divisions"],
    answer: 3,
    explanation: "RFSLs decentralise routine examinations for a cluster of districts, which reduces delay and transport of exhibits, while specialised work goes to the State FSL. The State FSL retains the full range of divisions and the laboratory's overall technical control. Central laboratories under the DFSS serve central agencies and inter-state cases."
  },
  {
    id: 134,
    question: "Which accreditation standard applies to the competence of forensic testing and calibration laboratories in India, assessed by NABL?",
    options: ["ISO 9001", "ISO 14001", "ISO/IEC 17025", "ISO 27001"],
    answer: 2,
    explanation: "ISO/IEC 17025 covers the technical competence of testing and calibration laboratories, and NABL accredits Indian FSLs against it. ISO 9001 is a general quality-management standard, ISO 14001 covers environmental management and ISO 27001 information security. Accreditation supports the admissibility and credibility of laboratory reports."
  },
  {
    id: 135,
    question: "Under the Bharatiya Nagarik Suraksha Sanhita, 2023, the report of the medical examination of a rape victim must be forwarded by the registered medical practitioner to the investigating officer",
    options: ["without delay", "within seven days", "within thirty days", "only on the court's order"],
    answer: 1,
    explanation: "Section 184(6) BNSS (old Section 164A CrPC) requires the registered medical practitioner to forward the report to the investigating officer within seven days, and the IO forwards it to the Magistrate as part of the documents under Section 193. The old CrPC provision only said 'without delay', so the fixed seven-day limit is a BNSS change. The examination requires the woman's consent, and the report must record the times the examination began and ended."
  },
  {
    id: 136,
    question: "Which statement about collecting a bloodstain from a hard, non-absorbent surface at a scene is correct?",
    options: ["Preserve it directly in formalin", "Flood it with saline and collect the pool", "Scrape or swab it with a sterile swab slightly moistened with distilled water, then air-dry the swab", "Lift it with adhesive tape and seal in plastic while wet"],
    answer: 2,
    explanation: "A lightly moistened sterile swab recovers the stain, after which the swab is air-dried and packed in paper or a breathable tube. Excess water dilutes the sample and promotes bacterial growth, and formalin cross-links DNA. Plastic traps moisture and accelerates degradation."
  },
  {
    id: 137,
    question: "In a suspected poisoning death, viscera for chemical analysis should be preserved in saturated saline rather than rectified spirit when the suspected substance is",
    options: ["an alkaloid", "a heavy metal", "an alcohol or other volatile substance", "a barbiturate"],
    answer: 2,
    explanation: "Rectified spirit cannot be used when alcohols or other volatiles are suspected, because the preservative itself would interfere with the analysis; saturated saline is used instead. Saturated saline is the general-purpose preservative for viscera in India. Samples for alcohol in blood are preserved with sodium fluoride and potassium oxalate."
  },
  {
    id: 138,
    question: "For routine chemical analysis in a suspected poisoning death in India, the stomach and its contents and a portion of the small intestine are usually sent in one container, and which organ in a second?",
    options: ["Liver with one kidney", "Spleen with the pancreas", "Brain with the lungs", "Heart with the aorta"],
    answer: 0,
    explanation: "The standard set is: first jar, stomach with contents and upper small intestine with contents; second jar, about 500 g of liver with one kidney or half of each kidney. Blood and urine are sent separately, with the appropriate preservatives. Additional samples such as hair, nails, bone or long-bone marrow are sent when chronic or metallic poisoning is suspected."
  },
  {
    id: 139,
    question: "A sealed parcel of exhibits sent to the FSL must carry the specimen seal impression separately, because",
    options: ["it proves the seal used on the parcel was not tampered with or substituted", "it identifies the investigating officer's rank", "it records the court's order", "it serves as the fee receipt"],
    answer: 0,
    explanation: "The laboratory compares the seal on the parcel with the specimen impression sent under separate cover, which shows that the parcel has not been opened and resealed. The forwarding memo, seal impression and docket together support the chain of custody. Any mismatch is recorded and reported."
  },
  {
    id: 140,
    question: "Which is the correct order of steps when collecting biological evidence at a scene?",
    options: ["Package, photograph, document, collect", "Document and photograph in situ, collect, package and label, seal and dispatch with memo", "Collect, seal, photograph, document", "Photograph, seal, collect, label"],
    answer: 1,
    explanation: "Evidence is first recorded in place with notes, sketches and photographs including a scale, then collected with clean tools, packaged and labelled, sealed and dispatched with a forwarding memo. Recording after collection loses the context of position and relationship. Each step is entered in the case diary and chain-of-custody form."
  },
  {
    id: 141,
    question: "Cas9 can be converted into a 'nickase' that cuts only one DNA strand by mutating",
    options: ["the PAM-interacting domain", "the nuclear localisation signal", "the guide RNA scaffold", "one of its two nuclease domains (RuvC or HNH)"],
    answer: 3,
    explanation: "Cas9 has two nuclease domains, RuvC and HNH, each cutting one strand; inactivating one gives a nickase, and inactivating both gives catalytically dead dCas9. Paired nickases targeting opposite strands reduce off-target cutting. dCas9 fused to effectors is used to switch genes on or off without cutting."
  },
  {
    id: 142,
    question: "The main safety concern when using CRISPR-Cas systems in research is",
    options: ["off-target edits at sites resembling the guide sequence", "the inability to deliver Cas9 into cells", "the requirement for radioactive labels", "its inability to edit human cells"],
    answer: 0,
    explanation: "Guides tolerate some mismatches, so unintended cuts can occur at similar sequences, which is why genome-wide off-target screening and high-fidelity Cas variants are used. Delivery is a practical challenge but not the central safety issue. Germline editing in humans raises separate ethical and legal questions, and ICMR's national guidelines for gene therapy prohibit germline modification."
  },
  {
    id: 143,
    question: "A multiple sequence alignment of mtDNA control-region sequences from several individuals is most directly useful for",
    options: ["measuring protein mass", "determining the ABO group", "quantifying DNA", "identifying the positions where the sequences differ from a reference"],
    answer: 3,
    explanation: "Alignment lines up homologous positions so that substitutions, insertions and deletions can be read off against the revised Cambridge Reference Sequence. Those differences form the haplotype that is searched against EMPOP. Tools such as Clustal and MAFFT perform the alignment."
  },
  {
    id: 144,
    question: "Which database would a scientist search to find published nucleotide sequences for a species-identification query?",
    options: ["GenBank at NCBI", "PDB", "UniProt", "CODIS"],
    answer: 0,
    explanation: "GenBank holds publicly submitted nucleotide sequences and is searched with BLAST, which is how an unknown cytochrome b or COI sequence is matched to a species. PDB holds protein structures and UniProt protein sequences. CODIS is a restricted law-enforcement STR database."
  },
  {
    id: 145,
    question: "Species identification of a seized meat or wildlife sample commonly uses sequencing of which mitochondrial genes, the basis of DNA barcoding?",
    options: ["Cytochrome b and COI", "16S rRNA of bacteria", "Amelogenin", "HLA-DQA1"],
    answer: 0,
    explanation: "Cytochrome b and cytochrome c oxidase subunit I (COI) vary enough between species but little within them, so they serve as barcodes; BOLD and GenBank hold reference sequences. Bacterial identification uses 16S rRNA. Amelogenin is a human sex-typing marker and HLA-DQA1 an early human typing locus."
  },
  {
    id: 146,
    question: "In data-dependent acquisition on an LC-MS/MS instrument, the mass spectrometer selects precursor ions for fragmentation on the basis of",
    options: ["a fixed list prepared before the run", "the most intense peaks observed in each survey scan", "the UV absorbance of the eluate", "the order of elution only"],
    answer: 1,
    explanation: "In data-dependent acquisition, each survey (MS1) scan is followed by MS/MS of the most abundant precursors, with dynamic exclusion so the same ion is not picked repeatedly. A pre-set list is used in targeted methods such as MRM or parallel reaction monitoring. Data-independent acquisition instead fragments all ions in successive mass windows."
  },
  {
    id: 147,
    question: "Which proteomic marker would best support the identification of a stain as vaginal fluid?",
    options: ["Semenogelin", "Uromodulin", "Cornulin and other cornified envelope proteins of vaginal epithelium", "Haptoglobin"],
    answer: 2,
    explanation: "Vaginal epithelial markers such as cornulin and involucrin, often with Lactobacillus signatures, are used to indicate vaginal fluid. Semenogelin indicates semen, uromodulin urine and haptoglobin serum. A panel of markers measured in one LC-MS/MS run makes body-fluid attribution more reliable than any single test."
  },
  {
    id: 148,
    question: "Why are proteins sometimes better targets than DNA for examining very old or burnt skeletal remains?",
    options: ["Proteins are present in more copies than DNA", "Proteins such as collagen and enamel peptides can survive longer than amplifiable DNA", "Proteins are unaffected by heat", "Protein analysis needs no instruments"],
    answer: 1,
    explanation: "Mineral-bound proteins, particularly bone collagen and enamel proteome components, can persist after DNA has degraded beyond use. Enamel peptides of the AMELX and AMELY gene products can even indicate sex. Proteins do denature with heat, but their surviving sequences are still informative."
  },
  {
    id: 149,
    question: "An Indian state DNA data bank established under a state's rules, holding profiles from crime scenes and convicts, must address which main legal concern?",
    options: ["Cost of reagents", "Choice of capillary electrophoresis instrument", "Privacy and consent, including limits on retention and use of profiles", "Number of FSL buildings"],
    answer: 2,
    explanation: "DNA databases raise questions of privacy, informed consent, retention periods, access and removal of profiles of acquitted persons, highlighted by the Supreme Court's Puttaswamy judgment on privacy. The DNA Technology (Use and Application) Regulation Bill, which proposed national and regional data banks, was not enacted and was withdrawn. Profiles are held as numeric STR data rather than whole genomes to limit the information stored."
  },
  {
    id: 150,
    question: "Which statement best describes the status of DNA evidence in Indian courts?",
    options: ["It is conclusive proof of guilt by itself", "It can be led only in sexual offence cases", "It is inadmissible without the accused's consent in every case", "It is expert opinion evidence, weighed with the other evidence on record"],
    answer: 3,
    explanation: "DNA results are the opinion of an expert under Section 39 of the Bharatiya Sakshya Adhiniyam, 2023 and are appreciated together with the rest of the evidence, including the chain of custody and the quality of the analysis. Courts have cautioned against treating a match as proof of guilt without considering how the sample came to be there. Sections 51 and 52 BNSS allow collection of samples from an accused in defined circumstances."
  }
];

export default questions;

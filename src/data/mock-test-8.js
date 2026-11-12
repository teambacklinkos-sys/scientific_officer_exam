const questions = [
  {
    id: 1,
    question: "In 1957 an archaeologist travelling by train noticed unusual rock formations near Bhopal and went on to explore the painted rock shelters of Bhimbetka. Who was he?",
    options: ["H.D. Sankalia", "V.S. Wakankar", "R.D. Banerji", "B.B. Lal"],
    answer: 1,
    explanation: "Vishnu Shridhar Wakankar spotted the formations in 1957 and spent years documenting the Bhimbetka shelters in Raisen district. Their paintings run from the Mesolithic to historic times. Bhimbetka became a UNESCO World Heritage Site in 2003."
  },
  {
    id: 2,
    question: "The Kandariya Mahadeva temple, the largest and most ornate temple at Khajuraho, is attributed to which Chandela ruler?",
    options: ["Yashovarman", "Dhanga", "Vidyadhara", "Paramardi"],
    answer: 2,
    explanation: "Kandariya Mahadeva was built around 1025–1050 CE under Vidyadhara, who also resisted Mahmud of Ghazni. The Lakshmana temple is linked to Yashovarman and the Vishvanatha temple to Dhanga. The Khajuraho group became a UNESCO site in 1986."
  },
  {
    id: 3,
    question: "Which monument at Mandu is regarded as India's first marble structure and is said to have been studied by Shah Jahan's architects before the Taj Mahal was built?",
    options: ["Hoshang Shah's Tomb", "Jahaz Mahal", "Rani Roopmati's Pavilion", "Hindola Mahal"],
    answer: 0,
    explanation: "The tomb of Hoshang Shah Ghori, ruler of the Malwa Sultanate, was completed in the 1440s in white marble. An inscription on the tomb records a visit by Shah Jahan's architects. Jahaz Mahal and Hindola Mahal are sandstone palaces at Mandu."
  },
  {
    id: 4,
    question: "At the Battle of Dharmat (1658) near Ujjain, Aurangzeb and Murad Bakhsh defeated the imperial army that was fighting for Dara Shikoh. Who commanded that army?",
    options: ["Mirza Raja Jai Singh", "Maharaja Jaswant Singh of Marwar", "Shah Shuja", "Rana Raj Singh of Mewar"],
    answer: 1,
    explanation: "Jaswant Singh Rathore, with Qasim Khan, led Shah Jahan's forces against the advancing princes at Dharmat in April 1658 and was defeated. The victory opened the way to Samugarh, where Aurangzeb beat Dara and went on to take the throne."
  },
  {
    id: 5,
    question: "The Jhanda (Flag) Satyagraha of 1923, launched after officials objected to the national flag being hoisted on a municipal building, began in which city of present-day MP?",
    options: ["Indore", "Gwalior", "Bhopal", "Jabalpur"],
    answer: 3,
    explanation: "The Flag Satyagraha began at Jabalpur in March 1923 with leaders such as Pt. Sunderlal and Subhadra Kumari Chauhan, and later spread to Nagpur. It is counted among the major Congress agitations in the Central Provinces."
  },
  {
    id: 6,
    question: "The revolutionary Chandrashekhar Azad was born at which village, which is now named after him?",
    options: ["Mhow, Indore", "Orchha, Niwari", "Badarka, Unnao", "Bhabhra, Alirajpur"],
    answer: 3,
    explanation: "Azad was born in 1906 at Bhabhra in present-day Alirajpur district (then part of Jhabua), and the village is now called Chandrashekhar Azad Nagar. Badarka in Unnao (UP) was his family's ancestral village, not his birthplace. Mhow is the birthplace of Dr B.R. Ambedkar."
  },
  {
    id: 7,
    question: "Which Maratha leader defeated the Nizam-ul-Mulk at the Battle of Bhopal (1737), leading to the Treaty of Doraha Sarai in 1738?",
    options: ["Mahadji Scindia", "Malhar Rao Holkar", "Peshwa Bajirao I", "Peshwa Madhavrao I"],
    answer: 2,
    explanation: "Bajirao I besieged the Nizam near Bhopal in late 1737. Under the treaty signed at Doraha, the Nizam promised the Peshwa control over Malwa and the land between the Narmada and the Chambal. This strengthened Maratha power in central India."
  },
  {
    id: 8,
    question: "The massive, unfinished Bhojeshwar Shiva temple at Bhojpur in Raisen district was built by a ruler of which dynasty?",
    options: ["Chandela king Vidyadhara", "Paramara king Bhoja", "Kalachuri king Lakshmikarna", "Pratihara king Mihira Bhoja"],
    answer: 1,
    explanation: "Raja Bhoja of the Paramara dynasty (11th century), who ruled from Dhar, began the Bhojeshwar temple with its huge single-stone linga. Unfinished construction drawings are incised on nearby rocks. He is also credited with creating the Bhojtal lake in Bhopal."
  },
  {
    id: 9,
    question: "The Jungle Satyagraha of 1930 in Betul district, at places such as Ghoda Dongri, was led by which tribal leader?",
    options: ["Ganjan Singh Korku", "Tantya Bhil", "Bhima Nayak", "Khajya Nayak"],
    answer: 0,
    explanation: "Ganjan Singh Korku led Betul's tribal communities in breaking the forest laws in 1930 as part of the Civil Disobedience Movement. Tantya Bhil was a Nimar rebel of the 1880s, and Bhima Nayak and Khajya Nayak fought in Barwani around 1857."
  },
  {
    id: 10,
    question: "A Gupta-period inscription of Bhanugupta (510 CE), which records a general's wife following him onto the funeral pyre, is regarded as the earliest inscriptional evidence of sati. Where was it found?",
    options: ["Sanchi", "Udayagiri", "Eran", "Rupnath"],
    answer: 2,
    explanation: "The Eran pillar inscription in Sagar district records that Goparaja died in battle and his wife committed sati. Eran also has a Varaha image and inscriptions of Samudragupta. Rupnath has an Ashokan minor rock edict, and Udayagiri has Gupta caves."
  },
  {
    id: 11,
    question: "The Narmada flows westward to the Arabian Sea, unlike most peninsular rivers. What is the main reason?",
    options: ["The Malwa plateau slopes westward", "It flows through a rift valley between the Vindhya and Satpura ranges", "It follows a fault in the Chota Nagpur plateau", "It follows fissures in the Deccan trap"],
    answer: 1,
    explanation: "The Narmada occupies a structural rift (graben) between the Vindhyas and Satpuras, so it flows west and does not form a delta, ending in an estuary at the Gulf of Khambhat. The Tapti flows west through a parallel trough south of the Satpuras."
  },
  {
    id: 12,
    question: "The Gandhi Sagar dam, the first of the major dams on the Chambal and now also the site of a cheetah habitat in its sanctuary, is in which district?",
    options: ["Mandsaur", "Neemuch", "Ratlam", "Agar Malwa"],
    answer: 0,
    explanation: "Gandhi Sagar dam (1960) is in Mandsaur district, and the Gandhi Sagar Wildlife Sanctuary spans Mandsaur and Neemuch. Cheetahs were introduced there in April 2025 as MP's second cheetah site. Rana Pratap Sagar and Jawahar Sagar dams lie downstream in Rajasthan."
  },
  {
    id: 13,
    question: "According to the India State of Forest Report, which state has the largest area under forest cover in India?",
    options: ["Arunachal Pradesh", "Chhattisgarh", "Madhya Pradesh", "Odisha"],
    answer: 2,
    explanation: "Madhya Pradesh has the largest forest cover by area, about 77,000 sq km, followed by Arunachal Pradesh and Chhattisgarh. By percentage of geographical area, small states such as Mizoram and Lakshadweep rank highest."
  },
  {
    id: 14,
    question: "With the notification of Madhav Tiger Reserve in March 2025, how many tiger reserves does Madhya Pradesh have?",
    options: ["6", "7", "8", "9"],
    answer: 3,
    explanation: "MP's nine tiger reserves are Kanha, Bandhavgarh, Pench, Satpura, Panna, Sanjay-Dubri, Veerangana Durgavati (Nauradehi), Ratapani and Madhav. Ratapani was notified in December 2024 and Madhav in March 2025. MP also has the largest tiger population of any state."
  },
  {
    id: 15,
    question: "The large floating solar project on the Narmada in Khandwa district was built on the reservoir of which dam?",
    options: ["Indira Sagar", "Omkareshwar", "Bargi", "Tawa"],
    answer: 1,
    explanation: "The Omkareshwar floating solar park, planned at about 600 MW, floats on the Omkareshwar reservoir. Placing panels on water saves land and reduces evaporation. Indira Sagar lies just upstream, while Bargi (on the Narmada near Jabalpur) and Tawa (on a tributary) are further upstream."
  },
  {
    id: 16,
    question: "The Vindhyachal Super Thermal Power Station, NTPC's largest station, is located in which district of Madhya Pradesh?",
    options: ["Satna", "Shahdol", "Sidhi", "Singrauli"],
    answer: 3,
    explanation: "Vindhyachal STPS is in Singrauli district, close to the Singrauli coalfield. The concentration of pit-head power plants has earned the region the name 'energy capital of India'."
  },
  {
    id: 17,
    question: "The Marble Rocks gorge and the Dhuandhar waterfall on the Narmada are at Bhedaghat, in which district?",
    options: ["Jabalpur", "Mandla", "Narsinghpur", "Narmadapuram"],
    answer: 0,
    explanation: "At Bhedaghat, about 20 km from Jabalpur, the Narmada cuts a gorge through white magnesian limestone (marble) and plunges over the Dhuandhar ('smoke cascade') falls. The nearby Chausath Yogini temple is a Kalachuri monument."
  },
  {
    id: 18,
    question: "Kuno National Park, where cheetahs from Namibia were released on 17 September 2022, is in which district?",
    options: ["Shivpuri", "Morena", "Sheopur", "Guna"],
    answer: 2,
    explanation: "Kuno is in Sheopur district, and it received the first intercontinental cheetah translocation under Project Cheetah. South African cheetahs followed in 2023 and Botswana cheetahs in February 2026. Madhav Tiger Reserve is in neighbouring Shivpuri."
  },
  {
    id: 19,
    question: "Which biosphere reserve of Madhya Pradesh was added to UNESCO's World Network of Biosphere Reserves in 2020?",
    options: ["Pachmarhi", "Achanakmar–Amarkantak", "Kanha", "Panna"],
    answer: 3,
    explanation: "Panna Biosphere Reserve joined the UNESCO MAB network in 2020. Pachmarhi was included in 2009 and Achanakmar–Amarkantak, shared with Chhattisgarh, in 2012. Kanha is a national park and tiger reserve, not a designated biosphere reserve."
  },
  {
    id: 20,
    question: "Tawa Reservoir, designated a Ramsar site in 2024, lies in which district?",
    options: ["Betul", "Narmadapuram", "Harda", "Raisen"],
    answer: 1,
    explanation: "The Tawa reservoir, on the Tawa river (a tributary of the Narmada), lies in Narmadapuram district and borders Satpura Tiger Reserve. It became a Ramsar site in August 2024, joining Bhoj Wetland, Sakhya Sagar, Sirpur and Yashwant Sagar."
  },
  {
    id: 21,
    question: "How many Lok Sabha constituencies does Madhya Pradesh have?",
    options: ["25", "27", "29", "40"],
    answer: 2,
    explanation: "MP sends 29 members to the Lok Sabha and 11 to the Rajya Sabha. Of the Lok Sabha seats, 6 are reserved for STs and 4 for SCs. Bihar has 40 seats."
  },
  {
    id: 22,
    question: "Of the 230 seats in the Madhya Pradesh Legislative Assembly, how many are reserved for Scheduled Tribes?",
    options: ["35", "41", "44", "47"],
    answer: 3,
    explanation: "47 Assembly seats are reserved for STs and 35 for SCs, reflecting MP's large tribal population (about 21% in Census 2011). Under Article 332, reservation is in proportion to the population of these groups."
  },
  {
    id: 23,
    question: "Citizens of Madhya Pradesh can register grievances with the CM Helpline on which toll-free number?",
    options: ["100", "112", "181", "1076"],
    answer: 2,
    explanation: "The CM Helpline 181, launched in 2014, takes complaints by phone and online and escalates them to higher officers if they are not resolved in time. 112 is the national emergency number. The helpline is a key e-governance grievance tool in MP."
  },
  {
    id: 24,
    question: "Who appoints the State Election Commissioner, who conducts panchayat and municipal elections in Madhya Pradesh?",
    options: ["Chief Minister", "Governor", "Chief Election Commissioner of India", "President of India"],
    answer: 1,
    explanation: "Under Articles 243K and 243ZA, the Governor appoints the State Election Commissioner. The Commissioner can be removed only in the same way and on the same grounds as a High Court judge. The Election Commission of India conducts Parliament and Assembly elections, not local body polls."
  },
  {
    id: 25,
    question: "Which article of the Constitution requires the Governor to constitute a State Finance Commission every five years to review the finances of panchayats?",
    options: ["Article 243-I", "Article 243-K", "Article 280", "Article 243-ZD"],
    answer: 0,
    explanation: "Article 243-I provides for the State Finance Commission for panchayats, and Article 243-Y extends it to municipalities. Article 280 covers the Union Finance Commission, and Article 243-ZD covers District Planning Committees."
  },
  {
    id: 26,
    question: "Madhya Pradesh's Ladli Laxmi Yojana, which gives staged financial benefits to girl children and is now copied by several states, was launched in which year?",
    options: ["2005", "2007", "2011", "2015"],
    answer: 1,
    explanation: "Ladli Laxmi Yojana began on 1 April 2007 to improve the sex ratio, girls' education and age at marriage, with benefits paid in stages up to adulthood. Ladli Behna Yojana (2023) is a separate scheme of monthly transfers to women."
  },
  {
    id: 27,
    question: "Where is the headquarters of the Madhya Pradesh Public Service Commission?",
    options: ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
    answer: 0,
    explanation: "MPPSC was set up in 1956 under Article 315 and has its headquarters at Indore. It conducts the State Service Examination and recruitments such as Scientific Officer posts for the state FSLs. The state capital, Bhopal, is not its seat."
  },
  {
    id: 28,
    question: "Which constitutional provision requires Madhya Pradesh to have a minister in charge of tribal welfare?",
    options: ["Article 244(1)", "Article 275(1)", "Article 338A", "Proviso to Article 164(1)"],
    answer: 3,
    explanation: "The proviso to Article 164(1), as amended in 2006, requires Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha to have a tribal welfare minister, who may also look after SCs and backward classes. Article 275(1) provides grants for tribal welfare, and Article 338A sets up the NCST."
  },
  {
    id: 29,
    question: "What is the intermediate (block-level) tier of the Panchayati Raj system in Madhya Pradesh called?",
    options: ["Panchayat Samiti", "Janpad Panchayat", "Kshetra Panchayat", "Mandal Parishad"],
    answer: 1,
    explanation: "MP's three tiers are the Gram Panchayat, the Janpad Panchayat (block) and the Zila Panchayat (district). Panchayat Samiti is the term in Rajasthan and Maharashtra, and Kshetra Panchayat is used in Uttar Pradesh."
  },
  {
    id: 30,
    question: "With its 2026-27 budget, Madhya Pradesh adopted for the first time which kind of budget, carrying projections forward over the following years?",
    options: ["Zero-based budget", "Outcome budget", "Rolling budget", "Gender budget"],
    answer: 2,
    explanation: "Deputy CM and Finance Minister Jagdish Devda presented the 2026-27 budget in February 2026 as the state's first rolling budget, which carries forward projections for the following years to plan resources over the medium term. The budget had an outlay of about ₹4.38 lakh crore and no new taxes. Outcome and gender budgets were already in use in many states, so they were not firsts."
  },
  {
    id: 31,
    question: "A researcher ranks Madhya Pradesh's Scheduled Tribes by their Census 2011 population. Which tribe would be at the top of her list?",
    options: ["Bhil", "Gond", "Korku", "Kol"],
    answer: 0,
    explanation: "The Bhil (including Bhilala and related groups) are MP's largest ST, at about 60 lakh, ahead of the Gond at about 51 lakh. Nationally, the Bhil are also India's largest tribe. MP has India's largest ST population, about 1.53 crore."
  },
  {
    id: 32,
    question: "Which district of Madhya Pradesh has the highest proportion of Scheduled Tribes in its population (Census 2011)?",
    options: ["Jhabua", "Dindori", "Barwani", "Alirajpur"],
    answer: 3,
    explanation: "Alirajpur has the highest ST share, about 89%, followed closely by Jhabua at about 87%. Both are Bhil-dominated western districts. Dindori in the east is the main Gond and Baiga district."
  },
  {
    id: 33,
    question: "The traditional slash-and-burn shifting cultivation of the Baiga, for which they refused to use the plough, is known by what name?",
    options: ["Jhum", "Podu", "Bewar", "Kumri"],
    answer: 2,
    explanation: "Bewar (also called dahiya) involves burning patches of forest and scattering mixed seeds in the ash, because the Baiga traditionally regarded ploughing as scratching Mother Earth. Jhum is the north-eastern term, podu the Andhra–Odisha term, and kumri the Western Ghats term."
  },
  {
    id: 34,
    question: "Padma Shri awardee Bhuri Bai, of Pitol village in Jhabua, is a renowned artist in which tradition?",
    options: ["Gond painting", "Bhil painting", "Madhubani painting", "Warli painting"],
    answer: 1,
    explanation: "Bhuri Bai was one of the first Bhil artists to paint on paper and canvas, encouraged at Bharat Bhavan, Bhopal. Her dotted, colourful work depicts Bhil life and deities. She received the Padma Shri in 2021."
  },
  {
    id: 35,
    question: "Chanderi sarees, a GI-tagged handloom known for its sheer texture and buttis, are woven in which district?",
    options: ["Ashoknagar", "Guna", "Shivpuri", "Vidisha"],
    answer: 0,
    explanation: "Chanderi town in Ashoknagar district weaves silk–cotton blend sarees with zari motifs, and they carry a GI tag. Maheshwari sarees from Khargone and Bagh prints from Dhar are MP's other GI textiles."
  },
  {
    id: 36,
    question: "In 2023 Gwalior was designated a UNESCO Creative City in which field?",
    options: ["Literature", "Music", "Crafts and Folk Art", "Gastronomy"],
    answer: 1,
    explanation: "Gwalior joined the UNESCO Creative Cities Network for Music in 2023 because of its Gwalior gharana, Tansen's legacy and the annual Tansen Samaroh. Kozhikode was named a Creative City of Literature in the same round."
  },
  {
    id: 37,
    question: "The Alha-Udal ballad, celebrating the heroes of Mahoba and sung during the monsoon, belongs to the folk tradition of which dialect?",
    options: ["Malvi", "Nimadi", "Bundeli", "Bagheli"],
    answer: 2,
    explanation: "The Alha Khand, attributed to the poet Jagnik, tells of the warrior brothers Alha and Udal who served the Chandela king Paramardi. It is sung in Bundeli across Bundelkhand, especially in the rainy season."
  },
  {
    id: 38,
    question: "The Tansen Samaroh, one of India's oldest Hindustani classical music festivals, is held every year near Tansen's tomb in which city?",
    options: ["Ujjain", "Maihar", "Khajuraho", "Gwalior"],
    answer: 3,
    explanation: "The Tansen Samaroh is held in Gwalior, where Tansen and his guru Muhammad Ghaus are buried. Maihar is linked with Baba Allauddin Khan and the Maihar gharana, and Khajuraho hosts a classical dance festival."
  },
  {
    id: 39,
    question: "Bharat Bhavan, the multi-arts centre on the Upper Lake in Bhopal opened in 1982, was designed by which architect?",
    options: ["Charles Correa", "B.V. Doshi", "Laurie Baker", "Raj Rewal"],
    answer: 0,
    explanation: "Charles Correa designed Bharat Bhavan as terraced courtyards stepping down to the lake. It houses Roopankar (fine arts, including tribal art), Rangmandal (theatre) and other wings, and it helped bring Gond and Bhil artists to wider attention."
  },
  {
    id: 40,
    question: "Matki, a dance in which women balance earthen pots on their heads at weddings and festivals, is a folk dance of which region?",
    options: ["Bundelkhand", "Baghelkhand", "Nimar", "Malwa"],
    answer: 3,
    explanation: "Matki is a Malwa women's dance, usually led by one dancer with others joining, and is performed to the dhol. Rai belongs to Bundelkhand and Gangaur dances to Nimar."
  },
  {
    id: 41,
    question: "The New Delhi Declaration adopted at the India AI Impact Summit (Bharat Mandapam, February 2026) was guided by which principle?",
    options: ["Vasudhaiva Kutumbakam", "Sarvajan Hitaya, Sarvajan Sukhaya", "Satyameva Jayate", "Sabka Saath, Sabka Vikas"],
    answer: 1,
    explanation: "The non-binding New Delhi Declaration on AI Impact, adopted at the February 2026 summit, was framed around 'Sarvajan Hitaya, Sarvajan Sukhaya' (welfare for all, happiness for all), stressing fair access to AI's benefits. It was the first summit in the global AI summit series held in the Global South. 'Vasudhaiva Kutumbakam' was the theme of India's G20 presidency."
  },
  {
    id: 42,
    question: "What is the central approach of the India AI Governance Guidelines released by MeitY in November 2025?",
    options: ["A standalone AI Act with EU-style risk tiers", "Mandatory licensing of all AI models", "A ban on generative AI in government offices", "Seven guiding 'sutras', relying on existing laws and sectoral regulators rather than a new AI law"],
    answer: 3,
    explanation: "Released on 5 November 2025 under the IndiaAI Mission, the guidelines set out seven sutras, including Trust, People First, Innovation over Restraint, Fairness & Equity, Accountability, Understandable by Design and Safety, Resilience & Sustainability. They favour a light-touch, 'do no harm' approach over a single umbrella AI statute."
  },
  {
    id: 43,
    question: "The Digital Personal Data Protection Rules, notified in November 2025, operationalise the DPDP Act, 2023. Which body adjudicates personal data breaches and imposes penalties under this framework?",
    options: ["Data Protection Board of India", "CERT-In", "TRAI", "Cyber Appellate Tribunal"],
    answer: 0,
    explanation: "The DPDP Act sets up the Data Protection Board of India to inquire into breaches and levy penalties, and appeals go to TDSAT. The Rules notified in November 2025 brought the Board's provisions into force immediately and phased in other obligations. CERT-In handles cyber-security incidents under the IT Act."
  },
  {
    id: 44,
    question: "Which Indian AI start-up unveiled the Sarvam-30B and Sarvam-105B large language models at the India AI Impact Summit in February 2026 under the IndiaAI Mission?",
    options: ["Krutrim", "Gnani.ai", "Sarvam AI", "CoRover"],
    answer: 2,
    explanation: "Bengaluru-based Sarvam AI, chosen under the IndiaAI Mission to build a sovereign foundation model, launched its 30-billion and 105-billion parameter models at the February 2026 summit. Gnani.ai and BharatGen, whose Param2 is a 17-billion parameter multilingual model, also released models at the same event."
  },
  {
    id: 45,
    question: "India won the ICC Men's T20 World Cup 2026 at Ahmedabad on 8 March 2026, becoming the first team to defend the title. Whom did they beat in the final?",
    options: ["New Zealand", "Australia", "South Africa", "England"],
    answer: 0,
    explanation: "Led by Suryakumar Yadav, India beat New Zealand by a large margin at the Narendra Modi Stadium. It was India's record third T20 World Cup (2007, 2024, 2026) and the first time a host nation won the title. India and Sri Lanka co-hosted the event."
  },
  {
    id: 46,
    question: "In January 2026 the MP cabinet approved a sector policy whose draft had been unveiled at the MP Tech Growth Conclave in November 2025, with the aim of attracting about ₹1,000 crore of investment. Which sector does it cover?",
    options: ["Semiconductors", "Space technology", "Drones", "AVGC-XR (animation, gaming and extended reality)"],
    answer: 1,
    explanation: "The MP SpaceTech Policy, 2026 aims to attract satellite, launch-component and space-application firms, with a target of about ₹1,000 crore of investment and 8,000 jobs. Its draft was unveiled at Tech Growth Conclave 2.0 in Indore on 13 November 2025, and the cabinet approved it on 13 January 2026. Policies for semiconductors, drones, GCCs and AVGC-XR had been released earlier, at the first Tech Growth Conclave in Indore in April 2025."
  },
  {
    id: 47,
    question: "The G20 Leaders' Summit of November 2025, the first G20 summit held on the African continent, took place in which city?",
    options: ["Rio de Janeiro", "Cairo", "Nairobi", "Johannesburg"],
    answer: 3,
    explanation: "South Africa hosted the G20 summit in Johannesburg on 22–23 November 2025, the first on African soil, after the African Union became a permanent member under India's 2023 presidency. Rio de Janeiro hosted the 2024 summit under Brazil."
  },
  {
    id: 48,
    question: "An FSL trains a model on thousands of hair images that experts have already labelled 'human' or 'animal', so it can classify new images. Which type of machine learning is this?",
    options: ["Unsupervised learning", "Reinforcement learning", "Supervised learning", "Federated clustering"],
    answer: 2,
    explanation: "Supervised learning learns a mapping from inputs to known labels using labelled training data, and is used for classification and regression. Unsupervised learning finds structure such as clusters in unlabelled data, and reinforcement learning learns from rewards through trial and error."
  },
  {
    id: 49,
    question: "Which lightweight publish–subscribe messaging protocol is widely used to send data from low-power IoT sensors, such as evidence-room temperature loggers, to a server?",
    options: ["MQTT", "FTP", "SMTP", "POP3"],
    answer: 0,
    explanation: "MQTT (Message Queuing Telemetry Transport) uses a broker and small packet headers, so it suits constrained devices and unreliable networks. FTP transfers files, while SMTP and POP3 are email protocols."
  },
  {
    id: 50,
    question: "What is the legal status of documents issued to a citizen's DigiLocker account by the issuing authority?",
    options: ["They are valid only for central government purposes", "They are informational copies that need attestation", "They are deemed to be at par with the original physical documents", "They are valid only if printed and notarised"],
    answer: 2,
    explanation: "Under Rule 9A of the IT (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016, documents issued in DigiLocker are deemed at par with original physical documents. DigiLocker is a Digital India platform run by MeitY's National e-Governance Division."
  },
  {
    id: 51,
    question: "\"Physical evidence cannot be wrong, it cannot perjure itself, it cannot be wholly absent. Only human failure to find it, study and understand it can diminish its value.\" Who wrote this?",
    options: ["Edmond Locard", "Hans Gross", "Paul L. Kirk", "Alphonse Bertillon"],
    answer: 2,
    explanation: "The passage is from Paul Leland Kirk's 'Crime Investigation' (1953). Kirk, a Berkeley criminalist, stressed individualisation of evidence and gave important testimony on blood spatter in the Sam Sheppard case. Locard is known for the exchange principle."
  },
  {
    id: 52,
    question: "Which Austrian examining magistrate wrote the 1893 handbook that gave the field the name 'Kriminalistik' (criminalistics)?",
    options: ["Hans Gross", "Alphonse Bertillon", "Francis Galton", "Mathieu Orfila"],
    answer: 0,
    explanation: "Hans Gross's 'Handbuch für Untersuchungsrichter' (1893) brought medicine, physics, chemistry, botany and other sciences into criminal investigation, and he founded a criminology institute at Graz. Galton put fingerprint individuality on a statistical footing, and Bertillon devised anthropometry."
  },
  {
    id: 53,
    question: "Which of the following is an example of class-characteristic evidence rather than individualising evidence?",
    options: ["A 20-locus STR profile matching the suspect", "A physical fit between two torn edges of a document", "The ABO blood group of a stain", "A latent fingerprint with many matching minutiae"],
    answer: 2,
    explanation: "Class evidence can only place an item in a group shared by many sources. For example, about a third of people may share a given ABO group. Physical fits, fingerprints and full STR profiles can point to a single source or make other sources extremely unlikely."
  },
  {
    id: 54,
    question: "A hair from a victim's clenched fist has a stretched, distorted root with a translucent tissue tag attached. What does this indicate?",
    options: ["A naturally shed telogen hair", "A forcibly removed anagen hair", "A catagen hair shed during combing", "A hair cut with scissors"],
    answer: 1,
    explanation: "Hairs in the active growing (anagen) phase are firmly anchored, so pulling them out stretches the root and often brings follicular sheath tissue with it. This suggests a struggle, and the sheath cells usually allow nuclear STR typing. Telogen hairs have clean club roots and fall out naturally."
  },
  {
    id: 55,
    question: "Which insect family typically arrives late in decomposition and feeds on dried skin and tissue at the skeletal stage?",
    options: ["Calliphoridae", "Sarcophagidae", "Muscidae", "Dermestidae"],
    answer: 3,
    explanation: "Dermestid (hide or skin) beetles feed on dry remains, and museums use them to clean skeletons. Blowflies (Calliphoridae) and flesh flies (Sarcophagidae) colonise fresh to bloated remains. Because insects arrive in a predictable order (faunal succession), this order helps estimate longer post-mortem intervals."
  },
  {
    id: 56,
    question: "Fly larvae from a body cannot be identified to species by their appearance. Which molecular method is routinely used to identify them?",
    options: ["Amelogenin typing", "HV1 sequencing", "COI (cytochrome c oxidase I) barcoding", "SRY typing"],
    answer: 2,
    explanation: "A roughly 650 bp region of mitochondrial COI is the standard animal DNA barcode. Larval sequences are compared with reference sequences in BOLD or GenBank to identify the species, and the species must be known before its development data can be used to estimate PMI. Amelogenin, HV1 (human control region) and SRY are human markers."
  },
  {
    id: 57,
    question: "Studies of the thanatomicrobiome, which sequence the 16S rRNA of microbes colonising a body after death, mainly aim to do what?",
    options: ["Identify the poison that caused death", "Estimate the post-mortem interval", "Determine the sex of the deceased", "Confirm drowning"],
    answer: 1,
    explanation: "After death, microbial communities in organs and on the skin change in a predictable way, acting as a 'microbial clock'. Modelling these changes from 16S sequencing data can give PMI estimates, especially when insect evidence is not available. The method is still being validated for routine use."
  },
  {
    id: 58,
    question: "The Consortium for the Barcode of Life (CBOL) recommends which two loci as the core DNA barcode for land plants, which is useful in forensic botany?",
    options: ["rbcL and matK", "COI and cytochrome b", "ITS1 and amelogenin", "16S and 18S rRNA"],
    answer: 0,
    explanation: "The plastid genes rbcL and matK were adopted in 2009 as the core plant barcode, often supplemented by ITS2 or trnH-psbA. They can identify plant fragments, seeds or narcotic plant material when no flowers or leaves are left. COI works poorly in plants because plant mitochondrial genes evolve slowly."
  },
  {
    id: 59,
    question: "The Wildlife Institute of India, which runs a major wildlife forensic and conservation genetics cell that examines seized tiger, leopard and pangolin parts, is located in which city?",
    options: ["Kolkata", "Hyderabad", "Bhopal", "Dehradun"],
    answer: 3,
    explanation: "WII, Dehradun, an autonomous institute of the MoEFCC, provides species-identification reports in wildlife crime cases using morphology and mitochondrial DNA markers. CCMB's LaCONES in Hyderabad and the Zoological Survey of India in Kolkata also support wildlife DNA work."
  },
  {
    id: 60,
    question: "A spatter stain on a floor has a calculated impact angle of 30° and lies 100 cm from the area of convergence. Using the tangent method, approximately how high above the floor was the source?",
    options: ["50 cm", "57.7 cm", "86.6 cm", "173 cm"],
    answer: 1,
    explanation: "Height of origin = distance to the convergence point × tan(impact angle) = 100 × tan 30° = 100 × 0.577 ≈ 57.7 cm. Using sin 30° gives 50 cm and cos 30° gives 86.6 cm. The tangent method assumes straight-line paths, so it tends to overestimate the true height slightly."
  },
  {
    id: 61,
    question: "A fine mist of bloodstains, mostly less than 1 mm in diameter, around an entry wound is most typical of which mechanism?",
    options: ["Gunshot (high-velocity) impact", "A punch to the nose", "Passive dripping from a wound", "Cast-off from a swung bat"],
    answer: 0,
    explanation: "High-velocity impacts such as gunshots break blood into tiny droplets, mostly under 1 mm, that form a mist-like pattern. Blows with fists or bats give medium-velocity spatter of about 1–4 mm, and passive dripping produces large drops. Back-spatter from the entry wound may be found on the shooter or the weapon."
  },
  {
    id: 62,
    question: "Which post-mortem chemical change, rising roughly linearly for several days after death, is most often used to estimate the time since death?",
    options: ["Fall in serum sodium", "Rise in potassium in the vitreous humour", "Fall in CSF glucose", "Rise in blood urea"],
    answer: 1,
    explanation: "After death, potassium leaks from the cells of the retina and lens into the vitreous at a fairly steady rate. Formulae such as Sturner's relate vitreous K⁺ to PMI. The vitreous is well protected from contamination and putrefaction, which makes it a useful sample."
  },
  {
    id: 63,
    question: "A body recovered from a damp pond bed after several weeks has a greasy, waxy, rancid-smelling coating formed from body fat. What is this change called?",
    options: ["Mummification", "Autolysis", "Putrefactive bloating", "Adipocere formation (saponification)"],
    answer: 3,
    explanation: "Adipocere forms in moist, low-oxygen conditions when body fat is hydrolysed and hydrogenated into saturated fatty acids and soaps, helped by bacterial enzymes such as those of Clostridium perfringens. It usually takes weeks to months and can preserve the body's features and injuries. Mummification needs dry, warm conditions."
  },
  {
    id: 64,
    question: "Dental age in a child is estimated by grading the developmental stages of the seven left mandibular permanent teeth on radiographs. Which method is this?",
    options: ["Gustafson's method", "Demirjian's method", "Kvaal's method", "Lamendin's method"],
    answer: 1,
    explanation: "Demirjian's method (1973) assigns stages A–H to each tooth, converts them to maturity scores and adds them to read off a dental age. Kvaal (pulp-to-tooth ratio), Lamendin (root transparency and periodontosis) and Gustafson are adult methods based on regressive changes."
  },
  {
    id: 65,
    question: "In an adult skeleton, which feature is most widely used, through the Suchey–Brooks phases, to estimate age at death?",
    options: ["Epiphyseal union of the femur", "Closure of cranial sutures", "The face of the pubic symphysis", "Eruption of the third molars"],
    answer: 2,
    explanation: "The pubic symphyseal face changes from a ridged surface in young adults to a smooth or eroded surface in old age, and Suchey–Brooks describes six sex-specific phases. Epiphyseal union and tooth eruption are mainly useful up to the mid-20s, and suture closure is unreliable."
  },
  {
    id: 66,
    question: "Investigators want to know which geographic region an unidentified person lived in during childhood. Which analysis of the remains is most informative?",
    options: ["Stable isotope ratio analysis (oxygen, strontium) of tooth enamel", "ABO typing of bone", "Radiocarbon dating of hair", "Amelogenin typing"],
    answer: 0,
    explanation: "Tooth enamel forms in childhood and does not remodel, so it keeps the oxygen isotope signal of the drinking water and the strontium isotope signal of the local geology from that time. Comparing these with regional maps suggests where the person grew up. Bone and hair reflect more recent residence."
  },
  {
    id: 67,
    question: "A skull is photographed and its image overlaid on an ante-mortem photograph of a missing person to check whether the outlines and landmarks match. What is this technique?",
    options: ["Clay facial reconstruction", "Photogrammetry", "Craniofacial superimposition", "Cephalometry"],
    answer: 2,
    explanation: "Craniofacial superimposition aligns the skull and the face photo at matching orientation and scale, now often digitally, and compares landmarks and soft-tissue thickness. It is better at excluding identity than confirming it. Facial reconstruction builds an approximate face when there is no photograph to compare."
  },
  {
    id: 68,
    question: "Which is the most common primary fingerprint pattern in the general population?",
    options: ["Arches", "Loops", "Whorls", "Composites"],
    answer: 1,
    explanation: "Loops make up about 60–65% of fingerprint patterns, whorls about 30–35% and arches about 5%. Ridge patterns form in foetal life and do not change, except for scarring, which is the basis of fingerprint identification."
  },
  {
    id: 69,
    question: "To recover touch DNA from the smooth handle of a knife, which collection method is generally recommended?",
    options: ["The double-swab technique (moist swab followed by a dry swab)", "Scraping the handle with a scalpel into an envelope", "Spraying luminol and photographing", "Lifting with fingerprint powder and tape before swabbing"],
    answer: 0,
    explanation: "In the double-swab method (Sweet et al.), a swab moistened with sterile water loosens the cells and a second dry swab collects what remains. The two are usually combined for extraction. Scraping smooth surfaces collects little, and powdering first can reduce yield and contaminate the sample."
  },
  {
    id: 70,
    question: "The Will West case (1903) at Leavenworth prison, involving two men with nearly identical body measurements, discredited which identification system?",
    options: ["Fingerprinting", "Dental charting", "Portrait parlé photography", "Bertillonage (anthropometry)"],
    answer: 3,
    explanation: "Will West and William West had nearly the same Bertillon measurements, but their fingerprints were different. The case speeded up the replacement of anthropometry with fingerprinting. In India, the Henry–Haque–Bose system had already been adopted in 1897."
  },
  {
    id: 71,
    question: "What is the main advantage of typing forensic STRs by massively parallel sequencing (MPS) instead of capillary electrophoresis?",
    options: ["It detects sequence variation within repeats, revealing alleles of the same length that differ in sequence", "It needs no PCR amplification", "It is cheaper per sample for single cases", "It gives results faster than CE"],
    answer: 0,
    explanation: "CE separates alleles only by length, but MPS reads the actual sequence, so same-length alleles with internal sequence differences (isoalleles) can be told apart. This raises discrimination, especially in mixtures. Many markers can also be typed in one run. MPS still needs PCR library preparation and is usually slower and costlier per case."
  },
  {
    id: 72,
    question: "A forensic MPS kit such as ForenSeq DNA Signature Prep is designed to type which set of markers together in one library?",
    options: ["Only autosomal STRs", "Only the mtDNA control region", "Only Y-STRs and amelogenin", "Autosomal, X- and Y-STRs together with identity, ancestry and phenotype SNPs"],
    answer: 3,
    explanation: "ForenSeq combines CODIS and other autosomal STRs, X-STRs, Y-STRs, identity SNPs and, in one primer mix, ancestry- and phenotype-informative SNPs, all with sample-specific barcodes. This gives an identity profile plus investigative leads such as biogeographic ancestry and predicted eye and hair colour."
  },
  {
    id: 73,
    question: "The HERC2 SNP rs12913832, a key marker in HIrisPlex-type prediction systems, is most strongly associated with which trait?",
    options: ["Hair colour only", "Eye colour (blue versus brown)", "Skin pigmentation only", "Lactase persistence"],
    answer: 1,
    explanation: "rs12913832 lies in an enhancer in HERC2 that controls OCA2 expression, and its G/G genotype strongly predicts blue eyes. IrisPlex, HIrisPlex and HIrisPlex-S use small SNP panels to predict eye, hair and skin colour, giving investigative leads when there is no database match."
  },
  {
    id: 74,
    question: "Compared with STRs, what is the main limitation of SNPs for forensic identity testing?",
    options: ["Their long amplicons make them unsuitable for degraded DNA", "Their high mutation rate makes kinship analysis unreliable", "Being mostly biallelic, many more markers are needed and mixtures are hard to resolve", "They cannot be amplified by PCR"],
    answer: 2,
    explanation: "Each biallelic SNP is much less informative than a multi-allelic STR, so about 50–100 SNPs are needed to match the power of around 15 STRs. Mixtures are hard to separate because every contributor shows the same two alleles. SNPs do have short amplicons and low mutation rates, which help with degraded DNA and kinship."
  },
  {
    id: 75,
    question: "Which of these is a fully continuous probabilistic genotyping software that uses peak heights to interpret complex DNA mixtures?",
    options: ["LRmix Studio", "CODIS", "STRmix", "GeneMapper ID-X"],
    answer: 2,
    explanation: "STRmix, like TrueAllele and EuroForMix, models peak heights, stutter, degradation and drop-out to weigh possible genotype combinations and calculate an LR. LRmix Studio is semi-continuous, using only allele presence and drop-out and drop-in probabilities. GeneMapper is allele-calling software, and CODIS is a database."
  },
  {
    id: 76,
    question: "Fully continuous probabilistic genotyping software such as STRmix explores the possible genotype combinations of mixture contributors mainly by what method?",
    options: ["Training deep neural networks", "Markov chain Monte Carlo (MCMC) sampling", "The simple product rule", "Visual inspection of peak ratios"],
    answer: 1,
    explanation: "The number of possible genotype sets in a three- or four-person mixture is huge, so STRmix uses MCMC to sample them in proportion to how well they explain the observed peak heights. The resulting weights feed into the LR calculation. Runs must be checked for convergence, and the software validated in the lab."
  },
  {
    id: 77,
    question: "A DNA report gives a likelihood ratio of 0.01 for the propositions 'the suspect contributed' versus 'an unknown person contributed'. What is the correct interpretation?",
    options: ["The evidence is 100 times more probable if an unknown person, not the suspect, contributed", "There is a 1% probability that the suspect is guilty", "The evidence is 100 times more probable if the suspect contributed", "The evidence is uninformative"],
    answer: 0,
    explanation: "LR = P(E|Hp)/P(E|Hd). A value below 1 supports the defence proposition, and 0.01 means the evidence is 100 times more likely under Hd. Turning an LR into a probability of guilt is the 'prosecutor's fallacy'. An LR of exactly 1 would be uninformative."
  },
  {
    id: 78,
    question: "Rapid DNA instruments such as ANDE and RapidHIT, used in booking stations and disaster victim identification, are characterised by which feature?",
    options: ["They need a separate CE instrument to read results", "They type only SNP microarrays", "Each step must be performed manually by an analyst", "They integrate extraction, amplification, separation and detection to give a profile from a buccal swab in about 90–120 minutes"],
    answer: 3,
    explanation: "Rapid DNA systems are 'swab-in, profile-out' instruments with microfluidic cartridges that automate the whole process. They work best on single-source reference samples. Crime-scene samples and mixtures still need conventional lab analysis and expert review."
  },
  {
    id: 79,
    question: "What property makes certain SNPs 'ancestry-informative markers' (AIMs)?",
    options: ["Equal allele frequencies in all populations", "Large differences in allele frequency between populations", "Location only on the Y chromosome", "Very high mutation rates"],
    answer: 1,
    explanation: "AIMs have very different allele frequencies across continental populations, for example a SNP fixed in one group and rare in another. A panel of such markers lets software such as STRUCTURE or the Snipper classifier estimate biogeographic ancestry, which can guide an investigation when there is no database hit."
  },
  {
    id: 80,
    question: "A crime-scene profile gives no direct database hit, but it shares an unusually large number of alleles at every locus with one convicted offender. Which test would best support the idea that a brother of this offender is the source?",
    options: ["Comparing Y-STR haplotypes of the stain and the offender", "Reporting the offender as the source", "mtDNA sequencing of the stain alone", "ABO typing of the stain"],
    answer: 0,
    explanation: "Familial searching uses partial matches to identify possible close relatives. Matching Y-STR haplotypes would support a paternal relative such as a brother, father or son, and investigators then obtain a direct reference sample. The offender cannot be the source because the profiles differ, and mtDNA would also point to maternal relatives."
  },
  {
    id: 81,
    question: "The 2018 arrest of the 'Golden State Killer' using investigative genetic genealogy relied on uploading a SNP profile to which database?",
    options: ["CODIS", "Interpol DNA Gateway", "GEDmatch", "EMPOP"],
    answer: 2,
    explanation: "Investigators built a dense SNP profile from old crime-scene DNA and uploaded it to GEDmatch, a public genealogy database. Distant cousin matches led them, through family trees, to Joseph DeAngelo, which was confirmed by direct STR comparison. CODIS holds STR profiles of offenders, not genealogy data."
  },
  {
    id: 82,
    question: "In forensic mtDNA analysis, what does 'heteroplasmy' mean?",
    options: ["Two different nuclear alleles at an STR locus", "Recombination between maternal and paternal mtDNA", "Inheritance of mtDNA from the father", "More than one mtDNA sequence type present in the same individual"],
    answer: 3,
    explanation: "Heteroplasmy is the presence of a mixed mitochondrial population, often seen as two bases at one position (for example C/T at 16093). It may differ between tissues such as hair and blood, and labs account for it so that a single-base difference is not wrongly called an exclusion. MPS detects low-level heteroplasmy better than Sanger sequencing."
  },
  {
    id: 83,
    question: "Which molecular approach currently gives the most accurate estimate of a person's chronological age from a bloodstain?",
    options: ["Telomere length alone", "Y-STR mutation rates", "DNA methylation at age-associated CpG sites such as ELOVL2", "mtDNA copy number"],
    answer: 2,
    explanation: "Methylation at specific CpG sites (ELOVL2, FHL2, KLF14, TRIM59 and others) changes predictably with age. Models based on bisulfite sequencing can predict age within about 3–5 years in blood. Telomere length varies too much between individuals to be precise."
  },
  {
    id: 84,
    question: "In mRNA-based body-fluid identification, detecting the transcripts STATH (statherin) and HTN3 (histatin 3) indicates which fluid?",
    options: ["Semen", "Saliva", "Menstrual blood", "Vaginal fluid"],
    answer: 1,
    explanation: "Statherin and histatin are made by the salivary glands. Other markers include PRM1/PRM2 for semen, MMP7/MMP11 for menstrual blood, HBB/ALAS2 for blood, and MUC4 for vaginal fluid. mRNA and miRNA profiling can identify several fluids from a single extract, alongside DNA."
  },
  {
    id: 85,
    question: "In which kinship situation are X-chromosome STRs particularly useful?",
    options: ["Father–son paternity testing", "Detecting a male contributor in a mixture", "Tracing a maternal lineage over many generations", "Testing whether two women are paternal half-sisters"],
    answer: 3,
    explanation: "A father passes his single X chromosome unchanged to all his daughters, so paternal half-sisters must share the same paternal X haplotype. A father passes no X to his son, so X-STRs are useless for father–son tests. Y-STRs detect male DNA, and mtDNA traces maternal lineage."
  },
  {
    id: 86,
    question: "In a trio paternity test, the alleged father matches at 22 loci but differs from the child's obligate paternal allele by exactly one repeat at a single locus. What is the appropriate interpretation?",
    options: ["Exclusion of paternity", "A possible mutation, to be included in the calculation using the locus mutation rate rather than excluding", "A definite laboratory error", "A definite sample swap"],
    answer: 1,
    explanation: "STR mutation rates are about 10⁻³ per locus per generation and usually involve one-step changes, so a single isolated one-step inconsistency is most likely a mutation. Labs apply a mutation-based PI at that locus and usually require two or more inconsistencies before excluding. Many exclusions would point to non-paternity."
  },
  {
    id: 87,
    question: "In a qPCR quantification kit with a short and a long autosomal target, a degradation index (short/long ratio) of about 25 suggests what?",
    options: ["Significant DNA degradation", "PCR inhibition", "A high proportion of male DNA", "Contamination with non-human DNA"],
    answer: 0,
    explanation: "Degraded DNA amplifies the short target much better than the long one, so the ratio rises well above 1. This warns that larger STR loci may drop out, and the analyst may increase the input or choose miniSTR or SNP assays. Inhibition is shown by the internal PCR control."
  },
  {
    id: 88,
    question: "In massively parallel sequencing, what is the number of reads covering a given position or allele called?",
    options: ["Phred score", "Allele frequency", "Read depth (coverage)", "Stutter ratio"],
    answer: 2,
    explanation: "Read depth or coverage plays the same role as peak height in CE. Labs set analytical and interpretation thresholds, such as minimum reads per allele, to call alleles reliably. The Phred score measures the confidence of each base call, not how many reads cover a position."
  },
  {
    id: 89,
    question: "How does Ion Torrent (semiconductor) sequencing detect the incorporation of a nucleotide?",
    options: ["By imaging fluorescent reversible terminators", "By detecting hydrogen ions released, through a change in pH", "By detecting light from luciferase acting on pyrophosphate", "By measuring changes in ionic current through a nanopore"],
    answer: 1,
    explanation: "Each nucleotide incorporation releases a proton, and the ion-sensitive sensor beneath each well detects the resulting small drop in pH, so no optics are needed. Illumina uses fluorescent reversible terminators, 454 pyrosequencing used luciferase, and Oxford Nanopore measures current changes."
  },
  {
    id: 90,
    question: "Oxford Nanopore sequencing reads DNA by detecting what?",
    options: ["Bridge-amplified clusters imaged with lasers", "Light from pyrophosphate release", "Changes in ionic current as a single DNA strand passes through a protein pore", "The pH change when a nucleotide is incorporated"],
    answer: 2,
    explanation: "A motor protein feeds single-stranded DNA through a nanopore in a membrane, and each k-mer disrupts the ionic current in a characteristic way, which is decoded into bases. It gives very long reads in real time on portable devices, but its per-read error rate has been higher than Illumina's."
  },
  {
    id: 91,
    question: "Which presumptive blood test reagent is a reduced triphenylmethane dye that haem catalyses to oxidise, with peroxide, into a green colour?",
    options: ["Kastle–Meyer (phenolphthalin)", "Luminol", "Tetramethylbenzidine", "Leucomalachite green"],
    answer: 3,
    explanation: "Leucomalachite green (LMG) is oxidised by haem's peroxidase-like activity to malachite green. It is also used as a blood-enhancement reagent for footwear marks. Kastle–Meyer gives pink, TMB gives a blue-green benzidine-type colour, and luminol gives chemiluminescence."
  },
  {
    id: 92,
    question: "Why was the benzidine test for blood largely abandoned in forensic laboratories?",
    options: ["Benzidine is carcinogenic", "It is far less sensitive than other tests", "It reacts only with fresh blood", "It cannot be used on fabric"],
    answer: 0,
    explanation: "Benzidine is a known human carcinogen, so labs replaced it with safer derivatives such as tetramethylbenzidine (TMB) and with phenolphthalin and LMG. Benzidine was actually very sensitive, which was why it had been popular for so long."
  },
  {
    id: 93,
    question: "Unlike luminol, how must a fluorescein-based blood enhancement reagent be viewed?",
    options: ["Under an alternative light source of about 450 nm, viewed through orange goggles", "In complete darkness without any light", "After heating the surface to 100 °C", "Only under a UV-C lamp at 254 nm"],
    answer: 0,
    explanation: "Reduced fluorescein is oxidised in the presence of haem to fluorescein, which fluoresces only when excited by blue light of about 450 nm. Barrier filters are needed to see the glow, but the room need not be completely dark. Luminol needs darkness because it emits its own chemiluminescent light."
  },
  {
    id: 94,
    question: "The RSID-Semen lateral-flow test confirms semen by detecting which protein?",
    options: ["Prostate-specific antigen", "Acid phosphatase", "Semenogelin", "Spermine"],
    answer: 2,
    explanation: "RSID-Semen uses monoclonal antibodies against semenogelin, a seminal vesicle protein that forms the semen coagulum. Like PSA, it is present in semen from vasectomised men. It is reported to be more specific than PSA, which also occurs at low levels in some female fluids and urine."
  },
  {
    id: 95,
    question: "In the Barberio test for seminal fluid, what are the yellow needle-shaped crystals formed with picric acid?",
    options: ["Choline periodide", "Spermine picrate", "Haemin", "Pyridine haemochromogen"],
    answer: 1,
    explanation: "The Barberio test detects spermine, which forms yellow spermine picrate crystals. The Florence test uses iodine–potassium iodide to form brown choline periodide crystals. Both are presumptive, because other tissues also contain spermine and choline."
  },
  {
    id: 96,
    question: "A stain donor's red cells are not agglutinated by anti-A, anti-B or anti-H, and the serum contains anti-A, anti-B and anti-H. Which blood type is this?",
    options: ["Group O", "Weak A subgroup", "Rh-null", "Bombay phenotype (Oh)"],
    answer: 3,
    explanation: "Bombay (Oh) individuals are homozygous for inactive FUT1 (h/h), so they cannot make H substance, the precursor of A and B antigens. Ordinary group O cells carry abundant H antigen and react with anti-H lectin (Ulex europaeus). The phenotype was first described in Mumbai in 1952."
  },
  {
    id: 97,
    question: "Before DNA typing, which red-cell enzyme polymorphism, typed by starch-gel electrophoresis and later by isoelectric focusing, was widely used to help individualise bloodstains?",
    options: ["Lactate dehydrogenase", "Catalase", "Phosphoglucomutase (PGM1)", "Alkaline phosphatase"],
    answer: 2,
    explanation: "PGM1 has common variants (1+, 1−, 2+, 2− by IEF) that are stable in dried stains, so it was combined with ABO, EAP, EsD and haptoglobin typing for discrimination. STR typing has since made these protein systems obsolete."
  },
  {
    id: 98,
    question: "When an antibody reacts with a soluble antigen, such as a serum protein, to form a visible insoluble lattice, what is the reaction called?",
    options: ["Agglutination", "Precipitation", "Complement fixation", "Neutralisation"],
    answer: 1,
    explanation: "Precipitation involves soluble antigens and is the basis of the precipitin, Ouchterlony and immunoelectrophoresis tests. Agglutination involves particulate antigens such as red cells, as in ABO grouping. Maximum precipitation occurs at the zone of equivalence."
  },
  {
    id: 99,
    question: "Proteins are separated by SDS-PAGE, transferred to a nitrocellulose membrane and probed with a labelled antibody to detect a specific protein. What is this technique called?",
    options: ["Southern blotting", "Northern blotting", "Western blotting", "Dot-blot hybridisation"],
    answer: 2,
    explanation: "Western blotting combines size separation with antibody specificity. Southern blotting detects DNA fragments, as in RFLP-era DNA fingerprinting, and Northern blotting detects RNA. Dot blots apply samples without separation, as in early HLA-DQA1 typing strips."
  },
  {
    id: 100,
    question: "In which immunodiffusion technique is the square of the diameter of the precipitin ring proportional to the antigen concentration?",
    options: ["Rocket immunoelectrophoresis", "Single radial immunodiffusion (Mancini)", "Ouchterlony double diffusion", "Counter-current immunoelectrophoresis"],
    answer: 1,
    explanation: "In single radial immunodiffusion, antigen diffuses from a well into agar containing antibody and forms a ring. At the end-point (Mancini), the square of the ring diameter is proportional to antigen concentration, which is read against standards. It quantifies proteins such as immunoglobulins."
  },
  {
    id: 101,
    question: "In which technique does the antigen migrate electrophoretically into antibody-containing agarose, forming a peak whose height is proportional to the antigen concentration?",
    options: ["Rocket immunoelectrophoresis (Laurell)", "Single radial immunodiffusion", "Immunofixation", "Ouchterlony double diffusion"],
    answer: 0,
    explanation: "Laurell's rocket immunoelectrophoresis drives antigen into the antibody gel, giving rocket-shaped precipitates within hours. The rocket height or area is proportional to antigen concentration. It is faster than radial immunodiffusion, which relies on diffusion alone."
  },
  {
    id: 102,
    question: "In indirect immunofluorescence, to what is the fluorochrome (such as FITC) attached?",
    options: ["The antigen", "The primary antibody", "A secondary anti-immunoglobulin antibody", "Complement"],
    answer: 2,
    explanation: "In the indirect method, an unlabelled primary antibody binds the target, and a fluorescent secondary antibody against the primary's immunoglobulin then binds it. Several secondary antibodies bind each primary, which amplifies the signal. In direct immunofluorescence, the primary antibody itself carries the label."
  },
  {
    id: 103,
    question: "EMIT, widely used for screening drugs of abuse in urine, is a homogeneous enzyme immunoassay. What does 'homogeneous' mean here?",
    options: ["It needs a radioactive label", "It needs the bound and free label to be separated", "It is a precipitation assay", "No separation step is needed, because enzyme activity changes when antibody binds the drug–enzyme conjugate"],
    answer: 3,
    explanation: "In EMIT, drug in the sample competes with a drug–enzyme (G6PDH) conjugate for antibody. Free conjugate stays active, so enzyme activity, measured as NADH at 340 nm, rises with drug concentration. Because no wash step is needed, it is easy to automate. Positives must be confirmed by GC-MS or LC-MS/MS."
  },
  {
    id: 104,
    question: "A human-haemoglobin immunochromatographic card can also give a positive result with blood from which animals?",
    options: ["Higher primates and ferrets", "Dogs and cats", "Cattle and goats", "Chickens"],
    answer: 0,
    explanation: "The monoclonal antibodies in kits such as HemaTrace and Hexagon OBTI react with human haemoglobin and also with that of higher primates and mustelids such as ferrets. In practice the test is treated as human/higher-primate specific. It is also sensitive enough to detect haemoglobin in other body fluids."
  },
  {
    id: 105,
    question: "Glycogen-rich vaginal epithelial cells in a swab smear stain dark brown with which reagent?",
    options: ["Christmas tree stain", "Crystal violet", "Methylene blue", "Lugol's iodine"],
    answer: 3,
    explanation: "Iodine stains glycogen mahogany-brown, and mature vaginal squamous cells, under oestrogen influence, are rich in glycogen. This is used as a presumptive marker for vaginal fluid, for example on a penile swab. Buccal cells are generally much less glycogenated. PAS staining is an alternative."
  },
  {
    id: 106,
    question: "Green fluorescence after treating a stain extract with alcoholic zinc chloride (the Edelman or Schlesinger test) indicates which constituent of faeces?",
    options: ["Bilirubin", "Urobilinoids (urobilin and stercobilin)", "Creatinine", "Amylase"],
    answer: 1,
    explanation: "Bacterial breakdown of bilirubin in the gut produces urobilinogen and stercobilinogen. Once oxidised to urobilin and stercobilin, these form green-fluorescent zinc complexes. Microscopy for undigested plant cells and bacterial DNA markers also help identify faecal stains."
  },
  {
    id: 107,
    question: "Tamm–Horsfall protein (uromodulin), detectable by immunoassay, is a specific marker for which body fluid?",
    options: ["Saliva", "Semen", "Urine", "Sweat"],
    answer: 2,
    explanation: "Uromodulin is made only by the thick ascending limb of the loop of Henle and is the most abundant protein in normal urine. Detecting it by ELISA or immunochromatography confirms urine more specifically than urea or creatinine tests."
  },
  {
    id: 108,
    question: "An examiner searches a bedsheet for possible semen stains with a forensic light source. Which combination is most appropriate?",
    options: ["UV-C at 254 nm with no filter", "Red light at 650 nm", "Infrared with clear goggles", "Blue light around 450 nm viewed through orange filter goggles"],
    answer: 3,
    explanation: "Semen fluoresces when excited by blue or near-UV light (about 415–490 nm), and the orange barrier filter blocks the excitation light so the faint emission can be seen. Positive areas are then tested for AP, PSA or semenogelin. Short-wave UV-C can damage DNA and is avoided."
  },
  {
    id: 109,
    question: "What is the main advantage of monoclonal over polyclonal antibodies in forensic immunoassays?",
    options: ["They recognise a single epitope with uniform specificity and can be produced consistently", "They recognise many epitopes, which raises sensitivity", "They are cheaper because a new animal is immunised for each batch", "They do not need any antigen for production"],
    answer: 0,
    explanation: "A hybridoma clone secretes identical antibody against one epitope, so every batch has the same specificity and cross-reactivity, which is essential for validated kits. Polyclonal antisera vary between animals and bleeds. The narrow specificity of monoclonals can, however, make them sensitive to changes in that epitope."
  },
  {
    id: 110,
    question: "The RSID-Blood lateral-flow test confirms human blood by detecting which red-cell protein?",
    options: ["Haemoglobin", "Glycophorin A", "Albumin", "Transferrin"],
    answer: 1,
    explanation: "RSID-Blood uses antibodies against glycophorin A, a sialoglycoprotein of the human red-cell membrane. This makes it specific to blood, whereas haemoglobin-based cards can also react weakly with other fluids that contain traces of haemoglobin."
  },
  {
    id: 111,
    question: "In a triple-quadrupole LC-MS/MS method for drugs in blood, Q1 selects a precursor ion, q2 fragments it, and Q3 passes only a chosen product ion. What is this acquisition mode called?",
    options: ["Full-scan mode", "Multiple reaction monitoring (MRM)", "Selected ion monitoring on a single quadrupole", "Time-of-flight accurate-mass scanning"],
    answer: 1,
    explanation: "MRM (also called SRM) monitors specific precursor→product transitions, giving very high selectivity and sensitivity for target analytes at ng/mL levels. Identification usually needs two transitions with a matching ion ratio plus matching retention time. Full scan and TOF are used for untargeted screening."
  },
  {
    id: 112,
    question: "Which soft ionisation technique, used as the standard LC-MS interface, produces mainly protonated [M+H]⁺ ions from the liquid eluent?",
    options: ["Electrospray ionisation", "Electron ionisation", "Inductively coupled plasma", "Flame ionisation"],
    answer: 0,
    explanation: "In electrospray ionisation, a high voltage applied to the eluent forms charged droplets that evaporate and release intact ions such as [M+H]⁺ or [M−H]⁻, with little fragmentation. Electron ionisation is a hard vacuum technique used in GC-MS. ICP ionises samples to elements for metal analysis."
  },
  {
    id: 113,
    question: "A high-resolution mass spectrometer measures the [M+H]⁺ ion of a suspected cocaine sample at m/z 304.1541. The theoretical value is 304.1543. What is the mass error?",
    options: ["About 0.066 ppm", "About 6.6 ppm", "About 66 ppm", "About 0.66 ppm"],
    answer: 3,
    explanation: "Mass error (ppm) = (measured − theoretical)/theoretical × 10⁶ = (−0.0002/304.1543) × 10⁶ ≈ −0.66 ppm. Orbitrap and Q-TOF instruments routinely achieve errors below 5 ppm, so they can propose elemental formulae for unknown new psychoactive substances."
  },
  {
    id: 114,
    question: "Customs officers identify a seized white powder through its transparent plastic packet with a handheld instrument that measures inelastic scattering of laser light. Which technique is this?",
    options: ["FTIR transmission spectroscopy", "UV-visible spectrophotometry", "Atomic absorption spectroscopy", "Raman spectroscopy"],
    answer: 3,
    explanation: "Raman spectroscopy records the small shifts in wavelength of laser light scattered by molecular vibrations, giving a fingerprint spectrum. Glass and many plastics give weak Raman signals, so samples can be tested through packaging without opening them. Strong fluorescence, as in some street samples, can interfere."
  },
  {
    id: 115,
    question: "Mephedrone (4-methylmethcathinone), sold as 'meow meow' or 'bath salts', belongs to which class of new psychoactive substances?",
    options: ["Synthetic cannabinoids", "NBOMe phenethylamines", "Synthetic cathinones", "Tryptamines"],
    answer: 2,
    explanation: "Cathinones are β-keto analogues of amphetamines, derived from the khat plant alkaloid cathinone. Mephedrone was placed under the NDPS Act in 2015. Synthetic cannabinoids (such as the JWH series) act on CB1 receptors, and NBOMes are potent hallucinogenic phenethylamines."
  },
  {
    id: 116,
    question: "Under the NDPS notification on small and commercial quantities, what is the commercial quantity for heroin (diacetylmorphine)?",
    options: ["5 g", "50 g", "250 g", "1 kg"],
    answer: 2,
    explanation: "For heroin, the small quantity is 5 g and the commercial quantity is 250 g. Quantities in between are 'intermediate'. The quantity class decides the range of punishment under Sections 21 and 22, and in commercial-quantity cases Section 37 restricts bail."
  },
  {
    id: 117,
    question: "In atomic absorption spectrometry for lead in blood, what light source is used?",
    options: ["A hollow cathode lamp of the element being measured", "A deuterium lamp", "A tungsten–halogen lamp", "A Nernst glower"],
    answer: 0,
    explanation: "A hollow cathode lamp with a lead cathode emits lead's own narrow resonance lines, which only lead atoms in the flame or graphite furnace can absorb. This makes AAS highly element-specific. Deuterium lamps provide continuous UV and are used for background correction."
  },
  {
    id: 118,
    question: "Which technique offers the lowest detection limits and simultaneous multi-element analysis for trace metals, such as thallium or arsenic in hair and nails?",
    options: ["Flame AAS", "ICP-MS", "UV-visible spectrophotometry", "Thin-layer chromatography"],
    answer: 1,
    explanation: "ICP-MS ionises the sample in an argon plasma at about 6,000–10,000 K and separates the elemental ions by m/z, detecting many elements at once at sub-ppb levels. Segmental analysis of hair can show when exposure occurred in chronic poisoning cases."
  },
  {
    id: 119,
    question: "In a suspected chronic poisoning, a drug is found only in the hair segment 3–4 cm from the scalp. Assuming head hair grows about 1 cm a month, when did the exposure most likely occur?",
    options: ["About 3–4 weeks before sampling", "About 3–4 months before sampling", "About 1 year before sampling", "About 3–4 days before sampling"],
    answer: 1,
    explanation: "At roughly 1 cm per month, the 3–4 cm segment represents hair formed 3–4 months earlier. Segmental analysis by LC-MS/MS can therefore build a timeline of exposure. Hair cut close to the scalp from the posterior vertex gives the most consistent growth rate."
  },
  {
    id: 120,
    question: "A body found in a closed room with a coal stove shows cherry-red lividity. How is the saturation of carboxyhaemoglobin in the blood usually measured?",
    options: ["By CO-oximetry (multi-wavelength spectrophotometry)", "By the Marsh test", "By the Reinsch test", "By the Kastle–Meyer test"],
    answer: 0,
    explanation: "CO-oximeters measure absorbance at several wavelengths to work out the proportions of oxy-, deoxy-, carboxy- and methaemoglobin. Saturations above about 50% are generally fatal. Headspace GC after releasing CO is an alternative. Marsh and Reinsch are arsenic tests, and Kastle–Meyer is a blood test."
  },
  {
    id: 121,
    question: "Travellers who ate sweets given by a stranger show hot dry skin, dilated pupils, flushing and delirium, which suits the mnemonic 'dry as a bone, red as a beet, mad as a hatter'. Which poison is most likely?",
    options: ["Aconite", "Strychnine", "Yellow oleander", "Datura (tropane alkaloids)"],
    answer: 3,
    explanation: "Datura seeds contain atropine and scopolamine, which block muscarinic receptors and cause this anticholinergic picture. Robbers in India have used them to stupefy victims ('road poisoning'). The alkaloids can be detected by GC-MS or LC-MS/MS, and a mydriasis test on a cat's eye was used historically."
  },
  {
    id: 122,
    question: "Poisoning with yellow oleander (Cascabela thevetia) seeds, a common method of self-harm in South Asia, causes heart block mainly because of which toxins?",
    options: ["Aconitine", "Abrin", "Thevetin and related cardiac glycosides", "Ricin"],
    answer: 2,
    explanation: "Thevetins A and B inhibit Na⁺/K⁺-ATPase, as digoxin does, causing vomiting, hyperkalaemia, bradyarrhythmias and AV block. Anti-digoxin Fab fragments are used in treatment. Abrin (from Abrus) and ricin (from castor) inhibit ribosomes, and aconitine opens sodium channels."
  },
  {
    id: 123,
    question: "In which sample clean-up method are analytes in urine or blood retained on a sorbent cartridge, washed free of interferents, and then eluted with a suitable solvent?",
    options: ["Liquid–liquid extraction", "Solid-phase extraction", "Steam distillation", "Dialysis"],
    answer: 1,
    explanation: "Solid-phase extraction uses reversed-phase, ion-exchange or mixed-mode sorbents to concentrate and purify drugs before GC-MS or LC-MS/MS. Compared with liquid–liquid extraction, it uses less solvent, gives cleaner extracts and is easy to automate. Steam distillation is used for volatile poisons."
  },
  {
    id: 124,
    question: "Why must a positive urine immunoassay screen for opiates be confirmed by GC-MS or LC-MS/MS before it is reported?",
    options: ["Immunoassays can cross-react with structurally related compounds, such as codeine from cough syrup or poppy seeds", "GC-MS is cheaper than immunoassay", "Immunoassays cannot detect drugs in urine at all", "Courts accept only chromatograms"],
    answer: 0,
    explanation: "Antibodies recognise shared structural features, so related drugs, metabolites and even some unrelated compounds can trigger a positive screen. Mass spectrometry identifies the exact compound, for example 6-monoacetylmorphine, which is specific for heroin. This two-tier approach is standard forensic practice."
  },
  {
    id: 125,
    question: "Which of these alcohol biomarkers is a direct, non-oxidative ethanol metabolite that can be measured in hair to show chronic excessive drinking over the previous months?",
    options: ["Carbohydrate-deficient transferrin (CDT)", "Gamma-glutamyl transferase (GGT)", "Mean corpuscular volume (MCV)", "Ethyl glucuronide (EtG)"],
    answer: 3,
    explanation: "EtG is a minor non-oxidative metabolite of ethanol that is incorporated into growing hair. Concentrations of 30 pg/mg or more in the proximal 0–3 cm suggest chronic excessive drinking (SoHT consensus). CDT, GGT and MCV are indirect blood markers that reflect the effects of drinking rather than ethanol itself, and they cover only the past few weeks."
  },
  {
    id: 126,
    question: "In capillary electrophoresis with an uncoated fused-silica capillary at neutral or basic pH, the bulk flow of buffer toward the cathode is caused by what?",
    options: ["Electroosmotic flow", "Gravity", "Capillary action", "Pressure from a syringe pump"],
    answer: 0,
    explanation: "Ionised silanol groups give the capillary wall a negative charge. The hydrated cations they attract move toward the cathode under the applied field and drag the whole buffer with them. This flow carries even anions to the detector. DNA sequencers use coated capillaries and polymer to suppress it."
  },
  {
    id: 127,
    question: "Which microscope uses a pinhole aperture to reject out-of-focus light, producing sharp optical sections that can be stacked into 3-D images of, for example, a fibre cross-section or a diatom frustule?",
    options: ["Phase-contrast microscope", "Dark-field microscope", "Confocal laser scanning microscope", "Stereomicroscope"],
    answer: 2,
    explanation: "A confocal microscope scans a focused laser point by point and passes light from the focal plane only through a conjugate pinhole to the detector. Imaging at different depths builds a 3-D reconstruction. Phase contrast and dark field improve contrast but do not produce optical sections."
  },
  {
    id: 128,
    question: "Surface-topography images in a scanning electron microscope are formed mainly by detecting which signal?",
    options: ["Transmitted photons", "Secondary electrons", "Fluorescent light", "Neutrons"],
    answer: 1,
    explanation: "Low-energy secondary electrons ejected from near the surface reveal fine topography with a large depth of field. Backscattered electrons show contrast by atomic number, and characteristic X-rays allow EDX elemental analysis, as in gunshot residue and hair-scale studies."
  },
  {
    id: 129,
    question: "What is the shift of emitted fluorescent light to a longer wavelength than the excitation light, which makes alternative-light-source searches possible, called?",
    options: ["Rayleigh scattering", "Doppler shift", "Compton effect", "Stokes shift"],
    answer: 3,
    explanation: "Part of the absorbed energy is lost through vibrational relaxation before emission, so fluorescence is red-shifted. This is the Stokes shift. Barrier filters block the excitation wavelength and transmit the longer emission wavelengths, making fluorescent stains or fibres visible."
  },
  {
    id: 130,
    question: "Which gas chromatography detector is highly sensitive and selective for halogenated compounds such as organochlorine pesticides?",
    options: ["Flame ionisation detector", "Thermal conductivity detector", "Electron capture detector", "Nitrogen–phosphorus detector"],
    answer: 2,
    explanation: "The ECD uses a ⁶³Ni β-source to produce a standing current. Electronegative halogen atoms capture electrons and reduce this current, so detection reaches picogram levels. The NPD is selective for nitrogen- and phosphorus-containing compounds such as organophosphates, and the FID responds to most organic compounds."
  },
  {
    id: 131,
    question: "The SHERLOCK CRISPR diagnostic platform detects target RNA through the collateral cleavage activity of which Cas enzyme?",
    options: ["Cas9", "Cas12a", "Cas3", "Cas13a"],
    answer: 3,
    explanation: "SHERLOCK (Specific High-sensitivity Enzymatic Reporter unLOCKing) uses Cas13a. Once it binds its RNA target, it cuts nearby single-stranded RNA reporters, releasing a fluorescent or lateral-flow signal, usually after isothermal pre-amplification. Its attomolar sensitivity makes field-deployable tests possible, and forensic uses such as species identification are being explored."
  },
  {
    id: 132,
    question: "The DETECTR assay detects target DNA because, after recognising its target, which Cas enzyme cuts nearby single-stranded DNA reporters indiscriminately?",
    options: ["Cas12a", "Cas13a", "Cas9 nickase", "Cas1"],
    answer: 0,
    explanation: "Cas12a (Cpf1) recognises double-stranded DNA next to a T-rich PAM and then shows trans-cleavage of ssDNA reporters, giving a fluorescent or strip readout. Combined with RPA amplification, DETECTR gives sensitive point-of-care DNA detection. Cas13a, used in SHERLOCK, targets RNA instead."
  },
  {
    id: 133,
    question: "FELUDA, India's CRISPR-based COVID-19 paper-strip test named after Satyajit Ray's detective, uses FnCas9. Which institute developed it?",
    options: ["ICMR-NIV, Pune", "CSIR-CCMB, Hyderabad", "ICGEB, New Delhi", "CSIR-IGIB, Delhi"],
    answer: 3,
    explanation: "FELUDA (FnCas9 Editor Linked Uniform Detection Assay) was developed at the CSIR-Institute of Genomics and Integrative Biology and approved in 2020. FnCas9, from Francisella novicida, discriminates single-base mismatches very well, which also makes it promising for SNP-based identification."
  },
  {
    id: 134,
    question: "Who were awarded the 2020 Nobel Prize in Chemistry for developing CRISPR-Cas9 as a method of genome editing?",
    options: ["Kary Mullis and Michael Smith", "Alec Jeffreys and Frederick Sanger", "Emmanuelle Charpentier and Jennifer Doudna", "Georges Köhler and César Milstein"],
    answer: 2,
    explanation: "Charpentier and Doudna showed in 2012 that Cas9 guided by a programmable RNA can cut any chosen DNA sequence. Mullis and Smith shared the 1993 Chemistry Nobel for PCR and site-directed mutagenesis. Jeffreys, who invented DNA fingerprinting, did not receive a Nobel Prize."
  },
  {
    id: 135,
    question: "Which file format stores both the nucleotide sequence of each sequencing read and a quality score for every base?",
    options: ["FASTQ", "FASTA", "GenBank flat file", "PDB"],
    answer: 0,
    explanation: "Each FASTQ record has four lines: an identifier beginning with @, the sequence, a + line, and ASCII-encoded Phred quality scores. FASTA (header beginning with >) stores sequence only. PDB files hold 3-D macromolecular structures."
  },
  {
    id: 136,
    question: "A base call in an MPS run has a Phred quality score of Q30. What is the probability that the call is wrong?",
    options: ["1 in 30", "1 in 100", "1 in 300", "1 in 1,000"],
    answer: 3,
    explanation: "Q = −10 log₁₀(P), so P = 10^(−Q/10) = 10⁻³, or 1 in 1,000, meaning 99.9% accuracy. Q20 corresponds to 1 in 100. The percentage of bases at or above Q30 is a standard run-quality metric."
  },
  {
    id: 137,
    question: "Which NCBI tool compares a query DNA or protein sequence against databases to find similar sequences and report their statistical significance (E-values)?",
    options: ["BLAST", "Clustal Omega", "PyMOL", "PHYLIP"],
    answer: 0,
    explanation: "BLAST (Basic Local Alignment Search Tool) uses fast heuristic local alignment, for example to identify the species of origin of a COI or cytochrome b sequence. Clustal Omega performs multiple sequence alignment, PyMOL visualises protein structures, and PHYLIP builds phylogenetic trees."
  },
  {
    id: 138,
    question: "The FBI's CODIS DNA database is organised in which three tiers?",
    options: ["International, national and regional", "Central, state and regional laboratories", "Federal, county and city", "Local (LDIS), State (SDIS) and National (NDIS)"],
    answer: 3,
    explanation: "Profiles start at the Local DNA Index System of individual labs, move up to the State system, and then to the National DNA Index System, with searches at each level. Indices include convicted offender, arrestee, forensic (crime scene), missing person and unidentified human remains."
  },
  {
    id: 139,
    question: "Which country set up the world's first national criminal DNA database, in 1995?",
    options: ["United States", "United Kingdom", "Netherlands", "Germany"],
    answer: 1,
    explanation: "The UK National DNA Database (NDNAD) began in April 1995 and became one of the largest per head of population. The European Court's judgment in S and Marper v. UK (2008) led to stricter rules on keeping profiles of people not convicted. CODIS's national tier (NDIS) began in 1998."
  },
  {
    id: 140,
    question: "Which curated, quality-controlled forensic database is used to estimate the frequency of mitochondrial DNA haplotypes?",
    options: ["YHRD", "EMPOP", "STRBase", "GEDmatch"],
    answer: 1,
    explanation: "EMPOP, the EDNAP mtDNA Population Database hosted at Innsbruck, holds quality-checked control-region and mitogenome haplotypes for frequency estimation. YHRD is its counterpart for Y-STR haplotypes, STRBase is NIST's reference site for STR loci, and GEDmatch is a genealogy database."
  },
  {
    id: 141,
    question: "Which software assigns an mtDNA haplogroup to a sample from its list of variants relative to the rCRS, based on the PhyloTree phylogeny?",
    options: ["HaploGrep", "STRmix", "BLAST", "GeneMapper ID-X"],
    answer: 0,
    explanation: "HaploGrep compares observed mutations with the PhyloTree reference phylogeny and ranks the best-fitting haplogroups. Checking haplogroup consistency helps catch sequencing errors, mixtures and phantom mutations in forensic mtDNA data. STRmix interprets STR mixtures."
  },
  {
    id: 142,
    question: "In bottom-up proteomics, proteins are usually digested with trypsin before mass spectrometry. Where does trypsin cleave?",
    options: ["N-terminal to aromatic residues", "After methionine residues", "C-terminal to lysine and arginine, except before proline", "At aspartate residues"],
    answer: 2,
    explanation: "Trypsin cuts after Lys or Arg, giving predictable peptides of convenient size with a basic C-terminus that ionises well. Chymotrypsin cleaves after aromatic residues and cyanogen bromide after methionine. Software matches the observed peptide masses or fragment spectra to in-silico digests."
  },
  {
    id: 143,
    question: "In forensic hair-shaft proteomics, 'genetically variant peptides' (GVPs) detected by mass spectrometry reflect what?",
    options: ["mtDNA control-region variants", "STR allele lengths", "Age-related DNA methylation", "Non-synonymous SNPs in the person's genome"],
    answer: 3,
    explanation: "A non-synonymous SNP changes an amino acid, so a peptide carrying that substitution reveals the person's genotype at that SNP even though the hair shaft has almost no nuclear DNA. Combining many GVPs gives a random match probability. Proteins are also more stable than DNA in degraded samples."
  },
  {
    id: 144,
    question: "A protein is identified by comparing the masses of its tryptic peptides, measured by MALDI-TOF, with the theoretical digests of proteins in a database. What is this approach called?",
    options: ["Peptide mass fingerprinting", "Edman degradation", "Western blotting", "Isoelectric focusing"],
    answer: 0,
    explanation: "In peptide mass fingerprinting, the set of peptide masses is characteristic of a protein, and search engines such as Mascot score the matches. It works best for single proteins, such as spots cut from 2-D gels. Edman degradation reads the sequence one residue at a time from the N-terminus."
  },
  {
    id: 145,
    question: "In which city of Madhya Pradesh does a Central Forensic Science Laboratory under the Directorate of Forensic Science Services function?",
    options: ["Indore", "Jabalpur", "Bhopal", "Gwalior"],
    answer: 2,
    explanation: "CFSL Bhopal (2011) is one of the seven DFSS laboratories under the MHA, alongside Kolkata, Hyderabad, Chandigarh, Pune, Guwahati and Delhi, and it is the DFSS centre of excellence for physical sciences. It is separate from the state's own FSL network, which is headquartered at Sagar with regional laboratories in other cities."
  },
  {
    id: 146,
    question: "Why are FTA cards widely used for collecting reference blood or buccal samples for DNA databases?",
    options: ["They must be stored frozen at −80 °C", "They cannot be used for blood samples", "They must be kept in liquid nitrogen", "Their chemical treatment lyses cells, denatures proteins and protects DNA, allowing storage at room temperature"],
    answer: 3,
    explanation: "FTA paper is impregnated with a chelator, a denaturant and a buffer that kill microbes, inactivate nucleases and bind DNA, keeping it stable for years at ambient temperature. A small punch can go straight into a direct PCR workflow, which makes FTA cards suitable for high-throughput database labs."
  },
  {
    id: 147,
    question: "For DNA identification of skeletonised or very old remains, which bone sample usually gives the highest DNA yield?",
    options: ["The petrous part of the temporal bone", "Ribs", "The spongy vertebral body", "Hand phalanges"],
    answer: 0,
    explanation: "The very dense petrous bone protects endogenous DNA well and has become the preferred sample in ancient-DNA and DVI work. Dense cortical bone, such as the femoral midshaft, and teeth are also good choices. Spongy bone degrades and becomes contaminated faster."
  },
  {
    id: 148,
    question: "Autopsy tissue meant for DNA typing should not be fixed in formalin. Why?",
    options: ["Formalin is highly flammable", "Formalin cross-links and fragments DNA, inhibiting PCR", "Formalin dissolves cell membranes completely", "Formalin is too costly for routine use"],
    answer: 1,
    explanation: "Formaldehyde forms DNA–protein cross-links and causes strand breaks and base changes, so typing from formalin-fixed tissue is difficult and often gives only short amplicons. Fresh tissue for DNA should be kept frozen, or a blood card or deep muscle sample kept dry or frozen, without fixative."
  },
  {
    id: 149,
    question: "STRBase, the online reference for forensic STR loci, allele nomenclature, variant alleles and population data, is maintained by which organisation?",
    options: ["FBI", "Interpol", "ENFSI", "NIST (USA)"],
    answer: 3,
    explanation: "STRBase was developed by John Butler's group at the US National Institute of Standards and Technology and is now also a resource for STR sequence nomenclature in the MPS era. NIST also produces Standard Reference Materials, such as SRM 2391, used to calibrate DNA typing."
  },
  {
    id: 150,
    question: "After Cas9 makes a double-strand break, which error-prone cellular repair pathway often introduces small insertions or deletions that knock out the gene?",
    options: ["Homology-directed repair", "Mismatch repair", "Non-homologous end joining", "Base excision repair"],
    answer: 2,
    explanation: "Non-homologous end joining ligates broken ends directly, often adding or removing a few bases. These indels can shift the reading frame and disrupt the gene. Homology-directed repair uses a template to make precise edits but is less efficient, and mismatch and base excision repair fix single-base problems."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "The Paramara ruler Raja Bhoja is credited with making which city the principal capital of the Paramara kingdom of Malwa?",
    options: ["Mandu", "Maheshwar", "Dhar", "Sironj"],
    answer: 2,
    explanation: "Raja Bhoja (c. 1010–1055 CE) ruled from Dhar (Dhara Nagari), which became the political and cultural centre of the Paramaras in place of the earlier seat at Ujjain. He founded the Bhojshala, a centre of Sanskrit learning at Dhar. Mandu rose to prominence later under the Malwa Sultans."
  },
  {
    id: 2,
    question: "The Bhojeshwar temple at Bhojpur, known for its massive monolithic Shiva linga and unfinished structure, is located in which district of Madhya Pradesh?",
    options: ["Vidisha", "Sehore", "Raisen", "Dhar"],
    answer: 2,
    explanation: "Bhojpur lies in Raisen district, about 28 km from Bhopal, on the Betwa river. The temple was begun by Raja Bhoja in the 11th century and was never completed. Ramps and construction drawings incised on nearby rocks show how medieval temples were built."
  },
  {
    id: 3,
    question: "The Kalachuri (Haihaya) rulers of Chedi had their capital at Tripuri. The site of Tripuri lies near which present-day city?",
    options: ["Rewa", "Sagar", "Jabalpur", "Katni"],
    answer: 2,
    explanation: "Tripuri is identified with the village of Tewar, about 13 km west of Jabalpur. The Kalachuris of Tripuri, including Gangeyadeva and Lakshmikarna, were major powers of central India between the 10th and 12th centuries."
  },
  {
    id: 4,
    question: "The Kandariya Mahadeva temple, the largest temple of the Western Group at Khajuraho, was built during the reign of which Chandela ruler?",
    options: ["Yashovarman", "Dhanga", "Vidyadhara", "Madanavarman"],
    answer: 2,
    explanation: "The Kandariya Mahadeva temple is attributed to Vidyadhara (c. 1003–1035 CE), who also resisted Mahmud of Ghazni. Yashovarman built the Lakshmana temple and Dhanga the Vishvanatha temple. The Khajuraho group became a UNESCO World Heritage Site in 1986."
  },
  {
    id: 5,
    question: "Rani Durgavati of the Gond kingdom of Garha-Mandla died in 1564 while fighting the forces of which Mughal general?",
    options: ["Adham Khan", "Bairam Khan", "Abdullah Khan Uzbek", "Asaf Khan"],
    answer: 3,
    explanation: "Akbar's governor of Kara-Manikpur, Khwaja Abdul Majid Asaf Khan, invaded Garha-Mandla in 1564. Rani Durgavati fought near Narrai Nala between Jabalpur and Mandla and took her own life rather than be captured. Adham Khan had led the 1561 Mughal campaign against Baz Bahadur of Malwa."
  },
  {
    id: 6,
    question: "Which ruler of the Malwa Sultanate shifted the capital from Dhar to Mandu (Shadiabad)?",
    options: ["Dilawar Khan Ghori", "Hoshang Shah", "Mahmud Khalji", "Baz Bahadur"],
    answer: 1,
    explanation: "Dilawar Khan Ghori founded the independent Malwa Sultanate at Dhar around 1401. His son Hoshang Shah (1406–1435) moved the capital to Mandu and fortified it. Hoshang Shah's marble tomb at Mandu is regarded as one of India's earliest marble structures."
  },
  {
    id: 7,
    question: "The Jahaz Mahal at Mandu, built between two artificial lakes so that it appears to float like a ship, is attributed to which Sultan?",
    options: ["Hoshang Shah", "Ghiyas-ud-din Khalji", "Baz Bahadur", "Nasir-ud-din Shah"],
    answer: 1,
    explanation: "The Jahaz Mahal stands between Munj Talao and Kapur Talao and is attributed to Ghiyas-ud-din Khalji (1469–1500), who reportedly kept a very large harem there. Baz Bahadur's palace and Rupmati's pavilion belong to a later period."
  },
  {
    id: 8,
    question: "Raja Man Singh Tomar of Gwalior (1486–1516), builder of the Man Mandir palace, is remembered as a great patron of which form of Hindustani music?",
    options: ["Dhrupad", "Khayal", "Thumri", "Tappa"],
    answer: 0,
    explanation: "Man Singh Tomar promoted Dhrupad and is credited with the treatise Man Kautuhal. Gwalior became a major musical centre, and Tansen, born near Gwalior, trained in this tradition. Khayal, Thumri and Tappa gained prominence later."
  },
  {
    id: 9,
    question: "When Muhammad Khan Bangash attacked Bundelkhand in 1728–29, Maharaja Chhatrasal sought help from which Maratha Peshwa?",
    options: ["Bajirao I", "Balaji Vishwanath", "Balaji Bajirao", "Madhavrao I"],
    answer: 0,
    explanation: "Peshwa Bajirao I came to Chhatrasal's aid and defeated Bangash at Jaitpur. In gratitude, Chhatrasal ceded about a third of his territory to Bajirao. Chhatrasal's capital was at Panna."
  },
  {
    id: 10,
    question: "Orchha, on the Betwa river, was founded as the capital of the Bundela Rajputs in 1531 by which ruler?",
    options: ["Bir Singh Deo", "Madhukar Shah", "Rudra Pratap Singh", "Champat Rai"],
    answer: 2,
    explanation: "Rudra Pratap Singh Bundela founded Orchha in 1531. Bir Singh Deo, an ally of Jahangir, later built the Jahangir Mahal at Orchha. Champat Rai was the father of Chhatrasal."
  },
  {
    id: 11,
    question: "Kanha National Park is internationally known for saving which sub-species of deer from near extinction?",
    options: ["Blackbuck", "Chinkara", "Hard-ground barasingha", "Hog deer"],
    answer: 2,
    explanation: "Kanha (Mandla and Balaghat districts) saved the hard-ground barasingha (Rucervus duvaucelii branderi), whose population fell to about 66 in 1970. Unlike the swamp-dwelling form, this sub-species is adapted to hard grassland. The barasingha is the state animal of Madhya Pradesh."
  },
  {
    id: 12,
    question: "According to recent India State of Forest Reports (ISFR) of the Forest Survey of India, which state has the largest forest cover by area?",
    options: ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"],
    answer: 0,
    explanation: "Madhya Pradesh has the largest forest cover by area in India, followed by Arunachal Pradesh, Chhattisgarh and Odisha. Forest cover is roughly a quarter of the state's geographical area. Mizoram has the highest forest cover as a percentage of its area."
  },
  {
    id: 13,
    question: "Sal (Shorea robusta) forests in Madhya Pradesh are mainly found in which part of the state?",
    options: ["Western Malwa districts such as Ratlam and Mandsaur", "The Chambal ravine districts such as Bhind and Morena", "The Nimar districts such as Khargone and Barwani", "Eastern districts such as Mandla, Balaghat, Dindori and Umaria"],
    answer: 3,
    explanation: "Sal needs higher rainfall and is dominant in the eastern, wetter parts of MP, including Mandla, Balaghat, Dindori, Shahdol and Umaria. Teak dominates the central and western forests, while the drier north-west has scrub and thorn forest."
  },
  {
    id: 14,
    question: "Which tiger reserve of Madhya Pradesh, spread over Seoni and Chhindwara districts, is associated with the setting of Rudyard Kipling's The Jungle Book?",
    options: ["Bandhavgarh", "Pench", "Satpura", "Sanjay-Dubri"],
    answer: 1,
    explanation: "Pench Tiger Reserve takes its name from the Pench river, which divides it into Seoni and Chhindwara parts. The landscape of the Seoni region inspired The Jungle Book. A contiguous Pench Tiger Reserve exists across the border in Maharashtra."
  },
  {
    id: 15,
    question: "Which river flows through Panna National Park and Tiger Reserve?",
    options: ["Betwa", "Sonar", "Tons", "Ken"],
    answer: 3,
    explanation: "The Ken, a tributary of the Yamuna, flows south to north through Panna and has the scenic Pandav and Raneh falls nearby. Panna is known for the successful reintroduction of tigers after local extinction in 2009. The Ken-Betwa link project is planned around this area."
  },
  {
    id: 16,
    question: "Dhupgarh, the highest point of Madhya Pradesh, lies in which hill range?",
    options: ["Maikal hills", "Vindhya range near Rewa", "Mahadeo hills of the Satpura range", "Malwa plateau near Indore"],
    answer: 2,
    explanation: "Dhupgarh (about 1,350 m) is near Pachmarhi in the Mahadeo hills of the Satpuras, in Narmadapuram district. Amarkantak in the Maikal hills is the source of the Narmada and Son but is lower than Dhupgarh."
  },
  {
    id: 17,
    question: "Ghughua Fossil National Park, which preserves plant fossils about 65 million years old, is located in which district?",
    options: ["Seoni", "Anuppur", "Dindori", "Betul"],
    answer: 2,
    explanation: "Ghughua Fossil National Park is in Dindori district (carved out of Mandla). It preserves fossil plants such as palms and other angiosperms from the late Cretaceous–early Tertiary, when the area had dense tropical vegetation. It is among the smallest national parks in the state."
  },
  {
    id: 18,
    question: "Which national park of Madhya Pradesh lies within the city limits of Bhopal, next to the Upper Lake?",
    options: ["Madhav", "Van Vihar", "Sanjay", "Mandla Plant Fossils"],
    answer: 1,
    explanation: "Van Vihar National Park is on the bank of the Upper Lake (Bhoj Tal) in Bhopal and is run as a modern zoo-cum-rescue centre. Animals are kept in near-natural enclosures. Madhav National Park is in Shivpuri and Sanjay National Park in Sidhi."
  },
  {
    id: 19,
    question: "Cheetahs brought from Namibia were first released in India in September 2022 into which national park?",
    options: ["Madhav National Park, Shivpuri", "Kuno National Park, Sheopur", "Panna National Park, Panna", "Satpura National Park, Narmadapuram"],
    answer: 1,
    explanation: "On 17 September 2022, eight cheetahs from Namibia were released into Kuno National Park in Sheopur district under Project Cheetah. More cheetahs arrived from South Africa in 2023. Kuno was chosen for its grassland-woodland habitat and prey base."
  },
  {
    id: 20,
    question: "Which biosphere reserve is shared by Madhya Pradesh and Chhattisgarh?",
    options: ["Pachmarhi", "Panna", "Similipal", "Achanakmar-Amarkantak"],
    answer: 3,
    explanation: "The Achanakmar-Amarkantak Biosphere Reserve (notified 2005) spans Anuppur and Dindori districts of MP and Bilaspur region of Chhattisgarh. Pachmarhi and Panna biosphere reserves lie wholly in MP. Similipal is in Odisha."
  },
  {
    id: 21,
    question: "What is the total number of seats in the Madhya Pradesh Legislative Assembly?",
    options: ["243", "230", "288", "320"],
    answer: 1,
    explanation: "The MP Vidhan Sabha has 230 elected seats. Before Chhattisgarh was carved out on 1 November 2000, undivided MP had 320 seats. Bihar has 243 and Maharashtra 288."
  },
  {
    id: 22,
    question: "How many seats does Madhya Pradesh have in the Rajya Sabha?",
    options: ["11", "10", "12", "16"],
    answer: 0,
    explanation: "Madhya Pradesh has 11 Rajya Sabha seats and 29 Lok Sabha seats. Seats in the Rajya Sabha are allotted to states roughly by population under the Fourth Schedule. Undivided MP had 16 Rajya Sabha seats before 2000."
  },
  {
    id: 23,
    question: "How many districts does Madhya Pradesh have after the creation of Mauganj, Pandhurna and Maihar as separate districts?",
    options: ["50", "52", "48", "55"],
    answer: 3,
    explanation: "Madhya Pradesh now has 55 districts, grouped into 10 revenue divisions. Mauganj was carved out of Rewa, Pandhurna out of Chhindwara and Maihar out of Satna in 2023. The state had 45 districts when Chhattisgarh was separated in 2000."
  },
  {
    id: 24,
    question: "Who was the first Chief Minister of Madhya Pradesh after its formation on 1 November 1956?",
    options: ["Bhagwantrao Mandloi", "Kailash Nath Katju", "Dwarka Prasad Mishra", "Pandit Ravishankar Shukla"],
    answer: 3,
    explanation: "Pandit Ravishankar Shukla became the first CM of the new MP on 1 November 1956 but died in office on 31 December 1956. Bhagwantrao Mandloi then served briefly, followed by Kailash Nath Katju."
  },
  {
    id: 25,
    question: "The office of Lokayukt in Madhya Pradesh functions under the MP Lokayukt Evam Up-Lokayukt Adhiniyam of which year?",
    options: ["1981", "1975", "1986", "1993"],
    answer: 0,
    explanation: "The MP Lokayukt Evam Up-Lokayukt Adhiniyam, 1981 created the institution to inquire into complaints of corruption against public servants. Its Special Police Establishment investigates trap and disproportionate-assets cases. The central Lokpal came much later, under the Lokpal and Lokayuktas Act, 2013."
  },
  {
    id: 26,
    question: "The Ladli Laxmi Yojana of the Madhya Pradesh government, aimed at improving the status of the girl child, was launched in which year?",
    options: ["2011", "2015", "2003", "2007"],
    answer: 3,
    explanation: "Ladli Laxmi Yojana began on 1 April 2007. The state buys savings certificates in the girl's name and pays instalments at stages of schooling, with a final lump sum at age 21 provided she is not married before 18. Several other states later copied the model."
  },
  {
    id: 27,
    question: "Madhya Pradesh was the first state to hold Panchayat elections after the 73rd Constitutional Amendment. In which year were these elections held?",
    options: ["1992", "1994", "1997", "2000"],
    answer: 1,
    explanation: "MP enacted the MP Panchayat Raj Adhiniyam in 1993 (later renamed Panchayat Raj Avam Gram Swaraj Adhiniyam) and held three-tier panchayat elections in 1994. The 73rd Amendment itself came into force on 24 April 1993."
  },
  {
    id: 28,
    question: "Madhya Pradesh became the first state in India to enact a law guaranteeing time-bound delivery of public services. Name the law.",
    options: ["MP Jan Bhagidari Adhiniyam, 2005", "MP Suraj Abhiyan Adhiniyam, 2012", "MP Nagrik Adhikar Patra Adhiniyam, 2008", "MP Lok Sewaon ke Pradan ki Guarantee Adhiniyam, 2010"],
    answer: 3,
    explanation: "The MP Lok Sewaon ke Pradan ki Guarantee Adhiniyam, 2010 came into force on 25 September 2010. It sets time limits for notified services and fines officials who fail to deliver. Many states later passed similar Right to Services laws."
  },
  {
    id: 29,
    question: "Madhya Pradesh is traditionally called the 'Soya State' of India. This is because it has long been the country's leading producer of which crop?",
    options: ["Soybean", "Groundnut", "Mustard", "Sunflower"],
    answer: 0,
    explanation: "MP earned the 'Soya State' title by leading India in soybean output for decades, mainly from the Malwa plateau's black soils in the kharif season, though Maharashtra out-produced it in 2024-25. Indore hosts the ICAR-Indian Institute of Soybean Research and the Soybean Processors Association (SOPA). Rajasthan leads in mustard and Gujarat in groundnut."
  },
  {
    id: 30,
    question: "Under the proviso to Article 164(1), Madhya Pradesh must have a Minister in charge of tribal welfare. Which other states share this requirement?",
    options: ["Chhattisgarh, Jharkhand and Odisha", "Rajasthan, Gujarat and Maharashtra", "Assam, Meghalaya and Tripura", "Bihar, Uttar Pradesh and West Bengal"],
    answer: 0,
    explanation: "Article 164(1), as amended by the 94th Amendment (2006), requires a tribal welfare minister in Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha. That minister may also look after the welfare of Scheduled Castes and backward classes. Bihar was dropped from the list after Jharkhand was formed."
  },
  {
    id: 31,
    question: "According to Census 2011, which is the most populous Scheduled Tribe in Madhya Pradesh?",
    options: ["Gond", "Korku", "Sahariya", "Bhil"],
    answer: 3,
    explanation: "The Bhils (including Bhilala and related groups) are the largest ST in MP, concentrated in Jhabua, Alirajpur, Dhar, Barwani and Khargone. The Gonds are second. MP has the largest ST population of any Indian state (about 1.53 crore in 2011)."
  },
  {
    id: 32,
    question: "Which of the following tribes of Madhya Pradesh is NOT a Particularly Vulnerable Tribal Group (PVTG)?",
    options: ["Baiga", "Bharia", "Gond", "Sahariya"],
    answer: 2,
    explanation: "MP has three PVTGs: Baiga, Bharia and Sahariya. The Gond are a large tribe with a long history of kingdoms such as Garha-Mandla, but they are not a PVTG. PVTGs are identified by pre-agricultural technology, low literacy and stagnant or falling population."
  },
  {
    id: 33,
    question: "The Patalkot valley, home to the Bharia tribe and known for its medicinal plants, is in which district?",
    options: ["Betul", "Chhindwara", "Seoni", "Balaghat"],
    answer: 1,
    explanation: "Patalkot is a deep horseshoe-shaped valley in the Tamia block of Chhindwara district, about 1,000–1,700 feet deep. Its Bharia villages lived in relative isolation for long periods. The valley is rich in herbal plants used in traditional medicine."
  },
  {
    id: 34,
    question: "The Bhagoria Haat festival, held in the week before Holi, is celebrated mainly by which tribes?",
    options: ["Gond and Pardhan of Mandla", "Korku of Betul and Harda", "Bhil and Bhilala of Jhabua and Alirajpur", "Baiga of Dindori"],
    answer: 2,
    explanation: "Bhagoria is a festive weekly market fair held before Holi in Jhabua, Alirajpur, Dhar, Khargone and Barwani. Young Bhils and Bhilalas dress up, dance to the dhol and mandal, and traditionally choose partners. It also marks the end of the harvest."
  },
  {
    id: 35,
    question: "Pithora painting, made on house walls as a ritual offering, is a tradition of which community?",
    options: ["Gonds of Dindori", "Baigas of Mandla", "Sahariyas of Sheopur", "Rathwa and Bhilala Bhils"],
    answer: 3,
    explanation: "Pithora paintings are made by the Rathwa and Bhilala communities of the Jhabua–Alirajpur region and adjoining Gujarat to honour the deity Baba Pithora. A priest-painter (lakhindra) paints horses and figures to fulfil a vow. Gond art from Dindori is a different tradition."
  },
  {
    id: 36,
    question: "Padma Shri awardee Bhuri Bai of Jhabua is known for which art form?",
    options: ["Gond painting", "Bhil painting", "Warli painting", "Madhubani painting"],
    answer: 1,
    explanation: "Bhuri Bai, a Bhil artist from Pitol village in Jhabua, was among the first Bhil artists to paint on paper and canvas. She worked at Bharat Bhavan, Bhopal, and received the Padma Shri in 2021. Gond painting is associated with Jangarh Singh Shyam of Patangarh, Dindori."
  },
  {
    id: 37,
    question: "The Karma dance, linked with the worship of the Karam tree and the agricultural cycle, is a major dance of which tribes of Madhya Pradesh?",
    options: ["Gond and Baiga", "Bhil and Bhilala", "Sahariya and Kol", "Korku and Mawasi"],
    answer: 0,
    explanation: "Karma is performed by the Gond, Baiga and Oraon communities of eastern MP (Mandla, Dindori, Shahdol, Balaghat). Men and women dance in rows to the mandar drum. The Bhils are better known for the Bhagoria and Gol Gadhedo traditions."
  },
  {
    id: 38,
    question: "The Sahariya tribe of Madhya Pradesh is concentrated mainly in which region?",
    options: ["Nimar region (Khargone, Barwani)", "Gwalior-Chambal region (Sheopur, Shivpuri, Guna)", "Mahakoshal (Mandla, Dindori)", "Baghelkhand (Rewa, Sidhi)"],
    answer: 1,
    explanation: "The Sahariya, a PVTG, live mainly in Sheopur, Shivpuri, Guna, Ashoknagar, Gwalior and Datia districts. They depend on forest produce and wage labour. Malnutrition and TB have been persistent problems in Sahariya areas."
  },
  {
    id: 39,
    question: "Tantya Bhil, called 'Tantya Mama' and the 'Indian Robin Hood', carried out his anti-British activities mainly in which region?",
    options: ["Bundelkhand (Sagar–Chhatarpur)", "Baghelkhand (Rewa–Satna)", "Gwalior–Chambal", "Nimar (Khandwa–Khargone)"],
    answer: 3,
    explanation: "Tantya Bhil was active in the Nimar region in the 1870s–80s, robbing British-protected traders and sharing the loot with the poor. He was caught by treachery and hanged in 1889."
  },
  {
    id: 40,
    question: "Under the Fifth Schedule, a Tribes Advisory Council can have up to 20 members. What share of them must be Scheduled Tribe members of the State Legislative Assembly, as far as possible?",
    options: ["One-half", "Three-fourths", "Two-thirds", "One-third"],
    answer: 1,
    explanation: "Para 4 of the Fifth Schedule says a Tribes Advisory Council shall have not more than 20 members, of whom as nearly as possible three-fourths shall be ST MLAs. The Council advises the Governor on tribal welfare matters referred to it. MP has such a council because it has Scheduled Areas."
  },
  {
    id: 41,
    question: "Justice Surya Kant was sworn in as the 53rd Chief Justice of India in November 2025. Whom did he succeed?",
    options: ["Justice B.R. Gavai", "Justice Sanjiv Khanna", "Justice D.Y. Chandrachud", "Justice U.U. Lalit"],
    answer: 0,
    explanation: "President Droupadi Murmu administered the oath to Justice Surya Kant on 24 November 2025, after Justice B.R. Gavai retired. Justice Surya Kant is the first CJI from Haryana and is due to retire on 9 February 2027. The CJI is appointed under Article 124(2)."
  },
  {
    id: 42,
    question: "In October 2026, two cheetahs were moved from Kuno and released into which reserve, making it Madhya Pradesh's third cheetah habitat?",
    options: ["Madhav Tiger Reserve", "Ratapani Tiger Reserve", "Sanjay-Dubri Tiger Reserve", "Veerangana Durgavati Tiger Reserve"],
    answer: 3,
    explanation: "On 7 October 2026, Chief Minister Mohan Yadav released two cheetahs into the Veerangana Durgavati (Nauradehi) Tiger Reserve, Sagar region. It became the third cheetah site in MP after Kuno National Park and Gandhi Sagar Wildlife Sanctuary. It is the largest tiger reserve in the state."
  },
  {
    id: 43,
    question: "The G20 Leaders' Summit of November 2025, the first G20 summit ever held on the African continent, took place in which city?",
    options: ["Cairo", "Nairobi", "Johannesburg", "Lagos"],
    answer: 2,
    explanation: "South Africa hosted the G20 Leaders' Summit in Johannesburg on 22–23 November 2025 under the theme 'Solidarity, Equality, Sustainability'. It was the first G20 summit in Africa, and the African Union attended as a permanent member, a status it won at India's New Delhi summit in 2023."
  },
  {
    id: 44,
    question: "India won the ICC Men's T20 World Cup in March 2026 by defeating which team in the final at Ahmedabad?",
    options: ["New Zealand", "South Africa", "Australia", "England"],
    answer: 0,
    explanation: "On 8 March 2026, India beat New Zealand by 96 runs at the Narendra Modi Stadium, Ahmedabad. India became the first team to win three T20 World Cups, the first to defend the title and the first host to win it. The tournament was co-hosted by India and Sri Lanka."
  },
  {
    id: 45,
    question: "A model is trained on thousands of images, each labelled 'tumour' or 'normal' by a pathologist, and then predicts labels for new images. This is an example of",
    options: ["supervised learning", "unsupervised learning", "reinforcement learning", "rule-based expert systems"],
    answer: 0,
    explanation: "Supervised learning uses labelled input-output pairs to learn a mapping that can predict labels for new data. Unsupervised learning finds structure such as clusters in unlabelled data. Reinforcement learning learns from rewards gained by acting in an environment."
  },
  {
    id: 46,
    question: "Large language models such as GPT and Gemini are built on which neural network architecture, introduced in the 2017 paper 'Attention Is All You Need'?",
    options: ["Convolutional neural network", "Recurrent neural network", "Generative adversarial network", "Transformer"],
    answer: 3,
    explanation: "The Transformer, proposed by Vaswani and colleagues at Google in 2017, uses self-attention instead of recurrence to process sequences in parallel. It is the basis of modern LLMs. CNNs are mainly used for images and GANs for generating images through a generator-discriminator contest."
  },
  {
    id: 47,
    question: "What is the length of an IPv6 address?",
    options: ["32 bits", "64 bits", "256 bits", "128 bits"],
    answer: 3,
    explanation: "IPv6 addresses are 128 bits long, written as eight groups of four hexadecimal digits. IPv4 addresses are 32 bits, giving only about 4.3 billion addresses. The far larger IPv6 space was needed for the growth of internet and IoT devices."
  },
  {
    id: 48,
    question: "CERT-In, the national nodal agency for responding to cyber security incidents, draws its statutory role from which section of the Information Technology Act, 2000?",
    options: ["Section 70B", "Section 66A", "Section 43A", "Section 79"],
    answer: 0,
    explanation: "Section 70B of the IT Act designates the Indian Computer Emergency Response Team (CERT-In) under MeitY as the national agency for incident response. Section 66A was struck down in Shreya Singhal (2015), Section 43A deals with compensation for data-protection failures and Section 79 with intermediary safe harbour."
  },
  {
    id: 49,
    question: "A district office uses an online email and document-editing suite through a web browser, without installing software or managing any servers. Which cloud service model is this?",
    options: ["Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Function as a Service (FaaS)"],
    answer: 1,
    explanation: "In SaaS, the provider runs the complete application and the user simply uses it, as with web email or online office suites. IaaS provides virtual machines and storage that the user manages, while PaaS provides a platform for developers to deploy their own code."
  },
  {
    id: 50,
    question: "When a generative AI chatbot confidently produces a fabricated court citation that does not exist, this failure is commonly called",
    options: ["overfitting", "data drift", "underfitting", "hallucination"],
    answer: 3,
    explanation: "Hallucination is when a generative model produces fluent but false or unsupported content, such as fake references or case law. Overfitting is when a model memorises training data and generalises poorly, and data drift is a change in input data over time. AI outputs must be verified before use in official or legal work."
  },
  {
    id: 51,
    question: "When a complete adult skeleton is available, which bone gives the most reliable estimate of sex?",
    options: ["Skull", "Femur", "Sternum", "Pelvis"],
    answer: 3,
    explanation: "The pelvis is shaped by the female adaptation for childbirth and gives about 95% accuracy in adults, higher than the skull (about 90%). Long bones such as the femur help mainly through size and robusticity, which overlap between sexes. Sex estimation from the skeleton is unreliable before puberty."
  },
  {
    id: 52,
    question: "An adult pelvis recovered from a well shows a wide, U-shaped subpubic angle of about 100°, a wide greater sciatic notch and a preauricular sulcus. The remains most likely belong to",
    options: ["an adult male", "an adult female", "a pre-pubertal child of either sex", "a male with a pelvic fracture"],
    answer: 1,
    explanation: "A subpubic angle above about 90° (U-shaped), a wide greater sciatic notch and a well-marked preauricular sulcus are typical female traits. Males show a narrow V-shaped subpubic angle (about 60–70°) and a narrow sciatic notch. These features develop only after puberty."
  },
  {
    id: 53,
    question: "The Phenice method of sex estimation examines the ventral arc, subpubic concavity and medial aspect of the ischiopubic ramus. These features are on which bone?",
    options: ["Os pubis", "Ilium", "Sacrum", "Calcaneus"],
    answer: 0,
    explanation: "Phenice (1969) described three features of the os pubis: a ventral arc and a subpubic concavity, both present in females, and a narrow ischiopubic ramus ridge, also female. It is simple, quick and highly accurate when the pubic bone is intact."
  },
  {
    id: 54,
    question: "The Suchey–Brooks system estimates the age of adult skeletal remains from the morphology of which feature?",
    options: ["Cranial sutures", "Sternal rib ends", "Pubic symphyseal face", "Epiphyseal union of the radius"],
    answer: 2,
    explanation: "Suchey–Brooks uses six phases of change on the pubic symphyseal face, from a ridged billowed surface in young adults to an eroded, irregular rim in the elderly. Sternal rib-end changes are the basis of the İşcan method. Cranial suture closure is a less reliable age indicator."
  },
  {
    id: 55,
    question: "A forensic anthropologist uses the regression formula Stature (cm) = 2.38 × femur length (cm) + 61.41 for an adult male. If the maximum femur length is 45.0 cm, the estimated stature is about",
    options: ["157.9 cm", "168.5 cm", "172.3 cm", "163.4 cm"],
    answer: 1,
    explanation: "2.38 × 45.0 = 107.1, and 107.1 + 61.41 = 168.51 cm. This Trotter–Gleser type equation also has a standard error (about ±3.3 cm), so the stature is reported as a range. Population-specific formulae should be used where available, because body proportions differ between populations."
  },
  {
    id: 56,
    question: "In age estimation of young adults, which epiphysis is generally the last in the body to fuse, often not before the mid-twenties?",
    options: ["Head of the humerus", "Lower end of the radius", "Medial (sternal) end of the clavicle", "Iliac crest"],
    answer: 2,
    explanation: "The medial clavicular epiphysis appears around 18–20 years and usually fuses between about 22 and 30 years, making it useful for ages in the twenties. The iliac crest and lower radius fuse a few years earlier. Fusion ages vary with sex and population, so Indian standards should be used."
  },
  {
    id: 57,
    question: "Gustafson's method in forensic odontology is used to",
    options: ["identify an individual by comparing bite marks", "estimate the age of an adult from regressive changes in teeth", "estimate sex from canine dimensions", "determine ancestry from dental morphology"],
    answer: 1,
    explanation: "Gustafson (1950) scored six age changes in teeth: attrition, periodontosis, secondary dentine, cementum apposition, root resorption and root transparency. Root dentine transparency was later shown to be the most reliable single criterion. The method works on adults, where eruption-based methods no longer apply."
  },
  {
    id: 58,
    question: "Which statement correctly describes the human deciduous (milk) dentition?",
    options: ["20 teeth, with two incisors, one canine, one premolar and one molar in each quadrant", "20 teeth, with two incisors, one canine and two molars in each quadrant", "24 teeth, with two incisors, one canine and three molars in each quadrant", "32 teeth, with two incisors, one canine, two premolars and three molars in each quadrant"],
    answer: 1,
    explanation: "The deciduous formula is I2 C1 M2 per quadrant, giving 20 teeth, with no premolars. The permanent dentition is I2 C1 PM2 M3 per quadrant, giving 32 teeth. A mixed dentition, seen roughly between 6 and 12 years, is a strong indicator of age in children."
  },
  {
    id: 59,
    question: "Which permanent tooth usually erupts first, at about six years of age?",
    options: ["Central incisor", "First molar", "First premolar", "Canine"],
    answer: 1,
    explanation: "The first permanent molar erupts at about 6 years behind the deciduous teeth, without replacing any of them. The central incisors follow at about 6–8 years. The third molars erupt last, at about 17–25 years, and are used to judge whether someone is over 18."
  },
  {
    id: 60,
    question: "Under INTERPOL's Disaster Victim Identification (DVI) guidelines, which of the following is a SECONDARY identifier rather than a primary one?",
    options: ["Fingerprints", "Tattoos and personal effects", "Dental comparison", "DNA profiling"],
    answer: 1,
    explanation: "INTERPOL recognises three primary identifiers: friction ridge (fingerprint) analysis, comparative dental analysis and DNA. Secondary identifiers such as tattoos, scars, medical implants, jewellery and clothing support an identification but are not usually enough on their own."
  },
  {
    id: 61,
    question: "Using Glaister's formula, Hours since death = (98.4 − rectal temperature in °F) ÷ 1.5, what is the estimated time since death if the rectal temperature is 89.4 °F?",
    options: ["9 hours", "4 hours", "13.5 hours", "6 hours"],
    answer: 3,
    explanation: "98.4 − 89.4 = 9 °F, and 9 ÷ 1.5 = 6 hours. The formula assumes the body cools at about 1.5 °F per hour. Body size, clothing, ambient temperature and fever at death all change the rate, so the result is only an approximate guide."
  },
  {
    id: 62,
    question: "According to Nysten's rule, rigor mortis in the voluntary muscles first appears in the",
    options: ["small muscles of the fingers and toes", "large muscles of the thigh", "eyelids and muscles of the face", "muscles of the back"],
    answer: 2,
    explanation: "Rigor mortis shows first in the involuntary myocardium, and among voluntary muscles in the eyelids, then the face, jaw and neck, spreading downwards to the trunk and limbs. It passes off in the same order. The small muscles of the fingers and toes are affected last."
  },
  {
    id: 63,
    question: "Adipocere formation in a body recovered from a damp, waterlogged grave is chiefly the result of",
    options: ["dehydration of tissues by hot dry air", "conversion of muscle protein into ammonia", "hydrolysis and hydrogenation of body fats into fatty acids and soaps", "fungal digestion of collagen in the skin"],
    answer: 2,
    explanation: "Adipocere (grave wax) forms when body fats are hydrolysed into fatty acids, which are then hydrogenated, aided by enzymes such as lecithinase from Clostridium perfringens. It needs moisture and warmth with little air. It can preserve facial features and injuries for years, which helps identification."
  },
  {
    id: 64,
    question: "A body recovered from a sandy area of the Thar desert has dry, brown, leathery skin tightly stretched over the bones, with no putrefaction. The change seen is",
    options: ["adipocere formation", "maceration", "mummification", "skeletonisation"],
    answer: 2,
    explanation: "Mummification is the drying of tissues in hot, dry, airy conditions that stop bacterial growth. Adipocere needs moisture, maceration is the softening of a dead foetus in the uterus, and skeletonisation means the soft tissues are completely gone."
  },
  {
    id: 65,
    question: "In Indian conditions, the earliest external sign of putrefaction, appearing within about 12–18 hours, is a greenish discolouration of the skin over the",
    options: ["left side of the chest", "back of the neck", "right iliac fossa", "soles of the feet"],
    answer: 2,
    explanation: "Putrefaction begins in the caecum, which lies near the surface in the right iliac fossa. Hydrogen sulphide from bacterial activity combines with haemoglobin to form sulphmethaemoglobin, which gives the green colour. The colour then spreads over the abdomen, and marbling of veins follows."
  },
  {
    id: 66,
    question: "In most outdoor death scenes in India, which insects are typically the first to colonise a fresh body and lay eggs?",
    options: ["Hide beetles (Dermestidae)", "Cheese skippers (Piophilidae)", "Blowflies (Calliphoridae)", "Clothes moths (Tineidae)"],
    answer: 2,
    explanation: "Blowflies such as Chrysomya and Lucilia species can arrive within minutes and lay eggs in natural openings and wounds. Piophilids and dermestid beetles come later, when the remains are drying, and clothes moths feed on dried skin and hair. The order in which insects arrive helps estimate the minimum PMI."
  },
  {
    id: 67,
    question: "A blowfly species needs 2,400 accumulated degree hours (ADH) above a base temperature of 10 °C to reach the stage found on a body. If the scene temperature stayed constant at 25 °C, about how long ago were the eggs laid?",
    options: ["96 hours", "240 hours", "160 hours", "100 hours"],
    answer: 2,
    explanation: "Each hour at 25 °C contributes 25 − 10 = 15 degree hours. 2,400 ÷ 15 = 160 hours, or about 6.7 days. This gives the minimum post-mortem interval, because colonisation may have started some time after death."
  },
  {
    id: 68,
    question: "How many larval instars does a typical blowfly pass through before pupation?",
    options: ["Two", "Four", "Five", "Three"],
    answer: 3,
    explanation: "Blowfly larvae moult twice, passing through first, second and third instars. The third-instar larva stops feeding, leaves the body to wander, and pupates in a hardened puparium. Instars are told apart by the number of slits in the posterior spiracles: one, two or three."
  },
  {
    id: 69,
    question: "Skeletal remains with dried skin and ligaments are found to have larvae and adults of hide beetles feeding on them. These beetles belong to which family?",
    options: ["Calliphoridae", "Sarcophagidae", "Dermestidae", "Muscidae"],
    answer: 2,
    explanation: "Dermestid beetles feed on dry skin, tendons and hair in the late dry and skeletal stages of decay. Museums use them to clean skeletons. Calliphoridae and Sarcophagidae are flies of the early stages, and Muscidae include house flies."
  },
  {
    id: 70,
    question: "Which feature of an adult skull is more typical of a female than a male?",
    options: ["Prominent supraorbital ridges", "Sharp upper margins of the orbits", "Large, projecting mastoid processes", "Prominent external occipital protuberance"],
    answer: 1,
    explanation: "Female skulls tend to have sharp, thin upper orbital margins, a vertical forehead, small mastoids and smooth muscle markings. Male skulls show heavy brow ridges, rounded orbital margins, large mastoid processes and a prominent occipital protuberance. Sex estimation from the skull is about 90% accurate."
  },
  {
    id: 71,
    question: "Mitochondrial DNA sequences from forensic samples are reported as differences from which reference sequence?",
    options: ["Human reference genome GRCh38", "Revised Cambridge Reference Sequence (rCRS)", "The CODIS core sequence", "The Y-chromosome reference haplotype"],
    answer: 1,
    explanation: "mtDNA results are written as differences from the rCRS (Andrews et al., 1999), a corrected version of the original Anderson sequence of 1981. For example, 16311C means a cytosine at position 16311 where the rCRS has another base. GRCh38 is the reference for the nuclear genome."
  },
  {
    id: 72,
    question: "What is the approximate size of the human mitochondrial genome?",
    options: ["3.2 billion base pairs", "1,122 base pairs", "16,569 base pairs", "48,502 base pairs"],
    answer: 2,
    explanation: "The circular human mtDNA is 16,569 bp long and codes for 13 proteins, 22 tRNAs and 2 rRNAs. The non-coding control region (about 1,122 bp) contains the hypervariable regions HV1 and HV2 used in forensic typing. 48,502 bp is the genome of bacteriophage lambda."
  },
  {
    id: 73,
    question: "Why is mitochondrial DNA often successfully typed from old bones and shed hair shafts when nuclear STR typing fails?",
    options: ["Each cell contains hundreds to thousands of copies of mtDNA", "mtDNA is linear and so resists nucleases", "mtDNA is inherited from both parents", "mtDNA has no non-coding regions to degrade"],
    answer: 0,
    explanation: "A cell has only two copies of the nuclear genome but hundreds to thousands of mtDNA copies, and the circular molecule inside mitochondria is relatively well protected. So some intact copies usually survive in degraded samples and hair shafts. mtDNA is maternally inherited and circular, not linear."
  },
  {
    id: 74,
    question: "Skeletal remains are suspected to be of a missing man. His mother has died. Which living relative could provide a matching mitochondrial DNA reference sample?",
    options: ["His father", "His own son", "His paternal uncle", "His sister's son"],
    answer: 3,
    explanation: "mtDNA passes from a mother to all her children, but only daughters pass it on. The missing man's sister has their mother's mtDNA and passes it to her son, so the nephew matches. His father, his own son (who has the son's mother's mtDNA) and his paternal uncle belong to other maternal lines."
  },
  {
    id: 75,
    question: "A hair from the scene shows a C/T point heteroplasmy at position 16093, while the suspect's blood shows only T at that position and matches at all other positions. The correct interpretation is that",
    options: ["the difference does not by itself exclude a common maternal origin", "the suspect is excluded as the source of the hair", "the hair must come from a different maternal lineage", "the sequence is contaminated and must be rejected"],
    answer: 0,
    explanation: "Heteroplasmy, the presence of more than one mtDNA type in a person, is common in hair and can differ between tissues of the same individual. A shared base at a heteroplasmic site, with all other positions matching, is treated as 'cannot exclude' rather than as an exclusion. Position 16093 is a known heteroplasmic hotspot."
  },
  {
    id: 76,
    question: "How do mini-STR kits improve the typing of highly degraded DNA from burnt or decomposed remains?",
    options: ["They target mitochondrial instead of nuclear DNA", "They use RNA instead of DNA as the template", "They amplify longer repeats that survive degradation better", "The primers are placed closer to the repeat region, giving shorter amplicons"],
    answer: 3,
    explanation: "Mini-STRs move the primer binding sites as close as possible to the repeat, so amplicons are often under about 150–200 bp. Short fragments are more likely to survive in degraded DNA. Alleles are the same as in standard kits, so results stay comparable with databases."
  },
  {
    id: 77,
    question: "An STR profile from a decomposed body shows tall peaks for small loci and progressively lower peaks, with drop-out, for larger loci. This 'ski-slope' pattern most likely indicates",
    options: ["a two-person mixture", "degraded DNA", "too much template DNA", "a pull-up artefact from spectral overlap"],
    answer: 1,
    explanation: "When DNA is broken into short pieces, fewer long templates are intact, so larger amplicons amplify less well. Peak heights fall as fragment size rises and large loci may drop out. Mini-STRs or MPS-based SNP panels can help recover information from such samples."
  },
  {
    id: 78,
    question: "For DNA identification of very old or degraded skeletal remains, which skeletal element is now regarded as giving the highest DNA yield?",
    options: ["Ribs", "Vertebral bodies", "Petrous part of the temporal bone", "Hand phalanges"],
    answer: 2,
    explanation: "The very dense petrous part of the temporal bone often yields many times more endogenous DNA than other bones, which is why it is preferred in ancient DNA work. Among long bones, dense cortical bone of the femur or tibia mid-shaft is preferred. Ribs and vertebrae are spongy and degrade faster."
  },
  {
    id: 79,
    question: "Why are intact molar teeth a good source of DNA from a body burnt in a house fire?",
    options: ["Enamel and dentine protect the DNA-rich pulp from heat and contamination", "Enamel itself contains large amounts of nuclear DNA", "Teeth contain no mitochondrial DNA, so results are cleaner", "Teeth do not need to be decontaminated before extraction"],
    answer: 0,
    explanation: "Enamel is the hardest tissue in the body and, with dentine and cementum, shields the pulp cavity and its cells from heat, moisture and microbes. Enamel itself is acellular and contains almost no DNA. Teeth are still cleaned on the surface before being powdered or opened."
  },
  {
    id: 80,
    question: "A Y-STR haplotype from the remains matches a reference sample from the missing person's paternal brother. What can be concluded from this match alone?",
    options: ["The remains are certainly those of the missing person", "The remains belong to the missing person's mother's family", "The match proves full siblingship", "The remains belong to a male of the same paternal lineage, not necessarily the missing person"],
    answer: 3,
    explanation: "Y-STRs are passed unchanged (apart from rare mutations) from father to son, so all paternally related males usually share a haplotype. A match shows the remains are from that paternal line. It cannot tell the missing person apart from his father, brothers or paternal cousins."
  },
  {
    id: 81,
    question: "In a paternity case, the child's obligate paternal allele has a frequency of 0.05. The alleged father is heterozygous and carries this allele. What is the paternity index (PI) at this locus?",
    options: ["20", "5", "0.1", "10"],
    answer: 3,
    explanation: "When the alleged father is heterozygous for the obligate allele, he passes it with probability 0.5, while a random man passes it with probability equal to its frequency p. PI = 0.5 ÷ 0.05 = 10. If the alleged father were homozygous, PI would be 1 ÷ p = 20."
  },
  {
    id: 82,
    question: "The combined paternity index (CPI) across all loci is 999. Assuming a prior probability of 0.5, what is the probability of paternity?",
    options: ["99.0%", "99.9%", "99.99%", "95.0%"],
    answer: 1,
    explanation: "With a 0.5 prior, probability of paternity W = CPI ÷ (CPI + 1) = 999 ÷ 1000 = 0.999, or 99.9%. The CPI is the product of the PIs at all independent loci. Many laboratories require W of at least 99.9% to report paternity as practically proved."
  },
  {
    id: 83,
    question: "In mass-disaster identification, DNA from unidentified remains is compared with the profiles of the missing person's parents to test whether the remains could be their child. This approach is called",
    options: ["direct reference matching", "reverse parentage testing", "familial database searching", "lineage marker exclusion"],
    answer: 1,
    explanation: "Reverse parentage testing asks whether a deceased person could be the child of the reference parents, with each allele at every locus accounted for by one parent. It is used when no personal reference items such as a toothbrush are available. Direct matching compares the remains with the person's own previous DNA sources."
  },
  {
    id: 84,
    question: "For identifying a missing person's remains by autosomal STRs, which family reference set is usually the most informative?",
    options: ["Both biological parents", "One first cousin", "A paternal half-sibling", "A grandparent alone"],
    answer: 0,
    explanation: "Each parent gives one allele at every locus, so both parents together define the possible genotypes of their child very tightly. More distant relatives share fewer alleles and give much lower likelihood ratios. If parents are not available, the spouse plus several children is another strong set."
  },
  {
    id: 85,
    question: "Two full siblings are typed at a single autosomal STR locus. What is the probability that they share no alleles identical by descent (IBD) at that locus?",
    options: ["0.50", "0.75", "0", "0.25"],
    answer: 3,
    explanation: "Full siblings share 0, 1 or 2 alleles IBD with probabilities 1/4, 1/2 and 1/4. They share no IBD allele when each inherits a different allele from both the mother and the father: 1/2 × 1/2 = 1/4. This is why siblings can differ completely at some loci."
  },
  {
    id: 86,
    question: "In a paternity test, the alleged father matches the child at 22 loci but is inconsistent at one locus by a single repeat unit. The most appropriate interpretation is",
    options: ["a definite exclusion of paternity", "a possible germline mutation; include the mutation rate in the PI at that locus", "evidence that the mother is not the biological mother", "a laboratory error that invalidates the whole test"],
    answer: 1,
    explanation: "STR loci mutate at about 1 in 1,000 meioses, usually by gaining or losing one repeat. A single one-step inconsistency with strong matches elsewhere is treated as a likely mutation and a mutation-adjusted PI is calculated. Exclusion normally needs inconsistencies at two or three or more loci."
  },
  {
    id: 87,
    question: "In an aircraft crash, many small body fragments are recovered and mixed together. Which method is used to reassociate fragments that belong to the same individual?",
    options: ["Matching STR profiles of each fragment with each other", "ABO grouping of each fragment", "Measuring fragment size and weight", "Comparing fragment tissue colour"],
    answer: 0,
    explanation: "Each fragment is DNA profiled, and fragments with identical STR profiles are grouped as one person. The group is then identified using references from relatives or personal items. ABO grouping cannot separate individuals of the same group and is unreliable on decomposed tissue."
  },
  {
    id: 88,
    question: "What extra information does massively parallel sequencing (MPS) of STRs provide compared with capillary electrophoresis?",
    options: ["The exact age of the sample", "The species of the donor without any reference", "The tissue the DNA came from", "Sequence variation within alleles of the same length"],
    answer: 3,
    explanation: "Capillary electrophoresis sizes alleles by length only, so two alleles of the same length look identical. MPS reads the actual sequence, revealing isoalleles that differ in repeat structure or flanking SNPs. This increases discrimination and helps resolve mixtures and kinship cases."
  },
  {
    id: 89,
    question: "The HIrisPlex-S system analyses SNPs in DNA from unidentified remains to predict",
    options: ["eye, hair and skin colour", "age at death", "body height", "blood group"],
    answer: 0,
    explanation: "HIrisPlex-S uses SNPs in pigmentation genes such as HERC2/OCA2, MC1R and SLC24A4 to predict eye, hair and skin colour. Such forensic DNA phenotyping gives investigative leads when there is no profile match. It does not identify a person by itself."
  },
  {
    id: 90,
    question: "A skeleton with clearly male pelvic and skull features gives an STR profile showing only the X peak at amelogenin, though other loci type well. The most likely explanation is",
    options: ["a deletion of the AMELY region on the Y chromosome", "the remains are female", "contamination with female DNA only", "complete degradation of the X chromosome"],
    answer: 0,
    explanation: "Amelogenin gives an X band (about 106 bp) and a Y band (about 112 bp) in common kits. Some males have deletions on Yp that remove AMELY, so they type as 'X only'. Typing Y-STRs or the Y indel in newer kits confirms male sex."
  },
  {
    id: 91,
    question: "The ABO group of a bone fragment, hair or tooth, where blood is not available, is usually determined by which method?",
    options: ["Direct slide agglutination", "Lattes crust test", "Indirect Coombs test", "Absorption-elution"],
    answer: 3,
    explanation: "In absorption-elution, the sample is exposed to anti-A and anti-B, unbound antibody is washed away, and bound antibody is released by heating (about 56 °C). The eluted antibody is then detected with known A and B cells. The method is sensitive and works on small, solid samples."
  },
  {
    id: 92,
    question: "Anti-D prophylaxis is given to an Rh-negative mother soon after delivering an Rh-positive baby in order to",
    options: ["prevent her from forming anti-D antibodies that could harm a later Rh-positive foetus", "convert her own blood group to Rh-positive", "treat jaundice in the newborn baby", "boost her antibodies against the father's ABO antigens"],
    answer: 0,
    explanation: "Foetal Rh-positive red cells entering the mother's blood at delivery can sensitise her to make anti-D IgG, which crosses the placenta in later pregnancies and causes haemolytic disease of the newborn. Giving anti-D within 72 hours clears these cells before she makes her own antibodies. D is the most immunogenic Rh antigen."
  },
  {
    id: 93,
    question: "Whether a person secretes ABH blood-group substances in saliva and semen is controlled by which gene?",
    options: ["FUT1 (H)", "FUT3 (Le)", "ABO", "FUT2 (Se)"],
    answer: 3,
    explanation: "FUT2, the secretor gene on chromosome 19, encodes a fucosyltransferase that makes H substance in secretions. About 80% of people are secretors. FUT1 makes H antigen on red cells, and FUT3 controls Lewis antigens."
  },
  {
    id: 94,
    question: "A person's red cells type as Le(a+b−). What does this usually indicate about secretor status?",
    options: ["The person is a non-secretor", "The person is a secretor", "The person belongs to group O", "The person has the Bombay phenotype"],
    answer: 0,
    explanation: "In people with a functional Lewis gene, secretors convert Le(a) into Le(b), giving Le(a−b+). Non-secretors cannot do this and type as Le(a+b−). Lewis typing of red cells is therefore an indirect way of estimating secretor status."
  },
  {
    id: 95,
    question: "The Lattes crust test on a dried bloodstain is used to detect",
    options: ["anti-A and anti-B antibodies in the stain", "A and B antigens on intact red cells", "the species of origin", "the age of the stain"],
    answer: 0,
    explanation: "In the Lattes test, flakes of the dried stain are placed on slides with known A, B and O cells. Agglutination of A or B cells shows the antibodies in the stain, from which the ABO group is inferred (for example, anti-B only means group A). It needs fairly fresh stains because antibodies degrade."
  },
  {
    id: 96,
    question: "In the precipitin ring test for species origin, a positive result appears as",
    options: ["red-cell agglutination at the bottom of the tube", "a blue colour throughout the tube", "crystals forming at the bottom of the tube", "a white ring at the interface between the stain extract and the antiserum"],
    answer: 3,
    explanation: "The stain extract (antigen) is layered over species-specific antiserum in a narrow tube. Where they diffuse together at the interface, antigen-antibody complexes form a visible white precipitin ring. A ring with anti-human serum and not with other antisera indicates human origin."
  },
  {
    id: 97,
    question: "In an Ouchterlony double-diffusion plate, the precipitin lines from two adjacent antigen wells cross each other completely. This pattern indicates",
    options: ["identity: the antigens are the same", "non-identity: the antigens are unrelated", "partial identity: the antigens share some epitopes", "no antigen is present in either well"],
    answer: 1,
    explanation: "Lines that fuse smoothly into an arc show identity, a fused line with a spur shows partial identity, and lines that cross show non-identity. The pattern compares a questioned extract with known species extracts against one antiserum."
  },
  {
    id: 98,
    question: "In crossed-over (counter-current) immunoelectrophoresis for species identification, why do antibodies move towards the cathode while antigens move towards the anode?",
    options: ["Antibodies carry a strong positive charge at pH 8.6", "Antigens are uncharged and pulled by the antibodies", "Electro-endosmosis carries the weakly charged IgG towards the cathode", "The current is reversed halfway through the run"],
    answer: 2,
    explanation: "At about pH 8.6 most protein antigens are strongly negative and move to the anode. IgG is only weakly charged, so the flow of buffer towards the cathode (electro-endosmosis) carries it the other way. The two meet between the wells and precipitate within about 30–60 minutes, much faster than simple diffusion."
  },
  {
    id: 99,
    question: "A very heavily bloodstained cloth gives a negative result on a human haemoglobin lateral-flow strip, but a diluted extract of the same stain gives a clear positive. The first result is best explained by",
    options: ["cross-reaction with animal blood", "degradation of the antibody on the strip", "inhibition by the cloth's dye", "the high-dose hook effect"],
    answer: 3,
    explanation: "In the hook (prozone) effect, so much antigen is present that it saturates both the mobile and the capture antibodies, so the sandwich cannot form at the test line. Diluting the extract restores a positive result. Laboratories therefore test diluted extracts when a strong stain gives a negative."
  },
  {
    id: 100,
    question: "A stain on a garment in a sexual-offence case is strongly positive for acid phosphatase, but no spermatozoa are seen and the donor is known to have had a vasectomy. Which test would best confirm semen?",
    options: ["PSA (p30) immunochromatographic test", "Kastle-Meyer test", "Phadebas amylase test", "Lugol's iodine test"],
    answer: 0,
    explanation: "Prostate-specific antigen (p30) is made by the prostate and is present in semen even when sperm are absent, as in vasectomised or azoospermic men. A positive PSA test, together with strong AP activity, confirms seminal fluid. Kastle-Meyer is for blood, Phadebas for saliva and Lugol's iodine for vaginal epithelial cells."
  },
  {
    id: 101,
    question: "The Phadebas test, used to screen stains such as those on a pillow cover or cigarette butt, detects which enzyme?",
    options: ["Acid phosphatase", "Peroxidase", "Lysozyme", "α-amylase"],
    answer: 3,
    explanation: "Phadebas uses starch linked to a blue dye. α-amylase breaks down the starch and releases the blue dye, so the intensity of blue shows the amount of amylase. Saliva has very high amylase levels, but amylase is also present in other fluids, so the test is presumptive."
  },
  {
    id: 102,
    question: "Which finding helps distinguish menstrual blood from peripheral (circulating) blood in a stain?",
    options: ["High levels of fibrin degradation products such as D-dimer", "Presence of haemoglobin", "Presence of white blood cells", "A positive precipitin reaction with anti-human serum"],
    answer: 0,
    explanation: "Menstrual blood is broken down by fibrinolysis in the uterus, so it has high levels of fibrin degradation products such as D-dimer, along with endometrial cells and vaginal epithelial cells. mRNA markers such as MMP7 and MMP11 are also used. Haemoglobin, leukocytes and human proteins occur in both types of blood."
  },
  {
    id: 103,
    question: "In a sandwich ELISA using horseradish peroxidase (HRP) and TMB substrate, the reaction is stopped with acid. At what wavelength is the yellow product usually read?",
    options: ["280 nm", "540 nm", "450 nm", "620 nm"],
    answer: 2,
    explanation: "HRP oxidises TMB to a blue product; adding sulphuric acid stops the reaction and turns it yellow, which is read at 450 nm. The colour intensity is proportional to the amount of antigen captured between the two antibodies. 280 nm is used for protein absorbance."
  },
  {
    id: 104,
    question: "Monoclonal antibodies used in forensic immunoassays are produced by hybridoma technology. Who developed this technique in 1975?",
    options: ["Landsteiner and Wiener", "Ouchterlony and Elek", "Köhler and Milstein", "Yalow and Berson"],
    answer: 2,
    explanation: "Georges Köhler and César Milstein fused antibody-producing B cells with myeloma cells to create immortal hybridomas that secrete one antibody, and won the 1984 Nobel Prize. Landsteiner and Wiener discovered the Rh factor, and Yalow and Berson developed radioimmunoassay."
  },
  {
    id: 105,
    question: "In a case under a state cattle-preservation law, the FSL receives a piece of thoroughly cooked meat for species identification. Why is a DNA method such as cytochrome b PCR preferred to the precipitin test here?",
    options: ["Precipitin tests work only on bloodstains", "Cooking denatures proteins and destroys their antigenic sites, while short DNA fragments can still be amplified", "DNA methods are cheaper than all immunological tests", "Cooking increases the antigenicity of meat proteins"],
    answer: 1,
    explanation: "Heat denatures soluble proteins, so species-specific antigens may no longer react with antisera, giving false negatives. Short mitochondrial targets such as cytochrome b can often still be amplified and sequenced or tested with species-specific primers. Precipitin tests work well on fresh or raw tissue."
  },
  {
    id: 106,
    question: "The absorption-inhibition method of ABO grouping of a stain works on which principle?",
    options: ["Antigen in the stain binds the antibody, so the antiserum's titre against known cells falls", "Antibodies in the stain agglutinate known red cells", "The stain releases enzymes that lyse red cells", "Heat releases antigens from the stain into the antiserum"],
    answer: 0,
    explanation: "A known antiserum is mixed with the stain extract. If the matching antigen is present, it absorbs the antibody, and the antiserum then agglutinates known cells less strongly or not at all. It is less sensitive than absorption-elution and needs more sample."
  },
  {
    id: 107,
    question: "In the acid phosphatase spot test for semen, sodium α-naphthyl phosphate and Brentamine Fast Blue B are used. A positive result is",
    options: ["a pink colour after adding hydrogen peroxide", "a blue-green chemiluminescence in darkness", "a purple colour within about a minute", "yellow needle-shaped crystals"],
    answer: 2,
    explanation: "Acid phosphatase splits α-naphthyl phosphate to release α-naphthol, which couples with Brentamine Fast Blue to give a purple azo dye. A quick, intense reaction suggests seminal acid phosphatase. Vaginal fluid has some AP activity, so timing and strength matter."
  },
  {
    id: 108,
    question: "In the Takayama confirmatory test for blood, a positive result is seen under the microscope as",
    options: ["brown, rhombic haemin crystals", "pink, feathery haemochromogen crystals", "yellow, needle-shaped spermine picrate crystals", "dark brown, rhomboid choline periodide crystals"],
    answer: 1,
    explanation: "The Takayama reagent contains pyridine, glucose and sodium hydroxide. With gentle heat, haem forms pyridine ferroprotoporphyrin (haemochromogen), seen as pink, feathery crystals. Brown rhombic haemin crystals are formed in the Teichmann test."
  },
  {
    id: 109,
    question: "An immunochromatographic test for human haemoglobin gives a positive result. Besides humans, blood from which animals is known to give a positive result?",
    options: ["Cattle and buffaloes", "Dogs and cats", "Higher primates and ferrets", "Chickens and pigeons"],
    answer: 2,
    explanation: "Kits such as HemaTrace use monoclonal anti-human haemoglobin and cross-react with blood of higher primates and ferrets, whose haemoglobin is very similar. Common domestic animals do not react. In Indian casework, primate blood is rarely an issue, but the limitation must be known."
  },
  {
    id: 110,
    question: "Anti-human precipitin serum used to test the species of origin of a bloodstain is usually made by",
    options: ["immunising rabbits with human serum proteins", "immunising humans with rabbit serum", "extracting antibodies from human cord blood", "culturing human red cells with bacteria"],
    answer: 0,
    explanation: "Rabbits or other animals are injected with human serum, and their immune systems make antibodies against human proteins. The resulting antiserum, after checking for cross-reactions, reacts specifically with human proteins. Similar antisera are raised against cow, goat, dog and other species."
  },
  {
    id: 111,
    question: "Vitreous humour is collected from a body found two days after death. Which constituent rises in a roughly linear way after death and is used to estimate the post-mortem interval?",
    options: ["Sodium", "Glucose", "Potassium", "Chloride"],
    answer: 2,
    explanation: "After death, potassium leaks from the cells of the retina and lens into the vitreous, and its level rises fairly steadily for several days. Vitreous is well protected from contamination and putrefaction. Sodium and chloride stay relatively stable, and glucose falls."
  },
  {
    id: 112,
    question: "Scalp hair grows about 1 cm per month. In segmental hair analysis, a drug is found only in the segment 3–4 cm from the root. When was the drug most likely taken?",
    options: ["In the last week before the hair was collected", "About 3 to 4 months before the hair was collected", "About 1 year before the hair was collected", "About 3 to 4 days before the hair was collected"],
    answer: 1,
    explanation: "At about 1 cm per month, the 3–4 cm segment reflects exposure roughly 3 to 4 months earlier. Hair keeps a long record of drug use, unlike blood or urine, which reflect only hours to days. Hair growth rates vary, so the timeline is approximate."
  },
  {
    id: 113,
    question: "Why is femoral blood preferred to heart blood for measuring drug concentrations at autopsy?",
    options: ["It always contains more of the drug", "It clots less after death", "It is the only site free from alcohol", "It is less affected by post-mortem redistribution of drugs"],
    answer: 3,
    explanation: "After death, drugs diffuse from organs such as the lungs, liver and stomach into central vessels, raising heart blood levels, a process called post-mortem redistribution. Peripheral femoral blood, collected after clamping, is less affected and gives a better estimate of the level at death. Drugs with large volumes of distribution are most affected."
  },
  {
    id: 114,
    question: "A badly decomposed body shows a blood alcohol level of 60 mg/100 mL, but the vitreous humour and urine contain no alcohol. The best explanation is",
    options: ["post-mortem production of alcohol by microbes in the blood", "the deceased drank alcohol just before death", "alcohol was lost from the blood by evaporation", "the vitreous was contaminated with water"],
    answer: 0,
    explanation: "Bacteria and yeasts can produce ethanol from glucose in decomposing blood. Vitreous humour and urine are less affected because they are relatively sterile and low in glucose. Alcohol in the blood with none in the vitreous points to post-mortem production rather than drinking."
  },
  {
    id: 115,
    question: "Which technique is the standard method for measuring ethanol in blood in forensic laboratories?",
    options: ["Thin-layer chromatography with iodine vapour", "Atomic absorption spectrometry", "Headspace gas chromatography with flame ionisation detection", "Polyacrylamide gel electrophoresis"],
    answer: 2,
    explanation: "In headspace GC-FID, the blood sample with an internal standard such as n-propanol is warmed in a sealed vial, and the vapour above it is injected. Ethanol is separated from other volatiles such as methanol and acetone and measured accurately. AAS measures metals, not alcohols."
  },
  {
    id: 116,
    question: "Investigators want to know where an unidentified person spent their childhood. Which analysis of tooth enamel can help?",
    options: ["Acid phosphatase activity", "Strontium and oxygen stable isotope ratios", "ABO blood grouping", "Fluorescence of dentine under UV light"],
    answer: 1,
    explanation: "Enamel forms in childhood and does not remodel, so its strontium (87Sr/86Sr) and oxygen (δ18O) isotope ratios reflect the geology and water of the place where the person grew up. Bone remodels and reflects the last years of life. These ratios are measured by isotope-ratio mass spectrometry."
  },
  {
    id: 117,
    question: "Under the microscope, a thin section of a bone fragment shows bands of laminar (plexiform) bone rather than scattered Haversian osteons. This most likely means the bone is",
    options: ["from a non-human animal such as a cow", "from an elderly human", "from a human child", "from a human burnt at high temperature"],
    answer: 0,
    explanation: "Adult human cortical bone is mostly made of secondary osteons (Haversian systems). Plexiform or laminar bone, laid down in regular layers, is typical of fast-growing large animals such as cattle and is rare in humans. Bone histology helps when fragments are too small to identify by shape."
  },
  {
    id: 118,
    question: "On a TLC plate, a spot from an extract travels 3.6 cm while the solvent front travels 9.0 cm from the origin. What is the Rf value?",
    options: ["2.50", "0.40", "0.36", "0.54"],
    answer: 1,
    explanation: "Rf = distance moved by the spot ÷ distance moved by the solvent front = 3.6 ÷ 9.0 = 0.40. Rf is always between 0 and 1. The questioned spot is compared with a standard run on the same plate, because Rf depends on the solvent, plate and temperature."
  },
  {
    id: 119,
    question: "A centrifuge rotor has a radius of 10 cm and spins at 3,000 rpm. Using RCF = 1.118 × 10⁻⁵ × r (cm) × (rpm)², what is the relative centrifugal force?",
    options: ["About 1,006 × g", "About 335 × g", "About 3,354 × g", "About 10,060 × g"],
    answer: 0,
    explanation: "(3,000)² = 9 × 10⁶. RCF = 1.118 × 10⁻⁵ × 10 × 9 × 10⁶ = 1,006 × g. Protocols should state RCF rather than rpm, because the force depends on the rotor radius. Doubling the speed increases RCF fourfold."
  },
  {
    id: 120,
    question: "A solution in a 1 cm cuvette has an absorbance of 0.60. If the molar absorptivity is 12,000 L mol⁻¹ cm⁻¹, what is its concentration?",
    options: ["5.0 × 10⁻³ mol/L", "2.0 × 10⁻⁴ mol/L", "5.0 × 10⁻⁵ mol/L", "7.2 × 10³ mol/L"],
    answer: 2,
    explanation: "By the Beer–Lambert law, A = εbc, so c = A ÷ (εb) = 0.60 ÷ (12,000 × 1) = 5.0 × 10⁻⁵ mol/L. The law holds well at low concentrations. At high absorbance, readings become non-linear and the sample should be diluted."
  },
  {
    id: 121,
    question: "Before capillary electrophoresis of STR amplicons, the samples are mixed with Hi-Di formamide and heated. What is the purpose of this step?",
    options: ["To digest proteins in the sample", "To denature the DNA into single strands", "To label the DNA with fluorescent dye", "To join the amplicons into longer fragments"],
    answer: 1,
    explanation: "Heating in formamide separates the two DNA strands and keeps them apart, so each strand migrates according to its size in the denaturing polymer. Fluorescent labels are added during PCR through labelled primers. Single-stranded DNA gives sharp peaks and accurate sizing."
  },
  {
    id: 122,
    question: "In MALDI-TOF mass spectrometry used for identifying bacteria or proteins, what is the role of the matrix such as α-cyano-4-hydroxycinnamic acid?",
    options: ["It absorbs the laser energy and helps ionise the sample gently", "It separates proteins by charge before analysis", "It acts as the detector of the ions", "It breaks proteins into single amino acids"],
    answer: 0,
    explanation: "The sample is co-crystallised with a matrix that absorbs the laser light and transfers energy and protons to the analyte, producing mostly singly charged ions with little fragmentation. Ions are then separated by time of flight, with lighter ions arriving first."
  },
  {
    id: 123,
    question: "GC-MS libraries such as NIST are built mainly from spectra recorded with which ionisation method?",
    options: ["Electron ionisation at 70 eV", "Electrospray ionisation", "Matrix-assisted laser desorption ionisation", "Chemical ionisation with methane"],
    answer: 0,
    explanation: "Electron ionisation at the standard 70 eV gives reproducible fragmentation patterns, so spectra from different instruments can be matched against libraries. Electrospray and MALDI are soft ionisation methods used mainly in LC-MS and protein work. Chemical ionisation gives less fragmentation and is useful for confirming molecular mass."
  },
  {
    id: 124,
    question: "In LC-MS/MS toxicology, a triple quadrupole instrument is set to monitor selected precursor-to-product ion transitions of each drug. This mode is called",
    options: ["full-scan mode", "time-of-flight mode", "multiple reaction monitoring (MRM)", "total ion current mode"],
    answer: 2,
    explanation: "In MRM, the first quadrupole selects the precursor ion, the second fragments it, and the third selects a specific product ion. This makes detection highly selective and sensitive, ideal for quantifying drugs at low levels in blood. Full scan collects all ions and is used for screening unknowns."
  },
  {
    id: 125,
    question: "Finding 6-monoacetylmorphine (6-MAM) in urine or blood is important because it",
    options: ["indicates codeine use only", "specifically indicates heroin use", "is a metabolite of morphine from any source", "shows recent cannabis use"],
    answer: 1,
    explanation: "Heroin (diacetylmorphine) is quickly deacetylated to 6-MAM and then to morphine. 6-MAM does not form from morphine or codeine, so it proves heroin use. It has a short half-life, so it is detectable only for a few hours in blood and about a day in urine."
  },
  {
    id: 126,
    question: "Under the NDPS Act, 1985 notification, what are the small quantity and commercial quantity for heroin?",
    options: ["1 g and 100 g", "10 g and 500 g", "5 g and 250 g", "100 g and 1 kg"],
    answer: 2,
    explanation: "The 2001 notification under the NDPS Act fixes small quantity of heroin at 5 g and commercial quantity at 250 g. Punishment depends on whether the seized amount is small, intermediate or commercial. For ganja the figures are 1 kg and 20 kg."
  },
  {
    id: 127,
    question: "In a fluorescence microscope, which component reflects the shorter excitation light onto the specimen while letting the longer emitted light pass to the eyepiece?",
    options: ["Condenser diaphragm", "Dichroic mirror", "Polariser", "Phase ring"],
    answer: 1,
    explanation: "The dichroic (beam-splitting) mirror reflects excitation wavelengths down to the specimen and transmits the longer-wavelength fluorescence. The excitation and emission filters fine-tune the light. The emitted light is longer in wavelength than the excitation light, which is called the Stokes shift."
  },
  {
    id: 128,
    question: "What is the main function of the pinhole aperture in a confocal laser scanning microscope?",
    options: ["To increase the magnification of the objective", "To split the beam into polarised components", "To produce the laser light", "To block out-of-focus light so that thin optical sections are imaged"],
    answer: 3,
    explanation: "The pinhole is placed at a plane conjugate to the focal point, so only light from the focal plane reaches the detector. Out-of-focus light is rejected, giving sharp optical sections that can be stacked into 3D images. It is useful for imaging cells on fibres and sperm on slides."
  },
  {
    id: 129,
    question: "An exhumed body is examined for suspected chronic arsenic poisoning. Which sample and method are most appropriate for detecting long-term exposure?",
    options: ["Vitreous humour analysed by TLC", "Heart blood analysed by headspace GC", "Hair and nails analysed by hydride-generation atomic absorption spectrometry", "Bile analysed by ELISA"],
    answer: 2,
    explanation: "Arsenic binds to keratin and stays in hair and nails for months, and these resist decomposition. Hydride-generation AAS (or ICP-MS) gives sensitive, element-specific measurements. White transverse bands on nails (Mees' lines) may also be seen in arsenic poisoning."
  },
  {
    id: 130,
    question: "Which microscope gives high-magnification surface images of the cuticle of a hair or the scales of a fibre, with great depth of field?",
    options: ["Compound light microscope", "Scanning electron microscope", "Phase-contrast microscope", "Stereo microscope"],
    answer: 1,
    explanation: "The SEM scans a focused electron beam over the surface and detects secondary electrons, giving detailed 3D-looking images at very high magnification with large depth of field. With an EDX detector it also gives elemental composition. Light microscopes are limited to about 1,000–1,500× useful magnification."
  },
  {
    id: 131,
    question: "When long bone is sampled for DNA identification of skeletal remains, which part is usually preferred?",
    options: ["A window of dense cortical bone from the mid-shaft of the femur", "Spongy bone from the femoral head", "The growth plate region of the tibia", "The marrow cavity scrapings of the humerus"],
    answer: 0,
    explanation: "Dense cortical bone from the femur or tibia mid-shaft protects DNA better than spongy bone, which is more porous and exposed to microbes and water. A section of a few grams is cut with a clean saw after the surface has been cleaned. The petrous bone is another excellent choice."
  },
  {
    id: 132,
    question: "Which teeth are preferred for DNA analysis from decomposed or skeletal remains?",
    options: ["Teeth with large fillings, which seal the pulp", "Broken incisors with exposed pulp", "Intact, healthy molars without fillings or cracks", "Loose deciduous teeth found nearby"],
    answer: 2,
    explanation: "Intact molars have large pulp chambers and thick enamel that protects the DNA. Cracked or broken teeth allow microbes and contaminants to enter. Teeth with restorations may be needed for dental identification, so they are usually kept for the odontologist."
  },
  {
    id: 133,
    question: "Tissue is taken from a decomposed body at autopsy for DNA typing. Which preservation method should be AVOIDED?",
    options: ["Freezing the tissue at −20 °C", "Placing deep muscle in 95% ethanol", "Placing the tissue in a sterile tube with DMSO-EDTA salt solution", "Placing the tissue in formalin"],
    answer: 3,
    explanation: "Formalin cross-links proteins with DNA and fragments it, making STR typing very difficult. Freezing, high-strength ethanol and DMSO-EDTA salt solutions all preserve DNA well. Deep muscle or bone is preferred to surface tissue in decomposed bodies."
  },
  {
    id: 134,
    question: "Blowfly larvae are collected from a body for PMI estimation. How should a portion of them be preserved for accurate length measurement?",
    options: ["Kill them in hot water (about 80 °C) and then store in 70–80% ethanol", "Place them alive directly in 10% formalin", "Freeze them alive in a plastic bag", "Dry them in an oven at 100 °C"],
    answer: 0,
    explanation: "Brief immersion in hot water kills and straightens larvae without shrinking them, so their length can be measured and compared with growth data. They are then stored in ethanol. A second group is kept alive with food so that they can be reared to adults for species identification."
  },
  {
    id: 135,
    question: "Under Section 176(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, a forensic expert must visit the crime scene for which offences?",
    options: ["All offences under the BNS", "Only offences involving death", "Only offences registered in metropolitan areas", "Offences punishable with imprisonment of seven years or more"],
    answer: 3,
    explanation: "BNSS Section 176(3) makes it mandatory for a forensic expert to visit the scene and collect evidence, with videography, for offences punishable with seven years or more. The requirement applies from a date each State Government notifies, within five years, so it did not start automatically on 1 July 2024 when BNSS replaced the CrPC. States without facilities can notify use of another state's facilities until they build their own."
  },
  {
    id: 136,
    question: "Where is the State Forensic Science Laboratory of Madhya Pradesh located?",
    options: ["Bhopal", "Indore", "Jabalpur", "Sagar"],
    answer: 3,
    explanation: "The MP State FSL is at Sagar and serves as the main state laboratory, with regional FSLs in cities such as Bhopal, Indore, Gwalior, Jabalpur and Rewa. Its divisions include biology, serology, DNA, toxicology, chemistry, ballistics and documents."
  },
  {
    id: 137,
    question: "The National Forensic Sciences University (NFSU), declared an Institution of National Importance by an Act of Parliament in 2020, has its headquarters at",
    options: ["New Delhi", "Hyderabad", "Gandhinagar", "Bhopal"],
    answer: 2,
    explanation: "NFSU was created under the National Forensic Sciences University Act, 2020 from the Gujarat Forensic Sciences University, with its main campus at Gandhinagar. LNJN NICFS in Delhi became part of NFSU. NFSU has opened several other campuses, including one in Bhopal."
  },
  {
    id: 138,
    question: "From 1 January 2017, how many core STR loci does the US FBI's CODIS database require?",
    options: ["20", "13", "15", "24"],
    answer: 0,
    explanation: "CODIS expanded from 13 to 20 core loci in January 2017, adding D1S1656, D2S441, D2S1338, D10S1248, D12S391, D19S433 and D22S1045. The larger set raised discrimination and improved compatibility with European databases. Amelogenin is typed but is not a core STR locus."
  },
  {
    id: 139,
    question: "EMPOP is a quality-controlled forensic database of which type of genetic data?",
    options: ["Autosomal STR allele frequencies", "Mitochondrial DNA haplotypes", "Y-STR haplotypes", "Protein sequences"],
    answer: 1,
    explanation: "EMPOP (EDNAP mtDNA Population Database) holds quality-checked mtDNA control-region and whole-mitogenome haplotypes from populations worldwide. Laboratories use it to estimate how often an mtDNA type occurs. YHRD is the equivalent database for Y-STRs."
  },
  {
    id: 140,
    question: "INTERPOL DVI forms are colour-coded. What colours are used for ante-mortem and post-mortem data forms?",
    options: ["Yellow for ante-mortem and pink for post-mortem", "Pink for ante-mortem and yellow for post-mortem", "White for ante-mortem and green for post-mortem", "Blue for ante-mortem and red for post-mortem"],
    answer: 0,
    explanation: "Ante-mortem data about missing persons (dental records, medical history, fingerprints, DNA references) go on yellow forms. Post-mortem findings from bodies go on pink forms. Reconciliation compares the two sets to establish identity."
  },
  {
    id: 141,
    question: "A scientist wants to compare an unknown DNA sequence with a protein database by translating it in all six reading frames. Which BLAST program should be used?",
    options: ["blastx", "blastn", "blastp", "tblastn"],
    answer: 0,
    explanation: "blastx translates a nucleotide query in six frames and searches a protein database. blastn compares nucleotide with nucleotide, blastp compares protein with protein, and tblastn compares a protein query with a translated nucleotide database."
  },
  {
    id: 142,
    question: "GenBank, the public database of nucleotide sequences, is maintained by",
    options: ["EMBL-EBI of the UK", "NCBI of the USA", "DDBJ of Japan", "NIST of the USA"],
    answer: 1,
    explanation: "GenBank is maintained by the National Center for Biotechnology Information (NCBI) at the US National Library of Medicine. It exchanges data daily with EMBL-EBI's European Nucleotide Archive and the DNA Data Bank of Japan as part of the INSDC. NIST maintains STRBase."
  },
  {
    id: 143,
    question: "For the commonly used Streptococcus pyogenes Cas9, what PAM sequence must lie just downstream of the target DNA?",
    options: ["5′-TTTV-3′", "5′-NNGRRT-3′", "5′-NGG-3′", "5′-AAA-3′"],
    answer: 2,
    explanation: "SpCas9 requires an NGG protospacer-adjacent motif immediately 3′ of the 20-nucleotide target. Without the PAM, Cas9 does not cut even if the guide RNA matches. TTTV is the PAM for Cas12a, which binds upstream of the target."
  },
  {
    id: 144,
    question: "The SHERLOCK diagnostic platform detects specific RNA sequences using the collateral cleavage activity of which Cas protein?",
    options: ["Cas9", "Cas13", "Cas12a", "Cas3"],
    answer: 1,
    explanation: "SHERLOCK uses Cas13, which, after recognising its target RNA, cuts nearby reporter RNAs and releases a signal. DETECTR uses Cas12a, which has similar collateral activity on single-stranded DNA. These methods could be used for rapid detection of body-fluid mRNA or pathogens."
  },
  {
    id: 145,
    question: "Proteomic analysis of hair shafts can identify 'genetically variant peptides' (GVPs). What is their forensic value?",
    options: ["They show the drugs taken by the donor", "They identify the dye used on the hair", "They show the age of the hair", "They reflect SNPs in the donor's genes and can help individualise hair even when DNA is degraded"],
    answer: 3,
    explanation: "GVPs are peptides that carry amino acid changes caused by non-synonymous SNPs in keratin and related genes. Since proteins in hair are more stable than DNA, GVP profiles can provide some individualising information and ancestry clues. They are detected by LC-MS/MS."
  },
  {
    id: 146,
    question: "How can proteomics estimate the sex of skeletal remains from tooth enamel?",
    options: ["By measuring the calcium content of enamel", "By finding collagen type I in enamel", "By detecting peptides from amelogenin Y (AMELY), present only in males", "By detecting Barr bodies in enamel cells"],
    answer: 2,
    explanation: "Enamel contains amelogenin peptides from both the X (AMELX) and Y (AMELY) genes. AMELY-specific peptides detected by LC-MS/MS show the person was male. Enamel peptides survive for very long periods, even when DNA is gone."
  },
  {
    id: 147,
    question: "In bottom-up proteomics, proteins are digested with trypsin before mass spectrometry. Where does trypsin cleave?",
    options: ["After phenylalanine, tyrosine or tryptophan", "Before any proline residue", "After aspartate or glutamate", "After lysine or arginine, unless followed by proline"],
    answer: 3,
    explanation: "Trypsin cuts on the C-terminal side of lysine and arginine, except when the next residue is proline. This gives predictable peptides that are easy to match to database sequences. Chymotrypsin cuts after aromatic residues, and Glu-C after glutamate."
  },
  {
    id: 148,
    question: "In two-dimensional gel electrophoresis of proteins, what are the two dimensions of separation?",
    options: ["Molecular mass first, then hydrophobicity", "Isoelectric point first, then molecular mass", "Charge-to-mass ratio first, then solubility", "Antigenicity first, then molecular mass"],
    answer: 1,
    explanation: "Proteins are first separated by isoelectric focusing on a pH gradient strip according to their pI, then by SDS-PAGE according to molecular mass. Thousands of protein spots can be resolved and then cut out for mass spectrometry. It has been used to find body-fluid-specific proteins."
  },
  {
    id: 149,
    question: "Which organisation maintains STRBase, the online resource of STR loci information for forensic DNA typing?",
    options: ["FBI, USA", "INTERPOL", "NCBI, USA", "NIST, USA"],
    answer: 3,
    explanation: "STRBase was created and is maintained by the US National Institute of Standards and Technology (NIST). It gives details of STR loci, variant alleles, kits and reference material. The FBI runs CODIS, and NCBI runs GenBank."
  },
  {
    id: 150,
    question: "Skeletal remains are found in a forest. Which of the following should be done FIRST at the recovery site?",
    options: ["Photograph, map and record the position of the bones before lifting them", "Wash the bones on site to remove soil", "Pack all bones together in one plastic bag", "Remove the skull first to begin identification"],
    answer: 0,
    explanation: "Recovery follows archaeological methods: the scene is photographed, gridded and mapped so that the position of each bone, any insects and the surrounding soil are recorded. Bones are then lifted, packed separately in paper and labelled. Washing on site can destroy trace evidence and DNA."
  },
];

export default questions;

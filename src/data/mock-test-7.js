const questions = [
  {
    id: 1,
    question: "The present state of Madhya Pradesh came into being on 1 November 1956 under the States Reorganisation Act. Which of the following was NOT one of the units merged to form it?",
    options: ["Madhya Bharat", "Vindhya Pradesh", "Bhopal State", "Vidarbha region of the old Madhya Pradesh"],
    answer: 3,
    explanation: "New Madhya Pradesh was formed from Madhya Bharat, Vindhya Pradesh, Bhopal State and the Mahakoshal (Hindi-speaking) part of the old Madhya Pradesh, plus the Sironj sub-division of Rajasthan. The Marathi-speaking Vidarbha region of the old state went to Bombay State and is now in Maharashtra."
  },
  {
    id: 2,
    question: "The new state of Madhya Pradesh had a very short first ministry because its Chief Minister died within two months of taking office in November 1956. Who was he?",
    options: ["Bhagwantrao Mandloi", "Kailash Nath Katju", "Dwarka Prasad Mishra", "Pt. Ravishankar Shukla"],
    answer: 3,
    explanation: "Pt. Ravishankar Shukla was sworn in as the first Chief Minister of the new state but died on 31 December 1956. Bhagwantrao Mandloi then served briefly, followed by Kailash Nath Katju in 1957."
  },
  {
    id: 3,
    question: "On Makar Sankranti 1931, British troops fired on a protest meeting at Charan Paduka on the Urmil river. In which present-day district of MP is this site?",
    options: ["Tikamgarh", "Panna", "Rewa", "Chhatarpur"],
    answer: 3,
    explanation: "On Makar Sankranti 1931, British troops fired on a peaceful meeting at Charan Paduka on the banks of the Urmil river in Chhatarpur district, killing many protesters. Its scale and circumstances led to the comparison with Jallianwala Bagh."
  },
  {
    id: 4,
    question: "The Tripuri session of the Indian National Congress (1939), held near Jabalpur, followed Subhas Chandra Bose's re-election as president. Whom had Bose defeated in that election?",
    options: ["Pattabhi Sitaramayya", "Rajendra Prasad", "Vallabhbhai Patel", "Maulana Abul Kalam Azad"],
    answer: 0,
    explanation: "Bose defeated Dr. Pattabhi Sitaramayya, who had Gandhi's backing, and Gandhi called the defeat his own. Differences at Tripuri led Bose to resign and form the Forward Bloc. Sitaramayya later became the first Governor of Madhya Pradesh in 1956."
  },
  {
    id: 5,
    question: "Rani Durgavati of the Garha-Mandla Gond kingdom died in 1564 while resisting a Mughal army. Which Mughal commander led that army?",
    options: ["Adham Khan", "Raja Man Singh", "Bairam Khan", "Asaf Khan"],
    answer: 3,
    explanation: "Akbar's governor of Kara-Manikpur, Khwaja Abdul Majid Asaf Khan, invaded Garha-Katanga. Rani Durgavati fought near Narrai Nala (Jabalpur) and took her own life rather than be captured. Her martyrdom day, 24 June, is observed in MP as Balidan Diwas."
  },
  {
    id: 6,
    question: "Gond king Raja Shankar Shah and his son Kunwar Raghunath Shah were executed by being blown from cannons in September 1857. Where did this take place?",
    options: ["Sagar", "Mandla", "Jabalpur", "Narsinghpur"],
    answer: 2,
    explanation: "The father and son, accused of planning an uprising against the British, were blown from cannons at Jabalpur on 18 September 1857. They are remembered as tribal martyrs of the First War of Independence in Mahakoshal."
  },
  {
    id: 7,
    question: "The Bori incident of January 1949 in Raisen district, in which young protesters were shot while hoisting the tricolour, was part of which movement?",
    options: ["Jhanda Satyagraha of Jabalpur", "Quit India Movement", "Jungle Satyagraha", "Bhopal State merger (Vilinikaran) movement"],
    answer: 3,
    explanation: "After 1947 the Nawab of Bhopal resisted joining the Indian Union, and a popular merger (vilinikaran) agitation followed. Police firing at Bori on 14 January 1949 killed several young agitators. Bhopal finally merged with India on 1 June 1949."
  },
  {
    id: 8,
    question: "Who served as the Rajpramukh of Madhya Bharat when it was formed in 1948?",
    options: ["Yashwantrao Holkar II", "Nawab Hamidullah Khan", "Martand Singh of Rewa", "Jiwajirao Scindia"],
    answer: 3,
    explanation: "Madhya Bharat (1948–56) was a union of Gwalior, Indore and other Malwa states, with Gwalior and Indore as its alternating capitals. Jiwajirao Scindia of Gwalior was Rajpramukh and Yashwantrao Holkar II of Indore was Up-Rajpramukh. Martand Singh of Rewa was Rajpramukh of Vindhya Pradesh."
  },
  {
    id: 9,
    question: "The Heliodorus pillar (Khambh Baba) at Besnagar near Vidisha was set up by a Greek envoy who professed himself a Bhagavata. Which Indo-Greek king had sent him?",
    options: ["Antialcidas", "Menander", "Demetrius I", "Strato I"],
    answer: 0,
    explanation: "Heliodorus came from Taxila as ambassador of King Antialcidas to the court of the Shunga king Bhagabhadra, around 113 BCE. The pillar is a Garuda-dhvaja dedicated to Vasudeva and is among the earliest inscriptional evidence of Vaishnavism (Bhagavatism)."
  },
  {
    id: 10,
    question: "What is the special significance of the Ashokan minor rock edict at Gujarra in Datia district?",
    options: ["It is the only Ashokan inscription in Kharosthi script in central India", "It records the convening of the Third Buddhist Council", "It describes the Kalinga war in detail", "It is one of the few edicts that name the emperor as 'Ashoka' instead of only 'Devanampiya Piyadasi'"],
    answer: 3,
    explanation: "Most edicts call the emperor 'Devanampiya Piyadasi'. Gujarra, together with Maski, Nittur and Udegolam, actually uses the name Ashoka. The Kalinga war is described in Major Rock Edict XIII, not at Gujarra."
  },
  {
    id: 11,
    question: "The Tropic of Cancer passes through how many districts of Madhya Pradesh, from Ratlam in the west to Shahdol in the east?",
    options: ["10", "12", "14", "16"],
    answer: 2,
    explanation: "The Tropic of Cancer (23.5°N) crosses 14 districts of MP: Ratlam, Ujjain, Agar Malwa, Rajgarh, Sehore, Bhopal, Vidisha, Raisen, Sagar, Damoh, Jabalpur, Katni, Umaria and Shahdol. It divides the state into roughly equal northern and southern halves."
  },
  {
    id: 12,
    question: "Which of the following pairs of a river and its place of origin in Madhya Pradesh is correctly matched?",
    options: ["Tapti – Multai (Betul)", "Chambal – Amarkantak (Anuppur)", "Betwa – Janapav hills (Indore)", "Son – Pachmarhi (Narmadapuram)"],
    answer: 0,
    explanation: "The Tapti rises at Multai in Betul district and flows west to the Arabian Sea. The Chambal rises in the Janapav hills near Mhow, the Son and Narmada at Amarkantak, and the Betwa near Kumhra village in Raisen district."
  },
  {
    id: 13,
    question: "Dhupgarh, the highest point of Madhya Pradesh, lies in which range?",
    options: ["Vindhya range", "Kaimur range", "Maikal range", "Mahadeo hills of the Satpura range"],
    answer: 3,
    explanation: "Dhupgarh (about 1,350 m) is near Pachmarhi in the Mahadeo hills, part of the Satpura range in Narmadapuram district. The Maikal range in the east contains Amarkantak, the source of the Narmada."
  },
  {
    id: 14,
    question: "The Indira Sagar dam, which has the largest reservoir on the Narmada, is located in which district?",
    options: ["Khargone", "Dhar", "Khandwa", "Narmadapuram"],
    answer: 2,
    explanation: "Indira Sagar is at Narmadanagar (Punasa) in Khandwa district and is a multipurpose irrigation and hydropower project. The Omkareshwar and Maheshwar projects lie downstream of it, and the Bargi dam lies upstream near Jabalpur."
  },
  {
    id: 15,
    question: "The Rewa Ultra Mega Solar project was the first solar project in India to supply power to an institutional customer outside the state. Who is that customer?",
    options: ["Mumbai Suburban Railway", "Kolkata Metro", "Namma Metro, Bengaluru", "Delhi Metro Rail Corporation"],
    answer: 3,
    explanation: "The 750 MW Rewa solar park at Gurh tehsil supplies part of its output to Delhi Metro Rail Corporation, with the rest going to MP's discoms. It was also noted for the record-low tariffs it achieved through reverse auction in 2017."
  },
  {
    id: 16,
    question: "India's only mechanised diamond mine, at Majhgawan in Panna district, is operated by which public sector undertaking?",
    options: ["NMDC Ltd", "Hindustan Zinc Ltd", "Coal India Ltd", "MOIL Ltd"],
    answer: 0,
    explanation: "The Majhgawan diamond mine in Panna is operated by NMDC. The diamonds come from a kimberlite pipe, and Panna district is India's main source of diamonds. MOIL mines manganese ore in Balaghat and Chhindwara."
  },
  {
    id: 17,
    question: "Malanjkhand, known for India's largest open-cast copper mine, is in which district of Madhya Pradesh?",
    options: ["Balaghat", "Chhindwara", "Betul", "Singrauli"],
    answer: 0,
    explanation: "Hindustan Copper Ltd runs the Malanjkhand copper project in Balaghat district, which holds a large share of India's copper ore reserves. Balaghat is also an important manganese-producing district."
  },
  {
    id: 18,
    question: "The hard-ground barasingha, MP's state animal, survives in the wild mainly in Kanha. To which subspecies does it belong?",
    options: ["Rucervus duvaucelii duvaucelii", "Rucervus duvaucelii ranjitsinhi", "Rucervus duvaucelii branderi", "Rucervus eldii eldii"],
    answer: 2,
    explanation: "The hard-ground barasingha (Rucervus duvaucelii branderi) is adapted to firm grassland rather than swamp. Kanha's conservation programme saved it from near-extinction in the 1970s. The nominate subspecies lives in wetlands of the terai, and R. eldii is the brow-antlered sangai of Manipur."
  },
  {
    id: 19,
    question: "The black cotton (regur) soil of the Malwa plateau has formed mainly by the weathering of which parent rock?",
    options: ["Granite and gneiss", "Deccan trap basalt", "Vindhyan sandstone", "Gondwana coal measures"],
    answer: 1,
    explanation: "Malwa lies on the Deccan trap lava flows, and the basalt weathers into clay-rich, montmorillonitic black soil. This soil holds moisture well and is suited to cotton and soybean. Vindhyan sandstones give lighter, less fertile soils."
  },
  {
    id: 20,
    question: "Sakhya Sagar, designated a Ramsar wetland in 2022, lies within which protected area of Madhya Pradesh?",
    options: ["Van Vihar National Park, Bhopal", "Madhav National Park, Shivpuri", "Ratapani Wildlife Sanctuary, Raisen", "Ralamandal Sanctuary, Indore"],
    answer: 1,
    explanation: "Sakhya Sagar is a man-made lake in Madhav National Park, Shivpuri, which became a tiger reserve in 2025. Bhoj Wetland in Bhopal was MP's first Ramsar site (2002). Sirpur and Yashwant Sagar near Indore were added in 2022."
  },
  {
    id: 21,
    question: "How many members does Madhya Pradesh elect to the Rajya Sabha?",
    options: ["9", "10", "11", "12"],
    answer: 2,
    explanation: "MP has 11 Rajya Sabha seats, 29 Lok Sabha seats and 230 Legislative Assembly seats. Rajya Sabha members are elected by the elected MLAs using proportional representation by single transferable vote."
  },
  {
    id: 22,
    question: "Which statement about the High Court of Madhya Pradesh is correct?",
    options: ["Its principal seat is at Bhopal, with benches at Indore and Gwalior", "Its principal seat is at Jabalpur, with benches at Indore and Gwalior", "Its principal seat is at Jabalpur, with benches at Bhopal and Indore", "Its principal seat is at Indore, with benches at Jabalpur and Gwalior"],
    answer: 1,
    explanation: "The MP High Court sits at Jabalpur, with permanent benches at Indore and Gwalior. Bhopal is the state capital but has no High Court bench."
  },
  {
    id: 23,
    question: "Madhya Pradesh was the first state to pass a law giving citizens a legal right to time-bound delivery of notified public services. In which year was it enacted?",
    options: ["2005", "2008", "2010", "2013"],
    answer: 2,
    explanation: "The MP Lok Sewaon ke Pradan ki Guarantee Adhiniyam, 2010 sets time limits for notified services and fines officials who miss them. Many states later passed similar laws, and Lok Seva Kendras deliver these services in MP."
  },
  {
    id: 24,
    question: "The institution of Lokayukta in Madhya Pradesh is governed by an Act passed in which year?",
    options: ["1971", "1981", "1991", "2001"],
    answer: 1,
    explanation: "The MP Lokayukt Evam Up-Lokayukt Adhiniyam, 1981 created the Lokayukta to investigate complaints of corruption against public servants. Its Special Police Establishment handles trap and disproportionate-assets cases."
  },
  {
    id: 25,
    question: "Madhya Pradesh is credited with which first in the history of Panchayati Raj after the 73rd Constitutional Amendment?",
    options: ["First state to hold panchayat elections under the amended constitutional scheme (1994)", "First state to adopt a two-tier panchayat system", "First state to abolish the Gram Sabha", "First state to elect Zila Panchayat presidents by direct vote of all citizens"],
    answer: 0,
    explanation: "MP passed the MP Panchayat Raj Adhiniyam in 1993 and held the first panchayat elections under the 73rd Amendment in 1994. It follows a three-tier system: Gram Panchayat, Janpad Panchayat and Zila Panchayat."
  },
  {
    id: 26,
    question: "Under the Fifth Schedule, a Tribes Advisory Council may have up to 20 members. What proportion of them must be Scheduled Tribe members of the state Legislative Assembly, as far as possible?",
    options: ["One-half", "Two-thirds", "Three-fourths", "All of them"],
    answer: 2,
    explanation: "Paragraph 4 of the Fifth Schedule provides for a TAC of not more than 20 members, of whom as nearly as possible three-fourths are ST representatives in the Legislative Assembly. The TAC advises on the welfare and advancement of STs. MP, as a Fifth Schedule state, has one."
  },
  {
    id: 27,
    question: "Madhya Pradesh notified its rules under the PESA Act, 1996 on Janjatiya Gaurav Divas (15 November) of which year?",
    options: ["2016", "2019", "2022", "2024"],
    answer: 2,
    explanation: "The MP PESA Rules were notified on 15 November 2022 and came into force in the Scheduled Areas of the state. They give Gram Sabhas powers over minor forest produce, land alienation, money-lending and liquor shops. PESA extends Part IX of the Constitution to Fifth Schedule areas."
  },
  {
    id: 28,
    question: "Pithampur in Dhar district, a major automobile manufacturing cluster, is popularly called what?",
    options: ["Manchester of Madhya Pradesh", "Detroit of India", "Silicon Valley of Central India", "Steel City of Madhya Pradesh"],
    answer: 1,
    explanation: "Pithampur hosts commercial-vehicle and tractor makers and many auto-component suppliers, which earned it the name 'Detroit of India'. It forms part of the Indore–Pithampur industrial corridor."
  },
  {
    id: 29,
    question: "Bank Note Press, one of the government security presses in Madhya Pradesh, is located at which place?",
    options: ["Narmadapuram", "Dewas", "Jabalpur", "Pithampur"],
    answer: 1,
    explanation: "Bank Note Press, Dewas, run by SPMCIL, prints currency notes. The Security Paper Mill at Narmadapuram (Hoshangabad) makes the paper used for currency and other security documents."
  },
  {
    id: 30,
    question: "In 2016 Madhya Pradesh became the first Indian state to set up a dedicated department to promote and measure citizens' well-being. What is this department called?",
    options: ["Anand Vibhag (Department of Happiness)", "Jan Abhiyan Parishad", "Lok Sewa Prabandhan Vibhag", "Sushasan Sansthan"],
    answer: 0,
    explanation: "MP created the Anand Vibhag in 2016, with the Rajya Anand Sansthan as its implementing body, to promote well-being through 'Anandam' and volunteer programmes. Jan Abhiyan Parishad is a separate body that works with voluntary organisations."
  },
  {
    id: 31,
    question: "A district welfare officer is listing PVTG habitations in MP for PM-JANMAN surveys. Which community should NOT be on her list?",
    options: ["Baiga", "Sahariya", "Bharia", "Bhil"],
    answer: 3,
    explanation: "MP has three PVTGs: the Baiga, the Bharia and the Sahariya. The Bhil are the state's most populous tribe but are not a PVTG. PVTGs are marked by pre-agricultural technology, low literacy, and stagnant or declining populations."
  },
  {
    id: 32,
    question: "The Bharia PVTG of Madhya Pradesh is chiefly concentrated in which area?",
    options: ["Patalkot valley of Chhindwara district", "Baiga Chak of Dindori district", "Sheopur–Shivpuri belt", "Jhabua–Alirajpur hills"],
    answer: 0,
    explanation: "The Bharia of Patalkot, a deep horseshoe-shaped valley in Tamia block of Chhindwara, are a PVTG known for their knowledge of herbal medicine. Baiga Chak (Dindori) is the Baiga homeland, and the Sahariya live mainly in the Gwalior–Chambal region."
  },
  {
    id: 33,
    question: "Under Madhya Pradesh's Aahar Anudan Yojana, monthly cash assistance for nutrition is given to which group?",
    options: ["All BPL households in Scheduled Areas", "Women heads of Baiga, Bharia and Sahariya families", "Pregnant women in urban slums", "Tribal students living in hostels"],
    answer: 1,
    explanation: "Aahar Anudan Yojana, started in 2017, transfers a fixed monthly amount directly into the bank accounts of women heads of PVTG families (Baiga, Bharia and Sahariya) to fight malnutrition. Paying the woman of the household is intended to make sure the money is spent on food and nutrition."
  },
  {
    id: 34,
    question: "PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan), launched on 15 November 2023, is aimed at which group?",
    options: ["Denotified and nomadic tribes", "All Scheduled Tribes in Fifth Schedule areas", "The 75 PVTGs living in 18 states and one Union Territory", "Tribal entrepreneurs registered with TRIFED"],
    answer: 2,
    explanation: "PM-JANMAN provides PVTG habitations with housing, roads, piped water, electricity, health, education and livelihoods through several ministries. India has 75 PVTGs, including MP's Baiga, Bharia and Sahariya. It was launched on Janjatiya Gaurav Divas, Birsa Munda's birth anniversary."
  },
  {
    id: 35,
    question: "Bhagoria, the festive market held in the week before Holi, is associated with which community and region?",
    options: ["Gonds of Mandla, during Navratri", "Bhils and Bhilalas of Jhabua–Alirajpur, before Holi", "Baigas of Dindori, after the kodo harvest", "Korkus of Betul, at the start of the monsoon"],
    answer: 1,
    explanation: "Bhagoria haats are held in the Bhil belt of Jhabua, Alirajpur, Dhar, Barwani and Khargone in the week before Holi. There is music on the mandal (drum) and flute, and the festival is popularly linked with young people choosing partners."
  },
  {
    id: 36,
    question: "The ritual Pithora wall painting, made to fulfil a vow to the deity Pithora, belongs to which tribal tradition of western Madhya Pradesh?",
    options: ["Gond", "Baiga", "Bhil and Bhilala (Rathwa)", "Kol"],
    answer: 2,
    explanation: "Pithora paintings of horses and riders, painted on house walls by a lakhindra (painter) under a badwa (priest), are a Bhil, Bhilala and Rathwa tradition of the Jhabua–Alirajpur region and neighbouring Gujarat. Gond art is a separate, dot-and-line tradition of eastern MP."
  },
  {
    id: 37,
    question: "Jangarh Singh Shyam, the pioneer of modern Gond painting, came from which village?",
    options: ["Patangarh, Dindori", "Tamia, Chhindwara", "Bagh, Dhar", "Maheshwar, Khargone"],
    answer: 0,
    explanation: "Jangarh Singh Shyam of Patangarh in Dindori district was brought to Bharat Bhavan, Bhopal, by J. Swaminathan in the early 1980s. He started the 'Jangarh Kalam' style of Gond painting on paper and canvas, and Patangarh is now known for Gond artists."
  },
  {
    id: 38,
    question: "The Rai dance, performed by Bedia women to the beat of the mridang, belongs to which cultural region of Madhya Pradesh?",
    options: ["Malwa", "Nimar", "Bundelkhand", "Baghelkhand"],
    answer: 2,
    explanation: "Rai is a lively Bundelkhand folk dance in which a Bedni dancer performs to mridang, nagadia and other instruments. Other Bundeli forms include Badhai and the Alha ballad, while Matki and Gangaur dances belong to Malwa and Nimar."
  },
  {
    id: 39,
    question: "Under the Fifth Schedule of the Constitution, who has the power to declare an area a 'Scheduled Area'?",
    options: ["Governor of the state", "President of India", "Parliament, by law", "National Commission for Scheduled Tribes"],
    answer: 1,
    explanation: "Paragraph 6 of the Fifth Schedule lets the President declare, by order, any area to be a Scheduled Area after consulting the Governor. The Governor reports to the President on the administration of these areas and can modify how laws apply to them."
  },
  {
    id: 40,
    question: "The Indira Gandhi National Tribal University, a central university established by an Act of Parliament in 2007, is located at which place?",
    options: ["Amarkantak", "Jhabua", "Mandla", "Shahdol"],
    answer: 0,
    explanation: "IGNTU is at Amarkantak in Anuppur district, the source of the Narmada. It was set up to promote higher education and research on tribal art, culture, traditions and livelihoods."
  },
  {
    id: 41,
    question: "Justice Surya Kant took oath as the 53rd Chief Justice of India on 24 November 2025. He is the first CJI from which state?",
    options: ["Punjab", "Haryana", "Himachal Pradesh", "Rajasthan"],
    answer: 1,
    explanation: "Justice Surya Kant, from Hisar in Haryana, was sworn in by President Droupadi Murmu on 24 November 2025, succeeding Justice B.R. Gavai. He became the first Chief Justice from Haryana and is due to serve until February 2027."
  },
  {
    id: 42,
    question: "The Union government brought four Labour Codes into force on 21 November 2025, replacing 29 central labour laws. Which of the following is NOT one of these codes?",
    options: ["Code on Wages, 2019", "Industrial Relations Code, 2020", "Code on Social Security, 2020", "Code on Minimum Pension, 2021"],
    answer: 3,
    explanation: "The four codes are the Code on Wages (2019), the Industrial Relations Code (2020), the Code on Social Security (2020) and the Occupational Safety, Health and Working Conditions Code (2020). They took effect from 21 November 2025. There is no 'Code on Minimum Pension'."
  },
  {
    id: 43,
    question: "Which feature was introduced for the first time in the House-listing phase of Census 2027, which began in April 2026?",
    options: ["Enumeration of Scheduled Castes", "Self-enumeration by households through an online portal before the enumerator's visit", "Use of printed schedules in all scheduled languages", "Biometric capture of every resident"],
    answer: 1,
    explanation: "Census 2027 is India's first digital census. Its House-listing and Housing Census phase began on 1 April 2026, and households could self-enumerate online during a 15-day window before the enumerator came. In MP, self-enumeration ran from 16–30 April 2026 and house-listing from 1–30 May 2026."
  },
  {
    id: 44,
    question: "Who presented Madhya Pradesh's budget for 2026-27, an outlay of about ₹4.38 lakh crore with no new taxes, in the Assembly in February 2026?",
    options: ["Mohan Yadav", "Rajendra Shukla", "Jagdish Devda", "Kailash Vijayvargiya"],
    answer: 2,
    explanation: "Deputy Chief Minister and Finance Minister Jagdish Devda presented the 2026-27 budget of about ₹4.38 lakh crore in February 2026. It had no new taxes and large allocations for women, farmers, youth and the poor. Rajendra Shukla is the other Deputy CM."
  },
  {
    id: 45,
    question: "The Madhya Pradesh government is observing the year 2026 under which theme?",
    options: ["Nari Shakti Varsh", "Krishak (Kisan) Kalyan Varsh", "Udyog evam Rojgar Varsh", "Janjatiya Gaurav Varsh"],
    answer: 1,
    explanation: "CM Mohan Yadav declared 2026 as Krishak (Kisan) Kalyan Varsh, the year of farmer welfare, and formally launched it in Bhopal in January 2026, with 16 departments coordinating the programmes. The year 2025 had been observed as Udyog evam Rojgar Varsh (Year of Industry and Employment)."
  },
  {
    id: 46,
    question: "In October 2026 cheetahs were released into which protected area, making it the third cheetah habitat in Madhya Pradesh after Kuno and Gandhi Sagar?",
    options: ["Madhav Tiger Reserve", "Ratapani Tiger Reserve", "Sanjay-Dubri Tiger Reserve", "Veerangana Durgavati Tiger Reserve (Nauradehi)"],
    answer: 3,
    explanation: "On 7 October 2026 CM Mohan Yadav released two cheetahs moved from Kuno into the Veerangana Durgavati Tiger Reserve (Nauradehi), which spreads over Sagar, Damoh and Narsinghpur districts. This made it the state's third cheetah site, after Kuno (2022) and Gandhi Sagar (2025)."
  },
  {
    id: 47,
    question: "India won its first ICC Women's ODI World Cup on 2 November 2025 at Navi Mumbai by defeating which team in the final?",
    options: ["Australia", "England", "South Africa", "New Zealand"],
    answer: 2,
    explanation: "Harmanpreet Kaur's India beat South Africa in the final at DY Patil Stadium, Navi Mumbai, on 2 November 2025 to win their first Women's World Cup. They had beaten defending champions Australia in the semi-final."
  },
  {
    id: 48,
    question: "At COP30 in Belém, Brazil (November 2025), it was decided that COP31 in November 2026 would be held where?",
    options: ["Antalya, Türkiye", "Adelaide, Australia", "Baku, Azerbaijan", "Bonn, Germany"],
    answer: 0,
    explanation: "Under a compromise reached at COP30 in November 2025, COP31 is hosted at Antalya, Türkiye, while Australia leads the negotiations and the Pacific islands host the pre-COP. COP30's main decision was called the 'Global Mutirão'. Baku hosted COP29 in 2024."
  },
  {
    id: 49,
    question: "Section 105 of the BNSS, 2023 requires search and seizure to be recorded by audio-video electronic means. Which government app was developed so police can capture and upload such recordings securely?",
    options: ["e-Sakshya", "CCTNS", "ICJS", "e-Courts"],
    answer: 0,
    explanation: "e-Sakshya was introduced with the new criminal laws from 1 July 2024. It lets officers record scene, search and seizure videos and photos, geo-tag and hash them, and upload them to a secure cloud to preserve the chain of custody. CCTNS is the police records network, and ICJS links police, courts, prisons and forensic labs."
  },
  {
    id: 50,
    question: "The Crime and Criminal Tracking Network & Systems (CCTNS), which links police stations across India on a common platform, is implemented by which agency?",
    options: ["National Informatics Centre", "National Crime Records Bureau", "Bureau of Police Research and Development", "CERT-In"],
    answer: 1,
    explanation: "CCTNS is a Mission Mode Project run by NCRB under the Ministry of Home Affairs. It digitises FIRs, investigations and charge-sheets and is the backbone of the Inter-operable Criminal Justice System (ICJS). BPR&D handles police research and training, and CERT-In handles cyber-security incidents."
  },
  {
    id: 51,
    question: "The first police crime laboratory was set up in 1910 in the attic of the Lyon police headquarters by which pioneer?",
    options: ["Hans Gross", "Alphonse Bertillon", "Edmond Locard", "Calvin Goddard"],
    answer: 2,
    explanation: "Edmond Locard founded the Lyon laboratory in 1910 and stated the exchange principle: 'every contact leaves a trace'. Hans Gross wrote the first criminalistics handbook (1893), Bertillon devised anthropometry, and Goddard was a pioneer of firearms comparison."
  },
  {
    id: 52,
    question: "A hair recovered from a burglary scene has a continuous, ladder-like (uniserial) medulla with a medullary index of 0.6. What is it most likely to be?",
    options: ["Human scalp hair", "Animal hair", "Synthetic fibre", "Human pubic hair"],
    answer: 1,
    explanation: "Medullary index is medulla diameter divided by shaft diameter. Human hairs usually have an index below about 1/3, with an absent or fragmentary medulla. Most animal hairs have an index of 0.5 or more and a continuous, often patterned medulla such as the ladder type seen in rabbit hair. Synthetic fibres have no medulla or cuticle."
  },
  {
    id: 53,
    question: "Only a naturally shed head hair with a club-shaped root and no tissue tag is recovered from a victim's hand. Which DNA analysis is most likely to succeed?",
    options: ["Y-STR typing of the root", "Mitochondrial DNA sequencing of the shaft", "Autosomal STR typing of the root", "ABO typing by absorption–elution"],
    answer: 1,
    explanation: "A club root shows a telogen (resting) hair that has lost its nucleated root sheath, so nuclear STR typing usually fails. The keratinised shaft keeps many copies of mtDNA, which is why mtDNA sequencing of the HV1/HV2 regions is the method of choice. Anagen hairs with a sheath can give full STR profiles."
  },
  {
    id: 54,
    question: "For the diatom test to support ante-mortem drowning, which sample is preferred because diatoms can reach it only through a beating circulation?",
    options: ["Lung tissue", "Femoral bone marrow", "Stomach contents", "Skin of the hands"],
    answer: 1,
    explanation: "In ante-mortem drowning, diatoms in the inhaled water cross the alveolar wall and are carried by the circulation to distant organs such as bone marrow, kidney and brain. Lungs and stomach can take in diatoms passively after death, so finding them there is weak evidence. Diatoms are compared with a water sample from the suspected site."
  },
  {
    id: 55,
    question: "Which insect family is usually the first to colonise a fresh corpse, often within minutes to hours of death?",
    options: ["Dermestidae (skin beetles)", "Calliphoridae (blowflies)", "Silphidae (carrion beetles)", "Piophilidae (cheese skippers)"],
    answer: 1,
    explanation: "Blowflies such as Chrysomya and Lucilia are attracted to fresh remains and lay eggs in natural openings and wounds. Aging their larvae gives the minimum post-mortem interval. Dermestid beetles and piophilids arrive at later, drier stages of decomposition."
  },
  {
    id: 56,
    question: "Blowfly larvae from a body need 120 accumulated degree-days (base temperature 10 °C) to reach the stage collected. If the mean ambient temperature was a steady 25 °C, what is the minimum PMI?",
    options: ["4.8 days", "6 days", "8 days", "12 days"],
    answer: 2,
    explanation: "Degree-days accumulated per day = mean temperature − base temperature = 25 − 10 = 15. Days needed = 120 ÷ 15 = 8 days. Using 25 instead of 15 gives the wrong figure of 4.8 days. This is a minimum PMI, because egg-laying may have been delayed after death."
  },
  {
    id: 57,
    question: "Linking a suspect's shoes to a scene by comparing the pollen and spores recovered from them belongs to which discipline?",
    options: ["Dendrochronology", "Phycology", "Mycology", "Forensic palynology"],
    answer: 3,
    explanation: "Forensic palynology studies pollen and spores, which are produced in huge numbers, resist decay and often have locally distinctive mixtures. Phycology is the study of algae, which includes diatoms, and dendrochronology dates wood using tree rings."
  },
  {
    id: 58,
    question: "Forest officials seize meat suspected to be from a Schedule I deer under the Wild Life (Protection) Act. What is the standard molecular approach to identify the species?",
    options: ["STR profiling with human multiplex kits", "Sequencing of mitochondrial cytochrome b or COI genes", "Y-chromosome haplotyping", "HLA typing"],
    answer: 1,
    explanation: "Mitochondrial genes such as cytochrome b and COI vary between species but very little within a species. The sequence is compared against reference databases (GenBank, BOLD) to identify the species. Human STR kits are designed for human-specific primers, so they cannot do this."
  },
  {
    id: 59,
    question: "An elliptical bloodstain on a floor measures 5 mm wide and 10 mm long. What is its approximate angle of impact?",
    options: ["30°", "45°", "60°", "90°"],
    answer: 0,
    explanation: "Angle of impact = sin⁻¹(width/length) = sin⁻¹(5/10) = sin⁻¹(0.5) = 30°. A drop striking at 90° makes a near-circular stain, and the stain becomes more elongated as the angle gets smaller."
  },
  {
    id: 60,
    question: "According to Nysten's rule, rigor mortis in voluntary muscles first appears in which part of the body?",
    options: ["Lower limbs", "Fingers and toes", "Trunk", "Eyelids, then face and jaw"],
    answer: 3,
    explanation: "Rigor first develops in the myocardium. Among voluntary muscles it appears in the eyelids and then moves through the face, lower jaw, neck, trunk, upper limbs and lower limbs, with the small muscles of the fingers and toes last. It passes off in the same order."
  },
  {
    id: 61,
    question: "Gustafson's method of estimating age in adults is based on which features?",
    options: ["Bone mineral density", "Epiphyseal fusion", "Closure of cranial sutures", "Regressive dental changes such as attrition, secondary dentine and root transparency"],
    answer: 3,
    explanation: "Gustafson (1950) scored six age-related changes in a tooth section: attrition, periodontosis, secondary dentine, cementum apposition, root resorption and root transparency. Root transparency is the most reliable of these. Epiphyseal fusion is useful mainly up to about 25 years."
  },
  {
    id: 62,
    question: "A skeletal pelvis shows a subpubic angle of about 100°, a wide greater sciatic notch and a preauricular sulcus. What is the most likely inference?",
    options: ["Adult male", "Adult female", "Sub-adult of indeterminate sex", "Non-human primate"],
    answer: 1,
    explanation: "A subpubic angle above 90° (often U-shaped), a wide greater sciatic notch and a well-marked preauricular sulcus are typical of the female pelvis, which is adapted for childbirth. In males the subpubic angle is usually 50–70° (V-shaped). The pelvis is the most reliable bone for sexing an adult skeleton."
  },
  {
    id: 63,
    question: "Regression formulae such as those of Karl Pearson and Trotter–Gleser give the most reliable estimate of stature from which bone?",
    options: ["Clavicle", "Femur", "Scapula", "Sternum"],
    answer: 1,
    explanation: "Stature correlates most closely with the lengths of the lower-limb long bones, especially the femur and tibia. Formulae are population- and sex-specific, so Indian formulae should be used for Indian remains where they exist."
  },
  {
    id: 64,
    question: "Human scalp hair typically shows which cuticular scale pattern?",
    options: ["Coronal", "Spinous", "Imbricate", "Petal"],
    answer: 2,
    explanation: "Human hair has flattened, overlapping imbricate scales with smooth margins. Coronal (crown-like) scales are seen in fine rodent and bat hairs, and spinous or petal scales in some carnivores such as cats and minks. Scale casts or SEM help study the pattern."
  },
  {
    id: 65,
    question: "Under the microscope a natural fibre appears as a flattened, twisted ribbon with periodic convolutions and a central lumen. What is the fibre?",
    options: ["Wool", "Silk", "Cotton", "Jute"],
    answer: 2,
    explanation: "Cotton seed hairs collapse on drying into twisted ribbons with convolutions, a key identifying feature. Wool shows scales like animal hair, silk is a smooth filament with no lumen, and jute is a bast fibre with cross-markings."
  },
  {
    id: 66,
    question: "Who is regarded as the father of forensic toxicology for his 1813 treatise on poisons?",
    options: ["Paul L. Kirk", "Francis Galton", "Karl Landsteiner", "Mathieu Orfila"],
    answer: 3,
    explanation: "Mathieu Orfila, a Spanish-born physician in Paris, published 'Traité des poisons' in 1813, which systematically described how to detect poisons. He also showed in the Lafarge trial (1840) how the Marsh test for arsenic should be properly applied."
  },
  {
    id: 67,
    question: "The world's first fingerprint bureau was set up in 1897, with Azizul Haque and Hem Chandra Bose working under Edward Henry. Where was it set up?",
    options: ["Scotland Yard, London", "Calcutta", "Bombay", "Shimla"],
    answer: 1,
    explanation: "The Anthropometric Bureau at Writers' Building, Calcutta became the world's first fingerprint bureau in 1897. The Henry classification system, developed largely by Haque and Bose, was adopted by Scotland Yard in 1901. India's Central Finger Print Bureau now works under NCRB."
  },
  {
    id: 68,
    question: "A body found indoors has a rectal temperature of 89.4 °F. Using the rule of thumb that the body cools by about 1.5 °F per hour from 98.4 °F, what is the approximate time since death?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: 3,
    explanation: "Time since death ≈ (98.4 − 89.4) ÷ 1.5 = 9 ÷ 1.5 = 6 hours. This simple formula ignores the initial temperature plateau, body build, clothing and surrounding temperature, so it gives only a rough estimate. Henssge's nomogram is more accurate."
  },
  {
    id: 69,
    question: "Shahtoosh shawls, whose trade is banned in India, are identified microscopically by the fine underhair of which animal?",
    options: ["Pashmina goat", "Yak", "Himalayan tahr", "Tibetan antelope (chiru)"],
    answer: 3,
    explanation: "Shahtoosh is woven from the underwool of the Tibetan antelope (Pantholops hodgsonii), a Schedule I species, which is killed to obtain it. Forensic labs tell it apart from legal pashmina (Changthangi goat) by hair diameter, scale pattern, and the guard hairs left in the shawl."
  },
  {
    id: 70,
    question: "A burglar leaves glove fibres on a window frame and carries away glass fragments on his clothing. Which principle does this two-way transfer illustrate?",
    options: ["Locard's exchange principle", "Principle of individuality", "Principle of comparison", "Law of progressive change"],
    answer: 0,
    explanation: "Locard's principle says that when two objects come into contact, material is transferred both ways. The fibres left behind and the glass picked up link the suspect to the scene. The law of progressive change describes how evidence and scenes change over time."
  },
  {
    id: 71,
    question: "In 2017 the FBI expanded the CODIS core STR loci from 13 to how many?",
    options: ["15", "18", "20", "24"],
    answer: 2,
    explanation: "From 1 January 2017 CODIS required 20 core loci: the original 13 plus D1S1656, D2S441, D2S1338, D10S1248, D12S391, D19S433 and D22S1045. The expansion improved discrimination, compatibility with European (ESS) loci, and missing-person and kinship work."
  },
  {
    id: 72,
    question: "A male suspect's reference sample, amplified with standard amelogenin primers, gives a single peak at the X position (106 bp) while all autosomal loci give good results. What is the most likely explanation?",
    options: ["Female DNA contamination of the sample", "Deletion of the AMELY region in this male", "Failure of the allelic ladder", "Stutter from the X peak"],
    answer: 1,
    explanation: "Amelogenin primers amplify a 106 bp product from AMELX and a 112 bp product from AMELY, which has a 6 bp insertion. Some males, more often in South Asian populations, carry deletions that remove AMELY and so look female. Y-STRs or extra Y markers such as DYS391 confirm male sex."
  },
  {
    id: 73,
    question: "At an STR locus, alleles 12 and 15 have frequencies of 0.1 and 0.2 in the relevant population. Under Hardy–Weinberg equilibrium, what is the expected frequency of the 12,15 genotype?",
    options: ["0.02", "0.03", "0.04", "0.30"],
    answer: 2,
    explanation: "A heterozygote's frequency is 2pq = 2 × 0.1 × 0.2 = 0.04. Forgetting the factor of 2 gives 0.02. Homozygote frequency would be p², usually adjusted with a θ (FST) correction for population substructure."
  },
  {
    id: 74,
    question: "A profile matches a suspect at three independent loci whose genotype frequencies are 0.1, 0.05 and 0.02. Using the product rule, what is the random match probability?",
    options: ["1 in 17", "1 in 1,000", "1 in 100,000", "1 in 10,000"],
    answer: 3,
    explanation: "RMP = 0.1 × 0.05 × 0.02 = 0.0001, which is 1 in 10,000. The product rule assumes the loci are inherited independently (linkage equilibrium), which is why core loci are chosen on different chromosomes or far apart on the same one."
  },
  {
    id: 75,
    question: "Stutter peaks in STR electropherograms usually sit one repeat unit shorter than the true allele. What causes them?",
    options: ["Slipped-strand mispairing during extension", "Incomplete addition of non-template adenine", "Dye blobs from unbound fluorophore", "Spectral pull-up between dye channels"],
    answer: 0,
    explanation: "During extension, the polymerase and the newly made strand can slip and loop out one repeat, giving a product one repeat shorter (n−1, or −4 bp for a tetranucleotide). Back stutter is usually 5–15% of the parent peak, and labs set locus-specific stutter filters for it."
  },
  {
    id: 76,
    question: "An STR peak appears split into two peaks 1 bp apart. Which artefact is most likely responsible?",
    options: ["Stutter", "Pull-up", "Allele drop-out", "Incomplete non-template adenylation"],
    answer: 3,
    explanation: "Taq polymerase adds an extra adenine to the 3′ end of most products (the +A form). If this addition is incomplete, for example because there is too much template or the final extension is too short, both −A and +A forms appear 1 bp apart. A final 60 °C extension step encourages complete adenylation."
  },
  {
    id: 77,
    question: "Which DNA extraction method gives single-stranded DNA, which is suitable for PCR but not for RFLP analysis?",
    options: ["Organic phenol–chloroform extraction", "Silica spin-column extraction", "Chelex-100 extraction", "Magnetic-bead extraction with wash steps"],
    answer: 2,
    explanation: "In the Chelex method, samples are boiled in a chelating resin suspension. The resin binds Mg²⁺ and protects DNA from nucleases, while the boiling denatures the DNA into single strands. RFLP needs double-stranded, high-molecular-weight DNA for restriction digestion. Chelex is quick and done in a single tube."
  },
  {
    id: 78,
    question: "In differential extraction of a vaginal swab, sperm heads resist the first lysis step. Lysing them in the second step requires adding what?",
    options: ["Proteinase K alone", "Lysozyme", "Dithiothreitol together with proteinase K", "Chelex alone"],
    answer: 2,
    explanation: "Sperm head nuclei are packed with protamines held together by many disulfide bonds. The first, mild lysis with SDS and proteinase K releases the female epithelial DNA. The sperm pellet is then lysed with DTT, which reduces the disulfide bonds, plus proteinase K, giving a male-enriched fraction."
  },
  {
    id: 79,
    question: "In a real-time PCR DNA quantification kit, what does the internal positive control (IPC) detect?",
    options: ["Total human DNA quantity", "Quantity of male DNA", "Degree of DNA degradation", "Presence of PCR inhibitors"],
    answer: 3,
    explanation: "The IPC is a synthetic template added to every reaction at a known amount. If its Ct value is delayed or it fails, inhibitors such as haem, humic acid or indigo dye are present. Degradation is judged by comparing a short and a long autosomal target, and male DNA by a Y target."
  },
  {
    id: 80,
    question: "The hypervariable segments HV1 and HV2 that are sequenced in forensic mtDNA analysis lie in which part of the mitochondrial genome?",
    options: ["D-loop (control region)", "Cytochrome b gene", "12S rRNA gene", "ND5 gene"],
    answer: 0,
    explanation: "The roughly 1.1 kb control region (D-loop) is non-coding and changes quickly, so it varies most between individuals. HV1 (about 16024–16365) and HV2 (about 73–340) are routinely sequenced and compared with the revised Cambridge Reference Sequence (rCRS)."
  },
  {
    id: 81,
    question: "A vaginal swab from a sexual assault holds a large excess of female DNA and only a few male cells, and the suspect is known to be azoospermic. Which typing system gives the best chance of a male profile?",
    options: ["Autosomal STR typing", "Amelogenin typing only", "Y-STR typing", "Whole mitochondrial genome sequencing"],
    answer: 2,
    explanation: "Y-STR primers amplify only male DNA, so a large excess of female DNA does not mask the male contributor. With no sperm present, differential extraction gives no benefit. Y-STR haplotypes are shared by paternal relatives, so the strength of a match is expressed using haplotype database counts."
  },
  {
    id: 82,
    question: "In a paternity case, the child's obligate paternal allele has a frequency of 0.05, and the alleged father is heterozygous for it. What is the paternity index at this locus?",
    options: ["5", "10", "20", "0.1"],
    answer: 1,
    explanation: "PI = X/Y, where X is the chance that a heterozygous father passes the allele (0.5) and Y is the chance that a random man passes it, which equals its frequency (0.05). PI = 0.5/0.05 = 10. If the father were homozygous, X would be 1 and PI would be 20."
  },
  {
    id: 83,
    question: "Three loci give paternity indices of 10, 20 and 5. Assuming a neutral prior probability of 0.5, what is the probability of paternity?",
    options: ["90.9%", "99.0%", "99.5%", "99.9%"],
    answer: 3,
    explanation: "Combined PI = 10 × 20 × 5 = 1000. With a prior of 0.5, W = CPI/(CPI + 1) = 1000/1001 ≈ 0.999, or 99.9%. In real casework 15 or more loci are used, and combined PIs are far larger."
  },
  {
    id: 84,
    question: "A single-source crime-stain profile matches the suspect, and the random match probability is 1 in 10⁹. What is the likelihood ratio for the hypotheses 'the suspect is the source' versus 'an unrelated random person is the source'?",
    options: ["One-billionth (10⁻⁹)", "1", "0.5", "One billion (10⁹)"],
    answer: 3,
    explanation: "LR = P(E|Hp)/P(E|Hd). If the suspect is the source, a match is certain (probability 1). If an unrelated person is the source, the chance of a match equals the RMP (10⁻⁹). LR = 1/10⁻⁹ = 10⁹, which strongly supports Hp."
  },
  {
    id: 85,
    question: "Typing low-template DNA with extra PCR cycles (for example 34 instead of 28) is most associated with which problems?",
    options: ["Allele drop-out and drop-in", "Increased stutter only at large loci", "Spectral pull-up", "Loss of the amelogenin locus"],
    answer: 0,
    explanation: "With only a few template copies, random sampling (stochastic effects) causes one allele to amplify more than the other, so alleles can be lost (drop-out) and contaminant alleles can appear (drop-in). Heterozygote imbalance and higher stutter are also seen. Replicate amplifications and probabilistic genotyping help interpret such profiles."
  },
  {
    id: 86,
    question: "In capillary electrophoresis of STR products, the internal lane size standard is commonly labelled with which dye?",
    options: ["FAM (blue)", "VIC (green)", "NED (yellow)", "LIZ (orange)"],
    answer: 3,
    explanation: "Kits label STR loci in blue, green, yellow and red dye channels, and add an internal size standard such as GeneScan 500 or 600 LIZ in the orange channel to every injection. Fragment sizes are calculated against this standard and then converted to allele calls using the allelic ladder."
  },
  {
    id: 87,
    question: "The first conviction based on DNA profiling, of Colin Pitchfork in England (1988), relied on which technique?",
    options: ["STR multiplex typing", "RFLP analysis of VNTR loci with DNA probes", "mtDNA sequencing", "SNP microarray typing"],
    answer: 1,
    explanation: "Alec Jeffreys's 'DNA fingerprinting' used restriction digestion, Southern blotting and multi-locus and single-locus minisatellite (VNTR) probes. In the Enderby case it first cleared an innocent suspect and then identified Pitchfork. STR typing replaced RFLP in the 1990s because it needs much less DNA."
  },
  {
    id: 88,
    question: "Who is known as the father of DNA fingerprinting in India for developing the technology at CCMB, Hyderabad, in the late 1980s?",
    options: ["P.M. Bhargava", "Lalji Singh", "J. Gowrishankar", "V.K. Kashyap"],
    answer: 1,
    explanation: "Dr Lalji Singh developed an indigenous DNA fingerprinting probe from Bkm sequences at CCMB, and the technique was first applied to Indian paternity and criminal cases in the late 1980s. He later helped found CDFD, Hyderabad. P.M. Bhargava was CCMB's founder-director."
  },
  {
    id: 89,
    question: "How do miniSTR assays improve typing of highly degraded DNA?",
    options: ["By moving primers closer to the repeat so the amplicons are shorter", "By increasing the number of PCR cycles", "By using longer primers for greater specificity", "By replacing PCR with RFLP probes"],
    answer: 0,
    explanation: "Degraded DNA is broken into short fragments, so long amplicons fail first. MiniSTRs redesign primers to bind close to the repeat region, often giving products under 150 bp. This improves results from bones, burnt remains and old stains, and the alleles stay compatible with database designations."
  },
  {
    id: 90,
    question: "In a standard three-step PCR cycle for STR amplification, primer extension is typically carried out at what temperature?",
    options: ["37 °C", "55 °C", "72 °C", "94 °C"],
    answer: 2,
    explanation: "Each cycle denatures at about 94–95 °C, anneals primers at about 55–60 °C, and extends at 72 °C, the optimum for Taq polymerase from Thermus aquaticus. 37 °C is the optimum for most mesophilic enzymes and is too low for thermostable Taq to extend well."
  },
  {
    id: 91,
    question: "A suspected bloodstain is treated with pyridine, glucose and sodium hydroxide and gently warmed. Salmon-pink feathery crystals appear under the microscope. Which test is this?",
    options: ["Teichmann test", "Benzidine test", "Takayama test", "Wagenaar test"],
    answer: 2,
    explanation: "The Takayama (haemochromogen) test forms pink crystals of pyridine ferroprotoporphyrin. Like the Teichmann haemin test, it confirms the presence of blood (haem). Benzidine is a presumptive peroxidase-type colour test that has been dropped because it is carcinogenic."
  },
  {
    id: 92,
    question: "Brown, rhombic crystals are formed by heating dried blood with glacial acetic acid and a halide salt. Which test is this?",
    options: ["Teichmann test", "Takayama test", "Phenolphthalin test", "Ouchterlony test"],
    answer: 0,
    explanation: "In the Teichmann test, haem reacts with acetic acid and chloride (or bromide or iodide) on heating to form haemin (ferriprotoporphyrin chloride) crystals. It confirms blood but becomes less sensitive in old or heat-damaged stains. Ouchterlony is an immunodiffusion test used for species of origin."
  },
  {
    id: 93,
    question: "The precipitin test, which determines whether a bloodstain is of human origin using anti-human serum, was introduced by whom?",
    options: ["Karl Landsteiner", "Leone Lattes", "Paul Uhlenhuth", "Joseph Kastle"],
    answer: 2,
    explanation: "Paul Uhlenhuth showed in 1901 that serum from rabbits immunised with human serum precipitates human proteins specifically, which allowed species of origin to be determined. Landsteiner discovered the ABO groups, and Lattes devised the crust test for grouping dried stains."
  },
  {
    id: 94,
    question: "In an Ouchterlony double-diffusion plate, the precipitin lines from two adjacent antigen wells join smoothly into a continuous arc with no spur. What does this show?",
    options: ["Non-identity", "Partial identity", "No reaction", "Identity"],
    answer: 3,
    explanation: "A smooth fused arc (reaction of identity) means both wells contain the same antigenic determinants recognised by the antiserum. Crossing lines show non-identity, and a spur shows partial identity, where one antigen has extra epitopes. The method is used to confirm human or animal origin of stains."
  },
  {
    id: 95,
    question: "The Lattes crust test for ABO grouping of a dried bloodstain works by detecting what?",
    options: ["A and B antigens on red cells in the stain", "Anti-A and anti-B antibodies (isoagglutinins) in the stain", "The Rh(D) antigen", "The donor's secretor status"],
    answer: 1,
    explanation: "Lattes (1915) placed known A, B and O red cells on fragments of the stain and looked for agglutination caused by the stain's own isoagglutinins, a form of reverse grouping. Antibodies are fragile, so the method works only on fairly fresh stains. Antigens are detected by absorption–inhibition or absorption–elution."
  },
  {
    id: 96,
    question: "Which technique is the most sensitive for detecting ABO antigens on a few threads of an old, dried bloodstain?",
    options: ["Absorption–inhibition", "Absorption–elution", "Lattes crust test", "Direct slide agglutination"],
    answer: 1,
    explanation: "In absorption–elution, antibodies bound to stain antigens are washed, eluted by heat at about 56 °C, and detected with indicator cells. Because the result shows up as positive agglutination, very small amounts of antigen can be detected. Absorption–inhibition needs more material and measures a reduction in antibody titre."
  },
  {
    id: 97,
    question: "Whether a person secretes ABH antigens in saliva and semen is determined mainly by which gene?",
    options: ["FUT2 (Se) gene", "FUT1 (H) gene", "Lewis (FUT3) gene alone", "ABO gene alone"],
    answer: 0,
    explanation: "FUT2 encodes the secretor fucosyltransferase that makes H substance in secretory glands. About 80% of people are secretors with at least one active Se allele. FUT1 makes H antigen on red cells, and if both copies are inactive the person has the Bombay phenotype."
  },
  {
    id: 98,
    question: "In the Brentamine (acid phosphatase) spot test for seminal stains, what does a positive result look like?",
    options: ["Rapid purple colour with α-naphthyl phosphate and Fast Blue B", "Pink colour with phenolphthalein", "Blue colour with starch–iodine", "Green fluorescence under UV light"],
    answer: 0,
    explanation: "Seminal acid phosphatase, from the prostate, splits α-naphthyl phosphate, and the released naphthol couples with Brentamine Fast Blue B to give a purple azo dye within about 30 seconds. Vaginal fluid and some plant juices react slowly, so timing matters and the test stays presumptive."
  },
  {
    id: 99,
    question: "A stain on a bedsheet gives a strong acid phosphatase reaction, but no spermatozoa are found after repeated staining. The suspect is vasectomised. Which test would best confirm the presence of semen?",
    options: ["Christmas tree staining", "Barberio test", "Florence test", "Detection of PSA (p30)"],
    answer: 3,
    explanation: "Prostate-specific antigen (p30) comes from the prostate, so it is present in semen from azoospermic or vasectomised men. Immunochromatographic cards or ELISA can confirm it. The Barberio (spermine) and Florence (choline) crystal tests are only presumptive, and Christmas tree staining needs sperm to be present."
  },
  {
    id: 100,
    question: "The 'Christmas tree' stain used to find spermatozoa in smears from swabs uses which two dyes?",
    options: ["Haematoxylin and eosin", "Giemsa", "Crystal violet and safranin", "Nuclear fast red and picroindigocarmine"],
    answer: 3,
    explanation: "Nuclear fast red stains sperm heads red, with a paler acrosome, and picroindigocarmine stains the necks and tails green or blue-green, so sperm stand out among epithelial cells. Finding intact sperm with tails suggests the deposit was relatively recent."
  },
  {
    id: 101,
    question: "The Phadebas test used to screen suspected saliva stains detects which enzyme?",
    options: ["α-Amylase", "Acid phosphatase", "Urease", "Lactate dehydrogenase"],
    answer: 0,
    explanation: "The Phadebas reagent is a starch polymer bonded to a blue dye. Salivary α-amylase (AMY1) breaks it down and releases the soluble blue colour, which can be seen or measured. Amylase is also present at lower levels in other fluids, so the test is presumptive. RSID-Saliva is more specific for human salivary amylase."
  },
  {
    id: 102,
    question: "An extract of a yellowish stain turns orange-red with alkaline picric acid (Jaffe reaction). Which body fluid is indicated?",
    options: ["Saliva", "Urine", "Semen", "Faeces"],
    answer: 1,
    explanation: "Creatinine reacts with alkaline picrate to form an orange-red complex, and urine has high creatinine levels. Urea, detected with urease or DMAC, and Tamm–Horsfall protein are other urine markers. Sweat and blood contain much less creatinine."
  },
  {
    id: 103,
    question: "Which marker helps tell menstrual blood apart from circulating venous blood in a stain?",
    options: ["Haemoglobin A", "Albumin", "Fibrin degradation products (D-dimer)", "Glycophorin A"],
    answer: 2,
    explanation: "Menstrual blood undergoes fibrinolysis in the uterus, so it has high levels of fibrin degradation products such as D-dimer and stays largely unclotted. mRNA markers such as MMP7 and MMP11 are also used. Glycophorin A is a red-cell marker found in all blood."
  },
  {
    id: 104,
    question: "On what basis is foetal haemoglobin (HbF) detected to show that a stain came from a newborn?",
    options: ["HbF resists denaturation by alkali", "HbF is precipitated by acid", "HbF does not bind oxygen", "HbF lacks the haem group"],
    answer: 0,
    explanation: "HbF (α2γ2) resists alkali denaturation much better than adult HbA (α2β2), which is the basis of the Singer alkali test. Electrophoresis or immunoassay can also separate the two. This helps in cases of infanticide or concealment of birth."
  },
  {
    id: 105,
    question: "A floor scrubbed with household bleach is sprayed with luminol and gives a bright but short-lived, diffuse glow over the whole washed area. What is the most likely explanation?",
    options: ["A true positive for heavily diluted blood", "Degradation of the luminol reagent", "A positive reaction to DNA", "A false positive caused by hypochlorite, an oxidant"],
    answer: 3,
    explanation: "Luminol produces blue chemiluminescence when oxidised, and haem catalyses this reaction. Strong oxidants such as sodium hypochlorite can also oxidise luminol, giving a quick, uniform flash that fades fast. Blood gives a longer-lasting glow that follows the stain pattern. Waiting for the bleach to decay or using confirmatory tests resolves the question."
  },
  {
    id: 106,
    question: "In a sandwich ELISA for prostate-specific antigen, how is the antigen detected?",
    options: ["Two antigens bound to a single antibody", "Between a capture antibody on the plate and an enzyme-labelled detection antibody", "By competition between plate-bound antigen and labelled antigen", "By agglutination of red cells with complement"],
    answer: 1,
    explanation: "In a sandwich ELISA, PSA in the sample is captured by antibody fixed to the well and then bound by a second, enzyme-conjugated antibody against another epitope. A substrate such as TMB gives colour in proportion to the amount of antigen. Competitive formats are used for small molecules such as drugs."
  },
  {
    id: 107,
    question: "Hybridoma technology for producing monoclonal antibodies, now widely used in forensic immunoassays, was developed in 1975 by whom?",
    options: ["Landsteiner and Wiener", "Jerne and Burnet", "Köhler and Milstein", "Yalow and Berson"],
    answer: 2,
    explanation: "Georges Köhler and César Milstein fused antibody-producing B cells with myeloma cells to make immortal hybridomas that secrete one specific antibody. They shared the 1984 Nobel Prize with Niels Jerne. Yalow and Berson developed radioimmunoassay."
  },
  {
    id: 108,
    question: "In crossed-over (counter-current) immunoelectrophoresis for species identification, the antibody moves toward the cathode mainly because of what?",
    options: ["Its strong negative charge", "Electroendosmosis", "Gravity", "Capillary action"],
    answer: 1,
    explanation: "At pH about 8.6, most serum protein antigens are negatively charged and move to the anode. Immunoglobulins are nearly neutral and are carried toward the cathode by the electroendosmotic flow of the buffer. Antigen and antibody meet between the wells and form a precipitin line within minutes, much faster than simple double diffusion."
  },
  {
    id: 109,
    question: "A very concentrated bloodstain extract tests negative on a human haemoglobin immunochromatographic card but positive after dilution. Which phenomenon explains this?",
    options: ["High-dose hook (prozone) effect", "Cross-reactivity with ferret blood", "Interference from Lewis antigens", "Inhibition by humic acid"],
    answer: 0,
    explanation: "When there is a large excess of antigen, both the labelled and the capture antibodies become saturated separately, so no sandwich forms at the test line and the result looks falsely negative. Diluting the extract brings the antigen back into range. Ferret and higher-primate blood cause false positives, not negatives."
  },
  {
    id: 110,
    question: "The Rh blood group system, discovered by Landsteiner and Wiener in 1940, gets its name from the animal whose red cells were used to raise the antiserum. Which animal?",
    options: ["Rhesus macaque", "Rabbit", "Guinea pig", "Chimpanzee"],
    answer: 0,
    explanation: "Rabbits and guinea pigs were immunised with red cells of the rhesus monkey (Macaca mulatta). The antiserum agglutinated the red cells of about 85% of white people tested, who were called Rh-positive. The RhD antigen is the most immunogenic red-cell antigen after A and B."
  },
  {
    id: 111,
    question: "A drug extract has a molar absorptivity of 15,000 L mol⁻¹ cm⁻¹ at its λmax. In a 1 cm cuvette its absorbance is 0.45. What is its concentration?",
    options: ["0.00003 M", "0.0003 M", "0.000045 M", "6,750 M"],
    answer: 0,
    explanation: "Beer–Lambert law: A = εbc, so c = A/(εb) = 0.45/(15,000 × 1) = 3 × 10⁻⁵ mol/L (0.00003 M). Multiplying instead of dividing gives the impossible 6,750 M. The law holds best at low absorbance, roughly 0.1–1.0."
  },
  {
    id: 112,
    question: "On a TLC plate, a drug spot has moved 3.6 cm from the origin and the solvent front has moved 9.0 cm. What is the Rf value?",
    options: ["0.25", "0.40", "0.60", "2.5"],
    answer: 1,
    explanation: "Rf = distance moved by the spot ÷ distance moved by the solvent front = 3.6/9.0 = 0.40. Rf always lies between 0 and 1, so 2.5 (the inverted ratio) cannot be right. Rf values are compared with standards run on the same plate."
  },
  {
    id: 113,
    question: "A blood sample is centrifuged at 3,000 rpm in a rotor of radius 10 cm. Using RCF = 1.118 × 10⁻⁵ × r(cm) × (rpm)², what is the approximate relative centrifugal force?",
    options: ["About 100 × g", "About 300 × g", "About 1,000 × g", "About 10,000 × g"],
    answer: 2,
    explanation: "RCF = 1.118 × 10⁻⁵ × 10 × (3000)² = 1.118 × 10⁻⁵ × 10 × 9 × 10⁶ ≈ 1,006 × g. Protocols should state g rather than rpm, because the same rpm gives a different force in rotors of different radius."
  },
  {
    id: 114,
    question: "The Marsh test, made famous in the Lafarge trial of 1840, detects which poison by producing a silvery-black mirror?",
    options: ["Mercury", "Lead", "Cyanide", "Arsenic"],
    answer: 3,
    explanation: "In the Marsh test, zinc and acid generate hydrogen, which reduces arsenic compounds to arsine gas (AsH3). When heated, the arsine breaks down into a metallic arsenic mirror. The Reinsch test, with copper foil in HCl, is another classical test for arsenic. Modern labs use AAS or ICP-MS."
  },
  {
    id: 115,
    question: "A farmer is brought in with pinpoint pupils, excess salivation and frothing, and bradycardia, and his plasma cholinesterase is markedly low. Which class of poison is most likely?",
    options: ["Organochlorines", "Organophosphates", "Pyrethroids", "Paraquat"],
    answer: 1,
    explanation: "Organophosphates such as chlorpyrifos and monocrotophos irreversibly inhibit acetylcholinesterase. The resulting build-up of acetylcholine causes muscarinic signs (miosis, secretions, bradycardia) and nicotinic signs (fasciculations). Treatment is atropine plus an oxime such as pralidoxime, and low cholinesterase activity supports the diagnosis."
  },
  {
    id: 116,
    question: "In the Duquenois–Levine test, a violet colour that moves into the chloroform layer indicates which drug?",
    options: ["Cannabis", "Heroin", "Cocaine", "LSD"],
    answer: 0,
    explanation: "Duquenois reagent (vanillin and acetaldehyde in ethanol) followed by HCl gives a purple colour with cannabinoids. In the Levine modification, chloroform is added and the violet colour passes into the lower layer, which makes the test more specific. Confirmation is by TLC or GC-MS. Ganja, charas and hashish are controlled under the NDPS Act, 1985."
  },
  {
    id: 117,
    question: "Marquis reagent (formaldehyde in concentrated sulphuric acid) gives a deep purple-violet colour with which drugs?",
    options: ["Cocaine", "Cannabis", "Barbiturates", "Morphine and heroin"],
    answer: 3,
    explanation: "Opiates such as morphine, heroin and codeine turn Marquis reagent purple-violet, while amphetamines give orange-brown. Cocaine gives no significant colour with Marquis and is usually screened with cobalt thiocyanate. Colour tests are presumptive and need instrumental confirmation."
  },
  {
    id: 118,
    question: "A white powder turns cobalt thiocyanate reagent blue, and the colour behaves as expected in the Scott modification. Which drug is suspected?",
    options: ["Cocaine", "Amphetamine", "Morphine", "Diazepam"],
    answer: 0,
    explanation: "Cocaine forms a blue complex with cobalt(II) thiocyanate. In the Scott test, adding HCl clears the blue colour and chloroform extraction brings it back, which reduces false positives from substances such as lidocaine. GC-MS gives the confirmation."
  },
  {
    id: 119,
    question: "Electron ionisation (EI) spectra used for library matching in GC-MS are recorded at a standard electron energy of what?",
    options: ["7 eV", "20 eV", "70 eV", "700 eV"],
    answer: 2,
    explanation: "At 70 eV, fragmentation is reproducible across instruments, so unknown spectra can be searched against libraries such as NIST and SWGDRUG. EI is a 'hard' ionisation and the molecular ion may be weak. Chemical ionisation is softer and keeps more of the molecular ion."
  },
  {
    id: 120,
    question: "In reverse-phase HPLC with a C18 column and a water–methanol mobile phase, which analyte usually elutes first?",
    options: ["The most polar analyte", "The most non-polar analyte", "The analyte with the highest molecular weight", "All analytes elute together"],
    answer: 0,
    explanation: "In reverse phase, the stationary phase is non-polar (octadecylsilane) and the mobile phase is polar. Polar compounds interact weakly with C18 and elute first, while hydrophobic compounds are retained longer. Increasing the organic solvent shortens retention times."
  },
  {
    id: 121,
    question: "Two compound microscopes joined by an optical bridge, so that a questioned and a known hair or fibre can be viewed side by side in one split field, make up which instrument?",
    options: ["Stereo microscope", "Phase-contrast microscope", "Comparison microscope", "Polarising microscope"],
    answer: 2,
    explanation: "The comparison microscope shows both specimens at once at the same magnification and lighting. It is used for hairs, fibres, and toolmarks and bullet striations. The stereo microscope gives low-power 3-D views for searching evidence."
  },
  {
    id: 122,
    question: "Birefringence, a key property for identifying synthetic fibres, is measured with which instrument?",
    options: ["Polarised light microscope", "Phase-contrast microscope", "Dark-field microscope", "Fluorescence microscope"],
    answer: 0,
    explanation: "Birefringence is the difference between the refractive indices parallel and perpendicular to the fibre axis. It is measured with a polarised light microscope fitted with a compensator. Different polymers such as nylon, polyester and acrylic have characteristic values. Phase contrast improves contrast in transparent specimens but does not measure birefringence."
  },
  {
    id: 123,
    question: "Characteristic spheroidal particles containing lead, antimony and barium found on a suspect's hand swab are best identified with which technique?",
    options: ["UV-visible spectrophotometry", "Paper chromatography", "Polarised light microscopy", "SEM with energy-dispersive X-ray analysis"],
    answer: 3,
    explanation: "SEM-EDX shows both the shape of gunshot-residue particles (fused spheroids) and their elemental make-up (Pb–Sb–Ba), and is the accepted confirmatory method for primer residue. Lead-free ammunition produces different marker elements."
  },
  {
    id: 124,
    question: "Which electrophoretic technique separates proteins strictly by their isoelectric point?",
    options: ["SDS-PAGE", "Agarose gel electrophoresis", "Isoelectric focusing", "Capillary zone electrophoresis"],
    answer: 2,
    explanation: "In isoelectric focusing, ampholytes set up a pH gradient, and each protein migrates until it reaches the pH where its net charge is zero. It was once used to type polymorphic proteins such as PGM in stains. SDS-PAGE separates proteins by molecular mass."
  },
  {
    id: 125,
    question: "In an infrared spectrum, the region roughly between 1500 and 400 cm⁻¹, where the pattern of bands is unique to each compound, is called what?",
    options: ["Functional group region", "Fingerprint region", "Overtone region", "Far-UV region"],
    answer: 1,
    explanation: "The fingerprint region has complex bending and skeletal vibrations, so its pattern is characteristic of the whole molecule and is used to match spectra against libraries. The functional group region (about 4000–1500 cm⁻¹) shows bands such as O–H, N–H and C=O. FTIR-ATR is widely used for drugs, fibres and paints."
  },
  {
    id: 126,
    question: "In a mass spectrum, the most intense peak, whose height is set to 100% relative abundance, is called what?",
    options: ["Molecular ion peak", "Isotope peak", "Base peak", "Metastable peak"],
    answer: 2,
    explanation: "Every other peak is scaled against the base peak, which comes from the most stable or most abundant ion. It may or may not be the molecular ion, which gives the molecular mass. Isotope peaks such as M+1 and M+2 help deduce the elemental composition."
  },
  {
    id: 127,
    question: "A 70 kg man (Widmark factor r = 0.7) drinks 49 g of ethanol quickly on an empty stomach. Ignoring elimination, what is his theoretical peak blood alcohol concentration?",
    options: ["0.5 g/kg", "0.7 g/kg", "1.0 g/kg", "1.4 g/kg"],
    answer: 2,
    explanation: "Widmark: C = A/(W × r) = 49/(70 × 0.7) = 49/49 = 1.0 g/kg, which is roughly 100 mg per 100 mL of blood. Ethanol is eliminated at about 0.1–0.2 g/kg per hour, so the measured value will be lower. Women have a lower r value, about 0.6, and reach higher concentrations for the same dose."
  },
  {
    id: 128,
    question: "Which technique is the standard for quantifying ethanol in blood samples in forensic laboratories?",
    options: ["Thin-layer chromatography", "Atomic absorption spectroscopy", "Polarimetry", "Headspace gas chromatography with flame ionisation detection"],
    answer: 3,
    explanation: "In headspace GC-FID, only the vapour above the heated sample is injected, which protects the column, and an internal standard such as n-propanol or t-butanol is used. It separates ethanol from methanol, acetone and isopropanol and gives precise quantification."
  },
  {
    id: 129,
    question: "Cyanide kills rapidly mainly by inhibiting which enzyme?",
    options: ["Acetylcholinesterase", "Cytochrome c oxidase", "Carbonic anhydrase", "Na⁺/K⁺-ATPase"],
    answer: 1,
    explanation: "Cyanide binds the ferric iron of cytochrome a3 in complex IV, which stops oxidative phosphorylation and causes histotoxic hypoxia. Venous blood stays well oxygenated, which can give bright red post-mortem lividity, and a bitter-almond smell may be noticed. Antidotes include hydroxocobalamin and the nitrite–thiosulphate regimen."
  },
  {
    id: 130,
    question: "After TLC of a plant extract, the plate is sprayed with Dragendorff's reagent and orange spots appear. Which class of compounds is indicated?",
    options: ["Amino acids", "Reducing sugars", "Fatty acids", "Alkaloids"],
    answer: 3,
    explanation: "Dragendorff's reagent (potassium bismuth iodide) gives orange to orange-red spots with alkaloids such as atropine, strychnine and morphine. Ninhydrin is used for amino acids and amines, and iodine vapour is a general stain for many organic compounds."
  },
  {
    id: 131,
    question: "The Central Forensic Science Laboratories at Hyderabad, Kolkata, Chandigarh and other centres function under which organisation?",
    options: ["Central Bureau of Investigation", "National Crime Records Bureau", "Bureau of Police Research and Development", "Directorate of Forensic Science Services, Ministry of Home Affairs"],
    answer: 3,
    explanation: "DFSS was created in 2002 by separating the forensic wing from BPR&D. It now runs seven CFSLs: Kolkata (1957), Hyderabad (1968), Chandigarh (1972), Pune, Bhopal and Guwahati (2011), and New Delhi, which it took over from the CBI in 2022. It also sets standards and supports training, with Guwahati as its centre of excellence for biological sciences."
  },
  {
    id: 132,
    question: "Where is the headquarters of the State Forensic Science Laboratory of Madhya Pradesh?",
    options: ["Bhopal", "Indore", "Jabalpur", "Sagar"],
    answer: 3,
    explanation: "MP's State FSL is at Sagar, and Regional FSLs at Bhopal, Indore, Gwalior, Jabalpur, Rewa and other centres support it. Bhopal separately hosts a CFSL run by the Union government's DFSS. Scientific Officers recruited through MPPSC are posted in this state FSL network."
  },
  {
    id: 133,
    question: "The National Forensic Sciences University, created under the NFSU Act, 2020, was formed by upgrading Gujarat Forensic Sciences University and merging which institution with it?",
    options: ["CFSL Chandigarh", "LNJN National Institute of Criminology and Forensic Science, Delhi", "CDFD Hyderabad", "BPR&D Training Wing"],
    answer: 1,
    explanation: "The NFSU Act, 2020 created a university of national importance at Gandhinagar and made the Lok Nayak Jayaprakash Narayan NICFS in Delhi a part of it. NFSU has since opened campuses in several states. CDFD is a DBT institute for DNA fingerprinting and diagnostics."
  },
  {
    id: 134,
    question: "Which body publishes the annual reports 'Crime in India' and 'Accidental Deaths & Suicides in India'?",
    options: ["National Crime Records Bureau", "Bureau of Police Research and Development", "National Investigation Agency", "Police Modernisation Division, MHA"],
    answer: 0,
    explanation: "NCRB was set up in 1986 under the MHA as a national repository of crime and criminal data. Besides the annual statistics, it runs CCTNS, the Central Finger Print Bureau and NAFIS. BPR&D publishes 'Data on Police Organisations'."
  },
  {
    id: 135,
    question: "The National Automated Fingerprint Identification System (NAFIS), a central searchable database of arrested and convicted persons' fingerprints, is managed by which body?",
    options: ["Intelligence Bureau", "NCRB, through its Central Finger Print Bureau", "National Investigation Agency", "CFSL Kolkata"],
    answer: 1,
    explanation: "NAFIS is run by NCRB's Central Finger Print Bureau. It gives each fingerprinted person a unique National Fingerprint Number and lets state bureaus search across India. Fingerprints and other measurements of convicts and arrested persons may be taken under the Criminal Procedure (Identification) Act, 2022."
  },
  {
    id: 136,
    question: "Under Section 176(3) of the BNSS, 2023, a forensic expert must visit the crime scene to collect forensic evidence for offences punishable with imprisonment of at least how many years?",
    options: ["Three years", "Five years", "Seven years", "Ten years"],
    answer: 2,
    explanation: "For offences punishable with seven years or more, Section 176(3) makes a forensic expert's visit to the scene mandatory and requires the process to be video-graphed, for example on a mobile phone. The duty applies from a date each State Government notifies within five years, so it did not start automatically on 1 July 2024. A State without the facility may notify the use of another State's facility until its own is ready."
  },
  {
    id: 137,
    question: "Which section of the Bharatiya Sakshya Adhiniyam, 2023 deals with the opinions of experts, which earlier fell under Section 45 of the Indian Evidence Act?",
    options: ["Section 39", "Section 45", "Section 57", "Section 63"],
    answer: 0,
    explanation: "BSA Section 39 makes relevant the opinions of persons specially skilled in science, art, foreign law, handwriting or finger impressions, and it also covers the Examiner of Electronic Evidence. A forensic scientist's report is admitted as expert opinion under this section. Section 63 deals with the certificate for electronic records."
  },
  {
    id: 138,
    question: "Which section of the BNSS, 2023 allows the report of a government scientific expert, such as the Director of an FSL, to be used as evidence without calling the expert to testify?",
    options: ["Section 293", "Section 176", "Section 349", "Section 329"],
    answer: 3,
    explanation: "BNSS Section 329 replaces CrPC Section 293 and lists the government scientific experts whose reports may be used as evidence. The court may still summon and examine the expert on the subject of the report if it thinks fit. Section 293 is the number under the old CrPC."
  },
  {
    id: 139,
    question: "Section 349 of the BNSS, which replaces Section 311A of the CrPC, empowers a Magistrate to order a person, even one not arrested, to give specimen signatures, handwriting and finger impressions. What else may now be ordered?",
    options: ["Specimen voice samples", "Narco-analysis", "Polygraph examination", "Brain electrical oscillation signature (BEOS) profiling"],
    answer: 0,
    explanation: "BNSS Section 349 added voice samples, in line with the Supreme Court's 2019 ruling in Ritesh Sinha v. State of UP, and allows such orders for persons who have not been arrested. Under Selvi v. State of Karnataka (2010), involuntary narco-analysis, polygraph and BEOS tests remain barred by Article 20(3)."
  },
  {
    id: 140,
    question: "Which section of the Bharatiya Sakshya Adhiniyam, 2023 requires a certificate, in the format given in its Schedule, for admitting electronic records, as Section 65B of the Indian Evidence Act did before?",
    options: ["Section 39", "Section 61", "Section 63", "Section 79"],
    answer: 2,
    explanation: "BSA Section 63 sets the conditions for admitting electronic records and requires a certificate in two parts: one signed by the person in charge of the device and one by an expert. Section 61 says that an electronic record cannot be refused as evidence merely because it is electronic. This matters for CCTV footage, call records and digital photographs of scenes."
  },
  {
    id: 141,
    question: "NABL accredits forensic testing laboratories in India against which international standard?",
    options: ["ISO 9001:2015", "ISO 15189:2022", "ISO/IEC 17020:2012", "ISO/IEC 17025:2017"],
    answer: 3,
    explanation: "ISO/IEC 17025:2017 sets out general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories, and NABL uses it, with forensic-specific guidance, for FSL accreditation. ISO 15189 applies to medical laboratories and ISO 9001 is a general quality-management standard."
  },
  {
    id: 142,
    question: "A crime-scene investigation unit that wants accreditation for scene examination as an inspection activity would be assessed against which standard?",
    options: ["ISO/IEC 17020", "ISO/IEC 17025", "ISO 15189", "ISO/IEC 17043"],
    answer: 0,
    explanation: "ISO/IEC 17020 covers bodies that carry out inspection, and forensic accreditation schemes apply it to crime-scene examination, while laboratory testing falls under 17025. ISO/IEC 17043 is for proficiency-testing providers."
  },
  {
    id: 143,
    question: "Organisations that supply proficiency-testing samples to forensic DNA laboratories are accredited under which standard?",
    options: ["ISO 17034", "ISO/IEC 17043", "ISO 31000", "ISO/IEC 27001"],
    answer: 1,
    explanation: "ISO/IEC 17043 sets requirements for proficiency-testing providers, and accredited labs must take part in such tests regularly under ISO/IEC 17025. ISO 17034 covers producers of reference materials, ISO 31000 covers risk management, and ISO/IEC 27001 covers information security."
  },
  {
    id: 144,
    question: "A blood sample taken from a drunk-driving suspect for alcohol estimation should be collected in a tube containing which preservative?",
    options: ["EDTA", "Heparin", "Sodium citrate", "Sodium fluoride with potassium oxalate"],
    answer: 3,
    explanation: "Sodium fluoride inhibits enzymes and microbes that could produce or consume ethanol after collection, and potassium oxalate acts as the anticoagulant (the grey-top tube). EDTA (lavender top) is preferred for DNA reference blood. The tube should be filled fully, sealed and refrigerated."
  },
  {
    id: 145,
    question: "In a death suspected to be due to alcohol poisoning, viscera must not be preserved in rectified spirit. Which preservative should be used instead?",
    options: ["Saturated common salt solution", "Methylated spirit", "10% formalin", "Glacial acetic acid"],
    answer: 0,
    explanation: "Rectified spirit is itself ethanol and would make alcohol estimation impossible, and methylated spirit is ethanol denatured with methanol, so saturated sodium chloride solution is used. Spirit is also avoided when kerosene, phenol, formaldehyde or paraldehyde poisoning is suspected. Formalin is not used for toxicology viscera because it interferes with extraction."
  },
  {
    id: 146,
    question: "A blood-soaked shirt is recovered wet from a scene. How should it be handled to preserve its DNA?",
    options: ["Seal it wet in an airtight plastic bag", "Dry it in a hot-air oven before packing", "Air-dry it at room temperature away from sunlight and pack it in paper", "Soak it in normal saline and refrigerate it"],
    answer: 2,
    explanation: "Moisture sealed in plastic encourages bacterial and fungal growth that degrades DNA and alters stains, while heat and UV damage DNA directly. Each item should be air-dried separately on clean paper, packed in paper bags or envelopes, sealed, labelled, and logged in the chain-of-custody record."
  },
  {
    id: 147,
    question: "During trial, the defence shows that the seal on a packet of vaginal swabs was found broken on receipt at the FSL and that the transfer register has an unexplained two-day gap. Which aspect of the evidence is being challenged?",
    options: ["Chain of custody", "Locard's exchange principle", "The hearsay rule", "Res gestae"],
    answer: 0,
    explanation: "Chain of custody is the continuous documented record of who collected, sealed, transferred, stored and examined an exhibit, and when. Breaks in this record raise doubts about tampering, substitution or contamination and can reduce the weight given to even a strong DNA match."
  },
  {
    id: 148,
    question: "The commonly used Streptococcus pyogenes Cas9 needs which protospacer-adjacent motif (PAM) immediately 3′ of its target sequence?",
    options: ["TTTV", "NNGRRT", "NGG", "GAA"],
    answer: 2,
    explanation: "SpCas9 recognises 5′-NGG-3′ next to the 20-nt target matched by the guide RNA and cuts both strands about 3 bp upstream of the PAM. Cas12a uses a T-rich 5′ PAM (TTTV), and NNGRRT is the PAM for Staphylococcus aureus Cas9. PAM recognition stops the bacterium's own CRISPR array from being cut."
  },
  {
    id: 149,
    question: "Which NCBI-maintained database archives nucleotide sequences and exchanges data daily with ENA and DDBJ under the INSDC?",
    options: ["GenBank", "UniProt", "Protein Data Bank (PDB)", "KEGG"],
    answer: 0,
    explanation: "GenBank, together with EMBL-EBI's ENA and Japan's DDBJ, forms the International Nucleotide Sequence Database Collaboration. Forensic species identification often compares cytochrome b or COI sequences against GenBank using BLAST. UniProt holds protein sequences and PDB holds 3-D structures."
  },
  {
    id: 150,
    question: "In two-dimensional gel electrophoresis for proteomic analysis, which separations are carried out in the first and second dimensions?",
    options: ["SDS-PAGE first, then isoelectric focusing", "Native PAGE in both dimensions", "Isoelectric focusing first, then SDS-PAGE", "Agarose gel first, then capillary electrophoresis"],
    answer: 2,
    explanation: "In 2-D PAGE (O'Farrell, 1975), proteins are first separated by charge using IEF (today usually on an immobilised pH gradient strip), then by mass using SDS-PAGE at right angles. This resolves thousands of spots, which can be cut out, digested with trypsin and identified by MALDI-TOF or LC-MS/MS."
  }
];

export default questions;

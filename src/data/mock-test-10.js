const questions = [
  {
    id: 1,
    question: "Which Begum of Bhopal became the founding Chancellor of Aligarh Muslim University in 1920?",
    options: ["Sikandar Begum", "Shah Jahan Begum", "Sultan Jahan Begum", "Qudsia Begum"],
    answer: 2,
    explanation: "Sultan Jahan Begum (ruled 1901–1926), the last of the four ruling Begums, was a strong promoter of women's education and became AMU's first Chancellor when it received university status in 1920. She abdicated in favour of her son Hamidullah Khan, the last Nawab."
  },
  {
    id: 2,
    question: "Who was the first woman ruler (Begum) of Bhopal state?",
    options: ["Qudsia Begum", "Sikandar Begum", "Shah Jahan Begum", "Sultan Jahan Begum"],
    answer: 0,
    explanation: "Qudsia (Gohar) Begum took charge in 1819 after her husband Nazar Mohammad Khan was killed, beginning more than a century of rule by the Begums of Bhopal. She was followed by Sikandar, Shah Jahan and Sultan Jahan Begum, and she built the Jama Masjid of Bhopal."
  },
  {
    id: 3,
    question: "The Moti Masjid of Bhopal, modelled on the Jama Masjid of Delhi but smaller, was built in 1860 by",
    options: ["Qudsia Begum", "Shah Jahan Begum", "Sikandar Begum", "Sultan Jahan Begum"],
    answer: 2,
    explanation: "Sikandar Begum, daughter of Qudsia Begum, built the white marble Moti Masjid in 1860. She ruled Bhopal through the 1857 period and stayed loyal to the British. Her daughter Shah Jahan Begum later began the Taj-ul-Masajid."
  },
  {
    id: 4,
    question: "The Lakshmana temple at Khajuraho, one of the earliest of the mature Chandela temples, is associated with which ruler?",
    options: ["Dhanga", "Vidyadhara", "Yashovarman", "Paramardi"],
    answer: 2,
    explanation: "The Lakshmana (Vaikuntha Vishnu) temple, completed around 954 CE, is credited to Yashovarman, whose inscription is found there. Dhanga built the Vishvanatha temple, and the larger Kandariya Mahadeva is attributed to Vidyadhara."
  },
  {
    id: 5,
    question: "Where did the Revolt of 1857 first break out in present-day Madhya Pradesh, on 3 June 1857?",
    options: ["Mhow", "Gwalior", "Neemuch", "Sagar"],
    answer: 2,
    explanation: "Sepoys at the Neemuch cantonment rose on 3 June 1857, the first outbreak in the region. The revolt then spread to Mhow and Indore (July 1857), Gwalior and the Bundelkhand-Sagar belt."
  },
  {
    id: 6,
    question: "Rani Avantibai Lodhi, who led the 1857 uprising in the Mandla region and died fighting the British in 1858, was the queen of",
    options: ["Ramgarh", "Jhansi", "Garha", "Chanderi"],
    answer: 0,
    explanation: "Avantibai ruled the Ramgarh estate (now in Dindori district) after her husband's death. When the British took over its administration under Court of Wards, she raised an army in 1857, and she chose death over capture in March 1858. She is often compared to Rani Lakshmibai."
  },
  {
    id: 7,
    question: "Rani Durgavati was married to Dalpat Shah, son of which Gond ruler of Garha-Mandla, who is credited with extending the kingdom to 52 garhs (forts)?",
    options: ["Hriday Shah", "Narendra Shah", "Madan Shah", "Sangram Shah"],
    answer: 3,
    explanation: "Sangram Shah (early 16th century) was the most powerful Gond king of Garha-Mandla and expanded the kingdom to 52 garhs. His son Dalpat Shah married the Chandela princess Durgavati, who ruled as regent after Dalpat's early death. Madan Mahal at Jabalpur is named after the earlier king Madan Shah."
  },
  {
    id: 8,
    question: "The rock-cut Udayagiri caves near Vidisha, famous for the colossal Varaha panel, belong mainly to which period?",
    options: ["Gupta", "Mauryan", "Shunga", "Paramara"],
    answer: 0,
    explanation: "The Udayagiri caves date from the reign of Chandragupta II (early 5th century CE), and inscriptions there name his minister Virasena. The Varaha panel showing Vishnu rescuing the Earth is a masterpiece of Gupta sculpture."
  },
  {
    id: 9,
    question: "Asirgarh fort in Burhanpur district, called the 'Key to the Deccan', was captured in 1601 by which Mughal emperor?",
    options: ["Humayun", "Jahangir", "Akbar", "Aurangzeb"],
    answer: 2,
    explanation: "Akbar took Asirgarh from Bahadur Shah Faruqi of Khandesh in January 1601 after a long siege, which was his last major conquest. The fort controlled the route from north India to the Deccan through the Satpura passes."
  },
  {
    id: 10,
    question: "The original brick stupa at Sanchi, later enlarged and given its stone gateways, was commissioned by",
    options: ["Kanishka", "Ashoka", "Pushyamitra Shunga", "Harsha"],
    answer: 1,
    explanation: "Ashoka built the first brick stupa at Sanchi in the 3rd century BCE. It was enlarged with a stone casing in the Shunga period, and its four carved toranas were added under the Satavahanas. Sanchi has been a UNESCO World Heritage Site since 1989."
  },
  {
    id: 11,
    question: "Which was the first wetland of Madhya Pradesh to be designated a Ramsar site?",
    options: ["Bhoj Wetland", "Sakhya Sagar", "Yashwant Sagar", "Sirpur Lake"],
    answer: 0,
    explanation: "The Bhoj Wetland (the Upper and Lower Lakes of Bhopal) became a Ramsar site in 2002. Sakhya Sagar (Shivpuri), Yashwant Sagar and Sirpur (both Indore) were added in 2022, and Tawa Reservoir in 2024."
  },
  {
    id: 12,
    question: "Which of the following Ramsar sites of Madhya Pradesh is located in Shivpuri district?",
    options: ["Yashwant Sagar", "Sirpur Lake", "Bhoj Wetland", "Sakhya Sagar"],
    answer: 3,
    explanation: "Sakhya Sagar, on the edge of Madhav National Park in Shivpuri, became a Ramsar site in 2022. Yashwant Sagar and Sirpur are in Indore, the Bhoj Wetland is in Bhopal, and Tawa Reservoir in Narmadapuram was added in 2024."
  },
  {
    id: 13,
    question: "Kuno National Park, where African cheetahs were first reintroduced into India in September 2022, is located in which district?",
    options: ["Shivpuri", "Sheopur", "Guna", "Morena"],
    answer: 1,
    explanation: "Kuno is in Sheopur district, and the first eight Namibian cheetahs were released there on 17 September 2022. It was the world's first intercontinental translocation of a large carnivore for reintroduction."
  },
  {
    id: 14,
    question: "Which is the largest tiger reserve of Madhya Pradesh by area?",
    options: ["Kanha", "Satpura", "Bandhavgarh", "Veerangana Durgavati"],
    answer: 3,
    explanation: "The Veerangana Durgavati Tiger Reserve, formed in 2023 from the Nauradehi and Durgavati sanctuaries, covers about 2,339 sq km across Sagar, Damoh and Narsinghpur, more than Satpura or Kanha. It became MP's third cheetah habitat in October 2026."
  },
  {
    id: 15,
    question: "Ratapani Tiger Reserve, notified in December 2024 as the eighth tiger reserve of Madhya Pradesh, lies mainly in which districts?",
    options: ["Raisen and Sehore", "Sagar and Damoh", "Shivpuri and Guna", "Betul and Harda"],
    answer: 0,
    explanation: "Ratapani lies close to Bhopal, in Raisen and Sehore, and includes the Bhimbetka rock shelters within its landscape. It was followed in March 2025 by Madhav (Shivpuri) as the ninth tiger reserve."
  },
  {
    id: 16,
    question: "The Rewa Ultra Mega Solar Park, one of the first projects in India to break the grid-parity tariff barrier and a supplier of power to the Delhi Metro, is located at",
    options: ["Neemuch", "Gurh", "Agar", "Shajapur"],
    answer: 1,
    explanation: "The 750 MW Rewa Ultra Mega Solar project at Gurh tehsil, Rewa, began operation in 2018. Its record-low tariff of about ₹2.97/unit in 2017 was a landmark, and it was the first solar project to supply an inter-state open-access customer (Delhi Metro)."
  },
  {
    id: 17,
    question: "Pachmarhi Biosphere Reserve, the first biosphere reserve of Madhya Pradesh to join UNESCO's Man and Biosphere network, was included in",
    options: ["2005", "2012", "2009", "2020"],
    answer: 2,
    explanation: "Pachmarhi joined the UNESCO MAB network in 2009, followed by Amarkantak (2012) and Panna (2020). MP therefore has three UNESCO-recognised biosphere reserves."
  },
  {
    id: 18,
    question: "Which district of Madhya Pradesh is the leading producer of manganese ore in the state?",
    options: ["Jhabua", "Katni", "Chhindwara", "Balaghat"],
    answer: 3,
    explanation: "Balaghat, with mines such as Bharweli and Ukwa run by MOIL, produces most of MP's manganese, and MP is among India's top manganese states. Katni is known for bauxite and limestone, and Jhabua for rock phosphate."
  },
  {
    id: 19,
    question: "The marble rocks gorge through which the Narmada flows is located at",
    options: ["Bhedaghat", "Omkareshwar", "Maheshwar", "Hoshangabad"],
    answer: 0,
    explanation: "At Bhedaghat near Jabalpur, the Narmada cuts a gorge about 3 km long through white and coloured marble cliffs before plunging over the Dhuandhar falls. Omkareshwar and Maheshwar are temple towns further west on the river."
  },
  {
    id: 20,
    question: "On the reservoir of which river has one of India's largest floating solar power projects been built at Omkareshwar?",
    options: ["Narmada", "Chambal", "Betwa", "Tapti"],
    answer: 0,
    explanation: "The Omkareshwar floating solar park, planned at about 600 MW, floats on the Omkareshwar dam reservoir on the Narmada in Khandwa district. Floating panels save land and cut evaporation losses from the reservoir."
  },
  {
    id: 21,
    question: "Who was the first woman Chief Minister of Madhya Pradesh?",
    options: ["Vijaya Raje Scindia", "Jamuna Devi", "Uma Bharti", "Sumitra Mahajan"],
    answer: 2,
    explanation: "Uma Bharti became Chief Minister in December 2003 and remains the only woman to have held the post in MP. Jamuna Devi was the first woman Leader of the Opposition in the Vidhan Sabha."
  },
  {
    id: 22,
    question: "Who has served the longest total tenure as Chief Minister of Madhya Pradesh?",
    options: ["Digvijaya Singh", "Arjun Singh", "Shyama Charan Shukla", "Shivraj Singh Chouhan"],
    answer: 3,
    explanation: "Shivraj Singh Chouhan was CM from 2005 to 2018 and again from 2020 to 2023, more than 16 years in all. Digvijaya Singh served two full terms (1993–2003). Dr. Mohan Yadav took office in December 2023."
  },
  {
    id: 23,
    question: "Which of the following was NOT one of the units that merged to form the new state of Madhya Pradesh on 1 November 1956?",
    options: ["Madhya Bharat", "Vindhya Pradesh", "Berar", "Bhopal State"],
    answer: 2,
    explanation: "The new MP was formed from Mahakoshal (the Hindi-speaking districts of old Madhya Pradesh/CP), Madhya Bharat, Vindhya Pradesh and Bhopal, along with Sironj. The Marathi-speaking Berar and Nagpur divisions went to Bombay State."
  },
  {
    id: 24,
    question: "Which city served as the capital of the former state of Vindhya Pradesh?",
    options: ["Rewa", "Satna", "Panna", "Chhatarpur"],
    answer: 0,
    explanation: "Vindhya Pradesh (1948–1956), formed from the Bundelkhand and Baghelkhand princely states, had its capital at Rewa. Madhya Bharat had twin capitals, Gwalior (winter) and Indore (summer)."
  },
  {
    id: 25,
    question: "Chhattisgarh was carved out of Madhya Pradesh as a separate state on",
    options: ["1 November 1999", "1 November 2000", "9 November 2000", "15 November 2000"],
    answer: 1,
    explanation: "Under the MP Reorganisation Act, 2000, Chhattisgarh became India's 26th state on 1 November 2000, the same day MP celebrates its foundation day. Uttarakhand followed on 9 November and Jharkhand on 15 November 2000."
  },
  {
    id: 26,
    question: "The Madhya Pradesh Vidhan Bhavan (Vidhan Sabha building) in Bhopal was designed by",
    options: ["B.V. Doshi", "Raj Rewal", "Le Corbusier", "Charles Correa"],
    answer: 3,
    explanation: "Charles Correa designed the circular Vidhan Bhavan, completed in 1996 and based on a mandala plan, as well as Bharat Bhavan in Bhopal. The building won the Aga Khan Award for Architecture in 1998."
  },
  {
    id: 27,
    question: "The Invest MP Global Investors Summit held in February 2025 was notable for being hosted for the first time in",
    options: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    answer: 0,
    explanation: "The GIS of 24–25 February 2025 was held in Bhopal and inaugurated by the Prime Minister. Earlier editions had been held mainly in Indore, the state's commercial hub, and the 2025 summit drew investment proposals of about ₹30.77 lakh crore."
  },
  {
    id: 28,
    question: "In Swachh Survekshan 2024-25, announced in July 2025, Indore was recognised as India's cleanest city for the",
    options: ["Sixth consecutive time", "Seventh consecutive time", "Eighth consecutive time", "Ninth consecutive time"],
    answer: 2,
    explanation: "Indore has topped every Swachh Survekshan since 2017, making 2024-25 its eighth straight title, and it was placed in the new 'Super Swachh League' of consistent performers. Its model rests on six-way waste segregation and a bio-CNG plant."
  },
  {
    id: 29,
    question: "Madhya Pradesh has for years been the country's largest producer of which of the following?",
    options: ["Rice", "Pulses", "Sugarcane", "Tea"],
    answer: 1,
    explanation: "MP leads India in total pulse production, especially gram (chana), with roughly a fifth to a quarter of national output, though Maharashtra runs it close. It is also a major producer of wheat and soybean (Maharashtra out-produced MP in soybean in 2024-25)."
  },
  {
    id: 30,
    question: "The Ladli Laxmi Yojana for the welfare of the girl child was launched in Madhya Pradesh in",
    options: ["2005", "2007", "2011", "2015"],
    answer: 1,
    explanation: "Ladli Laxmi was launched on 1 April 2007 to improve the sex ratio and girls' education. It gives staged payments at school milestones and a lump sum at age 21, and several other states later copied the model."
  },
  {
    id: 31,
    question: "Padma Shri awardee Bhuri Bai, the first Bhil woman to paint on paper, is associated with which art form?",
    options: ["Gond painting", "Bhil painting", "Warli painting", "Madhubani painting"],
    answer: 1,
    explanation: "Bhuri Bai of Pitol village, Jhabua, took Bhil (Pithora-inspired) dotted painting from house walls to paper and canvas. She worked at Bharat Bhavan under J. Swaminathan and received the Padma Shri in 2021."
  },
  {
    id: 32,
    question: "Which of the following World Heritage Sites of Madhya Pradesh was inscribed by UNESCO most recently?",
    options: ["Khajuraho Group of Monuments", "Buddhist Monuments at Sanchi", "All three were inscribed in the same year", "Rock Shelters of Bhimbetka"],
    answer: 3,
    explanation: "Bhimbetka was inscribed in 2003, after Khajuraho (1986) and Sanchi (1989). These three remain MP's only World Heritage Sites, while sites such as Mandu, Gwalior Fort and Orchha are on India's Tentative List."
  },
  {
    id: 33,
    question: "Durgabai Vyam, awarded the Padma Shri in 2022, is a well-known exponent of",
    options: ["Gond painting", "Mandana art", "Bagh print", "Pithora painting"],
    answer: 0,
    explanation: "Durgabai Vyam, from Burbaspur in Mandla district, paints in the Gond (Pardhan Gond) Digna tradition and has illustrated acclaimed books such as 'Bhimayana'. She received the Padma Shri in 2022."
  },
  {
    id: 34,
    question: "The iron-smelting Agaria tribe of Madhya Pradesh worships which deity as its chief god?",
    options: ["Bada Dev", "Lohasur", "Khermai", "Dulha Dev"],
    answer: 1,
    explanation: "The Agaria, a Gond-related tribe of the Mandla-Shahdol-Dindori region, are traditional iron smelters and worship Lohasur, the iron demon who lives in their furnaces. Bada Dev is the supreme god of the Gond."
  },
  {
    id: 35,
    question: "The Korku tribe is concentrated mainly in which part of Madhya Pradesh?",
    options: ["Jhabua-Alirajpur", "Sheopur-Shivpuri", "Mandla-Dindori", "Betul-Harda-Khandwa (Satpura range)"],
    answer: 3,
    explanation: "The Korku, a Munda (Austroasiatic)-speaking tribe, live in the Satpura belt of Betul, Harda, Khandwa and Chhindwara and across the border in Melghat (Maharashtra). Their dances include Thapti and Dhandal."
  },
  {
    id: 36,
    question: "Apart from Mahakaleshwar at Ujjain, which of the twelve Jyotirlingas is located in Madhya Pradesh?",
    options: ["Bhimashankar", "Trimbakeshwar", "Omkareshwar", "Grishneshwar"],
    answer: 2,
    explanation: "Omkareshwar is on Mandhata island in the Narmada, in Khandwa district, so MP has two of the twelve Jyotirlingas. Bhimashankar, Trimbakeshwar and Grishneshwar are all in Maharashtra."
  },
  {
    id: 37,
    question: "Ramghat at Chitrakoot, in Satna district, where Lord Rama is believed to have spent part of his exile, lies on the bank of which river?",
    options: ["Ken", "Mandakini", "Tons", "Son"],
    answer: 1,
    explanation: "Chitrakoot's ghats, Kamadgiri hill and Sati Anusuya ashram lie along the Mandakini, a tributary of the Yamuna, on the MP-UP border. The Ken flows through Panna and Chhatarpur, and the Tons (Tamsa) through Rewa."
  },
  {
    id: 38,
    question: "The historical novel 'Mrignayani', about the Gujari queen of Raja Man Singh Tomar of Gwalior, was written by",
    options: ["Makhanlal Chaturvedi", "Harishankar Parsai", "Sharad Joshi", "Vrindavan Lal Verma"],
    answer: 3,
    explanation: "Vrindavan Lal Verma of Jhansi wrote 'Mrignayani' (1950), along with 'Jhansi ki Rani' and other Bundelkhand histories. Harishankar Parsai and Sharad Joshi were satirists from MP."
  },
  {
    id: 39,
    question: "Makhanlal Chaturvedi, the 'Ek Bharatiya Atma' from Madhya Pradesh, received the first Sahitya Akademi Award for Hindi in 1955 for",
    options: ["Him Kiritini", "Yug Charan", "Sahitya Devta", "Him Tarangini"],
    answer: 3,
    explanation: "'Him Tarangini' won the first Sahitya Akademi Award given for Hindi, in 1955. Chaturvedi, born at Babai (now Makhan Nagar) in Narmadapuram, also wrote 'Pushp ki Abhilasha'. The journalism university in Bhopal is named after him."
  },
  {
    id: 40,
    question: "Patangarh village, the home of the Gond painter Jangarh Singh Shyam and the cradle of contemporary Gond art, is in which district?",
    options: ["Mandla", "Dindori", "Balaghat", "Seoni"],
    answer: 1,
    explanation: "Patangarh in Dindori district produced Jangarh Singh Shyam, whose work was promoted by J. Swaminathan at Bharat Bhavan from the early 1980s. His style, often called 'Jangarh Kalam', inspired a generation of Pardhan Gond artists."
  },
  {
    id: 41,
    question: "The Veerangana Durgavati Tiger Reserve, which became the third cheetah habitat of Madhya Pradesh in October 2026, is named after the queen of which kingdom?",
    options: ["Chanderi", "Orchha", "Garha-Katanga (Gond kingdom)", "Ramgarh"],
    answer: 2,
    explanation: "Rani Durgavati ruled the Gond kingdom of Garha-Katanga and died resisting the Mughals in 1564. Cheetahs were released into the reserve (Nauradehi, Sagar) on 7 October 2026, after Kuno and Gandhi Sagar. It is MP's largest tiger reserve, at about 2,339 sq km."
  },
  {
    id: 42,
    question: "Simhastha 2028, for which the MP government said in June 2026 that more than 40 crore devotees are expected, will be held at Ujjain on the banks of which river?",
    options: ["Narmada", "Kshipra", "Chambal", "Betwa"],
    answer: 1,
    explanation: "The Ujjain Simhastha (Kumbh) is held on the Kshipra every 12 years, when Jupiter is in Leo (Simha). In June 2026 the state reported development works worth over ₹25,000 crore under way for the 2028 event, including bridges, ghats and road links such as the Ujjain-Indore six-lane highway."
  },
  {
    id: 43,
    question: "The Madhya Pradesh government declared the year 2026 as a year dedicated to",
    options: ["Women's empowerment", "Water conservation", "Industry and employment", "Farmers' welfare"],
    answer: 3,
    explanation: "In January 2026, CM Mohan Yadav declared 2026 as Krishak Kalyan Varsh (Farmers' Welfare Year), launching it at a farmers' convention in Bhopal on 11 January 2026, with 16 departments working to a common roadmap on farm incomes and natural farming. 2025 had been dedicated to industry and employment."
  },
  {
    id: 44,
    question: "Pace bowler Kranti Goud, a member of the Indian team that won the ICC Women's ODI World Cup in November 2025, hails from which district of Madhya Pradesh?",
    options: ["Chhatarpur", "Sagar", "Rewa", "Shahdol"],
    answer: 0,
    explanation: "Kranti Goud comes from Ghuwara in Chhatarpur district (Bundelkhand) and debuted for India in May 2025. India beat South Africa by 52 runs at Navi Mumbai on 2 November 2025 to win their first Women's World Cup, and Goud's 3/20 against Pakistan earned her a Player of the Match award during the tournament."
  },
  {
    id: 45,
    question: "In the ICC Men's T20 World Cup final at Ahmedabad on 8 March 2026, India's score of 255/5 against New Zealand set which record?",
    options: ["First total above 300 in a T20 International", "Lowest total successfully defended in a final", "Highest successful run chase in a T20 World Cup", "Highest team total in a T20 World Cup final"],
    answer: 3,
    explanation: "India's 255/5 was the highest total in a T20 World Cup final, and New Zealand were bowled out for 159, so India won by 96 runs. India became the first side to win back-to-back T20 World Cups, and the first to win at home, taking their third title."
  },
  {
    id: 46,
    question: "'Sarvajan Hitaya, Sarvajan Sukhaya' was the guiding principle of which international event held in India in February 2026?",
    options: ["G20 Leaders' Summit", "AI Impact Summit", "World Economic Forum annual meeting", "UN Climate Change Conference"],
    answer: 1,
    explanation: "The AI Impact Summit in New Delhi adopted the non-binding New Delhi Declaration on AI Impact on 21 February 2026, endorsed by about 88–91 countries and organisations, including the US and China. It was the first such summit in the Global South, after Bletchley Park, Seoul and Paris."
  },
  {
    id: 47,
    question: "Census 2027, whose house-listing phase ran from April to September 2026, is the first Indian census to offer which facility?",
    options: ["Enumeration only through private agencies", "Self-enumeration by citizens through a web portal", "Collection of fingerprints of all residents", "Use of paper schedules alone"],
    answer: 1,
    explanation: "Census 2027 is India's first digital census, and before house-to-house listing in each state, residents could self-enumerate on a government portal for 15 days. Phase I began on 1 April 2026, and population enumeration follows in 2027."
  },
  {
    id: 48,
    question: "Which of the following Madhya Pradesh products received a Geographical Indication (GI) tag in June 2026?",
    options: ["Ratlami sev", "Chanderi saree", "Jabalpuri matar", "Bagh print"],
    answer: 2,
    explanation: "Jabalpuri matar (peas) and Jabalpur singhada (water chestnut) received GI tags in late June 2026, making Jabalpur the first region in India with GI tags for these crops. Ratlami sev, Chanderi sarees and Bagh print had been GI-registered years earlier."
  },
  {
    id: 49,
    question: "In the Swachh Vayu Sarvekshan 2026 (clean-air survey) results of September 2026, which city edged out Indore by a single point to top the category of cities with over 10 lakh population?",
    options: ["Agra", "Surat", "Jabalpur", "Lucknow"],
    answer: 3,
    explanation: "Lucknow scored 198 against Indore's 197 to top the million-plus category, with Jabalpur third (195). The results of the National Clean Air Programme survey were announced on Swachh Vayu Diwas, 7 September 2026."
  },
  {
    id: 50,
    question: "BHASHINI, a Government of India digital platform, is primarily meant for",
    options: ["AI-based translation and speech services across Indian languages", "Biometric authentication for welfare schemes", "Satellite navigation services", "Online filing of income-tax returns"],
    answer: 0,
    explanation: "BHASHINI (BHASHa INterface for India), under MeitY's National Language Translation Mission, offers open AI models for machine translation, speech-to-text and text-to-speech in Indian languages. It is built into government apps and services so citizens can use them in their own language."
  },
  {
    id: 51,
    question: "Calvin Goddard, whose analysis in the St. Valentine's Day Massacre case (1929) led to the founding of the Scientific Crime Detection Laboratory in Chicago, was a pioneer of",
    options: ["Fingerprint classification", "Firearms identification using the comparison microscope", "Forensic entomology", "ABO grouping of bloodstains"],
    answer: 1,
    explanation: "Goddard, with Philip Gravelle, popularised the comparison microscope for matching bullets to guns. His work on the 1929 Chicago massacre led to the Scientific Crime Detection Laboratory at Northwestern University (1930). The comparison microscope is now used for hairs and fibres as well."
  },
  {
    id: 52,
    question: "India's first Chemical Examiner's Laboratory, the forerunner of the forensic science laboratories, was established in 1849 at",
    options: ["Calcutta", "Bombay", "Agra", "Madras"],
    answer: 3,
    explanation: "The Chemical Examiner's Laboratory at Madras (1849) analysed viscera in poisoning cases, and similar labs followed at Calcutta, Agra and Bombay. The first Central FSL came much later, at Calcutta in 1957."
  },
  {
    id: 53,
    question: "Who first used fingerprints for official purposes in India, on contracts and pension records in the Hooghly district of Bengal from 1858?",
    options: ["Henry Faulds", "Edward Henry", "Francis Galton", "William Herschel"],
    answer: 3,
    explanation: "Sir William Herschel, a magistrate of the Indian Civil Service, had a contractor, Rajyadhar Konai, sign with his handprint in 1858 and later used fingerprints to prevent impersonation. Henry Faulds wrote on fingerprints at crime scenes in 1880, and Edward Henry developed the classification system."
  },
  {
    id: 54,
    question: "The earliest recorded case solved with forensic entomology, in which flies gathered on a blood-stained sickle, is described in 'The Washing Away of Wrongs' (1247) by",
    options: ["Song Ci (Sung Tz'u)", "Bergeret d'Arbois", "Jean Pierre Mégnin", "Ambroise Paré"],
    answer: 0,
    explanation: "The Chinese death investigator Song Ci recorded a case in which villagers laid out their sickles and blowflies settled only on the one with invisible blood traces, leading to a confession. Bergeret (1855) made the first modern entomological PMI estimate."
  },
  {
    id: 55,
    question: "Who described the successive 'squads' (waves) of insects colonising a corpse in the classic work 'La Faune des Cadavres' (1894)?",
    options: ["Bernard Greenberg", "Jean Pierre Mégnin", "M. Lee Goff", "Hermann Reinhard"],
    answer: 1,
    explanation: "French veterinarian Mégnin described eight waves of arthropods arriving at an exposed body in a predictable order, laying the foundation of forensic entomology. Later workers such as Goff and Greenberg refined succession data for different climates."
  },
  {
    id: 56,
    question: "Gustafson's method, based on attrition, secondary dentine, periodontal attachment, cementum apposition, root resorption and root transparency, is used to estimate",
    options: ["Sex from teeth", "Race from dental morphology", "Stature from dental arch size", "Age of an adult from teeth"],
    answer: 3,
    explanation: "Gösta Gustafson (1950) scored six regressive changes in a sectioned tooth to estimate adult age. Root dentine transparency is the most reliable of the six. The method helps identify unknown adults when the skeleton offers few age markers."
  },
  {
    id: 57,
    question: "Which serial killer was convicted in 1979 largely on the basis of bite-mark evidence matched to his teeth?",
    options: ["Colin Pitchfork", "Richard Ramirez", "Tommie Lee Andrews", "Ted Bundy"],
    answer: 3,
    explanation: "In the Chi Omega sorority murders trial in Florida (1979), odontologists matched Ted Bundy's distinctive irregular teeth to a bite mark on a victim, which was central to his conviction. Bite-mark comparison is now regarded as much less reliable than DNA."
  },
  {
    id: 58,
    question: "The Buck Ruxton case (1935) is a landmark in forensic science chiefly for the use of",
    options: ["Photographic superimposition of skulls on portraits, together with maggot age", "The first DNA profile used in court", "The first diatom test for drowning", "The first use of neutron activation analysis"],
    answer: 0,
    explanation: "In the 'Jigsaw Murders', Professors Glaister and Brash identified the dismembered bodies of Ruxton's wife and maid by superimposing the skulls on photographs. The age of blowfly larvae helped fix the time of disposal, and Ruxton was hanged in 1936."
  },
  {
    id: 59,
    question: "Neutron activation analysis of Napoleon Bonaparte's preserved hair, reported in 1961, showed raised levels of which element?",
    options: ["Mercury", "Thallium", "Arsenic", "Lead"],
    answer: 2,
    explanation: "Sten Forshufvud and Hamilton Smith found high arsenic in segments of Napoleon's hair. This fuelled poisoning theories, though environmental sources such as arsenic-based wallpaper pigments have also been proposed. Segmental hair analysis can give a timeline of exposure because hair grows at a steady rate."
  },
  {
    id: 60,
    question: "Human scalp hair grows at an average rate of about",
    options: ["1 mm per month", "1 cm per month", "5 cm per month", "1 cm per year"],
    answer: 1,
    explanation: "Scalp hair grows about 0.35–0.44 mm a day, roughly 1 cm a month. Forensic toxicologists use this to date drug or poison exposure by analysing successive centimetre segments of hair."
  },
  {
    id: 61,
    question: "According to Krogman, which single part of the adult skeleton allows sex to be determined with the highest accuracy?",
    options: ["Skull", "Femur", "Sternum", "Pelvis"],
    answer: 3,
    explanation: "Krogman's figures give about 95% accuracy for the pelvis alone, 90% for the skull, 98% for pelvis plus skull and nearly 100% for the complete skeleton. The pelvis is the most dimorphic because of its adaptation for childbirth (wide sciatic notch, subpubic angle, preauricular sulcus)."
  },
  {
    id: 62,
    question: "Adipocere (grave wax), which can preserve a body's features for years, is formed by",
    options: ["Hydrolysis and hydrogenation of body fats into higher fatty acids", "Desiccation of soft tissues in hot dry air", "Calcification of the skin", "Bacterial liquefaction of muscle proteins"],
    answer: 0,
    explanation: "In warm, moist, airless conditions such as submersion or damp graves, lipases and bacterial enzymes (notably Clostridium perfringens) convert neutral fats into palmitic, stearic and oleic acids. The result is a waxy, greyish-white mass. Dry heat causes mummification instead."
  },
  {
    id: 63,
    question: "Chrysomya megacephala and Chrysomya rufifacies, among the commonest first colonisers of corpses in India, belong to the family",
    options: ["Sarcophagidae", "Muscidae", "Calliphoridae", "Dermestidae"],
    answer: 2,
    explanation: "Both are blowflies (Calliphoridae), the metallic green or blue flies that lay eggs within hours of death. Their temperature-dependent development is the basis of minimum-PMI estimation. Ch. rufifacies larvae are also predatory on other maggots."
  },
  {
    id: 64,
    question: "CITES, the international convention that regulates trade in endangered wildlife and underpins much wildlife forensic work, came into force in",
    options: ["1972", "1973", "1980", "1975"],
    answer: 3,
    explanation: "CITES was signed in Washington in March 1973 and came into force on 1 July 1975, and India joined in 1976. Its Appendix I lists species threatened with extinction, such as tigers, chiru and pangolins, which are barred from commercial trade."
  },
  {
    id: 65,
    question: "The Laboratory for the Conservation of Endangered Species (LaCONES), which provides wildlife DNA forensics in India, is part of",
    options: ["CCMB, Hyderabad", "WII, Dehradun", "ZSI, Kolkata", "NFSU, Gandhinagar"],
    answer: 0,
    explanation: "LaCONES is a dedicated facility of CSIR's Centre for Cellular and Molecular Biology, Hyderabad, and it runs wildlife forensics, a genetic resource bank and assisted reproduction for endangered species. WII Dehradun also runs a wildlife forensic cell."
  },
  {
    id: 66,
    question: "Which American criminalist examined the bloodstain patterns in the Sam Sheppard murder case (1955) and wrote 'Crime Investigation' (1953)?",
    options: ["August Vollmer", "Paul L. Kirk", "Calvin Goddard", "Henry C. Lee"],
    answer: 1,
    explanation: "Paul Kirk of UC Berkeley showed from blood-spatter analysis that the assailant was left-handed and that the scene did not fit the prosecution's account, which later helped clear Sheppard. Kirk championed the idea that physical evidence is a 'silent witness'."
  },
  {
    id: 67,
    question: "Eduard Piotrowski's 1895 study at the University of Kraków, in which he struck rabbits to observe the resulting blood patterns, is regarded as a pioneering work in",
    options: ["Forensic serology", "Bloodstain pattern analysis", "Forensic toxicology", "Firearm examination"],
    answer: 1,
    explanation: "Piotrowski's 'On the Origin, Shape, Direction and Distribution of Bloodstains Following Head Wounds Caused by Blows' was the first systematic experimental study of spatter. Herbert MacDonell later formalised modern BPA in the 1970s."
  },
  {
    id: 68,
    question: "A body's rectal temperature is 92.6 °F. Assuming a normal body temperature of 98.6 °F and an average cooling rate of 1.5 °F per hour, the approximate time since death is",
    options: ["About 2 hours", "About 6 hours", "About 4 hours", "About 9 hours"],
    answer: 2,
    explanation: "Temperature fall = 98.6 − 92.6 = 6 °F, and 6 ÷ 1.5 = 4 hours. This rule of thumb ignores body size, clothing, environment and the initial plateau, so methods such as Henssge's nomogram are preferred for formal estimates."
  },
  {
    id: 69,
    question: "A skull has a maximum breadth of 14.85 cm and a maximum length of 18.0 cm. On the basis of its cephalic index, it is classified as",
    options: ["Dolichocephalic", "Mesaticephalic", "Hyperbrachycephalic", "Brachycephalic"],
    answer: 3,
    explanation: "Cephalic index = breadth/length × 100 = 14.85/18 × 100 = 82.5. Indices of 80–84.9 are brachycephalic, 75–79.9 mesaticephalic and below 75 dolichocephalic. The index gives only a broad population indication, not individual identity."
  },
  {
    id: 70,
    question: "Cyanoacrylate (superglue) fuming is the preferred method for developing latent fingerprints on",
    options: ["Non-porous surfaces such as plastic, glass and metal", "Paper and cardboard", "Wet porous fabrics", "Human skin of decomposed bodies"],
    answer: 0,
    explanation: "Cyanoacrylate vapour polymerises on the moisture and amino acids of print residue, leaving white prints that can be dye-stained for contrast. Ninhydrin and DFO are used on porous paper, where residues soak into the surface."
  },
  {
    id: 71,
    question: "Alec Jeffreys discovered DNA fingerprinting in September 1984 while working at",
    options: ["University of Cambridge", "University of Oxford", "University of Leicester", "University of Edinburgh"],
    answer: 2,
    explanation: "At Leicester, Jeffreys saw on an X-ray film that multi-locus minisatellite probes gave individual-specific barcode patterns. He was knighted in 1994 for the discovery. Its first applications were an immigration dispute in 1985 and the Narborough murder inquiry."
  },
  {
    id: 72,
    question: "Who was the first person convicted of murder on the basis of DNA fingerprinting evidence, in 1988?",
    options: ["Richard Buckland", "Colin Pitchfork", "Robert Melias", "Tommie Lee Andrews"],
    answer: 1,
    explanation: "Colin Pitchfork was convicted in January 1988 of the 1983 and 1986 Narborough (Leicestershire) murders after a mass screening of about 5,000 local men, which he first evaded by sending a friend to give blood in his place. Robert Melias was the first UK person convicted of rape (1987) using DNA."
  },
  {
    id: 73,
    question: "In the Narborough murder inquiry, which suspect became the first person in the world to be cleared (exonerated) by DNA evidence?",
    options: ["Richard Buckland", "Ian Kelly", "Colin Pitchfork", "Kirk Bloodsworth"],
    answer: 0,
    explanation: "Richard Buckland, a 17-year-old who had falsely confessed to one of the murders, was cleared in 1986 when Jeffreys showed the semen profiles did not match him. Kirk Bloodsworth (1993) was the first American on death row to be exonerated by DNA."
  },
  {
    id: 74,
    question: "Who was the first person in the United States to be convicted on the basis of DNA evidence, in Florida in 1987?",
    options: ["Joseph Castro", "Gary Dotson", "Tommie Lee Andrews", "Timothy Spencer"],
    answer: 2,
    explanation: "Tommie Lee Andrews was convicted of rape in Orlando in November 1987 on DNA (RFLP) evidence. Timothy Spencer of Virginia was the first person executed after a DNA-based conviction, and the People v. Castro (1989) case raised major challenges to DNA admissibility."
  },
  {
    id: 75,
    question: "The Centre for DNA Fingerprinting and Diagnostics (CDFD), Hyderabad, set up in 1996, functions under the",
    options: ["Council of Scientific and Industrial Research", "Department of Biotechnology", "Ministry of Home Affairs", "Indian Council of Medical Research"],
    answer: 1,
    explanation: "CDFD is an autonomous institute of the Department of Biotechnology, Ministry of Science and Technology. It took over the DNA fingerprinting services that Lalji Singh had begun at CSIR's CCMB in 1988, and it also offers genetic disease diagnostics."
  },
  {
    id: 76,
    question: "In the Rajiv Gandhi assassination investigation (1991), DNA fingerprinting of remains scattered at the Sriperumbudur blast site, compared with tissue on the belt bomb, established that the bomb had been worn by",
    options: ["Nalini", "Subha", "Murugan", "The suicide bomber Dhanu"],
    answer: 3,
    explanation: "DNA profiles from the scattered remains matched tissue attached to the belt, showing that the LTTE suicide bomber Dhanu (Thenmozhi Rajaratnam) wore it, and DNA also confirmed the identity of the conspirator Sivarasan. The work is generally credited to Lalji Singh's DNA fingerprinting group at CCMB, Hyderabad, and was one of the earliest high-profile uses of DNA evidence in India. Nalini, Subha and Murugan were co-conspirators, not the bomber."
  },
  {
    id: 77,
    question: "Kary Mullis, who invented the polymerase chain reaction in 1983, was awarded the Nobel Prize in Chemistry in",
    options: ["1993", "1989", "1997", "2001"],
    answer: 0,
    explanation: "Mullis shared the 1993 Chemistry Nobel with Michael Smith, honoured for site-directed mutagenesis. PCR let forensic scientists type nanogram or even picogram amounts of DNA, which displaced RFLP from the 1990s."
  },
  {
    id: 78,
    question: "Jeffreys' original multi-locus DNA fingerprints were produced using probes that hybridised to",
    options: ["Microsatellites (STRs)", "Minisatellites (VNTRs)", "Single nucleotide polymorphisms", "Mitochondrial hypervariable regions"],
    answer: 1,
    explanation: "Jeffreys' probes 33.6 and 33.15 recognised a shared core sequence in many minisatellite (VNTR) loci, giving a barcode pattern on Southern blots. Single-locus VNTR probes followed. PCR-based STRs (microsatellites) replaced them from the mid-1990s."
  },
  {
    id: 79,
    question: "Which restriction enzyme was used in the FBI's standard RFLP-VNTR DNA typing system before the switch to STRs?",
    options: ["EcoRI", "BamHI", "HaeIII", "NotI"],
    answer: 2,
    explanation: "The FBI and most US labs digested DNA with HaeIII, a four-base cutter (GG^CC), before Southern blotting with single-locus VNTR probes. Many European labs used HinfI. RFLP needed about 50 ng or more of high-quality DNA and weeks of work."
  },
  {
    id: 80,
    question: "Approximately how much DNA is present in a single diploid human nucleated cell?",
    options: ["About 60 pg", "About 6 ng", "About 3 pg", "About 6 pg"],
    answer: 3,
    explanation: "A diploid cell holds about 6–6.6 pg of DNA, while a haploid sperm has about 3.3 pg. So 1 ng of DNA is roughly 150–160 diploid genomes, and low-template typing below about 100 pg means only around 15 cells' worth."
  },
  {
    id: 81,
    question: "The common TH01 allele designated 9.3 is an example of",
    options: ["A microvariant with an incomplete repeat unit", "A null allele caused by primer-site mutation", "A tri-allelic pattern", "A stutter artefact"],
    answer: 0,
    explanation: "TH01 9.3 has nine full AATG repeats plus a partial repeat of three bases, the result of a single-base deletion. The '.3' notation records the extra bases. It is very common in Europeans and is sized correctly against the allelic ladder."
  },
  {
    id: 82,
    question: "A paternity test gives a combined paternity index of 100. If, on the facts of the case, a prior probability of 0.1 is used instead of the usual neutral 0.5, what is the posterior probability of paternity?",
    options: ["50.0%", "99.0%", "91.7%", "99.9%"],
    answer: 2,
    explanation: "Posterior odds = CPI × prior odds = 100 × (0.1/0.9) ≈ 11.1, so W = 11.1/12.1 ≈ 91.7%. With a 0.5 prior the same CPI gives 99.0%. The probability of paternity therefore depends on the prior, which is why the CPI itself is the core measure of the genetic evidence."
  },
  {
    id: 83,
    question: "The mtDNA identification of the remains of Tsar Nicholas II became famous because it revealed",
    options: ["A Y-STR null allele", "Heteroplasmy at position 16169", "Trisomy of chromosome 21", "Chimerism from a bone-marrow transplant"],
    answer: 1,
    explanation: "Nicholas II's mtDNA showed a C/T mixture at position 16169. The same heteroplasmy was found in his brother Grand Duke Georgij, whose remains were exhumed, confirming the identification. The case made heteroplasmy a recognised factor in mtDNA interpretation."
  },
  {
    id: 84,
    question: "The human mitochondrial genome is a circular molecule of about",
    options: ["3.2 billion bp", "165,690 bp", "1,656 bp", "16,569 bp"],
    answer: 3,
    explanation: "The revised Cambridge Reference Sequence has 16,569 bp encoding 13 proteins, 22 tRNAs and 2 rRNAs, plus a control region of about 1.1 kb. 3.2 billion bp is the haploid nuclear genome."
  },
  {
    id: 85,
    question: "In forensic mtDNA analysis, the revised Cambridge Reference Sequence (rCRS) is used to",
    options: ["Report differences in a sample's sequence by position", "Calibrate the size of STR fragments", "Quantify nuclear DNA by real-time PCR", "Predict eye and hair colour"],
    answer: 0,
    explanation: "mtDNA haplotypes are written as differences from the rCRS (Andrews et al., 1999), for example 16223T or 263G. This standard notation lets labs compare results and search databases such as EMPOP."
  },
  {
    id: 86,
    question: "An STR locus has four alleles, each with a frequency of 0.25. What is the expected heterozygosity at this locus under Hardy-Weinberg equilibrium?",
    options: ["0.25", "0.50", "0.75", "0.94"],
    answer: 2,
    explanation: "Expected heterozygosity H = 1 − Σpᵢ² = 1 − 4 × (0.25)² = 1 − 0.25 = 0.75. Loci with many alleles of similar frequency have high heterozygosity and discrimination power, which is why forensic STRs such as SE33 and FGA are chosen."
  },
  {
    id: 87,
    question: "The 'Golden State Killer', Joseph James DeAngelo, was identified in 2018 mainly through",
    options: ["A direct CODIS offender hit", "AFIS fingerprint comparison", "Investigative genetic genealogy using the GEDmatch database", "Y-STR analysis of a bite mark"],
    answer: 2,
    explanation: "Investigators uploaded a crime-scene SNP profile to the public genealogy site GEDmatch, found distant relatives and built family trees to narrow the search to DeAngelo. A discarded DNA sample then confirmed the match. The case launched investigative genetic genealogy as a cold-case tool."
  },
  {
    id: 88,
    question: "Under the BNSS, 2023, which section provides for medical examination of an accused at the request of a police officer, explicitly including DNA profiling?",
    options: ["Section 51", "Section 105", "Section 176", "Section 63"],
    answer: 0,
    explanation: "BNSS Section 51 (formerly CrPC Section 53) allows a registered medical practitioner to examine an arrested person, and its explanation covers blood, semen, swabs, hair and DNA profiling. Section 52 deals with examination of a person accused of rape."
  },
  {
    id: 89,
    question: "The amelogenin sex test distinguishes X and Y chromosomes because of a 6-bp deletion located in",
    options: ["Exon 2 of the SRY gene", "Intron 1 of the X-chromosome homologue (AMELX)", "The DYS19 locus", "The mitochondrial D-loop"],
    answer: 1,
    explanation: "The amelogenin gene has copies at Xp22 and Yp11.2, and AMELX carries a 6-bp deletion in intron 1, so the X product (106 bp) is shorter than the Y product (112 bp). Rare deletions of AMELY can make a male type as female, so additional Y markers are used."
  },
  {
    id: 90,
    question: "The 'Phantom of Heilbronn' affair, revealed in 2009, became a landmark lesson in forensic DNA because the 'serial offender' profile came from",
    options: ["A pair of identical twins", "A chimeric individual", "A database coding error", "Contamination of cotton swabs at the manufacturing stage"],
    answer: 3,
    explanation: "For about 15 years, German, Austrian and French police linked dozens of crimes to one unknown woman. The DNA actually came from a female factory worker whose DNA contaminated the swabs during packaging. The case led to ISO 18385 standards for DNA-free forensic consumables."
  },
  {
    id: 91,
    question: "Karl Landsteiner received the Nobel Prize in Physiology or Medicine for discovering the human blood groups in the year",
    options: ["1901", "1952", "1940", "1930"],
    answer: 3,
    explanation: "Landsteiner described the ABO groups in 1900–01 and was awarded the Nobel Prize in 1930. His birthday, 14 June, is observed as World Blood Donor Day. He later co-discovered the MN, P and Rh systems."
  },
  {
    id: 92,
    question: "Who first proposed luminol for detecting bloodstains at crime scenes, in 1937?",
    options: ["Walter Specht", "Paul Uhlenhuth", "Leone Lattes", "Max Richter"],
    answer: 0,
    explanation: "German forensic scientist Walter Specht showed in 1937 that luminol's chemiluminescence could reveal old and cleaned bloodstains. Luminol itself had been synthesised earlier. Uhlenhuth is known for the precipitin test and Lattes for ABO grouping of stains."
  },
  {
    id: 93,
    question: "Paul Uhlenhuth's newly developed precipitin test helped convict which German carpenter, accused of murdering two boys on Rügen island in 1901, by showing that stains on his clothes were human and sheep blood, not wood dye as he claimed?",
    options: ["Peter Kürten", "Ludwig Tessnow", "Fritz Haarmann", "Henri Landru"],
    answer: 1,
    explanation: "Ludwig Tessnow, suspected of killing the Stübbe brothers on Rügen and of slaughtering sheep, said the stains were wood stain. Uhlenhuth's antiserum test showed human and sheep blood, one of the first forensic uses of species identification, and Tessnow was later executed (1904). Kürten, Haarmann and Landru were later serial killers."
  },
  {
    id: 94,
    question: "Leone Lattes is remembered in forensic serology for devising, in 1915, a method to",
    options: ["Detect spermatozoa by staining", "Identify saliva by amylase activity", "Determine the ABO group of dried bloodstains", "Distinguish menstrual from venous blood"],
    answer: 2,
    explanation: "Lattes of Turin placed dried blood crusts on slides with known A, B and O cells and watched for agglutination by the stain's antibodies. This 'Lattes crust test' was the first practical method for grouping old bloodstains."
  },
  {
    id: 95,
    question: "Individuals of which blood group are regarded as universal plasma donors?",
    options: ["O", "A", "B", "AB"],
    answer: 3,
    explanation: "Group AB plasma has neither anti-A nor anti-B, so it can be given to recipients of any ABO group. For red cells the position is reversed: O-negative is the universal red-cell donor and AB-positive the universal red-cell recipient."
  },
  {
    id: 96,
    question: "The benzidine test, once a widely used presumptive test for blood, was largely abandoned because benzidine is",
    options: ["Not sensitive enough", "A recognised carcinogen", "Too expensive", "Reactive only with fresh blood"],
    answer: 1,
    explanation: "Benzidine (Adler test, 1904) was highly sensitive but is a known human bladder carcinogen. Labs replaced it with phenolphthalin, leucomalachite green, tetramethylbenzidine (TMB) and luminol, which rely on the same peroxidase-like activity of haem."
  },
  {
    id: 97,
    question: "Seminal acid phosphatase, the basis of the most widely used presumptive test for semen, is secreted mainly by the",
    options: ["Seminal vesicles", "Testes", "Prostate gland", "Bulbourethral (Cowper's) glands"],
    answer: 2,
    explanation: "Prostatic acid phosphatase, like PSA (p30), comes from the prostate, so both are present even in semen from vasectomised or azoospermic men. Semenogelin comes mainly from the seminal vesicles, and sperm alone come from the testes."
  },
  {
    id: 98,
    question: "In the Christmas tree stain used to identify spermatozoa, the sperm heads appear",
    options: ["Red", "Green", "Blue", "Yellow"],
    answer: 0,
    explanation: "Nuclear fast red stains the nuclear material of sperm heads red, and picroindigocarmine stains the midpiece and tail green. Finding intact sperm heads is confirmatory for semen."
  },
  {
    id: 99,
    question: "Which seminal-vesicle protein forms the semen coagulum after ejaculation and is broken down by prostate-specific antigen during liquefaction?",
    options: ["Fibrinogen", "Prostatic acid phosphatase", "Semenogelin", "Spermine"],
    answer: 2,
    explanation: "Semenogelins I and II form the gel-like coagulum, and PSA (a serine protease, kallikrein-3) cleaves them within about 15–30 minutes. Semenogelin is the target of RSID-Semen and is highly specific to semen, staying detectable even without sperm."
  },
  {
    id: 100,
    question: "Teichmann's confirmatory test for blood gives which type of crystals?",
    options: ["Pink feathery pyridine haemochromogen crystals", "Brown rhombic haemin (haematin chloride) crystals", "Yellow needle-shaped spermine picrate crystals", "Dark brown choline periodide crystals"],
    answer: 1,
    explanation: "Heating a stain with glacial acetic acid and a halide salt forms brown rhombic haemin crystals, which confirms haemoglobin. Pink haemochromogen crystals are the Takayama result, and the other two are semen crystal tests (Barberio and Florence)."
  },
  {
    id: 101,
    question: "Which Rh antigen is the most immunogenic and determines whether a person is called 'Rh-positive'?",
    options: ["D", "C", "E", "c"],
    answer: 0,
    explanation: "The D antigen, coded by RHD on chromosome 1, is by far the most immunogenic Rh antigen, and people lacking it (dd) are Rh-negative. Anti-D causes the most severe haemolytic disease of the newborn, which is why anti-D prophylaxis is given."
  },
  {
    id: 102,
    question: "The intense Soret (gamma) absorption band of oxyhaemoglobin, used in spectrophotometric identification of blood, lies at about",
    options: ["280 nm", "540 nm", "415 nm", "630 nm"],
    answer: 2,
    explanation: "Haem porphyrins show a strong Soret band near 410–415 nm and weaker α and β bands at about 577 and 541 nm. Shifts in these bands distinguish oxy-, carboxy- and methaemoglobin, and 280 nm is the protein absorbance peak."
  },
  {
    id: 103,
    question: "The reagent used in the Takayama (haemochromogen) crystal test for blood contains",
    options: ["Glacial acetic acid and sodium chloride", "Pyridine, glucose and sodium hydroxide", "Picric acid", "Iodine in potassium iodide"],
    answer: 1,
    explanation: "Takayama reagent (pyridine, glucose, NaOH and water) reduces haem, and pyridine binds the iron to form pink-red pyridine haemochromogen crystals. Acetic acid with chloride is the Teichmann (haemin) reagent, picric acid is used in Barberio's test, and iodine-KI in Florence's test."
  },
  {
    id: 104,
    question: "In a 'sandwich' ELISA, such as those used to detect human proteins in forensic samples, the target antigen is",
    options: ["Bound directly to the enzyme substrate", "Detected only by its own enzymatic activity", "Competed against a labelled antigen for a single antibody", "Captured between two antibodies that recognise different epitopes"],
    answer: 3,
    explanation: "A capture antibody on the plate binds the antigen, and an enzyme-linked detection antibody then binds a second epitope. The colour formed is proportional to the antigen present. Competitive ELISA, used for small drug molecules, works differently, with the signal falling as analyte rises."
  },
  {
    id: 105,
    question: "Rosalyn Yalow received the 1977 Nobel Prize for developing, with Solomon Berson, which technique?",
    options: ["Radioimmunoassay", "Immunofluorescence", "Western blotting", "Flow cytometry"],
    answer: 0,
    explanation: "Radioimmunoassay (RIA), first used to measure insulin, uses competition between radiolabelled and unlabelled antigen for antibody. It was once a mainstay of drug screening in forensic toxicology before enzyme immunoassays replaced it."
  },
  {
    id: 106,
    question: "The genes of the human leucocyte antigen (HLA) system, once widely used in paternity testing before DNA profiling, are located on chromosome",
    options: ["9", "6", "19", "1"],
    answer: 1,
    explanation: "The major histocompatibility complex lies on the short arm of chromosome 6 (6p21.3) and is extremely polymorphic. That made HLA typing a powerful paternity tool in the 1970s–80s, until VNTR and STR typing replaced it. The ABO gene is on chromosome 9."
  },
  {
    id: 107,
    question: "In a population in Hardy-Weinberg equilibrium for the ABO system, the frequency of the O allele is 0.6. What proportion of the population is expected to be group O?",
    options: ["0.60", "0.48", "0.36", "0.18"],
    answer: 2,
    explanation: "Group O individuals are homozygous OO, so their frequency is r² = 0.6 × 0.6 = 0.36. Groups A and B include both homozygotes and heterozygotes with O (p² + 2pr and q² + 2qr)."
  },
  {
    id: 108,
    question: "The α-amylase found in human saliva, the target of saliva identification tests, is encoded by which gene?",
    options: ["AMY2A", "AMY1", "LIPF", "PRB1"],
    answer: 1,
    explanation: "Salivary amylase is coded by AMY1, whose copy number varies between people, while pancreatic amylase is coded by AMY2A/2B. Activity tests such as Phadebas cannot tell the two apart, but RSID-Saliva antibodies target the salivary form."
  },
  {
    id: 109,
    question: "A dark stain gives positive Kastle-Meyer and luminol reactions but a negative ABAcard HemaTrace result, even after dilution. What is the most appropriate inference?",
    options: ["The stain is confirmed human menstrual blood", "The stain is saliva, not blood", "The stain is probably blood of non-human origin and should be checked with a precipitin test", "The stain is semen containing haemoglobin"],
    answer: 2,
    explanation: "Positive peroxidase-type tests suggest blood, but HemaTrace detects only human (and higher primate) haemoglobin, so a negative result after ruling out the hook effect points to animal blood. A species-specific precipitin test or DNA species ID resolves the question."
  },
  {
    id: 110,
    question: "Secretors, who secrete water-soluble ABH blood-group substances in saliva, semen and other body fluids, make up approximately what proportion of most populations?",
    options: ["20%", "50%", "95%", "80%"],
    answer: 3,
    explanation: "About 80% of people carry at least one functional FUT2 (Se) allele and are secretors, so ABO grouping of saliva or semen stains is possible in most cases. The remaining 20% are non-secretors (se/se), whose fluids lack ABH antigens."
  },
  {
    id: 111,
    question: "Who is regarded as the father of modern forensic toxicology, author of 'Traité des poisons' (1814)?",
    options: ["Paracelsus", "James Marsh", "Mathieu Orfila", "Jean Servais Stas"],
    answer: 2,
    explanation: "Mathieu Orfila, a Spanish-born professor in Paris, systematised the detection of poisons in body tissues and gave expert evidence in the Marie Lafarge arsenic trial of 1840. Paracelsus is credited with the earlier principle that the dose makes the poison."
  },
  {
    id: 112,
    question: "The Marsh test, devised by James Marsh in 1836, is used to detect",
    options: ["Arsenic", "Mercury", "Cyanide", "Strychnine"],
    answer: 0,
    explanation: "In the Marsh test, zinc and acid reduce arsenic to arsine gas, which leaves a silvery-black arsenic mirror when heated. It was first used famously in the Lafarge case. The Reinsch test also detects arsenic and other heavy metals."
  },
  {
    id: 113,
    question: "The Stas-Otto process is a classical method for extracting which class of poisons from viscera?",
    options: ["Volatile poisons such as alcohols", "Metallic poisons", "Corrosive acids", "Non-volatile organic poisons such as alkaloids"],
    answer: 3,
    explanation: "Jean Servais Stas first isolated nicotine from a victim in 1851 using acidified alcohol extraction, and Otto later modified the method. It separates acidic, neutral and basic (alkaloid) drugs by pH-controlled solvent extraction. Volatile poisons are recovered by steam distillation instead."
  },
  {
    id: 114,
    question: "The term 'chromatography' was coined by the botanist who separated plant pigments on a calcium carbonate column in 1906. He was",
    options: ["Archer Martin", "Mikhail Tswett", "Richard Synge", "Arne Tiselius"],
    answer: 1,
    explanation: "Russian-Italian botanist Mikhail Tswett separated chlorophylls and carotenoids into coloured bands, hence 'colour writing'. Martin and Synge won the 1952 Chemistry Nobel for partition chromatography, which led to GC and paper chromatography."
  },
  {
    id: 115,
    question: "Archer Martin and Richard Synge received the 1952 Nobel Prize in Chemistry for the invention of",
    options: ["Mass spectrometry", "Gel electrophoresis", "Partition chromatography", "Infrared spectroscopy"],
    answer: 2,
    explanation: "Their liquid-liquid partition chromatography (1941) introduced the theoretical plate concept and paved the way for paper chromatography. Martin and James then developed gas-liquid chromatography in 1952, now the backbone of forensic drug and alcohol analysis."
  },
  {
    id: 116,
    question: "'Brown sugar', a drug commonly seized in India, is a crude, impure form of",
    options: ["Cocaine", "Methamphetamine", "Heroin", "Mandrax (methaqualone)"],
    answer: 2,
    explanation: "Brown sugar or 'smack' is low-grade diacetylmorphine, often mixed with caffeine, paracetamol, chalk or strychnine, and is usually smoked ('chasing the dragon'). As heroin, it is a manufactured drug under the NDPS Act."
  },
  {
    id: 117,
    question: "Lysergic acid diethylamide (LSD), synthesised by Albert Hofmann in 1938, is derived from alkaloids of",
    options: ["Claviceps purpurea (ergot fungus)", "Papaver somniferum", "Psilocybe cubensis", "Datura stramonium"],
    answer: 0,
    explanation: "LSD is made semi-synthetically from lysergic acid, obtained from ergot alkaloids of Claviceps purpurea, a fungus of rye. Hofmann discovered its hallucinogenic effect in 1943, and it is active in microgram doses, so it is seized as blotter paper."
  },
  {
    id: 118,
    question: "Under the NDPS Act notification on small and commercial quantities, the commercial quantity of cocaine is",
    options: ["2 g", "10 g", "1 kg", "100 g"],
    answer: 3,
    explanation: "For cocaine, the small quantity is 2 g and the commercial quantity 100 g. For comparison, ganja is 1 kg and 20 kg, and heroin 5 g and 250 g. The quantity seized decides the punishment band, so accurate weighing and purity analysis by the FSL are crucial."
  },
  {
    id: 119,
    question: "A 60 kg woman (Widmark factor r = 0.55) has a peak blood alcohol concentration of 0.8 g/kg. Using A = C × r × W and ignoring elimination, how much ethanol has she absorbed?",
    options: ["14.5 g", "26.4 g", "48.0 g", "33.0 g"],
    answer: 1,
    explanation: "A = 0.8 × 0.55 × 60 = 26.4 g of ethanol, roughly two to three standard drinks. Women have a lower r because of a higher proportion of body fat, so the same intake gives a higher BAC than in men."
  },
  {
    id: 120,
    question: "In the liver, ethanol is metabolised mainly by which enzyme to acetaldehyde?",
    options: ["Alcohol dehydrogenase", "Monoamine oxidase", "Catalase", "Acetylcholinesterase"],
    answer: 0,
    explanation: "Cytosolic alcohol dehydrogenase (ADH) oxidises ethanol to acetaldehyde, which aldehyde dehydrogenase converts to acetate. CYP2E1 (MEOS) and catalase are minor routes. Because ADH is saturated at low concentrations, ethanol is eliminated at a roughly constant rate (zero-order kinetics)."
  },
  {
    id: 121,
    question: "Which technique is regarded as the 'gold standard' for confirming the identity of drugs in forensic and toxicological samples?",
    options: ["Colour (spot) tests", "Gas chromatography-mass spectrometry", "Thin-layer chromatography", "UV-visible spectrophotometry"],
    answer: 1,
    explanation: "GC-MS combines high-resolution separation (retention time) with a mass-spectral fingerprint that can be matched to libraries such as NIST, giving specific identification. Colour tests, TLC and UV are screening methods only."
  },
  {
    id: 122,
    question: "Raman spectroscopy, increasingly used for non-destructive identification of drugs and body fluids, is based on",
    options: ["Absorption of infrared radiation by bonds", "Emission from thermally excited atoms", "Inelastic scattering of monochromatic light", "Nuclear spin resonance"],
    answer: 2,
    explanation: "When laser light scatters off molecules, a tiny fraction shifts in energy by vibrational quanta (the Raman effect, discovered by C.V. Raman in 1928, Nobel 1930). The spectrum identifies substances through glass or plastic packaging. IR absorption is the complementary technique."
  },
  {
    id: 123,
    question: "The first electron microscope was built in 1931 by",
    options: ["Ernst Ruska and Max Knoll", "Zacharias Janssen", "Robert Hooke", "Frits Zernike"],
    answer: 0,
    explanation: "Knoll and Ruska built the first transmission electron microscope in Berlin, and Ruska received the 1986 Physics Nobel. Zernike invented phase-contrast microscopy (Nobel 1953). Electron microscopy is used forensically for GSR, diatoms and hair or fibre surfaces."
  },
  {
    id: 124,
    question: "The practical limit of resolution of a good light microscope using visible light is about",
    options: ["0.2 nm", "2 µm", "20 µm", "0.2 µm"],
    answer: 3,
    explanation: "Abbe's diffraction limit, d ≈ λ/(2 NA), gives about 0.2 µm (200 nm) with green light and an oil-immersion objective. Electron microscopes, using far shorter wavelengths, resolve below a nanometre."
  },
  {
    id: 125,
    question: "Who received the 1948 Nobel Prize in Chemistry for pioneering electrophoresis (the moving-boundary method) and is called the father of electrophoresis?",
    options: ["Oliver Smithies", "Arne Tiselius", "Ulrich Laemmli", "Edwin Southern"],
    answer: 1,
    explanation: "Arne Tiselius separated serum proteins into albumin and α, β and γ globulins by moving-boundary electrophoresis (1937). Smithies introduced starch gels (1955), Laemmli the SDS-PAGE buffer system (1970), and Southern the blotting method (1975)."
  },
  {
    id: 126,
    question: "The stereomicroscope is preferred for the initial examination of trace evidence because it",
    options: ["Provides a three-dimensional image at low magnification with a long working distance", "Offers the highest resolution of any optical microscope", "Uses polarised light to measure birefringence", "Gives elemental composition of particles"],
    answer: 0,
    explanation: "Two separate optical paths give depth perception at roughly 5–50× with room to manipulate items, which makes it ideal for searching clothing for hairs, fibres, glass and stains. Polarising microscopes and SEM-EDX are used for later, more specific examination."
  },
  {
    id: 127,
    question: "The principle that 'all things are poison and nothing is without poison; the dose alone makes a thing not a poison' is attributed to",
    options: ["Mathieu Orfila", "Hippocrates", "Paracelsus", "Robert Christison"],
    answer: 2,
    explanation: "The 16th-century Swiss physician Paracelsus stated the dose-response principle that underlies toxicology. This is why toxicologists interpret drug concentrations against therapeutic, toxic and fatal ranges rather than mere presence."
  },
  {
    id: 128,
    question: "Seeds of which plant are notoriously used by highway robbers and on trains in India to stupefy travellers before robbing them?",
    options: ["Abrus precatorius", "Ricinus communis", "Strychnos nux-vomica", "Datura"],
    answer: 3,
    explanation: "Datura seeds contain the anticholinergic alkaloids hyoscine, hyoscyamine and atropine, which cause delirium and amnesia, summed up as 'dry as a bone, red as a beet, blind as a bat, mad as a hatter'. They are mixed into food, tea or sweets. Datura seeds are kidney-shaped and pitted, unlike the smooth chilli seeds they resemble."
  },
  {
    id: 129,
    question: "Which plant poison, known as 'mitha zahar' or 'bish', is one of the most toxic plants in India and causes tingling, numbness and fatal arrhythmias?",
    options: ["Oleander (Nerium indicum)", "Calotropis", "Aconite (Aconitum ferox)", "Cleistanthus collinus"],
    answer: 2,
    explanation: "Aconitine, from the roots of Aconitum ferox, opens voltage-gated sodium channels, causing tingling and numbness of the mouth followed by ventricular arrhythmias. As little as about 1 g of root can be fatal. Oleander contains cardiac glycosides instead."
  },
  {
    id: 130,
    question: "The Bhopal Gas Tragedy of 2–3 December 1984 at the Union Carbide pesticide plant was caused by the leak of",
    options: ["Phosgene", "Chlorine", "Hydrogen cyanide", "Methyl isocyanate"],
    answer: 3,
    explanation: "About 40 tonnes of methyl isocyanate (MIC), an intermediate in making the pesticide carbaryl (Sevin), escaped from tank E610 after water entered it. It is the world's worst industrial disaster, and the debate over possible cyanide involvement led to sodium thiosulphate trials."
  },
  {
    id: 131,
    question: "Which institution was the first in India to provide DNA fingerprinting services, beginning in 1988?",
    options: ["CFSL, Kolkata", "CCMB, Hyderabad", "NICFS, New Delhi", "AIIMS, New Delhi"],
    answer: 1,
    explanation: "The Centre for Cellular and Molecular Biology (CSIR), Hyderabad, under Lalji Singh, began DNA fingerprinting in 1988. The service later moved to the Centre for DNA Fingerprinting and Diagnostics (CDFD), set up in 1996. India became the third country after the UK and USA with its own DNA fingerprinting probe."
  },
  {
    id: 132,
    question: "In which city of Madhya Pradesh is a Central Forensic Science Laboratory (CFSL) of the Government of India located?",
    options: ["Indore", "Jabalpur", "Gwalior", "Bhopal"],
    answer: 3,
    explanation: "CFSL Bhopal (2011) is one of the seven CFSLs under the Directorate of Forensic Science Services (MHA), alongside Kolkata, Hyderabad, Chandigarh, Pune, Guwahati and New Delhi, and it is the DFSS centre of excellence for physical sciences. The state's own main FSL is at Sagar, with regional FSLs at cities such as Indore, Gwalior and Jabalpur."
  },
  {
    id: 133,
    question: "The Central Forensic Science Laboratories (CFSLs) of India function under the administrative control of the",
    options: ["Directorate of Forensic Science Services, Ministry of Home Affairs", "Department of Biotechnology", "Central Bureau of Investigation", "Ministry of Health and Family Welfare"],
    answer: 0,
    explanation: "The DFSS, carved out of BPR&D in 2002 under the MHA, runs seven CFSLs: Kolkata, Hyderabad, Chandigarh, Pune, Bhopal, Guwahati and New Delhi. CFSL New Delhi was formerly under the CBI but was taken over by the DFSS in 2022. State FSLs work under state Home or Police departments."
  },
  {
    id: 134,
    question: "Which organisation publishes the annual 'Crime in India' report, the primary source of national crime statistics?",
    options: ["Bureau of Police Research and Development", "Intelligence Bureau", "National Crime Records Bureau", "National Investigation Agency"],
    answer: 2,
    explanation: "The NCRB, set up in 1986 under the MHA and based in New Delhi, compiles 'Crime in India', 'Accidental Deaths and Suicides in India' and 'Prison Statistics India'. It also runs CCTNS and the national fingerprint database NAFIS."
  },
  {
    id: 135,
    question: "The Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Nyaya Sanhita (BNS) and Bharatiya Sakshya Adhiniyam (BSA) came into force on",
    options: ["1 July 2024", "1 January 2024", "26 January 2024", "15 August 2024"],
    answer: 0,
    explanation: "The three criminal laws, passed in December 2023, replaced the CrPC, IPC and Indian Evidence Act from 1 July 2024. They increase the role of forensics, for example through the forensic expert's crime-scene visit for offences punishable with seven years or more under BNSS Section 176(3), which applies from a date each State Government notifies within five years."
  },
  {
    id: 136,
    question: "Under the Bharatiya Sakshya Adhiniyam, 2023, the opinion of experts, including forensic scientists, is relevant under",
    options: ["Section 45", "Section 63", "Section 39", "Section 176"],
    answer: 2,
    explanation: "BSA Section 39 corresponds to the old Section 45 of the Indian Evidence Act and covers opinions of persons specially skilled in science, art, handwriting or finger impressions. It also explicitly adds the Examiner of Electronic Evidence."
  },
  {
    id: 137,
    question: "The unusual repeated sequences later named CRISPR were first reported in 1987 by Yoshizumi Ishino and colleagues in the genome of",
    options: ["Streptococcus pyogenes", "Escherichia coli", "Haloferax mediterranei", "Streptococcus thermophilus"],
    answer: 1,
    explanation: "Ishino's group noticed 29-bp repeats near the iap gene of E. coli. Francisco Mojica studied them in the archaeon Haloferax, and the acronym CRISPR was coined in 2002 by Jansen and Mojica. S. thermophilus experiments in 2007 proved their role in bacterial immunity."
  },
  {
    id: 138,
    question: "In 2018, He Jiankui announced the birth of the first genome-edited babies. Which gene did he target with CRISPR-Cas9?",
    options: ["CFTR", "HBB", "CCR5", "BRCA1"],
    answer: 2,
    explanation: "He disrupted CCR5, the HIV co-receptor, in embryos to try to confer resistance to HIV, imitating the natural Δ32 deletion. The experiment was widely condemned as unethical and he was jailed in China. The case prompted calls for a moratorium on germline editing."
  },
  {
    id: 139,
    question: "Casgevy (exagamglogene autotemcel), the world's first approved CRISPR-based therapy (UK, November 2023), treats",
    options: ["Sickle cell disease and β-thalassaemia", "Cystic fibrosis", "Duchenne muscular dystrophy", "Haemophilia A"],
    answer: 0,
    explanation: "Casgevy edits a patient's blood stem cells ex vivo to disrupt the BCL11A erythroid enhancer, reactivating foetal haemoglobin. It was approved for sickle cell disease and transfusion-dependent β-thalassaemia. India's National Sickle Cell Anaemia Elimination Mission was launched from Shahdol, MP, in 2023."
  },
  {
    id: 140,
    question: "The International Nucleotide Sequence Database Collaboration (INSDC), which exchanges sequence data daily, consists of",
    options: ["GenBank, UniProt and PDB", "CODIS, EMPOP and YHRD", "Ensembl, KEGG and Pfam", "GenBank, ENA and DDBJ"],
    answer: 3,
    explanation: "GenBank (NCBI, USA), the European Nucleotide Archive (EMBL-EBI, UK) and the DNA Data Bank of Japan synchronise their records, so a sequence submitted to one appears in all three. UniProt and PDB are protein databases, and CODIS, EMPOP and YHRD are forensic databases."
  },
  {
    id: 141,
    question: "The first truly complete, gapless (telomere-to-telomere) sequence of a human genome was published by the T2T Consortium in",
    options: ["2001", "2003", "2022", "2013"],
    answer: 2,
    explanation: "The T2T-CHM13 assembly (Science, 2022) filled the roughly 8% of the genome left unresolved by the Human Genome Project, which was declared complete in 2003. The new regions included centromeres and segmental duplications. Draft genomes were published in 2001."
  },
  {
    id: 142,
    question: "In bottom-up (shotgun) proteomics, proteins are usually digested before LC-MS/MS with which enzyme, which cleaves on the C-terminal side of lysine and arginine?",
    options: ["Trypsin", "Pepsin", "Proteinase K", "DNase I"],
    answer: 0,
    explanation: "Trypsin's predictable cleavage gives peptides of a good size, each with a basic C-terminal residue that ionises well in positive-mode ESI. The measured peptide masses and fragments are then searched against protein databases. Proteinase K cuts non-specifically and is used in DNA extraction."
  },
  {
    id: 143,
    question: "Koichi Tanaka shared the 2002 Nobel Prize in Chemistry with John Fenn for developing soft ionisation methods for mass spectrometry of biological macromolecules. Tanaka's contribution was",
    options: ["Electrospray ionisation", "Electron ionisation", "Inductively coupled plasma ionisation", "Soft laser desorption, the forerunner of MALDI"],
    answer: 3,
    explanation: "Tanaka showed that a laser with a fine metal powder and glycerol matrix could ionise intact proteins, the basis of MALDI. Fenn developed electrospray ionisation. Together these methods made mass spectrometry of proteins, and hence proteomics, possible."
  },
  {
    id: 144,
    question: "AlphaFold, the AI system whose developers Demis Hassabis and John Jumper shared the 2024 Nobel Prize in Chemistry, is used to",
    options: ["Assemble genome sequences", "Predict three-dimensional protein structures from amino acid sequences", "Interpret STR mixture profiles", "Identify drugs from mass spectra"],
    answer: 1,
    explanation: "AlphaFold2 (DeepMind) predicts protein folds with near-experimental accuracy, and its database holds over 200 million predicted structures. The 2024 Nobel was shared with David Baker for computational protein design."
  },
  {
    id: 145,
    question: "The 'double-swab technique', in which a moistened swab is followed by a dry swab, is recommended for collecting",
    options: ["Saliva from skin, for example around bite marks", "Blood from a fresh pool", "Gunshot residue from hands", "Hair from clothing"],
    answer: 0,
    explanation: "Sweet and colleagues (1997) showed that a wet swab rehydrates dried saliva and cells and a dry swab then collects the remaining moisture, maximising DNA recovery from skin. Both swabs are air-dried and submitted together."
  },
  {
    id: 146,
    question: "For reference comparison in a case involving questioned scalp hair, about how many full-length hairs are usually collected from different areas of the scalp?",
    options: ["About 5", "Only one", "About 500", "About 50"],
    answer: 3,
    explanation: "Standard guidance (for example Saferstein, FBI) recommends about 50 hairs, pulled and combed from different scalp regions, because hair varies across the head. Pulled hairs also give roots for nuclear DNA. Pubic standards of about 24 hairs are taken in sexual assault cases."
  },
  {
    id: 147,
    question: "In INTERPOL's Disaster Victim Identification (DVI) protocol, ante-mortem data are recorded on forms of which colour?",
    options: ["Pink", "Yellow", "Green", "Blue"],
    answer: 1,
    explanation: "Ante-mortem (missing person) data go on yellow forms and post-mortem (body) data on pink forms. The two are reconciled using primary identifiers (fingerprints, DNA, dental records) and secondary ones (medical, property). The protocol was used after the 2004 tsunami."
  },
  {
    id: 148,
    question: "In a suspected poisoning death in India, viscera are conventionally sent to the FSL in how many jars containing preservative, along with a sample of the preservative itself?",
    options: ["Two", "Five", "Three", "Seven"],
    answer: 2,
    explanation: "Standard practice (Modi, Reddy) is three jars: stomach with contents and the small intestine with contents; portions of liver, spleen and kidneys; and blood (with urine as required). A control sample of the saturated salt or spirit preservative is also sent."
  },
  {
    id: 149,
    question: "BLAST, the most widely used tool for searching sequence databases, was developed by Altschul and colleagues in 1990 at",
    options: ["NCBI", "EMBL-EBI", "Sanger Institute", "Broad Institute"],
    answer: 0,
    explanation: "Stephen Altschul, Warren Gish, Webb Miller, Eugene Myers and David Lipman published BLAST in 1990 at NCBI. Forensic biologists use it to identify species from cyt b or COI sequences and to check primer specificity."
  },
  {
    id: 150,
    question: "Accreditation of Indian forensic laboratories to ISO/IEC 17025 is granted by",
    options: ["BIS", "NABL", "NABH", "ICMR"],
    answer: 1,
    explanation: "The National Accreditation Board for Testing and Calibration Laboratories (NABL), a constituent board of the Quality Council of India, accredits testing labs, including FSLs, to ISO/IEC 17025. NABH accredits hospitals, and BIS sets national product standards."
  }
];

export default questions;

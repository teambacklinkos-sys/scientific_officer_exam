const questions = [
  {
    id: 1,
    question: "From November 2025, the monthly assistance paid to each beneficiary woman under Madhya Pradesh's Mukhyamantri Ladli Behna Yojana was raised to:",
    options: ["₹1,250", "₹1,000", "₹1,500", "₹3,000"],
    answer: 2,
    explanation: "The MP cabinet approved raising the amount from ₹1,250 to ₹1,500 a month on 10 November 2025, and CM Mohan Yadav transferred the first enhanced instalment from Seoni on 12 November 2025 to about 1.26 crore women. The scheme began at ₹1,000 in 2023, and the government has said it aims to reach ₹3,000 by 2028."
  },
  {
    id: 2,
    question: "In which year was the Mukhyamantri Ladli Behna Yojana launched in Madhya Pradesh?",
    options: ["2023", "2018", "2007", "2020"],
    answer: 0,
    explanation: "Ladli Behna Yojana was launched in 2023 under CM Shivraj Singh Chouhan, and the first instalment of ₹1,000 was credited on 10 June 2023 from Jabalpur. Benefits go by Direct Benefit Transfer into women's Aadhaar-linked bank accounts. The year 2007 is when the separate Ladli Laxmi Yojana for girl children began."
  },
  {
    id: 3,
    question: "Under the Ladli Behna Yojana, eligible women must belong to which age group?",
    options: ["21 to 60 years", "18 to 60 years", "23 to 65 years", "25 to 60 years"],
    answer: 0,
    explanation: "The scheme covers resident married women (including widows, divorced and abandoned women) aged 21 to 60 years. The lower age limit was first set at 23 and was later lowered to 21. Families paying income tax or with annual income above ₹2.5 lakh are excluded."
  },
  {
    id: 4,
    question: "Madhya Pradesh's Ladli Laxmi Yojana, which aims to improve the sex ratio and girls' education and was later copied by several states, was launched in:",
    options: ["2011", "2007", "2015", "2003"],
    answer: 1,
    explanation: "Ladli Laxmi Yojana was launched on 1 April 2007. The state promises a girl staged payments: scholarships at key school stages and a lump-sum final payment at age 21. Its 2.0 version (2022) added support for higher education."
  },
  {
    id: 5,
    question: "A girl registered under the Ladli Laxmi Yojana gets married at 17. What happens to her final lump-sum payment due at age 21?",
    options: ["It is paid at age 18 instead", "It is paid to her husband", "She loses eligibility for the final payment", "It is halved but still paid"],
    answer: 2,
    explanation: "The final payment at 21 depends on the girl not marrying before 18 and having appeared in the Class 12 examination. Marriage before 18 makes her ineligible. This condition was written in to discourage child marriage."
  },
  {
    id: 6,
    question: "Madhya Pradesh declared 2026 a year dedicated to which theme, formally launched by CM Mohan Yadav with a tractor rally in Bhopal on 11 January 2026?",
    options: ["Year of Krishak (Farmer) Welfare", "Year of Women Empowerment", "Year of Industry and Employment", "Year of Tourism"],
    answer: 0,
    explanation: "2026 is \"Krishak Kalyan Varsh\" (also called Kisan Kalyan Varsh) in MP, with programmes across 16 departments covering agriculture, animal husbandry, fisheries, horticulture and cooperatives. The previous year, 2025, had been observed as the Year of Industry and Employment."
  },
  {
    id: 7,
    question: "Madhya Pradesh celebrated its 70th Foundation Day from 1 to 3 November 2025 in Bhopal under what title?",
    options: ["Samriddh Madhya Pradesh", "Swarnim Madhya Pradesh", "Atmanirbhar Madhya Pradesh", "Abhyudaya Madhya Pradesh"],
    answer: 3,
    explanation: "The three-day celebration at Lal Parade Ground, Bhopal, was titled \"Abhyudaya Madhya Pradesh\" and opened with a 2,000-drone show. CM Mohan Yadav also released the \"Viksit Madhya Pradesh @2047\" vision document. MP was formed on 1 November 1956 under the States Reorganisation Act."
  },
  {
    id: 8,
    question: "What was the total outlay of Madhya Pradesh's budget for 2026-27, presented by Deputy CM and Finance Minister Jagdish Devda on 18 February 2026?",
    options: ["About ₹3.65 lakh crore", "About ₹5.12 lakh crore", "About ₹4.38 lakh crore", "About ₹4.21 lakh crore"],
    answer: 2,
    explanation: "The 2026-27 budget outlay was ₹4,38,317 crore, with no new taxes. About ₹1.27 lakh crore was earmarked for women-centric schemes. The previous year's budget (2025-26) was the first MP budget to cross ₹4 lakh crore."
  },
  {
    id: 9,
    question: "In January 2026 the Madhya Pradesh cabinet approved the SpaceTech Policy-2026. It proposes a dedicated R&D centre for astrophysics and space sciences in which city, historically linked to Indian astronomy?",
    options: ["Indore", "Gwalior", "Jabalpur", "Ujjain"],
    answer: 3,
    explanation: "The SpaceTech Policy-2026, approved on 13 January 2026 at MP's first paperless e-cabinet meeting, targets about ₹1,000 crore of investment and 8,000 jobs. It proposes an R&D centre at Ujjain for astrophysics and space sciences. Ujjain was the prime meridian of ancient Indian astronomy and has the Jantar Mantar (Vedh Shala) built by Sawai Jai Singh II."
  },
  {
    id: 10,
    question: "The Bhopal Metro was formally inaugurated on 20 December 2025, and public commercial service began the next day. Its first (priority) corridor on the Orange Line runs between:",
    options: ["Bhadbhada and Ratnagiri", "Karond and Bhojpur", "Subhash Nagar and AIIMS", "Habibganj and Mandideep"],
    answer: 2,
    explanation: "The roughly 7 km priority corridor of the Orange Line runs from Subhash Nagar to AIIMS Bhopal with eight elevated stations. It was inaugurated by Union Minister Manohar Lal Khattar and CM Mohan Yadav. Indore Metro's priority corridor had opened earlier, in May 2025."
  },
  {
    id: 11,
    question: "On 28 February 2026, a batch of cheetahs arrived at Kuno National Park under Project Cheetah, taking India's cheetah count to 48. From which country were they brought?",
    options: ["Namibia", "Botswana", "South Africa", "Kenya"],
    answer: 1,
    explanation: "Nine cheetahs (six females and three males) were airlifted from Botswana to Kuno in February 2026. The project's earlier batches came from Namibia (September 2022) and South Africa (February 2023). Kuno National Park is in Sheopur district."
  },
  {
    id: 12,
    question: "On 7 October 2026 CM Mohan Yadav released two cheetahs into which protected area, making it Madhya Pradesh's third cheetah habitat after Kuno and Gandhi Sagar?",
    options: ["Ratapani Tiger Reserve", "Madhav Tiger Reserve", "Veerangana Durgavati Tiger Reserve", "Panna Tiger Reserve"],
    answer: 2,
    explanation: "Veerangana Durgavati Tiger Reserve (the Nauradehi landscape), spread over Sagar, Damoh and Narsinghpur districts, became MP's third cheetah home in October 2026. A soft-release enclosure (boma) of about 439 hectares was built there. It is the largest tiger reserve in MP by area."
  },
  {
    id: 13,
    question: "Gandhi Sagar Wildlife Sanctuary, which became India's second cheetah habitat in April 2025, lies in which districts of Madhya Pradesh?",
    options: ["Mandsaur and Neemuch", "Sheopur and Shivpuri", "Raisen and Sehore", "Ratlam and Jhabua"],
    answer: 0,
    explanation: "Gandhi Sagar Wildlife Sanctuary lies on the Chambal around the Gandhi Sagar reservoir, in Mandsaur and Neemuch districts on the Rajasthan border. Cheetahs were moved there from Kuno in April 2025. Sheopur district holds Kuno National Park."
  },
  {
    id: 14,
    question: "Madhav National Park, notified as Madhya Pradesh's ninth tiger reserve (and India's 58th) in March 2025, is located in which district?",
    options: ["Morena", "Datia", "Guna", "Shivpuri"],
    answer: 3,
    explanation: "Madhav Tiger Reserve is in Shivpuri district in the Gwalior-Chambal region. With it MP has nine tiger reserves, the most of any state, and the state also had the most tigers (785) in the 2022 All India Tiger Estimation. Ratapani (2024) was the eighth and Veerangana Durgavati (2023) the seventh."
  },
  {
    id: 15,
    question: "In September 2026, four Madhya Pradesh heritage sites were added to India's Tentative List for UNESCO World Heritage. Which of the following was among them?",
    options: ["Bagh Caves", "Mandu", "Orchha", "Bhedaghat–Lameta Ghat"],
    answer: 0,
    explanation: "The four MP additions in September 2026 were the Bagh Cave paintings (Dhar), Udayagiri Caves (Vidisha), Ginnorgarh Fort and a group of Chambal valley temples. Mandu, Orchha and Bhedaghat–Lameta Ghat were already on the Tentative List. A Tentative List entry is only the first step towards World Heritage inscription."
  },
  {
    id: 16,
    question: "After the September 2026 additions, how many Madhya Pradesh sites are on India's UNESCO Tentative List?",
    options: ["15", "11", "19", "24"],
    answer: 2,
    explanation: "The four new entries took MP's count on the Tentative List from 15 to 19, out of 78 entries for India. MP also has three inscribed World Heritage Sites: Khajuraho (1986), Sanchi (1989) and Bhimbetka (2003)."
  },
  {
    id: 17,
    question: "\"Khooni Bhandara\", placed on UNESCO's Tentative List in March 2024, is a Mughal-era underground water supply system located in:",
    options: ["Burhanpur", "Mandu", "Gwalior", "Dhar"],
    answer: 0,
    explanation: "Khooni Bhandara (Kundi Bhandara) in Burhanpur is a 17th-century system of underground channels and wells that carried groundwater to the city. It was one of six MP sites added in March 2024, along with Gwalior Fort, Bhojeshwar Mahadev Temple (Bhojpur), the Chausath Yogini temples, the Gond monuments of Ramnagar (Mandla) and the Chambal valley rock-art sites."
  },
  {
    id: 18,
    question: "The Khajuraho Group of Monuments, a UNESCO World Heritage Site since 1986, was built mainly under which dynasty?",
    options: ["Paramara", "Pratihara", "Kalachuri", "Chandela"],
    answer: 3,
    explanation: "The Chandela rulers built the Khajuraho temples in Chhatarpur district between about 950 and 1050 CE. The temples are in the Nagara style and include Hindu and Jain shrines, the Kandariya Mahadeva temple being the largest. The Paramaras ruled Malwa from Dhar."
  },
  {
    id: 19,
    question: "The Great Stupa at Sanchi, a UNESCO World Heritage Site since 1989, was originally commissioned by which ruler, and in which district does it lie?",
    options: ["Ashoka; Raisen district", "Kanishka; Vidisha district", "Pushyamitra Shunga; Sagar district", "Harshavardhana; Bhopal district"],
    answer: 0,
    explanation: "The Mauryan emperor Ashoka commissioned the original brick stupa at Sanchi in the 3rd century BCE. It was enlarged under the Shungas, and the carved toranas were added under the Satavahanas. Sanchi lies in Raisen district near Vidisha."
  },
  {
    id: 20,
    question: "The prehistoric rock shelters of Bhimbetka (UNESCO World Heritage Site, 2003) were discovered in 1957 by which archaeologist?",
    options: ["V.S. Wakankar", "H.D. Sankalia", "Mortimer Wheeler", "B.B. Lal"],
    answer: 0,
    explanation: "Vishnu Shridhar Wakankar identified the Bhimbetka shelters in 1957. They lie in the Vindhyan foothills in Raisen district, within the Ratapani forest, and their paintings span from the Mesolithic to historic periods. Wakankar was awarded the Padma Shri in 1975."
  },
  {
    id: 21,
    question: "Mahakaleshwar at Ujjain is unique among the twelve jyotirlingas because it is:",
    options: ["the only jyotirlinga located on an island", "the only jyotirlinga situated in a cave", "the only jyotirlinga made of crystal", "the only south-facing (Dakshinamukhi) jyotirlinga"],
    answer: 3,
    explanation: "Mahakaleshwar is the only Dakshinamukhi (south-facing) jyotirlinga and is famous for the pre-dawn Bhasma Aarti. It stands near the Shipra river in Ujjain. Omkareshwar, the other MP jyotirlinga, is the one on an island in the Narmada."
  },
  {
    id: 22,
    question: "Omkareshwar jyotirlinga is situated on Mandhata island in the Narmada river. In which district of Madhya Pradesh is it?",
    options: ["Khandwa", "Dewas", "Khargone", "Narmadapuram"],
    answer: 0,
    explanation: "Omkareshwar is in Khandwa district, and Mandhata island is said to be shaped like the sacred symbol \"Om\". It is one of MP's two jyotirlingas, the other being Mahakaleshwar in Ujjain. The 108-ft \"Statue of Oneness\" of Adi Shankaracharya stands on the same island."
  },
  {
    id: 23,
    question: "The 108-ft \"Statue of Oneness\" (Ekatma ki Pratima), unveiled in September 2023 at Omkareshwar, depicts:",
    options: ["Raja Bhoj", "Adi Shankaracharya", "Swami Vivekananda", "Maharshi Valmiki"],
    answer: 1,
    explanation: "The statue shows Adi Shankaracharya as a boy and is the centrepiece of the Ekatma Dham project. Tradition says Shankara came to Omkareshwar to study under his guru Govinda Bhagavatpada. The project promotes Advaita Vedanta."
  },
  {
    id: 24,
    question: "The Simhastha Kumbh at Ujjain, next due in 2028, gets its name because it is held when the planet Jupiter (Brihaspati) is in which zodiac sign?",
    options: ["Leo (Simha)", "Aries (Mesha)", "Aquarius (Kumbha)", "Capricorn (Makara)"],
    answer: 0,
    explanation: "\"Simhastha\" means Jupiter being in Simha (Leo). Ujjain's Kumbh is held every 12 years when Jupiter is in Leo. The government expects crores of devotees in 2028 and has approved large infrastructure works in Ujjain and nearby districts."
  },
  {
    id: 25,
    question: "Of the four Kumbh Mela cities, Ujjain is the only one on which river, along whose banks new ghats are being built for Simhastha 2028?",
    options: ["Shipra (Kshipra)", "Narmada", "Godavari", "Chambal"],
    answer: 0,
    explanation: "Ujjain lies on the Shipra (Kshipra). The other Kumbh sites are Prayagraj (Ganga–Yamuna–Saraswati confluence), Haridwar (Ganga) and Nashik (Godavari). In December 2024 the MP cabinet approved about ₹779 crore for a 29-km stretch of ghats and a pathway along the Kshipra for Simhastha 2028."
  },
  {
    id: 26,
    question: "In which year was the last Simhastha before 2028 held at Ujjain?",
    options: ["2010", "2013", "2016", "2019"],
    answer: 2,
    explanation: "The previous Ujjain Simhastha was held in April–May 2016, and the 12-year cycle brings the next one in 2028. The 2025 Maha Kumbh was at Prayagraj and the 2027 Kumbh is due at Nashik. A cabinet committee chaired by the CM monitors Simhastha 2028 preparations."
  },
  {
    id: 27,
    question: "Kranti Goud, the fast bowler in India's 2025 Women's World Cup-winning team who received ₹1 crore from the MP government, belongs to which district of Madhya Pradesh?",
    options: ["Shahdol", "Sagar", "Rewa", "Chhatarpur"],
    answer: 3,
    explanation: "Kranti Goud is from Ghuwara village in Chhatarpur district in Bundelkhand. CM Mohan Yadav announced the ₹1 crore award on 3 November 2025, the day after the final, and also announced a cricket stadium for Chhatarpur."
  },
  {
    id: 28,
    question: "The Daudhan dam of the Ken–Betwa river link project, whose foundation stone PM Modi laid at Khajuraho on 25 December 2024, is located within which protected area?",
    options: ["Bandhavgarh Tiger Reserve", "Panna Tiger Reserve", "Sanjay-Dubri Tiger Reserve", "Ratapani Tiger Reserve"],
    answer: 1,
    explanation: "Daudhan dam is being built on the Ken river in Panna and Chhatarpur districts, inside Panna Tiger Reserve. The project is India's first river-link project under the National Perspective Plan, meant to supply irrigation and drinking water to Bundelkhand in MP and UP. Its estimated cost is about ₹44,605 crore."
  },
  {
    id: 29,
    question: "India's first PM MITRA (Mega Integrated Textile Region and Apparel) Park, whose foundation stone was laid on 17 September 2025, is located at Bhainsola in which district?",
    options: ["Indore", "Dhar", "Khargone", "Ratlam"],
    answer: 1,
    explanation: "The PM MITRA Park at Bhainsola (Dhar district) covers about 2,158 acres and was the first of the PM MITRA parks to have its foundation stone laid. It is one of seven PM MITRA parks sanctioned nationally. The region's cotton belt (Nimar–Malwa) makes it suitable for a farm-to-fashion textile chain."
  },
  {
    id: 30,
    question: "In 2023, which Madhya Pradesh city was included in the UNESCO Creative Cities Network in the field of music?",
    options: ["Indore", "Bhopal", "Gwalior", "Ujjain"],
    answer: 2,
    explanation: "Gwalior was designated a UNESCO Creative City of Music in October 2023. It is the city of Tansen and the home of the Gwalior gharana, India's oldest khayal gharana. The annual Tansen Sangeet Samaroh, whose 101st edition was held on 15–19 December 2025, takes place at Tansen's tomb in Gwalior."
  },
  {
    id: 31,
    question: "Rani Durgavati, after whom the Veerangana Durgavati Tiger Reserve is named, was the queen of which kingdom and died fighting which Mughal general in 1564?",
    options: ["Orchha; Abul Fazl", "Ramgarh; Bahadur Shah", "Chanderi; Baz Bahadur", "Garha-Mandla (Gond kingdom); Asaf Khan"],
    answer: 3,
    explanation: "Rani Durgavati ruled the Gond kingdom of Garha-Mandla and died in battle near Narrai (Jabalpur region) in 1564 against Akbar's general Asaf Khan. Her martyrdom day, 24 June, is observed as Balidan Diwas. Rani Avantibai Lodhi was the ruler of Ramgarh in 1857."
  },
  {
    id: 32,
    question: "Patalpani railway station near Indore was renamed after which tribal freedom fighter, known as the \"Indian Robin Hood\" of Nimar?",
    options: ["Bhima Nayak", "Tantya Bhil (Tantya Mama)", "Raghunath Shah", "Shankar Shah"],
    answer: 1,
    explanation: "Patalpani station was renamed \"Tantya Mama Railway Station\" in 2021. Tantya Bhil fought British rule in Nimar–Malwa in the late 19th century and was hanged in 1889. Raja Shankar Shah and his son Raghunath Shah were Gond rulers executed at Jabalpur in 1857."
  },
  {
    id: 33,
    question: "Revolutionary Chandrashekhar Azad was born at Bhabhra, a town now named Chandrashekhar Azad Nagar. In which present-day district of MP is it?",
    options: ["Jhabua", "Barwani", "Alirajpur", "Dhar"],
    answer: 2,
    explanation: "Bhabhra lies in Alirajpur district, which was carved out of Jhabua in 2008. Azad was born there in 1906 and died fighting the police at Alfred Park, Allahabad, on 27 February 1931. He was a leader of the Hindustan Socialist Republican Association."
  },
  {
    id: 34,
    question: "Devi Ahilyabai Holkar, whose 300th birth anniversary was celebrated in 2025, ran the Holkar state from which capital on the Narmada?",
    options: ["Indore", "Mandu", "Omkareshwar", "Maheshwar"],
    answer: 3,
    explanation: "Ahilyabai Holkar (born 31 May 1725) made Maheshwar on the Narmada her capital, and the Maheshwari handloom tradition grew under her. She is remembered for rebuilding temples across India, including Kashi Vishwanath (1780). Indore later became the Holkar capital."
  },
  {
    id: 35,
    question: "Raja Bhoj, the 11th-century ruler credited with the Bhojeshwar temple at Bhojpur and the Upper Lake of Bhopal, belonged to which dynasty?",
    options: ["Kachchhapaghata", "Chandela", "Paramara", "Haihaya"],
    answer: 2,
    explanation: "Raja Bhoj (c. 1010–1055 CE) was the most famous Paramara king of Malwa, ruling from Dhar. He is credited with the unfinished Bhojeshwar Shiva temple at Bhojpur and with the Bhoj Wetland (Upper Lake) of Bhopal. He also wrote texts such as the Samarangana Sutradhara on architecture."
  },
  {
    id: 36,
    question: "Poet-journalist Makhanlal Chaturvedi, known for the poem \"Pushp ki Abhilasha\" and honoured by a journalism university in Bhopal named after him, was born in which present-day district?",
    options: ["Jabalpur", "Narmadapuram (Hoshangabad)", "Sagar", "Khandwa"],
    answer: 1,
    explanation: "Makhanlal Chaturvedi was born in 1889 at Babai in present-day Narmadapuram district. He edited \"Karmaveer\" from Khandwa and won the first Sahitya Akademi Award for Hindi (1955) for \"Him Taringini\". The Makhanlal Chaturvedi National University of Journalism and Communication in Bhopal is named after him."
  },
  {
    id: 37,
    question: "Which of the following singer–birthplace pairs from Madhya Pradesh is correct?",
    options: ["Lata Mangeshkar – Gwalior; Kishore Kumar – Indore", "Lata Mangeshkar – Indore; Kishore Kumar – Khandwa", "Lata Mangeshkar – Khandwa; Kishore Kumar – Bhopal", "Lata Mangeshkar – Ujjain; Kishore Kumar – Jabalpur"],
    answer: 1,
    explanation: "Lata Mangeshkar was born in Indore in 1929 and Kishore Kumar in Khandwa in 1929. The MP government gives the National Lata Mangeshkar Award for light music and the National Kishore Kumar Samman for cinema. Khandwa also has a memorial to Kishore Kumar."
  },
  {
    id: 38,
    question: "Dr B.R. Ambedkar was born on 14 April 1891 in Madhya Pradesh at a place now officially named Dr Ambedkar Nagar. What was its earlier name?",
    options: ["Mhow", "Sanawad", "Mandleshwar", "Pithampur"],
    answer: 0,
    explanation: "Ambedkar was born in the military cantonment of Mhow near Indore, where his father served in the British Indian Army. The town was renamed Dr Ambedkar Nagar in 2003. His birthplace memorial there is one of the \"Panchteerth\" sites linked to his life."
  },
  {
    id: 39,
    question: "CM Mohan Yadav, who has been Chief Minister of Madhya Pradesh since December 2023, represents which Assembly constituency?",
    options: ["Jabalpur Paschim", "Budhni", "Indore-1", "Ujjain Dakshin"],
    answer: 3,
    explanation: "Mohan Yadav represents Ujjain Dakshin and was sworn in as CM on 13 December 2023, with Jagdish Devda and Rajendra Shukla as Deputy CMs. Budhni was the seat of his predecessor Shivraj Singh Chouhan, now a Union Minister."
  },
  {
    id: 40,
    question: "Ratapani Tiger Reserve, notified in December 2024 as MP's eighth tiger reserve, is close to Bhopal and contains which UNESCO World Heritage Site in its forest area?",
    options: ["Sanchi", "Bhimbetka rock shelters", "Bhojpur temple", "Udayagiri caves"],
    answer: 1,
    explanation: "Ratapani spreads over Raisen and Sehore districts, and the Bhimbetka rock shelters lie within its forests. It is the closest tiger reserve to a state capital, allowing tigers to range almost to Bhopal's outskirts. Sanchi and Udayagiri lie farther north, near Vidisha."
  },
  {
    id: 41,
    question: "Which wetland, designated in August 2024, is the most recent of Madhya Pradesh's five Ramsar sites?",
    options: ["Bhoj Wetland", "Tawa Reservoir", "Sakhya Sagar", "Yashwant Sagar"],
    answer: 1,
    explanation: "Tawa Reservoir in Narmadapuram district became MP's fifth Ramsar site on 14 August 2024. The others are Bhoj Wetland (Bhopal, 2002, the oldest), Sakhya Sagar (Shivpuri), Sirpur Lake (Indore) and Yashwant Sagar (Indore). Tawa lies at the edge of Satpura Tiger Reserve."
  },
  {
    id: 42,
    question: "In April 2025 the CM Rise schools of Madhya Pradesh were renamed Sandipani Vidyalayas. The name honours Guru Sandipani, whose ashram, linked to the education of Lord Krishna, is in which city?",
    options: ["Ujjain", "Chitrakoot", "Omkareshwar", "Maheshwar"],
    answer: 0,
    explanation: "Sandipani Ashram is in Ujjain, where tradition holds that Krishna, Balarama and Sudama studied under Guru Sandipani. CM Mohan Yadav announced the renaming on 1 April 2025 at the launch of the \"School Chale Hum\" campaign, saying the English name was a colonial legacy. The Sandipani Vidyalayas are large, well-equipped integrated government schools."
  },
  {
    id: 43,
    question: "Under Madhya Pradesh's Mukhyamantri Kisan Kalyan Yojana, eligible farmers receive how much per year from the state, in addition to the ₹6,000 from PM-KISAN?",
    options: ["₹4,000", "₹10,000", "₹6,000", "₹2,000"],
    answer: 2,
    explanation: "The state scheme gives an extra ₹6,000 a year, so an eligible MP farmer gets ₹12,000 a year in all. Payments are made by DBT in instalments of ₹2,000. On 27 July 2026, during Krishak Kalyan Varsh, the CM transferred two instalments together (about ₹3,300 crore to over 82 lakh farmers) at Khandwa. The state amount was ₹4,000 a year when the scheme began in 2020."
  },
  {
    id: 44,
    question: "In Swachh Survekshan 2024-25 (results declared in July 2025), Indore was placed in a new top tier for cities that had repeatedly topped the rankings, and for the 2025-26 survey Bhopal joined it there. What is this category called?",
    options: ["Swachh Shehar Jodi", "Water+ Champions League", "Garbage-Free Star Gold League", "Super Swachh League"],
    answer: 3,
    explanation: "Cities that had repeatedly topped the rankings were moved to a \"Super Swachh League\" in 2024-25, with Indore heading it, while Ahmedabad topped the regular ranking of million-plus cities. For the 10th edition (2025-26), Bhopal, Ahmedabad and Lucknow were added to the league. Indore's model of six-way waste segregation at source is widely copied."
  },
  {
    id: 45,
    question: "In Swachh Vayu Survekshan 2026 (clean air survey, million-plus cities), Lucknow came first with 198 points. Which Madhya Pradesh city came second, one point behind?",
    options: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    answer: 1,
    explanation: "Indore scored 197 and came second to Lucknow in Swachh Vayu Survekshan 2026 (September 2026). Jabalpur was third with 195, and Bhopal was joint fourth with Agra. The survey is run under the National Clean Air Programme (NCAP) of the Ministry of Environment."
  },
  {
    id: 46,
    question: "Kuno National Park, where Project Cheetah began on 17 September 2022 with cheetahs brought from Namibia, is located in which district?",
    options: ["Shivpuri", "Sheopur", "Morena", "Gwalior"],
    answer: 1,
    explanation: "Kuno National Park is in Sheopur district, named after the Kuno river, a tributary of the Chambal. Project Cheetah was the world's first intercontinental translocation of a large carnivore. Shivpuri district has the Madhav Tiger Reserve."
  },
  {
    id: 47,
    question: "Under Simhastha 2028 planning, the MP government moved the headquarters of which department from Bhopal to Ujjain?",
    options: ["Culture", "Tourism", "Religious Trusts and Endowments (Dharmasva)", "Urban Development and Housing"],
    answer: 2,
    explanation: "The Department of Religious Trusts and Endowments (Dharmasva), which earlier worked from Satpura Bhavan in Bhopal, was shifted to Ujjain, and CM Mohan Yadav inaugurated its Ujjain office in August 2024. The move was made with the Simhastha in view, to oversee temple administration and preparations on site. A state cabinet committee chaired by the CM reviews progress."
  },
  {
    id: 48,
    question: "Which Gond ruler of Garha-Mandla and his son were blown from cannons by the British at Jabalpur in September 1857 for writing poems that called for revolt?",
    options: ["Raja Bakht Bali and Jaswant Rao", "Raja Hirde Shah and Narhar Shah", "Raja Sangram Shah and Dalpat Shah", "Raja Shankar Shah and Kunwar Raghunath Shah"],
    answer: 3,
    explanation: "Raja Shankar Shah and his son Kunwar Raghunath Shah were executed at Jabalpur on 18 September 1857. Their martyrdom day is observed in MP, and the state university at Chhindwara is named Raja Shankar Shah University. Sangram Shah and Dalpat Shah were earlier Gond rulers; Dalpat Shah was Rani Durgavati's husband."
  },
  {
    id: 49,
    question: "At the India AI Impact Summit in February 2026, Madhya Pradesh announced a State AI Mission. What job-creation target did it set for the next five years?",
    options: ["10,000 AI-linked jobs", "5 lakh AI-linked jobs", "1 lakh AI-linked jobs", "50,000 AI-linked jobs"],
    answer: 3,
    explanation: "On 20 February 2026 CM Mohan Yadav said the State AI Mission would aim for over 500 AI startups and 50,000 AI-linked jobs in five years. It also seeks to use AI for predictive governance in agriculture, health, nutrition and disaster management. Rollout is planned in phases from 2026-27."
  },
  {
    id: 50,
    question: "The \"Shri Mahakal Lok\" (Mahakal Maharaj Mandir Parisar) corridor around the Mahakaleshwar temple in Ujjain was inaugurated by PM Narendra Modi in which year?",
    options: ["2020", "2022", "2024", "2018"],
    answer: 1,
    explanation: "PM Modi inaugurated the first phase of Shri Mahakal Lok on 11 October 2022. The corridor has murals and statues showing stories of Shiva, and the number of visitors to Ujjain has risen sharply since it opened. Its expansion is part of the Simhastha 2028 preparations."
  }
];

export default questions;

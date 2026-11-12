const questions = [
  {
    id: 1,
    question: "Match List I (dynasty) with List II (principal seat of power). List I: A. Paramara, B. Kalachuri, C. Chandela, D. Scindia. List II: 1. Tripuri, 2. Gwalior, 3. Dhar, 4. Mahoba",
    options: ["A-3, B-1, C-4, D-2", "A-1, B-3, C-2, D-4", "A-3, B-4, C-1, D-2", "A-4, B-1, C-3, D-2"],
    answer: 0,
    explanation: "The Paramaras of Malwa ruled from Dhar after Raja Bhoj shifted the capital from Ujjain. The Kalachuris of Chedi ruled from Tripuri near Jabalpur, the Chandelas had Mahoba as their political capital (Khajuraho was the religious centre), and the Scindias ruled from Gwalior."
  },
  {
    id: 2,
    question: "Consider the following statements about the Bhimbetka rock shelters: 1. They lie in Raisen district. 2. They were inscribed as a UNESCO World Heritage Site in 2003. 3. They were discovered by V.S. Wakankar in 1957. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three statements are correct. Bhimbetka, in Raisen district, has prehistoric rock paintings ranging from the Mesolithic to the historic period. Archaeologist V.S. Wakankar identified the shelters in 1957, and UNESCO inscribed them in 2003."
  },
  {
    id: 3,
    question: "Assertion (A): Rani Durgavati is remembered for resisting the Mughal general Asaf Khan in 1564. Reason (R): Rani Durgavati ruled her kingdom from Mandu. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true: Rani Durgavati of Garha-Katanga fought Asaf Khan's army near Narrai in 1564 and took her own life rather than be captured. R is false: her seat was Singaurgarh/Chauragarh in the Gond kingdom, while Mandu was the capital of the Malwa Sultanate."
  },
  {
    id: 4,
    question: "Consider the following statements about the Revolt of 1857 in present-day Madhya Pradesh: 1. Tatya Tope was executed at Shivpuri in April 1859. 2. Rani Lakshmibai died fighting near Gwalior in June 1858. 3. Raja Shankar Shah and his son Raghunath Shah were blown from cannon at Indore. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Tatya Tope was hanged at Shivpuri on 18 April 1859, and Rani Lakshmibai fell near Gwalior (Kotah-ki-Serai) on 18 June 1858. Statement 3 is wrong because the Gond king Shankar Shah and his son Raghunath Shah were blown from cannon at Jabalpur in September 1857."
  },
  {
    id: 5,
    question: "Match List I (event) with List II (place). List I: A. Jhanda Satyagraha (1923), B. Charan Paduka massacre (1931), C. Turia Jungle Satyagraha (1930), D. Revolt of Bhima Nayak. List II: 1. Seoni, 2. Barwani, 3. Jabalpur, 4. Chhatarpur",
    options: ["A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2", "A-3, B-4, C-2, D-1"],
    answer: 2,
    explanation: "The Jhanda (flag) Satyagraha began at Jabalpur in 1923. The Charan Paduka firing of 14 January 1931 in Chhatarpur is called the 'Jallianwala of Madhya Pradesh', and the Turia Jungle Satyagraha took place in Seoni in 1930. Bhima Nayak led the Bhil resistance in the Barwani-Nimar region."
  },
  {
    id: 6,
    question: "Assertion (A): Madhya Pradesh came into existence as a state on 1 November 1956. Reason (R): States were reorganised on the recommendations of the States Reorganisation Commission headed by Fazl Ali. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both statements are true, and R explains A. The Fazl Ali Commission's report led to the States Reorganisation Act, 1956, which formed the new Madhya Pradesh from Mahakoshal, Madhya Bharat, Vindhya Pradesh and Bhopal on 1 November 1956."
  },
  {
    id: 7,
    question: "Consider the following statements about Raja Bhoj: 1. He was a Paramara ruler of Malwa with his capital at Dhar. 2. The Bhojeshwar temple at Bhojpur is attributed to him. 3. The architectural treatise Samarangana Sutradhara is ascribed to him. 4. He built the Jahaz Mahal at Mandu. Which of the statements given above are correct?",
    options: ["1, 2, 3 and 4", "1 and 4 only", "2, 3 and 4 only", "1, 2 and 3 only"],
    answer: 3,
    explanation: "Statements 1–3 are correct. Raja Bhoj (11th century) was a Paramara king, a patron of learning and the traditional builder of the unfinished Bhojeshwar Shiva temple. Jahaz Mahal is a 15th-century Malwa Sultanate building attributed to Ghiyas-ud-din Khalji."
  },
  {
    id: 8,
    question: "Match List I (monument) with List II (builder). List I: A. Man Mandir palace, Gwalior, B. Jahaz Mahal, Mandu, C. Taj-ul-Masajid, Bhopal, D. Rajwada, Indore. List II: 1. Shah Jahan Begum, 2. Ghiyas-ud-din Khalji, 3. Raja Man Singh Tomar, 4. Malhar Rao Holkar",
    options: ["A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-3, B-2, C-4, D-1", "A-4, B-2, C-1, D-3"],
    answer: 1,
    explanation: "Man Mandir was built by Raja Man Singh Tomar around 1500, and Jahaz Mahal by Ghiyas-ud-din Khalji of Malwa. Shah Jahan Begum of Bhopal began the Taj-ul-Masajid, which was completed only in the 1980s. The Holkar Rajwada at Indore was begun under Malhar Rao Holkar."
  },
  {
    id: 9,
    question: "Assertion (A): Mandu was known as Shadiabad, the 'City of Joy'. Reason (R): Mandu served as the capital of the Malwa Sultanate. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both statements are true, but the capital status does not explain the name. The Malwa sultans named Mandu Shadiabad for its pleasure palaces and setting, and it is remembered through the Baz Bahadur–Rani Roopmati story. Being a capital is a separate fact."
  },
  {
    id: 10,
    question: "Consider the following statements about Ahilyabai Holkar: 1. She made Maheshwar the seat of the Holkar administration. 2. She rebuilt the Kashi Vishwanath temple at Varanasi in 1780. 3. She was the wife of Malhar Rao Holkar. Which of the statements given above is/are correct?",
    options: ["1 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3"],
    answer: 2,
    explanation: "Ahilyabai ruled from Maheshwar on the Narmada and rebuilt the Kashi Vishwanath temple in 1780. Statement 3 is wrong: she was Malhar Rao Holkar's daughter-in-law and the wife of his son Khanderao."
  },
  {
    id: 11,
    question: "Match List I (river) with List II (place of origin). List I: A. Narmada, B. Chambal, C. Tapti, D. Betwa. List II: 1. Multai, 2. Amarkantak, 3. Janapav hills, 4. Kumragaon (Raisen)",
    options: ["A-2, B-1, C-3, D-4", "A-3, B-2, C-1, D-4", "A-2, B-3, C-4, D-1", "A-2, B-3, C-1, D-4"],
    answer: 3,
    explanation: "The Narmada rises at Amarkantak (Anuppur), the Chambal in the Janapav hills near Mhow (Indore), and the Tapti at Multai (Betul). The Betwa rises near Kumragaon/Jhiri in Raisen district and flows north-east to join the Yamuna."
  },
  {
    id: 12,
    question: "Consider the following statements about Madhya Pradesh: 1. The Tropic of Cancer passes through the state. 2. It is the second largest state of India by area. 3. It shares its boundary with five states. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "1, 2 and 3", "2 and 3 only"],
    answer: 2,
    explanation: "All three are correct. The Tropic of Cancer crosses the state from Ratlam-Ujjain in the west to the eastern districts. MP (about 3.08 lakh sq km) is second only to Rajasthan in area, and it borders Uttar Pradesh, Chhattisgarh, Maharashtra, Gujarat and Rajasthan."
  },
  {
    id: 13,
    question: "Assertion (A): The Narmada flows westward and drains into the Arabian Sea, unlike most peninsular rivers. Reason (R): The Narmada flows through a rift valley between the Vindhya and Satpura ranges. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both statements are true, and R explains A. The Narmada follows a faulted rift trough sloping westward between the Vindhyas and Satpuras, which is why it flows west to the Gulf of Khambhat instead of east to the Bay of Bengal. The Tapti flows west for a similar reason."
  },
  {
    id: 14,
    question: "Consider the following statements about soils of Madhya Pradesh: 1. Black (regur) soil predominates on the Malwa plateau. 2. Black soil of the state is derived mainly from Deccan trap basalt. 3. Alluvial soil covers the largest area of the state. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Black soil formed from weathered Deccan basalt dominates Malwa and much of western and central MP, and it covers the largest share of the state. Statement 3 is wrong: alluvial soil is limited to the northern Gwalior-Bhind-Morena belt."
  },
  {
    id: 15,
    question: "Match List I (national park) with List II (district). List I: A. Bandhavgarh, B. Satpura, C. Kanha, D. Pench. List II: 1. Mandla, 2. Seoni, 3. Umaria, 4. Narmadapuram",
    options: ["A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2", "A-4, B-3, C-1, D-2", "A-3, B-4, C-2, D-1"],
    answer: 1,
    explanation: "Bandhavgarh is in Umaria, Satpura National Park in Narmadapuram (Hoshangabad), Kanha mainly in Mandla (extending into Balaghat), and Pench in Seoni (extending into Chhindwara). All four are tiger reserves."
  },
  {
    id: 16,
    question: "Assertion (A): Amarkantak is the highest point of Madhya Pradesh. Reason (R): Dhupgarh lies in the Mahadeo hills of the Satpura range near Pachmarhi. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 3,
    explanation: "A is false. The highest point of MP is Dhupgarh, at about 1,350 m, while Amarkantak in the Maikal range stands at roughly 1,050 m. R is true: Dhupgarh is in the Mahadeo hills of the Satpuras, near Pachmarhi."
  },
  {
    id: 17,
    question: "Consider the following pairs (place: mineral): 1. Panna: Diamond, 2. Malanjkhand: Copper, 3. Jhabua: Coal. Which of the pairs given above is/are correctly matched?",
    options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Panna (Majhgawan mine, NMDC) is India's only mechanised diamond mine, and Malanjkhand in Balaghat is India's largest open-cast copper mine. Jhabua is known for rock phosphate, dolomite and manganese, not coal. MP's coal comes from Singrauli, Shahdol, Umaria and Betul."
  },
  {
    id: 18,
    question: "Match List I (waterfall) with List II (river). List I: A. Dhuandhar, B. Chachai, C. Raneh, D. Patalpani. List II: 1. Bihad, 2. Narmada, 3. Choral, 4. Ken",
    options: ["A-2, B-4, C-1, D-3", "A-1, B-2, C-4, D-3", "A-2, B-1, C-4, D-3", "A-2, B-1, C-3, D-4"],
    answer: 2,
    explanation: "Dhuandhar falls on the Narmada at Bhedaghat (Jabalpur), Chachai on the Bihad river in Rewa, Raneh on the Ken in Chhatarpur (known for its crystalline granite canyon), and Patalpani on the Choral near Mhow."
  },
  {
    id: 19,
    question: "Assertion (A): Gandhi Sagar dam is built on the Chambal river in Mandsaur district. Reason (R): The Chambal is a tributary of the Yamuna. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both statements are true, but R does not explain A. Gandhi Sagar, built in 1960, is the first of the Chambal valley dams (followed by Rana Pratap Sagar and Jawahar Sagar in Rajasthan). That the Chambal later joins the Yamuna in Uttar Pradesh is a separate fact."
  },
  {
    id: 20,
    question: "Consider the following statements about the forests of Madhya Pradesh: 1. The state has the largest forest cover by area among Indian states (ISFR). 2. Teak and sal are the two principal timber species. 3. Sal forests dominate the western Malwa plateau. Which of the statements given above is/are NOT correct?",
    options: ["1 only", "3 only", "2 and 3 only", "1 and 3 only"],
    answer: 1,
    explanation: "Only statement 3 is incorrect. Sal dominates the moister eastern districts (Mandla, Balaghat, Dindori, Shahdol), while teak prevails in central and western MP. Statements 1 and 2 are correct: ISFR reports rank MP first in forest cover by area."
  },
  {
    id: 21,
    question: "Match List I (first office-holder of Madhya Pradesh) with List II (name). List I: A. Chief Minister, B. Governor, C. Speaker of the Vidhan Sabha, D. Chief Justice of the High Court. List II: 1. Kunji Lal Dubey, 2. Pattabhi Sitaramayya, 3. M. Hidayatullah, 4. Ravishankar Shukla",
    options: ["A-4, B-2, C-1, D-3", "A-4, B-1, C-2, D-3", "A-2, B-4, C-1, D-3", "A-4, B-2, C-3, D-1"],
    answer: 0,
    explanation: "On 1 November 1956, Pt. Ravishankar Shukla became the first Chief Minister and Dr. B. Pattabhi Sitaramayya the first Governor. Pt. Kunji Lal Dubey was the first Speaker, and Justice M. Hidayatullah, later Chief Justice of India, was the first Chief Justice of the MP High Court."
  },
  {
    id: 22,
    question: "Consider the following statements about the representation of Madhya Pradesh: 1. The Vidhan Sabha has 230 elected seats. 2. The state has a unicameral legislature. 3. The state elects 29 members to the Lok Sabha. 4. The state has 11 seats in the Rajya Sabha. Which of the statements given above are correct?",
    options: ["1, 2 and 3 only", "1, 3 and 4 only", "2 and 4 only", "1, 2, 3 and 4"],
    answer: 3,
    explanation: "All four are correct. MP has a single-house legislature of 230 seats (after Chhattisgarh was carved out in 2000), 29 Lok Sabha constituencies and 11 Rajya Sabha seats. Although a Legislative Council was once provided for, it was never constituted."
  },
  {
    id: 23,
    question: "Assertion (A): The principal seat of the Madhya Pradesh High Court is at Jabalpur. Reason (R): The High Court has permanent benches at Indore and Gwalior. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both are true, but the existence of benches does not explain why the principal seat is at Jabalpur. Jabalpur was chosen as the principal seat at reorganisation in 1956, and the Indore and Gwalior benches serve the Malwa and Gwalior-Chambal regions."
  },
  {
    id: 24,
    question: "Consider the following statements about Panchayati Raj in Madhya Pradesh: 1. MP was the first state to hold panchayat elections after the 73rd Constitutional Amendment. 2. Half of the seats in panchayats are reserved for women. 3. The three tiers are Gram Panchayat, Janpad Panchayat and Zila Panchayat. Which of the statements given above is/are correct?",
    options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. MP held the first panchayat elections under the new constitutional framework in 1994, and it raised women's reservation in PRIs to 50%. The intermediate tier in MP is called the Janpad Panchayat."
  },
  {
    id: 25,
    question: "Match List I (MP scheme) with List II (target group/purpose). List I: A. Ladli Laxmi Yojana, B. Ladli Behna Yojana, C. Sambal Yojana, D. Mukhyamantri Teerth Darshan Yojana. List II: 1. Pilgrimage for senior citizens, 2. Unorganised workers, 3. Financial security of the girl child, 4. Monthly cash assistance to women",
    options: ["A-4, B-3, C-2, D-1", "A-3, B-4, C-1, D-2", "A-3, B-4, C-2, D-1", "A-3, B-2, C-4, D-1"],
    answer: 2,
    explanation: "Ladli Laxmi (2007) secures the girl child's future through staged payments, and Ladli Behna (2023) gives monthly cash to eligible women. Sambal (2018) is the Mukhyamantri Jan Kalyan scheme for unorganised workers. Teerth Darshan (2012) funds pilgrimages for senior citizens."
  },
  {
    id: 26,
    question: "Assertion (A): Pithampur in Dhar district is often called the 'Detroit of India'. Reason (R): Pithampur hosts a large cluster of automobile and auto-component industries. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Pithampur, near Indore, has vehicle makers such as Force Motors, Eicher/VE Commercial and several auto-component units, which earned it the nickname after the US car city."
  },
  {
    id: 27,
    question: "Consider the following statements about industries in Madhya Pradesh: 1. Indore is regarded as the commercial capital of the state. 2. The Security Paper Mill is located at Narmadapuram. 3. A Bank Note Press is located at Dewas. 4. The BHEL heavy electrical plant is located at Jabalpur. Which of the statements given above are correct?",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 1,
    explanation: "Statements 1–3 are correct. Narmadapuram (Hoshangabad) makes currency and security paper, and Dewas prints bank notes. Statement 4 is wrong: BHEL's MP plant is at Bhopal (Piplani), not Jabalpur."
  },
  {
    id: 28,
    question: "Match List I (thermal power station) with List II (location). List I: A. Satpura TPS, B. Amarkantak TPS, C. Sanjay Gandhi TPS, D. Shri Singaji TPS. List II: 1. Birsinghpur, 2. Sarni, 3. Dongaliya (Khandwa), 4. Chachai",
    options: ["A-4, B-2, C-1, D-3", "A-2, B-1, C-4, D-3", "A-2, B-4, C-3, D-1", "A-2, B-4, C-1, D-3"],
    answer: 3,
    explanation: "Satpura TPS is at Sarni (Betul), Amarkantak TPS at Chachai (Anuppur), Sanjay Gandhi TPS at Birsinghpur Pali (Umaria), and the supercritical Shri Singaji TPS at Dongaliya in Khandwa district."
  },
  {
    id: 29,
    question: "Assertion (A): The Lokayukta of Madhya Pradesh functions under the MP Lokayukt Evam Up-Lokayukt Adhiniyam, 1981. Reason (R): Madhya Pradesh was the first state in India to establish the institution of Lokayukta. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true: MP's Lokayukta rests on the 1981 Act. R is false, because Maharashtra was the first state to set up a Lokayukta, in 1971. MP's Special Police Establishment works under the Lokayukta to investigate corruption cases."
  },
  {
    id: 30,
    question: "Consider the following statements: 1. The MP State Election Commission conducts elections to the MP Vidhan Sabha. 2. The MP Public Service Commission was constituted in 1956. 3. The MP Human Rights Commission was set up in 1995. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
    answer: 2,
    explanation: "Statements 2 and 3 are correct. MPPSC dates from the state's formation in 1956, and the MP Human Rights Commission was set up in September 1995. Statement 1 is wrong: the State Election Commission (Article 243K) conducts panchayat and municipal elections, while Vidhan Sabha polls are run by the Election Commission of India."
  },
  {
    id: 31,
    question: "Match List I (folk dance) with List II (community/region). List I: A. Bhagoria, B. Rai, C. Matki, D. Pardhauni. List II: 1. Women of Malwa, 2. Bhil, 3. Baiga, 4. Bundelkhand",
    options: ["A-3, B-4, C-1, D-2", "A-2, B-4, C-1, D-3", "A-2, B-1, C-4, D-3", "A-4, B-2, C-1, D-3"],
    answer: 1,
    explanation: "Bhagoria is the Bhil dance of the pre-Holi haats, and Rai is Bundelkhand's dance performed by Bedni women to the mridang. Matki is danced by Malwa women balancing pots, and Pardhauni is the Baiga dance for welcoming a wedding party."
  },
  {
    id: 32,
    question: "Consider the following statements about folk literature of Madhya Pradesh: 1. Isuri is a celebrated Bundeli poet known for his faags. 2. Jagnik is credited with the Bundeli ballad Alha Khand. 3. Sant Singaji is a saint-poet of the Nimar region. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. Isuri (19th century) wrote the four-line Bundeli faags, and Jagnik, court poet of the Chandela king Parmal, is credited with the Alha-Udal saga sung in the monsoon. Sant Singaji of Nimar wrote Nirguna bhakti verse in Nimadi."
  },
  {
    id: 33,
    question: "Assertion (A): Mandana is a painting tradition practised mainly by Gond men on paper and canvas. Reason (R): Mandana motifs are drawn with white chalk (khadia) on floors and walls plastered with cow dung and red clay. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 3,
    explanation: "A is false. Mandana is a floor and wall art of Malwa and the adjoining Rajasthan border, made by women at festivals such as Diwali, not a Gond art on paper. R is true: the designs are drawn in khadia over a base of cow dung and geru (red ochre)."
  },
  {
    id: 34,
    question: "Match List I (folk form) with List II (region). List I: A. Maach, B. Swang, C. Gammat, D. Biraha. List II: 1. Nimar, 2. Baghelkhand, 3. Malwa, 4. Bundelkhand",
    options: ["A-3, B-4, C-1, D-2", "A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-3, B-4, C-2, D-1"],
    answer: 0,
    explanation: "Maach is the musical folk theatre of Malwa, centred on Ujjain, and Swang is Bundelkhand's satirical folk drama. Gammat is a Nimar folk drama, and Biraha songs of separation are popular in Baghelkhand."
  },
  {
    id: 35,
    question: "Consider the following statements about the tribes of Madhya Pradesh: 1. The Bhil are the most populous tribe of the state (Census 2011). 2. The Baiga, Bharia and Sahariya are notified as PVTGs in the state. 3. The Bharia of Patalkot live in Chhindwara district. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 and 3 only"],
    answer: 2,
    explanation: "All three are correct. The Bhil (with Bhilala) are MP's largest tribal group, followed by the Gond. The Baiga, Bharia and Sahariya are the state's three Particularly Vulnerable Tribal Groups, and the Bharia of the Patalkot valley in Chhindwara are known for their herbal knowledge."
  },
  {
    id: 36,
    question: "Assertion (A): The Sahariya tribe is concentrated in the Gwalior-Chambal region, including Sheopur, Shivpuri and Guna. Reason (R): The Sahariya are notified as a Particularly Vulnerable Tribal Group. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both statements are true, but PVTG status does not explain where the tribe lives. PVTG status reflects low literacy, a pre-agricultural economy and a declining or stagnant population, not geography. The Sahariya live in north-western MP."
  },
  {
    id: 37,
    question: "Match List I (cultural festival) with List II (venue). List I: A. Tansen Samaroh, B. Khajuraho Dance Festival, C. Kalidas Samaroh, D. Ustad Allauddin Khan Sangeet Samaroh. List II: 1. Maihar, 2. Ujjain, 3. Khajuraho, 4. Gwalior",
    options: ["A-3, B-4, C-2, D-1", "A-4, B-3, C-1, D-2", "A-4, B-3, C-2, D-1", "A-4, B-2, C-3, D-1"],
    answer: 2,
    explanation: "The Tansen Samaroh is held at Tansen's tomb in Gwalior, and classical dancers perform against the temples at the Khajuraho Dance Festival. The Akhil Bharatiya Kalidas Samaroh takes place in Ujjain. The Allauddin Khan festival in Maihar honours the founder of the Maihar gharana."
  },
  {
    id: 38,
    question: "Consider the following statements about Bharat Bhavan, Bhopal: 1. It was designed by Charles Correa and opened in 1982. 2. Roopankar is its museum of fine arts. 3. Vagarth is its theatre repertory. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Bharat Bhavan, beside Upper Lake, was designed by Charles Correa and inaugurated in 1982, and Roopankar houses its fine and tribal art collections. Statement 3 is wrong: Vagarth is the centre for Indian poetry, while the theatre repertory is Rangmandal."
  },
  {
    id: 39,
    question: "Assertion (A): The Maheshwari saree tradition is closely associated with Ahilyabai Holkar. Reason (R): Ahilyabai settled weaver families at Maheshwar and patronised the craft. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Ahilyabai brought weavers to her capital at Maheshwar in the 18th century and commissioned fabrics, which shaped the reversible-border Maheshwari saree. The saree has a GI tag."
  },
  {
    id: 40,
    question: "Consider the following statements: 1. Kalidasa's Meghadutam contains a description of Ujjayini. 2. The Bhartrihari caves are located at Ujjain. 3. Keshavdas, author of Ramchandrika, was a poet at the court of Raja Bhoj. Which of the statements given above is/are correct?",
    options: ["1 only", "2 and 3 only", "1, 2 and 3", "1 and 2 only"],
    answer: 3,
    explanation: "Statements 1 and 2 are correct. In Meghadutam the cloud-messenger is urged to detour to Ujjayini, and the Bhartrihari caves stand on the Kshipra at Ujjain. Statement 3 is wrong: Keshavdas (16th century) was a poet at the Bundela court of Orchha, five centuries after Bhoj."
  },
  {
    id: 41,
    question: "Consider the following statements about cheetah reintroduction in Madhya Pradesh: 1. In October 2026, cheetahs were released in the Veerangana Durgavati Tiger Reserve, making it the state's third cheetah habitat. 2. Gandhi Sagar Wildlife Sanctuary is the state's second cheetah site. 3. The Veerangana Durgavati Tiger Reserve spans parts of Sagar, Damoh and Narsinghpur districts. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. On 7 October 2026, Chief Minister Mohan Yadav released two cheetahs into the Veerangana Durgavati (Nauradehi) Tiger Reserve, after Kuno (Sheopur) and Gandhi Sagar (Mandsaur-Neemuch). The reserve covers about 2,339 sq km across Sagar, Damoh and Narsinghpur."
  },
  {
    id: 42,
    question: "Assertion (A): Census 2027 is the first Indian census to offer citizens self-enumeration through a web portal. Reason (R): The house-listing phase of Census 2027 was scheduled between April and September 2026. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both are true, but R does not explain A. Self-enumeration opened on a portal for a 15-day window before house-to-house listing in each state, starting on 1 April 2026. Phase I house-listing ran from April to September 2026, and population enumeration follows in 2027."
  },
  {
    id: 43,
    question: "Match List I (event) with List II (venue). List I: A. ICC Women's ODI World Cup final, November 2025, B. ICC Men's T20 World Cup final, March 2026, C. AI Impact Summit, February 2026, D. UN climate conference COP30, November 2025. List II: 1. Belém, 2. Ahmedabad, 3. New Delhi, 4. Navi Mumbai",
    options: ["A-2, B-4, C-3, D-1", "A-4, B-2, C-3, D-1", "A-4, B-3, C-2, D-1", "A-1, B-2, C-3, D-4"],
    answer: 1,
    explanation: "India won its first Women's World Cup at DY Patil Stadium, Navi Mumbai, on 2 November 2025, and beat New Zealand at Ahmedabad on 8 March 2026 for a record third T20 title. The AI Impact Summit in New Delhi adopted the New Delhi Declaration in February 2026, and COP30 was held at Belém, Brazil, in November 2025."
  },
  {
    id: 44,
    question: "Consider the following statements: 1. Madhya Pradesh has dedicated the year 2026 to farmers' welfare (Krishak Kalyan Varsh). 2. The year 2025 had been observed in the state as a year of industry and employment. Which of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both are correct. CM Mohan Yadav formally launched Krishak Kalyan Varsh 2026 at Jamboree Maidan, Bhopal, on 11 January 2026 with a tractor rally. The previous year, 2025, had been observed in the state as the Year of Industry and Employment, built around the Global Investors Summit in Bhopal (February 2025)."
  },
  {
    id: 45,
    question: "Match List I (AI/computing term) with List II (description). List I: A. LLM, B. GAN, C. CNN, D. NLP. List II: 1. Generator and discriminator networks trained against each other, 2. Network using convolution filters, widely used for image recognition, 3. Text-generating model trained on very large corpora, 4. Field dealing with machine understanding of human language",
    options: ["A-3, B-2, C-1, D-4", "A-4, B-1, C-2, D-3", "A-1, B-3, C-2, D-4", "A-3, B-1, C-2, D-4"],
    answer: 3,
    explanation: "Large Language Models such as GPT and Claude are trained on huge text corpora to generate language. A Generative Adversarial Network pits a generator against a discriminator, a Convolutional Neural Network uses filters suited to images, and Natural Language Processing is the wider field of language understanding."
  },
  {
    id: 46,
    question: "Consider the following statements about India's digital public infrastructure: 1. UPI was developed by the National Payments Corporation of India. 2. DigiLocker is an initiative of the Ministry of Electronics and IT. 3. Aadhaar numbers are issued by NPCI. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statements 1 and 2 are correct. UPI was launched by NPCI in 2016, and DigiLocker is a MeitY platform for digital documents. Statement 3 is wrong: Aadhaar is issued by UIDAI under the Aadhaar Act, 2016."
  },
  {
    id: 47,
    question: "Assertion (A): The New Delhi Declaration on AI Impact was adopted at the AI Impact Summit held in India in February 2026. Reason (R): The 2026 New Delhi summit was the first ever global summit on artificial intelligence. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true: the summit ended on 21 February 2026 with the non-binding New Delhi Declaration, endorsed by about 88–91 countries and organisations. R is false, because earlier summits were held at Bletchley Park (UK, 2023), Seoul (2024) and Paris (2025). New Delhi was the first in the Global South."
  },
  {
    id: 48,
    question: "Consider the following statements: 1. CERT-In is India's national nodal agency for responding to cyber-security incidents. 2. A firewall is a type of malicious software. 3. Ransomware encrypts a victim's data and demands payment for its release. Which of the statements given above is/are correct?",
    options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 3 are correct. CERT-In, under MeitY, is the nodal agency under Section 70B of the IT Act, and ransomware such as WannaCry encrypts files for ransom. Statement 2 is wrong: a firewall is a security control that filters network traffic, not malware."
  },
  {
    id: 49,
    question: "Match List I (technology) with List II (key idea). List I: A. Qubit, B. Blockchain, C. Internet of Things, D. Edge computing. List II: 1. Processing data near where it is generated, 2. Networked sensors and everyday devices exchanging data, 3. Tamper-evident distributed ledger, 4. Unit of quantum information that can exist in superposition",
    options: ["A-4, B-3, C-2, D-1", "A-3, B-4, C-2, D-1", "A-4, B-2, C-3, D-1", "A-1, B-3, C-2, D-4"],
    answer: 0,
    explanation: "A qubit can hold a superposition of 0 and 1, and a blockchain links blocks cryptographically into a shared ledger. IoT connects physical devices, and edge computing cuts delay by processing data close to its source rather than in a distant cloud."
  },
  {
    id: 50,
    question: "Consider the following statements about the Bhopal Metro: 1. Its commercial passenger service began in December 2025. 2. Its first operational stretch runs between Subhash Nagar and AIIMS. 3. It was the first metro rail system in Madhya Pradesh to open to the public. Which of the statements given above is/are correct?",
    options: ["1 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3"],
    answer: 2,
    explanation: "Statements 1 and 2 are correct. The Bhopal Metro Orange Line was inaugurated on 20 December 2025, and public service started on 21 December on the roughly 7 km Subhash Nagar–AIIMS stretch. Statement 3 is wrong: the Indore Metro priority corridor had opened earlier, in 2025."
  },
  {
    id: 51,
    question: "Match List I (pioneer) with List II (contribution). List I: A. Edmond Locard, B. Alphonse Bertillon, C. Karl Landsteiner, D. Francis Galton. List II: 1. ABO blood groups, 2. Anthropometric identification, 3. Exchange principle, 4. Fingerprint ridge details (minutiae)",
    options: ["A-3, B-1, C-2, D-4", "A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-3, B-2, C-4, D-1"],
    answer: 2,
    explanation: "Locard (Lyon) gave the exchange principle, and Bertillon devised anthropometry (bertillonage) for identifying criminals. Landsteiner discovered the ABO groups in 1900–01. Galton's 'Finger Prints' (1892) described ridge characteristics, still called Galton details."
  },
  {
    id: 52,
    question: "Consider the following statements about forensic hair examination: 1. The medullary index of human scalp hair is usually less than one-third. 2. Most animal hairs have a medullary index greater than one-half. 3. A naturally shed telogen hair usually lacks the root sheath tissue needed for routine nuclear DNA typing. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. The medullary index (medulla diameter ÷ shaft diameter) is under about 0.33 in humans and generally above 0.5 in animals, which helps separate human from animal hair. Telogen hairs have a club root without sheath cells, so mtDNA from the shaft is usually the option."
  },
  {
    id: 53,
    question: "Assertion (A): Naturally shed hairs often fail to give STR profiles but can still be analysed for mitochondrial DNA. Reason (R): Telogen roots contain little nuclear DNA, while the keratinised shaft retains many copies of mtDNA. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Nuclear DNA breaks down as the hair keratinises, but each cell carries hundreds to thousands of mitochondrial genomes, so the hair shaft can still give mtDNA sequence. That is why shed-hair cases often rely on HV1/HV2 sequencing."
  },
  {
    id: 54,
    question: "Match List I (insect family) with List II (role on a corpse). List I: A. Calliphoridae, B. Dermestidae, C. Piophilidae, D. Staphylinidae. List II: 1. Predators feeding on fly larvae, 2. Feed on dry skin and remains at the skeletal stage, 3. Earliest colonisers, arriving within minutes to hours, 4. 'Cheese skippers' of the later fermentation stage",
    options: ["A-3, B-4, C-2, D-1", "A-3, B-2, C-4, D-1", "A-4, B-2, C-3, D-1", "A-3, B-2, C-1, D-4"],
    answer: 1,
    explanation: "Blowflies (Calliphoridae) are the first wave and are central to minimum-PMI estimation. Piophilid cheese-skipper larvae arrive at the butyric fermentation stage, and dermestid beetles feed on dried tissue late in decomposition. Rove beetles (Staphylinidae) are predators of maggots."
  },
  {
    id: 55,
    question: "A blowfly species needs 2,400 accumulated degree hours (ADH, base temperature 10 °C) to reach the larval stage recovered from a body. If the scene stayed at a constant 25 °C, what is the approximate minimum post-mortem interval?",
    options: ["About 4.0 days", "About 10.0 days", "About 6.7 days", "About 16.0 days"],
    answer: 2,
    explanation: "Each hour contributes 25 − 10 = 15 degree-hours, so 2,400 ÷ 15 = 160 hours, which is about 6.7 days. This is a minimum PMI because it estimates the time since egg-laying, and flies may not have reached the body at once."
  },
  {
    id: 56,
    question: "Consider the following statements about the diatom test: 1. Diatoms found in bone marrow or other closed organs support ante-mortem drowning. 2. Diatom frustules are siliceous and survive strong acid digestion of tissue. 3. Diatoms in the lungs alone are conclusive proof of ante-mortem drowning. Which of the statements given above is/are correct?",
    options: ["1, 2 and 3", "2 and 3 only", "1 and 3 only", "1 and 2 only"],
    answer: 3,
    explanation: "Statements 1 and 2 are correct. Diatoms reach the marrow, kidney or brain only through a beating heart, while acid digestion destroys tissue but leaves the silica frustules. Statement 3 is wrong, because water and diatoms can passively enter the lungs of a body thrown in after death."
  },
  {
    id: 57,
    question: "Assertion (A): In voluntary muscles, rigor mortis appears first in small muscles such as those of the eyelids and face. Reason (R): Rigor mortis results from depletion of ATP, which leaves actin–myosin cross-bridges locked. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both are true, but R explains why rigor occurs, not the order in which it appears. Nysten's rule describes rigor spreading from the eyelids, face and neck downwards. ATP depletion is the biochemical mechanism of the stiffening itself."
  },
  {
    id: 58,
    question: "Match List I (wildlife product seized) with List II (source species). List I: A. Shahtoosh shawl, B. Musk pod, C. Scales sold for traditional medicine, D. Bile sold in trade. List II: 1. Pangolin, 2. Asiatic black bear, 3. Musk deer, 4. Tibetan antelope (chiru)",
    options: ["A-3, B-4, C-1, D-2", "A-4, B-1, C-3, D-2", "A-4, B-3, C-2, D-1", "A-4, B-3, C-1, D-2"],
    answer: 3,
    explanation: "Shahtoosh is woven from the underwool of the chiru, which must be killed to obtain it, and the musk pod is a preputial gland of the male musk deer. Pangolin scales and bear bile drive large illegal markets. All four species are Schedule I or CITES Appendix I, and DNA barcoding is used to confirm the species."
  },
  {
    id: 59,
    question: "Consider the following statements: 1. The Wild Life (Protection) Amendment Act, 2022 reduced the number of schedules from six to four. 2. Species in Schedule I receive the highest degree of protection. 3. The Wildlife Institute of India is located at Dehradun. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    answer: 2,
    explanation: "All three are correct. The 2022 amendment rationalised the schedules to four (two for animals, one for plants, one for CITES specimens) and removed the vermin schedule. WII Dehradun runs a wildlife forensic cell that supports enforcement agencies."
  },
  {
    id: 60,
    question: "Assertion (A): Dental pulp is a good source of DNA even from badly decomposed or burnt remains. Reason (R): The pulp is enclosed by enamel and dentine, which are among the hardest and most resistant tissues of the body. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. The mineralised shell of enamel and dentine protects the pulp cavity from heat, moisture and bacteria, so teeth (along with dense bone) are preferred samples in disaster victim identification."
  },
  {
    id: 61,
    question: "Match List I (method/feature) with List II (what it estimates). List I: A. Suchey-Brooks method, B. Greater sciatic notch, C. Trotter and Gleser equations, D. Cranial suture closure. List II: 1. Stature, 2. Sex, 3. Age from the pubic symphysis, 4. Age (less precise) from the skull",
    options: ["A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-3, B-1, C-2, D-4", "A-4, B-2, C-1, D-3"],
    answer: 1,
    explanation: "Suchey-Brooks phases score changes in the pubic symphysis face to estimate adult age, and a wide sciatic notch indicates a female. Trotter-Gleser regression equations derive stature from long-bone lengths. Cranial suture closure gives only broad age ranges."
  },
  {
    id: 62,
    question: "Consider the following statements about bloodstain pattern analysis: 1. The angle of impact can be calculated as the inverse sine of width ÷ length of an elliptical stain. 2. Cast-off patterns are produced when blood is flung from a moving bloodied object. 3. High-velocity impact spatter typically consists of stains larger than 4 mm. Which of the statements given above is/are correct?",
    options: ["1 only", "2 and 3 only", "1, 2 and 3", "1 and 2 only"],
    answer: 3,
    explanation: "Statements 1 and 2 are correct: sin θ = W/L gives the impact angle, and a swung weapon throws cast-off trails. Statement 3 is wrong, because high-velocity spatter from gunshots or explosions is a fine mist of stains usually under 1 mm. Stains of 4 mm or more are typical of low-velocity drips."
  },
  {
    id: 63,
    question: "A blood drop strikes a surface at an angle of 30° and leaves an elliptical stain 4 mm wide. What length should the stain be?",
    options: ["4 mm", "6 mm", "8 mm", "12 mm"],
    answer: 2,
    explanation: "Since sin θ = W/L, L = W/sin θ = 4/0.5 = 8 mm. The more acute the impact angle, the more elongated the stain. A 90° impact gives a circular stain (W = L)."
  },
  {
    id: 64,
    question: "Assertion (A): Edmond Locard set up one of the earliest police crime laboratories, at Lyon in 1910. Reason (R): Locard is credited with the principle that every contact leaves a trace. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both are true, but the exchange principle is not why Locard founded the Lyon laboratory. They are separate achievements. The principle, later expanded by Paul Kirk, is the basis of trace evidence work."
  },
  {
    id: 65,
    question: "Consider the following statements about forensic botany: 1. Pollen and spores can link a suspect or object to a particular location. 2. Cellulose cell walls and starch grains help identify plant material in stomach contents. 3. Cystolithic hairs are a diagnostic microscopic feature of Papaver somniferum. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Forensic palynology uses pollen assemblages to link people to places, and plant cell structure survives digestion well enough for identification. Statement 3 is wrong: claw-shaped cystolithic hairs containing calcium carbonate are characteristic of Cannabis sativa, not the opium poppy."
  },
  {
    id: 66,
    question: "Using the Trotter-Gleser equation for males, stature (cm) = 2.38 × femur length + 61.41, estimate the stature of an adult male whose femur measures 45 cm.",
    options: ["158.6 cm", "168.5 cm", "174.2 cm", "162.3 cm"],
    answer: 1,
    explanation: "2.38 × 45 = 107.1, and 107.1 + 61.41 = 168.51 cm, or about 168.5 cm. The femur gives one of the most reliable stature estimates because it is the longest bone. Population-specific equations should be used where they exist."
  },
  {
    id: 67,
    question: "Assertion (A): Algor mortis is an unreliable indicator of post-mortem interval in very hot climates. Reason (R): When the ambient temperature approaches body temperature, the body loses little heat after death. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Cooling depends on the gradient between body and surroundings, so in Indian summers above about 37 °C a body may not cool at all, or may even warm. Other signs such as rigor, lividity, decomposition and entomology must then be used."
  },
  {
    id: 68,
    question: "Match List I (hair feature) with List II (typical source). List I: A. Imbricate (flattened) scales, B. Coronal (crown-like) scales, C. Spinous (petal-like) scales, D. Ladder-type medulla. List II: 1. Rabbit, 2. Human, 3. Cat, 4. Bat and small rodents",
    options: ["A-2, B-3, C-4, D-1", "A-4, B-2, C-3, D-1", "A-2, B-4, C-3, D-1", "A-2, B-4, C-1, D-3"],
    answer: 2,
    explanation: "Human hair has flattened imbricate scales. Coronal scales that stack like crowns are seen in bats and small rodents, and spinous scales in cats, mink and seals. A ladder-like medulla is typical of rabbit hair."
  },
  {
    id: 69,
    question: "Consider the following statements about fingerprints: 1. Loops are the most common fingerprint pattern. 2. The Henry classification was developed in British India with the help of Azizul Haque and Hem Chandra Bose. 3. The world's first fingerprint bureau was set up at Calcutta in 1897. Which of the statements given above is/are correct?",
    options: ["1 and 3 only", "1 and 2 only", "1, 2 and 3", "2 and 3 only"],
    answer: 2,
    explanation: "All three are correct. Loops make up about 60–65% of patterns, whorls about 30–35% and arches about 5%. Haque and Bose worked out the mathematical basis of the Henry system, and the Calcutta Anthropometric Bureau became the first fingerprint bureau in 1897."
  },
  {
    id: 70,
    question: "Assertion (A): Species identification of seized meat is commonly done by sequencing the mitochondrial cytochrome b gene. Reason (R): mtDNA is present in high copy number, and cytochrome b varies enough to separate species. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. The high copy number gives results even from cooked or degraded tissue, and the interspecific variation in cyt b (and COI) lets sequences be matched against GenBank or BOLD. This is routine in poaching and beef/venison cases."
  },
  {
    id: 71,
    question: "Match List I (enzyme) with List II (role in DNA work). List I: A. Taq polymerase, B. Proteinase K, C. HinfI, D. Reverse transcriptase. List II: 1. Cuts DNA at specific sites for RFLP analysis, 2. Synthesises cDNA from RNA, 3. Extends primers at high temperature in PCR, 4. Digests proteins during DNA extraction",
    options: ["A-3, B-4, C-2, D-1", "A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2"],
    answer: 3,
    explanation: "Taq polymerase from Thermus aquaticus withstands the denaturation step of PCR. Proteinase K digests nucleases and histones during lysis, and HinfI was a common RFLP restriction enzyme in Europe. Reverse transcriptase makes cDNA for mRNA-based body-fluid identification."
  },
  {
    id: 72,
    question: "Consider the following statements about forensic STR typing: 1. Forensic STR kits mostly use tetranucleotide repeats. 2. The CODIS core set was expanded to 20 loci from 1 January 2017. 3. In common kits, the amelogenin X amplicon is 6 bp shorter than the Y amplicon. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1, 2 and 3", "2 and 3 only", "1 and 3 only"],
    answer: 1,
    explanation: "All three are correct. Tetranucleotide repeats give less stutter than dinucleotides and are easy to size, and the FBI expanded the CODIS core from 13 to 20 loci in 2017. With the classic primers, AMELX gives 106 bp and AMELY 112 bp, a difference caused by a 6 bp deletion in intron 1 of the X gene."
  },
  {
    id: 73,
    question: "Assertion (A): Stutter peaks in STR electropherograms usually appear one repeat unit shorter than the true allele. Reason (R): Slipped-strand mispairing of the polymerase during PCR causes loss of a repeat unit. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Strand slippage loops out one repeat, giving a minor n−1 product that is typically 5–15% of the parent peak height. Analysts set stutter filters so these peaks are not called as alleles, which matters in mixtures."
  },
  {
    id: 74,
    question: "A suspect is heterozygous at locus 1 (allele frequencies 0.1 and 0.2) and homozygous at locus 2 (allele frequency 0.3). Assuming Hardy-Weinberg equilibrium and independence of loci, the random match probability for the two-locus profile is approximately:",
    options: ["1 in 25", "1 in 111", "1 in 2,778", "1 in 278"],
    answer: 3,
    explanation: "Locus 1: 2pq = 2 × 0.1 × 0.2 = 0.04. Locus 2: p² = 0.09. By the product rule, 0.04 × 0.09 = 0.0036, which is about 1 in 278. Each added locus multiplies the rarity, which is why 15–20 locus profiles reach figures in the billions."
  },
  {
    id: 75,
    question: "Consider the following statements about mitochondrial DNA: 1. It is inherited maternally. 2. The hypervariable regions HV1 and HV2 lie in the non-coding control region. 3. mtDNA typing can distinguish between full siblings born to the same mother. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. mtDNA passes from mother to all her children, and the D-loop control region holds HV1 (16024–16365) and HV2 (73–340). Statement 3 is wrong: siblings of the same mother share the same mtDNA haplotype, barring rare heteroplasmy or mutation."
  },
  {
    id: 76,
    question: "Match List I (extraction method) with List II (feature). List I: A. Chelex-100, B. Phenol-chloroform, C. Differential extraction, D. FTA card. List II: 1. Yields high-molecular-weight double-stranded DNA, 2. Separates sperm from epithelial cells, 3. Allows room-temperature storage of blood spots, 4. Yields single-stranded DNA unsuitable for RFLP",
    options: ["A-3, B-1, C-2, D-4", "A-4, B-2, C-1, D-3", "A-4, B-1, C-2, D-3", "A-1, B-4, C-2, D-3"],
    answer: 2,
    explanation: "Chelex chelates metal ions and is boiled, so it denatures DNA into single strands, which is fine for PCR but not RFLP. Organic extraction gives clean, high-molecular-weight dsDNA, and differential lysis with DTT separates sperm in sexual assault samples. FTA paper lyses cells and binds DNA for stable storage."
  },
  {
    id: 77,
    question: "Assertion (A): A Y-STR profile cannot distinguish a suspect from his brothers or his father. Reason (R): The male-specific region of the Y chromosome does not recombine and passes essentially unchanged from father to son. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Y-STRs give a paternal-lineage haplotype shared by all male relatives on the father's side, apart from occasional mutations. They are very useful for male DNA in female-rich mixtures, but match statistics use haplotype counts from databases such as YHRD."
  },
  {
    id: 78,
    question: "Consider the following statements about real-time PCR quantification of DNA: 1. Kits such as Quantifiler use TaqMan (5′ nuclease) probes. 2. The Ct value is inversely related to the starting quantity of target DNA. 3. An internal PCR control helps detect inhibition. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. Taq's 5′ nuclease cleaves the probe and releases the reporter dye. More template crosses the threshold earlier, so a lower Ct means more DNA, and a delayed IPC signal flags inhibitors such as haem, humic acid or indigo dye before STR amplification."
  },
  {
    id: 79,
    question: "At one locus, a child has inherited allele 16 from the biological father. The alleged father types 12,16, and allele 16 has a population frequency of 0.25. What is the paternity index at this locus?",
    options: ["0.5", "2", "4", "8"],
    answer: 1,
    explanation: "PI = X/Y. A heterozygous alleged father passes allele 16 with probability 0.5, and a random man passes it with probability equal to its frequency, 0.25, so PI = 0.5/0.25 = 2. Common alleles give low PIs, so many loci are multiplied to reach a strong combined paternity index."
  },
  {
    id: 80,
    question: "Assertion (A): MiniSTR kits improve the chance of typing highly degraded DNA. Reason (R): MiniSTRs use longer amplicons than conventional STR kits. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true, but R is false. MiniSTRs move the primers closer to the repeat to make shorter amplicons, often under 150 bp, which are more likely to survive in fragmented DNA. They were used widely in World Trade Center victim identification."
  },
  {
    id: 81,
    question: "Match List I (sequencing method) with List II (principle). List I: A. Sanger sequencing, B. Pyrosequencing, C. Illumina sequencing, D. Ion Torrent. List II: 1. Detection of H⁺ ions released on nucleotide incorporation, 2. Chain termination by dideoxynucleotides, 3. Sequencing by synthesis with reversible dye terminators, 4. Light produced by luciferase from released pyrophosphate",
    options: ["A-2, B-3, C-4, D-1", "A-4, B-2, C-3, D-1", "A-2, B-4, C-1, D-3", "A-2, B-4, C-3, D-1"],
    answer: 3,
    explanation: "Sanger uses ddNTPs that stop chain extension, and pyrosequencing detects light from the PPi → ATP → luciferase cascade. Illumina images reversible fluorescent terminators on clusters, while Ion Torrent senses the pH change from released protons on a semiconductor chip."
  },
  {
    id: 82,
    question: "In a population in Hardy-Weinberg equilibrium, 16% of individuals show a recessive autosomal trait. What proportion of the population are heterozygous carriers?",
    options: ["0.24", "0.36", "0.48", "0.16"],
    answer: 2,
    explanation: "q² = 0.16, so q = 0.4 and p = 0.6. Carriers make up 2pq = 2 × 0.6 × 0.4 = 0.48. The homozygous dominant fraction is p² = 0.36, and the three fractions add to 1."
  },
  {
    id: 83,
    question: "Assertion (A): Low-template DNA typing with extra PCR cycles (for example 34 instead of 28) is prone to allele drop-in. Reason (R): The higher sensitivity also amplifies stray contaminating DNA fragments. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Extra cycles let a few picograms of target be typed, but sporadic contaminant alleles are amplified too and appear as drop-in, while stochastic effects cause drop-out and heterozygote imbalance. Replicate amplification and consensus profiles are used to manage this."
  },
  {
    id: 84,
    question: "Consider the following statements about SNPs in forensic genetics: 1. Most SNPs are biallelic. 2. SNPs can be typed with very short amplicons, which helps with degraded samples. 3. More SNP loci than STR loci are needed for the same discrimination power. 4. SNP panels can predict biogeographic ancestry and externally visible traits such as eye colour. Which of the statements given above are correct?",
    options: ["1 and 2 only", "1, 2 and 4 only", "1, 2, 3 and 4", "3 and 4 only"],
    answer: 2,
    explanation: "All four are correct. Because each SNP usually has only two alleles, it carries less information than a multi-allelic STR, so roughly 50 or more SNPs are needed to match a standard STR profile. Their short targets suit degraded remains, and systems such as HIrisPlex predict eye and hair colour."
  },
  {
    id: 85,
    question: "Match List I (component in STR capillary electrophoresis) with List II (function). List I: A. Hi-Di formamide, B. LIZ size standard, C. POP-4 polymer, D. Allelic ladder. List II: 1. Sieving medium in the capillary, 2. Denatures DNA into single strands before injection, 3. Internal sizing standard run with every sample, 4. Reference for assigning allele designations",
    options: ["A-3, B-2, C-1, D-4", "A-2, B-3, C-1, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-1, D-2"],
    answer: 1,
    explanation: "Formamide keeps DNA single-stranded after heat denaturation, and the LIZ-labelled standard in every well lets fragment sizes be calculated. The polymer separates fragments by size. The allelic ladder contains the common alleles and converts base-pair sizes into allele numbers."
  },
  {
    id: 86,
    question: "Assertion (A): In capillary electrophoresis, DNA fragments migrate towards the cathode. Reason (R): DNA carries a net negative charge because of its phosphate backbone. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 3,
    explanation: "A is false: negatively charged DNA moves towards the positive electrode (anode). R is true, since each phosphodiester group carries a negative charge. The constant charge-to-mass ratio means separation in the polymer depends on fragment size."
  },
  {
    id: 87,
    question: "Consider the following statements about Rapid DNA instruments: 1. They carry out extraction, amplification, separation and detection in a single instrument. 2. They can produce an STR profile from a reference buccal swab in under two hours. 3. They are best suited to complex multi-contributor crime-scene mixtures. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statements 1 and 2 are correct. Fully automated systems such as ANDE and RapidHIT give a profile in about 90–120 minutes. Statement 3 is wrong: they are designed for single-source reference samples, and complex or low-level mixtures still need a full laboratory workflow."
  },
  {
    id: 88,
    question: "A DNA profile from a crime stain matches a suspect, with a random match probability of 1 in 50 million. Which statement correctly expresses the strength of this evidence?",
    options: ["There is a 1 in 50 million chance that the suspect is innocent", "The suspect is 50 million times more likely to be guilty than innocent", "The evidence is about 50 million times more likely if the suspect is the source than if an unrelated random person is the source", "Exactly 50 million other people could have left the stain"],
    answer: 2,
    explanation: "The likelihood ratio, 1/RMP = 5 × 10⁷, compares the probability of the evidence under the two source hypotheses. Turning it into a probability of innocence or guilt is the prosecutor's fallacy, because that also needs the prior odds and the other evidence in the case."
  },
  {
    id: 89,
    question: "Match List I (scientist) with List II (contribution). List I: A. Erwin Chargaff, B. Meselson and Stahl, C. Kary Mullis, D. Frederick Sanger. List II: 1. Polymerase chain reaction, 2. Base composition rules (A = T, G = C), 3. Chain-termination DNA sequencing, 4. Semi-conservative replication",
    options: ["A-2, B-4, C-1, D-3", "A-4, B-2, C-1, D-3", "A-2, B-1, C-4, D-3", "A-2, B-4, C-3, D-1"],
    answer: 0,
    explanation: "Chargaff's rules (1950) supported Watson-Crick base pairing, and Meselson and Stahl's ¹⁵N/¹⁴N experiment (1958) proved semi-conservative replication. Mullis invented PCR in 1983 (Nobel 1993), and Sanger's dideoxy method (1977) earned his second Nobel Prize."
  },
  {
    id: 90,
    question: "Assertion (A): X-STR markers are especially useful in deficiency paternity cases where the disputed child is a daughter. Reason (R): A father passes his single X chromosome, essentially unchanged, to every daughter. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Paternal half-sisters share the same paternal X haplotype, so X-STRs can test relationships such as whether two women share a father, even when he is unavailable. They are not useful for father-son questions."
  },
  {
    id: 91,
    question: "Match List I (crystal test) with List II (product formed). List I: A. Takayama test, B. Teichmann test, C. Florence test, D. Barberio test. List II: 1. Pyridine haemochromogen, 2. Choline periodide, 3. Spermine picrate, 4. Haemin (haematin chloride)",
    options: ["A-4, B-1, C-2, D-3", "A-1, B-4, C-3, D-2", "A-1, B-4, C-2, D-3", "A-1, B-2, C-4, D-3"],
    answer: 2,
    explanation: "Takayama and Teichmann are confirmatory tests for blood, giving pink haemochromogen and brown rhombic haemin crystals respectively. Florence (iodine–KI) gives brown choline periodide crystals and Barberio (picric acid) gives yellow spermine picrate. Both semen tests are presumptive."
  },
  {
    id: 92,
    question: "Consider the following statements about semen identification: 1. Acid phosphatase activity in seminal fluid is far higher than in other body fluids. 2. In the AP spot test with Brentamine Fast Blue, a purple colour develops. 3. Prostate-specific antigen (p30) helps identify semen from azoospermic men. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. Prostatic acid phosphatase is several hundred times more concentrated in semen than in vaginal secretions, and it gives a rapid purple colour with α-naphthyl phosphate and Brentamine Fast Blue B. PSA (p30, KLK3) comes from the prostate, so it is present even without sperm."
  },
  {
    id: 93,
    question: "Assertion (A): A stain of semen from a vasectomised man can give a positive p30 test while no spermatozoa are seen. Reason (R): p30 is produced by the prostate gland and not by the testes. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Vasectomy blocks sperm from the testes, but the prostatic and seminal vesicle secretions continue, so PSA, AP and semenogelin markers remain. Y-STR typing can then recover the male profile from epithelial and other cells."
  },
  {
    id: 94,
    question: "Match List I (body fluid) with List II (identification test). List I: A. Saliva, B. Urine, C. Faeces, D. Vaginal fluid. List II: 1. Edelman's test for urobilinogen, 2. Lugol's iodine staining of glycogenated epithelial cells, 3. Phadebas test, 4. Jaffe test for creatinine",
    options: ["A-4, B-3, C-1, D-2", "A-3, B-4, C-1, D-2", "A-3, B-1, C-4, D-2", "A-3, B-4, C-2, D-1"],
    answer: 1,
    explanation: "Phadebas releases blue dye from cross-linked starch through amylase activity, and the Jaffe reaction (alkaline picrate) shows creatinine in urine. Edelman's zinc chloride test makes faecal urobilinogen fluoresce. Vaginal epithelial cells rich in glycogen stain brown with Lugol's iodine."
  },
  {
    id: 95,
    question: "Consider the following statements about ABO grouping of stains: 1. Absorption-elution is more sensitive than absorption-inhibition. 2. The Lattes crust test detects antibodies (isoagglutinins) in dried blood. 3. Secretor status is determined by the Rh gene. Which of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statements 1 and 2 are correct. Elution recovers antibody bound to the stain antigens and needs only tiny amounts of sample, and Lattes (1915) added indicator A, B and O cells to dried flakes to detect anti-A and anti-B. Statement 3 is wrong: secretor status is controlled by the FUT2 (Se) gene."
  },
  {
    id: 96,
    question: "Assertion (A): The precipitin test can determine whether a bloodstain is of human origin. Reason (R): Antiserum raised in an animal against human serum proteins reacts only with human (and closely related primate) proteins. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Uhlenhuth's precipitin reaction (1901) gives a visible precipitate where species-specific antibody meets antigen extracted from the stain. Higher primates may cross-react, which is a known limitation."
  },
  {
    id: 97,
    question: "Match List I (immunological technique) with List II (principle). List I: A. Ouchterlony double diffusion, B. Crossover (counter-current) electrophoresis, C. Rocket immunoelectrophoresis, D. ELISA. List II: 1. Antigen and antibody are driven towards each other by an electric field, 2. Antigen migrates into antibody-containing gel forming rocket-shaped peaks, 3. Antigen and antibody diffuse passively towards each other in agar, 4. Colour develops from an enzyme acting on its substrate",
    options: ["A-1, B-3, C-2, D-4", "A-3, B-2, C-1, D-4", "A-3, B-1, C-4, D-2", "A-3, B-1, C-2, D-4"],
    answer: 3,
    explanation: "Ouchterlony relies on free diffusion, forming precipitin lines between wells. Crossover electrophoresis uses buffer pH so antigen and antibody move in opposite directions, giving faster and more sensitive results. Laurell's rocket height is proportional to antigen concentration, and ELISA uses an enzyme-labelled conjugate."
  },
  {
    id: 98,
    question: "Consider the following statements about lateral-flow (immunochromatographic) tests used in serology: 1. RSID-Saliva detects human salivary α-amylase. 2. ABAcard HemaTrace detects human haemoglobin. 3. A very high antigen concentration can cause a false negative (high-dose hook effect). Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    answer: 2,
    explanation: "All three are correct. These cards use monoclonal antibodies on a membrane strip and test for both the body fluid and human origin. When antigen is in excess, both capture and detection antibodies are saturated and the test line may fail to form, so concentrated stains are diluted and retested."
  },
  {
    id: 99,
    question: "Assertion (A): Luminol is used to detect latent bloodstains on surfaces that have been cleaned. Reason (R): The luminol reaction is specific for human blood. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true: luminol's blue chemiluminescence, catalysed by haem, reveals diluted or washed-out blood in darkened rooms. R is false, because luminol reacts with blood of any animal and gives false positives with bleach (hypochlorite), copper and some plant peroxidases. Human origin must be confirmed separately."
  },
  {
    id: 100,
    question: "In a population, the frequency of blood group B is 0.35 and the frequency of Rh-negative individuals is 0.05. If the two systems are inherited independently, what proportion of people are B-negative?",
    options: ["0.035", "0.175", "0.0175", "0.40"],
    answer: 2,
    explanation: "For independent traits, multiply the frequencies: 0.35 × 0.05 = 0.0175, or about 1.75%. The same product rule underlies combining DNA loci, but only when the systems are genetically independent."
  },
  {
    id: 101,
    question: "Match List I (blood group system) with List II (discovered by). List I: A. ABO, B. Rh, C. Bombay phenotype, D. MN. List II: 1. Bhende and colleagues, 2. Landsteiner and Wiener, 3. Landsteiner alone, 4. Landsteiner and Levine",
    options: ["A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-3, B-4, C-1, D-2", "A-3, B-2, C-4, D-1"],
    answer: 1,
    explanation: "Landsteiner described ABO in 1900–01, and with Levine the MN and P systems in 1927. With Wiener he reported the Rh factor in 1940. The Bombay (Oh) phenotype was described by Y.M. Bhende and colleagues in Mumbai in 1952."
  },
  {
    id: 102,
    question: "Consider the following statements about the Bombay (Oh) phenotype: 1. Red cells lack the H antigen. 2. Serum contains anti-H in addition to anti-A and anti-B. 3. It types as group O in routine forward grouping. 4. Such a person can safely receive group O blood. Which of the statements given above are correct?",
    options: ["1, 2, 3 and 4", "1 and 2 only", "2, 3 and 4 only", "1, 2 and 3 only"],
    answer: 3,
    explanation: "Statements 1–3 are correct. Homozygous hh individuals cannot make the H precursor, so no A, B or H antigen forms and the cells look like group O. Statement 4 is wrong: their strong anti-H reacts with normal O cells, which are rich in H antigen, so they can receive only Bombay blood."
  },
  {
    id: 103,
    question: "Assertion (A): Dried semen stains on fabric fluoresce under ultraviolet or alternate light sources. Reason (R): Semen contains fluorescent compounds such as flavins and choline-conjugated proteins. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. The fluorescent constituents make semen glow bluish-white under UV or 450 nm light with orange goggles, which helps locate stains for AP testing and cutting. Fluorescence is only a screening aid, since saliva, urine and detergents can also fluoresce."
  },
  {
    id: 104,
    question: "Match List I (test/stain) with List II (target). List I: A. Christmas tree stain, B. Phadebas test, C. Brentamine Fast Blue test, D. Leucomalachite green test. List II: 1. Salivary amylase, 2. Blood (haem peroxidase activity), 3. Spermatozoa, 4. Seminal acid phosphatase",
    options: ["A-3, B-4, C-1, D-2", "A-4, B-1, C-3, D-2", "A-3, B-1, C-4, D-2", "A-1, B-3, C-4, D-2"],
    answer: 2,
    explanation: "The Christmas tree stain (nuclear fast red with picroindigocarmine) shows sperm heads red and tails green. Phadebas measures amylase, Brentamine Fast Blue is the AP spot reagent, and leucomalachite green turns blue-green with haem and peroxide."
  },
  {
    id: 105,
    question: "Consider the following statements about menstrual blood: 1. It contains endometrial cells. 2. It has high levels of fibrin degradation products. 3. mRNA markers such as MMP-7 and MMP-11 help distinguish it from peripheral blood. Which of the statements given above is/are correct?",
    options: ["1 and 3 only", "1, 2 and 3", "2 and 3 only", "1 only"],
    answer: 1,
    explanation: "All three are correct. Menstrual discharge has endometrial and vaginal cells, and fibrinolysis keeps it fluid, so FDP levels are raised. Matrix metalloproteinase transcripts are endometrium-specific. This can matter when a suspect claims a stain is menstrual and not from injury."
  },
  {
    id: 106,
    question: "Assertion (A): Secretor status can be inferred from Lewis typing of red cells. Reason (R): Le(a+b−) individuals are generally ABH non-secretors, while Le(a−b+) individuals are secretors. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. In secretors, the FUT2 enzyme converts Lewis-a substance to Lewis-b, so their cells type Le(b+). Non-secretors leave Le-a unconverted. About 80% of people secrete ABH antigens in saliva, semen and other fluids, which allows grouping of body-fluid stains."
  },
  {
    id: 107,
    question: "Match List I (antibody class) with List II (feature). List I: A. IgM, B. IgG, C. IgA, D. IgE. List II: 1. Main antibody in saliva and tears, 2. Bound to mast cells in allergy, 3. Pentamer and the main class of natural anti-A and anti-B, 4. Crosses the placenta, as with anti-D in haemolytic disease of the newborn",
    options: ["A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-3, B-4, C-2, D-1", "A-3, B-4, C-1, D-2"],
    answer: 3,
    explanation: "IgM pentamers are efficient agglutinins, and natural ABO antibodies are mostly IgM. IgG is the only class that crosses the placenta, so maternal anti-D causes haemolytic disease of the newborn. Secretory IgA protects mucosal surfaces, and IgE binds mast cells and basophils in type I hypersensitivity."
  },
  {
    id: 108,
    question: "Consider the following statements about monoclonal antibodies: 1. Hybridoma technology was developed by Köhler and Milstein in 1975. 2. Hybridomas are made by fusing antibody-producing B lymphocytes with myeloma cells. 3. HAT medium is used to select the fused hybrid cells. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1, 2 and 3", "1 only", "2 and 3 only"],
    answer: 1,
    explanation: "All three are correct. The myeloma partner lacks HGPRT, so unfused myeloma cells die in HAT medium, and unfused B cells die naturally, leaving only hybridomas. The monoclonal antibodies they produce give the specificity of modern forensic immunoassays. Köhler and Milstein shared the 1984 Nobel Prize."
  },
  {
    id: 109,
    question: "Assertion (A): Foetal haemoglobin resists denaturation by alkali better than adult haemoglobin. Reason (R): HbF contains δ (delta) chains in place of β chains. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true, and it is the basis of Singer's alkali denaturation test for foetal or newborn blood in infanticide and concealed-birth cases. R is false: HbF is α2γ2, with gamma chains. Delta chains belong to the minor adult haemoglobin HbA2 (α2δ2)."
  },
  {
    id: 110,
    question: "Arrange the steps of the absorption-elution technique for ABO grouping of a dried bloodstain in the correct order: 1. Heat to about 56 °C to elute bound antibody, 2. Add antisera to fixed stain threads and allow binding, 3. Add indicator red cells to the eluate and look for agglutination, 4. Wash away unbound antibody",
    options: ["2-4-1-3", "4-2-1-3", "2-1-4-3", "2-4-3-1"],
    answer: 0,
    explanation: "Antibody binds the stain's antigens, excess antibody is washed off, and heat releases the bound antibody into fresh saline. Agglutination of known A or B cells by the eluate then shows which antigen was present. Thorough washing is critical, or carry-over antibody gives false results."
  },
  {
    id: 111,
    question: "Match List I (instrument) with List II (principle). List I: A. Atomic absorption spectroscopy, B. FTIR spectroscopy, C. GC-MS, D. NMR spectroscopy. List II: 1. Vibrational transitions of chemical bonds, 2. Ground-state atoms absorbing element-specific light from a hollow cathode lamp, 3. Nuclear spin transitions in a magnetic field, 4. Chromatographic separation followed by mass fragmentation",
    options: ["A-2, B-1, C-4, D-3", "A-1, B-2, C-4, D-3", "A-2, B-4, C-1, D-3", "A-3, B-1, C-4, D-2"],
    answer: 0,
    explanation: "AAS measures metals such as lead, arsenic and thallium through absorption by atomised ground-state atoms. FTIR fingerprints functional groups by bond vibrations, and GC-MS separates compounds and then identifies them from their fragmentation patterns. NMR probes nuclear spin environments to work out structures."
  },
  {
    id: 112,
    question: "Two compounds, X and Y, run on the same TLC plate have Rf values of 0.30 and 0.75. If the solvent front travelled 8.0 cm, how far apart are the two spots?",
    options: ["2.4 cm", "3.6 cm", "6.0 cm", "4.5 cm"],
    answer: 1,
    explanation: "X moves 0.30 × 8.0 = 2.4 cm and Y moves 0.75 × 8.0 = 6.0 cm, so the spots are 3.6 cm apart, which is (0.75 − 0.30) × 8.0. A good separation helps confirm that a questioned sample contains two distinct components."
  },
  {
    id: 113,
    question: "Consider the following statements about the Beer-Lambert law: 1. Absorbance A = εbc. 2. Absorbance is a dimensionless quantity. 3. The law tends to deviate at high analyte concentrations. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 and 3 only"],
    answer: 2,
    explanation: "All three are correct. Absorbance is log(I₀/I), a ratio with no units, and it is proportional to molar absorptivity, path length and concentration. At high concentrations, solute interactions and refractive-index changes make the calibration curve bend, so samples are diluted into the linear range."
  },
  {
    id: 114,
    question: "Under identical conditions, a 10 µg/mL standard of a drug gives an absorbance of 0.25, and a questioned extract gives 0.40. Assuming Beer-Lambert behaviour, what is the drug concentration in the extract?",
    options: ["6.25 µg/mL", "25 µg/mL", "40 µg/mL", "16 µg/mL"],
    answer: 3,
    explanation: "Absorbance is proportional to concentration, so C = 10 × (0.40/0.25) = 16 µg/mL. Single-point calibration like this is valid only within the linear range. Labs normally use a multi-point calibration curve."
  },
  {
    id: 115,
    question: "Assertion (A): Gas chromatography is unsuitable for direct analysis of thermally labile, non-volatile drugs. Reason (R): In GC the analyte must be vaporised and carried through the column in the gas phase. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Polar or heat-sensitive compounds such as benzodiazepines and some opiate glucuronides decompose or fail to vaporise in the hot injector. They are either derivatised (for example by silylation) or analysed by HPLC or LC-MS/MS instead."
  },
  {
    id: 116,
    question: "Match List I (drug) with List II (natural source). List I: A. Cocaine, B. Mescaline, C. Psilocybin, D. Δ⁹-THC. List II: 1. Cannabis sativa, 2. Lophophora williamsii (peyote), 3. Erythroxylum coca, 4. Psilocybe mushrooms",
    options: ["A-3, B-4, C-2, D-1", "A-2, B-3, C-4, D-1", "A-3, B-2, C-1, D-4", "A-3, B-2, C-4, D-1"],
    answer: 3,
    explanation: "Cocaine is a tropane alkaloid from coca leaves, and mescaline is a phenethylamine from the peyote cactus. Psilocybin is a tryptamine from 'magic mushrooms', and THC is the main psychoactive cannabinoid of Cannabis. Cocaine and cannabis are controlled under the NDPS Act, 1985."
  },
  {
    id: 117,
    question: "Consider the following statements about colour (spot) tests for drugs: 1. The Marquis reagent gives a purple colour with heroin and morphine. 2. In the Duquenois-Levine test, a purple colour passes into the chloroform layer with cannabis. 3. The Scott (cobalt thiocyanate) test gives a blue colour with cocaine. 4. Simon's test is used mainly for barbiturates. Which of the statements given above are correct?",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 1,
    explanation: "Statements 1–3 are correct. Statement 4 is wrong: Simon's test (sodium nitroprusside with acetaldehyde) gives blue with secondary amines such as methamphetamine and MDMA, while barbiturates are screened by the Dille-Koppanyi test. All colour tests are presumptive and need GC-MS confirmation."
  },
  {
    id: 118,
    question: "Assertion (A): Electrospray ionisation is a hard ionisation technique that produces extensive fragmentation. Reason (R): Electrospray ionisation mainly produces intact protonated molecules such as [M+H]⁺. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 3,
    explanation: "A is false: ESI is a soft technique that transfers ions from charged droplets with little fragmentation. R is true, since ESI gives [M+H]⁺ or multiply charged ions, which suits LC-MS/MS of drugs and proteins. Electron ionisation at 70 eV is the hard technique used in GC-MS libraries."
  },
  {
    id: 119,
    question: "Match List I (poison) with List II (specific antidote/treatment). List I: A. Organophosphate, B. Cyanide, C. Methanol, D. Paracetamol. List II: 1. N-acetylcysteine, 2. Fomepizole, 3. Atropine with pralidoxime, 4. Sodium thiosulphate",
    options: ["A-4, B-3, C-2, D-1", "A-3, B-2, C-4, D-1", "A-3, B-4, C-2, D-1", "A-3, B-4, C-1, D-2"],
    answer: 2,
    explanation: "Atropine blocks muscarinic effects of acetylcholine excess, and pralidoxime reactivates cholinesterase. Thiosulphate helps rhodanese convert cyanide to thiocyanate, and fomepizole blocks alcohol dehydrogenase so methanol is not turned into formic acid. NAC replenishes glutathione in paracetamol overdose."
  },
  {
    id: 120,
    question: "Consider the following statements about microscopy in forensic work: 1. Resolution improves as the wavelength of illumination decreases. 2. SEM gives three-dimensional surface images and, with EDX, elemental analysis useful for gunshot residue. 3. A polarising microscope distinguishes isotropic from anisotropic (birefringent) fibres. Which of the statements given above is/are correct?",
    options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
    answer: 0,
    explanation: "All three are correct. Abbe's limit (d ≈ 0.61λ/NA) shows why electron beams resolve far finer detail than light. SEM-EDX identifies the lead-barium-antimony particles of GSR, and crossed polars reveal birefringence of synthetic fibres, asbestos and some crystals."
  },
  {
    id: 121,
    question: "Using RCF = 1.118 × 10⁻⁵ × r × N², where r is in cm and N in rpm, approximately what speed is needed to obtain 2,000 × g in a rotor of radius 8 cm?",
    options: ["≈ 1,500 rpm", "≈ 4,730 rpm", "≈ 7,000 rpm", "≈ 22,400 rpm"],
    answer: 1,
    explanation: "N² = 2,000/(1.118 × 10⁻⁵ × 8) = 2,000/(8.944 × 10⁻⁵) ≈ 2.24 × 10⁷, so N ≈ 4,730 rpm. A rotor with a larger radius needs fewer rpm for the same g-force, which is why protocols specify × g rather than rpm."
  },
  {
    id: 122,
    question: "Assertion (A): In reversed-phase HPLC, more polar compounds elute before less polar ones. Reason (R): Reversed-phase HPLC uses a non-polar stationary phase such as C18 with a polar mobile phase. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Polar analytes interact weakly with the hydrophobic C18 chains and stay in the aqueous-organic mobile phase, so they come out first. Increasing the organic solvent (methanol or acetonitrile) speeds up elution of the non-polar compounds."
  },
  {
    id: 123,
    question: "Match List I (electrophoresis type) with List II (basis of separation/use). List I: A. Isoelectric focusing, B. SDS-PAGE, C. Pulsed-field gel electrophoresis, D. Two-dimensional PAGE. List II: 1. Very large (megabase) DNA fragments, 2. Isoelectric point in a pH gradient, 3. Isoelectric point first, then molecular mass, 4. Molecular mass of denatured proteins",
    options: ["A-4, B-2, C-1, D-3", "A-2, B-4, C-1, D-3", "A-2, B-1, C-4, D-3", "A-3, B-4, C-1, D-2"],
    answer: 1,
    explanation: "IEF stops each protein where pH equals its pI, and SDS gives proteins a uniform charge-to-mass ratio so they separate by size. Alternating fields in PFGE resolve very large DNA. 2D-PAGE combines IEF and SDS-PAGE and was the classic tool of proteomics."
  },
  {
    id: 124,
    question: "Consider the following statements about the NDPS Act: 1. It was enacted in 1985. 2. Punishment depends on whether the quantity seized is small, intermediate or commercial. 3. Section 52A provides for sampling, inventory and disposal of seized drugs. 4. Under the Act, 'ganja' includes the seeds and leaves of the cannabis plant even when not accompanied by the tops. Which of the statements given above are correct?",
    options: ["1 and 2 only", "2, 3 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"],
    answer: 2,
    explanation: "Statements 1–3 are correct. Statement 4 is wrong: ganja is defined as the flowering or fruiting tops of the cannabis plant, excluding seeds and leaves not accompanied by the tops. This is why bhang made from leaves falls outside 'ganja' and is regulated by state excise laws."
  },
  {
    id: 125,
    question: "Assertion (A): Detection of 6-monoacetylmorphine (6-MAM) in urine indicates heroin use and not merely morphine or codeine intake. Reason (R): 6-MAM is formed only from the deacetylation of diacetylmorphine. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Heroin is quickly deacetylated to 6-MAM and then to morphine. Since neither morphine nor codeine can form 6-MAM, its presence is a specific marker of heroin, though its short half-life means it is detectable only for a few hours."
  },
  {
    id: 126,
    question: "Match List I (region of the electromagnetic spectrum) with List II (molecular process probed). List I: A. Ultraviolet-visible, B. Infrared, C. Microwave, D. Radiofrequency (in a magnetic field). List II: 1. Rotational transitions, 2. Nuclear spin transitions, 3. Electronic transitions, 4. Vibrational transitions",
    options: ["A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-1, B-4, C-3, D-2", "A-3, B-4, C-1, D-2"],
    answer: 3,
    explanation: "UV-visible photons excite valence electrons, infrared excites bond vibrations, and microwaves drive molecular rotations. Radiofrequency radiation flips nuclear spins in a strong magnetic field, which is the basis of NMR. Energy falls in that order as wavelength increases."
  },
  {
    id: 127,
    question: "Consider the following statements about mass analysers: 1. In a time-of-flight analyser, ions of lower m/z reach the detector first. 2. A quadrupole filters ions by m/z using combined RF and DC voltages. 3. Triple-quadrupole instruments allow multiple reaction monitoring (MRM) for targeted quantification. Which of the statements given above is/are correct?",
    options: ["1 and 3 only", "1, 2 and 3", "2 and 3 only", "1 and 2 only"],
    answer: 1,
    explanation: "All three are correct. In TOF, ions given the same kinetic energy travel at speeds inversely related to √(m/z), so lighter ions arrive first. A quadrupole passes only a chosen m/z on a stable path, and MRM pairs a precursor ion with a product ion for very selective toxicology assays."
  },
  {
    id: 128,
    question: "Assertion (A): Breath analysers estimate blood alcohol concentration using a blood:breath partition ratio of about 2100:1. Reason (R): Alcohol in deep alveolar air is in equilibrium with alcohol in pulmonary capillary blood (Henry's law). Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. At equilibrium, about 2,100 mL of alveolar air holds the same amount of ethanol as 1 mL of blood, so breath concentration can be converted to BAC. Mouth alcohol and incomplete exhalation are sources of error, hence the observation period before testing."
  },
  {
    id: 129,
    question: "Match List I (poison) with List II (characteristic finding). List I: A. Carbon monoxide, B. Cyanide, C. Arsenic (chronic), D. Lead (chronic). List II: 1. Burton's blue line on the gums, 2. Mees' lines on the nails, 3. Cherry-red post-mortem lividity, 4. Bitter-almond odour",
    options: ["A-1, B-4, C-2, D-3", "A-4, B-3, C-2, D-1", "A-3, B-2, C-4, D-1", "A-3, B-4, C-2, D-1"],
    answer: 3,
    explanation: "Carboxyhaemoglobin gives cherry-red lividity, and HCN has a bitter-almond smell that only some people can detect. Chronic arsenic causes transverse white Mees' lines on nails, and chronic lead gives a bluish Burtonian line of lead sulphide at the gum margin."
  },
  {
    id: 130,
    question: "Consider the following statements about thin-layer chromatography: 1. Silica gel is a polar stationary phase. 2. The Rf value can never exceed 1. 3. Spots can be seen under UV light at 254 nm on plates with a fluorescent indicator. 4. The Rf value of a compound does not depend on the solvent system used. Which of the statements given above are correct?",
    options: ["1, 2, 3 and 4", "1, 2 and 3 only", "1 and 2 only", "2 and 4 only"],
    answer: 1,
    explanation: "Statements 1–3 are correct. Compounds that quench the F254 indicator appear as dark spots on a green background. Statement 4 is wrong, because Rf depends strongly on mobile-phase polarity, layer thickness, temperature and chamber saturation, which is why standards are co-spotted."
  },
  {
    id: 131,
    question: "Match List I (institution) with List II (location). List I: A. National Forensic Sciences University, B. Centre for DNA Fingerprinting and Diagnostics, C. LNJN National Institute of Criminology and Forensic Science, D. India's first CFSL (1957). List II: 1. Kolkata, 2. Hyderabad, 3. New Delhi, 4. Gandhinagar",
    options: ["A-2, B-4, C-3, D-1", "A-4, B-3, C-2, D-1", "A-4, B-2, C-3, D-1", "A-1, B-2, C-3, D-4"],
    answer: 2,
    explanation: "NFSU, a university set up by Act of Parliament, is headquartered at Gandhinagar, and CDFD (Department of Biotechnology) is at Hyderabad. NICFS, under the MHA, is at Rohini, New Delhi. The first Central Forensic Science Laboratory was set up at Kolkata in 1957."
  },
  {
    id: 132,
    question: "Consider the following statements: 1. The State Forensic Science Laboratory of Madhya Pradesh is located at Sagar. 2. Section 176(3) of the BNSS, 2023 provides for a forensic expert to visit the crime scene to collect forensic evidence in offences punishable with seven years or more. 3. Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 deals with admissibility of electronic records. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. MP's main FSL is at Sagar, supported by regional FSLs. BNSS Section 176(3) provides for a forensic scene visit in offences punishable with 7 years or more, applicable from a date each State Government notifies within 5 years (it did not start automatically on 1 July 2024). BSA Section 63 replaced Section 65B of the Indian Evidence Act on electronic evidence certificates."
  },
  {
    id: 133,
    question: "Assertion (A): Wet biological stains on clothing should be air-dried before packaging. Reason (R): Moisture encourages bacterial and fungal growth, which degrades DNA and proteins. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Damp items sealed in plastic quickly putrefy, destroying DNA and serological markers. They are dried at room temperature away from direct heat and sunlight, then packed separately in paper bags or envelopes with proper labels and seals."
  },
  {
    id: 134,
    question: "Match List I (sample) with List II (recommended preservative/packaging). List I: A. Liquid blood for DNA, B. Blood for alcohol estimation, C. Viscera in a routine poisoning case, D. Dried bloodstained clothing. List II: 1. Paper bag after air-drying, 2. Sodium fluoride (with oxalate), 3. EDTA, 4. Saturated common salt solution",
    options: ["A-2, B-3, C-4, D-1", "A-3, B-2, C-4, D-1", "A-3, B-4, C-2, D-1", "A-4, B-2, C-3, D-1"],
    answer: 1,
    explanation: "EDTA (lavender top) chelates Mg²⁺ and inhibits DNases. Sodium fluoride stops glycolysis and microbial alcohol production or loss. In India, viscera are preserved in saturated NaCl, except in suspected acid poisoning where rectified spirit is used, and dried stained clothing goes in paper."
  },
  {
    id: 135,
    question: "Consider the following statements about CRISPR-Cas9: 1. Cas9 is directed to its target by a single guide RNA. 2. SpCas9 needs an NGG protospacer adjacent motif (PAM) next to the target. 3. Jennifer Doudna and Emmanuelle Charpentier received the 2020 Nobel Prize in Chemistry for this genome-editing method. Which of the statements given above is/are correct?",
    options: ["1, 2 and 3", "1 and 3 only", "2 and 3 only", "1 and 2 only"],
    answer: 0,
    explanation: "All three are correct. The sgRNA fuses crRNA and tracrRNA and base-pairs with about 20 nt of target DNA, and Cas9 cuts both strands three bases upstream of the PAM. Without a PAM, Cas9 does not cleave, which is also how bacteria avoid cutting their own CRISPR array."
  },
  {
    id: 136,
    question: "Assertion (A): The SHERLOCK diagnostic platform uses Cas13 to detect specific nucleic acid sequences. Reason (R): On recognising its RNA target, Cas13 shows collateral cleavage of nearby reporter RNA, producing a signal. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Once activated by its target, Cas13 cleaves any single-stranded RNA nearby, including quenched fluorescent reporters, which gives attomolar sensitivity. DETECTR uses Cas12a's similar collateral DNase activity, and both are being studied for rapid species and body-fluid tests."
  },
  {
    id: 137,
    question: "Match List I (database) with List II (content). List I: A. STRBase, B. YHRD, C. EMPOP, D. Protein Data Bank (PDB). List II: 1. Mitochondrial DNA population data, 2. Three-dimensional structures of macromolecules, 3. STR marker information maintained by NIST, 4. Y-STR haplotypes",
    options: ["A-3, B-1, C-4, D-2", "A-4, B-3, C-1, D-2", "A-3, B-4, C-2, D-1", "A-3, B-4, C-1, D-2"],
    answer: 3,
    explanation: "STRBase (NIST) catalogues STR loci, kits and variant alleles, and YHRD holds Y-STR haplotypes for counting-method statistics. EMPOP is a quality-controlled forensic mtDNA database. The PDB archives experimentally determined 3D structures of proteins and nucleic acids."
  },
  {
    id: 138,
    question: "Consider the following statements about sequence alignment: 1. BLAST is a heuristic local alignment search tool. 2. BLASTn compares nucleotide queries and BLASTp compares protein queries. 3. A smaller E-value indicates a more significant match. 4. Smith-Waterman performs local alignment, whereas Needleman-Wunsch performs global alignment. Which of the statements given above are correct?",
    options: ["1, 2 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 and 3 only"],
    answer: 1,
    explanation: "All four are correct. BLAST speeds up searches by seeding with short word hits, and the E-value is the number of hits of that score expected by chance in the database. Smith-Waterman and Needleman-Wunsch are exact dynamic-programming algorithms for local and global alignment respectively."
  },
  {
    id: 139,
    question: "Assertion (A): MALDI-TOF mass spectrometry can be used to identify body fluids through their characteristic protein markers. Reason (R): MALDI is a soft ionisation technique that mainly produces singly charged ions of large biomolecules. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 1,
    explanation: "Both are true, but R describes the ionisation process, not why body fluids can be told apart. Identification depends on tissue-specific proteins, such as semenogelin and PSA in semen, statherin and histatins in saliva, and haemoglobin in blood. MALDI makes these proteins measurable without fragmenting them."
  },
  {
    id: 140,
    question: "Match List I (proteomic technique) with List II (feature). List I: A. Peptide mass fingerprinting, B. 2D-DIGE, C. SILAC, D. Western blot. List II: 1. Antibody detection of a protein after transfer to a membrane, 2. Metabolic labelling with heavy-isotope amino acids, 3. Matching tryptic peptide masses against a database, 4. Differential fluorescent (CyDye) labelling of samples run on the same gel",
    options: ["A-4, B-3, C-2, D-1", "A-3, B-2, C-4, D-1", "A-3, B-4, C-2, D-1", "A-2, B-4, C-3, D-1"],
    answer: 2,
    explanation: "PMF digests a protein with trypsin and compares the measured peptide masses with in-silico digests, and DIGE labels two or three samples with Cy2, Cy3 and Cy5 to avoid gel-to-gel variation. SILAC grows cells with ¹³C/¹⁵N amino acids for relative quantification. Western blotting uses specific antibodies on a membrane."
  },
  {
    id: 141,
    question: "Consider the following statements about chain of custody: 1. It documents every person who handled an item of evidence, with dates and purpose. 2. Section 105 of the BNSS, 2023 requires audio-video recording of search and seizure. 3. Gaps in the chain can reduce the evidentiary weight of an exhibit or make it inadmissible. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 and 3 only", "1, 2 and 3", "2 and 3 only"],
    answer: 2,
    explanation: "All three are correct. An unbroken, signed record from seizure to the FSL to the court shows the exhibit was not tampered with or swapped. BNSS Section 105 mandates electronic recording of search and seizure, including preparation of the seizure list, which strengthens custody documentation."
  },
  {
    id: 142,
    question: "A DNA extract has a concentration of 2 ng/µL. What volume of extract is needed to prepare 20 µL of a 0.1 ng/µL working dilution?",
    options: ["0.5 µL", "1 µL", "2 µL", "10 µL"],
    answer: 1,
    explanation: "Using C₁V₁ = C₂V₂: 2 × V₁ = 0.1 × 20, so V₁ = 1 µL, made up to 20 µL with water or low-TE buffer. Accurate dilution keeps the template in the kit's optimum range, typically 0.5–1 ng, which avoids off-scale peaks or drop-out."
  },
  {
    id: 143,
    question: "Assertion (A): For DNA identification of old skeletal remains, the petrous part of the temporal bone is often the preferred sample. Reason (R): The petrous bone is the most porous and least dense bone of the skull. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 2,
    explanation: "A is true: the petrous portion often gives the highest endogenous DNA yields, which has transformed ancient DNA and old-case work. R is false, because the petrous bone is the densest bone in the body. That density protects its DNA from microbes and the environment."
  },
  {
    id: 144,
    question: "Consider the following statements: 1. The DNA Technology (Use and Application) Regulation Bill, 2019 was withdrawn from Parliament in 2023. 2. CODIS is the DNA database software system developed by the FBI. 3. The UK National DNA Database, set up in 1995, was the world's first national DNA database. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    answer: 2,
    explanation: "All three are correct. India's DNA Bill, which proposed a National DNA Data Bank, was withdrawn in July 2023 over privacy concerns. CODIS links US local, state and national (NDIS) indices, and the UK NDNAD began in April 1995."
  },
  {
    id: 145,
    question: "Match List I (crime-scene search pattern) with List II (best use). List I: A. Spiral, B. Grid, C. Zone/quadrant, D. Line/strip. List II: 1. Dividing a room or vehicle into sections, 2. Large open ground searched by many people walking abreast, 3. Strip search repeated at right angles for thoroughness, 4. Single searcher moving inward or outward from a central point",
    options: ["A-3, B-4, C-1, D-2", "A-4, B-3, C-1, D-2", "A-4, B-1, C-3, D-2", "A-2, B-3, C-1, D-4"],
    answer: 1,
    explanation: "A spiral suits one searcher in an area without obstacles, while the grid (double strip) covers the same ground twice at 90° for thoroughness. Zones break confined spaces into manageable parts, and line searches use teams for large outdoor scenes."
  },
  {
    id: 146,
    question: "Consider the following statements about sequence file formats: 1. A FASTA record begins with a header line starting with '>'. 2. FASTQ stores the sequence together with per-base Phred quality scores. 3. A Phred score of 30 corresponds to a base-call accuracy of 99.9%. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three are correct. Phred Q = −10 log₁₀(P error), so Q30 means a 1 in 1,000 error probability (99.9% accuracy) and Q20 means 99%. FASTQ is the standard raw output of massively parallel sequencers, including forensic MPS platforms."
  },
  {
    id: 147,
    question: "Assertion (A): Probabilistic genotyping software interprets DNA mixtures using only the presence or absence of alleles and ignores peak heights. Reason (R): Continuous models such as STRmix use peak height information to weight possible genotype combinations. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 3,
    explanation: "A is false as a general statement. Only semi-continuous (discrete) models such as LRmix use allele presence alone, while fully continuous systems such as STRmix and TrueAllele model peak heights, stutter and degradation. R is true, and these programs report a likelihood ratio for each contributor."
  },
  {
    id: 148,
    question: "Match List I (CRISPR tool) with List II (feature). List I: A. dCas9, B. Base editor, C. Prime editor, D. Cas12a. List II: 1. Uses a pegRNA and reverse transcriptase to write new sequence, 2. Catalytically dead nuclease that binds DNA without cutting, used in CRISPRi/CRISPRa, 3. Deaminase fusion that changes a single base without a double-strand break, 4. Recognises a T-rich PAM and makes staggered cuts",
    options: ["A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-1, D-2"],
    answer: 0,
    explanation: "dCas9 carries D10A and H840A mutations that abolish cutting but keep RNA-guided binding, so it can block or activate genes. Base editors (for example cytidine or adenine deaminase fused to a Cas9 nickase) make C→T or A→G changes, and prime editors fuse a Cas9 nickase with reverse transcriptase. Cas12a (Cpf1) uses a TTTV PAM and leaves sticky ends."
  },
  {
    id: 149,
    question: "Consider the following statements about storage of forensic samples: 1. DNA extracts are best stored long-term at −20 °C or −80 °C. 2. Wet blood-soaked clothing can be safely stored long-term in sealed plastic bags. 3. Blood collected with sodium fluoride for toxicology should be refrigerated at about 4 °C. Which of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statements 1 and 3 are correct. Freezing slows nuclease activity and hydrolysis of DNA extracts, and refrigerating preserved blood limits drug breakdown and changes in alcohol content. Statement 2 is wrong: plastic traps moisture and causes rapid microbial degradation, so items must be dried and packed in paper."
  },
  {
    id: 150,
    question: "Assertion (A): Massively parallel sequencing can reveal sequence differences within STR alleles of the same length (isoalleles). Reason (R): Capillary electrophoresis separates STR amplicons only by their length. Choose the correct option.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    explanation: "Both are true, and R explains A. Two alleles of equal repeat number can differ by internal SNPs or repeat-motif variants. CE sees them as one peak, while MPS reads the actual sequence and splits them, increasing discrimination, especially in mixtures and kinship cases."
  },
];

export default questions;

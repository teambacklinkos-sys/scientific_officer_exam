const questions = [
  {
    id: 1,
    question: "The Bhimbetka rock shelters of Raisen district, a UNESCO World Heritage Site, were brought to scholarly attention in 1957 by which archaeologist?",
    options: ["Vishnu Shridhar Wakankar", "H.D. Sankalia", "R.D. Banerji", "B.B. Lal"],
    answer: 0,
    explanation: "V.S. Wakankar noticed the rock formations from a train in 1957 and went on to document hundreds of painted shelters at Bhimbetka. The paintings span from the Mesolithic to the historical period. Bhimbetka was declared a World Heritage Site in 2003."
  },
  {
    id: 2,
    question: "The Great Stupa at Sanchi in Raisen district was originally commissioned by which ruler?",
    options: ["Kanishka", "Pushyamitra Shunga", "Ashoka", "Harsha"],
    answer: 2,
    explanation: "The brick core of the Great Stupa (Stupa 1) was built under Ashoka in the 3rd century BCE. It was enlarged with a stone casing in the Shunga period, and the carved gateways (toranas) were added under the Satavahanas. Sanchi became a World Heritage Site in 1989."
  },
  {
    id: 3,
    question: "The Heliodorus pillar (Garuda pillar) at Besnagar near Vidisha was set up by Heliodorus, an envoy of which Indo-Greek king?",
    options: ["Menander", "Demetrius", "Antialkidas", "Apollodotus"],
    answer: 2,
    explanation: "Heliodorus, ambassador of the Indo-Greek king Antialkidas of Taxila to the Shunga court, erected the pillar around 113 BCE in honour of Vasudeva. Its inscription calls him a Bhagavata, making it one of the earliest records of a Greek following Vaishnava faith."
  },
  {
    id: 4,
    question: "The Udayagiri caves near Vidisha, famous for the large relief of Varaha rescuing the earth, belong mainly to which period?",
    options: ["Mauryan period, under Ashoka", "Gupta period, under Chandragupta II", "Paramara period, under Bhoja", "Chandela period, under Dhanga"],
    answer: 1,
    explanation: "The Udayagiri rock-cut caves were made in the early 5th century under Chandragupta II, as an inscription in Cave 6 records. The Varaha panel in Cave 5 is one of the finest examples of Gupta sculpture. They are different from the Jain Udayagiri caves of Odisha."
  },
  {
    id: 5,
    question: "Ujjain was the capital of which of the sixteen Mahajanapadas?",
    options: ["Chedi", "Avanti", "Vatsa", "Kosala"],
    answer: 1,
    explanation: "Avanti had its northern capital at Ujjayini (Ujjain) and its southern centre at Mahishmati. Its ruler Chanda Pradyota was a contemporary of the Buddha. Chedi lay in the Bundelkhand region, while Vatsa (Kaushambi) and Kosala were in present-day Uttar Pradesh."
  },
  {
    id: 6,
    question: "Tatya Tope, a leading figure of the Revolt of 1857, was executed by the British in April 1859 at which place in Madhya Pradesh?",
    options: ["Gwalior", "Shivpuri", "Jhansi border at Datia", "Sagar"],
    answer: 1,
    explanation: "Tatya Tope was betrayed by Man Singh of Narwar, tried by a military court and hanged at Shivpuri on 18 April 1859. He had carried on a long guerrilla campaign across central India after the fall of Gwalior. A memorial stands at Shivpuri."
  },
  {
    id: 7,
    question: "Rani Lakshmibai of Jhansi died fighting the British in June 1858 near which city?",
    options: ["Kalpi", "Gwalior", "Jhansi", "Shivpuri"],
    answer: 1,
    explanation: "After Jhansi and Kalpi fell, Lakshmibai and Tatya Tope captured Gwalior. She was killed on 18 June 1858 in fighting with Sir Hugh Rose's forces at Kotah-ki-Serai near Gwalior. Her samadhi is in Gwalior."
  },
  {
    id: 8,
    question: "The Jhanda (Flag) Satyagraha of 1923, in which nationalists insisted on hoisting the national flag on public buildings, began in which city of present-day Madhya Pradesh?",
    options: ["Jabalpur", "Indore", "Bhopal", "Khandwa"],
    answer: 0,
    explanation: "The Flag Satyagraha began in Jabalpur in March 1923 when volunteers hoisted the tricolour on the Town Hall and were arrested. It then spread to Nagpur, where it became a major movement. Leaders included Pandit Sunderlal and Subhadra Kumari Chauhan."
  },
  {
    id: 9,
    question: "Which Congress session of 1939, presided over by Subhas Chandra Bose after his re-election as president, was held in a town of present-day Madhya Pradesh?",
    options: ["Haripura session", "Nagpur session", "Tripuri session, near Jabalpur", "Faizpur session"],
    answer: 2,
    explanation: "The Tripuri session of March 1939 was held at Tripuri (Tewar) near Jabalpur, where Bose presided after defeating Pattabhi Sitaramayya. The Pant resolution passed there led to his resignation and the founding of the Forward Bloc. Haripura (1938) and Faizpur (1936) were in Gujarat and Maharashtra."
  },
  {
    id: 10,
    question: "Freedom fighter Chandrashekhar Azad was born in Bhabhra, now called Chandrashekhar Azad Nagar. In which district is it?",
    options: ["Jhabua", "Dhar", "Barwani", "Alirajpur"],
    answer: 3,
    explanation: "Azad was born on 23 July 1906 at Bhabhra, then in Jhabua and now in Alirajpur district. He led the Hindustan Socialist Republican Association and died at Alfred Park, Allahabad, in 1931. His birthplace has a memorial."
  },
  {
    id: 11,
    question: "The Narmada river rises at Amarkantak, which is in which district of Madhya Pradesh?",
    options: ["Anuppur", "Dindori", "Shahdol", "Mandla"],
    answer: 0,
    explanation: "Amarkantak is in Anuppur district, in the Maikal hills where the Vindhyas and Satpuras meet. Both the Narmada and the Son rise here. The Narmada flows west for about 1,312 km to the Gulf of Khambhat, mostly through MP."
  },
  {
    id: 12,
    question: "The Narmada flows westward in a narrow valley between which two ranges?",
    options: ["Satpura and Aravalli", "Vindhya and Satpura", "Vindhya and Aravalli", "Maikal and Kaimur"],
    answer: 1,
    explanation: "The Narmada flows through a rift valley bounded by the Vindhyas to the north and the Satpuras to the south. This structure explains why it flows west, unlike most peninsular rivers, and why it forms no delta. The Tapti flows in a parallel rift south of the Satpuras."
  },
  {
    id: 13,
    question: "The Chambal river originates in the Janapav hills near which town?",
    options: ["Mandsaur", "Mhow (Indore district)", "Ujjain", "Neemuch"],
    answer: 1,
    explanation: "The Chambal rises at Janapav near Mhow (Dr. Ambedkar Nagar) in Indore district. It flows north through MP and Rajasthan and joins the Yamuna in Uttar Pradesh. The Gandhi Sagar dam on the Chambal is in Mandsaur district."
  },
  {
    id: 14,
    question: "The black cotton soil (regur) of the Malwa plateau has formed mainly from the weathering of which rock?",
    options: ["Vindhyan sandstone", "Archaean granite", "Gondwana coal measures", "Deccan Trap basalt"],
    answer: 3,
    explanation: "The Malwa plateau is part of the Deccan Trap lava flows, and weathering of this basalt produces clay-rich black soil. It holds moisture well and suits cotton, soybean and wheat. It swells when wet and cracks deeply when dry."
  },
  {
    id: 15,
    question: "The Indira Sagar dam on the Narmada, which has one of the largest reservoirs in India, is located in which district?",
    options: ["Khargone", "Harda", "Khandwa", "Dewas"],
    answer: 2,
    explanation: "Indira Sagar dam is at Punasa in Khandwa district and has a hydropower capacity of 1,000 MW. Its reservoir is among the largest in India by storage. The Omkareshwar project, downstream in the same area, has a floating solar plant."
  },
  {
    id: 16,
    question: "India's only mechanised diamond mine, operated by NMDC, is at Majhgawan in which district?",
    options: ["Chhatarpur", "Satna", "Damoh", "Panna"],
    answer: 3,
    explanation: "The Majhgawan diamond mine of NMDC is in Panna district, which has long been known for diamonds from kimberlite pipes and gravels. Panna is the main diamond-producing area of India. Small private diggers also get government leases there."
  },
  {
    id: 17,
    question: "Malanjkhand, India's largest open-cast copper mine, is in which district?",
    options: ["Seoni", "Balaghat", "Mandla", "Jabalpur"],
    answer: 1,
    explanation: "Malanjkhand copper project of Hindustan Copper Ltd is in Balaghat district and is a major source of India's copper ore. Balaghat is also known for manganese at Bharveli. MP is a leading producer of copper and manganese."
  },
  {
    id: 18,
    question: "The Rewa Ultra Mega Solar Park (750 MW), which supplies power to the Delhi Metro, is located in which tehsil of Rewa district?",
    options: ["Sirmour", "Gurh", "Mauganj", "Teonthar"],
    answer: 1,
    explanation: "The Rewa Ultra Mega Solar project at Gurh tehsil was commissioned in 2018 and set record-low solar tariffs at the time. Delhi Metro Rail Corporation became its first inter-state institutional customer. It was developed by Rewa Ultra Mega Solar Ltd, a joint venture of MPUVN and SECI."
  },
  {
    id: 19,
    question: "Which district of Madhya Pradesh is called the 'energy capital of India' because of its large coalfields and thermal power stations?",
    options: ["Shahdol", "Betul", "Singrauli", "Chhindwara"],
    answer: 2,
    explanation: "Singrauli has large coal reserves mined by Northern Coalfields Ltd and several large thermal power plants, including NTPC Vindhyachal, one of India's biggest. Shahdol, Betul and Chhindwara also have coalfields but on a smaller scale."
  },
  {
    id: 20,
    question: "The Tawa river, on which the Tawa dam is built, joins the Narmada at Bandra Bhan near which city?",
    options: ["Narmadapuram", "Jabalpur", "Harda", "Khandwa"],
    answer: 0,
    explanation: "The Tawa rises in the Satpura range and joins the Narmada at Bandra Bhan near Narmadapuram (Hoshangabad). The Tawa dam provides irrigation to the Narmadapuram and Harda areas. Bandra Bhan is known for a fair at the confluence."
  },
  {
    id: 21,
    question: "The State Election Commission of Madhya Pradesh, which conducts Panchayat elections, is set up under which Article of the Constitution?",
    options: ["Article 324", "Article 243I", "Article 243K", "Article 243G"],
    answer: 2,
    explanation: "Article 243K provides for a State Election Commission for panchayat elections, and Article 243ZA extends it to municipal elections. Article 324 concerns the Election Commission of India, which conducts Lok Sabha and Vidhan Sabha elections. Article 243I is about the State Finance Commission."
  },
  {
    id: 22,
    question: "The Madhya Pradesh Public Service Commission, a constitutional body under Article 315, has its headquarters at",
    options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"],
    answer: 2,
    explanation: "MPPSC was set up on 1 November 1956 with the formation of the state and is headquartered at Indore. Its chairman and members are appointed by the Governor under Article 316. Its annual report is laid before the state legislature under Article 323."
  },
  {
    id: 23,
    question: "Which of the following bodies in Madhya Pradesh is statutory, created by an Act, rather than constitutional?",
    options: ["State Information Commission", "State Election Commission", "State Public Service Commission", "State Finance Commission"],
    answer: 0,
    explanation: "The MP State Information Commission is set up under Section 15 of the Right to Information Act, 2005. The State Election Commission (Article 243K), State PSC (Article 315) and State Finance Commission (Article 243I) are created directly by the Constitution."
  },
  {
    id: 24,
    question: "Under Article 243I, the Governor of Madhya Pradesh must constitute a State Finance Commission at what interval?",
    options: ["Every five years", "Every three years", "Every ten years", "Every year before the budget"],
    answer: 0,
    explanation: "Article 243I requires a State Finance Commission within one year of the 73rd Amendment and then every five years. It reviews the finances of panchayats and recommends how state taxes and grants should be shared with them. Article 243Y applies the same to municipalities."
  },
  {
    id: 25,
    question: "The Madhya Pradesh Human Rights Commission was set up under which law?",
    options: ["MP Lokayukt Evam Up-Lokayukt Adhiniyam, 1981", "Right to Information Act, 2005", "Commissions of Inquiry Act, 1952", "Protection of Human Rights Act, 1993"],
    answer: 3,
    explanation: "State Human Rights Commissions are constituted under Section 21 of the Protection of Human Rights Act, 1993. The MP Human Rights Commission was set up in 1995 and is among the early SHRCs. Its chairperson is appointed by the Governor on the recommendation of a committee headed by the Chief Minister."
  },
  {
    id: 26,
    question: "The Advocate General of Madhya Pradesh, the state's highest law officer, is appointed under which Article?",
    options: ["Article 165", "Article 76", "Article 148", "Article 217"],
    answer: 0,
    explanation: "Article 165 provides for an Advocate General for each state, appointed by the Governor and holding office during the Governor's pleasure. The person must be qualified to be a High Court judge. Article 76 is about the Attorney General of India and Article 148 the CAG."
  },
  {
    id: 27,
    question: "Madhya Pradesh notified its rules under the Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA) and began implementing them on 15 November 2022. Why was this date chosen?",
    options: ["It is the foundation day of Madhya Pradesh", "It is Janjatiya Gaurav Divas, the birth anniversary of Birsa Munda", "It is National Panchayati Raj Day", "It is the anniversary of the PESA Act's passage"],
    answer: 1,
    explanation: "The MP PESA Rules were launched on 15 November 2022, Janjatiya Gaurav Divas, which marks the birth anniversary of Birsa Munda. The rules give Gram Sabhas in Scheduled Areas powers over minor forest produce, land records, water bodies and local disputes. MP foundation day is 1 November and Panchayati Raj Day is 24 April."
  },
  {
    id: 28,
    question: "The Madhya Pradesh Dharma Swatantrya Adhiniyam, 2021, which regulates religious conversion, replaced a law of which year?",
    options: ["1968", "1976", "1985", "1956"],
    answer: 0,
    explanation: "The 2021 Act replaced the MP Dharma Swatantrya Adhiniyam, 1968. It prohibits conversion by misrepresentation, force, undue influence, coercion, allurement or fraud, or by marriage for that purpose, and requires prior notice to the District Magistrate. Penalties are higher where the person converted is a minor, a woman or from an SC or ST."
  },
  {
    id: 29,
    question: "Under the MP Lokayukt Evam Up-Lokayukt Adhiniyam, 1981, who appoints the Lokayukt?",
    options: ["The Governor, after consulting the Chief Justice of the High Court and the Leader of the Opposition", "The Chief Minister, on the advice of the Council of Ministers alone", "The President of India, on the advice of the Union Home Ministry", "The Speaker of the Vidhan Sabha, after consulting the Advocate General"],
    answer: 0,
    explanation: "The Governor appoints the Lokayukt after consulting the Chief Justice of the MP High Court and the Leader of the Opposition in the Vidhan Sabha. The Lokayukt investigates allegations of corruption against public servants, including ministers. It has its own Special Police Establishment."
  },
  {
    id: 30,
    question: "Article 169 of the Constitution deals with the creation and abolition of Legislative Councils. What is the present structure of the Madhya Pradesh legislature?",
    options: ["Bicameral, with a Vidhan Sabha and a Vidhan Parishad", "Unicameral, with only the Vidhan Sabha", "Unicameral, with only a Vidhan Parishad", "Bicameral, with nominated members in the upper house only"],
    answer: 1,
    explanation: "Madhya Pradesh has only the 230-member Vidhan Sabha. A Legislative Council can be created or abolished by Parliament under Article 169 after the Assembly passes a resolution by a special majority. States such as Uttar Pradesh, Bihar and Maharashtra have councils."
  },
  {
    id: 31,
    question: "According to Census 2011, which is the second most populous Scheduled Tribe in Madhya Pradesh, after the Bhil?",
    options: ["Gond", "Korku", "Baiga", "Kol"],
    answer: 0,
    explanation: "The Gonds are the second largest ST group in MP, concentrated in Mandla, Dindori, Seoni, Chhindwara, Betul and Balaghat. They are one of the largest tribal groups in India. Historic Gond kingdoms included Garha-Mandla, Deogarh and Chanda."
  },
  {
    id: 32,
    question: "The Baiga tribe traditionally practised a form of shifting cultivation known by which name?",
    options: ["Jhum", "Podu", "Bewar", "Kumri"],
    answer: 2,
    explanation: "The Baigas practised bewar, slash-and-burn cultivation in which they avoided ploughing because they regarded the earth as their mother. A Baiga Chak area in Dindori was set aside for them in the colonial period. Jhum is the north-eastern term, podu is used in Andhra and Odisha, and kumri in the Western Ghats."
  },
  {
    id: 33,
    question: "The Korku tribe of the Satpura region (Betul, Harda, Khandwa) speaks a language belonging to which language family?",
    options: ["Dravidian", "Austro-Asiatic (Munda)", "Indo-Aryan", "Tibeto-Burman"],
    answer: 1,
    explanation: "Korku is a Munda language of the Austro-Asiatic family, related to Santali and Mundari. It is the westernmost Munda language. Gondi is Dravidian, while Bhili is Indo-Aryan."
  },
  {
    id: 34,
    question: "The Rai folk dance, performed with the beat of the mridang and associated with Bedia women dancers, belongs to which region?",
    options: ["Bundelkhand", "Malwa", "Nimar", "Baghelkhand"],
    answer: 0,
    explanation: "Rai is a vigorous dance of Bundelkhand (Sagar, Chhatarpur, Tikamgarh, Damoh) performed by Bedia women to the rhythm of the mridang. Ram Sahay Pandey of Sagar, a Rai exponent, received the Padma Shri. Matki dance belongs to Malwa and Kathi to Nimar."
  },
  {
    id: 35,
    question: "The Matki dance, in which women dance balancing earthen pots, is a folk dance of which region of Madhya Pradesh?",
    options: ["Malwa", "Bundelkhand", "Baghelkhand", "Mahakoshal"],
    answer: 0,
    explanation: "Matki is performed by women of the Malwa region on festive occasions, sometimes balancing several pots on the head. Aada-Khada Naach and Phulpati are other dances of Malwa."
  },
  {
    id: 36,
    question: "Bhima Nayak, a tribal leader who fought the British during 1857, was active in which region?",
    options: ["Barwani in Nimar", "Mandla in Mahakoshal", "Sheopur in Chambal", "Rewa in Baghelkhand"],
    answer: 0,
    explanation: "Bhima Nayak, a Bhil leader, fought British forces in the Barwani–Sendhwa area of Nimar during and after 1857. He was captured and sent to the Andaman jail, where he died."
  },
  {
    id: 37,
    question: "Raja Shankar Shah and his son Kunwar Raghunath Shah, Gond rulers who were blown from cannon by the British in September 1857, were executed at which city?",
    options: ["Jabalpur", "Mandla", "Sagar", "Seoni"],
    answer: 0,
    explanation: "Shankar Shah and Raghunath Shah, descendants of the Garha-Mandla Gond dynasty, were arrested for planning a revolt and blown from cannon at Jabalpur on 18 September 1857. Patriotic poems written by them were cited as evidence. Their martyrdom day is observed in MP."
  },
  {
    id: 38,
    question: "Habibganj railway station in Bhopal was renamed in 2021 after which historical figure?",
    options: ["Rani Durgavati, a Gond queen", "Rani Avantibai, queen of Ramgarh", "Rani Kamlapati, a Gond queen", "Rani Lakshmibai, queen of Jhansi"],
    answer: 2,
    explanation: "Habibganj was renamed Rani Kamlapati station and was inaugurated on 15 November 2021, Janjatiya Gaurav Divas. Rani Kamlapati was the 18th-century Gond queen of Ginnorgarh associated with Bhopal and its Kamla Park palace. It was among the first stations redeveloped on a PPP model."
  },
  {
    id: 39,
    question: "Gondi, spoken by many Gond communities of Madhya Pradesh, belongs to which language family?",
    options: ["Austro-Asiatic", "Dravidian", "Indo-Aryan", "Tibeto-Burman"],
    answer: 1,
    explanation: "Gondi is a South-Central Dravidian language related to Telugu. Many Gonds in MP now also speak local Hindi dialects. Korku, by contrast, is Austro-Asiatic, and Bhili and Halbi are Indo-Aryan."
  },
  {
    id: 40,
    question: "Under Article 342, who specifies by public notification the tribes that are Scheduled Tribes in Madhya Pradesh?",
    options: ["The Governor, after consulting the Chief Minister", "The President, after consulting the Governor", "The State Legislature, by a resolution", "The National Commission for Scheduled Tribes"],
    answer: 1,
    explanation: "Under Article 342(1), the President, after consulting the Governor, notifies the STs of a state. After that, only Parliament can add or remove tribes from the list by law, under Article 342(2). The NCST, under Article 338A, advises on ST safeguards but does not notify the list."
  },
  {
    id: 41,
    question: "The India AI Impact Summit, billed as the first major global AI summit hosted in the Global South, was held in February 2026 at which venue?",
    options: ["Yashobhoomi, New Delhi", "Mahatma Mandir, Gandhinagar", "Bharat Mandapam, New Delhi", "Jio World Centre, Mumbai"],
    answer: 2,
    explanation: "MeitY hosted the India AI Impact Summit at Bharat Mandapam, New Delhi, in mid-February 2026, with an AI Impact Expo running alongside. It was organised around three 'sutras': People, Planet and Progress. It followed earlier summits held in the UK, South Korea and France."
  },
  {
    id: 42,
    question: "The Madhya Pradesh government declared the year 2026 as which themed year, launched by Chief Minister Mohan Yadav in January 2026?",
    options: ["Udyog Varsh (Industry Year)", "Krishak Kalyan Varsh (Farmer Welfare Year)", "Mahila Sashaktikaran Varsh (Women Empowerment Year)", "Jal Sanrakshan Varsh (Water Conservation Year)"],
    answer: 1,
    explanation: "CM Mohan Yadav launched 2026 as Krishak Kalyan Varsh in Bhopal on 11 January 2026, with more than 16 departments working together on farmer-related programmes. Focus areas include natural farming, crop diversification and agro-processing. The 2026-27 budget raised allocations for agriculture and allied sectors."
  },
  {
    id: 43,
    question: "The Madhya Pradesh budget for 2026-27, presented in February 2026, introduced which new budgeting practice?",
    options: ["A zero-based budget for every department", "A separate agriculture budget presented a day earlier", "A three-year rolling budget with indicative estimates for the next two years", "A gender budget replacing the general budget"],
    answer: 2,
    explanation: "Finance Minister and Deputy CM Jagdish Devda presented a ₹4.38 lakh crore budget on 18 February 2026 with no new taxes. Alongside the 2026-27 estimates, indicative estimates for 2027-28 and 2028-29 were prepared, making it the state's first three-year rolling budget."
  },
  {
    id: 44,
    question: "The 30th UN Climate Change Conference (COP30) was held in November 2025 in which city?",
    options: ["Baku, Azerbaijan", "Dubai, UAE", "Bonn, Germany", "Belém, Brazil"],
    answer: 3,
    explanation: "COP30 was held in Belém, in the Brazilian Amazon, from 10 November 2025 and ran a day past its scheduled close, ending on 22 November. It ended without agreed language on a fossil-fuel phase-out but adopted the 'Global Mutirão' political package, including a call to triple adaptation finance by 2035, and the Belém Gender Action Plan. COP29 was in Baku and COP28 in Dubai."
  },
  {
    id: 45,
    question: "In November 2025, after the NDA won the Bihar Assembly election, who was sworn in as Chief Minister of Bihar for a record tenth time?",
    options: ["Samrat Choudhary", "Tejashwi Yadav", "Nitish Kumar", "Vijay Kumar Sinha"],
    answer: 2,
    explanation: "Nitish Kumar took oath on 20 November 2025 at Gandhi Maidan, Patna, after the NDA won 202 of 243 seats. Samrat Choudhary and Vijay Kumar Sinha were sworn in as Deputy Chief Ministers. Governor Arif Mohammed Khan administered the oath."
  },
  {
    id: 46,
    question: "Which feature makes blockchain records hard to alter once they are added?",
    options: ["Each block contains the cryptographic hash of the previous block", "All data is stored on one central government server", "Records are written in plain text for everyone to edit", "Each block is deleted after it is verified"],
    answer: 0,
    explanation: "Each block stores the hash of the previous block, so changing one block changes its hash and breaks the chain after it. Copies of the ledger are held by many nodes, and consensus rules decide which blocks are valid. This makes blockchain useful for land records and supply-chain tracking."
  },
  {
    id: 47,
    question: "A government employee receives an email that looks like it is from the treasury department, asking her to click a link and enter her login password. This cyber attack is called",
    options: ["ransomware", "phishing", "denial of service", "SQL injection"],
    answer: 1,
    explanation: "Phishing uses fake messages that look genuine to trick people into giving passwords or other data, or clicking malicious links. Ransomware encrypts files and demands payment, while denial-of-service floods a system with traffic. Checking the sender's address and never sharing passwords by email are basic defences."
  },
  {
    id: 48,
    question: "A CCTV system with AI software draws boxes around each vehicle and person in every video frame and labels them. Which computer vision task is this?",
    options: ["Image classification", "Object detection", "Optical character recognition", "Image compression"],
    answer: 1,
    explanation: "Object detection finds the location of each object with a bounding box and assigns it a class label. Image classification gives one label to the whole image, and OCR reads text such as number plates. Models such as YOLO are widely used for real-time detection."
  },
  {
    id: 49,
    question: "Documents issued through DigiLocker are treated as equivalent to original physical documents under which law?",
    options: ["Right to Information Act, 2005", "Aadhaar Act, 2016", "Digital Personal Data Protection Act, 2023", "Information Technology Act, 2000 and the rules made under it"],
    answer: 3,
    explanation: "Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries providing Digital Locker facilities) Rules, 2016, made under the IT Act, makes documents in DigiLocker legally valid like the originals. DigiLocker is part of the Digital India programme of MeitY."
  },
  {
    id: 50,
    question: "The test in which a human judge holds text conversations with a machine and a person and tries to tell which is which was proposed in 1950 by",
    options: ["John McCarthy", "Marvin Minsky", "Geoffrey Hinton", "Alan Turing"],
    answer: 3,
    explanation: "Alan Turing proposed the 'imitation game' in his 1950 paper 'Computing Machinery and Intelligence'. If the judge cannot reliably tell the machine from the human, the machine is said to pass. John McCarthy coined the term 'artificial intelligence' in 1955–56."
  },
  {
    id: 51,
    question: "Fibres from a red sweater are found on a jacket, and fibres from that jacket are found on the sweater. This two-way transfer best illustrates",
    options: ["the principle of individuality", "the law of progressive change", "Locard's exchange principle", "the principle of comparison"],
    answer: 2,
    explanation: "Edmond Locard stated that every contact leaves a trace: when two objects meet, material passes from each to the other. A two-way transfer of fibres links two items more strongly than a one-way transfer. Individuality means no two objects are exactly alike."
  },
  {
    id: 52,
    question: "A hair has a medullary index of 0.6. This suggests the hair is most likely",
    options: ["a human scalp hair", "a human eyebrow hair", "from an animal", "a synthetic fibre"],
    answer: 2,
    explanation: "Medullary index is the medulla diameter divided by the shaft diameter. Human hairs usually have an index below about one-third, while most animal hairs have one-half or more. Synthetic fibres have no medulla at all."
  },
  {
    id: 53,
    question: "Human head hair, under the microscope, shows which cuticle scale pattern?",
    options: ["Imbricate, with flattened overlapping scales", "Coronal, with crown-like scales", "Spinous, with petal-like scales", "No visible scale pattern"],
    answer: 0,
    explanation: "Human hair has imbricate scales with smooth, flattened margins that overlap like roof tiles. Coronal scales occur in rodents and bats, and spinous scales in cats and mink. Scale casts in clear nail varnish or gelatin show the pattern well."
  },
  {
    id: 54,
    question: "Hairs that are pulled out forcibly are most likely to have roots in which growth phase, carrying follicular tissue suitable for nuclear DNA typing?",
    options: ["Anagen", "Telogen", "Catagen", "Exogen"],
    answer: 0,
    explanation: "Anagen is the active growth phase, when the hair is firmly anchored and brings away follicular tissue rich in nucleated cells. Telogen hairs shed naturally and have club-shaped roots with few cells, so mitochondrial DNA is often used on them. Catagen is a short transitional phase."
  },
  {
    id: 55,
    question: "In the Christmas tree stain used on smears, what colours do spermatozoa heads and tails take?",
    options: ["Heads blue, tails pink", "Heads green, tails red", "Heads red, tails green", "Heads purple, tails yellow"],
    answer: 2,
    explanation: "Nuclear fast red stains the head red, while picroindigocarmine stains the neck and tail green-blue. Epithelial cells show green-blue cytoplasm with red nuclei. The contrast makes spermatozoa easier to find in a crowded smear."
  },
  {
    id: 56,
    question: "A Barr body seen in the nucleus of a cell indicates that the cell has",
    options: ["a Y chromosome", "lost one X chromosome", "an extra autosome", "at least two X chromosomes, as in a normal female"],
    answer: 3,
    explanation: "A Barr body is a condensed, inactivated X chromosome, and the number seen is one less than the number of X chromosomes. Normal females show one and normal males none. In neutrophils, the corresponding female marker is the drumstick appendage."
  },
  {
    id: 57,
    question: "Under the microscope, a fibre appears as a flattened, twisted ribbon with a collapsed central lumen and natural convolutions. The fibre is most likely",
    options: ["wool", "cotton", "nylon", "polyester"],
    answer: 1,
    explanation: "Cotton is a seed fibre that dries into a flat, twisted ribbon with convolutions and a lumen. Wool shows overlapping scales like hair, while nylon and polyester are smooth, uniform rods. Cotton is so common that it has limited evidential value."
  },
  {
    id: 58,
    question: "Which plant fibre shows cross-markings or nodes along its length, giving it a bamboo-like appearance under the microscope?",
    options: ["Flax", "Cotton", "Coir", "Kapok"],
    answer: 0,
    explanation: "Flax, the fibre of linen, is a bast fibre with dislocations that look like cross-markings. Cotton is a twisted ribbon, coir is a coarse fibre from coconut husk, and kapok is a hollow, thin-walled seed fibre."
  },
  {
    id: 59,
    question: "Viscose rayon is best described as",
    options: ["a natural protein fibre", "a fully synthetic polyamide", "a mineral fibre", "a regenerated cellulose fibre"],
    answer: 3,
    explanation: "Viscose rayon is made by dissolving cellulose from wood or cotton and spinning it again, so it is semi-synthetic. Nylon is a fully synthetic polyamide, wool and silk are natural protein fibres, and asbestos is a mineral fibre."
  },
  {
    id: 60,
    question: "Nail clippings and scrapings submitted for DNA examination are usually collected separately from each hand because",
    options: ["it keeps any transferred cellular material from each hand distinct for interpretation", "nails of the two hands have different keratin types", "DNA is present only in the nails of the dominant hand", "nail growth rates differ greatly between the two hands"],
    answer: 0,
    explanation: "Material trapped under nails can include cells from another person, so separate packing keeps the two hands' results independent and avoids mixing. Each hand is also swabbed with separate moistened swabs where clipping is not possible. Nail keratin itself yields very little DNA."
  },
  {
    id: 61,
    question: "Some people leave much more DNA than others on objects they handle. This difference is described as a person's",
    options: ["secretor status", "heteroplasmy", "allelic drop-in", "shedder status"],
    answer: 3,
    explanation: "Shedder status describes how much DNA a person typically deposits by touch, which varies with skin condition, sweat and habits. It is one reason touch-DNA results must be interpreted cautiously. Secretor status concerns blood-group antigens in body fluids."
  },
  {
    id: 62,
    question: "The Jaffe test, in which picric acid in alkaline solution gives an orange-red colour, indicates urine in a stain by detecting",
    options: ["creatinine", "urea", "uric acid", "urobilin"],
    answer: 0,
    explanation: "Creatinine reacts with alkaline picrate to form an orange-red complex. Creatinine is abundant in urine, so a positive result suggests a urine stain. Urease-based tests instead detect urea, another urine marker."
  },
  {
    id: 63,
    question: "A presumptive test for faecal matter depends on a green fluorescence produced when a pigment forms a complex with zinc. Which pigment is it?",
    options: ["Bilirubin glucuronide", "Haemoglobin", "Urobilin", "Creatinine"],
    answer: 2,
    explanation: "Gut bacteria convert bilirubin to urobilinogen, which oxidises to urobilin. With zinc salts, urobilin fluoresces green under UV light. Microscopy for undigested plant cells and muscle fibres supports the finding."
  },
  {
    id: 64,
    question: "Cells in a stain stain dark brown with Lugol's iodine because they are rich in glycogen. Such cells most likely come from",
    options: ["the buccal epithelium", "the skin", "the urinary tract", "the vaginal epithelium"],
    answer: 3,
    explanation: "Vaginal squamous cells of women of reproductive age are rich in glycogen and stain brown with iodine. Buccal and skin cells contain far less. The test is presumptive, because some other epithelial cells also store glycogen."
  },
  {
    id: 65,
    question: "Mature human red blood cells have no nucleus. In a liquid blood sample, which cells supply the nuclear DNA used for STR typing?",
    options: ["Platelets", "Reticulocytes", "Leucocytes", "Erythrocytes"],
    answer: 2,
    explanation: "White blood cells are the only fully nucleated cells in circulating blood, so they are the source of nuclear DNA. Platelets are cell fragments without nuclei, and reticulocytes have already lost theirs. This is why the buffy coat is used in DNA extraction from blood."
  },
  {
    id: 66,
    question: "Which cell type in a bone sample is embedded in lacunae within the mineralised matrix and is the usual source of DNA from bone?",
    options: ["Osteoclasts", "Chondrocytes", "Osteocytes", "Adipocytes"],
    answer: 2,
    explanation: "Osteocytes are mature bone cells lying in lacunae and connected by canaliculi, and their nuclei provide DNA that is physically protected by the matrix. Osteoclasts resorb bone, chondrocytes belong to cartilage, and adipocytes are fat cells of the marrow. Dense cortical bone is therefore preferred for extraction."
  },
  {
    id: 67,
    question: "Which structure of a mature spermatozoon contains enzymes such as hyaluronidase and acrosin?",
    options: ["Mid-piece", "Axial filament", "Post-nuclear cap", "Acrosome"],
    answer: 3,
    explanation: "The acrosome is a cap over the anterior nucleus containing hydrolytic enzymes. The mid-piece is packed with mitochondria that power the tail. Loss of the tail during drying and handling is why only heads may be seen in old stains."
  },
  {
    id: 68,
    question: "Which microscopic feature best distinguishes a plucked human scalp hair from a cut one?",
    options: ["A squared, blunt tip", "Presence of a root with sheath material at one end", "A wider medulla in the middle", "A thicker cuticle near the tip"],
    answer: 1,
    explanation: "A plucked hair carries its root bulb, sometimes with follicular sheath tissue, while a cut hair has sharply squared ends and no root. A natural, uncut tip is fine and tapering. Root morphology also guides the choice between nuclear and mitochondrial DNA analysis."
  },
  {
    id: 69,
    question: "Pollen grains found on clothing can indicate the geographical area or season of an event because",
    options: ["pollen grains carry the DNA of the person who collected them", "pollen is produced only at night", "pollen changes colour with time at a measurable rate", "pollen walls are resistant and each plant family has a characteristic grain morphology"],
    answer: 3,
    explanation: "The sporopollenin wall of pollen resists decay, and features such as size, shape, apertures and surface sculpture identify the plant group. Pollen assemblages therefore point to particular vegetation and flowering seasons. This is the basis of forensic palynology."
  },
  {
    id: 70,
    question: "Which prokaryotic feature distinguishes bacteria from eukaryotic human cells?",
    options: ["An 80S ribosome and a true nucleus", "Membrane-bound mitochondria", "A 70S ribosome and no nuclear membrane", "A nuclear envelope with pores"],
    answer: 2,
    explanation: "Prokaryotes have 70S ribosomes, no nuclear membrane and no membrane-bound organelles, with DNA in a nucleoid. Eukaryotic cells have 80S ribosomes, a true nucleus and organelles such as mitochondria. These differences are exploited by antibiotics that act on 70S ribosomes."
  },
  {
    id: 71,
    question: "The ABO gene, which determines blood group, is located on which human chromosome?",
    options: ["Chromosome 19", "Chromosome 1", "Chromosome 11", "Chromosome 9"],
    answer: 3,
    explanation: "The ABO gene lies at 9q34 and encodes a glycosyltransferase that adds sugars to the H antigen. The secretor gene FUT2 and the H gene FUT1 are both on chromosome 19. Rh genes RHD and RHCE are on chromosome 1."
  },
  {
    id: 72,
    question: "In molecular ABO typing, group O most commonly arises from which change in the ABO gene?",
    options: ["Duplication of the whole gene", "A single-base deletion causing a frameshift and a non-functional enzyme", "A promoter methylation that silences the gene", "An inversion that swaps the A and B exons"],
    answer: 1,
    explanation: "The common O allele carries a single-base deletion (261delG) that shifts the reading frame and produces a protein with no transferase activity, so only unmodified H antigen remains. A and B alleles differ from each other by a few missense changes. Sequence-based typing can therefore assign ABO genotypes from DNA."
  },
  {
    id: 73,
    question: "Differential extraction of a mixed stain containing epithelial cells and spermatozoa works because sperm nuclei",
    options: ["dissolve faster than epithelial cells in plain SDS", "lack a nuclear membrane altogether", "need a reducing agent such as dithiothreitol to break protamine disulphide bonds", "are resistant to proteinase K but not to detergents"],
    answer: 2,
    explanation: "Sperm DNA is tightly packed with protamines cross-linked by disulphide bonds, so SDS and proteinase K alone leave sperm heads intact while lysing epithelial cells. The epithelial fraction is removed, and DTT is then added to open the sperm heads. This separates the two contributors before typing."
  },
  {
    id: 74,
    question: "Which quantification method allows the user to detect PCR inhibitors and assess DNA degradation in the same reaction?",
    options: ["UV absorbance at 260 nm", "Fluorometric dye binding with a plate reader", "Real-time PCR with an internal PCR control and both a short and a long autosomal target", "Yield gel electrophoresis with ethidium bromide"],
    answer: 2,
    explanation: "Modern qPCR kits include an internal control whose shift in cycle threshold reveals inhibition, plus short and long targets whose ratio gives a degradation index. Absorbance and dye-binding methods measure total nucleic acid without being human-specific. qPCR also measures the male component separately."
  },
  {
    id: 75,
    question: "Humic acid carried over from soil in a buried sample typically affects PCR by",
    options: ["cutting the primers into fragments", "raising the melting temperature of the template", "inhibiting the DNA polymerase, lowering or abolishing amplification", "adding extra alleles to the profile"],
    answer: 2,
    explanation: "Humic and tannic acids, haem and some dyes bind the polymerase or chelate magnesium, so amplification fails or is weak and uneven. Clean-up columns, dilution or extra polymerase and BSA help. Inhibition is flagged by the internal control in quantification assays."
  },
  {
    id: 76,
    question: "In the capillary electropherogram of an STR locus, a small peak one repeat unit shorter than a true allele is usually",
    options: ["a pull-up from another dye channel", "a spike from an air bubble", "the result of allelic drop-in", "a stutter peak from slipped-strand mispairing during PCR"],
    answer: 3,
    explanation: "Stutter arises when the polymerase slips on the repeat region, producing products one repeat shorter (n−4 for tetranucleotides). Stutter ratios rise with the number of repeats and are highest at loci with simple repeats. Pull-up appears at the same size in another colour, and spikes appear in all channels."
  },
  {
    id: 77,
    question: "A vaginal swab contains a large amount of the victim's DNA and a male contributor present at only about one-tenth of the female DNA. Which technique best recovers a profile of the male contributor?",
    options: ["Autosomal STR typing with more cycles", "mtDNA sequencing", "Y-STR typing", "ABO absorption-elution"],
    answer: 2,
    explanation: "Y-STRs ignore female DNA altogether, so a male minor contributor can be typed even when swamped by female DNA. Increasing cycles raises stochastic artefacts, and mtDNA cannot separate maternal relatives. Y-STRs give a lineage result, not an individual identification."
  },
  {
    id: 78,
    question: "What does the term 'allelic drop-out' mean in low-template DNA analysis?",
    options: ["An extra allele appears from contamination", "One allele of a heterozygote fails to amplify, so the locus looks homozygous", "Two loci overlap in size and colour", "The whole profile fails because of inhibition"],
    answer: 1,
    explanation: "With very few template molecules, sampling is uneven and one allele may not be amplified enough to be detected, making a true heterozygote appear homozygous. Drop-in is the appearance of an extra allele from sporadic contamination. Replicate amplification and probabilistic genotyping help manage both."
  },
  {
    id: 79,
    question: "In Sanger sequencing, what terminates chain extension at a specific base?",
    options: ["Exhaustion of magnesium ions", "Binding of a restriction enzyme", "Addition of a methyl group to the template", "Incorporation of a dideoxynucleotide lacking a 3′-OH group"],
    answer: 3,
    explanation: "Dideoxynucleotides have no 3′-hydroxyl, so no further phosphodiester bond can form and the chain stops. Each ddNTP carries a different dye, so fragments separated by size reveal the sequence. Sanger sequencing is still the reference method for mtDNA control-region typing."
  },
  {
    id: 80,
    question: "Why is a reagent blank processed alongside casework samples through extraction, amplification and typing?",
    options: ["To measure the efficiency of the polymerase", "To calibrate the capillary electrophoresis instrument", "To provide an allelic ladder for sizing", "To detect contamination introduced by reagents or handling"],
    answer: 3,
    explanation: "The reagent blank contains no sample but goes through every step, so any peaks in it indicate contamination of reagents, consumables or the working environment. A positive control checks that the chemistry worked, and a negative amplification control checks the PCR set-up. The allelic ladder is a separate sizing standard."
  },
  {
    id: 81,
    question: "In a real-time PCR assay, a sample has a cycle threshold value four cycles higher than another sample of the same type. Assuming ideal doubling, its DNA concentration is about",
    options: ["16 times lower", "4 times lower", "8 times lower", "2 times lower"],
    answer: 0,
    explanation: "Each cycle doubles the product, so a difference of n cycles corresponds to a 2ⁿ difference in starting amount. Here 2⁴ = 16, so the later-crossing sample has about 16 times less DNA. This is why Ct values must be read against a standard curve."
  },
  {
    id: 82,
    question: "A single STR locus has allele frequencies p = 0.2 and q = 0.1 for the two alleles seen in a heterozygous profile. Under Hardy-Weinberg equilibrium, what is the expected genotype frequency?",
    options: ["0.02", "0.30", "0.04", "0.01"],
    answer: 2,
    explanation: "A heterozygote frequency is 2pq = 2 × 0.2 × 0.1 = 0.04. A homozygote would be p², here 0.04 for the first allele. Multiplying frequencies across independent loci gives the random match probability."
  },
  {
    id: 83,
    question: "If the random match probability of a profile is 1 in 10 billion, the likelihood ratio for the hypothesis that the suspect is the source, against an unrelated person being the source, is about",
    options: ["10 billion", "1 in 10 billion", "10", "0.5"],
    answer: 0,
    explanation: "The LR is the probability of the evidence given the prosecution hypothesis, which is 1 for a true match, divided by the probability given the defence hypothesis, which is the RMP. So LR = 1 ÷ 10⁻¹⁰ = 10¹⁰. The LR must not be stated as the probability that the suspect is the source."
  },
  {
    id: 84,
    question: "Allele frequency databases used in Indian casework should ideally be",
    options: ["from relevant Indian population groups, because frequencies vary between populations", "from the FBI's US Caucasian database only", "the same worldwide, since STR frequencies are universal", "based on the suspect's own family members"],
    answer: 0,
    explanation: "STR allele frequencies differ between populations, so match probabilities calculated from an unrelated database can be misleading. Indian laboratories therefore use published frequency data for Indian populations and may apply a theta correction for population substructure. Family members are not a population sample."
  },
  {
    id: 85,
    question: "Which modification of PCR uses primers whose 3′ end matches one allele but not the other, so amplification occurs only with the matching allele?",
    options: ["Nested PCR", "Inverse PCR", "Touchdown PCR", "Allele-specific PCR (ARMS)"],
    answer: 3,
    explanation: "In the amplification refractory mutation system, a mismatch at the primer's 3′ end blocks extension, so a product forms only for the matching allele. It is used for SNP typing and for detecting known point mutations. Nested PCR uses two successive primer pairs to raise specificity."
  },
  {
    id: 86,
    question: "Single-strand conformation polymorphism (SSCP) analysis detects sequence differences because",
    options: ["the mutant strand is cut by a restriction enzyme", "single strands of different sequence differ in mass", "single-stranded DNA of the same length folds differently and migrates differently in a non-denaturing gel", "mutant DNA binds more ethidium bromide"],
    answer: 2,
    explanation: "After denaturation, each single strand folds into a sequence-dependent shape, and these conformers move at different rates in a non-denaturing gel. Even one base change can alter mobility. SSCP is a screening method; the change must be confirmed by sequencing."
  },
  {
    id: 87,
    question: "In denaturing gradient gel electrophoresis (DGGE), what causes fragments with different sequences to separate?",
    options: ["They partially melt at different points along a gradient of denaturant, which slows them down", "They carry different net charges", "They bind different amounts of SDS", "They differ in length by one base"],
    answer: 0,
    explanation: "As a fragment moves into higher denaturant, its lowest-melting domain opens into a branched form that migrates slowly, and the melting point depends on sequence. A GC clamp keeps the fragment from melting completely. DGGE is used in microbial community profiling as well as mutation screening."
  },
  {
    id: 88,
    question: "An X-linked recessive condition appears in a man. From whom did he inherit the allele?",
    options: ["His father", "His mother", "Either parent equally", "Neither; it must be a new mutation"],
    answer: 1,
    explanation: "A man has one X chromosome, which always comes from his mother, and a Y from his father. So an X-linked recessive allele in an affected man comes from his mother, who is usually a carrier. Affected fathers pass the allele to all daughters but to no sons."
  },
  {
    id: 89,
    question: "A karyotype shows 45 chromosomes with a single X and no second sex chromosome. This is",
    options: ["Klinefelter syndrome", "Turner syndrome", "Down syndrome", "Triple X syndrome"],
    answer: 1,
    explanation: "45,X is Turner syndrome, seen in females with short stature and ovarian failure, and such individuals show no Barr body. Klinefelter syndrome is 47,XXY in males, and triple X is 47,XXX. Down syndrome is trisomy 21, with 47 chromosomes including three copies of chromosome 21."
  },
  {
    id: 90,
    question: "A short autosomal STR amplicon and a long one are both targeted in quantification, and the long target gives a much lower value. The degradation index above one indicates",
    options: ["there is a male minor contributor", "the DNA is fragmented, so mini-STRs or SNP panels may work better", "the extract contains inhibitors but intact DNA", "the sample is a mixture of two people"],
    answer: 1,
    explanation: "A degradation index is the ratio of short-target to long-target quantity; a high ratio means long templates are scarce. That predicts drop-out at larger loci, so mini-STRs, SNPs or mtDNA are better choices. Inhibition is indicated separately by the internal PCR control."
  },
  {
    id: 91,
    question: "Which blood group is called the universal donor for packed red cells, and why?",
    options: ["AB positive, because its plasma has no anti-A or anti-B", "A negative, because it lacks the B antigen", "O negative, because its red cells carry neither A, B nor D antigens", "B positive, because it lacks the A antigen"],
    answer: 2,
    explanation: "Group O Rh-negative red cells lack A, B and D antigens, so they are not attacked by the common antibodies in any recipient. AB positive is the universal recipient for red cells, and AB plasma is the universal plasma. Other antigen systems still matter in repeated transfusion."
  },
  {
    id: 92,
    question: "In the Bombay (Oh) phenotype, the person cannot be given group O blood from an ordinary donor because",
    options: ["their serum contains no antibodies at all", "they have anti-H antibodies that react with the H antigen on ordinary O cells", "they lack the ABO gene entirely", "their red cells carry both A and B antigens"],
    answer: 1,
    explanation: "Bombay phenotype individuals are homozygous for a non-functional FUT1 (H) gene, so they make no H antigen and produce potent anti-H, along with anti-A and anti-B. Ordinary O cells carry abundant H antigen and would be haemolysed. They can be transfused only with Bombay-phenotype blood."
  },
  {
    id: 93,
    question: "The Bombay phenotype was first reported in 1952 from Mumbai by",
    options: ["K. Landsteiner and A.S. Wiener", "R.R. Race and R. Sanger", "P. Levine and R.E. Stetson", "Y.M. Bhende and colleagues"],
    answer: 3,
    explanation: "Bhende and co-workers described the Oh phenotype in Bombay donors who were incompatible even with O blood. It is rare worldwide but relatively more frequent in parts of western India. Landsteiner and Wiener described the Rh factor."
  },
  {
    id: 94,
    question: "Routine forward and reverse grouping of a sample shows no reaction with anti-A, anti-B or anti-H, while the serum agglutinates A, B and O cells. The most likely phenotype is",
    options: ["group O", "group AB", "group A with weak subgroup", "Bombay (Oh)"],
    answer: 3,
    explanation: "Group O cells react with anti-H, so a total lack of reaction with anti-H plus serum anti-H points to the Bombay phenotype. A genuine O sample would not agglutinate O cells. Family studies and FUT1 sequencing confirm the finding."
  },
  {
    id: 95,
    question: "Which lectin reagent is used to separate A1 from A2 red cells when resolving an ABO discrepancy?",
    options: ["Dolichos biflorus", "Ulex europaeus", "Vicia graminea", "Arachis hypogaea"],
    answer: 0,
    explanation: "Dolichos biflorus lectin acts as anti-A1 and agglutinates A1 cells but not A2 cells. A2 cells carry fewer A antigen sites and are made by a different transferase, and some A2 individuals produce anti-A1. Ulex europaeus is anti-H, Vicia graminea is anti-N and Arachis hypogaea is anti-T."
  },
  {
    id: 96,
    question: "Which Rh antigen is the most immunogenic and is the one meant when blood is called 'Rh positive'?",
    options: ["C", "E", "e", "D"],
    answer: 3,
    explanation: "Rh positive means the D antigen is present on the red cells. D is by far the most immunogenic Rh antigen, which is why it drives haemolytic disease of the newborn and transfusion reactions. The Fisher-Race notation names five main antigens: D, C, c, E and e."
  },
  {
    id: 97,
    question: "In the Coombs antiglobulin test, what is the role of the antihuman globulin reagent?",
    options: ["It bridges IgG molecules already bound to red cells, producing visible agglutination", "It lyses the red cells to release haemoglobin", "It removes antibodies from the red cell surface", "It converts IgM antibodies into IgG"],
    answer: 0,
    explanation: "IgG antibodies are too small to bridge the gap between red cells, so sensitised cells do not agglutinate by themselves. Antihuman globulin binds these IgG molecules on adjacent cells and links them. The direct test detects antibody already on the cells, while the indirect test detects antibody in serum."
  },
  {
    id: 98,
    question: "Why is IgM a much better agglutinating antibody than IgG?",
    options: ["It is smaller and so diffuses faster", "It binds complement less readily", "It is pentameric with ten binding sites, so it can bridge cells across their zeta potential", "It crosses the placenta and coats cells in vivo"],
    answer: 2,
    explanation: "A pentameric IgM molecule has ten antigen-binding sites and a large span, so it can link red cells despite their mutual repulsion. Naturally occurring anti-A and anti-B are mainly IgM, which is why slide and tube grouping works directly. IgG antibodies need an antiglobulin or potentiator to show agglutination."
  },
  {
    id: 99,
    question: "In a competitive ELISA, how does the colour intensity relate to the amount of analyte in the sample?",
    options: ["Colour decreases as analyte increases", "Colour increases in direct proportion to analyte", "Colour is unrelated to analyte amount", "Colour appears only above a threshold and then stays constant"],
    answer: 0,
    explanation: "In a competitive format, sample analyte competes with a labelled analyte for a limited number of antibody sites, so more analyte means less label bound and less colour. Sandwich ELISAs, by contrast, give signal that rises with analyte. Competitive formats suit small molecules such as drugs with only one epitope."
  },
  {
    id: 100,
    question: "A lateral-flow immunochromatographic device shows a line at the control position but none at the test position. The correct conclusion is",
    options: ["the device failed and must be repeated", "the result is positive for the target", "the device worked and the result is negative for the target", "the sample was too dilute to interpret"],
    answer: 2,
    explanation: "The control line shows that the sample flowed and the reagents are active, so the strip is valid. No test line means the target was not detected at or above the device's threshold. If the control line fails to appear, the test is invalid regardless of the test line."
  },
  {
    id: 101,
    question: "In a typical lateral-flow kit for a protein marker, what is immobilised at the test line?",
    options: ["The purified target protein itself", "An enzyme substrate", "Anti-immunoglobulin against the mobile antibody only", "A capture antibody against a second epitope of the target"],
    answer: 3,
    explanation: "The sample first meets a mobile labelled antibody, and the resulting complex is caught at the test line by a second antibody against a different epitope, forming a sandwich. The control line usually carries anti-immunoglobulin that captures surplus labelled antibody. Two epitopes are needed, which is why such kits suit proteins rather than small molecules."
  },
  {
    id: 102,
    question: "The RSID-Saliva kit detects which salivary protein?",
    options: ["Human salivary α-amylase", "Prostate-specific antigen", "Human haemoglobin", "Statherin only"],
    answer: 0,
    explanation: "RSID-Saliva uses monoclonal antibodies against human salivary α-amylase (AMY1), which makes it more specific than the general Phadebas starch test. RSID-Semen targets semenogelin, and RSID-Blood targets glycophorin A. Being antibody based, these kits still give presumptive to confirmatory indications of fluid type, not identity."
  },
  {
    id: 103,
    question: "Semenogelin is a useful confirmatory marker for semen because",
    options: ["it is also abundant in saliva, allowing one test for both", "it is a carbohydrate and resists all degradation", "it is present in blood of males only", "it is produced by the seminal vesicles and is essentially specific to semen"],
    answer: 3,
    explanation: "Semenogelin is the main protein of seminal vesicle secretion and forms the gel in fresh semen. It is far more specific to semen than acid phosphatase and is detectable even without spermatozoa. PSA (p30) is the other widely used marker, though it occurs in trace amounts in some other fluids."
  },
  {
    id: 104,
    question: "An immunological test for species origin shows a reaction with anti-human serum and a weaker reaction with anti-monkey serum. The best explanation is",
    options: ["the stain contains both human and monkey blood", "the anti-human serum has lost specificity by storage", "cross-reactivity due to shared epitopes between closely related species", "the test is invalid and must be discarded"],
    answer: 2,
    explanation: "Serum proteins of closely related primates share many epitopes, so antisera often cross-react, with the strongest reaction against the true species. Antisera are therefore absorbed to remove cross-reacting antibodies and tested against a panel. Mitochondrial DNA analysis gives a clearer species answer."
  },
  {
    id: 105,
    question: "In radial immunodiffusion (the Mancini method), the antigen concentration is proportional to",
    options: ["the time taken for the ring to appear", "the thickness of the agar layer", "the distance of the well from the plate edge", "the area of the precipitin ring around the well"],
    answer: 3,
    explanation: "Antigen diffuses from a well into agar containing antibody, and a ring forms where they are in optimal proportions. At equilibrium, the ring area, and so the square of its diameter, is proportional to the antigen concentration. A standard curve from known concentrations is used to read off results."
  },
  {
    id: 106,
    question: "In rocket immunoelectrophoresis, antigen is driven through antibody-containing gel by an electric field and forms",
    options: ["a circular ring whose area is proportional to antibody concentration", "a cone-shaped precipitate whose height is proportional to antigen concentration", "two crossed lines showing non-identity", "a ladder of bands by molecular mass"],
    answer: 1,
    explanation: "The rocket or spike height increases with antigen concentration, so the method quantifies antigen quickly. It is faster than radial immunodiffusion because electrophoresis replaces passive diffusion. It requires the antigen to be negatively charged at the buffer pH."
  },
  {
    id: 107,
    question: "In the zone phenomenon of precipitation reactions, maximum precipitate forms",
    options: ["in the prozone, where antibody is in large excess", "in the zone of equivalence, where antigen and antibody are in optimal proportions", "in the postzone, where antigen is in large excess", "only when complement is added"],
    answer: 1,
    explanation: "Lattice formation needs both reactants in comparable amounts, which happens at equivalence. Excess antibody (prozone) or excess antigen (postzone) leaves small soluble complexes and little visible precipitate, causing false negatives. Testing a range of dilutions avoids this error."
  },
  {
    id: 108,
    question: "A dried bloodstain several months old gives a negative Lattes crust test but a clear ABO result by absorption-elution. The reason is that",
    options: ["antigens degrade faster than the antibodies", "absorption-elution detects antibodies, not antigens", "the Lattes test requires intact red cells", "antibodies in the stain degrade faster than the red-cell antigens"],
    answer: 3,
    explanation: "The Lattes test depends on the antibodies in serum, which lose activity relatively quickly on drying and ageing. Red-cell antigens are more robust and can still bind antiserum in absorption-elution, which detects antigens. So absorption-elution is the method of choice for old stains."
  },
  {
    id: 109,
    question: "Which of the following is a confirmatory, rather than a presumptive, test for blood?",
    options: ["Leucomalachite green test", "Luminol test", "Benzidine test", "Microcrystal test producing haemin crystals"],
    answer: 3,
    explanation: "Microcrystal methods such as the Teichmann test, which yields haemin crystals, and the Takayama test, which yields haemochromogen crystals, demonstrate haem itself and are confirmatory. Leucomalachite green, luminol and benzidine detect peroxidase-like activity and can be triggered by plant peroxidases and oxidising agents. Benzidine is no longer used because it is carcinogenic."
  },
  {
    id: 110,
    question: "Why must luminol be sprayed only after other examinations of a surface are complete?",
    options: ["It permanently destroys all DNA in the stain", "It makes stains invisible to further photography", "It converts haemoglobin into haemin", "It is a liquid spray that can dilute and move stains and may affect some later tests"],
    answer: 3,
    explanation: "Luminol gives a chemiluminescent glow with very dilute blood over large areas, but spraying wets the surface and can spread or dilute stains. DNA typing is usually still possible after luminol, but sampling should ideally be done on untreated areas. So documentation and sampling come first."
  },
  {
    id: 111,
    question: "In polarised light microscopy, a fibre that shows different refractive indices along and across its length is said to be",
    options: ["isotropic", "fluorescent", "birefringent", "dichroic in the UV only"],
    answer: 2,
    explanation: "Birefringence is the difference between the refractive indices parallel and perpendicular to the fibre axis, and it produces interference colours between crossed polars. It is a useful identifying property for synthetic fibres. Isotropic materials such as most glass show a single refractive index."
  },
  {
    id: 112,
    question: "A comparison microscope is used in fibre and hair examination because it",
    options: ["presents two specimens side by side in one field under identical conditions", "gives higher magnification than a compound microscope", "produces three-dimensional surface images", "measures the refractive index directly"],
    answer: 0,
    explanation: "Two stages and objectives feed a single eyepiece through an optical bridge, so the questioned and known items are seen together at the same magnification and illumination. This makes small differences in colour, diameter and structure easier to judge. The same principle is used in bullet comparison."
  },
  {
    id: 113,
    question: "Phase-contrast microscopy is particularly useful for",
    options: ["viewing unstained, living or transparent cells by converting phase differences into contrast", "determining the elemental composition of a particle", "producing images from reflected electrons", "measuring the fluorescence lifetime of a dye"],
    answer: 0,
    explanation: "Light passing through a specimen is retarded slightly, and an annular phase plate turns these invisible phase shifts into amplitude differences the eye can see. So unstained cells can be examined without fixing or staining. Elemental composition needs EDX, and electron images need an electron microscope."
  },
  {
    id: 114,
    question: "What is the main purpose of sputter-coating a non-conducting sample with gold before scanning electron microscopy?",
    options: ["To prevent charge build-up that would distort the image", "To stain the sample for better colour", "To make the sample fluoresce under the electron beam", "To harden the sample against vacuum damage"],
    answer: 0,
    explanation: "Insulating specimens such as hair, fibres and paper accumulate electrons, which deflects the beam and gives bright artefacts. A thin conducting layer drains the charge away. Variable-pressure or low-vacuum SEM can image uncoated samples when coating must be avoided."
  },
  {
    id: 115,
    question: "In thin-layer chromatography, the stationary phase is silica gel and the mobile phase is a mixture of organic solvents. This separation mode is",
    options: ["normal-phase (adsorption) chromatography", "reverse-phase chromatography", "ion-exchange chromatography", "size-exclusion chromatography"],
    answer: 0,
    explanation: "Silica is polar, and with a less polar mobile phase the more polar analytes are retained longer, which is normal-phase chromatography. Reverse-phase uses a non-polar C18 stationary phase with a polar mobile phase, as in most HPLC. Size exclusion separates by molecular size."
  },
  {
    id: 116,
    question: "In gas chromatography, which component determines the carrier gas flow and the pressure programme that moves analytes through the column?",
    options: ["The flame ionisation detector", "The pneumatic control system with the carrier gas supply", "The mass analyser", "The autosampler needle"],
    answer: 1,
    explanation: "The carrier gas, usually helium or nitrogen, is delivered at controlled pressure or flow and acts as the mobile phase. Separation depends on partition between this gas and the stationary phase coating the capillary column, with the oven temperature programme controlling elution. Detectors such as FID or MS only measure what emerges."
  },
  {
    id: 117,
    question: "A toxicology laboratory wants to separate and quantify a thermally labile drug that decomposes on heating. Which technique is most suitable?",
    options: ["Gas chromatography with FID", "HPLC with a UV or mass-spectrometric detector", "Headspace GC", "Flame photometry"],
    answer: 1,
    explanation: "HPLC separates in the liquid phase at or near room temperature, so heat-sensitive and non-volatile compounds are not destroyed. GC requires the analyte to be volatile and thermally stable, or chemically derivatised. Headspace GC is only for volatiles such as alcohols and solvents."
  },
  {
    id: 118,
    question: "In SDS-PAGE, why do proteins separate essentially according to molecular mass?",
    options: ["SDS removes all charge from the proteins", "The gel binds proteins by their isoelectric point", "Proteins are separated by their enzyme activity", "SDS gives each protein a similar charge-to-mass ratio and unfolds it"],
    answer: 3,
    explanation: "SDS denatures proteins and coats them with negative charge roughly in proportion to their length, so their intrinsic charge differences no longer dominate. Migration through the sieving polyacrylamide gel then depends mainly on size. Native PAGE, without SDS, separates by charge, size and shape together."
  },
  {
    id: 119,
    question: "In agarose gel electrophoresis of DNA, the fragments move towards the anode because",
    options: ["DNA bases are positively charged", "ethidium bromide makes DNA negative", "the buffer carries DNA by electro-endosmosis", "the phosphate backbone gives DNA a net negative charge at neutral pH"],
    answer: 3,
    explanation: "Each nucleotide carries a negatively charged phosphate, so DNA moves to the positive electrode regardless of sequence. Smaller fragments move faster through the gel pores, giving separation by size. Agarose concentration is chosen according to the size range of interest."
  },
  {
    id: 120,
    question: "In an atomic absorption spectrometer used to measure a metal such as lead, where does the atomisation of the sample occur?",
    options: ["In the hollow cathode lamp", "In the flame or graphite furnace", "In the monochromator", "At the photomultiplier detector"],
    answer: 1,
    explanation: "The flame or graphite furnace converts the sample into free ground-state atoms, which absorb light of a characteristic wavelength. The hollow cathode lamp provides that element-specific light, the monochromator selects the line, and the detector measures the absorbance. Graphite furnace AAS is more sensitive than flame AAS."
  },
  {
    id: 121,
    question: "Infrared spectroscopy identifies a compound mainly by",
    options: ["measuring the mass of the molecular ion", "counting the number of unpaired electrons", "recording the emission of light after excitation", "the pattern of absorption bands from bond vibrations, which acts as a molecular fingerprint"],
    answer: 3,
    explanation: "IR radiation excites stretching and bending vibrations, and each functional group absorbs at characteristic wavenumbers, with the region below about 1,500 cm⁻¹ serving as a fingerprint. FTIR with an ATR accessory is widely used on fibres, paints and polymers. Mass is measured by mass spectrometry instead."
  },
  {
    id: 122,
    question: "Fluorescence spectroscopy is generally more sensitive than UV absorption spectroscopy because",
    options: ["the emitted light is measured against a dark background rather than as a small loss from a bright beam", "fluorescence uses shorter wavelengths than absorption", "all compounds fluoresce strongly", "fluorescence needs no excitation source"],
    answer: 0,
    explanation: "In absorbance, a small signal must be detected as a slight dimming of a strong beam, while fluorescence is detected at right angles against near-zero background. This allows detection at far lower concentrations. The drawback is that only some molecules fluoresce, though labelling can be used."
  },
  {
    id: 123,
    question: "In mass spectrometry, the base peak of a spectrum is",
    options: ["the peak corresponding to the intact molecule", "the most intense peak, to which all other intensities are scaled", "the peak at the lowest mass-to-charge ratio", "the peak from the carrier gas"],
    answer: 1,
    explanation: "The base peak is assigned 100% relative abundance and all other peaks are reported relative to it. The molecular ion peak shows the intact molecule's mass but need not be the strongest. Fragmentation patterns and the base peak together help identify a compound."
  },
  {
    id: 124,
    question: "Electrospray ionisation is well suited to LC-MS of peptides and drugs because it",
    options: ["requires a solid matrix and a pulsed laser", "produces ions directly from a liquid stream at atmospheric pressure with little fragmentation", "works only on gases at high temperature", "needs the sample to be heated to 300 °C in vacuum"],
    answer: 1,
    explanation: "A high voltage on the LC effluent creates charged droplets that evaporate to leave ions, so the output of a liquid chromatograph can be sampled directly. It is a soft method that preserves intact molecules and makes multiply charged ions from large molecules. MALDI uses a solid matrix with a laser."
  },
  {
    id: 125,
    question: "In an immunoassay drug screen followed by a confirmatory analysis, what is the role of the confirmatory step?",
    options: ["To repeat the same immunoassay for reproducibility", "To check whether the sample volume was adequate", "To store the result in a database", "To identify and quantify the specific drug by an independent, more specific principle such as GC-MS"],
    answer: 3,
    explanation: "Immunoassays are sensitive but can cross-react with related compounds, so a positive screen must be confirmed by a method based on a different principle, usually GC-MS or LC-MS/MS. Confirmation names the exact compound and measures its concentration. Reporting a drug on screening alone is not acceptable practice."
  },
  {
    id: 126,
    question: "Which pair of metabolites in urine indicates cannabis use?",
    options: ["THC-COOH and 11-hydroxy-THC", "Benzoylecgonine and ecgonine methyl ester", "Morphine and codeine", "Amphetamine and methamphetamine"],
    answer: 0,
    explanation: "Delta-9-THC is metabolised to 11-hydroxy-THC and then to the inactive THC-COOH, which is the main urinary target. Benzoylecgonine is the main cocaine metabolite. Because THC-COOH is stored in fat and released slowly, it can be detected for weeks in heavy users."
  },
  {
    id: 127,
    question: "Why is the Marquis reagent test on a seized powder regarded as presumptive only?",
    options: ["It destroys the entire sample", "It works only on liquids", "It requires an electron microscope to read", "Several different classes of compound give similar colours"],
    answer: 3,
    explanation: "Marquis reagent gives purple colours with opiates and orange-brown with amphetamine-type substances, but other compounds can give overlapping colours. A colour test can therefore only indicate a class, not identify a drug. Confirmation requires TLC or chromatographic and spectrometric analysis."
  },
  {
    id: 128,
    question: "A blood sample for alcohol estimation should be preserved with sodium fluoride and potassium oxalate because",
    options: ["fluoride dissolves alcohol and oxalate stabilises haemoglobin", "fluoride inhibits microbial fermentation and oxalate prevents clotting", "both act as antioxidants for alcohol", "oxalate inhibits bacteria and fluoride prevents clotting"],
    answer: 1,
    explanation: "Sodium fluoride is an enzyme and glycolysis inhibitor that stops micro-organisms from producing or consuming ethanol in the tube, while potassium oxalate is the anticoagulant. The tube should be filled fully and kept cold. Alcohol swabs are avoided when drawing the sample."
  },
  {
    id: 129,
    question: "Which biological matrix gives the longest detection window for drug use?",
    options: ["Blood", "Oral fluid", "Hair", "Urine"],
    answer: 2,
    explanation: "Hair incorporates drugs as it grows and can show use over months, while blood and oral fluid reflect only the last hours and urine a few days. The trade-off is that hair cannot show impairment at a particular moment. External contamination must be excluded by washing steps."
  },
  {
    id: 130,
    question: "In a GC-MS run, a compound's identity is supported by its retention time matching a standard and by",
    options: ["its peak area being larger than the standard's", "its elution before the solvent peak", "its colour on the chromatogram", "its mass spectrum matching the standard and library within tolerance"],
    answer: 3,
    explanation: "Identification rests on both chromatographic retention and the mass spectral fragmentation pattern, with relative ion abundances within accepted tolerances. Peak area reflects amount, not identity. Running a known standard under identical conditions in the same batch is essential."
  },
  {
    id: 131,
    question: "Which central agency administers the Central Forensic Science Laboratories at Kolkata, Hyderabad, Chandigarh, Pune, Bhopal, Guwahati and Delhi?",
    options: ["Indian Council of Medical Research", "Directorate of Forensic Science Services under the Ministry of Home Affairs", "Department of Science and Technology", "Central Bureau of Investigation"],
    answer: 1,
    explanation: "The DFSS, carved out of BPR&D in 2002 under the MHA, runs seven CFSLs; it took CFSL New Delhi over from the CBI in 2022. Its centres of excellence include Guwahati for biological sciences, Bhopal for physical sciences, Pune for psychology and Kolkata for explosives. The CBI no longer runs a CFSL of its own."
  },
  {
    id: 132,
    question: "The National Crime Records Bureau, which publishes Crime in India, works under which ministry?",
    options: ["Ministry of Law and Justice", "Ministry of Science and Technology", "Ministry of Health and Family Welfare", "Ministry of Home Affairs"],
    answer: 3,
    explanation: "NCRB was set up in 1986 under the MHA and compiles national crime statistics, runs CCTNS and the national fingerprint database NAFIS. Its Crime in India and Accidental Deaths and Suicides in India reports are widely cited. It does not perform forensic examinations itself."
  },
  {
    id: 133,
    question: "Which enactment, in force from 1 July 2024, replaced the Indian Evidence Act, 1872?",
    options: ["Bharatiya Nyaya Sanhita, 2023", "Bharatiya Nagarik Suraksha Sanhita, 2023", "Bharatiya Sakshya Adhiniyam, 2023", "Bharatiya Sakshya Sanhita, 2024"],
    answer: 2,
    explanation: "The Bharatiya Sakshya Adhiniyam, 2023 replaced the Evidence Act and expressly includes electronic and digital records as documents. The BNS replaced the IPC and the BNSS replaced the CrPC on the same date. Expert opinion provisions carry over in substance."
  },
  {
    id: 134,
    question: "Under Section 51 of the BNSS, 2023, the examination of an arrested person at the request of a police officer is carried out by",
    options: ["the investigating officer alone", "a registered medical practitioner, who may collect samples such as blood and swabs", "the forensic scientist at the laboratory", "any police officer of the rank of inspector"],
    answer: 1,
    explanation: "The BNSS continues the earlier scheme under which a registered medical practitioner carries out the examination and collects samples, including blood, swabs and hair, for DNA profiling and other tests. The investigating officer makes the request and forwards the sealed samples. Section 51 of the BNSS corresponds to Section 53 of the old CrPC."
  },
  {
    id: 135,
    question: "Why must liquid blood samples for serology and DNA be sent to the laboratory in a cold chain without delay?",
    options: ["Cold makes the blood clot faster for easier handling", "Microbial growth and haemolysis degrade antigens, antibodies and DNA", "The sealing wax melts at room temperature", "DNA evaporates from warm samples"],
    answer: 1,
    explanation: "Warm, moist blood supports bacterial growth that degrades proteins and nucleic acids, and haemolysis releases inhibitors. Samples are refrigerated, not frozen if whole blood in EDTA is to be used for grouping, and dispatched quickly. A bloodstain dried on clean cloth is more stable for long storage."
  },
  {
    id: 136,
    question: "A wet bloodstained garment is recovered. The correct procedure before packing is to",
    options: ["seal it at once in an airtight polythene bag", "wash off excess blood and then dry it", "dry it in direct sunlight for faster results", "air-dry it in the shade and pack it in a paper bag"],
    answer: 3,
    explanation: "Plastic traps moisture and promotes bacterial and fungal growth that destroys DNA, so breathable paper packing is used after shade drying. Direct sunlight and heat damage DNA and fade stains. Each item is packed separately to prevent transfer."
  },
  {
    id: 137,
    question: "What is the main purpose of a chain-of-custody document accompanying an exhibit?",
    options: ["To list the tests the laboratory should perform", "To record every person who held the exhibit and when, so its integrity can be proved in court", "To record the fee payable for the examination", "To certify the opinion of the expert"],
    answer: 1,
    explanation: "The chain of custody shows an unbroken record of possession and transfer, with dates, signatures and seal details, so the court can be satisfied the exhibit was not tampered with. Breaks in the chain can make evidence inadmissible or reduce its weight. Sample seals are compared with the specimen seal sent separately."
  },
  {
    id: 138,
    question: "Control samples of unstained material are taken from an item alongside the stained area because",
    options: ["they provide a reference profile of the suspect", "they are required to calibrate the spectrophotometer", "they replace the need for a reagent blank", "they show whether the substrate itself interferes with the tests or contributes DNA"],
    answer: 3,
    explanation: "A substrate control from a clean area of the same material reveals background reactions, dyes or contaminating DNA from the item. It is examined in parallel with the stain. It is different from a reagent blank, which checks the reagents themselves."
  },
  {
    id: 139,
    question: "Base editing with a Cas9 fused to a deaminase differs from classical CRISPR knockout because it",
    options: ["changes one base without making a double-strand break", "deletes whole exons at random", "requires no guide RNA", "acts only on RNA molecules"],
    answer: 0,
    explanation: "Base editors use a catalytically impaired Cas9 to position a cytidine or adenine deaminase at a target, converting one base to another without a double-strand break or a donor template. This lowers indel formation and does not rely on homology-directed repair. Prime editing extends this to small insertions and deletions."
  },
  {
    id: 140,
    question: "In CRISPR nomenclature, the 20-nucleotide region of the guide RNA that pairs with the target DNA is called the",
    options: ["scaffold or tracrRNA region", "spacer or guide sequence", "protospacer-adjacent motif", "nuclease domain"],
    answer: 1,
    explanation: "The spacer is the variable 20-nucleotide region that base-pairs with the protospacer in the target DNA, while the scaffold region binds Cas9. The PAM is in the DNA, not the guide. Off-target activity is reduced by choosing spacers with few near-matches in the genome."
  },
  {
    id: 141,
    question: "A CRISPR-based assay is being considered for rapid species identification of seized wildlife products. Its main advantage over sequencing is that it",
    options: ["needs no nucleic acid extraction at all", "can give a visible result in a field-deployable format within minutes", "can identify individuals rather than species", "requires no primers or guides"],
    answer: 1,
    explanation: "Cas12a or Cas13 based assays with isothermal pre-amplification produce fluorescent or lateral-flow readouts quickly without a sequencer, which suits checkposts and field units. Sequencing remains the reference method and is needed for unknown or closely related species. A nucleic acid extraction or lysis step is still required."
  },
  {
    id: 142,
    question: "A nucleotide BLAST search returns hits with an E-value of 3 × 10⁻⁸⁰ for one sequence and 0.8 for another. What does this mean?",
    options: ["The first hit is far more significant; the second could easily arise by chance", "The second hit is more significant because its value is larger", "Both hits are equally significant", "E-values measure percentage identity only"],
    answer: 0,
    explanation: "The E-value is the number of hits of that quality expected by chance in a database of that size, so smaller is better. A value near or above 1 is not meaningful. E-value depends on database size, so the same alignment can have different E-values in different databases."
  },
  {
    id: 143,
    question: "A sequence alignment is described as 'local'. Which algorithm family performs local alignment?",
    options: ["Needleman-Wunsch", "Neighbour-joining", "Smith-Waterman", "UPGMA"],
    answer: 2,
    explanation: "Smith-Waterman finds the best-matching sub-regions, which suits comparing a short query against long sequences. Needleman-Wunsch aligns sequences end to end, which is global. Neighbour-joining and UPGMA are tree-building methods used after alignment."
  },
  {
    id: 144,
    question: "A forensic laboratory uploads a mtDNA haplotype to estimate how common it is. Which concept is used to express the result?",
    options: ["Random match probability by multiplying allele frequencies across loci", "Combined paternity index", "Haplotype frequency with an upper confidence limit, since counting method is used", "Degradation index"],
    answer: 2,
    explanation: "Because the whole mtDNA molecule is inherited as one block, its positions are not independent and frequencies cannot be multiplied. The haplotype is instead counted in a database and reported with an upper confidence limit, often by the Clopper-Pearson method. Multiplication across loci applies only to independent autosomal markers."
  },
  {
    id: 145,
    question: "Which database is the international reference resource for Y-chromosome STR haplotypes?",
    options: ["EMPOP", "STRBase", "YHRD", "OMIM"],
    answer: 2,
    explanation: "The Y-Chromosome Haplotype Reference Database (YHRD) holds Y-STR haplotypes from populations worldwide and is used to estimate haplotype frequencies. EMPOP serves the same purpose for mtDNA. OMIM catalogues human genes and genetic disorders."
  },
  {
    id: 146,
    question: "Proteomic identification of a body fluid from a stain has an advantage over mRNA-based methods because proteins",
    options: ["are present in only one body fluid each", "can be detected without any instrument", "are generally more stable than RNA in aged and environmentally exposed stains", "are identical in all individuals"],
    answer: 2,
    explanation: "RNA is readily degraded by ribonucleases and moisture, while many structural and secretory proteins persist for long periods. LC-MS/MS can detect fluid-specific proteins such as semenogelin, statherin and haemoglobin in one run. mRNA profiling remains valuable because of its high specificity for cell type."
  },
  {
    id: 147,
    question: "In mass-spectrometry-based proteomics, the term 'shotgun' approach refers to",
    options: ["digesting the whole protein mixture into peptides and identifying them by database searching", "separating intact proteins by isoelectric focusing only", "sequencing proteins residue by residue from the N-terminus", "staining gels with silver before analysis"],
    answer: 0,
    explanation: "Shotgun or bottom-up proteomics digests the mixture, usually with trypsin, separates the peptides by liquid chromatography and identifies them from their fragmentation spectra matched against a protein database. N-terminal Edman sequencing is slow and needs purified protein. Top-down proteomics analyses intact proteins instead."
  },
  {
    id: 148,
    question: "Which standard is most relevant to the accreditation of testing laboratories such as an FSL in India?",
    options: ["ISO 9001 for quality management systems only", "ISO 14001 for environmental management", "ISO/IEC 17025, administered in India through NABL", "ISO 27001 for information security"],
    answer: 2,
    explanation: "ISO/IEC 17025 sets requirements for the competence of testing and calibration laboratories, and NABL accredits Indian laboratories against it. ISO 17020 covers inspection bodies and ISO 17043 proficiency testing providers. Accreditation supports the reliability of expert evidence in court."
  },
  {
    id: 149,
    question: "What is the main purpose of a laboratory taking part in proficiency testing programmes?",
    options: ["To certify the qualifications of individual analysts by examination", "To calibrate instruments against national standards", "To validate a new method before first use", "To check its results against those of other laboratories on the same blind samples"],
    answer: 3,
    explanation: "In proficiency testing, laboratories analyse samples of undisclosed composition and their results are compared, revealing systematic errors. Calibration against reference materials and method validation are separate, though related, quality activities. Participation is a requirement of accreditation."
  },
  {
    id: 150,
    question: "An expert's report submitted to court should state the methods used, the results and the limits of the conclusion because",
    options: ["the court must be able to understand and test the basis of the opinion", "the law requires every report to recommend a verdict", "the defence is not allowed to question the expert", "the laboratory is paid according to report length"],
    answer: 0,
    explanation: "Expert opinion assists the court, which must weigh it, so the report should set out the methods, observations, reasoning and limitations, including match probabilities where relevant. The expert does not decide guilt. Transparency also allows the opinion to be tested in cross-examination."
  },
];

export default questions;

const questions = [
  {
    id: 1,
    question: "Into how many agro-climatic zones is Madhya Pradesh divided for agricultural planning?",
    options: ["5", "11", "15", "9"],
    answer: 1,
    explanation: "MP is divided into 11 agro-climatic zones on the basis of rainfall, soil and cropping, such as Malwa plateau, Nimar plains, Gird, Bundelkhand, Vindhya plateau, Central Narmada valley and Jhabua hills. The figure of 5 refers to the broader crop zones (rice, wheat, cotton, jowar-wheat, etc.), not the agro-climatic zones."
  },
  {
    id: 2,
    question: "The 'Gird' agro-climatic zone of Madhya Pradesh comprises mainly which districts?",
    options: ["Rewa, Satna and Sidhi", "Indore, Dewas and Ujjain", "Gwalior, Bhind and Morena", "Betul and Chhindwara"],
    answer: 2,
    explanation: "The Gird zone covers the northern alluvial districts of Gwalior, Bhind, Morena and parts of Shivpuri and Sheopur. It has low rainfall, alluvial soil and a wheat–mustard–bajra cropping pattern."
  },
  {
    id: 3,
    question: "The Nimar plains agro-climatic zone, known for cotton cultivation, includes which districts?",
    options: ["Khargone, Khandwa and Barwani", "Datia, Tikamgarh and Chhatarpur", "Mandla, Dindori and Shahdol", "Sagar, Damoh and Vidisha"],
    answer: 0,
    explanation: "Nimar is the lower Narmada valley in south-western MP, covering Khargone, Khandwa, Burhanpur, Barwani and part of Dhar. Its deep black soils and hot climate make it the main cotton belt of the state."
  },
  {
    id: 4,
    question: "A district in south-western Madhya Pradesh has undulating hilly terrain, shallow soils, a largely Bhil population and maize-based rain-fed farming. It most likely falls in which agro-climatic zone?",
    options: ["Central Narmada valley", "Malwa plateau", "Jhabua hills", "Gird"],
    answer: 2,
    explanation: "The Jhabua hills zone (Jhabua, Alirajpur and part of Dhar) has hilly terrain, light soils and small tribal holdings where maize is the main crop. The Central Narmada valley and Malwa have deep black soils, and Gird is the northern alluvial plain."
  },
  {
    id: 5,
    question: "Rewa, Satna, Panna, Jabalpur and Seoni districts lie in which agro-climatic zone of Madhya Pradesh?",
    options: ["Vindhya plateau", "Kymore plateau and Satpura hills", "Satpura plateau", "Northern hills of Chhattisgarh"],
    answer: 1,
    explanation: "The Kymore (Kaimur) plateau and Satpura hills zone spans Rewa, Satna, Panna, Jabalpur, Katni and Seoni, with a rice–wheat pattern. The Satpura plateau zone is Betul and Chhindwara, and the Northern hills of Chhattisgarh zone is Shahdol, Anuppur, Mandla, Dindori and Umaria."
  },
  {
    id: 6,
    question: "Balaghat district, with high rainfall and paddy-dominated farming, is placed in which agro-climatic zone of Madhya Pradesh?",
    options: ["Chhattisgarh plains", "Bundelkhand", "Central Narmada valley", "Satpura plateau"],
    answer: 0,
    explanation: "Balaghat is a physical continuation of the Chhattisgarh plain, which is why it is placed in the Chhattisgarh plains zone. Like the rest of that plain, it is a rice bowl with heavy monsoon rainfall."
  },
  {
    id: 7,
    question: "Under the Planning Commission's division of India into 15 agro-climatic regions, most of Madhya Pradesh falls in the:",
    options: ["Eastern Plateau and Hills region", "Western Plateau and Hills region", "Central Plateau and Hills region", "Southern Plateau and Hills region"],
    answer: 2,
    explanation: "Most of MP, along with parts of Rajasthan and Uttar Pradesh, belongs to the Central Plateau and Hills region (Zone VIII). The Eastern Plateau and Hills region covers Chhattisgarh, Jharkhand and Odisha, and the Western Plateau and Hills region covers much of Maharashtra."
  },
  {
    id: 8,
    question: "Madhya Pradesh is called the 'Soya State' because:",
    options: ["It is the only state where soybean is grown", "It has traditionally led India in soybean area and output", "It exports most of India's soya milk", "Soybean is its state crop by law"],
    answer: 1,
    explanation: "MP has the largest area under soybean in India and has traditionally been its top producer, mainly on the black soils of Malwa and the Vindhya plateau. Maharashtra, the other major grower, has out-produced MP in some recent years (for example 2024-25) thanks to higher yields, but MP still leads in area. Rajasthan is a distant third, so MP is clearly not the only grower."
  },
  {
    id: 9,
    question: "The ICAR institute for research on soybean, the Indian Institute of Soybean Research, is located at:",
    options: ["Indore", "Bhopal", "Ujjain", "Jabalpur"],
    answer: 0,
    explanation: "The ICAR–Indian Institute of Soybean Research is at Indore, the centre of the Malwa soybean belt. The Soybean Processors Association of India (SOPA) is also headquartered there. Jabalpur hosts the state agricultural university (JNKVV), not the soybean institute."
  },
  {
    id: 10,
    question: "Soybean in Madhya Pradesh is grown as a:",
    options: ["Zaid crop, grown between March and June", "Kharif crop, sown with the onset of the monsoon", "Perennial plantation crop", "Rabi crop, sown in October–November"],
    answer: 1,
    explanation: "Soybean is sown in late June–July after the monsoon arrives and harvested in September–October. Its harvest frees the field for a rabi crop such as wheat or gram, giving the common soybean–wheat rotation."
  },
  {
    id: 11,
    question: "A Malwa farmer grows soybean in kharif and wheat in rabi on the same field. The wheat benefits from the preceding soybean mainly because:",
    options: ["Soybean adds large amounts of phosphorus to the soil", "Soybean residues raise the soil's salt content", "Root nodules of soybean fix atmospheric nitrogen through Bradyrhizobium bacteria", "Soybean roots break up the basalt bedrock"],
    answer: 2,
    explanation: "Soybean is a legume whose root nodules host Bradyrhizobium japonicum, which fixes atmospheric nitrogen. Some of this nitrogen remains for the next crop. This matters because black soil is naturally poor in nitrogen."
  },
  {
    id: 12,
    question: "Where does Madhya Pradesh rank in wheat production in India?",
    options: ["Second, after Uttar Pradesh", "Third, after Uttar Pradesh and Punjab", "First, ahead of Uttar Pradesh", "Second, after Punjab"],
    answer: 0,
    explanation: "MP is the second-largest wheat producer after Uttar Pradesh, ahead of Punjab. In some recent years MP has led India in wheat procurement, which is a different measure from production."
  },
  {
    id: 13,
    question: "The premium 'Sharbati' wheat of Madhya Pradesh, which received a GI tag, is associated with which district?",
    options: ["Gwalior", "Ujjain", "Sehore", "Hoshangabad"],
    answer: 2,
    explanation: "Sharbati wheat from Sehore and the surrounding Vindhya plateau is a golden, lustrous, high-quality grain sold at a premium. It received a Geographical Indication tag in 2023."
  },
  {
    id: 14,
    question: "Which rabi pulse, sown on residual soil moisture after the monsoon, is the most important pulse crop of Madhya Pradesh?",
    options: ["Arhar (tur)", "Urad", "Gram (chana)", "Moong"],
    answer: 2,
    explanation: "Gram is MP's leading pulse by area and production and is sown in October–November on the moisture left in black soils after the monsoon. MP is generally India's top gram producer, with Maharashtra and Rajasthan the main rivals. Arhar, moong and urad are mainly kharif pulses in MP."
  },
  {
    id: 15,
    question: "Which group consists entirely of rabi crops as grown in Madhya Pradesh?",
    options: ["Rice, kodo, kutki and urad", "Wheat, gram, mustard and lentil", "Moong, watermelon, cucumber and fodder", "Soybean, maize, cotton and jowar"],
    answer: 1,
    explanation: "Rabi crops are sown in October–November and harvested in March–April; wheat, gram, mustard and lentil (masoor) are the main ones in MP. Soybean, maize, cotton, rice, kodo-kutki and urad are kharif, and the last group is typical of the zaid season."
  },
  {
    id: 16,
    question: "Which district of Madhya Pradesh is the leading producer of cotton?",
    options: ["Khargone", "Mandsaur", "Sagar", "Bhind"],
    answer: 0,
    explanation: "Khargone in the Nimar plains is the largest cotton-producing district of MP, followed by neighbouring districts such as Khandwa, Burhanpur, Barwani and Dhar. Deep black soil and a long frost-free season suit cotton here."
  },
  {
    id: 17,
    question: "Which district of Madhya Pradesh leads in sugarcane production and is known for its jaggery (gur)?",
    options: ["Ratlam", "Tikamgarh", "Narsinghpur", "Shajapur"],
    answer: 2,
    explanation: "Narsinghpur in the fertile Central Narmada valley is the largest sugarcane-growing district of MP, and much of its cane is made into gur. The deep alluvial-black soils and canal and well irrigation of the valley support the crop."
  },
  {
    id: 18,
    question: "Which district of Madhya Pradesh is the largest producer of maize and is sometimes called the 'Corn City'?",
    options: ["Indore", "Chhindwara", "Rewa", "Morena"],
    answer: 1,
    explanation: "Chhindwara on the Satpura plateau is the leading maize-producing district of MP. Maize is a kharif crop that suits its well-drained soils; Jhabua, Alirajpur and Dhar are other important maize areas."
  },
  {
    id: 19,
    question: "Madhya Pradesh is India's largest producer of garlic. The main garlic-growing area is in:",
    options: ["Balaghat and Mandla in the east", "Mandsaur and Neemuch on the Malwa plateau", "Sidhi and Singrauli in the north-east", "Bhind and Morena in the north"],
    answer: 1,
    explanation: "The Malwa districts of Mandsaur, Neemuch, Ratlam and Ujjain grow most of MP's garlic, a rabi crop suited to its cool winters and well-drained black soils. Mandsaur's mandi is one of the largest garlic markets in India."
  },
  {
    id: 20,
    question: "Which minor millets, now promoted as 'Shri Anna', are traditional crops of the tribal district of Dindori?",
    options: ["Ragi and sorghum", "Barley and oats", "Bajra and jowar", "Kodo and kutki"],
    answer: 3,
    explanation: "Kodo (Paspalum scrobiculatum) and kutki (little millet) are hardy crops of Dindori, Mandla and other tribal hill districts, often grown without chemical inputs. MP is the largest producer of kodo-kutki in India."
  },
  {
    id: 21,
    question: "Chinnor, an aromatic rice variety that received a GI tag in 2021, is grown in which district?",
    options: ["Jhabua", "Rewa", "Balaghat", "Sehore"],
    answer: 2,
    explanation: "Chinnor is a fragrant short-grain rice of Balaghat district and received its GI tag in 2021. Balaghat's high rainfall and paddy-based farming make it the rice bowl of MP."
  },
  {
    id: 22,
    question: "Kadaknath, a black-fleshed poultry breed with a GI tag, is associated with which district of Madhya Pradesh?",
    options: ["Mandla", "Jhabua", "Shivpuri", "Damoh"],
    answer: 1,
    explanation: "Kadaknath (Kali Masi) is a native chicken of Jhabua and Alirajpur reared by Bhil and Bhilala communities. It received a GI tag in 2018 and is valued for its black meat, which is high in protein and low in fat."
  },
  {
    id: 23,
    question: "The 'Sundarja' mango, which received a GI tag in 2023, belongs to which district?",
    options: ["Indore", "Gwalior", "Burhanpur", "Rewa"],
    answer: 3,
    explanation: "Sundarja is a fragrant, fibre-less mango of Rewa district in Baghelkhand, said to be grown mainly around Govindgarh. It got its GI tag in 2023, adding to MP's agricultural GIs like Sharbati wheat and Chinnor rice."
  },
  {
    id: 24,
    question: "Where does Madhya Pradesh stand in India in terms of area under certified organic farming?",
    options: ["Second, after Maharashtra", "Second, after Sikkim", "First", "Third, after Rajasthan and Maharashtra"],
    answer: 2,
    explanation: "MP has the largest area under certified organic cultivation in India. Sikkim is the first fully organic state, but its total area is small compared to MP's. Tribal districts like Dindori and Mandla, with low fertiliser use, are important organic areas."
  },
  {
    id: 25,
    question: "The core soybean belt of Madhya Pradesh lies on the:",
    options: ["Gird alluvial plain", "Jhabua hills", "Baghelkhand plateau", "Malwa plateau"],
    answer: 3,
    explanation: "Soybean dominates on the deep black soils of the Malwa plateau (Ujjain, Dewas, Indore, Shajapur, Rajgarh, Mandsaur) and the adjoining Vindhya plateau. The water-retentive regur soil supports the kharif soybean and the following rabi crop."
  },
  {
    id: 26,
    question: "Which rabi oilseed is the principal crop of the Bhind–Morena region in the Gird zone?",
    options: ["Mustard", "Soybean", "Groundnut", "Sesame"],
    answer: 0,
    explanation: "Mustard (rapeseed-mustard) is the main rabi oilseed of the Gird and Chambal region, with Morena and Bhind the leading districts. It tolerates the cool, dry winters and lighter alluvial soils there; soybean, groundnut and sesame are kharif oilseeds."
  },
  {
    id: 27,
    question: "The canal network of the Indira Sagar Project mainly irrigates which districts?",
    options: ["Khandwa and Khargone in the Nimar region", "Bhind and Morena in the Chambal region", "Rewa and Sidhi in Baghelkhand", "Jabalpur and Narsinghpur in the upper Narmada valley"],
    answer: 0,
    explanation: "Indira Sagar's main canal runs through the Nimar plains of Khandwa and Khargone downstream of the dam. The upper Narmada valley around Jabalpur is served by Bargi, and the Chambal region by the Chambal canal system."
  },
  {
    id: 28,
    question: "What is the largest source of irrigation in Madhya Pradesh?",
    options: ["Lift irrigation from rivers", "Groundwater through wells and tube wells", "Tanks and ponds", "Government canals"],
    answer: 1,
    explanation: "Wells and tube wells together irrigate the largest part of MP's net irrigated area, far more than canals. Tanks contribute only a small share today, although they were historically important in Bundelkhand."
  },
  {
    id: 29,
    question: "Tank irrigation has historically been important in Bundelkhand districts such as Tikamgarh and Chhatarpur because:",
    options: ["The region has deep alluvial aquifers", "The region receives heavy rain throughout the year", "Large perennial rivers flow through every village", "Hard granite–gneiss rocks hold little groundwater, so rulers built tanks to store monsoon run-off"],
    answer: 3,
    explanation: "Bundelkhand's crystalline rocks store little groundwater and its rain is seasonal, so the Chandela and Bundela rulers built many embanked tanks. Tikamgarh in particular is known for its large number of old tanks."
  },
  {
    id: 30,
    question: "The Chambal canal system, built jointly by Madhya Pradesh and Rajasthan, mainly irrigates which districts of Madhya Pradesh?",
    options: ["Morena and Bhind", "Jhabua and Alirajpur", "Rewa and Sidhi", "Balaghat and Seoni"],
    answer: 0,
    explanation: "The Chambal Valley Project shares its water between Rajasthan and MP; the canal from the Kota barrage carries MP's share to the Morena and Bhind region. This canal irrigation has helped wheat and mustard farming in the Chambal area."
  },
  {
    id: 31,
    question: "The Indira Sagar Project, which has the largest reservoir in India by storage capacity, is located at:",
    options: ["Bargi, Jabalpur district", "Punasa, Khandwa district", "Deolond, Shahdol district", "Navagam, Narmada district (Gujarat)"],
    answer: 1,
    explanation: "Indira Sagar dam is on the Narmada at Punasa in Khandwa district. Its reservoir has a gross storage of over 12 billion cubic metres, the largest in India. Bargi is near Jabalpur, Navagam is the Sardar Sarovar site, and Deolond is the Bansagar site."
  },
  {
    id: 32,
    question: "Which project on the Narmada lies immediately downstream of the Indira Sagar dam?",
    options: ["Sardar Sarovar Project", "Omkareshwar Project", "Bargi Project", "Maheshwar Project"],
    answer: 1,
    explanation: "The Omkareshwar dam, near the island shrine of Omkareshwar in Khandwa district, is the next major dam downstream of Indira Sagar and uses its regulated releases. Maheshwar and Sardar Sarovar are further downstream, and Bargi is far upstream near Jabalpur."
  },
  {
    id: 33,
    question: "Bargi dam near Jabalpur, the first completed major dam on the Narmada, is officially named:",
    options: ["Rani Avanti Bai Lodhi Sagar", "Rani Durgavati Sagar", "Rani Laxmibai Sagar", "Samrat Ashok Sagar"],
    answer: 0,
    explanation: "The Bargi project is officially Rani Avanti Bai Lodhi Sagar, after the 1857 heroine of Ramgarh. It provides irrigation to Jabalpur and Narsinghpur and generates hydro-power. Samrat Ashok Sagar is the Halali project."
  },
  {
    id: 34,
    question: "The Sardar Sarovar dam, the terminal major dam on the Narmada, is located in which state?",
    options: ["Madhya Pradesh", "Maharashtra", "Gujarat", "Rajasthan"],
    answer: 2,
    explanation: "Sardar Sarovar is at Navagam (Kevadia) in Narmada district of Gujarat. It is an inter-state project of Gujarat, MP, Maharashtra and Rajasthan, and its submergence area extends into MP's Barwani, Dhar and Alirajpur districts."
  },
  {
    id: 35,
    question: "Under the Narmada Water Disputes Tribunal award of 1979, how much of the 28 MAF of utilisable Narmada water was allotted to Madhya Pradesh?",
    options: ["18.25 MAF", "0.25 MAF", "9.00 MAF", "0.50 MAF"],
    answer: 0,
    explanation: "The NWDT allotted 18.25 million acre-feet to MP, 9.00 MAF to Gujarat, 0.50 MAF to Rajasthan and 0.25 MAF to Maharashtra. MP gets the largest share because most of the Narmada basin lies within it."
  },
  {
    id: 36,
    question: "What is Madhya Pradesh's share of the electricity generated at the Sardar Sarovar Project?",
    options: ["16%", "27%", "57%", "50%"],
    answer: 2,
    explanation: "SSP's power is shared as MP 57%, Maharashtra 27% and Gujarat 16%, reflecting the states' contributions to the project. Gujarat gets most of the irrigation and drinking water instead."
  },
  {
    id: 37,
    question: "The Tawa project, whose reservoir was designated a Ramsar site in 2024, is located on the Tawa river near Itarsi in which district?",
    options: ["Harda", "Betul", "Raisen", "Narmadapuram"],
    answer: 3,
    explanation: "Tawa dam is in Narmadapuram district on the Tawa, the Narmada's largest tributary. Completed in the 1970s, it irrigates the Narmadapuram–Harda plain, and its reservoir joined the Ramsar list in 2024."
  },
  {
    id: 38,
    question: "Which dam of the Chambal Valley Project is located in Madhya Pradesh?",
    options: ["Gandhi Sagar", "Jawahar Sagar", "Rana Pratap Sagar", "Kota barrage"],
    answer: 0,
    explanation: "Gandhi Sagar in Mandsaur district is the first and largest storage of the joint MP–Rajasthan Chambal Valley Project. Rana Pratap Sagar, Jawahar Sagar and the Kota barrage are downstream in Rajasthan."
  },
  {
    id: 39,
    question: "The Bansagar project on the Son river near Deolond (Shahdol) is a joint venture whose cost is shared by Madhya Pradesh, Uttar Pradesh and Bihar in the ratio:",
    options: ["3 : 2 : 1", "2 : 2 : 1", "1 : 1 : 1", "2 : 1 : 1"],
    answer: 3,
    explanation: "Bansagar is a multipurpose inter-state project on the Son, with MP bearing half the cost and UP and Bihar a quarter each. The dam itself lies in Shahdol district of MP."
  },
  {
    id: 40,
    question: "The Rajghat dam, an inter-state project of Madhya Pradesh and Uttar Pradesh, is built on which river?",
    options: ["Dhasan", "Ken", "Sindh", "Betwa"],
    answer: 3,
    explanation: "Rajghat dam is on the Betwa near Chanderi, on the MP–UP border, and its benefits are shared by both states. It also has a hydro-electric station."
  },
  {
    id: 41,
    question: "The Halali irrigation project near Bhopal is also known as:",
    options: ["Indira Sagar Project", "Rani Laxmibai Sagar Project", "Samrat Ashok Sagar Project", "Rani Avanti Bai Lodhi Sagar Project"],
    answer: 2,
    explanation: "The Halali dam on the Halali river, a tributary of the Betwa, is officially called the Samrat Ashok Sagar Project. Rani Avanti Bai Lodhi Sagar is the Bargi dam, and Indira Sagar is at Punasa on the Narmada."
  },
  {
    id: 42,
    question: "The Ken–Betwa Link Project is significant because it is:",
    options: ["The first project to link a Himalayan river with a peninsular river", "The first dam built on the Narmada", "The first river-linking project funded entirely by Madhya Pradesh", "The first river-linking project taken up under the National Perspective Plan"],
    answer: 3,
    explanation: "Ken–Betwa is the first project under the National Perspective Plan (1980) for interlinking rivers to reach implementation. It links two peninsular rivers and is mostly centrally funded, so the other options are wrong."
  },
  {
    id: 43,
    question: "The Daudhan dam of the Ken–Betwa Link Project is being built on which river?",
    options: ["Ken", "Sonar", "Dhasan", "Betwa"],
    answer: 0,
    explanation: "Daudhan dam is on the Ken in the Panna Tiger Reserve area. Surplus Ken water will flow through a link canal of over 200 km to the Betwa basin, which has a water deficit."
  },
  {
    id: 44,
    question: "In what ratio are the costs of the Ken–Betwa Link Project shared between the Centre and the states?",
    options: ["75 : 25", "50 : 50", "60 : 40", "90 : 10"],
    answer: 3,
    explanation: "The Union Cabinet approved the project in December 2021 with central support of about 90% of its cost, the states bearing 10%. The tripartite agreement between the Centre, MP and UP was signed on 22 March 2021, World Water Day."
  },
  {
    id: 45,
    question: "The Ken–Betwa Link Project, whose foundation stone was laid at Khajuraho on 25 December 2024, is meant mainly to benefit which region?",
    options: ["Nimar", "Malwa", "Mahakoshal", "Bundelkhand"],
    answer: 3,
    explanation: "The project is designed to irrigate drought-prone Bundelkhand districts in MP (such as Chhatarpur, Panna, Tikamgarh, Niwari, Damoh and Sagar) and UP (such as Jhansi, Mahoba and Banda), and to supply drinking water and power there."
  },
  {
    id: 46,
    question: "The Modified Parbati–Kalisindh–Chambal (PKC) link project, integrated with the Eastern Rajasthan Canal Project, is an agreement between Madhya Pradesh and which state?",
    options: ["Maharashtra", "Rajasthan", "Gujarat", "Uttar Pradesh"],
    answer: 1,
    explanation: "The Modified PKC–ERCP is an inter-state project of MP and Rajasthan, for which agreements were signed in 2024. It will supply irrigation and drinking water to districts of the Chambal and Malwa regions of MP and eastern Rajasthan."
  },
  {
    id: 47,
    question: "The Parbati, Kalisindh and Chambal rivers linked under the PKC project all belong to which river basin?",
    options: ["Son basin (Ganga system)", "Chambal basin (Yamuna system)", "Mahi basin", "Narmada basin"],
    answer: 1,
    explanation: "The Parbati and Kalisindh rise in MP and flow north into Rajasthan to join the Chambal, which is a tributary of the Yamuna. The PKC project therefore redistributes water within the Chambal basin rather than between basins."
  },
  {
    id: 48,
    question: "The first river-linking project of Madhya Pradesh, completed in 2014 to carry Narmada water to Ujjain ahead of the Simhastha, linked the Narmada with the:",
    options: ["Kshipra", "Betwa", "Chambal", "Gambhir"],
    answer: 0,
    explanation: "The Narmada–Kshipra Simhastha Link Project lifts Narmada water and releases it near the source of the Kshipra, keeping the river flowing at Ujjain. It was the first river-linking project in MP and was followed by plans to link the Narmada with other Malwa rivers."
  },
  {
    id: 49,
    question: "The Narmada Valley Development Authority (NVDA), which executes the Narmada projects of Madhya Pradesh, was set up in which year and has its headquarters at?",
    options: ["1979, Indore", "1980, Jabalpur", "1969, Bhopal", "1985, Bhopal"],
    answer: 3,
    explanation: "The MP government constituted the NVDA in 1985 with headquarters in Bhopal to plan and build the state's Narmada projects. 1969 is when the Narmada Water Disputes Tribunal was set up, and 1979 is the year of its award."
  },
  {
    id: 50,
    question: "The Narmada Control Authority, set up to implement the Narmada Water Disputes Tribunal award, has its headquarters at:",
    options: ["Jabalpur", "Gandhinagar", "Bhopal", "Indore"],
    answer: 3,
    explanation: "The Narmada Control Authority was constituted in 1980 under the NWDT award and is headquartered in Indore. It oversees water sharing and the implementation of the Sardar Sarovar and Indira Sagar projects among the party states. NVDA, a state body, is in Bhopal."
  }
];

export default questions;

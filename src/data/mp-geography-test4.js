const questions = [
  {
    id: 1,
    question: "The Satpura Thermal Power Station of MP Power Generating Company is located at:",
    options: ["Chachai, Anuppur district", "Dongalia, Khandwa district", "Sarni, Betul district", "Birsinghpur, Umaria district"],
    answer: 2,
    explanation: "Satpura TPS is at Sarni in Betul district, close to the Pathakhera coalfield and the Tawa river. Chachai has the Amarkantak TPS, Birsinghpur the Sanjay Gandhi TPS and Dongalia the Shri Singhaji TPS."
  },
  {
    id: 2,
    question: "The Amarkantak Thermal Power Station is located at Chachai in which district?",
    options: ["Dindori", "Shahdol", "Umaria", "Anuppur"],
    answer: 3,
    explanation: "Amarkantak TPS is at Chachai in Anuppur district, near the Sohagpur coalfield. Anuppur was carved out of Shahdol in 2003, which is why older books place it in Shahdol."
  },
  {
    id: 3,
    question: "The Sanjay Gandhi Thermal Power Station is located at:",
    options: ["Chachai, Anuppur district", "Vindhyanagar, Singrauli district", "Sarni, Betul district", "Birsinghpur (Pali), Umaria district"],
    answer: 3,
    explanation: "Sanjay Gandhi TPS is at Birsinghpur Pali in Umaria district, near the Johilla coalfield. Vindhyanagar in Singrauli is the site of NTPC's Vindhyachal station."
  },
  {
    id: 4,
    question: "The Shri Singhaji Thermal Power Project of MPPGCL is in which district?",
    options: ["Khargone", "Khandwa", "Narsinghpur", "Betul"],
    answer: 1,
    explanation: "Shri Singhaji TPP is at Dongalia in Khandwa district, near the Indira Sagar reservoir from which it draws water. Khargone and Narsinghpur (Gadarwara) host NTPC stations, and Betul has the Satpura TPS."
  },
  {
    id: 5,
    question: "Which is the largest thermal power station in India by installed capacity?",
    options: ["Sasan Ultra Mega Power Project, Singrauli", "Satpura Thermal Power Station, Sarni", "Vindhyachal Super Thermal Power Station, Singrauli", "Sanjay Gandhi Thermal Power Station, Birsinghpur"],
    answer: 2,
    explanation: "NTPC's Vindhyachal STPS at Vindhyanagar, Singrauli, has an installed capacity of 4,760 MW, the largest in India. Sasan UMPP (3,960 MW) is also in Singrauli but is smaller."
  },
  {
    id: 6,
    question: "The Sasan Ultra Mega Power Project, a pit-head coal-based plant of about 3,960 MW, is located in which district?",
    options: ["Shahdol", "Chhindwara", "Singrauli", "Sidhi"],
    answer: 2,
    explanation: "Sasan UMPP, developed by Reliance Power, is in Singrauli district and is fed by captive coal mines next to the plant. It is one of the largest pit-head power plants in the world."
  },
  {
    id: 7,
    question: "Singrauli is often called the 'energy capital of India'. Which combination of factors best explains the concentration of power plants there?",
    options: ["Abundant natural gas from offshore fields and a nearby port", "Strong winds on the Malwa plateau and flat land", "High-head hydro sites on the Narmada and dense population", "Large coal reserves at the pit-head and water from the Rihand (Govind Ballabh Pant Sagar) reservoir"],
    answer: 3,
    explanation: "Thermal plants need coal and large volumes of cooling water. Singrauli has huge coal reserves mined by Northern Coalfields and lies on the Rihand reservoir, so plants like Vindhyachal, Sasan and Rihand cluster in the Singrauli region and send power over the grid."
  },
  {
    id: 8,
    question: "What is the installed hydro-electric capacity of the Indira Sagar power station on the Narmada?",
    options: ["520 MW", "115 MW", "1,000 MW", "1,450 MW"],
    answer: 2,
    explanation: "Indira Sagar has eight 125 MW units, totalling 1,000 MW, the largest hydro station in MP. Omkareshwar has 520 MW, Sardar Sarovar 1,450 MW (in Gujarat) and Gandhi Sagar 115 MW."
  },
  {
    id: 9,
    question: "NHDC Ltd, which operates the Indira Sagar and Omkareshwar hydro-electric stations, is a joint venture of:",
    options: ["NHPC Ltd and the Government of Madhya Pradesh", "Power Grid Corporation and MP Power Generating Company", "NTPC Ltd and the Government of Madhya Pradesh", "NHPC Ltd and the Government of Gujarat"],
    answer: 0,
    explanation: "NHDC (Narmada Hydroelectric Development Corporation) is a joint venture of NHPC (51%) and the Government of MP (49%). It runs the Indira Sagar (1,000 MW) and Omkareshwar (520 MW) stations."
  },
  {
    id: 10,
    question: "The 750 MW Rewa Ultra Mega Solar Park is located in which tehsil of Rewa district?",
    options: ["Mauganj", "Sirmaur", "Gurh", "Teonthar"],
    answer: 2,
    explanation: "Rewa Ultra Mega Solar is at Gurh tehsil in Rewa district and was dedicated to the nation in July 2020. It was developed by RUMSL, a joint venture of the MP Urja Vikas Nigam and the Solar Energy Corporation of India."
  },
  {
    id: 11,
    question: "The Rewa Ultra Mega Solar project became the first solar project in India to supply power to an institutional customer outside the state. That customer is:",
    options: ["Indian Railways' Western Railway zone", "Delhi Metro Rail Corporation", "Mumbai Metropolitan Region Development Authority", "Bhopal Smart City Development Corporation"],
    answer: 1,
    explanation: "About a quarter of Rewa's output goes to the Delhi Metro through inter-state open access, a first for an Indian solar project; the rest is bought by MP's power distribution companies. Its record-low tariff when bid in 2017 helped show that solar could match coal power on price."
  },
  {
    id: 12,
    question: "The large floating solar project planned for 600 MW in Madhya Pradesh is on which reservoir?",
    options: ["Gandhi Sagar reservoir on the Chambal", "Upper Lake, Bhopal", "Bansagar reservoir on the Son", "Omkareshwar reservoir on the Narmada"],
    answer: 3,
    explanation: "The Omkareshwar floating solar project in Khandwa district places solar panels on the Omkareshwar dam reservoir, saving land and reducing evaporation. It is one of the largest floating solar projects in the world, built in phases."
  },
  {
    id: 13,
    question: "The Agar, Shajapur and Neemuch solar parks are located in which region of Madhya Pradesh?",
    options: ["Malwa", "Baghelkhand", "Bundelkhand", "Mahakoshal"],
    answer: 0,
    explanation: "Agar Malwa, Shajapur and Neemuch are Malwa plateau districts, whose high solar radiation, many sunny days and available non-farm land suit large solar parks. The cluster is planned at about 1,500 MW (Agar 550, Shajapur 450, Neemuch 500 MW); the Neemuch and Shajapur parks were inaugurated in June 2026."
  },
  {
    id: 14,
    question: "Which group of districts forms the main wind-energy belt of Madhya Pradesh?",
    options: ["Sidhi, Singrauli and Shahdol", "Dewas, Ratlam and Mandsaur", "Balaghat, Mandla and Dindori", "Bhind, Morena and Datia"],
    answer: 1,
    explanation: "Most wind farms of MP are on the exposed ridges of the western Malwa plateau in Dewas, Ratlam, Mandsaur, Shajapur and Dhar districts, where wind speeds are suitable. The Jamgodrani hills near Dewas had some of the state's earliest wind turbines."
  },
  {
    id: 15,
    question: "India's only mechanised diamond mine, Majhgawan, operated by NMDC, is in which district?",
    options: ["Chhatarpur", "Satna", "Damoh", "Panna"],
    answer: 3,
    explanation: "The Majhgawan mine in Panna district is India's only working mechanised diamond mine and is run by NMDC. Panna diamonds received a GI tag in 2023. The Bunder deposit in Chhatarpur has been explored but not mined commercially."
  },
  {
    id: 16,
    question: "At the Majhgawan mine of Panna, diamonds are obtained mainly from:",
    options: ["Bauxite caps of lateritic plateaus", "Coal seams of the Gondwana series", "A kimberlite (lamproite) pipe", "Deccan Trap basalt flows"],
    answer: 2,
    explanation: "Diamonds form deep in the mantle and are carried to the surface in volcanic pipes of kimberlite or lamproite. The Majhgawan pipe is mined by open-cast methods. Panna also has diamonds in old gravels and conglomerates derived from such rocks."
  },
  {
    id: 17,
    question: "Malanjkhand, the largest open-cast copper mine in India, is located in which district and run by which company?",
    options: ["Balaghat; MOIL Ltd", "Chhindwara; Hindustan Copper Ltd", "Singrauli; Northern Coalfields Ltd", "Balaghat; Hindustan Copper Ltd"],
    answer: 3,
    explanation: "Malanjkhand Copper Project in Balaghat district is operated by Hindustan Copper Ltd and is India's largest open-cast copper mine. MOIL also works in Balaghat, but for manganese, not copper."
  },
  {
    id: 18,
    question: "The Bharweli and Ukwa mines of MOIL in Balaghat district are important sources of:",
    options: ["Iron ore", "Bauxite", "Copper ore", "Manganese ore"],
    answer: 3,
    explanation: "Balaghat is MP's chief manganese district, and MOIL's Bharweli mine is among the deepest underground manganese mines in Asia. Manganese is used mainly in steel-making. Copper in Balaghat comes from Malanjkhand."
  },
  {
    id: 19,
    question: "Northern Coalfields Ltd, the Coal India subsidiary that mines the Singrauli coalfield, has its headquarters at:",
    options: ["Singrauli", "Ranchi", "Nagpur", "Bilaspur"],
    answer: 0,
    explanation: "NCL is headquartered at Singrauli and works the Singrauli coalfield across MP and UP. Bilaspur is the headquarters of SECL, Ranchi of CCL, and Nagpur of WCL, which operates the Pench–Kanhan and Pathakhera fields of MP."
  },
  {
    id: 20,
    question: "The Pathakhera coalfield of Madhya Pradesh, which supplies the Satpura Thermal Power Station, is in which district?",
    options: ["Shahdol", "Umaria", "Betul", "Chhindwara"],
    answer: 2,
    explanation: "Pathakhera is in Betul district in the Satpura Gondwana basin, close to Sarni. Chhindwara has the Pench–Kanhan field, Shahdol the Sohagpur field and Umaria the Johilla field."
  },
  {
    id: 21,
    question: "Commercial production of coal-bed methane in Madhya Pradesh comes from which coalfield?",
    options: ["Sohagpur coalfield, Shahdol", "Pathakhera coalfield, Betul", "Johilla coalfield, Umaria", "Pench–Kanhan coalfield, Chhindwara"],
    answer: 0,
    explanation: "Reliance's coal-bed methane blocks in the Sohagpur coalfield of Shahdol district produce natural gas trapped in coal seams. The gas is supplied through a pipeline to consumers outside the region."
  },
  {
    id: 22,
    question: "Satna has become a major cement-producing centre of Madhya Pradesh mainly because of large deposits of:",
    options: ["Dolomite", "Limestone", "Bauxite", "Rock phosphate"],
    answer: 1,
    explanation: "Cement is made by burning limestone with clay, so plants cluster where Vindhyan limestone is abundant, as in Satna, Maihar, Katni, Rewa and Damoh. Satna is often called the 'cement city' of MP."
  },
  {
    id: 23,
    question: "Bauxite deposits of Madhya Pradesh are found mainly on:",
    options: ["The Chambal ravines of Bhind", "The Malwa plateau around Indore", "The Amarkantak plateau and in Katni district", "The Narmada alluvium of Narsinghpur"],
    answer: 2,
    explanation: "Bauxite, the ore of aluminium, forms in lateritic caps on high plateaus under heavy rainfall. In MP it occurs mainly on the Amarkantak plateau (Anuppur and Shahdol), in Katni and in parts of Mandla and Balaghat."
  },
  {
    id: 24,
    question: "Dolomite mined in Madhya Pradesh is used chiefly as:",
    options: ["A flux in iron and steel making", "Fuel for thermal power plants", "A source of aluminium metal", "A raw material for fertiliser nitrogen"],
    answer: 0,
    explanation: "Dolomite (calcium magnesium carbonate) is used as a flux to remove impurities in blast furnaces and as a refractory in the steel industry. It is also used in glass and fertiliser filler, but it is not a source of aluminium (bauxite) or fuel (coal)."
  },
  {
    id: 25,
    question: "Rock phosphate, a raw material for phosphatic fertilisers, is mined in Madhya Pradesh mainly in which district?",
    options: ["Jhabua", "Panna", "Balaghat", "Singrauli"],
    answer: 0,
    explanation: "Jhabua district has the main rock phosphate deposits of MP, with smaller deposits at Hirapur in Sagar district. Balaghat is known for manganese and copper, Singrauli for coal and Panna for diamonds."
  },
  {
    id: 26,
    question: "According to the 2011 Census, the population of Madhya Pradesh was about:",
    options: ["8.45 crore", "6.03 crore", "7.26 crore", "11.24 crore"],
    answer: 2,
    explanation: "MP's 2011 population was 7,26,26,809, about 6% of India's population. 6.03 crore was MP's population in 2001, and 11.24 crore is Maharashtra's 2011 population."
  },
  {
    id: 27,
    question: "What was the overall sex ratio of Madhya Pradesh in the 2011 Census?",
    options: ["912 females per 1,000 males", "931 females per 1,000 males", "948 females per 1,000 males", "925 females per 1,000 males"],
    answer: 1,
    explanation: "MP's sex ratio was 931 in 2011, below the national figure of 943. Within the state it ranged from 1,021 in Balaghat to 837 in Bhind."
  },
  {
    id: 28,
    question: "Which is the most populous Scheduled Tribe of Madhya Pradesh according to the 2011 Census?",
    options: ["Sahariya", "Bhil", "Baiga", "Gond"],
    answer: 1,
    explanation: "The Bhil (including Bhilala and related groups) is the largest tribe of MP, concentrated in Jhabua, Alirajpur, Dhar, Barwani and Khargone. The Gond, spread over the Satpura–Maikal districts, come second. Baiga and Sahariya are smaller groups notified as Particularly Vulnerable Tribal Groups."
  },
  {
    id: 29,
    question: "According to the final figures of the 2011 Census, the literacy rate of Madhya Pradesh was about:",
    options: ["69.3%", "78.7%", "74.0%", "63.7%"],
    answer: 0,
    explanation: "MP's final 2011 literacy rate was about 69.3% (the provisional figure was 70.6%), below the national level of about 73% (74% provisional). Male literacy was about 78.7% and female literacy about 59.2%, so 78.7% is the male figure, not the overall rate."
  },
  {
    id: 30,
    question: "What was the population density of Madhya Pradesh in the 2011 Census?",
    options: ["308 persons per sq km", "236 persons per sq km", "196 persons per sq km", "382 persons per sq km"],
    answer: 1,
    explanation: "MP's density was 236 persons per sq km, well below India's 382. Its large area and extensive forests and plateaus keep density low."
  },
  {
    id: 31,
    question: "What was the decadal population growth rate of Madhya Pradesh between 2001 and 2011?",
    options: ["About 17.7%", "About 24.3%", "About 20.3%", "About 15.9%"],
    answer: 2,
    explanation: "MP's population grew by about 20.3% in 2001–11, higher than India's 17.7%. Its growth rate was lower than in 1991–2001, when it was about 24%."
  },
  {
    id: 32,
    question: "Which district of Madhya Pradesh had the highest population density in the 2011 Census?",
    options: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    answer: 0,
    explanation: "Bhopal had the highest density in MP at about 855 persons per sq km, just ahead of Indore (about 841). Both are compact, highly urbanised districts."
  },
  {
    id: 33,
    question: "Which district of Madhya Pradesh had the lowest population density in the 2011 Census?",
    options: ["Sheopur", "Dindori", "Mandla", "Harda"],
    answer: 1,
    explanation: "Dindori, a hilly, forested tribal district in the Maikal range, had the lowest density in MP at about 94 persons per sq km. Sheopur and Mandla also have low densities, but higher than Dindori."
  },
  {
    id: 34,
    question: "Which district of Madhya Pradesh had the highest sex ratio in the 2011 Census?",
    options: ["Alirajpur", "Mandla", "Indore", "Balaghat"],
    answer: 3,
    explanation: "Balaghat had the highest sex ratio in MP at 1,021 females per 1,000 males. Tribal districts such as Alirajpur, Mandla and Dindori also have high sex ratios, while the Chambal districts have the lowest."
  },
  {
    id: 35,
    question: "Which district of Madhya Pradesh had the lowest overall sex ratio in the 2011 Census?",
    options: ["Jhabua", "Dindori", "Balaghat", "Bhind"],
    answer: 3,
    explanation: "Bhind recorded the lowest sex ratio in MP (837), with Morena close behind. The north-western Chambal region has persistently low sex ratios, while tribal districts like Balaghat, Jhabua and Dindori are among the highest."
  },
  {
    id: 36,
    question: "Which district of Madhya Pradesh had the highest literacy rate in the 2011 Census?",
    options: ["Alirajpur", "Jhabua", "Jabalpur", "Barwani"],
    answer: 2,
    explanation: "Jabalpur had the highest literacy in MP (about 81%), closely followed by Indore and Bhopal. Alirajpur, Jhabua and Barwani, in the tribal south-west, had the lowest literacy rates."
  },
  {
    id: 37,
    question: "Which district of Madhya Pradesh had the lowest literacy rate in the 2011 Census, and also the lowest in India?",
    options: ["Singrauli", "Sheopur", "Jhabua", "Alirajpur"],
    answer: 3,
    explanation: "Alirajpur recorded a literacy rate of only about 36%, the lowest of any district in India in 2011. Neighbouring Jhabua was second lowest in MP. Both are Bhil-majority tribal districts."
  },
  {
    id: 38,
    question: "Which was the most populous district of Madhya Pradesh in the 2011 Census?",
    options: ["Indore", "Jabalpur", "Bhopal", "Sagar"],
    answer: 0,
    explanation: "Indore was the most populous district with about 32.8 lakh people, followed by Jabalpur. Indore city is the commercial capital and largest city of MP."
  },
  {
    id: 39,
    question: "Which state had the largest Scheduled Tribe population in India in the 2011 Census?",
    options: ["Madhya Pradesh", "Rajasthan", "Odisha", "Maharashtra"],
    answer: 0,
    explanation: "MP had about 1.53 crore Scheduled Tribe people, the most of any state, forming about 21% of its population. The Bhil is the largest tribe, followed by the Gond."
  },
  {
    id: 40,
    question: "What share of Madhya Pradesh's population was urban in the 2011 Census?",
    options: ["About 45.2%", "About 27.6%", "About 31.1%", "About 17.8%"],
    answer: 1,
    explanation: "About 27.6% of MP's people lived in urban areas in 2011, below the national level of about 31.1%. Indore, Bhopal, Jabalpur and Gwalior are the main urban centres."
  },
  {
    id: 41,
    question: "The North–South Corridor of the National Highways (Srinagar to Kanyakumari) passes through which set of Madhya Pradesh cities?",
    options: ["Gwalior, Sagar and Seoni", "Bhopal, Vidisha and Raisen", "Rewa, Satna and Katni", "Indore, Dewas and Ujjain"],
    answer: 0,
    explanation: "The North–South Corridor follows NH 44 through Morena and Gwalior, then via Jhansi and Lalitpur in UP back into MP at Sagar, and on through Narsinghpur, Lakhnadon and Seoni towards Nagpur. Indore–Dewas lies on the Agra–Mumbai road instead."
  },
  {
    id: 42,
    question: "The Delhi–Mumbai Expressway passes through which districts of Madhya Pradesh?",
    options: ["Bhopal, Sehore and Dewas", "Mandsaur, Ratlam and Jhabua", "Gwalior, Shivpuri and Guna", "Indore, Dhar and Barwani"],
    answer: 1,
    explanation: "The Delhi–Mumbai Expressway runs for about 245 km through MP's western districts of Mandsaur, Ratlam and Jhabua, between Rajasthan and Gujarat. It is expected to boost industry and logistics in western Malwa."
  },
  {
    id: 43,
    question: "The West Central Railway zone, formed in 2003, has its headquarters at:",
    options: ["Bhopal", "Kota", "Itarsi", "Jabalpur"],
    answer: 3,
    explanation: "West Central Railway is headquartered at Jabalpur and has three divisions: Jabalpur, Bhopal and Kota. Itarsi is a major junction within it, but not the zonal headquarters."
  },
  {
    id: 44,
    question: "Habibganj station in Bhopal, renamed Rani Kamlapati in 2021, is notable as:",
    options: ["The headquarters of the West Central Railway", "India's first railway station redeveloped on the public–private partnership model", "The oldest railway station in Madhya Pradesh", "India's first fully underground railway station"],
    answer: 1,
    explanation: "Rani Kamlapati station was rebuilt as a world-class station under a PPP model and inaugurated in November 2021. It is named after the Gond queen Kamlapati of Bhopal. The West Central Railway headquarters is at Jabalpur."
  },
  {
    id: 45,
    question: "The airport at Indore is named after:",
    options: ["Devi Ahilyabai Holkar", "Raja Bhoj", "Rani Durgavati", "Rajmata Vijaya Raje Scindia"],
    answer: 0,
    explanation: "Indore's airport is Devi Ahilyabai Holkar Airport, named after the 18th-century Holkar queen, and is the busiest airport in MP. Bhopal's airport is named after Raja Bhoj and Gwalior's after Rajmata Vijaya Raje Scindia."
  },
  {
    id: 46,
    question: "Raja Bhoj Airport serves which city of Madhya Pradesh?",
    options: ["Ujjain", "Gwalior", "Jabalpur", "Bhopal"],
    answer: 3,
    explanation: "Raja Bhoj Airport at Bhopal is named after the Paramara king credited with founding the city and its Upper Lake. Jabalpur's airport is at Dumna, and Gwalior's is named after Rajmata Vijaya Raje Scindia."
  },
  {
    id: 47,
    question: "The Avantee Mega Food Park, set up under the central Mega Food Park scheme, is located in which district of Madhya Pradesh?",
    options: ["Rewa", "Dewas", "Gwalior", "Bhopal"],
    answer: 1,
    explanation: "The Avantee Mega Food Park is in Dewas district on the Malwa plateau, close to the farm produce of Malwa and the market of Indore. Mega food parks provide shared cold storage, processing and logistics for food processing units."
  },
  {
    id: 48,
    question: "The Spices Board of India has set up spice parks in Madhya Pradesh at:",
    options: ["Chhindwara and Guna", "Mandsaur and Neemuch", "Rewa and Satna", "Indore and Ujjain"],
    answer: 0,
    explanation: "The Spices Board's spice parks at Chhindwara and Guna provide cleaning, grading and processing facilities for spices such as chilli, coriander and garlic. MP is a major producer of coriander, garlic and chilli."
  },
  {
    id: 49,
    question: "Soybean processing (solvent extraction of oil and production of soya meal) in Madhya Pradesh is concentrated mainly around:",
    options: ["Bhind, Morena and Datia in the north", "Indore, Ujjain and Dewas in the Malwa region", "Balaghat, Mandla and Seoni in the east", "Rewa, Sidhi and Singrauli in Baghelkhand"],
    answer: 1,
    explanation: "Solvent extraction plants are located close to the Malwa soybean belt to cut transport costs of the bulky raw beans. Indore is the hub, home to SOPA (Soybean Processors Association of India), and soya meal is exported widely as animal feed."
  },
  {
    id: 50,
    question: "'Sanchi' is the brand name of milk and dairy products of:",
    options: ["The MP State Agro Industries Development Corporation", "The National Dairy Development Board's Mother Dairy", "The MP State Co-operative Dairy Federation", "The MP State Minor Forest Produce Federation"],
    answer: 2,
    explanation: "Sanchi is the brand of the MP State Co-operative Dairy Federation (MPCDF), which procures milk through village co-operatives and processes it in dairy plants at Bhopal, Indore, Jabalpur, Gwalior and other cities. It follows the Anand (Amul) pattern of dairy co-operatives."
  }
];

export default questions;

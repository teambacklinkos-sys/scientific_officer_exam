const questions = [
  {
    id: 1,
    question: "An inscription of 510 CE at Eran in Sagar district, recording the death of Goparaja in battle, is regarded as the earliest inscriptional evidence in India of which practice?",
    options: ["Sati", "Devadasi dedication", "Land grants to Brahmins", "Jauhar"],
    answer: 0,
    explanation: "The Eran pillar inscription of the time of Bhanugupta (510 CE) records that Goparaja's wife followed him onto the funeral pyre, the earliest epigraphic evidence of sati. Eran, on the Bina river, is also known for a Gupta-period Varaha image and a Vishnu temple. Earlier inscriptions record land grants, so that practice is far older."
  },
  {
    id: 2,
    question: "Before it merged into Madhya Pradesh in 1956, Madhya Bharat had two capitals, one used in winter and one in summer. They were",
    options: ["Bhopal and Indore", "Gwalior and Indore", "Rewa and Gwalior", "Jabalpur and Nagpur"],
    answer: 1,
    explanation: "Madhya Bharat (1948–56), formed from the Gwalior, Indore and other Malwa states, had Gwalior as its winter capital and Indore as its summer capital. Vindhya Pradesh had its capital at Rewa, and Bhopal was a separate Part C state. Nagpur was the capital of the old Madhya Pradesh (Central Provinces and Berar)."
  },
  {
    id: 3,
    question: "Tantia Tope, a leader of the Revolt of 1857, was executed on 18 April 1859 at",
    options: ["Shivpuri", "Jhansi", "Gwalior", "Sagar"],
    answer: 0,
    explanation: "Tantia Tope was betrayed by Man Singh of Narwar, tried by a military court and hanged at Shivpuri (then Sipri) on 18 April 1859. Rani Lakshmibai had died fighting near Gwalior in June 1858. A memorial to Tantia Tope stands at Shivpuri."
  },
  {
    id: 4,
    question: "During the Revolt of 1857, the Gond ruler Raja Shankar Shah and his son Kunwar Raghunath Shah were executed by being blown from cannons at",
    options: ["Mandla", "Jabalpur", "Sagar", "Seoni"],
    answer: 1,
    explanation: "Shankar Shah, a descendant of the Garha-Mandla Gond kings, and his son Raghunath Shah were arrested for planning a revolt and for writing anti-British poems. They were blown from cannons at Jabalpur on 18 September 1857. Their martyrdom is commemorated in Jabalpur every year."
  },
  {
    id: 5,
    question: "During the Civil Disobedience Movement of 1930, the Jungle Satyagraha in Betul district, in which tribals broke forest laws, was led by",
    options: ["Tantya Bhil", "Ganjan Singh Korku", "Bhima Nayak", "Khajya Nayak"],
    answer: 1,
    explanation: "Ganjan Singh Korku led tribals of Betul in the 1930 Jungle Satyagraha, defying forest laws by cutting grass and wood in reserved forests. It was one of several forest satyagrahas held across the Central Provinces that year. Tantya Bhil, Bhima Nayak and Khajya Nayak were earlier tribal rebels of the Nimar region."
  },
  {
    id: 6,
    question: "Which monument at Mandu is regarded as the earliest marble edifice of Afghan architecture in India?",
    options: ["Jahaz Mahal", "Hindola Mahal", "Rani Roopmati's Pavilion", "Hoshang Shah's Tomb"],
    answer: 3,
    explanation: "The tomb of Hoshang Shah Ghori, the second ruler of the Malwa Sultanate, is built of white marble and is regarded as India's first marble structure. Shah Jahan's architects are said to have studied it before building the Taj Mahal. Jahaz Mahal and Hindola Mahal are sandstone palace buildings."
  },
  {
    id: 7,
    question: "The Kalachuris (Chedis) of Dahala, who ruled much of central India between the 10th and 12th centuries, had their capital at Tripuri, near which present-day city?",
    options: ["Rewa", "Sagar", "Katni", "Jabalpur"],
    answer: 3,
    explanation: "Tripuri (modern Tewar) lies about 10 km west of Jabalpur. Kalachuri rulers such as Gangeyadeva and Lakshmikarna were among the most powerful kings of their time. The same place later hosted the 1939 Tripuri session of the Congress."
  },
  {
    id: 8,
    question: "Raja Bhoj, credited with the Bhojpur Shiva temple and the Bhojshala at Dhar, belonged to which dynasty?",
    options: ["Chandela", "Kalachuri", "Paramara", "Gurjara-Pratihara"],
    answer: 2,
    explanation: "Bhoja (c. 1010–1055 CE) was the most famous Paramara ruler of Malwa, with his capital at Dhar. He was a patron of learning and is credited with works such as Samarangana Sutradhara. The Chandelas built Khajuraho and the Kalachuris ruled from Tripuri."
  },
  {
    id: 9,
    question: "Madhya Pradesh was formed on 1 November 1956 and Chhattisgarh was carved out of it on 1 November 2000. For how many years did undivided Madhya Pradesh exist?",
    options: ["42 years", "44 years", "46 years", "48 years"],
    answer: 1,
    explanation: "From 1 November 1956 to 1 November 2000 is exactly 44 years. Chhattisgarh was created under the Madhya Pradesh Reorganisation Act, 2000. Both MP and Chhattisgarh celebrate their foundation day on 1 November."
  },
  {
    id: 10,
    question: "Chandrashekhar Azad was born at Bhabhra, a village now named Chandrashekhar Azad Nagar, in which district of Madhya Pradesh?",
    options: ["Jhabua", "Barwani", "Dhar", "Alirajpur"],
    answer: 3,
    explanation: "Azad was born on 23 July 1906 at Bhabhra, now in Alirajpur district (carved out of Jhabua in 2008). He led the Hindustan Socialist Republican Association and died at Alfred Park, Allahabad, in 1931. Because Alirajpur was part of Jhabua earlier, older books may name Jhabua."
  },
  {
    id: 11,
    question: "Census 2011 recorded Madhya Pradesh's population as about 7.26 crore on an area of about 3.08 lakh km². What is the approximate population density?",
    options: ["196 persons/km²", "236 persons/km²", "276 persons/km²", "316 persons/km²"],
    answer: 1,
    explanation: "Density = 7,26,26,809 ÷ 3,08,252 ≈ 236 persons per km², well below the national average of 382. MP is the second largest state by area after Rajasthan. Its high forest and plateau cover keeps density low."
  },
  {
    id: 12,
    question: "Census 2011 counted about 3.76 crore males and 3.50 crore females in Madhya Pradesh. The sex ratio (females per 1,000 males) is closest to",
    options: ["948", "918", "940", "931"],
    answer: 3,
    explanation: "Sex ratio = (3.50 ÷ 3.76) × 1,000 ≈ 931, which is MP's official Census 2011 figure. The national sex ratio was 943. The figure 918 is MP's child (0–6 years) sex ratio, a common distractor."
  },
  {
    id: 13,
    question: "Madhya Pradesh's population was about 6.03 crore in 2001 and 7.26 crore in 2011. The decadal growth rate was about",
    options: ["16.4%", "18.2%", "20.3%", "24.3%"],
    answer: 2,
    explanation: "Growth = (7.26 − 6.03) ÷ 6.03 × 100 ≈ 20.4% with these rounded figures; the official figure from exact counts is 20.35%, so 20.3% is the closest option. This was higher than the national decadal growth of 17.7%. The growth rate is calculated on the earlier (base) population, not the later one."
  },
  {
    id: 14,
    question: "Census 2011 recorded about 2.0 crore urban residents in Madhya Pradesh out of a total population of about 7.26 crore. The level of urbanisation was about",
    options: ["21.6%", "27.6%", "31.2%", "37.7%"],
    answer: 1,
    explanation: "Urbanisation = 2.0 ÷ 7.26 × 100 ≈ 27.6%, MP's official Census 2011 figure. This is below the national level of 31.2%. Indore, Bhopal, Jabalpur and Gwalior are the largest urban centres."
  },
  {
    id: 15,
    question: "The Narmada is about 1,312 km long, of which about 1,077 km lies in Madhya Pradesh. Roughly what share of the river's length lies in MP?",
    options: ["62%", "72%", "82%", "92%"],
    answer: 2,
    explanation: "1,077 ÷ 1,312 × 100 ≈ 82%. The rest forms the MP–Maharashtra and Maharashtra–Gujarat boundaries and flows through Gujarat to the Gulf of Khambhat. The Narmada is called the lifeline of MP, and major projects on it include Indira Sagar and Omkareshwar."
  },
  {
    id: 16,
    question: "Dhupgarh, the highest point of Madhya Pradesh at about 1,350 m, lies in which hill range?",
    options: ["Mahadeo hills of the Satpura range", "Maikal range near Amarkantak", "Vindhyan scarp near Rewa", "Malwa plateau near Mhow"],
    answer: 0,
    explanation: "Dhupgarh is in the Mahadeo hills of the Satpura range near Pachmarhi in Narmadapuram district. Pachmarhi is a hill station and part of the Pachmarhi Biosphere Reserve. Amarkantak in the Maikal range is the source of the Narmada and Son."
  },
  {
    id: 17,
    question: "Which river rises at Multai in Betul district and flows west through Maharashtra and Gujarat into the Gulf of Khambhat?",
    options: ["Mahi", "Betwa", "Wainganga", "Tapti"],
    answer: 3,
    explanation: "The Tapti (Tapi) rises at Multai on the Satpura plateau and flows west through a rift valley parallel to the Narmada, reaching the sea near Surat. The Mahi rises in Dhar district and also enters the Gulf of Khambhat. The Wainganga flows south into the Godavari system, and the Betwa flows north to the Yamuna."
  },
  {
    id: 18,
    question: "Madhya Pradesh has the largest forest cover of any Indian state. As per the India State of Forest Report 2021, its forest cover is roughly what share of its geographical area?",
    options: ["About 15%", "About 25%", "About 35%", "About 45%"],
    answer: 1,
    explanation: "ISFR 2021 reported about 77,493 km² of forest cover in MP, roughly 25% of its 3.08 lakh km² area. MP leads in absolute forest area, followed by Arunachal Pradesh and Chhattisgarh. In percentage terms, the north-eastern states such as Mizoram lead."
  },
  {
    id: 19,
    question: "The Chambal river rises in the Janapav hills near which town of Madhya Pradesh?",
    options: ["Mhow", "Multai", "Amarkantak", "Pachmarhi"],
    answer: 0,
    explanation: "The Chambal rises at Janapav near Mhow (Dr. Ambedkar Nagar) in Indore district, traditionally the birthplace of Parashurama. It flows north through Gandhi Sagar and joins the Yamuna. The Tapti rises at Multai in Betul."
  },
  {
    id: 20,
    question: "Which protected area was notified as Madhya Pradesh's ninth tiger reserve in March 2025?",
    options: ["Madhav (Shivpuri)", "Ratapani (Raisen)", "Veerangana Durgavati (Sagar–Damoh)", "Kuno (Sheopur)"],
    answer: 0,
    explanation: "Madhav National Park in Shivpuri was notified as MP's ninth and India's 58th tiger reserve in March 2025. Ratapani became the eighth in December 2024. Veerangana Durgavati was the seventh, and Kuno is a national park known for the cheetah project."
  },
  {
    id: 21,
    question: "The Madhya Pradesh Legislative Assembly has 230 seats. What is the minimum number of seats a party needs to form a government on its own with a simple majority?",
    options: ["114", "115", "116", "121"],
    answer: 2,
    explanation: "A simple majority is more than half the total strength: half of 230 is 115, so 116 seats are needed. The Speaker votes only to break a tie. Before 2000, undivided MP had 320 seats, so the majority mark was 161."
  },
  {
    id: 22,
    question: "Panchayat elections in Madhya Pradesh are conducted by the State Election Commission, which is constituted under which Article of the Constitution?",
    options: ["Article 243I", "Article 243K", "Article 243ZA", "Article 324"],
    answer: 1,
    explanation: "Article 243K provides for a State Election Commission to conduct panchayat elections, and Article 243ZA gives the same body charge of municipal elections. Article 243I provides for the State Finance Commission. Article 324 concerns the Election Commission of India, which conducts Lok Sabha and Assembly elections."
  },
  {
    id: 23,
    question: "Madhya Pradesh was the first state to pass a law guaranteeing time-bound delivery of public services, the Lok Sewaon ke Pradan ki Guarantee Adhiniyam. In which year was it enacted?",
    options: ["2005", "2008", "2010", "2013"],
    answer: 2,
    explanation: "The MP Public Services Delivery Guarantee Act came into force on 25 September 2010, making MP the first state with such a law. Officials who miss the time limit can be fined. Bihar and other states later passed similar Right to Service Acts."
  },
  {
    id: 24,
    question: "Which statement about the legislature of Madhya Pradesh is correct?",
    options: ["It is unicameral; the Legislative Council provided for under Article 168 has never been constituted", "It is bicameral, with a Legislative Council elected partly by local bodies", "Its Legislative Council was abolished by Parliament in 1969", "It has 320 seats in the Vidhan Sabha"],
    answer: 0,
    explanation: "Article 168 includes Madhya Pradesh among the states with a Vidhan Parishad, but the Council was never brought into existence, so the legislature works as a unicameral Vidhan Sabha of 230 members. Undivided MP had 320 seats before Chhattisgarh was formed in 2000. A Council can be created or abolished under Article 169 by a resolution of the Assembly followed by an Act of Parliament."
  },
  {
    id: 25,
    question: "In Madhya Pradesh, an area in transition from rural to urban is governed by which type of urban local body under the 74th Amendment?",
    options: ["Nagar Nigam", "Nagar Palika Parishad", "Nagar Parishad", "Janpad Panchayat"],
    answer: 2,
    explanation: "MP calls the Nagar Panchayat of Article 243Q a Nagar Parishad, used for transitional areas. Nagar Palika Parishads govern smaller urban areas and Nagar Nigams (municipal corporations) govern large cities such as Indore and Bhopal. A Janpad Panchayat is a rural, block-level body."
  },
  {
    id: 26,
    question: "According to the Madhya Pradesh Budget 2026–27 presented in February 2026, the state's GSDP for 2026–27 was estimated at about",
    options: ["₹12.5 lakh crore", "₹15.0 lakh crore", "₹22.0 lakh crore", "₹18.5 lakh crore"],
    answer: 3,
    explanation: "The 2026–27 budget (February 2026) estimated MP's GSDP at about ₹18,48,274 crore, roughly ₹18.5 lakh crore. GSDP is the base used for fiscal ratios such as the fiscal deficit limit under the FRBM Act. The figure is at current prices."
  },
  {
    id: 27,
    question: "A state has a fiscal deficit of ₹55,000 crore and a GSDP of ₹18,30,000 crore. What is its fiscal deficit as a percentage of GSDP?",
    options: ["2.0%", "2.5%", "3.0%", "3.5%"],
    answer: 2,
    explanation: "Fiscal deficit ratio = 55,000 ÷ 18,30,000 × 100 ≈ 3.0%. Under the MP Fiscal Responsibility and Budget Management Act, the normal ceiling is 3% of GSDP, with extra borrowing allowed for power-sector reforms or capital spending. The ratio, not the absolute amount, is what is compared across years."
  },
  {
    id: 28,
    question: "Madhya Pradesh is often called the 'Soya State' of India because it has traditionally been the country's leading producer of",
    options: ["soybean", "groundnut", "mustard", "cotton"],
    answer: 0,
    explanation: "MP has long produced the largest share of India's soybean, grown mainly as a kharif crop on the black soils of Malwa, though Maharashtra out-produced it in 2024–25. Indore hosts the ICAR-Indian Institute of Soybean Research and the Soybean Processors Association (SOPA). Gujarat leads in groundnut and Rajasthan in mustard."
  },
  {
    id: 29,
    question: "Census 2011 recorded MP's male literacy at 78.73% and female literacy at 59.24%. What was the gender gap in literacy?",
    options: ["14.2 percentage points", "17.6 percentage points", "22.1 percentage points", "19.5 percentage points"],
    answer: 3,
    explanation: "Gap = 78.73 − 59.24 = 19.49, about 19.5 percentage points. MP's overall literacy was 69.32% against the national 73.0%. Jabalpur had the highest district literacy and Alirajpur the lowest in India."
  },
  {
    id: 30,
    question: "The Madhya Pradesh Lokayukt evam Up-Lokayukt Adhiniyam, under which the state's anti-corruption ombudsman functions, was enacted in",
    options: ["1975", "1981", "1986", "1991"],
    answer: 1,
    explanation: "The MP Lokayukt and Up-Lokayukt Act was passed in 1981, and the Lokayukt has a Special Police Establishment to investigate corruption. Maharashtra was the first state with a Lokayukta (1971). The national Lokpal came only with the Lokpal and Lokayuktas Act, 2013."
  },
  {
    id: 31,
    question: "According to Census 2011, Scheduled Tribes form about what share of Madhya Pradesh's population?",
    options: ["15.6%", "18.4%", "21.1%", "25.5%"],
    answer: 2,
    explanation: "MP's ST population was about 1.53 crore, or 21.1% of the state, the largest ST population of any state in absolute numbers. SCs form about 15.6%, a common distractor. Alirajpur and Jhabua have the highest ST shares among districts."
  },
  {
    id: 32,
    question: "Patalkot, a deep horseshoe-shaped valley known as the home of the Bharia tribe and its herbal medicine traditions, lies in which district?",
    options: ["Betul", "Mandla", "Seoni", "Chhindwara"],
    answer: 3,
    explanation: "Patalkot is in the Tamia block of Chhindwara district, more than 1,000 feet deep in the Satpura hills. Its Bharia villages are among the most isolated in MP, and the Bharia are a PVTG. The valley is known for traditional knowledge of medicinal plants."
  },
  {
    id: 33,
    question: "The Sahariya, one of the Particularly Vulnerable Tribal Groups of Madhya Pradesh, live mainly in which districts?",
    options: ["Mandla and Dindori", "Jhabua and Alirajpur", "Betul and Harda", "Sheopur, Shivpuri and Guna"],
    answer: 3,
    explanation: "The Sahariya are concentrated in the Gwalior–Chambal region, especially Sheopur, Shivpuri, Guna, Gwalior and Datia. Many Sahariya families suffer from malnutrition and tuberculosis, which special nutrition schemes target. Mandla–Dindori is Baiga and Gond country, and Jhabua–Alirajpur is Bhil country."
  },
  {
    id: 34,
    question: "Bhagoria, the festive haat held in the week before Holi, is associated mainly with the Bhil and Bhilala tribes of which districts?",
    options: ["Jhabua and Alirajpur", "Mandla and Dindori", "Sidhi and Singrauli", "Betul and Chhindwara"],
    answer: 0,
    explanation: "Bhagoria haats are held in Jhabua, Alirajpur, Dhar, Barwani and Khargone, with music, dance and courtship traditions. They mark the end of the harvest season before Holi. Mandla and Dindori are Gond and Baiga areas."
  },
  {
    id: 35,
    question: "Jangarh Singh Shyam, whose work founded the 'Jangarh Kalam' style, brought which tribal art form of Patangarh (Dindori) to national and international recognition?",
    options: ["Pithora painting", "Warli painting", "Mandana painting", "Gond painting"],
    answer: 3,
    explanation: "Jangarh Singh Shyam, a Pardhan Gond artist from Patangarh, was encouraged by J. Swaminathan at Bharat Bhavan, Bhopal. His style spread Gond painting worldwide. Pithora belongs to the Bhils and Rathwas, Mandana is a Malwa floor art, and Warli is from Maharashtra."
  },
  {
    id: 36,
    question: "Bhuri Bai, awarded the Padma Shri in 2021 and known for her paintings at Bharat Bhavan and the Tribal Museum in Bhopal, belongs to which tribe?",
    options: ["Bhil", "Gond", "Baiga", "Sahariya"],
    answer: 0,
    explanation: "Bhuri Bai, from Pitol village in Jhabua, was the first Bhil woman to paint on paper and canvas. She began as a labourer at Bharat Bhavan, where J. Swaminathan noticed her work. Her paintings use dots and bright colours typical of Bhil art."
  },
  {
    id: 37,
    question: "Which folk dance of Malwa is performed by women who dance at festive occasions while balancing earthen pots on their heads?",
    options: ["Rai", "Karma", "Saila", "Matki"],
    answer: 3,
    explanation: "Matki dance is named after the earthen pot (matki) and is performed by Malwa women at weddings and festivals, often with a veil. Rai is a Bundelkhand dance, and Karma and Saila are Gond dances. The Ada-Khada and Rajwadi forms are related Malwa dances."
  },
  {
    id: 38,
    question: "Lokrang, the annual folk and tribal arts festival organised in Bhopal by the state's Adivasi Lok Kala Academy, begins on which date?",
    options: ["2 October", "15 August", "26 January", "1 November"],
    answer: 2,
    explanation: "Lokrang opens on Republic Day, 26 January, and runs for about five days in Bhopal, presenting folk and tribal dance, music and crafts. 1 November is MP's Foundation Day. The festival has been held since the mid-1980s."
  },
  {
    id: 39,
    question: "Maach, a form of folk theatre with songs and dialogue performed on a raised stage, belongs to which region of Madhya Pradesh?",
    options: ["Nimar", "Malwa", "Bundelkhand", "Gondwana"],
    answer: 1,
    explanation: "Maach is the folk opera of Malwa, centred on Ujjain, and is believed to be about 200 years old. Gopalji Guru and Balmukund Guru were noted exponents. Swang is the folk theatre of Bundelkhand."
  },
  {
    id: 40,
    question: "The Madhya Pradesh Tribal Museum (Janjatiya Sangrahalaya) in Bhopal, known for its installations made by tribal artists, was opened in which year?",
    options: ["2005", "2009", "2013", "2017"],
    answer: 2,
    explanation: "The Tribal Museum in Shyamla Hills, Bhopal opened in June 2013. Its galleries were built by artists of the Gond, Bhil, Baiga, Korku, Sahariya, Kol and Bharia tribes. It stands close to the Indira Gandhi Rashtriya Manav Sangrahalaya."
  },
  {
    id: 41,
    question: "For the 2026–27 rabi marketing season, the Centre's MSP for wheat was ₹2,585 per quintal, and Madhya Pradesh procured wheat from April 2026 at an effective ₹2,625 per quintal. What state bonus per quintal does this represent?",
    options: ["₹25", "₹40", "₹125", "₹175"],
    answer: 1,
    explanation: "₹2,625 − ₹2,585 = ₹40 per quintal, the bonus the MP Cabinet approved on top of MSP. Procurement began on 9 April 2026 in the Indore, Ujjain, Bhopal and Narmadapuram divisions and later extended to the rest of the state. The state has promised to raise the procurement price towards ₹2,700 per quintal."
  },
  {
    id: 42,
    question: "Under the VB-G RAM G Act, which replaced MGNREGA from 1 July 2026, in what ratio do the Centre and a state such as Madhya Pradesh share the scheme's cost?",
    options: ["100:0", "75:25", "60:40", "50:50"],
    answer: 2,
    explanation: "For most states, including MP, the Centre and the state share expenditure in a 60:40 ratio; north-eastern and Himalayan states get a more favourable share. Under MGNREGA the Centre had paid the full cost of unskilled wages. In September 2026 the MP Cabinet approved about ₹29,619 crore for implementing the scheme."
  },
  {
    id: 43,
    question: "Under the gazette notification for Census 2027, what is the reference date for population enumeration in most of India, including Madhya Pradesh?",
    options: ["00:00 hours on 1 March 2027", "00:00 hours on 1 October 2026", "00:00 hours on 1 April 2026", "00:00 hours on 1 January 2027"],
    answer: 0,
    explanation: "The June 2025 notification fixed 00:00 hours on 1 March 2027 as the reference date for most of the country. Ladakh and snow-bound areas of Jammu and Kashmir, Himachal Pradesh and Uttarakhand use 1 October 2026. The House Listing phase began on 1 April 2026, which is a tempting distractor."
  },
  {
    id: 44,
    question: "Secure websites using HTTPS listen by default on which TCP port?",
    options: ["21", "80", "443", "8080"],
    answer: 2,
    explanation: "HTTPS (HTTP over TLS) uses port 443 by default, while plain HTTP uses port 80. Port 21 is used by FTP, and 8080 is a common alternative HTTP port. TLS encrypts data between browser and server, which protects e-governance logins and payments."
  },
  {
    id: 45,
    question: "In August 2026 the Madhya Pradesh Cabinet extended the Mukhyamantri Ladli Behna Yojana and Ladli Lakshmi Yojana for five more years, up to",
    options: ["2027–28", "2028–29", "2029–30", "2030–31"],
    answer: 3,
    explanation: "The Cabinet approved continuing both schemes from 2026–27 to 2030–31, with about ₹1,14,365 crore sanctioned for Ladli Behna alone (August 2026). Ladli Behna gives eligible women a monthly direct benefit transfer of ₹1,500. Ladli Lakshmi supports girls through education-linked payments."
  },
  {
    id: 46,
    question: "What is the decimal value of the binary number 1101?",
    options: ["11", "12", "13", "14"],
    answer: 2,
    explanation: "1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13. Each binary place value is a power of 2, counting from 2⁰ on the right. Computers store all data in this base-2 form."
  },
  {
    id: 47,
    question: "Taking 1 MB = 1,024 KB, a 3 MB image file occupies how many kilobytes?",
    options: ["3,000 KB", "3,072 KB", "3,096 KB", "3,200 KB"],
    answer: 1,
    explanation: "3 × 1,024 = 3,072 KB. In the binary convention 1 KB = 1,024 bytes, 1 MB = 1,024 KB and 1 GB = 1,024 MB. The value 3,000 KB uses the decimal (SI) convention, which storage makers sometimes use."
  },
  {
    id: 48,
    question: "Under Section 70B of the Information Technology Act, 2000, which body is the national nodal agency for responding to computer security incidents in India?",
    options: ["CERT-In", "NIC", "NCIIPC", "UIDAI"],
    answer: 0,
    explanation: "CERT-In (Indian Computer Emergency Response Team) under MeitY is designated by Section 70B to handle cyber incidents, issue advisories and collect incident reports. NCIIPC under Section 70A protects critical information infrastructure. NIC provides e-governance IT services, and UIDAI runs Aadhaar."
  },
  {
    id: 49,
    question: "The transformer architecture, on which today's large language models are built, was introduced in which 2017 research paper?",
    options: ["Attention Is All You Need", "Generative Adversarial Nets", "Deep Residual Learning for Image Recognition", "ImageNet Classification with Deep Convolutional Neural Networks"],
    answer: 0,
    explanation: "Vaswani and colleagues at Google introduced the transformer in 'Attention Is All You Need' (2017). Its self-attention mechanism replaced recurrence and made large-scale parallel training possible. GANs (2014) are the basis of many deepfake generators, while ResNet and AlexNet are image-recognition networks."
  },
  {
    id: 50,
    question: "An AI model that flags suspicious bank transactions produces 80 true positives, 20 false positives and 10 false negatives on a test set. What is its precision?",
    options: ["0.20", "0.75", "0.80", "0.89"],
    answer: 2,
    explanation: "Precision = TP ÷ (TP + FP) = 80 ÷ 100 = 0.80, the share of flagged cases that were truly suspicious. Recall = TP ÷ (TP + FN) = 80 ÷ 90 ≈ 0.89, which is the tempting distractor. Precision and recall together describe a classifier better than accuracy alone."
  },
  {
    id: 51,
    question: "Red acrylic fibres from a suspect's sweater are found on a victim's blouse, and white cotton fibres from the blouse are found on the suspect's sweater. This two-way transfer best illustrates",
    options: ["the principle of individuality", "the law of progressive change", "Locard's exchange principle", "the principle of comparison"],
    answer: 2,
    explanation: "Edmond Locard's principle states that every contact leaves a trace: when two objects meet, material passes in both directions. Finding fibres from each garment on the other links the two people. The principle of individuality, by contrast, says that no two objects are exactly alike."
  },
  {
    id: 52,
    question: "A blowfly species needs 150 accumulated degree-days (ADD) above a base temperature of 10 °C to reach the third larval instar. If the mean daily temperature at a scene has been 25 °C, how long ago were the eggs laid?",
    options: ["6 days", "25 days", "15 days", "10 days"],
    answer: 3,
    explanation: "Each day contributes 25 − 10 = 15 degree-days, so 150 ÷ 15 = 10 days. This gives the minimum post-mortem interval, because eggs are laid only after death. Dividing by 25 without subtracting the base temperature (giving 6 days) is the common error."
  },
  {
    id: 53,
    question: "Which post-mortem chemical change in the eye is most widely used to estimate the time since death?",
    options: ["A steady fall in vitreous potassium", "A steady rise in vitreous potassium", "A steady rise in vitreous glucose", "A steady rise in vitreous sodium"],
    answer: 1,
    explanation: "After death, potassium leaks from retinal and other cells into the vitreous humour, and its concentration rises roughly linearly for several days. Formulas such as Sturner's convert the level to an estimated PMI. Vitreous glucose falls after death, and sodium stays fairly stable."
  },
  {
    id: 54,
    question: "A regression equation for a population gives stature (cm) = 2.38 × femur length (cm) + 61.41. A femur recovered from remains measures 45 cm. The estimated stature is about",
    options: ["158.6 cm", "163.2 cm", "168.5 cm", "172.9 cm"],
    answer: 2,
    explanation: "2.38 × 45 = 107.1; 107.1 + 61.41 = 168.5 cm. Equations of this kind (Trotter and Gleser) are specific to sex and population, so Indian casework should use equations derived from Indian samples. Long bones of the lower limb give the most accurate stature estimates."
  },
  {
    id: 55,
    question: "A hair examined under the microscope shows a coronal (crown-like) cuticular scale pattern. Such hair most likely comes from",
    options: ["a human", "a rodent or bat", "a horse", "cattle"],
    answer: 1,
    explanation: "Coronal scales, stacked like crowns around a fine shaft, are typical of small rodents and bats. Human hair has flattened imbricate scales, and many large mammals such as horses and cattle also show imbricate patterns. Spinous scales are seen in cats and mink."
  },
  {
    id: 56,
    question: "In medico-legal examination of a newborn's body, the presence of an ossification centre in which part of the skeleton is taken as an indication that the baby was full-term?",
    options: ["Lower end of the femur", "Lower end of the radius", "Iliac crest", "Medial end of the clavicle"],
    answer: 0,
    explanation: "The ossification centre of the lower femoral epiphysis appears at about 36–40 weeks of gestation, so its presence suggests a mature fetus. This matters in infanticide cases, where viability must be established. The lower radial epiphysis appears only at about one year, and the iliac crest and medial clavicle ossify much later, in adolescence."
  },
  {
    id: 57,
    question: "Todd's ten-phase method estimates the age of an adult skeleton from changes in the",
    options: ["pubic symphysis surface", "cranial sutures", "medial end of the clavicle", "sternal end of the fourth rib"],
    answer: 0,
    explanation: "T.W. Todd (1920) described ten phases of change in the pubic symphyseal face from about 18 to over 50 years; Suchey-Brooks later refined the method. The sternal end of the fourth rib is used in İşcan's method. Cranial suture closure is less reliable."
  },
  {
    id: 58,
    question: "Roots of a tree sapling have grown through the eye socket of a buried skull, and a cross-section of the root shows 7 annual growth rings. What does this indicate?",
    options: ["A maximum post-mortem interval of 7 years", "A minimum post-mortem interval of about 7 years", "The exact year of death", "The age of the deceased"],
    answer: 1,
    explanation: "The root could only grow through the skull after the body was in place, so its ring count gives a minimum time since burial. The body could have lain there longer before the root reached it. Using tree rings this way is an application of dendrochronology."
  },
  {
    id: 59,
    question: "Pollen from insect-pollinated (entomophilous) plants is produced in small amounts and does not travel far by wind. Finding such pollen on a suspect's clothing is forensically valuable because it",
    options: ["shows the time of death", "suggests close contact with the plant or the place where it grows", "proves the suspect handled the victim", "indicates the season when the clothing was made"],
    answer: 1,
    explanation: "Wind-borne (anemophilous) pollen is everywhere in the air, so it says little about a specific location. Sticky entomophilous pollen usually transfers only by direct contact with flowers or soil nearby, so it can link a person to a particular scene. It supports association but does not by itself prove contact with a victim."
  },
  {
    id: 60,
    question: "In the blowfly life cycle, the stage at which larvae stop feeding and leave the corpse to find a place to pupate is the",
    options: ["first instar", "second instar", "puparium", "post-feeding (wandering) third instar"],
    answer: 3,
    explanation: "After feeding, third-instar larvae empty their crops and wander away from the body, sometimes several metres, to pupate in soil or under objects. Investigators must therefore search around the body, not just on it. The stages are egg, three larval instars, pupa and adult."
  },
  {
    id: 61,
    question: "On a fresh corpse exposed outdoors in summer, the insects that usually arrive first, often within minutes, belong to the family",
    options: ["Dermestidae", "Piophilidae", "Silphidae", "Calliphoridae"],
    answer: 3,
    explanation: "Blowflies (Calliphoridae), along with flesh flies (Sarcophagidae), are the first colonisers and lay eggs in natural openings and wounds. Piophilidae (cheese skippers) come later, during fermentation of fats. Dermestid beetles arrive in the dry, skeletal stage."
  },
  {
    id: 62,
    question: "The head of a normal human spermatozoon, seen on a stained smear, is about how long?",
    options: ["1–2 µm", "4–5 µm", "10–12 µm", "20–25 µm"],
    answer: 1,
    explanation: "The sperm head is oval, about 4–5 µm long and 2.5–3.5 µm wide, and the whole cell with its tail is about 50–60 µm long. Heads often lose their tails in older stains, so examiners look for the characteristic head shape and acrosomal cap. Christmas tree staining colours the head red and the acrosome pale pink."
  },
  {
    id: 63,
    question: "Prokaryotic ribosomes are 70S, made of 50S and 30S subunits. The total is not 80S because sedimentation coefficients",
    options: ["depend on shape and mass, so they are not additive", "are measured only for proteins", "fall when RNA is bound", "are measured in different units for each subunit"],
    answer: 0,
    explanation: "The Svedberg value depends on how fast a particle sediments, which depends on its mass, density and shape. When subunits combine, the shape changes, so S values do not add up. Eukaryotic cytoplasmic ribosomes are 80S (60S + 40S)."
  },
  {
    id: 64,
    question: "Karyotyping of a spontaneously aborted fetus shows triploidy. How many chromosomes are present in its cells?",
    options: ["47", "48", "69", "92"],
    answer: 2,
    explanation: "Triploidy means three complete haploid sets, 3 × 23 = 69 chromosomes. It usually results from two sperm fertilising one egg (dispermy) and is a common cause of early miscarriage. 92 would be tetraploidy, and 47 is a single trisomy."
  },
  {
    id: 65,
    question: "Which bacterium is chiefly responsible for the gas formation and bloating of a body during putrefaction?",
    options: ["Clostridium perfringens (C. welchii)", "Escherichia coli", "Staphylococcus aureus", "Bacillus anthracis"],
    answer: 0,
    explanation: "Clostridium perfringens, an anaerobe from the gut, spreads through blood vessels after death and produces gases such as hydrogen sulphide, methane and carbon dioxide. Its lecithinase also breaks down tissues. Coliforms and other gut flora contribute, but C. welchii is the principal organism."
  },
  {
    id: 66,
    question: "Scalp hair grows about 1 cm per month. For drug testing, a 3 cm segment of hair measured from the root reflects drug use over roughly the previous",
    options: ["3 days", "3 weeks", "3 months", "3 years"],
    answer: 2,
    explanation: "At about 1 cm per month, 3 cm of hair from the root covers about 3 months. Segmental analysis can therefore show when a drug was taken, which blood and urine cannot do beyond a few days. Hair takes about a week to emerge above the scalp, so very recent use is not seen."
  },
  {
    id: 67,
    question: "For an enzyme following Michaelis-Menten kinetics, what is the reaction velocity when the substrate concentration equals three times the Km?",
    options: ["50% of Vmax", "67% of Vmax", "75% of Vmax", "90% of Vmax"],
    answer: 2,
    explanation: "v = Vmax[S] ÷ (Km + [S]) = Vmax × 3Km ÷ 4Km = 0.75 Vmax. At [S] = Km the velocity is half of Vmax, which is how Km is defined. Enzyme kinetics underlies tests such as acid phosphatase and amylase assays."
  },
  {
    id: 68,
    question: "Attrition, secondary dentine, periodontosis, cementum apposition, root resorption and root transparency are scored together to estimate adult age in",
    options: ["Demirjian's method", "Moorrees' method", "the Schour and Massler chart", "Gustafson's method"],
    answer: 3,
    explanation: "Gustafson (1950) used six age-related changes in ground tooth sections; root transparency is the single most reliable of them. Demirjian's and Moorrees' methods use tooth development stages in children. The Schour and Massler chart shows eruption sequences."
  },
  {
    id: 69,
    question: "Mature human red blood cells lack a nucleus. Which cells in liquid blood provide the nuclear DNA used for STR profiling?",
    options: ["Erythrocytes", "Reticulocytes", "Leukocytes", "Platelets"],
    answer: 2,
    explanation: "White blood cells (leukocytes) are nucleated and supply the nuclear DNA in blood; there are about 4,000–11,000 per µL. Erythrocytes, reticulocytes and platelets have no nucleus. Platelets carry some mitochondria, so they can contribute mtDNA."
  },
  {
    id: 70,
    question: "A child with Down syndrome caused by a Robertsonian translocation (for example, 14/21) has what total chromosome count?",
    options: ["45", "46", "47", "48"],
    answer: 1,
    explanation: "In translocation Down syndrome the extra chromosome 21 is fused to another acrocentric chromosome, so the count is 46 even though there are three copies of chromosome 21 material. A balanced carrier parent has 45 chromosomes. Free trisomy 21, the commonest form, has 47."
  },
  {
    id: 71,
    question: "A DNA extract has a concentration of 25 ng/µL in a final elution volume of 50 µL. What is the total DNA yield?",
    options: ["0.5 µg", "12.5 µg", "2.5 µg", "1.25 µg"],
    answer: 3,
    explanation: "Total yield = 25 ng/µL × 50 µL = 1,250 ng = 1.25 µg. Labs record yield because it tells them how many amplifications or repeat tests the extract can support. Concentration alone does not show how much DNA is left."
  },
  {
    id: 72,
    question: "Starting from a single template molecule, what is the minimum number of PCR cycles at 100% efficiency needed to produce at least one million copies?",
    options: ["10", "20", "30", "40"],
    answer: 1,
    explanation: "2²⁰ = 1,048,576, just over one million, while 2¹⁰ is only 1,024. Forensic STR kits typically use 28–30 cycles because real efficiency is below 100% and templates are often scarce. Low-copy-number protocols add more cycles but increase stochastic effects and contamination risk."
  },
  {
    id: 73,
    question: "In real-time PCR at 100% efficiency, a 1 ng standard crosses the threshold at Ct 22. A casework sample run under the same conditions gives a Ct of 25. How much DNA does the sample contain?",
    options: ["0.125 ng", "0.33 ng", "3 ng", "8 ng"],
    answer: 0,
    explanation: "Each cycle doubles the product, so a sample that needs 3 more cycles started with 2³ = 8 times less template: 1 ÷ 8 = 0.125 ng. A higher Ct always means less starting DNA. Choosing 8 ng reverses the relationship."
  },
  {
    id: 74,
    question: "A qPCR standard curve of Ct against log₁₀(quantity) has a slope of −3.6. Using efficiency = 10^(−1/slope) − 1, the PCR efficiency is about",
    options: ["80%", "90%", "100%", "110%"],
    answer: 1,
    explanation: "10^(1/3.6) = 10^0.278 ≈ 1.90, so efficiency ≈ 0.90 or 90%. A slope of −3.32 corresponds to 100% efficiency. Slopes steeper than −3.32 mean lower efficiency, and most kits accept about 90–110%."
  },
  {
    id: 75,
    question: "An STR kit works best with 1.0 ng of template DNA. A casework extract contains 0.4 ng/µL. What volume of extract should be added to the reaction?",
    options: ["0.4 µL", "25 µL", "4.0 µL", "2.5 µL"],
    answer: 3,
    explanation: "Volume = target mass ÷ concentration = 1.0 ng ÷ 0.4 ng/µL = 2.5 µL, made up to the reaction volume with water or buffer. Too much DNA gives off-scale peaks and pull-up, and too little gives drop-out. This is why every casework extract is quantified before amplification."
  },
  {
    id: 76,
    question: "In an STR mixture, the locus with the most alleles shows 5 distinct alleles, and no locus shows more. What is the minimum number of contributors?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "Each person contributes at most two alleles per locus, so 5 alleles need at least ⌈5 ÷ 2⌉ = 3 people. Allele sharing between contributors means the true number may be higher. Probabilistic genotyping software also considers peak heights when estimating the number of contributors."
  },
  {
    id: 77,
    question: "Using the NRC II correction for population substructure, a homozygote's frequency is estimated as p² + p(1 − p)θ. For an allele with p = 0.1 and θ = 0.01, the estimate is",
    options: ["0.0100", "0.0200", "0.0110", "0.0109"],
    answer: 3,
    explanation: "p² = 0.01 and p(1 − p)θ = 0.1 × 0.9 × 0.01 = 0.0009, so the frequency is 0.0109. The θ correction slightly increases homozygote frequencies to allow for shared ancestry within subpopulations, which favours the defendant. NRC II recommended θ = 0.01 generally and 0.03 for small, isolated populations."
  },
  {
    id: 78,
    question: "In a paternity test using 20 STR loci, the alleged father lacks the child's obligate paternal allele at only one locus, and the difference is a single repeat unit. How is this usually handled?",
    options: ["He is excluded as the father", "A possible mutation is considered and a mutation rate is built into the paternity index", "The test is declared invalid", "The locus is ignored and paternity is reported as 100%"],
    answer: 1,
    explanation: "STR loci mutate at about 1 in 1,000 transmissions, usually by one repeat unit, so a single inconsistency is not enough to exclude. Labs include a mutation factor in the PI for that locus and often test extra loci. Exclusion usually needs inconsistencies at two or more loci."
  },
  {
    id: 79,
    question: "Paternity indices at four loci are 2, 5, 10 and 4. Assuming a prior probability of 0.5, what is the probability of paternity?",
    options: ["99.0%", "99.5%", "99.75%", "99.99%"],
    answer: 2,
    explanation: "CPI = 2 × 5 × 10 × 4 = 400. With a prior of 0.5, W = CPI ÷ (CPI + 1) = 400 ÷ 401 ≈ 99.75%. Courts usually see CPIs in the millions when a full STR panel is used."
  },
  {
    id: 80,
    question: "Red-green colour blindness (X-linked recessive) affects 8% of males in a population. Assuming Hardy-Weinberg equilibrium, about what proportion of females are carriers?",
    options: ["0.64%", "8%", "16%", "14.7%"],
    answer: 3,
    explanation: "In males the phenotype frequency equals the allele frequency, so q = 0.08 and p = 0.92. Female carriers = 2pq = 2 × 0.92 × 0.08 ≈ 0.147, or 14.7%. Affected females = q² = 0.64%, which is why X-linked recessive traits are much rarer in women."
  },
  {
    id: 81,
    question: "An STR locus has 10 alleles in a population. How many different genotypes are possible at this locus?",
    options: ["20", "45", "55", "100"],
    answer: 2,
    explanation: "For n alleles the number of genotypes is n(n + 1)/2 = 10 × 11 ÷ 2 = 55, made up of 10 homozygotes and 45 heterozygotes. Highly polymorphic loci such as SE33 and D21S11 are valuable because they give many genotypes. The answer 45 counts only the heterozygotes."
  },
  {
    id: 82,
    question: "In an electropherogram, an allele peak is 1,500 RFU and the peak one repeat shorter is 120 RFU. What is the stutter percentage?",
    options: ["0.8%", "8%", "12.5%", "80%"],
    answer: 1,
    explanation: "Stutter % = (120 ÷ 1,500) × 100 = 8%. Back stutter (n − 1 repeat) comes from slipped-strand mispairing during PCR and is typically 5–15% for tetranucleotide loci. Peaks above a lab's locus-specific stutter filter may indicate a minor contributor in a mixture."
  },
  {
    id: 83,
    question: "A single-source sample shows two alleles at a locus with peak heights of 800 and 1,000 RFU. What is the heterozygote balance, and how is it interpreted?",
    options: ["0.80; acceptable heterozygote balance", "0.80; indicates a two-person mixture", "1.25; indicates a mixture", "0.20; indicates allele drop-out"],
    answer: 0,
    explanation: "Heterozygote balance = smaller peak ÷ larger peak = 800 ÷ 1,000 = 0.80. Many labs accept a balance of 0.6 or more for good-quality single-source samples. Marked imbalance can arise from low template, degradation or a mixture."
  },
  {
    id: 84,
    question: "A whole-genome sequencing run produces 90 Gb of usable sequence for a human genome of about 3 Gb. What is the average coverage?",
    options: ["3×", "10×", "30×", "90×"],
    answer: 2,
    explanation: "Coverage = total bases sequenced ÷ genome size = 90 ÷ 3 = 30×, meaning each base is read about 30 times on average. About 30× is the usual standard for calling germline variants. Forensic genetic genealogy and degraded samples may work at lower coverage."
  },
  {
    id: 85,
    question: "A double-stranded DNA sample contains 30% adenine. What percentage of cytosine does it contain?",
    options: ["20%", "30%", "40%", "70%"],
    answer: 0,
    explanation: "By Chargaff's rules A = T = 30%, so A + T = 60% and G + C = 40%, giving C = 20%. This works only for double-stranded DNA, where bases pair. Single-stranded viral genomes do not follow the rule."
  },
  {
    id: 86,
    question: "At a single autosomal locus, what is the probability that two full siblings share both alleles identical by descent?",
    options: ["0", "1/4", "1/2", "1"],
    answer: 1,
    explanation: "Full siblings share 0, 1 or 2 alleles IBD with probabilities 1/4, 1/2 and 1/4. A parent and child always share exactly one allele IBD. These kinship coefficients are used in sibship indices and missing-person cases."
  },
  {
    id: 87,
    question: "A Y-STR haplotype from a crime scene is seen 3 times in a reference database of 3,000 unrelated male haplotypes. By the simple counting method, its estimated frequency is",
    options: ["1 in 300", "1 in 1,000", "1 in 3,000", "1 in 9,000"],
    answer: 1,
    explanation: "Frequency = 3 ÷ 3,000 = 0.001, or 1 in 1,000. Y-STR loci are inherited together as one haplotype, so the product rule cannot be applied; the counting method is used, usually with an upper confidence bound. All paternal male relatives share the same haplotype."
  },
  {
    id: 88,
    question: "Before DNA evidence, the prior odds that a suspect is the source of a stain are 1 to 10,000. The DNA match has a likelihood ratio of 1,000,000. What are the posterior odds?",
    options: ["1 to 100", "1 to 1", "100 to 1", "10,000 to 1"],
    answer: 2,
    explanation: "By Bayes' theorem, posterior odds = prior odds × LR = (1/10,000) × 1,000,000 = 100, or 100 to 1. Forensic scientists report the LR, and the court weighs it against the other evidence. Treating the LR itself as the odds of guilt is the 'prosecutor's fallacy'."
  },
  {
    id: 89,
    question: "In a sample of 200 people, 90 are AA, 80 are Aa and 30 are aa. What is the frequency of allele A?",
    options: ["0.45", "0.55", "0.75", "0.65"],
    answer: 3,
    explanation: "Count the alleles: A = (2 × 90) + 80 = 260 out of 400, so p = 0.65 and q = 0.35. Allele frequencies must be counted from genotypes, not taken from the proportion of AA individuals. Expected Hardy-Weinberg genotypes can then be compared with the observed ones."
  },
  {
    id: 90,
    question: "Two independent genetic systems have probabilities of exclusion of 0.5 and 0.6 for a falsely accused man. What is the combined probability of exclusion?",
    options: ["0.30", "0.55", "0.80", "1.10"],
    answer: 2,
    explanation: "CPE = 1 − (1 − 0.5)(1 − 0.6) = 1 − 0.5 × 0.4 = 0.80. Exclusion probabilities are combined through the probability of non-exclusion at every system; they are not simply added (1.10 is impossible). Modern STR panels give CPEs above 0.9999."
  },
  {
    id: 91,
    question: "In a population, 25% of people are non-secretors (se/se). Assuming Hardy-Weinberg equilibrium, what percentage are heterozygous secretors (Se/se)?",
    options: ["25%", "50%", "75%", "6.25%"],
    answer: 1,
    explanation: "q² = 0.25 gives q (se) = 0.5 and p (Se) = 0.5, so heterozygotes = 2pq = 2 × 0.5 × 0.5 = 0.50. Total secretors (SeSe + Sese) = 75%. Secretor status decides whether ABH antigens can be detected in saliva and semen stains."
  },
  {
    id: 92,
    question: "In a population, 9% of people are Rh(D)-negative (dd). Under Hardy-Weinberg equilibrium, what proportion are heterozygous Dd?",
    options: ["9%", "21%", "42%", "49%"],
    answer: 2,
    explanation: "q² = 0.09 gives q (d) = 0.3 and p (D) = 0.7, so Dd = 2pq = 2 × 0.7 × 0.3 = 0.42. DD = p² = 49%. Heterozygous fathers explain why not every pregnancy of an Rh-negative mother carries an Rh-positive fetus."
  },
  {
    id: 93,
    question: "An antiserum is diluted two-fold serially, starting at 1:2 in tube 1. Agglutination is seen in tubes 1 to 8 but not in tube 9. What is the titre of the antiserum?",
    options: ["64", "128", "256", "512"],
    answer: 2,
    explanation: "Tube n has a dilution of 1:2ⁿ, so tube 8 is 1:256, the highest dilution still giving agglutination. The titre is the reciprocal of that dilution, 256. Antisera used for stain grouping and the precipitin test must have an adequate titre to give reliable results."
  },
  {
    id: 94,
    question: "In a precipitin ring test, a very concentrated bloodstain extract gives no ring against anti-human serum, but the same extract diluted 1:1,000 gives a clear ring. What explains the first result?",
    options: ["The stain is not of human origin", "Antibody excess (prozone) in the extract", "The antiserum had expired", "Antigen excess (postzone) prevented lattice formation"],
    answer: 3,
    explanation: "Visible precipitate forms only near equivalence, when antigen and antibody cross-link into a lattice. With great antigen excess, each antibody binds separate antigen molecules and no lattice forms (the postzone). Testing a range of extract dilutions avoids this false negative."
  },
  {
    id: 95,
    question: "In Ouchterlony double immunodiffusion, the precipitin lines from two adjacent antigen wells join but form a spur extending past the junction. This pattern indicates",
    options: ["identity", "non-identity", "partial identity", "absence of antigen"],
    answer: 2,
    explanation: "A spur means the two antigens share some epitopes but one has extra epitopes the antiserum recognises. Lines that fuse smoothly into an arc show identity, and lines that cross show non-identity. The technique is used to identify species from bloodstains."
  },
  {
    id: 96,
    question: "In counter-current immunoelectrophoresis for species identification at pH 8.6, antibodies move towards the cathode while most protein antigens move towards the anode. The antibodies move towards the cathode because of",
    options: ["electroendosmosis", "their strong negative charge", "their small molecular size", "capillary action of the gel"],
    answer: 0,
    explanation: "At pH 8.6 immunoglobulins carry little net charge, so the bulk flow of buffer towards the cathode (electroendosmosis) carries them in that direction. The antigens and antibodies meet between the wells and form a precipitin line within about an hour. This makes the method faster than simple diffusion."
  },
  {
    id: 97,
    question: "Which confirmatory test for blood produces pink, feathery crystals of pyridine haemochromogen?",
    options: ["Teichmann test", "Leucomalachite green test", "Kastle-Meyer test", "Takayama test"],
    answer: 3,
    explanation: "In the Takayama test, pyridine and glucose in alkaline solution convert haem to pink pyridine haemochromogen crystals. The Teichmann test gives brown rhombic haemin (haematin chloride) crystals. Kastle-Meyer and leucomalachite green are presumptive colour tests."
  },
  {
    id: 98,
    question: "A stain on a bedsheet gives a strong positive acid phosphatase reaction, but repeated microscopy shows no spermatozoa. What should be done next?",
    options: ["Test for prostate-specific antigen (p30) to confirm semen", "Report the stain as vaginal fluid", "Report it as saliva", "Discard the sample as negative"],
    answer: 0,
    explanation: "Semen from a vasectomised or azoospermic man contains seminal acid phosphatase but no sperm. A PSA (p30) test is a confirmatory test for seminal fluid in such cases. Vaginal fluid can also show low AP activity, so AP alone is only presumptive."
  },
  {
    id: 99,
    question: "The RSID-Semen lateral-flow test identifies semen by detecting which protein?",
    options: ["Prostate-specific antigen", "Spermine", "Acid phosphatase", "Semenogelin"],
    answer: 3,
    explanation: "RSID-Semen uses monoclonal antibodies against semenogelin, the main protein of the seminal coagulum, made by the seminal vesicles. It is positive even in azoospermic semen. PSA-based cards such as ABAcard p30 detect prostate-specific antigen instead."
  },
  {
    id: 100,
    question: "Which crystal test for semen gives yellow needle-shaped crystals of spermine picrate?",
    options: ["Barberio test", "Florence test", "Teichmann test", "Takayama test"],
    answer: 0,
    explanation: "The Barberio test uses picric acid to precipitate spermine as yellow needles. The Florence test uses iodine and potassium iodide to give dark brown choline periodide crystals. Both tests are presumptive because the chemicals involved occur in other tissues too."
  },
  {
    id: 101,
    question: "In the Phadebas test for saliva stains, a blue colour is released into solution because",
    options: ["amylase hydrolyses dye-linked starch and frees the blue dye", "acid phosphatase cleaves a phosphate ester", "peroxidase oxidises a colourless dye", "proteases digest a blue protein substrate"],
    answer: 0,
    explanation: "Phadebas uses insoluble starch microspheres cross-linked to a blue dye. Alpha-amylase breaks the starch and releases soluble blue fragments, and the colour intensity reflects amylase activity. Amylase also occurs in other fluids, so the test is presumptive for saliva."
  },
  {
    id: 102,
    question: "On a linear ELISA standard curve, a standard of 10 ng/mL gives an absorbance of 0.6 and a standard of 20 ng/mL gives 1.2. A sample reads 0.9. Its concentration is",
    options: ["12 ng/mL", "15 ng/mL", "18 ng/mL", "20 ng/mL"],
    answer: 1,
    explanation: "The curve rises 0.06 absorbance units per ng/mL, so 0.9 ÷ 0.06 = 15 ng/mL, halfway between the two standards. Samples must fall within the range of the standards; readings outside it are diluted and re-tested. This is how quantitative ELISAs for PSA or drugs are read."
  },
  {
    id: 103,
    question: "Luminol is sprayed on a floor that was cleaned after a homicide. Which substance commonly used for cleaning can give a false-positive glow?",
    options: ["Sodium hypochlorite bleach", "Sodium chloride", "Ethanol", "Glycerol"],
    answer: 0,
    explanation: "Hypochlorite oxidises luminol directly and gives a brief, bright flash, unlike the steady glow from haem catalysis. Experienced examiners note the difference and confirm suspected blood with other tests. Copper salts and some plant peroxidases can also react."
  },
  {
    id: 104,
    question: "The RSID-Blood lateral-flow test confirms human blood by detecting",
    options: ["haemoglobin", "glycophorin A", "albumin", "fibrinogen"],
    answer: 1,
    explanation: "RSID-Blood uses two monoclonal anti-glycophorin A antibodies, which recognise a protein in the human red cell membrane. Haemoglobin-based cards such as HemaTrace detect human haemoglobin and cross-react with higher primates and ferrets. Detecting a membrane protein makes RSID-Blood specific for human blood."
  },
  {
    id: 105,
    question: "A heavily stained semen sample gives a negative result on a PSA lateral-flow card, but the same extract diluted 1:100 gives a clear positive. This is due to",
    options: ["the high-dose hook effect", "cross-reactivity with saliva", "degradation of PSA", "a faulty control line"],
    answer: 0,
    explanation: "Very high antigen levels saturate both the mobile and capture antibodies, so no sandwich forms at the test line and a false negative results. Diluting the sample brings it back into range. Labs therefore test strong-looking stains at more than one dilution."
  },
  {
    id: 106,
    question: "During decomposition, which organ resists putrefaction the longest?",
    options: ["Liver", "Pancreas", "Brain", "Non-gravid uterus"],
    answer: 3,
    explanation: "The non-gravid uterus and the prostate are dense, fibromuscular organs with poor blood and bacterial supply, so they decay last. They are useful for sex determination in decomposed bodies. The gut, pancreas and brain decompose early."
  },
  {
    id: 107,
    question: "The first external sign of putrefaction, a greenish discolouration of the skin, usually appears over the",
    options: ["right iliac fossa", "left hypochondrium", "face and neck", "soles of the feet"],
    answer: 0,
    explanation: "Green colour appears first over the caecum in the right iliac fossa, where bacteria are numerous and the gut lies close to the skin. It is caused by sulphmethaemoglobin formed from hydrogen sulphide and haemoglobin. In Indian summer it may appear within 12–18 hours of death."
  },
  {
    id: 108,
    question: "Monoclonal antibodies, now used in many forensic immunoassay kits, were first produced by hybridoma technology developed in 1975 by",
    options: ["Köhler and Milstein", "Landsteiner and Wiener", "Yalow and Berson", "Engvall and Perlmann"],
    answer: 0,
    explanation: "Georges Köhler and César Milstein fused antibody-producing B cells with myeloma cells to create immortal hybridomas, and shared the 1984 Nobel Prize. Yalow and Berson developed radioimmunoassay, and Engvall and Perlmann developed ELISA in 1971. Monoclonals give the high specificity needed in kits such as RSID and p30 cards."
  },
  {
    id: 109,
    question: "In a Kastle-Meyer test, the swab turns pink after phenolphthalin is added but before hydrogen peroxide is added. How should this be interpreted?",
    options: ["Positive for blood", "Positive for human blood", "Positive for semen", "Inconclusive, because an oxidising agent is present"],
    answer: 3,
    explanation: "Blood gives colour only after H₂O₂ is added, because haem acts as a peroxidase catalyst. A pink colour before H₂O₂ means a chemical oxidant on the sample is oxidising the reagent directly. The result must be treated as inconclusive, and other tests should be used."
  },
  {
    id: 110,
    question: "On a lateral-flow immunochromatographic card, a pink line appears at the test (T) position but no line appears at the control (C) position. The result should be reported as",
    options: ["positive", "negative", "weakly positive", "invalid"],
    answer: 3,
    explanation: "The control line shows that the sample flowed properly and the reagents worked. Without it, no result can be trusted, whatever the test line shows. The test must be repeated with a new card."
  },
  {
    id: 111,
    question: "A pellet forms after 10 minutes at 1,000 × g. Assuming pelleting depends on the product of g-force and time, roughly how long would the same separation take at 5,000 × g?",
    options: ["2 minutes", "5 minutes", "10 minutes", "50 minutes"],
    answer: 0,
    explanation: "g × time is kept constant: 1,000 × 10 = 5,000 × t, so t = 2 minutes. This rule of thumb lets protocols be adapted to different centrifuges. It is approximate, because rotor geometry and sample viscosity also matter."
  },
  {
    id: 112,
    question: "A protocol requires 2,000 × g, and the available centrifuge has a rotor radius of 8 cm. Using RCF = 1.118 × 10⁻⁵ × r × N², approximately what speed should be set?",
    options: ["About 2,400 rpm", "About 4,700 rpm", "About 7,100 rpm", "About 9,500 rpm"],
    answer: 1,
    explanation: "N = √[2,000 ÷ (1.118 × 10⁻⁵ × 8)] = √(2.24 × 10⁷) ≈ 4,730 rpm. Doubling the speed multiplies RCF by four, so speed must be set from the formula, not by simple proportion. Many centrifuges can convert between rpm and RCF automatically."
  },
  {
    id: 113,
    question: "A drug has an Rf value of 0.35 in a particular TLC system. If the solvent front travels 12 cm, how far from the origin will the drug spot be?",
    options: ["3.5 cm", "4.2 cm", "8.6 cm", "34.3 cm"],
    answer: 1,
    explanation: "Distance of spot = Rf × distance of solvent front = 0.35 × 12 = 4.2 cm. Rf is a ratio, so the spot's position depends on how far the solvent is allowed to run. Plates are developed to a marked line so that this distance is known exactly."
  },
  {
    id: 114,
    question: "An unknown spot travels 4.16 cm on a TLC plate whose solvent front is at 8.0 cm. Reference standards on the same plate give Rf values of 0.30 for X, 0.52 for Y and 0.75 for Z. Which conclusion is justified?",
    options: ["The unknown is presumptively consistent with Y and needs confirmation", "The unknown is conclusively identified as Y", "The unknown is consistent with X", "The unknown matches none of the standards"],
    answer: 0,
    explanation: "Rf = 4.16 ÷ 8.0 = 0.52, which matches standard Y. Different compounds can share an Rf, so TLC is only a screening test. Identity is confirmed by a second technique such as GC-MS."
  },
  {
    id: 115,
    question: "A solution has an absorbance of 0.6 in a 1 cm cuvette at a wavelength where the molar absorptivity is 1.2 × 10⁴ L mol⁻¹ cm⁻¹. By the Beer-Lambert law, its concentration is",
    options: ["5 µmol/L", "50 µmol/L", "7,200 mol/L", "20,000 mol/L"],
    answer: 1,
    explanation: "A = εbc, so c = A ÷ (εb) = 0.6 ÷ (1.2 × 10⁴ × 1) = 5.0 × 10⁻⁵ mol/L (50 µmol/L). The law holds best at low concentrations and absorbances of about 0.1–1. Multiplying instead of dividing gives the absurd 7,200 mol/L."
  },
  {
    id: 116,
    question: "A drug solution has an absorbance of 0.35 in a 1 cm cuvette. If the same solution is measured in a 2 cm cuvette at the same wavelength, its absorbance will be",
    options: ["0.175", "0.35", "0.70", "1.40"],
    answer: 2,
    explanation: "By the Beer-Lambert law A = εbc, absorbance is proportional to the path length b, so doubling it doubles A to 0.70. Halving the concentration would instead halve A. Longer cuvettes are used to measure very dilute solutions."
  },
  {
    id: 117,
    question: "Two drugs elute from an HPLC column at 5.0 and 6.0 minutes, each with a peak width at the base of 0.5 minutes. Using Rs = 2(t₂ − t₁)/(w₁ + w₂), their resolution is",
    options: ["0.5, poor separation", "1.0, partial overlap", "4.0, baseline resolved", "2.0, baseline resolved"],
    answer: 3,
    explanation: "Rs = 2 × (6.0 − 5.0) ÷ (0.5 + 0.5) = 2.0. A resolution of 1.5 or more is generally taken as baseline separation, so these peaks can be quantified separately. Resolution improves with more theoretical plates and better selectivity."
  },
  {
    id: 118,
    question: "A peak with a retention time of 10 minutes has a base width of 0.5 minutes. Using N = 16(tR/w)², how many theoretical plates does the column have?",
    options: ["320", "1,600", "6,400", "12,800"],
    answer: 2,
    explanation: "N = 16 × (10 ÷ 0.5)² = 16 × 400 = 6,400 plates. More plates mean narrower peaks and better efficiency. Capillary GC columns can have hundreds of thousands of plates, which is why they separate complex mixtures so well."
  },
  {
    id: 119,
    question: "A 70 kg man (Widmark factor r = 0.7) absorbs 49 g of ethanol. Using Widmark's formula C = A ÷ (r × W), his peak blood alcohol concentration, ignoring elimination, is about",
    options: ["0.49 g/kg", "0.7 g/kg", "1.0 g/kg", "1.4 g/kg"],
    answer: 2,
    explanation: "C = 49 ÷ (0.7 × 70) = 49 ÷ 49 = 1.0 g/kg, about 100 mg per 100 mL of blood. The factor r reflects body water and is lower (about 0.6) in women. In practice, elimination at roughly 0.1–0.2 g/kg per hour is subtracted for the time since drinking."
  },
  {
    id: 120,
    question: "A blood sample taken 3 hours after a road accident shows 60 mg of alcohol per 100 mL. Assuming the driver was post-absorptive and eliminated alcohol at 15 mg/100 mL per hour, what was the likely concentration at the time of the accident?",
    options: ["15 mg/100 mL", "45 mg/100 mL", "60 mg/100 mL", "105 mg/100 mL"],
    answer: 3,
    explanation: "Back-calculation adds the alcohol eliminated: 60 + (3 × 15) = 105 mg/100 mL. This is well above the 30 mg/100 mL limit in Section 185 of the Motor Vehicles Act, 1988. The method is valid only if absorption was complete at the time of the accident."
  },
  {
    id: 121,
    question: "A drug has an elimination half-life of 4 hours and follows first-order kinetics. What percentage of the peak plasma level remains 12 hours later?",
    options: ["33%", "25%", "12.5%", "6.25%"],
    answer: 2,
    explanation: "12 hours is three half-lives, so (½)³ = 1/8 = 12.5% remains. In first-order kinetics a constant fraction, not a constant amount, is removed per unit time. About five half-lives are needed for a drug to be almost completely eliminated."
  },
  {
    id: 122,
    question: "The fluorescent dye FITC is excited maximally at about 495 nm and emits maximally at about 519 nm. What is its Stokes shift?",
    options: ["About 24 nm", "About 495 nm", "About 519 nm", "About 1,014 nm"],
    answer: 0,
    explanation: "Stokes shift = emission maximum − excitation maximum = 519 − 495 = 24 nm. Emitted light has a longer wavelength because some energy is lost before emission. Filters in a fluorescence microscope use this shift to separate the weak emitted light from the strong excitation light."
  },
  {
    id: 123,
    question: "Blood is diluted 1:10 for extraction, and the extract is diluted a further 1:100 before analysis. The instrument reads 0.5 µg/mL. What is the concentration in the original blood?",
    options: ["5 µg/mL", "50 µg/mL", "500 µg/mL", "5,000 µg/mL"],
    answer: 2,
    explanation: "The total dilution factor is 10 × 100 = 1,000, so the original concentration = 0.5 × 1,000 = 500 µg/mL. Serial dilution factors multiply; they do not add. Forgetting one step is a common source of tenfold or hundredfold errors in reports."
  },
  {
    id: 124,
    question: "In a linear time-of-flight (TOF) analyser, flight time is proportional to the square root of m/z. Compared with an ion of m/z 100, an ion of m/z 400 accelerated through the same voltage will take",
    options: ["half as long", "the same time", "four times as long", "twice as long"],
    answer: 3,
    explanation: "t ∝ √(m/z), and √(400/100) = √4 = 2, so the heavier ion takes twice as long. All ions get the same kinetic energy, so lighter ions move faster. MALDI-TOF uses this to measure peptide and protein masses."
  },
  {
    id: 125,
    question: "Morphine has a monoisotopic mass of about 285 Da. In positive-mode ESI LC-MS, its protonated molecule [M+H]⁺ appears at m/z",
    options: ["284", "285", "286", "287"],
    answer: 2,
    explanation: "Adding a proton (about 1 Da) gives [M+H]⁺ at m/z 286. Fragmenting this precursor in MS/MS gives characteristic product ions used to confirm morphine. In negative mode the deprotonated ion [M−H]⁻ would appear at 284."
  },
  {
    id: 126,
    question: "An infrared absorption band occurs at a wavelength of 5 µm. What is its wavenumber?",
    options: ["200 cm⁻¹", "500 cm⁻¹", "5,000 cm⁻¹", "2,000 cm⁻¹"],
    answer: 3,
    explanation: "Wavenumber (cm⁻¹) = 10,000 ÷ wavelength (µm) = 10,000 ÷ 5 = 2,000 cm⁻¹. IR spectra are plotted in wavenumbers, usually from 4,000 to 400 cm⁻¹. The region below about 1,500 cm⁻¹ is the fingerprint region used to identify drugs."
  },
  {
    id: 127,
    question: "In agarose gel electrophoresis, the distance a linear double-stranded DNA fragment migrates is approximately inversely proportional to",
    options: ["its size in base pairs", "the square of its size", "the logarithm of its size in base pairs", "its GC content"],
    answer: 2,
    explanation: "Over the useful range of a gel, migration distance is roughly linear with log₁₀(size), so unknowns are sized by plotting distance against log size of ladder bands. All DNA has the same charge-to-mass ratio, so size and conformation determine mobility. Supercoiled and nicked plasmids run differently from linear DNA of the same size."
  },
  {
    id: 128,
    question: "A white powder seized from a suspect turns purple-violet with the Marquis reagent. This presumptive test result most strongly suggests",
    options: ["an opiate such as morphine or heroin", "cocaine", "cannabis", "a barbiturate"],
    answer: 0,
    explanation: "Marquis reagent (formaldehyde in concentrated sulphuric acid) turns purple with opiates. Amphetamines give orange-brown with it, while cocaine is screened with cobalt thiocyanate (blue) and cannabis with Duquenois-Levine. Colour tests are presumptive and need confirmation by GC-MS."
  },
  {
    id: 129,
    question: "In the Duquenois-Levine test for cannabis, a positive result is shown by a violet colour that moves into the",
    options: ["chloroform layer", "aqueous layer after adding water", "ether layer after adding ammonia", "acetone layer"],
    answer: 0,
    explanation: "Duquenois reagent (vanillin and acetaldehyde in ethanol) and hydrochloric acid give a violet colour with cannabinoids. When chloroform is added, the violet colour moves into the lower chloroform layer, the Levine modification that improves specificity. Some plant materials give colour that does not move into the chloroform."
  },
  {
    id: 130,
    question: "Under the NDPS Act schedule of quantities, the 'commercial quantity' of heroin (diacetylmorphine) is",
    options: ["5 g", "50 g", "250 g", "1 kg"],
    answer: 2,
    explanation: "For heroin, small quantity is 5 g and commercial quantity is 250 g. Punishment depends on whether the seized amount is small, intermediate or commercial, so the laboratory's identification and the weight of the seized material are critical. For ganja the thresholds are 1 kg and 20 kg."
  },
  {
    id: 131,
    question: "Medical examination of a person accused of rape by a registered medical practitioner, including collection of material for DNA profiling, is provided for in which section of the BNSS, corresponding to old CrPC Section 53A?",
    options: ["Section 51", "Section 52", "Section 184", "Section 176"],
    answer: 1,
    explanation: "Section 52 BNSS (old 53A CrPC) covers examination of a rape accused, including samples for DNA profiling, and requires the report to be forwarded without delay. Section 51 covers medical examination of an accused generally (old 53), and Section 184 covers examination of the rape victim (old 164A). Section 176 deals with the procedure for investigation."
  },
  {
    id: 132,
    question: "A copy of CCTV footage is produced in court together with a certificate in the format given in the Schedule of the Bharatiya Sakshya Adhiniyam, 2023. Under which section is this certificate required?",
    options: ["Section 39", "Section 57", "Section 63", "Section 85"],
    answer: 2,
    explanation: "Section 63 BSA (old Section 65B of the Indian Evidence Act) governs the admissibility of electronic records and requires a certificate in the Schedule's prescribed format, signed by the person in charge and by an expert. Section 39 deals with expert opinion and Section 57 defines primary evidence. Without a proper certificate, the footage may be held inadmissible."
  },
  {
    id: 133,
    question: "The report of a Government scientific expert, such as an FSL scientist, may be used as evidence without calling the expert to court under which section of the BNSS, corresponding to old CrPC Section 293?",
    options: ["Section 176", "Section 329", "Section 349", "Section 293"],
    answer: 1,
    explanation: "Section 329 BNSS makes reports of listed Government scientific experts admissible in evidence, though the court may summon the expert if needed. The list includes chemical examiners, the Chief Controller of Explosives, Government serologists, and the Director, Deputy Director or Assistant Director of a central or state FSL. Section 293 is the old CrPC number, and Section 349 BNSS deals with orders to give specimen signatures, handwriting, voice or finger impressions."
  },
  {
    id: 134,
    question: "A crime-scene profile with a random match probability of 1 in 100 million is searched against a database of 1,000,000 unrelated profiles. How many adventitious (chance) matches are expected?",
    options: ["0.0001", "0.01", "1", "100"],
    answer: 1,
    explanation: "Expected chance matches = database size × RMP = 10⁶ × 10⁻⁸ = 0.01. The larger the database, the higher the chance of a coincidental hit, which is why database hits are confirmed with a fresh reference sample. Partial profiles with higher RMPs give many more chance hits."
  },
  {
    id: 135,
    question: "Since January 2017, how many core autosomal STR loci have been required for profiles uploaded to the US CODIS National DNA Index System?",
    options: ["13", "15", "20", "24"],
    answer: 2,
    explanation: "The FBI expanded the CODIS core loci from 13 to 20 in January 2017, adding loci such as D1S1656, D2S441, D10S1248, D12S391, D19S433, D22S1045 and D2S1338. The extra loci improve discrimination and compatibility with European databases. Amelogenin is included for sex but is not counted among the 20."
  },
  {
    id: 136,
    question: "For long-term storage of purified DNA extracts in a forensic laboratory, the recommended condition is",
    options: ["room temperature in an open rack", "4 °C in a refrigerator", "37 °C in an incubator", "−20 °C or below in a freezer"],
    answer: 3,
    explanation: "Freezing at −20 °C, or −80 °C for archives, slows nuclease activity and chemical degradation of DNA. Refrigeration at 4 °C is fine for short periods, such as a few weeks of active casework. Repeated freeze-thaw cycles should be avoided, so extracts are often split into aliquots."
  },
  {
    id: 137,
    question: "Blood collected for alcohol estimation in a drunken-driving case should be preserved with",
    options: ["sodium fluoride with potassium oxalate", "EDTA alone", "heparin with sodium citrate", "formalin"],
    answer: 0,
    explanation: "Sodium fluoride (about 1%) inhibits microbial enzymes and glycolysis, which can produce or destroy alcohol in stored blood, while potassium oxalate is the anticoagulant. Alcohol swabs must not be used to clean the skin. The tube should be filled to leave little air space and then sealed."
  },
  {
    id: 138,
    question: "In court, the defence shows that a seized blood sample sat for two days in an unrecorded location before reaching the FSL. Which aspect of evidence handling is being challenged?",
    options: ["Locard's principle", "The validation of the analytical method", "The quality of the reference sample", "The chain of custody"],
    answer: 3,
    explanation: "Chain of custody is the documented, unbroken record of who held the evidence, when and where, from collection to court. A gap allows the defence to argue tampering, substitution or contamination, reducing the weight of the result. Each handover should be signed with date and time on the forwarding memo and seal records."
  },
  {
    id: 139,
    question: "Vaginal and cervical swabs collected in a sexual assault examination should be",
    options: ["sealed wet in plastic tubes immediately", "air-dried at room temperature before packaging in paper", "stored in formalin", "dried in a hot-air oven at 100 °C"],
    answer: 1,
    explanation: "Air-drying in a clean environment stops bacteria and moisture from degrading sperm and DNA. Dried swabs are packed in paper or breathable boxes, labelled, sealed and refrigerated or frozen if there will be a delay. Heat and formalin destroy DNA."
  },
  {
    id: 140,
    question: "A double-strand break made by Cas9 in a cell, when no repair template is supplied, is usually repaired by an error-prone pathway that creates small insertions or deletions. This pathway is",
    options: ["homology-directed repair", "base excision repair", "mismatch repair", "non-homologous end joining"],
    answer: 3,
    explanation: "Non-homologous end joining (NHEJ) ligates broken ends directly and often adds or removes a few bases, which can knock out a gene. Homology-directed repair needs a donor template and allows precise edits. Mismatch and base excision repair fix single-base problems, not double-strand breaks."
  },
  {
    id: 141,
    question: "The SHERLOCK nucleic-acid detection platform, proposed for rapid field identification of pathogens and body fluids, relies on which Cas enzyme's collateral cleavage of RNA reporters?",
    options: ["Cas9", "Cas12a", "Cas13", "Cas3"],
    answer: 2,
    explanation: "SHERLOCK (Specific High-sensitivity Enzymatic Reporter unLOCKing) uses Cas13, which, once activated by its RNA target, cuts nearby reporter RNAs and releases a signal. DETECTR uses Cas12a, which cleaves single-stranded DNA reporters. Both can be read on paper lateral-flow strips."
  },
  {
    id: 142,
    question: "In bacteria and archaea, where it was discovered, the CRISPR-Cas system naturally functions as",
    options: ["an adaptive immune system against phages and plasmids", "a DNA repair system for UV damage", "a regulator of sporulation", "a transposon that spreads antibiotic resistance"],
    answer: 0,
    explanation: "Bacteria store short pieces of invading phage or plasmid DNA as spacers between CRISPR repeats. Transcripts of these spacers guide Cas nucleases to destroy the same invader on re-infection, a heritable adaptive immunity. Researchers adapted this targeting mechanism for genome editing."
  },
  {
    id: 143,
    question: "In a BLAST search of an unknown sequence, which hit is the most statistically significant?",
    options: ["The hit with E-value 0.5", "The hit with E-value 1 × 10⁻⁵⁰", "The hit with E-value 10", "The hit with E-value 1"],
    answer: 1,
    explanation: "The E-value is the number of hits with that score expected by chance in a database of that size. The closer it is to zero, the less likely the match is random, so 10⁻⁵⁰ is highly significant. An E-value of 1 or more means a match that good is expected by chance."
  },
  {
    id: 144,
    question: "In the FASTA sequence format used by GenBank and BLAST, the header line of each sequence begins with which character?",
    options: ["> (greater-than sign)", "@ (at sign)", "# (hash sign)", "// (double slash)"],
    answer: 0,
    explanation: "A FASTA record starts with '>' followed by an identifier and description, then the sequence on the next lines. FASTQ files from NGS instruments begin each record with '@' and include per-base quality scores. '//' marks the end of a GenBank flat-file record."
  },
  {
    id: 145,
    question: "EMPOP, maintained at Innsbruck and used by forensic laboratories worldwide, is a quality-controlled database of",
    options: ["Y-STR haplotypes", "protein structures", "autosomal STR allele frequencies", "mitochondrial DNA sequences"],
    answer: 3,
    explanation: "EMPOP (EDNAP mtDNA Population Database) holds mtDNA control-region and whole-mitogenome haplotypes, which are used to estimate how common an mtDNA type is. Y-STR haplotypes are held in YHRD, and STR sequence and allele information in NIST's STRBase. Protein structures are in the PDB."
  },
  {
    id: 146,
    question: "Trypsin cleaves on the C-terminal side of lysine (K) and arginine (R), except when followed by proline. How many peptides will complete digestion of the peptide GASPKLVTRAEK produce?",
    options: ["2", "5", "4", "3"],
    answer: 3,
    explanation: "Cleavage occurs after K at position 5 and after R at position 9, giving GASPK, LVTR and AEK. The final K is at the C-terminus, so no further peptide is produced. Neither K nor R here is followed by proline, so both sites are cut."
  },
  {
    id: 147,
    question: "In two-dimensional gel electrophoresis (2D-PAGE) of a protein extract, proteins are separated in the first dimension by ______ and in the second by ______.",
    options: ["molecular mass; isoelectric point", "isoelectric point; molecular mass", "hydrophobicity; charge", "charge; hydrophobicity"],
    answer: 1,
    explanation: "The first dimension is isoelectric focusing on an immobilised pH gradient strip, separating proteins by pI. The strip is then laid on an SDS-PAGE gel, separating by molecular mass. Spots of interest can be cut out, digested and identified by mass spectrometry."
  },
  {
    id: 148,
    question: "LC-MS/MS identifies peptides covering 120 amino acids of a 400-residue protein. What is the sequence coverage?",
    options: ["30%", "12%", "40%", "70%"],
    answer: 0,
    explanation: "Coverage = 120 ÷ 400 × 100 = 30%. Higher coverage gives more confidence in protein identification and can reveal variants or modifications. Some regions are rarely covered because tryptic peptides there are too short, too long or ionise poorly."
  },
  {
    id: 149,
    question: "In proteomic body-fluid identification by LC-MS/MS, detection of statherin and histatins in a stain indicates",
    options: ["saliva", "semen", "menstrual blood", "urine"],
    answer: 0,
    explanation: "Statherin and histatins are secreted by the salivary glands and are much more specific than amylase. Semenogelin and PSA indicate semen, and uromodulin (Tamm-Horsfall protein) indicates urine. Mass spectrometry can detect several such markers in one run."
  },
  {
    id: 150,
    question: "The National Crime Records Bureau, which publishes the annual 'Crime in India' report, was set up in",
    options: ["1976", "1986", "1996", "2006"],
    answer: 1,
    explanation: "NCRB was established in 1986 under the Ministry of Home Affairs, on the recommendations of the Tandon Committee and the National Police Commission. It also manages the Crime and Criminal Tracking Network and Systems (CCTNS) and national fingerprint records. 'Crime in India' is the standard source of state-wise crime statistics."
  }
];

export default questions;

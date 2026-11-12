const questions = [
  {
    id: 1,
    question: "The Jhanda (Flag) Satyagraha of 1923, which later spread to Nagpur, began when volunteers insisted on hoisting the national flag at the Town Hall of which city?",
    options: ["Jabalpur", "Indore", "Gwalior", "Sagar"],
    answer: 0,
    explanation: "In March 1923 the Jabalpur Municipal Committee resolved to hoist the tricolour on the Town Hall, and the British administration stopped it. Local Congress volunteers, with the poet Subhadra Kumari Chauhan among the first women to court arrest, defied the ban. The movement then shifted to Nagpur and ended in a negotiated settlement in August 1923."
  },
  {
    id: 2,
    question: "The Turia Jungle Satyagraha of October 1930, in which tribal protesters were fired upon for defying forest laws, took place in which district?",
    options: ["Betul", "Mandla", "Seoni", "Dindori"],
    answer: 2,
    explanation: "At Turia in Seoni district, during the Civil Disobedience Movement, villagers cut grass in reserved forests to break the forest laws. Police fired on 9 October 1930, killing four people including three tribal women. In Betul, a similar Jungle Satyagraha was led by Ganjan Singh Korku."
  },
  {
    id: 3,
    question: "Saadat Khan, who led the attack on the British Residency at Indore on 1 July 1857, was a commander in the forces of:",
    options: ["Scindia of Gwalior", "The Holkar state of Indore", "The Nawab of Bhopal", "The Raja of Dhar"],
    answer: 1,
    explanation: "Saadat Khan served in the army of Tukoji Rao Holkar II. On 1 July 1857 he led the attack on the Indore Residency, forcing Resident Henry Durand to withdraw to Sehore, although the Maharaja himself did not join the revolt. Saadat Khan was later captured and hanged at Indore in 1874."
  },
  {
    id: 4,
    question: "Tantya Bhil, the Nimar rebel remembered as the \"Indian Robin Hood\", was hanged by the British in 1889 at:",
    options: ["Indore", "Khandwa", "Mhow", "Jabalpur"],
    answer: 3,
    explanation: "Tantya Bhil led a long resistance in the Nimar and Satpura forests, raiding the rich and helping the poor. He was arrested in 1888, tried at Jabalpur and hanged there on 4 December 1889. In 2021 Patalpani railway station near Mhow was named after him."
  },
  {
    id: 5,
    question: "Rani Avantibai Lodhi, who raised an army against the British in 1857 and took her own life rather than surrender, ruled which estate?",
    options: ["Ramgarh", "Jhansi", "Shahgarh", "Banpur"],
    answer: 0,
    explanation: "Avantibai was the queen of Ramgarh, in present-day Dindori district (then Mandla). She fought the British in 1857–58 and, when surrounded at Devhargarh in March 1858, killed herself with her sword. The Bargi dam on the Narmada is officially named Rani Avantibai Lodhi Sagar Project."
  },
  {
    id: 6,
    question: "In 1918 Mahatma Gandhi presided over the session of the Hindi Sahitya Sammelan in which city of present-day Madhya Pradesh, where he backed Hindi as the national language?",
    options: ["Jabalpur", "Gwalior", "Indore", "Bhopal"],
    answer: 2,
    explanation: "Gandhi presided over the Akhil Bharatiya Hindi Sahitya Sammelan at Indore in 1918 and urged that Hindi (Hindustani) be adopted as the national language. The idea of sending Hindi teachers to the south, which led to the Dakshin Bharat Hindi Prachar Sabha, came from this session. He presided over the Sammelan at Indore again in 1935."
  },
  {
    id: 7,
    question: "Who was the last ruling Nawab of Bhopal, whose state finally merged with the Indian Union in June 1949?",
    options: ["Sultan Jahan Begum", "Shah Jahan Begum", "Dost Mohammad Khan", "Hamidullah Khan"],
    answer: 3,
    explanation: "Nawab Hamidullah Khan ruled Bhopal from 1926 and resisted joining India after 1947. After the Vilinikaran (merger) movement, including the Bori firing of January 1949, Bhopal merged with the Union on 1 June 1949 and became a Chief Commissioner's province. Dost Mohammad Khan founded the state in the early 18th century."
  },
  {
    id: 8,
    question: "The Revolt of 1857 in present-day Madhya Pradesh began on 3 June 1857 with the rising of sepoys at which cantonment?",
    options: ["Mhow", "Neemuch", "Sagar", "Gwalior"],
    answer: 1,
    explanation: "The first outbreak of the Revolt in the region was at Neemuch cantonment on 3 June 1857, after which the rising spread to Mandsaur, Gwalior, Indore and Mhow. At Mandsaur, Firoz Shah proclaimed himself ruler later in 1857. Gwalior's Scindia ruler stayed loyal to the British, though his troops joined the rebels."
  },
  {
    id: 9,
    question: "Kunwar Chain Singh of Narsinghgarh, often called the first martyr of Madhya Pradesh's struggle against British rule, fell fighting the Company's forces in 1824 at:",
    options: ["Sehore", "Raisen", "Rajgarh", "Vidisha"],
    answer: 0,
    explanation: "Kunwar Chain Singh, heir of Narsinghgarh state, refused to accept British demands and was killed in a fight with Company troops at Sehore on 24 July 1824. His memorial stands in Sehore. He is remembered as one of the earliest martyrs of the region, decades before 1857."
  },
  {
    id: 10,
    question: "Raja Shankar Shah and his son Raghunath Shah, executed in 1857, were descendants of which ruling house?",
    options: ["Bundelas of Orchha", "Holkars of Indore", "Gond kings of Garha-Mandla", "Paramaras of Malwa"],
    answer: 2,
    explanation: "Raja Shankar Shah and Kunwar Raghunath Shah belonged to the Gond royal line of Garha-Mandla, the dynasty of Sangram Shah and Rani Durgavati. They were blown from cannon at Jabalpur on 18 September 1857 for writing poems calling for revolt. Their Balidan Diwas is observed on 18 September."
  },
  {
    id: 11,
    question: "After leaving Madhya Pradesh, the Narmada forms the boundary between MP and which state for a short stretch before entering Gujarat?",
    options: ["Rajasthan", "Maharashtra", "Chhattisgarh", "Uttar Pradesh"],
    answer: 1,
    explanation: "Below the Alirajpur–Barwani area, the Narmada first forms the MP–Maharashtra boundary and then the Maharashtra–Gujarat boundary before flowing through Gujarat to the Gulf of Khambhat. Of its roughly 1,312 km length, about 1,077 km lies in Madhya Pradesh. The Sardar Sarovar dam is just inside Gujarat."
  },
  {
    id: 12,
    question: "The Banjar and Halon rivers, tributaries of the Narmada, drain which national park of Madhya Pradesh?",
    options: ["Pench", "Bandhavgarh", "Satpura", "Kanha"],
    answer: 3,
    explanation: "Kanha National Park in Mandla and Balaghat districts lies in the valleys of the Banjar and Halon, both of which flow into the Narmada. Its sal forests and grassy maidans support the hard-ground barasingha and tigers. Pench is drained by the Pench river of the Godavari system."
  },
  {
    id: 13,
    question: "The Pench river, which divides Pench Tiger Reserve into eastern and western parts, belongs to which river system?",
    options: ["Godavari", "Narmada", "Ganga", "Mahanadi"],
    answer: 0,
    explanation: "The Pench rises in the Satpura hills of Chhindwara and flows south into the Kanhan, which joins the Wainganga, a major tributary of the Godavari. Pench Tiger Reserve lies in Seoni and Chhindwara districts, and the landscape is linked with Kipling's The Jungle Book."
  },
  {
    id: 14,
    question: "The Kshipra river, on whose banks the Mahakaleshwar temple and the Simhastha fair are located, is a tributary of which river?",
    options: ["Narmada", "Betwa", "Chambal", "Mahi"],
    answer: 2,
    explanation: "The Kshipra rises in the Kakri Bardi hills near Indore, flows north through Ujjain and joins the Chambal. Because its own flow is low in summer, Narmada water has been lifted into it through the Narmada–Kshipra link since 2014. The Simhastha is next due at Ujjain in 2028."
  },
  {
    id: 15,
    question: "Which river, rising on the Malwa plateau in Vidisha district, flows north through Datia and Bhind to join the Yamuna?",
    options: ["Dhasan", "Kunwari", "Pahuj", "Sindh"],
    answer: 3,
    explanation: "The Sindh rises near Sironj in Vidisha district and flows north through Guna, Shivpuri, Datia and Bhind before joining the Yamuna near the UP border. The Kunwari and Pahuj also join near the same confluence, while the Dhasan is a tributary of the Betwa."
  },
  {
    id: 16,
    question: "Which river rising at Amarkantak flows north and joins the Son?",
    options: ["Rihand", "Johila", "Gopad", "Banas"],
    answer: 1,
    explanation: "The Johila rises at Amarkantak in the Maikal hills, close to the sources of the Narmada and the Son, and flows north to join the Son in the Shahdol–Umaria area. The Rihand rises in Chhattisgarh, and the Gopad and Banas join the Son from other uplands."
  },
  {
    id: 17,
    question: "The unfinished Bhojeshwar Shiva temple at Bhojpur, with one of the largest monolithic lingas in India, stands on the bank of which river?",
    options: ["Betwa", "Narmada", "Parbati", "Kaliasot"],
    answer: 0,
    explanation: "The Bhojeshwar temple at Bhojpur in Raisen district, attributed to the Paramara king Raja Bhoj, stands above the Betwa. Its linga is about 7.5 feet high on a large platform, and unfinished construction drawings are engraved on the nearby rocks. Raja Bhoj also built a large dam on the Betwa here, now breached."
  },
  {
    id: 18,
    question: "The Wardha river, an important tributary in the Godavari basin, rises in which district of Madhya Pradesh?",
    options: ["Chhindwara", "Seoni", "Betul", "Balaghat"],
    answer: 2,
    explanation: "The Wardha rises in the Satpura hills near Multai in Betul district and flows south into Maharashtra, where it joins the Wainganga to form the Pranhita, a tributary of the Godavari. The Tapti also rises at Multai but flows west. The Wainganga rises in Seoni district."
  },
  {
    id: 19,
    question: "Which of the following correctly lists dams on the main stream of the Narmada from upstream to downstream?",
    options: ["Indira Sagar – Bargi – Omkareshwar – Maheshwar", "Bargi – Omkareshwar – Indira Sagar – Sardar Sarovar", "Bargi – Maheshwar – Indira Sagar – Omkareshwar", "Bargi – Indira Sagar – Omkareshwar – Maheshwar"],
    answer: 3,
    explanation: "Going downstream, the Bargi dam near Jabalpur is followed by Indira Sagar at Punasa and Omkareshwar, both in Khandwa district, then Maheshwar in Khargone district, and finally Sardar Sarovar in Gujarat. The Tawa dam is on the Tawa tributary, not the main Narmada."
  },
  {
    id: 20,
    question: "Pachnada, near the Madhya Pradesh–Uttar Pradesh border beyond Bhind, is the confluence of how many rivers?",
    options: ["Three", "Four", "Five", "Seven"],
    answer: 2,
    explanation: "Pachnada (\"five rivers\") is where the Chambal, Sindh, Kunwari and Pahuj meet the Yamuna, in Etawah–Jalaun area just beyond Bhind district. It is regarded as a rare five-river confluence. The Chambal and Sindh are the largest of the four rivers joining the Yamuna here."
  },
  {
    id: 21,
    question: "Madhya Pradesh is widely credited as the first state to hold elections to all three tiers of Panchayats under the 73rd Constitutional Amendment. In which year were these held?",
    options: ["1992", "1994", "1996", "1999"],
    answer: 1,
    explanation: "After enacting the Madhya Pradesh Panchayat Raj Adhiniyam in 1993, the state held elections to gram, janpad and zila panchayats in 1994, the first state to do so under the 73rd Amendment. The Amendment itself came into force on 24 April 1993. The Act was later renamed the Panchayat Raj Avam Gram Swaraj Adhiniyam."
  },
  {
    id: 22,
    question: "Which office-bearer of a Gram Panchayat in Madhya Pradesh is chosen directly by all the voters of the panchayat area, rather than by the elected members?",
    options: ["Up-Sarpanch", "Panchayat Secretary", "Gram Rozgar Sahayak", "Sarpanch"],
    answer: 3,
    explanation: "Under the MP Panchayat Raj Avam Gram Swaraj Adhiniyam, 1993, the Sarpanch is elected directly by the voters of the gram panchayat area, while the Up-Sarpanch is chosen by the Panches from among themselves. The Secretary is a government-appointed functionary. Article 243C lets each state decide how chairpersons are elected."
  },
  {
    id: 23,
    question: "What proportion of seats and chairperson posts in Panchayati Raj Institutions does Madhya Pradesh reserve for women?",
    options: ["One-third", "One-half", "One-fourth", "Two-fifths"],
    answer: 1,
    explanation: "Article 243D requires at least one-third reservation for women, but Madhya Pradesh raised this to 50% of seats and chairperson posts in PRIs through an amendment in 2008, one of the first states to do so. This includes seats reserved for SC and ST women."
  },
  {
    id: 24,
    question: "National Panchayati Raj Day, marking the coming into force of the 73rd Constitutional Amendment, is observed on:",
    options: ["24 April", "2 October", "26 November", "15 November"],
    answer: 0,
    explanation: "The 73rd Constitutional Amendment Act, 1992 came into force on 24 April 1993, adding Part IX and the Eleventh Schedule to the Constitution. National Panchayati Raj Day has been celebrated on 24 April since 2010. 26 November is Constitution Day, and 15 November is Janjatiya Gaurav Diwas."
  },
  {
    id: 25,
    question: "How many subjects are listed in the Eleventh Schedule, which may be entrusted to Panchayats?",
    options: ["18", "22", "29", "12"],
    answer: 2,
    explanation: "The Eleventh Schedule, added by the 73rd Amendment, lists 29 subjects such as agriculture, minor irrigation, drinking water, primary education and poverty alleviation. The Twelfth Schedule, added by the 74th Amendment, lists 18 subjects for municipalities. Article 243G links Panchayat powers to the Eleventh Schedule."
  },
  {
    id: 26,
    question: "Under Article 243I, the State Finance Commission that reviews the finances of Panchayats is constituted by the Governor every:",
    options: ["Two years", "Three years", "Ten years", "Five years"],
    answer: 3,
    explanation: "Article 243I requires the Governor to set up a State Finance Commission every five years to recommend how state taxes, duties and grants should be shared with Panchayats. Article 243Y extends the same commission to municipalities. Its report is laid before the state legislature with an action-taken memorandum."
  },
  {
    id: 27,
    question: "What is the minimum age to contest an election to a Panchayat?",
    options: ["21 years", "18 years", "25 years", "30 years"],
    answer: 0,
    explanation: "Article 243F provides that a person who is qualified for election to the state legislature can contest Panchayat elections, except that no one under 21 years of age is disqualified on the ground of age. In practice, 21 years is the minimum age for Panchayat candidates. The voting age is 18."
  },
  {
    id: 28,
    question: "Which Article of the Constitution provides for reservation of seats for Scheduled Castes, Scheduled Tribes and women in Panchayats?",
    options: ["Article 243B", "Article 243D", "Article 243E", "Article 243C"],
    answer: 1,
    explanation: "Article 243D provides reservation for SCs and STs in proportion to their population, at least one-third for women, and reservation of chairperson posts. Article 243B deals with the constitution of Panchayats, 243C with their composition, and 243E with their five-year duration."
  },
  {
    id: 29,
    question: "Which Article of the Constitution deals with the Gram Sabha, allowing it to exercise powers and functions as the state legislature may provide?",
    options: ["Article 243G", "Article 243C", "Article 243A", "Article 243B"],
    answer: 2,
    explanation: "Article 243A says a Gram Sabha may exercise such powers and perform such functions at the village level as the state legislature may provide by law. The Gram Sabha consists of all registered voters of the village. In MP, its role is especially strong in Scheduled Areas under the PESA rules."
  },
  {
    id: 30,
    question: "The Bhavantar Bhugtan Yojana, introduced by Madhya Pradesh in 2017, was designed to:",
    options: ["Waive farm loans up to ₹2 lakh", "Provide free electricity to farmers", "Give crop insurance against hailstorms", "Pay farmers the difference when mandi prices fell below the MSP or modal price"],
    answer: 3,
    explanation: "Bhavantar Bhugtan Yojana was a price-deficiency payment scheme: when registered farmers sold notified crops such as soybean, maize and pulses below the MSP, the state paid the difference between the MSP (or modal price) and the sale price into their accounts. It aimed to protect income without physical government procurement."
  },
  {
    id: 31,
    question: "At Orchha, where Lord Rama is worshipped as a king and given a guard of honour, the Ram Raja temple lies in which district?",
    options: ["Tikamgarh", "Chhatarpur", "Niwari", "Datia"],
    answer: 2,
    explanation: "Orchha, on the Betwa, lies in Niwari district, which was carved out of Tikamgarh in 2018. At the Ram Raja temple, Rama is treated as the reigning king and receives a daily police salute. Orchha was the capital of the Bundela rulers, who built the Jahangir Mahal and the Chaturbhuj temple there."
  },
  {
    id: 32,
    question: "Chanderi sarees, woven from fine silk and cotton with zari butis and a GI tag, are made in which district?",
    options: ["Guna", "Ashoknagar", "Vidisha", "Shivpuri"],
    answer: 1,
    explanation: "Chanderi is a town in Ashoknagar district, which was carved out of Guna in 2003. Its handloom sarees are known for their sheer texture, gold and silver zari and traditional motifs such as coins and peacocks. Chanderi fabric received a Geographical Indication tag in 2005."
  },
  {
    id: 33,
    question: "The seven-storeyed palace at Datia, built in 1614 without any royal family ever living in it, was built by:",
    options: ["Chhatrasal", "Rudra Pratap Singh", "Man Singh Tomar", "Bir Singh Deo Bundela"],
    answer: 3,
    explanation: "The Datia palace (Govind Mahal or Bir Singh Palace) was built by Bir Singh Deo Bundela of Orchha, a friend of Jahangir, around 1614. It is a fine example of Bundela architecture combining Rajput and Mughal styles. Rudra Pratap founded Orchha, and Chhatrasal founded the Panna kingdom."
  },
  {
    id: 34,
    question: "Maharaja Chhatrasal, who founded an independent Bundela kingdom with its capital at Panna, sought help against the Mughal governor Muhammad Khan Bangash from:",
    options: ["Peshwa Baji Rao I", "Chhatrapati Shivaji", "Mahadji Scindia", "Malhar Rao Holkar"],
    answer: 0,
    explanation: "In 1728–29 Chhatrasal, besieged by Muhammad Khan Bangash, appealed to Peshwa Baji Rao I, who came to his rescue. In gratitude Chhatrasal gave him a third of his territory and, by tradition, Mastani was his daughter. Earlier, Chhatrasal had met Shivaji, who encouraged him to fight the Mughals."
  },
  {
    id: 35,
    question: "Alha, the heroic ballad of the warrior brothers Alha and Udal of Mahoba sung during the monsoon, is a folk tradition of which region?",
    options: ["Malwa", "Nimar", "Bundelkhand", "Baghelkhand"],
    answer: 2,
    explanation: "The Alha-Khand ballads tell of Alha and Udal, generals of the Chandela king Parmardi of Mahoba, and their battles with Prithviraj Chauhan. They are sung loudly to the dholak in the rainy season across Bundelkhand, including Chhatarpur, Tikamgarh and Panna. Jagnik is the traditional author."
  },
  {
    id: 36,
    question: "The Gond ruler of Garha-Mandla who expanded the kingdom to fifty-two garhs (forts) and whose son married Rani Durgavati was:",
    options: ["Dalpat Shah", "Hirde Shah", "Shankar Shah", "Sangram Shah"],
    answer: 3,
    explanation: "Sangram Shah (early 16th century) made Garha-Mandla a powerful kingdom of 52 garhs and issued gold coins. His son Dalpat Shah married Durgavati, the Chandela princess. Hirde Shah was a 17th-century ruler who built palaces at Ramnagar, and Shankar Shah was executed by the British in 1857."
  },
  {
    id: 37,
    question: "Rani Roopmati's Pavilion at Mandu was built at the southern edge of the plateau, traditionally so that the queen could view which river before her morning prayers?",
    options: ["Narmada", "Chambal", "Mahi", "Kshipra"],
    answer: 0,
    explanation: "According to legend, Roopmati, the singer-queen of Sultan Baz Bahadur, would not eat until she had seen the Narmada, so the pavilion was built on the southern scarp of Mandu overlooking the Nimar plains. Their romance ended when Akbar's general Adham Khan conquered Malwa in 1561."
  },
  {
    id: 38,
    question: "Historians of mathematics cite a 9th-century inscription in a small rock-cut Vishnu temple at Gwalior Fort as one of the earliest dated written uses of zero. Which temple is it?",
    options: ["Teli ka Mandir", "Chaturbhuj temple", "Sas-Bahu (Sahastrabahu) temple", "Suraj Kund shrine"],
    answer: 1,
    explanation: "The Chaturbhuj temple at Gwalior Fort has inscriptions dated 876 CE that write the numbers 270 and 50 using a small circle for zero. It belongs to the Gurjara-Pratihara period. Teli ka Mandir is the tall temple with a barrel-vaulted roof, and the Sas-Bahu temples were built by the Kachchhapaghatas in the 11th century."
  },
  {
    id: 39,
    question: "Man Kutuhal, a treatise on Dhrupad music, was composed under the patronage of which ruler?",
    options: ["Baz Bahadur", "Akbar", "Raja Bhoj", "Raja Man Singh Tomar"],
    answer: 3,
    explanation: "Raja Man Singh Tomar of Gwalior (r. 1486–1516) was a great patron of Dhrupad, and the Man Kutuhal compiled under him codified this style. Gwalior became the cradle of Dhrupad, and Tansen trained in this tradition. The Gwalior gharana of khayal developed later."
  },
  {
    id: 40,
    question: "The Vedh Shala (Jantar Mantar) observatory at Ujjain was built in the early 18th century by:",
    options: ["Sawai Jai Singh II", "Mahadji Scindia", "Raja Bhoj", "Ahilyabai Holkar"],
    answer: 0,
    explanation: "Maharaja Sawai Jai Singh II of Jaipur, who was governor of Malwa under the Mughals, built the Ujjain observatory in the early 18th century, one of five he set up along with Delhi, Jaipur, Mathura and Varanasi. Ujjain was chosen because Indian astronomers placed the prime meridian there. The Tropic of Cancer also passes near the city."
  },
  {
    id: 41,
    question: "Madhya Pradesh held its state-level launch of the VB-G RAM G rural employment mission, which replaced MGNREGA from 1 July 2026, in which city?",
    options: ["Bhopal", "Jabalpur", "Indore", "Rewa"],
    answer: 1,
    explanation: "The Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin) Act, 2025 replaced MGNREGA from 1 July 2026 and raised the guarantee to 125 days of wage work a year, with states sharing the cost. MP's state-level launch event was held at Jabalpur in early July 2026, with programmes in all districts."
  },
  {
    id: 42,
    question: "While launching the Krishak Kalyan Varsh on 11 January 2026, the Madhya Pradesh government announced a millet research centre for which tribal district?",
    options: ["Mandla", "Jhabua", "Sheopur", "Dindori"],
    answer: 3,
    explanation: "CM Mohan Yadav launched 2026 as Krishak Kalyan Varsh (Farmer Welfare Year) with a rally of 1,101 tractors at Jamboree Maidan, Bhopal, on 11 January 2026. A millet research centre was announced for Dindori, where kodo and kutki are traditional crops. Sixteen departments were assigned to work together during the year."
  },
  {
    id: 43,
    question: "Which statement about the Madhya Pradesh Budget for 2026–27, presented on 18 February 2026, is correct?",
    options: ["It was presented by Chief Minister Mohan Yadav", "Its total outlay was below ₹3 lakh crore", "It was presented in paperless form and proposed no new taxes", "It was the state's first budget after the introduction of GST"],
    answer: 2,
    explanation: "Deputy CM and Finance Minister Jagdish Devda presented the 2026–27 budget on 18 February 2026 in paperless form, with a total outlay of about ₹4.38 lakh crore and no new taxes. GST was introduced in 2017, so this was far from the first post-GST budget."
  },
  {
    id: 44,
    question: "In Madhya Pradesh, the door-to-door houselisting operation of Census 2027 was carried out during which period?",
    options: ["January 2026", "May 2026", "September 2026", "February 2027"],
    answer: 1,
    explanation: "Census 2027 is India's first digital census. In MP, residents could self-enumerate online from 16 to 30 April 2026, and enumerators then carried out houselisting from 1 to 30 May 2026 using a mobile app. The second phase, population enumeration, is scheduled for February 2027."
  },
  {
    id: 45,
    question: "The 2026 Nobel Prize in Chemistry honoured Henri Kagan and Kenso Soai for work on reactions that produce one mirror-image form of a molecule. Such molecules are described as:",
    options: ["Chiral", "Isotopic", "Allotropic", "Amphoteric"],
    answer: 0,
    explanation: "The prize, announced on 7 October 2026, was for the discovery of non-linear effects and autocatalysis in asymmetric organic synthesis. Chiral molecules exist as non-superimposable mirror images (enantiomers), like left and right hands. This matters for drugs, since one enantiomer can be useful and the other harmful, as with thalidomide."
  },
  {
    id: 46,
    question: "Which sequence correctly lists the Madhya Pradesh sites where cheetahs were released, from earliest to latest?",
    options: ["Gandhi Sagar → Kuno → Veerangana Durgavati", "Kuno → Veerangana Durgavati → Gandhi Sagar", "Veerangana Durgavati → Kuno → Gandhi Sagar", "Kuno → Gandhi Sagar → Veerangana Durgavati"],
    answer: 3,
    explanation: "Project Cheetah began at Kuno National Park on 17 September 2022. Gandhi Sagar Wildlife Sanctuary became the second home in April 2025. On 7 October 2026, two cheetahs were released in Veerangana Durgavati (Nauradehi) Tiger Reserve, spread over Sagar, Damoh and Narsinghpur, making it the state's third cheetah habitat."
  },
  {
    id: 47,
    question: "Under the Digital Personal Data Protection Act, 2023, which body inquires into personal data breaches and imposes penalties?",
    options: ["CERT-In", "Data Protection Board of India", "Telecom Regulatory Authority of India", "Cyber Appellate Tribunal"],
    answer: 1,
    explanation: "The DPDP Act, 2023 sets up the Data Protection Board of India to inquire into breaches, direct remedial action and impose penalties of up to ₹250 crore. Appeals from the Board go to the Telecom Disputes Settlement and Appellate Tribunal. CERT-In handles cyber security incidents under Section 70B of the IT Act."
  },
  {
    id: 48,
    question: "Under the Information Technology Act, 2000, which section deals with cyber terrorism and carries a maximum punishment of life imprisonment?",
    options: ["Section 66B", "Section 67", "Section 66F", "Section 72"],
    answer: 2,
    explanation: "Section 66F punishes acts such as denying access to or penetrating computer resources with intent to threaten the unity, security or sovereignty of India, with imprisonment that may extend to life. Section 66B deals with receiving stolen computer resources, 67 with obscene electronic material, and 72 with breach of confidentiality."
  },
  {
    id: 49,
    question: "Deepfake videos are often produced with a model in which two neural networks compete: one creates fake content and the other tries to tell it from real data. This model is called a:",
    options: ["Generative adversarial network", "Decision tree", "Support vector machine", "Expert system"],
    answer: 0,
    explanation: "A generative adversarial network (GAN), introduced by Ian Goodfellow in 2014, pairs a generator that makes synthetic images with a discriminator that judges them. As they train against each other, the fakes become very realistic. Forensic deepfake detection looks for artefacts in blinking, lighting, lip-sync and compression."
  },
  {
    id: 50,
    question: "Before making a forensic image of a seized hard disk, the examiner connects it through a device that allows reading but prevents any data from being written to it. This device is a:",
    options: ["Network firewall", "Router", "Uninterruptible power supply", "Write blocker"],
    answer: 3,
    explanation: "A hardware or software write blocker lets the examiner read and image the evidence drive while blocking any write commands, so the original is not altered. The image and original are then verified by matching hash values. This protects the integrity of electronic evidence admitted under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023."
  },
  {
    id: 51,
    question: "In a homicide, several head hairs are found clutched in the victim's fist. They have roots with a translucent sheath of tissue attached. What does this most likely indicate, and what analysis suits them best?",
    options: ["Naturally shed telogen hairs; mtDNA only", "Hairs of animal origin; species testing", "Forcibly removed anagen hairs; nuclear STR typing", "Burnt hairs; no DNA analysis possible"],
    answer: 2,
    explanation: "Hairs pulled out during a struggle are usually in the anagen (growing) phase and often carry a follicular sheath rich in nucleated cells, so nuclear STR profiling is likely to succeed. Telogen hairs shed naturally have club roots with little nuclear DNA and usually need mtDNA analysis. The hairs may have come from the assailant."
  },
  {
    id: 52,
    question: "In a hit-and-run case, a single shed head hair without root tissue is found wedged in the grille of a suspect vehicle. Which DNA test is most likely to give a result?",
    options: ["Autosomal STR typing of the shaft", "Y-STR typing of the shaft", "RFLP analysis", "Mitochondrial DNA sequencing"],
    answer: 3,
    explanation: "Hair shafts contain keratinised cells with very little nuclear DNA, but many copies of mitochondrial DNA survive. Sequencing the HV1/HV2 regions can then be compared with a reference from the victim or a maternal relative. RFLP needs large amounts of intact DNA, and Y-STRs are nuclear markers."
  },
  {
    id: 53,
    question: "A bloodstain on a wall is 5 mm wide and 10 mm long. What was the approximate angle of impact of the drop?",
    options: ["30°", "45°", "60°", "27°"],
    answer: 0,
    explanation: "The impact angle is found from sin θ = width ÷ length = 5 ÷ 10 = 0.5, so θ = 30°. A circular stain (width equal to length) indicates a 90° impact. Angles from several stains are combined to locate the area of origin of the bloodshed."
  },
  {
    id: 54,
    question: "At a murder scene, a linear trail of small blood drops runs across the ceiling above the body. This pattern most likely resulted from:",
    options: ["Arterial spurting", "Passive dripping from a wound", "Expirated blood from the mouth", "Cast-off from a swinging bloodied weapon"],
    answer: 3,
    explanation: "Cast-off patterns form when blood flies off a weapon as it is swung back between blows, leaving lines of drops on ceilings and walls. The number of trails can suggest the minimum number of blows after the first. Arterial spurts form large arcing or zigzag patterns, and passive drops fall straight down under gravity."
  },
  {
    id: 55,
    question: "A gunshot victim's clothing and nearby wall show a fine mist of blood droplets mostly less than 1 mm across. This is best classified as:",
    options: ["Low-velocity passive drops", "Medium-velocity impact spatter", "Transfer pattern", "High-velocity impact spatter"],
    answer: 3,
    explanation: "High-velocity impact spatter, typically below 1 mm, is produced by gunshots and high-speed machinery, creating a mist-like pattern. Medium-velocity spatter (1–4 mm) is typical of beatings with blunt objects, and passive drops are 4 mm or larger. Back-spatter can be found on the shooter's hand and the weapon."
  },
  {
    id: 56,
    question: "How does the potassium concentration in the vitreous humour behave after death, which allows it to be used to estimate the post-mortem interval?",
    options: ["It falls rapidly to zero within a few hours", "It stays constant for several days", "It rises roughly linearly with time", "It rises at first and then falls"],
    answer: 2,
    explanation: "After death, potassium leaks out of retinal and other cells into the vitreous, so its level rises in a roughly linear way over several days. The vitreous is well protected from contamination and putrefaction. Temperature and the method of sampling affect the rate, so the estimate has a wide range."
  },
  {
    id: 57,
    question: "Maggots collected from a decomposing body for PMI estimation should be preserved by:",
    options: ["Blanching in near-boiling water and then storing in 70–80% ethanol", "Placing them directly in 10% formalin", "Sealing them in a plastic bag in the refrigerator", "Drying them in sunlight"],
    answer: 0,
    explanation: "Killing larvae in hot water straightens them and fixes their length, after which they are stored in 70–80% ethanol for measurement. Putting live larvae straight into alcohol or formalin makes them shrink or blacken, giving wrong age estimates. A separate batch is reared alive to identify the species."
  },
  {
    id: 58,
    question: "A blowfly species needs 180 accumulated degree days (ADD) above a base temperature of 10 °C to reach the post-feeding stage found on a body. If the mean daily temperature was 28 °C, about how many days ago were the eggs laid?",
    options: ["6.4 days", "7.5 days", "18 days", "10 days"],
    answer: 3,
    explanation: "Each day contributes 28 − 10 = 18 degree days. Time = 180 ÷ 18 = 10 days. Dividing by the mean temperature alone (180 ÷ 28 = 6.4) is a common mistake because the base temperature has not been subtracted."
  },
  {
    id: 59,
    question: "During the medical examination of a sexual-assault victim, combing the pubic hair onto a clean paper sheet is done mainly to recover:",
    options: ["The victim's own hairs for drug testing", "Epithelial cells for the victim's reference profile", "Spermatozoa for counting", "Hairs and fibres transferred from the assailant"],
    answer: 3,
    explanation: "Pubic combings can carry the assailant's loose hairs, fibres and other trace material transferred during the assault. The comb and paper are folded together and sealed. Reference hairs from the victim are collected separately for comparison, and vaginal swabs are taken for semen."
  },
  {
    id: 60,
    question: "On histological examination, a bone fragment shows plexiform (laminar) bone instead of scattered osteons. This suggests that the bone is:",
    options: ["Human, from an elderly adult", "Human, from a child", "Probably from a large non-human mammal such as cattle", "Burnt human bone"],
    answer: 2,
    explanation: "Plexiform or laminar bone, with layers of bone around a regular network of vessels, is common in fast-growing large mammals such as cattle, sheep and pigs. Adult human cortical bone is made of scattered Haversian systems (osteons). Bone histology helps when fragments are too small for gross identification."
  },
  {
    id: 61,
    question: "To estimate living stature from the length of a femur recovered from skeletal remains, an anthropologist uses:",
    options: ["Henssge's nomogram", "Moorrees' dental staging", "Gustafson's method", "Regression formulae such as those of Trotter and Gleser"],
    answer: 3,
    explanation: "Stature is estimated from long bone lengths using regression equations, such as those of Karl Pearson and of Trotter and Gleser; population-specific Indian formulae are preferred. The femur gives the most reliable single-bone estimate. Gustafson's method estimates age from teeth, and Henssge's nomogram estimates time since death."
  },
  {
    id: 62,
    question: "Gustafson's method estimates the age of an adult from:",
    options: ["Regressive changes in teeth such as attrition, secondary dentine and root transparency", "Fusion of the cranial sutures", "Changes in the pubic symphysis", "Bone mineral density"],
    answer: 0,
    explanation: "Gustafson (1950) scored six changes in a sectioned tooth: attrition, periodontosis, secondary dentine, cementum apposition, root resorption and root transparency. Root transparency is regarded as the most reliable of these. Pubic symphysis changes are assessed by the Suchey–Brooks and Todd methods."
  },
  {
    id: 63,
    question: "A seized shawl is suspected to be shahtoosh. Microscopic examination of its fine underfur would identify it as coming from which animal?",
    options: ["Pashmina (Changthangi) goat", "Angora rabbit", "Yak", "Tibetan antelope (chiru)"],
    answer: 3,
    explanation: "Shahtoosh is woven from the very fine underfur (about 7–12 µm) of the Tibetan antelope or chiru, which must be killed to obtain it. The chiru is listed in Schedule I of the Wild Life (Protection) Act and Appendix I of CITES, so trade is banned. Pashmina from the Changthangi goat is legal, and guard-hair features help tell them apart."
  },
  {
    id: 64,
    question: "Fibres matching a suspect's sweater are found on the seat of a victim's car, although the suspect never sat in it. The victim had hugged the suspect earlier that day. This is an example of:",
    options: ["Direct (primary) transfer", "Secondary (indirect) transfer", "Contamination in the laboratory", "Persistence failure"],
    answer: 1,
    explanation: "Secondary transfer occurs when trace material moves from its source to an intermediate surface, here the victim's clothes, and then to a second surface, the car seat. It must be considered when interpreting fibre, hair and touch DNA findings. Direct transfer would require contact between the sweater and the seat."
  },
  {
    id: 65,
    question: "Skeletal remains are found in a forest with a tree root grown through the eye socket of the skull. Counting the annual growth rings of that root mainly helps to estimate:",
    options: ["The age of the deceased at death", "The cause of death", "The minimum time since the body was deposited", "The sex of the deceased"],
    answer: 2,
    explanation: "A root can only grow through a skull after the soft tissue has decomposed, so the number of annual rings in it gives a minimum time since deposition. This is an application of dendrochronology in forensic botany. Plant growth over and under remains is similarly used to bracket the post-mortem interval."
  },
  {
    id: 66,
    question: "What is the recommended method for collecting saliva from a fresh bite mark on a victim's skin for DNA analysis?",
    options: ["Double-swab technique: a moist swab followed by a dry swab", "Scraping the bite with a scalpel", "Lifting with fingerprint tape", "Cutting out the skin at the scene"],
    answer: 0,
    explanation: "In the double-swab technique (Sweet and colleagues), a swab moistened with sterile water is rolled over the bite to rehydrate dried saliva, and a dry swab then collects the remaining moisture. Both swabs are air-dried and packed together. The bite mark is also photographed with a scale before swabbing."
  },
  {
    id: 67,
    question: "In a homicide where the victim fought back, fingernail clippings or scrapings are collected chiefly to recover:",
    options: ["The victim's own nail keratin for toxicology", "Paint traces from the scene", "Gunshot residue", "The assailant's skin cells and blood for DNA"],
    answer: 3,
    explanation: "While scratching an attacker, the victim can collect the attacker's skin cells and blood under the nails, which can give a foreign DNA profile, often as a mixture with the victim's own DNA. Each hand's nails are packed separately. Y-STRs help if the attacker is male and the female victim's DNA dominates."
  },
  {
    id: 68,
    question: "Which skull feature suggests that the individual was male?",
    options: ["Prominent supraorbital ridges and a large mastoid process", "A vertical, smooth forehead", "Sharp upper margins of the orbits", "A small, pointed chin"],
    answer: 0,
    explanation: "Male skulls generally have heavier supraorbital ridges, larger mastoid processes, a more prominent external occipital protuberance, rounded orbital margins and a square chin. Female skulls tend to have a vertical forehead, sharp orbital margins and a pointed chin. The pelvis is still more reliable than the skull for sex."
  },
  {
    id: 69,
    question: "Which finding most reliably shows that a wound was inflicted while the person was alive?",
    options: ["Gaping of the wound edges", "Signs of vital reaction such as bleeding into tissues, clotting and inflammation", "Presence of rigor mortis", "Dried, parchment-like edges"],
    answer: 1,
    explanation: "Vital reactions, including haemorrhage into surrounding tissue, clot formation, swelling and inflammatory cell infiltration, require circulation and so indicate an ante-mortem injury. Post-mortem wounds show little bleeding and no inflammation. Histology and enzyme histochemistry can help when changes are subtle."
  },
  {
    id: 70,
    question: "A body shows a complete, horizontal ligature mark of uniform depth below the thyroid cartilage. This most strongly suggests:",
    options: ["Hanging", "Throttling", "Ligature strangulation", "Smothering"],
    answer: 2,
    explanation: "In ligature strangulation the mark usually runs horizontally around the neck, completely encircles it and lies at or below the thyroid cartilage. In hanging the mark is oblique, runs upward to the knot, is often incomplete and lies above the thyroid cartilage. Throttling is manual strangulation, leaving fingertip bruises and nail marks."
  },
  {
    id: 71,
    question: "In differential extraction of a vaginal swab, which reagent is added in the second lysis step to break open the sperm heads?",
    options: ["EDTA", "Dithiothreitol (DTT)", "Chelex-100", "Sodium chloride"],
    answer: 1,
    explanation: "The first digestion with SDS and proteinase K lyses the victim's epithelial cells, giving the female (non-sperm) fraction. The intact sperm are pelleted, washed and then lysed with proteinase K plus DTT. DTT reduces the disulfide bonds in the sperm head, releasing the male DNA."
  },
  {
    id: 72,
    question: "Why do sperm heads resist the first, mild lysis step in differential extraction?",
    options: ["Sperm DNA is circular", "Sperm lack a nucleus", "Sperm nuclei are tightly packed with protamines cross-linked by disulfide bonds", "Sperm have a cellulose cell wall"],
    answer: 2,
    explanation: "During spermatogenesis histones are replaced by cysteine-rich protamines, which form many disulfide bridges and pack the chromatin very tightly. This makes the sperm head resistant to SDS and proteinase K alone. A reducing agent such as DTT is needed to open these bonds."
  },
  {
    id: 73,
    question: "After differential extraction of a sexual-assault swab, the sperm (male) fraction shows a major male profile plus a few minor alleles that match the victim. The most likely explanation is:",
    options: ["Carry-over of the victim's DNA from incomplete separation", "Presence of a second male", "Laboratory contamination from another case", "A mutation in the suspect's DNA"],
    answer: 0,
    explanation: "Separation of epithelial and sperm DNA is rarely perfect, especially when the victim's cells greatly outnumber sperm, so traces of her DNA often carry over into the sperm fraction. Because her profile is known, these alleles can be accounted for. Extra washing of the sperm pellet reduces carry-over."
  },
  {
    id: 74,
    question: "In an STR profile from a mixed stain, the locus with the most alleles shows five distinct alleles. What is the minimum number of contributors?",
    options: ["Two", "Four", "Five", "Three"],
    answer: 3,
    explanation: "Each person contributes at most two alleles at a locus, so the minimum number of contributors is the largest allele count at any locus divided by two, rounded up: 5 ÷ 2 = 2.5, rounded up to 3. Allele sharing between contributors means the true number may be higher. Probabilistic genotyping tools also estimate the number from peak heights."
  },
  {
    id: 75,
    question: "The peak-height level above which it is reasonable to assume that the sister allele of a heterozygote has not dropped out is called the:",
    options: ["Analytical threshold", "Saturation limit", "Stochastic threshold", "Limit of detection"],
    answer: 2,
    explanation: "The stochastic threshold is set by validation: a single peak above it is treated as a homozygote, while one below it may be a heterozygote whose partner allele dropped out. The analytical threshold is the lower level that separates true peaks from baseline noise. Both are set by each laboratory for its own instruments and kits."
  },
  {
    id: 76,
    question: "A victim of sexual assault names a suspect who has had a vasectomy. The vaginal swab gives a strong female profile but no sperm fraction. Which DNA test is most useful next?",
    options: ["mtDNA sequencing", "Y-STR typing", "Repeating autosomal STRs with more cycles", "ABO typing of the swab"],
    answer: 1,
    explanation: "Y-STR primers amplify only male DNA, so a male profile can be obtained from semen without sperm or from other male cells even when female DNA is in great excess. Autosomal STRs are swamped by the victim's DNA in such mixtures. A Y-STR match shows the suspect or a paternal relative could be the source."
  },
  {
    id: 77,
    question: "A single-source crime-scene profile matches the suspect, and its random match probability is 1 in 1 million. Assuming the suspect is the source under the prosecution hypothesis, what is the likelihood ratio?",
    options: ["1 × 10⁻⁶", "5 × 10⁵", "2 × 10⁶", "1 × 10⁶"],
    answer: 3,
    explanation: "LR = P(evidence | suspect is the source) ÷ P(evidence | an unrelated person is the source) = 1 ÷ (1 × 10⁻⁶) = 10⁶. The evidence is a million times more likely if the suspect left the stain than if a random unrelated person did. It is not the probability that the suspect is guilty."
  },
  {
    id: 78,
    question: "In a two-locus mixture, the alleles at locus 1 have frequencies summing to 0.3 and at locus 2 to 0.4. What is the combined probability of inclusion (CPI)?",
    options: ["0.0144", "0.12", "0.25", "0.70"],
    answer: 0,
    explanation: "For each locus the probability of inclusion is (sum of allele frequencies)²: 0.3² = 0.09 and 0.4² = 0.16. The CPI is their product, 0.09 × 0.16 = 0.0144, so about 1.4% of unrelated people would be included as possible contributors. CPI ignores peak heights and is unsuitable when drop-out is possible."
  },
  {
    id: 79,
    question: "In a low-template DNA sample from a hit-and-run vehicle's door handle, one allele of a known heterozygous donor fails to appear at a locus. This is called:",
    options: ["Allele drop-in", "Stutter", "Allele drop-out", "Pull-up"],
    answer: 2,
    explanation: "Allele drop-out happens when, through random sampling of a few DNA molecules, one allele is not amplified enough to be detected. It is common in touch DNA. Drop-in is the opposite, a sporadic extra allele from contamination. Interpretation methods must allow for both."
  },
  {
    id: 80,
    question: "After a hit-and-run, the deployed airbag of an abandoned car is swabbed. What is the main purpose of this?",
    options: ["To detect the airbag propellant", "To recover the driver's DNA from saliva, skin or blood transferred on deployment", "To find paint traces from the victim's vehicle", "To determine the car's speed at impact"],
    answer: 1,
    explanation: "When an airbag inflates, it strikes the driver's face and hands with force and often picks up saliva, skin cells or blood. A DNA profile from it can show who was in the driver's seat. Steering wheels, gear knobs and seat belts are also swabbed, though they may carry DNA from several regular users."
  },
  {
    id: 81,
    question: "DNA from charred remains in a vehicle fire is highly degraded, and standard STR kits fail at the larger loci. Which approach is most suitable?",
    options: ["Mini-STRs with shorter amplicons", "RFLP analysis", "Increasing the size of all amplicons", "Serological ABO typing"],
    answer: 0,
    explanation: "Mini-STRs move the primers closer to the repeat region, cutting amplicon sizes to below about 150 bp, so short surviving DNA fragments can still be typed. They were widely used for World Trade Center victims. SNPs are another option. RFLP needs long intact DNA and is not suitable."
  },
  {
    id: 82,
    question: "An unidentified body is being compared with a missing person's parents. At one locus the mother is 12,14 and the father is 9,11. Which genotype in the body would exclude it as their biological child?",
    options: ["9,12", "11,14", "12,13", "11,12"],
    answer: 2,
    explanation: "A child receives one allele from each parent. Genotype 12,13 could get 12 from the mother, but the father has no 13, so it is excluded unless a mutation has occurred. The other genotypes each contain one maternal allele (12 or 14) and one paternal allele (9 or 11). Exclusions at two or more loci are usually required."
  },
  {
    id: 83,
    question: "A rape victim becomes pregnant and undergoes a medical termination. To link the accused, foetal tissue DNA is compared with:",
    options: ["Only the accused's DNA", "The victim's DNA and the accused's DNA to identify obligate paternal alleles", "Only the victim's DNA", "The DNA of the victim's father"],
    answer: 1,
    explanation: "The foetus inherits one allele per locus from each parent. By subtracting the victim's alleles, the obligate paternal alleles are identified and compared with the accused; if he has them at all loci, a paternity index is calculated. Foetal tissue must be separated carefully from maternal tissue to avoid mixtures."
  },
  {
    id: 84,
    question: "Why do DNA laboratories maintain an elimination database of profiles of their own staff and crime-scene officers?",
    options: ["To search for offenders among staff", "To speed up sample processing", "To identify contamination from personnel who handled the exhibits", "To meet population-frequency requirements"],
    answer: 2,
    explanation: "Despite precautions, investigators and analysts can leave their DNA on exhibits. Comparing unknown profiles against a staff elimination database flags such contamination so that a false lead is not chased. Such databases are kept under strict data-protection rules."
  },
  {
    id: 85,
    question: "An extract from a bloodstained cloth recovered from soil shows a delayed internal positive control (IPC) signal in qPCR. The most likely cause is:",
    options: ["PCR inhibition by humic substances", "Very high DNA concentration", "Presence of male DNA only", "Formation of primer dimers"],
    answer: 0,
    explanation: "A delayed or failed IPC means something in the extract is inhibiting the polymerase. Humic and fulvic acids from soil are common inhibitors, as is haem from blood. Remedies include further purification, dilution of the extract, or adding BSA or an inhibitor-tolerant polymerase."
  },
  {
    id: 86,
    question: "In quantification kits that measure a short and a long autosomal target, a degradation index well above 1 indicates that:",
    options: ["The sample contains only female DNA", "The sample is inhibited", "The sample contains too much DNA", "The DNA is fragmented, so larger STR loci may drop out"],
    answer: 3,
    explanation: "The degradation index is the quantity of the short target divided by that of the long target. If DNA is fragmented, fewer long targets survive, so the ratio rises above 1. The analyst can then add more DNA or choose a kit with shorter amplicons to avoid losing the larger loci."
  },
  {
    id: 87,
    question: "The Y-STR haplotype from a semen stain matches the suspect. Which of the following people would most likely share the same haplotype?",
    options: ["The suspect's mother", "The suspect's sister", "The suspect's brother", "The suspect's maternal uncle"],
    answer: 2,
    explanation: "Y-STRs pass unchanged from father to son, so the suspect's brothers, father, sons and paternal uncles and cousins usually share his haplotype. Women have no Y chromosome, and a maternal uncle belongs to a different paternal line. Y-STR statistics therefore use haplotype frequencies from databases such as YHRD."
  },
  {
    id: 88,
    question: "Which mRNA marker is used to identify menstrual blood in body-fluid profiling?",
    options: ["MMP7 (matrix metalloproteinase 7)", "HTN3 (histatin 3)", "PRM1 (protamine 1)", "HBB (beta-globin)"],
    answer: 0,
    explanation: "Matrix metalloproteinases such as MMP7 and MMP11 are expressed in the endometrium during menstruation and serve as menstrual blood markers. HTN3 and STATH mark saliva, PRM1 and PRM2 mark semen (sperm), and HBB marks blood in general. Menstrual blood can be important when a woman claims a stain came from her period."
  },
  {
    id: 89,
    question: "DNA methylation at CpG sites in the ELOVL2 gene is studied in forensic science mainly for:",
    options: ["Sex determination", "Estimating the chronological age of the donor", "Species identification", "Detecting PCR inhibitors"],
    answer: 1,
    explanation: "Methylation at ELOVL2 and several other CpG sites changes steadily with age, so models built on them can estimate a donor's age, often within about 3–5 years. This can help narrow down an unknown suspect. Methylation markers are also being developed to identify body fluids."
  },
  {
    id: 90,
    question: "Which of the following is a probabilistic genotyping software used to interpret complex DNA mixtures?",
    options: ["Primer3", "BLAST", "STRmix", "Clustal Omega"],
    answer: 2,
    explanation: "STRmix uses peak heights, stutter and drop-out models in a Bayesian framework to deconvolute mixtures and calculate likelihood ratios. TrueAllele and EuroForMix are other examples. Primer3 designs PCR primers, BLAST searches sequence databases, and Clustal Omega aligns multiple sequences."
  },
  {
    id: 91,
    question: "A vaginal swab from a rape victim is strongly positive for acid phosphatase, but no spermatozoa are seen. The accused has had a vasectomy. Which test best confirms the presence of semen?",
    options: ["Florence test", "Takayama test", "Phadebas test", "PSA (p30) immunochromatographic test"],
    answer: 3,
    explanation: "PSA (p30) is made by the prostate and is present in seminal fluid regardless of sperm, so it confirms semen from vasectomised or azoospermic men. The Florence test is an old, non-specific presumptive test, the Takayama test is for blood, and Phadebas is for salivary amylase."
  },
  {
    id: 92,
    question: "A vaginal swab from a woman who denies recent intercourse gives a weak, slow acid phosphatase reaction. The most reasonable interpretation is:",
    options: ["Semen is definitely present", "Vaginal secretions naturally contain low levels of acid phosphatase", "The swab is contaminated with blood", "The test reagent has expired"],
    answer: 1,
    explanation: "Vaginal fluid contains some acid phosphatase of its own, which can give a weak or slow reaction, whereas seminal acid phosphatase gives an intense purple colour within seconds. A weak result must not be read as proof of semen. Microscopy for sperm and a PSA test are needed."
  },
  {
    id: 93,
    question: "To locate possible semen stains on a dark-coloured bedsheet at a sexual-assault scene, the examiner should use:",
    options: ["An alternate light source of about 450 nm with orange goggles", "Luminol spray", "Bright white light only", "Ninhydrin spray"],
    answer: 0,
    explanation: "Semen fluoresces when illuminated with blue light around 450 nm, and the fluorescence is seen through orange or yellow filters. The marked areas are then tested with AP and confirmed by microscopy or PSA. Luminol is for blood, and ninhydrin develops fingerprints on paper."
  },
  {
    id: 94,
    question: "A woman claims a bloodstain on a suspect's clothing came from her menstrual period. Which test helps distinguish menstrual blood from peripheral blood?",
    options: ["Prostate-specific antigen", "Salivary amylase", "D-dimer (fibrin degradation products)", "Creatinine"],
    answer: 2,
    explanation: "Menstrual blood contains high levels of fibrin degradation products such as D-dimer, because fibrinolysis occurs in the uterus. Immunochromatographic D-dimer tests and mRNA markers like MMP7 are used to identify it. PSA is for semen, amylase for saliva and creatinine for urine."
  },
  {
    id: 95,
    question: "A cigarette butt from a homicide scene is tested with an immunochromatographic card that detects human salivary α-amylase. This test is:",
    options: ["Kastle-Meyer", "RSID-Saliva", "Starch–iodine", "Barberio"],
    answer: 1,
    explanation: "RSID-Saliva uses monoclonal antibodies against human salivary α-amylase, so it is specific to saliva and does not react with pancreatic amylase. The older starch–iodine and Phadebas tests detect amylase activity and are only presumptive. Kastle-Meyer is a blood test."
  },
  {
    id: 96,
    question: "Edelman's test, which gives a green fluorescence with zinc chloride, is used to detect which body material?",
    options: ["Urine", "Sweat", "Vomit", "Faeces"],
    answer: 3,
    explanation: "Edelman's test detects urobilinoids (urobilin) in faecal matter, which form a green fluorescent complex with zinc salts. Faecal stains can matter in cases of sodomy or soiled clothing. Urine carries far less urobilin and is identified instead by creatinine (Jaffe) or urea tests."
  },
  {
    id: 97,
    question: "In the examination of swabs, epithelial cells that stain dark brown with Lugol's iodine because they are rich in glycogen suggest which source?",
    options: ["Vaginal epithelium", "Buccal mucosa only", "Skin", "Urethra of a male"],
    answer: 0,
    explanation: "Squamous cells from the vaginal wall contain abundant glycogen under oestrogen influence and stain dark brown with Lugol's iodine or magenta with PAS. Finding such cells on a penile swab or object can support vaginal contact. Buccal cells may contain some glycogen too, so the test is supportive, not conclusive."
  },
  {
    id: 98,
    question: "Immunochromatographic tests such as HemaTrace and ABAcard detect human blood by recognising:",
    options: ["Haem iron", "Human red cell membrane antigens", "Human haemoglobin", "Human albumin"],
    answer: 2,
    explanation: "These lateral-flow cards use monoclonal and polyclonal antibodies against human haemoglobin, and give a visible test line within minutes. They also react with blood of higher primates and ferrets. They are confirmatory for human blood after a positive presumptive test."
  },
  {
    id: 99,
    question: "A very heavy, concentrated bloodstain gives a negative result on a HemaTrace card, although blood is clearly present. The most likely reason and remedy are:",
    options: ["Non-human blood; repeat with precipitin test", "Expired card; use a new card", "Haemoglobin degradation; switch to luminol", "High-dose hook effect; dilute the extract and retest"],
    answer: 3,
    explanation: "In the high-dose hook effect, an excess of antigen saturates both the labelled and the capture antibodies, so the sandwich that forms the test line cannot form. Diluting the extract usually restores the positive result. Because of this, labs test heavy stains at more than one dilution."
  },
  {
    id: 100,
    question: "A suspect cleaned a blood-soaked floor with household bleach. Which substance gives a false-positive luminol reaction that fades much faster than the glow from blood?",
    options: ["Sodium chloride", "Sodium hypochlorite", "Sucrose", "Ethanol"],
    answer: 1,
    explanation: "Sodium hypochlorite in bleach oxidises luminol directly, producing a bright but short flash, whereas blood gives a longer, steadier glow. Bleach residues lose this effect as they dry over a few days. Copper, iron salts and some plant peroxidases can also give false positives."
  },
  {
    id: 101,
    question: "A bloodstain from a poultry slaughter yard is examined microscopically and shows oval red cells with nuclei. The blood is most likely from:",
    options: ["A human", "A goat", "A bird", "A dog"],
    answer: 2,
    explanation: "Birds, reptiles, amphibians and fish have oval, nucleated red blood cells. Mammalian red cells lose their nucleus during maturation and are non-nucleated discs, except camels and llamas, which have oval but non-nucleated cells. A species-specific test such as precipitin or cyt b sequencing confirms the finding."
  },
  {
    id: 102,
    question: "In crossover (counter) immunoelectrophoresis for species identification, the antibody moves towards the cathode mainly because of:",
    options: ["Electroendosmosis", "Its strong negative charge", "Gravity", "Diffusion alone"],
    answer: 0,
    explanation: "At the buffer pH used, most proteins in the stain extract are negatively charged and move to the anode. Antibodies (IgG) are nearly neutral and are carried towards the cathode by the flow of buffer through the gel, called electroendosmosis. The two meet between the wells and form a precipitin line within about an hour."
  },
  {
    id: 103,
    question: "In a disputed paternity case, the mother is group O and the alleged father is group AB. Which blood group in the child would exclude this man as the father?",
    options: ["Group A", "Group B", "Group A or B", "Group O"],
    answer: 3,
    explanation: "The AB father must pass either A or B, and the O mother passes O, so their children can only be group A (AO) or group B (BO). A group O child would need an O allele from the father, which an AB man lacks, so he is excluded. Rare variants such as cis-AB can cause exceptions, so DNA testing is used for confirmation."
  },
  {
    id: 104,
    question: "A suspect's blood is group A, but his saliva shows no A or H substances. He is most likely:",
    options: ["Group O by mistake", "A non-secretor", "A Bombay phenotype", "Rh negative"],
    answer: 1,
    explanation: "Non-secretors (se/se, about 20% of people) have normal ABO antigens on their red cells but do not release water-soluble ABH substances into saliva, semen or other fluids. Their saliva or semen stains cannot be ABO-grouped. A Bombay individual would lack H on red cells too."
  },
  {
    id: 105,
    question: "Adults with the Lewis phenotype Le(a+b−) are usually:",
    options: ["Non-secretors of ABH substances", "Secretors of ABH substances", "Group AB", "Bombay phenotype"],
    answer: 0,
    explanation: "The Lewis antigens are made in body fluids and absorbed onto red cells. Secretors convert Le(a) to Le(b), so they type as Le(a−b+), while non-secretors cannot and type as Le(a+b−). Lewis typing can therefore indicate secretor status."
  },
  {
    id: 106,
    question: "The HLA genes, once widely used in paternity testing and still important in transplantation, are located on which human chromosome?",
    options: ["Chromosome 9", "Chromosome 19", "Chromosome 6", "Chromosome 11"],
    answer: 2,
    explanation: "The human leukocyte antigen (HLA) complex, the human MHC, lies on the short arm of chromosome 6 and is the most polymorphic gene region in humans. The ABO gene is on chromosome 9, and the FUT2 (secretor) gene on chromosome 19. HLA typing has now been largely replaced by STRs in parentage testing."
  },
  {
    id: 107,
    question: "The EMIT immunoassay used for screening urine for drugs of abuse is described as homogeneous because:",
    options: ["It uses only one antibody", "It needs no separation of bound and free labelled drug", "It works only with one drug class", "It uses radioactive labels"],
    answer: 1,
    explanation: "In EMIT (enzyme multiplied immunoassay technique), the drug is labelled with an enzyme whose activity is blocked when antibody binds it. Free drug from the sample displaces the labelled drug, restoring enzyme activity, which is read directly without a washing or separation step. Positive screens are confirmed by GC–MS or LC–MS/MS."
  },
  {
    id: 108,
    question: "On a lateral-flow (immunochromatographic) test card, what does the appearance of the control line show?",
    options: ["That the target antigen is present", "That the sample is human", "The concentration of the antigen", "That the sample has flowed correctly and the reagents are working"],
    answer: 3,
    explanation: "The control line captures labelled antibody whether or not antigen is present, so it confirms that the liquid has migrated across the strip and the reagents are active. If no control line appears, the test is invalid and must be repeated. The test line indicates the target antigen."
  },
  {
    id: 109,
    question: "The RSID-Semen test confirms seminal fluid by detecting which protein?",
    options: ["Semenogelin", "Prostate-specific antigen", "Acid phosphatase", "Spermine"],
    answer: 0,
    explanation: "RSID-Semen detects semenogelin, the main protein of the seminal vesicle secretion that forms the semen clot. Like PSA, it is present even without sperm. PSA is detected by separate cards such as ABAcard p30, and acid phosphatase and spermine by older presumptive tests."
  },
  {
    id: 110,
    question: "Dark brown rhombic crystals of choline periodide formed with iodine–potassium iodide indicate a positive:",
    options: ["Barberio test", "Teichmann test", "Florence test", "Takayama test"],
    answer: 2,
    explanation: "The Florence test detects choline in seminal fluid, which forms dark brown rhombic or needle-shaped choline periodide crystals. It is presumptive because choline is found in other tissues and fluids too. Barberio's test gives yellow spermine picrate crystals, and Teichmann and Takayama are blood tests."
  },
  {
    id: 111,
    question: "In suspected organophosphate poisoning, which laboratory finding in the blood supports the diagnosis?",
    options: ["Raised carboxyhaemoglobin", "Markedly reduced cholinesterase activity", "High methaemoglobin", "Raised blood ethanol"],
    answer: 1,
    explanation: "Organophosphates irreversibly inhibit acetylcholinesterase and plasma (pseudo)cholinesterase, causing accumulation of acetylcholine with miosis, salivation, bradycardia and muscle twitching. Low red-cell or plasma cholinesterase supports the diagnosis, and the compound itself is identified in viscera by TLC or GC–MS. Atropine and oximes are the antidotes."
  },
  {
    id: 112,
    question: "Vapour from the stomach contents of a deceased person turns silver nitrate–impregnated paper black. Which poison is most likely?",
    options: ["Arsenic trioxide", "Organophosphate", "Aluminium phosphide", "Cyanide"],
    answer: 2,
    explanation: "Aluminium phosphide, the common 'celphos' grain fumigant, releases phosphine gas in the stomach, which reduces silver nitrate to black silver. Victims smell of garlic or rotten fish and develop severe shock. It is one of the commonest suicidal poisons in central India."
  },
  {
    id: 113,
    question: "Which test is used to detect cyanide in viscera or stomach contents, forming a blue colour?",
    options: ["Prussian blue test", "Reinsch test", "Marsh test", "Duquenois–Levine test"],
    answer: 0,
    explanation: "In the Prussian blue test, cyanide is converted to ferrocyanide, which reacts with ferric ions to give Prussian blue. Victims may smell of bitter almonds and show bright pink lividity. Marsh and Reinsch tests are for arsenic and heavy metals, and Duquenois–Levine is for cannabis."
  },
  {
    id: 114,
    question: "A body is recovered from a burnt house, and the blood shows a high level of carboxyhaemoglobin. What does this indicate?",
    options: ["The victim died before the fire", "The body was moved after death", "The fire was started with petrol", "The victim was alive and breathing during the fire"],
    answer: 3,
    explanation: "Carbon monoxide enters the blood only by breathing, so raised carboxyhaemoglobin, together with soot in the airways, shows the victim was alive when the fire started. A person killed before the fire would have little COHb. Blood is collected in a full, sealed tube to stop CO loss."
  },
  {
    id: 115,
    question: "What is the standard method used in forensic laboratories to measure ethanol in blood?",
    options: ["Thin-layer chromatography", "Headspace gas chromatography with a flame ionisation detector", "Atomic absorption spectroscopy", "ELISA"],
    answer: 1,
    explanation: "In headspace GC–FID, a sealed vial of blood with an internal standard such as n-propanol is heated, and the vapour above it is injected into the GC. Ethanol is separated from methanol, acetone and other volatiles and measured precisely. Breath analysers are used for roadside screening."
  },
  {
    id: 116,
    question: "Using the Widmark formula, a 60 kg man with a distribution factor r = 0.55 absorbs 33 g of ethanol. Ignoring elimination, what is his expected peak alcohol concentration?",
    options: ["0.55 g/kg", "1.82 g/kg", "1.0 g/kg", "0.50 g/kg"],
    answer: 2,
    explanation: "Widmark's formula gives C = A ÷ (W × r) = 33 ÷ (60 × 0.55) = 33 ÷ 33 = 1.0 g of alcohol per kg of blood (1 per mille), roughly 100 mg per 100 mL of blood. Forgetting r gives 33 ÷ 60 = 0.55 g/kg, which is the amount per kg of body weight, not the blood concentration. In reality, elimination of about 0.1–0.2 g/kg per hour lowers the actual level. The limit for drivers in India is 30 mg per 100 mL of blood."
  },
  {
    id: 117,
    question: "A white powder seized at a nightclub turns blue with cobalt thiocyanate reagent. Which drug does this presumptive Scott test most likely indicate?",
    options: ["Heroin", "Methamphetamine", "Cannabis", "Cocaine"],
    answer: 3,
    explanation: "The Scott test uses cobalt thiocyanate, which gives a blue colour with cocaine; later steps with HCl and chloroform improve its specificity. Lidocaine and some other compounds also turn blue, so GC–MS confirmation is required. Marquis reagent is used for opiates and amphetamines."
  },
  {
    id: 118,
    question: "A suspected methamphetamine tablet gives a blue colour with Simon's reagent, while an amphetamine standard does not. This is because Simon's reagent reacts with:",
    options: ["Secondary amines", "Primary amines", "Phenolic groups", "Carbonyl groups"],
    answer: 0,
    explanation: "Simon's test (sodium nitroprusside with acetaldehyde and sodium carbonate) gives a blue colour with secondary amines such as methamphetamine and MDMA. Amphetamine and MDA are primary amines and do not react. It is used with Marquis reagent to narrow the identity before instrumental confirmation."
  },
  {
    id: 119,
    question: "The electron-ionisation mass spectrum of a seized stimulant shows a dominant base peak at m/z 58. This is characteristic of:",
    options: ["Amphetamine", "Methamphetamine", "Cocaine", "Morphine"],
    answer: 1,
    explanation: "Methamphetamine fragments at the bond next to its nitrogen to give an iminium ion of m/z 58, which dominates its spectrum. Amphetamine gives a base peak at m/z 44, cocaine at m/z 82 (with 182 and 303), and morphine shows a strong molecular ion at m/z 285. Retention time and the full spectrum are compared with a reference standard."
  },
  {
    id: 120,
    question: "On a TLC plate of extracted stomach contents, alkaloids such as strychnine are made visible as orange spots by spraying with:",
    options: ["Ninhydrin", "Diphenylcarbazone", "Dragendorff's reagent", "Iodine–starch"],
    answer: 2,
    explanation: "Dragendorff's reagent (potassium bismuth iodide) gives orange to red-brown spots with alkaloids and many other nitrogenous bases. Ninhydrin detects amino acids and primary amines, and diphenylcarbazone is used for barbiturates with mercury salts. Spots are compared with standards run on the same plate."
  },
  {
    id: 121,
    question: "In a suspected chronic arsenic poisoning, the victim's hair is cut close to the scalp and divided into 1 cm segments. Arsenic is concentrated in the segment 5–6 cm from the root. Assuming growth of about 1 cm per month, the main exposure occurred roughly:",
    options: ["Within the last week", "5–6 months before sampling", "1–2 years before sampling", "On the day of death"],
    answer: 1,
    explanation: "Substances enter the hair from the blood at the root and move outward as the hair grows, about 1 cm per month, so the 5–6 cm segment reflects exposure five to six months earlier. Segmental analysis can show repeated or rising doses, which suggests deliberate poisoning. Hair is collected from the vertex, and the root end is marked."
  },
  {
    id: 122,
    question: "Proteins are separated in a gel that contains a stable pH gradient, each protein forming a sharp band at the point where its net charge becomes zero. This technique is:",
    options: ["SDS-PAGE", "Isoelectric focusing", "Agarose gel electrophoresis", "Capillary zone electrophoresis"],
    answer: 1,
    explanation: "In isoelectric focusing, proteins move through a pH gradient until they reach their isoelectric point (pI), where they stop. This gives very sharp bands and was used to type polymorphic blood enzymes such as PGM. IEF is also the first dimension of 2D gel electrophoresis, while SDS-PAGE separates by molecular weight."
  },
  {
    id: 123,
    question: "Small peaks appear in other dye channels directly under a very large allele peak in a capillary electrophoresis profile. These pull-up artefacts are caused by:",
    options: ["Overlapping dye emission not fully corrected by the spectral calibration", "Polymerase slippage", "Contamination with foreign DNA", "A mutation in the primer-binding site"],
    answer: 0,
    explanation: "The fluorescent dyes have overlapping emission spectra, and the instrument's matrix (spectral calibration) separates them mathematically. When a peak is off-scale, the correction fails and some signal 'bleeds' into other colours at the same size. Re-running with less DNA and checking the calibration resolves it."
  },
  {
    id: 124,
    question: "The same DNA extract typed with two different STR kits shows a heterozygote at a locus with one kit but a homozygote with the other. The most likely cause is:",
    options: ["Stutter", "Sample degradation", "Contamination", "A null allele from a primer-binding-site mutation"],
    answer: 3,
    explanation: "Different kits use different primer sequences. A sequence variant under one kit's primer can stop that allele from amplifying, so only the other allele appears and the person looks homozygous. This is called a null allele. Such discordances are documented in STRBase."
  },
  {
    id: 125,
    question: "In fluorescence microscopy, used for example to spot sperm stained with fluorescent antibodies, the emitted light always has:",
    options: ["A shorter wavelength than the exciting light", "The same wavelength as the exciting light", "A longer wavelength than the exciting light", "No relationship with the exciting light"],
    answer: 2,
    explanation: "A fluorophore absorbs light, loses a little energy, and emits light of longer wavelength and lower energy; this difference is the Stokes shift. Filters let the examiner see only the emitted light against a dark background. Fluorescent stains like SPERM HY-LITER make sperm easy to find on crowded slides."
  },
  {
    id: 126,
    question: "In a hit-and-run, a synthetic fibre is recovered from the bumper of a suspect vehicle. Which technique identifies its polymer type without destroying it?",
    options: ["Atomic absorption spectroscopy", "FTIR microspectroscopy", "ELISA", "Agarose gel electrophoresis"],
    answer: 1,
    explanation: "FTIR microspectroscopy records the infrared spectrum of a single fibre under the microscope, distinguishing polyester, nylon, acrylic and other polymers non-destructively. Microspectrophotometry compares the dye colour. AAS measures metals, and ELISA and electrophoresis are used for proteins and nucleic acids."
  },
  {
    id: 127,
    question: "A hollow cathode lamp, emitting light characteristic of one element, is a key part of which instrument?",
    options: ["Atomic absorption spectrometer", "Gas chromatograph", "Infrared spectrometer", "Mass spectrometer"],
    answer: 0,
    explanation: "In atomic absorption spectroscopy, a hollow cathode lamp made of the element being tested emits its specific wavelengths. Atoms of that element in the flame or graphite furnace absorb this light in proportion to their concentration. AAS is used to measure lead, arsenic, mercury and other metals in viscera and blood."
  },
  {
    id: 128,
    question: "LC–MS/MS is preferred over GC–MS for many drugs in blood mainly because it:",
    options: ["Needs no sample preparation at all", "Uses an inert gas as mobile phase", "Works only with volatile compounds", "Handles polar and heat-unstable compounds without derivatisation"],
    answer: 3,
    explanation: "LC–MS/MS separates compounds in the liquid phase and ionises them gently by electrospray, so polar, large or heat-unstable drugs and metabolites can be analysed without making them volatile. Tandem MS gives high sensitivity and specificity. GC–MS needs volatile, thermally stable analytes, often after derivatisation."
  },
  {
    id: 129,
    question: "Before GC–MS analysis, morphine is often treated with a silylating reagent such as BSTFA. The main purpose of this derivatisation is to:",
    options: ["Make the drug fluorescent", "Increase volatility and thermal stability", "Increase its molecular charge", "Break it into smaller fragments before injection"],
    answer: 1,
    explanation: "Silylation replaces the active hydrogens of –OH and –NH groups with trimethylsilyl groups, reducing hydrogen bonding. This makes polar compounds like morphine more volatile and stable at GC temperatures and gives sharper peaks. The derivative also has a characteristic mass spectrum."
  },
  {
    id: 130,
    question: "In quantitative GC–MS analysis of a drug, a deuterated analogue such as cocaine-d3 is added to each sample mainly to:",
    options: ["Act as an internal standard that corrects for losses and instrument variation", "Increase the amount of drug", "Prevent contamination", "Change the retention time of the drug"],
    answer: 0,
    explanation: "A deuterated internal standard behaves almost exactly like the drug during extraction and chromatography but is distinguished by its higher mass. Measuring the ratio of drug to internal standard corrects for losses during sample preparation and for changes in instrument response. It is added at a known amount at the start."
  },
  {
    id: 131,
    question: "During trial, the defence shows that a seized blood sample was kept for two days with no record of who held it. Which aspect of the evidence is most directly challenged?",
    options: ["The accuracy of the DNA analyser", "The integrity and identity of the exhibit through its chain of custody", "The qualifications of the analyst", "The population database used"],
    answer: 1,
    explanation: "An unexplained gap in the chain of custody raises doubt about whether the exhibit could have been switched, contaminated or tampered with. Courts may then give the evidence less weight or reject it. Every transfer must be signed, dated and timed, and seals checked on receipt."
  },
  {
    id: 132,
    question: "Swabs collected from a rape victim at a hospital are still damp. How should they be handled before sending to the FSL?",
    options: ["Seal them at once in airtight plastic tubes", "Add formalin to preserve them", "Air-dry them in a clean place, pack in paper envelopes and keep cool", "Wash them in saline to remove debris"],
    answer: 2,
    explanation: "Damp swabs sealed in plastic grow bacteria and fungi that degrade DNA and sperm. They should be air-dried away from contamination, packed in labelled paper envelopes or swab boxes, sealed and kept refrigerated until dispatch. Control swabs and the victim's reference sample are packed separately."
  },
  {
    id: 133,
    question: "Which section of the Bharatiya Nagarik Suraksha Sanhita, 2023 deals with the medical examination of a rape victim, replacing Section 164A of the old CrPC?",
    options: ["Section 176", "Section 194", "Section 197", "Section 184"],
    answer: 3,
    explanation: "BNSS Section 184 requires that a rape victim be examined, with her consent, by a registered medical practitioner, and that the report be sent to the investigating officer within seven days. It corresponds to Section 164A of the CrPC. Section 176 deals with the procedure for investigation and Section 194 with inquest by police."
  },
  {
    id: 134,
    question: "Under the Bharatiya Sakshya Adhiniyam, 2023, which section governs the admissibility of electronic records such as CCTV footage and call records, replacing Section 65B of the Indian Evidence Act?",
    options: ["Section 39", "Section 63", "Section 45", "Section 57"],
    answer: 1,
    explanation: "BSA Section 63 sets the conditions for admitting electronic records and requires a certificate in the form given in the Schedule, with one part filled by the person producing the record and another by an expert. It replaces IEA Section 65B. BSA Section 39 deals with expert opinion, which was Section 45 of the IEA."
  },
  {
    id: 135,
    question: "The opinion of a DNA expert or other scientific expert is relevant under which section of the Bharatiya Sakshya Adhiniyam, 2023?",
    options: ["Section 39", "Section 63", "Section 45", "Section 27"],
    answer: 0,
    explanation: "BSA Section 39 makes relevant the opinions of persons specially skilled in science, art, foreign law, handwriting, finger impressions and similar fields, carrying forward IEA Section 45. It also covers the Examiner of Electronic Evidence. The court weighs the expert's opinion and is not bound by it."
  },
  {
    id: 136,
    question: "How should DNA extracts be stored for long periods in a forensic laboratory?",
    options: ["At room temperature in open tubes", "In a refrigerator at 4 °C indefinitely", "Frozen at −20 °C or lower", "In a dry oven at 37 °C"],
    answer: 2,
    explanation: "DNA extracts in buffer are kept frozen at −20 °C, or −80 °C for very long storage, to stop nuclease and chemical degradation. 4 °C is suitable only for short periods. Dried stains on cloth or FTA cards can be stored at room temperature in a dry, dark place."
  },
  {
    id: 137,
    question: "For DNA identification of skeletal remains several decades old, which bone usually gives the best results?",
    options: ["Rib", "Petrous part of the temporal bone", "Vertebral body", "Skull vault"],
    answer: 1,
    explanation: "The petrous part of the temporal bone, around the inner ear, is the densest bone in the body and preserves DNA exceptionally well, which has made it a favourite in ancient DNA work. Dense cortical bone of the femur and teeth are also good sources. Spongy bones such as ribs and vertebrae degrade faster."
  },
  {
    id: 138,
    question: "When a bloodstain is cut from a carpet, the examiner also takes an unstained piece of the same carpet nearby. This sample serves as a:",
    options: ["Reference sample from the suspect", "Duplicate for the defence", "Positive control", "Substrate control"],
    answer: 3,
    explanation: "A substrate (blank) control shows whether the carpet itself, its dyes or cleaning agents give a reaction in presumptive tests or contain background DNA. Without it, a positive result on the stain could be questioned. Known reference samples come from the victim and suspect."
  },
  {
    id: 139,
    question: "Which forensic training and research institute, set up by the Ministry of Home Affairs in 1972 at Rohini, Delhi, now serves as the Delhi campus of the National Forensic Sciences University?",
    options: ["Lok Nayak Jayaprakash Narayan National Institute of Criminology and Forensic Science", "Central Forensic Science Laboratory, Chandigarh", "Sardar Vallabhbhai Patel National Police Academy", "Central Detective Training Institute"],
    answer: 0,
    explanation: "LNJN NICFS was set up in 1972 to train police, judicial and forensic officers and to conduct research in criminology and forensic science. It became the Delhi campus of NFSU after the NFSU Act, 2020. The SVP National Police Academy, which trains IPS officers, is in Hyderabad."
  },
  {
    id: 140,
    question: "For searching a large open field for a weapon with many officers, which crime scene search pattern is generally most suitable?",
    options: ["Spiral search by one officer", "Line (strip) search with officers walking abreast", "Zone search of a single room", "Wheel (ray) search"],
    answer: 1,
    explanation: "In a line or strip search, officers stand at arm's length and walk in a straight line across the area, so large outdoor scenes are covered systematically. A grid search repeats the strips at right angles. Spiral searches suit one or two searchers, and zone searches suit houses and vehicles."
  },
  {
    id: 141,
    question: "In the DETECTR diagnostic assay, Cas12a produces a detectable signal after recognising its target DNA because it then:",
    options: ["Ligates fluorescent probes", "Copies the target into RNA", "Cuts nearby single-stranded DNA reporters non-specifically (collateral cleavage)", "Methylates the target sequence"],
    answer: 2,
    explanation: "Once Cas12a binds its target double-stranded DNA, it becomes an indiscriminate single-stranded DNase, cutting quenched fluorescent ssDNA reporters and releasing a signal. This trans or collateral activity gives very high sensitivity. Cas13 works the same way on RNA in the SHERLOCK assay."
  },
  {
    id: 142,
    question: "Spoligotyping, used to type strains of Mycobacterium tuberculosis in outbreak and source tracing, is based on:",
    options: ["Variation in spacers of the CRISPR (direct repeat) locus", "Variation in 16S rRNA", "Plasmid profiles", "Phage typing"],
    answer: 0,
    explanation: "Spoligotyping (spacer oligonucleotide typing) detects which of 43 known spacers are present in the CRISPR direct-repeat region of M. tuberculosis. The pattern of presence and absence identifies lineages. CRISPR arrays in other bacteria are likewise used for strain typing in microbial forensics."
  },
  {
    id: 143,
    question: "What kind of cut does wild-type Streptococcus pyogenes Cas9 make in the target DNA?",
    options: ["A staggered cut with 5′ overhangs far from the PAM", "A blunt double-strand break about 3 bp upstream of the PAM", "A single-strand nick only", "Cleavage of RNA, not DNA"],
    answer: 1,
    explanation: "Cas9's HNH and RuvC nuclease domains each cut one strand at the same position, giving a blunt double-strand break three base pairs upstream of the NGG PAM. Cas12a makes a staggered cut with 5′ overhangs distal to the PAM. A Cas9 with one domain inactivated is a nickase."
  },
  {
    id: 144,
    question: "STRBase, which provides information on STR loci, alleles, kit primer discordances and variant alleles, is maintained by:",
    options: ["NCBI", "EMBL-EBI", "Interpol", "NIST (USA)"],
    answer: 3,
    explanation: "STRBase was created in 1997 by John Butler and colleagues at the US National Institute of Standards and Technology (NIST). It covers STR loci, repeat structures, variant alleles, null allele reports and reference materials. NCBI runs GenBank and BLAST, and EMBL-EBI runs ENA and other databases."
  },
  {
    id: 145,
    question: "Which NCBI tool designs PCR primers and checks them against a database to make sure they bind only the intended target?",
    options: ["Primer-BLAST", "ORF Finder", "Clustal Omega", "PubMed"],
    answer: 0,
    explanation: "Primer-BLAST combines Primer3 primer design with a BLAST search to confirm that primers amplify only the intended target, for example a species-specific gene for wildlife casework. ORF Finder identifies open reading frames, Clustal Omega aligns several sequences, and PubMed is a literature database."
  },
  {
    id: 146,
    question: "To compare cytochrome b sequences from seized meat with reference sequences of several deer species at once, the analyst first needs a:",
    options: ["Peptide mass fingerprint", "Restriction map", "Multiple sequence alignment, for example with Clustal Omega", "Protein structure model"],
    answer: 2,
    explanation: "A multiple sequence alignment lines up homologous positions across all the sequences, showing where the questioned sample matches or differs from each species. Tools include Clustal Omega and MUSCLE. A phylogenetic tree can then be built from the alignment."
  },
  {
    id: 147,
    question: "In a wildlife case, a phylogenetic tree is built from aligned DNA sequences to show which species the seized sample clusters with. The neighbour-joining method used for this is a:",
    options: ["Character-based maximum parsimony method", "Distance-based method", "Bayesian method", "Method for aligning two sequences"],
    answer: 1,
    explanation: "Neighbour-joining builds a tree from a matrix of pairwise genetic distances, joining the closest pairs step by step. It is fast and widely used, with bootstrap values showing how well branches are supported. Maximum parsimony and Bayesian methods work directly on sequence characters."
  },
  {
    id: 148,
    question: "When peptides are fragmented by collision-induced dissociation in tandem mass spectrometry, the two main ion series used to read the amino-acid sequence are:",
    options: ["a and x ions", "c and z ions", "M+1 and M+2 isotope ions", "b and y ions"],
    answer: 3,
    explanation: "Collision-induced dissociation breaks peptides mainly at the amide bonds, giving b ions that contain the N-terminus and y ions that contain the C-terminus. The mass differences between successive ions identify the amino acids. c and z ions come mainly from electron-transfer dissociation."
  },
  {
    id: 149,
    question: "What is the main advantage of mass-spectrometry-based proteomics for body-fluid identification over separate presumptive tests?",
    options: ["Several marker proteins for different fluids can be detected together in one run", "It needs no instrument", "It also gives a full STR profile", "It works only on fresh stains"],
    answer: 0,
    explanation: "LC–MS/MS proteomics can detect many specific marker proteins at once, such as semenogelin and PSA for semen, statherin for saliva and haemoglobin for blood, from a single small sample. It is confirmatory and works on mixed stains. It complements, rather than replaces, DNA profiling."
  },
  {
    id: 150,
    question: "Genetically variant peptides (GVPs) detected by proteomic analysis of hair shafts are useful in forensics because they:",
    options: ["Reveal the hair's growth phase", "Show the dye used on the hair", "Reflect the person's SNP alleles and can help individualise hair without DNA", "Measure drug levels in the hair"],
    answer: 2,
    explanation: "GVPs are peptides that carry amino-acid changes caused by non-synonymous SNPs in the genes for hair proteins. Detecting them by mass spectrometry reveals the person's underlying SNP alleles, even from shafts with little DNA. The approach was described by Parker and colleagues in 2016."
  }
];

export default questions;

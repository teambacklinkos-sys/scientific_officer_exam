const questions = [
  {
    id: 1,
    question: "Madhya Pradesh extends between which latitudes?",
    options: ["18°5′ N and 24°30′ N", "21°6′ N and 26°30′ N", "23°30′ N and 29°30′ N", "19°50′ N and 25°10′ N"],
    answer: 1,
    explanation: "MP lies between about 21°6′ N and 26°30′ N latitude. The Tropic of Cancer (about 23°30′ N) runs through the middle of the state, so its southern half is tropical and its northern half sub-tropical."
  },
  {
    id: 2,
    question: "The longitudinal extent of Madhya Pradesh is approximately:",
    options: ["74°9′ E to 82°48′ E", "77°3′ E to 84°24′ E", "72°30′ E to 80°15′ E", "68°7′ E to 74°29′ E"],
    answer: 0,
    explanation: "MP stretches from about 74°9′ E (Alirajpur–Jhabua side) to 82°48′ E (Singrauli side). This spread of roughly 8.5° of longitude means sunrise at the eastern edge is about 35 minutes earlier than at the western edge (4 minutes per degree)."
  },
  {
    id: 3,
    question: "In terms of area, where does Madhya Pradesh rank among Indian states?",
    options: ["First, ahead of Rajasthan", "Third, after Rajasthan and Maharashtra", "Second, after Maharashtra", "Second, after Rajasthan"],
    answer: 3,
    explanation: "MP was the largest state until Chhattisgarh was carved out on 1 November 2000. Since then it ranks second in area after Rajasthan, ahead of Maharashtra."
  },
  {
    id: 4,
    question: "The geographical area of Madhya Pradesh is about:",
    options: ["3,42,239 sq km", "3,07,713 sq km", "2,40,928 sq km", "3,08,252 sq km"],
    answer: 3,
    explanation: "MP covers about 3,08,252 sq km, roughly 9.4% of India's area. The distractors are the areas of Rajasthan (3,42,239), Maharashtra (3,07,713) and Uttar Pradesh (2,40,928), which is why MP sits just ahead of Maharashtra and behind Rajasthan."
  },
  {
    id: 5,
    question: "How many Indian states share a boundary with Madhya Pradesh?",
    options: ["Five", "Four", "Six", "Seven"],
    answer: 0,
    explanation: "MP is a landlocked state bordered by five states: Uttar Pradesh (north/north-east), Chhattisgarh (south-east), Maharashtra (south), Gujarat (west) and Rajasthan (north-west). It touches no international border and no coastline."
  },
  {
    id: 6,
    question: "Which of the following states does NOT share a border with Madhya Pradesh?",
    options: ["Jharkhand", "Gujarat", "Chhattisgarh", "Uttar Pradesh"],
    answer: 0,
    explanation: "Jharkhand lies east of Chhattisgarh and Uttar Pradesh and does not touch MP. MP's five neighbours are Uttar Pradesh, Chhattisgarh, Maharashtra, Gujarat and Rajasthan."
  },
  {
    id: 7,
    question: "The Tropic of Cancer passes through all of the following districts of Madhya Pradesh EXCEPT:",
    options: ["Shahdol", "Vidisha", "Indore", "Ujjain"],
    answer: 2,
    explanation: "Indore lies at about 22.7° N, south of the Tropic of Cancer. The Tropic passes through districts such as Ratlam, Ujjain, Agar Malwa, Rajgarh, Sehore, Bhopal, Vidisha, Raisen, Sagar, Damoh, Jabalpur, Katni, Umaria and Shahdol."
  },
  {
    id: 8,
    question: "Which pair of cities in Madhya Pradesh both lie SOUTH of the Tropic of Cancer?",
    options: ["Bhopal and Gwalior", "Ujjain and Rewa", "Indore and Narmadapuram", "Gwalior and Sagar"],
    answer: 2,
    explanation: "Indore (about 22.7° N) and Narmadapuram (about 22.8° N) are both south of 23°30′ N. Gwalior, Sagar and Rewa lie north of the Tropic, so every other pair contains at least one northern city even though Bhopal and Ujjain themselves are just south of it."
  },
  {
    id: 9,
    question: "Which is the largest physiographic division of Madhya Pradesh by area?",
    options: ["Baghelkhand plateau", "Narmada–Son valley", "Bundelkhand plateau", "Malwa plateau"],
    answer: 3,
    explanation: "The Malwa plateau in western and central MP is the largest physiographic unit of the state. It covers districts such as Indore, Ujjain, Dewas, Ratlam, Mandsaur, Shajapur and Rajgarh, and is noted for its fertile black soil."
  },
  {
    id: 10,
    question: "The Malwa plateau is made up mainly of:",
    options: ["Basaltic lava flows of the Deccan Traps", "Gondwana coal-bearing sediments", "Archaean granite and gneiss", "Vindhyan sandstone and shale"],
    answer: 0,
    explanation: "Malwa is a northern extension of the Deccan Trap lava plateau, formed by fissure eruptions of basalt. Weathering of this basalt produced the black (regur) soil of Malwa. Archaean granite–gneiss is typical of Bundelkhand, not Malwa."
  },
  {
    id: 11,
    question: "The Bundelkhand plateau of northern Madhya Pradesh is composed chiefly of:",
    options: ["Gondwana sandstone with coal seams", "Recent alluvium", "Archaean granite and gneiss", "Deccan Trap basalt"],
    answer: 2,
    explanation: "Bundelkhand is one of the oldest landmasses in India, built of Archaean granite and gneiss (the Bundelkhand gneiss). Its hard crystalline rocks give rocky, undulating terrain and thin mixed red-black soils, unlike the basaltic Malwa plateau."
  },
  {
    id: 12,
    question: "Between its source and the Gujarat border, the Narmada flows through a rift valley bounded by:",
    options: ["The Vindhya range to the north and the Aravalli range to the south", "The Vindhya range to the north and the Satpura range to the south", "The Satpura range to the north and the Vindhya range to the south", "The Aravalli range to the north and the Vindhya range to the south"],
    answer: 1,
    explanation: "The Narmada occupies a faulted rift valley with the Vindhyas on its north and the Satpuras on its south. This trough explains its straight westward course and why it forms an estuary rather than a delta at the Gulf of Khambhat."
  },
  {
    id: 13,
    question: "Which is the highest peak of Madhya Pradesh?",
    options: ["Chauragarh", "Amarkantak", "Dhupgarh", "Janapav"],
    answer: 2,
    explanation: "Dhupgarh (about 1,350 m) near Pachmarhi is the highest point in MP. Chauragarh, also near Pachmarhi, is lower, Amarkantak plateau is about 1,065 m, and Janapav near Mhow is a low hill where the Chambal rises."
  },
  {
    id: 14,
    question: "Dhupgarh, the highest point of Madhya Pradesh, lies in:",
    options: ["The Maikal hills of the Satpura range", "The Bhander plateau of the Vindhyan range", "The Mahadeo hills of the Satpura range", "The Kaimur hills of the Vindhyan range"],
    answer: 2,
    explanation: "Dhupgarh is in the Mahadeo hills, the central part of the Satpura range around Pachmarhi. The Satpura system runs west to east as the Rajpipla hills, the Mahadeo hills and the Maikal range."
  },
  {
    id: 15,
    question: "Pachmarhi, the hill station known as the 'Queen of Satpura', is located in which district?",
    options: ["Chhindwara", "Narmadapuram", "Seoni", "Betul"],
    answer: 1,
    explanation: "Pachmarhi lies in Narmadapuram (formerly Hoshangabad) district on the Mahadeo hills. It is the core of the Pachmarhi Biosphere Reserve, which also extends into Betul and Chhindwara, which is why those districts are tempting distractors."
  },
  {
    id: 16,
    question: "The Satpura range in Madhya Pradesh lies between which two rivers?",
    options: ["Son and Ken", "Narmada and Son", "Chambal and Betwa", "Narmada and Tapti"],
    answer: 3,
    explanation: "The Satpura range rises south of the Narmada and separates it from the Tapti valley further south. Both the Narmada and the Tapti are west-flowing rivers that drain into the Gulf of Khambhat."
  },
  {
    id: 17,
    question: "The Amarkantak plateau, the source of both the Narmada and the Son, forms part of which range?",
    options: ["Maikal range", "Kaimur range", "Mahadeo hills", "Rajpipla hills"],
    answer: 0,
    explanation: "Amarkantak (Anuppur district) is on the Maikal range, the eastern end of the Satpura system. The Narmada, Son and Johila all rise here, the Narmada flowing west and the Son north-east."
  },
  {
    id: 18,
    question: "What is the total length of the Narmada from Amarkantak to the sea?",
    options: ["About 1,077 km", "About 960 km", "About 724 km", "About 1,312 km"],
    answer: 3,
    explanation: "The Narmada is about 1,312 km long, the longest west-flowing river of peninsular India. About 1,077 km of it lies in MP. The figure of 724 km is the length of the Tapti."
  },
  {
    id: 19,
    question: "The Narmada finally drains into the:",
    options: ["Gulf of Kachchh", "Gulf of Khambhat", "Bay of Bengal", "Rann of Kachchh"],
    answer: 1,
    explanation: "The Narmada enters the Arabian Sea through a wide estuary in the Gulf of Khambhat (Cambay) near Bharuch, Gujarat. The Tapti and Mahi also end in the same gulf."
  },
  {
    id: 20,
    question: "Which is the largest tributary of the Narmada?",
    options: ["Banjar", "Hiran", "Tawa", "Shakkar"],
    answer: 2,
    explanation: "The Tawa, a left-bank tributary rising in the Satpura hills, is the largest tributary of the Narmada and joins it near Narmadapuram. The Hiran, Banjar and Shakkar are smaller tributaries."
  },
  {
    id: 21,
    question: "Which town of Madhya Pradesh is encircled on three sides by the Narmada?",
    options: ["Mandla", "Narmadapuram", "Jabalpur", "Maheshwar"],
    answer: 0,
    explanation: "The Narmada loops around Mandla so that the town is bounded by the river on three sides. Narmadapuram and Maheshwar stand on one bank of the Narmada, and Jabalpur lies a short distance from it."
  },
  {
    id: 22,
    question: "The Tapti river originates at:",
    options: ["Kumhra village in Raisen district", "Amarkantak in Anuppur district", "Multai in Betul district", "Janapav near Mhow in Indore district"],
    answer: 2,
    explanation: "The Tapti rises at Multai (ancient Multapi) on the Satpura plateau in Betul district. It flows west through Maharashtra and Gujarat to the Gulf of Khambhat near Surat."
  },
  {
    id: 23,
    question: "The Chambal river rises in:",
    options: ["The Maikal hills at Amarkantak", "The Janapav hills near Mhow, Indore district", "The Satpura plateau at Multai", "The Vindhyan hills near Minda, Dhar district"],
    answer: 1,
    explanation: "The Chambal originates in the Janapav hills of the Vindhyan range near Mhow (Dr Ambedkar Nagar) in Indore district. It flows north through MP and Rajasthan before joining the Yamuna."
  },
  {
    id: 24,
    question: "The Chambal river is a tributary of which river?",
    options: ["Yamuna", "Sindh", "Ganga directly", "Betwa"],
    answer: 0,
    explanation: "The Chambal flows north-east and joins the Yamuna near Etawah in Uttar Pradesh. Its own tributaries include the Kali Sindh, Parbati, Shipra and Banas."
  },
  {
    id: 25,
    question: "Which of the following is NOT a tributary of the Chambal?",
    options: ["Parbati", "Kali Sindh", "Hiran", "Shipra"],
    answer: 2,
    explanation: "The Hiran is a tributary of the Narmada in the Jabalpur–Narsinghpur region. The Shipra, Parbati and Kali Sindh all drain the Malwa plateau northward into the Chambal."
  },
  {
    id: 26,
    question: "In ancient texts, the Chambal river is referred to as:",
    options: ["Karnavati", "Vetravati", "Charmanvati", "Reva"],
    answer: 2,
    explanation: "Charmanvati is the ancient name of the Chambal. Vetravati is the Betwa, Karnavati is the Ken, and Reva is a name of the Narmada."
  },
  {
    id: 27,
    question: "The Betwa river originates in which district of Madhya Pradesh?",
    options: ["Guna", "Raisen", "Vidisha", "Sagar"],
    answer: 1,
    explanation: "The Betwa (Vetravati) rises near Kumhra village in Raisen district in the Vindhyan hills south of Bhopal. It flows north-east past Vidisha and Orchha to join the Yamuna near Hamirpur in UP."
  },
  {
    id: 28,
    question: "Which pair of historic towns stands on the banks of the Betwa?",
    options: ["Vidisha and Orchha", "Ujjain and Mahidpur", "Maheshwar and Omkareshwar", "Mandla and Bhedaghat"],
    answer: 0,
    explanation: "Vidisha and Orchha are both on the Betwa. Maheshwar, Omkareshwar, Mandla and Bhedaghat are on the Narmada, while Ujjain and Mahidpur are on the Shipra."
  },
  {
    id: 29,
    question: "The Son river, which rises at Amarkantak, ultimately joins which river?",
    options: ["Mahanadi", "Ganga", "Yamuna", "Narmada"],
    answer: 1,
    explanation: "The Son flows north and then east across Baghelkhand and Bihar to join the Ganga near Patna. It is the largest south-bank tributary of the Ganga; its tributaries include the Johila, Gopad, Banas and Rihand."
  },
  {
    id: 30,
    question: "Panna National Park lies along the course of which river?",
    options: ["Betwa", "Son", "Sindh", "Ken"],
    answer: 3,
    explanation: "The Ken flows north through the Panna plateau and the Panna National Park before joining the Yamuna at Chilla in Banda district, UP. The Ken–Betwa link project's Daudhan dam is also on the Ken in this area."
  },
  {
    id: 31,
    question: "The Raneh Falls, with a canyon of crystalline granite near Khajuraho, is formed by which river?",
    options: ["Son", "Ken", "Tons", "Betwa"],
    answer: 1,
    explanation: "Raneh Falls is on the Ken in Chhatarpur district, about 20 km from Khajuraho. The river has cut a deep gorge in multicoloured granite here, part of the Ken Gharial Sanctuary."
  },
  {
    id: 32,
    question: "The Simhastha (Kumbh) fair at Ujjain is held on the banks of which river?",
    options: ["Chambal", "Shipra", "Kali Sindh", "Gambhir"],
    answer: 1,
    explanation: "Ujjain stands on the Shipra (Kshipra), a tributary of the Chambal that rises near Indore. The Simhastha is held here every 12 years when Jupiter is in Leo (Simha)."
  },
  {
    id: 33,
    question: "Which river of western Madhya Pradesh crosses the Tropic of Cancer twice?",
    options: ["Chambal", "Tapti", "Narmada", "Mahi"],
    answer: 3,
    explanation: "The Mahi rises in Dhar district, flows north into Rajasthan crossing the Tropic, then turns south-west through Gujarat and crosses it again before entering the Gulf of Khambhat. The Narmada and Tapti stay south of the Tropic, and the Chambal crosses it only once."
  },
  {
    id: 34,
    question: "The Wainganga, which rises in Seoni district, belongs to which river system?",
    options: ["Godavari", "Ganga", "Mahanadi", "Narmada"],
    answer: 0,
    explanation: "The Wainganga rises near Mundara in Seoni district and flows south into Maharashtra, where it joins the Wardha to form the Pranhita, a major tributary of the Godavari. It is one of the few south-flowing rivers of MP."
  },
  {
    id: 35,
    question: "Which group of Madhya Pradesh rivers drains northward into the Yamuna?",
    options: ["Son, Johila and Gopad", "Wainganga, Wardha and Pench", "Narmada, Tapti and Mahi", "Chambal, Betwa and Ken"],
    answer: 3,
    explanation: "The Chambal, Betwa and Ken (along with the Sindh) flow north from the Vindhyan uplands to the Yamuna. The Narmada, Tapti and Mahi drain west to the Arabian Sea, the Wainganga group goes to the Godavari, and the Son group joins the Ganga directly."
  },
  {
    id: 36,
    question: "The Chachai and Keoti falls on the Rewa plateau are formed where tributaries of which river plunge over the plateau escarpment?",
    options: ["Ken", "Johila", "Tons", "Betwa"],
    answer: 2,
    explanation: "Chachai Falls (on the Bihad) and Keoti Falls (on the Mahana) are both on tributaries of the Tons (Tamsa) in Rewa district, where streams drop off the Rewa plateau. The Tons itself forms the Purwa Falls and later joins the Ganga."
  },
  {
    id: 37,
    question: "The Dhuandhar Falls at Bhedaghat are in which district?",
    options: ["Jabalpur", "Mandla", "Katni", "Narsinghpur"],
    answer: 0,
    explanation: "Dhuandhar ('smoke cascade') is on the Narmada at Bhedaghat, a short distance west of Jabalpur city. The spray rising from the falling water gives it its name."
  },
  {
    id: 38,
    question: "Bhedaghat on the Narmada is famous for a gorge cut through:",
    options: ["White marble rocks", "Columnar basalt", "Granite tors", "Red Vindhyan sandstone"],
    answer: 0,
    explanation: "At Bhedaghat the Narmada has carved a narrow gorge through white and coloured magnesian limestone (marble), the famous Marble Rocks. Columnar basalt is typical of Deccan Trap areas, not this gorge."
  },
  {
    id: 39,
    question: "Which is the first major waterfall on the Narmada after its source at Amarkantak?",
    options: ["Sahastradhara", "Bee Falls", "Kapildhara", "Dhuandhar"],
    answer: 2,
    explanation: "Kapildhara, a few km downstream of the source at Amarkantak, is the first major fall of the Narmada. Dhuandhar is at Bhedaghat (Jabalpur), Sahastradhara is near Maheshwar, and Bee Falls is a stream fall at Pachmarhi."
  },
  {
    id: 40,
    question: "The Upper Lake (Bada Talab) of Bhopal, part of the Bhoj Wetland Ramsar site, is traditionally credited to which ruler?",
    options: ["Raja Mansingh Tomar of Gwalior", "Rani Durgavati of Garha-Mandla", "Raja Bhoj of the Paramara dynasty", "Dost Mohammad Khan of Bhopal"],
    answer: 2,
    explanation: "The Upper Lake is credited to the Paramara king Raja Bhoj (11th century), who dammed the Kolans river. Together with the Lower Lake it forms the Bhoj Wetland, designated a Ramsar site in 2002."
  },
  {
    id: 41,
    question: "Sakhya Sagar, declared a Ramsar site in 2022, lies within Madhav National Park in which district?",
    options: ["Bhopal", "Shivpuri", "Sagar", "Guna"],
    answer: 1,
    explanation: "Sakhya Sagar is a reservoir inside Madhav National Park in Shivpuri district. It was designated a Ramsar wetland in 2022, the same year as Sirpur and Yashwant Sagar near Indore."
  },
  {
    id: 42,
    question: "Sirpur Lake and Yashwant Sagar, both designated Ramsar sites in 2022, are located in which district?",
    options: ["Ujjain", "Dewas", "Dhar", "Indore"],
    answer: 3,
    explanation: "Sirpur Lake (within Indore city) and Yashwant Sagar reservoir (near Indore) were both made Ramsar sites in 2022. Yashwant Sagar is an important bird area, notably for the Sarus crane."
  },
  {
    id: 43,
    question: "After Maihar, Mauganj and Pandhurna were made districts in 2023, Madhya Pradesh had how many districts?",
    options: ["53", "57", "52", "55"],
    answer: 3,
    explanation: "MP had 52 districts after Niwari was created in 2018. The three new districts of 2023 — Maihar (from Satna), Mauganj (from Rewa) and Pandhurna (from Chhindwara) — took the total to 55."
  },
  {
    id: 44,
    question: "Niwari, which became the 52nd district of Madhya Pradesh in 2018, was carved out of:",
    options: ["Tikamgarh", "Chhatarpur", "Shivpuri", "Datia"],
    answer: 0,
    explanation: "Niwari was separated from Tikamgarh district on 1 October 2018. It includes the historic town of Orchha on the Betwa and lies in the Bundelkhand region."
  },
  {
    id: 45,
    question: "Pandhurna district, created in 2023, was carved out of which district?",
    options: ["Balaghat", "Chhindwara", "Betul", "Seoni"],
    answer: 1,
    explanation: "Pandhurna was separated from Chhindwara in 2023. It lies on the Maharashtra border on the Satpura plateau and is known for its orange orchards and the Gotmar fair."
  },
  {
    id: 46,
    question: "Agar Malwa, formed in 2013 as the 51st district of Madhya Pradesh, was carved out of:",
    options: ["Dewas", "Ujjain", "Rajgarh", "Shajapur"],
    answer: 3,
    explanation: "Agar Malwa was carved out of Shajapur district on 16 August 2013. It lies on the Malwa plateau and the Tropic of Cancer passes through it."
  },
  {
    id: 47,
    question: "The headquarters of the Chambal revenue division is at:",
    options: ["Bhind", "Morena", "Gwalior", "Sheopur"],
    answer: 1,
    explanation: "The Chambal division, made up of Morena, Bhind and Sheopur districts, has its headquarters at Morena. Gwalior is the headquarters of the separate Gwalior division."
  },
  {
    id: 48,
    question: "Hoshangabad district and town on the Narmada were renamed in 2022 as:",
    options: ["Tawanagar", "Narmadanagar", "Revapuram", "Narmadapuram"],
    answer: 3,
    explanation: "In 2022 Hoshangabad was officially renamed Narmadapuram, and the division also became the Narmadapuram division. The town stands on the south bank of the Narmada near its confluence with the Tawa."
  },
  {
    id: 49,
    question: "The Kaimur hills of eastern Madhya Pradesh are an extension of which range?",
    options: ["Satpura range", "Vindhyan range", "Maikal range", "Aravalli range"],
    answer: 1,
    explanation: "The Kaimur hills are the eastern extension of the Vindhyan system, running across Katni, Satna and Rewa towards Bihar. They are built of Vindhyan sandstone and lie north of the Son valley."
  },
  {
    id: 50,
    question: "Which of these districts lies in the Baghelkhand plateau region?",
    options: ["Sidhi", "Mandsaur", "Betul", "Datia"],
    answer: 0,
    explanation: "Baghelkhand in the north-east includes Rewa, Sidhi, Singrauli, Satna and Shahdol. Datia belongs to Bundelkhand, Mandsaur to Malwa, and Betul to the Satpura plateau."
  }
];

export default questions;

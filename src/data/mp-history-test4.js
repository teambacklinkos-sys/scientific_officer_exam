const questions = [
  {
    id: 1,
    question: "Kunwar Chain Singh, often called one of the earliest martyrs of the freedom struggle in Madhya Pradesh, was killed in 1824 fighting British troops at Sehore. He belonged to which princely state?",
    options: ["Amjhera", "Rajgarh", "Narsinghgarh", "Raghogarh"],
    answer: 2,
    explanation: "Kunwar Chain Singh of Narsinghgarh refused British orders and was killed fighting the troops of the Political Agent at Sehore on 24 July 1824. A memorial at Sehore honours him. Amjhera's Raja Bakhtawar Singh belongs to 1857."
  },
  {
    id: 2,
    question: "After his escape from British custody in 1818, the deposed Bhonsle ruler Appa Sahib, backed by Gond chiefs, kept up resistance from which hill region?",
    options: ["The Maikal hills around Amarkantak", "The Vindhya hills around Bhimbetka", "The Mahadeo hills around Pachmarhi", "The Kaimur hills around Rewa"],
    answer: 2,
    explanation: "Appa Sahib of Nagpur escaped in 1818 and took shelter with Gond chiefs in the Mahadeo hills of the Satpura range, raiding British posts from there. When this failed, he fled to Asirgarh and later to the Punjab. The episode shows early Gond support for resistance to the British."
  },
  {
    id: 3,
    question: "The Bundela uprising of 1842 in the Saugor and Nerbudda Territories is chiefly associated with which leader, who was hanged at Sagar in 1843?",
    options: ["Madhukar Shah of Narhat", "Mardan Singh of Banpur", "Bakht Bali of Shahgarh", "Chhatrasal of Panna"],
    answer: 0,
    explanation: "In 1842 Bundela chiefs, led by Madhukar Shah of Narhat and Jawahar Singh of Chandrapur, rose against harsh British revenue and court actions, and Gond chiefs such as Delhan Shah of Madanpur joined them. Madhukar Shah was captured and hanged at Sagar. Mardan Singh and Bakht Bali led the Bundelkhand rising of 1857."
  },
  {
    id: 4,
    question: "After Raja Shankar Shah and Raghunath Shah were blown from cannons at Jabalpur on 18 September 1857, which unit stationed at Jabalpur rose in revolt?",
    options: ["The Gwalior Contingent", "The 52nd Bengal Native Infantry", "The Bhopal Contingent", "The Malwa Bhil Corps"],
    answer: 1,
    explanation: "The execution of the Gond king and his son angered the sepoys of the 52nd Native Infantry at Jabalpur, who rebelled and marched off to join the rebels. The Gwalior Contingent rose at Morar and Gwalior, and the Bhopal Contingent at Sehore. The Gond martyrs are honoured on 18 September each year."
  },
  {
    id: 5,
    question: "Bhima Nayak, the Bhil leader who fought the British in 1857 and kept in touch with Tatya Tope, was active mainly in which region?",
    options: ["Nimar (Barwani area)", "Mahakoshal (Jabalpur area)", "Bundelkhand (Sagar area)", "Baghelkhand (Rewa area)"],
    answer: 0,
    explanation: "Bhima Nayak led the Bhils of the Barwani–Nimar region and gave Tatya Tope support when he crossed the Narmada in 1858. His base was at Dhaba Bawdi near Barwani, where a memorial now stands. He is one of the main tribal heroes of western MP."
  },
  {
    id: 6,
    question: "Bhima Nayak was eventually captured and transported overseas. Where did he die in 1876?",
    options: ["Rangoon, Burma", "Port Blair, Andaman Islands", "Mandalay, Burma", "Aden"],
    answer: 1,
    explanation: "Bhima Nayak was betrayed, captured and sentenced to transportation to the Andamans, where he died at Port Blair in 1876. Bahadur Shah Zafar was exiled to Rangoon. Transportation to the Andamans was the usual punishment for leading rebels."
  },
  {
    id: 7,
    question: "Khajya Naik, a Bhil leader of 1857 who had earlier served the British as a guard on the Agra–Bombay road, led a rising in which area?",
    options: ["Mandla–Dindori", "Betul–Harda", "Sendhwa–Barwani", "Shahdol–Umaria"],
    answer: 2,
    explanation: "Khajya Naik had guarded the Sendhwa ghat section of the Agra–Bombay road for the British before turning against them in 1857. He joined Bhima Nayak, and the two harried British posts in western Nimar. Both are honoured as tribal freedom fighters of the Barwani region."
  },
  {
    id: 8,
    question: "Tantya Bhil, who robbed the rich and helped the poor in the Nimar–Malwa region, was described in the foreign press of his time as:",
    options: ["The 'Lion of Malwa'", "The 'Iron Man of Nimar'", "The 'Bhil Napoleon'", "The 'Indian Robin Hood'"],
    answer: 3,
    explanation: "Tantya Bhil (Tantya Mama) was a celebrated rebel of the 1870s–80s who raided British treasuries and moneylenders and shared the loot with the poor. Newspapers including The New York Times called him the 'Indian Robin Hood'. He is a folk hero in Nimar and Malwa."
  },
  {
    id: 9,
    question: "Tantya Bhil was tried and hanged by the British in December 1889 at:",
    options: ["Indore", "Jabalpur", "Khandwa", "Sagar"],
    answer: 1,
    explanation: "Tantya Bhil was captured through betrayal, tried in the Jabalpur sessions court and hanged on 4 December 1889. Tradition says his body was left near Patalpani, close to Indore, where his memorial now stands. 4 December is remembered as his martyrdom day."
  },
  {
    id: 10,
    question: "In 2021–22 the Patalpani railway station near Indore was renamed after which tribal hero?",
    options: ["Bhima Nayak", "Khajya Naik", "Raja Shankar Shah", "Tantya Bhil"],
    answer: 3,
    explanation: "Patalpani station on the Mhow–Khandwa line was renamed after Tantya Bhil (Tantya Mama), because tradition says his body was left near Patalpani after his execution. A temple-memorial to him stands there, and tribal communities visit it. The renaming was part of MP's push to honour its tribal freedom fighters."
  },
  {
    id: 11,
    question: "Tantya Bhil was born around 1842 in the village of Badda, in which present district?",
    options: ["Khandwa", "Jhabua", "Alirajpur", "Dhar"],
    answer: 0,
    explanation: "Tantya Bhil was born at Badda in Pandhana tehsil of Khandwa (East Nimar) district. He operated across East and West Nimar and the Malwa plateau, using the Satpura forests as cover. Jhabua and Alirajpur are Bhil-majority districts but not his birthplace."
  },
  {
    id: 12,
    question: "Veer Narayan Singh, zamindar of Sonakhan, regarded as the first martyr of 1857 in Chhattisgarh (then part of the Nagpur Province, later of the Central Provinces), was hanged in December 1857 at:",
    options: ["Raipur", "Jabalpur", "Nagpur", "Bilaspur"],
    answer: 0,
    explanation: "Narayan Singh, a Binjhwar tribal zamindar, broke open a merchant's grain store during the famine of 1856 to feed the starving. He was jailed, escaped in 1857 and raised a force, then was captured and publicly hanged at Raipur on 10 December 1857. He is honoured as Chhattisgarh's first martyr."
  },
  {
    id: 13,
    question: "The Congress session of December 1920, held in the Central Provinces, where the Non-Cooperation resolution was ratified and the party's constitution revised, took place at:",
    options: ["Jabalpur", "Tripuri", "Nagpur", "Raipur"],
    answer: 2,
    explanation: "The Nagpur session of December 1920, presided over by C. Vijayaraghavachariar, ratified the Non-Cooperation programme passed at the special Calcutta session. It also set up linguistic Provincial Congress Committees, including Mahakoshal. Nagpur was then the capital of the Central Provinces."
  },
  {
    id: 14,
    question: "Chandrashekhar Azad, who was born in 1906 in present-day Madhya Pradesh, earned the name 'Azad' when, as a teenage protester, he was tried during which movement?",
    options: ["The Non-Cooperation Movement", "The Civil Disobedience Movement", "The Quit India Movement", "The Swadeshi Movement"],
    answer: 0,
    explanation: "Arrested at about 15 during the Non-Cooperation Movement in 1921, Chandrashekhar gave his name as 'Azad' (free), his father's name as 'Swatantrata' (independence) and his home as 'jail' when the magistrate questioned him. He was sentenced to flogging. He later led the Hindustan Socialist Republican Association."
  },
  {
    id: 15,
    question: "Chandrashekhar Azad was born at Bhabhra, which is now in which district?",
    options: ["Jhabua", "Dhar", "Alirajpur", "Barwani"],
    answer: 2,
    explanation: "Bhabhra, Azad's birthplace (23 July 1906), is in Alirajpur district, which was carved out of Jhabua in 2008. The village has been renamed Chandrashekhar Azad Nagar. He grew up among the Bhils of the area, from whom he is said to have learnt archery."
  },
  {
    id: 16,
    question: "While evading the police, Chandrashekhar Azad lived for some time on the banks of the Satar river near Orchha under which assumed identity?",
    options: ["Balraj", "Pandit Harishankar Brahmachari", "Swami Ramanand", "Ram Prasad"],
    answer: 1,
    explanation: "Near Orchha, Azad lived in a hut by the Satar river as 'Pandit Harishankar Brahmachari', teaching village children and secretly training comrades. A memorial marks the place. 'Balraj' was the name he signed on revolutionary pamphlets, not this cover identity."
  },
  {
    id: 17,
    question: "The Jhanda (Flag) Satyagraha of 1923, which began in Jabalpur and spread to Nagpur, was launched mainly to assert the right to:",
    options: ["Hoist the national flag on public buildings and in public processions", "Make salt without paying the salt tax", "Graze cattle and collect forest produce in reserved forests", "Enter temples closed to Dalits"],
    answer: 0,
    explanation: "In March 1923 Congress workers in Jabalpur hoisted the tricolour on the Town Hall and were arrested. The protest then moved to Nagpur, where the authorities had banned processions with the flag. The salt and forest protests belong to the Civil Disobedience period."
  },
  {
    id: 18,
    question: "Who is remembered as the first woman satyagrahi to court arrest in the Jhanda Satyagraha of 1923?",
    options: ["Subhadra Kumari Chauhan", "Sarojini Naidu", "Kamla Nehru", "Rani Padmavati"],
    answer: 0,
    explanation: "The Hindi poet Subhadra Kumari Chauhan of Jabalpur took part in the 1923 Flag Satyagraha and is said to be the first woman satyagrahi to court arrest in it. She went to jail several times during the freedom struggle. She is best known for her poem 'Jhansi ki Rani'."
  },
  {
    id: 19,
    question: "The Nagpur phase of the Flag Satyagraha (1923) was led mainly by:",
    options: ["Jawaharlal Nehru and Motilal Nehru", "Subhas Chandra Bose and C.R. Das", "Vallabhbhai Patel and Jamnalal Bajaj", "Rajendra Prasad and Acharya Kripalani"],
    answer: 2,
    explanation: "When the flag protests moved to Nagpur, Vallabhbhai Patel and Jamnalal Bajaj organised volunteers from many provinces, and hundreds courted arrest. The agitation ended in August 1923 when the government allowed the flag procession. It was a key Gandhian protest after Non-Cooperation was withdrawn."
  },
  {
    id: 20,
    question: "Pandit Sunderlal, a leader of the 1923 Flag Satyagraha in Jabalpur, wrote which book that the British banned soon after it was published in 1929?",
    options: ["Hind Swaraj", "Poverty and Un-British Rule in India", "Bharat Mein Angrezi Raj", "Anandamath"],
    answer: 2,
    explanation: "Pandit Sunderlal's 'Bharat Mein Angrezi Raj' (1929) was a detailed indictment of British rule, and the government proscribed it within days. Hind Swaraj was by Gandhi, Poverty and Un-British Rule by Dadabhai Naoroji, and Anandamath by Bankim Chandra."
  },
  {
    id: 21,
    question: "The only session of the Indian National Congress held within present-day Madhya Pradesh took place at Tripuri near Jabalpur in 1939. Its president, Subhas Chandra Bose, had won the election against:",
    options: ["Maulana Azad", "Pattabhi Sitaramayya", "Rajendra Prasad", "Jawaharlal Nehru"],
    answer: 1,
    explanation: "In January 1939 Bose defeated Gandhi's candidate, Pattabhi Sitaramayya, and Gandhi called the defeat 'more mine than his'. The Tripuri session in March 1939 was dominated by the clash, and Bose, who was ill, could not form a Working Committee. Rajendra Prasad took over as president after Bose resigned."
  },
  {
    id: 22,
    question: "After resigning as Congress president following the Tripuri crisis of 1939, Subhas Chandra Bose formed:",
    options: ["The Swaraj Party", "The Congress Socialist Party", "The Indian Independence League", "The Forward Bloc"],
    answer: 3,
    explanation: "Bose resigned in April 1939 and founded the All India Forward Bloc in May 1939 to unite radical forces in the Congress. The Swaraj Party was formed by C.R. Das and Motilal Nehru in 1923, and the Congress Socialist Party in 1934. The Indian Independence League worked in South-East Asia during the Second World War."
  },
  {
    id: 23,
    question: "During the Civil Disobedience Movement of 1930, people in the Central Provinces mainly took up Jungle Satyagraha instead of breaking the salt law. The main reason was that:",
    options: ["Gandhi had banned salt satyagraha outside Gujarat", "The region had no coastline, but its people suffered under harsh forest laws", "Salt was not taxed in the Central Provinces", "The Congress in the province had split from the national leadership"],
    answer: 1,
    explanation: "Inland Central India had no sea coast for making salt, so local leaders chose a grievance closer to home: forest laws that restricted grazing, wood-cutting and the collection of grass and forest produce. Tribal communities in Seoni, Betul and elsewhere broke these laws in large numbers."
  },
  {
    id: 24,
    question: "Turia, where police fired on tribal protesters during the Jungle Satyagraha of 9 October 1930, is in which district?",
    options: ["Betul", "Mandla", "Chhindwara", "Seoni"],
    answer: 3,
    explanation: "At Turia in Seoni district, tribal protesters cutting grass in the reserved forest were fired on, and several of them, including women, were killed. The incident is a landmark of the forest satyagraha in Mahakoshal. Ghoda Dongri in Betul was another major centre."
  },
  {
    id: 25,
    question: "Ganjan Singh Korku led the Jungle Satyagraha of 1930 at Ghoda Dongri in which district?",
    options: ["Seoni", "Betul", "Harda", "Khandwa"],
    answer: 1,
    explanation: "Ganjan Singh Korku mobilised Korku and Gond tribals at Ghoda Dongri and Banjari Dhal in Betul district to break the forest laws in 1930. He is remembered as one of Betul's foremost tribal freedom fighters."
  },
  {
    id: 26,
    question: "The Charan Paduka massacre of 14 January 1931, in which police fired on a peaceful gathering on Makar Sankranti and which is often called the 'Jallianwala Bagh of Madhya Pradesh', took place in which district?",
    options: ["Chhatarpur", "Tikamgarh", "Panna", "Sagar"],
    answer: 0,
    explanation: "On Makar Sankranti 1931, villagers met at Charan Paduka on the Urmil river in Chhatarpur district to protest against British policies and the princely state's revenue demands. Police fired on them, killing several people. Because of the scale and setting, it is called the Jallianwala Bagh of MP."
  },
  {
    id: 27,
    question: "Udaychand Jain, a student shot dead by police during the Quit India Movement in August 1942, is remembered as a martyr of which town?",
    options: ["Seoni", "Sagar", "Hoshangabad", "Mandla"],
    answer: 3,
    explanation: "Udaychand Jain, a young student, was killed in police firing on a Quit India procession at Mandla in August 1942. A memorial in Mandla honours him. Many students across MP were arrested or killed in 1942."
  },
  {
    id: 28,
    question: "The Hindi poet Bhawani Prasad Mishra, author of 'Geet Farosh', was imprisoned for about three years for his part in which movement?",
    options: ["The Non-Cooperation Movement", "The Jhanda Satyagraha", "The Quit India Movement", "The Bhopal merger movement"],
    answer: 2,
    explanation: "Bhawani Prasad Mishra joined the Quit India Movement in 1942 and was jailed until about 1945. A leading poet of the 'Doosra Saptak' generation, he later won the Sahitya Akademi Award for 'Buni Hui Rassi'. He came from Hoshangabad (Narmadapuram) district."
  },
  {
    id: 29,
    question: "Which poet and freedom fighter wrote under the pen name 'Ek Bharatiya Atma' (An Indian Soul)?",
    options: ["Maithili Sharan Gupt", "Balkrishna Sharma 'Naveen'", "Subhadra Kumari Chauhan", "Makhanlal Chaturvedi"],
    answer: 3,
    explanation: "Makhanlal Chaturvedi, born at Babai in Hoshangabad district in 1889, wrote patriotic poetry as 'Ek Bharatiya Atma'. He was jailed several times. The Makhanlal Chaturvedi National University of Journalism in Bhopal is named after him."
  },
  {
    id: 30,
    question: "Makhanlal Chaturvedi wrote his famous poem 'Pushp ki Abhilasha' while imprisoned in which jail?",
    options: ["Bilaspur", "Jabalpur", "Nagpur", "Yerwada"],
    answer: 0,
    explanation: "Makhanlal Chaturvedi wrote 'Pushp ki Abhilasha' in Bilaspur jail in 1922. In the poem, a flower wishes to be thrown on the path walked by the nation's martyrs rather than adorn gods or kings. It is one of the best-known patriotic poems in Hindi."
  },
  {
    id: 31,
    question: "Which nationalist Hindi weekly did Makhanlal Chaturvedi edit, first from Jabalpur and later from Khandwa?",
    options: ["Pratap", "Abhyudaya", "Swadesh", "Karmaveer"],
    answer: 3,
    explanation: "Karmaveer, first published from Jabalpur in 1920 and later from Khandwa, was Makhanlal Chaturvedi's main platform for spreading nationalist ideas in Central India. Pratap was Ganesh Shankar Vidyarthi's paper from Kanpur, and Abhyudaya was Madan Mohan Malaviya's paper."
  },
  {
    id: 32,
    question: "Makhanlal Chaturvedi won the first Sahitya Akademi Award given for Hindi (1955) for which collection?",
    options: ["Him Kiritini", "Him Taringini", "Yug Charan", "Sahitya Devta"],
    answer: 1,
    explanation: "The Sahitya Akademi gave its first Hindi award, in 1955, to Makhanlal Chaturvedi for the poetry collection 'Him Taringini'. 'Him Kiritini' and 'Yug Charan' are other collections of his, so do not confuse them with the award-winning book. He was also awarded the Padma Bhushan."
  },
  {
    id: 33,
    question: "Which poet and freedom fighter from Shajapur wrote the revolutionary lines 'Kavi, kuchh aisi taan sunao, jisse uthal-puthal mach jaye'?",
    options: ["Balkrishna Sharma 'Naveen'", "Makhanlal Chaturvedi", "Bhawani Prasad Mishra", "Subhadra Kumari Chauhan"],
    answer: 0,
    explanation: "Balkrishna Sharma 'Naveen', born at Bhayana in Shajapur district, wrote 'Viplav Gaan', from which these famous lines come. He was jailed several times and later served in Parliament. He succeeded Ganesh Shankar Vidyarthi as editor of 'Pratap'."
  },
  {
    id: 34,
    question: "Which poet and Jabalpur freedom fighter wrote the poem 'Jhansi ki Rani' with the line 'Khoob ladi mardani woh to Jhansi wali rani thi'?",
    options: ["Mahadevi Varma", "Makhanlal Chaturvedi", "Maithili Sharan Gupt", "Subhadra Kumari Chauhan"],
    answer: 3,
    explanation: "Subhadra Kumari Chauhan's 'Jhansi ki Rani', written in Bundeli-flavoured Hindi, is one of the most recited poems in India. She lived in Jabalpur and was active in the Congress. Mahadevi Varma was her schoolmate at Allahabad."
  },
  {
    id: 35,
    question: "Mahatma Gandhi presided over the 1918 session of the Hindi Sahitya Sammelan, where he argued for Hindi as the national language. Where was this session held?",
    options: ["Jabalpur", "Gwalior", "Bhopal", "Indore"],
    answer: 3,
    explanation: "Gandhi presided over the Hindi Sahitya Sammelan at Indore in 1918 and argued that Hindi (Hindustani) should be India's common language. He presided over the Sammelan at Indore again in 1935. Indore, under the Holkars, was an important centre of Hindi activity."
  },
  {
    id: 36,
    question: "Which Jabalpur Congress leader and Hindi playwright was a leading champion of Hindi as the official language in the Constituent Assembly?",
    options: ["Ravishankar Shukla", "Seth Govind Das", "Dwarka Prasad Mishra", "Pandit Sunderlal"],
    answer: 1,
    explanation: "Seth Govind Das, from a wealthy Jabalpur family, gave up his inheritance to join the freedom struggle and wrote many Hindi plays. In the Constituent Assembly he pushed strongly for Hindi in Devanagari as the official language. He later represented Jabalpur in the Lok Sabha for many years."
  },
  {
    id: 37,
    question: "Who was the first Chief Minister of the reorganised state of Madhya Pradesh in 1956?",
    options: ["Dwarka Prasad Mishra", "Kailash Nath Katju", "Pt. Ravishankar Shukla", "Bhagwantrao Mandloi"],
    answer: 2,
    explanation: "Pandit Ravishankar Shukla took office as first Chief Minister of the new Madhya Pradesh on 1 November 1956 but died on 31 December 1956. Bhagwantrao Mandloi briefly succeeded him, followed by Kailash Nath Katju. Dwarka Prasad Mishra became Chief Minister in 1963."
  },
  {
    id: 38,
    question: "Before becoming Chief Minister of the new Madhya Pradesh, Pt. Ravishankar Shukla had headed the government of which province from 1946?",
    options: ["United Provinces", "Bombay Presidency", "Madhya Bharat", "Central Provinces and Berar"],
    answer: 3,
    explanation: "Ravishankar Shukla, a Congress leader from Raipur, became Premier (later Chief Minister) of the Central Provinces and Berar in 1946 and continued as head of the Part A state of Madhya Pradesh after 1950. Pt. Ravishankar Shukla University in Raipur is named after him."
  },
  {
    id: 39,
    question: "Dwarka Prasad Mishra, freedom fighter and later Chief Minister of Madhya Pradesh, is also known as the author of which epic poem on the life of Krishna?",
    options: ["Krishnayan", "Saket", "Kamayani", "Priyapravas"],
    answer: 0,
    explanation: "Dwarka Prasad Mishra wrote 'Krishnayan', an Awadhi epic on Krishna's life, while in jail during the Quit India period. He was a key Mahakoshal Congress leader and Chief Minister of MP from 1963 to 1967. 'Saket' is by Maithili Sharan Gupt, 'Kamayani' by Jaishankar Prasad, and 'Priyapravas' by Ayodhya Singh Upadhyay 'Hariaudh'."
  },
  {
    id: 40,
    question: "Dr B.R. Ambedkar, chairman of the Constitution's Drafting Committee, was born in 1891 at which cantonment town in Madhya Pradesh?",
    options: ["Sagar", "Mhow", "Jabalpur", "Morar"],
    answer: 1,
    explanation: "Ambedkar was born at Mhow (now officially Dr Ambedkar Nagar) on 14 April 1891, where his father served in the army. The Bhim Janmabhoomi memorial stands at his birthplace. Mhow was set up as a cantonment under the Treaty of Mandsaur in 1818."
  },
  {
    id: 41,
    question: "Which of the following pairs of freedom fighter and home district is incorrectly matched?",
    options: ["Bhawani Prasad Mishra — Rewa", "Makhanlal Chaturvedi — Narmadapuram (Hoshangabad)", "Balkrishna Sharma 'Naveen' — Shajapur", "Chandrashekhar Azad — Alirajpur"],
    answer: 0,
    explanation: "Bhawani Prasad Mishra was born at Tigaria in Hoshangabad (Narmadapuram) district, not Rewa. Makhanlal Chaturvedi was born at Babai (Narmadapuram), Naveen at Bhayana (Shajapur) and Azad at Bhabhra (Alirajpur). So the Rewa pairing is the incorrect one."
  },
  {
    id: 42,
    question: "Arrange these events in chronological order: Charan Paduka massacre; Tripuri Congress session; Jhanda Satyagraha at Jabalpur; Turia Jungle Satyagraha.",
    options: ["Turia → Jhanda Satyagraha → Charan Paduka → Tripuri", "Jhanda Satyagraha → Charan Paduka → Turia → Tripuri", "Jhanda Satyagraha → Turia → Tripuri → Charan Paduka", "Jhanda Satyagraha → Turia → Charan Paduka → Tripuri"],
    answer: 3,
    explanation: "The Jhanda Satyagraha was in 1923, the Turia firing in October 1930, the Charan Paduka massacre in January 1931, and the Tripuri session in March 1939. Turia and Charan Paduka are only three months apart, so they are easy to swap. Remember that Charan Paduka took place on Makar Sankranti 1931."
  },
  {
    id: 43,
    question: "Among the Gonds, which community serves as hereditary bards who recite the clan genealogies and the creation myths of their Gond patrons?",
    options: ["Baiga", "Agaria", "Pardhan", "Ojha"],
    answer: 2,
    explanation: "The Pardhans are traditional bards to the Raj Gonds. They recite the Gond myths of origin, the story of the culture hero Lingo and clan histories, receiving gifts in return. Pardhan Gond painting, made famous by Jangarh Singh Shyam, grew out of this storytelling tradition."
  },
  {
    id: 44,
    question: "The Gond epic of the culture hero Lingo was first written down in the mid-19th century by which Scottish missionary working at Nagpur?",
    options: ["Verrier Elwin", "Stephen Hislop", "W.V. Grigson", "Christoph von Fürer-Haimendorf"],
    answer: 1,
    explanation: "Rev. Stephen Hislop collected the Lingo epic from Pardhan singers, and it was published after his death in 'Papers Relating to the Aboriginal Tribes of the Central Provinces' (1866). It is the earliest written record of a Gond oral epic. Elwin, Grigson and Fürer-Haimendorf worked in the 20th century."
  },
  {
    id: 45,
    question: "In Gond oral tradition, which culture hero is believed to have freed the Gond gods, organised the clans and taught the people music and social rules?",
    options: ["Nanga Baiga", "Lingo", "Bhimsen", "Khandoba"],
    answer: 1,
    explanation: "In the Gond creation myth, Lingo (Pahandi Pari Kupar Lingo) frees the gods and ancestors imprisoned in a cave, sorts them into the phratries and clans, and gives the Gonds music and social laws. Nanga Baiga belongs to Baiga myth. Bhimsen is worshipped by some Gonds, but he is not the clan-founding hero."
  },
  {
    id: 46,
    question: "Raja Shankar Shah, the Gond king executed at Jabalpur in 1857, was a descendant of which royal house?",
    options: ["The Gond kings of Deogarh", "The Gond kings of Kherla", "The Gond kings of Garha-Mandla", "The Gond kings of Chanda"],
    answer: 2,
    explanation: "Shankar Shah belonged to the old Garha-Mandla line of Sangram Shah and Rani Durgavati, whose kingdom the Marathas had absorbed in the 18th century. He held only a small pension and estate near Jabalpur under the British. His royal descent made him a natural rallying point for Gond resistance in 1857."
  },
  {
    id: 47,
    question: "The Masaram Gondi script, now encoded in Unicode for writing the Gondi language, was devised in 1918 by:",
    options: ["Verrier Elwin", "Munshi Mangal Singh Masaram", "Jangarh Singh Shyam", "Shamrao Hivale"],
    answer: 1,
    explanation: "Munshi Mangal Singh Masaram created the script in 1918 so that Gondi oral literature could be written in a script of its own. It was added to Unicode in 2017. Jangarh Singh Shyam was a Pardhan Gond painter, and Elwin and Hivale were ethnographers."
  },
  {
    id: 48,
    question: "Korku, spoken by the Korku tribe of the Satpura region (Betul, Harda, Khandwa), belongs to which language family?",
    options: ["Dravidian", "Indo-Aryan", "Tibeto-Burman", "Austroasiatic (Munda)"],
    answer: 3,
    explanation: "Korku is the westernmost Munda language and is related to Santali and Mundari of eastern India. It survives as an island of Austroasiatic speech in the Satpura hills of MP and Maharashtra (Melghat). This makes the Korkus important for the linguistic history of central India."
  },
  {
    id: 49,
    question: "To pacify the Bhil uprisings that followed British occupation of Khandesh after 1818, the British raised a Bhil Corps in 1825 under which officer?",
    options: ["John Malcolm", "W.H. Sleeman", "James Outram", "Hugh Rose"],
    answer: 2,
    explanation: "James Outram raised the Khandesh Bhil Corps in 1825. It recruited Bhils as soldiers and police so they would stop raiding, and similar corps were later raised for Malwa. Sleeman is known for suppressing the thugs, and Hugh Rose for the 1858 Central India campaign."
  },
  {
    id: 50,
    question: "Verrier Elwin's classic ethnography 'The Baiga' (1939) was based mainly on his years of fieldwork in which region?",
    options: ["The Mandla region of the Maikal hills", "The Jhabua–Alirajpur Bhil belt", "The Bastar plateau", "The Melghat forests of Berar"],
    answer: 0,
    explanation: "Elwin lived among the Gonds and Baigas of the undivided Mandla district (including present Dindori) from the 1930s, working with Shamrao Hivale. 'The Baiga' and 'Folk-Songs of the Maikal Hills' record their myths, songs and customs. His Bastar studies, on the Muria and Maria, came later."
  }
];

export default questions;

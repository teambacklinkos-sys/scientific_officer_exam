const questions = [
  {
    id: 1,
    question: "During the First Anglo-Maratha War, the British under Captain Popham captured which fort in 1780 in a daring night escalade?",
    options: ["Asirgarh", "Mandu", "Gwalior", "Raisen"],
    answer: 2,
    explanation: "On 3 August 1780, Captain William Popham's troops scaled the cliffs of Gwalior fort, which belonged to Mahadji Scindia, and took it. This loss pushed Mahadji towards peace. The fort was given to the Rana of Gohad, and Mahadji recovered it in 1784."
  },
  {
    id: 2,
    question: "Which Maratha chief, ruler of Gwalior, acted as mediator for the Treaty of Salbai (1782) that ended the First Anglo-Maratha War?",
    options: ["Tukoji Holkar", "Nana Phadnavis", "Daulat Rao Scindia", "Mahadji Scindia"],
    answer: 3,
    explanation: "Mahadji Scindia mediated the Treaty of Salbai between the East India Company and the Peshwa's government. It restored the pre-war position and kept peace for about twenty years. The treaty raised Mahadji's standing, and he went on to dominate the Mughal court at Delhi."
  },
  {
    id: 3,
    question: "After his defeat in the Second Anglo-Maratha War, Daulat Rao Scindia signed which treaty with the British in December 1803?",
    options: ["Treaty of Bassein", "Treaty of Deogaon", "Treaty of Rajghat", "Treaty of Surji-Anjangaon"],
    answer: 3,
    explanation: "After defeats at Assaye and Laswari, Daulat Rao Scindia signed the Treaty of Surji-Anjangaon (30 December 1803) and gave up territory, including Delhi and Agra. Bassein (1802) was with the Peshwa, Deogaon (1803) with the Bhonsle of Nagpur, and Rajghat (1805) with Yashwantrao Holkar."
  },
  {
    id: 4,
    question: "The Battle of Mahidpur (21 December 1817), in which British forces under Sir Thomas Hislop defeated a Maratha army, was fought against the forces of:",
    options: ["The Scindias of Gwalior", "The Bhonsles of Nagpur", "The Holkars of Indore", "The Peshwa of Pune"],
    answer: 2,
    explanation: "At Mahidpur, in present-day Ujjain district, the Holkar army of the young Malhar Rao Holkar II was defeated by Hislop and Sir John Malcolm. It was one of the decisive battles of the Third Anglo-Maratha War. The Bhonsles were beaten at Sitabuldi and the Peshwa at Koregaon and Kirkee."
  },
  {
    id: 5,
    question: "Which treaty, signed in January 1818 after the Battle of Mahidpur, made the Holkar state a subsidiary ally of the British?",
    options: ["Treaty of Mandsaur", "Treaty of Gwalior", "Treaty of Burhanpur", "Treaty of Salbai"],
    answer: 0,
    explanation: "Under the Treaty of Mandsaur (6 January 1818), Holkar ceded territory, accepted a British Resident and gave up claims over the Rajput states. After this the Holkar capital moved to Indore. The Treaty of Gwalior (1817) had been signed with the Scindias."
  },
  {
    id: 6,
    question: "By the Treaty of Gwalior (November 1817), Daulat Rao Scindia mainly agreed to:",
    options: ["Hand Gwalior fort permanently to the British", "Cooperate with the British in suppressing the Pindaris", "Merge his state with British India", "Abolish sati and female infanticide in his territory"],
    answer: 1,
    explanation: "On the eve of the Pindari campaign, Lord Hastings made Daulat Rao Scindia sign the Treaty of Gwalior, promising to help destroy the Pindaris and not to shelter them. It took away an important source of Pindari support. Scindia's state stayed intact but under British dominance."
  },
  {
    id: 7,
    question: "Which Governor-General launched the large military campaign of 1817–18 that destroyed the Pindaris in central India?",
    options: ["Lord Wellesley", "Lord Hastings", "Lord Minto", "Lord Amherst"],
    answer: 1,
    explanation: "Lord Hastings (Governor-General 1813–1823) gathered large armies from Bengal and the Deccan to encircle and crush the Pindaris in Malwa. The campaign merged into the Third Anglo-Maratha War. By 1818 the Pindaris were broken up and their leaders had surrendered or been killed."
  },
  {
    id: 8,
    question: "The Pindari leader Chitu, who fled after the 1817–18 campaign, met his end in which way?",
    options: ["He was hanged at Indore", "He was transported to the Andaman Islands", "He was given an estate at Gorakhpur", "He was killed by a tiger in the forests near Asirgarh"],
    answer: 3,
    explanation: "Chitu, the most famous Pindari leader, fled into the jungles near Asirgarh, where he was killed by a tiger in 1819. His remains were identified from his belongings. Karim Khan, by contrast, surrendered and was settled on an estate in Gorakhpur."
  },
  {
    id: 9,
    question: "Which Pindari leader surrendered to the British and was settled on a small estate in the Gorakhpur district?",
    options: ["Chitu", "Karim Khan", "Wasil Muhammad", "Namdar Khan"],
    answer: 1,
    explanation: "Karim Khan surrendered in 1818 and was given lands at Sikandarpur in Gorakhpur district, where his descendants lived. Wasil Muhammad was captured and took poison, and Chitu died in the jungles near Asirgarh. Settling leaders peacefully helped end Pindari raids."
  },
  {
    id: 10,
    question: "Amir Khan, the Pathan military leader associated with the Pindaris, was recognised by the British in 1817 as Nawab of:",
    options: ["Jaora", "Bhopal", "Tonk", "Rampur"],
    answer: 2,
    explanation: "Amir Khan accepted British terms in 1817 and was recognised as Nawab of Tonk in Rajasthan. His associate Ghafur Khan was given the state of Jaora in Malwa under the Treaty of Mandsaur. Bhopal and Rampur had separate Afghan ruling houses."
  },
  {
    id: 11,
    question: "Sir John Malcolm, a key British officer in Malwa after 1818, is known as the author of:",
    options: ["A Memoir of Central India, including Malwa", "Annals and Antiquities of Rajasthan", "The History of British India", "Rambles and Recollections of an Indian Official"],
    answer: 0,
    explanation: "John Malcolm, political agent in Malwa after the Third Anglo-Maratha War, published A Memoir of Central India in 1823. It is a key source on the Maratha states, the Pindaris and Malwa society. James Tod wrote the Annals of Rajasthan, James Mill The History of British India, and W.H. Sleeman wrote Rambles and Recollections."
  },
  {
    id: 12,
    question: "The Mhow cantonment near Indore was established in 1818 as a result of which treaty?",
    options: ["Treaty of Surji-Anjangaon", "Treaty of Bassein", "Treaty of Mandsaur", "Treaty of Gwalior"],
    answer: 2,
    explanation: "The Treaty of Mandsaur let the British keep a force in Holkar territory, and Sir John Malcolm set up the cantonment at Mhow in 1818. Mhow is said to stand for 'Military Headquarters of War'. It later became an important army training centre and the birthplace of Dr B.R. Ambedkar."
  },
  {
    id: 13,
    question: "The Central India Agency, which supervised the princely states of central India, was formed in 1854 with its headquarters at:",
    options: ["Gwalior", "Sehore", "Indore", "Mhow"],
    answer: 2,
    explanation: "The Central India Agency was formed in 1854 under an Agent to the Governor-General based at Indore. It was divided into smaller agencies such as the Bhopal Agency (Sehore), the Bundelkhand Agency and the Baghelkhand Agency."
  },
  {
    id: 14,
    question: "The political agency that supervised Bhopal and the neighbouring small states had its headquarters at:",
    options: ["Bhopal city", "Vidisha", "Raisen", "Sehore"],
    answer: 3,
    explanation: "The Bhopal Agency had its headquarters at Sehore, where the Political Agent and a British cantonment were based. This is why Sehore saw a major sepoy rising in 1857. Bhopal city itself was the seat of the Nawab or Begum."
  },
  {
    id: 15,
    question: "Who was the first woman ruler of the Bhopal state, beginning more than a century of rule by the Begums?",
    options: ["Sikandar Begum", "Shah Jahan Begum", "Sultan Jahan Begum", "Qudsia Begum"],
    answer: 3,
    explanation: "Qudsia Begum (Gauhar Begum) became regent in 1819 after her husband Nazar Muhammad Khan's death and ruled until 1837. She was followed by Sikandar Begum, Shah Jahan Begum and Sultan Jahan Begum, who ruled Bhopal until 1926. She built the Jama Masjid of Bhopal."
  },
  {
    id: 16,
    question: "Which ruler of Bhopal stayed loyal to the British during the Revolt of 1857?",
    options: ["Sikandar Begum", "Qudsia Begum", "Sultan Jahan Begum", "Hamidullah Khan"],
    answer: 0,
    explanation: "Sikandar Begum kept Bhopal on the British side in 1857 and helped British officers. She was rewarded with territory (the Berasia pargana) and honours. She also modernised the state's administration and revenue system."
  },
  {
    id: 17,
    question: "The construction of the Taj-ul-Masajid in Bhopal, one of the largest mosques in Asia, was begun by:",
    options: ["Sikandar Begum", "Shah Jahan Begum", "Qudsia Begum", "Sultan Jahan Begum"],
    answer: 1,
    explanation: "Shah Jahan Begum (ruled 1868–1901) began the Taj-ul-Masajid, but work stopped after her death for lack of funds. It was completed only in the 1980s. She also founded the Shahjahanabad area of Bhopal."
  },
  {
    id: 18,
    question: "Sultan Jahan Begum of Bhopal holds the distinction of being the first Chancellor of:",
    options: ["Banaras Hindu University", "Aligarh Muslim University", "University of Allahabad", "Jamia Millia Islamia"],
    answer: 1,
    explanation: "When the Muhammadan Anglo-Oriental College became Aligarh Muslim University in 1920, Sultan Jahan Begum became its first Chancellor. She promoted women's education and wrote several books. She was the last of the four Begums and gave up the throne to her son Hamidullah Khan in 1926."
  },
  {
    id: 19,
    question: "Who founded the Bhopal state in the early 18th century?",
    options: ["Nazar Muhammad Khan", "Yar Muhammad Khan", "Dost Mohammad Khan", "Hamidullah Khan"],
    answer: 2,
    explanation: "Dost Mohammad Khan, an Afghan soldier from Tirah who had served in the Mughal army, carved out the Bhopal state in the 1720s and built the Fatehgarh fort. Yar Muhammad Khan was his successor. Nazar Muhammad Khan signed the treaty with the British in 1818, and Hamidullah Khan was the last Nawab."
  },
  {
    id: 20,
    question: "The Revolt of 1857 began in present-day Madhya Pradesh on 3 June 1857 at:",
    options: ["Indore", "Neemuch", "Sagar", "Jabalpur"],
    answer: 1,
    explanation: "The sepoys at the Neemuch cantonment rose on 3 June 1857. This is regarded as the start of the revolt in Madhya Pradesh. Indore and Mhow followed on 1 July 1857, and other stations rose over the following months."
  },
  {
    id: 21,
    question: "Who led the attack on the British Residency at Indore on 1 July 1857?",
    options: ["Bakhtawar Singh", "Firoz Shah", "Saadat Khan", "Bhima Nayak"],
    answer: 2,
    explanation: "Saadat Khan, a commander in the Holkar army, led the troops who attacked the Indore Residency on 1 July 1857, forcing the Resident to flee. He was captured years later and hanged at Indore in 1874. Tukoji Rao Holkar II officially stayed loyal to the British."
  },
  {
    id: 22,
    question: "At Sehore in 1857, the rebel sepoys of the Bhopal Contingent set up their own parallel government, which they called:",
    options: ["Azad Hind Sarkar", "Sipahi Raj Parishad", "Jan Swaraj Sabha", "Sipahi Bahadur Sarkar"],
    answer: 3,
    explanation: "In August 1857 the sepoys at Sehore took control and ran affairs as the 'Sipahi Bahadur Sarkar'. After the revolt was crushed, the British shot a large number of rebels at Sehore in January 1858. Azad Hind refers to Subhas Bose's government of 1943."
  },
  {
    id: 23,
    question: "The Gond king Raja Shankar Shah and his son Raghunath Shah were executed by being blown from cannons at Jabalpur in September 1857 because:",
    options: ["They had attacked the Jabalpur Residency", "They were planning a revolt, and poems urging the overthrow of the British were found with them", "They had sheltered Tatya Tope after his defeat at Gwalior", "They refused to pay tribute under the subsidiary alliance"],
    answer: 1,
    explanation: "Shankar Shah, descendant of the Garha-Mandla Gond kings, and his son Raghunath Shah were arrested after spies reported their plans. Poems calling on the goddess to destroy the British were found. They were blown from cannons at Jabalpur on 18 September 1857, a date now observed as their martyrdom day."
  },
  {
    id: 24,
    question: "Raja Bakhtawar Singh, who rose against the British in 1857 and was hanged at Indore in 1858, was the ruler of:",
    options: ["Amjhera", "Narsinghgarh", "Shahgarh", "Ramgarh"],
    answer: 0,
    explanation: "Bakhtawar Singh of Amjhera (in present-day Dhar district) attacked the British posts at Bhopawar and Sardarpur in 1857. He was captured and hanged at Indore in February 1858. Ramgarh was the state of Rani Avantibai and Shahgarh that of Raja Bakht Bali."
  },
  {
    id: 25,
    question: "Which Mughal prince proclaimed himself emperor at Mandsaur in 1857 and led rebel forces in western Malwa?",
    options: ["Mirza Mughal", "Firoz Shah", "Bahadur Shah Zafar", "Mirza Abu Bakr"],
    answer: 1,
    explanation: "Shahzada Firoz Shah, a relative of Bahadur Shah Zafar, raised the standard of revolt at Mandsaur in August 1857 and was proclaimed ruler. He fought in Malwa and later joined Tatya Tope. He escaped after the revolt and died in exile in Mecca."
  },
  {
    id: 26,
    question: "Rani Avantibai, who fought the British in 1857 and took her own life rather than surrender, was the ruler of:",
    options: ["Ramgarh", "Jhansi", "Amjhera", "Banpur"],
    answer: 0,
    explanation: "Rani Avantibai Lodhi ruled Ramgarh (in present-day Dindori district) after her husband's death. Her state had been taken under the Court of Wards. She raised a force in 1857, and when defeated in 1858 she killed herself with her sword. Banpur was the state of Raja Mardan Singh."
  },
  {
    id: 27,
    question: "Rani Lakshmibai of Jhansi was killed near Gwalior in June 1858 while fighting British forces led by:",
    options: ["Sir Colin Campbell", "Sir James Outram", "Sir Hugh Rose", "Sir Henry Havelock"],
    answer: 2,
    explanation: "After the rebels seized Gwalior in June 1858, Sir Hugh Rose's Central India Field Force attacked. Lakshmibai died fighting near Kotah-ki-Serai on 17–18 June 1858, and her samadhi is in Gwalior. Rose called her the bravest and best military leader of the rebels."
  },
  {
    id: 28,
    question: "When Tatya Tope and Rani Lakshmibai captured Gwalior in June 1858, the Scindia ruler who fled to Agra was:",
    options: ["Daulat Rao Scindia", "Madho Rao Scindia", "Jayajirao Scindia", "Jiwajirao Scindia"],
    answer: 2,
    explanation: "Jayajirao Scindia's army went over to the rebels at Morar, and he fled to Agra under British protection. He was restored after Gwalior was retaken later that month. Jiwajirao Scindia was the later ruler who became Rajpramukh of Madhya Bharat in 1948."
  },
  {
    id: 29,
    question: "Tatya Tope, betrayed by Man Singh of Narwar, was hanged on 18 April 1859 at:",
    options: ["Gwalior", "Shivpuri", "Jhansi", "Sagar"],
    answer: 1,
    explanation: "After a long guerrilla campaign across central India, Tatya Tope was handed over to the British by Man Singh, the dispossessed chief of Narwar. He was tried by court martial and hanged at Shivpuri (then Sipri) on 18 April 1859. A memorial stands there today."
  },
  {
    id: 30,
    question: "The Central Provinces, created in 1861 with Nagpur as capital, was formed by joining the Nagpur Province with the:",
    options: ["Central India Agency", "Saugor and Nerbudda Territories", "Bundelkhand Agency", "Berar Province"],
    answer: 1,
    explanation: "In 1861 the Saugor and Nerbudda Territories, taken from the Marathas in 1818, were joined to the annexed Nagpur Province to form the Central Provinces, under a Chief Commissioner at Nagpur. The Central India Agency covered princely states, not British territory. Berar was added later."
  },
  {
    id: 31,
    question: "Berar, previously assigned by the Nizam of Hyderabad, was attached administratively to the Central Provinces in:",
    options: ["1903", "1861", "1919", "1936"],
    answer: 0,
    explanation: "Berar came under the administration of the Central Provinces in 1903 (formally in 1903–04), although it stayed under the Nizam's nominal sovereignty. The combined province was renamed Central Provinces and Berar in 1936. After independence it became the state of Madhya Pradesh in 1950."
  },
  {
    id: 32,
    question: "Between 1950 and 1956, the Part A state of Madhya Pradesh (formed from the old Central Provinces and Berar) had its capital at:",
    options: ["Jabalpur", "Nagpur", "Bhopal", "Raipur"],
    answer: 1,
    explanation: "The first Madhya Pradesh, formed from Central Provinces and Berar, was governed from Nagpur. In 1956 its Marathi-speaking Vidarbha districts, including Nagpur, went to Bombay State. The new Madhya Pradesh then chose Bhopal as its capital."
  },
  {
    id: 33,
    question: "Who was the Rajpramukh of Madhya Bharat, the union of princely states formed in 1948?",
    options: ["Jiwajirao Scindia of Gwalior", "Yashwantrao Holkar II of Indore", "Martand Singh of Rewa", "Hamidullah Khan of Bhopal"],
    answer: 0,
    explanation: "Madhya Bharat was formed in 1948 from Gwalior, Indore and a number of smaller states of Malwa. Jiwajirao Scindia was Rajpramukh and Yashwantrao Holkar II was Up-Rajpramukh. Martand Singh of Rewa was Rajpramukh of Vindhya Pradesh."
  },
  {
    id: 34,
    question: "Madhya Bharat (1948–1956) had two capitals. These were:",
    options: ["Bhopal (winter) and Indore (summer)", "Gwalior (winter) and Ujjain (summer)", "Rewa (winter) and Gwalior (summer)", "Gwalior (winter) and Indore (summer)"],
    answer: 3,
    explanation: "Madhya Bharat used Gwalior as its winter capital and Indore as its summer capital, which balanced the two largest princely states. Bhopal was a separate Part C state, and Rewa was the capital of Vindhya Pradesh."
  },
  {
    id: 35,
    question: "Vindhya Pradesh, formed in 1948 from the princely states of Bundelkhand and Baghelkhand, had its capital at:",
    options: ["Rewa", "Satna", "Panna", "Chhatarpur"],
    answer: 0,
    explanation: "Vindhya Pradesh was formed in 1948 by joining about 35 states of Bundelkhand and Baghelkhand, with Rewa as capital. Martand Singh of Rewa was Rajpramukh. It became a Part C state in 1950 and was merged into the new Madhya Pradesh in 1956."
  },
  {
    id: 36,
    question: "The princely state of Bhopal was merged into the Indian Union as a centrally administered province on:",
    options: ["15 August 1947", "26 January 1950", "1 June 1949", "1 November 1956"],
    answer: 2,
    explanation: "Nawab Hamidullah Khan signed the Instrument of Accession in 1947 but resisted merger for nearly two years; under pressure from the merger movement and the Centre, Bhopal was taken over as a Chief Commissioner's province on 1 June 1949. It became a Part C state under the Constitution and merged into Madhya Pradesh on 1 November 1956."
  },
  {
    id: 37,
    question: "The Boras (Bauras) Ghat firing of 14 January 1949, in which young protesters were killed while hoisting the tricolour, took place during which movement?",
    options: ["The Quit India movement", "The Bhopal merger movement", "The Jungle Satyagraha", "The Jhanda Satyagraha"],
    answer: 1,
    explanation: "At Bauras on the Narmada, in present-day Raisen district, police of the Nawab's government fired on people hoisting the national flag on Makar Sankranti 1949, killing several young men. The firing strengthened the Vilinikaran (merger) Andolan, which led to Bhopal's merger in June 1949."
  },
  {
    id: 38,
    question: "Under the Constitution of 1950, Bhopal was classified as a:",
    options: ["Part A state", "Part B state", "Part D territory", "Part C state"],
    answer: 3,
    explanation: "Bhopal, like Vindhya Pradesh, was a Part C state, administered through a Chief Commissioner and later a small elected ministry. Old Madhya Pradesh (CP and Berar) was a Part A state, and Madhya Bharat was a Part B state headed by a Rajpramukh. Part D covered only the Andaman and Nicobar Islands."
  },
  {
    id: 39,
    question: "Who served as Chief Minister of the Part C state of Bhopal from 1952 to 1956 and later became President of India?",
    options: ["Ravishankar Shukla", "Kailash Nath Katju", "Dwarka Prasad Mishra", "Shankar Dayal Sharma"],
    answer: 3,
    explanation: "Dr Shankar Dayal Sharma, a leader of the Bhopal merger movement, was Chief Minister of Bhopal state from 1952 until it merged into Madhya Pradesh in 1956. He became the ninth President of India in 1992. Ravishankar Shukla was the first Chief Minister of the reorganised Madhya Pradesh."
  },
  {
    id: 40,
    question: "The States Reorganisation Commission, on whose recommendations the new Madhya Pradesh was formed on 1 November 1956, was chaired by:",
    options: ["K.M. Panikkar", "H.N. Kunzru", "Fazl Ali", "S.K. Dhar"],
    answer: 2,
    explanation: "The SRC (1953–55) was chaired by Justice Fazl Ali, with K.M. Panikkar and H.N. Kunzru as members. Its report led to the States Reorganisation Act, 1956. The S.K. Dhar Commission (1948) had earlier looked at linguistic states and advised against them."
  },
  {
    id: 41,
    question: "In the reorganisation of 1956, which territory was transferred from Rajasthan to the new Madhya Pradesh?",
    options: ["Sunel tappa", "Sironj sub-division", "Bhanpura tehsil", "Neemuch district"],
    answer: 1,
    explanation: "Sironj, earlier an enclave of the Tonk state, was transferred from Rajasthan to Madhya Pradesh and is now in Vidisha district. In exchange, the Sunel tappa of Mandsaur went to Rajasthan. Bhanpura and Neemuch stayed in Madhya Pradesh."
  },
  {
    id: 42,
    question: "In 1956, the Marathi-speaking Vidarbha region of the old Madhya Pradesh was transferred to:",
    options: ["Bombay State", "Hyderabad State", "The new Madhya Pradesh", "Andhra State"],
    answer: 0,
    explanation: "The eight Marathi-speaking districts of Vidarbha, including Nagpur, went to the enlarged bilingual Bombay State in 1956. They became part of Maharashtra in 1960. The Hindi-speaking Mahakoshal districts of the old state formed the core of the new Madhya Pradesh."
  },
  {
    id: 43,
    question: "How many districts did the new state of Madhya Pradesh have when it was formed on 1 November 1956?",
    options: ["45", "61", "36", "43"],
    answer: 3,
    explanation: "The new Madhya Pradesh began with 43 districts, drawn from Mahakoshal, Madhya Bharat, Vindhya Pradesh and Bhopal. The number had grown to 61 by 2000, and 16 of these went to Chhattisgarh, leaving 45. More districts have been created since."
  },
  {
    id: 44,
    question: "Who was the first Governor of the reorganised Madhya Pradesh in 1956?",
    options: ["B. Pattabhi Sitaramayya", "Hari Vinayak Pataskar", "K.C. Reddy", "Mangaldas Pakvasa"],
    answer: 0,
    explanation: "Dr Bhogaraju Pattabhi Sitaramayya, the historian of the Congress, was the first Governor of the new Madhya Pradesh (1956–1957). Hari Vinayak Pataskar and K.C. Reddy were later Governors. Mangaldas Pakvasa had been Governor of the old Madhya Pradesh."
  },
  {
    id: 45,
    question: "Who was the first Speaker of the Madhya Pradesh Legislative Assembly after the reorganisation of 1956?",
    options: ["Kashi Prasad Pandey", "Gulsher Ahmad", "Kunji Lal Dubey", "Yagya Dutt Sharma"],
    answer: 2,
    explanation: "Pandit Kunji Lal Dubey was the first Speaker of the Madhya Pradesh Vidhan Sabha and held the post from 1956 to 1967. Kashi Prasad Pandey, Gulsher Ahmad and Yagya Dutt Sharma became Speaker later. The Assembly first met in the Minto Hall in Bhopal."
  },
  {
    id: 46,
    question: "When Chhattisgarh was carved out of Madhya Pradesh on 1 November 2000, how many districts went to the new state?",
    options: ["16", "18", "14", "27"],
    answer: 0,
    explanation: "Under the Madhya Pradesh Reorganisation Act, 2000, 16 of MP's 61 districts became Chhattisgarh, the 26th state of India, leaving MP with 45. Chhattisgarh has since created many more districts."
  },
  {
    id: 47,
    question: "Chhattisgarh became which state of the Indian Union when it was formed on 1 November 2000?",
    options: ["25th", "27th", "28th", "26th"],
    answer: 3,
    explanation: "Chhattisgarh (1 November 2000) was the 26th state. Uttarakhand (9 November 2000) became the 27th and Jharkhand (15 November 2000) the 28th. Goa had become the 25th state in 1987."
  },
  {
    id: 48,
    question: "Yashwantrao Holkar, who routed Colonel Monson's British force in 1804, died in 1811 at which place in present-day Mandsaur district, where his chhatri stands?",
    options: ["Bhanpura", "Maheshwar", "Mahidpur", "Indore"],
    answer: 0,
    explanation: "Yashwantrao Holkar made Bhanpura his base in his last years and died there in October 1811; his chhatri (cenotaph) at Bhanpura is a protected monument. He had forced Monson's retreat through the Mukundara pass in 1804 and signed the Treaty of Rajghat with the British in 1805. Maheshwar holds Ahilyabai's chhatri, and Mahidpur is the 1817 battlefield."
  },
  {
    id: 49,
    question: "The Daly College at Indore, named after Sir Henry Daly, was set up in the 1870s–80s mainly to:",
    options: ["Train officers for the Central India Horse", "Train Indian civil servants for the provinces", "Teach Sanskrit and Persian in the traditional way", "Educate the sons of the ruling princes of central India"],
    answer: 3,
    explanation: "The Daly College began as a school for the sons of princes and nobles of the Central India Agency and was named after Sir Henry Daly, the Agent to the Governor-General. It was one of the 'chiefs' colleges', like Mayo College at Ajmer. It is now a co-educational public school."
  },
  {
    id: 50,
    question: "The Battles of Maharajpur and Panniar (December 1843), which placed the Gwalior army under British control, took place when the Governor-General was:",
    options: ["Lord Ellenborough", "Lord Dalhousie", "Lord Auckland", "Lord Hardinge"],
    answer: 0,
    explanation: "After a succession crisis at Gwalior, Lord Ellenborough sent troops, and the Scindia army was defeated at Maharajpur and Panniar on 29 December 1843. The treaty that followed (1844) reduced the state's own army and made Gwalior pay for an enlarged, British-officered Gwalior Contingent, which joined the rebels in 1857."
  }
];

export default questions;

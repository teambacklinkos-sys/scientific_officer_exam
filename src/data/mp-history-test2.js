const questions = [
  {
    id: 1,
    question: "Which early Gurjara-Pratihara ruler, associated with Avanti (Ujjain), is praised in the Gwalior inscription for driving back the Arab invaders in the 8th century?",
    options: ["Mihira Bhoja", "Nagabhata I", "Vatsaraja", "Mahendrapala I"],
    answer: 1,
    explanation: "The Gwalior prashasti credits Nagabhata I with crushing the armies of a 'mlechchha' ruler, taken to mean the Arabs of Sindh. His early power base was in Avanti and western India. Mihira Bhoja and Mahendrapala ruled later from Kannauj."
  },
  {
    id: 2,
    question: "The Gwalior (Sagar Tal) prashasti, the main source for Gurjara-Pratihara genealogy, was issued by:",
    options: ["Nagabhata II", "Vatsaraja", "Mihira Bhoja", "Mahipala I"],
    answer: 2,
    explanation: "The Gwalior prashasti of Mihira Bhoja (Bhoja I) traces the dynasty's descent from Lakshmana and lists its rulers and their wars. Under Bhoja the Pratiharas reached their peak, holding Gwalior and much of north India. The inscription was found near Sagar Tal in Gwalior."
  },
  {
    id: 3,
    question: "The Chaturbhuj temple inscription (876 CE) in Gwalior fort is famous in the history of mathematics because it contains:",
    options: ["The earliest known value of pi to four decimals", "The first use of negative numbers in an inscription", "One of the earliest dated uses of a zero written as a numeral", "A table of sines attributed to Aryabhata"],
    answer: 2,
    explanation: "The Chaturbhuj temple, built under the Pratiharas, has an inscription recording a garden 270 hastas long, with the zero written as a small circle. It is one of the oldest dated examples of zero as a numeral in India. The temple stands on the eastern side of Gwalior fort."
  },
  {
    id: 4,
    question: "The Paramara king Munja (Vakpati II) was captured and put to death by which ruler?",
    options: ["Tailapa II of the Kalyani Chalukyas", "Bhima I of the Chaulukyas", "Rajendra Chola", "Lakshmikarna of the Kalachuris"],
    answer: 0,
    explanation: "Munja invaded the Chalukya kingdom several times but was finally captured by Tailapa II around 995 CE and executed. Merutunga's Prabandhachintamani tells the story of his captivity. Bhima I and Lakshmikarna fought his nephew Bhoja decades later."
  },
  {
    id: 5,
    question: "The Bhojshala, the Sanskrit centre and Saraswati temple founded by Raja Bhoj, is in which town?",
    options: ["Bhojpur", "Dhar", "Ujjain", "Mandu"],
    answer: 1,
    explanation: "The Bhojshala is in Dhar, the Paramara capital. It was a centre of Sanskrit learning dedicated to Saraswati (Vagdevi), and its walls hold inscribed grammatical and literary texts. The building was later used as the Kamal Maula mosque, and its status is still disputed."
  },
  {
    id: 6,
    question: "The famous Vagdevi (Saraswati) image associated with Raja Bhoj's Bhojshala at Dhar is now kept in:",
    options: ["The British Museum, London", "The Indian Museum, Kolkata", "The State Museum, Bhopal", "The Gujari Mahal Museum, Gwalior"],
    answer: 0,
    explanation: "The inscribed marble image of Vagdevi, dated to 1034 CE, was taken to England in colonial times and is in the British Museum. Its inscription links it to Bhoja's reign. Madhya Pradesh has repeatedly asked for its return."
  },
  {
    id: 7,
    question: "The Bhojeshwar temple, with one of the largest Shiva lingas in India, is at Bhojpur in which district?",
    options: ["Bhopal", "Sehore", "Vidisha", "Raisen"],
    answer: 3,
    explanation: "Bhojpur is in Raisen district on the Betwa, about 28 km from Bhopal. The temple, attributed to Raja Bhoj, was never finished, and its building plans are engraved on the nearby rocks. The polished linga itself is about 2.3 m (7.5 ft) tall and stands on a massive three-tiered base, giving a total height of roughly 12 m."
  },
  {
    id: 8,
    question: "The Samarangana Sutradhara, attributed to the Paramara king Bhoja, is a treatise mainly on:",
    options: ["Sanskrit grammar", "Architecture and town planning", "Astronomy", "Classical music"],
    answer: 1,
    explanation: "The Samarangana Sutradhara is an encyclopaedic work on vastu: town planning, temple and palace building, and machines (yantras). Bhoja wrote on many subjects, including poetics (Sarasvatikanthabharana) and yoga (Rajamartanda). Samarangana Sutradhara itself is the one on architecture."
  },
  {
    id: 9,
    question: "Bhopal's Upper Lake (Bada Talab), created by damming the Kolans river, is traditionally attributed to:",
    options: ["Dost Mohammad Khan", "Raja Bhoj", "Rani Kamlapati", "Hoshang Shah"],
    answer: 1,
    explanation: "Tradition credits the Paramara king Bhoja with building the earthen dam that formed the Upper Lake in the 11th century, which is why it is also called Bhojtal. A statue of Raja Bhoj now stands at the lake. Dost Mohammad Khan founded the later Bhopal state in the 18th century."
  },
  {
    id: 10,
    question: "The Udayeshwar (Neelkantheshwar) temple at Udaipur in Vidisha district, a fine example of Paramara architecture, was built by:",
    options: ["Bhoja", "Jayasimha I", "Udayaditya", "Arjunavarman"],
    answer: 2,
    explanation: "Udayaditya (c. 1070–1086), who restored Paramara power after Bhoja's death, founded the town of Udaipur and built the Udayeshwar temple. Its spire is a classic example of the Bhumija style. Arjunavarman and Jayasimha were other Paramara rulers."
  },
  {
    id: 11,
    question: "Which style of temple spire (shikhara), with miniature spires arranged in vertical rows, developed in Malwa under the Paramaras?",
    options: ["Bhumija", "Vesara", "Valabhi", "Phamsana"],
    answer: 0,
    explanation: "The Bhumija shikhara has a central band with rows of small spirelets running up the sides. It developed in Malwa in the 11th century and spread to Rajasthan, Gujarat and the Deccan. The Udayeshwar temple at Udaipur is the standard example."
  },
  {
    id: 12,
    question: "According to Chandela inscriptions, the founder of the Chandela dynasty of Jejakabhukti was:",
    options: ["Yashovarman", "Dhanga", "Vidyadhara", "Nannuka"],
    answer: 3,
    explanation: "Chandela inscriptions name Nannuka (early 9th century) as the founder. The Chandelas were at first feudatories of the Pratiharas and became independent under Yashovarman and Dhanga in the 10th century. Jejakabhukti is the old name of Bundelkhand."
  },
  {
    id: 13,
    question: "The Lakshmana temple at Khajuraho, which houses a Vaikuntha Vishnu image said to have been obtained from the Pratiharas, was built by:",
    options: ["Dhanga", "Vidyadhara", "Kirtivarman", "Yashovarman"],
    answer: 3,
    explanation: "The Lakshmana temple inscription (954 CE), though issued early in Dhanga's reign, credits his father Yashovarman (also called Lakshavarman) with building the temple, and Yashovarman is the standard answer. Getting the Vaikuntha image from the Pratiharas, via the Shahi kings, signalled the Chandelas' new independent status. It is the earliest of the great Nagara temples of Khajuraho."
  },
  {
    id: 14,
    question: "The Kandariya Mahadeva temple, the largest temple at Khajuraho, is generally attributed to which Chandela king, who also resisted Mahmud of Ghazni?",
    options: ["Yashovarman", "Vidyadhara", "Nannuka", "Paramardi"],
    answer: 1,
    explanation: "The Kandariya Mahadeva temple (c. 1030 CE) is usually credited to Vidyadhara, the most powerful Chandela king. He held out against Mahmud of Ghazni at Kalinjar in 1019–1022. Paramardi (Parmal) was defeated much later by Prithviraj Chauhan and Qutbuddin Aibak."
  },
  {
    id: 15,
    question: "The Khajuraho group of monuments, inscribed on the UNESCO World Heritage List in 1986, is in which district?",
    options: ["Panna", "Chhatarpur", "Tikamgarh", "Damoh"],
    answer: 1,
    explanation: "Khajuraho is in Chhatarpur district in Bundelkhand. Of the roughly 85 temples the Chandelas built between about 950 and 1050 CE, around 25 survive. They are divided into Western, Eastern and Southern groups."
  },
  {
    id: 16,
    question: "Which of the following Khajuraho temples belongs to the Jain group?",
    options: ["Chaunsath Yogini temple", "Chitragupta temple", "Duladeo temple", "Parshvanath temple"],
    answer: 3,
    explanation: "The Parshvanath temple, the largest of the Jain temples in the Eastern group, shows the Chandelas' tolerance of all faiths. The Chaunsath Yogini temple is a Shakta shrine and the oldest at the site. Chitragupta is a Surya temple, and Duladeo is a Shiva temple."
  },
  {
    id: 17,
    question: "Tripuri, the capital of the Kalachuris of Chedi (Dahala), is identified with the present-day village of:",
    options: ["Tewar near Jabalpur", "Ratanpur near Bilaspur", "Mandla on the Narmada", "Maheshwar in Nimar"],
    answer: 0,
    explanation: "Tripuri is Tewar, about 13 km west of Jabalpur. The Kalachuris of Tripuri ruled the Dahala region from the 9th to the 12th centuries. Ratanpur was the seat of a separate Kalachuri branch in Chhattisgarh. Tripuri was also the venue of the 1939 Congress session."
  },
  {
    id: 18,
    question: "Who is regarded as the founder of the Kalachuri dynasty of Tripuri?",
    options: ["Gangeyadeva", "Lakshmikarna", "Kokalla I", "Yashahkarna"],
    answer: 2,
    explanation: "Kokalla I (mid-9th century) founded the Tripuri line and made marriage alliances with the Rashtrakutas and the Chandelas. Gangeyadeva and his son Lakshmikarna (Karna) took the dynasty to its peak in the 11th century. Yashahkarna came after Lakshmikarna."
  },
  {
    id: 19,
    question: "The circular Chausath Yogini temple at Bheraghat near Jabalpur is associated with which dynasty?",
    options: ["Kalachuris of Tripuri", "Chandelas", "Paramaras", "Tomars of Gwalior"],
    answer: 0,
    explanation: "The Bheraghat Chausath Yogini temple, a circular open-air shrine on a hill above the Narmada, dates to the 10th century under the Kalachuris. Its yogini sculptures are among the finest in India. The other well-known circular yogini temple in MP is at Mitaoli in Morena."
  },
  {
    id: 20,
    question: "The circular Chausath Yogini (Ekattarso Mahadeva) temple at Mitaoli in Morena district was built, according to a 1323 inscription, by:",
    options: ["Devapala of the Kachchhapaghatas", "Mahipala of the Pratiharas", "Yuvaraja I of the Kalachuris", "Man Singh Tomar"],
    answer: 0,
    explanation: "A Vikram Samvat 1380 (1323 CE) inscription credits the Kachchhapaghata king Devapala (r. c. 1055–1075) with building the Mitaoli temple; the inscription is much later than the king it names. Its circular plan with 64 cells is often popularly linked with the design of the old Parliament House in New Delhi. The Kachchhapaghatas ruled the Gwalior–Morena region from the 10th to the 12th centuries."
  },
  {
    id: 21,
    question: "The Sahastrabahu (Sas-Bahu) temples in Gwalior fort were built in 1093 CE by which ruler?",
    options: ["Man Singh Tomar", "Mihira Bhoja of the Pratiharas", "Raja Bhoj of the Paramaras", "Mahipala of the Kachchhapaghata dynasty"],
    answer: 3,
    explanation: "An inscription in the larger Sas-Bahu temple records that the Kachchhapaghata king Mahipala built it in 1093 CE and dedicated it to Vishnu (Sahastrabahu, the thousand-armed). 'Sas-Bahu' is a popular corruption of that name. The Kachchhapaghatas held Gwalior before the Tomars."
  },
  {
    id: 22,
    question: "Who founded the Tomar dynasty of Gwalior in the late 14th century?",
    options: ["Dungarendra Singh", "Kirti Singh", "Man Singh", "Vir Singh Dev"],
    answer: 3,
    explanation: "Vir Singh Dev (Viramadeva) took Gwalior fort around 1394, in the disorder of the late Tughlaq period, and founded the Tomar dynasty. Dungarendra Singh is known for the colossal Jain rock-cut images in the fort. Man Singh (1486–1516) was the dynasty's greatest ruler."
  },
  {
    id: 23,
    question: "The Man Mandir palace in Gwalior fort, decorated with blue, green and yellow glazed tiles, was built by:",
    options: ["Man Singh Tomar", "Vikramaditya Tomar", "Mahadji Scindia", "Bir Singh Deo Bundela"],
    answer: 0,
    explanation: "Raja Man Singh Tomar built the Man Mandir between 1486 and 1516. Babur admired it in his memoirs. Its tilework of ducks, elephants and banana trees is its most famous feature, and Mughal palace builders later borrowed from it."
  },
  {
    id: 24,
    question: "The Gujari Mahal at Gwalior, now an archaeological museum, was built by Man Singh Tomar for his queen:",
    options: ["Roopmati", "Kamlapati", "Durgavati", "Mrignayani"],
    answer: 3,
    explanation: "Man Singh built the Gujari Mahal for Mrignayani, a Gujar queen, and had a water channel brought from the Rai river for her. Roopmati was the wife of Baz Bahadur of Malwa, Kamlapati was a Gond queen of Ginnorgarh, and Durgavati ruled Garha-Mandla."
  },
  {
    id: 25,
    question: "'Mankutuhal', a work composed under the patronage of Raja Man Singh Tomar of Gwalior, deals with:",
    options: ["Astronomy", "Temple architecture", "Music, especially the dhrupad style", "Ayurvedic medicine"],
    answer: 2,
    explanation: "Mankutuhal is a treatise on music, especially dhrupad, which flourished at Man Singh's court. Gwalior became the cradle of dhrupad, and the Gwalior gharana later grew there. Faqirullah translated the work into Persian as Rag Darpan in Aurangzeb's time."
  },
  {
    id: 26,
    question: "The tomb of Tansen at Gwalior stands next to the tomb of his Sufi mentor:",
    options: ["Muhammad Ghaus", "Nizamuddin Auliya", "Salim Chishti", "Moinuddin Chishti"],
    answer: 0,
    explanation: "Tansen, born near Gwalior at Behat, is buried in the garden of the tomb of the Shattari Sufi saint Muhammad Ghaus in Gwalior. The annual Tansen Samaroh music festival is held there. Salim Chishti is buried at Fatehpur Sikri and Nizamuddin Auliya in Delhi."
  },
  {
    id: 27,
    question: "Which Tomar ruler lost Gwalior fort to Ibrahim Lodi and later died fighting on the Lodi side at the First Battle of Panipat (1526)?",
    options: ["Man Singh", "Kalyanmal", "Dungarendra Singh", "Vikramaditya"],
    answer: 3,
    explanation: "Vikramaditya, son of Man Singh, lost Gwalior to Ibrahim Lodi around 1518 and was then given the fief of Shamsabad. He fought for Ibrahim at Panipat and was killed. His family is said to have given Humayun a great diamond, often identified with the Koh-i-Noor."
  },
  {
    id: 28,
    question: "Who founded the independent Malwa Sultanate after the decline of the Tughlaqs?",
    options: ["Hoshang Shah", "Mahmud Khalji", "Dilawar Khan Ghori", "Ghiyas-ud-din Khalji"],
    answer: 2,
    explanation: "Dilawar Khan Ghori, the Tughlaq governor of Malwa, became effectively independent after Timur's invasion of 1398. His son Alp Khan, who took the title Hoshang Shah, moved the capital from Dhar to Mandu. Mahmud Khalji later set up the Khalji line in 1436."
  },
  {
    id: 29,
    question: "The tomb of Hoshang Shah at Mandu is notable because it is regarded as:",
    options: ["The first marble building in India", "The first building with a true dome in India", "The largest tomb of the Sultanate period", "The first Indian tomb with minarets"],
    answer: 0,
    explanation: "Hoshang Shah's tomb, finished in the 1440s, is considered India's first building made entirely of marble. Tradition says Shah Jahan's architects studied it before building the Taj Mahal. True domes had appeared in India much earlier, in Delhi Sultanate buildings."
  },
  {
    id: 30,
    question: "Both Rana Kumbha of Mewar and a Malwa Sultan claimed victory in their conflict of 1437–1440. Kumbha built the Vijay Stambh at Chittor, and the Malwa ruler built a seven-storeyed victory tower at Mandu. Who was this Malwa ruler?",
    options: ["Mahmud Khalji I", "Hoshang Shah", "Baz Bahadur", "Nasir-ud-din Shah"],
    answer: 0,
    explanation: "Mahmud Khalji I (1436–1469), the strongest of the Malwa Sultans, fought Rana Kumbha, and each side claimed the win. Mahmud built a seven-storeyed tower (only the base survives, near the Ashrafi Mahal) and completed the Jami Masjid at Mandu. Kumbha's Vijay Stambh in Chittor marks the same conflict from the Mewar side."
  },
  {
    id: 31,
    question: "The Jahaz Mahal at Mandu, built between two lakes so that it looks like a ship, is attributed to:",
    options: ["Hoshang Shah", "Baz Bahadur", "Ghiyas-ud-din Khalji", "Dilawar Khan Ghori"],
    answer: 2,
    explanation: "Ghiyas-ud-din Khalji (1469–1500) gave up war for a life of pleasure and is credited with building the Jahaz Mahal for his very large harem. It stands between the Munj and Kapur talaos."
  },
  {
    id: 32,
    question: "The last independent Sultan of Malwa, Baz Bahadur, was defeated at Sarangpur in 1561 by which Mughal general?",
    options: ["Adham Khan", "Bairam Khan", "Asaf Khan", "Abdullah Khan Uzbeg"],
    answer: 0,
    explanation: "Akbar sent Adham Khan and Pir Muhammad Khan against Malwa. Adham Khan defeated Baz Bahadur at Sarangpur in 1561, and Roopmati took poison rather than be captured. Baz Bahadur later joined Mughal service as a mansabdar."
  },
  {
    id: 33,
    question: "Rani Roopmati's pavilion on the edge of the Mandu plateau is said to have been built so that the queen could look out at which river before her daily meal?",
    options: ["Chambal", "Kshipra", "Narmada", "Mahi"],
    answer: 2,
    explanation: "Legend says Roopmati, a singer, would not eat before seeing the Narmada, so Baz Bahadur built the pavilion and the Rewa Kund reservoir for her. The love story of Baz Bahadur and Roopmati is a favourite in Malwa folklore. The pavilion looks south over the Nimar plains towards the Narmada."
  },
  {
    id: 34,
    question: "By what name did the Malwa Sultans call Mandu, their capital?",
    options: ["Shadiabad (City of Joy)", "Dharanagari", "Khizrabad", "Dashapura"],
    answer: 0,
    explanation: "The Malwa Sultans called Mandu 'Shadiabad', the City of Joy, and inscriptions on its buildings use the name. Dharanagari was Dhar, the earlier Paramara capital, and Dashapura was Mandsaur. Khizrabad is a Delhi Sultanate name with no link to Malwa."
  },
  {
    id: 35,
    question: "Who is traditionally regarded as the founder of the Gond kingdom of Garha-Mandla?",
    options: ["Sangram Shah", "Dalpat Shah", "Yadavrai (Jadurai)", "Hirde Shah"],
    answer: 2,
    explanation: "Gond tradition and the Ramnagar inscription name Yadavrai (Jadurai) as the founder of the Garha-Mandla line. The kingdom grew much larger later. Sangram Shah was its most powerful ruler, and Dalpat Shah was the husband of Rani Durgavati."
  },
  {
    id: 36,
    question: "Which Gond ruler of Garha-Mandla is credited with expanding the kingdom to 52 garhs (forts) in the early 16th century?",
    options: ["Sangram Shah", "Yadavrai", "Dalpat Shah", "Narendra Shah"],
    answer: 0,
    explanation: "Sangram Shah (Aman Das) brought 52 garhs under Garha-Mandla's control and made it one of the strongest kingdoms of central India. He also issued coins. His son Dalpat Shah married the Chandela princess Durgavati."
  },
  {
    id: 37,
    question: "Rani Durgavati of Garha-Mandla was born into which ruling family?",
    options: ["The Bundelas of Orchha", "The Baghelas of Rewa", "The Tomars of Gwalior", "The Chandelas of Kalinjar–Mahoba"],
    answer: 3,
    explanation: "Durgavati was the daughter of the Chandela ruler Kirat Rai (Keerat Singh) of Kalinjar and Mahoba. She married Dalpat Shah, son of Sangram Shah. The marriage joined a Gond royal house with an old Rajput lineage."
  },
  {
    id: 38,
    question: "In 1564, Rani Durgavati died fighting the Mughal army near Narai Nala (Jabalpur). Who commanded that Mughal army?",
    options: ["Adham Khan", "Raja Man Singh", "Abdul Rahim Khan-i-Khanan", "Asaf Khan"],
    answer: 3,
    explanation: "Akbar's governor of Kara-Manikpur, Asaf Khan, invaded Garha-Katanga in 1564. Wounded and facing defeat, Durgavati stabbed herself rather than be captured. 24 June is observed as her Balidan Diwas, and Rani Durgavati University in Jabalpur is named after her."
  },
  {
    id: 39,
    question: "After her husband Dalpat Shah died, Rani Durgavati ruled Garha-Mandla as regent for her young son:",
    options: ["Chandra Shah", "Vir Narayan", "Madhukar Shah", "Prem Narayan"],
    answer: 1,
    explanation: "Durgavati governed for about 15 years for her son Vir Narayan, building tanks such as Ranital and keeping a strong army. Vir Narayan was killed defending Chauragarh after her death in 1564. Chandra Shah, Dalpat's younger brother, was later placed on the throne under the Mughals."
  },
  {
    id: 40,
    question: "Which Gond king of Deogarh (Chhindwara region) founded the city of Nagpur in the early 18th century?",
    options: ["Sangram Shah", "Bakht Buland Shah", "Hirde Shah", "Chand Sultan"],
    answer: 1,
    explanation: "Bakht Buland Shah of Deogarh, who had spent time at Aurangzeb's court, encouraged settlers and founded Nagpur around 1702. His son Chand Sultan moved the capital there. The Bhonsles of Nagpur later took over the Deogarh kingdom."
  },
  {
    id: 41,
    question: "In 2021 the Habibganj railway station in Bhopal was renamed after which 18th-century Gond queen?",
    options: ["Rani Durgavati", "Rani Avantibai", "Rani Roopmati", "Rani Kamlapati"],
    answer: 3,
    explanation: "Rani Kamlapati was the Gond queen of Ginnorgarh, and the Kamlapati Mahal near Bhopal's Lower Lake is linked to her. Her story is tied to the rise of Dost Mohammad Khan, who founded Bhopal state. The renamed station opened as a redeveloped world-class station in 2021."
  },
  {
    id: 42,
    question: "Which fort near Burhanpur, taken from the Faruqi ruler in 1601, was Akbar's last conquest?",
    options: ["Chittorgarh", "Asirgarh", "Ranthambore", "Kalinjar"],
    answer: 1,
    explanation: "Akbar took Asirgarh, known as the 'key to the Deccan', from Bahadur Shah Faruqi of Khandesh in January 1601 after a long siege. It was his last major conquest. Chittor (1568), Ranthambore (1569) and Kalinjar (1569) were taken earlier."
  },
  {
    id: 43,
    question: "Mumtaz Mahal, for whom the Taj Mahal was built, died in 1631 at which town of present-day Madhya Pradesh?",
    options: ["Mandu", "Burhanpur", "Ujjain", "Gwalior"],
    answer: 1,
    explanation: "Mumtaz Mahal died at Burhanpur in June 1631 while giving birth to her fourteenth child, during Shah Jahan's Deccan campaign. She was first buried in the Zainabad garden across the Tapti before her body was moved to Agra. Burhanpur was the Mughals' main base for the Deccan."
  },
  {
    id: 44,
    question: "The Bundela capital of Orchha on the Betwa was founded in 1531 by:",
    options: ["Bir Singh Deo", "Madhukar Shah", "Rudra Pratap Singh", "Champat Rai"],
    answer: 2,
    explanation: "Rudra Pratap Singh founded Orchha on the Betwa and began its fort. Madhukar Shah fought Akbar, and Bir Singh Deo built the Jahangir Mahal. Champat Rai, father of Chhatrasal, led Bundela resistance to the Mughals in the 17th century."
  },
  {
    id: 45,
    question: "Which Bundela chief killed Abul Fazl in 1602, on Prince Salim's instigation, and later built the Jahangir Mahal at Orchha?",
    options: ["Rudra Pratap Singh", "Bir Singh Deo", "Chhatrasal", "Jujhar Singh"],
    answer: 1,
    explanation: "Bir Singh Deo ambushed and killed Akbar's minister Abul Fazl near Narwar in 1602 at Salim's urging. After Salim became Jahangir, Bir Singh Deo became ruler of Orchha and built the Jahangir Mahal and the palace at Datia. His son Jujhar Singh later rebelled against Shah Jahan."
  },
  {
    id: 46,
    question: "Chhatrasal Bundela sought the help of Peshwa Baji Rao I in 1729 against the invasion of:",
    options: ["Nizam-ul-Mulk Asaf Jah", "Ahmad Shah Abdali", "Muhammad Khan Bangash", "Nadir Shah"],
    answer: 2,
    explanation: "When Muhammad Khan Bangash, the Mughal governor of Allahabad, attacked Bundelkhand, the aged Chhatrasal appealed to Baji Rao I, who drove Bangash out. In gratitude Chhatrasal gave the Peshwa about a third of his kingdom, which brought the Marathas into Bundelkhand. Mastani is said to have been Chhatrasal's daughter."
  },
  {
    id: 47,
    question: "In the Ram Raja temple at Orchha, Rama is worshipped as a king. The image is said to have been brought from Ayodhya by:",
    options: ["Rani Durgavati", "Rani Ganesh Kunwari, queen of Madhukar Shah", "Ahilyabai Holkar", "Rani Kamlapati"],
    answer: 1,
    explanation: "Legend says Madhukar Shah's queen, Ganesh Kunwari, brought Rama's image from Ayodhya, and it would not move from her palace, which became the Ram Raja temple. The Chaturbhuj temple built for it stands nearby. It is the only temple where Rama is worshipped as a reigning king and given a guard of honour."
  },
  {
    id: 48,
    question: "Ahilyabai Holkar, who ruled the Holkar state from 1767 to 1795, made which town on the Narmada her capital?",
    options: ["Indore", "Omkareshwar", "Mandleshwar", "Maheshwar"],
    answer: 3,
    explanation: "Ahilyabai ruled from Maheshwar, where she built the fort-palace and ghats and encouraged the Maheshwari sari weaving industry. Indore became the Holkar capital only after 1818. She was the daughter-in-law of Malhar Rao Holkar, founder of the dynasty."
  },
  {
    id: 49,
    question: "Ahilyabai Holkar is remembered across India for building and repairing temples. In 1780 she rebuilt the temple of:",
    options: ["Meenakshi, Madurai", "Kashi Vishwanath, Varanasi", "Mahakaleshwar, Ujjain", "Jagannath, Puri"],
    answer: 1,
    explanation: "The present Kashi Vishwanath temple was built by Ahilyabai in 1780, after Aurangzeb destroyed the earlier one. Its spire was later gilded with gold given by Maharaja Ranjit Singh. She also built ghats, dharamshalas and wells from Kedarnath to Rameswaram, and a Somnath temple in 1783. The present Mahakaleshwar temple was built under Ranoji Scindia in the 1730s."
  },
  {
    id: 50,
    question: "Before Daulat Rao moved the capital to Gwalior (Lashkar) in 1810, the Scindias' main seat in Malwa was:",
    options: ["Shivpuri", "Burhanpur", "Ujjain", "Mandsaur"],
    answer: 2,
    explanation: "Ranoji Scindia, the founder of the house, was based at Ujjain from the 1730s. Daulat Rao Scindia moved the seat to his army camp (lashkar) at Gwalior in 1810, and Lashkar grew into the new capital city. The Holkars, by contrast, ruled from Maheshwar and later Indore."
  }
];

export default questions;

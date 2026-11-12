const questions = [
  {
    id: 1,
    question: "The name of the Bhimbetka rock shelters in Raisen district is traditionally explained as the \"sitting place\" of which figure?",
    options: ["Raja Bhoj", "Bhima, the Pandava", "Bhimdev Solanki", "Bhim Singh Rana"],
    answer: 1,
    explanation: "Bhimbetka is popularly read as Bhim-baithka, the sitting place of Bhima of the Mahabharata. The shelters lie in Raisen district on the southern edge of the Vindhyas and contain paintings from the Mesolithic to historic times. They were brought to notice by V.S. Wakankar in 1957 and became a UNESCO World Heritage Site in 2003."
  },
  {
    id: 2,
    question: "The four richly carved stone gateways (toranas) of the Great Stupa at Sanchi were added during the rule of which dynasty?",
    options: ["Maurya", "Shunga", "Satavahana", "Gupta"],
    answer: 2,
    explanation: "The toranas of Stupa No. 1 date to the 1st century BCE under the Satavahanas; an inscription on the southern gateway records a gift by the foreman of artisans of King Satakarni. Ashoka built the original brick stupa, and the Shungas encased it in stone and added the railing. Sanchi became a UNESCO World Heritage Site in 1989."
  },
  {
    id: 3,
    question: "Which is the largest and most elaborately carved temple of the Western Group at Khajuraho?",
    options: ["Kandariya Mahadeva", "Lakshmana", "Chitragupta", "Duladeo"],
    answer: 0,
    explanation: "The Kandariya Mahadeva temple, dedicated to Shiva and built around 1030 CE under the Chandela king Vidyadhara, is the largest and tallest temple at Khajuraho, with its shikhara rising about 31 m and more than 800 sculptures. The Lakshmana temple is older, and Duladeo is one of the last temples of the group."
  },
  {
    id: 4,
    question: "Raja Bhoj, the most celebrated Paramara ruler of Malwa, governed from which capital city?",
    options: ["Ujjain", "Mandu", "Bhopal", "Dhar"],
    answer: 3,
    explanation: "Raja Bhoj (c. 1010–1055 CE) ruled from Dhara, the present town of Dhar, where he founded the Bhoj Shala as a centre of Sanskrit learning. Earlier Paramara rulers had their seat at Ujjain. Mandu became the capital of the later Malwa Sultanate, and Bhopal grew around the lake attributed to Bhoj."
  },
  {
    id: 5,
    question: "Rani Durgavati, queen of the Gond kingdom of Garha-Mandla, was by birth a princess of which dynasty?",
    options: ["Gond", "Chandela", "Paramara", "Bundela"],
    answer: 1,
    explanation: "Durgavati was born in 1524 at Kalinjar fort, the daughter of the Chandela ruler Kirat Rai, and married Dalpat Shah, son of the Gond king Sangram Shah. After Dalpat Shah's death she ruled Garha-Mandla for her minor son. She died fighting Akbar's general Asaf Khan in 1564."
  },
  {
    id: 6,
    question: "Tantya Tope was captured in the Paron forests in April 1859 after being betrayed by:",
    options: ["Jayajirao Scindia", "Raja Mardan Singh of Banpur", "Man Singh of Narwar", "Raja Bakhtbali of Shahgarh"],
    answer: 2,
    explanation: "Man Singh, a disaffected chief of Narwar, led the British to Tantya Tope's hiding place in the Paron jungle, and he was captured in April 1859. He was tried and hanged at Shivpuri on 18 April 1859. Mardan Singh of Banpur and Bakhtbali of Shahgarh were themselves leaders of the revolt in Bundelkhand."
  },
  {
    id: 7,
    question: "Who was the first Governor of Madhya Pradesh when the state was formed on 1 November 1956?",
    options: ["Hari Vinayak Pataskar", "K. C. Reddy", "Satya Narayan Sinha", "Pattabhi Sitaramayya"],
    answer: 3,
    explanation: "Dr. B. Pattabhi Sitaramayya, the Congress leader and historian of the national movement, was the first Governor of Madhya Pradesh (1956–1957). He was succeeded by Hari Vinayak Pataskar. Pandit Ravishankar Shukla was the first Chief Minister."
  },
  {
    id: 8,
    question: "The Jahaz Mahal at Mandu, built between two artificial lakes, is attributed to which Sultan of Malwa?",
    options: ["Ghiyas-ud-din Khalji", "Hoshang Shah", "Baz Bahadur", "Mahmud Khalji"],
    answer: 0,
    explanation: "The Jahaz Mahal (Ship Palace) at Mandu, standing between Munj Talao and Kapur Talao, is attributed to Sultan Ghiyas-ud-din Khalji (r. 1469–1500), who built it for his large harem. Hoshang Shah is remembered for his white marble tomb, and Baz Bahadur for his romance with Rani Roopmati."
  },
  {
    id: 9,
    question: "In which year did Ahilyabai Holkar rebuild the Kashi Vishwanath temple at Varanasi?",
    options: ["1757", "1780", "1802", "1669"],
    answer: 1,
    explanation: "Ahilyabai Holkar, who ruled the Holkar state from Maheshwar (1767–1795), built the present Kashi Vishwanath temple in 1780, more than a century after Aurangzeb destroyed the earlier temple in 1669. She also built ghats, dharamshalas and temples at Somnath, Gaya, Dwarka and many other places."
  },
  {
    id: 10,
    question: "Teli ka Mandir, the tallest temple inside Gwalior Fort, is architecturally distinctive for its:",
    options: ["Circular plan with 64 cells", "Dome of white marble", "Barrel-vaulted (valabhi) roof over the sanctum", "Five-storeyed stepped pyramid"],
    answer: 2,
    explanation: "Teli ka Mandir, built around the 8th–9th century under the Gurjara-Pratiharas, is about 30 m tall and has a wagon-vaulted (valabhi) roof of southern type on a body with northern Nagara decoration. It is the oldest standing structure in the fort. The circular 64-cell plan belongs to the Chausath Yogini temple at Mitaoli."
  },
  {
    id: 11,
    question: "The National Chambal Sanctuary, spread across Madhya Pradesh, Rajasthan and Uttar Pradesh, was established mainly to protect which animal?",
    options: ["Gangetic river dolphin", "Indian skimmer", "Smooth-coated otter", "Gharial"],
    answer: 3,
    explanation: "The National Chambal Sanctuary was set up in 1978–79 mainly to protect the critically endangered gharial, and the Chambal now holds the largest wild gharial population in the world. The river also shelters the Gangetic dolphin, the red-crowned roof turtle and the Indian skimmer. The MP part is managed from Morena."
  },
  {
    id: 12,
    question: "Pachmarhi, the only hill station of Madhya Pradesh, was brought to British notice in 1857 by which officer?",
    options: ["Captain James Forsyth", "William Henry Sleeman", "Sir John Malcolm", "Sir Hugh Rose"],
    answer: 0,
    explanation: "Captain James Forsyth of the Bengal Lancers came upon the Pachmarhi plateau in 1857 and described it in his book The Highlands of Central India. Pachmarhi later became the summer capital of the Central Provinces. Sleeman is known for suppressing the Thugs, and Hugh Rose for his campaign in Central India in 1858."
  },
  {
    id: 13,
    question: "Amarkantak, the source of the Narmada and the Son, lies in which district of Madhya Pradesh?",
    options: ["Dindori", "Shahdol", "Anuppur", "Mandla"],
    answer: 2,
    explanation: "Amarkantak is in Anuppur district, which was carved out of Shahdol in 2003. It stands at about 1,065 m on the Maikal hills where the Vindhya and Satpura ranges meet. The Narmada flows west from here, while the Son and Johila flow north."
  },
  {
    id: 14,
    question: "Madhya Pradesh's Dinosaur Fossil National Park, where clutches of fossilised dinosaur eggs have been found in Cretaceous rocks, is in which district?",
    options: ["Mandla", "Shahdol", "Umaria", "Dhar"],
    answer: 3,
    explanation: "The Dinosaur Fossil National Park in the Bagh area of Dhar district, declared in 2011, protects nests of fossil titanosaur eggs in the Lameta beds of the Bagh region. These date to the Late Cretaceous, just before the Deccan Trap eruptions. Plant fossils, by contrast, are protected at the Ghughua Fossil National Park in Dindori."
  },
  {
    id: 15,
    question: "Which forest area of present-day Narmadapuram district was notified as India's first reserved forest in 1865?",
    options: ["Ratapani", "Bori", "Kheoni", "Singhori"],
    answer: 1,
    explanation: "Bori, in the Satpura hills of Narmadapuram district, was declared India's first reserved forest in 1865 for teak conservation. The Bori Wildlife Sanctuary is now part of the Satpura Tiger Reserve along with Satpura National Park and Pachmarhi sanctuary. Ratapani is near Bhopal, and Kheoni is in Dewas district."
  },
  {
    id: 16,
    question: "Van Vihar National Park, which also functions as a zoological park, lies on the bank of which lake?",
    options: ["Upper Lake (Bhojtal), Bhopal", "Yashwant Sagar, Indore", "Sirpur Lake, Indore", "Sakhya Sagar, Shivpuri"],
    answer: 0,
    explanation: "Van Vihar National Park in Bhopal, notified in 1983, lies along the Upper Lake (Bhojtal), which is part of the Bhoj Wetland Ramsar site. Animals are kept in large natural enclosures, and it runs rescue and breeding programmes. Sakhya Sagar is in Madhav National Park."
  },
  {
    id: 17,
    question: "Which river of Madhya Pradesh is also known by the names Rewa and Mekal Kanya (Mekalsuta)?",
    options: ["Son", "Johila", "Narmada", "Tapti"],
    answer: 2,
    explanation: "The Narmada is called Rewa because of its leaping flow over rocks, and Mekalsuta or Mekal Kanya because it rises in the Maikal (Mekal) hills at Amarkantak. It is the lifeline of Madhya Pradesh, flowing about 1,077 km through the state. The Son is sometimes called Sonbhadra."
  },
  {
    id: 18,
    question: "The Kuno river, which gives its name to Kuno National Park in Sheopur district, is a tributary of which river?",
    options: ["Betwa", "Sindh", "Parbati", "Chambal"],
    answer: 3,
    explanation: "The Kuno river flows north through Sheopur and Morena districts and joins the Chambal. Kuno National Park, through which it runs, became the first home of the reintroduced cheetah in September 2022. The Parbati is also a Chambal tributary, while the Sindh joins the Yamuna directly."
  },
  {
    id: 19,
    question: "Which biosphere reserve of Madhya Pradesh was the first to be included in UNESCO's World Network of Biosphere Reserves, in 2009?",
    options: ["Pachmarhi", "Achanakmar–Amarkantak", "Panna", "Kanha"],
    answer: 0,
    explanation: "Pachmarhi Biosphere Reserve, covering Satpura National Park, Bori and Pachmarhi sanctuaries, joined UNESCO's Man and the Biosphere network in 2009. Achanakmar–Amarkantak, shared with Chhattisgarh, followed in 2012, and Panna in 2020. Kanha is a tiger reserve, not a UNESCO biosphere reserve."
  },
  {
    id: 20,
    question: "Burhanpur, historically called the \"Gateway of the Deccan\", stands on the bank of which river?",
    options: ["Narmada", "Tapti", "Purna", "Wardha"],
    answer: 1,
    explanation: "Burhanpur lies on the north bank of the Tapti (Tapi) in south-western MP. Founded by the Faruqi rulers of Khandesh, it controlled the route from north India to the Deccan through the Asirgarh pass and was a Mughal base for Deccan campaigns. Mumtaz Mahal died at Burhanpur in 1631."
  },
  {
    id: 21,
    question: "Madhya Pradesh has a unicameral legislature. Under which Article can Parliament create a Legislative Council for a state if its Assembly passes a resolution by special majority?",
    options: ["Article 169", "Article 168", "Article 171", "Article 170"],
    answer: 0,
    explanation: "Article 169 lets Parliament abolish or create a Legislative Council if the state Assembly passes a resolution by a majority of its total membership and two-thirds of those present and voting. Article 168 lists the states with two Houses, Article 170 deals with the composition of Assemblies, and Article 171 with that of Councils."
  },
  {
    id: 22,
    question: "Who was the Chief Minister of Madhya Pradesh when the Bhopal gas tragedy occurred in December 1984?",
    options: ["Motilal Vora", "Shyama Charan Shukla", "Arjun Singh", "Sunderlal Patwa"],
    answer: 2,
    explanation: "Arjun Singh was Chief Minister when methyl isocyanate leaked from the Union Carbide plant in Bhopal on the night of 2–3 December 1984, killing thousands. Motilal Vora succeeded him in 1985. 2 December is observed as National Pollution Control Day in memory of the victims."
  },
  {
    id: 23,
    question: "The Madhya Pradesh Public Service Commission (MPPSC), which conducts the state's Scientific Officer recruitment, is headquartered at:",
    options: ["Bhopal", "Jabalpur", "Gwalior", "Indore"],
    answer: 3,
    explanation: "MPPSC has its office at Residency Area, Indore. It is a constitutional body under Article 315, and its Chairman and members are appointed by the Governor under Article 316. The MP Board of Secondary Education, by contrast, is at Bhopal."
  },
  {
    id: 24,
    question: "Under which Article of the Constitution is the Governor of a state appointed by the President?",
    options: ["Article 153", "Article 155", "Article 163", "Article 164"],
    answer: 1,
    explanation: "Article 155 provides that the Governor is appointed by the President by warrant under hand and seal. Article 153 says there shall be a Governor for each state, Article 163 deals with the Council of Ministers aiding the Governor, and Article 164 with the appointment of the Chief Minister."
  },
  {
    id: 25,
    question: "Under Article 243K, the State Election Commissioner of Madhya Pradesh can be removed from office only in the manner and on the grounds applicable to a:",
    options: ["Member of the State Public Service Commission", "Chief Secretary", "Judge of a High Court", "Advocate General"],
    answer: 2,
    explanation: "Article 243K(2) protects the State Election Commissioner by providing that he can be removed only in the manner and on the grounds of a High Court judge, and his conditions of service cannot be varied to his disadvantage. He is appointed by the Governor. The Commission conducts elections to panchayats and, under Article 243ZA, to municipalities."
  },
  {
    id: 26,
    question: "The Board of Revenue, the highest court for revenue matters in Madhya Pradesh, is located at:",
    options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"],
    answer: 3,
    explanation: "The Board of Revenue of Madhya Pradesh sits at Gwalior and hears appeals and revisions in land revenue cases under the MP Land Revenue Code, 1959. The High Court is at Jabalpur, and MPPSC is at Indore. Placing state bodies in different cities was part of the 1956 reorganisation."
  },
  {
    id: 27,
    question: "The Gun Carriage Factory and the Ordnance Factory Khamaria, major defence production units, are located in which city of Madhya Pradesh?",
    options: ["Jabalpur", "Itarsi", "Katni", "Gwalior"],
    answer: 0,
    explanation: "Jabalpur is a major defence production centre, with the Gun Carriage Factory, Ordnance Factory Khamaria, Vehicle Factory Jabalpur and Grey Iron Foundry. Itarsi has an ordnance factory making propellants, and Katni an ordnance factory too. These units are now part of the defence PSUs formed in 2021."
  },
  {
    id: 28,
    question: "The Pithampur industrial area, a major automobile hub sometimes called the \"Detroit of India\", lies in which district?",
    options: ["Indore", "Dhar", "Dewas", "Ujjain"],
    answer: 1,
    explanation: "Pithampur is in Dhar district, close to Indore, and is administered by MPIDC. It houses vehicle makers and auto component units and has a Special Economic Zone. Dewas and Ujjain have their own industrial areas."
  },
  {
    id: 29,
    question: "The Bank Note Press, a unit of the Security Printing and Minting Corporation of India that prints currency notes, is located in which city of Madhya Pradesh?",
    options: ["Narmadapuram", "Jabalpur", "Dewas", "Ratlam"],
    answer: 2,
    explanation: "The Bank Note Press at Dewas, set up in 1974, prints high-denomination currency notes and also makes security ink. Narmadapuram (Hoshangabad) has the Security Paper Mill, which makes the paper for notes. Both are units of SPMCIL under the Ministry of Finance."
  },
  {
    id: 30,
    question: "Which Article of the Constitution makes it the duty of the Chief Minister to communicate the decisions of the Council of Ministers to the Governor?",
    options: ["Article 167", "Article 166", "Article 163", "Article 200"],
    answer: 0,
    explanation: "Article 167 requires the Chief Minister to communicate decisions of the Council of Ministers to the Governor and to furnish information the Governor asks for. Article 166 deals with the conduct of business of the state government, Article 163 with the Council of Ministers to aid and advise the Governor, and Article 200 with assent to Bills."
  },
  {
    id: 31,
    question: "The Indira Gandhi Rashtriya Manav Sangrahalaya, an open-air museum of human life and tribal cultures on the Shamla hills, is located in which city?",
    options: ["Jabalpur", "Bhopal", "Indore", "Gwalior"],
    answer: 1,
    explanation: "The Indira Gandhi Rashtriya Manav Sangrahalaya (National Museum of Mankind) is in Bhopal on the Shamla hills overlooking the Upper Lake. Its open-air exhibitions show full-size tribal dwellings from across India, and it is an autonomous body under the Union Ministry of Culture. Bhopal also has the state's Tribal Museum."
  },
  {
    id: 32,
    question: "Maheshwari sarees, known for their reversible borders and woven on the banks of the Narmada, belong to which district?",
    options: ["Khargone", "Dhar", "Ashoknagar", "Dewas"],
    answer: 0,
    explanation: "Maheshwari sarees are woven at Maheshwar in Khargone district, a tradition linked with Ahilyabai Holkar's patronage in the 18th century. The Rehwa Society, founded in 1979, revived the craft. Chanderi sarees come from Ashoknagar district, and Bagh print from Dhar."
  },
  {
    id: 33,
    question: "The circular Chausath Yogini temple at Mitaoli, often said to have inspired the design of the old Parliament House, is in which district?",
    options: ["Jabalpur", "Bhind", "Datia", "Morena"],
    answer: 3,
    explanation: "The Ekattarso Mahadeva (Chausath Yogini) temple at Mitaoli in Morena district is a circular temple with 64 cells around a central shrine, built by the Kachchhapaghata rulers in the 11th century. Its circular plan is popularly linked with the old Parliament House in New Delhi. Bhedaghat in Jabalpur has a different Chausath Yogini temple."
  },
  {
    id: 34,
    question: "The Bagh caves of Dhar district, whose murals are often compared with those of Ajanta, are:",
    options: ["Jain rock-cut temples of the Paramara period", "Brahmanical cave shrines of the Rashtrakuta period", "Buddhist rock-cut viharas of the Gupta period", "Mughal-era pleasure pavilions"],
    answer: 2,
    explanation: "The nine Bagh caves on the Baghini river were cut as Buddhist monasteries around the 5th–6th century CE, in the Gupta period. Cave 4, the Rang Mahal, preserves murals in the Ajanta style, many of which were later moved to the Gwalior museum. The caves are in the sandstone of the Vindhyas."
  },
  {
    id: 35,
    question: "The Maihar gharana of Hindustani instrumental music was founded by:",
    options: ["Ustad Alauddin Khan", "Ustad Amir Khan", "Pandit Kumar Gandharva", "Ustad Hafiz Ali Khan"],
    answer: 0,
    explanation: "Ustad Alauddin Khan, court musician of the Maihar state, founded the Maihar gharana and trained Ravi Shankar, Ali Akbar Khan and Annapurna Devi. Ustad Amir Khan is linked with the Indore gharana, Kumar Gandharva lived and worked at Dewas, and Hafiz Ali Khan was a sarod master of Gwalior."
  },
  {
    id: 36,
    question: "Badhai, a lively folk dance performed at childbirth, weddings and festivals, belongs to which cultural region of Madhya Pradesh?",
    options: ["Malwa", "Bundelkhand", "Nimar", "Baghelkhand"],
    answer: 1,
    explanation: "Badhai is a Bundelkhand folk dance in which men and women dance to drums and flute to celebrate a birth, marriage or a wish fulfilled by the deity. Rai and Saira are other Bundeli dances. Matki and Aada-Khada are Malwa dances, and Gangaur dance is linked with Nimar."
  },
  {
    id: 37,
    question: "The Khajuraho Dance Festival, held against the backdrop of the Chandela temples, normally takes place in which month?",
    options: ["June", "August", "February", "October"],
    answer: 2,
    explanation: "The Khajuraho Dance Festival is held every year in February, usually for about a week, in the open air before the Western Group of temples. It brings together classical dance forms such as Kathak, Bharatanatyam, Odissi and Kuchipudi. It is organised by the MP Culture Department through the Ustad Alauddin Khan Sangeet Evam Kala Academy."
  },
  {
    id: 38,
    question: "Which one of the following sites in Madhya Pradesh is inscribed on the UNESCO World Heritage List?",
    options: ["Gwalior Fort", "Mandu", "Orchha", "Rock Shelters of Bhimbetka"],
    answer: 3,
    explanation: "Madhya Pradesh has three UNESCO World Heritage Sites: Khajuraho (1986), Sanchi (1989) and the Rock Shelters of Bhimbetka (2003). Mandu, Orchha, Gwalior Fort and several other MP monuments are not inscribed, though some of them are on India's Tentative List."
  },
  {
    id: 39,
    question: "The Kalidas Samaroh, an annual festival of Sanskrit drama, literature and the arts, is held at which city?",
    options: ["Ujjain", "Gwalior", "Bhopal", "Dhar"],
    answer: 0,
    explanation: "The Akhil Bharatiya Kalidas Samaroh is held every year at Ujjain on Devprabodhini Ekadashi, organised by the Kalidas Sanskrit Academy. Kalidasa is traditionally linked with Ujjain, and his Meghaduta describes the city. The festival includes staging of his plays and seminars."
  },
  {
    id: 40,
    question: "The Gotmar Mela, in which villagers on two banks of the Jam river pelt stones at each other the day after Pola, is held in which district?",
    options: ["Betul", "Pandhurna", "Seoni", "Mandla"],
    answer: 1,
    explanation: "The Gotmar Mela is held at Pandhurna (Pandhurna and Savargaon villages) across the Jam river, the day after the Pola festival in Bhadrapad. Pandhurna became a separate district in 2023, carved out of Chhindwara. The administration posts heavy medical and police arrangements because of injuries every year."
  },
  {
    id: 41,
    question: "Bhopal Metro, which began commercial passenger service in December 2025, is built and operated by:",
    options: ["Delhi Metro Rail Corporation", "Bhopal Smart City Development Corporation", "Madhya Pradesh Metro Rail Corporation Limited", "West Central Railway"],
    answer: 2,
    explanation: "Bhopal Metro is run by Madhya Pradesh Metro Rail Corporation Limited (MPMRCL), a joint venture of the Government of India and the MP government, which is also building the Indore Metro. Its first Orange Line priority corridor, about 6–7 km with eight stations from Subhash Nagar to AIIMS, was inaugurated on 20 December 2025 and opened to passengers on 21 December 2025."
  },
  {
    id: 42,
    question: "About how many jobs over five years is the Madhya Pradesh SpaceTech Policy-2026, approved in January 2026, expected to create?",
    options: ["2,000", "5,000", "12,000", "8,000"],
    answer: 3,
    explanation: "The MP cabinet approved the SpaceTech Policy-2026 on 13 January 2026. It aims to attract about ₹1,000 crore of investment and create around 8,000 jobs in five years in satellite manufacturing, geospatial analysis and downstream space applications. It also envisages a state satellite, MP-SAT."
  },
  {
    id: 43,
    question: "The India–AI Impact Summit, held in New Delhi in February 2026, built its agenda on which three guiding principles?",
    options: ["People, Planet and Progress", "Safety, Security and Sovereignty", "Innovation, Inclusion and Integrity", "Data, Compute and Talent"],
    answer: 0,
    explanation: "The India–AI Impact Summit at Bharat Mandapam (16–20 February 2026) was framed around three principles: People, Planet and Progress. Its discussions ran through thematic working groups called Chakras, covering areas such as human capital, inclusion and safe and trusted AI. It was the first global AI summit hosted in the Global South."
  },
  {
    id: 44,
    question: "Channelrhodopsin, the light-sensitive protein behind the optogenetics work honoured with the 2026 Nobel Prize in Physiology or Medicine, was first discovered in:",
    options: ["A thermophilic bacterium", "A green alga", "A jellyfish", "A firefly"],
    answer: 1,
    explanation: "Peter Hegemann and Georg Nagel identified channelrhodopsins, light-gated ion channels, in the green alga Chlamydomonas reinhardtii, where they guide the cell towards light. Karl Deisseroth then used them to switch neurons on and off with light. The three shared the Nobel Prize announced on 5 October 2026. Green fluorescent protein comes from a jellyfish."
  },
  {
    id: 45,
    question: "In mid-2026, Sitahi Kutki and Nagdaman Kutki from the tribal areas of Madhya Pradesh received GI tags. Kutki is a type of:",
    options: ["Pigeon pea", "Aromatic rice", "Little millet", "Oilseed"],
    answer: 2,
    explanation: "Kutki is little millet (Panicum sumatrense), a hardy minor millet grown by tribal farmers in Dindori, Mandla and nearby districts. Sitahi Kutki and Nagdaman Kutki were among four traditional tribal crops of MP that received GI tags around June–July 2026, along with Baigani Arhar and Chhatriya Dhan."
  },
  {
    id: 46,
    question: "Large language models such as GPT and Gemini are built mainly on which neural network architecture?",
    options: ["Convolutional neural network", "Recurrent neural network", "Generative adversarial network", "Transformer"],
    answer: 3,
    explanation: "Modern large language models use the Transformer architecture introduced in the 2017 paper \"Attention Is All You Need\". Its self-attention mechanism lets the model weigh relationships between all words in a sequence in parallel. CNNs are mainly used for images, and GANs for generating synthetic images."
  },
  {
    id: 47,
    question: "Under the Information Technology Act, 2000, capturing or publishing images of a person's private area without consent is punishable under which section?",
    options: ["Section 66E", "Section 66C", "Section 66F", "Section 43A"],
    answer: 0,
    explanation: "Section 66E punishes violation of privacy by capturing, publishing or transmitting images of a person's private area without consent, with up to three years' imprisonment or a fine. Section 66C covers identity theft, 66F cyber terrorism, and 43A compensation for failure to protect sensitive personal data."
  },
  {
    id: 48,
    question: "In machine learning, training a model on examples that already carry the correct labels, such as images tagged \"fingerprint\" or \"not fingerprint\", is called:",
    options: ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Clustering"],
    answer: 1,
    explanation: "Supervised learning uses labelled input–output pairs so that the model learns to predict labels for new data, as in classification and regression. Unsupervised learning, such as clustering, finds patterns in unlabelled data. Reinforcement learning learns by trial and error from rewards."
  },
  {
    id: 49,
    question: "A caller posing as a bank official phones a person and persuades them to share an OTP, then empties their account. This type of fraud is called:",
    options: ["Smishing", "Pharming", "Vishing", "Spoofing"],
    answer: 2,
    explanation: "Vishing (voice phishing) uses phone calls to trick victims into revealing OTPs, PINs or card details. Smishing uses SMS, and pharming redirects users to fake websites by tampering with DNS. Such frauds can be reported on the national cyber-crime helpline 1930."
  },
  {
    id: 50,
    question: "SAMPADA 2.0, launched by the Madhya Pradesh government, is a digital platform for:",
    options: ["Land-record mutation of agricultural land", "Online registration of FIRs", "Payment of electricity bills", "Registration of property documents and e-stamping"],
    answer: 3,
    explanation: "SAMPADA (State Assessment and Management of Property Documents Application) is the Registration and Stamps Department's system for e-registration of documents and e-stamping. Version 2.0 added features such as online guideline values, video-based identity verification and faceless registration. Land records are handled separately on the Bhulekh/Web-GIS system."
  },
  {
    id: 51,
    question: "The principle that \"every contact leaves a trace\", the foundation of trace-evidence work, was formulated by:",
    options: ["Hans Gross", "Alphonse Bertillon", "Edmond Locard", "Paul L. Kirk"],
    answer: 2,
    explanation: "Edmond Locard, who set up one of the first police laboratories at Lyon in 1910, stated the exchange principle: whenever two objects come into contact, material is transferred between them. Bertillon devised anthropometry for identifying criminals. Paul Kirk later restated the idea of physical evidence as a silent witness."
  },
  {
    id: 52,
    question: "Who wrote the 1893 handbook on criminal investigation and is often called the father of criminalistics?",
    options: ["Hans Gross", "Edmond Locard", "Alphonse Bertillon", "Calvin Goddard"],
    answer: 0,
    explanation: "Hans Gross, an Austrian examining magistrate, published Handbuch für Untersuchungsrichter (Criminal Investigation) in 1893 and coined the term criminalistics. He argued that investigators should use physics, chemistry, botany and microscopy. Calvin Goddard is a pioneer of firearms identification, and Bertillon of anthropometry."
  },
  {
    id: 53,
    question: "The medullary index (medulla diameter ÷ shaft diameter) of human head hair is typically:",
    options: ["0.5 or more", "Less than about 0.33", "Close to 1.0", "Between 0.7 and 0.9"],
    answer: 1,
    explanation: "Human head hair has a medullary index usually below one-third, and the medulla is often absent or fragmented. Most animals have a medullary index of 0.5 or greater with a continuous, often patterned medulla. This is one of the quickest microscopic tests for telling human from animal hair."
  },
  {
    id: 54,
    question: "A hair shows a ladder-like (uniserial or multiserial) medulla under the microscope. It most likely comes from a:",
    options: ["Human", "Horse", "Cow", "Rabbit"],
    answer: 3,
    explanation: "A ladder-type medulla, made of one or more rows of cells separated by air spaces, is typical of rabbit hair. Human hair has an amorphous, fragmented or absent medulla with a low medullary index. Horse and cow hairs have wide continuous medullae, and deer hair has a lattice medulla filling almost the whole shaft."
  },
  {
    id: 55,
    question: "A hair recovered from a scene has a club-shaped root with no attached tissue. It is most likely in which growth phase?",
    options: ["Anagen", "Catagen", "Telogen", "Early anagen"],
    answer: 2,
    explanation: "Telogen (resting-phase) hairs have a club-shaped, keratinised root and are shed naturally, so they carry little or no nuclear DNA. Anagen (active growth) hairs that are pulled out often bear a follicular tag rich in nuclear DNA. Catagen is the short transitional phase between the two."
  },
  {
    id: 56,
    question: "In a suspected drowning, finding diatoms in which sample gives the strongest support that the person was alive when they entered the water?",
    options: ["Bone marrow of the femur", "Stomach contents", "Surface of the lungs", "Nasal swab"],
    answer: 0,
    explanation: "When a living person inhales water, diatoms cross the alveolar membrane and are carried by circulation to distant organs such as femoral bone marrow, kidney and brain. Diatoms in the lungs, stomach or nose can enter passively after death. Their silica frustules survive acid digestion, so the test works even on decomposed bodies."
  },
  {
    id: 57,
    question: "Which family of insects usually arrives first and lays eggs on a fresh corpse within minutes to hours of death?",
    options: ["Dermestidae (hide beetles)", "Calliphoridae (blowflies)", "Silphidae (carrion beetles)", "Piophilidae (cheese skippers)"],
    answer: 1,
    explanation: "Blowflies (Calliphoridae), such as Chrysomya and Lucilia, are attracted to fresh bodies quickly and lay eggs in natural openings and wounds. Their larval development is used to estimate the minimum post-mortem interval. Dermestid beetles and cheese skippers arrive later, at the dry and fermentation stages."
  },
  {
    id: 58,
    question: "Blowfly larvae from a body need 2,400 accumulated degree hours (ADH) above a base temperature of 10 °C to reach the stage collected. If the scene averaged 25 °C, how long ago were the eggs laid?",
    options: ["96 hours", "100 hours", "240 hours", "160 hours"],
    answer: 3,
    explanation: "Each hour contributes (25 − 10) = 15 degree hours. Time = 2,400 ÷ 15 = 160 hours, or about 6.7 days. This gives the minimum PMI, because egg-laying may have been delayed after death."
  },
  {
    id: 59,
    question: "The study of pollen and spores to link a suspect, object or body to a particular place is called forensic:",
    options: ["Mycology", "Dendrology", "Palynology", "Bryology"],
    answer: 2,
    explanation: "Forensic palynology studies pollen grains and spores, which are produced in huge numbers, are highly resistant and can be identified to plant genus or species. A pollen profile on clothing or shoes can be matched to the vegetation of a scene. Mycology is the study of fungi and dendrology of trees."
  },
  {
    id: 60,
    question: "Arthur Koehler's tracing of the wood of a homemade ladder to a lumber yard in the Lindbergh kidnapping case (1932) is a landmark in which field?",
    options: ["Forensic botany (wood anatomy)", "Forensic entomology", "Forensic odontology", "Forensic serology"],
    answer: 0,
    explanation: "Koehler, a US Forest Service wood expert, identified the species, tool marks and grain of the ladder rails and traced one rail to the attic of the accused, Bruno Hauptmann. It is a classic example of forensic botany. Wood anatomy identifies species from vessels, rays and growth rings."
  },
  {
    id: 61,
    question: "In wildlife forensics, the mitochondrial gene most commonly sequenced to identify the species of seized meat or skin is:",
    options: ["Beta-globin", "Cytochrome b", "Amelogenin", "HLA-DQA1"],
    answer: 1,
    explanation: "Cytochrome b (cyt b), along with cytochrome c oxidase I (COI), is a standard mitochondrial barcode for species identification. Mitochondrial genes have many copies per cell and enough variation between species but little within a species. Amelogenin and HLA-DQA1 are used for human sex typing and older human DNA typing."
  },
  {
    id: 62,
    question: "Under the Wild Life (Protection) Act, 1972, as amended in 2022, the tiger is listed in which Schedule?",
    options: ["Schedule II", "Schedule III", "Schedule IV", "Schedule I"],
    answer: 3,
    explanation: "The 2022 amendment reduced the Schedules to four. Schedule I lists animals given the highest protection, including the tiger, Schedule II those with lesser protection, Schedule III protected plants, and Schedule IV specimens listed in the CITES Appendices. Offences involving Schedule I animals attract the heaviest penalties."
  },
  {
    id: 63,
    question: "A fibre recovered from clothing shows, under the microscope, bamboo-like nodes (cross-markings) and a narrow central lumen. It is most likely:",
    options: ["Cotton", "Wool", "Flax (linen)", "Silk"],
    answer: 2,
    explanation: "Flax (linen) is a bast fibre whose cells show transverse nodes or dislocations, giving a bamboo-like look, with a narrow lumen. Cotton appears as a twisted, flattened ribbon, wool shows cuticular scales, and silk is a smooth, structureless filament. Hemp and jute also show nodes but differ in cell shape and lumen."
  },
  {
    id: 64,
    question: "A fibre burns slowly, smells of burning hair and leaves a crushable black ash. It is most likely:",
    options: ["Cotton", "Nylon", "Viscose rayon", "Wool"],
    answer: 3,
    explanation: "Wool and silk are protein fibres, so they smell of burning hair and leave a brittle, crushable ash. Cotton and rayon are cellulose and smell of burning paper, leaving soft grey ash. Nylon melts and leaves a hard bead and gives off a celery-like smell."
  },
  {
    id: 65,
    question: "Which skeletal element gives the most reliable sex determination in adult human remains?",
    options: ["Pelvis", "Skull", "Femur", "Sternum"],
    answer: 0,
    explanation: "The pelvis is the most reliable single bone for sexing adults, with accuracy over 90%, because it is adapted for childbirth in females. Female pelves have a wider sciatic notch, a subpubic angle near 90° or more, and a broad, round inlet. The skull is second best, and long bones are less reliable."
  },
  {
    id: 66,
    question: "Eruption of the third permanent molar (wisdom tooth) is generally used to indicate an age of roughly:",
    options: ["12–14 years", "17–25 years", "6–8 years", "30–35 years"],
    answer: 1,
    explanation: "The third molar usually erupts between 17 and 25 years, which makes it a common marker in age disputes about whether a person is a minor. The second molar erupts at about 12–13 years and the first molar at about 6 years. Radiographs of third-molar root development are often used with epiphyseal fusion."
  },
  {
    id: 67,
    question: "The study of lip prints for personal identification is known as:",
    options: ["Rugoscopy", "Poroscopy", "Dactyloscopy", "Cheiloscopy"],
    answer: 3,
    explanation: "Cheiloscopy is the study of the grooves on the lips, which are thought to be unique and stable; Suzuki and Tsuchihashi classified them into types. Rugoscopy studies palatal rugae, poroscopy studies sweat pores in ridges, and dactyloscopy studies fingerprints."
  },
  {
    id: 68,
    question: "Which fingerprint pattern type is the most common in human populations?",
    options: ["Whorl", "Arch", "Loop", "Composite"],
    answer: 2,
    explanation: "Loops make up about 60–65% of fingerprint patterns, whorls about 30–35%, and arches only about 5%. A loop has one delta and ridges that enter and leave from the same side. Fingerprints form during the foetal period and stay unchanged throughout life."
  },
  {
    id: 69,
    question: "Among the voluntary muscles, rigor mortis usually appears first in the:",
    options: ["Muscles of the eyelids", "Muscles of the lower limbs", "Muscles of the trunk", "Small muscles of the fingers"],
    answer: 0,
    explanation: "By Nysten's rule, rigor first appears in the heart (involuntary) and then in the eyelids, face and jaw, spreading downward to the trunk and limbs, and finally the fingers and toes. It passes off in the same order. Rigor is caused by depletion of ATP, which leaves actin and myosin locked together."
  },
  {
    id: 70,
    question: "The Henssge nomogram for estimating time since death is based on which measurements?",
    options: ["Vitreous potassium and urea", "Rectal temperature, ambient temperature and body weight", "Degree of rigor and lividity", "Gastric contents and their stage of digestion"],
    answer: 1,
    explanation: "Henssge's nomogram uses rectal temperature, ambient temperature and body weight, with correction factors for clothing and wind, to estimate the time since death in the early post-mortem period. It models the sigmoid cooling curve of a body. Vitreous potassium is a separate method."
  },
  {
    id: 71,
    question: "Silica-based DNA extraction, used in spin columns and magnetic-bead systems, binds DNA to silica in the presence of:",
    options: ["Low-salt Tris buffer", "High concentrations of EDTA", "Chaotropic salts such as guanidinium thiocyanate", "Chelex resin"],
    answer: 2,
    explanation: "Chaotropic salts such as guanidinium thiocyanate or guanidinium hydrochloride disrupt the water structure around DNA, so it binds to silica. Proteins and inhibitors are washed away with ethanol buffers, and pure DNA is eluted with low-salt buffer or water. The method is easy to automate and widely used in forensic labs."
  },
  {
    id: 72,
    question: "In phenol–chloroform (organic) extraction, after centrifugation the DNA is found in which layer?",
    options: ["Upper aqueous phase", "Lower organic phase", "Protein interphase", "Pellet at the bottom of the tube"],
    answer: 0,
    explanation: "DNA is polar and stays in the upper aqueous phase, while denatured proteins collect at the interphase and lipids dissolve in the lower organic phase. The aqueous layer is removed and the DNA is concentrated by ethanol precipitation or on a filter device. Organic extraction gives high-quality double-stranded DNA but uses hazardous chemicals."
  },
  {
    id: 73,
    question: "What is the main role of proteinase K in DNA extraction from biological stains?",
    options: ["To cut DNA at specific sequences", "To digest proteins, including nucleases and histones", "To chelate magnesium ions", "To precipitate DNA from solution"],
    answer: 1,
    explanation: "Proteinase K is a broad-spectrum serine protease that digests cellular proteins, including histones bound to DNA and nucleases that would degrade it. It stays active in SDS and at 56 °C, which is why it is used in lysis buffers. Chelating agents such as EDTA bind magnesium, and ethanol precipitates DNA."
  },
  {
    id: 74,
    question: "Most STR loci used in forensic DNA kits have a core repeat unit of what length?",
    options: ["Dinucleotide (2 bp)", "Trinucleotide (3 bp)", "Hexanucleotide (6 bp)", "Tetranucleotide (4 bp)"],
    answer: 3,
    explanation: "Forensic STR loci such as D3S1358, vWA and FGA are mostly tetranucleotide repeats. Four-base repeats give less stutter than di- or trinucleotide repeats, while keeping amplicons short enough for degraded DNA. A few loci, such as Penta D and Penta E, are pentanucleotide repeats."
  },
  {
    id: 75,
    question: "Since January 2017, how many core STR loci are required for uploading profiles to the US CODIS national database?",
    options: ["13", "15", "20", "24"],
    answer: 2,
    explanation: "The FBI expanded the CODIS core set from 13 to 20 STR loci from 1 January 2017. The seven added loci include D1S1656, D2S441, D2S1338, D10S1248, D12S391, D19S433 and D22S1045. The larger set improves discrimination and compatibility with European databases."
  },
  {
    id: 76,
    question: "In common STR kits, the amelogenin X amplicon is shorter than the Y amplicon by how many base pairs?",
    options: ["6 bp", "3 bp", "4 bp", "12 bp"],
    answer: 0,
    explanation: "The amelogenin gene on the X chromosome has a 6-bp deletion in intron 1 compared with the Y homologue, giving peaks of about 106 bp (X) and 112 bp (Y) in many kits. A female shows only X, while a male shows X and Y. Rare deletions of AMELY can make a male appear female."
  },
  {
    id: 77,
    question: "The heat-stable DNA polymerase used in standard PCR was first isolated from which organism?",
    options: ["Pyrococcus furiosus", "Thermus aquaticus", "Escherichia coli", "Thermococcus litoralis"],
    answer: 1,
    explanation: "Taq polymerase comes from Thermus aquaticus, a bacterium found by Thomas Brock in hot springs at Yellowstone. It survives the repeated denaturation steps at about 94 °C, so fresh enzyme is not needed each cycle. Pfu polymerase from Pyrococcus furiosus has proofreading activity."
  },
  {
    id: 78,
    question: "Starting from one double-stranded DNA molecule, roughly how many copies does an ideal PCR produce after 30 cycles?",
    options: ["About 30,000", "About 1 million", "About 60", "About 1 billion"],
    answer: 3,
    explanation: "With perfect efficiency each cycle doubles the target, so 30 cycles give 2^30 ≈ 1.07 × 10^9 copies. In practice efficiency is below 100% and the reaction plateaus as reagents are used up. Forensic STR kits usually use 28–30 cycles."
  },
  {
    id: 79,
    question: "At what temperature does the extension step of a standard Taq-based PCR cycle usually take place?",
    options: ["94 °C", "55 °C", "72 °C", "37 °C"],
    answer: 2,
    explanation: "Taq polymerase works best at about 72 °C, so primer extension is done at this temperature. Denaturation is at about 94–95 °C, and annealing usually at 50–65 °C depending on the primer melting temperature. 37 °C is typical for many restriction enzymes."
  },
  {
    id: 80,
    question: "In an STR electropherogram, a stutter peak for a tetranucleotide locus most commonly appears at which position relative to the true allele?",
    options: ["One repeat unit shorter (n − 4)", "One base longer (n + 1)", "Two repeat units longer (n + 8)", "Exactly at the same size but a different colour"],
    answer: 0,
    explanation: "Stutter results from slipped-strand mispairing during PCR and usually produces a small peak one repeat shorter than the parent allele, typically 5–15% of its height. The n + 1 peak is the non-template adenine addition, and same-size peaks in another dye are pull-up. Stutter matters when interpreting minor contributors in mixtures."
  },
  {
    id: 81,
    question: "The \"plus-A\" or non-template addition seen in STR profiles is caused by:",
    options: ["Primer-dimer formation", "Taq polymerase adding an extra adenine at the 3′ end", "Slippage of the template strand", "Incomplete spectral calibration"],
    answer: 1,
    explanation: "Taq polymerase tends to add a single non-templated nucleotide, usually adenine, to the 3′ end of products, making them 1 bp longer. Kits add a final extension step at 60 °C to push almost all products to the +A form so that split peaks do not appear. Spectral problems cause pull-up, not +A."
  },
  {
    id: 82,
    question: "In a capillary electrophoresis genetic analyser, STR fragments labelled with fluorescent dyes are detected by:",
    options: ["Ultraviolet absorbance at 260 nm", "Autoradiography", "Silver staining", "Laser-induced fluorescence with a CCD camera"],
    answer: 3,
    explanation: "Fragments migrate through a polymer-filled capillary, pass a detection window and are excited by a laser. The emitted fluorescence is split by wavelength onto a CCD camera, allowing several dyes to be read at once. Size is assigned by comparison with an internal lane standard run in each capillary."
  },
  {
    id: 83,
    question: "A suspect's genotypes at three independent STR loci have frequencies of 0.2, 0.04 and 0.05. What is the random match probability by the product rule?",
    options: ["2.9 × 10⁻¹", "4 × 10⁻³", "4 × 10⁻⁴", "8 × 10⁻⁵"],
    answer: 2,
    explanation: "The product rule multiplies independent genotype frequencies: 0.2 × 0.04 × 0.05 = 0.0004 = 4 × 10⁻⁴, about 1 in 2,500 people. Adding them gives the wrong value of 0.29. Real casework uses 15–20 or more loci, giving far smaller probabilities."
  },
  {
    id: 84,
    question: "Allele 14 at an STR locus has a frequency of 0.3 in a population. Under Hardy–Weinberg equilibrium, what proportion of people are expected to be homozygous 14,14?",
    options: ["0.30", "0.09", "0.60", "0.42"],
    answer: 1,
    explanation: "Homozygote frequency is p² = 0.3 × 0.3 = 0.09. A heterozygote of allele 14 with all other alleles together would be 2pq = 2 × 0.3 × 0.7 = 0.42. Forensic labs often apply a θ correction (NRC II) to homozygotes to allow for population substructure."
  },
  {
    id: 85,
    question: "Why can mitochondrial DNA often be typed from a hair shaft that has no root?",
    options: ["mtDNA is present in hundreds to thousands of copies per cell", "mtDNA is protected by histone proteins", "mtDNA is longer than nuclear DNA", "mtDNA is synthesised after cell death"],
    answer: 0,
    explanation: "Each cell carries many mitochondria, each with several copies of the 16,569-bp circular mtDNA, so enough survives in keratinised hair shafts, old bones and teeth. Analysis usually targets the hypervariable regions HV1 and HV2 in the control region. mtDNA is maternally inherited, so it cannot tell apart maternal relatives."
  },
  {
    id: 86,
    question: "Which marker system is used to trace a paternal lineage because it is passed almost unchanged from father to son?",
    options: ["Mitochondrial DNA", "Autosomal STRs", "X-STRs", "Y-STRs"],
    answer: 3,
    explanation: "Y-STRs lie on the non-recombining part of the Y chromosome and are inherited as a block (haplotype) from father to son. All paternal male relatives usually share the same haplotype unless a mutation has occurred. Mitochondrial DNA traces the maternal line."
  },
  {
    id: 87,
    question: "In real-time PCR DNA quantification kits such as Quantifiler, the internal positive control (IPC) is mainly used to detect:",
    options: ["The sex of the donor", "The presence of PCR inhibitors", "The number of contributors", "Allele drop-in"],
    answer: 1,
    explanation: "The IPC is a synthetic target added to every reaction at a fixed amount. If its Ct value is delayed or it fails to amplify, inhibitors such as haem, humic acid or indigo are present in the extract. Sex is indicated by a separate Y-target, and quantification guides how much DNA to add to the STR reaction."
  },
  {
    id: 88,
    question: "A bloodstain cut from a pair of blue denim jeans repeatedly gives weak STR results even though DNA quantity is adequate. The most likely inhibitor is:",
    options: ["Humic acid", "Melanin", "Indigo dye", "Collagen"],
    answer: 2,
    explanation: "Indigo, the dye in denim, is a well-known PCR inhibitor that co-extracts with DNA. Remedies include extra purification, diluting the extract, or adding bovine serum albumin. Humic acid comes from soil, melanin from hair and skin, and collagen from bone."
  },
  {
    id: 89,
    question: "What is the main advantage of SNP typing over STR typing for highly degraded DNA?",
    options: ["SNPs have more alleles per locus", "SNP amplicons can be made very short", "SNPs mutate faster", "SNPs need no PCR amplification"],
    answer: 1,
    explanation: "A SNP is a single base change, so PCR products of 50–100 bp are enough, which suits fragmented DNA in burnt or old remains. Each SNP has only two alleles, so many more loci are needed to match the discrimination of STRs. SNPs have low mutation rates, which also helps kinship analysis."
  },
  {
    id: 90,
    question: "A paternity test gives a combined paternity index (CPI) of 9,999. Assuming a neutral prior probability of 0.5, what is the probability of paternity?",
    options: ["50%", "90%", "99.0%", "99.99%"],
    answer: 3,
    explanation: "With a prior of 0.5, probability of paternity W = CPI ÷ (CPI + 1) = 9,999 ÷ 10,000 = 0.9999, or 99.99%. The CPI is the product of the paternity indices of all loci. Many labs regard 99.9% or higher as practically proved paternity."
  },
  {
    id: 91,
    question: "The ABO blood group system was discovered in 1900–1901 by:",
    options: ["Karl Landsteiner", "Alexander Wiener", "Paul Uhlenhuth", "Jan Janský"],
    answer: 0,
    explanation: "Karl Landsteiner described the A, B and O groups in 1900–1901 by mixing the serum and red cells of different people, and received the Nobel Prize in 1930. Decastello and Sturli added group AB in 1902. Landsteiner and Wiener later discovered the Rh factor in 1940, and Uhlenhuth devised the precipitin test."
  },
  {
    id: 92,
    question: "The plasma of a person with blood group AB contains:",
    options: ["Both anti-A and anti-B", "Only anti-A", "Neither anti-A nor anti-B", "Only anti-H"],
    answer: 2,
    explanation: "A person with group AB has both A and B antigens on red cells, so their plasma has no anti-A or anti-B antibodies; they are called universal recipients for red cells. Group O plasma has both anti-A and anti-B. Anti-H is found in people with the Bombay phenotype."
  },
  {
    id: 93,
    question: "The Bombay phenotype (Oh), first described in Mumbai in 1952, is caused by the absence of which antigen?",
    options: ["D antigen", "H antigen", "Lewis antigen", "A1 antigen"],
    answer: 1,
    explanation: "People with the Bombay phenotype are homozygous hh and cannot make the H antigen, the precursor for A and B antigens. Their cells type as group O, but their plasma has anti-A, anti-B and anti-H, so they can receive blood only from other Bombay donors. It was first described by Bhende and colleagues in 1952."
  },
  {
    id: 94,
    question: "Which method is the most sensitive for ABO grouping of a small, old dried bloodstain?",
    options: ["Lattes crust method", "Absorption–inhibition", "Direct Coombs test", "Absorption–elution"],
    answer: 3,
    explanation: "In absorption–elution, antisera are absorbed onto the stain, unbound antibody is washed off, and the bound antibody is eluted by heat and detected with indicator red cells. It needs very little material and works on old stains. Absorption–inhibition needs much more stain, and the Lattes method detects antibodies rather than antigens."
  },
  {
    id: 95,
    question: "The Lattes crust test, applied to bloodstains, detects:",
    options: ["Antibodies (agglutinins) in the stain", "ABH antigens on red cells", "Species of origin", "Haemoglobin derivatives"],
    answer: 0,
    explanation: "In the Lattes test, flakes of a stain are placed on a slide with known A, B and O cells. Agglutination shows which antibodies are present, so it is a reverse grouping. Antibodies in dried stains break down quickly, so the test works mainly on fresh stains."
  },
  {
    id: 96,
    question: "About what proportion of people are secretors who release ABH antigens into saliva, semen and other body fluids?",
    options: ["About 20%", "About 50%", "About 80%", "Nearly 100%"],
    answer: 2,
    explanation: "Roughly 80% of people are secretors (Se/Se or Se/se) and secrete water-soluble ABH substances into body fluids. Secretor status is controlled by the FUT2 gene. In non-secretors, ABO grouping of saliva or semen stains fails even though their red cells type normally."
  },
  {
    id: 97,
    question: "A person is called \"Rh positive\" when their red cells carry which antigen?",
    options: ["C antigen", "E antigen", "c antigen", "D antigen"],
    answer: 3,
    explanation: "Rh-positive status refers to the D antigen, the most immunogenic Rh antigen. The Rh system also includes C, c, E and e antigens, coded by RHD and RHCE genes on chromosome 1. About 93–95% of Indians are Rh(D) positive."
  },
  {
    id: 98,
    question: "Haemolytic disease of the newborn due to Rh incompatibility typically affects which pregnancy?",
    options: ["First Rh-positive baby of an Rh-positive mother", "Second or later Rh-positive baby of a sensitised Rh-negative mother", "Rh-negative baby of an Rh-positive mother", "Any baby of an AB mother"],
    answer: 1,
    explanation: "An Rh-negative mother can be sensitised by foetal Rh-positive cells during her first delivery. In a later Rh-positive pregnancy, her IgG anti-D crosses the placenta and destroys foetal red cells. Giving anti-D immunoglobulin to the mother after delivery prevents sensitisation."
  },
  {
    id: 99,
    question: "Which presumptive reagent is sprayed at a darkened crime scene to reveal latent or cleaned-up blood by a blue-white chemiluminescence?",
    options: ["Luminol", "Leucomalachite green", "Tetramethylbenzidine", "Fluorescein"],
    answer: 0,
    explanation: "Luminol is oxidised in the presence of haem and an oxidant, emitting blue-white light that is visible in darkness without any light source. It can detect blood diluted many thousand times and does not prevent later DNA typing. Fluorescein needs an alternate light source, while LMG and TMB give colour changes."
  },
  {
    id: 100,
    question: "The brown rhombic crystals formed in the Teichmann test for blood are crystals of:",
    options: ["Haemochromogen", "Haematoporphyrin", "Haemin (haematin chloride)", "Carboxyhaemoglobin"],
    answer: 2,
    explanation: "The Teichmann test heats blood with glacial acetic acid and a chloride salt, forming brown rhombic crystals of haemin (haematin chloride). The Takayama test forms pink-red feathery crystals of pyridine haemochromogen. Both are microcrystalline confirmatory tests for haem."
  },
  {
    id: 101,
    question: "Which test is traditionally used to determine whether a bloodstain is of human origin?",
    options: ["Benzidine test", "Precipitin test", "Takayama test", "Barberio test"],
    answer: 1,
    explanation: "The precipitin test, developed by Paul Uhlenhuth in 1901, reacts an extract of the stain with antihuman serum; a visible precipitate shows human proteins. It can be done by ring test, gel diffusion or crossover electrophoresis. The benzidine and Takayama tests show only that blood is present."
  },
  {
    id: 102,
    question: "In the Ouchterlony double immunodiffusion test, antigen and antibody are placed in separate wells cut in agar. A visible line forms where:",
    options: ["The antigen binds to the agar", "The antibody is denatured", "An electric current focuses the proteins", "Antigen and antibody meet at optimal proportions and precipitate"],
    answer: 3,
    explanation: "Both reactants diffuse outward through the gel, and a precipitin line forms where they meet in optimal (equivalent) proportions. Fused lines show identity, crossing lines show non-identity, and spurs show partial identity. No current is used, which separates it from crossover electrophoresis."
  },
  {
    id: 103,
    question: "The acid phosphatase test for seminal fluid using sodium α-naphthyl phosphate and Brentamine Fast Blue gives a positive result as:",
    options: ["A purple colour within seconds", "Pink crystals", "Green fluorescence", "A white precipitate"],
    answer: 0,
    explanation: "Seminal acid phosphatase, from the prostate, hydrolyses α-naphthyl phosphate to α-naphthol, which couples with Brentamine Fast Blue to give a purple colour, usually within 30 seconds. It is a presumptive test, since vaginal fluid and some plant juices contain weaker acid phosphatase activity. It is useful for mapping stains on large items."
  },
  {
    id: 104,
    question: "Prostate-specific antigen (PSA, also called p30) used to confirm semen is produced mainly by the:",
    options: ["Seminal vesicles", "Testes", "Prostate gland", "Bulbourethral (Cowper's) glands"],
    answer: 2,
    explanation: "PSA is a 30-kDa serine protease made by the prostate and released into seminal plasma at high levels. Because it does not depend on sperm, it confirms semen from vasectomised or azoospermic men. Semenogelin comes from the seminal vesicles, and sperm from the testes."
  },
  {
    id: 105,
    question: "In the Christmas tree stain for spermatozoa, which colours are seen in the sperm head and tail?",
    options: ["Head blue, tail yellow", "Head green, tail red", "Head purple, tail colourless", "Head red, tail green"],
    answer: 3,
    explanation: "The Christmas tree stain uses Kernechtrot (nuclear fast red), which stains the nuclear sperm head red, and picroindigocarmine, which stains the tail and neck green. Epithelial cells take a blue-green cytoplasm with red nuclei. Finding sperm heads is the most direct confirmation of semen."
  },
  {
    id: 106,
    question: "The starch–iodine test for saliva stains depends on the activity of which enzyme?",
    options: ["Lysozyme", "α-Amylase", "Lipase", "Acid phosphatase"],
    answer: 1,
    explanation: "Salivary α-amylase breaks down starch, so a starch–iodine mixture incubated with a saliva extract loses its blue-black colour. The Phadebas test uses dye-labelled starch on the same principle. Amylase is also found in pancreatic fluid and some other fluids at lower levels, so the test is presumptive."
  },
  {
    id: 107,
    question: "The Jaffe test, in which picric acid in alkaline solution gives an orange-red colour, is used to indicate which body fluid?",
    options: ["Urine", "Saliva", "Sweat", "Vaginal fluid"],
    answer: 0,
    explanation: "The Jaffe reaction detects creatinine, which is present at high levels in urine. Creatinine forms an orange-red complex with picric acid in alkaline solution. Urea detection with urease is another way to screen for urine stains."
  },
  {
    id: 108,
    question: "Barberio's test for seminal fluid uses picric acid to form yellow needle-shaped crystals of:",
    options: ["Choline periodide", "Haemin", "Spermine picrate", "Calcium oxalate"],
    answer: 2,
    explanation: "Barberio's test forms yellow needle-like crystals of spermine picrate from spermine in semen. The Florence test uses iodine–potassium iodide to form dark brown crystals of choline periodide. Both are old presumptive tests and are not specific to human semen."
  },
  {
    id: 109,
    question: "A monoclonal antibody used in a forensic test kit recognises:",
    options: ["Many epitopes on several antigens", "Any protein of human origin", "Only carbohydrate antigens", "A single epitope on one antigen"],
    answer: 3,
    explanation: "A monoclonal antibody comes from one B-cell clone, grown as a hybridoma by the method of Köhler and Milstein (1975), so all its molecules bind the same epitope. This gives high specificity and batch-to-batch consistency in tests for human haemoglobin, PSA or drugs. Polyclonal antisera contain many antibodies against several epitopes."
  },
  {
    id: 110,
    question: "In a sandwich ELISA, the target antigen is detected by being:",
    options: ["Bound directly to the plate without antibodies", "Captured between an immobilised antibody and an enzyme-labelled antibody", "Competing with labelled antigen for a single antibody", "Precipitated in agar gel"],
    answer: 1,
    explanation: "In a sandwich ELISA, a capture antibody on the plate binds the antigen, and a second enzyme-linked antibody binds another epitope on it. Adding substrate produces a colour proportional to the antigen. In competitive ELISA, labelled and unlabelled antigen compete, so signal falls as concentration rises."
  },
  {
    id: 111,
    question: "Which microscope gives an upright, three-dimensional view at low magnification and is used first to search clothing and other exhibits for stains, hairs and fibres?",
    options: ["Phase-contrast microscope", "Stereo (dissecting) microscope", "Polarising microscope", "Transmission electron microscope"],
    answer: 1,
    explanation: "A stereo microscope uses two separate optical paths to give a three-dimensional, upright image at about 5–50× with a long working distance. Examiners use it to search exhibits and pick up trace evidence before higher-power examination. Phase-contrast and polarising microscopes are compound microscopes used on mounted specimens."
  },
  {
    id: 112,
    question: "A comparison microscope used to examine questioned and known hairs or fibres side by side consists of:",
    options: ["Two compound microscopes joined by an optical bridge", "A single microscope with two eyepieces", "A scanning electron microscope with two detectors", "A stereo microscope with a polarising filter"],
    answer: 0,
    explanation: "A comparison microscope links two compound microscopes through an optical bridge, so the examiner sees both specimens in one split or overlapping field. It is used for hairs, fibres, bullets and cartridge cases. A binocular microscope with two eyepieces shows only one specimen."
  },
  {
    id: 113,
    question: "Birefringence of a synthetic fibre, used to help identify its polymer type, is measured with a:",
    options: ["Phase-contrast microscope", "Fluorescence microscope", "Polarised light microscope", "Stereo microscope"],
    answer: 2,
    explanation: "A polarised light microscope with crossed polars and a compensator measures retardation, from which birefringence (the difference between two refractive indices) is calculated. Nylon, polyester and acrylic have different birefringence values. Polarised light microscopy is also used to identify soil minerals and starch grains."
  },
  {
    id: 114,
    question: "Which technique is the standard confirmatory method for identifying gunshot residue particles containing lead, barium and antimony?",
    options: ["Thin-layer chromatography", "UV-visible spectrophotometry", "Atomic absorption spectroscopy", "SEM with energy-dispersive X-ray analysis"],
    answer: 3,
    explanation: "SEM–EDX shows both the typical spheroidal shape of primer residue particles and their elemental composition (Pb, Ba, Sb) in the same particle. Atomic absorption can measure these elements in bulk but cannot show particle shape. SEM–EDX is accepted as the confirmatory test for GSR."
  },
  {
    id: 115,
    question: "Which type of microscopy makes unstained, transparent cells such as spermatozoa visible by converting differences in refractive index into differences in brightness?",
    options: ["Phase-contrast microscopy", "Dark-field microscopy", "Polarised light microscopy", "Bright-field microscopy"],
    answer: 0,
    explanation: "Phase-contrast microscopy, invented by Frits Zernike (Nobel 1953), converts tiny phase shifts in light passing through cells into brightness differences. It shows the outlines of living or unstained cells, including motile sperm in fresh swabs. Dark-field shows objects as bright on a dark background by scattered light."
  },
  {
    id: 116,
    question: "A morphine standard gives an Rf value of 0.40 in a TLC system. If the solvent front moves 7.5 cm, how far from the origin should a morphine spot in the sample appear?",
    options: ["1.9 cm", "4.0 cm", "18.75 cm", "3.0 cm"],
    answer: 3,
    explanation: "Rf = distance moved by spot ÷ distance moved by solvent front, so the spot distance = 0.40 × 7.5 = 3.0 cm. Dividing 7.5 by 0.40 gives an impossible 18.75 cm, beyond the solvent front. Matching Rf alone is not proof, so spots are also compared by colour reactions and confirmed by GC–MS."
  },
  {
    id: 117,
    question: "Paper chromatography separates compounds mainly on the basis of:",
    options: ["Adsorption onto silica", "Partition between water held in the cellulose and the mobile solvent", "Size exclusion through pores", "Ion exchange with charged groups"],
    answer: 1,
    explanation: "In paper chromatography, water bound to cellulose fibres acts as the stationary phase, and compounds partition between it and the moving solvent. TLC on silica gel works mainly by adsorption. Size exclusion and ion exchange are used in column chromatography."
  },
  {
    id: 118,
    question: "In gas chromatography, the mobile phase is:",
    options: ["A polar liquid such as methanol", "A non-polar liquid coated on the column", "An inert carrier gas such as helium or nitrogen", "Supercritical carbon dioxide"],
    answer: 2,
    explanation: "GC uses an inert carrier gas, usually helium, nitrogen or hydrogen, as the mobile phase. The stationary phase is a liquid or polymer film coated on the inside wall of a capillary column. Separation depends on volatility and interaction with that film. Supercritical CO2 is used in supercritical fluid chromatography."
  },
  {
    id: 119,
    question: "In reversed-phase HPLC, which is commonly used as the stationary phase?",
    options: ["Octadecylsilane (C18) bonded silica", "Bare silica gel", "Cellulose", "Polyacrylamide gel"],
    answer: 0,
    explanation: "Reversed-phase HPLC uses a non-polar stationary phase, most often C18 (octadecylsilyl) chains bonded to silica, with a polar mobile phase such as water–methanol or water–acetonitrile. Polar compounds elute first. Bare silica with non-polar solvents is normal-phase chromatography."
  },
  {
    id: 120,
    question: "Which GC detector is especially sensitive to halogenated compounds such as organochlorine pesticides?",
    options: ["Flame ionisation detector", "Thermal conductivity detector", "Nitrogen–phosphorus detector", "Electron capture detector"],
    answer: 3,
    explanation: "The electron capture detector (ECD) uses a radioactive source, usually 63Ni, to produce electrons. Electronegative atoms such as chlorine capture them, which lowers the current. The FID responds to most organic compounds, and the NPD is selective for nitrogen and phosphorus compounds such as organophosphates."
  },
  {
    id: 121,
    question: "A solution shows an absorbance of 0.30 at its λmax. Approximately what percentage of the incident light is transmitted?",
    options: ["70%", "30%", "50%", "3%"],
    answer: 2,
    explanation: "Transmittance T = 10^(−A) = 10^(−0.30) ≈ 0.50, so about half the light is transmitted. Taking 100 − 30 = 70% is a common mistake, because absorbance is logarithmic, not a percentage. Absorbance, not transmittance, rises in direct proportion to concentration."
  },
  {
    id: 122,
    question: "The intense Soret band in the absorption spectrum of haemoglobin lies near which wavelength?",
    options: ["280 nm", "415 nm", "540 nm", "630 nm"],
    answer: 1,
    explanation: "Haem proteins show a strong Soret (γ) band near 415 nm due to the porphyrin ring. Oxyhaemoglobin also has weaker α and β bands near 576 and 540 nm. The 280 nm band is due to aromatic amino acids in all proteins."
  },
  {
    id: 123,
    question: "In infrared spectroscopy, the region from about 1500 to 400 cm⁻¹, which is unique to each compound, is called the:",
    options: ["Fingerprint region", "Functional group region", "Near-infrared region", "Overtone region"],
    answer: 0,
    explanation: "The fingerprint region (about 1500–400 cm⁻¹) contains complex bending and skeletal vibrations, giving a pattern unique to each molecule. Above 1500 cm⁻¹ is the functional group region, where bands such as O–H, N–H and C=O appear. FTIR is used for drugs, fibres and paints."
  },
  {
    id: 124,
    question: "Standard electron ionisation (EI) in GC–MS uses electrons of what energy, allowing comparison with library spectra?",
    options: ["7 eV", "700 eV", "7 keV", "70 eV"],
    answer: 3,
    explanation: "EI sources use 70 eV electrons because fragmentation patterns are stable and reproducible at this energy. Library databases such as NIST and Wiley are built from 70 eV spectra. The molecular ion may be weak or absent because of extensive fragmentation."
  },
  {
    id: 125,
    question: "SDS-PAGE separates proteins mainly on the basis of:",
    options: ["Isoelectric point", "Native charge", "Molecular weight", "Hydrophobicity"],
    answer: 2,
    explanation: "SDS denatures proteins and coats them with a uniform negative charge in proportion to their length. Charge is then no longer a factor, so migration through the polyacrylamide gel depends on size, and smaller proteins move faster. Isoelectric focusing separates by pI."
  },
  {
    id: 126,
    question: "During agarose gel electrophoresis, DNA fragments migrate towards the:",
    options: ["Cathode, because DNA is positively charged", "Anode, because the phosphate backbone is negatively charged", "Cathode, because of electroendosmosis", "Middle of the gel, where they reach their isoelectric point"],
    answer: 1,
    explanation: "Each phosphate group in the DNA backbone carries a negative charge at neutral pH, so DNA moves towards the positive anode. Its charge-to-mass ratio is nearly constant, so the gel separates fragments by size. Smaller fragments move faster and further."
  },
  {
    id: 127,
    question: "The Marsh test, made famous by the Lafarge poisoning trial in France in 1840, detects which poison?",
    options: ["Arsenic", "Cyanide", "Strychnine", "Lead"],
    answer: 0,
    explanation: "In the Marsh test the sample is treated with zinc and acid. Any arsenic forms arsine gas, which leaves a silvery-black arsenic mirror on cold porcelain when heated. Mathieu Orfila used it as an expert in the Lafarge trial of 1840, one of the first convictions resting on toxicological evidence. Reinsch's test also detects arsenic and other metals on copper foil."
  },
  {
    id: 128,
    question: "When the Marquis reagent is added to a powder suspected to be heroin, the expected colour is:",
    options: ["Orange-brown", "Blue", "Yellow-green", "Purple-violet"],
    answer: 3,
    explanation: "Marquis reagent (formaldehyde in concentrated sulphuric acid) gives a purple-violet colour with opiates such as heroin and morphine. Amphetamines give orange to brown, and MDMA gives dark purple-black. It is a presumptive spot test, confirmed by GC–MS."
  },
  {
    id: 129,
    question: "The Duquenois–Levine test is a presumptive colour test for:",
    options: ["Cocaine", "Opium", "Cannabis", "LSD"],
    answer: 2,
    explanation: "In the Duquenois–Levine test, Duquenois reagent (vanillin and acetaldehyde in ethanol) and HCl give a blue-violet colour with cannabinoids. When chloroform is added, the purple colour moves into the lower chloroform layer, which makes the test more specific. The Scott test is used for cocaine."
  },
  {
    id: 130,
    question: "Under the NDPS Act, 1985, \"ganja\" is defined as:",
    options: ["The separated resin of the cannabis plant", "The flowering or fruiting tops of the cannabis plant", "Cannabis leaves and seeds only", "Any drink prepared from cannabis"],
    answer: 1,
    explanation: "The NDPS Act defines ganja as the flowering or fruiting tops of the cannabis plant, excluding seeds and leaves when not accompanied by the tops. Charas is the separated resin. Bhang, made from leaves, is outside the Act's definition of cannabis and is regulated by state excise laws."
  },
  {
    id: 131,
    question: "The Directorate of Forensic Science Services was created in 2002 by separating the forensic science wing from which organisation?",
    options: ["Bureau of Police Research and Development", "Central Bureau of Investigation", "Intelligence Bureau", "National Investigation Agency"],
    answer: 0,
    explanation: "Forensic science services under the Ministry of Home Affairs were earlier handled by the Bureau of Police Research and Development (BPR&D), set up in 1970. In 2002 this wing was made a separate Directorate of Forensic Science Services (DFSS), which now oversees the Central Forensic Science Laboratories. BPR&D continues to work on police modernisation and training."
  },
  {
    id: 132,
    question: "The annual report \"Crime in India\", a key source of national crime statistics, is published by:",
    options: ["BPR&D", "DFSS", "CBI", "National Crime Records Bureau"],
    answer: 3,
    explanation: "The National Crime Records Bureau (NCRB), set up in 1986 under the Ministry of Home Affairs, publishes Crime in India, Accidental Deaths and Suicides in India, and Prison Statistics India. It also runs CCTNS and the National Automated Fingerprint Identification System (NAFIS)."
  },
  {
    id: 133,
    question: "The National Forensic Sciences University, established by an Act of Parliament in 2020, has its headquarters at:",
    options: ["New Delhi", "Hyderabad", "Gandhinagar", "Bhopal"],
    answer: 2,
    explanation: "NFSU was created under the National Forensic Sciences University Act, 2020, by upgrading Gujarat Forensic Sciences University at Gandhinagar. It is an Institution of National Importance with campuses in several states. The LNJN NICFS in Delhi became an NFSU campus."
  },
  {
    id: 134,
    question: "Section 349 of the Bharatiya Nagarik Suraksha Sanhita, 2023 empowers a Magistrate to order a person to give:",
    options: ["A blood sample for DNA without any safeguards", "Specimen signatures, handwriting, finger impressions or voice samples", "Consent for a narco-analysis test", "A polygraph examination"],
    answer: 1,
    explanation: "BNSS Section 349 lets a Magistrate order any person, including one not arrested, to give specimen signatures, handwriting, finger impressions or a voice sample for investigation. It replaces Section 311A of the CrPC and adds voice samples and finger impressions. Narco-analysis and polygraph tests need the person's consent under Selvi v. State of Karnataka (2010)."
  },
  {
    id: 135,
    question: "Section 293 of the old CrPC, on the use of reports of certain Government scientific experts as evidence, corresponds to which section of the BNSS, 2023?",
    options: ["Section 330", "Section 336", "Section 293", "Section 329"],
    answer: 3,
    explanation: "BNSS Section 329 carries forward CrPC Section 293, allowing reports of notified Government scientific experts, such as FSL directors and chemical examiners, to be used as evidence without calling them unless the court requires it. Section 293 is simply the old CrPC number."
  },
  {
    id: 136,
    question: "FTA cards are widely used to store reference blood or buccal samples for DNA because they:",
    options: ["Contain chemicals that lyse cells, denature proteins and protect the bound DNA at room temperature", "Freeze the sample instantly", "Amplify the DNA by isothermal PCR", "Separate red cells from plasma"],
    answer: 0,
    explanation: "FTA paper is impregnated with a weak base, a chelating agent, a detergent and uric acid. These lyse cells, inactivate nucleases and microbes, and trap DNA in the fibres, so samples keep for years at room temperature. A small punch can be washed and added directly to PCR."
  },
  {
    id: 137,
    question: "When drawing blood from a driver for alcohol estimation, the skin at the venepuncture site should be cleaned with:",
    options: ["A rectified spirit swab", "An isopropyl alcohol swab", "A non-alcoholic antiseptic such as aqueous povidone-iodine", "Methylated spirit"],
    answer: 2,
    explanation: "Alcohol-based swabs can contaminate the sample and falsely raise the blood alcohol result, which the defence can challenge. A non-alcoholic antiseptic such as aqueous povidone-iodine, chlorhexidine in water or soap and water is used instead. The blood is collected in a sodium fluoride–potassium oxalate tube, filled to minimise headspace."
  },
  {
    id: 138,
    question: "Wet bloodstained clothing collected from a scene should be:",
    options: ["Sealed immediately in an airtight plastic bag", "Washed gently to remove dirt", "Dried in direct sunlight", "Air-dried at room temperature and packed in paper"],
    answer: 3,
    explanation: "Wet biological evidence sealed in plastic grows bacteria and moulds that destroy DNA and proteins. Items should be air-dried in a clean, secure area away from sunlight and heat, then packed separately in paper bags or envelopes. Each package must be sealed, labelled and entered in the chain-of-custody record."
  },
  {
    id: 139,
    question: "Viscera are normally preserved in rectified spirit. Saturated common salt solution must be used instead when the suspected poison is:",
    options: ["Arsenic", "Ethyl alcohol", "Strychnine", "Yellow oleander"],
    answer: 1,
    explanation: "Rectified spirit (ethanol) cannot be used when alcohol poisoning is suspected, because the preservative itself would interfere with the analysis. The same applies to kerosene, phenol, formalin, paraldehyde and phosphorus. In such cases saturated sodium chloride solution is used, and a sample of the preservative is sent as a control."
  },
  {
    id: 140,
    question: "A sealed parcel reaches the FSL with a chain-of-custody form attached. What does this form chiefly record?",
    options: ["The market value of the exhibit", "The time the analysis will take", "Every person who handled the exhibit, with dates, times and purpose", "The tests the laboratory must perform"],
    answer: 2,
    explanation: "The chain of custody is a continuous written record of everyone who collected, transported, stored or examined an exhibit, with dates, times and purpose. It shows the court that the item tested is the item seized and that it was not tampered with. Gaps in it give the defence grounds to challenge the evidence."
  },
  {
    id: 141,
    question: "In CRISPR-Cas9, the spacer part of the single-guide RNA that base-pairs with the target DNA is typically about how long?",
    options: ["20 nucleotides", "8 nucleotides", "200 nucleotides", "2 kilobases"],
    answer: 0,
    explanation: "The spacer of the sgRNA is usually 20 nucleotides long and matches the protospacer next to an NGG PAM. The rest of the sgRNA forms a scaffold that binds Cas9. The sgRNA is a fusion of the natural crRNA and tracrRNA, a design described by Jinek, Charpentier and Doudna in 2012."
  },
  {
    id: 142,
    question: "The SHERLOCK diagnostic platform, which can detect specific nucleic acid sequences with high sensitivity, uses which Cas protein?",
    options: ["Cas9", "Cas12a", "Cas3", "Cas13"],
    answer: 3,
    explanation: "SHERLOCK, developed by Feng Zhang's group, uses Cas13, which binds a target RNA and then cuts nearby reporter RNAs non-specifically (collateral cleavage) to give a signal. DETECTR, from Jennifer Doudna's group, uses Cas12a and targets DNA. Such CRISPR assays are being studied for species and body-fluid identification."
  },
  {
    id: 143,
    question: "To insert an exact new sequence at a Cas9 cut site, researchers supply a donor DNA template carrying the desired change. The cell copies it into the genome through which repair pathway?",
    options: ["Non-homologous end joining", "Homology-directed repair", "Mismatch repair", "Nucleotide excision repair"],
    answer: 1,
    explanation: "Homology-directed repair uses a template with sequences matching both sides of the break, so a precise edit is copied in. It works mainly in dividing cells during the S and G2 phases. Without a template, the break is usually rejoined by error-prone non-homologous end joining, which leaves small insertions or deletions."
  },
  {
    id: 144,
    question: "Which algorithm guarantees the optimal global alignment of two complete sequences?",
    options: ["Smith–Waterman", "BLAST", "Needleman–Wunsch", "FASTA"],
    answer: 2,
    explanation: "The Needleman–Wunsch algorithm (1970) uses dynamic programming to find the best end-to-end alignment of two sequences. Smith–Waterman is the matching dynamic-programming method for local alignment. BLAST and FASTA are faster heuristic search tools that find local similarities but do not guarantee the optimum."
  },
  {
    id: 145,
    question: "The DNA Data Bank of Japan (DDBJ) exchanges data daily with which two databases under the International Nucleotide Sequence Database Collaboration?",
    options: ["GenBank and ENA (EMBL-EBI)", "PDB and UniProt", "SWISS-PROT and PIR", "KEGG and Ensembl"],
    answer: 0,
    explanation: "The INSDC links GenBank (NCBI, USA), the European Nucleotide Archive (EMBL-EBI, UK) and DDBJ (Japan), which share nucleotide sequence data every day. PDB stores 3D structures and UniProt stores protein sequences. KEGG covers pathways, and Ensembl is a genome browser."
  },
  {
    id: 146,
    question: "In the FASTA sequence format, each record begins with a description line that starts with which character?",
    options: ["#", "@", "%", ">"],
    answer: 3,
    explanation: "A FASTA record starts with a header line beginning with '>', followed by the sequence identifier and description, and then lines of sequence. The FASTQ format, used for next-generation sequencing reads, starts each record with '@' and includes quality scores."
  },
  {
    id: 147,
    question: "In MALDI-TOF mass spectrometry, how are ions of different mass-to-charge ratio separated?",
    options: ["By their deflection in a magnetic field", "By their time to travel down a flight tube, lighter ions arriving first", "By their retention on a C18 column", "By their stability in an oscillating quadrupole field"],
    answer: 1,
    explanation: "In MALDI, a laser vaporises a matrix and the sample to make mostly singly charged ions with little fragmentation. All ions are given the same kinetic energy, so lighter ions travel faster down the flight tube and reach the detector first. MALDI-TOF is widely used for protein fingerprinting and microbial identification."
  },
  {
    id: 148,
    question: "In two-dimensional gel electrophoresis of proteins, the first and second dimensions separate proteins by:",
    options: ["Molecular weight, then isoelectric point", "Hydrophobicity, then charge", "Isoelectric point, then molecular weight", "Shape, then size"],
    answer: 2,
    explanation: "In the first dimension, isoelectric focusing on an immobilised pH gradient strip separates proteins by pI. The strip is then laid on an SDS-PAGE gel, which separates them by molecular weight in the second dimension. The result is a map of spots that can be cut out and identified by mass spectrometry."
  },
  {
    id: 149,
    question: "Which curated online database is used for forensic mitochondrial DNA population frequencies and haplotype quality control?",
    options: ["YHRD", "STRBase", "ALFRED", "EMPOP"],
    answer: 3,
    explanation: "EMPOP (EDNAP Mitochondrial DNA Population Database), hosted in Innsbruck, provides quality-checked mtDNA control-region haplotypes for estimating how common a forensic mtDNA type is. YHRD is the equivalent for Y-STR haplotypes, and STRBase (NIST) gives information on STR loci and kits."
  },
  {
    id: 150,
    question: "In bottom-up (shotgun) proteomics, proteins are usually digested with trypsin, which cleaves peptide bonds on the C-terminal side of:",
    options: ["Lysine and arginine", "Phenylalanine, tyrosine and tryptophan", "Aspartic acid", "Methionine"],
    answer: 0,
    explanation: "Trypsin cuts after lysine (K) and arginine (R), except when the next residue is proline. The resulting peptides are of a convenient size and carry a basic C-terminus that ionises well in mass spectrometry. Chymotrypsin cuts after aromatic residues, and cyanogen bromide after methionine."
  },
];

export default questions;

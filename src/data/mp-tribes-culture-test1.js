const questions = [
  {
    id: 1,
    question: "According to Census 2011, what is Madhya Pradesh's rank among Indian states in terms of the absolute size of its Scheduled Tribe population?",
    options: ["Second", "First", "Third", "Fourth"],
    answer: 1,
    explanation: "Madhya Pradesh has about 1.53 crore Scheduled Tribe persons, the largest ST population of any state. Maharashtra (about 1.05 crore) and Odisha (about 0.96 crore) come next. In percentage terms MP does not rank first, since several north-eastern states have much higher ST shares."
  },
  {
    id: 2,
    question: "What percentage of Madhya Pradesh's total population was enumerated as Scheduled Tribe in Census 2011?",
    options: ["15.6%", "30.6%", "21.1%", "8.6%"],
    answer: 2,
    explanation: "About 1.53 crore of MP's 7.26 crore people, or 21.1%, are Scheduled Tribes. The 8.6% figure is the ST share of India as a whole, and 30.6% is Chhattisgarh's ST share."
  },
  {
    id: 3,
    question: "Which district of Madhya Pradesh had the highest percentage of Scheduled Tribe population in Census 2011?",
    options: ["Alirajpur", "Jhabua", "Barwani", "Dindori"],
    answer: 0,
    explanation: "Alirajpur had about 89% ST population, followed closely by Jhabua (about 87%). Barwani (about 69%) and Dindori (about 65%) are also tribal-majority districts, but with lower shares. Alirajpur was carved out of Jhabua in 2008."
  },
  {
    id: 4,
    question: "Which district of Madhya Pradesh had the largest Scheduled Tribe population in absolute numbers in Census 2011?",
    options: ["Jhabua", "Barwani", "Chhindwara", "Dhar"],
    answer: 3,
    explanation: "Dhar had about 12.2 lakh ST persons (about 56% of its population), the most of any MP district. Alirajpur and Jhabua have higher percentages but smaller total populations. Percentage and absolute rankings must not be confused."
  },
  {
    id: 5,
    question: "Which district of Madhya Pradesh recorded the lowest percentage of Scheduled Tribe population in Census 2011?",
    options: ["Morena", "Datia", "Bhind", "Gwalior"],
    answer: 2,
    explanation: "Bhind had the lowest ST share in the state, about 0.4%. The Gwalior-Chambal plains in the north generally have very small ST populations, except for the Sahariya pockets in Sheopur, Shivpuri and Guna."
  },
  {
    id: 6,
    question: "Which of the following districts did NOT have a Scheduled Tribe majority (more than 50%) in Census 2011?",
    options: ["Betul", "Dindori", "Mandla", "Barwani"],
    answer: 0,
    explanation: "Betul had about 42% ST population, a large share but not a majority. Dindori (about 65%), Mandla (about 58%) and Barwani (about 69%) are tribal-majority districts."
  },
  {
    id: 7,
    question: "How many districts of Madhya Pradesh had a Scheduled Tribe majority (more than half the population) in Census 2011?",
    options: ["Four", "Six", "Eight", "Ten"],
    answer: 1,
    explanation: "Six districts had an ST majority: Alirajpur, Jhabua, Barwani, Dindori, Mandla and Dhar. Four are in the Bhil-dominated west and two (Dindori, Mandla) in the Gond-Baiga east. Anuppur (about 48%) and Shahdol (about 45%) fall just short."
  },
  {
    id: 8,
    question: "A researcher wants to study the Bhil and Bhilala tribes in their core habitat in Madhya Pradesh. Which group of districts should she select?",
    options: ["Mandla, Dindori and Balaghat", "Sheopur, Shivpuri and Guna", "Betul, Harda and Khandwa", "Jhabua, Alirajpur and Dhar"],
    answer: 3,
    explanation: "The Bhil belt lies in western MP: Jhabua, Alirajpur, Dhar, Barwani, Khargone and Ratlam. Mandla-Dindori-Balaghat is Gond and Baiga country, Sheopur-Shivpuri-Guna is the Sahariya belt, and Betul-Harda-Khandwa is Korku territory."
  },
  {
    id: 9,
    question: "The Gond population of Madhya Pradesh is most concentrated in which belt?",
    options: ["The Satpura-Maikal belt of Mandla, Dindori, Seoni, Chhindwara and Balaghat", "The Malwa plateau of Ujjain, Dewas and Shajapur", "The Gwalior-Chambal plains of Bhind and Morena", "The Bundelkhand districts of Chhatarpur and Tikamgarh"],
    answer: 0,
    explanation: "Gonds are concentrated in the forested Satpura and Maikal hills of eastern and southern MP, also called the Mahakoshal region. The historical name Gondwana refers to this region. Malwa, Chambal and Bundelkhand have comparatively small ST populations."
  },
  {
    id: 10,
    question: "The Sahariya tribe of Madhya Pradesh is mainly concentrated in which region?",
    options: ["The Nimar region of Khargone and Barwani", "The Baghelkhand region of Rewa and Satna", "The Gwalior-Chambal region, especially Sheopur, Shivpuri and Guna", "The Mahakoshal region of Jabalpur and Katni"],
    answer: 2,
    explanation: "Sahariyas live in north-western MP: Sheopur, Shivpuri, Guna, Ashoknagar, Gwalior, Datia and Morena. The belt extends into Baran district of Rajasthan. They are one of MP's three PVTGs."
  },
  {
    id: 11,
    question: "The Korku tribe is mainly found in which districts of Madhya Pradesh?",
    options: ["Jhabua and Alirajpur", "Rewa and Sidhi", "Mandla and Dindori", "Betul, Harda and Khandwa"],
    answer: 3,
    explanation: "Korkus inhabit the Satpura ranges of Betul, Harda, Khandwa, Burhanpur and parts of Chhindwara and Narmadapuram. Across the border they also live in the Melghat area of Maharashtra."
  },
  {
    id: 12,
    question: "The Kol tribe of Madhya Pradesh is mainly concentrated in which region?",
    options: ["Malwa", "Baghelkhand, especially Rewa, Satna and Sidhi", "Nimar", "Gwalior-Chambal"],
    answer: 1,
    explanation: "The Kol live mainly in north-eastern MP: Rewa, Satna, Sidhi, Singrauli, Shahdol, Katni and Jabalpur. They are the third largest tribe of the state after the Bhil and the Gond."
  },
  {
    id: 13,
    question: "According to Census 2011, roughly what share of India's total Scheduled Tribe population lives in Madhya Pradesh?",
    options: ["8.6%", "10.1%", "14.7%", "21.1%"],
    answer: 2,
    explanation: "MP's 1.53 crore STs are about 14.7% of India's 10.43 crore STs, the largest share of any state. 21.1% is the ST share within MP's own population, and 8.6% is the ST share of India's population. Maharashtra holds about 10.1% of India's STs."
  },
  {
    id: 14,
    question: "How many communities are listed as Scheduled Tribes for Madhya Pradesh in the Constitution (Scheduled Tribes) Order, as commonly cited in MP state sources?",
    options: ["46", "29", "62", "75"],
    answer: 0,
    explanation: "MP's ST list has 46 entries, some of which group several synonyms or sub-groups (for example Bhil with Bhilala, Barela and Patelia). The figure 62 is Odisha's ST list, and 75 is the national number of PVTGs."
  },
  {
    id: 15,
    question: "Under Article 330, how many of Madhya Pradesh's 29 Lok Sabha seats are reserved for Scheduled Tribes?",
    options: ["Four", "Five", "Seven", "Six"],
    answer: 3,
    explanation: "Six seats are reserved for STs: Shahdol, Mandla, Ratlam, Dhar, Khargone and Betul. Four seats (Bhind, Tikamgarh, Dewas and Ujjain) are reserved for SCs. Article 330 provides reservation roughly in proportion to SC/ST population."
  },
  {
    id: 16,
    question: "Which of the following Lok Sabha constituencies of Madhya Pradesh is NOT reserved for Scheduled Tribes?",
    options: ["Ratlam", "Tikamgarh", "Mandla", "Betul"],
    answer: 1,
    explanation: "Tikamgarh is reserved for Scheduled Castes, not Scheduled Tribes. Ratlam, Mandla and Betul are among MP's six ST-reserved seats, along with Shahdol, Dhar and Khargone."
  },
  {
    id: 17,
    question: "Under Article 332, how many of the 230 seats in the Madhya Pradesh Legislative Assembly are reserved for Scheduled Tribes?",
    options: ["35", "41", "47", "52"],
    answer: 2,
    explanation: "47 Assembly seats are reserved for STs and 35 for SCs. Article 332 requires reservation in state assemblies in proportion to the SC and ST population of the state."
  },
  {
    id: 18,
    question: "Under Article 342(1), the Scheduled Tribes of a state are first specified by whom?",
    options: ["The President, by public notification after consultation with the Governor", "The Governor, on the advice of the state Council of Ministers", "The National Commission for Scheduled Tribes", "The Registrar General of India"],
    answer: 0,
    explanation: "Article 342(1) empowers the President, after consulting the Governor of the state, to specify by public notification the tribes or tribal communities deemed to be STs. Article 366(25) then defines STs as those so specified. The RGI and NCST are consulted in the process but do not issue the notification."
  },
  {
    id: 19,
    question: "A community in Madhya Pradesh demands inclusion in the state's Scheduled Tribe list after the President's original notification. Which authority can make this change?",
    options: ["The MP Legislative Assembly, by resolution", "The Governor of MP, by notification", "The National Commission for Scheduled Tribes, by order", "Parliament, by law"],
    answer: 3,
    explanation: "Under Article 342(2), once the President's notification is issued, only Parliament can include or exclude a community, by law. Neither the state legislature nor the Governor can modify the list. In practice the state recommends, and the RGI and NCST are consulted before Parliament amends the Order."
  },
  {
    id: 20,
    question: "A separate National Commission for Scheduled Tribes under Article 338A was created by which Constitutional Amendment?",
    options: ["65th Amendment", "89th Amendment", "86th Amendment", "92nd Amendment"],
    answer: 1,
    explanation: "The 89th Amendment Act, 2003 split the combined commission into a National Commission for SCs (Article 338) and a National Commission for STs (Article 338A). The NCST came into being in 2004. The 65th Amendment (1990) had earlier given the combined commission constitutional status."
  },
  {
    id: 21,
    question: "The National Commission for Scheduled Tribes under Article 338A consists of whom?",
    options: ["A chairperson and two members", "A chairperson, a vice-chairperson and five members", "A chairperson, a vice-chairperson and three other members", "Seven members elected by Parliament"],
    answer: 2,
    explanation: "The NCST has a chairperson, a vice-chairperson and three other members, all appointed by the President by warrant under hand and seal. It investigates safeguards for STs and reports to the President."
  },
  {
    id: 22,
    question: "Grants-in-aid given to states under the first proviso to Article 275(1), for promoting ST welfare and raising the level of administration of Scheduled Areas, are charged on which fund?",
    options: ["Consolidated Fund of India", "Contingency Fund of India", "Public Account of India", "Consolidated Fund of the State"],
    answer: 0,
    explanation: "Article 275(1) grants are charged on the Consolidated Fund of India and paid to states such as MP for tribal development schemes. Eklavya Model Residential Schools were originally funded from these grants."
  },
  {
    id: 23,
    question: "Which Article of the Constitution directs the State to promote with special care the educational and economic interests of the weaker sections, in particular SCs and STs, and to protect them from social injustice and exploitation?",
    options: ["Article 39A", "Article 41", "Article 47", "Article 46"],
    answer: 3,
    explanation: "Article 46 is a Directive Principle that specifically names SCs and STs. Article 39A deals with free legal aid, Article 41 with the right to work and public assistance, and Article 47 with nutrition, public health and prohibition."
  },
  {
    id: 24,
    question: "Article 15(4), which allows special provisions for the advancement of SCs, STs and socially and educationally backward classes, was inserted by which Amendment?",
    options: ["Constitution (Seventh Amendment) Act, 1956", "Constitution (Forty-second Amendment) Act, 1976", "Constitution (First Amendment) Act, 1951", "Constitution (Ninety-third Amendment) Act, 2005"],
    answer: 2,
    explanation: "The First Amendment, 1951 inserted Article 15(4) after the Champakam Dorairajan judgement struck down communal reservation in admissions. The 93rd Amendment later added Article 15(5) on reservation in educational institutions, including private ones."
  },
  {
    id: 25,
    question: "The MP government reserves posts in its police department for Scheduled Tribes because they are not adequately represented in state services. Which constitutional provision directly enables this?",
    options: ["Article 15(4)", "Article 16(4)", "Article 29(2)", "Article 335"],
    answer: 1,
    explanation: "Article 16(4) permits reservation of appointments or posts for any backward class not adequately represented in state services, and this includes STs. Article 15(4) covers special provisions in general, not public employment. Article 335 only requires that SC/ST claims be balanced against administrative efficiency; it does not itself create reservation."
  },
  {
    id: 26,
    question: "Article 16(4A), which permits reservation in promotion for SCs and STs, was inserted by which Amendment?",
    options: ["77th Amendment, 1995", "81st Amendment, 2000", "85th Amendment, 2001", "103rd Amendment, 2019"],
    answer: 0,
    explanation: "The 77th Amendment (1995) inserted Article 16(4A) after the Indra Sawhney judgement had disallowed reservation in promotions. The 81st Amendment added Article 16(4B) on carrying forward unfilled vacancies, and the 85th added consequential seniority."
  },
  {
    id: 27,
    question: "Under Article 244, the Fifth Schedule applies to Scheduled Areas in all states EXCEPT which of the following?",
    options: ["Jharkhand, Odisha, Chhattisgarh and Madhya Pradesh", "Rajasthan, Gujarat, Maharashtra and Telangana", "Himachal Pradesh, Andhra Pradesh, Odisha and Jharkhand", "Assam, Meghalaya, Tripura and Mizoram"],
    answer: 3,
    explanation: "Article 244(1) applies the Fifth Schedule to Scheduled Areas in states other than Assam, Meghalaya, Tripura and Mizoram. Under Article 244(2), the tribal areas of those four states are governed by the Sixth Schedule. MP's Scheduled Areas therefore fall under the Fifth Schedule."
  },
  {
    id: 28,
    question: "Under Paragraph 6 of the Fifth Schedule, who has the power to declare an area as a Scheduled Area?",
    options: ["The Governor of the state", "The President of India", "Parliament", "The Union Ministry of Tribal Affairs"],
    answer: 1,
    explanation: "The President declares Scheduled Areas by order. After consulting the Governor, the President can also increase, decrease or alter them. Parliament's role under Paragraph 7 is to amend the Schedule itself."
  },
  {
    id: 29,
    question: "The Tribes Advisory Council of a Fifth Schedule state can have up to 20 members. As nearly as may be, what proportion of them must be Scheduled Tribe representatives in the state Legislative Assembly?",
    options: ["One-half", "Two-thirds", "Three-fourths", "All of them"],
    answer: 2,
    explanation: "Paragraph 4 of the Fifth Schedule says that three-fourths of the TAC members, as nearly as may be, shall be ST representatives in the state assembly. If there are fewer ST MLAs than needed, the remaining seats are filled by other ST members. MP has a TAC because it has Scheduled Areas."
  },
  {
    id: 30,
    question: "What is the role of the Tribes Advisory Council under the Fifth Schedule?",
    options: ["To advise on matters relating to the welfare and advancement of STs that are referred to it by the Governor", "To adjudicate land disputes in Scheduled Areas", "To notify new Scheduled Tribes", "To elect members of the National Commission for STs"],
    answer: 0,
    explanation: "The TAC is an advisory body that advises on ST welfare matters referred to it by the Governor. The Governor must consult it before making regulations under Paragraph 5(2). It has no judicial or notification powers."
  },
  {
    id: 31,
    question: "Regulations made by the Governor under Paragraph 5(2) of the Fifth Schedule for the peace and good government of a Scheduled Area take effect only after which of the following?",
    options: ["Approval by the state legislature with a special majority", "Ratification by Parliament", "Concurrence of the National Commission for STs", "Assent of the President, after the Tribes Advisory Council has been consulted"],
    answer: 3,
    explanation: "The Governor must first consult the TAC and then submit the regulations to the President. They have no effect until the President assents. Such regulations can also repeal or amend Acts of Parliament or the state legislature in their application to the Scheduled Area."
  },
  {
    id: 32,
    question: "The Governor finds that moneylenders in a Scheduled Area of Jhabua are charging exorbitant interest from tribal families. Under the Fifth Schedule, what can the Governor do?",
    options: ["Only request Parliament to pass a law on the subject", "Make regulations to regulate the business of money-lending to STs in that area", "Refer the matter to the Supreme Court for an advisory opinion", "Transfer the area to the Sixth Schedule"],
    answer: 1,
    explanation: "Paragraph 5(2) specifically lets the Governor make regulations that prohibit or restrict land transfer by or among STs, regulate the allotment of land, and regulate money-lending to STs. TAC consultation and Presidential assent are needed. Areas cannot be moved to the Sixth Schedule by the Governor."
  },
  {
    id: 33,
    question: "Under Paragraph 3 of the Fifth Schedule, to whom does the Governor submit a report on the administration of the Scheduled Areas of the state?",
    options: ["The state Legislative Assembly", "The National Commission for STs", "The President", "The Union Home Minister"],
    answer: 2,
    explanation: "The Governor reports to the President annually, or whenever the President requires. The Union's executive power also extends to giving directions to the state on administering Scheduled Areas."
  },
  {
    id: 34,
    question: "The proviso to Article 164(1) requires a Minister in charge of tribal welfare in certain states. Which of the following states is one of them?",
    options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Maharashtra"],
    answer: 0,
    explanation: "The proviso covers Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha. That minister may also be put in charge of SC and backward class welfare. Bihar was dropped from the list by the 94th Amendment, 2006, after Jharkhand was formed."
  },
  {
    id: 35,
    question: "Dilip Singh Bhuria, a tribal leader from Jhabua, chaired a committee whose recommendations led to which of the following?",
    options: ["The criteria for identifying Scheduled Tribes", "The setting up of the first Scheduled Areas and STs Commission in 1960", "The Forest Conservation Act, 1980", "The Panchayats (Extension to Scheduled Areas) Act, 1996"],
    answer: 3,
    explanation: "The Bhuria Committee (1994-95) recommended extending Part IX panchayat provisions to Fifth Schedule areas with tribal self-rule safeguards, which led to PESA, 1996. Bhuria later chaired the Second Scheduled Areas and STs Commission (2002-04). The first commission (1960-61) was chaired by U.N. Dhebar, and the ST criteria came from the Lokur Committee."
  },
  {
    id: 36,
    question: "Under PESA, 1996, how are the chairpersons of panchayats in Scheduled Areas to be chosen?",
    options: ["Reserved for STs only at the Gram Panchayat level", "Reserved for STs at all levels", "Elected without any reservation", "Reserved for ST women only"],
    answer: 1,
    explanation: "Section 4(g) of PESA requires that all chairperson posts at every level of panchayat in Scheduled Areas be reserved for STs. At least half the seats at each level must also be reserved for STs."
  },
  {
    id: 37,
    question: "Land is to be acquired in a Scheduled Area of Barwani for an irrigation project. Under PESA, what must happen before the acquisition and before resettling the affected people?",
    options: ["Only the Collector's approval is needed", "The NCST's consent is mandatory", "The Gram Sabha or the Panchayat at the appropriate level must be consulted", "The Tribes Advisory Council must approve the project"],
    answer: 2,
    explanation: "Section 4(i) of PESA requires consultation with the Gram Sabha or Panchayat at the appropriate level before land acquisition and resettlement in Scheduled Areas. PESA also gives Gram Sabhas powers over minor forest produce, village markets, money-lending and preventing land alienation."
  },
  {
    id: 38,
    question: "Madhya Pradesh brought its PESA Rules into force on Janjatiya Gaurav Diwas, 15 November 2022, at a state event held in which district?",
    options: ["Shahdol", "Jhabua", "Mandla", "Bhopal"],
    answer: 0,
    explanation: "The MP PESA Rules, 2022 came into force at an event in Shahdol attended by President Droupadi Murmu. They give Gram Sabhas in Scheduled Areas wider powers over land records, local natural resources and village affairs. Shahdol was also where the National Sickle Cell Anaemia Elimination Mission was launched in 2023."
  },
  {
    id: 39,
    question: "Under the Forest Rights Act, 2006, forest dwellers must have been in occupation of forest land before which cut-off date for their rights to be recognised?",
    options: ["1 January 1980", "25 October 1980", "31 December 2007", "13 December 2005"],
    answer: 3,
    explanation: "Rights are recognised for forest land occupied before 13 December 2005. 25 October 1980 is the date the Forest (Conservation) Act took effect, and the FRA itself came into force on 31 December 2007."
  },
  {
    id: 40,
    question: "A non-tribal family has lived in and depended on a forest in Raisen district since 1985. It claims rights under the Forest Rights Act, 2006 as Other Traditional Forest Dwellers. What is the status of the claim?",
    options: ["Valid, because they lived there before the cut-off date of 13 December 2005", "Valid only if they hold a caste certificate", "Not valid, because OTFDs must have lived there for at least three generations (75 years) before 13 December 2005", "Not valid, because only Scheduled Tribes can claim under the Act"],
    answer: 2,
    explanation: "Section 2(o) defines an OTFD as someone who has mainly resided in, and depended on, forest land for at least three generations (75 years) before 13 December 2005. Forest-dwelling STs only need to have been in occupation before the cut-off date. Non-tribals can claim, but only if they meet the 75-year test."
  },
  {
    id: 41,
    question: "A Scheduled Tribe family in Mandla has cultivated 6 hectares of forest land since 1995 and files a claim under the Forest Rights Act. What is the maximum area for which individual rights can be recognised?",
    options: ["The entire 6 hectares", "Up to 4 hectares of the land under actual occupation", "Up to 2 hectares", "Up to 1 hectare"],
    answer: 1,
    explanation: "Section 4(6) limits recognition to the area under actual occupation, and in no case more than 4 hectares. The family's occupation predates the 2005 cut-off, so it is eligible, but only up to 4 hectares."
  },
  {
    id: 42,
    question: "Under the Forest Rights Act, 2006, which body has the authority to start the process of determining the nature and extent of individual and community forest rights?",
    options: ["The Gram Sabha", "The Sub-Divisional Level Committee", "The District Level Committee", "The Forest Range Officer"],
    answer: 0,
    explanation: "Section 6(1) makes the Gram Sabha the authority that starts the process. It receives claims, verifies them and passes resolutions. Its decisions then go to the Sub-Divisional Level Committee and the District Level Committee."
  },
  {
    id: 43,
    question: "Under the Forest Rights Act, 2006, which body gives the final approval to the record of forest rights?",
    options: ["The Gram Sabha", "The Sub-Divisional Level Committee", "The State Level Monitoring Committee", "The District Level Committee"],
    answer: 3,
    explanation: "Section 6(6) says the decision of the District Level Committee on the record of forest rights is final and binding. The SDLC examines Gram Sabha resolutions and prepares the record. The State Level Monitoring Committee only monitors the process."
  },
  {
    id: 44,
    question: "Which of the following is included in the definition of 'minor forest produce' under the Forest Rights Act, 2006?",
    options: ["Teak timber", "Sal timber", "Bamboo and tendu leaves", "Sand and boulders"],
    answer: 2,
    explanation: "Section 2(i) defines minor forest produce as all non-timber forest produce of plant origin, and it explicitly includes bamboo, brushwood, stumps, cane, tussar, cocoons, honey, wax, lac, tendu or kendu leaves, and medicinal plants. Timber and minerals are excluded. Section 3(1)(c) gives forest dwellers ownership of MFP."
  },
  {
    id: 45,
    question: "Section 3(2) of the Forest Rights Act allows forest land to be diverted for public facilities such as schools and dispensaries. What is the limit on the area per case?",
    options: ["0.5 hectare", "1 hectare", "2 hectares", "5 hectares"],
    answer: 1,
    explanation: "Diversion under Section 3(2) is limited to less than 1 hectare per case, felling must not exceed 75 trees per hectare, and the Gram Sabha must recommend it. It covers facilities such as schools, anganwadis, drinking water, minor irrigation and roads."
  },
  {
    id: 46,
    question: "Which Union ministry is the nodal ministry for implementing the Forest Rights Act, 2006?",
    options: ["Ministry of Tribal Affairs", "Ministry of Environment, Forest and Climate Change", "Ministry of Rural Development", "Ministry of Panchayati Raj"],
    answer: 0,
    explanation: "The Ministry of Tribal Affairs administers the FRA, and in the states the tribal welfare departments are the nodal agencies. The Environment Ministry administers the Forest (Conservation) Act and the Indian Forest Act, which is a common source of confusion."
  },
  {
    id: 47,
    question: "The Tribal Sub-Plan (TSP) strategy for tribal development was introduced in which Five Year Plan?",
    options: ["Third", "Fourth", "Sixth", "Fifth"],
    answer: 3,
    explanation: "The TSP was adopted in the Fifth Five Year Plan (1974-79). Under it, states earmark plan funds for ST areas and people, and Integrated Tribal Development Projects (ITDPs) were set up in areas of tribal concentration."
  },
  {
    id: 48,
    question: "Under the Tribal Sub-Plan, what kind of area qualifies as a MADA (Modified Area Development Approach) pocket?",
    options: ["A cluster with a population of 5,000 of which half are STs", "A tehsil with a population of 1 lakh of which one-third are STs", "A contiguous pocket with a population of 10,000 or more, at least half of them STs", "Any village with 25% ST population"],
    answer: 2,
    explanation: "MADA pockets are areas of tribal concentration outside ITDPs with a population of 10,000 or more, of which at least 50% are STs. Smaller pockets of about 5,000 people with 50% STs are called clusters."
  },
  {
    id: 49,
    question: "Under the Tribal Sub-Plan principle, how much should Madhya Pradesh earmark from its plan outlay for Scheduled Tribe development?",
    options: ["An amount equal to India's national ST share", "At least an amount in proportion to the state's ST population, about 21%", "A fixed 10% of the plan outlay", "Only the central grants received under Article 275(1)"],
    answer: 1,
    explanation: "TSP funds should be at least in proportion to the ST share of the state's population, which for MP is about 21% (Census 2011). The funds are meant to be non-divertible, and central grants under Article 275(1) are in addition to the state's own TSP allocation."
  },
  {
    id: 50,
    question: "Which body laid down the criteria for identifying a community as a Scheduled Tribe: primitive traits, distinctive culture, geographical isolation, shyness of contact with the community at large, and backwardness?",
    options: ["Lokur Committee (1965)", "Dhebar Commission (1961)", "Xaxa Committee (2014)", "Kaka Kalelkar Commission (1955)"],
    answer: 0,
    explanation: "The Lokur Committee (1965) set these five criteria, which are still used when communities are considered for the ST list. The Dhebar Commission reviewed Scheduled Areas and ST administration, and the Kaka Kalelkar Commission was the first Backward Classes Commission."
  }
];

export default questions;

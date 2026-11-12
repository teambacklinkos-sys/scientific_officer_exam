const questions = [
  {
    id: 1,
    question: "Which is the most populous Scheduled Tribe of Madhya Pradesh according to Census 2011?",
    options: ["Gond", "Kol", "Bhil", "Korku"],
    answer: 2,
    explanation: "The Bhil (including Bhilala, Barela, Patelia and related groups) number about 60 lakh, roughly two-fifths of MP's ST population. The Gond, at about 51 lakh, are second. Bhils are concentrated in western MP: Jhabua, Alirajpur, Dhar, Barwani and Khargone."
  },
  {
    id: 2,
    question: "According to Census 2011, which is the largest Scheduled Tribe of India by population?",
    options: ["Bhil", "Gond", "Santhal", "Mina"],
    answer: 0,
    explanation: "The Bhil are India's largest ST, at about 1.7 crore, spread over MP, Gujarat, Rajasthan and Maharashtra. The Gond come second at about 1.3 crore, and the Santhal third. MP has the largest Bhil population of any state."
  },
  {
    id: 3,
    question: "After the Bhil and the Gond, which is the third most populous Scheduled Tribe of Madhya Pradesh (Census 2011)?",
    options: ["Korku", "Sahariya", "Baiga", "Kol"],
    answer: 3,
    explanation: "The Kol number about 11.7 lakh and live mainly in Rewa, Satna, Sidhi, Jabalpur and Katni. The Korku (about 7.3 lakh) and Sahariya (about 6.1 lakh) follow. The Baiga, a PVTG, number about 4 lakh."
  },
  {
    id: 4,
    question: "The name 'Bhil' is commonly derived from the Dravidian word 'bil' or 'billu'. What does that word mean?",
    options: ["Forest", "Bow", "Hill", "River"],
    answer: 1,
    explanation: "'Bil' or 'billu' means bow, which reflects the Bhils' famous skill in archery. The Bhil archer appears in literature as Eklavya, and Bhils served as bowmen in the armies of Rajput and Maratha rulers."
  },
  {
    id: 5,
    question: "Which of the following is NOT a sub-group of the Bhil tribe in Madhya Pradesh?",
    options: ["Pardhan", "Bhilala", "Barela", "Patelia"],
    answer: 0,
    explanation: "The Pardhan are a Gond sub-group who traditionally served as bards and genealogists of the Gonds. Bhilala, Barela and Patelia are Bhil sub-groups, listed together with the Bhil in MP's ST order."
  },
  {
    id: 6,
    question: "A Bhil village in Jhabua is not a compact settlement. The houses are scattered on hillocks in separate hamlets. What are these hamlets called?",
    options: ["Ghotul", "Dhumkuria", "Phalia", "Tanda"],
    answer: 2,
    explanation: "Bhil villages are made of dispersed hamlets called phalias, usually one for each clan or extended family, with each house standing on its own field. Ghotul and Dhumkuria are youth dormitories of the Muria and the Oraon, and a tanda is a Banjara settlement."
  },
  {
    id: 7,
    question: "What do the Gonds traditionally call themselves in their own language?",
    options: ["Bhumia", "Kurukh", "Bhilala", "Koitur"],
    answer: 3,
    explanation: "Gonds call themselves Koitur or Koi, while 'Gond' is the name outsiders gave them. Kurukh is the self-name and language of the Oraon, and Bhilala is a Bhil sub-group."
  },
  {
    id: 8,
    question: "Which deity is regarded as the supreme deity of the Gonds, often worshipped in the form of a saja tree or a spear?",
    options: ["Babadev", "Bada Dev", "Baba Pithora", "Khermai"],
    answer: 1,
    explanation: "Bada Dev, also called Persa Pen, is the supreme god of the Gonds and is linked with the saja tree. Babadev is worshipped by Bhils, Baba Pithora by the Rathwa and Bhilala, and Khermai is a village mother goddess."
  },
  {
    id: 9,
    question: "Among the Gonds, the preferred cross-cousin marriage between the children of a brother and a sister is traditionally called what?",
    options: ["Lamsena", "Marriage by capture", "Dudh Lautawa", "Marriage by exchange"],
    answer: 2,
    explanation: "Dudh Lautawa (literally 'returning the milk') is the Gond custom of cross-cousin marriage. The idea is that a girl given in marriage in one generation is 'returned' in the next. It is the preferred form of marriage among many Gond groups."
  },
  {
    id: 10,
    question: "A young Gond man who cannot pay the bride-price lives in his prospective father-in-law's house and works there for some years before the marriage. What is this form of marriage called?",
    options: ["Lamsena", "Dudh Lautawa", "Marriage by capture", "Marriage by elopement"],
    answer: 0,
    explanation: "Lamsena is marriage by service, common among the Gond and Baiga. The groom's labour takes the place of the bride-price. Dudh Lautawa is cross-cousin marriage, a different custom."
  },
  {
    id: 11,
    question: "The Agaria, a Gond-related community of Mandla, Shahdol and Sidhi studied by Verrier Elwin, were traditionally known for which occupation?",
    options: ["Basket-making", "Pottery", "Honey collection", "Iron smelting"],
    answer: 3,
    explanation: "The Agaria are traditional iron smelters and blacksmiths who make tools from local iron ore in clay furnaces. Elwin described them in his 1942 monograph 'The Agaria'. They are a Scheduled Tribe in MP."
  },
  {
    id: 12,
    question: "The Gond dynasties of Garha-Mandla, Deogarh and Kherla came from which ruling, land-owning section of the Gond tribe?",
    options: ["Pardhan", "Raj Gond", "Ojha", "Agaria"],
    answer: 1,
    explanation: "The Raj Gonds are the aristocratic, land-owning section from which the Gond ruling houses came, including the Garha-Mandla dynasty of Sangram Shah and Dalpat Shah. The Pardhan were their bards and genealogists and the Agaria were iron smelters, while the Ojha are a separate Gond-related sub-group."
  },
  {
    id: 13,
    question: "What is the traditional slash-and-burn shifting cultivation of the Baiga tribe called?",
    options: ["Bewar", "Jhum", "Podu", "Kumri"],
    answer: 0,
    explanation: "The Baiga practised bewar (also called dahia), in which they burnt forest patches and sowed seeds in the ash. Jhum is the north-eastern term, podu is used in Andhra Pradesh and Odisha, and kumri in the Western Ghats."
  },
  {
    id: 14,
    question: "Traditionally, why did the Baiga refuse to use the plough?",
    options: ["Their soils were too rocky to plough", "Their Gond overlords forbade it", "They believed ploughing wounds the body of Mother Earth", "They had no draught animals"],
    answer: 2,
    explanation: "Baiga belief held that ploughing tears the breast of Mother Earth (Dharti Mata), so they practised bewar instead. This was recorded by Verrier Elwin. British forest policy later restricted bewar and confined it to the Baiga Chak."
  },
  {
    id: 15,
    question: "In many Gond villages of Mandla and Dindori, the hereditary role of village priest, healer and magician was traditionally held by members of which tribe?",
    options: ["Bhil", "Baiga", "Kol", "Sahariya"],
    answer: 1,
    explanation: "Gonds regarded the Baiga as the earliest inhabitants and masters of the land, so Baigas served as village priests (gunia) who dealt with spirits, disease and the boundaries of the village. In parts of central India the word 'baiga' itself came to mean a village priest."
  },
  {
    id: 16,
    question: "The Baiga Chak, a reserved homeland created by the British for the Baiga tribe, is located in which district of Madhya Pradesh?",
    options: ["Mandla", "Balaghat", "Shahdol", "Dindori"],
    answer: 3,
    explanation: "The Baiga Chak lies in Dindori district, which was carved out of Mandla in 1998. It was set up in the late 19th century as a tract where the Baiga could continue bewar cultivation. The Baiga Vikas Abhikaran works for their development."
  },
  {
    id: 17,
    question: "Who wrote the classic ethnographic monograph 'The Baiga' (1939)?",
    options: ["Verrier Elwin", "Christoph von Fürer-Haimendorf", "Sarat Chandra Roy", "Shamrao Hivale"],
    answer: 0,
    explanation: "Verrier Elwin wrote 'The Baiga' (1939) while living among the Gonds and Baigas of Mandla. Fürer-Haimendorf studied the Raj Gonds of Adilabad, and S.C. Roy wrote on the Mundas and Oraons. Shamrao Hivale was Elwin's co-worker."
  },
  {
    id: 18,
    question: "The deep, isolated Patalkot valley of Chhindwara district is home to which PVTG?",
    options: ["Sahariya", "Korku", "Bharia", "Baiga"],
    answer: 2,
    explanation: "Patalkot, in Tamia block of Chhindwara, is home to the Bharia (Bharia-Bhumia). The Bharia are one of MP's three PVTGs, and the Bharia Vikas Abhikaran based at Tamia runs special schemes for the Patalkot Bharias."
  },
  {
    id: 19,
    question: "The Patalkot valley and its Bharia inhabitants are best known among researchers for what?",
    options: ["Iron smelting", "Bell-metal casting", "Pithora painting", "Traditional knowledge of medicinal plants"],
    answer: 3,
    explanation: "Patalkot is noted for its rich medicinal flora and for the Bharia healers' (bhumkas') ethnobotanical knowledge. Many studies have documented their herbal remedies. Iron smelting belongs to the Agaria, and Pithora painting to the Rathwa and Bhilala."
  },
  {
    id: 20,
    question: "Which PVTG of Madhya Pradesh is also the only PVTG of Rajasthan?",
    options: ["Baiga", "Sahariya", "Bharia", "Korku"],
    answer: 1,
    explanation: "The Sahariya live in Gwalior-Chambal in MP and in Baran district (Shahabad and Kishanganj) of Rajasthan, where they are that state's only PVTG. The Baiga and Bharia are not found in Rajasthan, and the Korku are not a PVTG."
  },
  {
    id: 21,
    question: "How is the name of the Korku tribe usually explained?",
    options: ["Men or people", "Hill dwellers", "Forest kings", "Bowmen"],
    answer: 0,
    explanation: "The name is usually derived from 'koru' (man) plus the plural suffix '-ku', so it means 'men' or 'people'. Many tribal self-names mean 'human beings'. The Korku live in the Satpura ranges of Betul, Harda and Khandwa."
  },
  {
    id: 22,
    question: "What is the youth dormitory of the Oraon tribe called?",
    options: ["Ghotul", "Giti-ora", "Morung", "Dhumkuria"],
    answer: 3,
    explanation: "Oraon youth dormitories are called dhumkuria, with separate ones for boys and girls. The ghotul belongs to the Muria Gonds, the giti-ora to the Mundas, and the morung to the Nagas."
  },
  {
    id: 23,
    question: "The ghotul, a youth dormitory where young people learn songs, dances and social duties, is associated with which tribe?",
    options: ["Bhil", "Korku", "Muria Gond", "Sahariya"],
    answer: 2,
    explanation: "The ghotul is the famous institution of the Muria Gonds of Bastar, described by Elwin in 'The Muria and Their Ghotul' (1947). Gond tradition credits the culture hero Lingo with founding it. Bhil, Korku and Sahariya do not have this institution."
  },
  {
    id: 24,
    question: "Which of the following is NOT a Particularly Vulnerable Tribal Group (PVTG) of Madhya Pradesh?",
    options: ["Baiga", "Korku", "Bharia", "Sahariya"],
    answer: 1,
    explanation: "MP has three PVTGs: Baiga, Bharia (of Patalkot) and Sahariya. The Korku are a major tribe of the Satpura region but are not a PVTG. Each PVTG has its own development agency (abhikaran) in MP."
  },
  {
    id: 25,
    question: "How many communities are currently notified as Particularly Vulnerable Tribal Groups in India?",
    options: ["75", "46", "52", "91"],
    answer: 0,
    explanation: "India has 75 PVTGs spread over 18 states and one Union Territory, and Odisha has the most. PM-JANMAN targets all 75. MP has three: Baiga, Bharia and Sahariya."
  },
  {
    id: 26,
    question: "Which of the following is NOT one of the criteria used to identify a Particularly Vulnerable Tribal Group?",
    options: ["Pre-agricultural level of technology", "Very low level of literacy", "A rapidly rising population", "Subsistence-level economy"],
    answer: 2,
    explanation: "PVTGs are identified by pre-agricultural technology, very low literacy, a subsistence economy, and a stagnant or declining population. A rising population is the opposite of the last criterion. These criteria come from the Fifth Plan, when the category was created."
  },
  {
    id: 27,
    question: "The category earlier called 'Primitive Tribal Groups' (PTGs) was renamed 'Particularly Vulnerable Tribal Groups' in which year?",
    options: ["1975", "1993", "2014", "2006"],
    answer: 3,
    explanation: "The Government of India renamed PTGs as PVTGs in 2006 because the word 'primitive' was seen as derogatory. The category itself was created in 1975, during the Fifth Plan, following the Dhebar Commission's observation that some tribes were far less developed than others."
  },
  {
    id: 28,
    question: "PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) was launched on Janjatiya Gaurav Diwas, 15 November 2023, from which place?",
    options: ["Khunti, Jharkhand", "Shahdol, Madhya Pradesh", "Bastar, Chhattisgarh", "Bhopal, Madhya Pradesh"],
    answer: 0,
    explanation: "The Prime Minister launched PM-JANMAN from Khunti district, Jharkhand, where Birsa Munda's birthplace Ulihatu is located. The mission has an outlay of about ₹24,000 crore and aims to bring basic services to PVTG habitations."
  },
  {
    id: 29,
    question: "PM-JANMAN is a mission for which population group?",
    options: ["Scheduled Castes in backward districts", "Particularly Vulnerable Tribal Groups", "Denotified and nomadic tribes", "Forest-dwelling OBC communities"],
    answer: 1,
    explanation: "PM-JANMAN targets the 75 PVTGs, aiming to provide pucca houses, roads, piped water, electricity, health care, education and livelihoods in their habitations. In MP it covers Baiga, Bharia and Sahariya settlements."
  },
  {
    id: 30,
    question: "PM-JANMAN delivers its critical interventions for PVTGs through how many line ministries?",
    options: ["Three", "Five", "Nine", "Seventeen"],
    answer: 2,
    explanation: "PM-JANMAN has 11 critical interventions delivered through 9 ministries, with the Ministry of Tribal Affairs as the nodal ministry. Seventeen ministries are involved in the later Dharti Aaba Janjatiya Gram Utkarsh Abhiyan."
  },
  {
    id: 31,
    question: "What does the Dharti Aaba Janjatiya Gram Utkarsh Abhiyan, launched from Hazaribagh in October 2024, aim to do?",
    options: ["Provide scholarships for ST students to study abroad", "Build a tribal museum in every state", "Fix minimum support prices for minor forest produce", "Saturate tribal-majority villages with infrastructure and services through convergence of many ministries"],
    answer: 3,
    explanation: "The Abhiyan aims to fill gaps in housing, roads, water, electricity, health, education and livelihoods in about 63,000 tribal-majority villages, through the convergence of 17 ministries. It is named after Birsa Munda's title 'Dharti Aaba' (Father of the Earth). It extends the saturation approach of PM-JANMAN beyond the PVTGs."
  },
  {
    id: 32,
    question: "A Sahariya family in Sheopur district is a beneficiary of MP's Aahar Anudan Yojana. Where is the monthly nutrition grant credited?",
    options: ["To the village panchayat account", "To the bank account of the woman head of the family", "To the account of the eldest male member", "To the anganwadi worker, who distributes food grain"],
    answer: 1,
    explanation: "Aahar Anudan Yojana, launched in 2017, credits a fixed monthly amount directly into the bank account of the woman head of each PVTG family to fight malnutrition. Paying it to the woman is meant to make sure the money is spent on food and nutrition."
  },
  {
    id: 33,
    question: "MP's Aahar Anudan Yojana provides a monthly nutrition grant to families of which tribes?",
    options: ["Baiga, Bharia and Sahariya", "Bhil, Bhilala and Barela", "Gond, Pardhan and Agaria", "Korku, Kol and Oraon"],
    answer: 0,
    explanation: "The scheme covers MP's three PVTGs: Baiga, Bharia and Sahariya, who suffer from high malnutrition. It is run by the Tribal Affairs Department through direct benefit transfer to the woman head of the family."
  },
  {
    id: 34,
    question: "A block in Dindori has a 60% Scheduled Tribe population, totalling about 35,000 tribal persons. Under the revised Eklavya Model Residential School norms of 2018-19, what is its status?",
    options: ["Not eligible, as EMRS are sanctioned only at district level", "Eligible only for a day-boarding school", "Eligible only if its ST population exceeds 1 lakh", "Eligible, since every block with more than 50% ST population and at least 20,000 tribal persons is to have an EMRS"],
    answer: 3,
    explanation: "The 2018-19 revamp set the norm of one EMRS in every block with more than 50% ST population and at least 20,000 tribal persons. This block meets both conditions. Each EMRS is meant to admit about 480 students."
  },
  {
    id: 35,
    question: "Which autonomous society under the Ministry of Tribal Affairs manages Eklavya Model Residential Schools at the national level?",
    options: ["Kendriya Vidyalaya Sangathan", "Navodaya Vidyalaya Samiti", "National Education Society for Tribal Students (NESTS)", "National Council of Educational Research and Training"],
    answer: 2,
    explanation: "NESTS was set up in 2019 to manage and monitor EMRS across the country, and state societies run the schools on the ground. The schools are modelled on Jawahar Navodaya Vidyalayas, which is why the Navodaya Samiti is a tempting distractor."
  },
  {
    id: 36,
    question: "Eklavya Model Residential Schools provide education for ST students from which classes?",
    options: ["Class I to VIII", "Class VI to XII", "Class IX to XII", "Class I to XII"],
    answer: 1,
    explanation: "EMRS are residential schools for ST children from Class VI to XII. They also offer sports and skill development. In MP they are run by the state's tribal education society under the Tribal Affairs Department."
  },
  {
    id: 37,
    question: "When Eklavya Model Residential Schools were started in 1997-98, how were they funded?",
    options: ["From grants under Article 275(1) of the Constitution", "From discretionary grants under Article 282", "Under Sarva Shiksha Abhiyan", "Under Samagra Shiksha"],
    answer: 0,
    explanation: "The first EMRS were funded from grants-in-aid to states under Article 275(1). The 2018-19 revamp made EMRS a Central Sector scheme with a larger budget and new block-level norms."
  },
  {
    id: 38,
    question: "Which agency implements the Pradhan Mantri Van Dhan Yojana at the national level?",
    options: ["NABARD", "NAFED", "TRIFED", "KVIC"],
    answer: 2,
    explanation: "TRIFED (Tribal Cooperative Marketing Development Federation), under the Ministry of Tribal Affairs, implements Van Dhan. The scheme adds value to minor forest produce through Van Dhan Vikas Kendras. It is part of the scheme for marketing MFP through Minimum Support Price."
  },
  {
    id: 39,
    question: "The Pradhan Mantri Van Dhan Yojana was launched on 14 April 2018 from which place?",
    options: ["Khunti, Jharkhand", "Mandla, Madhya Pradesh", "Koraput, Odisha", "Bijapur, Chhattisgarh"],
    answer: 3,
    explanation: "Van Dhan was launched on Ambedkar Jayanti, 14 April 2018, at Bijapur in Chhattisgarh. Its first Van Dhan Vikas Kendra was set up there. Khunti is where PM-JANMAN was launched in 2023."
  },
  {
    id: 40,
    question: "A typical Van Dhan Vikas Kendra is formed by how many forest produce gatherers?",
    options: ["About 100 gatherers in 5 self-help groups", "About 300 gatherers in 15 self-help groups", "About 500 gatherers in 25 self-help groups", "About 1,000 gatherers in 50 self-help groups"],
    answer: 1,
    explanation: "Each Van Dhan Vikas Kendra was designed as a cluster of 15 tribal SHGs of about 20 members each, or about 300 gatherers. The Kendras do primary processing and value addition of MFP such as mahua, tamarind, honey and chironji."
  },
  {
    id: 41,
    question: "On which date is Janjatiya Gaurav Diwas observed every year?",
    options: ["26 January", "9 August", "15 November", "2 October"],
    answer: 2,
    explanation: "Since 2021, Janjatiya Gaurav Diwas has been observed on 15 November, the birth anniversary of Birsa Munda. 9 August is the International Day of the World's Indigenous Peoples, which is a separate UN observance."
  },
  {
    id: 42,
    question: "Janjatiya Gaurav Diwas marks the birth anniversary of which tribal leader?",
    options: ["Birsa Munda", "Tantya Bhil", "Rani Durgavati", "Sidhu Murmu"],
    answer: 0,
    explanation: "Birsa Munda was born on 15 November 1875 at Ulihatu (now in Khunti, Jharkhand) and led the Munda Ulgulan against the British and landlords. He died in Ranchi jail in 1900. The date was declared Janjatiya Gaurav Diwas in 2021."
  },
  {
    id: 43,
    question: "Birsa Munda, who led the Ulgulan (Great Tumult) of 1899-1900, is revered by tribal communities by which title?",
    options: ["Krantisurya", "Dharti Aaba", "Lokmanya", "Mama"],
    answer: 1,
    explanation: "Birsa is called 'Dharti Aaba', meaning Father of the Earth, and the 2024 village development mission is named after this title. 'Krantisurya' and 'Mama' are popular titles of Tantya Bhil of MP, and 'Lokmanya' is the title of Bal Gangadhar Tilak."
  },
  {
    id: 44,
    question: "On Janjatiya Gaurav Diwas 2021, Bhopal's Habibganj railway station was renamed after which Gond queen?",
    options: ["Rani Durgavati", "Rani Avantibai", "Ahilyabai Holkar", "Rani Kamlapati"],
    answer: 3,
    explanation: "Habibganj became Rani Kamlapati station on 15 November 2021, when the Prime Minister attended the Janjatiya Gaurav Diwas event in Bhopal. Rani Kamlapati was the Gond queen of Ginnorgarh, linked with the Bhopal region in the early 18th century. Rani Durgavati ruled Garha-Mandla."
  },
  {
    id: 45,
    question: "The National Sickle Cell Anaemia Elimination Mission, which is especially important for tribal populations, was launched on 1 July 2023 from which district?",
    options: ["Shahdol, Madhya Pradesh", "Khunti, Jharkhand", "Dantewada, Chhattisgarh", "Nandurbar, Maharashtra"],
    answer: 0,
    explanation: "The Prime Minister launched the mission from Shahdol, a tribal district of MP, with the aim of eliminating sickle cell disease as a public health problem by 2047. Sickle cell disease is far more common among tribal groups in central and western India, so the mission focuses on screening and counselling them."
  },
  {
    id: 46,
    question: "The 'Janjatiya Gaurav Varsh' observed from November 2024 to November 2025 marked which occasion?",
    options: ["75 years of the Constitution", "100 years of the Jungle Satyagraha", "The 150th birth anniversary of Birsa Munda", "50 years of the Tribal Sub-Plan"],
    answer: 2,
    explanation: "Birsa Munda was born in 1875, so 2024-25 was his 150th birth anniversary year, celebrated as Janjatiya Gaurav Varsh. MP held state-level events to honour tribal freedom fighters such as Tantya Bhil and Raja Shankar Shah."
  },
  {
    id: 47,
    question: "What is the aim of the Bhagwan Birsa Munda Swarozgar Yojana of the Madhya Pradesh government?",
    options: ["Scholarships for higher studies abroad", "Bank loans with interest subsidy for self-employment ventures of ST youth", "Pucca housing for PVTG families", "Free coaching for competitive examinations"],
    answer: 1,
    explanation: "The scheme helps ST youth set up manufacturing, service or business units through bank loans, with interest subsidy and a loan guarantee from the state. It is run by the Tribal Affairs Department and is one of several MP schemes named after tribal heroes."
  },
  {
    id: 48,
    question: "What do Scheduled Tribe students receive under the Akanksha Yojana of MP's Tribal Affairs Department?",
    options: ["Loans for self-employment", "A monthly nutrition grant", "Rent assistance for housing in cities", "Free coaching for entrance examinations such as JEE, NEET and CLAT"],
    answer: 3,
    explanation: "Akanksha Yojana gives meritorious ST students free residential coaching for national entrance examinations in engineering, medicine and law. Rent assistance for students in cities is a separate scheme (Awas Sahayata), and the monthly nutrition grant is Aahar Anudan."
  },
  {
    id: 49,
    question: "Which MP scheme, launched in 2021, delivers PDS ration to tribal villages by vehicles run by local tribal youth, so that families need not travel to distant ration shops?",
    options: ["Mukhyamantri Ration Aapke Gram Yojana", "Annapurna Yojana", "Aahar Anudan Yojana", "PM Poshan"],
    answer: 0,
    explanation: "Under Ration Aapke Gram, vehicles driven by tribal youth deliver subsidised ration to villages in the tribal development blocks. This gives the youth employment and saves families the trip to the ration shop. Aahar Anudan is a cash grant for PVTG women, not ration delivery."
  },
  {
    id: 50,
    question: "Under the Pradhan Mantri Adi Adarsh Gram Yojana, which villages are selected for integrated development?",
    options: ["Villages with at least 25% ST population", "Villages located in Sixth Schedule areas", "Villages with at least 50% ST population and at least 500 Scheduled Tribe persons", "Only villages with a PVTG habitation"],
    answer: 2,
    explanation: "PMAAGY covers villages with at least 50% ST population and at least 500 STs, aiming to turn them into model villages through convergence of schemes. MP has a large number of such villages because of its big tribal population."
  }
];

export default questions;

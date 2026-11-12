const questions = [
  {
    id: 1,
    question: "The Pithampur industrial area, often called the 'Detroit of India' for its automobile units, is located in which district of Madhya Pradesh?",
    options: ["Dhar", "Indore", "Dewas", "Ujjain"],
    answer: 0,
    explanation: "Pithampur lies in Dhar district close to Indore and hosts automobile, auto-component and pharmaceutical units along with a Special Economic Zone. Its cluster of vehicle makers earned it the 'Detroit of India' label."
  },
  {
    id: 2,
    question: "NATRAX, which has one of Asia's longest high-speed automotive test tracks, is located at",
    options: ["Mandideep", "Malanpur", "Pithampur", "Maneri"],
    answer: 2,
    explanation: "The National Automotive Test Tracks (NATRAX) at Pithampur, developed under NATRiP, has a high-speed track of about 11.3 km, among the longest in Asia. It tests vehicles for speed, durability and handling."
  },
  {
    id: 3,
    question: "The Mandideep industrial area near Bhopal, home to units in engineering, pharmaceuticals and graphite electrodes, is in which district?",
    options: ["Sehore", "Vidisha", "Bhopal", "Raisen"],
    answer: 3,
    explanation: "Mandideep is in Raisen district on the outskirts of Bhopal and is one of MP's largest industrial areas. HEG Ltd's graphite electrode plant is among its well-known units."
  },
  {
    id: 4,
    question: "The Malanpur industrial growth centre in the Gwalior region is located in which district?",
    options: ["Gwalior", "Bhind", "Morena", "Datia"],
    answer: 1,
    explanation: "Malanpur lies in Bhind district along the Gwalior–Bhind road and was developed as an industrial growth centre for the Gwalior–Chambal region. Banmore, another industrial area of the region, is in Morena district."
  },
  {
    id: 5,
    question: "Vikram Udyogpuri, an integrated industrial township developed as a node of the Delhi–Mumbai Industrial Corridor, is near which city?",
    options: ["Ujjain", "Ratlam", "Dewas", "Neemuch"],
    answer: 0,
    explanation: "Vikram Udyogpuri is a DMIC industrial township near Ujjain, developed jointly by the Centre's National Industrial Corridor Development Corporation and the State. It also hosts one of the medical devices parks approved by the Centre."
  },
  {
    id: 6,
    question: "The Centre approved medical device parks in four States in 2022. Madhya Pradesh's medical device park is being developed at",
    options: ["Pithampur, Dhar", "Vikram Udyogpuri, Ujjain", "Mandideep, Raisen", "Malanpur, Bhind"],
    answer: 1,
    explanation: "Under the scheme for Promotion of Medical Device Parks, parks were approved in Himachal Pradesh, Madhya Pradesh, Tamil Nadu and Uttar Pradesh. MP's park is at Vikram Udyogpuri near Ujjain."
  },
  {
    id: 7,
    question: "Madhya Pradesh's PM MITRA (Mega Integrated Textile Region and Apparel) park is located in which district?",
    options: ["Burhanpur", "Indore", "Dhar", "Khargone"],
    answer: 2,
    explanation: "MP's PM MITRA park is at Bhainsola in Badnawar tehsil of Dhar district, one of seven such parks approved nationally. The Prime Minister laid its foundation stone on 17 September 2025, the first among the PM MITRA parks. It builds on MP's cotton belt in the Nimar–Malwa region, where Burhanpur is a traditional powerloom centre."
  },
  {
    id: 8,
    question: "Which State agency acts as the nodal body for developing industrial areas, allotting industrial land and facilitating investment in Madhya Pradesh?",
    options: ["MP Road Development Corporation (MPRDC)", "MP State Electronics Development Corporation (MPSEDC)", "MP Housing and Infrastructure Development Board", "MP Industrial Development Corporation (MPIDC)"],
    answer: 3,
    explanation: "MPIDC develops and allots land in industrial areas, runs investment facilitation under Invest MP, and organises the Global Investors Summit. MPRDC handles roads and MPSEDC handles IT and e-governance."
  },
  {
    id: 9,
    question: "The Global Investors Summit 2025 of Madhya Pradesh, inaugurated by the Prime Minister on 24 February 2025, was held at",
    options: ["Indore", "Ujjain", "Bhopal", "Jabalpur"],
    answer: 2,
    explanation: "GIS 2025 was held in Bhopal on 24–25 February 2025. The previous edition, in January 2023, and several earlier ones were held in Indore."
  },
  {
    id: 10,
    question: "At the close of the Global Investors Summit 2025, the Madhya Pradesh government announced the total investment proposals received through the summit together with the preceding Regional Industry Conclaves and investor roadshows. This combined figure was about",
    options: ["₹15.42 lakh crore", "₹5.6 lakh crore", "₹50 lakh crore", "₹30.77 lakh crore"],
    answer: 3,
    explanation: "The two-day Bhopal summit itself drew proposals of about ₹26.61 lakh crore; adding the Regional Industry Conclaves and other investor sessions gave the headline figure of ₹30.77 lakh crore. ₹15.42 lakh crore was the figure for GIS 2023 at Indore. Proposals are intentions, not actual investment, so follow-up through MPIDC and Invest MP matters."
  },
  {
    id: 11,
    question: "Before GIS 2025, Madhya Pradesh held a series of Regional Industry Conclaves to attract investment to different regions. Where was the first one held, in March 2024?",
    options: ["Ujjain", "Jabalpur", "Gwalior", "Sagar"],
    answer: 0,
    explanation: "The first Regional Industry Conclave was held at Ujjain on 1–2 March 2024, followed by conclaves at Jabalpur, Gwalior, Sagar, Rewa, Narmadapuram and other places. The aim was to spread investment beyond Indore and Bhopal."
  },
  {
    id: 12,
    question: "The Madhya Pradesh government declared 2025 as the",
    options: ["Year of Industry and Employment (Udyog evam Rozgar Varsh)", "Year of Farmers' Welfare (Kisan Kalyan Varsh)", "Year of Tribal Pride (Janjatiya Gaurav Varsh)", "Year of Clean Water (Jal Varsh)"],
    answer: 0,
    explanation: "MP named 2025 as Udyog evam Rozgar Varsh, with the Global Investors Summit and new industrial policies as its main events. The theme reflects the State's push to shift workers from agriculture to industry and services."
  },
  {
    id: 13,
    question: "Which public sector unit in Bhopal was set up in the 1950s with technical collaboration from Associated Electrical Industries of the United Kingdom?",
    options: ["Security Paper Mill", "Bank Note Press", "Bharat Heavy Electricals Limited (BHEL)", "Ordnance Factory"],
    answer: 2,
    explanation: "BHEL's Bhopal unit, originally Heavy Electricals (India) Ltd, was set up with British collaboration from AEI and makes turbines, transformers and switchgear. It is one of the oldest heavy engineering units in the country."
  },
  {
    id: 14,
    question: "Which of the following pairs of a central government unit and its location in Madhya Pradesh is correctly matched?",
    options: ["Bank Note Press – Neemuch", "Security Paper Mill – Narmadapuram", "Government Opium and Alkaloid Works – Dewas", "Nepa Mills – Narmadapuram"],
    answer: 1,
    explanation: "The Security Paper Mill at Narmadapuram (Hoshangabad) makes paper for currency notes. The Bank Note Press is at Dewas, the Government Opium and Alkaloid Works is at Neemuch, and Nepa Mills (newsprint) is at Nepanagar in Burhanpur district."
  },
  {
    id: 15,
    question: "Under the revised MSME classification effective from 1 April 2025, a manufacturing unit in Indore with plant and machinery investment of ₹2 crore and annual turnover of ₹8 crore is classified as",
    options: ["Micro", "Small", "Medium", "Large"],
    answer: 0,
    explanation: "From April 2025, micro enterprises have investment up to ₹2.5 crore and turnover up to ₹10 crore; small up to ₹25 crore and ₹100 crore; medium up to ₹125 crore and ₹500 crore. Both limits must be met, and this unit is within the micro limits on both."
  },
  {
    id: 16,
    question: "An entrepreneur in Madhya Pradesh wants to register her new small enterprise to get MSME benefits. Since 2020, registration is done online, free of cost, on the",
    options: ["Udyog Aadhaar Memorandum portal", "GeM portal", "Udyam Registration portal", "Startup India portal"],
    answer: 2,
    explanation: "Udyam Registration replaced Udyog Aadhaar from 1 July 2020 and is self-declaration based, paperless and free, linked with PAN and GST data. The Udyam certificate is needed for schemes such as priority-sector lending and procurement preferences."
  },
  {
    id: 17,
    question: "The Bank Note Press at Dewas and the Security Paper Mill at Narmadapuram are units of which central public sector enterprise?",
    options: ["Bharatiya Reserve Bank Note Mudran Private Limited", "India Government Mint Limited", "Hindustan Paper Corporation Limited", "Security Printing and Minting Corporation of India Limited"],
    answer: 3,
    explanation: "Both units belong to SPMCIL, a Government of India enterprise that also runs the currency presses at Nashik, the India Government Mints and security presses. Bharatiya Reserve Bank Note Mudran is the RBI's own subsidiary with presses at Mysuru and Salboni."
  },
  {
    id: 18,
    question: "The composite score of the SDG India Index 2023-24 was calculated on how many of the 17 Sustainable Development Goals?",
    options: ["All 17 goals", "11, excluding the six environment-related goals", "13, excluding the four environmental goals", "16, with Goal 17 assessed only qualitatively"],
    answer: 3,
    explanation: "The 2023-24 edition computed goal-wise scores for 16 SDGs and assessed Goal 17 (Partnerships for the Goals) qualitatively. The edition used 113 indicators. Goal 14 (Life below Water) is scored only for coastal States, so a landlocked State such as Madhya Pradesh is assessed on the remaining applicable goals."
  },
  {
    id: 19,
    question: "Which company implements the metro rail projects in Bhopal and Indore?",
    options: ["Delhi Metro Rail Corporation", "Madhya Pradesh Metro Rail Corporation Limited", "National Capital Region Transport Corporation", "Rail Vikas Nigam Limited"],
    answer: 1,
    explanation: "MP Metro Rail Corporation Limited (MPMRCL), a joint venture of the Centre and the State, builds and operates the Bhopal and Indore metro projects."
  },
  {
    id: 20,
    question: "The priority corridor of the Indore Metro was inaugurated on 31 May 2025, a date chosen because it marked",
    options: ["The foundation day of Madhya Pradesh", "The birth anniversary of Raja Bhoj", "The anniversary of the Indore Municipal Corporation", "The 300th birth anniversary of Devi Ahilyabai Holkar"],
    answer: 3,
    explanation: "Indore Metro's first stretch opened on 31 May 2025, the 300th birth anniversary of Devi Ahilyabai Holkar, the Holkar queen associated with Indore and Maheshwar. MP's foundation day is 1 November."
  },
  {
    id: 21,
    question: "In a hypothetical State, the multidimensional poverty headcount ratio (H) is 20 per cent and the average intensity of deprivation among the poor (A) is 45 per cent. What is the MPI value?",
    options: ["0.090", "0.650", "0.250", "0.444"],
    answer: 0,
    explanation: "MPI = H × A = 0.20 × 0.45 = 0.090. The headcount tells how many are poor, and the intensity tells how poor they are on average, so MPI can fall either by fewer people being poor or by the poor being less deprived."
  },
  {
    id: 22,
    question: "The Atal Progress-way, an access-controlled expressway planned in Madhya Pradesh, will run through which region?",
    options: ["The Chambal region, through Sheopur, Morena and Bhind", "The Narmada valley, through Jabalpur and Narmadapuram", "Bundelkhand, through Sagar and Chhatarpur", "Nimar, through Khandwa and Burhanpur"],
    answer: 0,
    explanation: "The Atal Progress-way runs along the Chambal ravines through Sheopur, Morena and Bhind, linking Rajasthan with Uttar Pradesh. It is planned with industrial clusters along the route to develop the backward Chambal region."
  },
  {
    id: 23,
    question: "The Rewa Ultra Mega Solar project is known for which of these achievements?",
    options: ["Being India's first floating solar plant", "Being located on the Narmada at Omkareshwar", "Being India's first nuclear-solar hybrid plant", "Supplying power to the Delhi Metro and breaking the grid-parity barrier with a very low tariff"],
    answer: 3,
    explanation: "The 750 MW Rewa solar park at Gurh, Rewa, discovered a tariff below ₹3 per unit in 2017, then a record, and supplies part of its power to the Delhi Metro. The floating solar project is at Omkareshwar."
  },
  {
    id: 24,
    question: "An engineering firm in Mandideep takes ITI-pass apprentices under the National Apprenticeship Promotion Scheme. What support does the Central government provide to the employer?",
    options: ["It pays the full stipend for the first year", "It gives a one-time grant of ₹50,000 per apprentice", "It pays the apprentice's ITI fees", "It shares 25 per cent of the prescribed stipend, up to ₹1,500 per apprentice per month"],
    answer: 3,
    explanation: "Under NAPS, launched in 2016 under the Apprentices Act 1961, the Centre reimburses 25% of the stipend, capped at ₹1,500 per month per apprentice, and also supports basic training costs. The employer pays the rest of the stipend."
  },
  {
    id: 25,
    question: "Which redeveloped railway station in Bhopal, inaugurated in November 2021, is India's first station redeveloped on the public–private partnership model?",
    options: ["Rani Kamalapati", "Bhopal Junction", "Sant Hirdaram Nagar", "Misrod"],
    answer: 0,
    explanation: "Habibganj station was renamed Rani Kamalapati, after the Gond queen of Bhopal, and inaugurated in November 2021 as India's first PPP-model world-class redeveloped station. Sant Hirdaram Nagar is the renamed Bairagarh station."
  },
  {
    id: 26,
    question: "Mission Indradhanush, under which special immunisation drives are run in low-coverage districts of Madhya Pradesh, aims at",
    options: ["Universal screening for sickle cell disease", "Distribution of iron-folic acid tablets to adolescents", "Full immunisation of children and pregnant women who are unvaccinated or partially vaccinated", "Elimination of tuberculosis by 2025"],
    answer: 2,
    explanation: "Mission Indradhanush, launched in December 2014, targets children under two and pregnant women missed by routine immunisation, against vaccine-preventable diseases. Intensified Mission Indradhanush rounds focus on districts with low coverage, including several tribal districts of MP."
  },
  {
    id: 27,
    question: "Under the PM SHRI scheme, launched in 2022 and implemented in Madhya Pradesh as well, existing government schools are",
    options: ["Merged into Kendriya Vidyalayas", "Handed over to private managements", "Converted into residential schools for tribal students only", "Upgraded as model schools showcasing the National Education Policy 2020"],
    answer: 3,
    explanation: "PM SHRI (PM Schools for Rising India) upgrades over 14,500 existing schools run by the Centre, States and local bodies into exemplar schools that implement NEP 2020 with smart classrooms, labs and green practices. Eklavya Model Residential Schools are the separate scheme for tribal students."
  },
  {
    id: 28,
    question: "In Census 2011, male literacy in Madhya Pradesh was about 78.7 per cent and female literacy about 59.2 per cent. What was the gender gap in literacy?",
    options: ["About 9.5 percentage points", "About 24.8 percentage points", "About 19.5 percentage points", "About 14.2 percentage points"],
    answer: 2,
    explanation: "78.7 − 59.2 = 19.5 percentage points. This gap, wider than in States like Kerala, is a key reason for MP's focus on girls' education schemes."
  },
  {
    id: 29,
    question: "Madhya Pradesh became the first State in India to start MBBS teaching in Hindi. In which year were the first Hindi textbooks for MBBS released in Bhopal?",
    options: ["2019", "2022", "2020", "2024"],
    answer: 1,
    explanation: "In October 2022, Union Home Minister Amit Shah released Hindi textbooks for first-year MBBS subjects in Bhopal, making MP the first State to offer medical education in Hindi. Students may still write exams in English if they wish."
  },
  {
    id: 30,
    question: "The CM Rise schools of Madhya Pradesh, large integrated government schools with modern facilities, were renamed in 2025 as",
    options: ["Eklavya Vidyalaya", "Sarvodaya Vidyalaya", "Navodaya Vidyalaya", "Sandipani Vidyalaya"],
    answer: 3,
    explanation: "CM Rise schools were renamed Sandipani schools after the Sandipani ashram at Ujjain where, by tradition, Shri Krishna studied. Eklavya Model Residential Schools are a central scheme for tribal students, and Navodaya Vidyalayas are run by the Centre."
  },
  {
    id: 31,
    question: "Which State body implements the Samagra Shiksha programme for school education in Madhya Pradesh?",
    options: ["Madhya Pradesh Board of Secondary Education", "State Council of Educational Research and Training", "Rajya Shiksha Kendra", "Directorate of Technical Education"],
    answer: 2,
    explanation: "The Rajya Shiksha Kendra, Bhopal, is the State implementation society for Samagra Shiksha (earlier Sarva Shiksha Abhiyan) and handles elementary education programmes. The Board of Secondary Education conducts Class 10 and 12 examinations."
  },
  {
    id: 32,
    question: "The National Sickle Cell Anaemia Elimination Mission was launched by the Prime Minister on 1 July 2023 at which place in Madhya Pradesh?",
    options: ["Jhabua", "Dindori", "Betul", "Shahdol"],
    answer: 3,
    explanation: "The mission, which aims to eliminate sickle cell disease as a public health problem by 2047, was launched at Lalpur village in Shahdol. Sickle cell disease is common in tribal populations of MP and is screened through genetic counselling cards and point-of-care tests."
  },
  {
    id: 33,
    question: "In Sample Registration System bulletins of recent years, which large State has repeatedly recorded the highest Infant Mortality Rate in India?",
    options: ["Kerala", "Tamil Nadu", "Madhya Pradesh", "Maharashtra"],
    answer: 2,
    explanation: "MP has for many years had the highest or among the highest IMR in the country; the SRS Bulletin for 2022 recorded the maximum IMR in MP at 40 per 1,000 live births against a national figure of 26. Kerala has the lowest IMR, in single digits."
  },
  {
    id: 34,
    question: "The National Family Health Survey, whose data are used for health and nutrition indicators of Madhya Pradesh, is conducted under the Union Health Ministry by which nodal agency?",
    options: ["Registrar General of India", "National Sample Survey Office", "Indian Council of Medical Research", "International Institute for Population Sciences, Mumbai"],
    answer: 3,
    explanation: "IIPS Mumbai is the nodal agency for NFHS. The Registrar General runs the Census and the Sample Registration System, which gives IMR and MMR. NFHS data also underpin the national Multidimensional Poverty Index."
  },
  {
    id: 35,
    question: "Under Ayushman Bharat–PM Jan Arogya Yojana, an eligible family in Madhya Pradesh gets health cover of up to",
    options: ["₹1 lakh per person per year for all outpatient care", "₹2 lakh per family for life", "₹5 lakh per family per year for secondary and tertiary hospitalisation", "₹10 lakh per family per year for all treatment"],
    answer: 2,
    explanation: "PM-JAY gives cashless cover up to ₹5 lakh per family per year at empanelled hospitals. In 2024 the scheme was extended to all senior citizens aged 70 and above regardless of income."
  },
  {
    id: 36,
    question: "The Sant Shiromani Ravidas Global Skills Park in Bhopal has been developed with loan assistance from",
    options: ["The World Bank", "The Asian Development Bank", "The Japan International Cooperation Agency", "The New Development Bank"],
    answer: 1,
    explanation: "The Global Skills Park is an ADB-assisted project to provide advanced vocational training. ITE Education Services of Singapore is its knowledge partner, and it is modelled on Singapore's Institute of Technical Education."
  },
  {
    id: 37,
    question: "Which institution from Singapore is the knowledge partner for the Sant Shiromani Ravidas Global Skills Park, Bhopal?",
    options: ["ITE Education Services", "National University of Singapore", "Nanyang Technological University", "Temasek Polytechnic"],
    answer: 0,
    explanation: "ITE Education Services, the consulting arm of Singapore's Institute of Technical Education, helps design the curriculum, train trainers and set up the campus. The park offers courses in advanced manufacturing, services and other skills."
  },
  {
    id: 38,
    question: "Trades taught in Industrial Training Institutes in Madhya Pradesh under the Craftsmen Training Scheme are certified at national level by the",
    options: ["All India Council for Technical Education", "University Grants Commission", "Directorate General of Training, Ministry of Skill Development and Entrepreneurship", "National Institute of Open Schooling"],
    answer: 2,
    explanation: "ITIs are affiliated to the National Council for Vocational Training system run by the DGT, and successful trainees get the National Trade Certificate. NCVET, set up in 2018, now acts as the overarching skills regulator. AICTE regulates degree and diploma technical education, not ITIs."
  },
  {
    id: 39,
    question: "Under the Mukhyamantri Seekho Kamao Yojana of Madhya Pradesh, launched in 2023, youth undergoing on-the-job training in establishments receive",
    options: ["A one-time grant of ₹50,000 to start a business", "A monthly stipend of ₹8,000 to ₹10,000 depending on qualification", "An interest-free loan of ₹1 lakh", "A fixed unemployment allowance of ₹1,500 a month"],
    answer: 1,
    explanation: "Seekho Kamao Yojana gives youth aged 18–29 on-the-job training with a monthly stipend of ₹8,000 for Class 12 pass, ₹8,500 for ITI, ₹9,000 for diploma and ₹10,000 for graduates. The State pays most of the stipend, which builds job-ready skills."
  },
  {
    id: 40,
    question: "The SDG India Index, which ranks States including Madhya Pradesh on the Sustainable Development Goals, is prepared by",
    options: ["Ministry of Statistics and Programme Implementation", "UNDP India alone", "NITI Aayog", "Reserve Bank of India"],
    answer: 2,
    explanation: "NITI Aayog first released the SDG India Index in 2018, with technical support from the UN in India. It scores States from 0 to 100 on each goal and on a composite basis."
  },
  {
    id: 41,
    question: "In NITI Aayog's SDG India Index 2023-24, Madhya Pradesh's composite score was 67. In which category did this place the State?",
    options: ["Front Runner", "Performer", "Aspirant", "Achiever"],
    answer: 0,
    explanation: "The SDG India Index groups scores as Aspirant (0–49), Performer (50–64), Front Runner (65–99) and Achiever (100). With 67, MP was one of ten States and UTs that newly entered the Front Runner band in 2023-24; State scores ranged from 57 (Bihar) to 79 (Kerala and Uttarakhand)."
  },
  {
    id: 42,
    question: "The State Business Reform Action Plan rankings, used to compare Madhya Pradesh with other States on ease of doing business, are prepared by",
    options: ["NITI Aayog", "The Reserve Bank of India", "The Ministry of Corporate Affairs", "The Department for Promotion of Industry and Internal Trade"],
    answer: 3,
    explanation: "DPIIT, under the Ministry of Commerce and Industry, runs the BRAP exercise, which assesses States on reforms such as single-window clearance, land, labour and construction permits, and includes feedback from businesses."
  },
  {
    id: 43,
    question: "In the State Business Reform Action Plan 2019 ranking released in September 2020, which position did Madhya Pradesh get?",
    options: ["First", "Fourth", "Seventh", "Twelfth"],
    answer: 1,
    explanation: "In the BRAP 2019 rankings, Andhra Pradesh was first, Uttar Pradesh second, Telangana third and Madhya Pradesh fourth, followed by Jharkhand. Later editions grouped States into categories such as Top Achievers instead of ranks."
  },
  {
    id: 44,
    question: "How many indicators are used in NITI Aayog's National Multidimensional Poverty Index?",
    options: ["12", "10", "8", "15"],
    answer: 0,
    explanation: "The National MPI uses 12 indicators across three equally weighted dimensions: health, education and standard of living. It adds maternal health and bank account to the 10 indicators of the global MPI."
  },
  {
    id: 45,
    question: "In the National Multidimensional Poverty Index, a person is identified as multidimensionally poor if the weighted sum of his deprivations is at least",
    options: ["One-third (33.33 per cent)", "One-half (50 per cent)", "One-fourth (25 per cent)", "Two-thirds (66.67 per cent)"],
    answer: 0,
    explanation: "The Alkire–Foster method used by NITI Aayog with OPHI and UNDP sets a poverty cut-off of 33.33% of weighted indicators. The MPI value combines the headcount ratio with the average intensity of deprivation among the poor."
  },
  {
    id: 46,
    question: "A household in rural Madhya Pradesh has no member with six years of schooling (weight 1/6), uses wood for cooking (weight 1/21) and lacks improved sanitation (weight 1/21). Its deprivation score is about 26 per cent. Under the National MPI, the household is",
    options: ["Multidimensionally poor, as it is deprived in three indicators", "Not multidimensionally poor, as the score is below the one-third cut-off", "Multidimensionally poor, as education deprivation alone qualifies", "Severely poor, as the score exceeds one-fourth"],
    answer: 1,
    explanation: "1/6 + 1/21 + 1/21 ≈ 0.167 + 0.048 + 0.048 ≈ 0.26, or about 26%, which is below the 33.33% cut-off. Identification depends on the weighted sum of deprivations, not on the number of indicators."
  },
  {
    id: 47,
    question: "NITI Aayog's National MPI Progress Review 2023 compared data from which two rounds of the National Family Health Survey?",
    options: ["NFHS-4 (2015-16) and NFHS-5 (2019-21)", "NFHS-3 (2005-06) and NFHS-4 (2015-16)", "NFHS-2 (1998-99) and NFHS-5 (2019-21)", "NFHS-5 (2019-21) and NFHS-6 (2023-24)"],
    answer: 0,
    explanation: "The 2023 Progress Review compared NFHS-4 and NFHS-5 and found India's multidimensional poverty headcount fell from about 24.85% to 14.96%. Madhya Pradesh was among the States with the fastest fall."
  },
  {
    id: 48,
    question: "According to NITI Aayog's National MPI Progress Review 2023, between 2015-16 and 2019-21 Madhya Pradesh recorded the third-largest number of people escaping multidimensional poverty, after",
    options: ["Rajasthan and Odisha", "Uttar Pradesh and Bihar", "Maharashtra and West Bengal", "Uttar Pradesh and Rajasthan"],
    answer: 1,
    explanation: "Uttar Pradesh (about 3.43 crore) and Bihar (about 2.25 crore) led, with Madhya Pradesh third at about 1.36 crore people moving out of multidimensional poverty. MP's poverty headcount fell sharply over the period."
  },
  {
    id: 49,
    question: "The three dimensions of NITI Aayog's National Multidimensional Poverty Index, each with equal weight, are",
    options: ["Income, employment and assets", "Health, education and standard of living", "Health, income and housing", "Education, employment and nutrition"],
    answer: 1,
    explanation: "Each dimension carries one-third of the weight. Health has nutrition, child and adolescent mortality and maternal health; education has years of schooling and school attendance; standard of living has cooking fuel, sanitation, drinking water, electricity, housing, assets and bank account."
  },
  {
    id: 50,
    question: "Which of the following is a standard-of-living indicator added in India's National MPI that is not part of the global MPI?",
    options: ["Cooking fuel", "Electricity", "Bank account", "Drinking water"],
    answer: 2,
    explanation: "India's National MPI adds two indicators to the global MPI's ten: maternal health (in the health dimension) and bank account (in standard of living). Cooking fuel, electricity and drinking water are common to both."
  }
];

export default questions;

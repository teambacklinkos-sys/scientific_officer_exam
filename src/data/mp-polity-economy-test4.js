const questions = [
  {
    id: 1,
    question: "What is the base year of the current series of Gross State Domestic Product estimates for Madhya Pradesh?",
    options: ["2004-05", "2011-12", "2017-18", "1999-2000"],
    answer: 1,
    explanation: "MP's GSDP and per-capita income figures, like the national accounts, use the 2011-12 base year series. Earlier series used 2004-05 and 1999-2000 as base years."
  },
  {
    id: 2,
    question: "Which agency prepares the official estimates of Gross State Domestic Product and per-capita income of Madhya Pradesh?",
    options: ["Directorate of Economics and Statistics, Government of MP", "Reserve Bank of India, Bhopal office", "National Statistical Office, New Delhi", "Office of the Accountant General, Gwalior"],
    answer: 0,
    explanation: "The Directorate of Economics and Statistics under the State's Planning, Economics and Statistics Department compiles GSDP, GSVA and per-capita income, following the NSO's methodology. The NSO prepares the national accounts, and the Accountant General audits State accounts."
  },
  {
    id: 3,
    question: "The per-capita income of Madhya Pradesh reported in the State Economic Survey is calculated as",
    options: ["Gross State Domestic Product at constant prices divided by the number of workers", "State's total budget expenditure divided by its population", "Net State Domestic Product at current prices divided by the State's mid-year population", "Gross State Value Added divided by the number of households"],
    answer: 2,
    explanation: "Per-capita income is per-capita NSDP: NSDP (GSDP minus depreciation) divided by the estimated population. It is reported at both current and constant prices, and the current-price figure is the one usually quoted."
  },
  {
    id: 4,
    question: "How does Madhya Pradesh's per-capita income compare with India's per-capita net national income?",
    options: ["It is well above the national average", "It is roughly equal to the national average", "It is the lowest among all States of India", "It remains below the national average, though the gap has narrowed over the past two decades"],
    answer: 3,
    explanation: "MP's per-capita income has grown rapidly since the early 2000s, but it is still below the all-India per-capita NNI. MP is not the lowest; States such as Bihar and Uttar Pradesh have lower per-capita incomes."
  },
  {
    id: 5,
    question: "A distinctive feature of the sectoral composition of Madhya Pradesh's Gross State Value Added at current prices in recent years is that",
    options: ["The secondary sector has the largest share, ahead of services", "The primary sector has the largest share, ahead of the tertiary sector", "The tertiary sector contributes over 70 per cent", "Mining alone contributes more than agriculture"],
    answer: 1,
    explanation: "Unlike India as a whole, where services dominate, MP's primary sector (crops, livestock, forestry, fishing and mining) has contributed over two-fifths of GSVA in recent Economic Surveys, ahead of services, with industry third. The Economic Survey 2025-26 put the shares at about 43% primary, 37% tertiary and 20% secondary at current prices; at constant 2011-12 prices the tertiary sector is slightly ahead, so the current-price qualifier matters."
  },
  {
    id: 6,
    question: "Suppose that in a given year (hypothetical figures) a State's GSDP at current prices grows by 12 per cent while the GSDP deflator rises by about 4 per cent. The real growth rate at constant prices is approximately",
    options: ["8 per cent", "16 per cent", "12 per cent", "3 per cent"],
    answer: 0,
    explanation: "Real growth ≈ nominal growth minus inflation in the deflator, so 12% − 4% ≈ 8% (more precisely 1.12 ÷ 1.04 − 1 ≈ 7.7%). Growth at constant prices removes the effect of price changes and measures real expansion of output."
  },
  {
    id: 7,
    question: "Under the Fifteenth Finance Commission (2021–26), Madhya Pradesh's share in the divisible pool of central taxes was 7.850 per cent. Where did this place MP among the States?",
    options: ["First, ahead of Uttar Pradesh", "Second, after Uttar Pradesh", "Third, after Uttar Pradesh and Bihar", "Fifth, after Uttar Pradesh, Bihar, West Bengal and Maharashtra"],
    answer: 2,
    explanation: "The 15th Finance Commission gave Uttar Pradesh about 17.9%, Bihar about 10.1% and Madhya Pradesh 7.850%, followed by West Bengal and Maharashtra. Central tax devolution is therefore a major revenue source for MP."
  },
  {
    id: 8,
    question: "Under Madhya Pradesh's Fiscal Responsibility and Budget Management Act 2005, the standard ceiling for the State's fiscal deficit is",
    options: ["3 per cent of GSDP", "5 per cent of GSDP", "1 per cent of GSDP", "10 per cent of total revenue receipts"],
    answer: 0,
    explanation: "The MP Rajkoshiya Uttardayitva evam Bajat Prabandhan Adhiniyam 2005 set a fiscal deficit target of 3% of GSDP, in line with Finance Commission recommendations. The limit has been relaxed in particular years when the Centre allowed extra borrowing, such as during the pandemic."
  },
  {
    id: 9,
    question: "Who presented the Madhya Pradesh budgets for 2024-25 and 2025-26 as Finance Minister?",
    options: ["Jayant Malaiya", "Tarun Bhanot", "Rajendra Shukla", "Jagdish Devda"],
    answer: 3,
    explanation: "Jagdish Devda, Deputy Chief Minister in the Mohan Yadav government, held the Finance portfolio and presented both budgets. Jayant Malaiya was Finance Minister in the 2013–18 Shivraj Singh Chouhan government and Tarun Bhanot in the Kamal Nath government."
  },
  {
    id: 10,
    question: "The Mukhyamantri Kisan Kalyan Yojana of Madhya Pradesh, launched in 2020, is designed to",
    options: ["Provide crop insurance at a premium of one per cent", "Give PM-KISAN beneficiary farmers additional annual income support from the State", "Pay the difference between MSP and mandi prices", "Provide interest-free tractor loans"],
    answer: 1,
    explanation: "The scheme tops up the Centre's PM-KISAN support with a State contribution paid directly into the bank accounts of the same eligible farmers. It is a direct benefit transfer, not an insurance or price support scheme."
  },
  {
    id: 11,
    question: "At its launch in 2020, the Mukhyamantri Kisan Kalyan Yojana gave ₹4,000 a year in two instalments. Combined with PM-KISAN, what was the total annual support to an eligible farmer in Madhya Pradesh?",
    options: ["₹6,000", "₹10,000", "₹8,000", "₹12,000"],
    answer: 1,
    explanation: "PM-KISAN gives ₹6,000 per year in three instalments of ₹2,000. Adding the State's ₹4,000 gave an eligible MP farmer ₹10,000 a year when the scheme began."
  },
  {
    id: 12,
    question: "Under the Bhavantar Bhugtan Yojana of Madhya Pradesh, a registered farmer who sells a notified crop in a mandi below the Minimum Support Price",
    options: ["Has the crop procured by the government at MSP", "Gets a fixed bonus of ₹500 per quintal regardless of the price", "Receives the difference between the MSP and the sale price or the modal mandi price, within a limit", "Gets a loan waiver equal to the loss"],
    answer: 2,
    explanation: "Bhavantar, launched in 2017, is a price deficiency payment: the State pays the gap between MSP and the sale price (or the average modal price, whichever gives the smaller gap) without physically buying the crop. It was revived for soybean in 2025."
  },
  {
    id: 13,
    question: "The Bhavantar Bhugtan Yojana of Madhya Pradesh served as a model for which component of the Central government's PM-AASHA umbrella scheme?",
    options: ["Market Intervention Scheme", "Pradhan Mantri Fasal Bima Yojana", "Price Support Scheme", "Price Deficiency Payment Scheme"],
    answer: 3,
    explanation: "PM-AASHA (2018) introduced the Price Deficiency Payment Scheme, modelled on MP's Bhavantar, alongside the Price Support Scheme (physical procurement at MSP); since its 2024 restructuring the umbrella also includes the Market Intervention Scheme and the Price Stabilisation Fund. PDPS pays farmers the difference between MSP and the market price for notified oilseeds without physical procurement."
  },
  {
    id: 14,
    question: "A wheat farmer in Vidisha insures his rabi crop under the Pradhan Mantri Fasal Bima Yojana for a sum insured of ₹1,00,000. What is the maximum premium he pays?",
    options: ["₹2,000", "₹5,000", "₹1,000", "₹1,500"],
    answer: 3,
    explanation: "Under PMFBY the farmer's premium is capped at 1.5% of the sum insured for rabi food and oilseed crops, 2% for kharif crops and 5% for annual commercial and horticultural crops. 1.5% of ₹1,00,000 is ₹1,500, and the rest is shared by the Centre and the State."
  },
  {
    id: 15,
    question: "The Krishi Karman Awards, which Madhya Pradesh has received several times, are conferred by",
    options: ["NITI Aayog, for the best agricultural growth rate", "ICAR, for the best agricultural university", "NABARD, for the best rural credit performance", "The Union Ministry of Agriculture and Farmers Welfare, for outstanding foodgrain production"],
    answer: 3,
    explanation: "The Krishi Karman Awards were instituted in 2010-11 by the Union Ministry of Agriculture to honour States for the highest foodgrain production overall and for individual crops such as wheat, rice, pulses and coarse cereals. MP's repeated awards reflected its rapid rise in wheat and pulse production."
  },
  {
    id: 16,
    question: "Madhya Pradesh's high agricultural growth from the mid-2000s, which earned it repeated Krishi Karman Awards, is most closely associated with",
    options: ["A large expansion of irrigated area along with assured procurement of wheat", "A shift from foodgrains to plantation crops", "The spread of shifting cultivation in tribal districts", "A sharp fall in the area under wheat"],
    answer: 0,
    explanation: "The rapid growth came mainly from expanding irrigation, including canal command areas and tube wells, steady power supply to farms, and wheat procurement at MSP with State bonuses. MP rose to become one of India's top wheat producers."
  },
  {
    id: 17,
    question: "Through Primary Agricultural Credit Societies, the Madhya Pradesh government provides short-term crop loans to farmers who repay on time at an effective interest rate of",
    options: ["Zero per cent", "Four per cent", "Seven per cent", "Two per cent"],
    answer: 0,
    explanation: "MP provides short-term crop loans through cooperatives at zero per cent interest for farmers who repay on time, with the interest burden borne by Central and State subvention. The Central interest subvention scheme alone brings the rate to 4% for prompt payers."
  },
  {
    id: 18,
    question: "Which State has the largest area under certified organic farming in India?",
    options: ["Sikkim", "Madhya Pradesh", "Maharashtra", "Rajasthan"],
    answer: 1,
    explanation: "Madhya Pradesh has the largest area under organic certification in the country, with large tracts in tribal and rain-fed districts. Sikkim is India's first fully organic State, but its total area is small."
  },
  {
    id: 19,
    question: "The ICAR institute dedicated to research on soybean, the leading kharif oilseed of Madhya Pradesh, is located at",
    options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"],
    answer: 2,
    explanation: "The ICAR-Indian Institute of Soybean Research is at Indore, and the Soybean Processors Association of India is also based there. MP is the largest soybean producer in India, earning it the name 'Soya State'."
  },
  {
    id: 20,
    question: "Madhya Pradesh is the largest producer in India of which group of crops, led by gram (chickpea)?",
    options: ["Rice", "Pulses", "Sugarcane", "Cotton"],
    answer: 1,
    explanation: "MP produces the largest share of India's pulses, mainly gram, along with lentil and pigeon pea. This contribution is a key reason for its Krishi Karman Awards in the pulses category."
  },
  {
    id: 21,
    question: "The online portal through which farmers in Madhya Pradesh register and sell wheat and other crops to the government at Minimum Support Price is",
    options: ["e-Uparjan", "e-NAM", "Bhulekh", "Samagra"],
    answer: 0,
    explanation: "MP's e-Uparjan portal handles farmer registration, slot booking, procurement and payment for MSP procurement. e-NAM is the national electronic trading platform for mandis, Bhulekh relates to land records, and Samagra is the State's family database."
  },
  {
    id: 22,
    question: "Agricultural produce markets (mandis) in Madhya Pradesh are regulated under which law?",
    options: ["MP Krishi Upaj Mandi Adhiniyam 1972", "MP Cooperative Societies Act 1960", "MP Land Revenue Code 1959", "Essential Commodities Act 1955"],
    answer: 0,
    explanation: "The MP Krishi Upaj Mandi Adhiniyam 1972 governs regulated markets, mandi committees and the State Agricultural Marketing Board (Mandi Board) at Bhopal. The Essential Commodities Act is a central law on supply and stock limits."
  },
  {
    id: 23,
    question: "The Kisan Credit Card scheme, through which cooperative and commercial banks in Madhya Pradesh give crop loans, was introduced in 1998 on the recommendation of the",
    options: ["Swaminathan Commission", "R. V. Gupta Committee", "Narasimham Committee", "Vaidyanathan Committee"],
    answer: 1,
    explanation: "KCC was introduced in August 1998, based on the R. V. Gupta Committee's recommendations and prepared by NABARD, to give farmers timely, flexible credit. The Vaidyanathan Committee dealt with revival of cooperative credit, and the Swaminathan Commission with farmers' welfare."
  },
  {
    id: 24,
    question: "The Mahatma Gandhi National Rural Employment Guarantee Act 2005 was repealed and replaced from 1 July 2026 by the Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin) Act 2025 (VB-G RAM G). How many days of wage employment does the new Act guarantee to a rural household in a financial year?",
    options: ["100 days", "125 days", "150 days", "200 days"],
    answer: 1,
    explanation: "Section 5(1) of the VB-G RAM G Act guarantees not less than 125 days of unskilled manual wage employment per rural household per financial year, up from 100 days under MGNREGA. The Act received Presidential assent in December 2025 and came into force on 1 July 2026."
  },
  {
    id: 25,
    question: "Under the VB-G RAM G Act 2025, which replaced MGNREGA, if a rural household that has applied for work is not given employment within 15 days, it is entitled to",
    options: ["Double wages for the next job", "A loan from the Gram Panchayat", "Priority for a house under PMAY-G", "A daily unemployment allowance paid by the State Government"],
    answer: 3,
    explanation: "Like MGNREGA before it, the new Act requires the State Government to pay an unemployment allowance if work is not provided within 15 days of the application. This keeps the right-based character of the guarantee."
  },
  {
    id: 26,
    question: "Under the VB-G RAM G Act 2025, a State such as Madhya Pradesh may notify a period during peak sowing and harvesting when works under the scheme are not taken up. What is the maximum aggregate length of this period in a financial year?",
    options: ["30 days", "45 days", "90 days", "60 days"],
    answer: 3,
    explanation: "States can notify up to an aggregate of 60 days in a financial year, during peak agricultural seasons, when no work is offered, so that farm labour is available. The 125-day guarantee operates in the rest of the year; MGNREGA had no such pause."
  },
  {
    id: 27,
    question: "Under the Pradhan Mantri Awas Yojana–Gramin, what unit assistance is provided for construction of a house in the plains areas of Madhya Pradesh?",
    options: ["₹1.30 lakh", "₹2.50 lakh", "₹70,000", "₹1.20 lakh"],
    answer: 3,
    explanation: "PMAY-G provides ₹1.20 lakh per house in plain areas and ₹1.30 lakh in hilly, difficult and IAP districts, shared between Centre and State in a 60:40 ratio in States like MP. Beneficiaries also get 90–95 days of unskilled wages through convergence with the rural employment guarantee programme and toilet support under SBM-G."
  },
  {
    id: 28,
    question: "Beneficiaries under PMAY-Gramin were initially identified using data from",
    options: ["The Population Census 2001", "The National Family Health Survey-4", "The Socio-Economic and Caste Census 2011, verified by the Gram Sabha", "The Agricultural Census 2015-16"],
    answer: 2,
    explanation: "PMAY-G, launched in November 2016, used housing deprivation parameters from SECC 2011, with the list verified by Gram Sabhas. Households left out were later surveyed through the Awaas+ app."
  },
  {
    id: 29,
    question: "The National Rural Livelihoods Mission, implemented in Madhya Pradesh by the State Rural Livelihood Mission, is centred on",
    options: ["Building rural roads to unconnected habitations", "Providing piped water to every rural household", "Organising poor rural women into self-help groups and federations", "Giving fixed monthly pensions to landless labourers"],
    answer: 2,
    explanation: "NRLM (Aajeevika), launched in 2011 and renamed DAY-NRLM, mobilises poor households, mainly women, into SHGs, village organisations and cluster federations, and links them to bank credit and livelihoods. Rural roads come under PMGSY and piped water under Jal Jeevan Mission."
  },
  {
    id: 30,
    question: "Under the Lakhpati Didi initiative of DAY-NRLM, a self-help group member is called a 'Lakhpati Didi' when",
    options: ["Her SHG receives a bank loan of ₹1 lakh", "Her household's annual income reaches at least ₹1 lakh on a sustained basis", "She saves ₹1 lakh in her SHG account", "She receives ₹1 lakh as a government grant"],
    answer: 1,
    explanation: "A Lakhpati Didi is an SHG member whose household earns at least ₹1 lakh a year, sustained over at least four agricultural seasons or business cycles. The target is reached through diversified livelihoods, not through loans or grants alone."
  },
  {
    id: 31,
    question: "Cooperative societies in Madhya Pradesh are registered and regulated under the",
    options: ["Multi-State Co-operative Societies Act 2002", "MP Krishi Upaj Mandi Adhiniyam 1972", "MP Cooperative Societies Act 1960", "Societies Registration Act 1860"],
    answer: 2,
    explanation: "The MP Cooperative Societies Act 1960 governs cooperatives operating within the State, including PACS, district cooperative banks and marketing societies. Cooperatives operating in more than one State are registered under the Multi-State Co-operative Societies Act 2002."
  },
  {
    id: 32,
    question: "The short-term cooperative credit structure in Madhya Pradesh has three tiers. Which order is correct from village to State level?",
    options: ["District Central Cooperative Bank → Primary Agricultural Credit Society → State Cooperative Bank", "Regional Rural Bank → District Central Cooperative Bank → NABARD", "Primary Agricultural Credit Society → State Cooperative Bank → District Central Cooperative Bank", "Primary Agricultural Credit Society → District Central Cooperative Bank → State Cooperative Bank"],
    answer: 3,
    explanation: "PACS lend directly to farmers at village level, District Central Cooperative Banks finance PACS, and the MP Rajya Sahakari Bank at Bhopal is the apex body. NABARD refinances this structure but is not part of it."
  },
  {
    id: 33,
    question: "The 97th Constitutional Amendment (2011) concerning cooperatives was partly struck down by the Supreme Court in 2021. What was the effect on cooperatives of Madhya Pradesh?",
    options: ["Cooperatives lost the protection of Article 19(1)(c)", "Part IXB no longer binds cooperatives that operate only within a single State", "All cooperative societies came under the Multi-State Act", "The State lost the power to make laws on cooperatives"],
    answer: 1,
    explanation: "In Union of India v. Rajendra N. Shah (2021) the Court held that Part IXB, which regulates cooperative societies, was invalid for State cooperatives because the amendment was not ratified by half the States as Article 368(2) requires. It survives for multi-State cooperatives, and the right to form cooperatives under Article 19(1)(c) is unaffected."
  },
  {
    id: 34,
    question: "Which brand of milk and dairy products is marketed by the Madhya Pradesh State Cooperative Dairy Federation?",
    options: ["Saras", "Sudha", "Sanchi", "Verka"],
    answer: 2,
    explanation: "Sanchi is the brand of MP's cooperative dairy federation, which collects milk through village societies and district milk unions. Saras is Rajasthan's brand, Sudha is Bihar's and Verka is Punjab's."
  },
  {
    id: 35,
    question: "In Madhya Pradesh, tendu leaves are collected and marketed through",
    options: ["Private contractors licensed by each Gram Panchayat", "The MP State Agricultural Marketing Board", "Primary forest produce cooperative societies under the MP State Minor Forest Produce Cooperative Federation", "The Tribal Cooperative Marketing Development Federation of India alone"],
    answer: 2,
    explanation: "Tendu leaf trade is a State monopoly in MP, run through the MP State Minor Forest Produce (Trading and Development) Cooperative Federation and its primary societies. Collectors, mostly tribal families, receive a collection wage and a share of the profit as bonus."
  },
  {
    id: 36,
    question: "The Pradhan Mantri Gram Sadak Yojana, launched in 2000, aims to",
    options: ["Give all-weather road connectivity to eligible unconnected rural habitations", "Build four-lane highways between district headquarters", "Connect every village with a railway halt", "Provide street lighting to all Gram Panchayats"],
    answer: 0,
    explanation: "PMGSY provides all-weather roads to unconnected habitations above population thresholds. In MP it is implemented by the MP Rural Road Development Authority, and the State has built one of the largest PMGSY road networks in the country."
  },
  {
    id: 37,
    question: "Which body in Madhya Pradesh implements the Pradhan Mantri Gram Sadak Yojana?",
    options: ["MP Rural Road Development Authority", "MP Road Development Corporation", "Public Works Department (National Highways wing)", "MP Housing and Infrastructure Development Board"],
    answer: 0,
    explanation: "The MP Rural Road Development Authority (MPRRDA) builds and maintains PMGSY and State rural roads. The MP Road Development Corporation (MPRDC) handles State highways and major roads, often on PPP basis."
  },
  {
    id: 38,
    question: "Minimum Support Prices for kharif and rabi crops, which shape procurement in Madhya Pradesh, are announced by the Union Government on the recommendation of the",
    options: ["Food Corporation of India", "NITI Aayog", "National Bank for Agriculture and Rural Development", "Commission for Agricultural Costs and Prices"],
    answer: 3,
    explanation: "CACP recommends MSPs for 22 mandated crops after considering cost of production, demand-supply and other factors, and the Cabinet Committee on Economic Affairs approves them. FCI and State agencies carry out procurement at those prices."
  },
  {
    id: 39,
    question: "A farmer in Shajapur wants a subsidised solar pump to replace his diesel pump for irrigation. Which central scheme is designed for this purpose?",
    options: ["PM-KISAN", "PM-KUSUM", "PM-SVANidhi", "PM-AJAY"],
    answer: 1,
    explanation: "PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) supports standalone solar pumps, solarisation of grid-connected pumps and small solar plants on farmland. MP implements it through its energy development agency and power companies."
  },
  {
    id: 40,
    question: "Under the Kisan Credit Card scheme, a dairy farmer in Madhya Pradesh can obtain short-term credit for",
    options: ["Only crop cultivation", "Only purchase of land", "Only marriage expenses of family members", "Working capital for animal husbandry as well as crop cultivation"],
    answer: 3,
    explanation: "KCC, introduced in 1998, was extended in 2018-19 to cover animal husbandry and fisheries working capital, in addition to crop loans. The interest subvention benefit also applies to these loans within limits."
  },
  {
    id: 41,
    question: "Which of the following is a key soil-health initiative under which farmers in Madhya Pradesh receive nutrient-based fertiliser recommendations for their fields?",
    options: ["Paramparagat Krishi Vikas Yojana", "Soil Health Card Scheme", "Rashtriya Gokul Mission", "e-NAM"],
    answer: 1,
    explanation: "The Soil Health Card Scheme (2015) tests soil samples and gives each farmer a card with nutrient status and crop-wise fertiliser recommendations. Paramparagat Krishi Vikas Yojana promotes organic clusters, and Rashtriya Gokul Mission is about indigenous cattle breeds."
  },
  {
    id: 42,
    question: "The Union Ministry of Cooperation, which now guides the expansion of PACS in States such as Madhya Pradesh, was created in",
    options: ["2014", "2019", "2021", "2023"],
    answer: 2,
    explanation: "The Ministry of Cooperation was carved out of the Ministry of Agriculture in July 2021 to strengthen the cooperative movement. Its programmes include computerising PACS and setting up multipurpose PACS in uncovered panchayats."
  },
  {
    id: 43,
    question: "Under the VB-G RAM G Act 2025, works to be taken up in a village of Seoni district are to be drawn from which local plan?",
    options: ["The Annual Action Plan of the District Rural Development Agency", "The State Highways master plan", "The Viksit Gram Panchayat Plan, linked to PM Gati Shakti", "The list of works under MPLADS"],
    answer: 2,
    explanation: "The Act makes the Viksit Gram Panchayat Plan the base for planning works, and these plans are linked with the PM Gati Shakti platform. Priority works include water security, core rural infrastructure, livelihood infrastructure and climate resilience."
  },
  {
    id: 44,
    question: "Under the VB-G RAM G Act 2025, at least what share of works by cost must be implemented by Gram Panchayats?",
    options: ["25 per cent", "33 per cent", "75 per cent", "50 per cent"],
    answer: 3,
    explanation: "The new Act keeps MGNREGA's rule (Section 16(5) of the 2005 Act) that at least half of the works by cost are implemented by Gram Panchayats. This keeps execution close to the village, with Gram Sabhas conducting social audits."
  },
  {
    id: 45,
    question: "Under the Jal Jeevan Mission, which also operates in rural Madhya Pradesh, the main objective is to provide",
    options: ["A community hand pump for every 250 persons", "A toilet in every rural household", "A functional household tap connection to every rural home", "A check dam in every Gram Panchayat"],
    answer: 2,
    explanation: "Jal Jeevan Mission, launched in 2019, aims to give every rural household a Functional Household Tap Connection supplying adequate potable water regularly. Village Water and Sanitation Committees of the Gram Panchayat manage the local scheme."
  },
  {
    id: 46,
    question: "The Swachh Bharat Mission–Gramin's second phase, under which villages in Madhya Pradesh are being declared 'ODF Plus', focuses on",
    options: ["Sustaining open-defecation-free status and managing solid and liquid waste", "Building the first toilets in villages with none", "Providing piped drinking water", "Constructing village roads"],
    answer: 0,
    explanation: "Phase I (2014–19) aimed at making villages open-defecation free. Phase II targets ODF Plus: sustaining ODF status and putting in place solid and liquid waste management, including greywater management and plastic waste handling."
  },
  {
    id: 47,
    question: "Self-help groups promoted under the National Rural Livelihoods Mission in Madhya Pradesh ordinarily consist of",
    options: ["10 to 20 members, mainly women from poor households", "50 to 100 members from all income groups", "Exactly five members from one family", "Elected Panches of the Gram Panchayat"],
    answer: 0,
    explanation: "NRLM SHGs normally have 10–20 members (fewer in difficult areas), mostly women from poor households, who save regularly, lend internally and get revolving funds and bank linkage. Groups federate into village organisations and cluster-level federations."
  },
  {
    id: 48,
    question: "Madhya Pradesh grows a large share of India's soybean, mainly in the Malwa plateau. Soybean in MP is predominantly a",
    options: ["Kharif crop sown with the onset of the monsoon", "Rabi crop sown in November", "Zaid crop grown in summer", "Perennial plantation crop"],
    answer: 0,
    explanation: "Soybean is sown in June–July with the monsoon and harvested in September–October, after which wheat or gram is often grown on the same land in the rabi season. This soybean–wheat rotation is typical of Malwa."
  },
  {
    id: 49,
    question: "Under the VB-G RAM G Act 2025, the scheme is a Centrally Sponsored Scheme. What is the Centre–State fund-sharing ratio for a State such as Madhya Pradesh?",
    options: ["100:0", "75:25", "60:40", "90:10"],
    answer: 2,
    explanation: "The Act uses a 60:40 Centre–State sharing ratio for most States, including MP, 90:10 for North-Eastern and Himalayan States, and full central funding for Union Territories without legislatures. Under MGNREGA the Centre had borne the full cost of unskilled wages."
  },
  {
    id: 50,
    question: "Under PMAY-Gramin, the minimum size of a house built for a beneficiary in rural Madhya Pradesh is",
    options: ["25 square metres, including a dedicated area for hygienic cooking", "20 square metres, excluding the kitchen", "40 square metres, including a toilet", "15 square metres, as under the earlier Indira Awaas Yojana"],
    answer: 0,
    explanation: "PMAY-G raised the minimum unit size to 25 sq m, including a hygienic cooking space, from 20 sq m under the Indira Awaas Yojana that it replaced. Beneficiaries can choose from region-specific house designs."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "How many subjects did the 73rd Constitutional Amendment place in the Eleventh Schedule for Panchayats?",
    options: ["18", "29", "22", "47"],
    answer: 1,
    explanation: "The 73rd Amendment (1992) added Part IX and the Eleventh Schedule listing 29 subjects, such as agriculture, minor irrigation, drinking water and poverty alleviation. The Twelfth Schedule added by the 74th Amendment lists 18 subjects for municipalities."
  },
  {
    id: 2,
    question: "Which of the following functions is listed in the Twelfth Schedule (municipalities) and not in the Eleventh Schedule (panchayats)?",
    options: ["Minor irrigation", "Fisheries", "Fire services", "Khadi, village and cottage industries"],
    answer: 2,
    explanation: "Fire services is item 7 of the Twelfth Schedule added by the 74th Amendment. Minor irrigation, fisheries and khadi and village industries are all Eleventh Schedule subjects for panchayats."
  },
  {
    id: 3,
    question: "Which of the following is a Twelfth Schedule function of urban local bodies?",
    options: ["Land improvement and soil conservation", "Slum improvement and upgradation", "Animal husbandry, dairying and poultry", "Rural housing"],
    answer: 1,
    explanation: "Slum improvement and upgradation is item 10 of the Twelfth Schedule. Land improvement, animal husbandry and rural housing are Eleventh Schedule subjects meant for panchayats."
  },
  {
    id: 4,
    question: "Part IX of the Constitution, which deals with Panchayats, comprises which Articles?",
    options: ["Articles 243P to 243ZG", "Articles 243ZH to 243ZT", "Articles 244 to 244A", "Articles 243 to 243-O"],
    answer: 3,
    explanation: "Part IX (Articles 243–243O) was added by the 73rd Amendment. Part IXA (243P–243ZG) covers municipalities, Part IXB (243ZH–243ZT) covers co-operative societies, and Articles 244–244A deal with Scheduled and Tribal Areas."
  },
  {
    id: 5,
    question: "National Panchayati Raj Day is observed on 24 April because on that date in 1993",
    options: ["The 73rd Constitutional Amendment came into force", "Madhya Pradesh held its first panchayat elections", "The Balwant Rai Mehta Committee submitted its report", "The PESA Act was notified"],
    answer: 0,
    explanation: "The Constitution (73rd Amendment) Act 1992 came into force on 24 April 1993, giving constitutional status to Panchayati Raj. The 74th Amendment for municipalities came into force on 1 June 1993."
  },
  {
    id: 6,
    question: "Madhya Pradesh is credited with being the first State to hold panchayat elections under the new constitutional framework of the 73rd Amendment. In which year were they held?",
    options: ["1993", "1996", "2000", "1994"],
    answer: 3,
    explanation: "After enacting the MP Panchayat Raj Adhiniyam 1993, Madhya Pradesh conducted the first three-tier panchayat elections under the 73rd Amendment in 1994. This made MP a pioneer in implementing the amendment."
  },
  {
    id: 7,
    question: "The MP Panchayat Raj Adhiniyam 1993 was renamed the MP Panchayat Raj Avam Gram Swaraj Adhiniyam to give the Gram Sabha greater powers. In which year was the Gram Swaraj system introduced?",
    options: ["2001", "1996", "2005", "2011"],
    answer: 0,
    explanation: "Gram Swaraj was introduced in MP from 26 January 2001 by amending the 1993 Act, making the Gram Sabha the central body for village planning and oversight. The Act has since been known as the MP Panchayat Raj Avam Gram Swaraj Adhiniyam 1993."
  },
  {
    id: 8,
    question: "A Sarpanch in Vidisha district wants a block-level panchayat body to take up a road connecting several Gram Panchayats. In MP, this intermediate-tier body is the",
    options: ["Panchayat Samiti", "Mandal Panchayat", "Janpad Panchayat", "Kshetra Panchayat"],
    answer: 2,
    explanation: "MP's three tiers are Gram Panchayat (village), Janpad Panchayat (block) and Zila Panchayat (district). Panchayat Samiti is the term used in Rajasthan and Maharashtra, and Kshetra Panchayat is used in Uttar Pradesh."
  },
  {
    id: 9,
    question: "Under Article 243B, a State need not constitute Panchayats at the intermediate level if its population does not exceed",
    options: ["20 lakh", "10 lakh", "25 lakh", "50 lakh"],
    answer: 0,
    explanation: "Article 243B(2) exempts States with a population of up to 20 lakh from having the intermediate tier. Madhya Pradesh, with a much larger population, must have all three tiers."
  },
  {
    id: 10,
    question: "In the 2022 panchayat elections in Madhya Pradesh, how was the Adhyaksh of a Zila Panchayat chosen?",
    options: ["Indirectly, by the elected members of the Zila Panchayat from among themselves", "Directly, by all voters of the district", "By nomination of the State Government", "By the members of the Gram Sabhas of the district"],
    answer: 0,
    explanation: "In MP the Sarpanch is directly elected by voters of the Gram Panchayat, while the Janpad and Zila Panchayat Adhyakshas are elected indirectly by the elected members of those bodies. Article 243C leaves the mode of electing intermediate and district chairpersons to State law."
  },
  {
    id: 11,
    question: "The Constitution requires at least one-third of panchayat seats to be reserved for women. What share does Madhya Pradesh reserve for women in its panchayats?",
    options: ["One-third", "50 per cent", "40 per cent", "25 per cent"],
    answer: 1,
    explanation: "Article 243D(3) sets a minimum of one-third, and States may go higher. Madhya Pradesh amended its law to reserve 50 per cent of seats and chairperson posts in panchayats for women, including within the SC and ST quotas."
  },
  {
    id: 12,
    question: "A Janpad Panchayat area in Madhya Pradesh has 25 territorial constituencies, and Scheduled Tribes form 40 per cent of its population. Under Article 243D, about how many seats must be reserved for STs?",
    options: ["8", "13", "10", "5"],
    answer: 2,
    explanation: "Article 243D(1) reserves seats for SCs and STs in the same proportion as their share of the population of the panchayat area. 40% of 25 seats is 10 seats, and not less than one-third of those must in turn be reserved for ST women."
  },
  {
    id: 13,
    question: "What is the minimum age to contest an election to a panchayat under Article 243F?",
    options: ["21 years", "18 years", "25 years", "30 years"],
    answer: 0,
    explanation: "Article 243F(1)(a) says that no one shall be disqualified on the ground of being under 25 if he has attained 21 years, so 21 is the minimum age for panchayat membership. The voting age is 18."
  },
  {
    id: 14,
    question: "A Gram Panchayat in Madhya Pradesh is dissolved two years after it was constituted. Under Article 243E, which statement is correct?",
    options: ["A fresh election must be held within one year, and the new panchayat gets a full five-year term", "A fresh election must be completed within six months, and the new panchayat serves only the remainder of the five-year term", "The Collector administers the panchayat until the next general election", "A fresh election is optional at the discretion of the State Government"],
    answer: 1,
    explanation: "Article 243E(3) requires elections within six months of dissolution, and 243E(4) says the reconstituted panchayat continues only for the remainder of the original term. If less than six months of the term remain, a fresh election is not required."
  },
  {
    id: 15,
    question: "Under Article 243(b), the Gram Sabha is",
    options: ["The elected Panches and Sarpanch of a Gram Panchayat", "A committee of the Janpad Panchayat for each village", "The body of all adult residents, whether or not registered as voters", "The body of all persons registered in the electoral rolls relating to a village within the area of a panchayat"],
    answer: 3,
    explanation: "The Gram Sabha consists of all registered voters of the village, so it is a body of citizens and not of elected representatives. Its powers and functions are fixed by State law under Article 243A, which in MP is the Panchayat Raj Avam Gram Swaraj Adhiniyam."
  },
  {
    id: 16,
    question: "Under MP's Gram Swaraj system, which body is empowered to approve village development plans, identify beneficiaries of poverty alleviation schemes, and carry out social audit of works?",
    options: ["The Chief Executive Officer of the Janpad Panchayat", "The Gram Panchayat Secretary", "The Gram Sabha", "The standing committee of the Zila Panchayat"],
    answer: 2,
    explanation: "Under the MP Panchayat Raj Avam Gram Swaraj Adhiniyam, the Gram Sabha approves plans and projects, selects beneficiaries and verifies utilisation of funds. Social audit by the Gram Sabha is also mandated by schemes such as MGNREGA."
  },
  {
    id: 17,
    question: "In a Gram Panchayat of Madhya Pradesh, the Up-Sarpanch is",
    options: ["Directly elected by the voters of the Gram Panchayat", "Nominated by the Sarpanch", "Appointed by the Janpad Panchayat CEO", "Elected by the elected Panches from among themselves"],
    answer: 3,
    explanation: "In MP the Sarpanch is directly elected by voters, but the Up-Sarpanch is elected by the Panches from among themselves. The Up-Sarpanch acts in the Sarpanch's absence."
  },
  {
    id: 18,
    question: "Who is the executive head of a Zila Panchayat in Madhya Pradesh?",
    options: ["The Chief Executive Officer, usually an IAS officer", "The Collector, as ex-officio Secretary", "The Zila Panchayat Adhyaksh", "The Divisional Commissioner"],
    answer: 0,
    explanation: "Each Zila Panchayat has a Chief Executive Officer, generally an IAS officer, who executes its decisions and supervises staff and schemes. The Adhyaksh is the elected chairperson who presides over meetings."
  },
  {
    id: 19,
    question: "Under Article 243I, the State Finance Commission is constituted",
    options: ["By the President, every five years", "By the State Election Commission, before every panchayat election", "By the Vidhan Sabha, every three years", "By the Governor, every five years"],
    answer: 3,
    explanation: "Article 243I requires the Governor to constitute a Finance Commission within one year of the 73rd Amendment and thereafter at the expiry of every fifth year. Article 243Y extends the same Commission's role to municipalities."
  },
  {
    id: 20,
    question: "Under Article 243T, what is the minimum share of seats to be filled by direct election in a municipality that must be reserved for women, including women of SC and ST?",
    options: ["Not less than one-third", "Exactly one-half", "Not less than one-fourth", "In proportion to the female population"],
    answer: 0,
    explanation: "Article 243T(2) and (3) reserve not less than one-third of directly elected seats in every municipality for women, including within the SC and ST quotas, by rotation among wards. States may provide more, and offices of chairpersons can also be reserved under 243T(4)."
  },
  {
    id: 21,
    question: "Which of the following is a function of the State Finance Commission of Madhya Pradesh?",
    options: ["Recommending how Central taxes are divided between the Union and the States", "Fixing the salaries of the Chief Minister and ministers", "Recommending how State taxes, duties, tolls and fees are to be shared between the State and its panchayats and municipalities", "Auditing the accounts of Gram Panchayats each year"],
    answer: 2,
    explanation: "The SFC reviews the financial position of local bodies and recommends sharing of State tax proceeds, assignment of taxes to local bodies, and grants-in-aid from the State's Consolidated Fund. Division of Central taxes is the job of the Finance Commission under Article 280."
  },
  {
    id: 22,
    question: "The report of the State Finance Commission, with an explanatory memorandum on action taken, is laid before",
    options: ["Parliament, by the Union Finance Minister", "The Gram Sabhas, by the Collectors", "The State Legislature, by the Governor", "The High Court, by the Advocate General"],
    answer: 2,
    explanation: "Article 243I(4) requires the Governor to cause every SFC recommendation, together with an explanatory memorandum on the action taken, to be laid before the State Legislature. This keeps the government accountable for its treatment of local body finances."
  },
  {
    id: 23,
    question: "Under Article 243H, panchayats in Madhya Pradesh can levy and collect taxes",
    options: ["On any subject listed in the Eleventh Schedule without further authorisation", "Only with the prior approval of the Union Finance Ministry", "Only as authorised by a law made by the State Legislature", "Only after a resolution of the Zila Panchayat"],
    answer: 2,
    explanation: "Article 243H lets the State Legislature authorise panchayats to levy, collect and appropriate taxes, duties, tolls and fees, and assign them State-collected taxes. Panchayats have no independent constitutional taxing power."
  },
  {
    id: 24,
    question: "Under Article 243-O, a dispute about the election of a Sarpanch in Madhya Pradesh can be raised",
    options: ["Directly by a writ petition in the Supreme Court under Article 32", "Only through an election petition before an authority provided by State law", "By an appeal to the Governor", "By a reference from the Collector to the High Court"],
    answer: 1,
    explanation: "Article 243-O bars courts from interfering in panchayat electoral matters, such as delimitation and allotment of seats, and requires election disputes to be raised only by an election petition before the authority the State law provides. This prevents elections from being stalled by litigation."
  },
  {
    id: 25,
    question: "In 2022 the Supreme Court allowed OBC reservation in Madhya Pradesh's local body elections only after the State satisfied the 'triple test'. Which of the following correctly states that test?",
    options: ["A caste census, approval by the Governor, and reservation capped at 27 per cent", "A resolution of the Vidhan Sabha, consultation with the NCBC, and reservation capped at 33 per cent", "A dedicated commission, approval of the State Election Commission, and no upper limit on reservation", "A dedicated commission to study backwardness, proportion of reservation specified local body-wise, and total reservation not exceeding 50 per cent"],
    answer: 3,
    explanation: "The triple test, laid down in Vikas Kishanrao Gawali (2021) following K. Krishna Murthy (2010), requires a dedicated commission's empirical inquiry, reservation specified per local body as the commission recommends, and an overall SC/ST/OBC total of no more than 50%. MP's elections went ahead after the Court accepted the State commission's report."
  },
  {
    id: 26,
    question: "Which committee, appointed in 1957, recommended a three-tier system of 'democratic decentralisation' that became the basis of Panchayati Raj?",
    options: ["Ashok Mehta Committee", "Balwant Rai Mehta Committee", "L. M. Singhvi Committee", "G. V. K. Rao Committee"],
    answer: 1,
    explanation: "The Balwant Rai Mehta Committee (1957), set up to review the Community Development Programme, recommended a three-tier structure of village panchayat, block-level panchayat samiti and zila parishad. Rajasthan was the first to adopt it, at Nagaur on 2 October 1959."
  },
  {
    id: 27,
    question: "The Ashok Mehta Committee (1977) on Panchayati Raj is known for recommending",
    options: ["A two-tier system with Zila Parishad and Mandal Panchayat", "A three-tier system with the block as the main unit", "Constitutional status for Gram Sabhas only", "Abolition of the district-level body"],
    answer: 0,
    explanation: "The Ashok Mehta Committee proposed a two-tier system, with the Zila Parishad as the executive body and Mandal Panchayats covering groups of villages, and suggested political parties take part. Constitutional recognition was later urged by the L. M. Singhvi Committee (1986)."
  },
  {
    id: 28,
    question: "Which committee, in 1986, recommended that Panchayati Raj institutions be given constitutional recognition and protection?",
    options: ["L. M. Singhvi Committee", "Balwant Rai Mehta Committee", "Ashok Mehta Committee", "Santhanam Committee"],
    answer: 0,
    explanation: "The L. M. Singhvi Committee on revitalising Panchayati Raj recommended constitutional status, protection and regular elections for panchayats. This idea led to the 64th Amendment Bill (1989, defeated) and finally the 73rd Amendment."
  },
  {
    id: 29,
    question: "Before the 73rd Amendment, the constitutional basis for village panchayats was",
    options: ["Article 19(1)(c), a Fundamental Right", "Article 243, in Part IX", "Article 40, a Directive Principle of State Policy", "Article 51A, a Fundamental Duty"],
    answer: 2,
    explanation: "Article 40 directs the State to organise village panchayats and give them powers to function as units of self-government, but as a Directive Principle it is not enforceable. Part IX was added only in 1992."
  },
  {
    id: 30,
    question: "Nagar Parishads in Madhya Pradesh are governed by which law?",
    options: ["MP Municipal Corporation Act 1956", "MP Municipalities Act 1961", "MP Panchayat Raj Avam Gram Swaraj Adhiniyam 1993", "MP Nagar Tatha Gram Nivesh Adhiniyam 1973"],
    answer: 1,
    explanation: "The MP Municipalities Act 1961 governs Municipal Councils (Nagar Palika Parishads) and Nagar Parishads. The MP Municipal Corporation Act 1956 governs Municipal Corporations, and the 1973 Nagar Tatha Gram Nivesh Adhiniyam deals with town and country planning."
  },
  {
    id: 31,
    question: "Under Article 243Q, a Nagar Parishad of Madhya Pradesh corresponds to which category of urban local body?",
    options: ["Municipal Council, for a smaller urban area", "Municipal Corporation, for a larger urban area", "Nagar Panchayat, for a transitional area", "Industrial township"],
    answer: 2,
    explanation: "Article 243Q provides for a Nagar Panchayat for an area in transition from rural to urban, a Municipal Council for a smaller urban area and a Municipal Corporation for a larger urban area. MP calls its Nagar Panchayats 'Nagar Parishads'."
  },
  {
    id: 32,
    question: "How many Municipal Corporations were there in Madhya Pradesh at the time of the 2022 urban local body elections?",
    options: ["14", "12", "18", "16"],
    answer: 3,
    explanation: "MP has 16 Municipal Corporations, including Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar, Rewa, Satna, Katni, Singrauli, Burhanpur, Khandwa, Ratlam, Dewas, Morena and Chhindwara. All 16 elected Mayors in July 2022."
  },
  {
    id: 33,
    question: "In the 2022 urban local body elections in Madhya Pradesh, Mayors of Municipal Corporations were",
    options: ["Elected by the corporators from among themselves", "Nominated by the State Government", "Directly elected by the voters of the city", "Elected by the District Planning Committee"],
    answer: 2,
    explanation: "MP restored direct election of Mayors for the 2022 polls, while Presidents of Municipal Councils and Nagar Parishads were elected indirectly by councillors. Article 243R leaves the mode of election of chairpersons to State law."
  },
  {
    id: 34,
    question: "The executive head of a Municipal Corporation in Madhya Pradesh, such as Indore Municipal Corporation, is the",
    options: ["Mayor", "Chairperson of the Municipal Council", "Municipal Commissioner appointed by the State Government", "Collector of the district"],
    answer: 2,
    explanation: "The Mayor heads the elected wing and presides over the Mayor-in-Council, but executive authority rests with the Municipal Commissioner appointed by the State government, usually an IAS officer for large corporations. He carries out the corporation's resolutions and manages its staff."
  },
  {
    id: 35,
    question: "Under Article 243S, Wards Committees must be constituted in every municipality with a population of",
    options: ["Three lakh or more", "One lakh or more", "Five lakh or more", "Ten lakh or more"],
    answer: 0,
    explanation: "Article 243S requires Wards Committees, consisting of one or more wards, in all municipalities with a population of three lakh or more. Cities such as Bhopal, Indore and Jabalpur therefore have Wards Committees."
  },
  {
    id: 36,
    question: "Under the 74th Amendment, a Metropolitan Planning Committee is to be constituted for every metropolitan area. A metropolitan area means one with a population of",
    options: ["Five lakh or more", "Ten lakh or more", "Three lakh or more", "Twenty lakh or more"],
    answer: 1,
    explanation: "Article 243P(c) defines a metropolitan area as one with a population of ten lakh or more, and Article 243ZE requires a Metropolitan Planning Committee to prepare its draft development plan. Indore and Bhopal both exceed this threshold."
  },
  {
    id: 37,
    question: "Under Article 243ZD, at least what proportion of the members of a District Planning Committee must be elected by and from among the elected members of the district panchayat and municipalities?",
    options: ["Two-thirds", "Three-fourths", "Four-fifths", "One-half"],
    answer: 2,
    explanation: "Article 243ZD(2)(b) requires not less than four-fifths of DPC members to be elected by and from the elected members of district-level panchayat and municipalities, in proportion to the rural and urban population. The DPC consolidates panchayat and municipal plans into a draft district plan."
  },
  {
    id: 38,
    question: "The Collector in Madhya Pradesh derives powers as the head of the district's revenue administration chiefly from the",
    options: ["MP Municipalities Act 1961", "MP Land Revenue Code 1959", "Bharatiya Nagarik Suraksha Sanhita 2023", "MP Panchayat Raj Avam Gram Swaraj Adhiniyam 1993"],
    answer: 1,
    explanation: "The MP Land Revenue Code 1959 sets up the revenue hierarchy and makes the Collector responsible for land revenue, land records and related disputes. His powers as District Magistrate come from the BNSS (earlier CrPC), which is a separate role."
  },
  {
    id: 39,
    question: "The Board of Revenue, the apex revenue court of Madhya Pradesh under the Land Revenue Code, is located at",
    options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"],
    answer: 3,
    explanation: "The Board of Revenue (Rajasv Mandal) sits at Gwalior and hears appeals and revisions against orders of Commissioners and Collectors. Jabalpur has the High Court and Indore has the MPPSC."
  },
  {
    id: 40,
    question: "Which of the following arranges revenue officers of Madhya Pradesh in ascending order of rank?",
    options: ["Revenue Inspector → Patwari → Tehsildar → Collector → Sub-Divisional Officer", "Patwari → Tehsildar → Revenue Inspector → Sub-Divisional Officer → Collector", "Patwari → Revenue Inspector → Sub-Divisional Officer → Tehsildar → Collector", "Patwari → Revenue Inspector → Tehsildar → Sub-Divisional Officer → Collector"],
    answer: 3,
    explanation: "At the village level the Patwari keeps land records, supervised by the Revenue Inspector. Next come the Naib Tehsildar and Tehsildar for the tehsil, then the SDO (Revenue) for the sub-division and the Collector for the district, above whom are the Commissioner and the Board of Revenue."
  },
  {
    id: 41,
    question: "The land record that lists every survey number of a village with its area, holder, land use and crops sown is called the",
    options: ["Village map (Naksha)", "Nistar Patrak", "Wajib-ul-arz", "Khasra"],
    answer: 3,
    explanation: "The Khasra is the field book prepared and updated by the Patwari for each survey number, recording area, holder and crops. The Nistar Patrak records villagers' rights over government land for grazing and fuel, and the Wajib-ul-arz records customary rights such as rights in water and fisheries."
  },
  {
    id: 42,
    question: "After their father's death, his heirs in a village of Sehore district want their names entered in the land records. Under the MP Land Revenue Code, the mutation (namantaran) is decided by the",
    options: ["Tehsildar", "Collector", "Patwari", "Civil Judge"],
    answer: 0,
    explanation: "Mutation of land records on inheritance, sale or other transfer is decided by the Tehsildar, after the Patwari records and reports the transfer. Disputes about title as such go to civil courts, but mutation itself is a revenue matter."
  },
  {
    id: 43,
    question: "Under the MP Land Revenue Code 1959, an appeal against an order passed by a Tehsildar ordinarily lies to the",
    options: ["Collector", "Sub-Divisional Officer (Revenue)", "Board of Revenue", "Divisional Commissioner"],
    answer: 1,
    explanation: "The Code provides a graded appeal system: orders of the Tehsildar go to the SDO, orders of the SDO to the Collector, and orders of the Collector to the Commissioner. The Board of Revenue is the revisional authority at the top."
  },
  {
    id: 44,
    question: "During a general election, the Collector of a district in Madhya Pradesh acts as the",
    options: ["Chief Electoral Officer", "Observer appointed by the Election Commission", "Returning Officer for every Assembly constituency", "District Election Officer"],
    answer: 3,
    explanation: "Under the Representation of the People Act 1950, the Collector is designated District Election Officer and coordinates preparation of electoral rolls and conduct of polls in the district. The Chief Electoral Officer works at State level, and Returning Officers are appointed for each constituency."
  },
  {
    id: 45,
    question: "Under the Disaster Management Act 2005, who chairs the District Disaster Management Authority in a Madhya Pradesh district?",
    options: ["The Superintendent of Police", "The Collector", "The Zila Panchayat Adhyaksh", "The Divisional Commissioner"],
    answer: 1,
    explanation: "Section 25 of the DM Act makes the Collector (District Magistrate) the chairperson of the DDMA, with the elected head of the district panchayat as co-chairperson. The DDMA prepares the district disaster management plan and coordinates response."
  },
  {
    id: 46,
    question: "Madhya Pradesh was the first State in India to enact a law guaranteeing delivery of notified public services within a fixed time. Which law was it?",
    options: ["MP Jan Suraksha Adhiniyam 2010", "MP Suchna ka Adhikar Adhiniyam 2005", "MP Lok Sevaon ke Pradan ki Guarantee Adhiniyam 2010", "MP Nagrik Adhikar Patra Adhiniyam 2012"],
    answer: 2,
    explanation: "The MP Public Services Delivery Guarantee Act came into force in 2010 and specifies time limits for services such as caste, income and domicile certificates. Many States later passed similar Right to Services laws."
  },
  {
    id: 47,
    question: "An applicant in Madhya Pradesh does not receive a notified service, such as a domicile certificate, within the time fixed under the Lok Seva Guarantee Act. What remedy does the Act provide?",
    options: ["An appeal to the appellate officer, who can impose a personal penalty on the defaulting designated officer", "A writ petition in the High Court as the only remedy", "A complaint to the State Election Commission", "A suit for damages in the civil court against the State"],
    answer: 0,
    explanation: "Under the Act the applicant can appeal to the first and second appellate officers, who can direct the service to be delivered and fine the designated officer personally for unjustified delay. This creates personal accountability for timely delivery."
  },
  {
    id: 48,
    question: "The Chief Minister's Helpline in Madhya Pradesh, for registering public grievances against government departments, can be reached on which number?",
    options: ["100", "181", "1076", "112"],
    answer: 1,
    explanation: "MP's CM Helpline is reached on 181, and grievances are escalated through levels of officers until resolved. 112 is the single emergency response number, and 1076 is used by CM helplines in some other States."
  },
  {
    id: 49,
    question: "Which cities of Madhya Pradesh were selected under the Smart Cities Mission?",
    options: ["Bhopal, Indore, Jabalpur, Gwalior, Rewa, Ratlam and Dewas", "Bhopal, Indore, Ujjain, Sagar, Katni, Khandwa and Burhanpur", "Indore, Gwalior, Jabalpur, Satna, Singrauli, Morena and Chhindwara", "Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar and Satna"],
    answer: 3,
    explanation: "Seven cities of MP, namely Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar and Satna, were chosen across the rounds of the Smart Cities Mission launched in 2015. Each has a special purpose vehicle to carry out area-based and pan-city projects."
  },
  {
    id: 50,
    question: "Indore was first ranked the cleanest city in India in the Swachh Survekshan of which year, beginning its long run at the top?",
    options: ["2017", "2016", "2018", "2015"],
    answer: 0,
    explanation: "Indore topped Swachh Survekshan for the first time in 2017 and kept the top spot in every following edition through 2023, when it shared the title with Surat. Mysuru had been ranked cleanest in 2016. Indore's success came from door-to-door segregated collection run by its Municipal Corporation."
  }
];

export default questions;

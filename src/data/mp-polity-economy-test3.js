const questions = [
  {
    id: 1,
    question: "Superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all panchayat elections is vested in a State Election Commission by which Article?",
    options: ["Article 243K", "Article 324", "Article 243I", "Article 243G"],
    answer: 0,
    explanation: "Article 243K vests superintendence, direction and control of electoral rolls and elections to panchayats in a State Election Commission. Article 243ZA extends its role to municipalities. Article 324 creates the Election Commission of India."
  },
  {
    id: 2,
    question: "The State Election Commissioner of Madhya Pradesh is appointed by the Governor. He can be removed from office",
    options: ["By the Governor on the advice of the Council of Ministers", "By the Chief Election Commissioner of India", "By a resolution of the Vidhan Sabha passed by simple majority", "Only in the manner and on the grounds on which a High Court judge is removed"],
    answer: 3,
    explanation: "Article 243K(2) gives the State Election Commissioner the same protection as a High Court judge: removal only by the President on an address of both Houses of Parliament for proved misbehaviour or incapacity. His conditions of service also cannot be varied to his disadvantage after appointment."
  },
  {
    id: 3,
    question: "A by-election is due to a Vidhan Sabha constituency in Madhya Pradesh after the sitting MLA's death. Which body conducts it?",
    options: ["The State Election Commission of Madhya Pradesh", "The Governor through the Collector", "The Speaker of the Vidhan Sabha", "The Election Commission of India"],
    answer: 3,
    explanation: "Elections to Parliament, State Legislatures and the offices of President and Vice-President are conducted by the Election Commission of India under Article 324, through the State's Chief Electoral Officer. The State Election Commission handles only panchayat and municipal elections."
  },
  {
    id: 4,
    question: "Elections to the Bhopal Municipal Corporation are conducted by",
    options: ["The Election Commission of India", "The State Election Commission of Madhya Pradesh", "The Urban Development and Housing Department of MP", "The Collector of Bhopal acting under the Municipal Corporation Act alone"],
    answer: 1,
    explanation: "Article 243ZA vests the conduct of municipal elections in the State Election Commission referred to in Article 243K. In the district, the Collector acts as district election officer for local body elections under the SEC's supervision and control."
  },
  {
    id: 5,
    question: "Under Section 15 of the Right to Information Act 2005, the Madhya Pradesh State Information Commission consists of",
    options: ["A State Chief Information Commissioner and up to ten State Information Commissioners", "A Chairman and up to five members", "A State Chief Information Commissioner and up to three members", "A retired High Court judge and two members"],
    answer: 0,
    explanation: "Section 15(2) provides for a State Chief Information Commissioner and as many State Information Commissioners as needed, not exceeding ten. They are appointed by the Governor on the recommendation of a selection committee."
  },
  {
    id: 6,
    question: "The selection committee that recommends the State Chief Information Commissioner of Madhya Pradesh to the Governor is composed of",
    options: ["The Chief Minister, the Chief Justice of the High Court, and the Speaker", "The Governor, the Chief Minister, and the Chief Secretary", "The Chief Minister, the Leader of Opposition, and the Chief Justice of the High Court", "The Chief Minister, the Leader of Opposition in the Vidhan Sabha, and a Cabinet Minister nominated by the Chief Minister"],
    answer: 3,
    explanation: "Section 15(3) of the RTI Act prescribes this three-member committee. If there is no recognised Leader of Opposition, the leader of the single largest opposition group in the Assembly is treated as such."
  },
  {
    id: 7,
    question: "A person's son has been detained, and the family files an RTI application with a police office in Madhya Pradesh seeking information concerning his life and liberty. Within what time must the information be provided?",
    options: ["Within 30 days of receipt of the request", "Within 7 days of receipt of the request", "Within 24 hours of the detention", "Within 48 hours of receipt of the request"],
    answer: 3,
    explanation: "The proviso to Section 7(1) requires information concerning the life or liberty of a person to be provided within 48 hours. The normal limit is 30 days, and 35 days if the application was routed through an Assistant PIO."
  },
  {
    id: 8,
    question: "Under the RTI Act 2005, a second appeal against the decision of the first appellate authority in a Madhya Pradesh department lies to the State Information Commission within",
    options: ["30 days", "90 days", "60 days", "45 days"],
    answer: 1,
    explanation: "Section 19(1) allows a first appeal within 30 days to an officer senior to the PIO, and Section 19(3) allows a second appeal to the Information Commission within 90 days of the date the decision should have been made or was received. The Commission may admit a late appeal for sufficient cause."
  },
  {
    id: 9,
    question: "The State Information Commission finds that a Public Information Officer delayed information without reasonable cause for 60 days. Under Section 20 of the RTI Act, what penalty can it impose for this delay at the full daily rate prescribed?",
    options: ["₹25,000", "₹6,000", "₹15,000", "₹30,000"],
    answer: 2,
    explanation: "Section 20(1) provides a penalty of ₹250 per day until the information is furnished, subject to a ceiling of ₹25,000. For 60 days, 60 × ₹250 = ₹15,000, which is within the ceiling. The penalty is imposed on the PIO personally."
  },
  {
    id: 10,
    question: "During an ongoing murder investigation, a person files an RTI application seeking a copy of the State FSL's DNA report on the exhibits. The PIO may refuse it if disclosure would",
    options: ["Impede the process of investigation or prosecution of offenders, under Section 8(1)(h)", "Affect the trade secrets of a third party, under Section 8(1)(d)", "Breach the privilege of Parliament or a State Legislature, under Section 8(1)(c)", "Endanger the sovereignty and integrity of India, under Section 8(1)(a)"],
    answer: 0,
    explanation: "Section 8(1)(h) exempts information that would impede investigation, apprehension or prosecution of offenders. The PIO must show how disclosure would impede the process; the exemption cannot be claimed in a blanket way, and the report would still reach the accused through the court."
  },
  {
    id: 11,
    question: "Intelligence and security organisations listed in the Second Schedule are excluded from the RTI Act by Section 24. Even so, they must provide information relating to",
    options: ["Allegations of corruption and human rights violations", "Their annual budget and staff strength", "Their recruitment rules and service conditions", "Any matter more than twenty years old"],
    answer: 0,
    explanation: "The proviso to Section 24(1) says the exclusion does not cover information about allegations of corruption and human rights violations. Information on human rights violations is provided only with the approval of the Information Commission, within 45 days."
  },
  {
    id: 12,
    question: "Under the RTI Act, who among the following is exempted from paying the application fee?",
    options: ["A person below the poverty line", "A senior citizen above 60 years", "A government employee seeking service records", "A journalist accredited with the State government"],
    answer: 0,
    explanation: "Section 7(5) exempts persons below the poverty line, as determined by the appropriate government, from paying fees. Other categories such as senior citizens or journalists get no statutory exemption."
  },
  {
    id: 13,
    question: "The Right to Information (Amendment) Act 2019 changed which aspect of State Information Commissioners?",
    options: ["Their appointment is now made by the President", "Their term and salary are now as prescribed by the Central Government", "Their number was raised to fifteen", "Their selection committee now includes the Chief Justice of the High Court"],
    answer: 1,
    explanation: "Before 2019, the RTI Act fixed a five-year term and linked salaries to those of Election Commissioners or the Chief Secretary. The 2019 amendment left term, salary and allowances to be prescribed by the Central Government by rules, which critics said weakened their independence."
  },
  {
    id: 14,
    question: "Under the Constitution, the National Commission for Scheduled Castes and the National Commission for Scheduled Tribes are created respectively by",
    options: ["Article 338 and Article 338A", "Article 340 and Article 338", "Article 338A and Article 338B", "Article 341 and Article 342"],
    answer: 0,
    explanation: "Article 338 provides for the NCSC, and Article 338A, inserted by the 89th Amendment (2003), created a separate NCST. Article 338B provides for the NCBC, Article 340 for a Backward Classes Commission of inquiry, and Articles 341–342 for notification of SC and ST lists."
  },
  {
    id: 15,
    question: "Constitutional status was conferred on the National Commission for Backward Classes by which amendment?",
    options: ["103rd Amendment, 2019", "102nd Amendment, 2018", "89th Amendment, 2003", "105th Amendment, 2021"],
    answer: 1,
    explanation: "The 102nd Amendment inserted Article 338B giving the NCBC constitutional status, along with Article 342A. The 103rd Amendment introduced EWS reservation, and the 105th restored the States' power to identify backward classes."
  },
  {
    id: 16,
    question: "After the Supreme Court's Maratha reservation judgment (2021), which amendment restored the power of States such as Madhya Pradesh to prepare their own lists of socially and educationally backward classes?",
    options: ["102nd Amendment, 2018", "104th Amendment, 2019", "105th Amendment, 2021", "106th Amendment, 2023"],
    answer: 2,
    explanation: "In Jaishri Laxmanrao Patil (2021) the Court read the 102nd Amendment as removing States' power to identify SEBCs. The 105th Amendment amended Article 342A to restore that power, so State Backward Classes Commissions again advise on State lists. The 106th Amendment provides for women's reservation in legislatures."
  },
  {
    id: 17,
    question: "Under Article 338(9), on what matters must the Union and every State Government, including Madhya Pradesh, consult the National Commission for Scheduled Castes?",
    options: ["Only on bills amending the SC list", "All major policy matters affecting Scheduled Castes", "Only on reservation in promotions", "Only on cases under the SC/ST (Prevention of Atrocities) Act"],
    answer: 1,
    explanation: "Article 338(9) requires the Union and every State Government to consult the Commission on all major policy matters affecting SCs. The Commission also has the powers of a civil court when investigating complaints, under Article 338(8)."
  },
  {
    id: 18,
    question: "The Madhya Pradesh State Commission for Women differs from the National Commission for Women in that it",
    options: ["Is created by an Act of the State Legislature, whereas the NCW is created by an Act of Parliament", "Is a constitutional body, whereas the NCW is statutory", "Is created by executive order, whereas the NCW is constitutional", "Has powers of a criminal court, whereas the NCW has none"],
    answer: 0,
    explanation: "Both are statutory bodies: the NCW was set up in 1992 under the National Commission for Women Act 1990, and the MP State Commission for Women under a State Act. Neither has constitutional status like the NCSC, NCST or NCBC."
  },
  {
    id: 19,
    question: "The Madhya Pradesh Public Service Commission has its headquarters at",
    options: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    answer: 1,
    explanation: "MPPSC is located at Residency Area, Indore. Bhopal is the capital, Jabalpur has the principal seat of the High Court, and Gwalior has the Board of Revenue, so these make plausible distractors."
  },
  {
    id: 20,
    question: "The Chairman and members of the Madhya Pradesh Public Service Commission are appointed by",
    options: ["The President", "The Governor", "The Chief Minister", "The Chairman of UPSC"],
    answer: 1,
    explanation: "Article 316(1) provides that members of a State Public Service Commission are appointed by the Governor. Article 318 lets the Governor decide the number of members and their conditions of service."
  },
  {
    id: 21,
    question: "A member of the Madhya Pradesh Public Service Commission holds office for",
    options: ["Five years or until the age of 65, whichever is earlier", "Six years or until the age of 65, whichever is earlier", "Five years or until the age of 62, whichever is earlier", "Six years or until the age of 62, whichever is earlier"],
    answer: 3,
    explanation: "Article 316(2) fixes a term of six years or until the age of 62 for State PSC members. UPSC members serve six years or until the age of 65."
  },
  {
    id: 22,
    question: "A complaint of misbehaviour is made against a member of the MPPSC. Which statement correctly describes the procedure for removal under Article 317?",
    options: ["The Governor can remove him after an inquiry by the High Court", "Only the President can remove him after a Supreme Court inquiry, though the Governor may suspend him pending the inquiry", "The Vidhan Sabha can remove him by a two-thirds majority", "The Chief Minister can remove him on the report of the Lokayukta"],
    answer: 1,
    explanation: "Under Article 317(1) a State PSC member can be removed for misbehaviour only by the President after the Supreme Court, on a reference, reports that he ought to be removed. Article 317(2) lets the Governor suspend the member while the reference is pending. Though appointed by the Governor, he cannot be removed by the Governor."
  },
  {
    id: 23,
    question: "Under Article 320(4), the Madhya Pradesh Public Service Commission need not be consulted on",
    options: ["Methods of recruitment to civil services of the State", "Principles for promotions and transfers between services", "Disciplinary matters affecting a civil servant of the State", "The manner in which reservation of appointments for backward classes is to be provided"],
    answer: 3,
    explanation: "Article 320(3) lists matters on which the PSC shall be consulted, including recruitment methods, promotions and disciplinary matters. Article 320(4) expressly excludes reservation of posts for backward classes under Article 16(4) and claims of SCs and STs under Article 335."
  },
  {
    id: 24,
    question: "The annual report of the Madhya Pradesh Public Service Commission is presented to the Governor, who lays it before the Legislature along with",
    options: ["The comments of the Union Public Service Commission", "A memorandum explaining cases where the Commission's advice was not accepted, with reasons", "An audit certificate of the Comptroller and Auditor General", "The opinion of the Advocate General on each case"],
    answer: 1,
    explanation: "Article 323(2) requires the Governor to lay the report before the Legislature with a memorandum on cases where the Commission's advice was not accepted and the reasons. This makes the government answerable to the Legislature for overruling the PSC."
  },
  {
    id: 25,
    question: "The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act was enacted in",
    options: ["1955", "1976", "1989", "1995"],
    answer: 2,
    explanation: "The SC/ST (Prevention of Atrocities) Act was enacted in 1989 and came into force on 30 January 1990. The Protection of Civil Rights Act was renamed from the Untouchability (Offences) Act 1955 in 1976, and the Rules under the Atrocities Act were framed in 1995."
  },
  {
    id: 26,
    question: "Under Rule 7 of the SC/ST (Prevention of Atrocities) Rules 1995, an offence under the Act must be investigated by a police officer not below the rank of",
    options: ["Deputy Superintendent of Police", "Sub-Inspector", "Inspector", "Superintendent of Police"],
    answer: 0,
    explanation: "Rule 7(1) requires investigation by an officer not below the rank of DSP, appointed by the State government, DGP or SP. This was meant to ensure a senior and more accountable officer handles such cases."
  },
  {
    id: 27,
    question: "Under the SC/ST (Prevention of Atrocities) Rules as amended in 2016, investigation of an atrocity case and filing of the charge-sheet must be completed within",
    options: ["30 days", "90 days", "60 days", "120 days"],
    answer: 2,
    explanation: "The 2016 amendment to Rule 7(2) requires the investigating officer to complete investigation and file the charge-sheet within 60 days, and explain any delay in writing. Rule 7(1) also requires the investigating officer to be of at least DSP rank."
  },
  {
    id: 28,
    question: "A person accused of an offence under the SC/ST (Prevention of Atrocities) Act applies for anticipatory bail. Under Section 18 of the Act,",
    options: ["Anticipatory bail can be granted only by the High Court", "The provision for anticipatory bail does not apply to such offences", "Anticipatory bail is available after the charge-sheet is filed", "Anticipatory bail is available if the victim consents"],
    answer: 1,
    explanation: "Section 18 excludes the anticipatory bail provision (Section 438 CrPC, now Section 482 BNSS) for persons accused of offences under the Act. In Prithvi Raj Chauhan (2020) the Supreme Court upheld this, while noting courts may still grant relief where no prima facie case is made out."
  },
  {
    id: 29,
    question: "Section 18A was inserted into the SC/ST (Prevention of Atrocities) Act in 2018 to undo the effect of which Supreme Court judgment?",
    options: ["Prithvi Raj Chauhan v. Union of India", "Indra Sawhney v. Union of India", "Subhash Kashinath Mahajan v. State of Maharashtra", "Jarnail Singh v. Lachhmi Narain Gupta"],
    answer: 2,
    explanation: "In Subhash Kashinath Mahajan (March 2018), the Court required a preliminary enquiry and approval before arrest. Section 18A, added in August 2018, provides that no preliminary enquiry or prior approval is needed for registering an FIR or arresting the accused. Its validity was upheld in Prithvi Raj Chauhan (2020)."
  },
  {
    id: 30,
    question: "Under Section 14 of the SC/ST (Prevention of Atrocities) Act as amended in 2015, an Exclusive Special Court shall, as far as possible, complete the trial within",
    options: ["Six months from the date of the FIR", "Two months from the date of filing of the charge-sheet", "One year from the date of cognisance", "Thirty days from the framing of charges"],
    answer: 1,
    explanation: "The 2015 amendment required Exclusive Special Courts in districts and provided that trials should be completed within two months of the charge-sheet as far as possible, with day-to-day proceedings. Exclusive Special Public Prosecutors are also appointed for these courts."
  },
  {
    id: 31,
    question: "A Station House Officer in Madhya Pradesh, who is not a member of an SC or ST, wilfully refuses to register an FIR on a complaint of atrocity by a Scheduled Caste victim. He is liable under which Section of the Atrocities Act?",
    options: ["Section 3, as a principal offender", "Section 14A, for obstructing appeal", "Section 21, for failing to implement the Act", "Section 4, for wilful neglect of duties"],
    answer: 3,
    explanation: "Section 4 punishes a non-SC/ST public servant who wilfully neglects duties under the Act, including registering a complaint or FIR, with imprisonment of six months to one year. Section 21 places a general duty on the government to implement the Act."
  },
  {
    id: 32,
    question: "The Panchayats (Extension to the Scheduled Areas) Act 1996 was based on the recommendations of a committee chaired by",
    options: ["Balwant Rai Mehta", "L. M. Singhvi", "Virginius Xaxa", "Dilip Singh Bhuria"],
    answer: 3,
    explanation: "The Bhuria Committee (1994–95), chaired by Dilip Singh Bhuria, an MP from Jhabua, recommended extending Panchayati Raj to Fifth Schedule areas with tribal safeguards. The Xaxa Committee (2014) studied the socio-economic status of tribal communities."
  },
  {
    id: 33,
    question: "PESA 1996 extends the provisions of Part IX of the Constitution, with modifications, to",
    options: ["Sixth Schedule tribal areas of the North-East", "All districts with a tribal population above 50 per cent", "All forest villages notified under the Indian Forest Act", "Fifth Schedule Areas"],
    answer: 3,
    explanation: "Article 243M(4)(b) allows Parliament to extend Part IX to Scheduled Areas, and PESA does so for the Fifth Schedule Areas of ten States including Madhya Pradesh. Sixth Schedule areas in Assam, Meghalaya, Tripura and Mizoram have Autonomous District Councils instead."
  },
  {
    id: 34,
    question: "Under Section 4(g) of PESA, what reservation applies in panchayats in Scheduled Areas?",
    options: ["STs get seats in proportion to their population, with no reservation for chairpersons", "STs get one-third of the seats and chairperson posts by rotation", "STs get not less than half of the seats, and all chairperson posts at every level are reserved for STs", "STs get all seats but chairpersons are elected without reservation"],
    answer: 2,
    explanation: "Section 4(g) says reservation for STs shall not be less than one-half of total seats, and all seats of Chairpersons at all levels shall be reserved for STs. This goes beyond the population-proportion rule of Article 243D."
  },
  {
    id: 35,
    question: "The State plans to acquire land in a Scheduled Area village of Mandla district for a development project. Under Section 4(i) of PESA,",
    options: ["The Gram Sabha or the Panchayat at the appropriate level must be consulted before acquisition", "Only the Tribes Advisory Council must be consulted", "Only the Collector's approval is required", "Consultation is required only if more than 100 families are displaced"],
    answer: 0,
    explanation: "Section 4(i) requires the Gram Sabha or Panchayat at the appropriate level to be consulted before land is acquired in Scheduled Areas for development projects and before resettling affected persons. Actual planning and implementation of projects is coordinated at State level."
  },
  {
    id: 36,
    question: "Under Section 4(m) of PESA, panchayats and Gram Sabhas in Scheduled Areas are endowed with",
    options: ["Ownership of major minerals", "Control over reserved forests", "Ownership of minor forest produce", "Power to levy income tax"],
    answer: 2,
    explanation: "Section 4(m)(ii) gives ownership of minor forest produce (such as tendu leaves, mahua and sal seeds) to the Gram Sabha or Panchayats at the appropriate level. Other powers include preventing land alienation, managing village markets and controlling money lending."
  },
  {
    id: 37,
    question: "Under PESA, the recommendation of the Gram Sabha or Panchayat is mandatory before",
    options: ["Granting a lease for major minerals such as coal", "Granting a prospecting licence or mining lease for minor minerals", "Declaring a forest a Tiger Reserve", "Notifying a new railway line"],
    answer: 1,
    explanation: "Section 4(k) makes the prior recommendation of the Gram Sabha or Panchayat mandatory for prospecting licences or mining leases for minor minerals in Scheduled Areas, and Section 4(l) does the same for auction concessions. Major minerals are governed by central law."
  },
  {
    id: 38,
    question: "The Madhya Pradesh PESA Rules 2022 were launched on 15 November 2022, Janjatiya Gaurav Divas, at which place?",
    options: ["Jhabua", "Shahdol", "Mandla", "Bhopal"],
    answer: 1,
    explanation: "President Droupadi Murmu launched the MP PESA Rules at Shahdol on 15 November 2022, the birth anniversary of Birsa Munda, celebrated as Janjatiya Gaurav Divas. The rules give practical shape to Gram Sabha powers under PESA in MP's Scheduled Areas."
  },
  {
    id: 39,
    question: "Under the Madhya Pradesh PESA Rules 2022, a Gram Sabha in a Scheduled Area may constitute a committee to settle minor local disputes through traditional methods. This committee is the",
    options: ["Van Suraksha Samiti", "Gram Nyayalaya", "Lok Adalat", "Shanti evam Vivad Nivaran Samiti"],
    answer: 3,
    explanation: "The MP PESA Rules provide for a peace and dispute resolution committee (Shanti evam Vivad Nivaran Samiti) of the Gram Sabha to resolve minor disputes in keeping with customary practices. Gram Nyayalayas and Lok Adalats are courts or forums under separate central laws."
  },
  {
    id: 40,
    question: "A group of young men from a Scheduled Area village of Alirajpur district plans to migrate to Gujarat for seasonal work. Under the MP PESA Rules 2022, they are expected to",
    options: ["Inform the Gram Sabha of where they will work", "Obtain a permit from the Collector", "Register with the Gujarat Labour Department before leaving", "Inform the Tribes Advisory Council"],
    answer: 0,
    explanation: "Under the MP PESA Rules, a person leaving the village for work must first inform the Gram Sabha of the place and address of the work, and anyone recruiting villagers for work outside must also inform it. This lets the Gram Sabha keep track of migrant labourers and protect them from bonded labour and exploitation."
  },
  {
    id: 41,
    question: "The Environment (Protection) Act 1986 was enacted by Parliament mainly in the wake of",
    options: ["The Chernobyl nuclear accident", "The Stockholm Conference of 1972", "The Bhopal gas tragedy of December 1984", "The Narmada Bachao Andolan"],
    answer: 2,
    explanation: "The leak of methyl isocyanate from Union Carbide's Bhopal plant on the night of 2–3 December 1984 exposed gaps in environmental law. Parliament passed the EP Act 1986 under Article 253 to implement decisions of the 1972 Stockholm Conference, but the Bhopal disaster was the immediate trigger."
  },
  {
    id: 42,
    question: "A distillery near the Narmada in Madhya Pradesh repeatedly discharges effluents beyond prescribed standards. Under Section 5 of the Environment (Protection) Act 1986, the competent authority may",
    options: ["Direct closure of the unit or stoppage of its electricity and water supply", "Only impose a fine through the Collector", "Only refer the matter to the National Green Tribunal", "Cancel the company's registration under the Companies Act"],
    answer: 0,
    explanation: "Section 5 empowers the Central Government (and authorities it delegates to) to issue written directions, including closure, prohibition or regulation of an industry, operation or process, and stoppage or regulation of electricity, water or other services. Such directions are binding."
  },
  {
    id: 43,
    question: "Under Section 19 of the Environment (Protection) Act 1986, a court may take cognisance of an offence on a complaint by a private citizen if he has given notice to the Central Government or authorised officer of at least",
    options: ["30 days", "90 days", "60 days", "15 days"],
    answer: 2,
    explanation: "Section 19(b) is the 'citizen suit' provision: any person can file a complaint after giving at least 60 days' notice of the alleged offence and of his intention to complain. Otherwise cognisance is on complaint by the Central Government or an authorised officer."
  },
  {
    id: 44,
    question: "The disposal of used blood-stained swabs and contaminated plastic from the serology section of a Forensic Science Laboratory in Madhya Pradesh is regulated by the",
    options: ["Bio-Medical Waste Management Rules 2016, framed under the Environment (Protection) Act 1986", "Hazardous and Other Wastes Rules 2016, framed under the Factories Act 1948", "Solid Waste Management Rules 2016, framed under the Municipal Corporation Act", "Drugs and Cosmetics Rules 1945, framed under the Drugs and Cosmetics Act"],
    answer: 0,
    explanation: "The Bio-Medical Waste Management Rules 2016 are made under the EP Act and apply to all persons handling biomedical waste, including laboratories. Blood-contaminated waste must be segregated into colour-coded containers and sent to a common treatment facility. The Hazardous Wastes Rules are also under the EP Act, not the Factories Act."
  },
  {
    id: 45,
    question: "The Central Zone Bench of the National Green Tribunal, which hears environmental cases from Madhya Pradesh, sits at",
    options: ["Nagpur", "Jaipur", "Indore", "Bhopal"],
    answer: 3,
    explanation: "The NGT, set up under the NGT Act 2010, has its principal bench in New Delhi and zonal benches at Bhopal (Central), Pune (West), Kolkata (East) and Chennai (South). The Bhopal bench covers Madhya Pradesh, Chhattisgarh and Rajasthan."
  },
  {
    id: 46,
    question: "Which of the following animals is NOT covered by the term 'govansh' under the MP Govansh Vadh Pratishedh Adhiniyam 2004?",
    options: ["Buffalo", "Bull", "Bullock", "Calf of a cow"],
    answer: 0,
    explanation: "The Act prohibits slaughter of cow progeny, which includes cows, calves, bulls and bullocks. Buffaloes belong to a different species (Bubalus bubalis) and are not covered, which is why species identification of seized meat is crucial in prosecutions."
  },
  {
    id: 47,
    question: "Laws such as the MP Govansh Vadh Pratishedh Adhiniyam 2004 draw constitutional support from Article 48, which is a",
    options: ["Fundamental Right guaranteeing protection of animals", "Fundamental Duty to have compassion for living creatures", "Directive Principle on organising agriculture and animal husbandry and prohibiting slaughter of cows and calves", "Seventh Schedule entry giving Parliament exclusive power over cattle"],
    answer: 2,
    explanation: "Article 48 directs the State to organise agriculture and animal husbandry on scientific lines and to prohibit slaughter of cows, calves and other milch and draught cattle. Preservation and protection of livestock is Entry 15 of the State List, so States make these laws. Compassion for living creatures (Article 51A(g)) is a separate Fundamental Duty."
  },
  {
    id: 48,
    question: "In 2005 a seven-judge Bench of the Supreme Court upheld a total ban on slaughter of cow progeny, including bulls and bullocks that are no longer useful. The case was",
    options: ["Mohd. Hanif Qureshi v. State of Bihar", "Animal Welfare Board of India v. A. Nagaraja", "State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat", "Indian Young Lawyers Association v. State of Kerala"],
    answer: 2,
    explanation: "Mirzapur Moti Kureshi (2005) upheld Gujarat's total ban and overruled the earlier view in Mohd. Hanif Qureshi (1958), which had allowed slaughter of cattle no longer useful. A. Nagaraja (2014) dealt with jallikattu. The 2005 ruling supports laws like MP's 2004 Act."
  },
  {
    id: 49,
    question: "Under the MP Govansh Vadh Pratishedh Adhiniyam, police seize meat suspected to be beef and send it to the State FSL. Which examination most reliably establishes whether it is from cattle rather than buffalo?",
    options: ["Precipitin test with anti-human serum", "Kastle-Meyer test on the meat juice", "ABO grouping by absorption-elution", "PCR amplification and analysis of mitochondrial DNA markers such as cytochrome b"],
    answer: 3,
    explanation: "Species identification by PCR of mitochondrial genes such as cytochrome b, using species-specific primers or sequencing, can distinguish Bos (cattle) from Bubalus (buffalo), even in cooked or decomposed meat. Anti-human precipitin only tells whether a sample is human, and the Kastle-Meyer test only indicates blood."
  },
  {
    id: 50,
    question: "India's first cow sanctuary, the Kamdhenu Gau Abhayaranya, was set up in Madhya Pradesh at Salaria in which district?",
    options: ["Shajapur", "Ujjain", "Agar Malwa", "Mandsaur"],
    answer: 2,
    explanation: "The Kamdhenu Gau Abhayaranya at Salaria, Susner tehsil of Agar Malwa district, opened in 2017 as the country's first cow sanctuary for stray and abandoned cattle. It is linked with MP's broader policy on protection of govansh."
  }
];

export default questions;

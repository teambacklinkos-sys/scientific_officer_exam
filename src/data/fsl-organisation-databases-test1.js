const questions = [
  {
    id: 1,
    question: "The Directorate of Forensic Science Services (DFSS), which controls the Central Forensic Science Laboratories in India, functions under which ministry?",
    options: ["Ministry of Science and Technology", "Ministry of Law and Justice", "Ministry of Home Affairs", "Ministry of Health and Family Welfare"],
    answer: 2,
    explanation: "DFSS is an attached office of the Ministry of Home Affairs (MHA), New Delhi, headed by a Director-cum-Chief Forensic Scientist. It administers seven CFSLs, including CFSL Delhi, which was transferred to it from the CBI in 2022, and the questioned-document units at Shimla, Kolkata and Hyderabad. Remember: central forensic services in India sit with MHA, not with the science or health ministries."
  },
  {
    id: 2,
    question: "Which Central Forensic Science Laboratory, run for decades by the Central Bureau of Investigation (CBI), was brought under the administrative control of DFSS in 2022?",
    options: ["CFSL Chandigarh", "CFSL New Delhi", "CFSL Pune", "CFSL Guwahati"],
    answer: 1,
    explanation: "CFSL New Delhi was set up as a scientific department of the CBI, and according to DFSS it was brought under DFSS administrative control in 2022. It still examines many CBI exhibits. Chandigarh, Pune and Guwahati were never CBI laboratories. DFSS now controls seven CFSLs: Chandigarh, Hyderabad, Kolkata, Pune, Bhopal, Guwahati and Delhi."
  },
  {
    id: 3,
    question: "According to DFSS, which of the following Central Forensic Science Laboratories was established first?",
    options: ["CFSL Kolkata", "CFSL Hyderabad", "CFSL Chandigarh", "CFSL Bhopal"],
    answer: 0,
    explanation: "DFSS gives these establishment years: CFSL Kolkata 1957, Hyderabad 1968, Chandigarh 1972, and Bhopal, Pune and Guwahati 2011. That makes Kolkata the oldest CFSL. CFSL Delhi was a CBI laboratory until it came under DFSS in 2022."
  },
  {
    id: 4,
    question: "The Directorate of Forensic Science Services (DFSS) was created by MHA in 2002 by bifurcating which organisation?",
    options: ["National Crime Records Bureau", "Central Bureau of Investigation", "Intelligence Bureau", "Bureau of Police Research and Development"],
    answer: 3,
    explanation: "DFSS was formed by bifurcating BPR&D, which until then oversaw the central forensic laboratories. The move followed recommendations of the National Human Rights Commission and the Padmanabhaiah Committee on police reforms, and the gazette notification was issued on 31 December 2002. DFSS was not carved out of NCRB, the CBI or the IB."
  },
  {
    id: 5,
    question: "Besides Kolkata, Hyderabad and Chandigarh, which three newer CFSLs were established by DFSS in 2011?",
    options: ["Pune, Jaipur and Guwahati", "Pune, Bhopal and Guwahati", "Bhopal, Lucknow and Shillong", "Bhopal, Pune and Thiruvananthapuram"],
    answer: 1,
    explanation: "DFSS expanded its network with CFSLs at Pune, Bhopal and Guwahati (Kamrup), established in 2011. With CFSL Delhi transferred from the CBI in 2022, DFSS now has seven CFSLs, and more have been approved under the National Forensic Infrastructure Enhancement Scheme. Jaipur, Lucknow and Thiruvananthapuram have state FSLs, not CFSLs."
  },
  {
    id: 6,
    question: "During a murder investigation in a district of Madhya Pradesh, where would the investigating officer normally send biological exhibits for examination in the first instance?",
    options: ["The State FSL or the Regional FSL having jurisdiction", "CFSL New Delhi", "The questioned-document unit at Shimla", "LNJN NICFS, Delhi"],
    answer: 0,
    explanation: "Police in a state send routine case exhibits to their own State FSL or the RFSL with jurisdiction over the district. CFSLs take state cases mainly on court orders, at the request of the state government, or for specialised examinations. The Shimla unit deals only with documents, and NICFS is a training and research institute, not a casework laboratory for district police."
  },
  {
    id: 7,
    question: "The main State Forensic Science Laboratory of Madhya Pradesh is located at",
    options: ["Bhopal", "Sagar", "Indore", "Jabalpur"],
    answer: 1,
    explanation: "The MP State FSL is at Sagar and functions under the state's police set-up. Regional FSLs in other divisional cities share its routine caseload. Do not confuse it with CFSL Bhopal, which is a central laboratory under DFSS."
  },
  {
    id: 8,
    question: "Which city of Madhya Pradesh hosts a Central Forensic Science Laboratory under DFSS, MHA?",
    options: ["Sagar", "Gwalior", "Bhopal", "Indore"],
    answer: 2,
    explanation: "CFSL Bhopal is one of the newer central laboratories under DFSS. Sagar hosts the State FSL of MP, a state government laboratory, not a central one. The state and central laboratories in MP are therefore in different cities."
  },
  {
    id: 9,
    question: "What is the main purpose of setting up Regional Forensic Science Laboratories (RFSLs) under a State FSL?",
    options: ["To act as appellate bodies that re-examine reports issued by the State FSL", "To train police recruits in criminology and award degrees", "To maintain the national fingerprint and crime records databases", "To bring examination facilities closer to districts and reduce the backlog at the main laboratory"],
    answer: 3,
    explanation: "RFSLs decentralise forensic services. They handle routine examinations for a group of districts so that cases are reported faster and the main State FSL can concentrate on complex work. They are not appellate bodies, and the national databases are kept by NCRB."
  },
  {
    id: 10,
    question: "State X recorded 2,00,000 cognizable crimes with a population of 8 crore, and State Y recorded 1,20,000 crimes with a population of 3 crore. Using the NCRB definition of crime rate, which statement is correct?",
    options: ["State Y's crime rate is 400 and State X's is 250 per lakh population", "State X has the higher crime rate because it recorded more crimes", "Both states have the same crime rate of 325 per lakh population", "State X's crime rate is 400 and State Y's is 250 per lakh population"],
    answer: 0,
    explanation: "NCRB defines crime rate as the number of crimes per 1 lakh population. State X: 2,00,000 ÷ 800 lakh = 250; State Y: 1,20,000 ÷ 300 lakh = 400. Absolute numbers mislead, which is why NCRB compares states by crime rate."
  },
  {
    id: 11,
    question: "In which year was the National Crime Records Bureau (NCRB) set up?",
    options: ["1972", "2002", "1986", "1991"],
    answer: 2,
    explanation: "NCRB was set up in 1986 under MHA to serve as a national repository of crime and criminal information. The year 1972 belongs to NICFS, India's national institute for training in criminology and forensic science."
  },
  {
    id: 12,
    question: "NCRB was established on the recommendations of which of the following?",
    options: ["Malimath Committee", "Tandon Committee and the National Police Commission", "Madhava Menon Committee", "Justice Verma Committee"],
    answer: 1,
    explanation: "NCRB was created on the recommendations of the Tandon Committee, the National Police Commission (1977–81) and an MHA Task Force of 1985. The Malimath Committee (2003) dealt with reforms of the criminal justice system, and the Justice Verma Committee (2013) with laws on sexual offences."
  },
  {
    id: 13,
    question: "CCTNS, for which NCRB is the nodal agency, stands for",
    options: ["Central Crime and Terrorism Notification Service", "Criminal Case Tracking and Notification Scheme", "Computerised Crime and Traffic Network Service", "Crime and Criminal Tracking Network & Systems"],
    answer: 3,
    explanation: "CCTNS (Crime and Criminal Tracking Network & Systems) was approved in 2009 as a Mission Mode Project under the National e-Governance Plan. It connects police stations nationwide for online FIR registration, case records and criminal searches. NCRB is its central nodal agency."
  },
  {
    id: 14,
    question: "A district with a population of 30 lakh recorded 4,500 cognizable crimes in a year. What is its crime rate as calculated by NCRB?",
    options: ["150", "15", "1,500", "1.5"],
    answer: 0,
    explanation: "Crime rate = (number of crimes ÷ population) × 1,00,000. Here 4,500 ÷ 30,00,000 × 1,00,000 = 150 crimes per lakh population. NCRB uses this per-lakh rate in Crime in India to compare areas fairly."
  },
  {
    id: 15,
    question: "In a year, police charge-sheeted 1,200 cases. Trials were completed in 800 cases, with 360 convictions and 440 acquittals. What is the conviction rate as calculated by NCRB?",
    options: ["30%", "45%", "55%", "81.8%"],
    answer: 1,
    explanation: "NCRB calculates conviction rate as cases convicted ÷ cases in which trial was completed × 100, so 360 ÷ 800 × 100 = 45%. Dividing by cases charge-sheeted (30%) or by acquittals (81.8%) is a common mistake. 55% is the acquittal share."
  },
  {
    id: 16,
    question: "Which of the following is NOT an annual publication of NCRB?",
    options: ["Crime in India", "Accidental Deaths & Suicides in India", "Prison Statistics India", "India Justice Report"],
    answer: 3,
    explanation: "NCRB publishes Crime in India, Accidental Deaths & Suicides in India (ADSI) and Prison Statistics India every year. The India Justice Report is prepared by a group of civil-society organisations led by Tata Trusts and ranks states on justice delivery. Crime in India is the main source for official crime statistics."
  },
  {
    id: 17,
    question: "The Central Finger Print Bureau (CFPB) of India currently functions under",
    options: ["the Central Bureau of Investigation", "the Directorate of Forensic Science Services", "the National Crime Records Bureau", "the Bureau of Police Research and Development"],
    answer: 2,
    explanation: "The CFPB, originally set up at Calcutta, now works as part of NCRB in New Delhi. It keeps the national fingerprint record of convicted persons and supports the State Finger Print Bureaux. NCRB also runs NAFIS, the national automated fingerprint system."
  },
  {
    id: 18,
    question: "The fingerprint bureau set up at Writers' Building, Calcutta in 1897, which adopted the Henry system of classification, is associated with",
    options: ["Edward Henry, Azizul Haque and Hem Chandra Bose", "Francis Galton and William Herschel", "Juan Vucetich and Henry Faulds", "Alphonse Bertillon and Edmond Locard"],
    answer: 0,
    explanation: "Edward Richard Henry, Inspector General of Police in Bengal, set up the bureau. His sub-inspectors Azizul Haque and Hem Chandra Bose worked out the mathematics of the primary classification. The Henry system later spread worldwide, and Haque and Bose are now widely credited for their contribution."
  },
  {
    id: 19,
    question: "What is NAFIS, operated by NCRB?",
    options: ["A national DNA index of convicted offenders kept by the CFSLs", "A network of mobile forensic vans attached to district police", "A system for online registration of FIRs in police stations", "A central, searchable database of fingerprints of arrested and convicted persons shared with state and UT police"],
    answer: 3,
    explanation: "NAFIS (National Automated Fingerprint Identification System) lets police anywhere in India compare fingerprints against a central database, and gives each record a unique National Fingerprint Number. Online FIR registration is a CCTNS function. India has no national statutory DNA database yet."
  },
  {
    id: 20,
    question: "Under the Criminal Procedure (Identification) Act, 2022, for how long does NCRB retain the record of measurements collected from a person?",
    options: ["25 years", "75 years", "50 years", "100 years"],
    answer: 1,
    explanation: "The Act says records of measurements are kept in digital or electronic form for 75 years from the date of collection. The record must be destroyed if a person without a previous conviction is released without trial, discharged or acquitted, unless the court directs otherwise. NCRB is the agency that stores, preserves and shares these records."
  },
  {
    id: 21,
    question: "The Criminal Procedure (Identification) Act, 2022, which allows collection of biological samples, iris and retina scans from arrested persons, replaced which older law?",
    options: ["Prisoners Act, 1900", "Criminal Tribes Act, 1871", "Identification of Prisoners Act, 1920", "Indian Police Act, 1861"],
    answer: 2,
    explanation: "The 2022 Act repealed the Identification of Prisoners Act, 1920, which allowed only fingerprints, footprints and photographs. The new law widens 'measurements' to include palm prints, iris and retina scans, physical and biological samples and their analysis, and behavioural attributes such as signatures and handwriting."
  },
  {
    id: 22,
    question: "The Lok Nayak Jayaprakash Narayan National Institute of Criminology and Forensic Science (LNJN NICFS), Delhi, now functions as",
    options: ["a campus of the National Forensic Sciences University", "a wing of the Central Bureau of Investigation", "a constituent college of the University of Delhi", "a division of the National Crime Records Bureau"],
    answer: 0,
    explanation: "The National Forensic Sciences University Act, 2020 set up NFSU by bringing together the Gujarat Forensic Sciences University and LNJN NICFS. NICFS, in Rohini, became the Delhi campus of NFSU. It continues to train police officers, judicial officers and forensic scientists."
  },
  {
    id: 23,
    question: "The National Institute of Criminology and Forensic Science (NICFS), Delhi, was established in",
    options: ["1957", "1972", "1986", "2008"],
    answer: 1,
    explanation: "NICFS was set up in 1972 under MHA as India's national centre for training and research in criminology and forensic science. It was later renamed after Lok Nayak Jayaprakash Narayan. 1986 is NCRB's year and 2008 is the year Gujarat Forensic Sciences University was founded."
  },
  {
    id: 24,
    question: "Where is the headquarters of the National Forensic Sciences University (NFSU)?",
    options: ["New Delhi", "Hyderabad", "Bhopal", "Gandhinagar"],
    answer: 3,
    explanation: "NFSU has its headquarters in Gandhinagar, Gujarat, where its predecessor, Gujarat Forensic Sciences University, was located. It has since opened campuses in several states, including Delhi, the former NICFS."
  },
  {
    id: 25,
    question: "What status does the National Forensic Sciences University Act, 2020 give NFSU?",
    options: ["Institution of National Importance", "Deemed-to-be university under the UGC Act", "State university of Gujarat", "Central university under the Central Universities Act, 2009"],
    answer: 0,
    explanation: "The NFSU Act, 2020 declares the university an Institution of National Importance, like the IITs and AIIMS. It is the world's first university devoted entirely to forensic and allied sciences. Its predecessor, GFSU, was a state university."
  },
  {
    id: 26,
    question: "NFSU was created by upgrading which university, established in 2008?",
    options: ["Rashtriya Raksha University", "Dr. Harisingh Gour Vishwavidyalaya", "Gujarat Forensic Sciences University", "Sardar Patel University"],
    answer: 2,
    explanation: "Gujarat Forensic Sciences University (GFSU), Gandhinagar, set up by Gujarat in 2008, was upgraded into NFSU by the 2020 Act. Rashtriya Raksha University is a separate national university for police and security studies. Dr. Harisingh Gour Vishwavidyalaya is the central university at Sagar, MP."
  },
  {
    id: 27,
    question: "The three offices of the Government Examiner of Questioned Documents (GEQD), now questioned-document units attached to CFSLs, were at Shimla, Kolkata and",
    options: ["Pune", "Bhopal", "Guwahati", "Hyderabad"],
    answer: 3,
    explanation: "The GEQD offices were at Shimla (the oldest, set up in the British period), Kolkata and Hyderabad. By an order of 13 August 2010 they were placed under the respective CFSL directors, and the Shimla office now works as a unit of CFSL Chandigarh. Pune, Bhopal and Guwahati are the 2011 CFSLs. These units examine handwriting, signatures, typescript, printing, inks and alterations."
  },
  {
    id: 28,
    question: "In a CBI bank-fraud case, a disputed signature on a cheque has to be compared with specimen signatures of the accused. Where should it be sent?",
    options: ["Biology Division of a CFSL", "Questioned Documents Division of a CFSL", "Central Finger Print Bureau", "National Crime Records Bureau"],
    answer: 1,
    explanation: "Handwriting and signature comparison is the job of a questioned-document examiner. At central level this is done by the Questioned Documents divisions of the CFSLs, which include the former GEQD units. A biology division examines body fluids, the CFPB deals with fingerprints, and NCRB is a records body, not a laboratory."
  },
  {
    id: 29,
    question: "The questioned-document units at Shimla, Kolkata and Hyderabad, earlier the GEQD offices, ultimately come under",
    options: ["the Directorate of Forensic Science Services, MHA", "the National Crime Records Bureau", "the Reserve Bank of India", "the Ministry of Law and Justice"],
    answer: 0,
    explanation: "Since 2010 the former GEQD offices at Shimla, Kolkata and Hyderabad have been under the directors of the CFSLs, which in turn are controlled by DFSS under MHA. RBI deals with currency issuance, not forensic examination of documents in criminal cases."
  },
  {
    id: 30,
    question: "Under Section 176(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, a forensic expert must visit the crime scene for every offence punishable with imprisonment of at least",
    options: ["3 years", "5 years", "7 years", "10 years"],
    answer: 2,
    explanation: "Section 176(3) BNSS requires that for any offence punishable with seven years or more, the officer in charge must have a forensic expert visit the scene to collect forensic evidence, and have the process video-recorded. CrPC 1973 had no such provision. The duty applies from a date the State Government notifies, which must be within five years, so it need not have started on 1 July 2024."
  },
  {
    id: 31,
    question: "Under BNSS Section 176(3), a crime-scene visit by a forensic expert is mandatory for which of the following offences under the Bharatiya Nyaya Sanhita?",
    options: ["Voluntarily causing hurt, punishable up to 1 year", "Robbery, punishable with rigorous imprisonment up to 10 years", "Theft, punishable up to 3 years", "Criminal trespass, punishable up to 3 months"],
    answer: 1,
    explanation: "The threshold is an offence punishable with seven years or more. Robbery carries up to 10 years and so qualifies. Simple hurt, ordinary theft and criminal trespass carry less, so the forensic visit is optional for them, though it may still be done."
  },
  {
    id: 32,
    question: "Besides the forensic expert's visit, what does BNSS Section 176(3) require during collection of forensic evidence at the scene of a serious offence?",
    options: ["Videography of the process on a mobile phone or other electronic device", "Presence of a Judicial Magistrate at the scene", "Collection of DNA samples from all residents of the locality", "Sealing of exhibits only at the State FSL"],
    answer: 0,
    explanation: "Section 176(3) requires the collection of forensic evidence at the scene to be video-recorded on a mobile phone or other electronic device. This makes the scene process transparent and supports the chain of custody. If a state lacks such forensic facilities, it may notify the use of another state's facility until its own is developed."
  },
  {
    id: 33,
    question: "Section 176 of BNSS 2023, which lays down the procedure for investigation, corresponds to which section of the old CrPC 1973?",
    options: ["Section 154", "Section 173", "Section 293", "Section 157"],
    answer: 3,
    explanation: "CrPC Section 157 (procedure for investigation) became BNSS Section 176, with the new forensic expert and videography provision added. CrPC 154 (FIR) is now BNSS 173, and CrPC 293 (government scientific experts' reports) is now BNSS 329."
  },
  {
    id: 34,
    question: "A report signed by the Assistant Director of a State FSL may be used as evidence in an inquiry or trial without examining the expert in court, under which provision?",
    options: ["BNSS Section 176", "BSA Section 63", "BNSS Section 329", "BNSS Section 105"],
    answer: 2,
    explanation: "BNSS Section 329, which replaced CrPC Section 293, makes reports of listed government scientific experts admissible without their being called. The list includes the Chemical Examiner, Director of a Fingerprint Bureau, Serologist to the Government, and Directors, Deputy Directors and Assistant Directors of Central and State FSLs. The court may still summon the expert if needed."
  },
  {
    id: 35,
    question: "Section 105 of BNSS 2023 requires that a police search and seizure, including preparation of the seizure list, be",
    options: ["recorded through audio-video electronic means, preferably a mobile phone", "witnessed by a forensic expert from the State FSL", "carried out only on a warrant issued by a Sessions Judge", "photographed by an officer not below the rank of Deputy Superintendent of Police"],
    answer: 0,
    explanation: "Section 105 BNSS requires the search, the seizure, the preparation of the seizure list and its signing by witnesses to be recorded by audio-video means, preferably a mobile phone. The recording must be sent to the magistrate without delay. Together with Section 176(3), this strengthens documentation of how evidence was collected."
  },
  {
    id: 36,
    question: "Under BNSS Section 349, a Magistrate of the first class may order any person, including one not arrested, to give which of the following?",
    options: ["Blood and semen samples for DNA profiling", "A narco-analysis and brain-mapping test", "A confessional statement in writing", "Specimen signatures, handwriting, finger impressions or a voice sample"],
    answer: 3,
    explanation: "Section 349 BNSS, which replaced CrPC Section 311A, lets a first-class Magistrate order specimen signatures, handwriting, finger impressions or voice samples, and it adds finger impressions and voice samples to the old list. It also applies to a person who has not been arrested. Narco-analysis without consent was held unconstitutional in Selvi v. State of Karnataka (2010)."
  },
  {
    id: 37,
    question: "Section 39 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, which deals with opinions of experts, corresponds to which section of the Indian Evidence Act, 1872?",
    options: ["Section 65B", "Section 45", "Section 73", "Section 32"],
    answer: 1,
    explanation: "IEA Section 45 (opinions of experts) became BSA Section 39, which now covers foreign law, science, art, handwriting, finger impressions and 'any other field'. Section 65B (electronic records) became BSA 63. Section 32 covers dying declarations, and Section 73 covers comparison of handwriting by the court."
  },
  {
    id: 38,
    question: "Under BSA Section 39(2), when a court has to form an opinion about information stored or transmitted in a computer resource, whose opinion is a relevant fact?",
    options: ["The Director of the Central Finger Print Bureau", "The Government Examiner of Questioned Documents", "The Examiner of Electronic Evidence notified under Section 79A of the IT Act, 2000", "The Chief Controller of Explosives"],
    answer: 2,
    explanation: "BSA 39(2), formerly IEA Section 45A, makes relevant the opinion of the Examiner of Electronic Evidence notified under Section 79A of the IT Act, 2000. Some CFSLs have been notified as such examiners. The GEQD deals with physical documents, not digital data."
  },
  {
    id: 39,
    question: "CCTV footage copied from a shop's digital video recorder is to be produced in court. Which provision deals with the certificate required to admit such an electronic record?",
    options: ["BSA Section 63", "BSA Section 39", "BNSS Section 329", "BNSS Section 176"],
    answer: 0,
    explanation: "BSA Section 63 replaced IEA Section 65B and sets out the conditions and certificate for admitting computer output such as copied CCTV footage. BSA Section 39 concerns expert opinion. BNSS 329 deals with reports of government scientific experts."
  },
  {
    id: 40,
    question: "BNSS 2023 and BSA 2023, which replaced the CrPC 1973 and the Indian Evidence Act 1872, came into force on",
    options: ["25 December 2023", "1 January 2024", "1 April 2024", "1 July 2024"],
    answer: 3,
    explanation: "The three new criminal laws, BNS, BNSS and BSA, received Presidential assent on 25 December 2023 and came into force on 1 July 2024. Offences and proceedings started before that date continue under the old laws as provided in the savings clauses."
  },
  {
    id: 41,
    question: "A DNA expert's report says a semen stain on the victim's clothing matches the accused, but other evidence strongly contradicts this. How should the court treat the expert's opinion under BSA Section 39?",
    options: ["As conclusive proof that binds the court", "As relevant evidence that the court weighs with the other evidence and the expert's reasons", "As inadmissible unless the expert holds a medical degree", "As admissible only if the accused consents to the report"],
    answer: 1,
    explanation: "Expert opinion is relevant but advisory. The court must assess the reasons, the methods and the rest of the evidence, and is not bound by the expert. Courts have often called expert evidence corroborative, so its value depends on sound procedure, including an intact chain of custody."
  },
  {
    id: 42,
    question: "The National Accreditation Board for Testing and Calibration Laboratories (NABL), which accredits forensic laboratories in India, is a constituent board of",
    options: ["the Quality Council of India", "the Bureau of Indian Standards", "the Directorate of Forensic Science Services", "the Council of Scientific and Industrial Research"],
    answer: 0,
    explanation: "NABL is a constituent board of the Quality Council of India (QCI). It accredits testing and calibration laboratories, including FSLs, against ISO/IEC 17025. BIS makes national standards but does not accredit laboratories."
  },
  {
    id: 43,
    question: "ISO/IEC 17025, the standard against which NABL accredits forensic laboratories, specifies",
    options: ["requirements for quality management systems in any organisation", "particular requirements for quality and competence of medical laboratories", "requirements for bodies performing inspection", "general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories"],
    answer: 3,
    explanation: "ISO/IEC 17025 sets general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories, which is why it is the benchmark for FSLs. ISO 9001 covers general quality management, ISO 15189 covers medical laboratories and ISO/IEC 17020 covers inspection bodies."
  },
  {
    id: 44,
    question: "A state wants its crime-scene investigation units, rather than its laboratories, to be accredited. Which international standard is generally used for this?",
    options: ["ISO/IEC 17025", "ISO 15189", "ISO/IEC 17020", "ISO 14001"],
    answer: 2,
    explanation: "Crime-scene examination is treated as inspection, so crime-scene units are accredited against ISO/IEC 17020 (requirements for bodies performing inspection). Laboratory analysis is accredited under ISO/IEC 17025. ISO 14001 is an environmental management standard."
  },
  {
    id: 45,
    question: "Under ISO/IEC 17025, how does a DNA laboratory usually show that its results stay reliable and comparable with other laboratories over time?",
    options: ["By having all reports countersigned by the head of the police district", "By taking part regularly in proficiency testing and inter-laboratory comparisons", "By keeping each exhibit for at least ten years", "By doing every analysis in duplicate on two different days"],
    answer: 1,
    explanation: "Accredited labs must monitor the validity of their results, mainly through proficiency testing (PT) and inter-laboratory comparison schemes. PT providers are themselves accredited under ISO/IEC 17043. Unsatisfactory PT results must be investigated and corrected."
  },
  {
    id: 46,
    question: "The current edition of ISO/IEC 17025, which introduced a risk-based approach, was published in",
    options: ["2005", "2012", "2017", "2021"],
    answer: 2,
    explanation: "ISO/IEC 17025:2017 replaced the 2005 edition. It introduced risk-based thinking, a stronger focus on impartiality and an updated structure aligned with other conformity-assessment standards. Labs accredited to the 2005 version had to move to the 2017 version."
  },
  {
    id: 47,
    question: "An accredited toxicology laboratory reports a blood alcohol concentration of 92 mg/100 ml. Under ISO/IEC 17025, what should the report also state when it affects how the result is interpreted against a legal limit?",
    options: ["The measurement uncertainty associated with the result", "The name of the investigating police officer", "The market price of the reagents used", "The number of samples analysed that day"],
    answer: 0,
    explanation: "ISO/IEC 17025 requires labs to estimate measurement uncertainty and to report it when it matters for interpreting the result, such as near a statutory limit. A value of 92 ± 4 mg/100 ml shows the court the range in which the true value lies. The other items do not affect how the result is interpreted."
  },
  {
    id: 48,
    question: "A State FSL accredited under ISO/IEC 17025 wants to start using a new STR amplification kit in casework. What must it do first?",
    options: ["Get approval from the investigating officer of each case", "Use the kit on a few live cases and compare the results later", "Wait until the kit has been used for five years by other laboratories", "Validate or verify the method in-house and document that it performs as intended"],
    answer: 3,
    explanation: "ISO/IEC 17025 requires methods to be validated, or verified for standard methods, before use, showing for example sensitivity, reproducibility, mixture performance and contamination checks. The validation records are reviewed during NABL assessment. Trying an unvalidated kit on live casework would make the results open to challenge."
  },
  {
    id: 49,
    question: "The Interoperable Criminal Justice System (ICJS), implemented with NCRB, links CCTNS with e-Courts, e-Prisons, e-Prosecution and which pillar that connects forensic laboratories?",
    options: ["e-Sakshya", "e-Forensics", "NAFIS", "e-Samiksha"],
    answer: 1,
    explanation: "ICJS joins the main pillars of the criminal justice system: police (CCTNS), e-Courts, e-Prisons, e-Prosecution and e-Forensics. e-Forensics lets FSLs receive case details and send reports electronically. e-Sakshya is an app for recording scene and seizure videos, and NAFIS is the fingerprint system."
  },
  {
    id: 50,
    question: "The National Database on Sexual Offenders (NDSO), launched in 2018, is maintained by",
    options: ["the Central Bureau of Investigation", "the National Investigation Agency", "the National Crime Records Bureau", "the Directorate of Forensic Science Services"],
    answer: 2,
    explanation: "NDSO, launched by MHA in 2018, is maintained by NCRB and holds details of persons convicted of sexual offences, accessible to law-enforcement agencies. It sits with NCRB's other national databases such as CCTNS and NAFIS. It contains identification details, not DNA profiles."
  }
];

export default questions;

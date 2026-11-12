const questions = [
  {
    id: 1,
    question: "Under which Article of the Constitution is the Governor of Madhya Pradesh appointed by the President by warrant under his hand and seal?",
    options: ["Article 153", "Article 155", "Article 157", "Article 163"],
    answer: 1,
    explanation: "Article 155 provides that the Governor of a State is appointed by the President by warrant under his hand and seal. Article 153 only says there shall be a Governor for each State, and Article 157 lays down the qualifications."
  },
  {
    id: 2,
    question: "What is the minimum age prescribed by the Constitution for a person to be appointed Governor of Madhya Pradesh?",
    options: ["25 years", "30 years", "35 years", "40 years"],
    answer: 2,
    explanation: "Article 157 requires the Governor to be a citizen of India who has completed 35 years of age. 25 years is the minimum age for a member of the Vidhan Sabha (Article 173), and 30 years for a member of a Legislative Council."
  },
  {
    id: 3,
    question: "Who administers the oath of office to a newly appointed Governor of Madhya Pradesh?",
    options: ["The President of India", "The Chief Justice of India", "The Chief Justice of the High Court of Madhya Pradesh", "The Speaker of the Madhya Pradesh Vidhan Sabha"],
    answer: 2,
    explanation: "Under Article 159 the Governor's oath is made before the Chief Justice of the High Court of the State, or in his absence the senior-most judge available. The Governor in turn administers the oath to the Chief Minister and other ministers."
  },
  {
    id: 4,
    question: "According to Article 156, the Governor of Madhya Pradesh holds office",
    options: ["During the pleasure of the President, normally for five years", "For a fixed term of five years, removable only by impeachment", "Until the Vidhan Sabha passes a resolution for removal", "Until attaining the age of seventy years"],
    answer: 0,
    explanation: "Article 156 says the Governor holds office during the pleasure of the President; subject to this, the term is five years from entering office. Unlike the President, there is no impeachment procedure for a Governor."
  },
  {
    id: 5,
    question: "An ordinance promulgated by the Governor of Madhya Pradesh under Article 213 ceases to operate if it is not approved by the Legislature within",
    options: ["Six months from the date of promulgation", "Six weeks from the reassembly of the Legislature", "Thirty days from the reassembly of the Legislature", "Three months from the reassembly of the Legislature"],
    answer: 1,
    explanation: "Under Article 213(2) an ordinance has the same force as an Act but ceases to operate six weeks after the reassembly of the State Legislature unless disapproved earlier. So the maximum life of an ordinance can be about six months and six weeks."
  },
  {
    id: 6,
    question: "The Madhya Pradesh Vidhan Sabha passes a Bill which, if enacted, would derogate from the powers of the High Court so as to endanger its constitutional position. Under Article 200, the Governor",
    options: ["Must return the Bill once to the Assembly for reconsideration", "Must reserve the Bill for the consideration of the President", "May give assent with a recommendation for amendment", "Must refer the Bill to the Supreme Court for its advisory opinion"],
    answer: 1,
    explanation: "The second proviso to Article 200 says the Governor shall not assent to, but shall reserve for the President's consideration, any Bill that would derogate from the powers of the High Court. In other cases reservation is a matter of the Governor's discretion. Advisory references to the Supreme Court are made only by the President under Article 143."
  },
  {
    id: 7,
    question: "Which of the following lies outside the pardoning power of the Governor of Madhya Pradesh under Article 161?",
    options: ["Remitting a sentence passed by a court-martial", "Commuting a sentence for an offence under a State law", "Granting respite to a person convicted under a State law", "Remitting a sentence for an offence under the Madhya Pradesh Excise Act"],
    answer: 0,
    explanation: "Article 161 lets the Governor grant pardons, reprieves, respites, remissions and commutations for offences against laws within the State's executive power. Only the President can deal with sentences by court-martial (Article 72). State excise is a State List subject, so it falls within the Governor's power."
  },
  {
    id: 8,
    question: "After a general election to the Madhya Pradesh Vidhan Sabha, no party or pre-poll alliance wins a clear majority. Deciding whom to invite first to form the government is",
    options: ["A decision of the President on the advice of the Union Cabinet", "A decision of the Speaker pro tem", "A decision of the Chief Justice of the High Court", "A situational discretion of the Governor"],
    answer: 3,
    explanation: "Appointment of the Chief Minister is the Governor's function under Article 164(1). When the verdict is unclear the Governor uses situational discretion, guided by conventions such as those noted by the Sarkaria Commission, and may ask the appointee to prove majority on the floor of the House."
  },
  {
    id: 9,
    question: "Under the Fifth Schedule, who may by public notification direct that a particular Act of the Madhya Pradesh Legislature shall not apply, or shall apply with modifications, to a Scheduled Area in the State?",
    options: ["The President", "The Tribes Advisory Council", "The Governor", "The Union Ministry of Tribal Affairs"],
    answer: 2,
    explanation: "Paragraph 5 of the Fifth Schedule empowers the Governor to modify or exclude the application of Acts of Parliament or the State Legislature to Scheduled Areas and to make regulations for their peace and good government. Regulations need the President's assent, and the Tribes Advisory Council is consulted, but the power is the Governor's."
  },
  {
    id: 10,
    question: "The Fifth Schedule requires that, as nearly as may be, three-fourths of the members of the Tribes Advisory Council of Madhya Pradesh shall be",
    options: ["Representatives of the Scheduled Tribes in the State Legislative Assembly", "Tribal experts nominated by the Governor", "Elected Adhyakshas of Zila Panchayats in Scheduled Areas", "Officers of the Tribal Affairs Department"],
    answer: 0,
    explanation: "Paragraph 4 of the Fifth Schedule provides for a Tribes Advisory Council of not more than 20 members, of whom as nearly as may be three-fourths shall be ST members of the State Legislative Assembly. It advises on matters of welfare and advancement of STs referred to it by the Governor."
  },
  {
    id: 11,
    question: "The proviso to Article 164(1) requires a Minister in charge of tribal welfare in Madhya Pradesh. Which other States are covered by the same requirement?",
    options: ["Bihar, Rajasthan and Gujarat", "Chhattisgarh, Maharashtra and Andhra Pradesh", "Jharkhand, West Bengal and Assam", "Chhattisgarh, Jharkhand and Odisha"],
    answer: 3,
    explanation: "After the 94th Amendment (2006), the proviso names Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha. Bihar was originally listed but was dropped because its tribal areas went to Jharkhand. The minister may also look after welfare of SCs and backward classes."
  },
  {
    id: 12,
    question: "The Madhya Pradesh Vidhan Sabha has 230 members. Under Article 164(1A), inserted by the 91st Amendment, what is the maximum number of ministers, including the Chief Minister, the State can have?",
    options: ["35", "34", "23", "46"],
    answer: 1,
    explanation: "Article 164(1A) caps the total number of ministers including the CM at 15% of the total strength of the Assembly, with a floor of 12. 15% of 230 is 34.5, and since the number may not exceed this limit, the maximum is 34."
  },
  {
    id: 13,
    question: "Ministers other than the Chief Minister in Madhya Pradesh are appointed by",
    options: ["The Governor on the advice of the Chief Minister", "The Chief Minister directly", "The Speaker on the advice of the Chief Minister", "The Governor on the advice of the Chief Secretary"],
    answer: 0,
    explanation: "Article 164(1) states the Chief Minister is appointed by the Governor and the other ministers are appointed by the Governor on the advice of the Chief Minister. The Governor also administers their oaths of office and secrecy."
  },
  {
    id: 14,
    question: "The Council of Ministers of Madhya Pradesh is collectively responsible to",
    options: ["The Governor", "The Parliament of India", "The Legislative Assembly", "The High Court of Madhya Pradesh"],
    answer: 2,
    explanation: "Article 164(2) makes the Council of Ministers collectively responsible to the Legislative Assembly of the State. This is why a government that loses a no-confidence motion in the Vidhan Sabha must resign, even though individual ministers hold office during the Governor's pleasure."
  },
  {
    id: 15,
    question: "A person who is not a member of the Madhya Pradesh Legislature is sworn in as a minister. To continue in office, he must become a member of the Legislature within",
    options: ["Three consecutive months", "One year", "The next budget session", "Six consecutive months"],
    answer: 3,
    explanation: "Article 164(4) provides that a minister who for any period of six consecutive months is not a member of the Legislature shall cease to be a minister at the end of that period. This is why non-members contest a by-election soon after being sworn in."
  },
  {
    id: 16,
    question: "The Rules of Business of the Government of Madhya Pradesh, which allocate work among ministers, are made by",
    options: ["The Chief Secretary under Article 166(2)", "The Chief Minister under Article 167", "The Governor under Article 166(3)", "The Vidhan Sabha under Article 208"],
    answer: 2,
    explanation: "Article 166(3) empowers the Governor to make rules for the more convenient transaction of State government business and its allocation among ministers. Article 208 is about rules of procedure of the House itself, which the Assembly makes."
  },
  {
    id: 17,
    question: "After the 2008 delimitation, how many of the 230 seats in the Madhya Pradesh Vidhan Sabha are reserved for Scheduled Tribes?",
    options: ["35", "41", "52", "47"],
    answer: 3,
    explanation: "Following the Delimitation Order 2008, 47 Assembly seats in MP are reserved for STs and 35 for SCs, leaving 148 general seats. MP has the largest ST population of any State, which explains the high ST reservation."
  },
  {
    id: 18,
    question: "Under Article 189(3), what is the quorum for a sitting of the 230-member Madhya Pradesh Vidhan Sabha?",
    options: ["10 members", "23 members", "77 members", "46 members"],
    answer: 1,
    explanation: "The quorum is ten members or one-tenth of the total number of members of the House, whichever is greater. One-tenth of 230 is 23, which is greater than ten, so 23 members form the quorum."
  },
  {
    id: 19,
    question: "In the election of the President of India, what is the value of the vote of each elected MLA of Madhya Pradesh, based on the 1971 population?",
    options: ["208", "131", "175", "83"],
    answer: 1,
    explanation: "Value of an MLA's vote = State population (1971) ÷ elected MLAs ÷ 1000. For MP this is about 3,00,16,625 ÷ 230 ÷ 1000 ≈ 130.5, rounded to 131, so all 230 MLAs together carry 30,130 votes. 208 is the value for Uttar Pradesh and 175 for Maharashtra."
  },
  {
    id: 20,
    question: "Under Article 174, the maximum permissible gap between the last sitting of one session of the Madhya Pradesh Vidhan Sabha and the first sitting of the next session is",
    options: ["Three months", "Nine months", "One year", "Six months"],
    answer: 3,
    explanation: "Article 174(1) requires the Governor to summon the House so that six months do not intervene between its last sitting in one session and the first sitting in the next. Hence the Assembly must meet at least twice a year."
  },
  {
    id: 21,
    question: "To whom does the Speaker of the Madhya Pradesh Vidhan Sabha address his letter of resignation?",
    options: ["The Governor", "The Deputy Speaker", "The Chief Minister", "The Speaker pro tem"],
    answer: 1,
    explanation: "Article 179(b) provides that the Speaker may resign by writing under his hand addressed to the Deputy Speaker, and the Deputy Speaker resigns by writing to the Speaker. The Governor plays no role in the Speaker's resignation."
  },
  {
    id: 22,
    question: "A resolution for the removal of the Speaker of the Madhya Pradesh Vidhan Sabha must be passed by",
    options: ["A majority of all the then members of the Assembly, after at least 14 days' notice", "Two-thirds of members present and voting, after at least 7 days' notice", "A simple majority of members present and voting, after at least 14 days' notice", "The Governor, on the advice of the Chief Minister"],
    answer: 0,
    explanation: "Article 179(c) allows removal by a resolution passed by a majority of all the then members of the Assembly (an effective majority), with at least 14 days' notice of the intention to move it. While such a resolution is under consideration the Speaker does not preside but can speak and vote in the first instance."
  },
  {
    id: 23,
    question: "Immediately after a general election in Madhya Pradesh, newly elected MLAs take their oath before a Speaker pro tem. The Speaker pro tem is appointed by",
    options: ["The outgoing Speaker", "The Chief Election Commissioner", "The Chief Justice of the High Court", "The Governor"],
    answer: 3,
    explanation: "The Governor appoints a Speaker pro tem, conventionally a senior member of the new House, to administer oaths and preside until the Speaker is elected under Article 178. The Speaker pro tem's role ends once the new Speaker is chosen."
  },
  {
    id: 24,
    question: "An MLA of Madhya Pradesh is alleged to have voluntarily given up membership of the party on whose ticket he was elected. Under the Tenth Schedule, the question of his disqualification is decided by",
    options: ["The Speaker, subject to judicial review", "The Governor on the opinion of the Election Commission", "The High Court in its original jurisdiction", "The State Election Commission"],
    answer: 0,
    explanation: "Paragraph 6 of the Tenth Schedule makes the Speaker the deciding authority on defection. In Kihoto Hollohan (1992) the Supreme Court held the Speaker's decision is subject to judicial review. Disqualification for other reasons under Article 191(1) is decided by the Governor on the Election Commission's opinion (Article 192)."
  },
  {
    id: 25,
    question: "If a dispute arises whether a Bill before the Madhya Pradesh Vidhan Sabha is a Money Bill, whose decision is final?",
    options: ["The Governor", "The State Finance Minister", "The Advocate General", "The Speaker of the Vidhan Sabha"],
    answer: 3,
    explanation: "Article 199(3) makes the Speaker's decision final on whether a Bill is a Money Bill, and the Speaker certifies it. A Money Bill can be introduced only on the Governor's recommendation (Article 207), but the Governor does not decide its character."
  },
  {
    id: 26,
    question: "If the full Madhya Pradesh budget cannot be passed before 1 April, the Assembly can authorise expenditure for part of the coming year in advance through a",
    options: ["Supplementary grant", "Vote on account", "Excess grant", "Token grant"],
    answer: 1,
    explanation: "Article 206 allows the Assembly to make a grant in advance (vote on account) for part of the financial year pending completion of the budget process, commonly for election years. A supplementary grant covers extra need within the year, and an excess grant regularises spending beyond the amount granted."
  },
  {
    id: 27,
    question: "Who was the first Speaker of the Madhya Pradesh Vidhan Sabha after the State was formed in 1956?",
    options: ["Pandit Kunjilal Dubey", "Kashi Prasad Pandey", "Gulsher Ahmed", "Yagya Dutt Sharma"],
    answer: 0,
    explanation: "Pandit Kunjilal Dubey was the first Speaker of the new MP Vidhan Sabha and served from 1956 to 1967. The first Chief Minister was Pandit Ravishankar Shukla and the first Governor was Dr B. Pattabhi Sitaramayya."
  },
  {
    id: 28,
    question: "The Vidhan Bhawan in Bhopal, which houses the Madhya Pradesh Legislative Assembly, was designed by which architect?",
    options: ["Le Corbusier", "B. V. Doshi", "Laurie Baker", "Charles Correa"],
    answer: 3,
    explanation: "The MP Vidhan Bhawan, completed in 1996, was designed by Charles Correa, whose plan is based on a circle with a mandala layout. Correa also designed Bharat Bhawan in Bhopal. Le Corbusier is associated with Chandigarh's Capitol Complex."
  },
  {
    id: 29,
    question: "Madhya Pradesh has a unicameral legislature. Under Article 169, a Legislative Council can be created in the State if",
    options: ["The Governor issues a proclamation on the advice of the Council of Ministers", "The President issues an order after consulting the Election Commission", "The Assembly passes a resolution by a simple majority and the Governor assents", "The Assembly passes a resolution by a special majority and Parliament then provides for it by law"],
    answer: 3,
    explanation: "Article 169 requires a resolution of the State Assembly passed by a majority of its total membership and two-thirds of members present and voting, after which Parliament creates the Council by ordinary law. Such a law is not treated as a constitutional amendment under Article 368."
  },
  {
    id: 30,
    question: "The Governor of Madhya Pradesh can no longer nominate an Anglo-Indian member to the Vidhan Sabha because the provision for such nomination was ended by the",
    options: ["91st Constitutional Amendment", "95th Constitutional Amendment", "104th Constitutional Amendment", "101st Constitutional Amendment"],
    answer: 2,
    explanation: "The 104th Amendment Act (2019, effective January 2020) extended SC/ST reservation in legislatures by ten years but did not extend Anglo-Indian nomination under Articles 331 and 333. The 95th Amendment had extended both up to 2020, and the 101st introduced GST."
  },
  {
    id: 31,
    question: "The Advocate General of Madhya Pradesh is appointed under Article 165 by",
    options: ["The Chief Minister", "The Chief Justice of the High Court", "The President", "The Governor"],
    answer: 3,
    explanation: "Article 165 provides that the Governor appoints the Advocate General, the State's highest law officer. He holds office during the pleasure of the Governor and receives remuneration that the Governor determines."
  },
  {
    id: 32,
    question: "To be appointed Advocate General of Madhya Pradesh, a person must be",
    options: ["Qualified to be appointed a judge of the Supreme Court", "Qualified to be appointed a judge of a High Court", "A sitting member of the State Bar Council", "An advocate with at least twenty years of practice"],
    answer: 1,
    explanation: "Article 165(1) requires the Advocate General to be qualified for appointment as a High Court judge, that is, an Indian citizen who has held judicial office for ten years or been an advocate of a High Court for ten years. The Attorney General, by comparison, must be qualified to be a Supreme Court judge."
  },
  {
    id: 33,
    question: "During debate on a Bill, the Advocate General of Madhya Pradesh rises to speak in the Vidhan Sabha. Under Article 177, he",
    options: ["May speak only with the Governor's written permission", "May speak and vote because he is an ex-officio member", "Cannot address the House at all and must submit a written opinion", "May speak and take part in proceedings but cannot vote"],
    answer: 3,
    explanation: "Article 177 gives every minister and the Advocate General the right to speak in and take part in proceedings of the Assembly and its committees, but it does not entitle him to vote. He is not a member of the House."
  },
  {
    id: 34,
    question: "Apart from its principal seat at Jabalpur, the High Court of Madhya Pradesh has a bench at which of the following cities?",
    options: ["Bhopal", "Indore", "Sagar", "Rewa"],
    answer: 1,
    explanation: "The MP High Court has its principal seat at Jabalpur and benches only at Indore and Gwalior. Bhopal, though the capital, has no High Court bench, a fact often used as a distractor."
  },
  {
    id: 35,
    question: "The High Court of Madhya Pradesh traces its origin to which court established on 2 January 1936?",
    options: ["The Judicial Commissioner's Court at Rewa", "The Chief Court of Gwalior State", "The High Court of Judicature at Nagpur", "The High Court of Judicature at Allahabad"],
    answer: 2,
    explanation: "The High Court of Judicature at Nagpur was set up in 1936 by Letters Patent for the Central Provinces and Berar. On reorganisation of States on 1 November 1956 it became the High Court of Madhya Pradesh with its principal seat at Jabalpur."
  },
  {
    id: 36,
    question: "Who was the first Chief Justice of the High Court of Madhya Pradesh after its reconstitution in 1956, and later became Chief Justice of India?",
    options: ["Justice M. Hidayatullah", "Justice J. S. Verma", "Justice G. P. Singh", "Justice R. C. Lahoti"],
    answer: 0,
    explanation: "Justice Mohammad Hidayatullah was the first Chief Justice of the MP High Court (1956–58) and later the 11th Chief Justice of India. Justice J. S. Verma also served as Chief Justice of the MP High Court later and became CJI, but he was not the first."
  },
  {
    id: 37,
    question: "A judge of the High Court of Madhya Pradesh retires on attaining the age of",
    options: ["60 years", "62 years", "65 years", "58 years"],
    answer: 1,
    explanation: "Article 217(1) provides that a High Court judge holds office until the age of 62, whereas Supreme Court judges retire at 65 (Article 124). High Court judges are appointed by the President after consultation with the CJI and the Governor."
  },
  {
    id: 38,
    question: "A resident of Gwalior wants a writ against a State authority to enforce a statutory right that is not a fundamental right. Under which provision can the MP High Court issue the writ?",
    options: ["Article 32", "Article 226", "Article 227", "Article 136"],
    answer: 1,
    explanation: "Article 226 lets High Courts issue writs for enforcement of fundamental rights and 'for any other purpose', so it is wider than Article 32, which is limited to fundamental rights and lies before the Supreme Court. Article 227 is the power of superintendence over subordinate courts."
  },
  {
    id: 39,
    question: "District Judges in Madhya Pradesh are appointed under Article 233 by",
    options: ["The Chief Justice of the High Court alone", "The State Public Service Commission", "The Governor in consultation with the High Court", "The President on the recommendation of the Governor"],
    answer: 2,
    explanation: "Article 233 provides that appointments, postings and promotions of District Judges are made by the Governor in consultation with the High Court. Under Article 235, control over subordinate courts vests in the High Court."
  },
  {
    id: 40,
    question: "The institution of Lokayukta in Madhya Pradesh is governed by the MP Lokayukt Evam Up-Lokayukt Adhiniyam of which year?",
    options: ["1971", "1993", "1981", "2013"],
    answer: 2,
    explanation: "The MP Lokayukt Evam Up-Lokayukt Adhiniyam was enacted in 1981, long before the Lokpal and Lokayuktas Act 2013. Maharashtra had set up the first Lokayukta in India in 1971."
  },
  {
    id: 41,
    question: "Under the MP Lokayukt Evam Up-Lokayukt Adhiniyam 1981, the Lokayukta is appointed by the Governor after consultation with",
    options: ["The Chief Justice of the MP High Court and the Leader of Opposition in the Vidhan Sabha", "The Chief Justice of India and the Speaker", "The Chief Minister and the Chief Secretary", "The Lokpal of India and the Chief Justice of the MP High Court"],
    answer: 0,
    explanation: "The Act provides for appointment by the Governor by warrant under his hand and seal after consulting the Chief Justice of the High Court and the Leader of Opposition. This consultation is meant to secure the independence of the institution from the executive."
  },
  {
    id: 42,
    question: "A patwari in Madhya Pradesh is caught red-handed accepting a bribe in a trap laid on a farmer's complaint. Such trap cases under the Prevention of Corruption Act are typically conducted by",
    options: ["The State Criminal Investigation Department", "The Special Task Force of MP Police", "The Special Police Establishment of the Lokayukta", "The Central Bureau of Investigation"],
    answer: 2,
    explanation: "The MP Lokayukta has an investigating wing, the Special Police Establishment, that registers cases and lays traps against public servants under the Prevention of Corruption Act 1988. The CBI deals with Central government employees, and the STF handles organised crime."
  },
  {
    id: 43,
    question: "Vallabh Bhawan in Bhopal is best described as",
    options: ["The official residence of the Governor", "The seat of the Madhya Pradesh Vidhan Sabha", "The main State Secretariat of Madhya Pradesh", "The headquarters of the MP Public Service Commission"],
    answer: 2,
    explanation: "Vallabh Bhawan, named after Sardar Vallabhbhai Patel, is the Mantralaya (Secretariat) where the Chief Minister, ministers, Chief Secretary and departmental secretaries work. Satpura and Vindhyachal Bhawans house directorates, the Governor lives in Raj Bhavan, and the Vidhan Sabha sits in Vidhan Bhawan."
  },
  {
    id: 44,
    question: "Which officer heads the Secretariat of Madhya Pradesh and acts as secretary to the State Council of Ministers?",
    options: ["The Chief Secretary", "The Principal Secretary to the Governor", "The Divisional Commissioner of Bhopal", "The Additional Chief Secretary, Home"],
    answer: 0,
    explanation: "The Chief Secretary is the senior-most civil servant of the State, chosen by the State government, and heads Vallabh Bhawan's administrative machinery. He is ex-officio secretary to the Cabinet and coordinates all departments."
  },
  {
    id: 45,
    question: "Which of the following best describes the Divisional Commissioner in Madhya Pradesh?",
    options: ["A senior IAS officer who supervises the Collectors of a group of districts and hears revenue appeals", "The elected head of the Zila Panchayats of a division", "A police officer of Inspector General rank in charge of a range", "A judicial officer who heads the sessions courts of a division"],
    answer: 0,
    explanation: "The Divisional Commissioner heads a revenue division, coordinates development and law and order across its districts, and is a revenue appellate authority under the MP Land Revenue Code 1959. Police ranges under an IG or DIG are a separate hierarchy."
  },
  {
    id: 46,
    question: "In which year was the Police Commissioner system introduced in Bhopal and Indore?",
    options: ["2019", "2023", "2021", "2017"],
    answer: 2,
    explanation: "Madhya Pradesh notified the Police Commissionerate system for Bhopal and Indore on 9 December 2021, the first such system in the State, with ADG-rank officers as Police Commissioners. It covered 38 police stations in Bhopal and 36 in Indore."
  },
  {
    id: 47,
    question: "After the commissionerate system was introduced in Indore, communal tension breaks out and prohibitory orders restricting assembly have to be issued in the city. Who now issues such orders?",
    options: ["Only the District Magistrate (Collector)", "The Police Commissioner, exercising executive magistrate powers", "Only the Divisional Commissioner", "The Sub-Divisional Magistrate on the High Court's direction"],
    answer: 1,
    explanation: "Under the commissionerate system, magisterial powers such as issuing prohibitory orders (Section 163 BNSS 2023, earlier Section 144 CrPC) and preventive action are given to the Police Commissioner within the commissionerate area. Outside it, the District Magistrate continues to exercise them."
  },
  {
    id: 48,
    question: "Who was the first Police Commissioner of Indore?",
    options: ["Makrand Deoskar", "Kailash Makwana", "Sudhir Saxena", "Harinarayanachari Mishra"],
    answer: 3,
    explanation: "When the commissionerate began in December 2021, Harinarayanachari Mishra became Indore's first Police Commissioner and Makrand Deoskar became Bhopal's. Sudhir Saxena and Kailash Makwana later served as DGP of Madhya Pradesh."
  },
  {
    id: 49,
    question: "President's Rule was imposed in Madhya Pradesh in December 1992 when which Chief Minister's government was dismissed?",
    options: ["Sunderlal Patwa", "Arjun Singh", "Motilal Vora", "Digvijaya Singh"],
    answer: 0,
    explanation: "Following the demolition of the Babri structure in December 1992, the BJP governments of MP, UP, Rajasthan and Himachal were dismissed under Article 356. In MP the Sunderlal Patwa ministry was dismissed, and President's Rule lasted until the Digvijaya Singh government took office in December 1993."
  },
  {
    id: 50,
    question: "How many seats does Madhya Pradesh have in the Lok Sabha and the Rajya Sabha respectively?",
    options: ["29 and 10", "40 and 11", "25 and 11", "29 and 11"],
    answer: 3,
    explanation: "Madhya Pradesh elects 29 members to the Lok Sabha and 11 to the Rajya Sabha. After Chhattisgarh was carved out in 2000, MP's Lok Sabha seats fell from 40 to 29 and its Rajya Sabha seats from 16 to 11."
  }
];

export default questions;

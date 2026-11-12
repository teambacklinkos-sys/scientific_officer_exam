const questions = [
  {
    id: 1,
    question: "Justice Surya Kant, who took oath as the 53rd Chief Justice of India on 24 November 2025, is the first Chief Justice of India from which state?",
    options: ["Punjab", "Himachal Pradesh", "Haryana", "Rajasthan"],
    answer: 2,
    explanation: "Justice Surya Kant (born in Hisar, Haryana, 1962) was sworn in by President Droupadi Murmu on 24 November 2025, succeeding CJI B.R. Gavai. He is the first CJI from Haryana and his tenure runs until 9 February 2027. The CJI is appointed under Article 124(2) of the Constitution."
  },
  {
    id: 2,
    question: "In the final of the ICC Men's T20 World Cup 2026, played at the Narendra Modi Stadium, Ahmedabad on 8 March 2026, India defeated which team?",
    options: ["Australia", "New Zealand", "England", "South Africa"],
    answer: 1,
    explanation: "India beat New Zealand by 96 runs in the final on 8 March 2026 after posting 255/5, the highest total in a T20 World Cup final. With titles in 2007, 2024 and 2026, India became the first team to win three men's T20 World Cups, the first to defend the title and the first to win it at home. The tournament was co-hosted by India and Sri Lanka."
  },
  {
    id: 3,
    question: "India won its first-ever ICC Women's ODI World Cup on 2 November 2025 by beating South Africa by 52 runs. Where was the final played?",
    options: ["Eden Gardens, Kolkata", "Narendra Modi Stadium, Ahmedabad", "M. Chinnaswamy Stadium, Bengaluru", "DY Patil Stadium, Navi Mumbai"],
    answer: 3,
    explanation: "The 2025 Women's World Cup final was played at DY Patil Stadium, Navi Mumbai on 2 November 2025. India scored 298/7 and won by 52 runs under captain Harmanpreet Kaur, with Shafali Verma (87 and 2 wickets) the Player of the Match."
  },
  {
    id: 4,
    question: "Who was named Player of the Tournament at the ICC Women's ODI World Cup 2025, becoming the first player to score 200+ runs and take 15+ wickets in a single Women's World Cup edition?",
    options: ["Smriti Mandhana", "Harmanpreet Kaur", "Deepti Sharma", "Jemimah Rodrigues"],
    answer: 2,
    explanation: "All-rounder Deepti Sharma was Player of the Tournament (November 2025) with 215 runs and 22 wickets. She became the first player, man or woman, to achieve a 200-run and 15-wicket double in a World Cup edition. South Africa's Laura Wolvaardt was the top run-scorer."
  },
  {
    id: 5,
    question: "The 2026 Nobel Prize in Physiology or Medicine was awarded to Karl Deisseroth, Peter Hegemann and Georg Nagel for work that led to which technique?",
    options: ["CRISPR-Cas9 genome editing", "Optogenetics", "mRNA vaccine technology", "Induced pluripotent stem cells"],
    answer: 1,
    explanation: "The October 2026 Medicine Nobel recognised the development of optogenetics, which uses light-sensitive proteins (channelrhodopsins) to switch selected cells, especially neurons, on or off with light. CRISPR was the 2020 Chemistry prize, mRNA vaccines the 2023 Medicine prize and iPS cells the 2012 Medicine prize."
  },
  {
    id: 6,
    question: "Francis Halzen received the 2026 Nobel Prize in Physics for his decisive contributions to which facility, used to detect high-energy neutrinos from astrophysical sources?",
    options: ["Event Horizon Telescope", "LIGO gravitational-wave observatory", "IceCube Neutrino Observatory at the South Pole", "Large Hadron Collider at CERN"],
    answer: 2,
    explanation: "Halzen led the IceCube Neutrino Observatory, a cubic-kilometre detector buried in Antarctic ice that detects Cherenkov light from neutrino interactions. The prize was announced in October 2026. LIGO detects gravitational waves and the Event Horizon Telescope imaged black-hole shadows."
  },
  {
    id: 7,
    question: "Henri B. Kagan and Kenso Soai won the 2026 Nobel Prize in Chemistry for the discovery of non-linear effects and autocatalysis in which field?",
    options: ["Metal-organic frameworks", "Click chemistry", "Lithium-ion batteries", "Asymmetric organic synthesis"],
    answer: 3,
    explanation: "The prize (announced 7 October 2026) was for non-linear effects and autocatalysis in asymmetric organic synthesis. This work explains how reactions can favour one mirror-image (chiral) form of a molecule. Metal-organic frameworks won in 2025, click chemistry in 2022 and lithium-ion batteries in 2019."
  },
  {
    id: 8,
    question: "The 2026 Nobel Peace Prize was awarded \"for her efforts to promote peace and international law\" to which South African jurist and former UN High Commissioner for Human Rights?",
    options: ["Fatou Bensouda", "Mary Robinson", "Michelle Bachelet", "Navi Pillay"],
    answer: 3,
    explanation: "Navanethem \"Navi\" Pillay won the Nobel Peace Prize, announced on 9 October 2026. She served as a judge and President of the International Criminal Tribunal for Rwanda, as a judge of the ICC and as UN High Commissioner for Human Rights (2008–2014). Mary Robinson and Michelle Bachelet also held that UN post but were not the laureates."
  },
  {
    id: 9,
    question: "Who won the 2026 Nobel Prize in Literature, cited for a \"bold and inventive\" body of work in playful dialogue with the classical tradition?",
    options: ["Anne Carson", "Margaret Atwood", "Salman Rushdie", "Haruki Murakami"],
    answer: 0,
    explanation: "Canadian poet, essayist and classicist Anne Carson won the 2026 Literature Nobel, announced by the Swedish Academy on 8 October 2026. Her work blends Greek and Latin classics with modern forms. The 2025 laureate was László Krasznahorkai."
  },
  {
    id: 10,
    question: "Which country won the 2026 FIFA World Cup, beating Argentina 1–0 after extra time in the final at MetLife Stadium, New Jersey on 19 July 2026?",
    options: ["France", "Brazil", "England", "Spain"],
    answer: 3,
    explanation: "Spain won its second World Cup title (after 2010) when Ferran Torres scored in the 106th minute against Argentina. The 2026 tournament, co-hosted by the USA, Canada and Mexico, was the first with 48 teams. England beat France in the third-place match."
  },
  {
    id: 11,
    question: "Which country topped the medal table at the 2026 Winter Olympics held in Milano Cortina, Italy, in February 2026?",
    options: ["Norway", "Germany", "United States", "Italy"],
    answer: 0,
    explanation: "Norway topped the Milano Cortina 2026 medal table with 18 gold and 41 medals in total, a Winter Games record for golds by Norway. The United States came second with 12 golds. The Games ran from 6 to 22 February 2026."
  },
  {
    id: 12,
    question: "At the 2026 Asian Games held in Aichi-Nagoya, Japan, India finished fourth in the medal table with a total of how many medals?",
    options: ["106", "70", "85", "92"],
    answer: 2,
    explanation: "India won 85 medals (21 gold, 27 silver, 37 bronze) at Aichi-Nagoya 2026, edging Uzbekistan for fourth place on silver count. This was below India's record of 106 medals at Hangzhou (held in 2023). China topped the table, followed by Japan."
  },
  {
    id: 13,
    question: "At the Glasgow 2026 Commonwealth Games, held without wrestling and shooting, India finished fourth with 39 medals. Which nation topped the medal table?",
    options: ["England", "Canada", "New Zealand", "Australia"],
    answer: 3,
    explanation: "Australia topped the medal table at the scaled-down Glasgow 2026 Games, which closed on 2 August 2026, with England second. India won 39 medals (13 gold, 17 silver, 9 bronze) and finished fourth. The Glasgow programme had only 10 sports."
  },
  {
    id: 14,
    question: "The centenary Commonwealth Games of 2030 were formally awarded to which Indian city at the Commonwealth Sport General Assembly in Glasgow on 26 November 2025?",
    options: ["New Delhi", "Bhubaneswar", "Ahmedabad", "Hyderabad"],
    answer: 2,
    explanation: "Ahmedabad (Amdavad) was ratified as host of the 2030 Commonwealth Games on 26 November 2025, beating Nigeria's Abuja, which will be considered for 2034. The 2030 Games mark 100 years since the first Games at Hamilton, Canada in 1930. It will be India's second Commonwealth Games after New Delhi 2010."
  },
  {
    id: 15,
    question: "Who won the FIDE World Cup 2025 held in Goa in November 2025, becoming the youngest ever World Cup winner at 19?",
    options: ["Wei Yi", "Nodirbek Abdusattorov", "Arjun Erigaisi", "Javokhir Sindarov"],
    answer: 3,
    explanation: "Uzbekistan's Javokhir Sindarov beat China's Wei Yi in the rapid tiebreaks of the final on 26 November 2025 in Goa. The win qualified him for the 2026 Candidates Tournament, which he also won in April 2026 to earn a title match against world champion D. Gukesh."
  },
  {
    id: 16,
    question: "Which Indian Grandmaster won the 2026 FIDE Women's Candidates Tournament, earning the right to challenge Ju Wenjun for the Women's World Championship?",
    options: ["Vaishali Rameshbabu", "Divya Deshmukh", "Koneru Humpy", "Harika Dronavalli"],
    answer: 0,
    explanation: "R. Vaishali won the Women's Candidates in Cyprus in April 2026, finishing clear first on 8½/14 after beating Kateryna Lagno in the last round. She is the sister of GM R. Praggnanandhaa. Divya Deshmukh had won the 2025 Women's World Cup."
  },
  {
    id: 17,
    question: "Who was crowned Miss Universe 2025 at the 74th Miss Universe pageant held in Thailand in November 2025?",
    options: ["Victoria Kjær Theilvig", "Fátima Bosch", "Stephany Abasali", "Praveenar Singh"],
    answer: 1,
    explanation: "Fátima Bosch of Mexico was crowned Miss Universe 2025 on 21 November 2025, becoming Mexico's fourth winner. Thailand's Praveenar \"Veena\" Singh was first runner-up and Venezuela's Stephany Abasali second runner-up. Victoria Kjær Theilvig of Denmark was the outgoing 2024 titleholder."
  },
  {
    id: 18,
    question: "Which author won the Booker Prize 2025 (announced in November 2025) for the novel \"Flesh\"?",
    options: ["Susan Choi", "Kiran Desai", "David Szalay", "Andrew Miller"],
    answer: 2,
    explanation: "Hungarian-British writer David Szalay won the 2025 Booker Prize for \"Flesh\", announced on 10 November 2025 in London. Kiran Desai (\"The Loneliness of Sonia and Sunny\"), Susan Choi and Andrew Miller were on the same shortlist. Kiran Desai had won the Booker earlier, in 2006."
  },
  {
    id: 19,
    question: "The Booker Prize 2026, announced in November 2026, went to M. John Harrison, the oldest winner in the prize's history, for which novel?",
    options: ["John of John", "Taiwan Travelogue", "Flesh", "The End of Everything"],
    answer: 3,
    explanation: "British science-fiction writer M. John Harrison won the 2026 Booker Prize for \"The End of Everything\", a post-apocalyptic novel. At 81 he is the oldest Booker winner. Douglas Stuart's \"John of John\" was shortlisted, \"Flesh\" won in 2025 and \"Taiwan Travelogue\" won the 2026 International Booker."
  },
  {
    id: 20,
    question: "The International Booker Prize 2026 was won by \"Taiwan Travelogue\" by Yáng Shuāng-zǐ, translated by Lin King. It was the first winning work translated from which language?",
    options: ["Japanese", "Korean", "Tamil", "Mandarin Chinese"],
    answer: 3,
    explanation: "\"Taiwan Travelogue\" won the International Booker on 19 May 2026 at Tate Modern, London. It is the first winner translated from Mandarin Chinese, and the £50,000 prize is shared equally between author and translator. Korean (Han Kang) and Kannada (Banu Mushtaq, 2025) works had won earlier editions."
  },
  {
    id: 21,
    question: "R. Vairamuthu, selected in March 2026 for the 60th Jnanpith Award (for the year 2025), writes in which language?",
    options: ["Telugu", "Malayalam", "Tamil", "Kannada"],
    answer: 2,
    explanation: "Poet and film lyricist R. Vairamuthu is the third Tamil writer to win the Jnanpith, after Akilan (1975) and Jayakanthan (2002). The award carries ₹11 lakh, a citation and a bronze statue of Vagdevi. The previous (59th) award went to Hindi writer Vinod Kumar Shukla of Chhattisgarh."
  },
  {
    id: 22,
    question: "Actor Anant Nag, named in September 2026 for the Dadasaheb Phalke Award (for 2024), is mainly associated with which film industry?",
    options: ["Bengali", "Telugu", "Marathi", "Kannada"],
    answer: 3,
    explanation: "Anant Nag is a veteran Kannada actor, also known for Hindi art films like \"Ankur\" and the TV series \"Malgudi Days\". The Phalke Award, India's highest film honour, is presented with the National Film Awards. The two previous awards went to Mithun Chakraborty (2022) and Mohanlal (2023)."
  },
  {
    id: 23,
    question: "Which film actor was conferred the Padma Vibhushan posthumously in the Padma Awards announced on 25 January 2026?",
    options: ["Amitabh Bachchan", "Dharmendra", "Mithun Chakraborty", "Rajinikanth"],
    answer: 1,
    explanation: "Dharmendra (Dharmendra Singh Deol), who died in November 2025, received the Padma Vibhushan posthumously in the 2026 list. The five 2026 Padma Vibhushan awardees also included former Kerala CM V.S. Achuthanandan (posthumous), Justice K.T. Thomas, violinist N. Rajam and P. Narayanan. Amitabh Bachchan and Rajinikanth received the Padma Vibhushan in earlier years."
  },
  {
    id: 24,
    question: "Group Captain Shubhanshu Shukla, the first Indian to visit the International Space Station, was announced on the eve of Republic Day 2026 as the recipient of which award?",
    options: ["Kirti Chakra", "Ashoka Chakra", "Shaurya Chakra", "Vir Chakra"],
    answer: 1,
    explanation: "Shubhanshu Shukla received the Ashoka Chakra, India's highest peacetime gallantry award, in January 2026 for the Axiom-4 mission (2025). It was the only Ashoka Chakra among 70 gallantry awards approved for armed forces personnel. The Vir Chakra is a wartime award."
  },
  {
    id: 25,
    question: "The AI Impact Summit, which adopted the New Delhi Declaration on AI Impact in February 2026, was held at which venue?",
    options: ["Bharat Mandapam, New Delhi", "Yashobhoomi, Dwarka", "Mahatma Mandir, Gandhinagar", "Vigyan Bhawan, New Delhi"],
    answer: 0,
    explanation: "The India AI Impact Summit was held at Bharat Mandapam, New Delhi on 16–21 February 2026. It was the first summit in this series held in the Global South, after Bletchley Park (2023), Seoul (2024) and Paris (2025). Its declaration is non-binding and promotes inclusive, human-centric AI."
  },
  {
    id: 26,
    question: "India and the European Union announced the conclusion of their Free Trade Agreement negotiations at the 16th India-EU Summit on 27 January 2026. Who were the chief guests at India's Republic Day parade that year?",
    options: ["Prabowo Subianto", "Emmanuel Macron", "Ursula von der Leyen and António Costa", "Keir Starmer"],
    answer: 2,
    explanation: "European Commission President Ursula von der Leyen and European Council President António Costa were joint chief guests at the 77th Republic Day (2026), the first time EU leaders held this role. Talks on the FTA had started in 2007. Prabowo Subianto (2025) and Emmanuel Macron (2024) were earlier chief guests."
  },
  {
    id: 27,
    question: "India signed a Comprehensive Economic Partnership Agreement (CEPA) with Oman in Muscat on 18 December 2025. This was India's second such agreement with a GCC member. The first was with which country?",
    options: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Bahrain"],
    answer: 1,
    explanation: "The India-UAE CEPA, signed in February 2022, was India's first trade agreement with a Gulf Cooperation Council country. The India-Oman CEPA was signed by Piyush Goyal and Oman's commerce minister during PM Modi's visit, in the presence of Sultan Haitham bin Tarik. It gives zero-duty access on about 98% of Oman's tariff lines."
  },
  {
    id: 28,
    question: "President Vladimir Putin visited India on 4–5 December 2025 for the 23rd India-Russia Annual Summit. The visit marked the 25th anniversary of which document?",
    options: ["The BRICS founding declaration", "The Indo-Soviet Treaty of Peace, Friendship and Cooperation", "The Kudankulam nuclear agreement", "The Declaration on Strategic Partnership"],
    answer: 3,
    explanation: "The India-Russia Declaration on Strategic Partnership was signed in October 2000, so December 2025 marked its 25th anniversary. The Indo-Soviet Treaty dates from 1971. The summit covered labour mobility, trade, energy and defence, and Putin invited Modi to Russia for the 2026 summit."
  },
  {
    id: 29,
    question: "The G20 Leaders' Summit held in Johannesburg on 22–23 November 2025 was historically notable because it was:",
    options: ["the first G20 summit held on African soil", "the first summit at which the African Union took part as a member", "the first G20 summit chaired by Brazil", "the summit at which the G20 was expanded to include the European Union"],
    answer: 0,
    explanation: "Johannesburg 2025 was the first G20 summit hosted in Africa, under South Africa's presidency. The leaders' declaration was adopted at the start of the summit despite a US boycott. The African Union became a permanent member at the 2023 New Delhi summit, and the 2026 presidency passed to the USA."
  },
  {
    id: 30,
    question: "The \"Global Mutirão\" decision adopted at COP30 in Belém, Brazil in November 2025 called for tripling which of the following by 2035?",
    options: ["Renewable energy capacity", "Global energy-efficiency improvement rate", "Adaptation finance", "Protected forest area in the Amazon"],
    answer: 2,
    explanation: "The Global Mutirão decision called for efforts to at least triple adaptation finance by 2035, though without a clearly defined baseline. It also launched the Global Implementation Accelerator and the Belém Mission to 1.5°C, but left out any fossil-fuel phase-out roadmap. Tripling renewable capacity by 2030 was agreed earlier, at COP28 in Dubai."
  },
  {
    id: 31,
    question: "COP31 (November 2026) is hosted by Türkiye in Antalya under a special arrangement in which another country leads the negotiations as \"President of negotiations\". Which country is it?",
    options: ["Brazil", "Australia", "Azerbaijan", "Fiji"],
    answer: 1,
    explanation: "After Türkiye and Australia both bid for COP31, they agreed that Türkiye would host in Antalya and Australia would lead the negotiations, with the Pacific Islands expected to host the pre-COP. Brazil hosted COP30 (Belém, 2025) and Azerbaijan hosted COP29 (Baku, 2024)."
  },
  {
    id: 32,
    question: "India held the BRICS chairship in 2026. The 18th BRICS Summit was held on 12–13 September 2026 in which city?",
    options: ["Mumbai", "New Delhi", "Bengaluru", "Goa"],
    answer: 1,
    explanation: "India took over the BRICS chair from Brazil on 1 January 2026 and hosted the 18th summit at Bharat Mandapam, New Delhi. Its theme was \"Building for Resilience, Innovation, Cooperation and Sustainability\". India last hosted BRICS in 2021 (virtual) and in Goa in 2016."
  },
  {
    id: 33,
    question: "PM Narendra Modi attended the 52nd G7 Summit as an outreach invitee in June 2026. Évian-les-Bains, where the summit was held, is in which country?",
    options: ["Italy", "Canada", "France", "Switzerland"],
    answer: 2,
    explanation: "France hosted the 52nd G7 Summit at Évian-les-Bains on Lake Geneva in June 2026, and Modi attended at President Macron's invitation. India is not a G7 member but is regularly invited to outreach sessions. Canada hosted in 2025 (Kananaskis) and Italy in 2024."
  },
  {
    id: 34,
    question: "What fiscal deficit target for 2026-27 did Finance Minister Nirmala Sitharaman set in the Union Budget presented on 1 February 2026?",
    options: ["4.3% of GDP", "4.4% of GDP", "4.8% of GDP", "3.5% of GDP"],
    answer: 0,
    explanation: "The 2026-27 budget set the fiscal deficit at 4.3% of GDP, down from the 4.4% budgeted for 2025-26, and gross market borrowing at about ₹17.2 lakh crore. It was Sitharaman's ninth consecutive Union Budget. The government's fiscal anchor is now shifting to a debt-to-GDP path."
  },
  {
    id: 35,
    question: "At its meeting of 5–7 October 2026, RBI's Monetary Policy Committee set the policy repo rate at 5.50%. Which statement correctly describes this decision?",
    options: ["A 25 bps cut with a neutral stance", "No change, with an accommodative stance", "A 25 bps hike with the stance changed to calibrated tightening", "A 50 bps hike with a neutral stance"],
    answer: 2,
    explanation: "The MPC raised the repo rate by 25 basis points from 5.25% to 5.50% and changed its stance to \"calibrated tightening\". After the hike the SDF rate is 5.25% and the MSF rate and Bank Rate are 5.75%. The last cut, in December 2025, had taken the rate from 5.50% to 5.25%."
  },
  {
    id: 36,
    question: "The four Labour Codes that came into force on 21 November 2025 consolidate how many existing central labour laws?",
    options: ["44", "29", "13", "25"],
    answer: 1,
    explanation: "The Code on Wages (2019), Industrial Relations Code (2020), Code on Social Security (2020) and Occupational Safety, Health and Working Conditions Code (2020) together replace 29 central labour laws. They were notified with effect from 21 November 2025. The Social Security Code also covers gig and platform workers."
  },
  {
    id: 37,
    question: "The Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin) Act, 2025 (VB-G RAM G), which replaced MGNREGA, guarantees at least how many days of wage employment per rural household per financial year?",
    options: ["100 days", "150 days", "120 days", "125 days"],
    answer: 3,
    explanation: "The VB-G RAM G Act raises the guarantee from MGNREGA's 100 days to at least 125 days of unskilled manual work per rural household per year. The President gave assent on 21 December 2025. States may pause the scheme for up to 60 days a year during peak sowing and harvesting seasons."
  },
  {
    id: 38,
    question: "The SHANTI Act, 2025, which opens India's civil nuclear power sector to private companies, repealed which two laws?",
    options: ["Atomic Energy Act, 1962 and Civil Liability for Nuclear Damage Act, 2010", "Electricity Act, 2003 and Energy Conservation Act, 2001", "Environment (Protection) Act, 1986 and Atomic Energy Act, 1962", "Mines and Minerals Act, 1957 and Civil Liability for Nuclear Damage Act, 2010"],
    answer: 0,
    explanation: "SHANTI stands for Sustainable Harnessing and Advancement of Nuclear Energy for Transforming India. Parliament passed it in December 2025. It replaces the Atomic Energy Act, 1962 and the CLND Act, 2010, lets private firms build, own and operate nuclear plants, and gives the Atomic Energy Regulatory Board statutory status."
  },
  {
    id: 39,
    question: "The Houselisting and Housing Census phase of Census 2027 began on 1 April 2026. Which feature was introduced for the first time in an Indian census?",
    options: ["Self-enumeration through a web portal, with digital data capture on mobile apps", "Enumeration of caste", "Door-to-door visits by enumerators", "Questions on household amenities"],
    answer: 0,
    explanation: "Census 2027 is India's first digital census. Citizens could self-enumerate on a web portal during a 15-day window before the house visits, and enumerators recorded data on smartphones. Caste was last enumerated in full in 1931 and will be recorded in the population phase in February 2027."
  },
  {
    id: 40,
    question: "Nitish Kumar took oath as Chief Minister of Bihar for a record tenth time on 20 November 2025 at Gandhi Maidan, Patna. Which Governor administered the oath?",
    options: ["Rajendra Arlekar", "Arif Mohammad Khan", "Phagu Chauhan", "Anandiben Patel"],
    answer: 1,
    explanation: "Governor Arif Mohammad Khan administered the oath after the NDA won the November 2025 Bihar Assembly election. BJP's Samrat Choudhary and Vijay Kumar Sinha became Deputy CMs. Rajendra Arlekar was Khan's predecessor as Governor of Bihar."
  },
  {
    id: 41,
    question: "Tamilaga Vettri Kazhagam (TVK), which emerged as the single largest party in the Tamil Nadu Assembly election results declared on 4 May 2026, was founded by:",
    options: ["Kamal Haasan", "Vijay", "Vijayakanth", "Rajinikanth"],
    answer: 1,
    explanation: "Actor Vijay founded TVK in 2024, and the party ended decades of DMK–AIADMK dominance in the 2026 election. Kamal Haasan founded Makkal Needhi Maiam and Vijayakanth founded the DMDK. In the same round of elections the BJP won West Bengal and the UDF returned to power in Kerala."
  },
  {
    id: 42,
    question: "Who took charge as India's Chief of Defence Staff on 31 May 2026, succeeding General Anil Chauhan?",
    options: ["Gen N.S. Raja Subramani", "Gen Upendra Dwivedi", "Admiral Dinesh K. Tripathi", "Air Chief Marshal A.P. Singh"],
    answer: 0,
    explanation: "Lt Gen N.S. Raja Subramani (Retd), a former Vice Chief of Army Staff, was named the third CDS in May 2026. He also became Secretary of the Department of Military Affairs. On the same day, Vice Admiral Krishna Swaminathan took over as Navy Chief from Admiral Dinesh K. Tripathi."
  },
  {
    id: 43,
    question: "\"Kusha\", whose maiden flight test DRDO carried out from APJ Abdul Kalam Island in July 2026, is a:",
    options: ["Long-range surface-to-air missile", "Hypersonic glide vehicle", "Submarine-launched ballistic missile", "Man-portable anti-tank guided missile"],
    answer: 0,
    explanation: "Project Kusha is DRDO's indigenous long-range surface-to-air missile (LR-SAM) for layered air defence, broadly comparable in role to the S-400. Its maiden flight test was in July 2026 from Dr APJ Abdul Kalam Island off Odisha. The project is meant to reduce India's dependence on imported air-defence systems."
  },
  {
    id: 44,
    question: "\"Pralay\", successfully flight-tested by DRDO off the Odisha coast on 5 November 2026, is best described as a:",
    options: ["Air-to-air beyond-visual-range missile", "Ship-launched supersonic cruise missile", "Quasi-ballistic surface-to-surface missile", "Anti-radiation air-to-surface missile"],
    answer: 2,
    explanation: "Pralay is a short-range, quasi-ballistic surface-to-surface missile that can manoeuvre in flight to evade interceptors. The Defence Ministry said all test objectives were met in the November 2026 trial and that induction is imminent. Astra is an air-to-air missile and RudraM is DRDO's air-to-surface series."
  },
  {
    id: 45,
    question: "In May 2026 India flight-tested an advanced Agni missile with MIRV capability. In missile technology, MIRV stands for:",
    options: ["Multi-stage Intercontinental Rocket Vehicle", "Missile Interception and Re-routing Vehicle", "Medium-range Inertially guided Re-entry Vehicle", "Multiple Independently targetable Re-entry Vehicle"],
    answer: 3,
    explanation: "A MIRV payload carries several warheads on one missile, each able to strike a different target. The May 2026 test from Dr APJ Abdul Kalam Island showed one missile engaging multiple targets. India first demonstrated MIRV with Mission Divyastra (Agni-5) in March 2024."
  },
  {
    id: 46,
    question: "On 24 December 2025, ISRO's LVM3-M6 placed the BlueBird Block-2 satellite (about 6,100 kg), the heaviest payload ever launched from Indian soil, into low Earth orbit. Which company owns this satellite?",
    options: ["OneWeb", "AST SpaceMobile", "SpaceX (Starlink)", "Amazon (Project Kuiper)"],
    answer: 1,
    explanation: "BlueBird Block-2 belongs to US-based AST SpaceMobile, which is building satellites that connect directly to ordinary smartphones. The commercial launch from Sriharikota broke the record set a month earlier by CMS-03 (about 4,400 kg, November 2025). LVM3 had earlier launched OneWeb satellites in 2022–23."
  },
  {
    id: 47,
    question: "NASA's Artemis II, the first crewed Artemis mission, flew around the Moon from 1 to 10 April 2026. Besides three NASA astronauts, its crew included an astronaut from which country?",
    options: ["Canada", "Japan", "France", "India"],
    answer: 0,
    explanation: "Artemis II carried Reid Wiseman, Victor Glover and Christina Koch of NASA and Jeremy Hansen of the Canadian Space Agency on a 10-day lunar flyby, without landing. It was the first crewed flight beyond low Earth orbit since Apollo 17 (1972). The crew splashed down in the Pacific off San Diego."
  },
  {
    id: 48,
    question: "What was India's rank in the Global Innovation Index 2026, released by WIPO, in which Switzerland retained first place?",
    options: ["40th", "38th", "48th", "52nd"],
    answer: 1,
    explanation: "India was ranked 38th of 139 economies in GII 2026, the same as in 2025, up from 48th in 2020. It is first among lower-middle-income economies and in Central and Southern Asia, and ranks first globally in ICT services exports. Switzerland, Sweden and the United States led the index."
  },
  {
    id: 49,
    question: "In the Global Hunger Index 2026 (released October 2026), India ranked 100th out of 122 countries. In which severity category was India placed?",
    options: ["Serious", "Moderate", "Low", "Alarming"],
    answer: 0,
    explanation: "With a score of 24.1, India was in the \"serious\" category of GHI 2026, an improvement from 102nd (score 25.8) in 2025. The index combines undernourishment, child stunting, child wasting and child mortality. India's child wasting rate is among the highest in South Asia, and the Government of India disputes the index's methodology."
  },
  {
    id: 50,
    question: "A year-long national commemoration was launched on 7 November 2025 to mark 150 years of the national song \"Vande Mataram\". Who composed it?",
    options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sri Aurobindo", "Subramania Bharati"],
    answer: 0,
    explanation: "Bankim Chandra Chattopadhyay wrote \"Vande Mataram\" in 1875, and it later appeared in his novel \"Anandamath\" (1882). The Constituent Assembly adopted it as the national song on 24 January 1950. Rabindranath Tagore wrote the national anthem \"Jana Gana Mana\"."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "The tropical monsoon climate of Madhya Pradesh has a marked continental character, with hot summers and cool winters. The main reason is that the state:",
    options: ["is shielded on the north by the Himalaya", "lies entirely south of the Tropic of Cancer", "receives most of its rain from western disturbances", "lies far from the sea, so there is no moderating maritime influence"],
    answer: 3,
    explanation: "MP is landlocked and far from both the Arabian Sea and the Bay of Bengal, so it has a large annual and daily temperature range. The Tropic of Cancer actually runs through the middle of the state, and most of its rain comes from the south-west monsoon."
  },
  {
    id: 2,
    question: "In Madhya Pradesh, the light winter rain locally called 'Mavtha' is caused by:",
    options: ["The retreating north-east monsoon", "Tropical cyclones from the Bay of Bengal", "Western disturbances", "Convectional storms of the pre-monsoon season"],
    answer: 2,
    explanation: "Mavtha is the light winter rainfall brought to MP by western disturbances originating over the Mediterranean region. It is valuable for rabi crops such as wheat and gram grown on residual soil moisture."
  },
  {
    id: 3,
    question: "Average annual rainfall in Madhya Pradesh generally decreases in which direction?",
    options: ["From south-east to north-west", "From north-west to south-east", "From west to east", "From north to south"],
    answer: 0,
    explanation: "Eastern and south-eastern MP (Balaghat, Mandla, Dindori, Sidhi) get the most rain from the Bay of Bengal branch of the monsoon, often over 1,400 mm. Rainfall drops steadily towards the north-west, where the Gwalior–Chambal region is the driest part of the state."
  },
  {
    id: 4,
    question: "Which place records the highest average annual rainfall in Madhya Pradesh?",
    options: ["Bhind", "Pachmarhi", "Indore", "Gwalior"],
    answer: 1,
    explanation: "Pachmarhi on the Mahadeo hills receives the highest rainfall in MP because of orographic lifting of monsoon winds over the Satpuras. Gwalior and Bhind in the north-west are among the driest areas."
  },
  {
    id: 5,
    question: "Which district of Madhya Pradesh is generally cited as receiving the lowest annual rainfall?",
    options: ["Mandla", "Narmadapuram", "Bhind", "Balaghat"],
    answer: 2,
    explanation: "Bhind in the north-western Chambal region usually receives the least rainfall in MP, well below the state average. Balaghat and Mandla in the east are among the wettest districts."
  },
  {
    id: 6,
    question: "Eastern Madhya Pradesh receives more monsoon rainfall than western Madhya Pradesh mainly because it gets rain from the:",
    options: ["Arabian Sea branch of the south-west monsoon", "Bay of Bengal branch of the south-west monsoon", "North-east monsoon in October–December", "Western disturbances in winter"],
    answer: 1,
    explanation: "Moist winds of the Bay of Bengal branch enter MP from the east and shed most of their moisture over the eastern hills first. Western MP depends more on the Arabian Sea branch, which loses much moisture over the Western Ghats and Gujarat before reaching Malwa."
  },
  {
    id: 7,
    question: "The hot, dry, dusty winds that blow across northern Madhya Pradesh in May and June are called:",
    options: ["Mavtha", "Kalbaisakhi", "Mango showers", "Loo"],
    answer: 3,
    explanation: "The Loo is a hot, dry westerly wind of the north Indian plains that also affects the Gwalior–Chambal and Bundelkhand regions in late summer. Mavtha is winter rain, Kalbaisakhi is a thunderstorm of Bengal, and mango showers are pre-monsoon rains of Kerala and Karnataka."
  },
  {
    id: 8,
    question: "The rainy season in Madhya Pradesh normally lasts from:",
    options: ["March to mid-June", "October to November", "December to February", "Mid-June to September"],
    answer: 3,
    explanation: "The south-west monsoon usually reaches MP around mid-June and withdraws by late September or early October. March to mid-June is summer, October–November is the post-monsoon (retreating monsoon) season, and December–February is winter."
  },
  {
    id: 9,
    question: "Pachmarhi stays far cooler than Narmadapuram town in May, although both are in the same district. The main reason is:",
    options: ["Pachmarhi's nearness to the Arabian Sea", "Pachmarhi's much higher altitude on the Mahadeo hills", "Pachmarhi's more northerly latitude", "Pachmarhi's position in the rain shadow of the Vindhyas"],
    answer: 1,
    explanation: "Temperature falls by about 6.5 °C for every 1,000 m of height, and Pachmarhi is over 1,000 m above sea level while Narmadapuram is on the Narmada plain. Pachmarhi is actually slightly south of Narmadapuram, so latitude cannot explain the difference."
  },
  {
    id: 10,
    question: "Which region of Madhya Pradesh generally records the highest summer temperatures?",
    options: ["The Gwalior–Chambal region in the north", "The Baghelkhand plateau around Shahdol", "The Malwa plateau around Indore", "The Satpura–Maikal hills"],
    answer: 0,
    explanation: "The northern districts such as Gwalior, Morena, Bhind and Datia have the most extreme summers, often crossing 45 °C, because of continentality, low rainfall and the Loo. The Malwa plateau and Satpura hills are moderated by altitude."
  },
  {
    id: 11,
    question: "The bulk of Madhya Pradesh's annual rainfall is received from:",
    options: ["The north-east monsoon between October and December", "Western disturbances in winter", "Pre-monsoon thunderstorms in April and May", "The south-west monsoon between June and September"],
    answer: 3,
    explanation: "About 90% of MP's annual rainfall comes from the south-west monsoon. Western disturbances add only light winter rain (Mavtha), and the north-east monsoon mainly benefits Tamil Nadu, not MP."
  },
  {
    id: 12,
    question: "Which soil type covers the largest area of Madhya Pradesh?",
    options: ["Alluvial soil", "Black soil", "Red and yellow soil", "Laterite soil"],
    answer: 1,
    explanation: "Black (regur) soil is the most widespread soil of MP, covering most of the Malwa plateau, the Narmada valley and parts of the Satpura plateau. Red-yellow soil comes second and dominates the eastern districts."
  },
  {
    id: 13,
    question: "The black soil of the Malwa plateau has developed mainly from the weathering of:",
    options: ["Basalt", "Granite", "River alluvium", "Sandstone"],
    answer: 0,
    explanation: "Black soil forms from weathered Deccan Trap basalt, which is rich in iron, lime and magnesium. Its dark colour comes from titaniferous magnetite and organic–clay complexes, not from high humus content."
  },
  {
    id: 14,
    question: "Black soil of Madhya Pradesh is generally deficient in:",
    options: ["Iron and lime", "Nitrogen and phosphorus", "Calcium and magnesium", "Potash and iron"],
    answer: 1,
    explanation: "Regur is rich in iron, lime, calcium, magnesium and potash but poor in nitrogen, phosphorus and organic matter. This is why nitrogen and phosphate fertilisers, and legumes like soybean and gram, are important on Malwa's black soils."
  },
  {
    id: 15,
    question: "Black soil develops wide cracks in summer and is described as 'self-ploughing' because:",
    options: ["Its clay minerals swell when wet and shrink when dry", "Earthworm activity is unusually high in it", "It is rich in humus that decomposes in summer", "It is very sandy and loses water quickly"],
    answer: 0,
    explanation: "Black soil is rich in montmorillonite clay, which swells on wetting and shrinks on drying. The deep cracks let surface soil fall in and mix, a natural tilling action. The same clay gives it high water-holding capacity, which suits cotton and rabi crops."
  },
  {
    id: 16,
    question: "Red and yellow soils are most extensive in which part of Madhya Pradesh?",
    options: ["The Narmada valley — Narsinghpur and Harda", "North-western MP — Bhind, Morena and Gwalior", "Eastern MP — Balaghat, Mandla, Shahdol and Sidhi", "Western MP — Indore, Ujjain and Dewas"],
    answer: 2,
    explanation: "Red-yellow soils have formed over Archaean and Gondwana rocks in the eastern and south-eastern districts of MP. The north-west has alluvium, while Malwa and the Narmada valley have black soil."
  },
  {
    id: 17,
    question: "The yellow colour of the red-yellow soils of eastern Madhya Pradesh is due to:",
    options: ["Presence of titaniferous magnetite", "Hydration of iron oxide", "A high content of humus", "Accumulation of calcium carbonate"],
    answer: 1,
    explanation: "These soils are red where iron oxide is anhydrous (ferric oxide) and turn yellow where the iron oxide is hydrated, as in moister, poorly drained spots. Titaniferous magnetite is linked with the dark colour of black soil."
  },
  {
    id: 18,
    question: "Alluvial soil in Madhya Pradesh is found mainly in:",
    options: ["Jhabua, Alirajpur and Barwani", "Balaghat, Mandla and Dindori", "Bhind, Morena and Gwalior in the Chambal basin", "Betul, Chhindwara and Seoni"],
    answer: 2,
    explanation: "The northern districts of the Chambal and Sindh basins have alluvial soil deposited by these rivers, an extension of the Ganga–Yamuna plain. This soft alluvium is also what the Chambal has cut into deep ravines."
  },
  {
    id: 19,
    question: "Laterite soil, found in patches in Madhya Pradesh, forms under alternate wet and dry conditions and is characterised by:",
    options: ["High lime and potash content from basalt", "Deep, fine-grained silt deposited by rivers", "High salt content due to poor drainage", "Intense leaching that leaves it rich in iron and aluminium oxides but poor in lime"],
    answer: 3,
    explanation: "Heavy seasonal rain leaches silica and bases like lime out of laterite, leaving a residue of iron and aluminium oxides. It is therefore acidic and infertile, and bauxite deposits are often associated with lateritic caps, as on the Amarkantak plateau."
  },
  {
    id: 20,
    question: "Mixed red and black soils are typical of which region of Madhya Pradesh?",
    options: ["Bundelkhand — Datia, Tikamgarh, Chhatarpur and Panna", "Malwa — Indore, Ujjain and Dewas", "Gird — Gwalior, Bhind and Morena", "Nimar — Khargone and Khandwa"],
    answer: 0,
    explanation: "In Bundelkhand, soils developed over granite–gneiss and patches of trap rock are a mosaic of red and black soils. Malwa and Nimar have typical black soil, and the Gird region has alluvium."
  },
  {
    id: 21,
    question: "In the red-yellow soil belt of eastern Madhya Pradesh, which is the main kharif food crop?",
    options: ["Cotton", "Groundnut", "Rice", "Sugarcane"],
    answer: 2,
    explanation: "The red-yellow soils of Balaghat, Mandla, Seoni, Shahdol and nearby districts lie in the high-rainfall east, where rice is the chief kharif crop. Cotton needs the moisture-retentive black soils of Nimar and Malwa."
  },
  {
    id: 22,
    question: "The deep 'beehad' ravines of Morena, Bhind and Sheopur are mainly the result of:",
    options: ["Sheet erosion on basaltic slopes", "Wind erosion of desert sand dunes", "Glacial erosion during the Ice Age", "Gully erosion of soft alluvium by the Chambal and its tributaries"],
    answer: 3,
    explanation: "Run-off from heavy monsoon showers cuts gullies into the deep, soft alluvium along the Chambal, and these gullies deepen and branch into ravines. Removal of vegetation and overgrazing speed it up, making the Chambal ravines among the worst eroded lands in India."
  },
  {
    id: 23,
    question: "A village on the edge of the Chambal ravines in Bhind is losing farmland every monsoon as gullies cut back into it. Which measure is most suitable to check this?",
    options: ["Deep ploughing along the slope towards the ravine", "Burning crop stubble to clear the land quickly", "Plugging gully heads with check dams, contour bunding of the table land and planting trees and grasses", "Drilling more tube wells along the ravine edge"],
    answer: 2,
    explanation: "Ravines spread by headward erosion when run-off pours over their edges. Contour bunds hold water on the fields, check dams slow flow in the gullies, and vegetation binds the soil. Ploughing down-slope would speed run-off and worsen erosion."
  },
  {
    id: 24,
    question: "According to the India State of Forest Reports (2021 and 2023), Madhya Pradesh ranks where among states in total forest cover area?",
    options: ["Second, after Arunachal Pradesh", "Second, after Chhattisgarh", "Third, after Arunachal Pradesh and Odisha", "First"],
    answer: 3,
    explanation: "MP has the largest forest cover of any Indian state by area, about 77,000 sq km. It is followed by Arunachal Pradesh, Chhattisgarh and Odisha (the order of the next states varies by report)."
  },
  {
    id: 25,
    question: "According to the India State of Forest Report 2023, the forest cover of Madhya Pradesh (excluding tree cover outside forests) is roughly what share of the state's geographical area?",
    options: ["About one-third", "About one-quarter", "About one-tenth", "About two-fifths"],
    answer: 1,
    explanation: "ISFR 2023 puts MP's forest cover at about 77,073 sq km, roughly 25% of the state's geographical area. The National Forest Policy target is one-third (33%), so even the state with India's largest forest cover remains below that goal. Do not confuse forest cover with 'recorded forest area' (land legally notified as forest), which is about 30% of MP."
  },
  {
    id: 26,
    question: "Which forest type occupies the largest area in Madhya Pradesh?",
    options: ["Montane temperate forest", "Tropical wet evergreen forest", "Tropical dry deciduous forest", "Tropical thorn forest"],
    answer: 2,
    explanation: "Most of MP's forests are tropical dry deciduous, with teak, mixed species and bamboo. Tropical moist deciduous (sal) forest occurs in the wetter east, while thorn forest is limited to the dry north-west."
  },
  {
    id: 27,
    question: "Sal forests are most prominent in which district of Madhya Pradesh?",
    options: ["Mandla", "Ratlam", "Jhabua", "Bhind"],
    answer: 0,
    explanation: "Sal (Shorea robusta) is the dominant tree in the moister eastern districts such as Mandla, Balaghat, Dindori, Shahdol, Umaria and Anuppur. Kanha's famous meadows are surrounded by sal forest. Jhabua, Ratlam and Bhind are in the drier west and north-west."
  },
  {
    id: 28,
    question: "Teak forests of Madhya Pradesh are most extensive in which belt?",
    options: ["Narmadapuram, Betul and Harda in the Satpura–Narmada region", "Ratlam, Mandsaur and Neemuch on the Malwa plateau", "Bhind, Morena and Gwalior in the north", "Shahdol, Anuppur and Umaria in the east"],
    answer: 0,
    explanation: "Teak thrives in the moderate-rainfall central and southern districts such as Narmadapuram, Betul, Harda, Khandwa and Seoni. The eastern districts are dominated by sal, and the north-west has scrub and ravine vegetation."
  },
  {
    id: 29,
    question: "What is the botanical name of teak, the most valuable timber tree of Madhya Pradesh?",
    options: ["Shorea robusta", "Madhuca longifolia", "Diospyros melanoxylon", "Tectona grandis"],
    answer: 3,
    explanation: "Teak is Tectona grandis. Shorea robusta is sal, Madhuca longifolia is mahua, and Diospyros melanoxylon is tendu, whose leaves are used as bidi wrappers."
  },
  {
    id: 30,
    question: "The hard-ground barasingha, the state animal of Madhya Pradesh, was saved from near-extinction mainly in which protected area?",
    options: ["Madhav National Park", "Panna Tiger Reserve", "Kanha Tiger Reserve", "Bandhavgarh Tiger Reserve"],
    answer: 2,
    explanation: "Kanha's grassland meadows hold the last wild population of the hard-ground barasingha (Rucervus duvaucelii branderi), which fell to well under a hundred animals around 1970 before intensive management revived it. Its mascot 'Bhoorsingh the Barasingha' reflects this link."
  },
  {
    id: 31,
    question: "Kanha Tiger Reserve is spread over which two districts?",
    options: ["Mandla and Balaghat", "Sidhi and Singrauli", "Seoni and Chhindwara", "Umaria and Katni"],
    answer: 0,
    explanation: "Kanha, one of India's first tiger reserves under Project Tiger (1973), lies in Mandla and Balaghat districts in the Maikal hills. Seoni–Chhindwara is Pench, Umaria is Bandhavgarh, and Sidhi–Singrauli is Sanjay-Dubri."
  },
  {
    id: 32,
    question: "Bandhavgarh Tiger Reserve, known for one of the highest tiger densities in India, is in which district?",
    options: ["Umaria", "Shahdol", "Rewa", "Satna"],
    answer: 0,
    explanation: "Bandhavgarh lies in Umaria district in the Vindhyan hills, with an ancient fort on its central hill. It was the former hunting preserve of the Maharajas of Rewa, whose region produced the white tiger Mohan."
  },
  {
    id: 33,
    question: "Pench Tiger Reserve, whose landscape inspired Kipling's 'The Jungle Book', is spread over Seoni and which other district?",
    options: ["Betul", "Chhindwara", "Mandla", "Balaghat"],
    answer: 1,
    explanation: "Pench Tiger Reserve (with the Indira Priyadarshini Pench National Park) lies in Seoni and Chhindwara districts along the Pench river, which forms the MP–Maharashtra border here. Mowgli's forests in The Jungle Book are set in the Seoni hills."
  },
  {
    id: 34,
    question: "Panna Tiger Reserve is internationally noted because:",
    options: ["It was India's first tiger reserve, created in 1973", "It holds the only wild population of hard-ground barasingha", "It was the first release site for cheetahs from Namibia", "Tigers were successfully reintroduced after the reserve lost all its tigers by 2009"],
    answer: 3,
    explanation: "Panna lost all its tigers to poaching by 2009, and tigers relocated from Kanha, Bandhavgarh and Pench rebuilt a breeding population. The Ken river flows through the reserve. The barasingha is a Kanha story and the cheetahs went to Kuno."
  },
  {
    id: 35,
    question: "Satpura Tiger Reserve, which includes Satpura National Park and the Pachmarhi and Bori sanctuaries, lies mainly in which district?",
    options: ["Chhindwara", "Narmadapuram", "Betul", "Harda"],
    answer: 1,
    explanation: "Satpura Tiger Reserve is centred on Narmadapuram district in the Mahadeo hills of the Satpura range. Bori has one of the oldest protected teak forests in India, and the reserve forms part of the Pachmarhi Biosphere Reserve."
  },
  {
    id: 36,
    question: "Sanjay-Dubri Tiger Reserve lies mainly in which district?",
    options: ["Umaria", "Shahdol", "Rewa", "Sidhi"],
    answer: 3,
    explanation: "Sanjay-Dubri Tiger Reserve, formed from Sanjay National Park and Dubri Wildlife Sanctuary, lies in Sidhi district with a part in Singrauli. It adjoins Guru Ghasidas National Park in Chhattisgarh, which was once part of Sanjay National Park."
  },
  {
    id: 37,
    question: "Which tiger reserve, notified in 2023 by merging the Nauradehi and Durgavati sanctuaries, is the largest tiger reserve of Madhya Pradesh?",
    options: ["Sanjay-Dubri Tiger Reserve", "Veerangana Durgavati Tiger Reserve", "Ratapani Tiger Reserve", "Satpura Tiger Reserve"],
    answer: 1,
    explanation: "Veerangana Durgavati Tiger Reserve (2023) spans Sagar, Damoh and Narsinghpur districts and is the largest tiger reserve of MP. It is named after Rani Durgavati of the Gond kingdom of Garha-Mandla."
  },
  {
    id: 38,
    question: "Ratapani, declared a tiger reserve in December 2024, lies in which districts close to Bhopal?",
    options: ["Raisen and Sehore", "Narmadapuram and Harda", "Rajgarh and Shajapur", "Vidisha and Sagar"],
    answer: 0,
    explanation: "Ratapani Tiger Reserve covers parts of Raisen and Sehore districts on the Vindhyan hills just south-east of Bhopal. It became MP's eighth tiger reserve, and the Bhimbetka rock shelters lie in its forested landscape."
  },
  {
    id: 39,
    question: "Madhav National Park, notified as Madhya Pradesh's ninth tiger reserve in 2025, is located in which district?",
    options: ["Shivpuri", "Guna", "Datia", "Gwalior"],
    answer: 0,
    explanation: "Madhav National Park in Shivpuri was declared a tiger reserve in March 2025, after tigers were reintroduced there. It contains the Sakhya Sagar and Madhav Sagar lakes."
  },
  {
    id: 40,
    question: "On 17 September 2022, the first cheetahs of Project Cheetah were released into Kuno National Park. Where had these eight cheetahs come from?",
    options: ["Kenya", "Botswana", "Namibia", "South Africa"],
    answer: 2,
    explanation: "Eight cheetahs from Namibia were released in Kuno National Park (Sheopur district) on 17 September 2022, the first intercontinental translocation of a large carnivore. A second batch of twelve came from South Africa in February 2023."
  },
  {
    id: 41,
    question: "Which protected area of Madhya Pradesh became the second home for cheetahs under Project Cheetah in 2025?",
    options: ["Madhav National Park", "Nauradehi Wildlife Sanctuary", "Gandhi Sagar Wildlife Sanctuary", "Ratapani Wildlife Sanctuary"],
    answer: 2,
    explanation: "Gandhi Sagar Wildlife Sanctuary, on the Chambal in Mandsaur and Neemuch districts, received cheetahs from Kuno in April 2025. Nauradehi, now part of Veerangana Durgavati Tiger Reserve, became the third cheetah site later, when two cheetahs were released there in October 2026."
  },
  {
    id: 42,
    question: "Before it became the release site for cheetahs, Kuno in Sheopur district had been prepared for the translocation of which animal?",
    options: ["Great one-horned rhinoceros from Kaziranga", "Hard-ground barasingha from Kanha", "Wild water buffalo from Chhattisgarh", "Asiatic lion from Gir"],
    answer: 3,
    explanation: "Kuno was chosen in the 1990s as a second home for Asiatic lions from Gir to reduce the risk of keeping the whole population in one place, and villages were relocated for this. The lion translocation did not happen, and in 2022 Kuno received cheetahs instead."
  },
  {
    id: 43,
    question: "Madhya Pradesh regained the title 'Tiger State' in the All India Tiger Estimation 2022 with how many tigers?",
    options: ["563", "785", "526", "444"],
    answer: 1,
    explanation: "The 2022 estimate counted 785 tigers in MP, the highest of any state, followed by Karnataka (563) and Uttarakhand (560). MP had 526 tigers in the 2018 estimate."
  },
  {
    id: 44,
    question: "Besides being the Tiger State, Madhya Pradesh also has the largest population in India of which other big cat, according to the 2022 status report?",
    options: ["Leopard", "Snow leopard", "Clouded leopard", "Asiatic lion"],
    answer: 0,
    explanation: "The 2022 leopard status report estimated about 3,900 leopards in MP, the highest of any state, ahead of Maharashtra and Karnataka. With cheetahs at Kuno, Gandhi Sagar and (since October 2026) Veerangana Durgavati Tiger Reserve, MP is also called the Cheetah State."
  },
  {
    id: 45,
    question: "Tendu leaves, the most important minor forest produce of Madhya Pradesh, are mainly used for:",
    options: ["Extracting tannin for leather", "Wrapping bidis", "Rearing tasar silkworms", "Making plates and bowls"],
    answer: 1,
    explanation: "Leaves of the tendu tree (Diospyros melanoxylon) are used to roll bidis, and MP is the largest producer of tendu leaves in India. Collection in April–May provides vital summer income to forest-dwelling families."
  },
  {
    id: 46,
    question: "The flowers of which tree are collected by tribal communities of Madhya Pradesh for food and for brewing a traditional liquor, while its seeds yield an edible oil?",
    options: ["Mahua", "Khair", "Sal", "Palash"],
    answer: 0,
    explanation: "Mahua (Madhuca longifolia) flowers are sweet and are eaten, dried or fermented into liquor, and its seeds give an oil used for cooking and soap. It is one of the most important trees for the Gond, Bhil and Baiga economies."
  },
  {
    id: 47,
    question: "Lac, an important minor forest produce of Madhya Pradesh, is:",
    options: ["A dye extracted from the roots of sal", "The dried latex of the mahua tree", "A resin secreted by the insect Kerria lacca living on trees such as palash, kusum and ber", "A gum that oozes from the bark of khair"],
    answer: 2,
    explanation: "Lac is a resinous secretion of the scale insect Kerria lacca, cultivated on host trees like palash (Butea monosperma), kusum and ber. It is processed into shellac for varnishes, bangles and sealing wax."
  },
  {
    id: 48,
    question: "Fat extracted from sal seeds collected in the forests of eastern Madhya Pradesh is commercially valued as:",
    options: ["A raw material for bidi making", "A substitute for cocoa butter in chocolate", "A tanning agent for leather", "A source of natural rubber"],
    answer: 1,
    explanation: "Sal seed fat (sal butter) is used as a cocoa butter equivalent in chocolates and confectionery, and also in soaps. Sal seed is one of the nationalised minor forest produce items handled through the state MFP federation."
  },
  {
    id: 49,
    question: "Kattha (catechu), eaten with betel leaf, is obtained from the heartwood of which forest tree?",
    options: ["Harra (Terminalia chebula)", "Chironji (Buchanania lanzan)", "Khair (Acacia catechu)", "Tendu (Diospyros melanoxylon)"],
    answer: 2,
    explanation: "Kattha is extracted by boiling chips of khair heartwood. Harra fruits are used for tannin and medicine, chironji yields edible seeds, and tendu supplies bidi leaves."
  },
  {
    id: 50,
    question: "In Madhya Pradesh, nationalised minor forest produce such as tendu leaves is collected and traded through:",
    options: ["The MP Forest Development Corporation's timber depots", "The Tribal Co-operative Marketing Development Federation of India alone", "Private contractors licensed by the district collector", "The MP State Minor Forest Produce (Trading & Development) Co-operative Federation and its primary societies"],
    answer: 3,
    explanation: "The MP State MFP Federation (formed in 1984) organises tendu collection through primary forest produce co-operative societies of collectors. Profits from sale are largely passed back to the collectors as bonus, which is why the system matters for tribal incomes."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "Contemporary Gond painting, also called 'Jangarh Kalam', developed mainly among which community of Dindori district?",
    options: ["Bhilala", "Baiga", "Agaria", "Pardhan Gond"],
    answer: 3,
    explanation: "Gond painting on paper and canvas grew out of the Pardhan Gonds, the traditional bards of the Gonds, starting with Jangarh Singh Shyam in the early 1980s. Its roots lie in Gond wall and floor decoration and Pardhan oral tradition. The style is named 'Jangarh Kalam' after him."
  },
  {
    id: 2,
    question: "Jangarh Singh Shyam, the pioneer of modern Gond painting, came from which village of Dindori district?",
    options: ["Pitol", "Patangarh", "Karanjia", "Bagh"],
    answer: 1,
    explanation: "Jangarh was born in Patangarh, Dindori, which has since become known as a village of Gond artists. Pitol in Jhabua is Bhuri Bai's village, Karanjia is where Verrier Elwin lived, and Bagh in Dhar is the home of Bagh print."
  },
  {
    id: 3,
    question: "Who spotted Jangarh Singh Shyam's talent and brought him to Bharat Bhavan, Bhopal, in the early 1980s?",
    options: ["J. Swaminathan", "M.F. Husain", "Verrier Elwin", "Charles Correa"],
    answer: 0,
    explanation: "The painter J. Swaminathan, founding director of Roopankar at Bharat Bhavan, sent teams to tribal villages to find artists, and Jangarh was found in Patangarh. Charles Correa designed the Bharat Bhavan building, and Elwin had died in 1964."
  },
  {
    id: 4,
    question: "In 2001, Jangarh Singh Shyam died while on an artist's residency at the Mithila Museum in which country?",
    options: ["France", "Germany", "Japan", "United States"],
    answer: 2,
    explanation: "Jangarh died in 2001 at the Mithila Museum in Tokamachi, Niigata, Japan, which collects Indian folk and tribal art. His death at the age of about 40 was a great loss to Gond art. His family and students, including Japani Shyam and Mayank Shyam, carry the style forward."
  },
  {
    id: 5,
    question: "In 1989, Jangarh Singh Shyam's work was shown at which landmark international exhibition, which brought Gond art worldwide attention?",
    options: ["Magiciens de la Terre", "Documenta", "Venice Biennale", "Festival of India in the USSR"],
    answer: 0,
    explanation: "'Magiciens de la Terre' (1989), held at the Centre Pompidou and La Villette in Paris, showed artists from outside the Western mainstream next to contemporary Western artists. Jangarh's inclusion made him one of the first Indian tribal artists to become known internationally."
  },
  {
    id: 6,
    question: "Bhajju Shyam, the Gond artist awarded the Padma Shri in 2018, recorded his impressions of a visit to London in which illustrated book?",
    options: ["Bhimayana", "Sita's Ramayana", "Waterlife", "The London Jungle Book"],
    answer: 3,
    explanation: "'The London Jungle Book' shows London through Gond eyes. It came out of Bhajju Shyam's trip to paint murals at a London restaurant. 'Bhimayana' is by Durga Bai and Subhash Vyam, 'Sita's Ramayana' is in Patua style, and 'Waterlife' is in Mithila style."
  },
  {
    id: 7,
    question: "Durga Bai Vyam, the Gond artist awarded the Padma Shri in 2022, illustrated (with Subhash Vyam) which graphic biography of Dr B.R. Ambedkar?",
    options: ["The London Jungle Book", "Bhimayana", "Sita's Ramayana", "Waterlife"],
    answer: 1,
    explanation: "'Bhimayana: Experiences of Untouchability' (2011) tells Ambedkar's life in Pardhan Gond style, with illustrations by Durga Bai and Subhash Vyam. Durga Bai comes from Dindori district and is one of the best-known women Gond artists."
  },
  {
    id: 8,
    question: "Bhuri Bai, the Bhil artist awarded the Padma Shri in 2021, belongs to which district of Madhya Pradesh?",
    options: ["Dindori", "Mandla", "Jhabua", "Barwani"],
    answer: 2,
    explanation: "Bhuri Bai is from Pitol village in Jhabua district, in the Bhil heartland of western MP. She is known for Bhil paintings built up from rows of coloured dots. She has also received the Shikhar Samman and the Ahilya Samman from the MP government."
  },
  {
    id: 9,
    question: "In the early 1980s, a Bhil woman from Jhabua working as a construction labourer at Bharat Bhavan was encouraged by J. Swaminathan to paint on paper. She went on to become the best-known Bhil woman artist. Who is she?",
    options: ["Durga Bai Vyam", "Japani Shyam", "Sonabai", "Bhuri Bai"],
    answer: 3,
    explanation: "Bhuri Bai was a construction labourer at Bharat Bhavan when Swaminathan asked her to paint. She became the first Bhil woman to paint on paper and canvas. Durga Bai Vyam and Japani Shyam are Gond artists, and Sonabai was a clay artist from Chhattisgarh."
  },
  {
    id: 10,
    question: "A painting from Jhabua shows animals, trees and deities made up entirely of rows of multicoloured dots. This is the style Bhuri Bai made famous. Which tradition does it belong to?",
    options: ["Bhil painting", "Gond painting", "Pithora painting", "Bagh print"],
    answer: 0,
    explanation: "Bhil painting builds every form from dense rows of dots, often likened to grains of maize. Gond painting fills forms with dashes, lines and fine patterns, while Pithora is a ritual wall painting dominated by horses."
  },
  {
    id: 11,
    question: "Pithora painting, a ritual wall painting found in Jhabua and Alirajpur and in neighbouring Gujarat, is traditionally done by which tribes?",
    options: ["Gond and Pardhan", "Rathwa and Bhilala", "Baiga and Bharia", "Kol and Korku"],
    answer: 1,
    explanation: "Pithora is painted by the Rathwa and Bhilala on the inner walls of their homes, as thanksgiving to Baba Pithora when a wish is fulfilled. It is a sacred ritual act, not just decoration."
  },
  {
    id: 12,
    question: "The specialist male painters who execute Pithora paintings on house walls are known by what name?",
    options: ["Badwa", "Pardhan", "Lakhindra", "Gunia"],
    answer: 2,
    explanation: "Pithora paintings are made by trained painters called Lakhindra (or Lekhindra). The Badwa is the priest-shaman who leads the Pithora ritual and checks that the painting is correct. Pardhan are Gond bards, and gunia is a term for a healer-priest."
  },
  {
    id: 13,
    question: "Which motif dominates Pithora wall paintings?",
    options: ["Horses", "Peacocks", "Tigers", "Fish"],
    answer: 0,
    explanation: "Pithora paintings are full of colourful horses, which carry Baba Pithora, Pithori Rani and other deities in the wedding procession of the gods. Other figures, such as farmers, animals and even modern objects, are added around them."
  },
  {
    id: 14,
    question: "Bagh print, a traditional hand block printing craft of Madhya Pradesh, is named after Bagh village in which district?",
    options: ["Jhabua", "Khargone", "Alirajpur", "Dhar"],
    answer: 3,
    explanation: "Bagh is in Dhar district, on the Bagh river, near the famous Bagh caves. The river water is said to give the prints their brightness. Bagh print has a Geographical Indication tag."
  },
  {
    id: 15,
    question: "Which community traditionally practises Bagh print, using natural dyes in shades of red and black on a white background?",
    options: ["Pardhan", "Bhilala", "Khatri", "Kumhar"],
    answer: 2,
    explanation: "Bagh print is the hereditary craft of the Khatri community, who migrated from Sindh. They use wooden blocks and natural dyes such as alizarin (red) and iron-based black. Master craftsman Ismail Sulemanji Khatri helped revive it."
  },
  {
    id: 16,
    question: "Elaborate tattoos covering the forehead, arms, back and legs of women, applied in stages from girlhood, are a famous tradition of which tribe of Madhya Pradesh?",
    options: ["Bhil", "Baiga", "Korku", "Kol"],
    answer: 1,
    explanation: "Baiga women are known for extensive godna (tattoos) with geometric and natural motifs, which mark different stages of life. Tattooing is common among many tribes, but the full-body Baiga godna is the best known and has inspired contemporary godna art."
  },
  {
    id: 17,
    question: "Gond women decorate the walls and floors of their homes with geometric patterns in coloured earth. These traditional designs, from which Gond painting partly developed, are called what?",
    options: ["Digna", "Mandana", "Sanjhi", "Pithora"],
    answer: 0,
    explanation: "Digna are the traditional Gond wall and floor designs painted with clay, ochre and other earth colours at festivals and weddings. Mandana is the floor and wall art of Malwa and Rajasthan, Sanjhi is the Pitru Paksha art of Malwa girls, and Pithora belongs to the Rathwa and Bhilala."
  },
  {
    id: 18,
    question: "The Karma dance of the Gond and Baiga is closely linked with which ritual?",
    options: ["The lighting of lamps at Diwali", "The burning of Holika", "The first collection of mahua flowers", "The worship of a branch of the Karam tree"],
    answer: 3,
    explanation: "Karma dance is performed around a Karam tree branch that is ceremonially planted and worshipped for prosperity and good harvests. Men and women dance in rows to the beat of the mandar drum. It is popular in Mandla, Dindori, Shahdol and Balaghat."
  },
  {
    id: 19,
    question: "Which description best fits the Saila dance of Gond and Baiga men?",
    options: ["A women's dance around a wooden parrot", "A dance with bison-horn headdresses", "A men's stick dance performed after the harvest", "A dance to welcome the groom's party at a wedding"],
    answer: 2,
    explanation: "Saila is a stick dance in which men strike short sticks rhythmically as they move in circles. It is performed in the season after the harvest. The women's parrot dance is Sua, the bison-horn dance belongs to the Maria, and the wedding welcome dance is the Baiga Pardhauni."
  },
  {
    id: 20,
    question: "The Bhagoria dance, performed with drums and flutes at the haats held before Holi, is mainly associated with which tribe?",
    options: ["Gond", "Bhil", "Baiga", "Sahariya"],
    answer: 1,
    explanation: "Bhagoria is the dance and festival of the Bhil and Bhilala of Jhabua, Alirajpur, Dhar, Barwani and Khargone. Groups of young people arrive at the haats in colourful clothes and dance to the dhol (mandal) and flute."
  },
  {
    id: 21,
    question: "The bison-horn dance (Gaur dance), in which dancers wear headdresses of bison horns and cowrie shells and imitate the movements of bison, belongs to which group?",
    options: ["Gonds of Mandla", "Korku of Betul", "Bhils of Jhabua", "Maria Gonds of Bastar"],
    answer: 3,
    explanation: "The Gaur dance is performed by the Bison-horn Maria (Dandami Maria) Gonds of Bastar, now in Chhattisgarh, which was part of MP until 2000. Verrier Elwin praised it as one of the finest dances in the country. The gaur is the Indian bison."
  },
  {
    id: 22,
    question: "Gudum Baja, a dance performed while playing the gudum drum and other instruments at weddings and festivals, is the tradition of which Gond sub-group?",
    options: ["Dhuliya", "Pardhan", "Agaria", "Bhilala"],
    answer: 0,
    explanation: "The Dhuliya, a Gond sub-group of Dindori, Mandla, Shahdol and Umaria, are traditional musicians who perform Gudum Baja. The gudum is a large drum, and the troupe also plays shehnai, timki and other instruments while dancing."
  },
  {
    id: 23,
    question: "Which Baiga dance is performed at weddings to welcome the groom's party?",
    options: ["Lahangi", "Thapti", "Pardhauni", "Saila"],
    answer: 2,
    explanation: "Pardhauni is the Baiga dance performed when the groom's party (baraat) arrives at the bride's village. Lahangi belongs to the Sahariya and Thapti to the Korku. Saila is a post-harvest stick dance."
  },
  {
    id: 24,
    question: "The Lahangi dance is associated with which tribe of Madhya Pradesh?",
    options: ["Baiga", "Sahariya", "Korku", "Bhil"],
    answer: 1,
    explanation: "Lahangi is a vigorous dance of the Sahariya of the Gwalior-Chambal region, performed at festivals and fairs. It is one of the main cultural markers of this PVTG."
  },
  {
    id: 25,
    question: "The Thapti dance belongs to which tribe of the Satpura region?",
    options: ["Korku", "Kol", "Bharia", "Gond"],
    answer: 0,
    explanation: "Thapti is a traditional Korku dance of Betul, Harda and Khandwa. The Korku also perform the Dhandal dance. Lahangi belongs to the Sahariya, and Karma and Saila are mainly Gond and Baiga dances."
  },
  {
    id: 26,
    question: "Which dance is performed by Gond women around a wooden or clay parrot placed in a basket, mostly around Diwali?",
    options: ["Saila", "Karma", "Bhagoria", "Sua"],
    answer: 3,
    explanation: "Sua means parrot. Women clap and sing as they circle the parrot figure and go from house to house, asking the parrot to carry their messages. Saila is a men's stick dance, and Karma is linked with the Karam tree."
  },
  {
    id: 27,
    question: "When are the Bhagoria haats of the Bhil region held?",
    options: ["In the week after Diwali", "In the week before Holi", "In the month of Shravan", "Around Makar Sankranti"],
    answer: 1,
    explanation: "Bhagoria haats are held on the weekly market days of the seven days before Holi, in the month of Phalgun. They come after the harvest, when people have cash to spend and the season is festive. They are best known for young people choosing partners and then eloping."
  },
  {
    id: 28,
    question: "Bhagoria haats are held mainly in which group of districts?",
    options: ["Mandla, Dindori and Balaghat", "Sheopur, Shivpuri and Guna", "Jhabua, Alirajpur, Dhar, Barwani and Khargone", "Rewa, Satna and Sidhi"],
    answer: 2,
    explanation: "Bhagoria is celebrated across the Bhil-Bhilala belt of western MP: Jhabua, Alirajpur, Dhar, Barwani and Khargone. Haats such as Walpur in Alirajpur draw very large crowds. The other options are Gond, Sahariya and Kol areas."
  },
  {
    id: 29,
    question: "What is the name of the Gond post-harvest fair in Mandla, Dindori and Balaghat at which village deities are carried in procession with tall flags and decorated poles?",
    options: ["Madai", "Bhagoria", "Gol Gadhedo", "Nawakhai"],
    answer: 0,
    explanation: "Madai is a gathering of village gods and people held after the harvest, with deity processions, trance rituals, dances and a market. Bhagoria and Gol Gadhedo are Bhil festivals, and Nawakhai is the ritual of first eating the new grain."
  },
  {
    id: 30,
    question: "On which day is the Karma festival, at which a Karam tree branch is ceremonially planted and worshipped, celebrated?",
    options: ["Phalgun Purnima", "Kartik Amavasya", "Chaitra Shukla Navami", "Bhadrapada Shukla Ekadashi"],
    answer: 3,
    explanation: "Karma (Karam) puja falls on the Ekadashi of the bright half of Bhadrapada (Bhado). Gond, Baiga, Oraon and other tribes keep it. People fast, plant the Karam branch, hear the Karma story, and dance through the night."
  },
  {
    id: 31,
    question: "At a Bhil festival during Holi, young men try to climb a tall pole with a bundle of jaggery tied at the top while women guard it and beat them with sticks. What is this festival called?",
    options: ["Bhagoria", "Madai", "Gol Gadhedo", "Karma"],
    answer: 2,
    explanation: "Gol Gadhedo (Gol Gadhera) is a Bhil festival of the Jhabua region. The man who reaches the jaggery at the top of the pole wins it and earns great prestige in the community. Bhagoria is the pre-Holi haat, not this pole contest."
  },
  {
    id: 32,
    question: "Bhili, the language of the Bhil tribe, belongs to which language family?",
    options: ["Dravidian", "Indo-Aryan", "Austroasiatic (Munda)", "Tibeto-Burman"],
    answer: 1,
    explanation: "Bhili is an Indo-Aryan language related to Gujarati and Rajasthani, even though the Bhils are thought to be an ancient tribal people. Bhilali, spoken by the Bhilala, is a related variety. In MP, Gondi is Dravidian and Korku is Munda."
  },
  {
    id: 33,
    question: "Gondi, the language of the Gond tribe, belongs to which language family?",
    options: ["Indo-Aryan", "Austroasiatic", "Tibeto-Burman", "Dravidian"],
    answer: 3,
    explanation: "Gondi is a South-Central Dravidian language related to Telugu. Many Gonds in MP now speak Hindi or local dialects, but Gondi survives in Mandla, Dindori, Seoni, Chhindwara, Balaghat and Betul."
  },
  {
    id: 34,
    question: "Korku, the language of the Korku tribe of the Satpura region, belongs to which language family?",
    options: ["Austroasiatic (Munda)", "Dravidian", "Indo-Aryan", "Tibeto-Burman"],
    answer: 0,
    explanation: "Korku is a Munda language of the Austroasiatic family, related to Santali and Mundari, and is the westernmost Munda language in India. Its presence in Betul, Harda and Khandwa makes MP a meeting point of three language families: Indo-Aryan, Dravidian and Austroasiatic."
  },
  {
    id: 35,
    question: "A folk singer from Ujjain, Dewas and Indore sings in the dialect of his region. Which dialect is he most likely using?",
    options: ["Nimadi", "Malvi", "Bundeli", "Bagheli"],
    answer: 1,
    explanation: "Malvi is the dialect of the Malwa plateau: Ujjain, Indore, Dewas, Shajapur, Ratlam, Mandsaur and nearby districts. Grierson grouped it with Rajasthani. Kabir bhajans and the Maach folk theatre of Malwa are performed in Malvi."
  },
  {
    id: 36,
    question: "Which dialect is spoken mainly in Khargone, Khandwa, Burhanpur and Barwani districts of the Narmada valley?",
    options: ["Malvi", "Bundeli", "Nimadi", "Bagheli"],
    answer: 2,
    explanation: "Nimadi is the dialect of the Nimar region in the lower Narmada valley. It has a rich devotional literature, including the songs of Sant Singaji. Malvi is spoken to the north on the Malwa plateau."
  },
  {
    id: 37,
    question: "A researcher is recording folk songs in villages of Chhatarpur and Tikamgarh districts. In which dialect will most of the songs be sung?",
    options: ["Bundeli", "Bagheli", "Malvi", "Nimadi"],
    answer: 0,
    explanation: "Bundeli is the dialect of Bundelkhand, which covers Sagar, Damoh, Chhatarpur, Tikamgarh, Panna, Datia and adjoining districts. Grierson classified it under Western Hindi. Bagheli is spoken further east, in Rewa, Satna and Sidhi."
  },
  {
    id: 38,
    question: "Which dialect of Madhya Pradesh did Grierson classify under Eastern Hindi, along with Awadhi and Chhattisgarhi?",
    options: ["Bundeli", "Malvi", "Nimadi", "Bagheli"],
    answer: 3,
    explanation: "Bagheli, spoken in Baghelkhand (Rewa, Satna, Sidhi, Shahdol), is an Eastern Hindi dialect closely related to Awadhi. Bundeli belongs to Western Hindi, while Malvi was grouped with Rajasthani."
  },
  {
    id: 39,
    question: "Which of the following dialect and district pairs is INCORRECT?",
    options: ["Malvi and Ujjain", "Bagheli and Jhabua", "Bundeli and Sagar", "Nimadi and Khargone"],
    answer: 1,
    explanation: "Bagheli is spoken in Rewa, Satna and Sidhi in north-eastern MP, not in Jhabua. Jhabua is a Bhili-speaking district in the far west. The other three pairs are correct."
  },
  {
    id: 40,
    question: "According to Census 2011, which is the most widely spoken language in India that is NOT included in the Eighth Schedule?",
    options: ["Gondi", "Kurukh", "Bhili/Bhilodi", "Khandeshi"],
    answer: 2,
    explanation: "Bhili/Bhilodi had about 1.04 crore speakers in 2011, the largest of any non-scheduled language. Gondi had about 30 lakh. Many of these Bhili speakers live in western MP."
  },
  {
    id: 41,
    question: "Which of the following tribal languages is included in the Eighth Schedule of the Constitution?",
    options: ["Santali", "Gondi", "Bhili", "Korku"],
    answer: 0,
    explanation: "Santali was added to the Eighth Schedule by the 92nd Amendment, 2003, along with Bodo, Dogri and Maithili. Gondi and Bhili, despite their large numbers of speakers, are not scheduled languages, and Korku is a small Munda language."
  },
  {
    id: 42,
    question: "Pardhan bards recite the genealogies and heroic tales of Gond kings and clans while playing which stringed instrument?",
    options: ["Mandar", "Dhol", "Timki", "Bana"],
    answer: 3,
    explanation: "The bana is a bowed, fiddle-like instrument regarded as sacred by the Pardhans, who use it to sing Gond origin myths and genealogies to their Gond patrons. Mandar, dhol and timki are drums. This oral tradition later fed into Pardhan Gond painting."
  },
  {
    id: 43,
    question: "In Gond oral epics, which culture hero is credited with organising the Gond clans and founding the ghotul?",
    options: ["Bada Dev", "Lingo", "Nanga Baiga", "Babadev"],
    answer: 1,
    explanation: "Pahandi Pari Kupar Lingo, or simply Lingo, is the Gond culture hero who freed the ancestors, set up the clan and phratry system, and taught music and the ghotul. Bada Dev is the supreme deity, not the culture hero, and Nanga Baiga is the Baiga ancestor."
  },
  {
    id: 44,
    question: "According to the Baiga creation myth recorded by Verrier Elwin, who were the first ancestors of the Baiga, born from Mother Earth?",
    options: ["Lingo and his brothers", "Bhimsen and Hidimba", "Nanga Baiga and Nanga Baigin", "Bada Dev and Khermai"],
    answer: 2,
    explanation: "In Baiga myth, Nanga Baiga and Nanga Baigin were born from the earth and given the task of protecting it. This myth explains the Baiga role as guardians of the land and as priests. It is also the reason given for their traditional refusal to plough."
  },
  {
    id: 45,
    question: "Which 1935 collection by Verrier Elwin and Shamrao Hivale presented the folk poetry of the Gonds?",
    options: ["Songs of the Forest", "The Baiga", "Leaves from the Jungle", "The Agaria"],
    answer: 0,
    explanation: "'Songs of the Forest: The Folk Poetry of the Gonds' (1935) was Elwin and Hivale's translation of Gond songs. 'The Baiga' (1939) and 'The Agaria' (1942) are ethnographic monographs, and 'Leaves from the Jungle' (1936) is Elwin's diary of life in a Gond village."
  },
  {
    id: 46,
    question: "Verrier Elwin's ashram and home among the Gonds, from which he wrote many of his works, was at Karanjia. Which district is Karanjia in today?",
    options: ["Mandla", "Balaghat", "Seoni", "Dindori"],
    answer: 3,
    explanation: "Karanjia was in Mandla district in Elwin's time, but since 1998 it has been in Dindori district, which was carved out of Mandla. Elwin worked there from the 1930s with Shamrao Hivale before moving to the North-East."
  },
  {
    id: 47,
    question: "Love songs sung in question-and-answer form by young Gond and Baiga men and women of the Mandla-Dindori forests are called what?",
    options: ["Phag", "Alha", "Dadaria", "Birha"],
    answer: 2,
    explanation: "Dadaria are lively love songs exchanged between young men and women, often while working in the forest or fields. Phag are Holi songs, Alha is the heroic ballad of Bundelkhand, and Birha is a folk song of the Ahirs."
  },
  {
    id: 48,
    question: "Arjun Singh Dhurve of Dindori, awarded the Padma Shri in 2022, is known for promoting which art form?",
    options: ["Gond painting", "Baiga dance", "Bhil painting", "Pithora painting"],
    answer: 1,
    explanation: "Arjun Singh Dhurve has spent decades performing and teaching Baiga tribal dance and taking it to national stages. The same year, Durga Bai Vyam received the Padma Shri for Gond painting."
  },
  {
    id: 49,
    question: "Which feature most clearly distinguishes contemporary Gond painting from other tribal art traditions of MP?",
    options: ["Forms filled with fine patterns of dots, dashes and lines in bright colours", "Hand block printing with natural red and black dyes", "Ritual wall painting dominated by horses", "Narrative scroll painting on cloth"],
    answer: 0,
    explanation: "Gond paintings outline animals, trees and deities and fill them with fine signature patterns of dots, dashes, fish-scales and lines, and each artist has a recognisable pattern. Block printing is Bagh print, horse-filled ritual walls are Pithora, and cloth scroll painting is the Phad of Rajasthan."
  },
  {
    id: 50,
    question: "Baiga women regard their elaborate tattoos (godna) as specially precious. What do they traditionally believe about them?",
    options: ["They protect the crops from pests", "They are a sign of widowhood", "They can be applied only by Agaria men", "They are the only ornament that goes with a person after death"],
    answer: 3,
    explanation: "Baiga belief holds that all other jewellery is left behind at death, but godna stays with the body and the soul. The tattoos also mark identity and stages of a woman's life."
  }
];

export default questions;

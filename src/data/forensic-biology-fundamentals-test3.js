const questions = [
  {
    id: 1,
    question: "The correct order of the layers of the epidermis of thick skin, from the deepest to the most superficial, is",
    options: ["Stratum basale → spinosum → granulosum → lucidum → corneum", "Stratum corneum → lucidum → granulosum → spinosum → basale", "Stratum basale → granulosum → spinosum → lucidum → corneum", "Stratum spinosum → basale → lucidum → granulosum → corneum"],
    answer: 0,
    explanation: "New keratinocytes arise in the stratum basale (germinativum) and move outwards through the spinosum and granulosum, then the clear lucidum, to the dead keratinised corneum. The whole journey takes roughly four weeks. The dermis lies beneath the stratum basale."
  },
  {
    id: 2,
    question: "The stratum lucidum, a thin clear layer of the epidermis, is normally found only in the skin of",
    options: ["The scalp", "The eyelids", "The palms and soles", "The face and neck"],
    answer: 2,
    explanation: "The stratum lucidum lies between the granulosum and corneum in thick, hairless skin of the palms and soles. These are also the friction ridge areas used for finger, palm and sole prints. Thin skin elsewhere lacks a distinct lucidum."
  },
  {
    id: 3,
    question: "A man's fingertip suffers a superficial burn that destroys only the epidermis. After healing, his fingerprint will most likely",
    options: ["Show the same ridge pattern and details as before", "Show a completely new ridge pattern", "Have no ridges at all", "Change from a loop to a whorl"],
    answer: 0,
    explanation: "Friction ridges are laid down by the arrangement of dermal papillae, so the epidermis regrows along the same template. Only injuries reaching the dermis leave a permanent scar, which itself becomes an identifying feature. This is the basis of the permanence of fingerprints."
  },
  {
    id: 4,
    question: "The term 'dermatoglyphics' for the study of skin ridge patterns of fingers, palms and soles was introduced by",
    options: ["Galton and Henry", "Purkinje and Malpighi", "Faulds and Herschel", "Cummins and Midlo"],
    answer: 3,
    explanation: "Harold Cummins and Charles Midlo coined the term in 1926 and wrote the standard text on the subject. Galton and Henry developed fingerprint classification, and Purkinje described nine pattern types in 1823. Faulds and Herschel were early workers on fingerprints for identification."
  },
  {
    id: 5,
    question: "Which statement about friction ridge patterns is correct?",
    options: ["They first appear in early childhood and become fixed at puberty", "They change gradually with age, so they are useful for age estimation", "Identical twins have identical fingerprints", "They are formed in foetal life and remain unchanged until the skin decomposes"],
    answer: 3,
    explanation: "Ridges develop during the foetal period, and their pattern and minutiae stay the same throughout life. Ridges become wider with growth but not different in arrangement. Identical twins share DNA but have different fingerprints because ridge formation is affected by local conditions in the womb."
  },
  {
    id: 6,
    question: "In most populations, the most common primary fingerprint pattern is the",
    options: ["Loop", "Whorl", "Arch", "Composite"],
    answer: 0,
    explanation: "Loops make up about 60–65% of fingerprint patterns, whorls about 30–35% and arches about 5%. Composites are a small subgroup of whorls in the Henry system. Pattern type is a class characteristic, while minutiae individualise."
  },
  {
    id: 7,
    question: "The alveoli of the lungs and the inner lining of blood vessels (endothelium) are made of",
    options: ["Simple columnar epithelium", "Stratified squamous epithelium", "Transitional epithelium", "Simple squamous epithelium"],
    answer: 3,
    explanation: "A single layer of flat cells allows rapid diffusion of gases and exchange of materials. Simple columnar epithelium lines the stomach and intestine. Stratified squamous epithelium is built for protection against abrasion."
  },
  {
    id: 8,
    question: "Epithelial cells with a variable shape that can stretch, lining the urinary bladder and ureters and sometimes seen in urine stains, are",
    options: ["Transitional epithelial cells", "Ciliated columnar cells", "Keratinised squamous cells", "Simple cuboidal cells"],
    answer: 0,
    explanation: "Transitional epithelium changes from many-layered and rounded when the bladder is empty to flatter when it is stretched. Some of these cells are shed into urine. Their presence in a stain can support, but not prove, a urinary origin."
  },
  {
    id: 9,
    question: "Non-keratinised stratified squamous epithelium lines the",
    options: ["Trachea, bronchi and nasal cavity", "Vagina, buccal cavity and oesophagus", "Stomach and small intestine", "Kidney tubules and thyroid follicles"],
    answer: 1,
    explanation: "These moist surfaces need protection from friction but are not exposed to drying, so their surface cells keep their nuclei. That is why buccal swabs and vaginal swabs yield nucleated cells for DNA. The trachea has pseudostratified ciliated columnar epithelium and the small intestine has simple columnar epithelium."
  },
  {
    id: 10,
    question: "A penile swab from a suspect in a sexual assault case is stained with Lugol's iodine and shows many squamous epithelial cells stained dark brown. This mainly indicates",
    options: ["Cells of buccal origin, which are rich in keratin", "Spermatozoa from the suspect", "Cells of vaginal origin, which are rich in glycogen", "Leukocytes from blood"],
    answer: 2,
    explanation: "Vaginal epithelial cells, under oestrogen influence, store abundant glycogen, which stains mahogany brown with iodine. Buccal and skin cells contain much less glycogen. The finding is presumptive, because glycogenated cells can also come from other sites, so DNA profiling is used for confirmation."
  },
  {
    id: 11,
    question: "The trachea and bronchi are lined by",
    options: ["Simple squamous epithelium", "Keratinised stratified squamous epithelium", "Transitional epithelium", "Pseudostratified ciliated columnar epithelium"],
    answer: 3,
    explanation: "All cells rest on the basement membrane but their nuclei lie at different levels, so the layer looks stratified. Cilia and mucus-secreting goblet cells form the mucociliary escalator that clears inhaled particles. Simple squamous epithelium is found in the alveoli."
  },
  {
    id: 12,
    question: "Touch DNA samples from handled objects often give low DNA yields because the outermost skin cells (corneocytes) that are shed",
    options: ["Contain only mitochondrial RNA", "Are too large to be collected by swabs", "Are destroyed by sweat", "Have lost their nuclei during keratinisation"],
    answer: 3,
    explanation: "Keratinocytes lose their nuclei and organelles as they move into the stratum corneum, so shed corneocytes carry little nuclear DNA. Touch DNA comes partly from residual cell fragments and DNA in sweat and sebum. Sensitive extraction and amplification are needed."
  },
  {
    id: 13,
    question: "In a human spermatozoon, the mitochondria that provide energy for movement are arranged spirally in the",
    options: ["Head", "Neck", "Middle piece", "End piece of the tail"],
    answer: 2,
    explanation: "The middle piece contains a helical sheath of mitochondria around the axial filament. The head carries the haploid nucleus and acrosome, and the neck contains the centrioles. The tail provides movement through its 9 + 2 axoneme."
  },
  {
    id: 14,
    question: "The total length of a normal human spermatozoon, from head to tail, is approximately",
    options: ["50–60 µm", "5–6 µm", "500–600 µm", "0.5–0.6 µm"],
    answer: 0,
    explanation: "The whole spermatozoon is about 50–60 µm long, while the oval head is only about 4–5 µm long and 2.5–3.5 µm wide. Only the head is commonly seen in old, dried stains because tails break off. The head size is large enough to be seen easily at ×400 magnification."
  },
  {
    id: 15,
    question: "In the Christmas tree stain for spermatozoa, using nuclear fast red (Kernechtrot) and picroindigocarmine, the sperm heads appear",
    options: ["Green, with the tails stained red", "Blue, with the tails stained yellow", "Colourless, with the tails stained violet", "Red, with the tails stained green"],
    answer: 3,
    explanation: "Nuclear fast red stains the sperm nucleus red, with the acrosome paler pink, and picroindigocarmine stains the tail and middle piece green. Epithelial cells take up blue-green with red nuclei. The bright contrast makes scanning a slide for sperm faster and is widely used in sexual assault casework."
  },
  {
    id: 16,
    question: "In a living female victim, spermatozoa usually persist for the longest time in the",
    options: ["Vaginal vault", "Endocervical canal", "Oral cavity", "Rectum"],
    answer: 1,
    explanation: "Cervical mucus protects sperm, so they can be found in the cervix for several days, longer than in the vagina, where the acidic environment and drainage remove them faster. In the oral cavity they disappear within hours. This is why swabs should be taken from the cervix as well as the vaginal vault when the delay is long."
  },
  {
    id: 17,
    question: "Microscopy of an extract from a two-year-old dried semen stain shows mostly sperm heads without tails. The correct interpretation is that",
    options: ["The stain cannot be semen, as sperm always keep their tails", "The man must have been azoospermic at the time", "The heads are probably yeast cells, so the result is negative", "Tails break off with drying and age; heads alone still confirm semen"],
    answer: 3,
    explanation: "Sperm tails are fragile and are easily lost from dried or old stains. The characteristic head shape, ideally stained with the Christmas tree stain, is enough to identify spermatozoa. Yeast cells may look similar, so careful morphology is needed."
  },
  {
    id: 18,
    question: "An ejaculate has a volume of 3 mL and a sperm concentration of 40 million per mL. The total number of spermatozoa in the ejaculate is",
    options: ["13.3 million", "120 million", "43 million", "1200 million"],
    answer: 1,
    explanation: "Total count = volume × concentration = 3 mL × 40 million/mL = 120 million. WHO lower reference values are about 15 million per mL and 39 million per ejaculate. Very low counts (oligospermia) mean fewer sperm in stains, so sperm searches may need concentrated extracts."
  },
  {
    id: 19,
    question: "In differential DNA extraction of a vaginal swab, sperm heads are not lysed in the first digestion step but are lysed later with dithiothreitol (DTT). This is because sperm nuclei",
    options: ["Lack nuclear DNA altogether", "Contain disulfide-linked protamines", "Are enclosed in a cellulose wall", "Dissolve readily in proteinase K alone"],
    answer: 1,
    explanation: "During spermiogenesis histones are replaced by cysteine-rich protamines, and the resulting disulfide bonds make the sperm nucleus very resistant. The first step with proteinase K and SDS lyses epithelial cells; adding DTT breaks the disulfide bonds and releases sperm DNA. This separates the male fraction from the female fraction."
  },
  {
    id: 20,
    question: "The most numerous leukocytes in the blood of a normal adult, making up about 40–70% of white cells, are",
    options: ["Lymphocytes", "Monocytes", "Eosinophils", "Neutrophils"],
    answer: 3,
    explanation: "Neutrophils, with a nucleus of two to five lobes, are the commonest white cells and are the first to reach sites of acute inflammation. Lymphocytes form about 20–40%, monocytes 2–8%, eosinophils 1–4% and basophils under 1%."
  },
  {
    id: 21,
    question: "The largest leukocyte in a normal blood smear, with a kidney- or horseshoe-shaped nucleus, is the",
    options: ["Basophil", "Small lymphocyte", "Monocyte", "Neutrophil"],
    answer: 2,
    explanation: "Monocytes measure about 12–20 µm and have a large indented nucleus with pale grey-blue cytoplasm. They become macrophages in tissues. Small lymphocytes are only slightly larger than red cells and have a round nucleus filling most of the cell."
  },
  {
    id: 22,
    question: "A white cell with a bilobed (spectacle-shaped) nucleus and coarse orange-red granules, increased in allergic and parasitic conditions, is the",
    options: ["Basophil", "Neutrophil", "Eosinophil", "Monocyte"],
    answer: 2,
    explanation: "Eosinophil granules stain bright orange-red with eosin and contain major basic protein used against parasites. Basophils have dark blue-purple granules that often hide an S-shaped nucleus. Neutrophil granules are fine and pale lilac."
  },
  {
    id: 23,
    question: "The Barr body, seen as a dark mass against the nuclear membrane in buccal cells of a normal female, is",
    options: ["An inactivated X chromosome", "A condensed Y chromosome", "An enlarged nucleolus", "A cluster of mitochondria"],
    answer: 0,
    explanation: "In each female somatic cell one X chromosome is inactivated early in development (Lyon hypothesis) and stays condensed as sex chromatin. Murray Barr and Ewart Bertram first described it in 1949 in cat neurons. Normal males (XY) have no Barr body."
  },
  {
    id: 24,
    question: "How many Barr bodies would be expected in buccal cells of an individual with the karyotype 48,XXXY?",
    options: ["3", "1", "2", "0"],
    answer: 2,
    explanation: "The number of Barr bodies equals the number of X chromosomes minus one, since only one X stays active. With three X chromosomes, 3 − 1 = 2 Barr bodies. The Y chromosome does not affect the count."
  },
  {
    id: 25,
    question: "A buccal smear from a tall, phenotypically male accused shows a Barr body in many cells. The most likely karyotype is",
    options: ["47,XXY", "46,XY", "45,X", "47,XYY"],
    answer: 0,
    explanation: "A Barr body in a male means at least two X chromosomes, which is typical of Klinefelter syndrome (47,XXY). Normal 46,XY and 47,XYY males have no Barr body, and 45,X (Turner) has a female phenotype with none. Sex chromatin study shows why phenotypic sex and chromosomal sex should not be assumed to match."
  },
  {
    id: 26,
    question: "The 'drumstick', a small nuclear appendage attached by a thin strand, used to suggest female sex from a blood smear, is seen in",
    options: ["Lymphocytes", "Red blood cells", "Platelets", "Neutrophils"],
    answer: 3,
    explanation: "Drumsticks are the inactive X chromosome appearing as a small projection from a lobe of the neutrophil nucleus. They are seen in a small percentage of neutrophils in females and are normally absent in males. Red cells and platelets have no nucleus at all."
  },
  {
    id: 27,
    question: "When cells from a male are stained with quinacrine and examined under a fluorescence microscope, a bright spot (F-body) is seen in the nucleus. This spot represents",
    options: ["The inactive X chromosome", "Heterochromatin on the long arm of Y", "The centromere of chromosome 1", "An enlarged nucleolus"],
    answer: 1,
    explanation: "The heterochromatic distal Yq fluoresces strongly with quinacrine, giving the Y-body or F-body in interphase cells. It was used for sex determination of cells, including those in hair roots and stains, before DNA methods such as amelogenin typing. The inactive X is seen as the Barr body instead."
  },
  {
    id: 28,
    question: "Nuclear DNA extracted from a bloodstain comes mainly from leukocytes because",
    options: ["Leukocytes outnumber red cells in blood", "Mature human red blood cells have no nucleus", "Red cells contain only RNA", "Platelets destroy red-cell DNA"],
    answer: 1,
    explanation: "Human erythrocytes lose their nucleus during maturation, so they carry no nuclear DNA. White cells, although far fewer (about 4000–11,000 per µL), are nucleated and provide the DNA for profiling. Bird and reptile red cells, by contrast, are nucleated."
  },
  {
    id: 29,
    question: "Fingernails grow at about 0.1 mm per day. A transverse white band (Mees' line) lies 6 mm from the nail fold. The exposure that caused it occurred about",
    options: ["2 months earlier", "6 days earlier", "6 months earlier", "2 weeks earlier"],
    answer: 0,
    explanation: "Distance ÷ growth rate = 6 mm ÷ 0.1 mm per day = 60 days, which is about 2 months. Because nails keep a record of past insults, the position of a band helps date an episode of poisoning. Toenails grow more slowly than fingernails, so the same calculation does not apply to them."
  },
  {
    id: 30,
    question: "Transverse white bands across the nails (Mees' lines) are classically associated with chronic poisoning by",
    options: ["Carbon monoxide", "Cyanide", "Arsenic", "Methanol"],
    answer: 2,
    explanation: "Arsenic is deposited in growing keratin of nails and hair, and Mees' lines can appear a few weeks after exposure. Thallium can produce similar lines. For this reason nail clippings are sent along with hair in suspected chronic arsenic poisoning."
  },
  {
    id: 31,
    question: "In a case of rape where the victim resisted the assailant, fingernail scrapings and clippings of the victim are collected mainly to",
    options: ["Recover the assailant's cells, blood or fibres", "Determine the victim's blood alcohol level", "Estimate the victim's age from nail growth", "Detect gunshot residue on the victim's hands"],
    answer: 0,
    explanation: "Scratching during a struggle can trap the attacker's skin, blood and clothing fibres under the victim's nails. Each hand's scrapings should be packed separately and labelled. A foreign DNA profile from the nails can strongly support the victim's account."
  },
  {
    id: 32,
    question: "Nails are composed mainly of",
    options: ["Collagen produced by fibroblasts", "Hard keratin produced by the nail matrix", "Calcium phosphate", "Chitin"],
    answer: 1,
    explanation: "The nail plate is compacted hard alpha-keratin formed by the nail matrix under the proximal nail fold. Like hair, it incorporates substances circulating in the blood while it grows. Keratin resists decay, so nails often survive in decomposed remains."
  },
  {
    id: 33,
    question: "In a human hair, the pigment granules that determine colour are found mainly in the",
    options: ["Cortex", "Cuticle", "Medulla", "Root sheath only"],
    answer: 0,
    explanation: "Melanin granules are distributed through the cortex, the main body of the hair shaft between the cuticle and medulla. Their size, density and distribution are compared in hair examination. The cuticle is a thin translucent layer of overlapping scales."
  },
  {
    id: 34,
    question: "The cuticle of human scalp hair typically shows which scale pattern?",
    options: ["Coronal scales", "Spinous scales", "Imbricate scales", "No scales at all"],
    answer: 2,
    explanation: "Human hair has thin, flat, overlapping imbricate scales with smooth margins. Coronal scales stacked like crowns are typical of rodents and bats, and spinous scales occur in cats and mink. Scale casts in nail varnish or gelatin are used to study the pattern."
  },
  {
    id: 35,
    question: "A hair has a shaft diameter of 80 µm and a medulla diameter of 20 µm. Its medullary index and probable origin are",
    options: ["0.25, consistent with animal hair", "0.25, consistent with human hair", "4.0, consistent with animal hair", "0.60, consistent with human hair"],
    answer: 1,
    explanation: "Medullary index = medulla diameter ÷ shaft diameter = 20 ÷ 80 = 0.25. Human hair generally has an index below about one-third, while most animal hairs have indices of one-half or more. The medulla in human hair is also often absent or fragmented."
  },
  {
    id: 36,
    question: "A hair recovered from the victim's clenched hand has a root with an attached tissue sheath. This indicates that the hair was most likely",
    options: ["Shed naturally in the telogen phase", "Pulled out in anagen, and suitable for nuclear DNA", "Cut from the head with a sharp instrument", "Of animal rather than human origin"],
    answer: 1,
    explanation: "Anagen hairs are firmly anchored, so forcible removal brings the root with its sheath cells, which contain nucleated cells rich in nuclear DNA. Shed telogen hairs have a club-shaped root with little nuclear DNA. Root condition therefore guides both interpretation and choice of DNA test."
  },
  {
    id: 37,
    question: "A hair recovered from a sofa has a club-shaped (bulbous) root without any attached sheath. This root form is characteristic of a hair in the",
    options: ["Telogen (resting) phase that was shed naturally", "Anagen phase that was forcibly removed", "Catagen phase that was cut", "Anagen phase that was burnt"],
    answer: 0,
    explanation: "At the end of the cycle the hair forms a keratinised club root and is shed naturally. Such hairs are the most common in casework but contain little nuclear DNA, so mitochondrial DNA analysis of the shaft is often used. Catagen is a brief transitional phase lasting a few weeks."
  },
  {
    id: 38,
    question: "A woman dyed her hair; a later sample shows 1.5 cm of undyed hair at the root end. If scalp hair grows about 1 cm per month, the hair was dyed about",
    options: ["1–2 weeks earlier", "6–7 weeks earlier", "6 months earlier", "15 days earlier"],
    answer: 1,
    explanation: "1.5 cm ÷ 1 cm per month = 1.5 months, which is about 6–7 weeks. Scalp hair grows roughly 0.3–0.4 mm per day. The same idea, segmental analysis, is used to build a timeline of drug or poison exposure along a hair."
  },
  {
    id: 39,
    question: "Scalp hair that is round in cross-section, straight, coarse and with dense pigment is most typical of which population group?",
    options: ["Mongoloid", "Negroid", "Caucasoid", "Australoid"],
    answer: 0,
    explanation: "Mongoloid hair is usually round in cross-section, straight and thick. Negroid hair is flattened or elliptical and tightly curled, and Caucasoid hair is oval with variable colour. These are broad trends only and cannot establish ancestry with certainty."
  },
  {
    id: 40,
    question: "Hair with cuticle scales stacked like a series of crowns (coronal pattern) most likely comes from",
    options: ["A human being", "A domestic cat", "A cow or buffalo", "A rodent such as a rat"],
    answer: 3,
    explanation: "Coronal scales encircle the shaft and are characteristic of fine hairs of rodents and bats. Human hair has imbricate scales, and cats show spinous scales. Such scale patterns allow a quick decision on human versus animal origin."
  },
  {
    id: 41,
    question: "Under the microscope, a natural fibre appears as a flat, twisted ribbon with periodic convolutions and a lumen. The fibre is",
    options: ["Wool", "Silk", "Jute", "Cotton"],
    answer: 3,
    explanation: "Cotton is a seed hair of cellulose that collapses on drying into a twisted ribbon with regular convolutions along its length. Mercerised cotton is rounder with fewer twists. Wool shows scales, silk is smooth and structureless, and jute shows cross-markings."
  },
  {
    id: 42,
    question: "A protein fibre whose surface shows overlapping scales under the microscope, similar to animal hair, is",
    options: ["Cotton", "Silk", "Wool", "Nylon"],
    answer: 2,
    explanation: "Wool is sheep hair made of keratin, and its cuticle scales give it the felting property. It may also have a medulla in coarse fibres. Silk is also protein (fibroin) but has no scales, and cotton and nylon are not hair fibres."
  },
  {
    id: 43,
    question: "A natural continuous filament fibre with a smooth surface, no scales and a roughly triangular cross-section is",
    options: ["Wool", "Silk", "Cotton", "Flax"],
    answer: 1,
    explanation: "Mulberry silk produced by Bombyx mori is a protein fibre (fibroin) extruded as a continuous filament, triangular in section with rounded corners. Raw silk has a sericin coating, which is removed during degumming. Wool has scales, while cotton and flax are plant fibres."
  },
  {
    id: 44,
    question: "Which of the following natural fibres is a bast (stem) fibre?",
    options: ["Cotton", "Jute", "Coir", "Kapok"],
    answer: 1,
    explanation: "Bast fibres come from the phloem region of plant stems, and include jute, flax (linen), hemp and ramie. Jute is a lignocellulosic fibre showing cross-markings and a variable lumen. Cotton and kapok are seed fibres, and coir comes from the husk of the coconut fruit."
  },
  {
    id: 45,
    question: "A fibre burns quickly with a yellow flame, smells of burning paper and leaves a soft grey ash that crumbles easily. The fibre is most likely",
    options: ["Cotton", "Wool", "Nylon", "Polyester"],
    answer: 0,
    explanation: "Cellulosic fibres such as cotton, linen and rayon burn readily, smell like paper and leave light, feathery ash. They do not melt. Protein fibres smell of burnt hair, and synthetic thermoplastics melt and form hard beads."
  },
  {
    id: 46,
    question: "A fibre burns slowly and tends to self-extinguish, gives a smell like burning hair and leaves a brittle black residue that crushes easily. The fibre is most likely",
    options: ["Cotton", "Polyester", "Wool", "Acrylic"],
    answer: 2,
    explanation: "Protein fibres such as wool and silk contain sulphur and nitrogen, giving the burnt hair or feather smell. Their ash is a crisp black bead that crushes to powder. Synthetic fibres leave hard beads that cannot be crushed."
  },
  {
    id: 47,
    question: "On approaching a flame, a fibre shrinks away and melts, burns slowly with a celery-like odour and leaves a hard, round, greyish bead. The fibre is most likely",
    options: ["Cotton", "Silk", "Viscose rayon", "Nylon"],
    answer: 3,
    explanation: "Nylon (a polyamide) is thermoplastic, so it melts before burning and forms a hard bead; its odour is often described as celery-like. Polyester also melts but gives a sweetish smell and black sooty smoke. Burn tests are destructive and only presumptive, so they are confirmed by microscopy or FTIR."
  },
  {
    id: 48,
    question: "Under a polarising microscope, a synthetic fibre has a refractive index of 1.582 parallel to its length and 1.519 perpendicular to its length. Its birefringence is",
    options: ["3.101", "0.063", "1.041", "0.630"],
    answer: 1,
    explanation: "Birefringence = n∥ − n⊥ = 1.582 − 1.519 = 0.063. Birefringence reflects how strongly polymer chains are oriented along the fibre and is a key feature for identifying the polymer class. A value around 0.06 is within the range of nylon, while polyester is much higher."
  },
  {
    id: 49,
    question: "Viscose rayon is classified as a",
    options: ["Natural protein fibre", "Fully synthetic polyamide fibre", "Regenerated cellulose fibre", "Natural bast fibre"],
    answer: 2,
    explanation: "Rayon is made by dissolving cellulose from wood pulp and extruding it to form new fibres, so it is man-made from a natural polymer. It burns like cotton because it is still cellulose. Its striated outline under the microscope helps distinguish it from cotton."
  },
  {
    id: 50,
    question: "The most suitable instrumental method for identifying the polymer class of a single synthetic fibre non-destructively is",
    options: ["Burn test", "Gram staining", "FTIR microspectroscopy", "Atomic absorption spectroscopy"],
    answer: 2,
    explanation: "FTIR gives an infrared spectrum of functional groups that identifies polymers such as polyamide, polyester or acrylic even on a single fibre. It does not consume the fibre, which can then be examined by other methods. The burn test destroys the sample, and AAS measures elements, not polymers."
  }
];

export default questions;

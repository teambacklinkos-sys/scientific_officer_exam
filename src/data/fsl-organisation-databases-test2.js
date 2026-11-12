const questions = [
  {
    id: 1,
    question: "What is the recommended packaging for a dried, blood-stained shirt being sent for DNA analysis?",
    options: ["Airtight polythene bag", "Sealed glass jar", "Paper bag or paper envelope", "Aluminium foil wrap inside a plastic box"],
    answer: 2,
    explanation: "Biological evidence is packed in breathable paper so that any leftover moisture can escape. Airtight plastic, glass or foil traps moisture, which encourages bacteria and fungi that break down DNA. Each item is packed separately, sealed and labelled."
  },
  {
    id: 2,
    question: "A rape victim's undergarment is still damp with body fluid when it is seized. What is the correct way to handle it before packing?",
    options: ["Dry it quickly with a hair dryer on the hot setting", "Air-dry it at room temperature, away from direct sunlight and heat, over clean paper", "Pack it wet in a polythene bag and freeze it at once without drying", "Wash off the excess fluid with saline and then pack it in paper"],
    answer: 1,
    explanation: "Wet stains are air-dried at room temperature, away from sunlight and heat, which can degrade DNA. Clean paper placed underneath catches any trace evidence that falls off. Hot air can scatter traces and damage the stain, and washing destroys the evidence itself."
  },
  {
    id: 3,
    question: "A blood-soaked shirt that was sealed in a polythene bag reaches the laboratory after 10 days, smelling bad and covered in mould. What is the main reason the DNA results are likely to be poor?",
    options: ["Polythene releases chemicals that inhibit PCR", "Plastic blocks the light needed to keep DNA stable", "Plastic makes the blood clot and hide the white cells", "Moisture trapped in the plastic allowed bacteria and fungi to grow and degrade the DNA"],
    answer: 3,
    explanation: "Plastic keeps moisture in, so microbes grow and their nucleases break DNA into fragments, giving partial or failed profiles. This is the main reason biological evidence goes in paper. DNA does not need light to stay stable, and plastic is not a significant PCR inhibitor."
  },
  {
    id: 4,
    question: "A fresh bite mark is seen on the shoulder of an assault victim brought to hospital. What should be done before the area is cleaned or an impression is taken?",
    options: ["Photograph it with an ABFO No. 2 scale and swab it for saliva using the double-swab technique", "Wash it with antiseptic so the tooth marks show more clearly", "Take a dental impression at once and skip the photographs", "Cover it with an adhesive dressing and examine it the next day"],
    answer: 0,
    explanation: "Saliva left by the biter can give the offender's DNA, so the mark is photographed with a scale and swabbed (moist swab, then dry swab) before anything else touches it. Cleaning or taking an impression first removes the saliva. A delay also lets the bruise pattern change and the saliva be lost."
  },
  {
    id: 5,
    question: "Which liquid should be used to moisten a sterile cotton swab before collecting a dried bloodstain for DNA analysis?",
    options: ["70% ethanol", "Sterile distilled water", "10% sodium hypochlorite", "3% hydrogen peroxide"],
    answer: 1,
    explanation: "Sterile distilled (or deionised) water rehydrates the stain without harming DNA. Ethanol fixes and dehydrates material, while bleach and hydrogen peroxide are oxidisers that destroy DNA. Use only a little water so the stain does not spread."
  },
  {
    id: 6,
    question: "While swabbing a bloodstain from a floor tile, the examiner also swabs a nearby unstained area of the same tile and packs it separately. Why?",
    options: ["To give the laboratory extra blood in case the main swab fails", "To estimate the age of the bloodstain", "To act as a substrate or background control showing whether the surface itself gives a reaction or DNA", "To find out whether the stain is human or animal"],
    answer: 2,
    explanation: "A control swab from an unstained area shows what the substrate alone contributes, such as background DNA, chemicals or false presumptive reactions. If the control gives a result, the main stain result has to be interpreted with care. It cannot give extra blood, show the stain's age or tell species."
  },
  {
    id: 7,
    question: "A small dried bloodstain is found on a wall that cannot be removed. What is the most appropriate way to collect it for DNA analysis?",
    options: ["Swab it with a swab lightly moistened with sterile water, air-dry the swab and pack it in paper with a control swab", "Scrape it into a polythene bag with a steel blade and seal it airtight", "Spray luminol on it and collect the luminol-soaked residue", "Photograph it only, since stains on walls cannot be used for DNA"],
    answer: 0,
    explanation: "Dried stains on immovable surfaces are swabbed with a lightly moistened swab, or scraped into a clean paper fold, after being photographed. The swab is air-dried and packed in paper or a ventilated swab box together with a substrate control. Luminol is used to detect latent blood, not to collect stains, and it can dilute the sample."
  },
  {
    id: 8,
    question: "Which reference sample is most commonly collected from a suspect for DNA profiling because it is non-invasive and easy to take?",
    options: ["Venous blood in a plain tube", "Plucked head hair", "Fingernail clippings", "Buccal (cheek) swab"],
    answer: 3,
    explanation: "A buccal swab is rubbed firmly on the inside of the cheek to collect epithelial cells. It needs no needle, carries little risk and gives enough DNA for STR profiling. Venous blood is also an excellent reference but is invasive and needs trained staff."
  },
  {
    id: 9,
    question: "What instruction should a person be given before a reference buccal swab is collected?",
    options: ["Brush the teeth with toothpaste just before sampling", "Rinse the mouth with an antiseptic mouthwash", "Avoid eating, drinking or smoking for about 30 minutes beforehand", "Fast overnight for at least 12 hours"],
    answer: 2,
    explanation: "Food, drink or tobacco just before sampling can leave foreign DNA, debris or PCR inhibitors in the mouth, so a gap of about 20–30 minutes is advised. Antiseptic mouthwash and toothpaste can affect the cells and leave chemicals behind. Overnight fasting is unnecessary."
  },
  {
    id: 10,
    question: "Liquid blood is collected from a suspect as a reference sample for DNA profiling. Which tube should be used?",
    options: ["Lavender-top tube containing EDTA", "Grey-top tube containing sodium fluoride and potassium oxalate", "Green-top tube containing heparin", "Red-top plain tube without anticoagulant"],
    answer: 0,
    explanation: "EDTA (lavender or purple top) is the anticoagulant of choice for DNA work because it prevents clotting and protects DNA. Heparin inhibits PCR, a plain tube lets the blood clot, and the fluoride-oxalate tube is meant for blood alcohol and glucose testing."
  },
  {
    id: 11,
    question: "How does EDTA help preserve DNA in a liquid blood sample?",
    options: ["It cross-links DNA to proteins and so stabilises it", "It chelates divalent cations such as Mg²⁺ that nucleases need, inhibiting DNA breakdown", "It lowers the pH of blood enough to kill all bacteria", "It lyses red cells so that only white cells remain"],
    answer: 1,
    explanation: "EDTA binds Ca²⁺, which stops clotting, and Mg²⁺, a cofactor that DNases need, so it slows enzymatic breakdown of DNA. Cross-linking is what formalin does and is harmful. EDTA does not acidify blood or selectively lyse red cells."
  },
  {
    id: 12,
    question: "Why is heparinised blood generally avoided as a reference sample for STR typing?",
    options: ["Heparin dissolves the nuclear membrane of white cells", "Heparin breaks DNA into very small fragments within hours", "Heparin turns blood alkaline and denatures DNA", "Heparin carries through extraction and inhibits Taq polymerase during PCR"],
    answer: 3,
    explanation: "Heparin is a strong PCR inhibitor that can carry through extraction and interfere with Taq polymerase, causing weak or failed amplification. It does not chemically break DNA. EDTA is therefore preferred, and heparinised samples may need extra clean-up if they are the only ones available."
  },
  {
    id: 13,
    question: "Why is sodium fluoride added to blood samples collected for alcohol estimation?",
    options: ["It inhibits enzymes and microbes so that ethanol is not formed or lost after collection", "It prevents evaporation of ethanol through the stopper", "It reacts with ethanol to form a stable coloured complex", "It acts as the only anticoagulant needed in the sample"],
    answer: 0,
    explanation: "Sodium fluoride inhibits enzymes and microbial activity. This prevents yeasts and bacteria from fermenting glucose into ethanol in the tube, and stops microbes from using up alcohol already present. Potassium oxalate is usually added as the anticoagulant, and the tube is filled well and tightly stoppered to limit evaporation."
  },
  {
    id: 14,
    question: "A doctor is collecting blood from a suspected drunk driver for blood alcohol estimation. How should the skin over the vein be cleaned?",
    options: ["With rectified spirit", "With an isopropyl alcohol swab", "With a non-alcoholic antiseptic such as aqueous povidone-iodine, or soap and water", "With ether to remove skin oils"],
    answer: 2,
    explanation: "An alcohol-based swab could contaminate the sample and falsely raise the reported blood alcohol level, which the defence could exploit. A non-alcoholic antiseptic or soap and water is used. Ether is not an accepted skin antiseptic for this purpose and, being a volatile solvent, could also contaminate the sample."
  },
  {
    id: 15,
    question: "In a decomposed body where femoral blood may be contaminated by putrefactive alcohol, which sample is preferred for estimating antemortem alcohol?",
    options: ["Bile from the gall bladder", "Vitreous humour from the eye", "Pleural cavity fluid", "Stomach contents"],
    answer: 1,
    explanation: "Vitreous humour is sealed off from the gut and from bacteria and decomposes late, so post-mortem alcohol formation there is minimal. It is drawn gently from the eye with a fine needle and preserved with sodium fluoride. Pleural fluid and stomach contents are easily contaminated by bacteria or by diffusion from the gut."
  },
  {
    id: 16,
    question: "Why can dried blood spotted on FTA cards be transported with fewer biohazard precautions than liquid blood?",
    options: ["The card is coated with formalin, which fixes the blood", "The blood on the card is diluted until it is no longer infectious", "The card is irradiated by the manufacturer after the blood is applied", "Chemicals in the card lyse cells and inactivate most bacteria and viruses, and the dried spot cannot leak"],
    answer: 3,
    explanation: "The detergent and other chemicals in FTA paper lyse cells and inactivate most pathogens, while the DNA stays bound to the fibres. A dried spot cannot spill like a tube of liquid blood. This makes FTA cards safer and cheaper to transport and store than liquid samples."
  },
  {
    id: 17,
    question: "A laboratory receives reference blood spotted on FTA cards. How should these be stored for long periods?",
    options: ["Dried, at room temperature, in a sealed pouch with desiccant", "Wet, in a refrigerator at 4 °C", "Submerged in 70% ethanol", "Only in liquid nitrogen at −196 °C"],
    answer: 0,
    explanation: "Once dried, blood on FTA cards stays stable for years at room temperature, which is one of their main advantages over liquid blood. Keeping them dry with a desiccant prevents microbial growth. Refrigeration or ultra-low freezing is not needed."
  },
  {
    id: 18,
    question: "Which of the following is NOT normally part of a sexual-assault evidence collection kit used for a victim?",
    options: ["Vaginal and cervical swabs", "Pubic hair combings", "Fingernail scrapings or clippings", "Gastric lavage sample"],
    answer: 3,
    explanation: "Such kits contain swabs (vaginal, cervical, oral, anal as indicated), slides, pubic hair combings and reference hairs, fingernail scrapings, a reference blood or buccal sample and paper bags for clothing. Gastric lavage is a toxicology procedure, though blood and urine may be taken separately if drug-facilitated assault is suspected."
  },
  {
    id: 19,
    question: "A vaginal swab from a rape victim is strongly positive for prostate-specific antigen (PSA/p30), but no spermatozoa are found even after differential extraction. Which analysis is most useful for detecting the male contributor?",
    options: ["Y-chromosome STR (Y-STR) profiling", "ABO blood grouping of the stain", "Mitochondrial DNA sequencing of the victim's reference", "Autosomal STR profiling of the victim's buccal swab"],
    answer: 0,
    explanation: "When there are no sperm, for example with a vasectomised or azoospermic assailant, the small amount of male DNA is swamped by the victim's female DNA in autosomal tests. Y-STRs amplify only male DNA and so pick up the male contributor despite excess female DNA. Testing the victim's own references does not identify the assailant."
  },
  {
    id: 20,
    question: "According to the Ministry of Health and Family Welfare guidelines (2014) for medico-legal care of survivors of sexual violence, forensic evidence should be collected if the survivor is examined within what period of the assault?",
    options: ["24 hours", "48 hours", "96 hours", "7 days"],
    answer: 2,
    explanation: "The MoHFW 2014 guidelines advise collecting forensic evidence when the survivor reports within 96 hours, because the chances of finding it fall sharply after that. Medical care, documentation of injuries and treatment are provided whenever the survivor reports. Sperm are usually found in vaginal samples for up to about 3 days."
  },
  {
    id: 21,
    question: "While collecting the clothing of a sexual-assault victim at the hospital, what is the correct practice?",
    options: ["Ask her to undress over clean paper, and pack each garment separately in its own paper bag", "Pack all garments together in one bag to keep them as a set", "Shake each garment over the floor to remove loose debris before packing", "Wash bloodstained garments before packing to prevent spoilage"],
    answer: 0,
    explanation: "Undressing over a clean paper sheet catches hairs, fibres and debris, and the sheet is folded and sent as an exhibit. Packing each garment separately prevents cross-transfer between items. Shaking loses trace evidence and washing destroys it."
  },
  {
    id: 22,
    question: "A woman was strangled and was seen scratching her assailant during the struggle. Which sample from her body is most likely to yield the assailant's DNA?",
    options: ["Scalp hair combings", "Fingernail scrapings or clippings, with each hand packed separately", "Swab from the inner surface of her lower lip", "Her femoral blood sample"],
    answer: 1,
    explanation: "Scratching transfers the assailant's skin cells and blood under the victim's fingernails. Scrapings or clippings from each hand are collected into separate labelled paper packets. Her own blood and lip swabs will mainly give her own profile."
  },
  {
    id: 23,
    question: "According to Saferstein, what is the minimum number of full-length reference hairs to be collected from all areas of the scalp and from the pubic region, respectively?",
    options: ["10 and 5", "100 and 50", "25 and 10", "50 and 24"],
    answer: 3,
    explanation: "Saferstein recommends 50 full-length head hairs from all areas of the scalp and at least 24 full-length pubic hairs, so that natural variation is represented. Hairs are pulled or combed out rather than cut, so that roots are included. Each set is placed in a separate paper fold or envelope."
  },
  {
    id: 24,
    question: "A single hair found at a crime scene has no root sheath and a club-shaped root, showing it was shed naturally. Which DNA analysis is most likely to succeed?",
    options: ["Autosomal STR typing of the root", "Mitochondrial DNA sequencing of the shaft", "Y-STR typing of the cuticle", "ABO grouping of the medulla"],
    answer: 1,
    explanation: "Shed telogen hairs have a club root with little or no nucleated sheath tissue, so nuclear STR typing usually fails. The shaft, however, contains many copies of mitochondrial DNA, which can be sequenced. Plucked anagen hairs with an attached root sheath are the ones that give good nuclear STR profiles."
  },
  {
    id: 25,
    question: "A hair sample cut close to the scalp is analysed in segments. A drug is found only in the segment 3–4 cm from the root end. Assuming average head-hair growth, roughly when was the drug taken?",
    options: ["About 3–4 days ago", "About 3–4 weeks ago", "About 3–4 months ago", "About 3–4 years ago"],
    answer: 2,
    explanation: "Scalp hair grows about 1 cm per month, so a segment 3–4 cm from the root reflects exposure about 3–4 months earlier. This is why hair for toxicology is cut close to the scalp, usually from the back of the vertex, with the root end marked. Blood and urine show only recent exposure."
  },
  {
    id: 26,
    question: "Skeletal remains recovered from a field are to be sent for DNA identification. Which of the following should be AVOIDED?",
    options: ["Removing adhering soft tissue mechanically", "Air-drying the bones and packing them in paper", "Storing the bones frozen until they are sent", "Boiling the bones for hours in detergent solution to strip off the flesh"],
    answer: 3,
    explanation: "Prolonged boiling and harsh chemicals degrade the DNA held in bone, so bones for DNA are cleaned of soft tissue mechanically instead. They are then air-dried and packed in paper, or frozen. Formalin must also be avoided because it cross-links and fragments DNA."
  },
  {
    id: 27,
    question: "Why are teeth, especially intact molars, valuable for DNA identification of burnt or badly decomposed bodies?",
    options: ["The hard enamel and dentine shield the pulp and the DNA inside from heat, moisture and microbes", "Enamel itself contains large amounts of nuclear DNA", "Teeth contain only mitochondrial DNA, which is easier to type", "Saliva left on the crown preserves the person's DNA indefinitely"],
    answer: 0,
    explanation: "The mineralised enamel and dentine act as a protective capsule around the pulp, so DNA survives fire, water and decomposition. Intact, unrestored molars are preferred. Mature enamel is acellular and holds almost no DNA; the DNA comes from pulp and dentine and includes nuclear as well as mitochondrial DNA."
  },
  {
    id: 28,
    question: "A body is in an early stage of decomposition and no good blood can be drawn. Which soft-tissue sample is best for DNA identification, and how should it be preserved?",
    options: ["Skin from the abdomen, fixed in 10% formalin", "Liver tissue, in saturated salt solution", "Deep skeletal muscle (for example from the thigh), packed without preservative and frozen", "Brain tissue, kept in rectified spirit at room temperature"],
    answer: 2,
    explanation: "Deep skeletal muscle putrefies later than surface skin or internal organs and usually gives good DNA. It should be packed without chemical preservative and frozen at about −20 °C. Formalin causes DNA damage, and soft organs such as liver and brain decompose early."
  },
  {
    id: 29,
    question: "Why is tissue fixed in formalin a poor source for forensic STR typing?",
    options: ["Formalin turns DNA into RNA", "Formaldehyde cross-links DNA with proteins and causes fragmentation, so long amplicons fail", "Formalin removes all cells from the tissue", "Formalin contains human DNA that contaminates the sample"],
    answer: 1,
    explanation: "Formaldehyde forms DNA–protein cross-links and, over time and in acidic unbuffered solutions, breaks DNA into short pieces. This blocks PCR and causes larger STR loci to drop out. Samples meant for DNA should be frozen or air-dried, not placed in formalin."
  },
  {
    id: 30,
    question: "For which purpose is 10% formalin the correct preservative for autopsy tissue?",
    options: ["Histopathological examination", "Chemical analysis for poisons", "DNA profiling", "Blood alcohol estimation"],
    answer: 0,
    explanation: "10% formalin fixes tissue structure for microscopy and is the standard fixative for histopathology. It is unsuitable for toxicology, where it chemically alters or interferes with many poisons, and for DNA work. Pieces for histopathology and for chemical analysis are therefore sent in separate containers."
  },
  {
    id: 31,
    question: "Commercial formalin contains about 40% formaldehyde. How much commercial formalin is needed to prepare 500 ml of 10% formalin?",
    options: ["5 ml", "50 ml", "100 ml", "200 ml"],
    answer: 1,
    explanation: "10% formalin is 1 part commercial formalin plus 9 parts water, so 500 ml needs 50 ml of formalin and 450 ml of water. It therefore contains only about 4% formaldehyde. 100 ml would give 20% formalin."
  },
  {
    id: 32,
    question: "Which is the most commonly used preservative for viscera sent to the Chemical Examiner or FSL in a case of suspected poisoning?",
    options: ["10% formalin", "Saturated solution of common salt (sodium chloride)", "Glacial acetic acid", "Concentrated sulphuric acid"],
    answer: 1,
    explanation: "A saturated solution of common salt is the routine preservative for viscera in suspected poisoning. It is cheap and slows putrefaction without interfering with most toxicological analyses. Formalin and strong acids alter tissues and poisons, and rectified spirit is an alternative with specific exceptions."
  },
  {
    id: 33,
    question: "Rectified spirit must NOT be used as a viscera preservative when poisoning by which substance is suspected?",
    options: ["Arsenic", "Strychnine", "Copper sulphate", "Ethyl alcohol"],
    answer: 3,
    explanation: "Rectified spirit is about 95% ethanol, so it would make it impossible to measure alcohol in the viscera. It is also avoided for certain other volatile or alcohol-related poisons, such as phenol, paraldehyde and acetic acid. In such cases saturated salt solution is used instead."
  },
  {
    id: 34,
    question: "When viscera are sent for chemical analysis in a preservative, what else must be sent along with them?",
    options: ["A separate sealed sample of the same preservative, as a control", "A photograph of the deceased's face", "A sample of the doctor's blood", "The post-mortem report in place of the requisition form"],
    answer: 0,
    explanation: "A separate sample of the preservative used is sent so the analyst can confirm the preservative itself did not contain the poison found. Without this control, the defence can argue the poison came from contaminated preservative. Each container is sealed and labelled, and a sample seal is sent as well."
  },
  {
    id: 35,
    question: "In routine preservation of viscera for poisoning, which organ is sent because most absorbed poisons are metabolised and concentrated there?",
    options: ["Spleen", "Heart", "Liver", "Lung"],
    answer: 2,
    explanation: "The liver receives portal blood from the gut and is the main organ of metabolism, so many poisons and their metabolites are concentrated there. About 500 g of liver is usually preserved, along with the stomach and its contents, a length of small intestine with contents, both kidneys or halves of each, blood and urine."
  },
  {
    id: 36,
    question: "Why are viscera jars filled only to about two-thirds of their capacity?",
    options: ["To save preservative", "To leave room for gases from decomposition, so the jar does not burst or leak", "To let air in so that aerobic bacteria can destroy the poison", "Because the Chemical Examiner adds an equal amount of reagent on arrival"],
    answer: 1,
    explanation: "Even with preservative, some decomposition goes on and produces gas. Leaving about a third of the jar empty prevents bursting, leaking and breaking of seals in transit. Wide-mouthed glass jars with tight stoppers are used, and each is sealed and labelled."
  },
  {
    id: 37,
    question: "A liquid blood sample in an EDTA tube for DNA analysis has to be kept for a few days before it can be sent to the FSL. How should it be stored?",
    options: ["At 37 °C in an incubator", "In direct sunlight to dry it", "Refrigerated at about 4 °C", "At room temperature with the stopper removed"],
    answer: 2,
    explanation: "Liquid blood is refrigerated at about 2–8 °C for short-term storage to slow microbial growth and DNA breakdown. Warmth and light speed up degradation, and an open tube invites contamination. For long-term storage the blood is frozen, or spotted and dried on FTA cards."
  },
  {
    id: 38,
    question: "For long-term storage of extracted DNA in a forensic DNA laboratory, which condition is best?",
    options: ["4 °C in a refrigerator", "Room temperature in TE buffer", "−80 °C in an ultra-low freezer", "37 °C in a dry incubator"],
    answer: 2,
    explanation: "Freezing at −20 °C is fine for months, and −80 °C is best for long-term archiving because nuclease and chemical activity almost stop. Refrigeration at 4 °C is only for short-term working stocks. Repeated freezing and thawing should be avoided by keeping DNA in aliquots."
  },
  {
    id: 39,
    question: "What does 'chain of custody' mean in the handling of forensic exhibits?",
    options: ["The line of police officers who guard the crime scene", "The legal order in which accused persons are interrogated", "The sequence of tests a laboratory uses on an exhibit", "A documented, unbroken record of everyone who collected, handled, transferred or stored the exhibit, with dates, times and purposes"],
    answer: 3,
    explanation: "Chain of custody is the documented history of an exhibit from collection to production in court. It records each person who held it, when, why and in what condition, along with the seals. It shows that the item tested is the item collected and that it was not tampered with."
  },
  {
    id: 40,
    question: "A sealed packet of blood swabs passed from the investigating officer to a constable and then to the FSL, but the transfer to the constable was never recorded. What is the most likely legal consequence?",
    options: ["The defence can question the integrity of the exhibit, which may reduce the weight of the DNA evidence or make it inadmissible", "Nothing, because the seal was intact when it reached the FSL", "The DNA report automatically becomes conclusive proof", "The FSL must return the packet unopened"],
    answer: 0,
    explanation: "A gap in the chain lets the defence argue that the exhibit could have been switched, tampered with or contaminated. Courts may then give the DNA report less weight or reject it. An intact seal helps, but it does not replace complete documentation of who held the exhibit."
  },
  {
    id: 41,
    question: "After making sure everyone is safe and giving medical aid to the injured, what is the first responding officer's next priority at a violent crime scene?",
    options: ["Begin collecting biological evidence before it degrades", "Secure the scene with a cordon and start a log of everyone who enters or leaves", "Clean the area so that investigators can walk freely", "Move the body to the hospital mortuary at once"],
    answer: 1,
    explanation: "Once life and safety are dealt with, the scene must be secured with a cordon (often outer and inner) and an entry log kept to prevent contamination and loss of evidence. Evidence is collected only after the scene has been documented. Moving the body or cleaning the area destroys context."
  },
  {
    id: 42,
    question: "When photographing a bloodstain at a crime scene, how should close-up photographs be taken?",
    options: ["Only with a scale, since photos without one are worthless", "Only after the stain has been swabbed, to show the sampled area", "First without a scale, then with a scale placed beside the stain", "Only in black and white, to improve contrast"],
    answer: 2,
    explanation: "Close-ups are taken first without a scale, to show the item as found, and then with a scale to record size; the ABFO No. 2 scale is used for bite marks and injuries. This follows overall and mid-range photographs. Photographs are taken before anything is moved or sampled."
  },
  {
    id: 43,
    question: "A large open field has to be searched for discarded weapons and bloodstained items, and many personnel are available. Which search pattern is most suitable?",
    options: ["Line or strip search", "Spiral search by a single officer", "Wheel or ray search", "Zone search of a single room"],
    answer: 0,
    explanation: "In a line or strip search, searchers stand shoulder to shoulder and walk in parallel lanes, which suits large open areas with many people. A grid search is a double strip search at right angles. A spiral search suits one person, and a zone search suits rooms or vehicles divided into sections."
  },
  {
    id: 44,
    question: "What is a 'common approach path' at a crime scene?",
    options: ["The route the offender took to escape", "A single designated route that all personnel use to enter and leave, to limit disturbance and contamination", "The road on which the police vehicles are parked", "The path along which a sniffer dog is walked"],
    answer: 1,
    explanation: "The common approach path is chosen where evidence is least likely to be, marked, and used by everyone entering or leaving the scene. It keeps footwear marks, trace evidence and contamination to a minimum. The path is itself checked and documented before it is used."
  },
  {
    id: 45,
    question: "A crime-scene officer handled the victim's clothing and then, wearing the same gloves, handled clothing seized from the suspect. Why is this a serious problem?",
    options: ["The gloves may tear and injure the officer", "The suspect's clothing will lose all its own DNA", "It breaks the rule that gloves must be changed every hour", "DNA and trace material may be cross-transferred, creating a false association between victim and suspect"],
    answer: 3,
    explanation: "Gloves are changed between every item, and victim and suspect items are collected, packed, transported and examined separately, ideally by different people. Re-using gloves can move cells or fibres from one person's items to the other's, creating a link the defence will rightly challenge."
  },
  {
    id: 46,
    question: "Why do forensic DNA laboratories maintain a staff elimination database containing profiles of laboratory staff, crime-scene officers and police personnel?",
    options: ["To find profiles in evidence that come from contamination by people involved in the investigation", "To check staff for criminal records before employment", "To serve as a population database for calculating match probabilities", "To use as positive controls in every PCR run"],
    answer: 0,
    explanation: "An elimination database lets the lab compare unexplained profiles in evidence with the profiles of people who may have touched the samples. A match points to contamination rather than an unknown offender. Profiles of consumable manufacturers' staff are sometimes included too."
  },
  {
    id: 47,
    question: "The 'Phantom of Heilbronn', a female DNA profile found at about 40 crime scenes in Germany, Austria and France, turned out to be",
    options: ["a female serial offender who was later convicted", "DNA from a factory worker that had contaminated the cotton swabs during manufacture", "a profile caused by a fault in the laboratory's capillary electrophoresis instrument", "DNA from a police officer who attended all the scenes"],
    answer: 1,
    explanation: "Investigators found that the 'phantom' profile came from a woman who worked where the swabs were packed, and that it had contaminated swabs used by several laboratories. Ordinary sterilisation kills microbes but does not destroy DNA. The case led to DNA-free consumables and ISO 18385."
  },
  {
    id: 48,
    question: "ISO 18385 is concerned with",
    options: ["accreditation of crime-scene investigation units", "the minimum number of STR loci for a national DNA database", "the shelf life of FTA cards", "minimising the risk of human DNA contamination in products used to collect, store and analyse biological material for forensic purposes"],
    answer: 3,
    explanation: "ISO 18385 (2016) sets requirements for manufacturers of swabs, tubes and other consumables to reduce human DNA contamination, leading to 'forensic DNA grade' products. It was a direct response to cases such as the Phantom of Heilbronn. Crime-scene unit accreditation falls under ISO/IEC 17020."
  },
  {
    id: 49,
    question: "Household bleach contains about 5% sodium hypochlorite. Diluting it to 10% (1 part bleach to 9 parts water) to clean laboratory benches gives a sodium hypochlorite concentration of about",
    options: ["5%", "0.05%", "0.5%", "50%"],
    answer: 2,
    explanation: "A 1-in-10 dilution of 5% sodium hypochlorite gives 0.5%. Freshly made dilute bleach oxidises and fragments DNA and is the standard surface decontaminant in DNA laboratories, often followed by wiping with water or ethanol to remove residue. Bleach loses strength on standing, so working solutions are made fresh."
  },
  {
    id: 50,
    question: "A cigarette butt found at a burglary scene is to be sent for DNA analysis. What is the correct handling?",
    options: ["Pick it up by hand and drop it into the same envelope as other butts from the scene", "Pick it up with clean forceps, air-dry it if damp and pack it alone in a paper envelope", "Soak it in 70% ethanol to preserve the saliva", "Wrap it in cling film to keep the moisture in"],
    answer: 1,
    explanation: "Butts carry saliva and epithelial cells from the smoker's lips. They are picked up with clean forceps or gloved hands, packed separately so that each can be linked to a single smoker, and kept dry in paper. Ethanol and cling film either damage the sample or trap moisture."
  }
];

export default questions;

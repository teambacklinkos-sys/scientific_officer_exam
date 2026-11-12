const questions = [
  {
    id: 1,
    question: "The key difference between a presumptive and a confirmatory test for a body fluid is that a presumptive test:",
    options: ["Shows that the fluid may be present but can react with other substances too", "Proves the identity of the fluid beyond doubt", "Determines the species of origin", "Is always performed after DNA typing"],
    answer: 0,
    explanation: "Presumptive tests are quick, sensitive screening tests that indicate a fluid may be present, but they can give false positives. A confirmatory test identifies the fluid specifically, for example crystal tests or spectroscopy for blood, or finding spermatozoa or PSA for semen. A negative presumptive test is useful for ruling a fluid out."
  },
  {
    id: 2,
    question: "Which is the correct order of examination of a suspected bloodstain in the laboratory?",
    options: ["DNA analysis → species test → presumptive test → confirmatory test", "Confirmatory test → presumptive test → visual search → DNA analysis", "Visual or ALS search → presumptive test → confirmatory test → species test → DNA analysis", "Species test → visual search → DNA analysis → presumptive test"],
    answer: 2,
    explanation: "Stains are first located visually or with an alternate light source, then screened with a presumptive test on a small portion. Positive stains are confirmed as blood, tested for human origin and then sent for DNA profiling. This order conserves the sample and saves DNA work for stains that matter."
  },
  {
    id: 3,
    question: "Most presumptive tests for blood, such as Kastle–Meyer, leucomalachite green, TMB and luminol, depend on:",
    options: ["The reaction of haem iron with cyanide", "The peroxidase-like activity of haem, which catalyses oxidation of a reagent by an oxidant such as hydrogen peroxide", "Specific binding of an anti-haemoglobin antibody", "Crystallisation of haemoglobin derivatives"],
    answer: 1,
    explanation: "Haem acts like a peroxidase: it catalyses the transfer of oxygen from hydrogen peroxide to a colourless reagent, which becomes coloured or luminescent. Because other peroxidases and oxidants can do the same, these tests are only presumptive. Antibody-based and crystal tests are confirmatory."
  },
  {
    id: 4,
    question: "The Kastle–Meyer reagent is prepared by reducing phenolphthalein to colourless phenolphthalin with:",
    options: ["Zinc dust in alkaline (potassium hydroxide) solution", "Hydrogen peroxide", "Glacial acetic acid", "Pyridine"],
    answer: 0,
    explanation: "Phenolphthalein is boiled with zinc dust in KOH, which reduces it to colourless phenolphthalin. In the test, haem catalyses its oxidation by H2O2 back to phenolphthalein, which is pink in the alkaline reagent. The reagent is stored with zinc to keep it reduced."
  },
  {
    id: 5,
    question: "In a Kastle–Meyer test on a stain, a pink colour appears after the phenolphthalin reagent is added but before any hydrogen peroxide is added. This suggests:",
    options: ["A strongly positive result for blood", "That the stain is of animal blood", "The presence of a chemical oxidant such as a copper or nickel salt, so the result is inconclusive", "That the reagent has been reduced too far"],
    answer: 2,
    explanation: "Blood needs hydrogen peroxide to produce the pink colour, so the reagent is added first and the peroxide second. A colour before the peroxide step means something in the stain oxidised the reagent by itself. The result is then treated as inconclusive, not positive."
  },
  {
    id: 6,
    question: "Which material can give a false-positive Kastle–Meyer reaction because of its own peroxidase activity?",
    options: ["Table salt", "Cane sugar", "Laundry starch", "Horseradish or potato"],
    answer: 3,
    explanation: "Plant peroxidases in horseradish, potato and some other vegetables catalyse the same oxidation as haem. Plant peroxidases are destroyed by heat, while haem activity is heat-stable, which can help separate them. Salt, sugar and starch have no peroxidase activity."
  },
  {
    id: 7,
    question: "In the leucomalachite green test, a positive reaction for blood gives:",
    options: ["A pink colour", "A green colour", "Brown crystals", "Blue chemiluminescence"],
    answer: 1,
    explanation: "Colourless leucomalachite green is oxidised to malachite green in the presence of haem and hydrogen peroxide, giving a green colour. Pink is the positive Kastle–Meyer result and blue light is the luminol reaction. LMG is also used to enhance bloody impressions."
  },
  {
    id: 8,
    question: "The benzidine test for blood, introduced by Adler in 1904, was abandoned in most laboratories because benzidine is:",
    options: ["Insensitive", "Expensive", "A carcinogen", "Specific only for animal blood"],
    answer: 2,
    explanation: "Benzidine was a very sensitive presumptive reagent, but it is a known carcinogen and was withdrawn from routine use. Tetramethylbenzidine (TMB) is a safer derivative that gives a blue-green colour. It is used in Hemastix and other test strips."
  },
  {
    id: 9,
    question: "Hemastix test strips, widely used for screening suspected bloodstains, contain:",
    options: ["Phenolphthalin", "Luminol", "Leucomalachite green", "Tetramethylbenzidine"],
    answer: 3,
    explanation: "Hemastix strips carry tetramethylbenzidine and an organic peroxide. Haem catalyses oxidation of TMB, turning the pad green to blue-green. They were designed for urine testing but are convenient for stains."
  },
  {
    id: 10,
    question: "Luminol is especially useful at crime scenes because it:",
    options: ["Produces a blue chemiluminescence in the dark with very dilute or cleaned-up bloodstains", "Leaves a permanent pink stain", "Confirms that the blood is human", "Works best in bright sunlight"],
    answer: 0,
    explanation: "Luminol, in an alkaline oxidising solution, is oxidised in a haem-catalysed reaction that emits blue light at about 425 nm. It can reveal very dilute, old or washed bloodstains over large areas, but it must be viewed in darkness. It is presumptive and says nothing about species."
  },
  {
    id: 11,
    question: "At a scene that was cleaned with household bleach, luminol gives a bright but short-lived glow over a wide area. The most likely cause is:",
    options: ["Very fresh blood", "Sodium hypochlorite oxidising luminol directly, giving a false positive", "Animal blood", "Faecal contamination"],
    answer: 1,
    explanation: "Hypochlorite in bleach oxidises luminol without any catalyst and gives an intense, quickly fading glow. Blood gives a steadier glow that lasts longer. Bleach fades within a few days of drying, so investigators may wait or use other tests."
  },
  {
    id: 12,
    question: "Chemically, luminol is:",
    options: ["Tetramethylbenzidine", "Phenolphthalin", "3-Aminophthalhydrazide", "Pyridine haemochromogen"],
    answer: 2,
    explanation: "Luminol is 3-aminophthalhydrazide. On oxidation it forms an excited 3-aminophthalate, which emits light as it returns to the ground state. Pyridine haemochromogen is the product of the Takayama test."
  },
  {
    id: 13,
    question: "Regarding the use of luminol on a stain that will later be sent for DNA analysis, the accepted view is that:",
    options: ["Luminol destroys all DNA in the stain", "Luminol must never be used before DNA work", "Luminol turns blood into a substance that cannot be extracted", "Luminol does not usually prevent later DNA profiling, though spraying dilutes the stain and can affect later serological tests"],
    answer: 3,
    explanation: "Studies show STR profiles can generally still be obtained after luminol. Spraying does dilute the stain and can spread it, and it may weaken later confirmatory tests. So luminol is used sparingly, after photography and after visible stains have been sampled."
  },
  {
    id: 14,
    question: "The Takayama (haemochromogen) crystal test uses which reagent mixture?",
    options: ["Pyridine, glucose and sodium hydroxide", "Glacial acetic acid and sodium chloride", "Iodine and potassium iodide", "Saturated picric acid"],
    answer: 0,
    explanation: "Takayama reagent contains pyridine, glucose (a reducing sugar) and sodium hydroxide. Haem is reduced and combines with pyridine to form pyridine ferroprotoporphyrin (haemochromogen) crystals. Acetic acid with sodium chloride is the Teichmann reagent."
  },
  {
    id: 15,
    question: "Crystals formed in a positive Takayama test are:",
    options: ["Brown rhombic haemin crystals", "Pink, feathery or needle-like crystals of pyridine haemochromogen", "Yellow needles of spermine picrate", "Dark-brown crystals of choline periodide"],
    answer: 1,
    explanation: "Takayama crystals are salmon-pink, feathery or needle-shaped crystals of pyridine haemochromogen. Brown rhombic crystals are haemin from the Teichmann test. Spermine picrate and choline periodide are the semen crystals of the Barberio and Florence tests."
  },
  {
    id: 16,
    question: "In the Teichmann test, heating a bloodstain with glacial acetic acid and a halide salt produces:",
    options: ["Pink feathery haemochromogen crystals", "A blue colour", "Brown rhombic crystals of haemin (haematin chloride)", "A green fluorescence"],
    answer: 2,
    explanation: "Glacial acetic acid releases haem from globin and, with chloride ions on heating, haematin chloride (haemin) forms brown, rhombic crystals. Bromide or iodide can be used in place of chloride. Overheating or old, heat-damaged stains can make the test fail."
  },
  {
    id: 17,
    question: "Oxyhaemoglobin examined with a microspectroscope shows two absorption bands in the green-yellow region at about:",
    options: ["415 nm and 630 nm", "280 nm and 350 nm", "700 nm and 750 nm", "577 nm and 541 nm"],
    answer: 3,
    explanation: "Oxyhaemoglobin has α and β bands at about 577 and 541 nm. Reduced haemoglobin shows a single broad band near 555 nm. A stronger Soret band lies near 415 nm, but it is in the violet and is seen with a spectrophotometer rather than a hand spectroscope."
  },
  {
    id: 18,
    question: "The very intense absorption band of haemoglobin near 415 nm, used in spectrophotometric identification of blood, is called the:",
    options: ["Soret band", "Amide I band", "Raman band", "Fraunhofer line"],
    answer: 0,
    explanation: "The Soret (γ) band near 400–420 nm is the strongest absorption of haem compounds and allows detection of very small amounts of blood. Its exact position shifts with the haem derivative. The amide I band is an infrared protein absorption, not a haem band."
  },
  {
    id: 19,
    question: "On spectroscopy, blood from a victim of carbon monoxide poisoning differs from normal blood in that:",
    options: ["It shows no absorption bands at all", "Its two bands do not merge into a single band when a reducing agent such as sodium dithionite is added", "It shows a single band at 630 nm", "Its bands move into the infrared"],
    answer: 1,
    explanation: "Carboxyhaemoglobin has two bands slightly shifted from those of oxyhaemoglobin. A reducing agent turns oxyhaemoglobin into reduced haemoglobin with a single band, but carboxyhaemoglobin keeps its two bands. A band near 630 nm points to methaemoglobin."
  },
  {
    id: 20,
    question: "The ABAcard HemaTrace test is an immunochromatographic card test that detects:",
    options: ["Peroxidase activity", "Glycophorin A", "Human haemoglobin", "Human serum albumin"],
    answer: 2,
    explanation: "HemaTrace uses monoclonal and polyclonal anti-human haemoglobin antibodies in a lateral flow sandwich format. It confirms that a stain is human (or higher primate) blood in one step. RSID-Blood is a different kit that targets glycophorin A."
  },
  {
    id: 21,
    question: "Besides the blood of higher primates, the ABAcard HemaTrace test is known to cross-react with the blood of:",
    options: ["Cattle", "Dogs", "Chickens", "Ferrets"],
    answer: 3,
    explanation: "Validation studies found that HemaTrace reacts with blood of higher primates and also of ferrets and some other mustelids. Common domestic animals such as cattle, dogs and poultry do not react. This is why results are reported with that limitation."
  },
  {
    id: 22,
    question: "The common spot test for seminal acid phosphatase uses sodium α-naphthyl phosphate with Fast Blue B salt. A positive result is:",
    options: ["A pink colour after adding hydrogen peroxide", "A purple colour within about 30 seconds", "Brown crystals", "A green fluorescence"],
    answer: 1,
    explanation: "Acid phosphatase splits α-naphthyl phosphate to free α-naphthol, which couples with Fast Blue B to form a purple azo dye. Semen gives a strong purple within seconds because it has far more acid phosphatase than other fluids. Slow or weak colour is treated with caution."
  },
  {
    id: 23,
    question: "The acid phosphatase test is only presumptive for semen because:",
    options: ["It fails with semen from vasectomised men", "Acid phosphatase is destroyed by drying", "It reacts only with spermatozoa", "Acid phosphatase is also present, at lower levels, in vaginal fluid and some other body fluids"],
    answer: 3,
    explanation: "Seminal acid phosphatase comes from the prostate and is present at very high levels, but vaginal fluid and some other fluids and plant materials have lower levels. A rapid, strong reaction is strongly indicative, but confirmation needs spermatozoa or PSA. The enzyme is independent of sperm, so it is present in vasectomised men."
  },
  {
    id: 24,
    question: "Prostatic acid phosphatase can be distinguished from many other acid phosphatases because it is:",
    options: ["Inhibited by L-tartrate", "Activated by EDTA", "Stable on boiling at 100 °C", "Insoluble in water"],
    answer: 0,
    explanation: "Prostatic acid phosphatase is strongly inhibited by L(+)-tartrate, unlike the acid phosphatases of red cells and many other sources. Tartrate inhibition was used to increase the specificity of semen detection. The enzyme is water-soluble and is denatured by boiling."
  },
  {
    id: 25,
    question: "The Florence test for semen uses iodine in potassium iodide and gives:",
    options: ["Yellow needle-shaped crystals of spermine picrate", "Dark-brown rhombic crystals of choline periodide", "Pink feathery crystals", "A purple colour"],
    answer: 1,
    explanation: "Choline in semen reacts with iodine to form dark brown, rhombic or needle-like crystals of choline periodide. Spermine picrate crystals are formed in the Barberio test with picric acid. Both are classical crystal tests for seminal stains."
  },
  {
    id: 26,
    question: "The Barberio test for semen uses picric acid and gives:",
    options: ["Dark-brown crystals of choline periodide", "Red-stained sperm heads", "Yellow needle-shaped crystals of spermine picrate", "A blue colour"],
    answer: 2,
    explanation: "Spermine in seminal fluid reacts with saturated picric acid to form yellow, needle-shaped crystals of spermine picrate. Spermine is produced in the prostate and is present in large amounts in semen. Like the Florence test, it is presumptive."
  },
  {
    id: 27,
    question: "A positive Florence test alone does not prove the presence of semen because:",
    options: ["Choline is also present in many other tissues and body fluids", "Semen contains no choline", "The test needs live spermatozoa", "It is a confirmatory test for saliva"],
    answer: 0,
    explanation: "Choline is a common compound in cell membranes and many secretions, so other material can give choline periodide crystals. A negative result also does not exclude old semen. The test is therefore used only as a presumptive screen."
  },
  {
    id: 28,
    question: "Prostate-specific antigen (p30), used to confirm semen, is a glycoprotein of molecular weight about:",
    options: ["3 kDa", "150 kDa", "300 kDa", "30 kDa"],
    answer: 3,
    explanation: "PSA is a serine protease of about 30 kDa, which is why it was named p30 by Sensabaugh. It is made by the prostate and present in seminal plasma at high levels, independent of sperm. Immunological detection of PSA confirms semen in azoospermic samples."
  },
  {
    id: 29,
    question: "A vaginal swab from a sexual assault victim gives a strong acid phosphatase reaction, but no spermatozoa are seen after careful search. The accused had a vasectomy. Which test best confirms the presence of semen?",
    options: ["Christmas tree staining", "Detection of prostate-specific antigen (p30)", "Barberio test", "Starch–iodine test"],
    answer: 1,
    explanation: "After vasectomy the ejaculate has no sperm, but prostatic secretions such as PSA and acid phosphatase are still present. Immunological detection of PSA confirms semen. Christmas tree staining is useful only when sperm are present, and the starch–iodine test is for saliva."
  },
  {
    id: 30,
    question: "In the Christmas tree stain (Kernechtrot and picroindigocarmine), spermatozoa appear with:",
    options: ["Red heads and green tails", "Green heads and red tails", "Blue heads and yellow tails", "Brown heads and colourless tails"],
    answer: 0,
    explanation: "Nuclear fast red (Kernechtrot) stains the DNA-rich sperm heads red, with a paler pink acrosome. Picroindigocarmine stains the neck and tail green to blue-green. The contrast makes sperm easy to see among epithelial cells, whose nuclei also stain red."
  },
  {
    id: 31,
    question: "A normal human spermatozoon has a total length of about:",
    options: ["5 µm", "55 µm", "250 µm", "1 mm"],
    answer: 1,
    explanation: "The human sperm is about 50–60 µm long, most of which is the tail. The head is flattened and oval, about 4–5 µm long and 2.5–3.5 µm wide. Heads may be the only part left in older samples because tails detach."
  },
  {
    id: 32,
    question: "Finding motile spermatozoa in a vaginal swab usually indicates that intercourse took place:",
    options: ["Within the previous week", "Two to three days earlier", "Within the previous several hours", "More than a month earlier"],
    answer: 2,
    explanation: "Sperm generally stay motile in the vagina for only a few hours. Non-motile sperm can be found for about three days, and occasionally longer in the cervix. So motility points to recent intercourse."
  },
  {
    id: 33,
    question: "Semen that contains no spermatozoa is described as:",
    options: ["Aspermia", "Oligospermia", "Azoospermia", "Asthenozoospermia"],
    answer: 2,
    explanation: "Azoospermia means there are no sperm in the ejaculate, as after vasectomy or in some infertility. Aspermia is the absence of ejaculate, oligospermia a low sperm count and asthenozoospermia poor motility. Azoospermic semen must be confirmed by PSA or other seminal markers."
  },
  {
    id: 34,
    question: "An ejaculate of 2.5 mL contains 40 million spermatozoa per mL. The total sperm count is:",
    options: ["16 million", "42.5 million", "100 million", "160 million"],
    answer: 2,
    explanation: "Total count = volume × concentration = 2.5 mL × 40 million/mL = 100 million. Dividing instead of multiplying gives the wrong value of 16 million. Sperm concentration and total count are both reported in semen analysis."
  },
  {
    id: 35,
    question: "Saliva stains are usually located and presumptively identified by testing for:",
    options: ["Acid phosphatase", "Lactate dehydrogenase", "Urease", "α-Amylase"],
    answer: 3,
    explanation: "Saliva has high levels of α-amylase, the enzyme that digests starch. Amylase tests such as starch–iodine and Phadebas are the standard presumptive tests for saliva. Acid phosphatase is the presumptive marker for semen."
  },
  {
    id: 36,
    question: "In the starch–iodine radial diffusion test for saliva, a positive stain extract is shown by:",
    options: ["A purple colour", "Yellow crystals", "A pink colour after adding phenolphthalein", "A clear zone where the blue-black starch–iodine colour is lost because amylase has digested the starch"],
    answer: 3,
    explanation: "The extract is placed in a well in starch gel and allowed to diffuse. Iodine stains intact starch blue-black, so a clear, unstained ring shows where amylase has broken the starch down. The size of the ring reflects the amylase activity."
  },
  {
    id: 37,
    question: "The Phadebas test for amylase uses:",
    options: ["Insoluble starch cross-linked to a blue dye, which releases soluble blue fragments when digested", "Iodine and potassium iodide", "Fast Blue B salt and naphthyl phosphate", "Phenolphthalin and hydrogen peroxide"],
    answer: 0,
    explanation: "Phadebas reagent contains starch microspheres bound to a blue dye. Amylase cuts the starch and releases soluble blue fragments, which can be measured at about 620 nm. The Phadebas press test, using impregnated paper pressed on fabric, maps saliva stains on large items."
  },
  {
    id: 38,
    question: "In a quantitative Phadebas assay, the absorbance of the released dye is linear with amylase activity. A 1.0-unit standard gives an absorbance of 0.30 and a stain extract gives 0.75. The amylase activity of the extract is:",
    options: ["0.4 units", "1.05 units", "2.5 units", "3.0 units"],
    answer: 2,
    explanation: "With a linear response, activity = 1.0 × (0.75/0.30) = 2.5 units. This is the Beer–Lambert relation: absorbance is proportional to the amount of coloured product. Subtracting or adding the absorbances gives meaningless answers."
  },
  {
    id: 39,
    question: "Amylase testing is only presumptive for saliva because:",
    options: ["Salivary amylase is destroyed by drying within hours", "Amylase is also present in pancreatic secretions and, at lower levels, in breast milk, faeces and vaginal fluid", "Only non-secretors have salivary amylase", "Amylase is found only in semen"],
    answer: 1,
    explanation: "Amylase occurs in several body fluids, and pancreatic amylase reaches faeces. A high level is suggestive of saliva but does not prove it. Immunological kits for salivary amylase and newer markers such as statherin give more specific identification."
  },
  {
    id: 40,
    question: "p-Dimethylaminocinnamaldehyde (DMAC) is used as a presumptive test for urine stains because it reacts with urea to give:",
    options: ["A blue colour", "Yellow crystals", "A pink to red colour", "A green fluorescence"],
    answer: 2,
    explanation: "DMAC condenses with urea under acidic conditions to give a pink to red (magenta) colour. Urine has much more urea than most other fluids, but sweat and some other fluids also contain urea, so the test is presumptive. Creatinine and Tamm–Horsfall protein tests add support."
  },
  {
    id: 41,
    question: "In the urease test for urine stains, the enzyme urease breaks down urea in the stain to release:",
    options: ["Creatinine", "Ammonia, which can be detected with an indicator or Nessler's reagent", "Uric acid crystals", "Hydrogen sulphide"],
    answer: 1,
    explanation: "Urease hydrolyses urea into ammonia and carbon dioxide. The ammonia raises the pH, which changes an indicator, or forms a yellow-brown colour with Nessler's reagent. Like DMAC, the test detects urea and is presumptive."
  },
  {
    id: 42,
    question: "The Jaffe test detects creatinine in suspected urine stains by its reaction with:",
    options: ["Iodine, giving brown crystals", "Fast Blue B, giving a purple colour", "Ferric chloride, giving a red colour", "Alkaline picrate, giving an orange-red colour"],
    answer: 3,
    explanation: "Creatinine reacts with picric acid in alkaline solution to form an orange-red Janovski complex. Urine has high creatinine, so a positive Jaffe test supports urine. Since creatinine is also present in sweat and blood, it is not fully specific."
  },
  {
    id: 43,
    question: "Which protein, made only in the kidney, is used as a confirmatory marker for urine stains?",
    options: ["Tamm–Horsfall protein (uromodulin)", "Semenogelin", "Statherin", "Glycophorin A"],
    answer: 0,
    explanation: "Tamm–Horsfall protein (uromodulin) is made by cells of the thick ascending limb of the loop of Henle and is the most abundant protein in normal urine. Immunoassays for it, such as RSID-Urine, are more specific than urea or creatinine tests. Semenogelin is a semen marker and statherin a saliva marker."
  },
  {
    id: 44,
    question: "Normal vaginal fluid of a woman of reproductive age is acidic, with a pH of about:",
    options: ["6.8–7.2", "3.8–4.5", "7.8–8.2", "9.0–9.5"],
    answer: 1,
    explanation: "Lactobacilli in the vagina ferment glycogen from epithelial cells into lactic acid, keeping the pH at about 3.8–4.5. This acidity protects against infection. Semen is alkaline (about pH 7.2–8), which buffers the vagina for a while after intercourse."
  },
  {
    id: 45,
    question: "Menstrual blood can be distinguished from circulating blood in a stain by:",
    options: ["A complete absence of haemoglobin", "High levels of fibrin degradation products such as D-dimer", "High levels of prostate-specific antigen", "A complete absence of red cells"],
    answer: 1,
    explanation: "Menstrual blood has undergone fibrinolysis in the uterus, so it contains high levels of fibrin degradation products such as D-dimer and does not clot normally. Endometrial cells may also be seen. It still contains haemoglobin and red cells, so ordinary blood tests are positive."
  },
  {
    id: 46,
    question: "Edelman's test, used to identify faecal stains, detects:",
    options: ["Bilirubin, by blue colour in daylight", "Creatinine, by orange colour in daylight", "Urea, by pink fluorescence under UV", "Urobilin, by green fluorescence under UV"],
    answer: 3,
    explanation: "Gut bacteria convert bilirubin into urobilinogen, which is oxidised to urobilin. In Edelman's test, mercuric chloride oxidises the urobilinogen and zinc acetate then forms a zinc–urobilin complex that fluoresces green under UV light. The test is only presumptive: animal faeces and urine rich in urobilin can also react. Microscopy for undigested food residue supports the result."
  },
  {
    id: 47,
    question: "A brownish stain on underwear is suspected to be faecal. Which microscopic finding best supports this?",
    options: ["Spermatozoa", "Glycogen-rich squamous epithelial cells", "Undigested plant cells, vegetable fibres and muscle fibres", "Ciliated columnar cells"],
    answer: 2,
    explanation: "Faecal matter contains food residue that resists digestion, such as plant cell walls, vegetable fibres, starch grains and striated muscle fibres. Their presence under the microscope strongly supports faeces. Glycogen-rich squamous cells suggest vaginal origin, and sperm indicate semen."
  },
  {
    id: 48,
    question: "Semen stains on fabric are best searched for with an alternate light source at about 450 nm while the examiner wears:",
    options: ["Clear goggles", "Orange goggles", "Blue goggles", "Green goggles"],
    answer: 1,
    explanation: "Semen contains fluorescent compounds such as flavins and choline-conjugated proteins, which glow when excited by blue light at about 450 nm. Orange goggles or filters block the blue excitation light so that only the fluorescence is seen. Fluorescence is not specific, as saliva, urine and some detergents also fluoresce."
  },
  {
    id: 49,
    question: "Under an alternate light source in the violet-blue range, bloodstains on a light-coloured fabric usually appear:",
    options: ["Dark, because haemoglobin absorbs the light", "Bright yellow-green, because blood fluoresces strongly", "Bright red, because haemoglobin fluoresces", "Completely invisible"],
    answer: 0,
    explanation: "Blood does not fluoresce. Haemoglobin strongly absorbs violet-blue light, so stains look dark against a fluorescing background. This contrast helps locate blood on suitable fabrics."
  },
  {
    id: 50,
    question: "Saliva on a large bedsheet must be located before cutting samples for DNA. Which test is designed for mapping saliva stains over a large area?",
    options: ["Phadebas press test", "Barberio test", "Teichmann test", "Jaffe test"],
    answer: 0,
    explanation: "In the Phadebas press test, moistened paper impregnated with the blue starch reagent is pressed on the item. Blue spots develop where amylase is present, marking saliva stains for sampling. Barberio is for semen, Teichmann for blood and Jaffe for creatinine."
  }
];

export default questions;

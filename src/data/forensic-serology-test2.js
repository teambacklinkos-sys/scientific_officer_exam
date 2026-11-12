const questions = [
  {
    id: 1,
    question: "The enzyme-linked immunosorbent assay (ELISA) was first described in 1971 by:",
    options: ["Yalow and Berson", "Köhler and Milstein", "Engvall and Perlmann", "Towbin and Gordon"],
    answer: 2,
    explanation: "Eva Engvall and Peter Perlmann in Sweden, and independently van Weemen and Schuurs in the Netherlands, described enzyme immunoassays in 1971. Yalow and Berson developed radioimmunoassay, Köhler and Milstein produced monoclonal antibodies, and Towbin's group described the Western (immuno) blot."
  },
  {
    id: 2,
    question: "In a direct ELISA, the antigen adsorbed to the plate is detected by:",
    options: ["An enzyme-labelled primary antibody that binds the antigen directly", "An unlabelled primary antibody followed by an enzyme-labelled anti-species antibody", "A capture antibody and a labelled detection antibody", "Competition between labelled and unlabelled antigen"],
    answer: 0,
    explanation: "In direct ELISA the only antibody used is the primary antibody, and it carries the enzyme label itself. It is quick, with few steps, but each target needs its own labelled antibody and there is no signal amplification. The second option describes indirect ELISA and the third describes sandwich ELISA."
  },
  {
    id: 3,
    question: "Testing a person's serum for anti-HIV antibodies on wells coated with HIV antigen, followed by enzyme-labelled anti-human IgG, is an example of:",
    options: ["Direct ELISA", "Sandwich ELISA", "Competitive ELISA", "Indirect ELISA"],
    answer: 3,
    explanation: "Indirect ELISA detects antibody in a sample. The coated antigen captures the specific antibody from the serum, which is then detected by a labelled anti-human immunoglobulin. This format is widely used for screening infections such as HIV and hepatitis."
  },
  {
    id: 4,
    question: "A sandwich ELISA can be used only when the target antigen:",
    options: ["Is a small hapten", "Has at least two distinct epitopes that the capture and detection antibodies can bind at the same time", "Is radiolabelled", "Is an antibody itself"],
    answer: 1,
    explanation: "In a sandwich ELISA, a capture antibody on the plate binds one epitope and a labelled detection antibody binds another, so the antigen sits between them. Large proteins such as PSA or haemoglobin suit this format. Haptens are too small to bind two antibodies at once."
  },
  {
    id: 5,
    question: "In a competitive ELISA, the colour that develops in a well is:",
    options: ["Directly proportional to the analyte concentration", "Inversely related to the analyte concentration", "Independent of the analyte concentration", "Proportional to the square of the analyte concentration"],
    answer: 1,
    explanation: "In a competitive ELISA, analyte in the sample competes with a fixed amount of labelled (or plate-bound) antigen for a limited number of antibody sites. The more analyte present, the less label is bound and the weaker the colour. High signal therefore means low analyte."
  },
  {
    id: 6,
    question: "Competitive immunoassay is the format of choice for small molecules such as drugs of abuse because such molecules:",
    options: ["Carry many repeated epitopes", "Are always enzymes", "Are too small to be bound by two antibodies at the same time, so a sandwich cannot form", "Cannot be detected by antibodies at all"],
    answer: 2,
    explanation: "Small molecules (haptens) such as morphine or THC offer only one epitope, so a sandwich cannot be built. In a competitive format the drug in the sample competes with a labelled drug conjugate for antibody. Most urine drug-screening immunoassays work this way."
  },
  {
    id: 7,
    question: "When the horseradish peroxidase–TMB reaction in an ELISA is stopped with sulphuric acid, the blue product turns yellow and is read at:",
    options: ["405 nm", "450 nm", "540 nm", "620 nm"],
    answer: 1,
    explanation: "HRP oxidises TMB to a blue product, which turns yellow when acidified and is read at 450 nm. The p-nitrophenol produced by alkaline phosphatase from pNPP is read at 405 nm. Unstopped blue TMB can be read at about 620–650 nm."
  },
  {
    id: 8,
    question: "In ELISAs that use alkaline phosphatase as the enzyme label, the usual chromogenic substrate is:",
    options: ["Tetramethylbenzidine", "o-Phenylenediamine", "Luminol", "p-Nitrophenyl phosphate"],
    answer: 3,
    explanation: "Alkaline phosphatase removes the phosphate from p-nitrophenyl phosphate (pNPP) to give yellow p-nitrophenol, read at 405 nm. TMB and o-phenylenediamine are chromogenic substrates of horseradish peroxidase, and luminol is used for HRP-based chemiluminescence."
  },
  {
    id: 9,
    question: "After ELISA wells are coated with antigen, a solution of bovine serum albumin or skimmed milk is added in order to:",
    options: ["Block unoccupied binding sites on the plastic and prevent non-specific binding", "Stop the enzyme reaction", "Elute the bound antigen", "Develop the colour"],
    answer: 0,
    explanation: "Polystyrene binds proteins non-specifically. Blocking with an irrelevant protein fills the remaining sites so that antibodies added later stick only through specific binding. Without blocking, background absorbance and false positives rise."
  },
  {
    id: 10,
    question: "In an ELISA, the negative controls give a mean absorbance of 0.10 with a standard deviation of 0.02. With a cut-off of mean + 3 SD, a sample with an absorbance of 0.15 is reported as:",
    options: ["Positive, because it is above the negative control mean", "Negative, because it is below the cut-off", "Positive, because it is above the cut-off", "Invalid, because the controls have failed"],
    answer: 1,
    explanation: "The cut-off is 0.10 + 3 × 0.02 = 0.16. A sample at 0.15 is below the cut-off and is reported as negative. Being above the negative mean alone is not enough, since normal variation in negative samples is allowed for by the 3 SD margin."
  },
  {
    id: 11,
    question: "In a competitive ELISA for morphine, the drug-free control gives an absorbance of 1.0, sample X gives 0.9 and sample Y gives 0.3. Which conclusion is correct?",
    options: ["X contains more morphine than Y", "Both contain the same amount of morphine", "Y contains more morphine than X", "Neither sample can contain morphine"],
    answer: 2,
    explanation: "In a competitive assay, drug in the sample displaces the labelled conjugate, so signal falls as drug concentration rises. Y has lost far more signal than X compared with the drug-free control, so Y has more morphine. X is close to the blank and has little or none."
  },
  {
    id: 12,
    question: "A practical advantage of indirect ELISA over direct ELISA is that:",
    options: ["It needs no washing steps", "It is always completely free of cross-reactivity", "It works best for haptens", "One labelled anti-species antibody can be used with many different primary antibodies, and it amplifies the signal"],
    answer: 3,
    explanation: "Several labelled secondary antibodies can bind each primary antibody, which amplifies the signal. A single labelled anti-rabbit or anti-human IgG can serve for many assays, so each primary antibody need not be labelled. The cost is an extra incubation and a risk of secondary-antibody cross-reactivity."
  },
  {
    id: 13,
    question: "In Ouchterlony double immunodiffusion:",
    options: ["Antigen and antibody both diffuse towards each other through the gel from separate wells", "Antibody is mixed into the gel and only the antigen diffuses", "An electric field drives the antigen into antibody-containing gel", "The antigen is first separated by electrophoresis"],
    answer: 0,
    explanation: "In Ouchterlony's method, antigen and antiserum are placed in separate wells cut in agar. Both diffuse outward and form a visible precipitin line where they meet in equivalent proportions. The pattern between adjacent wells shows whether the antigens are related."
  },
  {
    id: 14,
    question: "On an Ouchterlony plate, the precipitin lines from two adjacent antigen wells join, but one line runs past the junction as a spur. This indicates a reaction of:",
    options: ["Identity", "Partial identity", "Non-identity", "Antigen excess"],
    answer: 1,
    explanation: "A spur shows that the two antigens share some epitopes, but one has extra epitopes that the antiserum also recognises. Smooth fusion of the arcs means identity, and lines crossing each other mean non-identity. The spur points towards the antigen with fewer epitopes."
  },
  {
    id: 15,
    question: "In double immunodiffusion, two precipitin lines that cross each other completely without fusing indicate:",
    options: ["Identity", "Partial identity", "Non-identity", "Prozone"],
    answer: 2,
    explanation: "Crossing lines mean the two antigens share no epitopes. Each forms its own line with its own antibody, and the lines pass through each other. This is the reaction of non-identity."
  },
  {
    id: 16,
    question: "Extract from a bloodstain and known human serum are placed in adjacent wells around a central well of anti-human serum. Their precipitin lines fuse smoothly into a continuous arc. The correct conclusion is:",
    options: ["The stain shows partial identity with human serum", "The stain is from a non-primate animal", "The stain contains no protein", "The stain is of human origin (reaction of identity)"],
    answer: 3,
    explanation: "Smooth fusion of the lines from the stain and the human reference shows they carry the same antigens recognised by the anti-human serum. This reaction of identity indicates human origin, subject to known cross-reactions with closely related primates. A spur would indicate only partial identity."
  },
  {
    id: 17,
    question: "In single radial immunodiffusion (the Mancini method):",
    options: ["Antigen is mixed into the gel and antibody diffuses from a well", "Both antigen and antibody diffuse from separate wells", "Electrophoresis drives the antigen into the gel", "Antibody is mixed into the gel and antigen diffuses from a well to form a precipitin ring"],
    answer: 3,
    explanation: "In radial immunodiffusion, a uniform concentration of antiserum is set in the agarose. Antigen placed in a well diffuses outward and forms a ring of precipitate. At end point, the ring area (diameter squared) is proportional to antigen concentration, which allows quantification of proteins such as immunoglobulins."
  },
  {
    id: 18,
    question: "In an end-point Mancini radial immunodiffusion assay, assume the square of the ring diameter is directly proportional to antigen concentration. A 200 mg/dL standard gives an 8 mm ring and a test sample gives a 4 mm ring. The sample concentration is:",
    options: ["100 mg/dL", "50 mg/dL", "25 mg/dL", "400 mg/dL"],
    answer: 1,
    explanation: "The ratio of diameters squared is 4² / 8² = 16/64 = 1/4. So the sample concentration is 200 × 1/4 = 50 mg/dL. Using diameter instead of diameter squared would give 100 mg/dL, which is the common mistake."
  },
  {
    id: 19,
    question: "Single diffusion of antigen into an antibody-containing gel in a narrow tube, forming precipitin bands that move down the tube, is the method of:",
    options: ["Mancini", "Ouchterlony", "Oudin", "Laurell"],
    answer: 2,
    explanation: "Jacques Oudin's single linear diffusion is done in tubes: antigen solution is layered over antibody-containing gel and precipitin bands form and move into the gel. Mancini is single radial diffusion in plates, Ouchterlony is double diffusion and Laurell is rocket electrophoresis."
  },
  {
    id: 20,
    question: "Classical immunoelectrophoresis, introduced by Grabar and Williams in 1953, involves:",
    options: ["Electrophoresis of antigen into antibody-containing gel to form rocket-shaped peaks", "Driving antigen and antibody towards each other with an electric current", "Transfer of separated proteins to a membrane", "Electrophoretic separation of an antigen mixture in gel, followed by diffusion against antiserum placed in a trough parallel to the line of separation"],
    answer: 3,
    explanation: "Immunoelectrophoresis first separates proteins in agar by charge. Antiserum is then added to a trough cut alongside, and each protein forms its own precipitin arc where it meets the antibody. It combines the resolution of electrophoresis with the specificity of immunodiffusion."
  },
  {
    id: 21,
    question: "In counter-current immunoelectrophoresis at pH 8.6, antibodies (IgG) move towards the cathode mainly because of:",
    options: ["Their strong positive charge at this pH", "Electroendosmosis", "Diffusion alone", "Their binding to agar"],
    answer: 1,
    explanation: "At pH 8.6 most serum proteins are negatively charged and move to the anode. IgG has a pI close to neutral and carries little net charge, so the cathode-directed flow of buffer (electroendosmosis) carries it towards the cathode. Antigen and antibody therefore meet between the wells."
  },
  {
    id: 22,
    question: "Electroendosmosis in agar gels is caused by:",
    options: ["Fixed negatively charged groups (such as sulphate) in the agar, which make the buffer flow towards the cathode", "Heat produced by the current", "Positively charged agar fibres", "Evaporation from the gel surface"],
    answer: 0,
    explanation: "Agar carries fixed negative sulphate and carboxyl groups that cannot move. The positive counter-ions in the buffer migrate to the cathode and drag water with them. This bulk flow carries weakly charged molecules such as IgG towards the cathode."
  },
  {
    id: 23,
    question: "In counter-current immunoelectrophoresis for species identification of a bloodstain, the stain extract (antigen) is placed in:",
    options: ["The well on the anode side, with the antiserum on the cathode side", "The same well as the antiserum", "The well on the cathode side, with the antiserum in the well on the anode side", "A trough running parallel to the current"],
    answer: 2,
    explanation: "The negatively charged serum proteins of the stain move towards the anode, while the antibodies are carried towards the cathode by electroendosmosis. Placing the antigen at the cathode end and the antibody at the anode end makes them move towards each other. A precipitin line then forms between the wells, usually within an hour."
  },
  {
    id: 24,
    question: "Compared with Ouchterlony double diffusion, counter-current immunoelectrophoresis is preferred in species testing of bloodstains mainly because it is:",
    options: ["Faster and more sensitive", "Quantitative", "Free of the need for antiserum", "Able to determine the ABO group as well"],
    answer: 0,
    explanation: "The electric field drives antigen and antibody directly towards each other instead of letting them diffuse in all directions. Results come in about 30–60 minutes instead of a day or more, and less material is needed. It still needs a species-specific antiserum."
  },
  {
    id: 25,
    question: "In Laurell's rocket immunoelectrophoresis, the antigen concentration is estimated from:",
    options: ["The number of rockets", "The colour of the precipitate", "The diameter of the well", "The height of the rocket-shaped precipitate"],
    answer: 3,
    explanation: "Antigen is electrophoresed into a gel that contains antibody, and the precipitate forms a rocket shape. The rocket stops growing when the antigen is used up, so its height is proportional to the amount of antigen loaded. Standards run on the same gel give the calibration."
  },
  {
    id: 26,
    question: "In rocket immunoelectrophoresis, rocket height is proportional to antigen concentration. A 10 µg/mL standard gives a 15 mm rocket and a sample gives a 24 mm rocket. The sample concentration is about:",
    options: ["16 µg/mL", "6 µg/mL", "24 µg/mL", "36 µg/mL"],
    answer: 0,
    explanation: "With a linear relation, concentration = 10 × (24/15) = 16 µg/mL. Unlike radial immunodiffusion, rocket height relates linearly to concentration, so no squaring is needed. In practice a standard curve from several standards is used."
  },
  {
    id: 27,
    question: "The precipitin test for identifying the species origin of blood was introduced in 1901 by:",
    options: ["Leone Lattes", "Paul Uhlenhuth", "Karl Landsteiner", "Emil von Behring"],
    answer: 1,
    explanation: "Paul Uhlenhuth showed in 1901 that rabbit antisera raised against the serum of a species precipitate only that species' proteins. This allowed human blood to be told apart from animal blood and was soon used in criminal cases. Lattes is known for his crust test of bloodstain agglutinins."
  },
  {
    id: 28,
    question: "In the ring (interface) precipitin test:",
    options: ["Antigen and antiserum are mixed into agar on a slide", "Antiserum is placed in a trough cut beside the separated proteins", "The antiserum is placed in a narrow tube, the stain extract is layered gently over it, and a white ring at the interface shows a positive reaction", "The precipitate is measured by nephelometry"],
    answer: 2,
    explanation: "The denser antiserum is placed at the bottom of a capillary or small tube and the clear stain extract is layered on top. Where antigen and antibody meet at the interface, a white ring of precipitate forms within minutes if the species matches. It is simple but less sensitive than electrophoretic methods."
  },
  {
    id: 29,
    question: "Anti-human serum used for species identification of bloodstains is usually raised by:",
    options: ["Injecting human serum proteins into an animal such as a rabbit or goat and collecting its serum", "Injecting rabbit serum into human volunteers", "Extracting antibodies from human placenta", "Culturing human B cells with human serum"],
    answer: 0,
    explanation: "The animal's immune system recognises human proteins as foreign and makes antibodies against them. After booster doses, its serum is collected and checked for titre and specificity. Such polyclonal antisera are the basis of precipitin and CIEP species tests."
  },
  {
    id: 30,
    question: "A bloodstain gives a weak positive reaction with anti-human serum but is later shown to be from a chimpanzee. This is best explained by:",
    options: ["Contamination of the stain with saliva", "Antigen excess in the extract", "The use of a monoclonal antibody", "Cross-reactivity of anti-human serum with proteins of closely related primates"],
    answer: 3,
    explanation: "Serum proteins of the great apes are very similar to human proteins, so anti-human serum cross-reacts with them. Antisera are therefore checked against related species, and the result is reported as 'human or higher primate'. Cross-reaction with distantly related animals is minimal."
  },
  {
    id: 31,
    question: "An antiserum is serially diluted in doubling steps starting at 1:2. The last tube showing a precipitate is the seventh tube. The titre of the antiserum is:",
    options: ["1:14", "1:64", "1:128", "1:256"],
    answer: 2,
    explanation: "The dilutions run 1:2, 1:4, 1:8, 1:16, 1:32, 1:64 and 1:128, so the seventh tube is 1:128. The titre is the highest dilution that still gives a positive reaction. Multiplying 2 by 7 to get 1:14 is the usual mistake."
  },
  {
    id: 32,
    question: "In the quantitative precipitin curve of Heidelberger and Kendall, the maximum amount of precipitate forms in the:",
    options: ["Zone of antibody excess", "Zone of equivalence", "Zone of antigen excess", "Region where no antigen is added"],
    answer: 1,
    explanation: "At equivalence, antigen and antibody are in optimal proportions to form a large cross-linked lattice that precipitates. In antibody excess or antigen excess, smaller soluble complexes form and less precipitate is seen. Immunodiffusion lines form where diffusing reagents reach equivalence."
  },
  {
    id: 33,
    question: "A very concentrated bloodstain extract gives no precipitin line with anti-human serum, but a diluted extract of the same stain gives a clear line. The most likely reason is:",
    options: ["Soluble immune complexes formed because of antigen excess", "The stain is of animal origin", "The antiserum has expired", "Haemoglobin cannot bind antibodies"],
    answer: 0,
    explanation: "With too much antigen, each antibody binds separate antigen molecules and a cross-linked lattice cannot form, so the complexes stay soluble. Diluting the extract brings the reaction back to equivalence, and the precipitate appears. A positive result on dilution rules out a non-human origin or a dead antiserum."
  },
  {
    id: 34,
    question: "Under Madhya Pradesh's law prohibiting cow slaughter, police seize meat and ask the FSL to establish whether it is of bovine origin. Which immunological test is suitable?",
    options: ["Kastle–Meyer test", "Precipitin test or counter-current electrophoresis with anti-bovine serum", "ABO typing of the meat", "Absorption–elution with anti-A serum"],
    answer: 1,
    explanation: "Species identification by immunology uses an antiserum raised against the proteins of the suspected species, here anti-bovine serum, in a precipitin, double diffusion or CIEP test. The Kastle–Meyer test shows only the presence of blood. Today DNA-based species identification (for example cytochrome b) is also widely used."
  },
  {
    id: 35,
    question: "Monoclonal antibody production by the hybridoma technique was developed in 1975 by:",
    options: ["Yalow and Berson", "Engvall and Perlmann", "Köhler and Milstein", "Grabar and Williams"],
    answer: 2,
    explanation: "Georges Köhler and César Milstein fused antibody-producing mouse B cells with myeloma cells to create immortal hybridomas, each secreting one antibody. They shared the 1984 Nobel Prize with Niels Jerne. Monoclonal antibodies now underpin most diagnostic kits."
  },
  {
    id: 36,
    question: "In hybridoma production, fused cells are selected in HAT medium. Unfused myeloma cells die in this medium because they:",
    options: ["Lack the enzyme HGPRT and cannot use the salvage pathway when aminopterin blocks de novo nucleotide synthesis", "Lack immunoglobulin genes", "Are killed directly by thymidine", "Have a short natural lifespan in culture"],
    answer: 0,
    explanation: "Aminopterin in HAT blocks de novo synthesis, so cells must use the salvage pathway, which needs HGPRT. The myeloma line chosen lacks HGPRT, so it dies unless fused with a B cell that supplies the enzyme. Unfused B cells die because they cannot survive long in culture, leaving only hybridomas."
  },
  {
    id: 37,
    question: "Myeloma cells and spleen B cells from an immunised mouse are usually fused using:",
    options: ["EDTA", "Freund's adjuvant", "Sodium dodecyl sulphate", "Polyethylene glycol"],
    answer: 3,
    explanation: "Polyethylene glycol (PEG) brings cell membranes together and makes them fuse, giving hybrid cells. Electrofusion and inactivated Sendai virus are alternatives. Freund's adjuvant is used during immunisation, not fusion."
  },
  {
    id: 38,
    question: "For detecting a protein in old, partly degraded stains, a polyclonal antiserum may work better than a monoclonal antibody because it:",
    options: ["Is supplied as an unlimited, uniform reagent", "Recognises many different epitopes, so the loss of one epitope does not abolish binding", "Always has a higher affinity", "Recognises only a single epitope"],
    answer: 1,
    explanation: "A polyclonal antiserum contains antibodies against many epitopes on the target. If degradation destroys one epitope, others can still be bound. A monoclonal antibody depends on a single epitope, so it can fail completely if that epitope is altered."
  },
  {
    id: 39,
    question: "The chief advantage of monoclonal antibodies over polyclonal antisera is:",
    options: ["Recognition of many epitopes on the antigen", "Lower cost when only small amounts are needed", "Recognition of a single epitope with uniform specificity from batch to batch", "Stronger precipitation in gels"],
    answer: 2,
    explanation: "Each hybridoma clone makes one antibody that recognises one epitope, and it can be grown indefinitely. This gives a well-defined, reproducible reagent, which suits standardised kits. Monoclonals often precipitate poorly in gels because a single epitope per molecule cannot build a lattice."
  },
  {
    id: 40,
    question: "Freund's complete adjuvant, used when raising antisera in animals, contains:",
    options: ["Aluminium hydroxide alone", "Live attenuated bacteria", "Heat-killed mycobacteria in a mineral oil emulsion", "Formalin-killed viruses"],
    answer: 2,
    explanation: "Freund's complete adjuvant is a water-in-oil emulsion with heat-killed Mycobacterium tuberculosis. It releases antigen slowly and strongly stimulates the immune response. Freund's incomplete adjuvant lacks the mycobacteria and is used for booster doses."
  },
  {
    id: 41,
    question: "The correct sequence of steps in a Western blot is:",
    options: ["Transfer to membrane → SDS-PAGE → detection → blocking", "Agarose gel of DNA → transfer → probe with labelled DNA", "Blocking → SDS-PAGE → primary antibody → transfer", "SDS-PAGE → transfer to nitrocellulose or PVDF → blocking → primary antibody → labelled secondary antibody → detection"],
    answer: 3,
    explanation: "Proteins are first separated by size in SDS-PAGE and then transferred electrophoretically to a membrane. The membrane is blocked, probed with a specific primary antibody and then with an enzyme-labelled secondary antibody, and bands are developed by colour or chemiluminescence. Probing DNA on a membrane with labelled DNA is a Southern blot."
  },
  {
    id: 42,
    question: "Which blotting technique uses antibodies to detect specific proteins?",
    options: ["Southern blot", "Northern blot", "Western blot", "Dot-blot hybridisation with DNA probes"],
    answer: 2,
    explanation: "The Western blot (immunoblot) detects proteins with antibodies. The Southern blot (E. M. Southern, 1975) detects DNA, and the Northern blot detects RNA, both with nucleic acid probes. Western and Northern are word-play names on Southern's surname."
  },
  {
    id: 43,
    question: "In SDS-PAGE before Western blotting, sodium dodecyl sulphate:",
    options: ["Stains the separated proteins", "Denatures proteins and coats them with a uniform negative charge, so they separate by size", "Cross-links proteins to the gel", "Gives proteins a net positive charge"],
    answer: 1,
    explanation: "SDS binds along the polypeptide in proportion to its length, unfolding it and masking its native charge. All proteins then move towards the anode, with smaller ones moving faster through the gel. Molecular weight is estimated against a marker ladder."
  },
  {
    id: 44,
    question: "Historically, which test was used to confirm a repeatedly reactive HIV ELISA result?",
    options: ["Western blot", "Ouchterlony double diffusion", "Rocket electrophoresis", "Ring precipitin test"],
    answer: 0,
    explanation: "The Western blot separates individual HIV proteins (such as p24, gp41 and gp120/160) and shows which of them the patient's antibodies recognise. A defined band pattern confirmed infection. Newer algorithms now often use differentiation assays and nucleic acid tests instead."
  },
  {
    id: 45,
    question: "Radioimmunoassay was developed by Rosalyn Yalow and Solomon Berson for measuring:",
    options: ["Haemoglobin", "Prostate-specific antigen", "Thyroxine", "Insulin"],
    answer: 3,
    explanation: "Yalow and Berson developed RIA around 1959–1960 to measure plasma insulin, using antibodies that had arisen in insulin-treated patients. Yalow received the 1977 Nobel Prize for it. RIA made it possible to measure hormones at picogram levels."
  },
  {
    id: 46,
    question: "In a classical competitive radioimmunoassay, as the concentration of unlabelled antigen in the sample increases, the radioactivity in the antibody-bound fraction:",
    options: ["Increases", "Decreases", "Remains unchanged", "First rises and then levels off"],
    answer: 1,
    explanation: "Unlabelled antigen from the sample competes with a fixed amount of radiolabelled antigen for limited antibody sites. More sample antigen displaces more label, so bound counts fall. The concentration is read from a standard curve of bound counts against known amounts."
  },
  {
    id: 47,
    question: "The radioisotope most commonly used to label antigens in radioimmunoassay is:",
    options: ["Phosphorus-32", "Carbon-14", "Iodine-125", "Cobalt-60"],
    answer: 2,
    explanation: "Iodine-125 is easy to attach to tyrosine residues, has a half-life of about 60 days and is counted in a gamma counter. Tritium is sometimes used for small molecules such as steroids. Phosphorus-32 is mainly used to label nucleic acids."
  },
  {
    id: 48,
    question: "The main reason ELISA has largely replaced RIA in forensic and clinical laboratories is that RIA:",
    options: ["Is far less sensitive than ELISA", "Involves radiation hazards, radioactive waste and short reagent shelf life", "Cannot measure hormones", "Needs no antibodies"],
    answer: 1,
    explanation: "RIA is very sensitive, but it needs licensed handling of radioisotopes, gamma counters and waste disposal, and its labelled reagents decay. ELISA reaches similar sensitivity with stable enzyme labels and simple plate readers. This made enzyme immunoassays the routine choice."
  },
  {
    id: 49,
    question: "Which of the following immunological methods is the most sensitive for detecting small amounts of antigen?",
    options: ["Ring precipitin test", "Ouchterlony double diffusion", "ELISA", "Single radial immunodiffusion"],
    answer: 2,
    explanation: "ELISA uses enzyme amplification and can detect nanogram to picogram amounts of antigen. Precipitation-based gel methods need enough antigen and antibody to form a visible lattice, usually in the microgram range. This is why ELISA-based tests dominate trace work."
  },
  {
    id: 50,
    question: "Small molecules such as drugs are not immunogenic on their own. To raise antibodies against them they are:",
    options: ["Coupled to a large carrier protein such as bovine serum albumin or keyhole limpet haemocyanin", "Injected in much larger doses", "Mixed with sodium dodecyl sulphate", "Labelled with a radioisotope"],
    answer: 0,
    explanation: "A hapten can bind an antibody but cannot by itself trigger an immune response. Coupled to a carrier protein, it is presented with T-cell epitopes from the carrier, and antibodies against the hapten are formed. This is how antibodies for drug immunoassays are produced."
  }
];

export default questions;

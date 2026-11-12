const questions = [
  {
    id: 1,
    question: "Who discovered the ABO blood group system in 1900–1901 by observing agglutination between the red cells and sera of different individuals?",
    options: ["Alexander Wiener", "Karl Landsteiner", "Philip Levine", "Jules Bordet"],
    answer: 1,
    explanation: "Karl Landsteiner described groups A, B and C (later called O) in 1900–1901 and received the Nobel Prize in 1930. Wiener later worked with him on the Rh factor (1940), and Levine co-discovered the MN system with him. Bordet is known for complement and complement fixation."
  },
  {
    id: 2,
    question: "Group AB, which was missed in Landsteiner's original study, was described in 1902 by:",
    options: ["Race and Sanger", "Levine and Stetson", "Decastello and Sturli", "Fisher and Race"],
    answer: 2,
    explanation: "Alfred von Decastello and Adriano Sturli described the fourth ABO group, AB, in 1902. Levine and Stetson (1939) described the antibody behind haemolytic disease of the newborn, and Fisher and Race proposed the CDE nomenclature of the Rh system."
  },
  {
    id: 3,
    question: "The immunodominant sugar that the A transferase adds to H substance to give it A specificity is:",
    options: ["L-fucose", "D-galactose", "N-acetylglucosamine", "N-acetylgalactosamine"],
    answer: 3,
    explanation: "The A allele codes for an N-acetylgalactosaminyltransferase that adds N-acetylgalactosamine to the H substance. The B transferase adds D-galactose. L-fucose is the sugar that defines the H antigen itself."
  },
  {
    id: 4,
    question: "The H gene (FUT1) codes for a fucosyltransferase that converts the precursor substance into H antigen by adding:",
    options: ["L-fucose", "N-acetylgalactosamine", "D-galactose", "Sialic acid"],
    answer: 0,
    explanation: "FUT1 adds L-fucose to the terminal galactose of the precursor chain to form H antigen. H antigen is the substrate on which the A and B transferases act, so without H neither A nor B can be made. FUT1 is on chromosome 19."
  },
  {
    id: 5,
    question: "The Bombay phenotype (Oh), first reported from Mumbai in 1952, results from:",
    options: ["Inheritance of the rare cis-AB allele", "Homozygosity for the silent h allele (hh), so no H antigen is formed", "Absence of the RHD gene", "Homozygosity for the O allele together with the secretor gene"],
    answer: 1,
    explanation: "Bombay individuals are hh at the FUT1 locus and cannot make H antigen. Because H is the precursor for A and B, their red cells lack A, B and H even if they inherit A or B alleles. It was described by Bhende and colleagues in Bombay in 1952."
  },
  {
    id: 6,
    question: "A patient's red cells show no agglutination with anti-A, anti-B or anti-H lectin, and the patient's serum agglutinates group A, group B and ordinary group O cells. The most likely phenotype is:",
    options: ["Group O secretor", "Group A2 with anti-A1", "Rh-null phenotype", "Bombay (Oh) phenotype"],
    answer: 3,
    explanation: "Bombay serum contains anti-A, anti-B and a strong anti-H. Anti-H reacts with ordinary group O cells, which carry the most H antigen, so they are agglutinated. An ordinary group O person's cells react strongly with anti-H lectin, and their serum does not agglutinate O cells."
  },
  {
    id: 7,
    question: "Which ABO phenotype carries the largest amount of H antigen on its red cells?",
    options: ["A1B", "O", "A1", "B"],
    answer: 1,
    explanation: "The amount of H antigen follows the order O > A2 > B > A2B > A1 > A1B. The A and B transferases convert H into A or B antigen, so the more efficient the transferase, the less H is left. Group O has no functional transferase, so all its H stays unconverted."
  },
  {
    id: 8,
    question: "The lectin extracted from Dolichos biflorus seeds is used in blood group serology to:",
    options: ["Distinguish A1 from A2 red cells", "Detect H antigen", "Identify B antigen", "Detect Rh D antigen"],
    answer: 0,
    explanation: "Dolichos biflorus lectin, suitably diluted, agglutinates A1 cells but not A2 cells, so it serves as an anti-A1 reagent. Ulex europaeus is the anti-H lectin, and Griffonia (Bandeiraea) simplicifolia has anti-B activity."
  },
  {
    id: 9,
    question: "Which plant lectin is used as an anti-H reagent, for example to confirm the Bombay phenotype?",
    options: ["Dolichos biflorus", "Arachis hypogaea", "Ulex europaeus", "Griffonia simplicifolia"],
    answer: 2,
    explanation: "Ulex europaeus (gorse) lectin binds L-fucose and agglutinates cells in proportion to their H content. Bombay cells give no reaction with it. Arachis hypogaea (peanut) lectin detects the T antigen, not H."
  },
  {
    id: 10,
    question: "Secretor status, the ability to secrete water-soluble ABH substances into saliva and other body fluids, is controlled by which gene?",
    options: ["FUT1 (H gene)", "FUT3 (Lewis gene)", "ABO gene on chromosome 9", "FUT2 (Se gene)"],
    answer: 3,
    explanation: "FUT2 (Se) codes for a fucosyltransferase active in secretory glands that makes H substance on type 1 chains in secretions. Persons with at least one functional Se allele are secretors, and sese persons are non-secretors. FUT1 makes H on red cells, and FUT3 makes Lewis antigens."
  },
  {
    id: 11,
    question: "Approximately what proportion of most populations are ABH secretors?",
    options: ["About 20%", "About 50%", "About 80%", "About 95%"],
    answer: 2,
    explanation: "Roughly 80% of people are secretors and about 20% are non-secretors. Secretor status matters forensically because ABO groups can be determined from saliva, semen and other body fluids only in secretors."
  },
  {
    id: 12,
    question: "A person whose red cells type as Le(a+b−) is most likely:",
    options: ["A non-secretor who has a functional Lewis gene", "A secretor who has a functional Lewis gene", "A person lacking the Lewis gene", "A Bombay phenotype individual"],
    answer: 0,
    explanation: "With the Lewis gene (FUT3), Lea is made. In secretors, FUT2 also makes type 1 H, which FUT3 converts to Leb, so they type Le(a−b+). Non-secretors with Le cannot make Leb and type Le(a+b−). Le(a−b−) people lack a functional Lewis gene."
  },
  {
    id: 13,
    question: "Lewis antigens on red cells differ from ABO antigens in that they are:",
    options: ["Protein antigens coded on chromosome 1", "Expressed only on leucocytes", "Not made by the red cell but adsorbed onto it from plasma glycolipids", "Present only in newborns"],
    answer: 2,
    explanation: "Lewis antigens are made by tissues, released into plasma as glycosphingolipids and then taken up passively by red cells. This is why Lewis types can change in pregnancy and are weak at birth. ABO antigens, by contrast, are built on red cell membrane structures."
  },
  {
    id: 14,
    question: "In secretors, the ABH substances present in saliva, semen and other body fluids are chemically:",
    options: ["Alcohol-soluble glycolipids bound to membranes", "Water-soluble glycoproteins", "Lipoproteins", "Nucleoproteins"],
    answer: 1,
    explanation: "Secreted ABH substances are water-soluble glycoproteins, mostly mucins carrying type 1 chains. On red cells, ABH antigens are mainly glycolipids and glycoproteins embedded in the membrane. Their water solubility is why absorption-inhibition can be done on saliva extracts."
  },
  {
    id: 15,
    question: "The ABO gene is located on chromosome:",
    options: ["1", "19", "6", "9"],
    answer: 3,
    explanation: "The ABO locus lies on the long arm of chromosome 9 (9q34). The Rh genes RHD and RHCE are on chromosome 1, the FUT1, FUT2 and FUT3 genes are on chromosome 19, and the HLA complex is on chromosome 6."
  },
  {
    id: 16,
    question: "If both parents are of group A with genotype AO, what is the probability that their child will be group O?",
    options: ["1/2", "3/4", "1/4", "Zero"],
    answer: 2,
    explanation: "Each AO parent passes O with probability 1/2, so the chance of an OO child is 1/2 × 1/2 = 1/4. The remaining 3/4 of children will be group A (AA or AO). This is a simple Mendelian monohybrid cross."
  },
  {
    id: 17,
    question: "A mother of group A has a child of group O. Which putative father is excluded by ABO genetics, ignoring rare variants such as cis-AB?",
    options: ["Group O man", "Group A man", "Group B man", "Group AB man"],
    answer: 3,
    explanation: "A group O child must have received an O allele from each parent. A group AB man carries only A and B alleles and cannot pass on O, so he is excluded. Men of group O, A (AO) or B (BO) can all contribute an O allele."
  },
  {
    id: 18,
    question: "In a population, 36% of people are group O. Under Hardy–Weinberg equilibrium, the frequency of the O allele is:",
    options: ["0.36", "0.13", "0.18", "0.6"],
    answer: 3,
    explanation: "Group O is the homozygous recessive genotype OO, so its frequency equals r². Here r² = 0.36 and r = √0.36 = 0.6. The value 0.13 is wrongly obtained by squaring 0.36."
  },
  {
    id: 19,
    question: "A semen stain is group A (population frequency 0.30) and from a secretor (frequency 0.80). Assuming the two traits are independent, what proportion of the population shares both characteristics?",
    options: ["0.24", "0.50", "0.38", "1.10"],
    answer: 0,
    explanation: "For independent traits the product rule applies: 0.30 × 0.80 = 0.24, so about 24% of people share both. ABO (chromosome 9) and secretor status (FUT2, chromosome 19) are inherited independently. Adding the frequencies is wrong."
  },
  {
    id: 20,
    question: "The Rh factor was discovered in 1940 by Landsteiner and Wiener using the red cells of which animal?",
    options: ["Chimpanzee", "Rhesus monkey", "Guinea pig", "Rabbit"],
    answer: 1,
    explanation: "Landsteiner and Wiener injected red cells of the rhesus monkey (Macaca mulatta) into rabbits and guinea pigs. The resulting antiserum agglutinated the red cells of about 85% of white people, who were called Rh-positive. The factor is named after the rhesus monkey."
  },
  {
    id: 21,
    question: "Which Rh nomenclature proposes three closely linked genes with the allele pairs C/c, D/d and E/e?",
    options: ["Wiener (Rh–Hr)", "Rosenfield (numerical)", "Fisher–Race (CDE)", "ISBT terminology"],
    answer: 2,
    explanation: "Fisher and Race proposed three closely linked loci, each with two alleles, inherited together as a haplotype such as CDe. Wiener proposed a single locus with many alleles, each coding for an agglutinogen. Rosenfield used numbers such as Rh1 for D."
  },
  {
    id: 22,
    question: "In Wiener's Rh–Hr notation, the D antigen of the Fisher–Race system is written as:",
    options: ["rh′ (rh-prime)", "hr′ (hr-prime)", "Rh0 (Rh-zero)", "rh″ (rh-double-prime)"],
    answer: 2,
    explanation: "Wiener called the D factor Rh0 (Rho). In his notation rh′ corresponds to C, rh″ to E, hr′ to c and hr″ to e. Rh0 is the factor that decides whether a person is called Rh-positive or Rh-negative."
  },
  {
    id: 23,
    question: "Which Fisher–Race antigen exists only in notation, because no antibody against it has ever been found?",
    options: ["c (small c)", "d", "e (small e)", "E (capital E)"],
    answer: 1,
    explanation: "No anti-d has ever been found, so 'd' simply means the absence of D. In most Rh-negative people the RHD gene is deleted. Antigens c, e and E are real and their antibodies are clinically important."
  },
  {
    id: 24,
    question: "Which Rh antigen is the most immunogenic and the main cause of Rh haemolytic disease of the newborn?",
    options: ["c (small c)", "E (capital E)", "C (capital C)", "D"],
    answer: 3,
    explanation: "D is by far the most immunogenic Rh antigen. A large share of D-negative people exposed to D-positive cells form anti-D. Anti-D is the classic cause of Rh haemolytic disease of the newborn, which is why D typing is routine."
  },
  {
    id: 25,
    question: "Naturally occurring anti-A and anti-B are mainly IgM. Rh antibodies, by contrast, are typically:",
    options: ["IgG, formed after immunisation and able to cross the placenta", "IgM, naturally occurring and cold-reacting", "IgA, found mainly in secretions", "IgE, causing allergic reactions"],
    answer: 0,
    explanation: "Rh antibodies such as anti-D are usually immune IgG, produced after exposure by transfusion or pregnancy. Being IgG, they cross the placenta and cause haemolytic disease of the newborn. ABO antibodies are 'naturally occurring', probably formed against bacterial antigens similar to A and B."
  },
  {
    id: 26,
    question: "MN blood group antigens are carried on which red cell membrane protein?",
    options: ["Band 3", "Glycophorin A", "Glycophorin B", "Duffy glycoprotein"],
    answer: 1,
    explanation: "M and N differ by amino acids at the N-terminal end of glycophorin A. The S and s antigens of the same MNS system lie on glycophorin B. The MN system was discovered by Landsteiner and Levine in 1927."
  },
  {
    id: 27,
    question: "In a population sample of 1000 people typed for MN, the frequency of the M allele is 0.6. How many MN heterozygotes are expected under Hardy–Weinberg equilibrium?",
    options: ["360", "160", "600", "480"],
    answer: 3,
    explanation: "With p = 0.6 and q = 0.4, the heterozygote frequency is 2pq = 2 × 0.6 × 0.4 = 0.48, so 480 of 1000 people are expected to be MN. The value 360 is the MM count (p²) and 160 is the NN count (q²)."
  },
  {
    id: 28,
    question: "In the MN system, the genotype of a person can be read directly from the phenotype because the M and N alleles are:",
    options: ["Codominant", "Recessive", "Sex-linked", "Epistatic to ABO"],
    answer: 0,
    explanation: "M and N are codominant, so MM, MN and NN people give three distinct phenotypes. This made MN typing useful in early paternity work. In ABO, by contrast, group A may be AA or AO and cannot be told apart by phenotype."
  },
  {
    id: 29,
    question: "People with the Fy(a−b−) phenotype of the Duffy system, common in West Africa, are resistant to infection by:",
    options: ["Plasmodium falciparum", "Plasmodium malariae", "Plasmodium vivax", "Babesia microti"],
    answer: 2,
    explanation: "The Duffy glycoprotein (DARC) is the receptor that Plasmodium vivax uses to enter red cells. Duffy-null people lack it on red cells and are largely resistant to vivax malaria. This is a classic example of a blood group linked to disease resistance."
  },
  {
    id: 30,
    question: "Agglutination differs from precipitation mainly because, in agglutination, the antigen is:",
    options: ["Soluble", "Always a hapten", "Particulate or cell-bound", "Covalently bonded to the antibody"],
    answer: 2,
    explanation: "Agglutination is the clumping of particulate antigens such as red cells, bacteria or latex beads by antibody. Precipitation occurs when a soluble antigen combines with antibody to form an insoluble lattice. Haemagglutination is agglutination in which the particles are red cells."
  },
  {
    id: 31,
    question: "IgM is a far more efficient haemagglutinin than IgG chiefly because it:",
    options: ["Crosses the placenta", "Has ten antigen-binding sites and can span the gap between red cells", "Binds Fc receptors on red cells", "Is present at a higher serum concentration"],
    answer: 1,
    explanation: "Pentameric IgM has ten binding sites and a large span, so it can bridge red cells despite the repulsion between them. IgG has only two binding sites and a shorter span. IgM is therefore called a 'complete' antibody that agglutinates cells in saline."
  },
  {
    id: 32,
    question: "IgG anti-D often fails to agglutinate D-positive red cells suspended in saline because:",
    options: ["IgG cannot bind the D antigen", "Saline destroys the D antigen", "IgG is pentameric and too large", "The short IgG molecule cannot bridge the distance kept between red cells by their negative surface charge"],
    answer: 3,
    explanation: "Sialic acid gives red cells a negative surface charge, creating a zeta potential that holds them apart. IgG binds the D antigen but is too short to link neighbouring cells, so it is called 'incomplete'. Albumin, enzymes or the antiglobulin test are used to reveal it."
  },
  {
    id: 33,
    question: "Treating red cells with proteolytic enzymes such as papain or bromelin enhances agglutination by IgG antibodies because the enzymes:",
    options: ["Convert IgG into IgM", "Add positive charges to the antibody", "Increase the number of D antigen sites", "Remove sialic acid-rich glycoproteins and lower the negative surface charge"],
    answer: 3,
    explanation: "Proteases cleave sialic acid-rich glycoproteins from the cell surface. This lowers the zeta potential so cells come closer and IgG can cross-link them. Some antigens, such as M, N and Duffy, are destroyed by enzymes, so the method must be chosen with care."
  },
  {
    id: 34,
    question: "The direct antiglobulin (Coombs) test detects:",
    options: ["Antibody or complement already bound to the red cells in the body", "Free antibody in the patient's serum", "ABO antigens in saliva", "Rh antigens in dried stains"],
    answer: 0,
    explanation: "In the direct antiglobulin test, washed patient red cells are mixed with anti-human globulin. Agglutination shows that IgG or complement had coated them in vivo, as in haemolytic disease of the newborn. The indirect test first incubates serum with test cells to detect free antibody."
  },
  {
    id: 35,
    question: "In absorption–inhibition grouping of a stain, anti-A serum is first mixed with the stain extract and then tested against A indicator cells. If the serum no longer agglutinates the A cells, the stain:",
    options: ["Lacks A antigen", "Contains anti-A antibody", "Contains A antigen", "Is from a non-secretor"],
    answer: 2,
    explanation: "A antigen in the stain binds (absorbs) the anti-A, so less free antibody is left to agglutinate the indicator cells. Inhibition of agglutination therefore means the antigen is present. If the stain lacks A, the antiserum stays active and agglutinates the A cells."
  },
  {
    id: 36,
    question: "The absorption–inhibition method is best suited for:",
    options: ["Rh typing of a minute bloodstain", "Determining ABH secretor status from a saliva sample", "Grouping a single thread stained with blood", "Detecting agglutinins in old blood crusts"],
    answer: 1,
    explanation: "Absorption–inhibition is relatively insensitive and needs a fair amount of antigen. It works well with soluble group substances in saliva, semen or other secretions. Small or old bloodstains are better grouped by absorption–elution or mixed agglutination."
  },
  {
    id: 37,
    question: "In the absorption–elution technique, after unbound antibody is washed away, the bound antibody is released from the stain by heating to about:",
    options: ["56 °C", "4 °C", "37 °C", "100 °C"],
    answer: 0,
    explanation: "Heating to about 56 °C breaks the non-covalent antigen–antibody bonds and releases the antibody into fresh saline without destroying it. Boiling would denature the antibody, while 4 °C and 37 °C would not elute it efficiently. The eluate is then tested with A, B and O indicator cells."
  },
  {
    id: 38,
    question: "Absorption–elution is preferred over absorption–inhibition for small, old bloodstains mainly because it is:",
    options: ["Faster and needs no indicator cells", "Much more sensitive", "A test for antibodies rather than antigens", "Independent of antiserum quality"],
    answer: 1,
    explanation: "In absorption–elution the antibody bound to the stain is concentrated and then released, and even small amounts can be seen by agglutination. This makes it far more sensitive than absorption–inhibition. It still detects antigens, not antibodies, and it needs good-quality antisera and indicator cells."
  },
  {
    id: 39,
    question: "Threads from a bloodstain are treated separately with anti-A and anti-B sera, washed and eluted. Only the eluate from the anti-B thread agglutinates B indicator cells. The stain is group:",
    options: ["A", "AB", "O", "B"],
    answer: 3,
    explanation: "Anti-B was bound and later eluted, which shows that B antigen is present. Anti-A did not bind, so A antigen is absent, and the stain is group B. A group AB stain would have given positive eluates with both sera."
  },
  {
    id: 40,
    question: "The mixed agglutination technique is particularly useful for grouping:",
    options: ["Large volumes of liquid blood", "Saliva samples for secretor status", "Blood on single fibres or very small amounts of material", "Antibodies in serum"],
    answer: 2,
    explanation: "In mixed agglutination, antibody bound to antigens on a fibre or cell clump also attaches indicator red cells, which stick to the fibre and can be seen under the microscope. It works on very little material, such as single threads. Coombs and colleagues developed it."
  },
  {
    id: 41,
    question: "The Lattes crust test on a fresh dried bloodstain detects:",
    options: ["Anti-A and anti-B agglutinins in the stain", "A and B antigens on the red cells", "Rh antigens", "Secretor substances"],
    answer: 0,
    explanation: "Leone Lattes (1915) placed fragments of the dried crust on a slide with known A, B and O cells and watched for agglutination. The test detects the naturally occurring antibodies in the stain, so it is a form of reverse grouping. Group O cells serve as the negative control."
  },
  {
    id: 42,
    question: "In a Lattes crust test, a dried bloodstain agglutinates group A indicator cells but not group B or group O cells. The stain is most likely group:",
    options: ["O", "AB", "B", "A"],
    answer: 2,
    explanation: "A group B person's serum contains anti-A, which agglutinates A cells but not B cells. A group O stain would agglutinate both A and B cells, and a group AB stain neither. Group O cells should not be agglutinated by any normal stain."
  },
  {
    id: 43,
    question: "The main limitation of the Lattes test on old bloodstains is that:",
    options: ["The red cell antigens are lost within hours", "It needs fresh red cells from the suspect", "The antibodies in the stain deteriorate much faster than the red cell antigens", "It cannot be done on fabric"],
    answer: 2,
    explanation: "Antibodies are proteins that denature on drying and ageing, so agglutinin activity fades within weeks to months. The carbohydrate A and B antigens remain stable for years. Old stains are therefore grouped by antigen methods such as absorption–elution."
  },
  {
    id: 44,
    question: "Which type of bond does NOT contribute to antigen–antibody binding?",
    options: ["Hydrogen bonds", "Van der Waals forces", "Hydrophobic interactions", "Covalent bonds"],
    answer: 3,
    explanation: "Antigen–antibody binding depends only on non-covalent forces: hydrogen bonds, electrostatic (ionic) forces, van der Waals forces and hydrophobic interactions. This is why the reaction is reversible and why heat or low pH can elute antibody. Covalent bonds are not formed."
  },
  {
    id: 45,
    question: "Electrostatic (ionic) interactions in antigen–antibody binding occur between:",
    options: ["Oppositely charged amino acid side chains, such as lysine and aspartate", "Two non-polar methyl groups that exclude water", "Momentary fluctuating electron clouds of adjacent atoms", "Atoms that share a pair of electrons"],
    answer: 0,
    explanation: "Ionic bonds form between charged groups, for example the positive amino group of lysine and the negative carboxyl group of aspartate or glutamate. Exclusion of water between non-polar groups is the hydrophobic effect, and fluctuating electron clouds give van der Waals forces. Shared electron pairs are covalent bonds, which play no part."
  },
  {
    id: 46,
    question: "The affinity of an antibody refers to:",
    options: ["The strength of binding between a single antigen-binding site and a single epitope", "The total binding strength of a multivalent antibody to a multivalent antigen", "The number of epitopes on an antigen", "The ability to cross-react with related antigens"],
    answer: 0,
    explanation: "Affinity is the strength of the interaction between one paratope and one epitope, measured by the association constant Ka. Avidity is the overall strength when several binding sites act together. Cross-reactivity is a matter of specificity, not affinity."
  },
  {
    id: 47,
    question: "IgM antibodies often have low affinity but high avidity. This is because:",
    options: ["IgM binds its antigen covalently", "Each IgM molecule has up to ten binding sites that can bind at the same time", "IgM is a monomer", "IgM is more hydrophobic than IgG"],
    answer: 1,
    explanation: "Avidity rises steeply with the number of binding sites engaged at once, because all of them must let go for the antibody to detach. IgM is produced early in the immune response, so its individual sites have low affinity. Its pentameric structure still gives high overall avidity."
  },
  {
    id: 48,
    question: "An antibody has a dissociation constant (Kd) of 10⁻⁹ M. Its affinity (association) constant Ka is:",
    options: ["One-billionth per molar (10⁻⁹ M⁻¹)", "One billion molar (10⁹ M)", "One billion per molar (10⁹ M⁻¹)", "One-billionth molar (10⁻⁹ M)"],
    answer: 2,
    explanation: "Ka is the reciprocal of Kd, so Ka = 1/10⁻⁹ M = 10⁹ M⁻¹. A higher Ka (lower Kd) means tighter binding. High-affinity antibodies typically have Ka values between about 10⁸ and 10¹¹ M⁻¹."
  },
  {
    id: 49,
    question: "ABO grouping of dried bloodstains is often possible even after years mainly because:",
    options: ["The A and B antigens are stable carbohydrate structures", "Antibodies in the stain persist longer than antigens", "Red cells remain intact in dried stains", "Rh antigens protect the ABO antigens"],
    answer: 0,
    explanation: "The A and B determinants are sugars on glycolipids and glycoproteins, and they resist drying and ageing well. Red cells lyse on drying, but the antigens remain on membrane fragments. Antibodies and protein antigens degrade much faster."
  },
  {
    id: 50,
    question: "Compared with ABO antigens, Rh antigens in dried bloodstains are:",
    options: ["More stable and easier to type", "Less stable and harder to type reliably", "Of identical stability", "Present only in stains from secretors"],
    answer: 1,
    explanation: "Rh antigens are protein antigens that depend on an intact membrane structure, and they lose activity on drying and ageing. Rh typing of stains was therefore difficult and less reliable than ABO typing. Rh antigens are confined to red cells and are not secreted into body fluids."
  }
];

export default questions;

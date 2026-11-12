const questions = [
  {
    id: 1,
    question: "A compound microscope is used with a 10× eyepiece and a 40× objective. The total magnification of the image is",
    options: ["50×", "400×", "4000×", "40×"],
    answer: 1,
    explanation: "Total magnification is the product of the objective and eyepiece magnifications: 40 × 10 = 400×. Magnification alone does not improve detail; resolution depends on the numerical aperture and the wavelength of light."
  },
  {
    id: 2,
    question: "An oil-immersion objective (immersion oil n = 1.515) collects light over a half-angle of 60° (sin 60° = 0.866). Its numerical aperture is approximately",
    options: ["0.87", "1.75", "1.31", "1.52"],
    answer: 2,
    explanation: "NA = n sin θ = 1.515 × 0.866 ≈ 1.31. Because NA includes the refractive index of the medium, immersion oil lets objectives exceed the theoretical limit of 1.0 for dry objectives in air."
  },
  {
    id: 3,
    question: "Using the Rayleigh criterion (d = 0.61λ/NA), the approximate limit of resolution of an objective of NA 1.4 with green light of 550 nm is",
    options: ["about 240 nm", "about 770 nm", "about 135 nm", "about 470 nm"],
    answer: 0,
    explanation: "d = 0.61 × 550 / 1.4 ≈ 240 nm. This is about the best a conventional light microscope can achieve (roughly 0.2 µm), which is why viruses and fine ultrastructure need electron microscopy."
  },
  {
    id: 4,
    question: "Which change will improve the resolving power of a light microscope, that is, reduce the minimum resolvable distance?",
    options: ["Using a longer-wavelength (red) light and a higher-NA objective", "Using a higher-power eyepiece with the same objective", "Using a shorter-wavelength (blue) light and a higher-NA objective", "Closing the condenser aperture fully"],
    answer: 2,
    explanation: "Resolution is proportional to λ/NA, so shorter wavelengths and larger numerical apertures resolve finer detail. A stronger eyepiece only enlarges the image (empty magnification), and closing the condenser aperture lowers the effective NA."
  },
  {
    id: 5,
    question: "The main purpose of placing immersion oil between the slide and a 100× objective is to",
    options: ["Protect the front lens from scratches", "Match the refractive index of glass, so that light rays are not refracted away and the NA increases", "Increase the working distance of the objective", "Act as a fluorescent mounting medium"],
    answer: 1,
    explanation: "Immersion oil has a refractive index close to that of glass (about 1.515). Oblique rays therefore pass from the coverslip into the objective without refraction or total internal reflection, which increases the numerical aperture and the resolution."
  },
  {
    id: 6,
    question: "Useful magnification of a light microscope is roughly 500–1000 times the numerical aperture of the objective. For an objective of NA 0.65, magnification above about 650× would mostly produce",
    options: ["Greater depth of field", "Improved resolution", "Empty magnification", "Better contrast"],
    answer: 2,
    explanation: "Beyond about 1000 × NA, the image only gets bigger and no new detail is resolved; this is called empty magnification. For NA 0.65, the upper useful limit is about 650×."
  },
  {
    id: 7,
    question: "The method of adjusting the field diaphragm and condenser so that the specimen is evenly illuminated, and the image of the lamp filament is not seen in the specimen plane, is called",
    options: ["Critical (Nelsonian) illumination", "Köhler illumination", "Rheinberg illumination", "Oblique illumination"],
    answer: 1,
    explanation: "Köhler illumination, introduced by August Köhler in 1893, focuses the image of the field diaphragm on the specimen and the lamp filament at the condenser aperture. The result is bright, uniform illumination and full use of the condenser NA."
  },
  {
    id: 8,
    question: "As one changes from a 10× to a 100× objective on a compound microscope, which of the following decreases?",
    options: ["Numerical aperture", "Resolving power", "Depth of field", "Magnification"],
    answer: 2,
    explanation: "Higher-power objectives have larger NA and better resolution, but a much smaller depth of field and a shorter working distance. This is why the fine-focus control must be used carefully at high power."
  },
  {
    id: 9,
    question: "Apochromatic objectives are superior to achromatic objectives mainly because they",
    options: ["Correct chromatic aberration for three wavelengths and spherical aberration for two or more", "Are made only for dark-field work", "Have a lower numerical aperture", "Do not need a coverslip"],
    answer: 0,
    explanation: "Achromats correct chromatic aberration for two colours (red and blue). Apochromats correct it for three (red, green and blue) and also correct spherical aberration better, giving the sharpest colour images, which is useful in photomicrography."
  },
  {
    id: 10,
    question: "An eyepiece has a field number of 20 mm. With a 40× objective, the diameter of the field of view at the specimen is",
    options: ["2.0 mm", "0.05 mm", "8.0 mm", "0.5 mm"],
    answer: 3,
    explanation: "Field of view = field number ÷ objective magnification = 20 / 40 = 0.5 mm. Knowing the field diameter lets an examiner estimate the size of particles or count objects per field."
  },
  {
    id: 11,
    question: "Under a bright-field microscope, a hair shows a medulla 20 µm wide in a shaft 80 µm in diameter. The medullary index and the most likely origin are",
    options: ["0.25; human", "4.0; human", "0.25; animal", "0.75; animal"],
    answer: 0,
    explanation: "Medullary index = medulla diameter ÷ shaft diameter = 20/80 = 0.25. Human hairs generally have an index below about 1/3, whereas most animal hairs have an index of 0.5 or more."
  },
  {
    id: 12,
    question: "In dark-field microscopy, the specimen appears bright on a dark background because",
    options: ["The specimen fluoresces under UV light", "A phase plate retards the direct light by a quarter wavelength", "Polarised light is extinguished by the analyser", "An opaque central stop blocks direct light, so only light scattered by the specimen enters the objective"],
    answer: 3,
    explanation: "The dark-field condenser sends a hollow cone of light that misses the objective. Only rays scattered or diffracted by the specimen are collected, so small or thin objects shine against a black background."
  },
  {
    id: 13,
    question: "Dark-field microscopy of fresh exudate is the classical method for demonstrating live, motile spirochaetes of",
    options: ["Mycobacterium tuberculosis", "Treponema pallidum", "Staphylococcus aureus", "Candida albicans"],
    answer: 1,
    explanation: "Treponema pallidum is too thin (about 0.1–0.2 µm) to be seen by bright-field microscopy and does not stain well with routine stains. In dark-field, it appears as a bright corkscrew with characteristic motility."
  },
  {
    id: 14,
    question: "For proper dark-field illumination with a high-power objective, the condenser must have",
    options: ["A numerical aperture greater than that of the objective", "A numerical aperture smaller than that of the objective", "A green filter", "A quarter-wave phase plate"],
    answer: 0,
    explanation: "The hollow cone of light from the condenser must be more oblique than the objective can accept, so the condenser NA must exceed the objective NA. With an oil objective, an iris inside it is sometimes closed down to achieve this."
  },
  {
    id: 15,
    question: "Phase contrast microscopy, which allows living unstained cells to be seen clearly, was invented by",
    options: ["Ernst Abbe", "August Köhler", "Frits Zernike", "Georges Nomarski"],
    answer: 2,
    explanation: "Frits Zernike developed phase contrast in the 1930s and received the Nobel Prize in Physics in 1953. Nomarski devised differential interference contrast (DIC), a different method of producing contrast in transparent specimens."
  },
  {
    id: 16,
    question: "Phase contrast microscopy produces contrast in transparent specimens by",
    options: ["Staining the specimen with fluorochromes", "Converting differences in optical path (phase) into differences in brightness using an annular diaphragm and a phase plate", "Blocking all undeviated light with a central stop", "Rotating the plane of polarised light"],
    answer: 1,
    explanation: "Light passing through regions of different refractive index or thickness is retarded in phase. The phase plate shifts the undeviated light so that it interferes with the diffracted light, turning invisible phase differences into visible amplitude (brightness) differences."
  },
  {
    id: 17,
    question: "A bright or dark ring surrounding the edges of cells, seen in phase contrast images, is an optical artefact known as",
    options: ["Halo", "Becke line", "Airy disc", "Vignetting"],
    answer: 0,
    explanation: "Halo and shading-off are characteristic artefacts of phase contrast, caused by imperfect separation of direct and diffracted light at the phase ring. The Becke line is a refractive-index boundary effect used in glass examination."
  },
  {
    id: 18,
    question: "A semen sample must be checked for the presence and motility of live spermatozoa without fixing or staining them. The most suitable technique is",
    options: ["Transmission electron microscopy", "Phase contrast microscopy", "Polarised light microscopy", "Scanning electron microscopy"],
    answer: 1,
    explanation: "Phase contrast reveals unstained living cells, including motility, without fixation. Electron microscopes need fixed, dried specimens under vacuum, and polarised light is mainly for birefringent materials."
  },
  {
    id: 19,
    question: "Birefringence of an anisotropic material such as a textile fibre is defined as",
    options: ["The refractive index of the material relative to air", "The angle at which total internal reflection occurs", "The ratio of the two refractive indices", "The numerical difference between its two principal refractive indices"],
    answer: 3,
    explanation: "Birefringence = n∥ − n⊥, the difference between the refractive indices for light vibrating parallel and perpendicular to the fibre axis. Fibres are birefringent because their polymer chains are oriented along the length of the fibre."
  },
  {
    id: 20,
    question: "A synthetic fibre has refractive indices of n∥ = 1.720 and n⊥ = 1.540, giving a birefringence of 0.180. This high value is characteristic of",
    options: ["Cellulose acetate", "Acrylic", "Polyester (polyethylene terephthalate)", "Viscose rayon"],
    answer: 2,
    explanation: "Polyester has very high birefringence (about 0.17–0.19) and shows multiple high-order interference colours between crossed polars. Acetate and acrylic have very low birefringence, nylon is moderate (about 0.06) and viscose is low."
  },
  {
    id: 21,
    question: "A fibre 10 µm thick has a birefringence of 0.055. The retardation it produces between crossed polars is",
    options: ["55 nm", "182 nm", "5500 nm", "550 nm"],
    answer: 3,
    explanation: "Retardation = thickness × birefringence = 10,000 nm × 0.055 = 550 nm. The Michel-Lévy chart links retardation, thickness and birefringence to the interference colour observed."
  },
  {
    id: 22,
    question: "When rotated on the stage between crossed polars, which of the following remains dark (extinct) in all positions?",
    options: ["A nylon fibre", "A fragment of unstrained window glass", "A starch grain", "A calcite crystal"],
    answer: 1,
    explanation: "Glass is amorphous and isotropic, with a single refractive index, so it does not change the polarisation of light and stays dark between crossed polars. Fibres, starch and calcite are anisotropic and light up in all positions except extinction."
  },
  {
    id: 23,
    question: "In the immersion method for the refractive index of a glass fragment, when the focus is raised (the stage lowered), the Becke line",
    options: ["Moves into the medium of higher refractive index", "Moves into the medium of lower refractive index", "Disappears whenever the glass has the higher index", "Splits into coloured fringes only when the indices differ greatly"],
    answer: 0,
    explanation: "The bright Becke line always moves toward the higher-index medium as the focus is raised. At the match point the line disappears, and hot-stage instruments such as GRIM use this to measure the glass refractive index precisely."
  },
  {
    id: 24,
    question: "The Michel-Lévy chart is used in polarised light microscopy to",
    options: ["Calibrate the eyepiece micrometer", "Determine the numerical aperture of objectives", "Identify fluorochromes by emission colour", "Relate interference colours to retardation and thickness, to estimate birefringence"],
    answer: 3,
    explanation: "The chart plots interference colour against retardation, with diagonal lines for different birefringence values. Knowing the thickness of a fibre or crystal and its interference colour, the analyst can read off its birefringence."
  },
  {
    id: 25,
    question: "Under crossed polars, starch grains from food residue or trace evidence typically show",
    options: ["Uniform extinction at all angles", "A dark 'Maltese cross' pattern centred on the hilum", "Bright green fluorescence", "Concentric Becke lines"],
    answer: 1,
    explanation: "Starch grains are built of radially arranged crystalline layers, so polarised light shows a dark extinction cross (Maltese cross) centred on the hilum. The shape of the grain and the position of the cross help identify the plant source."
  },
  {
    id: 26,
    question: "In fluorescence, the emitted light has a longer wavelength than the exciting light. This difference is called",
    options: ["Stokes shift", "Doppler shift", "Chemical shift", "Rayleigh scattering"],
    answer: 0,
    explanation: "Some absorbed energy is lost through vibrational relaxation before emission, so the emitted photon has less energy and a longer wavelength. This Stokes shift allows filters to separate the weak emission from the strong excitation light."
  },
  {
    id: 27,
    question: "In an epifluorescence microscope filter cube, the function of the dichroic mirror is to",
    options: ["Polarise the excitation light", "Reflect the excitation wavelength onto the specimen and transmit the longer emission wavelength to the eyepiece", "Absorb all ultraviolet light from the lamp", "Split the image between two objectives"],
    answer: 1,
    explanation: "The cube has three parts: an excitation filter, a dichroic (beam-splitting) mirror and an emission (barrier) filter. The dichroic reflects short-wavelength light down through the objective and passes the longer-wavelength fluorescence up to the detector."
  },
  {
    id: 28,
    question: "DAPI, widely used as a nuclear counterstain in fluorescence microscopy, binds the minor groove of AT-rich DNA and",
    options: ["Is excited by green light and emits red", "Is excited by blue light and emits green", "Is excited by ultraviolet light and emits blue", "Is excited by infrared light and emits yellow"],
    answer: 2,
    explanation: "DAPI absorbs at about 358 nm (UV) and emits at about 461 nm (blue). FITC, by contrast, is excited by blue light (about 495 nm) and emits green (about 520 nm)."
  },
  {
    id: 29,
    question: "The irreversible loss of fluorescence of a fluorochrome during prolonged exposure to excitation light is called",
    options: ["Quenching by concentration", "Autofluorescence", "Phosphorescence", "Photobleaching"],
    answer: 3,
    explanation: "Photobleaching is the photochemical destruction of the fluorophore, often through reactive oxygen species. Antifade mounting media, lower excitation intensity and shorter exposures reduce it. Autofluorescence is natural fluorescence of the tissue itself."
  },
  {
    id: 30,
    question: "In sexual assault casework, the SPERM HY-LITER method identifies sperm heads in a smear using",
    options: ["Nuclear fast red and picroindigocarmine", "A fluorescently labelled monoclonal antibody against a sperm-head protein, with a DAPI nuclear counterstain", "Acid phosphatase substrate with Brentamine Fast Blue", "Lugol's iodine"],
    answer: 1,
    explanation: "The kit uses a fluorophore-labelled antibody specific to human sperm heads, so sperm fluoresce green, while DAPI stains all nuclei blue. This makes sperm easier to find among many epithelial cells than with the bright-field Christmas tree stain."
  },
  {
    id: 31,
    question: "The feature of a confocal laser scanning microscope that rejects out-of-focus light and allows optical sectioning is",
    options: ["A pinhole aperture placed in a plane conjugate to the focal point", "An annular phase ring", "A central opaque stop in the condenser", "A Wollaston prism"],
    answer: 0,
    explanation: "Light from the focal plane is focused through the detector pinhole, while light from above and below is defocused and blocked. This gives sharp optical sections of thick specimens without physical sectioning."
  },
  {
    id: 32,
    question: "A three-dimensional image of a thick fluorescently labelled specimen is reconstructed in confocal microscopy by",
    options: ["Rotating the polariser through 360°", "Coating the specimen with gold and scanning with electrons", "Acquiring a series of optical sections at successive focal depths (a z-stack)", "Taking two images from different angles through a stereo head"],
    answer: 2,
    explanation: "The laser scans each focal plane point by point, the focus is stepped through the specimen, and software combines the stack of sections into a 3D rendering. A stereo microscope gives depth perception but no optical sectioning."
  },
  {
    id: 33,
    question: "Confocal laser scanning microscopes use lasers rather than ordinary lamps mainly because",
    options: ["Lasers give white light containing all wavelengths", "A laser provides an intense, monochromatic beam that can be focused to a diffraction-limited spot and scanned point by point", "Lasers do not cause photobleaching", "Lasers improve the depth of field"],
    answer: 1,
    explanation: "Confocal imaging builds the image one point at a time, so it needs an intense, coherent source that can be focused to a tiny spot and matched to fluorochrome excitation lines. Lasers actually increase the risk of photobleaching."
  },
  {
    id: 34,
    question: "A comparison microscope used in forensic laboratories consists of",
    options: ["A single objective with two eyepieces giving a 3D image", "An electron microscope coupled to an X-ray detector", "Two compound microscopes joined by an optical bridge so that two specimens are seen side by side in one split field", "A microscope with crossed polarising filters"],
    answer: 2,
    explanation: "The optical bridge combines the images from two objectives into a single eyepiece field, which can be split or overlapped. This allows a questioned specimen and a known specimen to be compared directly."
  },
  {
    id: 35,
    question: "The comparison microscope was introduced into firearms examination in the 1920s for side-by-side comparison of striations on bullets by",
    options: ["Calvin Goddard and Philip Gravelle", "Edmond Locard and Hans Gross", "Alphonse Bertillon and Francis Galton", "Paul Kirk and Leone Lattes"],
    answer: 0,
    explanation: "Philip Gravelle developed the comparison microscope and Calvin Goddard popularised it for bullet comparison; it was used in the Sacco-Vanzetti and St Valentine's Day Massacre investigations. It is also used for comparing hairs, fibres, tool marks and documents."
  },
  {
    id: 36,
    question: "For a valid comparison of a questioned hair with a reference hair under a comparison microscope, the examiner must ensure that",
    options: ["Each hair is viewed with a different objective magnification", "One stage uses polarised light and the other bright-field", "Only the questioned hair is mounted in oil", "Both sides have identical magnification, illumination and mounting medium"],
    answer: 3,
    explanation: "Any difference in magnification, light intensity, colour temperature or mountant would make differences between the specimens appear artificially. Matched objectives and balanced illumination on both sides are therefore essential."
  },
  {
    id: 37,
    question: "Which feature distinguishes a stereo (dissecting) microscope from a compound microscope?",
    options: ["It provides an upright, three-dimensional image at low magnification with a long working distance", "It gives higher resolution than an oil-immersion objective", "It forms images using electrons", "It is used only for transmitted light"],
    answer: 0,
    explanation: "A stereomicroscope uses two separate optical paths, one for each eye, to give depth perception. It has a long working distance and typically magnifies up to about 100×. It is the first instrument used to search and sort evidence."
  },
  {
    id: 38,
    question: "A trace evidence examiner wants to search a garment for fibres and glass fragments and pick them up with forceps. The most suitable instrument is a",
    options: ["Transmission electron microscope", "Confocal laser scanning microscope", "Stereomicroscope", "Phase contrast microscope"],
    answer: 2,
    explanation: "The stereomicroscope gives a 3D view of bulky objects with enough working distance for tools under the lens. It is used for initial examination, recovery of traces and observation of tool marks before detailed compound or instrumental analysis."
  },
  {
    id: 39,
    question: "In a scanning electron microscope, image contrast that depends mainly on the atomic number of the elements present is produced by",
    options: ["Secondary electrons", "Transmitted electrons", "Auger electrons", "Backscattered electrons"],
    answer: 3,
    explanation: "Heavier elements backscatter more primary electrons, so they appear brighter in a backscattered electron (BSE) image. Secondary electrons are low-energy and come from near the surface, giving mainly topographic contrast."
  },
  {
    id: 40,
    question: "The EDX (energy-dispersive X-ray) detector attached to an SEM identifies elements by measuring",
    options: ["The energy of characteristic X-rays emitted when inner-shell vacancies are filled", "The wavelength of visible light emitted", "The mass-to-charge ratio of ions", "The scattering angle of secondary electrons"],
    answer: 0,
    explanation: "The electron beam ejects inner-shell electrons. When outer electrons fill the vacancies, X-rays of element-specific energies are emitted, so the EDX spectrum gives the elemental composition of the region analysed."
  },
  {
    id: 41,
    question: "SEM-EDX analysis of hand swabs identifies a spheroidal particle about 2 µm in diameter containing lead, barium and antimony. This particle is best interpreted as",
    options: ["Brake-pad dust", "Characteristic gunshot residue", "Soil mineral", "Paint chip"],
    answer: 1,
    explanation: "Particles that are spheroidal (formed by condensation from the hot vapour of the primer) and contain Pb, Ba and Sb together are classed as characteristic of primer gunshot residue under ASTM E1588. Particles containing only two of these elements (such as Pb–Ba or Ba–Sb) are classed only as consistent with GSR, because such combinations also occur from other sources."
  },
  {
    id: 42,
    question: "Non-conductive specimens such as fibres are often coated with a thin layer of carbon or gold before SEM examination in order to",
    options: ["Make them fluorescent", "Increase their birefringence", "Prevent charge build-up and improve secondary electron emission", "Fix them for live-cell imaging"],
    answer: 2,
    explanation: "Insulating samples accumulate charge from the beam, which distorts the image. A conductive coating drains the charge to earth. Carbon is preferred when EDX analysis is planned because gold X-ray peaks can overlap with those of the elements of interest."
  },
  {
    id: 43,
    question: "Compared with a light microscope, a scanning electron microscope offers",
    options: ["Colour images of living specimens", "Lower resolution but greater depth of field", "Images formed by visible light reflected from the surface", "Much greater depth of field and resolution, so rough surfaces appear sharp in three dimensions"],
    answer: 3,
    explanation: "The very small beam convergence angle gives the SEM a depth of field hundreds of times greater than a light microscope at the same magnification. Its resolution is in the nanometre range, which makes it ideal for tool marks, hair surface scales and GSR."
  },
  {
    id: 44,
    question: "For transmission electron microscopy, biological tissue must be cut into ultrathin sections of about",
    options: ["5–10 µm", "50–100 nm", "1–2 mm", "0.5–1 µm"],
    answer: 1,
    explanation: "Electrons have low penetrating power, so TEM sections must be about 50–100 nm thick. They are cut with glass or diamond knives on an ultramicrotome. Routine paraffin sections for light microscopy are about 4–6 µm."
  },
  {
    id: 45,
    question: "In TEM, ultrathin sections are commonly stained with uranyl acetate and lead citrate because these heavy-metal salts",
    options: ["Fluoresce under the electron beam", "Make the tissue conductive for secondary electrons", "Scatter electrons strongly, increasing contrast of membranes and nucleic acids", "Dissolve the embedding resin"],
    answer: 2,
    explanation: "Contrast in TEM comes from differential scattering of electrons. Heavy atoms such as uranium and lead bind to cell structures and scatter electrons out of the beam, so those regions appear dark (electron-dense)."
  },
  {
    id: 46,
    question: "Virus particles are often visualised in TEM by surrounding them with phosphotungstic acid on a grid, so that they appear light against a dark background. This technique is",
    options: ["Negative staining", "Shadow casting", "Immunogold labelling", "Freeze fracture"],
    answer: 0,
    explanation: "In negative staining, the electron-dense stain fills the spaces around and within the particle but is excluded from the particle itself, outlining its shape. It is rapid and is widely used for viruses and macromolecular complexes."
  },
  {
    id: 47,
    question: "In the Gram stain, Gram-positive bacteria retain the crystal violet-iodine complex after alcohol decolourisation because they",
    options: ["Have an outer membrane rich in lipopolysaccharide", "Have a thick, highly cross-linked peptidoglycan layer that dehydrates and traps the dye complex", "Lack a cell wall", "Contain mycolic acid"],
    answer: 1,
    explanation: "Alcohol dehydrates the thick peptidoglycan and shrinks its pores, trapping the crystal violet-iodine complex, so Gram-positive cells stay purple. Gram-negative cells have thin peptidoglycan and an outer membrane, lose the dye, and take up the safranin counterstain (pink). Mycolic acid is the basis of acid-fast staining."
  },
  {
    id: 48,
    question: "In the Christmas tree stain used for identifying spermatozoa in vaginal smears, the components and the colours they give are",
    options: ["Haematoxylin stains heads blue and eosin stains tails pink", "Crystal violet stains heads purple and safranin stains tails red", "Methylene blue stains heads blue and carbol fuchsin stains tails red", "Nuclear fast red stains sperm heads red and picroindigocarmine stains tails and necks green"],
    answer: 3,
    explanation: "Nuclear fast red (Kernechtrot) stains the sperm head red, often with a paler acrosome, and picroindigocarmine stains the neck and tail blue-green. The colour contrast makes sperm easy to see among epithelial cells."
  },
  {
    id: 49,
    question: "In haematoxylin and eosin (H&E) staining of tissue sections, nuclei stain blue-purple because",
    options: ["Haematoxylin, used with a metallic mordant, behaves as a basic dye and binds the acidic nucleic acids", "Eosin is a basic dye attracted to DNA", "Nuclei are rich in glycogen", "Nuclei are rich in lipids that dissolve the dye"],
    answer: 0,
    explanation: "Haematoxylin combined with an aluminium mordant (haemalum) is cationic and binds the phosphate groups of nucleic acids, so it is basophilic. Eosin is an acidic (anionic) dye that stains basic proteins of the cytoplasm and collagen pink."
  },
  {
    id: 50,
    question: "Staining a smear from a suspected vaginal swab with Lugol's iodine colours mature vaginal epithelial cells dark brown because they are rich in",
    options: ["Keratin", "Mucin", "Glycogen", "Lipid"],
    answer: 2,
    explanation: "The superficial and intermediate cells of the vaginal epithelium contain abundant glycogen under oestrogen influence, which takes up iodine and stains brown. This can suggest a vaginal origin, but the result varies with age and hormonal status, so it is not conclusive."
  }
];

export default questions;

const questions = [
  {
    id: 1,
    question: "Who coined the term \"Artificial Intelligence\" in the proposal for the 1956 Dartmouth Conference, often called the birth of AI as a field?",
    options: ["Alan Turing", "Marvin Minsky", "John McCarthy", "Geoffrey Hinton"],
    answer: 2,
    explanation: "John McCarthy coined \"Artificial Intelligence\" for the 1956 Dartmouth Summer Research Project, which he organised with Minsky, Rochester and Shannon. He also created the LISP language. Alan Turing proposed the \"imitation game\" (Turing Test) in 1950."
  },
  {
    id: 2,
    question: "The Turing Test, proposed by Alan Turing in 1950, judges whether a machine:",
    options: ["can solve mathematical problems faster than humans", "can hold a conversation in which a human judge cannot reliably tell it from a human", "has consciousness and emotions", "can pass a standardised IQ test"],
    answer: 1,
    explanation: "In the imitation game, an interrogator converses by text with a hidden human and a hidden machine. If the judge cannot reliably tell which is which, the machine is said to show intelligent behaviour. Turing described it in \"Computing Machinery and Intelligence\" (1950). The test looks only at behaviour, not at consciousness."
  },
  {
    id: 3,
    question: "A facial recognition system that can only match faces and cannot do any other task is an example of:",
    options: ["Artificial General Intelligence (AGI)", "Self-aware AI", "Artificial Super Intelligence (ASI)", "Artificial Narrow Intelligence (ANI)"],
    answer: 3,
    explanation: "Narrow (weak) AI is built for a specific task, such as face matching, speech recognition or spam filtering. All AI in practical use today is narrow AI. AGI would match humans across all intellectual tasks and ASI would exceed them; both remain hypothetical."
  },
  {
    id: 4,
    question: "A model is trained on thousands of fingerprint images, each labelled with the correct pattern type (loop, whorl or arch), so it can classify new prints. This is:",
    options: ["Unsupervised learning", "Reinforcement learning", "Supervised learning", "Clustering"],
    answer: 2,
    explanation: "Supervised learning uses labelled input–output pairs to learn a mapping. Predicting a category, as here, is classification; predicting a continuous value is regression. Unsupervised learning uses unlabelled data to find structure, and reinforcement learning learns from rewards."
  },
  {
    id: 5,
    question: "An analyst groups thousands of unlabelled seized drug samples into clusters by their chemical profiles, without knowing the categories beforehand. Which technique is suitable?",
    options: ["k-means clustering", "Linear regression", "Logistic regression", "Decision tree classification"],
    answer: 0,
    explanation: "k-means is an unsupervised algorithm that splits data into k clusters by distance to cluster centroids. Linear regression, logistic regression and decision-tree classification are supervised methods that need labelled data. Clustering of chemical profiles is used in drug intelligence to link seizures to a common source."
  },
  {
    id: 6,
    question: "In reinforcement learning, how does an agent learn?",
    options: ["From a large set of labelled examples", "By trial and error, receiving rewards or penalties from its environment", "By grouping similar data points", "By copying the weights of a pre-trained model"],
    answer: 1,
    explanation: "A reinforcement-learning agent takes actions in an environment and gets rewards or penalties, learning a policy that maximises cumulative reward. DeepMind's AlphaGo combined it with deep neural networks. It is used in robotics, game-playing and resource optimisation."
  },
  {
    id: 7,
    question: "Principal Component Analysis (PCA) is mainly used in machine learning for:",
    options: ["Reward maximisation", "Image generation", "Dimensionality reduction", "Encrypting datasets"],
    answer: 2,
    explanation: "PCA is an unsupervised technique that turns many correlated variables into a few uncorrelated principal components that keep most of the variance. It is widely used in chemometrics, for example to discriminate spectra of inks, glass or soil in forensic work. It makes data easier to visualise and model."
  },
  {
    id: 8,
    question: "A model gives 99% accuracy on its training data but only 60% on new test data. This problem is called:",
    options: ["Underfitting", "Normalisation", "Data augmentation", "Overfitting"],
    answer: 3,
    explanation: "Overfitting means the model has memorised noise and details of the training data and fails to generalise. Remedies include more training data, regularisation, dropout, cross-validation and simpler models. Underfitting is the opposite case, where the model performs poorly even on training data."
  },
  {
    id: 9,
    question: "A classifier to detect forged signatures is tested on 100 forged samples. It flags 80 of them correctly (true positives) and misses 20 (false negatives). It also wrongly flags 20 genuine signatures as forged (false positives). What is its precision?",
    options: ["0.50", "0.90", "0.75", "0.80"],
    answer: 3,
    explanation: "Precision = TP / (TP + FP) = 80 / (80 + 20) = 0.80. Recall (sensitivity) = TP / (TP + FN) = 80 / (80 + 20) = 0.80 here as well. Precision tells how many flagged items are truly positive, which matters when false accusations are costly."
  },
  {
    id: 10,
    question: "A DNA-database screening model correctly identifies 45 of 60 true matches and misses 15. What is its recall (sensitivity)?",
    options: ["0.75", "0.60", "0.25", "0.45"],
    answer: 0,
    explanation: "Recall = TP / (TP + FN) = 45 / (45 + 15) = 45/60 = 0.75. Recall is the share of actual positives that the model finds. High recall matters when missing a true match is costly, though it usually comes at some cost in precision."
  },
  {
    id: 11,
    question: "Random Forest, a popular machine-learning algorithm, works by:",
    options: ["running one very deep decision tree", "combining the votes of many decision trees, each trained on a random sample of data and features", "clustering data into k groups", "using a single perceptron with a sigmoid output"],
    answer: 1,
    explanation: "A random forest is an ensemble (bagging) method. Each tree learns from a bootstrap sample and a random subset of features, and the forest takes the majority vote (classification) or average (regression). This cuts the overfitting that single decision trees are prone to."
  },
  {
    id: 12,
    question: "The perceptron, the earliest model of an artificial neuron that learns its weights from data, was introduced in 1958 by:",
    options: ["Yann LeCun", "Frank Rosenblatt", "Warren McCulloch", "Andrew Ng"],
    answer: 1,
    explanation: "Frank Rosenblatt built the perceptron in 1958, a single-layer network that adjusts weights to separate two classes. McCulloch and Pitts had described a mathematical neuron in 1943 but without learning. Minsky and Papert later showed that a single perceptron cannot solve XOR, which multilayer networks overcame."
  },
  {
    id: 13,
    question: "Which algorithm trains multilayer neural networks by propagating the output error backwards and adjusting weights using gradient descent?",
    options: ["k-nearest neighbours", "Breadth-first search", "Apriori", "Backpropagation"],
    answer: 3,
    explanation: "Backpropagation uses the chain rule to compute the gradient of the loss with respect to every weight, and gradient descent then updates the weights to reduce the error. Rumelhart, Hinton and Williams popularised it in 1986. It underlies nearly all deep-learning training today."
  },
  {
    id: 14,
    question: "The ReLU activation function, widely used in deep neural networks, outputs:",
    options: ["the input if it is positive and zero otherwise", "a value between 0 and 1 for any input", "a value between −1 and +1", "always 1 for positive inputs and −1 for negative inputs"],
    answer: 0,
    explanation: "ReLU (Rectified Linear Unit) is f(x) = max(0, x). It is cheap to compute and reduces the vanishing-gradient problem in deep networks. The sigmoid gives outputs between 0 and 1, tanh between −1 and +1, and the sign function gives ±1."
  },
  {
    id: 15,
    question: "Which deep-learning architecture, built from convolution and pooling layers, is best suited to image tasks such as recognising faces in CCTV frames or classifying fingerprint patterns?",
    options: ["Recurrent Neural Network (RNN)", "Naive Bayes classifier", "Autoencoder for text", "Convolutional Neural Network (CNN)"],
    answer: 3,
    explanation: "CNNs use convolution filters to pick up spatial features such as edges, ridges and textures, and pooling layers reduce dimensions. This makes them the standard for image recognition and the basis of most face, fingerprint and handwriting recognition systems. RNNs are built for sequences such as speech and text."
  },
  {
    id: 16,
    question: "Long Short-Term Memory (LSTM) networks were designed to overcome which problem of simple recurrent neural networks?",
    options: ["Overfitting on images", "Inability to work with labelled data", "High memory use of convolution filters", "Vanishing gradients when learning long-range dependencies in sequences"],
    answer: 3,
    explanation: "In simple RNNs, gradients shrink exponentially over long sequences, so they forget distant context. LSTMs (Hochreiter and Schmidhuber, 1997) add input, forget and output gates and a memory cell to keep information over long spans. They were widely used for speech and language before transformers."
  },
  {
    id: 17,
    question: "The Transformer architecture, the basis of modern large language models, was introduced in the 2017 paper \"Attention Is All You Need\". Its key mechanism is:",
    options: ["Convolution", "Max pooling", "Self-attention", "Recurrent loops"],
    answer: 2,
    explanation: "Self-attention lets each token weigh its relationship with every other token in the input at once, which allows parallel training and captures long-range context. Transformers (Vaswani et al., Google, 2017) dropped recurrence altogether. GPT, BERT and most current LLMs are transformer-based."
  },
  {
    id: 18,
    question: "In the abbreviation GPT, used for a family of large language models, what does the letter \"P\" stand for?",
    options: ["Programmed", "Pre-trained", "Predictive", "Parallel"],
    answer: 1,
    explanation: "GPT stands for Generative Pre-trained Transformer. The model is first pre-trained on a very large text corpus to predict the next token, then fine-tuned, often with reinforcement learning from human feedback (RLHF). OpenAI's ChatGPT, released in November 2022, is built on GPT models."
  },
  {
    id: 19,
    question: "A large language model confidently cites a court judgment that does not exist. This failure is commonly called:",
    options: ["Overfitting", "Tokenisation", "Hallucination", "Fine-tuning"],
    answer: 2,
    explanation: "Hallucination is when a generative AI model produces fluent but false or made-up content, such as fake citations or facts. It happens because LLMs generate statistically likely text and do not look up verified facts. Courts and investigators must check AI-generated material against primary sources before relying on it."
  },
  {
    id: 20,
    question: "Which technique reduces LLM hallucination by first fetching relevant passages from a trusted document store and then giving them to the model along with the user's question?",
    options: ["Dropout", "Retrieval-Augmented Generation (RAG)", "Gradient boosting", "Data augmentation"],
    answer: 1,
    explanation: "RAG combines a retriever (search over a vector database or document index) with a generator (the LLM), so answers are grounded in supplied sources that can be cited. It is popular for chatbots over legal texts, SOPs or case files. It avoids retraining the model whenever the documents change."
  },
  {
    id: 21,
    question: "Generative Adversarial Networks (GANs), which are behind many deepfake images and videos, consist of which two competing networks?",
    options: ["Generator and discriminator", "Encoder and decoder", "Actor and critic", "Teacher and student"],
    answer: 0,
    explanation: "In a GAN (Ian Goodfellow, 2014), the generator creates synthetic samples and the discriminator tries to tell them from real ones. Both improve until the fakes become very realistic. Deepfake detection in forensic labs looks for artefacts such as unnatural blinking, lighting mismatches and frequency-domain traces."
  },
  {
    id: 22,
    question: "Popular text-to-image generators such as Stable Diffusion create images by:",
    options: ["Searching the internet for matching photos", "Running a decision tree over pixel values", "Stitching together parts of stored images", "Starting from random noise and removing it step by step under the guidance of the text prompt"],
    answer: 3,
    explanation: "Diffusion models learn to reverse a process that gradually adds noise to images. To generate, they start from pure noise and denoise it over many steps, guided by a text embedding of the prompt. They have largely replaced GANs for high-quality image generation."
  },
  {
    id: 23,
    question: "Which of the following is NOT one of the five essential characteristics of cloud computing in the NIST definition?",
    options: ["On-demand self-service", "Rapid elasticity", "Mandatory on-premises hardware ownership", "Measured service"],
    answer: 2,
    explanation: "NIST (SP 800-145) lists five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service. Owning hardware on-premises is the opposite of the cloud model, where providers own the infrastructure and users pay for what they use."
  },
  {
    id: 24,
    question: "A state forensic laboratory rents virtual machines, storage and networking from a cloud provider and installs and manages its own operating system and software on them. Which service model is this?",
    options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
    answer: 0,
    explanation: "In IaaS the provider supplies virtualised computing, storage and networking, and the customer manages the OS, middleware, applications and data, as with AWS EC2 or Azure Virtual Machines. In PaaS the provider also manages the OS and runtime. In SaaS the customer just uses a finished application."
  },
  {
    id: 25,
    question: "Gmail, Microsoft 365 web apps and online accounting software used directly through a browser are examples of which cloud service model?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS (Data as a Service)"],
    answer: 0,
    explanation: "Software as a Service delivers complete applications over the internet. The provider manages everything from infrastructure to the application, and users only configure and use it. Subscription billing and access from any device are typical of SaaS."
  },
  {
    id: 26,
    question: "A developer deploys code on a platform that automatically provides the runtime, OS and scaling, such as Google App Engine or Heroku, without managing servers. Which model is this?",
    options: ["IaaS", "On-premises hosting", "SaaS", "PaaS"],
    answer: 3,
    explanation: "Platform as a Service provides a managed development and deployment environment (runtime, middleware, OS, database services), so developers manage only their code and data. It sits between IaaS, where you manage more, and SaaS, where you manage the least."
  },
  {
    id: 27,
    question: "A government department keeps sensitive case data in its own private cloud but uses a public cloud for its citizen-facing website during peak demand. Which deployment model is this?",
    options: ["Public cloud", "Community cloud", "Private cloud", "Hybrid cloud"],
    answer: 3,
    explanation: "A hybrid cloud combines private and public clouds with data and applications able to move between them, for example by \"cloud bursting\" to public capacity at peak times. A community cloud is shared by organisations with common concerns, such as several government agencies. India's government cloud initiative is called MeghRaj."
  },
  {
    id: 28,
    question: "Which software layer lets several virtual machines share one physical server by abstracting its CPU, memory and storage, a core technology of cloud computing?",
    options: ["BIOS", "Compiler", "Hypervisor", "Load balancer"],
    answer: 2,
    explanation: "A hypervisor (virtual machine monitor) creates and runs virtual machines. Type 1 (bare-metal) hypervisors such as VMware ESXi and Microsoft Hyper-V run directly on the hardware, while Type 2 (hosted) ones such as VirtualBox run on a host OS. Virtualisation makes cloud resource pooling and elasticity possible."
  },
  {
    id: 29,
    question: "Processing data from CCTV cameras and sensors close to where it is generated, instead of sending it all to a distant cloud data centre, mainly to cut latency, is called:",
    options: ["Edge computing", "Grid computing", "Mainframe computing", "Quantum computing"],
    answer: 0,
    explanation: "Edge computing places computation near the data source, on devices, gateways or local micro data centres. This lowers latency and bandwidth use, which suits real-time video analytics, autonomous vehicles and industrial IoT. Cloud and edge are usually used together."
  },
  {
    id: 30,
    question: "Big data is often described by \"V\" characteristics. Which V refers to the trustworthiness and accuracy of the data?",
    options: ["Volume", "Veracity", "Velocity", "Variety"],
    answer: 1,
    explanation: "Veracity is about the quality, reliability and uncertainty of data. Volume is the scale of data, velocity the speed at which it is produced and processed, variety the mix of structured, semi-structured and unstructured formats, and value the useful insight gained. Veracity matters most when data is used as evidence."
  },
  {
    id: 31,
    question: "In the Apache Hadoop framework for big data, which component stores data in blocks spread across a cluster of machines?",
    options: ["HDFS (Hadoop Distributed File System)", "MapReduce", "YARN", "Hive"],
    answer: 0,
    explanation: "HDFS splits files into large blocks and replicates each block (three copies by default) across nodes for fault tolerance. MapReduce is the processing model, YARN manages cluster resources, and Hive offers SQL-like querying. Apache Spark is a faster, in-memory alternative to MapReduce."
  },
  {
    id: 32,
    question: "Which statement best distinguishes a data lake from a data warehouse?",
    options: ["A data lake stores raw data of all types and applies a schema only when the data is read; a warehouse stores cleaned, structured data with a schema defined before loading", "A data lake stores only structured relational tables; a warehouse stores only images", "A data lake is always on-premises; a warehouse is always on the cloud", "There is no difference; the two terms mean the same thing"],
    answer: 0,
    explanation: "Data lakes use \"schema-on-read\" and hold raw structured, semi-structured and unstructured data, which suits data science and machine learning. Data warehouses use \"schema-on-write\" and hold curated, structured data for reporting and business intelligence. Many organisations now combine both in a \"lakehouse\"."
  },
  {
    id: 33,
    question: "The post-mortem intervals (in hours) estimated for seven cases are 12, 18, 9, 30, 15, 21 and 60. What is the median?",
    options: ["15", "18", "23.6", "21"],
    answer: 1,
    explanation: "Arranged in order the values are 9, 12, 15, 18, 21, 30, 60, so the middle (4th) value, the median, is 18. The mean is 165/7 ≈ 23.6, pulled up by the outlier 60. The median is less affected by extreme values and is the better summary for skewed data."
  },
  {
    id: 34,
    question: "A data scientist finds a strong positive correlation between ice-cream sales and drowning deaths in a city. The most appropriate conclusion is:",
    options: ["Ice-cream consumption causes drowning", "Correlation does not prove causation; a third factor such as hot weather may drive both", "Drowning deaths cause ice-cream sales to rise", "The data must be wrong because the variables are unrelated"],
    answer: 1,
    explanation: "Correlation measures association, not cause and effect. Here a confounding variable, summer heat, raises both swimming (and so drowning) and ice-cream sales. Proving causation needs controlled studies or causal analysis, a key point when statistical evidence is presented in court."
  },
  {
    id: 35,
    question: "Who is credited with coining the term \"Internet of Things\" in 1999?",
    options: ["Tim Berners-Lee", "Mark Weiser", "Vint Cerf", "Kevin Ashton"],
    answer: 3,
    explanation: "Kevin Ashton used the phrase \"Internet of Things\" in 1999 at Procter & Gamble while describing RFID-based supply chains, and later co-founded MIT's Auto-ID Center. Tim Berners-Lee invented the World Wide Web and Vint Cerf co-designed TCP/IP. Mark Weiser coined \"ubiquitous computing\"."
  },
  {
    id: 36,
    question: "In the basic three-layer IoT architecture, which layer contains the sensors and actuators that sense the physical environment?",
    options: ["Perception layer", "Network layer", "Application layer", "Session layer"],
    answer: 0,
    explanation: "The perception (sensing) layer includes sensors, RFID tags, cameras and actuators that collect data or act on the environment. The network layer sends the data through gateways, Wi-Fi, cellular or LPWAN links, and the application layer delivers services such as smart-city dashboards. Some models add processing (middleware) and business layers."
  },
  {
    id: 37,
    question: "Which lightweight publish–subscribe messaging protocol, which uses a central broker, is widely used for IoT devices with limited bandwidth and power?",
    options: ["SMTP", "FTP", "MQTT", "HTTP/2"],
    answer: 2,
    explanation: "MQTT (Message Queuing Telemetry Transport) lets devices publish messages to topics on a broker, which forwards them to subscribers. It has very small packet overhead and so suits constrained devices and unreliable networks. CoAP is another lightweight IoT protocol, built on UDP."
  },
  {
    id: 38,
    question: "A smart-agriculture project in rural MP needs soil-moisture sensors spread over several kilometres to send small amounts of data for years on battery power. Which wireless technology is most suitable?",
    options: ["Bluetooth Classic", "Wi-Fi 6", "NFC", "LoRaWAN"],
    answer: 3,
    explanation: "LoRaWAN is a Low-Power Wide-Area Network technology with a range of several kilometres in rural areas and very low power use, suited to small, infrequent sensor readings. Bluetooth and NFC are short-range, and Wi-Fi uses too much power and has limited range. NB-IoT is a cellular alternative."
  },
  {
    id: 39,
    question: "The 2016 Mirai botnet, which caused massive DDoS attacks, spread mainly by infecting which kind of devices?",
    options: ["Mainframe computers", "IoT devices such as IP cameras and home routers with default passwords", "Smartphones through app stores", "Air-gapped military systems"],
    answer: 1,
    explanation: "Mirai scanned the internet for IoT devices still using factory-default usernames and passwords, turned them into a botnet and launched record-sized DDoS attacks, including one on Dyn DNS in October 2016. It showed why changing default credentials, updating firmware and segmenting networks matter."
  },
  {
    id: 40,
    question: "The IndiaAI Mission, approved by the Union Cabinet in March 2024, has an outlay of about how much over five years?",
    options: ["₹1,037 crore", "₹25,000 crore", "₹10,372 crore", "₹76,000 crore"],
    answer: 2,
    explanation: "The IndiaAI Mission has an outlay of ₹10,371.92 crore over five years and is run by the IndiaAI Independent Business Division under MeitY. Compute capacity is its largest component. ₹76,000 crore is the outlay of the India Semiconductor Mission."
  },
  {
    id: 41,
    question: "AIKosh, launched under the IndiaAI Mission, is:",
    options: ["an AI-based tax-filing portal", "a GPU supercomputer at IIT Madras", "a law regulating AI in India", "India's national platform giving access to datasets and AI models"],
    answer: 3,
    explanation: "AIKosh is the IndiaAI Datasets Platform, a national repository of datasets, AI models and tools for researchers and startups. It is one of the seven pillars of the IndiaAI Mission, alongside compute, foundation models, FutureSkills, startup financing, applications and Safe & Trusted AI."
  },
  {
    id: 42,
    question: "Under the IndiaAI Compute pillar, the government offers shared access to GPUs at subsidised rates. According to MeitY's December 2025 fact sheet, about how many GPUs had been deployed?",
    options: ["About 3,800", "About 38,000", "About 3.8 lakh", "About 380"],
    answer: 1,
    explanation: "MeitY's December 2025 fact sheet put deployed GPUs at about 38,000, far above the original target of 10,000 or more. Startups, researchers and government users can rent this compute through a common portal at subsidised hourly rates. Access to compute is one of the main barriers to building Indian foundation models."
  },
  {
    id: 43,
    question: "The India AI Governance Guidelines released by MeitY in November 2025 set out seven guiding principles (\"sutras\"). Which of the following is one of them?",
    options: ["Mandatory licensing of all AI models", "Regulation before Innovation", "Innovation over Restraint", "Government ownership of all AI datasets"],
    answer: 2,
    explanation: "The sutras include Trust, People First, Innovation over Restraint, Fairness & Equity, Accountability, Understandable by Design, and Safety, Resilience & Sustainability. The guidelines prefer applying existing laws and sector regulators to a new AI-specific law, and suggest institutions such as an AI Governance Group. They were released ahead of the February 2026 AI Impact Summit."
  },
  {
    id: 44,
    question: "BHASHINI, an AI initiative of the Government of India, is mainly meant to:",
    options: ["detect tax evasion with machine learning", "provide AI-based translation and speech services across Indian languages", "run autonomous vehicles on highways", "monitor weather using satellites"],
    answer: 1,
    explanation: "BHASHINI (BHASHa INterface for India), under the National Language Translation Mission of MeitY, offers open AI models and APIs for machine translation, speech recognition and text-to-speech in Indian languages. It aims to make digital services accessible in all scheduled languages and has been used for real-time translation at government events."
  },
  {
    id: 45,
    question: "In February 2025, ahead of the Global Investors Summit in Bhopal, the Madhya Pradesh cabinet approved policies to attract technology investment. Which pair of policies was approved at that meeting?",
    options: ["Cryptocurrency Policy and Blockchain Act", "Nuclear Energy Policy and Space Act", "Semiconductor Policy 2025 and Drone Promotion and Usage Policy 2025", "Telecom Licensing Policy and Satellite Policy"],
    answer: 2,
    explanation: "On 4 February 2025 the MP cabinet approved the MP Semiconductor Policy 2025, with capital and interest subsidies and concessional land and power, and the MP Drone Promotion and Usage Policy 2025, covering drone use in agriculture, infrastructure, disaster management and public safety. A GCC (Global Capability Centre) policy and an AVGC-XR policy were also brought out in 2025."
  },
  {
    id: 46,
    question: "Which Madhya Pradesh city is the state's main IT hub, with the Super Corridor and Crystal IT Park that host major IT and technology companies?",
    options: ["Indore", "Gwalior", "Rewa", "Sagar"],
    answer: 0,
    explanation: "Indore is MP's leading IT and startup hub, with the Super Corridor, Crystal IT Park, an IIT and an IIM. TCS and Infosys have campuses on the Super Corridor. State IT promotion is handled by MPSEDC (Madhya Pradesh State Electronics Development Corporation)."
  },
  {
    id: 47,
    question: "NAFIS (National Automated Fingerprint Identification System), run by NCRB, gives each arrested person a unique number based on fingerprints. How many digits does this National Fingerprint Number (NFN) have?",
    options: ["8", "10", "12", "16"],
    answer: 1,
    explanation: "NAFIS, launched by NCRB in 2022, is a central searchable database of criminal fingerprints. It assigns a unique 10-digit NFN to each arrested person, which stays the same across later arrests. It uses automated image processing and minutiae-matching algorithms, and states upload prints from police stations and fingerprint bureaux."
  },
  {
    id: 48,
    question: "A forensic lab uses a deep-learning tool to suggest suspects from CCTV images, but the defence argues that the tool's reasoning cannot be explained. This concern is best described as the problem of:",
    options: ["Black-box models and lack of explainability", "Data veracity", "Edge latency", "Low recall"],
    answer: 0,
    explanation: "Many deep-learning models are \"black boxes\" whose internal reasoning is hard to interpret. In court, the expert must be able to explain the method, its error rates and its limits. Explainable AI (XAI) methods such as saliency maps and SHAP values, together with human verification and documented validation, address this."
  },
  {
    id: 49,
    question: "A facial recognition system used by police is found to make far more false matches for one demographic group because that group was under-represented in its training data. This is an example of:",
    options: ["Algorithmic (training-data) bias", "Reinforcement learning", "Overclocking", "Data compression loss"],
    answer: 0,
    explanation: "When training data under-represents some groups, models can show unequal error rates, which is algorithmic bias. In forensic use this can lead to wrongful suspicion. Diverse training data, bias testing, careful choice of match thresholds and human review of every AI match are standard safeguards, in line with the \"Fairness & Equity\" principle of India's AI governance guidelines."
  },
  {
    id: 50,
    question: "Which application of AI is most directly used to verify whether an audio clip of a person's voice submitted as evidence is genuine or synthetically cloned?",
    options: ["Recommender systems", "Optical character recognition", "Speaker verification and audio deepfake detection", "k-means clustering of e-mail addresses"],
    answer: 2,
    explanation: "Speaker recognition models compare voice biometrics (spectral features and speaker embeddings) with reference samples, and anti-spoofing models detect artefacts of text-to-speech or voice-conversion synthesis. These tools support, but do not replace, the examiner's auditory and spectrographic analysis. OCR converts images of text into machine-readable text."
  }
];

export default questions;

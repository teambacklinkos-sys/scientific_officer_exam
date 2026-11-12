const questions = [
  {
    id: 1,
    question: "Which electronic component was the main switching and processing element of first-generation computers such as ENIAC and UNIVAC?",
    options: ["Transistors", "Integrated circuits", "Vacuum tubes", "Microprocessors"],
    answer: 2,
    explanation: "First-generation computers (about 1940–1956) used vacuum tubes, which made them huge, power-hungry and prone to overheating. Transistors defined the second generation, integrated circuits the third and microprocessors the fourth. ENIAC (1946) used about 17,000 vacuum tubes."
  },
  {
    id: 2,
    question: "The fourth generation of computers is defined by the use of microprocessors. Which was the first commercially available single-chip microprocessor (1971)?",
    options: ["Intel 8086", "Intel 4004", "Motorola 68000", "Zilog Z80"],
    answer: 1,
    explanation: "The Intel 4004 (1971) was a 4-bit processor and the first CPU on a single chip, marking the start of the fourth generation. The 8086 (1978) began the x86 family used in PCs. Fifth-generation computing is usually linked with artificial intelligence and parallel processing."
  },
  {
    id: 3,
    question: "Which unit of the CPU performs arithmetic operations and logical comparisons such as AND, OR and greater-than?",
    options: ["Arithmetic Logic Unit", "Control Unit", "Memory Address Register", "Program Counter"],
    answer: 0,
    explanation: "The Arithmetic Logic Unit (ALU) carries out arithmetic and logical operations. The Control Unit fetches and decodes instructions and directs the other units, while the Program Counter holds the address of the next instruction. Together with registers these make up the CPU."
  },
  {
    id: 4,
    question: "Which type of memory is volatile, meaning its contents are lost when power is switched off?",
    options: ["ROM", "EEPROM", "Flash memory", "RAM"],
    answer: 3,
    explanation: "RAM (Random Access Memory) is volatile working memory that holds running programs and data. ROM, EEPROM and flash memory keep data without power. That is why a seized computer should, where possible, be examined live before shutdown, since RAM may hold passwords, encryption keys and running processes."
  },
  {
    id: 5,
    question: "Cache memory is placed between which two components to speed up processing?",
    options: ["Hard disk and RAM", "RAM and the optical drive", "CPU and main memory (RAM)", "Keyboard and CPU"],
    answer: 2,
    explanation: "Cache is a small, very fast SRAM memory between the CPU and main memory that holds frequently used instructions and data. It is arranged in levels (L1, L2, L3), with L1 the smallest and fastest. It reduces the time the CPU waits for data from slower DRAM."
  },
  {
    id: 6,
    question: "How many bits make up one nibble?",
    options: ["2", "8", "4", "16"],
    answer: 2,
    explanation: "A nibble is 4 bits, or half a byte, and one byte is 8 bits. A single hexadecimal digit (0–F) represents exactly one nibble, so one byte is written as two hex digits."
  },
  {
    id: 7,
    question: "A forensic image of a seized hard disk is 2 GB in size. Using binary prefixes, what is this size in megabytes?",
    options: ["2,000 MB", "2,048 MB", "1,024 MB", "20,480 MB"],
    answer: 1,
    explanation: "In binary units 1 GB = 1,024 MB, so 2 GB = 2 × 1,024 = 2,048 MB. The order is bit < byte < KB < MB < GB < TB < PB, each step a factor of 1,024. Disk makers often use decimal units (1 GB = 1,000 MB), which is why the capacity shown by the operating system looks smaller."
  },
  {
    id: 8,
    question: "What is the decimal equivalent of the binary number 101101?",
    options: ["37", "43", "53", "45"],
    answer: 3,
    explanation: "101101 = 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45. Each binary place value is a power of 2, rising from the right. In hexadecimal, 45 is written as 2D."
  },
  {
    id: 9,
    question: "When a computer is switched on, which firmware routine first checks hardware such as RAM, keyboard and disk before loading the operating system?",
    options: ["Device driver", "Disk defragmenter", "POST (Power-On Self Test) run by BIOS/UEFI", "Task Scheduler"],
    answer: 2,
    explanation: "The BIOS or UEFI firmware, stored in non-volatile memory on the motherboard, runs the Power-On Self Test and then hands control to the bootloader. This start-up process is called booting. UEFI has largely replaced legacy BIOS and supports Secure Boot."
  },
  {
    id: 10,
    question: "Which part of an operating system stays resident in memory and directly manages the CPU, memory and devices?",
    options: ["Shell", "Kernel", "Compiler", "File Explorer"],
    answer: 1,
    explanation: "The kernel is the core of the OS. It handles process scheduling, memory management, device drivers and system calls. The shell is the command interface through which users talk to the kernel, and a compiler is an application program that translates source code."
  },
  {
    id: 11,
    question: "The Android operating system used in most smartphones is built on which kernel?",
    options: ["Windows NT kernel", "MS-DOS kernel", "XNU (Darwin) kernel", "Linux kernel"],
    answer: 3,
    explanation: "Android uses a modified Linux kernel, the open-source kernel Linus Torvalds released in 1991. Apple's iOS and macOS use the XNU kernel of Darwin. This is why mobile forensic tools for Android often work with Linux-style file systems such as ext4."
  },
  {
    id: 12,
    question: "An operating system lets a user run a browser, a music player and a word processor at the same time by quickly switching the CPU between them. This is called:",
    options: ["Batch processing", "Multitasking", "Spooling", "Booting"],
    answer: 1,
    explanation: "Multitasking runs several processes at once by time-sharing the CPU, so they seem to run simultaneously. Batch processing runs jobs one after another without user interaction. Spooling queues output, such as print jobs, for a slower device."
  },
  {
    id: 13,
    question: "A network that links computers within a single forensic laboratory building is best classified as a:",
    options: ["LAN", "MAN", "WAN", "PAN"],
    answer: 0,
    explanation: "A Local Area Network (LAN) covers a small area such as a building or campus, usually over Ethernet or Wi-Fi. A MAN covers a city and a WAN spans large distances, the Internet being the largest WAN. A PAN, such as Bluetooth, links devices around one person."
  },
  {
    id: 14,
    question: "In which network topology are all devices connected to a single central hub or switch, so that failure of one cable affects only that device?",
    options: ["Star", "Ring", "Bus", "Mesh"],
    answer: 0,
    explanation: "In a star topology each node has its own link to a central device, so a single cable fault is isolated, but failure of the central hub stops the whole network. Bus topology uses one shared backbone cable, and ring passes data around a closed loop. Most modern Ethernet LANs are star networks."
  },
  {
    id: 15,
    question: "How many point-to-point links are needed to connect 6 computers in a full mesh topology?",
    options: ["6", "12", "30", "15"],
    answer: 3,
    explanation: "A full mesh of n devices needs n(n−1)/2 links. For n = 6 that is 6 × 5 / 2 = 15. Mesh networks are highly fault-tolerant but costly because the number of links grows rapidly with n."
  },
  {
    id: 16,
    question: "How many bits long is an IPv4 address, and how many bits long is an IPv6 address?",
    options: ["32 bits and 64 bits", "32 bits and 128 bits", "64 bits and 128 bits", "16 bits and 64 bits"],
    answer: 1,
    explanation: "IPv4 addresses are 32 bits, written as four decimal octets (e.g., 192.168.1.10), giving about 4.3 billion addresses. IPv6 addresses are 128 bits, written as eight groups of hexadecimal digits. IPv6 was introduced largely because IPv4 addresses ran out."
  },
  {
    id: 17,
    question: "What is the main function of the Domain Name System (DNS)?",
    options: ["Encrypting e-mail messages", "Translating domain names such as mppsc.mp.gov.in into IP addresses", "Assigning MAC addresses to network cards", "Blocking malicious websites automatically"],
    answer: 1,
    explanation: "DNS works like the Internet's phone book, resolving human-readable domain names into the IP addresses computers use. It normally uses port 53. DNS logs are useful in cyber investigations to show which sites a device tried to reach."
  },
  {
    id: 18,
    question: "A device receives a dynamic IP address, subnet mask and default gateway automatically when it joins a network. Which protocol does this?",
    options: ["DHCP", "DNS", "ARP", "SMTP"],
    answer: 0,
    explanation: "DHCP (Dynamic Host Configuration Protocol) leases IP configuration to clients automatically. ARP maps an IP address to a MAC address on a local network, and SMTP sends e-mail. DHCP lease logs can link an IP address to a particular device at a given time."
  },
  {
    id: 19,
    question: "Which protocol and default port are used for secure, encrypted web browsing?",
    options: ["HTTP on port 80", "Telnet on port 23", "FTP on port 21", "HTTPS on port 443"],
    answer: 3,
    explanation: "HTTPS is HTTP secured with TLS encryption and uses port 443 by default. Plain HTTP uses port 80 and sends data unencrypted. Browsers show a padlock for HTTPS sites, but the padlock only means the connection is encrypted, not that the site is genuine."
  },
  {
    id: 20,
    question: "Which protocol is used to send (push) e-mail from a client to a mail server and between mail servers?",
    options: ["POP3", "IMAP", "SNMP", "SMTP"],
    answer: 3,
    explanation: "SMTP (Simple Mail Transfer Protocol, port 25 or 587) sends and relays e-mail. POP3 (port 110) and IMAP (port 143) are used to retrieve e-mail from a server, and SNMP is for network management. E-mail headers record the SMTP relays a message passed through, which helps trace its origin."
  },
  {
    id: 21,
    question: "Which transport-layer protocol is connection-oriented and guarantees reliable, ordered delivery using acknowledgements and retransmission?",
    options: ["TCP", "UDP", "ICMP", "IP"],
    answer: 0,
    explanation: "TCP sets up a connection with a three-way handshake (SYN, SYN-ACK, ACK) and guarantees reliable, ordered delivery. UDP is connectionless and faster but unreliable, which suits live video, VoIP and DNS queries. ICMP carries error and diagnostic messages, as used by ping."
  },
  {
    id: 22,
    question: "In the seven-layer OSI model, at which layer does a router mainly operate when it forwards packets using IP addresses?",
    options: ["Data Link layer", "Transport layer", "Network layer", "Physical layer"],
    answer: 2,
    explanation: "Routers work at Layer 3 (Network layer), choosing paths between networks by IP address. Switches mainly work at Layer 2 (Data Link) using MAC addresses, and hubs work at Layer 1 (Physical). From the bottom, the OSI layers are Physical, Data Link, Network, Transport, Session, Presentation and Application."
  },
  {
    id: 23,
    question: "A MAC address, burned into a network interface card to identify it on a local network, is how many bits long?",
    options: ["32 bits", "48 bits", "64 bits", "128 bits"],
    answer: 1,
    explanation: "A MAC address is 48 bits, written as six pairs of hex digits (e.g., 00:1A:2B:3C:4D:5E). The first 24 bits identify the manufacturer (OUI). In investigations, router logs of MAC addresses can tie a particular device to a network."
  },
  {
    id: 24,
    question: "A /24 IPv4 subnet (subnet mask 255.255.255.0) can have how many usable host addresses?",
    options: ["256", "255", "128", "254"],
    answer: 3,
    explanation: "A /24 leaves 8 bits for hosts, giving 2⁸ = 256 addresses. Two are reserved, the network address (all host bits 0) and the broadcast address (all host bits 1), so 256 − 2 = 254 addresses are usable."
  },
  {
    id: 25,
    question: "An employee of a government office receives an e-mail that looks like it is from her bank, asking her to click a link and \"re-verify\" her net-banking password. This attack is called:",
    options: ["SQL injection", "Denial of service", "Phishing", "Brute-force attack"],
    answer: 2,
    explanation: "Phishing uses fake e-mails or websites that pose as a trusted organisation to steal credentials. Done by SMS it is called smishing, and by voice call vishing. Banks never ask for passwords by e-mail, and such incidents can be reported on cybercrime.gov.in or the 1930 helpline."
  },
  {
    id: 26,
    question: "Malware encrypts all files on a district hospital's computers and shows a note demanding cryptocurrency for the decryption key. What type of malware is this?",
    options: ["Adware", "Rootkit", "Spyware", "Ransomware"],
    answer: 3,
    explanation: "Ransomware encrypts or locks data and demands a ransom, often in cryptocurrency. WannaCry (2017) was a major global example. Offline backups, timely patching and network segmentation are the main defences, and incidents must be reported to CERT-In."
  },
  {
    id: 27,
    question: "Which type of malicious program can copy itself and spread across a network on its own, without attaching to a host file or needing user action?",
    options: ["Worm", "Virus", "Trojan horse", "Keylogger"],
    answer: 0,
    explanation: "A worm replicates and spreads by itself over networks by exploiting vulnerabilities. A virus must attach to a host file and usually needs the user to run it. A Trojan pretends to be useful software but carries a hidden harmful payload."
  },
  {
    id: 28,
    question: "Thousands of compromised devices flood a government website with traffic until it can no longer serve real users. This is a:",
    options: ["Distributed Denial of Service (DDoS) attack", "Man-in-the-middle attack", "Phishing attack", "Cross-site scripting attack"],
    answer: 0,
    explanation: "A DDoS attack uses many hijacked systems (a botnet) to overwhelm a target's bandwidth or resources. In a man-in-the-middle attack the attacker secretly intercepts communication between two parties. Content delivery networks and traffic filtering are common defences against DDoS."
  },
  {
    id: 29,
    question: "A cyber forensic examiner computes the SHA-256 value of a seized pen drive before and after imaging. Why?",
    options: ["To compress the data for storage", "To encrypt the evidence so that others cannot read it", "To recover deleted files", "To show that the evidence has not been altered (integrity)"],
    answer: 3,
    explanation: "A cryptographic hash such as SHA-256 or MD5 is a digital fingerprint, and changing even one bit changes the hash completely. Matching hashes of the original and the image prove integrity and support the chain of custody. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the certificate for electronic evidence includes hash values."
  },
  {
    id: 30,
    question: "In public-key (asymmetric) cryptography, a sender digitally signs a document using which key?",
    options: ["The receiver's public key", "A shared secret session key", "The receiver's private key", "The sender's private key"],
    answer: 3,
    explanation: "A digital signature is created with the signer's private key and checked by anyone with the signer's public key, which provides authentication and non-repudiation. To keep a message confidential, it is encrypted with the receiver's public key instead. Digital signatures are legally recognised under the IT Act, 2000."
  },
  {
    id: 31,
    question: "Which security device or software inspects incoming and outgoing network traffic and allows or blocks it according to predefined rules?",
    options: ["Modem", "Proxy cache", "Firewall", "Repeater"],
    answer: 2,
    explanation: "A firewall, in hardware or software, filters traffic using rules on IP addresses, ports and protocols, separating trusted from untrusted networks. A modem converts signals for transmission and a repeater regenerates weak signals. Firewall logs are an important source of evidence in intrusion cases."
  },
  {
    id: 32,
    question: "Under the Information Technology Act, 2000, which section deals with identity theft, such as the fraudulent use of another person's password or electronic signature?",
    options: ["Section 66C", "Section 66F", "Section 67", "Section 43A"],
    answer: 0,
    explanation: "Section 66C punishes identity theft with up to 3 years' imprisonment and a fine. Section 66F covers cyber terrorism (up to life imprisonment), Section 67 covers obscene electronic material, and Section 43A covers compensation when a body corporate fails to protect data. Section 66D covers cheating by personation using computer resources."
  },
  {
    id: 33,
    question: "Section 79A of the Information Technology Act, 2000 allows the Central Government to notify agencies as:",
    options: ["Examiners of Electronic Evidence", "Certifying Authorities for digital signatures", "Cyber Appellate Tribunals", "Intermediaries"],
    answer: 0,
    explanation: "Section 79A lets the Centre notify a department, body or agency as an \"Examiner of Electronic Evidence\" to give expert opinion on electronic evidence before courts. Several government forensic laboratories have been notified under it. Courts treat the opinion of such an examiner as expert evidence."
  },
  {
    id: 34,
    question: "Which national agency, under Section 70B of the IT Act, is responsible for responding to cyber security incidents in India?",
    options: ["NCIIPC", "I4C", "CERT-In", "NIC"],
    answer: 2,
    explanation: "CERT-In (Indian Computer Emergency Response Team), under MeitY, is the national nodal agency for cyber incident response under Section 70B. NCIIPC (Section 70A) protects critical information infrastructure. I4C, under the MHA, coordinates action against cybercrime and runs cybercrime.gov.in and the 1930 helpline."
  },
  {
    id: 35,
    question: "In MS Excel, a formula in cell C1 is =A1*$B$1. If it is copied to cell C5, what will the formula become?",
    options: ["=A5*$B$5", "=A5*$B$1", "=A1*$B$1", "=A1*$B$5"],
    answer: 1,
    explanation: "A1 is a relative reference, so moving down four rows makes it A5. $B$1 is an absolute reference, fixed by the dollar signs, so it stays $B$1. Absolute references are used for constants such as a tax rate or a dilution factor kept in one cell."
  },
  {
    id: 36,
    question: "An analyst wants to count how many cells in the range B2:B200 contain the word \"Positive\". Which Excel function should be used?",
    options: ["=SUM(B2:B200,\"Positive\")", "=COUNT(B2:B200)", "=COUNTIF(B2:B200,\"Positive\")", "=VLOOKUP(\"Positive\",B2:B200)"],
    answer: 2,
    explanation: "COUNTIF(range, criteria) counts the cells that meet a condition. COUNT counts only cells with numbers, and SUM adds numbers. VLOOKUP looks up a value and returns a matching item from another column, rather than counting."
  },
  {
    id: 37,
    question: "Which feature of MS Word is used to produce many personalised letters (for example, summons notices) by combining one main document with a list of names and addresses?",
    options: ["Track Changes", "Macro", "Mail Merge", "Thesaurus"],
    answer: 2,
    explanation: "Mail Merge combines a main document with a data source, such as an Excel sheet or contact list, to generate individualised letters, labels or envelopes. Track Changes records edits for review, and a macro records a series of commands to automate them."
  },
  {
    id: 38,
    question: "In MS PowerPoint, which key starts the slide show from the first slide?",
    options: ["F5", "F1", "F7", "F12"],
    answer: 0,
    explanation: "F5 starts the slide show from the beginning, and Shift+F5 starts it from the current slide. In Office programs F1 opens Help, F7 runs the spelling check and F12 opens Save As."
  },
  {
    id: 39,
    question: "What is the default file extension of a workbook saved in MS Excel 2007 and later versions?",
    options: [".xls", ".xlsx", ".docx", ".csv"],
    answer: 1,
    explanation: "From Excel 2007 the default format is .xlsx, an XML-based Office Open XML format; the older binary format was .xls. A workbook with macros is saved as .xlsm. A .csv file is plain text with comma-separated values and keeps no formatting or formulas."
  },
  {
    id: 40,
    question: "The Digital India programme of the Government of India, aimed at transforming India into a digitally empowered society and knowledge economy, was launched on:",
    options: ["1 July 2015", "15 August 2014", "26 January 2016", "2 October 2014"],
    answer: 0,
    explanation: "Digital India was launched on 1 July 2015 with three vision areas: digital infrastructure as a core utility for every citizen, governance and services on demand, and digital empowerment of citizens. Its nine pillars include broadband highways, e-Kranti and universal access to mobile connectivity. MeitY is the nodal ministry."
  },
  {
    id: 41,
    question: "DigiLocker, the Government of India's cloud platform for issuing and verifying documents such as driving licences and mark-sheets, is run under which ministry?",
    options: ["Ministry of Electronics and Information Technology", "Ministry of Home Affairs", "Ministry of Finance", "Ministry of Law and Justice"],
    answer: 0,
    explanation: "DigiLocker is a flagship Digital India initiative of MeitY, run by the National e-Governance Division. Documents issued into DigiLocker by issuing agencies are treated as equivalent to the original physical documents under rules made under the IT Act. Users sign in using their Aadhaar-linked mobile number."
  },
  {
    id: 42,
    question: "Unified Payments Interface (UPI), India's real-time mobile payment system, was developed by which organisation?",
    options: ["Reserve Bank of India", "National Payments Corporation of India (NPCI)", "State Bank of India", "UIDAI"],
    answer: 1,
    explanation: "NPCI, set up under the guidance of RBI and the Indian Banks' Association, developed UPI and launched it in 2016. UPI uses a Virtual Payment Address (UPI ID) and runs on the IMPS infrastructure. NPCI also runs RuPay, IMPS and the Aadhaar-enabled Payment System (AePS)."
  },
  {
    id: 43,
    question: "An Aadhaar number issued by UIDAI consists of how many digits?",
    options: ["12", "10", "14", "16"],
    answer: 0,
    explanation: "Aadhaar is a 12-digit random number linked to a resident's biometric (fingerprints, iris, face photograph) and demographic data. UIDAI is a statutory body under the Aadhaar Act, 2016 and works under MeitY. The first Aadhaar numbers were issued in September 2010 at Tembhli, Maharashtra."
  },
  {
    id: 44,
    question: "CCTNS (Crime and Criminal Tracking Network and Systems), the Mission Mode Project that links police stations across India on one network for FIRs and criminal records, is implemented by:",
    options: ["Central Bureau of Investigation", "Bureau of Police Research and Development", "National Informatics Centre under MeitY", "National Crime Records Bureau under the MHA"],
    answer: 3,
    explanation: "CCTNS was approved in 2009 under the National e-Governance Plan. NCRB, under the Ministry of Home Affairs, is the central nodal agency for it. It digitises FIRs, investigation records and charge-sheets, enables online citizen services, and forms the police pillar of ICJS."
  },
  {
    id: 45,
    question: "The Inter-operable Criminal Justice System (ICJS) integrates data across the five pillars of the criminal justice system. Which set correctly lists these pillars?",
    options: ["Aadhaar, PAN, Passport, Voter ID and Driving Licence", "Police, Income Tax, Customs, Banks and Courts", "Police (CCTNS), e-Courts, e-Prisons, e-Forensics and e-Prosecution", "CBI, NIA, ED, NCB and IB"],
    answer: 2,
    explanation: "ICJS connects CCTNS (police), e-Courts, e-Prisons, e-Forensics (forensic laboratories) and e-Prosecution, so that data such as FIRs, forensic reports and court orders move electronically between them. ICJS Phase-2 was approved in 2022. e-Forensics allows FSLs to receive case details and upload reports online."
  },
  {
    id: 46,
    question: "Phase III of the e-Courts Mission Mode Project, approved by the Union Cabinet in September 2023, aims mainly at:",
    options: ["Replacing judges with AI systems", "Shifting all trials to Lok Adalats", "Moving towards digital, online and paperless courts, including digitisation of records and e-filing", "Building new court buildings only"],
    answer: 2,
    explanation: "e-Courts Phase III (outlay about ₹7,210 crore) aims at paperless courts through digitisation of case records, universal e-filing and e-payment, virtual courts and AI-assisted tools. It is run jointly by the Department of Justice and the e-Committee of the Supreme Court. The National Judicial Data Grid (NJDG) gives case-pendency data."
  },
  {
    id: 47,
    question: "MP Online, Madhya Pradesh's portal for services such as recruitment applications, university admissions and bill payments through kiosks, is a joint venture of the Government of Madhya Pradesh with which company?",
    options: ["Infosys", "Tata Consultancy Services (TCS)", "Wipro", "HCL Technologies"],
    answer: 1,
    explanation: "MPOnline Limited is a joint venture of the Government of Madhya Pradesh and TCS. It delivers government-to-citizen services through its portal and a large network of authorised kiosks. Many MP recruitment and counselling applications are submitted through MP Online."
  },
  {
    id: 48,
    question: "A citizen in Madhya Pradesh wants to register a grievance about a pending pension by calling a single state-wide number, with escalation through officer levels. Which number should she call?",
    options: ["1076", "112", "1930", "181"],
    answer: 3,
    explanation: "CM Helpline 181 is MP's grievance redressal system. Complaints are escalated level by level (L1 to L4) if not resolved in time, and departments are ranked on how they dispose of them. 1930 is the national cyber-fraud helpline and 112 is the national emergency number."
  },
  {
    id: 49,
    question: "What is the main purpose of the Samagra ID issued in Madhya Pradesh under the Samagra Samajik Suraksha Mission?",
    options: ["It serves as a voter identity card", "It gives families and their members a unique ID to deliver welfare scheme benefits through one database", "It is a tax registration number for traders", "It replaces the Aadhaar number for all purposes"],
    answer: 1,
    explanation: "Samagra creates a unified database of resident families, with a Family ID and a Member ID for each person. Departments use it to check eligibility and transfer benefits under schemes such as pensions, scholarships and Ladli Behna. It is linked to Aadhaar to remove duplicate and bogus beneficiaries."
  },
  {
    id: 50,
    question: "e-Office, adopted by government departments in MP and across India to replace physical files with electronic file movement and noting, is a product developed by:",
    options: ["C-DAC", "National Informatics Centre (NIC)", "ISRO", "NPCI"],
    answer: 1,
    explanation: "e-Office is a Mission Mode Project under the National e-Governance Plan, and the software suite was developed by NIC. Its components include e-File, Knowledge Management System, leave and tour management. It speeds up decisions, improves transparency and creates an audit trail of who handled each file."
  }
];

export default questions;

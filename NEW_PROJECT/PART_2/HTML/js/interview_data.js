// interview_data.js
const interviewQuestions = {
    cse: {
        technical: [
            {
                id: 'cse-tech-1',
                question: "Explain the difference between an abstract class and an interface in Java.",
                answer: "An abstract class can have abstract and non-abstract methods, can have constructors, and can have instance variables. A class can extend only one abstract class. An interface can only have abstract methods (Java 8+ allows default and static methods), cannot have constructors, and can only have static final variables. A class can implement multiple interfaces.",
                tags: ["Java", "OOP"]
            },
            {
                id: 'cse-tech-2',
                question: "What is a B-Tree? How is it different from a B+ Tree?",
                answer: "A B-Tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. In a B-Tree, keys and data can be stored in internal or leaf nodes. In a B+ Tree, all data pointers are stored only in leaf nodes, and leaf nodes are often linked, making sequential access faster.",
                tags: ["Data Structures", "Trees"]
            },
            {
                id: 'cse-tech-3',
                question: "Explain the concept of Virtual Memory.",
                answer: "Virtual Memory is a memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine. It maps memory addresses used by a program, called virtual addresses, into physical addresses in computer memory. Benefits include: isolation between processes, automatic allocation and management, and the ability to handle more memory than physically available through paging/swapping.",
                tags: ["Operating Systems", "Memory Management"]
            },
            {
                id: 'cse-tech-4',
                question: "What is the CAP theorem in distributed systems?",
                answer: "The CAP theorem states that a distributed system can only provide two of three guarantees simultaneously: Consistency (all nodes see the same data at the same time), Availability (every request receives a response), and Partition tolerance (the system continues to operate despite network failures). In practice, partition tolerance is necessary for distributed systems, so designers usually choose between consistency and availability.",
                tags: ["Distributed Systems", "System Design"]
            }
        ],
        hr: [
            {
                id: 'cse-hr-1',
                question: "Tell me about yourself.",
                answer: "Focus on your relevant skills, experience, and career goals that align with the job. Keep it concise (2-3 minutes). Structure: Present (your current role/studies), Past (relevant experiences), Future (career goals and why this role interests you).",
                tags: ["Introduction", "Common Questions"]
            },
            {
                id: 'cse-hr-2',
                question: "Why do you want to work for our company?",
                answer: "Research the company beforehand. Mention specific aspects that appeal to you (e.g., company culture, products, mission, growth opportunities) and how your skills align with their needs. Show genuine interest and knowledge about the company's work and values.",
                tags: ["Motivation", "Company Fit"]
            }
        ]
    },
    ece: {
        technical: [
            {
                id: 'ece-tech-1',
                question: "Explain the difference between AM and FM modulation.",
                answer: "AM (Amplitude Modulation) varies the amplitude of the carrier wave in proportion to the message signal, while the frequency remains constant. FM (Frequency Modulation) varies the frequency of the carrier wave in proportion to the message signal, while the amplitude remains constant. FM is generally more immune to noise but requires more bandwidth.",
                tags: ["Communication", "Modulation"]
            },
            {
                id: 'ece-tech-2',
                question: "What is an operational amplifier? List its ideal characteristics.",
                answer: "An operational amplifier (Op-Amp) is a high-gain voltage amplifier with differential input and usually a single-ended output. Ideal characteristics include: infinite open-loop gain, infinite input impedance, zero output impedance, infinite bandwidth, and zero offset voltage. In practice, real op-amps approximate these ideal characteristics.",
                tags: ["Analog Electronics", "Op-Amp"]
            },
            {
                id: 'ece-tech-3',
                question: "Explain the working principle of a MOSFET.",
                answer: "A MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) operates by controlling the width of a channel along which charge carriers (electrons or holes) flow. The channel's conductivity is modulated by applying a voltage to the gate terminal, which creates an electric field that either enhances or depletes the channel. This makes MOSFETs useful as switches or amplifiers in electronic circuits.",
                tags: ["Semiconductor Devices", "Electronics"]
            }
        ],
        hr: [
            {
                id: 'ece-hr-1',
                question: "Describe a challenging project you worked on.",
                answer: "Use the STAR method: Situation (context), Task (what needed to be done), Action (what you did), Result (outcome). Focus on technical challenges, problem-solving approach, and lessons learned. Emphasize teamwork if it was a group project.",
                tags: ["Project Experience", "Problem Solving"]
            },
            {
                id: 'ece-hr-2',
                question: "Where do you see yourself in 5 years?",
                answer: "Show ambition and that you've thought about your career path. Discuss technical growth, leadership aspirations, and how they align with the company's opportunities. Be realistic but ambitious.",
                tags: ["Career Goals", "Future Planning"]
            }
        ]
    },
    mechanical: {
        technical: [
            {
                id: 'mech-tech-1',
                question: "Explain the First Law of Thermodynamics.",
                answer: "The First Law of Thermodynamics states that energy cannot be created or destroyed, only converted from one form to another. In a closed system, the change in internal energy equals the heat added to the system minus the work done by the system (ΔU = Q - W). This law is essentially the principle of conservation of energy.",
                tags: ["Thermodynamics", "Energy"]
            },
            {
                id: 'mech-tech-2',
                question: "What is the difference between stress and strain?",
                answer: "Stress is the internal force per unit area that resists deformation (measured in Pascal or N/m²). Strain is the measure of deformation relative to the original dimensions (dimensionless). The relationship between stress and strain is described by Hooke's Law within the elastic limit.",
                tags: ["Strength of Materials", "Mechanics"]
            }
        ],
        hr: [
            {
                id: 'mech-hr-1',
                question: "How do you handle pressure and deadlines?",
                answer: "Discuss your time management skills, prioritization methods, and ability to stay calm under pressure. Give specific examples from academic projects or internships where you successfully managed tight deadlines.",
                tags: ["Stress Management", "Time Management"]
            }
        ]
    },
    electrical: {
        technical: [
            {
                id: 'elec-tech-1',
                question: "Explain the difference between a star and delta connection.",
                answer: "In a star (Y) connection, one end of each phase is connected to a common neutral point, while in a delta (Δ) connection, the phases are connected end to end forming a closed loop. In star, line voltage = √3 × phase voltage, line current = phase current. In delta, line current = √3 × phase current, line voltage = phase voltage.",
                tags: ["Power Systems", "Circuit Analysis"]
            },
            {
                id: 'elec-tech-2',
                question: "What is power factor correction and why is it important?",
                answer: "Power factor correction is the process of improving the power factor of an AC circuit by adding capacitive loads to counteract inductive loads. It's important because a low power factor results in higher current draw and more power losses in transmission lines, leading to increased electricity costs and reduced system efficiency.",
                tags: ["Power Systems", "Efficiency"]
            }
        ],
        hr: [
            {
                id: 'elec-hr-1',
                question: "What interests you about the power industry?",
                answer: "Focus on aspects like sustainable energy, smart grid technology, or power system optimization. Discuss how your skills and interests align with industry trends and challenges. Show awareness of current developments in the field.",
                tags: ["Industry Knowledge", "Motivation"]
            }
        ]
    },
    chemical: {
        technical: [
            {
                id: 'chem-tech-1',
                question: "Explain Raoult's Law and its limitations.",
                answer: "Raoult's Law states that the partial vapor pressure of each component in an ideal mixture is equal to the vapor pressure of the pure component multiplied by its mole fraction in the mixture. Limitations include: only applies to ideal solutions, assumes non-volatile solutes, and components that don't dissociate or associate in solution.",
                tags: ["Thermodynamics", "Phase Equilibria"]
            },
            {
                id: 'chem-tech-2',
                question: "What is the difference between a CSTR and PFR?",
                answer: "A Continuous Stirred-Tank Reactor (CSTR) assumes perfect mixing, with uniform concentration throughout. A Plug Flow Reactor (PFR) has reactants flowing in one direction with no axial mixing, creating concentration gradients along the length. PFRs generally achieve higher conversion for the same volume but are more complex to operate.",
                tags: ["Reaction Engineering", "Reactor Design"]
            }
        ],
        hr: [
            {
                id: 'chem-hr-1',
                question: "How do you ensure safety in chemical processes?",
                answer: "Discuss the importance of standard operating procedures, personal protective equipment, risk assessment, and emergency response plans. Emphasize your commitment to safety culture and continuous improvement in safety practices.",
                tags: ["Safety", "Process Management"]
            }
        ]
    },
    // Add more departments and their specific questions here
    default: { // Fallback if department not found
        technical: [
            { id: 'def-tech-1', question: "Please select a department to see relevant technical questions.", answer: "", tags: [] }
        ],
        hr: [
            { id: 'def-hr-1', question: "General HR questions will appear once a department is selected, or browse common ones here.", answer: "", tags: [] },
            { id: 'def-hr-2', question: "Tell me about yourself.", answer: "Focus on your relevant skills, experience, and career goals. Keep it concise (2-3 minutes). Structure: Present, Past, Future.", tags: ["Introduction"] },
            { id: 'def-hr-3', question: "What are your salary expectations?", answer: "Research industry standards for the role and location. You can give a range or defer the discussion until an offer is made, stating you're open to negotiation based on the full package.", tags: ["Salary"] }
        ]
    }
};
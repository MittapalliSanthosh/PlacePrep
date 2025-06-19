// chemical_data.js
const chemicalTopicsData = {
    'thermodynamics': {
        title: 'Chemical Thermodynamics',
        icon: 'fas fa-temperature-high',
        topics: [
            {
                id: 'thermo-basics',
                name: 'Basic Concepts & Laws',
                notes: '<h4>Fundamental Concepts:</h4><ul><li>System, Surroundings, and Boundaries</li><li>State Functions and Path Functions</li><li>Intensive and Extensive Properties</li></ul><h4>Laws of Thermodynamics:</h4><ul><li>Zeroth Law - Thermal Equilibrium</li><li>First Law - Energy Conservation</li><li>Second Law - Entropy</li><li>Third Law - Absolute Zero</li></ul>',
                completed: false
            },
            {
                id: 'thermo-energy',
                name: 'Energy & Enthalpy',
                notes: '<h4>Energy Types:</h4><ul><li>Internal Energy</li><li>Enthalpy of Formation</li><li>Heat of Reaction</li><li>Heat Capacity</li></ul><h4>Applications:</h4><ul><li>Energy Balances</li><li>Heat Effects in Chemical Reactions</li><li>Adiabatic Processes</li></ul>',
                completed: false
            },
            {
                id: 'thermo-equilibrium',
                name: 'Chemical Equilibrium',
                notes: '<h4>Equilibrium Concepts:</h4><ul><li>Equilibrium Constants</li><li>Le Chatelier\'s Principle</li><li>Temperature and Pressure Effects</li></ul><h4>Applications:</h4><ul><li>Reaction Yield Optimization</li><li>Process Control</li></ul>',
                completed: false
            },
            {
                id: 'thermo-phase',
                name: 'Phase Equilibria',
                notes: '<h4>Phase Rule:</h4><ul><li>Gibbs Phase Rule</li><li>Phase Diagrams</li><li>Vapor-Liquid Equilibrium (VLE)</li></ul><h4>Applications:</h4><ul><li>Distillation</li><li>Flash Calculations</li><li>Critical Point Phenomena</li></ul>',
                completed: false
            },
            {
                id: 'thermo-solution',
                name: 'Solution Thermodynamics',
                notes: '<h4>Solution Properties:</h4><ul><li>Partial Molar Properties</li><li>Activity Coefficients</li><li>Colligative Properties</li></ul><h4>Non-ideal Solutions:</h4><ul><li>Excess Properties</li><li>Activity Models</li><li>Fugacity</li></ul>',
                completed: false
            }
        ]
    },
    'transport': {
        title: 'Transport Phenomena',
        icon: 'fas fa-exchange-alt',
        topics: [
            {
                id: 'transport-fluid',
                name: 'Fluid Mechanics',
                notes: '<h4>Fluid Properties:</h4><ul><li>Viscosity and Density</li><li>Flow Patterns (Laminar/Turbulent)</li><li>Reynolds Number</li></ul><h4>Flow Analysis:</h4><ul><li>Bernoulli\'s Equation</li><li>Pressure Drop Calculations</li><li>Pump Selection</li></ul>',
                completed: false
            },
            {
                id: 'transport-heat',
                name: 'Heat Transfer',
                notes: '<h4>Heat Transfer Modes:</h4><ul><li>Conduction</li><li>Convection</li><li>Radiation</li></ul><h4>Equipment Design:</h4><ul><li>Heat Exchangers</li><li>Evaporators</li><li>Condensers</li></ul>',
                completed: false
            },
            {
                id: 'transport-mass',
                name: 'Mass Transfer',
                notes: '<h4>Mass Transfer Operations:</h4><ul><li>Diffusion</li><li>Absorption</li><li>Distillation</li></ul><h4>Separation Processes:</h4><ul><li>Gas Absorption</li><li>Liquid Extraction</li><li>Membrane Separation</li></ul>',
                completed: false
            },
            {
                id: 'transport-momentum',
                name: 'Momentum Transfer',
                notes: '<h4>Flow Phenomena:</h4><ul><li>Boundary Layer Theory</li><li>Drag and Friction</li><li>Flow in Pipes and Channels</li></ul><h4>Equipment:</h4><ul><li>Pumps and Compressors</li><li>Valves and Fittings</li><li>Flow Measurement</li></ul>',
                completed: false
            },
            {
                id: 'transport-simultaneous',
                name: 'Simultaneous Transport',
                notes: '<h4>Combined Processes:</h4><ul><li>Heat and Mass Transfer</li><li>Coupled Transport Phenomena</li><li>Multicomponent Systems</li></ul><h4>Industrial Applications:</h4><ul><li>Drying Operations</li><li>Cooling Towers</li><li>Chemical Reactors</li></ul>',
                completed: false
            }
        ]
    },
    'reaction': {
        title: 'Reaction Engineering',
        icon: 'fas fa-atom',
        topics: [
            {
                id: 'reaction-kinetics',
                name: 'Chemical Kinetics',
                notes: '<h4>Reaction Rate:</h4><ul><li>Rate Laws and Order</li><li>Temperature Dependence</li><li>Arrhenius Equation</li></ul><h4>Reactor Design:</h4><ul><li>Batch Reactors</li><li>CSTR</li><li>PFR</li></ul>',
                completed: false
            },
            {
                id: 'reaction-catalysis',
                name: 'Catalysis',
                notes: '<h4>Catalyst Types:</h4><ul><li>Homogeneous Catalysis</li><li>Heterogeneous Catalysis</li><li>Enzyme Catalysis</li></ul><h4>Industrial Applications:</h4><ul><li>Catalyst Selection</li><li>Catalyst Deactivation</li></ul>',
                completed: false
            },
            {
                id: 'reaction-design',
                name: 'Reactor Design',
                notes: '<h4>Reactor Types:</h4><ul><li>Ideal Reactors</li><li>Non-ideal Flow</li><li>Multiple Reactions</li></ul><h4>Design Considerations:</h4><ul><li>Temperature Control</li><li>Pressure Effects</li><li>Safety Factors</li></ul>',
                completed: false
            },
            {
                id: 'reaction-biochemical',
                name: 'Biochemical Reactions',
                notes: '<h4>Biological Systems:</h4><ul><li>Enzyme Kinetics</li><li>Microbial Growth</li><li>Fermentation</li></ul><h4>Bioreactor Design:</h4><ul><li>Batch Culture</li><li>Continuous Culture</li><li>Fed-batch Operation</li></ul>',
                completed: false
            },
            {
                id: 'reaction-advanced',
                name: 'Advanced Topics',
                notes: '<h4>Complex Systems:</h4><ul><li>Multiphase Reactions</li><li>Chain Reactions</li><li>Polymerization</li></ul><h4>Modern Methods:</h4><ul><li>Computational Modeling</li><li>Reaction Engineering Software</li><li>Scale-up Considerations</li></ul>',
                completed: false
            }
        ]
    },
    'process': {
        title: 'Process Control',
        icon: 'fas fa-sliders-h',
        topics: [
            {
                id: 'process-dynamics',
                name: 'Process Dynamics',
                notes: '<h4>System Response:</h4><ul><li>First Order Systems</li><li>Second Order Systems</li><li>Dead Time</li></ul><h4>Control Strategies:</h4><ul><li>Feedback Control</li><li>Feedforward Control</li><li>Cascade Control</li></ul>',
                completed: false
            },
            {
                id: 'process-control',
                name: 'Control Systems',
                notes: '<h4>Controllers:</h4><ul><li>P, PI, and PID Controllers</li><li>Controller Tuning</li><li>Stability Analysis</li></ul><h4>Instrumentation:</h4><ul><li>Sensors and Transmitters</li><li>Control Valves</li><li>Digital Control Systems</li></ul>',
                completed: false
            },
            {
                id: 'process-optimization',
                name: 'Process Optimization',
                notes: '<h4>Optimization Methods:</h4><ul><li>Linear Programming</li><li>Non-linear Programming</li><li>Dynamic Optimization</li></ul><h4>Applications:</h4><ul><li>Plant-wide Control</li><li>Economic Optimization</li><li>Real-time Optimization</li></ul>',
                completed: false
            },
            {
                id: 'process-safety',
                name: 'Process Safety',
                notes: '<h4>Safety Systems:</h4><ul><li>Hazard Analysis</li><li>Risk Assessment</li><li>Emergency Shutdown</li></ul><h4>Safety Management:</h4><ul><li>Safety Instrumented Systems</li><li>Alarm Management</li><li>Safety Culture</li></ul>',
                completed: false
            },
            {
                id: 'process-modern',
                name: 'Modern Control',
                notes: '<h4>Advanced Control:</h4><ul><li>Model Predictive Control</li><li>Adaptive Control</li><li>Fuzzy Logic Control</li></ul><h4>Industry 4.0:</h4><ul><li>Digital Twin</li><li>Machine Learning Applications</li><li>Industrial IoT</li></ul>',
                completed: false
            }
        ]
    },
    'design': {
        title: 'Plant Design & Economics', // Combined title
        icon: 'fas fa-industry', // Kept industry icon, or fas fa-drafting-compass
        topics: [
            {
                id: 'design-economics',
                name: 'Process Economics',
                notes: '<h4>Economic Analysis:</h4><ul><li>Capital Cost Estimation (CAPEX)</li><li>Operating Cost Analysis (OPEX)</li><li>Profitability Assessment (ROI, Payback Period, NPV, IRR)</li></ul><h4>Project Evaluation & Feasibility Studies.</h4>',
                completed: false
            },
            {
                id: 'design-equipment',
                name: 'Equipment Design & Selection',
                notes: '<h4>Unit Operations Equipment:</h4><ul><li>Reactors, Columns (Distillation, Absorption)</li><li>Heat Exchangers, Pumps, Compressors, Vessels</li></ul><h4>Mechanical Aspects:</h4><ul><li>Material Selection based on process conditions</li><li>Pressure Vessel Codes (e.g., ASME)</li><li>Equipment Sizing and Specification Sheets.</li></ul>',
                completed: false
            },
            {
                id: 'design-simulation',
                name: 'Process Simulation & Flowsheeting',
                notes: '<h4>Simulation Tools:</h4><ul><li>Steady-state vs. Dynamic Simulation</li><li>Developing Process Flow Diagrams (PFDs) and Piping & Instrumentation Diagrams (P&IDs)</li></ul><h4>Software:</h4><ul><li>Aspen Plus, HYSYS, CHEMCAD, DWSIM (Open Source)</li></ul><h4>Model Validation & Sensitivity Analysis.</h4>',
                completed: false
            },
            {
                id: 'design-safety-env',
                name: 'Safety & Environmental Considerations',
                notes: '<h4>Process Safety Management (PSM):</h4><ul><li>Hazard Identification (HAZOP, FMEA)</li><li>Risk Assessment & Mitigation</li><li>Relief System Design</li></ul><h4>Environmental Regulations:</h4><ul><li>Waste Treatment & Minimization</li><li>Emission Control</li><li>Sustainable Design Principles.</li></ul>',
                completed: false
            }
        ]
    }
};

// Note: chemicalPracticeQuestions is not used in the current HTML structure for progress tracking
// but is kept here as it was in your provided data.
const chemicalPracticeQuestions = {
    'thermo-basics': [
        {
            id: 'q1',
            title: 'First Law Application',
            description: 'Calculate the work done in an isothermal expansion of an ideal gas from 2L to 5L at 300K.',
            difficulty: 'medium',
            solution: 'Use W = -nRT ln(V2/V1)'
        }
    ],
    'transport-fluid': [
        {
            id: 'q2',
            title: 'Reynolds Number',
            description: 'Calculate the Reynolds number for water flowing at 2 m/s through a 5cm diameter pipe at 25°C.',
            difficulty: 'medium',
            solution: 'Re = ρvD/μ'
        }
    ],
    'reaction-kinetics': [
        {
            id: 'q3',
            title: 'Reaction Rate',
            description: 'For a second-order reaction with k = 0.05 L/(mol·s), calculate the time needed to reduce the concentration from 2.0 M to 0.5 M.',
            difficulty: 'hard',
            solution: '1/[A] = 1/[A]₀ + kt'
        }
    ],
    'process-control': [
        {
            id: 'q4',
            title: 'PID Controller',
            description: 'Design a PID controller for a temperature control system with given process parameters.',
            difficulty: 'hard',
            solution: 'Use Ziegler-Nichols tuning method'
        }
    ]
}
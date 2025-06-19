// mechanical_data.js - Data structure for Mechanical Engineering topics

const mechanicalTopicsData = {
    'thermo': {
        title: 'Thermodynamics',
        icon: 'fas fa-temperature-high',
        topics: [
            {
                id: 'thermo-laws',
                name: 'Laws of Thermodynamics',
                notes: '<h4>Fundamental Laws:</h4><ul><li>Zeroth Law - Thermal Equilibrium</li><li>First Law - Energy Conservation</li><li>Second Law - Entropy</li><li>Third Law - Absolute Zero</li></ul><h4>Applications:</h4><ul><li>Energy Analysis</li><li>Heat Engines</li><li>Refrigeration Cycles</li></ul>',
                completed: false
            },
            {
                id: 'heat-transfer',
                name: 'Heat Transfer',
                notes: '<h4>Modes:</h4><ul><li>Conduction</li><li>Convection</li><li>Radiation</li></ul><h4>Applications:</h4><ul><li>Heat Exchangers</li><li>Thermal Insulation</li><li>Cooling Systems</li></ul>',
                completed: false
            },
            {
                id: 'power-cycles',
                name: 'Power Cycles',
                notes: '<h4>Cycles:</h4><ul><li>Carnot Cycle</li><li>Rankine Cycle</li><li>Otto Cycle</li><li>Diesel Cycle</li><li>Brayton Cycle</li></ul>',
                completed: false
            },
            {
                id: 'fluid-mechanics',
                name: 'Fluid Mechanics',
                notes: '<h4>Topics:</h4><ul><li>Fluid Properties</li><li>Flow Analysis</li><li>Bernoulli\'s Equation</li><li>Pipe Flow</li><li>Aerodynamics</li></ul>',
                completed: false
            },
            {
                id: 'refrigeration',
                name: 'Refrigeration & AC',
                notes: '<h4>Systems:</h4><ul><li>Vapor Compression Cycle</li><li>Absorption Refrigeration</li><li>Psychrometrics</li><li>HVAC Design</li></ul>',
                completed: false
            }
        ]
    },
    'machine-design': {
        title: 'Machine Design',
        icon: 'fas fa-drafting-compass',
        topics: [
            {
                id: 'mechanical-elements',
                name: 'Machine Elements',
                notes: '<h4>Components:</h4><ul><li>Gears and Gear Trains</li><li>Bearings</li><li>Shafts</li><li>Springs</li><li>Fasteners</li></ul>',
                completed: false
            },
            {
                id: 'stress-analysis',
                name: 'Stress Analysis',
                notes: '<h4>Topics:</h4><ul><li>Static Loading</li><li>Dynamic Loading</li><li>Fatigue Analysis</li><li>Failure Theories</li></ul>',
                completed: false
            },
            {
                id: 'mechanisms',
                name: 'Mechanisms & Kinematics',
                notes: '<h4>Analysis:</h4><ul><li>Linkage Mechanisms</li><li>Cam Mechanisms</li><li>Velocity Analysis</li><li>Acceleration Analysis</li></ul>',
                completed: false
            },
            {
                id: 'cad',
                name: 'CAD/CAM',
                notes: '<h4>Tools:</h4><ul><li>3D Modeling</li><li>Assembly Design</li><li>FEA Analysis</li><li>Manufacturing Integration</li></ul>',
                completed: false
            },
            {
                id: 'vibrations',
                name: 'Mechanical Vibrations',
                notes: '<h4>Topics:</h4><ul><li>Single DOF Systems</li><li>Multi DOF Systems</li><li>Vibration Control</li><li>Modal Analysis</li></ul>',
                completed: false
            }
        ]
    },
    'manufacturing': {
        title: 'Manufacturing Processes',
        icon: 'fas fa-industry',
        topics: [
            {
                id: 'machining',
                name: 'Machining Processes',
                notes: '<h4>Operations:</h4><ul><li>Turning</li><li>Milling</li><li>Drilling</li><li>Grinding</li><li>CNC Machining</li></ul>',
                completed: false
            },
            {
                id: 'casting',
                name: 'Casting & Molding',
                notes: '<h4>Processes:</h4><ul><li>Sand Casting</li><li>Die Casting</li><li>Investment Casting</li><li>Injection Molding</li></ul>',
                completed: false
            },
            {
                id: 'welding',
                name: 'Welding & Joining',
                notes: '<h4>Methods:</h4><ul><li>Arc Welding</li><li>Gas Welding</li><li>Resistance Welding</li><li>Brazing & Soldering</li></ul>',
                completed: false
            },
            {
                id: 'metrology',
                name: 'Metrology & QC',
                notes: '<h4>Topics:</h4><ul><li>Measurement Systems</li><li>Tolerances</li><li>Quality Control</li><li>Inspection Methods</li></ul>',
                completed: false
            },
            {
                id: 'advanced-mfg',
                name: 'Advanced Manufacturing',
                notes: '<h4>Technologies:</h4><ul><li>3D Printing</li><li>Laser Processing</li><li>Automation</li><li>Industry 4.0</li></ul>',
                completed: false
            }
        ]
    },
    'industrial': {
        title: 'Industrial Engineering',
        icon: 'fas fa-chart-line',
        topics: [
            {
                id: 'production-planning',
                name: 'Production Planning',
                notes: '<h4>Areas:</h4><ul><li>Inventory Management</li><li>Supply Chain</li><li>Scheduling</li><li>Resource Planning</li></ul>',
                completed: false
            },
            {
                id: 'quality-control',
                name: 'Quality Management',
                notes: '<h4>Topics:</h4><ul><li>Statistical QC</li><li>Six Sigma</li><li>TQM</li><li>ISO Standards</li></ul>',
                completed: false
            },
            {
                id: 'operations-research',
                name: 'Operations Research',
                notes: '<h4>Methods:</h4><ul><li>Linear Programming</li><li>Queuing Theory</li><li>Simulation</li><li>Optimization</li></ul>',
                completed: false
            },
            {
                id: 'ergonomics',
                name: 'Ergonomics',
                notes: '<h4>Areas:</h4><ul><li>Workplace Design</li><li>Human Factors</li><li>Safety Engineering</li><li>Work Study</li></ul>',
                completed: false
            },
            {
                id: 'project-management',
                name: 'Project Management',
                notes: '<h4>Skills:</h4><ul><li>Planning</li><li>Scheduling</li><li>Risk Management</li><li>Resource Allocation</li></ul>',
                completed: false
            }
        ]
    },
    'automation': {
        title: 'Automation & Robotics',
        icon: 'fas fa-robot',
        topics: [
            {
                id: 'industrial-automation',
                name: 'Industrial Automation',
                notes: '<h4>Systems:</h4><ul><li>PLC Programming</li><li>SCADA</li><li>Industrial IoT</li><li>Process Control</li></ul>',
                completed: false
            },
            {
                id: 'robotics',
                name: 'Robotics',
                notes: '<h4>Topics:</h4><ul><li>Robot Kinematics</li><li>Path Planning</li><li>Control Systems</li><li>End Effectors</li></ul>',
                completed: false
            },
            {
                id: 'cnc',
                name: 'CNC Programming',
                notes: '<h4>Skills:</h4><ul><li>G-Code</li><li>CAM Software</li><li>Tool Path Generation</li><li>Machine Setup</li></ul>',
                completed: false
            },
            {
                id: 'sensors',
                name: 'Sensors & Actuators',
                notes: '<h4>Components:</h4><ul><li>Position Sensors</li><li>Force Sensors</li><li>Vision Systems</li><li>Motor Control</li></ul>',
                completed: false
            },
            {
                id: 'smart-manufacturing',
                name: 'Smart Manufacturing',
                notes: '<h4>Concepts:</h4><ul><li>Digital Twin</li><li>Predictive Maintenance</li><li>AI Integration</li><li>Data Analytics</li></ul>',
                completed: false
            }
        ]
    }
};

// Questions data structure
const questionsData = {
    'rankine-cycle': {
        title: 'Rankine Cycle Analysis',
        description: 'Analyze a steam power plant operating on an ideal Rankine cycle.',
        difficulty: 'Medium',
        category: 'thermo',
        examples: [
            {
                input: 'Steam enters turbine at 3 MPa, 400°C\nCondenser pressure = 10 kPa',
                output: 'Thermal efficiency = 37.2%\nNet work = 992.7 kJ/kg',
                explanation: 'Using steam tables and energy balance equations'
            }
        ],
        code: {
            'python': `# Rankine Cycle Analysis
P1 = 3000  # kPa
T1 = 400   # °C
P2 = 10    # kPa

# Calculate steam properties
h1 = steam_properties(P1, T1)
s1 = entropy(P1, T1)

# Isentropic turbine expansion
h2s = h_at_pressure_entropy(P2, s1)
h2 = h1 - turbine_efficiency * (h1 - h2s)

# Calculate efficiency
efficiency = (h1 - h2) / (h1 - h4)
print(f"Thermal Efficiency: {efficiency:.3%}")`,
            'matlab': `% Rankine Cycle Analysis
P1 = 3000;  % kPa
T1 = 400;   % °C
P2 = 10;    % kPa

% Calculate steam properties
h1 = steam_properties(P1, T1);
s1 = entropy(P1, T1);

% Isentropic turbine expansion
h2s = h_at_pressure_entropy(P2, s1);
h2 = h1 - turbine_efficiency * (h1 - h2s);

% Calculate efficiency
efficiency = (h1 - h2) / (h1 - h4);
fprintf('Thermal Efficiency: %.3f%%\\n', efficiency*100);`
        }
    }
}; 
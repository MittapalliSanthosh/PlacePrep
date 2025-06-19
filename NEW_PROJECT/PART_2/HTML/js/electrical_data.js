// electrical_data.js - Data structure for Electrical Engineering topics

const electricalTopicsData = {
    'circuit-theory': {
        title: 'Circuit Theory',
        icon: 'fas fa-bolt',
        topics: [
            {
                id: 'ohms-law',
                name: 'Ohm\'s Law and Basic Concepts',
                notes: '<h4>Key Concepts:</h4><ul><li>Voltage, Current, and Resistance relationships</li><li>Power calculations</li><li>Energy in circuits</li></ul><h4>Applications:</h4><ul><li>DC Circuit Analysis</li><li>Power Consumption</li><li>Component Selection</li></ul>',
                completed: false
            },
            {
                id: 'kirchhoffs-laws',
                name: 'Kirchhoff\'s Laws',
                notes: '<h4>KVL:</h4><ul><li>Voltage Law in loops</li><li>Loop analysis</li><li>Mesh analysis</li></ul><h4>KCL:</h4><ul><li>Current Law at nodes</li><li>Node analysis</li><li>Nodal equations</li></ul>',
                completed: false
            },
            {
                id: 'network-theorems',
                name: 'Network Theorems',
                notes: '<h4>Theorems:</h4><ul><li>Thevenin\'s Theorem</li><li>Norton\'s Theorem</li><li>Superposition Theorem</li><li>Maximum Power Transfer</li></ul>',
                completed: false
            },
            {
                id: 'ac-analysis',
                name: 'AC Circuit Analysis',
                notes: '<h4>Concepts:</h4><ul><li>Phasors</li><li>Impedance</li><li>Power Factor</li><li>Resonance</li></ul>',
                completed: false
            },
            {
                id: 'transient-analysis',
                name: 'Transient Analysis',
                notes: '<h4>Topics:</h4><ul><li>RC Circuits</li><li>RL Circuits</li><li>RLC Circuits</li><li>Initial and Final Conditions</li></ul>',
                completed: false
            }
        ]
    },
    'power-systems': {
        title: 'Power Systems',
        icon: 'fas fa-power-off',
        topics: [
            {
                id: 'generation',
                name: 'Power Generation',
                notes: '<h4>Sources:</h4><ul><li>Thermal Power Plants</li><li>Hydroelectric Plants</li><li>Nuclear Power</li><li>Renewable Energy</li></ul>',
                completed: false
            },
            {
                id: 'transmission',
                name: 'Power Transmission',
                notes: '<h4>Components:</h4><ul><li>Transmission Lines</li><li>HVDC Systems</li><li>Insulators</li><li>Tower Configurations</li></ul>',
                completed: false
            },
            {
                id: 'distribution',
                name: 'Power Distribution',
                notes: '<h4>Systems:</h4><ul><li>Distribution Networks</li><li>Substations</li><li>Protection Systems</li><li>Smart Grids</li></ul>',
                completed: false
            },
            {
                id: 'protection',
                name: 'System Protection',
                notes: '<h4>Devices:</h4><ul><li>Circuit Breakers</li><li>Relays</li><li>Fuses</li><li>Protection Schemes</li></ul>',
                completed: false
            },
            {
                id: 'power-quality',
                name: 'Power Quality',
                notes: '<h4>Issues:</h4><ul><li>Harmonics</li><li>Voltage Sags</li><li>Power Factor</li><li>Mitigation Techniques</li></ul>',
                completed: false
            }
        ]
    },
    'control-systems': {
        title: 'Control Systems',
        icon: 'fas fa-cog',
        topics: [
            {
                id: 'modeling',
                name: 'System Modeling',
                notes: '<h4>Methods:</h4><ul><li>Transfer Functions</li><li>State Space</li><li>Block Diagrams</li><li>Signal Flow Graphs</li></ul>',
                completed: false
            },
            {
                id: 'time-response',
                name: 'Time Domain Analysis',
                notes: '<h4>Analysis:</h4><ul><li>First Order Systems</li><li>Second Order Systems</li><li>Stability Analysis</li><li>Error Analysis</li></ul>',
                completed: false
            },
            {
                id: 'frequency-response',
                name: 'Frequency Domain Analysis',
                notes: '<h4>Tools:</h4><ul><li>Bode Plots</li><li>Nyquist Plots</li><li>Root Locus</li><li>Stability Margins</li></ul>',
                completed: false
            },
            {
                id: 'controllers',
                name: 'Controller Design',
                notes: '<h4>Types:</h4><ul><li>PID Controllers</li><li>Lead-Lag Compensation</li><li>State Feedback</li><li>Digital Control</li></ul>',
                completed: false
            },
            {
                id: 'modern-control',
                name: 'Modern Control Theory',
                notes: '<h4>Advanced Topics:</h4><ul><li>Optimal Control</li><li>Robust Control</li><li>Adaptive Control</li><li>Nonlinear Control</li></ul>',
                completed: false
            }
        ]
    },
    'electronics': {
        title: 'Electronics',
        icon: 'fas fa-microchip',
        topics: [
            {
                id: 'semiconductor',
                name: 'Semiconductor Devices',
                notes: '<h4>Devices:</h4><ul><li>Diodes</li><li>Transistors</li><li>MOSFETs</li><li>Thyristors</li></ul>',
                completed: false
            },
            {
                id: 'analog-circuits',
                name: 'Analog Circuits',
                notes: '<h4>Applications:</h4><ul><li>Amplifiers</li><li>Oscillators</li><li>Power Supplies</li><li>Filters</li></ul>',
                completed: false
            },
            {
                id: 'digital-circuits',
                name: 'Digital Circuits',
                notes: '<h4>Topics:</h4><ul><li>Logic Gates</li><li>Flip-Flops</li><li>Counters</li><li>Memory Devices</li></ul>',
                completed: false
            },
            {
                id: 'power-electronics',
                name: 'Power Electronics',
                notes: '<h4>Converters:</h4><ul><li>AC-DC</li><li>DC-DC</li><li>DC-AC</li><li>AC-AC</li></ul>',
                completed: false
            },
            {
                id: 'integrated-circuits',
                name: 'Integrated Circuits',
                notes: '<h4>Types:</h4><ul><li>Operational Amplifiers</li><li>Timer ICs</li><li>Voltage Regulators</li><li>ADC/DAC</li></ul>',
                completed: false
            }
        ]
    }
};

// Questions data structure
const questionsData = {
    'ohms-law': {
        title: 'Ohm\'s Law Application',
        description: 'Solve circuit problems using Ohm\'s Law and related concepts.',
        difficulty: 'Medium',
        category: 'circuit-theory',
        examples: [
            {
                input: 'Circuit with V = 12V, R = 6Ω',
                output: 'I = 2A, P = 24W',
                explanation: 'Using V=IR and P=VI'
            }
        ],
        code: {
            'python': `# Circuit analysis using Ohm's Law
voltage = 12  # Volts
resistance = 6  # Ohms

# Calculate current
current = voltage / resistance

# Calculate power
power = voltage * current

print(f"Current: {current}A")
print(f"Power: {power}W")`,
            'matlab': `% Circuit analysis using Ohm's Law
voltage = 12;  % Volts
resistance = 6;  % Ohms

% Calculate current
current = voltage / resistance;

% Calculate power
power = voltage * current;

fprintf('Current: %.2fA\n', current);
fprintf('Power: %.2fW\n', power);`
        }
    }
}; 
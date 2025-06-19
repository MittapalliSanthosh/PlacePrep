// ece_data.js - Data and functionality for Electronics & Communication Engineering preparation

const eceTopicsData = {
    'digital': {
        title: 'Digital Electronics',
        icon: 'fas fa-digital-tachograph',
        topics: [
            {
                id: 'boolean-algebra',
                name: 'Boolean Algebra & K-Maps',
                notes: '<h4>Key Concepts:</h4><ul><li>Boolean Laws and Theorems</li><li>K-Map Minimization (2,3,4 variables)</li><li>SOP and POS Forms</li><li>Don\'t Care Conditions</li></ul><h4>Applications:</h4><ul><li>Logic Circuit Minimization</li><li>Combinational Circuit Design</li><li>Digital System Optimization</li></ul>',
                completed: false
            },
            {
                id: 'sequential-circuits',
                name: 'Sequential Circuits',
                notes: '<h4>Components:</h4><ul><li>Flip-Flops (SR, JK, D, T)</li><li>Registers and Counters</li><li>State Machines (Moore/Mealy)</li></ul><h4>Design Concepts:</h4><ul><li>State Diagrams and Tables</li><li>Timing Diagrams</li><li>Clock and Reset Logic</li></ul>',
                completed: false
            },
            {
                id: 'logic-gates',
                name: 'Logic Gates & Circuits',
                notes: '<h4>Basic Gates:</h4><ul><li>AND, OR, NOT Gates</li><li>NAND, NOR, XOR Gates</li><li>Universal Gates</li></ul><h4>Circuit Design:</h4><ul><li>Multiplexers and Demultiplexers</li><li>Encoders and Decoders</li><li>Adders and Subtractors</li></ul>',
                completed: false
            },
            {
                id: 'verilog-hdl',
                name: 'Verilog HDL',
                notes: '<h4>Language Basics:</h4><ul><li>Module Structure and Ports</li><li>Behavioral vs Structural Modeling</li><li>Always Blocks and Sensitivity Lists</li></ul><h4>Advanced Topics:</h4><ul><li>Testbench Writing</li><li>Synthesis Guidelines</li><li>Timing Constraints</li></ul>',
                completed: false
            },
            {
                id: 'digital-design',
                name: 'Digital System Design',
                notes: '<h4>Design Flow:</h4><ul><li>Specification and Requirements</li><li>RTL Design</li><li>Synthesis and Implementation</li></ul><h4>Verification:</h4><ul><li>Functional Verification</li><li>Timing Analysis</li><li>Power Analysis</li></ul>',
                completed: false
            }
        ]
    },
    'signals': {
        title: 'Signal Processing',
        icon: 'fas fa-wave-square',
        topics: [
            {
                id: 'fourier-analysis',
                name: 'Fourier Analysis',
                notes: '<h4>Fundamentals:</h4><ul><li>Fourier Series (FS)</li><li>Fourier Transform (FT)</li><li>DFT and FFT</li></ul><h4>Applications:</h4><ul><li>Spectrum Analysis</li><li>Sampling and Aliasing</li><li>Filter Design</li></ul>',
                completed: false
            },
            {
                id: 'digital-filters',
                name: 'Digital Filters',
                notes: '<h4>Filter Types:</h4><ul><li>FIR Filters</li><li>IIR Filters</li><li>Window Functions</li></ul><h4>Design Methods:</h4><ul><li>Filter Specifications</li><li>Frequency Response</li><li>Implementation Techniques</li></ul>',
                completed: false
            },
            {
                id: 'dsp-processors',
                name: 'DSP Processors',
                notes: '<h4>Architecture:</h4><ul><li>Harvard Architecture</li><li>Pipelining</li><li>MAC Operations</li></ul><h4>Programming:</h4><ul><li>Assembly Language</li><li>Real-time Processing</li><li>Optimization Techniques</li></ul>',
                completed: false
            },
            {
                id: 'adaptive-filters',
                name: 'Adaptive Signal Processing',
                notes: '<h4>Algorithms:</h4><ul><li>LMS Algorithm</li><li>RLS Algorithm</li><li>Adaptive Filtering</li></ul><h4>Applications:</h4><ul><li>Echo Cancellation</li><li>Channel Equalization</li><li>Noise Reduction</li></ul>',
                completed: false
            },
            {
                id: 'image-processing',
                name: 'Digital Image Processing',
                notes: '<h4>Image Enhancement:</h4><ul><li>Spatial Domain Methods</li><li>Frequency Domain Methods</li><li>Color Image Processing</li></ul><h4>Applications:</h4><ul><li>Edge Detection</li><li>Image Segmentation</li><li>Pattern Recognition</li></ul>',
                completed: false
            }
        ]
    },
    'communication': {
        title: 'Communication Systems',
        icon: 'fas fa-broadcast-tower',
        topics: [
            {
                id: 'analog-modulation',
                name: 'Analog Modulation',
                notes: '<h4>Techniques:</h4><ul><li>Amplitude Modulation (AM)</li><li>Frequency Modulation (FM)</li><li>Phase Modulation (PM)</li></ul><h4>Analysis:</h4><ul><li>Modulation Index</li><li>Bandwidth Requirements</li><li>Power Calculations</li></ul>',
                completed: false
            },
            {
                id: 'digital-modulation',
                name: 'Digital Modulation',
                notes: '<h4>Schemes:</h4><ul><li>ASK, FSK, PSK</li><li>QAM Techniques</li><li>OFDM Systems</li></ul><h4>Performance:</h4><ul><li>Bit Error Rate (BER)</li><li>Signal-to-Noise Ratio (SNR)</li><li>Bandwidth Efficiency</li></ul>',
                completed: false
            },
            {
                id: 'error-coding',
                name: 'Error Detection & Correction',
                notes: '<h4>Coding Techniques:</h4><ul><li>Linear Block Codes</li><li>Cyclic Codes</li><li>Convolution Codes</li></ul><h4>Applications:</h4><ul><li>Hamming Codes</li><li>CRC</li><li>Turbo Codes</li></ul>',
                completed: false
            },
            {
                id: 'wireless-comm',
                name: 'Wireless Communications',
                notes: '<h4>Concepts:</h4><ul><li>Channel Models</li><li>Multiple Access Techniques</li><li>Cellular Systems</li></ul><h4>Technologies:</h4><ul><li>5G Networks</li><li>MIMO Systems</li><li>Wireless Standards</li></ul>',
                completed: false
            },
            {
                id: 'optical-comm',
                name: 'Optical Communications',
                notes: '<h4>Components:</h4><ul><li>Optical Fibers</li><li>Light Sources and Detectors</li><li>WDM Systems</li></ul><h4>Analysis:</h4><ul><li>Dispersion</li><li>Attenuation</li><li>Link Budget</li></ul>',
                completed: false
            }
        ]
    },
    'vlsi': {
        title: 'VLSI Design',
        icon: 'fas fa-microchip',
        topics: [
            {
                id: 'mos-basics',
                name: 'MOS Fundamentals',
                notes: '<h4>Device Physics:</h4><ul><li>NMOS and PMOS Operation</li><li>Threshold Voltage</li><li>I-V Characteristics</li></ul><h4>Circuit Analysis:</h4><ul><li>DC Characteristics</li><li>Small Signal Models</li><li>Parasitic Effects</li></ul>',
                completed: false
            },
            {
                id: 'cmos-design',
                name: 'CMOS Circuit Design',
                notes: '<h4>Basic Gates:</h4><ul><li>Inverter Design</li><li>NAND and NOR Gates</li><li>Complex Gates</li></ul><h4>Design Considerations:</h4><ul><li>Power Consumption</li><li>Delay Analysis</li><li>Layout Techniques</li></ul>',
                completed: false
            },
            {
                id: 'physical-design',
                name: 'Physical Design Flow',
                notes: '<h4>Design Steps:</h4><ul><li>Floor Planning</li><li>Placement</li><li>Clock Tree Synthesis</li></ul><h4>Verification:</h4><ul><li>DRC and LVS</li><li>Timing Analysis</li><li>Power Analysis</li></ul>',
                completed: false
            },
            {
                id: 'memory-design',
                name: 'Memory Design',
                notes: '<h4>Memory Types:</h4><ul><li>SRAM Design</li><li>DRAM Architecture</li><li>ROM and Flash</li></ul><h4>Considerations:</h4><ul><li>Read/Write Timing</li><li>Power Management</li><li>Testing Strategies</li></ul>',
                completed: false
            },
            {
                id: 'mixed-signal',
                name: 'Mixed-Signal Design',
                notes: '<h4>Components:</h4><ul><li>ADC/DAC Design</li><li>PLL and DLL</li><li>Voltage References</li></ul><h4>Integration:</h4><ul><li>Noise Analysis</li><li>Layout Techniques</li><li>Testing Methods</li></ul>',
                completed: false
            }
        ]
    },
    'embedded': {
        title: 'Embedded Systems',
        icon: 'fas fa-memory',
        topics: [
            {
                id: 'microcontrollers',
                name: 'Microcontroller Architecture',
                notes: '<h4>Components:</h4><ul><li>CPU Architecture</li><li>Memory Organization</li><li>Peripherals</li></ul><h4>Programming:</h4><ul><li>Assembly Language</li><li>C Programming</li><li>Interrupt Handling</li></ul>',
                completed: false
            },
            {
                id: 'rtos',
                name: 'Real-Time Operating Systems',
                notes: '<h4>Concepts:</h4><ul><li>Task Management</li><li>Scheduling Algorithms</li><li>Inter-task Communication</li></ul><h4>Implementation:</h4><ul><li>FreeRTOS</li><li>Task Priorities</li><li>Deadlock Prevention</li></ul>',
                completed: false
            },
            {
                id: 'iot-protocols',
                name: 'IoT Protocols',
                notes: '<h4>Communication:</h4><ul><li>MQTT Protocol</li><li>CoAP</li><li>HTTP/REST</li></ul><h4>Security:</h4><ul><li>Authentication</li><li>Encryption</li><li>Secure Boot</li></ul>',
                completed: false
            },
            {
                id: 'embedded-linux',
                name: 'Embedded Linux',
                notes: '<h4>System Design:</h4><ul><li>Boot Process</li><li>Device Drivers</li><li>File Systems</li></ul><h4>Development:</h4><ul><li>Buildroot/Yocto</li><li>Cross-compilation</li><li>Debugging Tools</li></ul>',
                completed: false
            },
            {
                id: 'sensor-interfaces',
                name: 'Sensor Interfaces',
                notes: '<h4>Protocols:</h4><ul><li>I2C and SPI</li><li>UART and USB</li><li>CAN and LIN</li></ul><h4>Integration:</h4><ul><li>Sensor Fusion</li><li>Signal Conditioning</li><li>Data Acquisition</li></ul>',
                completed: false
            }
        ]
    },
    'interview': {
        title: 'Interview Preparation',
        icon: 'fas fa-comments',
        topics: [
            {
                id: 'core-concepts',
                name: 'Core ECE Concepts',
                notes: '<h4>Key Areas:</h4><ul><li>Network Theory</li><li>Control Systems</li><li>Electromagnetic Theory</li></ul><h4>Problem Solving:</h4><ul><li>Circuit Analysis</li><li>Signal Processing</li><li>Communication Systems</li></ul>',
                completed: false
            },
            {
                id: 'company-specific',
                name: 'Company-Specific Topics',
                notes: '<h4>Focus Areas:</h4><ul><li>Semiconductor Companies</li><li>Communication Companies</li><li>Product Companies</li></ul><h4>Preparation:</h4><ul><li>Technical Questions</li><li>Design Problems</li><li>Past Interview Questions</li></ul>',
                completed: false
            },
            {
                id: 'projects',
                name: 'Project Discussion',
                notes: '<h4>Project Types:</h4><ul><li>Academic Projects</li><li>Personal Projects</li><li>Internship Work</li></ul><h4>Documentation:</h4><ul><li>Technical Documentation</li><li>Presentation Skills</li><li>Problem-Solution Approach</li></ul>',
                completed: false
            },
            {
                id: 'coding-skills',
                name: 'Programming Skills',
                notes: '<h4>Languages:</h4><ul><li>C/C++ Programming</li><li>Python for ECE</li><li>HDL (Verilog/VHDL)</li></ul><h4>Topics:</h4><ul><li>Data Structures</li><li>Algorithms</li><li>Problem Solving</li></ul>',
                completed: false
            },
            {
                id: 'industry-trends',
                name: 'Industry Trends & Technologies',
                notes: '<h4>Current Trends:</h4><ul><li>5G and 6G</li><li>IoT and Edge Computing</li><li>AI/ML in ECE</li></ul><h4>Future Scope:</h4><ul><li>Emerging Technologies</li><li>Research Areas</li><li>Industry Applications</li></ul>',
                completed: false
            }
        ]
    }
}; 
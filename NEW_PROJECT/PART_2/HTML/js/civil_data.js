// civil_data.js - Data and functionality for Civil Engineering preparation

const civilTopicsData = {
    'structural': {
        title: 'Structural Engineering',
        icon: 'fas fa-archway',
        topics: [
            {
                id: 'struct-analysis',
                name: 'Structural Analysis',
                notes: '<h4>Key Concepts:</h4><ul><li>Analysis of Determinate and Indeterminate Structures</li><li>Force Method and Displacement Method</li><li>Influence Lines</li><li>Matrix Methods of Analysis</li></ul><h4>Advanced Topics:</h4><ul><li>Dynamic Analysis of Structures</li><li>Plastic Analysis</li><li>Finite Element Method Basics</li></ul>',
                completed: false
            },
            {
                id: 'rcc-design',
                name: 'RCC Design',
                notes: '<h4>Design Fundamentals:</h4><ul><li>Working Stress Method</li><li>Limit State Design</li><li>Design of Beams and Slabs</li><li>Column Design and Detailing</li></ul><h4>Special Topics:</h4><ul><li>Prestressed Concrete</li><li>Foundation Design</li><li>Earthquake Resistant Design</li></ul>',
                completed: false
            },
            {
                id: 'steel-struct',
                name: 'Steel Structures',
                notes: '<h4>Design Principles:</h4><ul><li>Tension and Compression Members</li><li>Design of Beams</li><li>Column Design and Built-up Sections</li><li>Connections and Joints</li></ul><h4>Advanced Concepts:</h4><ul><li>Plate Girders</li><li>Industrial Buildings</li><li>Steel-Concrete Composite Design</li></ul>',
                completed: false
            }
        ]
    },
    'construction': {
        title: 'Construction Management',
        icon: 'fas fa-hard-hat',
        topics: [
            {
                id: 'project-planning',
                name: 'Project Planning & Scheduling',
                notes: '<h4>Planning Techniques:</h4><ul><li>Work Breakdown Structure</li><li>CPM and PERT Analysis</li><li>Resource Allocation</li><li>Cost Planning and Budgeting</li></ul><h4>Project Control:</h4><ul><li>Progress Monitoring</li><li>Quality Control</li><li>Risk Management</li></ul>',
                completed: false
            },
            {
                id: 'construction-tech',
                name: 'Construction Technology',
                notes: '<h4>Construction Methods:</h4><ul><li>Earthwork and Foundation</li><li>Building Construction</li><li>Formwork and Scaffolding</li><li>Modern Construction Techniques</li></ul><h4>Materials:</h4><ul><li>Concrete Technology</li><li>Construction Materials</li><li>Quality Control Tests</li></ul>',
                completed: false
            },
            {
                id: 'contracts-estimation',
                name: 'Contracts & Estimation',
                notes: '<h4>Contract Management:</h4><ul><li>Types of Contracts</li><li>Tender Documents</li><li>Contract Clauses</li><li>Dispute Resolution</li></ul><h4>Cost Estimation:</h4><ul><li>Quantity Takeoff</li><li>Rate Analysis</li><li>Detailed Estimation</li></ul>',
                completed: false
            }
        ]
    },
    'geotechnical': {
        title: 'Geotechnical Engineering',
        icon: 'fas fa-mountain',
        topics: [
            {
                id: 'soil-mechanics',
                name: 'Soil Mechanics',
                notes: '<h4>Soil Properties:</h4><ul><li>Physical Properties</li><li>Engineering Properties</li><li>Soil Classification</li><li>Compaction and Consolidation</li></ul><h4>Soil Behavior:</h4><ul><li>Shear Strength</li><li>Bearing Capacity</li><li>Earth Pressure Theories</li></ul>',
                completed: false
            },
            {
                id: 'foundation-engg',
                name: 'Foundation Engineering',
                notes: '<h4>Foundation Types:</h4><ul><li>Shallow Foundations</li><li>Deep Foundations</li><li>Pile Foundations</li><li>Well Foundations</li></ul><h4>Design Aspects:</h4><ul><li>Site Investigation</li><li>Foundation Design</li><li>Ground Improvement</li></ul>',
                completed: false
            },
            {
                id: 'earth-structures',
                name: 'Earth Structures',
                notes: '<h4>Retaining Structures:</h4><ul><li>Gravity Walls</li><li>Cantilever Walls</li><li>Sheet Pile Walls</li></ul><h4>Earth Dams:</h4><ul><li>Stability Analysis</li><li>Seepage Analysis</li><li>Construction Methods</li></ul>',
                completed: false
            }
        ]
    },
    'transportation': {
        title: 'Transportation Engineering',
        icon: 'fas fa-road',
        topics: [
            {
                id: 'highway-engg',
                name: 'Highway Engineering',
                notes: '<h4>Highway Planning:</h4><ul><li>Route Survey and Location</li><li>Geometric Design</li><li>Traffic Studies</li><li>Highway Materials</li></ul><h4>Pavement Design:</h4><ul><li>Flexible Pavements</li><li>Rigid Pavements</li><li>Maintenance and Rehabilitation</li></ul>',
                completed: false
            },
            {
                id: 'traffic-engg',
                name: 'Traffic Engineering',
                notes: '<h4>Traffic Studies:</h4><ul><li>Traffic Flow Theory</li><li>Traffic Surveys</li><li>Capacity Analysis</li></ul><h4>Traffic Management:</h4><ul><li>Traffic Control Devices</li><li>Intersection Design</li><li>Parking Studies</li></ul>',
                completed: false
            },
            {
                id: 'railway-engg',
                name: 'Railway Engineering',
                notes: '<h4>Track Design:</h4><ul><li>Alignment and Gradients</li><li>Track Components</li><li>Points and Crossings</li></ul><h4>Railway Operation:</h4><ul><li>Signaling Systems</li><li>Station Planning</li><li>Maintenance</li></ul>',
                completed: false
            }
        ]
    },
    'environmental': {
        title: 'Environmental Engineering',
        icon: 'fas fa-leaf',
        topics: [
            {
                id: 'water-treatment',
                name: 'Water Treatment',
                notes: '<h4>Water Quality:</h4><ul><li>Physical Parameters</li><li>Chemical Parameters</li><li>Treatment Processes</li></ul><h4>Treatment Methods:</h4><ul><li>Sedimentation</li><li>Filtration</li><li>Disinfection</li></ul>',
                completed: false
            },
            {
                id: 'wastewater-engg',
                name: 'Wastewater Engineering',
                notes: '<h4>Sewage Treatment:</h4><ul><li>Primary Treatment</li><li>Secondary Treatment</li><li>Tertiary Treatment</li></ul><h4>Design Aspects:</h4><ul><li>Sewer Design</li><li>Treatment Plant Design</li><li>Disposal Methods</li></ul>',
                completed: false
            },
            {
                id: 'solid-waste',
                name: 'Solid Waste Management',
                notes: '<h4>Waste Management:</h4><ul><li>Collection Systems</li><li>Transportation</li><li>Processing Methods</li></ul><h4>Disposal:</h4><ul><li>Landfill Design</li><li>Incineration</li><li>Recycling</li></ul>',
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
                name: 'Core Civil Concepts',
                notes: '<h4>Important Topics:</h4><ul><li>Strength of Materials</li><li>Fluid Mechanics</li><li>Surveying</li><li>Building Materials</li></ul><h4>Problem Solving:</h4><ul><li>Numerical Problems</li><li>Design Problems</li><li>Case Studies</li></ul>',
                completed: false
            },
            {
                id: 'company-specific',
                name: 'Company-Specific Questions',
                notes: '<h4>Company Focus:</h4><ul><li>L&T</li><li>AECOM</li><li>Shapoorji Pallonji</li><li>DLF</li></ul><h4>Interview Tips:</h4><ul><li>Technical Questions</li><li>Project Discussion</li><li>Site Experience</li></ul>',
                completed: false
            },
            {
                id: 'latest-trends',
                name: 'Latest Industry Trends',
                notes: '<h4>Modern Technologies:</h4><ul><li>BIM (Building Information Modeling)</li><li>Green Building</li><li>Smart Construction</li></ul><h4>Industry Updates:</h4><ul><li>Construction Technology</li><li>Sustainable Development</li><li>Project Management Tools</li></ul>',
                completed: false
            }
        ]
    }
}; 
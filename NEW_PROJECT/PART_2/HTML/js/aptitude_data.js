// aptitude_data.js - Data and functionality for aptitude preparation

// Main data structure for aptitude topics
const aptitudeTopicsData = {
    'quantitative': {
        title: 'Quantitative Aptitude',
        icon: 'fas fa-calculator',
        topics: [
            {
                id: 'quant-numbers',
                name: 'Number System & HCF/LCM',
                notes: '<h4>Number System Basics:</h4><ul><li>Types of Numbers (Natural, Whole, Integers, Rational, Irrational, Real)</li><li>Place Value & Face Value</li><li>Tests of Divisibility (2,3,4,5,6,8,9,10,11)</li></ul><h4>HCF & LCM:</h4><ul><li>Methods: Prime Factorization, Division Method</li><li>Relationship: HCF × LCM = Product of two numbers</li><li>Applications in time & work, circular tracks etc.</li></ul>',
                completed: false
            },
            {
                id: 'quant-percentage',
                name: 'Percentages',
                notes: '<h4>Percentage Basics:</h4><ul><li>Concept of "per cent" (out of 100)</li><li>Conversion: Percentage to Fraction/Decimal and vice-versa</li><li>Percentage Increase/Decrease</li><li>Successive Percentage Change</li></ul><h4>Applications:</h4><ul><li>Profit & Loss</li><li>Simple & Compound Interest</li><li>Discounts</li></ul>',
                completed: false
            },
            {
                id: 'quant-profitloss',
                name: 'Profit and Loss',
                notes: '<h4>Key Terms:</h4><ul><li>Cost Price (CP), Selling Price (SP), Marked Price (MP)</li><li>Profit (Gain), Loss</li><li>Discount</li></ul><h4>Formulas:</h4><ul><li>Profit = SP - CP</li><li>Loss = CP - SP</li><li>Profit % = (Profit/CP) * 100</li><li>Loss % = (Loss/CP) * 100</li></ul>',
                completed: false
            },
            {
                id: 'quant-interest',
                name: 'Simple & Compound Interest',
                notes: '<h4>Simple Interest (SI):</h4><ul><li>SI = (P * R * T) / 100</li><li>Amount = P + SI</li></ul><h4>Compound Interest (CI):</h4><ul><li>Amount = P * (1 + R/100)<sup>T</sup> (compounded annually)</li><li>CI = Amount - P</li><li>Concept of compounding half-yearly, quarterly.</li></ul>',
                completed: false
            },
            {
                id: 'quant-ratio',
                name: 'Ratio & Proportion',
                notes: '<h4>Ratio:</h4><ul><li>Comparison of two quantities of the same kind.</li><li>a : b</li></ul><h4>Proportion:</h4><ul><li>Equality of two ratios. a : b :: c : d  => a/b = c/d</li><li>Mean proportional, Third proportional, Fourth proportional.</li></ul><h4>Applications:</h4><ul><li>Partnership problems</li><li>Mixtures & Alligations</li></ul>',
                completed: false
            },
            {
                id: 'quant-time-work',
                name: 'Time and Work',
                notes: '<h4>Basic Concepts:</h4><ul><li>Work done is proportional to time taken.</li><li>If A can do a piece of work in \'n\' days, then A\'s 1 day\'s work = 1/n.</li></ul><h4>Pipes and Cisterns:</h4><ul><li>Similar concept, inlet pipes do positive work, outlet pipes do negative work.</li></ul>',
                completed: false
            },
            {
                id: 'quant-time-speed',
                name: 'Time, Speed, and Distance',
                notes: '<h4>Fundamental Formula:</h4><ul><li>Distance = Speed × Time</li></ul><h4>Relative Speed:</h4><ul><li>Objects moving in same direction: S<sub>rel</sub> = |S<sub>1</sub> - S<sub>2</sub>|</li><li>Objects moving in opposite directions: S<sub>rel</sub> = S<sub>1</sub> + S<sub>2</sub></li></ul><h4>Boats and Streams, Trains.</h4>',
                completed: false
            },
            {
                id: 'quant-averages',
                name: 'Averages',
                notes: '<h4>Average:</h4><ul><li>Sum of observations / Number of observations</li></ul><h4>Weighted Average.</h4><h4>Problems on ages, scores etc.</h4>',
                completed: false
            },
            {
                id: 'quant-permutation-combination',
                name: 'Permutation & Combination',
                notes: '<h4>Permutation (Arrangement):</h4><ul><li><sup>n</sup>P<sub>r</sub> = n! / (n-r)!</li></ul><h4>Combination (Selection):</h4><ul><li><sup>n</sup>C<sub>r</sub> = n! / (r! * (n-r)!)</li></ul><h4>Probability basics.</h4>',
                completed: false
            },
            {
                id: 'quant-geometry-mensuration',
                name: 'Geometry & Mensuration',
                notes: '<h4>2D Shapes:</h4><ul><li>Triangles, Quadrilaterals, Circles (Area, Perimeter)</li></ul><h4>3D Shapes:</h4><ul><li>Cube, Cuboid, Cylinder, Cone, Sphere (Volume, Surface Area)</li></ul><h4>Coordinate Geometry basics.</h4>',
                completed: false
            }
        ]
    },
    'logical-reasoning': {
        title: 'Logical Reasoning',
        icon: 'fas fa-lightbulb',
        topics: [
            {
                id: 'lr-series',
                name: 'Number & Letter Series',
                notes: '<h4>Number Series:</h4><ul><li>Arithmetic, Geometric, Mixed series</li><li>Finding the missing term or next term.</li></ul><h4>Letter Series:</h4><ul><li>Based on alphabetical order, differences between letters.</li></ul><h4>Alpha-numeric series.</h4>',
                completed: false
            },
            {
                id: 'lr-coding-decoding',
                name: 'Coding and Decoding',
                notes: '<h4>Types:</h4><ul><li>Letter Coding (Shifting letters, Reversing letters)</li><li>Number Coding (Assigning numbers to letters)</li><li>Substitution Coding</li></ul>',
                completed: false
            },
            {
                id: 'lr-blood-relations',
                name: 'Blood Relations',
                notes: '<h4>Understanding family tree relationships.</h4><ul><li>Direct relations, Indirect relations.</li><li>Pointing to a photograph type questions.</li></ul>',
                completed: false
            },
            {
                id: 'lr-direction-sense',
                name: 'Direction Sense Test',
                notes: '<h4>Cardinal Directions:</h4><ul><li>North, South, East, West</li></ul><h4>Turns (Left/Right), Distances covered.</h4><h4>Shadow problems.</h4>',
                completed: false
            },
            {
                id: 'lr-syllogism',
                name: 'Syllogism',
                notes: '<h4>Deductive reasoning.</h4><ul><li>Statements (Premises) and Conclusions.</li><li>Using Venn diagrams to solve.</li><li>Possibility cases.</li></ul>',
                completed: false
            },
            {
                id: 'lr-seating-arrangement',
                name: 'Seating Arrangement',
                notes: '<h4>Types:</h4><ul><li>Linear Arrangement</li><li>Circular Arrangement</li><li>Rectangular/Square Arrangement</li></ul><h4>Facing inwards/outwards.</h4>',
                completed: false
            },
            {
                id: 'lr-puzzles',
                name: 'Puzzles',
                notes: '<h4>Variety of logic puzzles.</h4><ul><li>Floor-based, Month-based, Day-based.</li><li>Comparison puzzles.</li></ul><h4>Requires careful analysis and tabulation.</h4>',
                completed: false
            },
            {
                id: 'lr-data-sufficiency',
                name: 'Data Sufficiency',
                notes: '<h4>Determining if the given statements are sufficient to answer a question.</h4><ul><li>Statement I alone is sufficient.</li><li>Statement II alone is sufficient.</li><li>Either I or II is sufficient.</li><li>Neither I nor II is sufficient.</li><li>Both I and II are necessary.</li></ul>',
                completed: false
            },
            {
                id: 'lr-clocks-calendars',
                name: 'Clocks and Calendars',
                notes: '<h4>Clocks:</h4><ul><li>Angle between hands.</li><li>Coinciding, Opposite, Right angles.</li></ul><h4>Calendars:</h4><ul><li>Odd days concept.</li><li>Finding day of the week for a given date.</li></ul>',
                completed: false
            }
        ]
    },
    'verbal-ability': {
        title: 'Verbal Ability',
        icon: 'fas fa-comments',
        topics: [
            {
                id: 'verb-reading-comp',
                name: 'Reading Comprehension',
                notes: '<h4>Skills:</h4><ul><li>Identifying main idea, tone, purpose.</li><li>Inferring meaning.</li><li>Understanding vocabulary in context.</li></ul><h4>Passage types: Factual, Narrative, Analytical.</h4>',
                completed: false
            },
            {
                id: 'verb-grammar',
                name: 'Grammar & Sentence Correction',
                notes: '<h4>Topics:</h4><ul><li>Subject-Verb Agreement</li><li>Tenses, Articles, Prepositions</li><li>Pronouns, Adjectives, Adverbs</li><li>Parallelism, Modifiers</li></ul>',
                completed: false
            },
            {
                id: 'verb-vocabulary',
                name: 'Vocabulary (Synonyms, Antonyms)',
                notes: '<h4>Building vocabulary through reading and word lists.</h4><ul><li>Understanding word roots, prefixes, suffixes.</li></ul>',
                completed: false
            },
            {
                id: 'verb-para-jumbles',
                name: 'Para Jumbles',
                notes: '<h4>Arranging jumbled sentences to form a coherent paragraph.</h4><ul><li>Identifying opening and closing sentences.</li><li>Finding logical links between sentences.</li></ul>',
                completed: false
            }
        ]
    }
};

// Practice Questions Data
const practiceQuestions = {
    'quant-numbers': [
        {
            id: 'q1',
            title: 'HCF and LCM Problem',
            description: 'Find the HCF and LCM of three numbers: 48, 72, and 96.',
            difficulty: 'medium',
            solution: 'HCF = 24, LCM = 144'
        }
    ],
    'quant-percentage': [
        {
            id: 'q2',
            title: 'Percentage Change',
            description: 'If the price of a book is increased by 20% and then decreased by 20%, what is the net change in the price?',
            difficulty: 'medium',
            solution: 'Net decrease of 4%'
        }
    ]
};

// Export the data structures if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        aptitudeTopicsData,
        practiceQuestions
    };
}
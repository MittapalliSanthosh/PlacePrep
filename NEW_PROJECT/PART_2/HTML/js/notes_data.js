const notesData = {
    logicalReasoning: {
        basic: [
            {
                title: "Seating Arrangement",
                description: "Solving problems involving arrangement of people or objects in a line, circle, or other patterns.",
                keyPoints: [
                    "Always start by drawing a diagram",
                    "Note down all given conditions",
                    "Use elimination method",
                    "Cross-verify final arrangement"
                ],
                examples: [
                    {
                        problem: "Five friends A, B, C, D, and E are sitting in a row. If A is not at the ends, B is next to D, and E is not next to C, find the arrangement.",
                        solution: "Step 1: Since A is not at ends, A must be at position 2, 3, or 4\nStep 2: B is next to D, so they must be adjacent\nStep 3: E is not next to C\nPossible arrangement: E-B-D-A-C",
                        explanation: "Using elimination and given conditions, we can deduce the only possible arrangement."
                    }
                ],
                formulas: [
                    "Linear arrangement = n! possibilities",
                    "Circular arrangement = (n-1)! possibilities",
                    "Both ends fixed = (n-2)! possibilities"
                ]
            },
            {
                title: "Number Coding",
                description: "Decoding numbers based on patterns and relationships.",
                keyPoints: [
                    "Look for patterns in digit placement",
                    "Check mathematical relationships",
                    "Compare similar codes",
                    "Note frequency of digits"
                ],
                examples: [
                    {
                        problem: "If 123 means 'hot and cold', 456 means 'very hot day', and 789 means 'cold winter day', what does '3' represent?",
                        solution: "Step 1: Find common words in codes with '3'\nStep 2: '123' contains 'cold'\nStep 3: No other code has '3'\nTherefore, '3' represents 'cold'",
                        explanation: "By comparing codes and identifying common elements, we can decode the meaning."
                    }
                ],
                formulas: [
                    "Compare codes with common digits",
                    "Check digit positions",
                    "Look for mathematical patterns"
                ]
            },
            {
                title: "Letter Coding",
                description: "Converting letters based on specific patterns or rules.",
                keyPoints: [
                    "Check alphabetical order shifts",
                    "Look for reverse patterns",
                    "Note position changes",
                    "Consider ASCII values"
                ],
                examples: [
                    {
                        problem: "If PAPER is coded as QBQFS, how would PENCIL be coded?",
                        solution: "Step 1: Compare PAPER and QBQFS\nStep 2: Each letter moves one position forward\nP→Q, A→B, P→Q, E→F, R→S\nTherefore, PENCIL becomes QFODJM",
                        explanation: "Each letter is replaced by the next letter in the alphabet."
                    }
                ],
                formulas: [
                    "Forward shift: Letter + n positions",
                    "Backward shift: Letter - n positions",
                    "ASCII conversion: A=65, a=97"
                ]
            },
            {
                title: "Number Series",
                description: "Finding patterns in sequences of numbers.",
                keyPoints: [
                    "Check arithmetic progression",
                    "Look for geometric progression",
                    "Consider squares/cubes",
                    "Examine differences between terms"
                ],
                examples: [
                    {
                        problem: "Find the next number: 2, 6, 12, 20, 30, ?",
                        solution: "Step 1: Find differences: 4, 6, 8, 10\nStep 2: Pattern in differences: +2 each time\nStep 3: Next difference will be 12\nTherefore, 30 + 12 = 42",
                        explanation: "The difference between consecutive terms increases by 2 each time."
                    }
                ],
                formulas: [
                    "AP: a, a+d, a+2d, ...",
                    "GP: a, ar, ar², ...",
                    "Squares: 1, 4, 9, 16, ...",
                    "Cubes: 1, 8, 27, 64, ..."
                ]
            }
        ],
        advanced: [
            {
                title: "Complex Seating Arrangements",
                description: "Advanced arrangements involving multiple conditions and geometric shapes.",
                keyPoints: [
                    "Draw geometric shape first",
                    "Number the positions",
                    "List all conditions",
                    "Use matrix method for verification"
                ],
                examples: [
                    {
                        problem: "Six people A, B, C, D, E, F sit around a hexagonal table. B faces center, A sits two places right of B, C is not near A.",
                        solution: "Step 1: Mark positions 1-6 clockwise\nStep 2: Place B facing center\nStep 3: Place A two right of B\nStep 4: Place C away from A\nPossible arrangement: B-D-A-F-E-C",
                        explanation: "Using geometric properties and given conditions to solve complex arrangements."
                    }
                ],
                formulas: [
                    "Hexagon: 6 positions, each 60° apart",
                    "Square: 4 positions, each 90° apart",
                    "Opposite positions: n/2 positions away"
                ]
            },
            {
                title: "Complex Mathematical Operations",
                description: "Solving problems with substituted mathematical symbols.",
                keyPoints: [
                    "Note symbol substitutions",
                    "Follow BODMAS/PEMDAS",
                    "Solve step by step",
                    "Verify with original symbols"
                ],
                examples: [
                    {
                        problem: "If × means +, ÷ means ×, + means ÷, and - means ×, solve: 15 ÷ 3 × 2 - 4 + 2",
                        solution: "Step 1: Replace symbols with actual operations\n15 × 3 + 2 × 4 ÷ 2\nStep 2: Follow BODMAS\n= 45 + 8 ÷ 2\n= 45 + 4\n= 49",
                        explanation: "Replace symbols and solve according to mathematical precedence."
                    }
                ],
                formulas: [
                    "BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction",
                    "Symbol replacement must be consistent"
                ]
            },
            {
                title: "Permutation Based Problems",
                description: "Solving arrangements and selections using permutation concepts.",
                keyPoints: [
                    "Identify total elements",
                    "Note restrictions",
                    "Use permutation formulas",
                    "Consider repetitions"
                ],
                examples: [
                    {
                        problem: "How many 4-letter words can be formed from 'BOOK' where letters can be repeated?",
                        solution: "Step 1: Count unique letters (B,O,K)\nStep 2: O can be used twice\nStep 3: Each position can use any letter\nTotal arrangements = 3⁴ = 81",
                        explanation: "Using permutation with repetition allowed for each position."
                    }
                ],
                formulas: [
                    "Permutation: P(n,r) = n!/(n-r)!",
                    "With repetition: n^r",
                    "Circular permutation: (n-1)!"
                ]
            }
        ]
    },
    quantitativeAptitude: {
        basic: [
            {
                title: "Trains and Speed",
                description: "Solving problems involving trains, speed, distance, and time calculations.",
                keyPoints: [
                    "Convert all units to same system (km/h or m/s)",
                    "For trains crossing each other, add their speeds",
                    "For trains moving in same direction, subtract speeds",
                    "Consider train length for crossing problems"
                ],
                examples: [
                    {
                        problem: "A train 200m long crosses a platform 300m long in 20 seconds. Find the speed of the train in km/h.",
                        solution: "Step 1: Total distance = Train length + Platform length = 200m + 300m = 500m\nStep 2: Time = 20 seconds\nStep 3: Speed = Distance/Time = 500/20 = 25 m/s\nStep 4: Convert to km/h = 25 × (18/5) = 90 km/h",
                        explanation: "Calculate total distance, then speed, and convert units appropriately."
                    }
                ],
                formulas: [
                    "Speed = Distance/Time",
                    "Time = Distance/Speed",
                    "Distance = Speed × Time",
                    "1 km/h = (5/18) m/s",
                    "1 m/s = (18/5) km/h"
                ]
            },
            {
                title: "Profit and Loss",
                description: "Calculating profit, loss, and related percentages in business transactions.",
                keyPoints: [
                    "Profit = Selling Price - Cost Price",
                    "Loss = Cost Price - Selling Price",
                    "Profit % = (Profit/CP) × 100",
                    "Loss % = (Loss/CP) × 100"
                ],
                examples: [
                    {
                        problem: "A shopkeeper sells an article for ₹1200 at a profit of 20%. Find the cost price.",
                        solution: "Step 1: Let CP be x\nStep 2: Profit = 20% of x = 0.2x\nStep 3: SP = CP + Profit\n1200 = x + 0.2x\n1200 = 1.2x\nx = 1200/1.2 = ₹1000",
                        explanation: "Use profit percentage to find cost price from selling price."
                    }
                ],
                formulas: [
                    "CP = SP/(1 + Profit%)",
                    "CP = SP/(1 - Loss%)",
                    "SP = CP(1 + Profit%)",
                    "SP = CP(1 - Loss%)"
                ]
            },
            {
                title: "Average Calculations",
                description: "Finding averages and solving problems involving mean values.",
                keyPoints: [
                    "Average = Sum of values/Number of values",
                    "Sum of values = Average × Number of values",
                    "For weighted average, multiply each value by its weight",
                    "When new value is added, recalculate total and count"
                ],
                examples: [
                    {
                        problem: "The average of 5 numbers is 20. If one number is removed, the average becomes 18. Find the removed number.",
                        solution: "Step 1: Sum of 5 numbers = 20 × 5 = 100\nStep 2: Sum of 4 numbers = 18 × 4 = 72\nStep 3: Removed number = 100 - 72 = 28",
                        explanation: "Use average formula to find sums and calculate the difference."
                    }
                ],
                formulas: [
                    "Average = (a₁ + a₂ + ... + aₙ)/n",
                    "Weighted Average = (w₁x₁ + w₂x₂ + ... + wₙxₙ)/(w₁ + w₂ + ... + wₙ)",
                    "New Average = (Old Average × n ± New Value)/(n ± 1)"
                ]
            },
            {
                title: "Probability",
                description: "Calculating chances and likelihood of events occurring.",
                keyPoints: [
                    "Probability = Favorable outcomes/Total outcomes",
                    "Probability ranges from 0 to 1",
                    "P(A or B) = P(A) + P(B) - P(A and B)",
                    "P(A and B) = P(A) × P(B) for independent events"
                ],
                examples: [
                    {
                        problem: "A bag contains 3 red, 4 blue, and 5 green balls. Find the probability of drawing a red ball.",
                        solution: "Step 1: Total balls = 3 + 4 + 5 = 12\nStep 2: Favorable outcomes (red balls) = 3\nStep 3: Probability = 3/12 = 1/4",
                        explanation: "Calculate total outcomes and favorable outcomes to find probability."
                    }
                ],
                formulas: [
                    "P(A) = n(A)/n(S)",
                    "P(A') = 1 - P(A)",
                    "P(A∪B) = P(A) + P(B) - P(A∩B)",
                    "P(A∩B) = P(A) × P(B|A)"
                ]
            }
        ],
        advanced: [
            {
                title: "Percentages and Interest",
                description: "Advanced calculations involving percentages, simple and compound interest.",
                keyPoints: [
                    "Simple Interest = (P × R × T)/100",
                    "Compound Interest = P(1 + R/100)^T - P",
                    "Percentage change = ((New - Old)/Old) × 100",
                    "Successive percentage changes"
                ],
                examples: [
                    {
                        problem: "Find the compound interest on ₹5000 at 10% per annum for 2 years.",
                        solution: "Step 1: P = 5000, R = 10%, T = 2\nStep 2: A = P(1 + R/100)^T\nA = 5000(1 + 10/100)²\nA = 5000(1.1)² = 6050\nStep 3: CI = A - P = 6050 - 5000 = ₹1050",
                        explanation: "Use compound interest formula to find amount and then interest."
                    }
                ],
                formulas: [
                    "SI = PRT/100",
                    "CI = P(1 + R/100)^T - P",
                    "Amount = P(1 + R/100)^T",
                    "Effective Rate = (1 + R₁/100)(1 + R₂/100) - 1"
                ]
            },
            {
                title: "Geometry",
                description: "Solving problems involving shapes, areas, and volumes.",
                keyPoints: [
                    "Area of triangle = (1/2) × base × height",
                    "Area of circle = πr²",
                    "Volume of cube = side³",
                    "Surface area of sphere = 4πr²"
                ],
                examples: [
                    {
                        problem: "Find the area of a triangle with sides 5cm, 12cm, and 13cm.",
                        solution: "Step 1: Check if it's right-angled (5² + 12² = 13²)\nStep 2: It is right-angled\nStep 3: Area = (1/2) × 5 × 12 = 30 cm²",
                        explanation: "Use Pythagorean theorem to verify right angle and then calculate area."
                    }
                ],
                formulas: [
                    "Triangle: A = (1/2)bh",
                    "Circle: A = πr², C = 2πr",
                    "Rectangle: A = l × b",
                    "Sphere: V = (4/3)πr³"
                ]
            },
            {
                title: "Time and Work",
                description: "Solving problems involving work rates and time taken to complete tasks.",
                keyPoints: [
                    "Work = Rate × Time",
                    "If A can do work in x days, work done in 1 day = 1/x",
                    "Combined work rate = Sum of individual rates",
                    "Efficiency is inversely proportional to time"
                ],
                examples: [
                    {
                        problem: "A can complete a work in 10 days and B in 15 days. How long will they take working together?",
                        solution: "Step 1: A's 1 day work = 1/10\nStep 2: B's 1 day work = 1/15\nStep 3: Combined work = 1/10 + 1/15 = 1/6\nStep 4: Time taken = 6 days",
                        explanation: "Add individual work rates to find combined rate and then time."
                    }
                ],
                formulas: [
                    "Work = Rate × Time",
                    "Combined Rate = 1/T₁ + 1/T₂",
                    "Time = 1/Combined Rate",
                    "Efficiency = Work/Time"
                ]
            },
            {
                title: "Ratios and Proportions",
                description: "Solving problems involving ratios, proportions, and variations.",
                keyPoints: [
                    "Ratio = a:b = a/b",
                    "Proportion = a:b :: c:d",
                    "Direct proportion: y = kx",
                    "Inverse proportion: y = k/x"
                ],
                examples: [
                    {
                        problem: "If 15 workers can build a wall in 48 hours, how many workers are needed to build it in 30 hours?",
                        solution: "Step 1: This is inverse proportion\nStep 2: 15 × 48 = x × 30\nStep 3: x = (15 × 48)/30 = 24 workers",
                        explanation: "Use inverse proportion formula to find required number of workers."
                    }
                ],
                formulas: [
                    "a:b :: c:d → ad = bc",
                    "Direct: y₁/x₁ = y₂/x₂",
                    "Inverse: x₁y₁ = x₂y₂",
                    "Compound: (a:b) and (b:c) → a:b:c"
                ]
            }
        ]
    }
}; 
const sampleAssessments = [
    {
        title: "Advanced Quantitative Aptitude",
        description: "A comprehensive test covering advanced quantitative concepts including time and work, percentages, and mathematical reasoning.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Advanced Quantitative Aptitude",
                description: "Questions on advanced arithmetic, algebra, and mathematical reasoning.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "A booster pump can be used for filling as well as for emptying a tank. The capacity of the tank is 2400 m^3. The emptying capacity of the tank is 10 m^3 per minute higher than its filling capacity and the pump needs 8 minutes lesser to empty the tank than it needs to fill it. What is the filling capacity of the pump?",
                        options: ["40 m^3/min", "50 m^3/min", "60 m^3/min", "30 m^3/min"],
                        correctAnswer: "50 m^3/min",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the ratio of the ages of A and B is 3:4 and the sum of their ages is 56 years, what is the age of A?",
                        options: ["24 years", "28 years", "32 years", "30 years"],
                        correctAnswer: "24 years",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A train running at 72 km/h crosses a platform of 120 meters in 10 seconds. What is the length of the train?",
                        options: ["80 m", "100 m", "120 m", "180 m"],
                        correctAnswer: "80 m",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "The simple interest on a sum of money for 2 years at 5% per annum is ₹120. What is the principal amount?",
                        options: ["₹1000", "₹1100", "₹1200", "₹1500"],
                        correctAnswer: "₹1200",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A man can row 6 km/h in still water. If the speed of the stream is 2 km/h, how long will he take to row 20 km downstream?",
                        options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
                        correctAnswer: "2 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If 12 men can complete a work in 15 days, how many men are required to complete the same work in 10 days?",
                        options: ["18", "20", "16", "14"],
                        correctAnswer: "18",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the compound interest on ₹5000 for 2 years at 10% per annum compounded annually?",
                        options: ["₹1050", "₹1000", "₹1100", "₹1155"],
                        correctAnswer: "₹1050",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A and B together can complete a work in 12 days. A alone can do it in 18 days. In how many days can B alone complete the work?",
                        options: ["36", "24", "20", "30"],
                        correctAnswer: "36",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the perimeter of a square is 48 cm, what is the area?",
                        options: ["144 cm²", "256 cm²", "121 cm²", "169 cm²"],
                        correctAnswer: "144 cm²",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "The average age of 5 students is 20. If one of them is replaced with a new student, the average becomes 21. What is the age of the new student?",
                        options: ["26", "25", "27", "28"],
                        correctAnswer: "26",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A shopkeeper marks up goods by 40% and then gives a discount of 10%. What is the profit percentage?",
                        options: ["26%", "30%", "20%", "24%"],
                        correctAnswer: "26%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the value of x if 3x - 5 = 16?",
                        options: ["7", "6", "8", "9"],
                        correctAnswer: "7",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In an examination, a student scores 20% and fails by 30 marks. If he had scored 40%, he would have got 10 marks more than required. What are the maximum marks?",
                        options: ["200", "150", "250", "300"],
                        correctAnswer: "200",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A can complete a job in 16 days and B in 12 days. They work together for 4 days. What fraction of work is left?",
                        options: ["⅓", "½", "¾", "⅔"],
                        correctAnswer: "⅔",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the difference between simple interest and compound interest for 2 years is ₹25 and the rate is 5% p.a., find the principal.",
                        options: ["₹10,000", "₹5,000", "₹2,000", "₹1,000"],
                        correctAnswer: "₹5,000",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "An amount doubles itself in 8 years at simple interest. In how many years will it become four times?",
                        options: ["16 years", "24 years", "32 years", "20 years"],
                        correctAnswer: "24 years",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat takes 6 hours to go downstream and 9 hours upstream between two points. If the speed of the boat in still water is 12 km/h, find the distance between the two points.",
                        options: ["108 km", "120 km", "100 km", "90 km"],
                        correctAnswer: "108 km",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If 25% of x is equal to 30% of y, then what is x:y?",
                        options: ["6:5", "5:6", "3:4", "4:3"],
                        correctAnswer: "6:5",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the least number which when divided by 8, 12, and 16 leaves a remainder of 5?",
                        options: ["101", "95", "85", "125"],
                        correctAnswer: "101",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "The price of a laptop was increased by 20% and then decreased by 20%. What is the net percentage change in price?",
                        options: ["4% decrease", "4% increase", "No change", "2% decrease"],
                        correctAnswer: "4% decrease",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Complex Logical Reasoning",
        description: "A comprehensive test covering advanced logical reasoning concepts including coding-decoding, blood relations, series completion, and analytical reasoning.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Complex Logical Reasoning",
                description: "Questions on coding-decoding, blood relations, series completion, and analytical reasoning.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "Pointing to a photograph, a man said, 'I have no brothers and sisters, but that man's father is my father's son.' Who is in the photograph?",
                        options: ["His son", "His father", "His cousin", "He himself"],
                        correctAnswer: "His son",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a certain code, TEACHER is written as VGCEJGT. How is STUDENT written in that code?",
                        options: ["UVWFGPV", "UVWFGRV", "UVWFGPV", "UVWFGQT"],
                        correctAnswer: "UVWFGPV",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Statements: Some books are pens. All pens are chairs. Conclusions: I. Some books are chairs. II. All books are chairs.",
                        options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
                        correctAnswer: "Only I follows",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Complete the series: 2, 6, 12, 20, 30, ?",
                        options: ["42", "36", "40", "38"],
                        correctAnswer: "42",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If ALL = 36 and SUN = 54, then what is the code for MOON?",
                        options: ["57", "66", "63", "60"],
                        correctAnswer: "66",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Introducing a man, a woman said, 'He is the only son of my mother's mother.' How is the man related to the woman?",
                        options: ["Brother", "Cousin", "Uncle", "Father"],
                        correctAnswer: "Brother",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Find the missing term: ACE, BDF, ? , DJG",
                        options: ["CEG", "CFG", "CFH", "CFF"],
                        correctAnswer: "CEG",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A man walks 10 m north, then turns right and walks 20 m. Then again turns right and walks 10 m. What direction is he facing now?",
                        options: ["North", "South", "East", "West"],
                        correctAnswer: "South",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which one of the following is different from the others?",
                        options: ["Circle", "Sphere", "Square", "Triangle"],
                        correctAnswer: "Sphere",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If LANGUAGE is written as OBRHYDJE, then how is ENGLISH written?",
                        options: ["GPINKUJI", "GRINKUJI", "GRINLUJI", "GQINKUJI"],
                        correctAnswer: "GRINKUJI",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Five people A, B, C, D, and E are sitting in a row. B is to the right of A but to the left of C. E is to the right of C. Who is sitting in the middle?",
                        options: ["B", "C", "D", "A"],
                        correctAnswer: "C",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Choose the odd one out: Apple, Orange, Banana, Carrot",
                        options: ["Apple", "Orange", "Banana", "Carrot"],
                        correctAnswer: "Carrot",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Arrange in logical sequence: 1. Seed, 2. Fruit, 3. Tree, 4. Plant, 5. Flower",
                        options: ["1, 4, 3, 5, 2", "1, 2, 3, 4, 5", "1, 3, 4, 2, 5", "1, 4, 5, 2, 3"],
                        correctAnswer: "1, 4, 3, 5, 2",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If RED is coded as 729, what is the code for BLUE? (A=1 to Z=26)",
                        options: ["2120", "2044", "2080", "2000"],
                        correctAnswer: "2044",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Find the next number: 3, 5, 9, 17, 33, ?",
                        options: ["65", "63", "67", "69"],
                        correctAnswer: "65",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which word cannot be formed from the letters of 'PRODUCTION'?",
                        options: ["CREDIT", "COUNT", "ACTION", "PICTURE"],
                        correctAnswer: "PICTURE",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If Jan 1, 2021 is Friday, what day is Jan 1, 2022?",
                        options: ["Saturday", "Sunday", "Monday", "Friday"],
                        correctAnswer: "Saturday",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Find the odd one: 121, 144, 169, 225, 256",
                        options: ["121", "144", "169", "225"],
                        correctAnswer: "225",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the angle between hour and minute hand at 3:15?",
                        options: ["7.5°", "15°", "22.5°", "30°"],
                        correctAnswer: "7.5°",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What comes next in the pattern: AZ, BY, CX, ?",
                        options: ["DW", "DU", "EV", "FW"],
                        correctAnswer: "DW",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Data Sufficiency & Interpretation",
        description: "A comprehensive test covering data sufficiency, data interpretation, and analytical reasoning with tables, graphs, and charts.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Data Sufficiency & Interpretation",
                description: "Questions on data sufficiency, data interpretation, and analytical reasoning with tables, graphs, and charts.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "Directions: A question is followed by two statements I and II. Determine whether the data given in the statements is sufficient to answer the question.\n\nQuestion: What is the value of x?\nI. x^2 = 49\nII. x is a prime number.",
                        options: [
                            "Statement I alone is sufficient.",
                            "Statement II alone is sufficient.",
                            "Both statements together are sufficient.",
                            "Statements I and II together are not sufficient."
                        ],
                        correctAnswer: "Both statements together are sufficient.",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the average of five consecutive even numbers?\nI. The third number is 18.\nII. The largest number is 22.",
                        options: [
                            "Only I is sufficient",
                            "Only II is sufficient",
                            "Either I or II is sufficient",
                            "Both I and II are sufficient"
                        ],
                        correctAnswer: "Either I or II is sufficient",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Directions: Study the table and answer.\n\n| Month | Profit (in ₹000s) |\n|-------|-------------------|\n| Jan   | 45                |\n| Feb   | 50                |\n| Mar   | 60                |\n| Apr   | 55                |\n\nWhat was the average monthly profit in the first four months?",
                        options: ["52.5", "53.75", "55", "50"],
                        correctAnswer: "52.5",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the percentage increase in profit from Jan to Mar based on the table above?",
                        options: ["33.33%", "20%", "25%", "30%"],
                        correctAnswer: "33.33%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Directions: In a pie chart, 25% is allocated to marketing in a company's budget of ₹8,00,000. How much is allocated for marketing?",
                        options: ["₹2,00,000", "₹1,50,000", "₹2,50,000", "₹1,00,000"],
                        correctAnswer: "₹2,00,000",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the sales of a company increase by 20% every year, and current sales are ₹1,00,000, what will be the sales after 2 years?",
                        options: ["₹1,44,000", "₹1,40,000", "₹1,20,000", "₹1,30,000"],
                        correctAnswer: "₹1,44,000",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Directions: What is the average of numbers 24, 36, 42, 18, 30?",
                        options: ["30", "32", "28", "25"],
                        correctAnswer: "30",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the average of x, x+2, and x+4 is 24, what is the value of x?",
                        options: ["22", "20", "24", "18"],
                        correctAnswer: "22",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Directions: In a class of 60 students, 30% are girls. How many boys are there?",
                        options: ["42", "40", "45", "48"],
                        correctAnswer: "42",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which of the following graphs best represents a constant rate of change?",
                        options: ["Straight line", "Parabola", "Circle", "Exponential curve"],
                        correctAnswer: "Straight line",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a bar graph showing number of books sold in 5 months, Jan has 150 books and Feb has 180 books. What is the percentage increase?",
                        options: ["20%", "25%", "18%", "15%"],
                        correctAnswer: "20%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A data set contains the numbers: 5, 8, 12, 15, 15, 18. What is the median?",
                        options: ["12", "13.5", "15", "11"],
                        correctAnswer: "13.5",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A company's profit and loss over 5 years are: +20k, -10k, +30k, -20k, +40k. What is the net result?",
                        options: ["+60k", "+40k", "+30k", "+50k"],
                        correctAnswer: "+60k",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the mean of 4 numbers is 25, and three numbers are 20, 30, and 25, what is the fourth number?",
                        options: ["25", "30", "20", "15"],
                        correctAnswer: "25",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pie chart shows 40% on product A, 30% on B, 20% on C, and 10% on D. Which product has the smallest allocation?",
                        options: ["A", "B", "C", "D"],
                        correctAnswer: "D",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a line graph, if points rise steeply from Jan to Feb, what does that indicate?",
                        options: ["Increase", "Decrease", "Stagnation", "Drop"],
                        correctAnswer: "Increase",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What does the mode represent in a data set?",
                        options: ["Most frequent value", "Middle value", "Average", "Highest value"],
                        correctAnswer: "Most frequent value",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A table shows student marks out of 50. A student scored 40. What is the percentage score?",
                        options: ["80%", "75%", "90%", "85%"],
                        correctAnswer: "80%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two statements are given:\nI. A is greater than B.\nII. B is greater than C.\nIs A greater than C?",
                        options: [
                            "Yes, always",
                            "No, not always",
                            "Only if values are known",
                            "Cannot be determined"
                        ],
                        correctAnswer: "Yes, always",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pie chart represents expenses: Rent 30%, Food 25%, Travel 15%, Others 30%. What is the largest expense?",
                        options: ["Rent", "Food", "Travel", "Others"],
                        correctAnswer: "Rent",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Probability & Statistics",
        description: "A comprehensive test covering probability theory, statistical measures, and data analysis concepts.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Probability & Statistics",
                description: "Questions on probability theory, statistical measures, and data analysis concepts.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "What is the probability of getting a head when a fair coin is tossed?",
                        options: ["1/2", "1/4", "1/3", "1"],
                        correctAnswer: "1/2",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If two dice are rolled, what is the probability that the sum is 7?",
                        options: ["1/6", "1/12", "1/9", "1/8"],
                        correctAnswer: "1/6",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A bag contains 5 red balls and 3 green balls. What is the probability of drawing a red ball?",
                        options: ["5/8", "3/8", "1/2", "5/3"],
                        correctAnswer: "5/8",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the mean of the numbers: 3, 7, 7, 19, 24?",
                        options: ["12", "10", "14", "15"],
                        correctAnswer: "12",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a class, 40% of students passed in Maths, 50% passed in English, and 20% passed in both. What is the probability a randomly selected student passed in Maths or English?",
                        options: ["70%", "60%", "90%", "50%"],
                        correctAnswer: "70%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the variance of a data set is 16, what is the standard deviation?",
                        options: ["4", "8", "16", "32"],
                        correctAnswer: "4",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A card is drawn from a standard deck of 52 cards. What is the probability it is a King?",
                        options: ["1/13", "1/52", "4/52", "1/4"],
                        correctAnswer: "1/13",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If P(A) = 0.4 and P(B) = 0.5, and events A and B are mutually exclusive, what is P(A or B)?",
                        options: ["0.9", "0.2", "0.5", "0.1"],
                        correctAnswer: "0.9",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the median of the data set: 12, 15, 14, 10, 18?",
                        options: ["14", "15", "12", "13"],
                        correctAnswer: "14",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a binomial distribution with n=10 trials and probability of success p=0.5, what is the expected number of successes?",
                        options: ["5", "10", "0.5", "1"],
                        correctAnswer: "5",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the probability of an event occurring is 0.75, what are the odds in favor of the event?",
                        options: ["3:1", "1:3", "1:4", "4:1"],
                        correctAnswer: "3:1",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the range of the data set: 25, 30, 15, 20, 28?",
                        options: ["15", "10", "13", "25"],
                        correctAnswer: "15",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two independent events A and B have probabilities 0.3 and 0.4 respectively. What is the probability that both events occur?",
                        options: ["0.12", "0.7", "0.1", "0.6"],
                        correctAnswer: "0.12",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a normal distribution, approximately what percentage of values lie within one standard deviation of the mean?",
                        options: ["68%", "50%", "95%", "99.7%"],
                        correctAnswer: "68%",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the probability of success in a single trial is 0.2, what is the probability of failure?",
                        options: ["0.8", "0.2", "1", "0.4"],
                        correctAnswer: "0.8",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the mean of a data set is 50 and the sum of all data points is 500, how many data points are there?",
                        options: ["10", "50", "500", "25"],
                        correctAnswer: "10",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the probability of drawing an ace or a king from a standard deck of cards?",
                        options: ["2/13", "1/13", "1/26", "4/13"],
                        correctAnswer: "2/13",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If events A and B are independent, what is P(A and B)?",
                        options: [
                            "P(A) × P(B)",
                            "P(A) + P(B)",
                            "P(A) - P(B)",
                            "Cannot be determined"
                        ],
                        correctAnswer: "P(A) × P(B)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A die is rolled twice. What is the probability of getting two sixes?",
                        options: ["1/36", "1/12", "1/6", "1/18"],
                        correctAnswer: "1/36",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If the probability of rain tomorrow is 0.3, what is the probability that it will not rain?",
                        options: ["0.7", "0.3", "1", "0.6"],
                        correctAnswer: "0.7",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Permutations & Combinations",
        description: "A comprehensive test covering permutations, combinations, and counting principles.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Permutations & Combinations",
                description: "Questions on permutations, combinations, and counting principles.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "How many ways can 5 people be arranged in a row?",
                        options: ["120", "60", "24", "20"],
                        correctAnswer: "120",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "From a group of 10, how many ways can you choose 3 people?",
                        options: ["120", "720", "30", "100"],
                        correctAnswer: "120",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the number of ways to arrange the letters of the word 'LEVEL'?",
                        options: ["60", "120", "24", "30"],
                        correctAnswer: "60",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In how many ways can 4 books be placed on a shelf?",
                        options: ["24", "12", "16", "8"],
                        correctAnswer: "24",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many different 3-digit numbers can be formed using digits 1, 2, 3, 4 without repetition?",
                        options: ["24", "64", "12", "48"],
                        correctAnswer: "24",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can a committee of 4 be formed from 7 people?",
                        options: ["35", "24", "21", "28"],
                        correctAnswer: "35",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the value of 7P3 (permutations of 7 items taken 3 at a time)?",
                        options: ["210", "35", "343", "105"],
                        correctAnswer: "210",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the value of 8C2 (combinations of 8 items taken 2 at a time)?",
                        options: ["28", "56", "16", "64"],
                        correctAnswer: "28",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can the letters of the word 'BANANA' be arranged?",
                        options: ["60", "120", "720", "180"],
                        correctAnswer: "60",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can 3 boys and 2 girls be arranged in a row?",
                        options: ["120", "60", "24", "20"],
                        correctAnswer: "120",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If a password consists of 4 letters followed by 2 digits, how many such passwords are possible assuming repetition is allowed?",
                        options: ["456,976,000", "1,679,616", "26,000", "175,760"],
                        correctAnswer: "456,976,000",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In how many ways can you arrange 5 identical balls in 3 distinct boxes?",
                        options: ["21", "15", "10", "35"],
                        correctAnswer: "21",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can you select 2 marbles from a bag containing 5 red and 6 blue marbles?",
                        options: ["55", "11", "30", "15"],
                        correctAnswer: "55",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the total number of subsets of a set with 5 elements?",
                        options: ["32", "25", "16", "10"],
                        correctAnswer: "32",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can you arrange 4 men and 3 women in a row such that no two women sit together?",
                        options: ["288", "360", "120", "240"],
                        correctAnswer: "288",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "From 10 people, how many ways can you select a president, vice president, and secretary?",
                        options: ["720", "1000", "7200", "90"],
                        correctAnswer: "720",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many different 5-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
                        options: ["120", "60", "24", "100"],
                        correctAnswer: "120",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can 3 students be chosen from a class of 12?",
                        options: ["220", "132", "66", "55"],
                        correctAnswer: "220",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can the letters of the word 'MISSISSIPPI' be arranged?",
                        options: ["34,650", "11,520", "15,120", "25,200"],
                        correctAnswer: "34,650",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "How many ways can you arrange 3 red balls and 2 green balls in a row?",
                        options: ["10", "12", "20", "30"],
                        correctAnswer: "10",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Time, Work & Optimizations",
        description: "A comprehensive test covering time and work problems, pipe and cistern problems, and work optimization concepts.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Time, Work & Optimizations",
                description: "Questions on time and work problems, pipe and cistern problems, and work optimization concepts.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "If 5 workers can complete a work in 12 days, how many days will 3 workers take to complete the same work?",
                        options: ["20 days", "15 days", "18 days", "12 days"],
                        correctAnswer: "20 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A can do a piece of work in 10 days and B in 15 days. How long will they take to finish the work if they work together?",
                        options: ["6 days", "7 days", "8 days", "9 days"],
                        correctAnswer: "6 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If A is twice as efficient as B, and B takes 18 days to complete a work, how many days will A and B take working together to complete the work?",
                        options: ["6 days", "9 days", "12 days", "8 days"],
                        correctAnswer: "6 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
                        options: ["12 minutes", "15 minutes", "10 minutes", "25 minutes"],
                        correctAnswer: "12 minutes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Pipe A can fill a tank in 15 hours and pipe B can empty it in 20 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
                        options: ["60 hours", "75 hours", "100 hours", "50 hours"],
                        correctAnswer: "60 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If 8 men can build a wall in 24 days, how many men are needed to build the same wall in 12 days?",
                        options: ["12", "14", "16", "18"],
                        correctAnswer: "16",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A and B together can do a work in 18 days. A alone can do it in 30 days. How long will B alone take to do the work?",
                        options: ["45 days", "54 days", "60 days", "36 days"],
                        correctAnswer: "45 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A, B, and C can do a work in 12, 15, and 20 days respectively. If all work together, how long will they take to finish the work?",
                        options: ["5 days", "6 days", "4 days", "7 days"],
                        correctAnswer: "5 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If a pipe fills 1/3 of a tank in 2 hours, how long will it take to fill the entire tank?",
                        options: ["4 hours", "5 hours", "6 hours", "7 hours"],
                        correctAnswer: "6 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Pipe A can fill a tank in 24 minutes, and pipe B can fill the same tank in 36 minutes. How long will it take to fill the tank if both pipes are opened together?",
                        options: ["14.4 minutes", "15 minutes", "12 minutes", "18 minutes"],
                        correctAnswer: "14.4 minutes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A can do a work in 20 days and B in 25 days. They worked together for 5 days. How much work is left?",
                        options: ["3/5", "4/5", "1/5", "2/5"],
                        correctAnswer: "3/5",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 8 hours and 12 hours respectively. A third pipe can empty the full tank in 6 hours. If all pipes are opened simultaneously, how long will it take to fill the tank?",
                        options: ["10 hours", "12 hours", "8 hours", "9 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A and B together can do a work in 10 days. B alone can do it in 15 days. How long will A alone take to do the work?",
                        options: ["20 days", "30 days", "25 days", "18 days"],
                        correctAnswer: "30 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If a worker can do 1/4 of a work in 3 days, how many days will he take to complete the entire work?",
                        options: ["9 days", "12 days", "15 days", "18 days"],
                        correctAnswer: "12 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pipe fills a tank in 6 hours. Due to a leak, it takes 8 hours to fill the tank. How long will the leak take to empty the full tank?",
                        options: ["24 hours", "20 hours", "18 hours", "16 hours"],
                        correctAnswer: "24 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If 6 men can complete a work in 10 days, how many men are needed to complete the work in 5 days?",
                        options: ["10", "12", "15", "20"],
                        correctAnswer: "12",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Pipe A can fill a tank in 10 hours, and pipe B can fill the same tank in 15 hours. Pipe C empties the tank in 20 hours. If all three pipes are opened together, how long will it take to fill the tank?",
                        options: ["12 hours", "10 hours", "15 hours", "20 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A can do a work in 24 days. He worked for 8 days and then B finished the remaining work in 6 days. How long will B take to complete the entire work alone?",
                        options: ["12 days", "18 days", "24 days", "30 days"],
                        correctAnswer: "18 days",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If 3 pipes can fill a tank in 12 hours, 18 hours, and 24 hours respectively, how long will they take to fill the tank if all are opened together?",
                        options: ["5 hours", "6 hours", "7 hours", "8 hours"],
                        correctAnswer: "5 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two taps running together can fill a tank in 20 minutes. One tap is twice as fast as the other. How long will the slower tap take to fill the tank alone?",
                        options: ["30 minutes", "40 minutes", "60 minutes", "45 minutes"],
                        correctAnswer: "60 minutes",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Pipes, Cisterns, Boats & Streams",
        description: "A comprehensive test covering problems related to pipes and cisterns, boats and streams, and related concepts.",
        type: "aptitude_practice",
        duration: 30,
        totalMarks: 200,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        sections: [
            {
                name: "Pipes, Cisterns, Boats & Streams",
                description: "Questions on pipes and cisterns, boats and streams, and related concepts.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                        questionText: "Two pipes A and B can fill a tank in 12 and 15 minutes respectively. Pipe C can empty the tank in 20 minutes. If all three pipes are opened together, how long will it take to fill the tank?",
                        options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
                        correctAnswer: "12 minutes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A cistern has two inlet pipes and one outlet pipe. The first inlet pipe fills the tank in 6 hours, the second in 8 hours, and the outlet pipe empties it in 12 hours. If all pipes are open, how long will it take to fill the tank?",
                        options: ["10 hours", "12 hours", "14 hours", "16 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat goes 20 km downstream in 2 hours and returns upstream in 4 hours. What is the speed of the boat in still water?",
                        options: ["5 km/h", "7.5 km/h", "8 km/h", "10 km/h"],
                        correctAnswer: "7.5 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat can row at 6 km/h in still water. If the speed of the stream is 2 km/h, how long will it take to row 16 km downstream?",
                        options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
                        correctAnswer: "2 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 10 and 15 hours respectively. A leak can empty the tank in 30 hours. If all are opened together, how long will it take to fill the tank?",
                        options: ["8 hours", "10 hours", "12 hours", "15 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pipe fills a tank in 3 hours. Due to a leak, it takes 5 hours to fill the tank. How long will the leak take to empty the full tank?",
                        options: ["7.5 hours", "10 hours", "15 hours", "20 hours"],
                        correctAnswer: "7.5 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat takes 6 hours to go downstream and 9 hours to come back upstream between two points. If the speed of the boat in still water is 12 km/h, what is the speed of the stream?",
                        options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
                        correctAnswer: "3 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A can fill a tank in 8 hours and B can fill it in 12 hours. They fill the tank together, but after 2 hours, pipe B is closed. How long will it take to fill the tank completely?",
                        options: ["10 hours", "11 hours", "12 hours", "13 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pipe fills a tank in 6 hours. Another pipe fills the same tank in 8 hours. How long will both pipes take to fill the tank if opened together?",
                        options: ["3 hours", "4 hours", "5 hours", "6 hours"],
                        correctAnswer: "3.43 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A man rows a boat at 5 km/h in still water. If the speed of the stream is 3 km/h, what is his speed upstream?",
                        options: ["2 km/h", "3 km/h", "5 km/h", "8 km/h"],
                        correctAnswer: "2 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 20 and 30 minutes respectively. The emptying pipe can empty it in 40 minutes. If all pipes are opened together, how long will it take to fill the tank?",
                        options: ["15 minutes", "18 minutes", "20 minutes", "25 minutes"],
                        correctAnswer: "20 minutes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat covers a distance of 24 km downstream in 2 hours and the same distance upstream in 3 hours. Find the speed of the boat in still water.",
                        options: ["6 km/h", "7 km/h", "8 km/h", "9 km/h"],
                        correctAnswer: "7.2 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "If a pipe fills 1/4th of a tank in 3 hours, how long will it take to fill the entire tank?",
                        options: ["6 hours", "9 hours", "12 hours", "15 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat goes 16 km downstream in 2 hours and returns upstream in 4 hours. What is the speed of the stream?",
                        options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
                        correctAnswer: "2 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 15 and 20 minutes respectively. A leak can empty the full tank in 30 minutes. How long will it take to fill the tank when both pipes and leak are open?",
                        options: ["12 minutes", "13 minutes", "14 minutes", "15 minutes"],
                        correctAnswer: "12 minutes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A pipe can fill a tank in 4 hours. A leak can empty the tank in 6 hours. If the tank is full, how long will it take to empty it if both pipe and leak are opened together?",
                        options: ["12 hours", "8 hours", "6 hours", "24 hours"],
                        correctAnswer: "12 hours",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat takes 5 hours to go upstream and 3 hours downstream for a certain distance. What is the speed of the stream if the boat's speed in still water is 6 km/h?",
                        options: ["1 km/h", "1.5 km/h", "2 km/h", "2.5 km/h"],
                        correctAnswer: "1.5 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Two pipes can fill a tank in 9 and 12 hours respectively. The tank is filled by both pipes working together. How much of the tank is filled in 3 hours?",
                        options: ["1/3", "1/4", "1/2", "2/3"],
                        correctAnswer: "1/3",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A boat covers a distance upstream in 6 hours and the same distance downstream in 4 hours. If the speed of the stream is 2 km/h, what is the speed of the boat in still water?",
                        options: ["6 km/h", "7 km/h", "8 km/h", "9 km/h"],
                        correctAnswer: "7 km/h",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A cistern is filled by three pipes in 12, 15, and 20 hours respectively. How long will it take to fill the cistern if all pipes are opened together?",
                        options: ["5 hours", "6 hours", "7 hours", "8 hours"],
                        correctAnswer: "5 hours",
                        marks: 10
                    }
                ]
            }
        ]
    },
    {
        title: "Comprehensive Technical Skills Assessment",
        description: "An assessment covering core technical concepts across various domains relevant for software engineering and IT roles.",
        type: "technical_domain_assessment", // A general type for this overall technical assessment
        duration: 210, // Assuming 30 mins per section on average (7 sections * 30 mins)
        totalMarks: 1400, // 7 sections * 20 questions * 10 marks
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // Valid for 60 days
        sections: [
            {
                id: 'tech_data_structures_algorithms', // Unique ID for this section
                name: "Data Structures & Algorithms",
                description: "Fundamental concepts of data organization, algorithm design, and efficiency analysis.",
                type: "mcq", // Section type
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                  // ... (20 MCQs for DSA - I'll use the ones from the previous example for brevity here)
                  // You already have a good set for DSA from the previous response.
                  // I will add a few more unique ones to reach 20 if needed, or you can reuse.
                    {
                        type: "mcq",
                        questionText: "What is the time complexity for inserting an element at the beginning of an array of size N?",
                        options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                        correctAnswer: "O(N)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
                        options: ["Queue", "Heap", "Stack", "Linked List"],
                        correctAnswer: "Stack",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A graph where every pair of distinct vertices is connected by a unique edge is called a:",
                        options: ["Complete Graph", "Connected Graph", "Bipartite Graph", "Tree"],
                        correctAnswer: "Complete Graph",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the primary operation of a 'dequeue' in a queue data structure?",
                        options: ["Adding an element to the front", "Removing an element from the front", "Adding an element to the rear", "Viewing the front element"],
                        correctAnswer: "Removing an element from the front",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which of the following sorting algorithms is adaptive (i.e., its performance improves if the input is partially sorted)?",
                        options: ["Merge Sort", "Heap Sort", "Insertion Sort", "Selection Sort"],
                        correctAnswer: "Insertion Sort",
                        marks: 10
                    },
                  // (Add 15 more DSA questions to reach 20)
                    {
                        type: "mcq",
                        questionText: "What is the worst-case time complexity of a quicksort algorithm?",
                        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
                        correctAnswer: "O(n^2)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which data structure is typically used to implement a priority queue?",
                        options: ["Stack", "Queue", "Heap", "Linked List"],
                        correctAnswer: "Heap",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A binary search algorithm can be applied to:",
                        options: ["Any unsorted array", "A sorted linked list", "A sorted array", "A graph"],
                        correctAnswer: "A sorted array",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which of the following is NOT a type of tree traversal?",
                        options: ["In-order", "Pre-order", "Side-order", "Level-order"],
                        correctAnswer: "Side-order",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What does DFS stand for in graph traversal?",
                        options: ["Direct File System", "Depth First Search", "Data Flow System", "Dynamic File Search"],
                        correctAnswer: "Depth First Search",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which algorithm is used to find the shortest path in an unweighted graph?",
                        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Breadth-First Search (BFS)", "Prim's Algorithm"],
                        correctAnswer: "Breadth-First Search (BFS)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the primary advantage of a hash table?",
                        options: ["Guaranteed worst-case O(log n) search", "Efficient for range queries", "Average O(1) time complexity for search, insert, and delete", "Space efficiency"],
                        correctAnswer: "Average O(1) time complexity for search, insert, and delete",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Dynamic programming is a method for solving problems by:",
                        options: ["Using a greedy approach at each step", "Breaking them down into simpler overlapping subproblems", "Exploring all possible solutions randomly", "Using divide and conquer without overlapping subproblems"],
                        correctAnswer: "Breaking them down into simpler overlapping subproblems",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "What is the space complexity of storing a graph using an adjacency matrix (V vertices, E edges)?",
                        options: ["O(V+E)", "O(V*E)", "O(V^2)", "O(E)"],
                        correctAnswer: "O(V^2)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "The operation of processing each element in a list is known as:",
                        options: ["Sorting", "Merging", "Inserting", "Traversal"],
                        correctAnswer: "Traversal",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which of these is NOT a stable sorting algorithm?",
                        options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Quick Sort"],
                        correctAnswer: "Quick Sort",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "A data structure where elements can be added or removed at either end but not in the middle is called a:",
                        options: ["Queue", "Stack", "Deque", "Priority Queue"],
                        correctAnswer: "Deque",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "In a max-heap, the parent node is always ____ its children.",
                        options: ["less than or equal to", "greater than or equal to", "equal to", "not related to"],
                        correctAnswer: "greater than or equal to",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "The time complexity to find an element in a skip list on average is:",
                        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                        correctAnswer: "O(log n)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                        questionText: "Which of the following is an example of a greedy algorithm?",
                        options: ["Floyd-Warshall algorithm", "Bellman-Ford algorithm", "Kruskal's algorithm for MST", "Tower of Hanoi"],
                        correctAnswer: "Kruskal's algorithm for MST",
                        marks: 10
            }
        ]
    },
    {
              id: 'tech_database_management_systems',
              name: "Database Management Systems",
              description: "Concepts of database design, SQL, NoSQL, normalization, and transaction management.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                  // ... (20 MCQs for DBMS - I'll use the ones from the previous example)
                  // You already have a good set for DBMS.
                    {
                        type: "mcq",
                      questionText: "What does ACID stand for in the context of database transactions?",
                      options: ["Atomicity, Consistency, Isolation, Durability", "Availability, Concurrency, Integrity, Durability", "Atomicity, Correctness, Invariability, Data-integrity", "Association, Cohesion, Isolation, Development"],
                      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which SQL clause is used to filter results based on a condition?",
                      options: ["SELECT", "FROM", "WHERE", "GROUP BY"],
                      correctAnswer: "WHERE",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the main purpose of database normalization?",
                      options: ["To increase data redundancy", "To reduce data redundancy and improve data integrity", "To speed up all queries", "To make the database schema more complex"],
                      correctAnswer: "To reduce data redundancy and improve data integrity",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which normal form deals with eliminating transitive dependencies?",
                      options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
                      correctAnswer: "Third Normal Form (3NF)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A primary key in a relational database table:",
                      options: ["Can contain NULL values", "Must uniquely identify each record in the table", "Can have duplicate values", "Is optional for every table"],
                      correctAnswer: "Must uniquely identify each record in the table",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which type of SQL JOIN returns all rows from the left table, and the matched rows from the right table?",
                      options: ["INNER JOIN", "LEFT JOIN (or LEFT OUTER JOIN)", "RIGHT JOIN (or RIGHT OUTER JOIN)", "FULL JOIN (or FULL OUTER JOIN)"],
                      correctAnswer: "LEFT JOIN (or LEFT OUTER JOIN)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is an index in a database used for?",
                      options: ["To enforce data types", "To ensure data security", "To speed up data retrieval operations", "To store large binary objects"],
                      correctAnswer: "To speed up data retrieval operations",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which SQL command is used to delete a database table?",
                      options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"],
                      correctAnswer: "DROP TABLE",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'T' in ACID properties (Durability) ensures that:",
                      options: ["Transactions are processed completely or not at all", "Data is always in a consistent state", "Concurrent transactions do not interfere with each other", "Once a transaction is committed, it will remain so, even in the event of power loss or system crashes"],
                      correctAnswer: "Once a transaction is committed, it will remain so, even in the event of power loss or system crashes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of the following is a NoSQL database type?",
                      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                      correctAnswer: "MongoDB",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Data Manipulation Language (DML) includes commands like:",
                      options: ["CREATE, ALTER, DROP", "GRANT, REVOKE", "INSERT, UPDATE, DELETE", "COMMIT, ROLLBACK"],
                      correctAnswer: "INSERT, UPDATE, DELETE",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A foreign key is used to:",
                      options: ["Uniquely identify a record within a table", "Link two tables together", "Define the data type of a column", "Sort query results"],
                      correctAnswer: "Link two tables together",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is 'Cardinality' in the context of database relationships?",
                      options: ["The number of columns in a table", "The number of unique values in a column", "The numerical relationship between rows of one table and rows of another", "The maximum number of rows a table can store"],
                      correctAnswer: "The numerical relationship between rows of one table and rows of another",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The SQL `GROUP BY` clause is often used with:",
                      options: ["ORDER BY", "WHERE", "Aggregate functions (e.g., COUNT, SUM, AVG)", "JOIN"],
                      correctAnswer: "Aggregate functions (e.g., COUNT, SUM, AVG)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a 'deadlock' in a database system?",
                      options: ["When a query returns no results", "When two or more transactions are waiting for each other to release resources", "When a database backup fails", "When an index becomes corrupted"],
                      correctAnswer: "When two or more transactions are waiting for each other to release resources",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of these is NOT a characteristic of Big Data?",
                      options: ["Volume", "Velocity", "Volatility", "Variety"],
                      correctAnswer: "Volatility",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A view in SQL is a:",
                      options: ["Physical copy of a table", "Virtual table based on the result-set of an SQL statement", "Temporary table used for sorting", "Snapshot of data at a specific time"],
                      correctAnswer: "Virtual table based on the result-set of an SQL statement",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'Isolation' property of ACID ensures that:",
                      options: ["All changes from a transaction are permanently saved", "Transactions execute independently of other concurrent transactions", "A transaction brings the database from one valid state to another", "A transaction completes entirely or not at all"],
                      correctAnswer: "Transactions execute independently of other concurrent transactions",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which SQL keyword is used to sort the result set?",
                      options: ["SORT BY", "ARRANGE BY", "ORDER BY", "GROUP BY"],
                      correctAnswer: "ORDER BY",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a subquery in SQL?",
                      options: ["A query used to define a view", "A query embedded inside another query", "A query that modifies data", "A query that operates on metadata"],
                      correctAnswer: "A query embedded inside another query",
                        marks: 10
            }
        ]
    },
    {
              id: 'tech_operating_systems',
              name: "Operating Systems",
              description: "Core concepts of operating systems including process management, memory management, file systems, and concurrency.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                  // ... (20 MCQs for OS - I'll use the ones from the previous example)
                  // You already have a good set for OS.
                    {
                        type: "mcq",
                      questionText: "What is the primary purpose of an Operating System?",
                      options: ["To provide a word processing interface", "To manage hardware and software resources", "To compile source code into executable programs", "To provide internet connectivity"],
                      correctAnswer: "To manage hardware and software resources",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of these is a characteristic of a process but not a thread?",
                      options: ["Execution context (registers, PC)", "Has its own address space", "Can share data with other similar units easily", "Is a lightweight unit of execution"],
                      correctAnswer: "Has its own address space",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a 'Race Condition' in the context of concurrent programming?",
                      options: ["When two processes compete to finish first", "A situation where the outcome depends on the unpredictable sequence of operations by multiple processes", "When a process runs too fast for the hardware", "When the OS prioritizes one process over another unfairly"],
                      correctAnswer: "A situation where the outcome depends on the unpredictable sequence of operations by multiple processes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which scheduling algorithm provides the minimum average waiting time?",
                      options: ["First Come First Serve (FCFS)", "Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"],
                      correctAnswer: "Shortest Job First (SJF)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Virtual memory is a technique that allows:",
                      options: ["Multiple operating systems to run on one physical machine", "The execution of processes that may not be completely in physical memory", "Faster access to frequently used disk data", "CPU cores to execute multiple threads simultaneously"],
                      correctAnswer: "The execution of processes that may not be completely in physical memory",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is 'Thrashing' in an operating system?",
                      options: ["Excessive disk access for printing", "A high rate of page faults leading to low CPU utilization", "When the CPU overheats due to heavy load", "Unauthorized access to system files"],
                      correctAnswer: "A high rate of page faults leading to low CPU utilization",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A semaphore is used for:",
                      options: ["Memory allocation", "Disk scheduling", "File system organization", "Synchronization between processes"],
                      correctAnswer: "Synchronization between processes",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of the following is NOT a necessary condition for deadlock?",
                      options: ["Mutual Exclusion", "Hold and Wait", "Starvation", "Circular Wait"],
                      correctAnswer: "Starvation",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The Banker's algorithm is used for:",
                      options: ["CPU scheduling", "Deadlock prevention", "Deadlock avoidance", "Memory allocation"],
                      correctAnswer: "Deadlock avoidance",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a context switch?",
                      options: ["Switching the display resolution", "Changing the user interface theme", "The process of storing and restoring the state of a CPU so that execution can be resumed from the same point later", "Moving a file from one directory to another"],
                      correctAnswer: "The process of storing and restoring the state of a CPU so that execution can be resumed from the same point later",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which memory allocation policy allocates the smallest hole that is big enough?",
                      options: ["First Fit", "Best Fit", "Worst Fit", "Next Fit"],
                      correctAnswer: "Best Fit",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is 'fragmentation' in memory management?",
                      options: ["Damage to physical memory chips", "Loss of data during transfer", "The condition where memory is broken into small, non-contiguous pieces", "A security breach in memory"],
                      correctAnswer: "The condition where memory is broken into small, non-contiguous pieces",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Paging is a memory management scheme that allows:",
                      options: ["Processes to be stored on disk before execution", "A process's physical address space to be non-contiguous", "Only one process to be in memory at a time", "Dynamic linking of libraries"],
                      correctAnswer: "A process's physical address space to be non-contiguous",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'Shell' in an operating system is primarily a:",
                      options: ["Hardware component", "Kernel module for memory management", "Command interpreter", "System clock"],
                      correctAnswer: "Command interpreter",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of these is a real-time operating system (RTOS) characteristic?",
                      options: ["High throughput", "User-friendly GUI", "Time-bound execution of tasks", "Large storage capacity"],
                      correctAnswer: "Time-bound execution of tasks",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What does 'fork()' system call create?",
                      options: ["A new file", "A new thread", "A new process (child process)", "A new directory"],
                      correctAnswer: "A new process (child process)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Spinlocks are:",
                      options: ["File locking mechanisms", "Hardware interrupts", "Locks that cause a thread trying to acquire it to simply wait in a loop ('spin') while checking if the lock is available", "User interface elements for rotation"],
                      correctAnswer: "Locks that cause a thread trying to acquire it to simply wait in a loop ('spin') while checking if the lock is available",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The time taken by the disk arm to locate the specific sector on a track is known as:",
                      options: ["Seek Time", "Rotational Latency", "Transfer Time", "Access Time"],
                      correctAnswer: "Rotational Latency",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the function of a TLB (Translation Lookaside Buffer)?",
                      options: ["To store frequently accessed disk blocks", "To speed up the translation of virtual addresses to physical addresses", "To cache web pages", "To manage network packets"],
                      correctAnswer: "To speed up the translation of virtual addresses to physical addresses",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which file system is commonly used by Linux distributions?",
                      options: ["NTFS", "FAT32", "HFS+", "ext4"],
                      correctAnswer: "ext4",
                        marks: 10
                  }
              ]
          },
          // 4. Computer Networks
          {
              id: 'tech_computer_networks',
              name: "Computer Networks",
              description: "Understanding network protocols, OSI/TCP-IP models, and network security.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                      questionText: "Which layer of the OSI model is responsible for routing packets?",
                      options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
                      correctAnswer: "Network Layer",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "TCP (Transmission Control Protocol) is a:",
                      options: ["Connectionless protocol", "Connection-oriented protocol", "Protocol used for broadcasting", "Physical layer protocol"],
                      correctAnswer: "Connection-oriented protocol",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the primary function of DNS (Domain Name System)?",
                      options: ["To assign IP addresses to devices", "To translate domain names to IP addresses", "To encrypt network traffic", "To manage network bandwidth"],
                      correctAnswer: "To translate domain names to IP addresses",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of the following is a private IP address range?",
                      options: ["8.8.8.8", "172.16.0.0 - 172.31.255.255", "203.0.113.0", "1.1.1.1"],
                      correctAnswer: "172.16.0.0 - 172.31.255.255",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "HTTP (Hypertext Transfer Protocol) primarily operates on which port?",
                      options: ["21", "22", "53", "80"],
                      correctAnswer: "80",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What does a subnet mask do?",
                      options: ["Encrypts data packets", "Identifies the network portion and host portion of an IP address", "Assigns dynamic IP addresses", "Filters unwanted network traffic"],
                      correctAnswer: "Identifies the network portion and host portion of an IP address",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which protocol is used for sending email?",
                      options: ["FTP", "SMTP", "HTTP", "SNMP"],
                      correctAnswer: "SMTP",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The physical layer of the OSI model deals with:",
                      options: ["Error detection and correction", "Transmission of raw bits over a communication channel", "Logical addressing", "Process-to-process communication"],
                      correctAnswer: "Transmission of raw bits over a communication channel",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a MAC address?",
                      options: ["A logical address assigned by the network administrator", "A unique hardware identifier assigned to a network interface controller (NIC)", "An address used for routing between networks", "A type of IP address"],
                      correctAnswer: "A unique hardware identifier assigned to a network interface controller (NIC)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which device operates at the Data Link Layer (Layer 2) of the OSI model?",
                      options: ["Hub", "Router", "Switch", "Repeater"],
                      correctAnswer: "Switch",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "UDP (User Datagram Protocol) is known for being:",
                      options: ["Reliable and ordered", "Connection-oriented with error checking", "Fast and connectionless, with no guarantee of delivery", "Secure and encrypted by default"],
                      correctAnswer: "Fast and connectionless, with no guarantee of delivery",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the purpose of ARP (Address Resolution Protocol)?",
                      options: ["To resolve domain names to IP addresses", "To resolve IP addresses to MAC addresses", "To assign IP addresses dynamically", "To encrypt network traffic"],
                      correctAnswer: "To resolve IP addresses to MAC addresses",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A firewall is primarily used to:",
                      options: ["Increase network speed", "Monitor and control incoming and outgoing network traffic based on security rules", "Store frequently accessed web pages", "Translate private IP addresses to public IP addresses"],
                      correctAnswer: "Monitor and control incoming and outgoing network traffic based on security rules",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which layer of the TCP/IP model corresponds to the OSI model's Network Layer?",
                      options: ["Application Layer", "Transport Layer", "Internet Layer", "Network Access Layer"],
                      correctAnswer: "Internet Layer",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is NAT (Network Address Translation) used for?",
                      options: ["To assign domain names", "To allow multiple devices on a private network to share a single public IP address", "To filter malicious websites", "To manage user authentication"],
                      correctAnswer: "To allow multiple devices on a private network to share a single public IP address",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of these is a common Wi-Fi security protocol?",
                      options: ["WEP", "WPA2", "SSL", "HTTP"],
                      correctAnswer: "WPA2",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The term 'ping' is used to:",
                      options: ["Send an email", "Test the reachability of a host on an IP network and measure round-trip time", "Download a file", "Browse a website"],
                      correctAnswer: "Test the reachability of a host on an IP network and measure round-trip time",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a VPN (Virtual Private Network)?",
                      options: ["A type of local area network hardware", "A technology that creates a secure, encrypted connection over a less secure network, such as the internet", "A protocol for video conferencing", "A method for managing network printers"],
                      correctAnswer: "A technology that creates a secure, encrypted connection over a less secure network, such as the internet",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which port number is typically used by HTTPS?",
                      options: ["80", "25", "110", "443"],
                      correctAnswer: "443",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the function of a router in a network?",
                      options: ["To connect devices within the same local network", "To forward data packets between different computer networks", "To amplify network signals", "To assign MAC addresses"],
                      correctAnswer: "To forward data packets between different computer networks",
                        marks: 10
                  }
              ]
          },
          // 5. Object-Oriented Programming
          {
              id: 'tech_object_oriented_programming',
              name: "Object-Oriented Programming",
              description: "Principles of OOP, including encapsulation, inheritance, polymorphism, and abstraction.",
                type: "mcq",
                numQuestions: 20,
                marksPerQuestion: 10,
                questions: [
                    {
                        type: "mcq",
                      questionText: "Which OOP principle refers to the bundling of data (attributes) and methods that operate on the data within a single unit or class?",
                      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                      correctAnswer: "Encapsulation",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The ability of an object to take on many forms is known as:",
                      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                      correctAnswer: "Polymorphism",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "In OOP, inheritance allows a class to:",
                      options: ["Hide its internal implementation", "Acquire the properties and behaviors of another class", "Have multiple methods with the same name but different parameters", "Be instantiated multiple times"],
                      correctAnswer: "Acquire the properties and behaviors of another class",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which concept involves hiding complex implementation details and exposing only the essential features of an object?",
                      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                      correctAnswer: "Abstraction",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A constructor in a class is a special method that is automatically called when:",
                      options: ["A class is defined", "An object of the class is created", "A method of the class is called", "The program terminates"],
                      correctAnswer: "An object of the class is created",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Method overriding is an example of which OOP principle?",
                      options: ["Encapsulation", "Compile-time Polymorphism", "Run-time Polymorphism", "Abstraction"],
                      correctAnswer: "Run-time Polymorphism",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is an abstract class?",
                      options: ["A class that cannot be instantiated and may contain abstract methods", "A class that can only have static methods", "A class that represents a physical object", "A class that is automatically generated by the compiler"],
                      correctAnswer: "A class that cannot be instantiated and may contain abstract methods",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "An interface in Java or C# typically defines:",
                      options: ["A blueprint of a class with concrete method implementations", "A contract specifying methods that a class must implement", "Instance variables for a class", "A collection of static utility methods"],
                      correctAnswer: "A contract specifying methods that a class must implement",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'super' keyword (or 'base' in C#) is used to:",
                      options: ["Create a new object of the superclass", "Call a method or constructor of the immediate superclass", "Define a static method", "Prevent a class from being inherited"],
                      correctAnswer: "Call a method or constructor of the immediate superclass",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which of these is NOT a fundamental pillar of OOP?",
                      options: ["Encapsulation", "Inheritance", "Iteration", "Polymorphism"],
                      correctAnswer: "Iteration",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is 'method overloading'?",
                      options: ["A subclass providing a specific implementation of a method already provided by its superclass", "Defining multiple methods in the same class with the same name but different parameter lists", "A method that can call itself", "A method that cannot be accessed from outside the class"],
                      correctAnswer: "Defining multiple methods in the same class with the same name but different parameter lists",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "A class from which other classes inherit properties is called a:",
                      options: ["Subclass", "Derived class", "Child class", "Superclass (or Base class)"],
                      correctAnswer: "Superclass (or Base class)",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'is-a' relationship is typically represented by which OOP concept?",
                      options: ["Composition", "Aggregation", "Inheritance", "Encapsulation"],
                      correctAnswer: "Inheritance",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The 'has-a' relationship is typically represented by which OOP concept?",
                      options: ["Inheritance", "Polymorphism", "Composition or Aggregation", "Abstraction"],
                      correctAnswer: "Composition or Aggregation",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is the main benefit of using interfaces?",
                      options: ["To provide default implementation for methods", "To achieve multiple inheritance of state", "To define a contract for classes, enabling polymorphism and loose coupling", "To restrict access to class members"],
                      correctAnswer: "To define a contract for classes, enabling polymorphism and loose coupling",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "In Java, if a method is declared as 'final', it means:",
                      options: ["It must be implemented by subclasses", "It cannot be overridden by subclasses", "It can only be called once", "It is automatically synchronized"],
                      correctAnswer: "It cannot be overridden by subclasses",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which access modifier provides the most restrictive access to a class member?",
                      options: ["public", "protected", "default (package-private)", "private"],
                      correctAnswer: "private",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "The concept of creating objects from a class template is called:",
                      options: ["Inheritance", "Instantiation", "Abstraction", "Compilation"],
                      correctAnswer: "Instantiation",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "What is a 'static' method in a class?",
                      options: ["A method that can only be called on an instance of the class", "A method that belongs to the class itself, rather than to any specific instance", "A method that cannot be modified", "A method that is automatically executed when the class is loaded"],
                      correctAnswer: "A method that belongs to the class itself, rather than to any specific instance",
                        marks: 10
                    },
                    {
                        type: "mcq",
                      questionText: "Which design pattern provides a way to create objects without exposing the creation logic to the client and refers to the newly created object through a common interface?",
                      options: ["Singleton Pattern", "Factory Pattern", "Observer Pattern", "Decorator Pattern"],
                      correctAnswer: "Factory Pattern",
                        marks: 10
                  }
              ]
          },
          // 6. System Design
          {
              id: 'tech_system_design',
              name: "System Design",
              description: "High-level design principles for scalable, reliable, and maintainable systems.",
              type: "mcq",
              numQuestions: 20,
              marksPerQuestion: 10,
                questions: [
                    {
                      type: "mcq",
                      questionText: "What is the primary goal of load balancing in a distributed system?",
                      options: ["To increase data security", "To distribute incoming network traffic across multiple servers", "To reduce database storage costs", "To simplify code deployment"],
                      correctAnswer: "To distribute incoming network traffic across multiple servers",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of the following is NOT a common load balancing algorithm?",
                      options: ["Round Robin", "Least Connections", "IP Hash", "First Come First Serve"],
                      correctAnswer: "First Come First Serve",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "The CAP theorem in distributed systems states that it is impossible for a distributed data store to simultaneously provide more than two out of which three guarantees?",
                      options: ["Consistency, Availability, Performance", "Consistency, Availability, Partition tolerance", "Correctness, Atomicity, Persistence", "Concurrency, Accessibility, Privacy"],
                      correctAnswer: "Consistency, Availability, Partition tolerance",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Database sharding is a technique used to:",
                      options: ["Create backups of a database", "Encrypt database contents", "Horizontally partition data across multiple database servers", "Improve SQL query syntax"],
                      correctAnswer: "Horizontally partition data across multiple database servers",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is a common use case for a Content Delivery Network (CDN)?",
                      options: ["To host the primary application database", "To serve static assets (images, CSS, JS) from servers geographically closer to users", "To perform complex business logic calculations", "To manage user authentication"],
                      correctAnswer: "To serve static assets (images, CSS, JS) from servers geographically closer to users",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "In microservices architecture, services typically communicate with each other using:",
                      options: ["Shared memory", "Direct file system access", "APIs (e.g., REST, gRPC) or message queues", "Function calls within the same process"],
                      correctAnswer: "APIs (e.g., REST, gRPC) or message queues",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the primary benefit of using a message queue (e.g., Kafka, RabbitMQ) in system design?",
                      options: ["To reduce database storage requirements", "To decouple services and enable asynchronous communication", "To increase the processing speed of individual servers", "To simplify user interface design"],
                      correctAnswer: "To decouple services and enable asynchronous communication",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which caching strategy involves writing data to both the cache and the underlying database simultaneously?",
                      options: ["Cache-aside (Lazy Loading)", "Write-through", "Write-back (Write-behind)", "Read-through"],
                      correctAnswer: "Write-through",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What does 'scalability' refer to in system design?",
                      options: ["The security of the system", "The system's ability to handle increasing amounts of work or its potential to be enlarged to accommodate that growth", "The ease of deploying new code", "The speed of individual database queries"],
                      correctAnswer: "The system's ability to handle increasing amounts of work or its potential to be enlarged to accommodate that growth",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "A stateless application server is beneficial because:",
                      options: ["It can store user session data efficiently", "Any server can handle any request, simplifying load balancing and scaling", "It requires less memory per server", "It reduces network latency"],
                      correctAnswer: "Any server can handle any request, simplifying load balancing and scaling",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is 'database replication' primarily used for?",
                      options: ["To reduce the amount of data stored", "To improve data availability and read scalability", "To enforce data normalization", "To simplify schema migrations"],
                      correctAnswer: "To improve data availability and read scalability",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of the following is a key characteristic of a RESTful API design?",
                      options: ["Maintaining client session state on the server", "Using a single endpoint for all operations", "Statelessness between client requests", "Using XML as the only data format"],
                      correctAnswer: "Statelessness between client requests",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the purpose of a 'heartbeat' mechanism in distributed systems?",
                      options: ["To encrypt data in transit", "To periodically check the health and availability of services or nodes", "To synchronize clocks between servers", "To compress data before sending"],
                      correctAnswer: "To periodically check the health and availability of services or nodes",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Idempotency in API design means that:",
                      options: ["The API is very fast", "Making the same call multiple times has the same effect as making it once", "The API can handle a large number of users", "The API uses a secure connection"],
                      correctAnswer: "Making the same call multiple times has the same effect as making it once",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of these is a common strategy for handling system failures and ensuring high availability?",
                      options: ["Single point of failure design", "Manual failover processes only", "Redundancy and automated failover", "Ignoring minor errors"],
                      correctAnswer: "Redundancy and automated failover",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the main difference between horizontal and vertical scaling?",
                      options: ["Horizontal scaling adds more resources to existing servers; vertical scaling adds more servers.", "Horizontal scaling adds more servers; vertical scaling adds more resources (CPU, RAM) to existing servers.", "Horizontal scaling is for databases; vertical scaling is for application servers.", "Horizontal scaling is cheaper but less effective than vertical scaling."],
                      correctAnswer: "Horizontal scaling adds more servers; vertical scaling adds more resources (CPU, RAM) to existing servers.",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "A 'service discovery' mechanism in a microservices architecture helps:",
                      options: ["To secure communication between services", "Services to find the network locations (IP address and port) of other services", "To monitor the performance of individual services", "To deploy new versions of services"],
                      correctAnswer: "Services to find the network locations (IP address and port) of other services",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is a 'circuit breaker' pattern in system design used for?",
                      options: ["To secure network connections", "To prevent a network or service failure from cascading to other services by stopping requests to a failing service", "To balance load across multiple servers", "To cache frequently accessed data"],
                      correctAnswer: "To prevent a network or service failure from cascading to other services by stopping requests to a failing service",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "When designing a system like TinyURL or a URL shortener, what is a critical non-functional requirement?",
                      options: ["Support for multiple languages in URLs", "High availability and low latency for redirection", "Ability to edit the original long URL after shortening", "Complex user authentication for creating short URLs"],
                      correctAnswer: "High availability and low latency for redirection",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of the following is NOT a typical component of a system design interview question like 'Design Instagram'?",
                      options: ["Data modeling", "API design", "Scalability considerations", "Specific UI color choices"],
                      correctAnswer: "Specific UI color choices",
                      marks: 10
                  }
              ]
          },
          // 7. Software Engineering
          {
              id: 'tech_software_engineering',
              name: "Software Engineering",
              description: "Principles of software development lifecycle, methodologies, testing, and version control.",
              type: "mcq",
              numQuestions: 20,
              marksPerQuestion: 10,
                questions: [
                    {
                      type: "mcq",
                      questionText: "What is the primary goal of the Agile methodology in software development?",
                      options: ["To complete all documentation before starting coding", "To deliver working software frequently and adapt to changing requirements", "To follow a strict, predefined plan without deviation", "To minimize customer involvement until the final product is ready"],
                      correctAnswer: "To deliver working software frequently and adapt to changing requirements",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of the following is a popular version control system?",
                      options: ["JIRA", "Slack", "Git", "Photoshop"],
                      correctAnswer: "Git",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What does 'Unit Testing' primarily focus on?",
                      options: ["Testing the integration between multiple components", "Testing individual components or modules of the software in isolation", "Testing the entire system as a whole", "Testing performed by the end-users"],
                      correctAnswer: "Testing individual components or modules of the software in isolation",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "The Waterfall model of software development is characterized by:",
                      options: ["Iterative and incremental development", "A sequential design process, where progress flows steadily downwards", "High customer involvement throughout the project", "Flexibility to change requirements at any stage"],
                      correctAnswer: "A sequential design process, where progress flows steadily downwards",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is 'Refactoring' in software engineering?",
                      options: ["Adding new features to the software", "Fixing bugs found during testing", "Restructuring existing computer code—changing the factoring—without changing its external behavior", "Writing documentation for the code"],
                      correctAnswer: "Restructuring existing computer code—changing the factoring—without changing its external behavior",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of these is a key principle of the SOLID design principles?",
                      options: ["Keep It Simple, Stupid (KISS)", "Don't Repeat Yourself (DRY)", "Single Responsibility Principle (SRP)", "You Ain't Gonna Need It (YAGNI)"],
                      correctAnswer: "Single Responsibility Principle (SRP)",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the main purpose of a 'code review'?",
                      options: ["To assign blame for bugs", "To assess the performance of individual developers", "To improve code quality and find defects early by having other developers examine the code", "To automatically deploy code to production"],
                      correctAnswer: "To improve code quality and find defects early by having other developers examine the code",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Continuous Integration (CI) is a software development practice where developers:",
                      options: ["Integrate their work only at the end of a sprint", "Frequently merge their code changes into a central repository, after which automated builds and tests are run", "Manually test all features before each release", "Work in isolation until a feature is complete"],
                      correctAnswer: "Frequently merge their code changes into a central repository, after which automated builds and tests are run",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What does UML stand for?",
                      options: ["Universal Markup Language", "Unified Modeling Language", "User Mode Linux", "Uniform Method Library"],
                      correctAnswer: "Unified Modeling Language",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which type of software testing is performed by end-users at their own sites to validate the software in a real-world environment?",
                      options: ["Unit Testing", "Integration Testing", "Alpha Testing", "Beta Testing"],
                      correctAnswer: "Beta Testing",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "The 'Scrum' framework is a popular implementation of which software development methodology?",
                      options: ["Waterfall", "Spiral", "Agile", "V-Model"],
                      correctAnswer: "Agile",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the primary role of a 'Product Owner' in a Scrum team?",
                      options: ["To write the code for the product", "To manage the Scrum process and facilitate meetings", "To represent the customer's interests and manage the product backlog", "To test the software and ensure quality"],
                      correctAnswer: "To represent the customer's interests and manage the product backlog",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of these is a common software design pattern for creating objects?",
                      options: ["Observer Pattern", "Strategy Pattern", "Factory Pattern", "Decorator Pattern"],
                      correctAnswer: "Factory Pattern",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is 'technical debt' in software development?",
                      options: ["The cost of software licenses", "The implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer", "The time spent debugging code", "The hardware costs for the development team"],
                      correctAnswer: "The implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "The process of verifying that software meets the specified requirements is known as:",
                      options: ["Debugging", "Validation", "Refactoring", "Deployment"],
                      correctAnswer: "Validation",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which Git command is used to create a new branch?",
                      options: ["git merge <branch-name>", "git commit -m 'new branch'", "git branch <branch-name>", "git push origin <branch-name>"],
                      correctAnswer: "git branch <branch-name>",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What is the purpose of a 'sprint retrospective' in Scrum?",
                      options: ["To plan the work for the next sprint", "To demonstrate the work completed during the sprint to stakeholders", "For the team to reflect on how to become more effective, then tunes and adjusts its behavior accordingly", "To assign tasks to team members"],
                      correctAnswer: "For the team to reflect on how to become more effective, then tunes and adjusts its behavior accordingly",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "Which of the following is a characteristic of good software documentation?",
                      options: ["Being extremely verbose and detailed in all aspects", "Being written only after the software is fully completed", "Being clear, concise, accurate, and easy to maintain", "Being accessible only to senior developers"],
                      correctAnswer: "Being clear, concise, accurate, and easy to maintain",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "The 'DRY' principle in software development stands for:",
                      options: ["Develop, Review, Yield", "Don't Repeat Yourself", "Do Right by Yourself", "Design, Refine, Yell"],
                      correctAnswer: "Don't Repeat Yourself",
                      marks: 10
                  },
                  {
                      type: "mcq",
                      questionText: "What type of diagram is commonly used to show the flow of control in a system or algorithm?",
                      options: ["Class Diagram", "Use Case Diagram", "Sequence Diagram", "Flowchart"],
                      correctAnswer: "Flowchart",
                      marks: 10
                    }
                ]
            }
        ]
    },
];

module.exports = { sampleAssessments }; 


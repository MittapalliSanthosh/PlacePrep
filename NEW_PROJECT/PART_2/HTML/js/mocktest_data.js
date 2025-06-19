const mockTestData = {
    sections: [
        {
            id: "aptitude",
            title: "Aptitude",
            description: "Test your quantitative and logical reasoning skills",
            icon: "fas fa-calculator",
            modules: [
                {
                    id: "apt_1",
                    title: "Number Systems",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "apt_2",
                    title: "Time and Work",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "apt_3",
                    title: "Percentages",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "apt_4",
                    title: "Profit and Loss",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "apt_5",
                    title: "Speed and Distance",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "apt_6",
                    title: "Data Interpretation",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "apt_7",
                    title: "Logical Reasoning",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                }
            ]
        },
        {
            id: "technical",
            title: "Technical",
            description: "Test your programming and technical knowledge",
            icon: "fas fa-code",
            modules: [
                {
                    id: "tech_1",
                    title: "Data Structures",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "tech_2",
                    title: "Algorithms",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "tech_3",
                    title: "Operating Systems",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "tech_4",
                    title: "Database Management",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "tech_5",
                    title: "Computer Networks",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "tech_6",
                    title: "Web Technologies",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "tech_7",
                    title: "Programming Concepts",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                }
            ]
        },
        {
            id: "hr",
            title: "HR",
            description: "Practice HR interview questions and personality assessment",
            icon: "fas fa-users",
            modules: [
                {
                    id: "hr_1",
                    title: "Self Introduction",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "hr_2",
                    title: "Behavioral Questions",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "hr_3",
                    title: "Situational Questions",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "hr_4",
                    title: "Company Research",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "hr_5",
                    title: "Professional Ethics",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "hr_6",
                    title: "Team Dynamics",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "hr_7",
                    title: "Career Goals",
                    duration: "30 mins",
                    durationMinutes: 30,
                    questionCount: 20,
                    difficulty: "Medium"
                }
            ]
        },
        {
            id: "coding",
            title: "Coding",
            description: "Practice coding problems and improve your programming skills",
            icon: "fas fa-laptop-code",
            modules: [
                {
                    id: "code_1",
                    title: "Arrays and Strings",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "code_2",
                    title: "Linked Lists",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "code_3",
                    title: "Trees and Graphs",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "code_4",
                    title: "Dynamic Programming",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Hard"
                },
                {
                    id: "code_5",
                    title: "Sorting and Searching",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "code_6",
                    title: "Stack and Queue",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Medium"
                },
                {
                    id: "code_7",
                    title: "Recursion and Backtracking",
                    duration: "45 mins",
                    durationMinutes: 45,
                    questionCount: 20,
                    difficulty: "Hard"
                }
            ]
        }
    ]
}; 

// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockTestData;
}

function createModuleCard(module, section) {
    return `
        <div class="module-card" onclick="handleModuleClick('${module.id}')">
            <h3 class="module-title">${module.title}</h3>
            <div class="module-meta">
                <span><i class="fas fa-clock"></i> ${module.duration}</span>
                <span><i class="fas fa-question-circle"></i> ${module.questionCount} Questions</span>
            </div>
        </div>
    `;
} 
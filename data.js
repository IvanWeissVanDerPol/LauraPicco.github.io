export const githubUsername = ""; // Your GitHub username

// Personal Information
export const Name = "Laura";
export const LastName = "Picco";
export const FullName = `${Name} ${LastName}`; // Concatenation of your first and last name
export const mail = "laura.picco@example.com"; // Your email address

// Meta information
export const metaTitle = "Laura Picco's Professional Portfolio";
export const metaDescription = "Explore the professional portfolio of Laura Picco, showcasing her expertise in food science, chemical engineering, education, and volunteer work.";
export const metaKeywords = "Laura Picco, food science, chemical engineering, portfolio, education, certifications, volunteer work";
export const metaAuthor = "Laura Picco";

// Contact information
export const contactInfo = `I'm just an email or a message away on any platform. Send me an email at ${mail}, or find me on LinkedIn. Let’s start a conversation about your ideas, potential collaborations, or simply enjoy a casual chat.`; // Contact information template with your email

// Bio
export const bio = [
    "Welcome to the portfolio of Laura Picco: an accomplished Food Scientist, Chemical Engineer, Educator, and dedicated Volunteer.",
    `With dual degrees in Science and Technology of Food and Chemical Engineering, I bring a robust academic background and practical expertise to the table.`,
    `My professional journey encompasses a wide array of skills and experiences, from conducting food safety analysis and chemical process design to teaching robotics and mentoring young minds.`,
    `I am driven by a passion for continuous learning, sharing knowledge, and making a positive impact through community engagement and volunteer work.`,
    "Thank you for visiting my portfolio. I invite you to explore my journey, projects, and achievements."
];

// Languages
export const languages = [
    {
        title: "Native Spanish Speaker",
        skillName: "Spanish",
        color: "1",
        percentage: "100",
    },
    {
        title: "Fluent in English",
        skillName: "English",
        color: "2",
        percentage: "95",
    },
    {
        title: "Fluent in Guaraní",
        skillName: "Guaraní",
        color: "3",
        percentage: "90",
    },
    {
        title: "Proficient in Portuguese",
        skillName: "Portuguese",
        color: "4",
        percentage: "85",
    }
];

// Skills
export const skills = {
    "Food Science and Technology": [
        {
            "skillName": "Food Safety Analysis",
            "imagePath": "images/skills/food_safety_logo.png",
        },
        {
            "skillName": "Quality Control",
            "imagePath": "images/skills/quality_control_logo.png",
        }
    ],
    "Chemical Engineering": [
        {
            "skillName": "Process Design",
            "imagePath": "images/skills/process_design_logo.png",
        },
        {
            "skillName": "Chemical Analysis",
            "imagePath": "images/skills/chemical_analysis_logo.png",
        }
    ],
    "Teaching and Education": [
        {
            "skillName": "Curriculum Development",
            "imagePath": "images/skills/curriculum_development_logo.png",
            "description": "Creating and implementing comprehensive educational curricula tailored to various subjects and student needs."
        },
        {
            "skillName": "Robotics Education",
            "imagePath": "images/skills/robotics_education_logo.png",
            "description": "Instructing students in robotics and programming, fostering innovation and technical skills."
        }
    ],
    "Volunteer Work": [
        {
            "skillName": "Community Outreach",
            "imagePath": "images/skills/community_outreach_logo.png",
            "description": "Engaging in projects that benefit the community and promote science and technology education."
        },
        {
            "skillName": "Youth Mentoring",
            "imagePath": "images/skills/youth_mentoring_logo.png",
            "description": "Guiding and supporting young individuals in their educational and professional development."
        }
    ]
};

// Certifications
export const certifications = {
    LinkedInLearning: [
        {
            certificationName: "Food Safety and Quality",
            image: "images/Certifications/LinkedInLearning/Food_Safety_Quality.jpg",
            preview: "http://example.com/food_safety_quality.jpg"
        }
    ],
    technicalCertifications: [
        {
            certificationName: "Chemical Process Design",
            image: "images/Certifications/Chemical_Process_Design.jpg",
            preview: "http://example.com/chemical_process_design.jpg"
        }
    ]
};

// Experience
export const experience = [
    {
        title: "Food Scientist",
        subtitle: "Agropecuaria Cooperativa La Paz",
        duration: "2020 - Present",
        details: [
            "Conducted rigorous food safety and quality control tests, ensuring compliance with industry standards.",
            "Developed innovative food products and optimized processing techniques to enhance efficiency and quality.",
            "Collaborated with cross-functional teams to maintain high standards of food safety and regulatory compliance."
        ],
        tags: ["Food Safety", "Quality Control", "Product Development"],
        icon: "flask",
    },
    {
        title: "Chemical Engineer",
        subtitle: "Various Companies",
        duration: "2015 - 2020",
        details: [
            "Designed and optimized chemical processes to improve production efficiency and reduce costs.",
            "Performed comprehensive chemical analyses and quality assessments to ensure product excellence.",
            "Led multidisciplinary projects, coordinating efforts to achieve seamless integration and successful outcomes."
        ],
        tags: ["Process Design", "Chemical Analysis", "Project Management"],
        icon: "industry",
    },
    {
        title: "Robotics Educator",
        subtitle: "ImagineTech",
        duration: "2018 - 2020",
        details: [
            "Taught robotics and programming to students, inspiring the next generation of tech innovators.",
            "Developed and implemented educational materials and curricula tailored to various learning styles.",
            "Mentored students in science and technology projects, fostering critical thinking and problem-solving skills."
        ],
        tags: ["Education", "Robotics", "Mentoring"],
        icon: "robot",
    }
];

// Education
export const education = [
    {
        title: "Bachelor’s Degree in Science and Technology of Food",
        duration: "2010 - 2014",
        subtitle: "University of Paraguay",
        details: [
            "Focused on food safety, quality control, and food processing technologies.",
            "Conducted research on innovative food preservation techniques, contributing to academic publications."
        ],
        tags: ["Food Science", "Quality Control", "Research"],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor’s Degree in Chemical Engineering",
        duration: "2006 - 2010",
        subtitle: "University of Paraguay",
        details: [
            "Specialized in chemical process design, optimization, and analysis.",
            "Completed projects focused on enhancing chemical production processes and reducing environmental impact."
        ],
        tags: ["Chemical Engineering", "Process Design", "Optimization"],
        icon: "graduation-cap",
    }
];

// Testimonials
export const testimonials = {
    reviewer: "John Doe",
    period: "Various Positions",
    company: "Agropecuaria Cooperativa La Paz",
    feedback: [
        {
            title: "Technical Expertise",
            detail: "Laura's deep knowledge in food safety and quality control has been invaluable to our projects. She consistently ensures the highest standards."
        },
        {
            title: "Team Collaboration",
            detail: "Laura excels in team environments, always contributing her expertise and fostering a collaborative spirit. Her positive attitude and reliability are greatly appreciated."
        }
    ]
};

// Footer
export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/LauraPicco",
            }
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Send me a mail",
                link: `mailto:${mail}`,
            },
            {
                text: "Download Resume",
                link: "assets/Laura_Picco_Resume.pdf",
                target: "_blank"
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/LauraPicco/",
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Laura Picco.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];

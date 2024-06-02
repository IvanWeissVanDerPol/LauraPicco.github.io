export const githubUsername = ""; // Your GitHub username

// Personal Information
export const Name = "Laura";
export const LastName = "Picco";
export const FullName = `${Name} ${LastName}`; // Concatenation of your first and last name
export const mail = "laura.picco2@gmail.com"; // Your email address

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
        title: "Native or Bilingual Guaraní Speaker",
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
    ],
    otherCertifications: [
        {
            certificationName: "Conferencia Liderazgo, Capacidad de Aprendizaje y Resiliencia",
            image: "images/Certifications/Conference_Liderazgo.jpg",
            preview: "http://example.com/conference_liderazgo.jpg"
        },
        {
            certificationName: "MentIEEE WIE UNA",
            image: "images/Certifications/MentIEEE_WIE_UNA.jpg",
            preview: "http://example.com/mentieee_wie_una.jpg"
        },
        {
            certificationName: "Capacitación JupiEEE sobre Liderazgo",
            image: "images/Certifications/Capacitacion_JupiEEE.jpg",
            preview: "http://example.com/capacitacion_jupieee.jpg"
        },
        {
            certificationName: "Jornada Virtual de Redacción Científica",
            image: "images/Certifications/Jornada_Virtual.jpg",
            preview: "http://example.com/jornada_virtual.jpg"
        },
        {
            certificationName: "Capacitación IEEE Web Hosting y Wordpress",
            image: "images/Certifications/IEEE_Web_Hosting.jpg",
            preview: "http://example.com/ieee_web_hosting.jpg"
        }
    ]
};

// Experience
export const experience = [
    {
        title: "President",
        subtitle: "IEEE WIE UNA Student Branch",
        duration: "February 2023 - February 2024",
        details: [
            "Led the student branch, organizing events and initiatives to promote women in engineering.",
            "Coordinated with team members to develop strategies for increasing member engagement and participation."
        ],
        tags: ["Leadership", "Event Coordination", "Strategic Planning"],
        icon: "leadership",
    },
    {
        title: "Robotics Educator",
        subtitle: "ImaginaTechPy",
        duration: "January 2024 - January 2024",
        details: [
            "Taught robotics and programming to students, inspiring interest in STEM fields.",
            "Developed and implemented engaging lesson plans to facilitate hands-on learning."
        ],
        tags: ["Education", "Robotics", "STEM"],
        icon: "robot",
    },
    {
        title: "Intern",
        subtitle: "Cooperativa Agricola La Paz LTDA",
        duration: "August 2023 - August 2023",
        details: [
            "Assisted in the quality control laboratory, conducting tests on wheat seeds, flour, and feed.",
            "Supported process improvement initiatives to enhance product quality."
        ],
        tags: ["Internship", "Quality Control", "Process Improvement"],
        icon: "internship",
    },
    {
        title: "Laboratory Assistant",
        subtitle: "Itapua",
        duration: "August 2023 - August 2023",
        details: [
            "Conducted quality control tests on wheat seeds, flour, and animal feed.",
            "Assisted in maintaining laboratory equipment and ensuring compliance with safety standards."
        ],
        tags: ["Quality Control", "Laboratory", "Safety Compliance"],
        icon: "laboratory",
    }
];

// Education
export const education = [
    {
        title: "Bachelor’s Degree in Chemical Engineering",
        duration: "Currently studying",
        subtitle: "Universidad Nacional de Asunción",
        details: [
            "Studying chemical process design, optimization, and analysis.",
            "Participating in research projects focused on chemical production and environmental impact reduction."
        ],
        tags: ["Chemical Engineering", "Process Design", "Research"],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor’s Degree in Science and Technology of Food",
        duration: "Currently studying",
        subtitle: "Universidad Nacional de Asunción",
        details: [
            "Focusing on food safety, quality control, and food processing technologies.",
            "Engaging in research on innovative food preservation techniques."
        ],
        tags: ["Food Science", "Quality Control", "Research"],
        icon: "graduation-cap",
    },
    {
        title: "Superior Professor of Paraguayan Dance",
        duration: "Completed",
        subtitle: "Estudio Ballet Yrasêma",
        details: [
            "Trained in advanced techniques and teaching methodologies for Paraguayan dance.",
            "Performed in various cultural events and taught dance to students of all ages."
        ],
        tags: ["Dance", "Teaching", "Cultural Arts"],
        icon: "dance",
    },
    {
        title: "Artistic Studies",
        duration: "February 2009 - December 2010",
        subtitle: "Instituto Profesional Divino Niño Jesus",
        details: [
            "Studied general artistic disciplines, including visual and performing arts.",
            "Completed professional training in manual arts."
        ],
        tags: ["Artistic Studies", "Manual Arts", "Performing Arts"],
        icon: "art",
    }
];

// Volunteering
export const volunteering = [
    {
        title: "Marketing Subcoordinator",
        subtitle: "IEEE WIE UNA Student Branch",
        duration: "February 2022 - February 2023",
        details: [
            "Managed marketing strategies and campaigns to promote branch activities.",
            "Engaged with members through social media and other communication channels."
        ],
        tags: ["Marketing", "Communication", "Engagement"],
        icon: "marketing",
    },
    {
        title: "Course and Workshop Subcoordinator",
        subtitle: "IEEE - IAS UNA Student Branch Chapter",
        duration: "February 2021 - February 2022",
        details: [
            "Organized and coordinated educational courses and workshops.",
            "Collaborated with industry professionals to deliver high-quality learning experiences."
        ],
        tags: ["Education", "Workshop Coordination", "Collaboration"],
        icon: "education",
    },
    {
        title: "Marketing Subcoordinator",
        subtitle: "IEEE Rama Estudiantil UNA",
        duration: "February 2021 - February 2022",
        details: [
            "Developed and executed marketing plans to increase visibility and participation.",
            "Engaged with the student community through various outreach activities."
        ],
        tags: ["Marketing", "Student Engagement", "Outreach"],
        icon: "marketing",
    },
    {
        title: "Volunteer",
        subtitle: "Marker Lab in a Can - CCPA School",
        duration: "December 2022 - Present",
        details: [
            "Facilitated hands-on science and technology workshops for students.",
            "Mentored students in their projects, encouraging creativity and innovation."
        ],
        tags: ["Volunteering", "Mentorship", "STEM"],
        icon: "volunteer",
    },
    {
        title: "Driven Communication",
        subtitle: "IEEE Region 9",
        duration: "March 2024 - Present",
        details: [
            "Developed communication strategies focused on engaging IEEE members.",
            "Worked with regional committees to ensure effective communication and member engagement."
        ],
        tags: ["Communication", "Strategy", "Member Engagement"],
        icon: "communication",
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
                text: "Instagram",
                link: "https://www.instagram.com/picco_lau//",
            },
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/laura-picco-62a37b210/",
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

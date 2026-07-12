// src/data/courses.js
// BATCH 1 of course data — 6 courses fully detailed.
// More courses will be added in the same array in later batches.
// Each course object follows the same structure so it can be
// reused by a single CourseDetail.jsx template.

export const courses = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    image: "/assets/courses/full-stack.jpg",
    shortDescription:
      "Become a job-ready Full Stack Developer by mastering both frontend and backend technologies used by top product companies.",

    overview:
      "The Full Stack Web Development program is designed to take you from the fundamentals of web technologies to building complete, production-ready applications. You will learn how modern websites and web apps are designed, developed, deployed, and maintained — covering everything from HTML/CSS to advanced backend architecture, databases, and deployment pipelines. By the end of this course, you will be able to independently design, build, and launch full-scale web applications, making you a strong candidate for Full Stack Developer, Frontend Developer, or Backend Developer roles.",

    whatYouWillLearn: [
      "Building responsive, accessible websites using HTML5, CSS3, and modern layout systems",
      "Programming logic and DOM manipulation using JavaScript (ES6+)",
      "Building dynamic user interfaces using React.js",
      "Creating REST APIs and backend services using Node.js and Express.js",
      "Designing and managing databases using MongoDB and MySQL",
      "User authentication, authorization, and security best practices",
      "Version control using Git and GitHub",
      "Deploying full stack applications to cloud platforms",
    ],

    skillsCovered: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js & Express.js",
      "MongoDB & MySQL",
      "REST API Development",
      "Git & GitHub",
      "Responsive Web Design",
      "Authentication (JWT)",
      "Deployment (Vercel/Render)",
    ],

    curriculum: [
      {
        module: "Module 1: Web Development Foundations",
        topics: [
          "Introduction to how the web works (Client-Server model)",
          "HTML5 — semantic tags, forms, tables, accessibility",
          "CSS3 — Flexbox, Grid, animations, responsive design",
          "Setting up a development environment and Git basics",
        ],
      },
      {
        module: "Module 2: JavaScript Programming",
        topics: [
          "Variables, data types, operators, and control flow",
          "Functions, scope, closures, and higher-order functions",
          "Arrays, objects, and ES6+ features (arrow functions, destructuring, spread/rest)",
          "DOM manipulation and event handling",
          "Asynchronous JavaScript — Promises, async/await, Fetch API",
        ],
      },
      {
        module: "Module 3: Frontend Development with React",
        topics: [
          "React fundamentals — components, props, state",
          "Hooks (useState, useEffect, useContext, custom hooks)",
          "React Router for multi-page navigation",
          "State management basics",
          "Consuming REST APIs in React",
          "Building and deploying a complete React project",
        ],
      },
      {
        module: "Module 4: Backend Development with Node.js",
        topics: [
          "Node.js fundamentals and the npm ecosystem",
          "Building REST APIs using Express.js",
          "Middleware, routing, and error handling",
          "Working with MongoDB using Mongoose",
          "Working with MySQL and SQL queries",
          "Authentication with JWT and bcrypt",
        ],
      },
      {
        module: "Module 5: Full Stack Integration & Deployment",
        topics: [
          "Connecting React frontend with Node.js backend",
          "Environment variables and configuration management",
          "API testing using Postman",
          "Deploying frontend (Vercel/Netlify) and backend (Render/Railway)",
          "Basics of CI/CD and GitHub Actions",
        ],
      },
      {
        module: "Module 6: Capstone Projects",
        topics: [
          "E-commerce website with cart and checkout",
          "Social media application with authentication",
          "Admin dashboard with analytics",
        ],
      },
    ],

    duration: "6 Months (4 classes/week)",
    mode: "Online & Offline (Hybrid available)",

    fees: {
      totalFee: "₹45,000",
      emiAvailable: true,
      emiStartingAt: "₹4,500/month",
      scholarshipAvailable: true,
      scholarshipNote: "Up to 20% scholarship for meritorious and economically weaker students",
    },

    projects: [
      "E-commerce Platform (React + Node.js + MongoDB)",
      "Social Media Application with real-time chat",
      "Admin Dashboard with charts and analytics",
      "Personal Portfolio Website",
    ],

    internshipDetails:
      "3-month guaranteed internship with our industry partners or on live client projects handled by the institute, giving you real-world experience before you graduate.",

    certification:
      "Industry-recognized Full Stack Web Development Certificate, co-branded with our technology partners, verifiable online via unique certificate ID.",

    careerOpportunities: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Application Developer",
      "Software Engineer",
    ],

    salaryExpectation: "₹3.5 LPA – ₹9 LPA (varies by city and company)",

    toolsAndTechnologies: [
      "HTML5, CSS3, JavaScript",
      "React.js",
      "Node.js, Express.js",
      "MongoDB, MySQL",
      "Git, GitHub",
      "VS Code, Postman",
    ],

    prerequisites:
      "No prior coding experience required. Basic computer literacy and familiarity with using the internet is sufficient to begin.",

    learningOutcomes: [
      "Build and deploy complete full stack web applications independently",
      "Confidently work with modern JavaScript frameworks and libraries",
      "Design and consume REST APIs",
      "Understand database design and management",
      "Be interview-ready for Full Stack Developer roles",
    ],
  },

  {
    id: "react-js-development",
    title: "React.js Development",
    category: "Web Development",
    image: "/assets/courses/react-js.jpg",
    shortDescription:
      "Master React.js and build modern, high-performance user interfaces used by top tech companies worldwide.",

    overview:
      "This course focuses exclusively on React.js — the most in-demand frontend library used by companies like Meta, Netflix, and Airbnb. You will go from React basics to advanced concepts like hooks, context API, performance optimization, and state management libraries, enabling you to build production-grade single-page applications (SPAs).",

    whatYouWillLearn: [
      "Core React concepts — components, JSX, props, and state",
      "React Hooks and functional component patterns",
      "Client-side routing with React Router",
      "Global state management using Context API and Redux Toolkit",
      "Performance optimization techniques (memoization, lazy loading)",
      "Connecting React applications to backend APIs",
      "Testing React components",
      "Deploying React applications to production",
    ],

    skillsCovered: [
      "React.js",
      "JSX",
      "React Hooks",
      "React Router",
      "Redux Toolkit",
      "Context API",
      "API Integration",
      "Component Testing",
      "Performance Optimization",
    ],

    curriculum: [
      {
        module: "Module 1: React Fundamentals",
        topics: [
          "Introduction to SPAs and why React",
          "JSX syntax and rendering",
          "Components, props, and composition",
          "State and event handling",
        ],
      },
      {
        module: "Module 2: React Hooks Deep Dive",
        topics: [
          "useState, useEffect, useRef",
          "useContext and useReducer",
          "Custom hooks",
          "Rules of hooks and common pitfalls",
        ],
      },
      {
        module: "Module 3: Routing & Navigation",
        topics: [
          "React Router setup and nested routes",
          "Dynamic routing and route parameters",
          "Protected routes and navigation guards",
        ],
      },
      {
        module: "Module 4: State Management",
        topics: [
          "Context API for global state",
          "Introduction to Redux Toolkit",
          "Async state management with RTK Query",
        ],
      },
      {
        module: "Module 5: Performance & Testing",
        topics: [
          "React.memo, useMemo, useCallback",
          "Code splitting and lazy loading",
          "Unit testing with Jest and React Testing Library",
        ],
      },
      {
        module: "Module 6: Real-World Projects & Deployment",
        topics: [
          "Building a full-featured project from scratch",
          "Connecting to REST APIs",
          "Deployment to Vercel/Netlify",
        ],
      },
    ],

    duration: "3 Months (4 classes/week)",
    mode: "Online & Offline",

    fees: {
      totalFee: "₹22,000",
      emiAvailable: true,
      emiStartingAt: "₹2,200/month",
      scholarshipAvailable: true,
      scholarshipNote: "Up to 15% scholarship available on early enrollment",
    },

    projects: [
      "E-commerce product listing app with cart",
      "Task management (Kanban board) app",
      "Movie discovery app using a public API",
      "Personal blog/portfolio site",
    ],

    internshipDetails:
      "6-week internship opportunity building UI components for live institute or partner projects.",

    certification:
      "React.js Development Certificate with verifiable digital ID, recognized by our hiring partners.",

    careerOpportunities: [
      "React Developer",
      "Frontend Developer",
      "UI Developer",
      "JavaScript Developer",
    ],

    salaryExpectation: "₹3 LPA – ₹8 LPA",

    toolsAndTechnologies: [
      "React.js, JSX",
      "React Router, Redux Toolkit",
      "VS Code, Chrome DevTools",
      "Jest, React Testing Library",
      "Git, GitHub",
    ],

    prerequisites:
      "Basic knowledge of HTML, CSS, and JavaScript is recommended before starting this course.",

    learningOutcomes: [
      "Build complex, scalable single-page applications using React",
      "Manage application state effectively at scale",
      "Optimize React apps for performance",
      "Be interview-ready for React Developer roles",
    ],
  },

  {
    id: "python-programming",
    title: "Python Programming",
    category: "Programming Languages",
    image: "/assets/courses/python.jpg",
    shortDescription:
      "Learn Python from scratch — the most versatile programming language used in web development, automation, data science, and AI.",

    overview:
      "This course is designed for absolute beginners as well as those looking to strengthen their programming fundamentals. Python is one of the easiest languages to learn and one of the most powerful, used across web development, automation, data analysis, machine learning, and more. This course builds a strong foundation in programming logic while giving you hands-on experience with real Python projects.",

    whatYouWillLearn: [
      "Python syntax, data types, and control structures",
      "Functions, modules, and object-oriented programming",
      "File handling and exception handling",
      "Working with libraries like NumPy and Pandas (introductory level)",
      "Building simple automation scripts",
      "Basics of working with APIs in Python",
      "Introduction to Python for data analysis",
    ],

    skillsCovered: [
      "Python Fundamentals",
      "Object-Oriented Programming",
      "File Handling",
      "Exception Handling",
      "NumPy Basics",
      "Pandas Basics",
      "Automation Scripting",
    ],

    curriculum: [
      {
        module: "Module 1: Python Basics",
        topics: [
          "Installing Python and setting up the environment",
          "Variables, data types, and operators",
          "Conditional statements and loops",
        ],
      },
      {
        module: "Module 2: Functions & Data Structures",
        topics: [
          "Functions and arguments",
          "Lists, tuples, sets, and dictionaries",
          "List comprehensions",
        ],
      },
      {
        module: "Module 3: Object-Oriented Programming",
        topics: [
          "Classes and objects",
          "Inheritance and polymorphism",
          "Encapsulation and abstraction",
        ],
      },
      {
        module: "Module 4: File & Exception Handling",
        topics: [
          "Reading and writing files",
          "Working with CSV and JSON files",
          "Try-except blocks and custom exceptions",
        ],
      },
      {
        module: "Module 5: Introduction to Data Libraries",
        topics: [
          "NumPy arrays and operations",
          "Pandas DataFrames basics",
          "Simple data visualization with Matplotlib",
        ],
      },
      {
        module: "Module 6: Mini Projects",
        topics: [
          "Automated file organizer script",
          "Simple expense tracker application",
          "Basic web scraper",
        ],
      },
    ],

    duration: "2 Months (3 classes/week)",
    mode: "Online & Offline",

    fees: {
      totalFee: "₹12,000",
      emiAvailable: true,
      emiStartingAt: "₹1,500/month",
      scholarshipAvailable: false,
      scholarshipNote: "",
    },

    projects: [
      "Expense tracker application",
      "Automated file organizer",
      "Simple web scraper",
      "Command-line quiz game",
    ],

    internshipDetails:
      "Optional add-on internship track connecting students to automation and scripting mini-projects.",

    certification:
      "Python Programming Certificate, verifiable online, recognized for entry-level programming roles.",

    careerOpportunities: [
      "Junior Python Developer",
      "Automation Engineer (Entry-Level)",
      "Data Analyst (Entry-Level, with further specialization)",
      "Software Trainee",
    ],

    salaryExpectation: "₹2.5 LPA – ₹6 LPA",

    toolsAndTechnologies: ["Python 3.x", "VS Code / PyCharm", "NumPy", "Pandas", "Jupyter Notebook"],

    prerequisites: "No prior programming experience required.",

    learningOutcomes: [
      "Write clean, logical Python programs from scratch",
      "Understand core programming and OOP concepts",
      "Be prepared to specialize further into Data Science, AI/ML, or Web Development",
    ],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    image: "/assets/courses/digital-marketing.jpg",
    shortDescription:
      "Master SEO, social media marketing, Google Ads, and content strategy to launch a career in the booming digital marketing industry.",

    overview:
      "The Digital Marketing course is a comprehensive program covering every major pillar of online marketing — from search engine optimization to paid advertising, social media strategy, email marketing, and analytics. Designed with hands-on tools and live campaign exercises, this course prepares you to manage marketing campaigns for real businesses from day one.",

    whatYouWillLearn: [
      "Search Engine Optimization (On-page, Off-page, Technical SEO)",
      "Google Ads and paid search campaign management",
      "Social Media Marketing across Instagram, Facebook, and LinkedIn",
      "Content marketing and copywriting fundamentals",
      "Email marketing and automation",
      "Google Analytics and performance reporting",
      "Basics of marketing funnels and conversion optimization",
    ],

    skillsCovered: [
      "SEO",
      "Google Ads",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Google Analytics",
      "Marketing Funnels",
    ],

    curriculum: [
      {
        module: "Module 1: Digital Marketing Foundations",
        topics: [
          "Introduction to digital marketing ecosystem",
          "Understanding target audiences and buyer personas",
          "Setting up marketing goals and KPIs",
        ],
      },
      {
        module: "Module 2: Search Engine Optimization",
        topics: [
          "Keyword research and competitor analysis",
          "On-page SEO techniques",
          "Off-page SEO and link building",
          "Technical SEO basics",
        ],
      },
      {
        module: "Module 3: Paid Advertising",
        topics: [
          "Google Ads account setup and campaign types",
          "Bidding strategies and budget management",
          "Facebook & Instagram Ads Manager",
        ],
      },
      {
        module: "Module 4: Social Media & Content Marketing",
        topics: [
          "Social media strategy and content calendars",
          "Copywriting for ads and organic posts",
          "Influencer marketing basics",
        ],
      },
      {
        module: "Module 5: Email Marketing & Analytics",
        topics: [
          "Building email campaigns and automation flows",
          "Google Analytics setup and reporting",
          "Conversion tracking and funnel analysis",
        ],
      },
      {
        module: "Module 6: Live Campaign Project",
        topics: [
          "Planning and executing a live digital campaign",
          "Reporting results and optimization strategies",
        ],
      },
    ],

    duration: "3 Months (3 classes/week)",
    mode: "Online & Offline",

    fees: {
      totalFee: "₹18,000",
      emiAvailable: true,
      emiStartingAt: "₹1,800/month",
      scholarshipAvailable: true,
      scholarshipNote: "10% early-bird discount available",
    },

    projects: [
      "Live SEO audit and optimization project",
      "Google Ads campaign simulation",
      "Complete social media strategy for a sample brand",
      "Email marketing automation flow",
    ],

    internshipDetails:
      "1-month internship managing real social media/ad accounts for small businesses partnered with the institute.",

    certification:
      "Digital Marketing Certificate, along with guidance for globally recognized certifications like Google Ads and HubSpot.",

    careerOpportunities: [
      "Digital Marketing Executive",
      "SEO Specialist",
      "Social Media Manager",
      "PPC Specialist",
      "Content Marketing Associate",
    ],

    salaryExpectation: "₹2.5 LPA – ₹7 LPA",

    toolsAndTechnologies: [
      "Google Ads",
      "Google Analytics",
      "Meta Ads Manager",
      "SEMrush / Ahrefs",
      "Mailchimp",
      "Canva",
    ],

    prerequisites: "No prior experience required. Basic computer and internet familiarity is enough.",

    learningOutcomes: [
      "Plan and execute complete digital marketing campaigns",
      "Understand and apply SEO for organic growth",
      "Run paid ad campaigns confidently across major platforms",
      "Analyze and report on campaign performance",
    ],
  },

  {
    id: "data-science",
    title: "Data Science",
    category: "Data & AI",
    image: "/assets/courses/data-science.jpg",
    shortDescription:
      "Learn data analysis, visualization, statistics, and machine learning to become a job-ready Data Scientist.",

    overview:
      "The Data Science course is designed for those who want to build a career analyzing data and extracting actionable insights for businesses. You'll learn Python for data analysis, statistics, data visualization, SQL, and machine learning fundamentals — with heavy emphasis on real datasets and case studies drawn from industries like finance, retail, and healthcare.",

    whatYouWillLearn: [
      "Python for data analysis (NumPy, Pandas)",
      "Data visualization using Matplotlib and Seaborn",
      "Statistics and probability fundamentals for data science",
      "SQL for data extraction and analysis",
      "Machine learning fundamentals (regression, classification, clustering)",
      "Model evaluation and basic hyperparameter tuning",
      "Working on real-world datasets and case studies",
    ],

    skillsCovered: [
      "Python (NumPy, Pandas)",
      "Data Visualization",
      "Statistics for Data Science",
      "SQL",
      "Machine Learning Basics",
      "Scikit-learn",
      "Data Storytelling",
    ],

    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        topics: [
          "NumPy arrays and vectorized operations",
          "Pandas for data cleaning and manipulation",
          "Handling missing data and outliers",
        ],
      },
      {
        module: "Module 2: Statistics & Probability",
        topics: [
          "Descriptive statistics",
          "Probability distributions",
          "Hypothesis testing basics",
        ],
      },
      {
        module: "Module 3: Data Visualization",
        topics: [
          "Matplotlib fundamentals",
          "Seaborn for statistical visualization",
          "Building dashboards with visual storytelling",
        ],
      },
      {
        module: "Module 4: SQL for Data Analysis",
        topics: [
          "Writing SQL queries for data extraction",
          "Joins, aggregations, and subqueries",
          "Working with real business databases",
        ],
      },
      {
        module: "Module 5: Machine Learning Foundations",
        topics: [
          "Supervised learning: regression and classification",
          "Unsupervised learning: clustering basics",
          "Model evaluation metrics",
        ],
      },
      {
        module: "Module 6: Capstone Project",
        topics: [
          "End-to-end data science project on a real dataset",
          "Data cleaning, EDA, modeling, and presentation of insights",
        ],
      },
    ],

    duration: "5 Months (4 classes/week)",
    mode: "Online & Offline",

    fees: {
      totalFee: "₹40,000",
      emiAvailable: true,
      emiStartingAt: "₹4,000/month",
      scholarshipAvailable: true,
      scholarshipNote: "Merit-based scholarship up to 20% after qualifying assessment",
    },

    projects: [
      "Retail sales prediction model",
      "Customer churn analysis",
      "Exploratory data analysis on public health dataset",
      "Interactive dashboard for business KPIs",
    ],

    internshipDetails:
      "2-month internship working on live data analysis projects with institute's business partners.",

    certification:
      "Data Science Certificate with project portfolio validation, recognized by hiring partners.",

    careerOpportunities: [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Intelligence Analyst",
      "Reporting Analyst",
    ],

    salaryExpectation: "₹4 LPA – ₹10 LPA",

    toolsAndTechnologies: [
      "Python (NumPy, Pandas, Scikit-learn)",
      "SQL",
      "Matplotlib, Seaborn",
      "Jupyter Notebook",
      "Power BI / Tableau (introductory)",
    ],

    prerequisites:
      "Basic Python knowledge recommended. Non-programmers can start with our Python Programming course first.",

    learningOutcomes: [
      "Clean, analyze, and visualize real-world datasets",
      "Apply statistical reasoning to data problems",
      "Build and evaluate basic machine learning models",
      "Present data-driven insights effectively to stakeholders",
    ],
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    image: "/assets/courses/ui-ux.jpg",
    shortDescription:
      "Learn to design intuitive, beautiful digital products using industry-standard tools and design thinking principles.",

    overview:
      "This course teaches the complete UI/UX design process — from understanding user needs and research to wireframing, prototyping, and creating polished visual designs. You'll work with industry-standard tools like Figma and build a professional portfolio of real design projects that you can show to employers.",

    whatYouWillLearn: [
      "Design thinking and the UX design process",
      "User research methods and persona creation",
      "Wireframing and low-fidelity prototyping",
      "Visual design principles — color, typography, layout",
      "High-fidelity prototyping using Figma",
      "Usability testing and design iteration",
      "Building a professional design portfolio",
    ],

    skillsCovered: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Visual Design",
      "Design Systems",
      "Usability Testing",
    ],

    curriculum: [
      {
        module: "Module 1: Design Thinking & UX Fundamentals",
        topics: [
          "Introduction to UX design process",
          "User research methods (interviews, surveys)",
          "Creating user personas and journey maps",
        ],
      },
      {
        module: "Module 2: Wireframing & Information Architecture",
        topics: [
          "Low-fidelity wireframing",
          "Information architecture and site mapping",
          "User flows",
        ],
      },
      {
        module: "Module 3: Visual Design Principles",
        topics: [
          "Color theory and typography",
          "Layout, grid systems, and spacing",
          "Building a design system",
        ],
      },
      {
        module: "Module 4: Prototyping with Figma",
        topics: [
          "Figma interface and components",
          "High-fidelity mockups",
          "Interactive prototypes and micro-interactions",
        ],
      },
      {
        module: "Module 5: Usability Testing",
        topics: [
          "Planning usability tests",
          "Gathering and applying user feedback",
          "Iterating on designs",
        ],
      },
      {
        module: "Module 6: Portfolio Projects",
        topics: [
          "Mobile app design case study",
          "Website redesign case study",
          "Building your design portfolio",
        ],
      },
    ],

    duration: "3 Months (3 classes/week)",
    mode: "Online & Offline",

    fees: {
      totalFee: "₹20,000",
      emiAvailable: true,
      emiStartingAt: "₹2,000/month",
      scholarshipAvailable: true,
      scholarshipNote: "15% discount for students enrolling with a friend (referral offer)",
    },

    projects: [
      "Mobile banking app redesign",
      "E-commerce website UX case study",
      "Food delivery app prototype",
      "Personal portfolio website design",
    ],

    internshipDetails:
      "1-month internship designing real interfaces for institute partner projects, with mentor feedback.",

    certification:
      "UI/UX Design Certificate with a verified project portfolio link, recognized by design hiring partners.",

    careerOpportunities: [
      "UI/UX Designer",
      "Product Designer (Entry-Level)",
      "Interaction Designer",
      "Visual Designer",
    ],

    salaryExpectation: "₹3 LPA – ₹8 LPA",

    toolsAndTechnologies: ["Figma", "Adobe XD (introductory)", "Canva", "Miro"],

    prerequisites: "No prior design experience required. An eye for detail and creativity helps.",

    learningOutcomes: [
      "Conduct user research and translate insights into design decisions",
      "Create wireframes and high-fidelity prototypes independently",
      "Build and present a professional UX design portfolio",
      "Be interview-ready for UI/UX Designer roles",
    ],
  },
];
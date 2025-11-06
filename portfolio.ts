import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Nirbhay Bawankule",
  title: "Hi all, I'm Nirbhay",
  description:
    "I am a Computer Science student at KIIT University, passionate about building transparent, reliable, and practical machine learning systems. My work spans projects in predictive modeling, data analysis, and neural networks. I enjoy turning complex data into actionable insights and exploring the intersection of algorithms, AI, and human decision-making. This portfolio showcases my projects, skills, and experience in Python, Machine Learning, Deep Learning, and MLOps.",
  resumeLink: "<REPLACE_ME_RESUME_LINK>",
};

export const openSource = {
  // GitHub username you want shown in the site
  githubUserName: "NirbhayBawankule",
};

export const contact = {
  email: "nirbhaybawankule2004@gmail.com",
  phone: "+91 8237798967",
  // any other contact fields the template supports can go here
};

export const socialLinks: SocialLinksType = {
  email: "mailto:nirbhaybawankule2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/nirbhay-bawankule/",
  github: "https://github.com/NirbhayBawankule",
  instagram: "https://www.instagram.com/nirbhay_bawankule",
  // add twitter, leetcode, kaggle, etc. if you want
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle:
    "Specializing in Machine Learning and Data Analytics. I have hands-on experience in Python programming, building ML models from scratch, and designing data-driven solutions that transform raw data into actionable insights.",
  data: [
    {
      title: "Machine Learning & Data",
      lottieAnimationFile: "/lottie/skills/AI Robot.json", // keep or replace with available Lottie
      skills: [
        emoji("⚡ Building ML models from scratch (linear/logistic regression, tree models, NN)"),
        emoji("⚡ Data cleaning, EDA, feature engineering with Pandas & NumPy"),
        emoji("⚡ Model evaluation, interpretation, and basic MLOps workflows"),
      ],
      softwareSkills: [
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "NumPy", iconifyTag: "logos:numpy" },
        { skillName: "Pandas", iconifyTag: "logos:pandas" },
        { skillName: "Scikit-Learn", iconifyTag: "logos:scikit-learn" },
        { skillName: "TensorFlow", iconifyTag: "logos:tensorflow" },
        { skillName: "PyTorch", iconifyTag: "logos:pytorch" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
      ],
    },
    {
      title: "Software Engineering",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Writing clean Python code and modular projects"),
        emoji("⚡ Familiar with OOP, REST APIs, and basic backend concepts"),
      ],
      softwareSkills: [
        { skillName: "Django", iconifyTag: "vscode-icons:file-type-django" },
        { skillName: "Java", iconifyTag: "logos:java" }, // DSA in Java
        { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Machine Learning",
    progressPercentage: "80",
  },
  {
    Stack: "Programming (Python / Java)",
    progressPercentage: "85",
  },
  {
    Stack: "Data Analysis",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "KIIT University",
    subHeader: "B.Tech — Computer Science and Engineering",
    duration: "2023 - 2027 (expected)",
    desc: "Pursuing undergraduate degree in Computer Science. Focus areas: Machine Learning, Data Mining, and MLOps.",
    grade: "CGPA: 7.78 (current)",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest 2025",
    companyLogo: "", // optional — you can leave it blank if no logo
    date: "Oct 2025",
    desc: "Contributed to open-source repositories and submitted pull requests during Hacktoberfest 2025. Practiced Git workflows including commits, branching, and PRs, earning the Hacktoberfest Level 1 Badge.",
  },
  {
    role: "ML Domain Member",
    company: "Coding Ninjas Society, KIIT University",
    companyLogo: "", // optional
    date: "2025 – Present",
    desc: "Collaborated with peers on ML-focused sessions, discussions, and coding events to foster a practical learning environment and strengthen applied machine learning skills.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "HR-Analytics-Employee-Attrition-Performance",
    desc: "A GitHub project (personal) named `HR-Analytics-Employee-Attrition-Performance` — Predicting employee attrition using data mining and machine learning techniques — includes data preprocessing, EDA, and model comparison",
    github: "HR-Analytics-Employee-Attrition-Performance",
    link: "https://github.com/NirbhayBawankule/HR-Analytics-Employee-Attrition-Performance",
  },
  {
    name: "Multiple Linear Regression (Portfolio Project)",
    desc: "A multiple linear regression project built from scratch to analyze and predict targets using feature engineering and model evaluation.",
    github: "<REPLACE_ME_MLR_github>",
    link: "<REPLACE_ME_MLR_demo_or_notebook>",
  },
  {
    name: "Breast Cancer Diagnosis — Logistic Regression (From Scratch)",
    desc: "A Kaggle dataset based logistic regression project implemented from scratch for binary classification and evaluation.",
    github: "<REPLACE_ME_BC_logreg_github>",
    link: "<REPLACE_ME_BC_logreg_notebook_or_demo>",
  },
  {
    name: "Password Strength Classifier (Neural Network)",
    desc: "A softmax-based neural network classifier to determine password strength; includes training and evaluation.",
    github: "<REPLACE_ME_password_classifier_github>",
    link: "<REPLACE_ME_password_classifier_demo>",
  },
];

export const feedbacks: FeedbackType[] = [
  // You told me you want 'Collect testimonials' on Hocoos,
  // but I don't have testimonials for you yet. If you have
  // feedbacks (name, role, text) paste them and I'll add here.
];

export const seoData: SEODataType = {
  title: "Nirbhay Bawankule — AI & Data Engineer",
  description: greetings.description,
  author: "Nirbhay Bawankule",
  image: "<REPLACE_ME_PROFILE_IMAGE_URL>",
  url: "<REPLACE_ME_WEBSITE_URL>",
  keywords: [
    "Nirbhay",
    "Nirbhay Bawankule",
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Portfolio",
  ],
};

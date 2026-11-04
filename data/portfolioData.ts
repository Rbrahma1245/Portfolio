export const portfolioData = {
  personal: {
    name: "Rahul Brahma",
    title: "Front End Developer",
    location: "Bengaluru, India",
    email: "rbrahma1245@gmail.com",
    phone: "+91-8876529634",
    summary: "Front End Developer with 3 years of experience building enterprise ERP web applications with React.js, JavaScript (ES6+) and Material-UI. Currently focused on the Supplier Profile and Sourcing modules, delivering supplier onboarding, vendor master and RFQ screens used by procurement teams and external suppliers.",
  },
  experience: [
    {
      project: "Appstec Issue Management (AIM)",
      // role: "Front End Developer (AIM Tool)",
      company: "AppsTec ERP Solutions Pvt Ltd",
      location: "Bengaluru",
      period: "Dec 2023 - Present",
      highlights: [
        "Developed and maintained Appstec Issue Management (AIM), an internal production-ready issue tracking and project management tool used daily by engineering and cross-functional teams for bug tracking, task assignment, and sprint backlog management.",
        "Built interactive Kanban boards and dynamic data-grid workflows within AIM supporting real-time status updates, priority tagging, and advanced filtering by assignee, module, and status.",
        "Engineered an integrated Leave & Calendar Management module allowing developers and managers to apply for leave, view personal schedules, and sync team calendars directly within the workspace.",
        "Implemented smart resource-availability checks during ticket assignment and sprint planning to prevent overloading team members currently on leave or committed to key team calls.",
        "Created reusable Material-UI components to standardize and speed up feature delivery across internal productivity workflows."
      ]
    },
    {
      project: "Document Management System (DMS)",
      // role: "Front End Developer (AIM Tool)",
      company: "AppsTec ERP Solutions Pvt Ltd",
      location: "Bengaluru",
      period: "Dec 2023 - Present",
      highlights: [
        "Developed a Document Management System to manage projects, documents, and team collaboration.",
        "Implemented role-based access control for Admin, Project Manager, and Developer roles.",
        "Built features for project creation, updates, deletion, and team member management.",
        "Implemented document upload, viewing, updating, and deletion with category-based organization.",
        "Developed user authentication, team invitations, and permission management functionality.",
        "Integrated email notifications to inform relevant team members about project and document activities."
      ]
    },
    {
      project: "Enterprise ERP Platform (Supplier & Sourcing Modules)",
      // role: "Front End Developer",
      company: "AppsTec ERP Solutions Pvt Ltd",
      location: "Bengaluru",
      period: "Dec 2023 - Present",
      highlights: [
        "Develop and maintain Supplier Profile and Sourcing modules of an enterprise ERP platform in React.js for procurement teams and external suppliers.",
        "Built supplier onboarding and profile management flows with multi-step registration forms, field-level validation, document/certificate uploads, and approval status tracking.",
        "Implemented sourcing workflows covering RFQ creation, supplier invitation, quotation submission, and side-by-side bid comparison with dynamic line items and editable data grids.",
        "Integrated REST APIs for supplier, category, and RFQ data, managing state for server-side search, filtering, pagination, and error handling.",
        "Created reusable Material-UI components (data tables, advanced filters, form controls, status indicators) to standardize and speed up delivery.",
        "Implemented role-based rendering so buyers, approvers, and suppliers see correct actions within Agile sprint cycles."
      ]
    }
  ],
  internships: [
    {
      project: "Playgroundapp)",
      role: "Front End Developer Intern",
      company: "Mithya Labs",
      period: "90 Days",
      highlights: [
        "Developed a React CRUD application with efficient state management and fully responsive layout.",
        "Built a reusable React form library covering component composition, validation, and data handling; shipped live features to playgroundapp.com."
      ]
    },
    {
      role: "Front End Developer Intern",
      company: "Web Tek Labs",
      location: "Kolkata",
      period: "1 Month",
      highlights: [
        "Built a JavaScript hotel search application with location-based filtering for preference-driven search and booking."
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Website",
      tech: ["React.js", "JavaScript", "CSS"],
      description: "Online store featuring keyword search, category listings, product detail pages, and custom filters, built with responsive, reusable React components and client-side cart logic."
    },
    {
      title: "Task Management App",
      tech: ["React.js"],
      description: "To-do application supporting add, edit, delete, and status updates with instant UI feedback using stateful React components."
    },
    {
      title: "Hotel Search Application",
      tech: ["JavaScript", "HTML", "CSS"],
      description: "Preference-based hotel search engine featuring integrated location parameters for seamless booking convenience."
    },
    {
      title: "HaYaan's Cafe And Bakery",
      description:
        "A full-featured bakery e-commerce application where customers can browse sweets and bakery products, add items to their cart, review their orders, and place orders through WhatsApp. Includes an admin dashboard to add inventory items, update product details, and enable or disable product availability.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp Integration"],
      liveUrl: "https://hayaans-cafe-and-bakery-next-js.vercel.app/",
    },
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "HTML5", "CSS3", "Sass"],
    frameworks: ["React.js", "React Hooks", "Material-UI (MUI)", "Bootstrap"],
    domain: ["ERP", "Procurement & Sourcing", "Supplier / Vendor Management", "RFQ & Bid Management"],
    concepts: ["Component-based architecture", "State management", "REST API integration", "Responsive & mobile-first design", "Web accessibility (WCAG)", "Performance optimization"],
    tools: ["Git", "GitHub", "Chrome DevTools", "npm", "Agile / Scrum", "Code reviews"]
  },
  education: [
    {
      degree: "M.Tech, Computer Science and Engineering",
      institution: "Central Institute of Technology, Kokrajhar",
      grade: "CGPA 9.2/10",
      year: "2022"
    },
    {
      degree: "B.Tech, Computer Science and Engineering",
      institution: "Central Institute of Technology, Kokrajhar",
      grade: "CGPA 6.7/10",
      year: "2020"
    }
  ]
};

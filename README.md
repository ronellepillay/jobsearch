# jobsearch

## Advanced Job Search Platform

The Advanced Job Search Platform is a modern web application built on the MERN stack, providing streamlined job application processes. It empowers users to select their roles, whether as an applicant or a recruiter, and create accounts accordingly. This platform ensures secure login sessions and employs JWT token verification to safeguard REST APIs. Once logged in, recruiters can effortlessly manage jobs, applications, and profiles. Likewise, applicants can explore job opportunities, utilize fuzzy search with diverse filters, apply with personalized statements of purpose (SOPs), and track their applications.

The platform caters to three distinct user categories:

1. Job Seekers: Users seeking employment can upload CVs, search for jobs using keywords, categories, and work statuses, and apply for positions with a simple click. They can also manage their resumes, including creating, editing, and expiring them.

2. Employers: Employers gain access to search resumes using keywords, job categories, and posting durations. They can post detailed job listings, including comprehensive job descriptions, titles, company information, locations, salaries, and required skills. Employers can also create and modify company profiles.

3. Admins: Administrators have the capability to customize the platform's appearance by editing a single template HTML file. They can send notifications via email to candidates, members, or employers directly from the administrative panel. Additionally, admins can send newsletters and emails to job seekers and employers and manage various icon sets.

The application leverages the power of the MERN stack, with the frontend built using React, the backend managed through Node.js and Express, and data stored in MongoDB. This choice of technology ensures a seamless development process and efficient management of the application's components.

## Motivation for Architecture Choice:

The MERN stack was chosen due to its array of benefits:

Full-Stack Capabilities: The MERN stack covers the entire development spectrum, from frontend to backend to database management. This cohesiveness simplifies development, ensuring efficiency and consistency.

JavaScript-Based: All elements of the MERN stack are crafted using JavaScript, facilitating code sharing and providing a unified development experience for the team.

React for Rich UI: The frontend is scaffolded using Create React App (CRA), offering a strong starting point for React applications. CRA includes a development server, build configurations, and other tools to simplify React development.

Scalability: Node.js supports non-blocking architecture, making the application efficient even with a large number of concurrent users. This scalability suits the application's growth potential.

Community Support: The MERN stack boasts an active developer community, providing abundant resources, libraries, and tools to enhance development speed and code quality.

## Deployment Strategy:

For deployment, the frontend will be hosted on Netlify, utilizing its serverless deployment for React applications. The backend will be deployed on a cloud platform like Render, which will effectively manage the backend server.

https://job-search-2023.vercel.app/

## User Stories:

Job Seekers can effortlessly browse job listings using keywords, categories, and work statuses. They can conveniently apply for jobs and keep track of their applications.

Employers can post detailed job listings, manage applications, search resumes, and shortlist suitable candidates.

Admins have the ability to customize the platform's appearance, manage notifications, send newsletters, and control icon sets.

## Key Features:

Enhanced User Experience: The platform focuses on providing an intuitive and user-friendly interface for both job seekers and employers. It emphasizes simplicity and efficiency, aiding users in achieving their objectives seamlessly.

Intelligent Job Matching: Advanced algorithms are employed to match job seekers with suitable job listings based on their skills and preferences. This increases the likelihood of successful job applications and reduces time spent searching for opportunities.

Cost-Effective Approach: The platform offers competitive and affordable pricing options for employers, setting it apart from existing portals that charge high fees for job postings and resume access.

Streamlined Application Management: Employers benefit from advanced application management features, simplifying sorting, filtering, and communication with applicants.

In conclusion, the MERN stack, along with Vercel and Create React App, provides a robust and scalable architecture for the Advanced Job Search Platform. The platform strives to stand out through enhanced functionality, cost-effectiveness, and a strong user experience, positioning itself as a valuable job search solution in the market.

## Installation Guide:

Clone the repository or download the ZIP file.
Navigate to the client and server directories in separate command prompts.
Run npm install in both directories.
Start the server using npm start.
Run the client using npm run dev.
Access the application at: http://localhost:5173/

## How to Use:

Sign in to the Advanced Job Search Platform.
Click on the "Job Search" section and enter your search criteria.
Apply filters to refine your search results.
For specific company searches, navigate to the "Companies" section.

## For Recruiters:

To upload job listings, click on the "Upload Job" option.

sign in to Job Search Portal
![figure 1](<sign in search.JPG>)

![figure 2](<recruiter posts jobs.JPG>)

find different companies
![figure 3](<find companies.JPG>)

filter your search to your specific needs
![figure 4](<filter search.JPG>)

more about Job Search
![figure 5](<about on Job Search.JPG>)

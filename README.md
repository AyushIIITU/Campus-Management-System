# Campus-ManageMent-System
The Campus Management System is a comprehensive web-based solution designed to tackle the complexities of real-time coordination and task management within a campus environment. Its core objective is to streamline campus facility management, enhancing the experience for both students and administrators.

### Features

- **Unified Platform:** Provides distinct panels for students, administrators, and other campus roles to facilitate efficient communication and task management.
- **Real-Time Management:** Oversees facilities such as laundry queues and bus reservations, ensuring up-to-date information and accessibility.
- **Automated Issue Handling:** Enhances response times for student complaints and applications with automated escalation of unresolved issues.

### Benefits

- **Reduced Administrative Overhead:** Simplifies administrative tasks and processes, allowing for more effective management.
- **Increased User Satisfaction:** Improves task prioritization and resolution, leading to higher satisfaction among users.
- **Collaborative Environment:** Promotes transparency and efficiency in task management, fostering a more cooperative campus atmosphere.

## Installation

Install Project with npm

For FrontEnd
```bash
  cd FrontEnd
  npm install
  npm run dev  
```
    
For BackEnd
```bash
  cd BackEnd
  npm install
  npx nodemon server.js 
```
To run this project, you will need to add the following environment variables to your .env file in backend folder

`MONGODB_URL_LOCAL`: URL for the local MongoDB database.

`JWT_SECRET`: Secret key used for JWT authentication.

`PORT`: Port number where the server will run.

`JWT_EXPIRY`: Expiration time for JWT tokens in milliseconds.

# 
The system consists of three main panels: the Student Panel, the Admin Panel, and the Custom Panel.
- **In the Student Panel**, students have the ability to raise concerns by creating and ranking complaints based on urgency. If these issues remain unresolved within 2 days , they are automatically forwarded to higher authorities for attention. Moreover, students can submit applications that are directed to the relevant handler for efficient communication. Furthermore, students can evaluate the performance of individuals handling tasks and take advantage of real-time facilities like managing laundry queues and reserving seats on college buses.
- **The Admin Panel** empowers administrators to efficiently handle incoming applications and complaints, assign tasks with deadlines, and communicate effectively within the administrative team. Admins also have the authority to book college buses as needed, ensuring smooth communication and task management.
- **The Custom Panel** offers specialized functionalities tailored to specific roles within the campus community. Guards can manage the laundry system. Rating provided students  can be viewed by some admin.SuperAdmins have the capability to delete ratings for quality control purposes, and drivers can efficiently manage passenger lists for bus trips.



## Documentation

[Documentation](https://docs.google.com/document/d/1lTvBGUxEPrNkYP535egUwD7o-JKFKcRs/edit?usp=sharing&ouid=111296748089125574377&rtpof=true&sd=true)

[![YouTube](http://i.ytimg.com/vi/ZEZ7gy2EYAk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZEZ7gy2EYAk)


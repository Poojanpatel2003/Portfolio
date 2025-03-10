import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import image from "../assets/projects/docUser.png"
import admin from "../assets/projects/docAdmin.png"
import job from "../assets/projects/job.png"
import managehub from "../assets/projects/managehub.png"
import news from "../assets/projects/news.png"
import eventt from "../assets/projects/event.png"
import intellivision from "../assets/projects/intellivision.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Doctor Appointment Booking System (User)"
              description="Doctor Appointment Booking System (MERN) – A full-stack web application that enables users to book and manage doctor appointments seamlessly.Patients can search for doctors based on specialization and availability, book slots, and receive real-time notifications.Doctors have a dedicated panel to manage schedules, approve/reject appointments, and update availability.The admin dashboard allows system-wide management of doctors, users, and appointments.The platform includes secure authentication (User, Doctor, Admin), appointment tracking, and a responsive UI for an enhanced user experience."
              ghLink="https://github.com/Poojanpatel2003/DoctorAppointment"
              demoLink="https://doctorappointment-1-bwtl.onrender.com/"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Doctor Appointment Booking System (Admin or Doctor)"
              description="Doctor Appointment Booking System (MERN) – A full-stack web application that enables users to book and manage doctor appointments seamlessly.Patients can search for doctors based on specialization and availability, book slots, and receive real-time notifications.Doctors have a dedicated panel to manage schedules, approve/reject appointments, and update availability.The admin dashboard allows system-wide management of doctors, users, and appointments.The platform includes secure authentication (User, Doctor, Admin), appointment tracking, and a responsive UI for an enhanced user experience."
              ghLink="https://github.com/Poojanpatel2003/DoctorAppointment"
              demoLink="https://doctorappointment-admin-54gj.onrender.com/"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job-Portal"
              description="Developed a comprehensive job portal website using the MERN stack that serves as a bridge between job seekers and recruiters. The platform offers an intuitive and user-friendly interface where job seekers can create detailed profiles, upload resumes, and apply for jobs seamlessly. Advanced search and filtering options allow users to refine job listings based on location, skills, industry, experience level, and job type.For recruiters, the portal provides a robust dashboard to post job openings, track pplications, and filter candidates based on qualifications, experience, and skill sets. The system ensures efficient job application management, enhancing the hiring process by allowing direct communication between recruiters and potential candidates."
            
              ghLink="https://github.com/Poojanpatel2003/JobPortal"
              demoLink="https://jobportal-psqj.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managehub}
              isBlog={false}
              title="Manage_Hub"
              description="Developed a full-fledged inventory and invoice management solution tailored for businesses to efficiently handle stock, transactions, and invoicing. The platform streamlines inventory tracking, enabling businesses to monitor stock levels, manage product entries, and track sales in real-time.Seamlessly integrated the backend API with the frontend, ensuring smooth data flow between different components of the application. "
              ghLink="https://github.com/Poojanpatel2003/Manage_Hub"
              demoLink="https://manage-hub.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsApp"
              description=" A dynamic and responsive news application that fetches real-time news from NewsAPI and presents it in a user-friendly interface. It includes features like category-based news filtering, search functionality, and pagination for seamless navigation. The app is built using React.js with Bootstrap for styling, ensuring a clean and modern UI."
             
              demoLink="https://mysamachar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventt}
              isBlog={false}
              title="Event Management System"
              description="A fully responsive event management system that allows users to browse and manage events effortlessly. It provides an interactive interface where users can view event details, schedules, and categories. The system is built using HTML, CSS, and JavaScript, ensuring smooth navigation, engaging UI animations, and a user-friendly experience without requiring a backend."
              ghLink="https://github.com/Poojanpatel2003/Evento.fun"
              demoLink="https://poojanpatel2003.github.io/Evento.fun/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intellivision}
              isBlog={false}
              title="Intellivision"
              description="•Developed Intellivision, a cutting-edge platform with a user-friendly interface and advanced AI capabilities.Features include ID detection for seamless data digitization, face detection for secure identification, and emotion detection for insightful analysis."
              ghLink="https://github.com/Poojanpatel2003/IntelliVision"
              demoLink="https://intelii-vision.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
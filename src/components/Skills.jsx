
import React from 'react';

function Skills() {
  const skills = [
  // Frontend
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "90%" },
//   { name: "TypeScript", level: "75%" },
  { name: "React.js", level: "85%" },
//   { name: "Angular", level: "70%" },
//   { name: "Vue.js", level: "65%" },
//   { name: "SASS / SCSS", level: "80%" },
  { name: "Bootstrap", level: "85%" },
//   { name: "Tailwind CSS", level: "80%" },

  // Backend
  { name: "Node.js", level: "85%" },
  { name: "Express.js", level: "80%" },
//   { name: "Django", level: "70%" },
//   { name: "Flask", level: "65%" },
//   { name: "Ruby on Rails", level: "60%" },
  { name: "PHP", level: "70%" },
  { name: "Laravel", level: "65%" },
  { name: "REST API Development", level: "85%" },
//   { name: "GraphQL", level: "70%" },
//   { name: "Firebase", level: "75%" },

  // Databases
  { name: "MongoDB", level: "80%" },
  { name: "MySQL", level: "75%" },
//   { name: "PostgreSQL", level: "70%" },
//   { name: "SQLite", level: "65%" },
//   { name: "Redis", level: "60%" },
//   { name: "Oracle DB", level: "60%" },

  // Cloud & DevOps
//   { name: "AWS", level: "75%" },
//   { name: "Google Cloud Platform", level: "70%" },
//   { name: "Azure", level: "65%" },
//   { name: "Docker", level: "75%" },
//   { name: "Kubernetes", level: "60%" },
//   { name: "CI/CD", level: "70%" },
//   { name: "Nginx", level: "65%" },
//   { name: "Vercel / Netlify", level: "80%" },

  // Programming & Algorithms
//   { name: "Python", level: "85%" },
{ name: "C", level: "75%" },
  { name: "Java", level: "70%" },
//   { name: "C#", level: "65%" },
  { name: "Problem Solving / DSA", level: "85%" },
  { name: "Data Structures", level: "85%" },

  // Version Control & Collaboration
  { name: "Git & GitHub", level: "85%" },
  { name: "Postman", level: "85%" },
//   { name: "Jira / Trello", level: "70%" },

  // UI/UX & Design
//   { name: "Figma", level: "75%" },
//   { name: "Adobe XD", level: "70%" },
//   { name: "Canva", level: "80%" },
  { name: "Responsive Design", level: "90%" },
//   { name: "Wireframing / Prototyping", level: "75%" },

  // Soft Skills
//   { name: "Communication", level: "90%" },
//   { name: "Teamwork", level: "90%" },
];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillCard}>
            <h3 style={styles.skillName}>{skill.name}</h3>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    background: "#EEF2FF",
    textAlign: 'center',
  },
  heading: {
    marginBottom: '40px',
    fontWeight: 'bold',
    borderBottom: '3px solid #4f46e5',
    width: 'fit-content',
    margin: '0 auto 40px auto',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  skillCard: {
    width: '250px',
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  skillName: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  progressBar: {
    width: '100%',
    height: '10px',
    background: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    background: '#4f46e5',
    borderRadius: '10px',
    transition: 'width 0.5s ease-in-out',
  },
};

export default Skills;

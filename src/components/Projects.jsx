import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const projectData = [
  {
    title: "Calculator",
    description: "HTML, CSS, JavaScript - Project",
    link: "https://dinesh870.github.io/Calculator/",
    image: "/image/calculator.jpg",
  },
  {
    title: "ToDo List",
    description: "HTML, CSS, JavaScript - Project",
    link: "https://dinesh870.github.io/Todolist/",
    image: "/image/todolist.avif",
  },
  {
    title: "Tic Tac Toe",
    description: "HTML, CSS, JavaScript - Project",
    link: "https://dinesh870.github.io/tictactoegame/",
    image: "/image/tictactoe.jpg",
  },
  {
    title: "Guess Number",
    description: "HTML, CSS, JavaScript - Project",
    link: "https://dinesh870.github.io/guessnumbergame/",
    image: "/image/guess-the-number.png",
  },
  {
    title: "Portfolio",
    description: "HTML, CSS, JavaScript - Project",
    link: "#",
    image: "/image/portfolio.png",
  },
  {
    title: "Hindi Jokes NPM Package",
    description: "JavaScript - Project",
    link: "https://www.npmjs.com/package/hindi-jokes",
    image: "/image/hindijokes.jpeg",
  },
  {
    title: "Joke App",
    description: "HTML, CSS, JavaScript",
    link: "https://dinesh870.github.io/some-fun/",
    image: "/image/joke.png",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = projectData.slice(
    0,
    showAll ? projectData.length : 3
  );

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>

      <div style={styles.list}>
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            style={{
              ...styles.row,
              justifyContent:
                index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {projectData.length > 3 && (
        <button
          style={styles.toggleBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}

function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          ...styles.image,
          ...(hover ? styles.imageHover : {}),
        }}
      />

      <div
        style={{
          ...styles.overlay,
          ...(hover ? styles.overlayHover : {}),
        }}
      >
        <h3 style={styles.title}>{project.title}</h3>
        {project.description && (
          <p style={styles.desc}>{project.description}</p>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style =
              styles.buttonHoverInline)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style = styles.button)
          }
        >
          <FiExternalLink style={styles.buttonIcon} />
          <span>View Project</span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: "60px 20px 80px",
    background: "#E0E7FF",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  },

  heading: {
    marginBottom: "48px",
    fontWeight: 700,
    borderBottom: "3px solid #6366f1",
    width: "fit-content",
    marginInline: "auto",
    color: "#202121",
  },

  list: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  row: {
    display: "flex",
    width: "100%",
  },

  /** CARD */
  card: {
    position: "relative",
    width: "min(780px, 100%)",
    height: "340px",
    borderRadius: "24px",
    overflow: "hidden",
    cursor: "pointer",
    background: "#111827",
    boxShadow: "0 24px 60px rgba(0,0,0,0.65)",
    transform: "translateY(0)",
    transition: "0.3s ease",
  },

  cardHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 32px 70px rgba(15,23,42,0.95)",
  },

  /** IMAGE */
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.5s ease",
  },

  imageHover: {
    transform: "scale(1.08)",
    filter: "brightness(0.55) blur(1px)",
  },

  /** OVERLAY */
  overlay: {
    position: "absolute",
    inset: "auto 0 0 0",
    height: "100%",
    padding: "24px 26px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "10px",
    background:
      "linear-gradient(to top, rgba(99,102,241,0.95), rgba(15,23,42,0.92), transparent)",
    transform: "translateY(100%)",
    opacity: 0,
    transition: "0.45s ease",
  },

  overlayHover: {
    transform: "translateY(0)",
    opacity: 1,
  },

  /** TEXT */
  title: {
    color: "#f9fafb",
    fontSize: "1.4rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
  },

  desc: {
    color: "#e5e7eb",
    fontSize: "0.95rem",
    maxWidth: "90%",
  },

  /** BUTTON */
  button: {
    marginTop: "12px",
    padding: "11px 20px",
    borderRadius: "999px",
    background: "#111827",
    color: "#e5e7eb",
    fontSize: "0.95rem",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transform: "translateY(10px) scale(0.96)",
    transition: "0.25s ease",
  },

  buttonHoverInline: `
    margin-top: 12px;
    padding: 11px 20px;
    border-radius: 999px;
    background: #f97316;
    color: #0b1120;
    font-size: .95rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transform: scale(1.07) translateY(-2px);
    box-shadow: 0 18px 35px rgba(249,115,22,0.5);
  `,

  buttonIcon: {
    fontSize: "1.1rem",
  },

  /** TOGGLE BUTTON */
  toggleBtn: {
    marginTop: "32px",
    padding: "10px 22px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.95rem",
    background: "linear-gradient(to right, #6366f1, #ec4899)",
    color: "#f9fafb",
    boxShadow: "0 12px 30px rgba(99,102,241,0.4)",
    transition: "0.2s ease",
  },
};

export default Projects;

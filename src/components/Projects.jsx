import "./ProjectSection.css";
import { FiExternalLink } from "react-icons/fi"; // optional icon
import React, { useState } from "react";

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
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-list">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${
              index % 2 === 0 ? "align-left" : "align-right"
            }`}
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>

                {project.description && (
                  <p className="project-desc">{project.description}</p>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FiExternalLink className="project-btn-icon" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectData.length > 3 && (
        <button
          className="projects-toggle-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}

export default Projects;

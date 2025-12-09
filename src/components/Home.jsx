import React, { useState, useEffect } from "react";
import { FaUserTie, FaFileAlt } from "react-icons/fa";

// Roles that will be typed in a loop
const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isHireHover, setIsHireHover] = useState(false);
  const [isResumeHover, setIsResumeHover] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex === current.length) {
      // pause, then move to next role
      const pause = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
      }, 1200);
      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const subtitleText = roles[roleIndex].slice(0, charIndex);

  const hireStyle = {
    ...styles.primaryBtn,
    ...(isHireHover ? styles.primaryBtnHover : {}),
  };

  const resumeStyle = {
    ...styles.secondaryBtn,
    ...(isResumeHover ? styles.secondaryBtnHover : {}),
  };

  return (
    <section id="home" style={styles.home}>
      <h1 style={styles.title}>
        Hello, I'm <span style={styles.highlight}>Dinesh</span>
      </h1>

      <p style={styles.subtitle}>
        {subtitleText}
        <span style={styles.cursor}>|</span>
      </p>

      <div style={styles.btnContainer}>
        <a
          href="mailto:singhdinesh87796@gmail.com"
          style={hireStyle}
          onMouseEnter={() => setIsHireHover(true)}
          onMouseLeave={() => setIsHireHover(false)}
        >
          <FaUserTie style={styles.icon} />
          Hire Me
        </a>

        <a
          href="https://drive.google.com/file/d/1ApNcPWuZz8MD1b9I7k02WTFZF2X1eF-L/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={resumeStyle}
          onMouseEnter={() => setIsResumeHover(true)}
          onMouseLeave={() => setIsResumeHover(false)}
        >
          <FaFileAlt style={styles.icon} />
          Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  home: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "700",
    margin: "0",
  },

  highlight: {
    color: "#4f46e5",
  },

  subtitle: {
    fontSize: "22px",
    marginTop: "16px",
    color: "#444",
    minHeight: "32px",
  },

  cursor: {
    marginLeft: "4px",
    fontWeight: "bold",
    color: "#4f46e5",
  },

  btnContainer: {
    marginTop: "32px",
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  icon: {
    marginRight: "8px",
  },

  primaryBtn: {
    padding: "12px 28px",
    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    boxShadow: "0 0 0 rgba(99, 102, 241, 0.0)",
    transform: "translateY(0)",
    transition: "all 0.25s ease",
  },

  primaryBtnHover: {
    boxShadow: "0 0 18px rgba(99, 102, 241, 0.7)",
    transform: "translateY(-2px) scale(1.02)",
  },

  secondaryBtn: {
    padding: "12px 28px",
    background: "#ffffff",
    color: "#4f46e5",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #4f46e5",
    boxShadow: "0 0 0 rgba(79, 70, 229, 0.0)",
    transform: "translateY(0)",
    transition: "all 0.25s ease",
  },

  secondaryBtnHover: {
    background: "linear-gradient(135deg, #ffffff, #e0e7ff)",
    boxShadow: "0 0 16px rgba(79, 70, 229, 0.5)",
    transform: "translateY(-2px) scale(1.02)",
  },
};

export default Home;

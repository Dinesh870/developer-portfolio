import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

function DevProfiles() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { icon: <FaGithub size={30} />, name: "GitHub", url: "https://github.com/Dinesh870/" },
    { icon: <SiLeetcode size={30} />, name: "LeetCode", url: "https://leetcode.com/u/Dine_09kau/" },
    { icon: <SiGeeksforgeeks size={30} />, name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/dineshkumodgh/" },
    { icon: <SiCodechef size={30} />, name: "CodeChef", url: "https://www.codechef.com/users/kau321/" }
  ];

  return (
    <section id="devprofiles" style={styles.section}>
      <h2 style={styles.title}>Coding Profiles</h2>

      <div style={styles.cardContainer}>
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.icon}
            <a href={item.url} target="_blank" rel="noreferrer" style={styles.link}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "40vh",
    padding: "80px 20px",
    background: "#F1F5F9",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },

  title: {
    marginBottom: "35px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    background: "#f1f3f5",
    padding: "18px 28px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  },

  cardHover: {
    boxShadow: "0 10px 20px rgba(80, 104, 163, 0.31)",
    transform: "translateY(-1px)",
  },

  icon: {
    color: "#333437ff",
  },

  link: {
    fontSize: "17px",
    textDecoration: "none",
    color: "#111",
  },
};

export default DevProfiles;

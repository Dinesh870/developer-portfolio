
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

function DevProfiles() {
  return (
    <section id="devprofiles" style={styles.section}>
      <h2 style={styles.title}>Coding Profiles</h2>

      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <FaGithub size={30} style={styles.icon} />
          <a href="https://github.com/Dinesh870/" target="_blank" style={styles.link}>
            GitHub
          </a>
        </div>

        <div style={styles.card}>
          <SiLeetcode size={30} style={styles.icon} />
          <a href="https://leetcode.com/u/Dine_09kau/" target="_blank" style={styles.link}>
            LeetCode
          </a>
        </div>

        <div style={styles.card}>
          <SiGeeksforgeeks size={30} style={styles.icon} />
          <a href="https://www.geeksforgeeks.org/profile/dineshkumodgh/" target="_blank" style={styles.link}>
            GeeksforGeeks
          </a>
        </div>

        <div style={styles.card}>
          <SiCodechef size={30} style={styles.icon} />
          <a href="https://www.codechef.com/users/kau321/" target="_blank" style={styles.link}>
            CodeChef
          </a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "40vh",
    padding: "80px 20px",
    background: "#F1F5F9",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
  },

  title: {
    fontSize: "32px",
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

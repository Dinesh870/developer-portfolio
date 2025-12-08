import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get in Touch</h2>

      <p style={styles.subtitle}>
        Let’s connect and collaborate 💡
      </p>

      <div style={styles.cardContainer}>

        {/* Email */}
        <div style={styles.card}>
          <FaEnvelope size={28} style={styles.icon} />
          <a href="mailto:singhdinesh87796@gmail.com" style={styles.link}>Email</a>
        </div>

        {/* LinkedIn */}
        <div style={styles.card}>
          <FaLinkedin size={28} style={styles.icon} />
          <a
            href="https://www.linkedin.com/in/dinesh-kumar-singh-17546322b/"
            target="_blank"
            style={styles.link}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#E0E7FF",
    boxShadow: "0 5px -20px rgba(0,0,0,0.1)"
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    background: "#fff",
    padding: "20px 30px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "0.3s",
    cursor: "pointer",
  },

  icon: {
    color: "#0077b5",
  },

  link: {
    fontSize: "17px",
    textDecoration: "none",
    color: "#333",
  },
};

export default Contact;

import React, { useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactCards = [
    { icon: <FaEnvelope size={30} />, name: "Email", url: "mailto:singhdinesh87796@gmail.com" },
    { icon: <FaLinkedin size={30} />, name: "LinkedIn", url: "https://www.linkedin.com/in/dinesh-kumar-singh-17546322b/" }
  ];


  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get in Touch</h2>

      <p style={styles.subtitle}>
        Let’s connect and collaborate 💡
      </p>

      <div style={styles.cardContainer}>

        <div style={styles.cardContainer}>
          {contactCards.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoveredIndex === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {React.cloneElement(item.icon, {
                style: styles.icon
              })}
              <a
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={styles.link}
              >
                {item.name}
              </a>
            </div>
          ))}
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

  cardHover: {
    boxShadow: "0 12px 22px rgba(80, 104, 163, 0.37)",
    transform: "translateY(-1px)",
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

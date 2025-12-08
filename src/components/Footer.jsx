
function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Dinesh Kumar Singh. All Rights Reserved.
      </p>

      <div style={styles.links}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0F172A",
    color: "#eee",
    padding: "25px 20px",
    textAlign: "center",
    marginTop: "50px",
  },

  text: {
    marginBottom: "10px",
    fontSize: "15px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  link: {
    color: "#bbb",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default Footer;

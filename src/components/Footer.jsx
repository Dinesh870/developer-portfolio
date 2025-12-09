
function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Dinesh Kumar Singh. All Rights Reserved.
      </p>
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
    color: "#fff",
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

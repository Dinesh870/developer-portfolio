function Logo() {
  return (
    <div style={styles.logoWrapper}>
      <div style={styles.logoCircle}>
        <span style={styles.logoText}>DKS</span>
      </div>
    </div>
  );
}

const styles = {
  logoWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoCircle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#000",
    border: "3px solid #7d7f83", // grey ring
    boxShadow: `
      0 0 0 3px #2b2b2b,
      0 0 12px rgba(255, 255, 255, 0.15)
    `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  // highlight ring segment
  logoCircleHighlight: {
    content: '""',
    position: "absolute",
    top: "6px",
    right: "10px",
    width: "16px",
    height: "3px",
    borderRadius: "999px",
    background: "#cfcfcf",
    opacity: 0.9,
  },

  logoText: {
    fontFamily: `"Comic Sans MS", "Trebuchet MS", system-ui, sans-serif`,
    fontSize: "18px",
    letterSpacing: "2px",
    color: "#fff",
    textShadow: `
      0 0 4px rgba(255, 255, 255, 0.8),
      1px 1px 0 #ff7300,
      -1px -1px 0 #00c3ff
    `,
  },
};

export default Logo;

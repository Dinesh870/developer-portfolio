import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState("home"); // default

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const getLinkStyle = (section) =>
    activeSection === section
      ? { ...styles.link, ...styles.activeLink }
      : styles.link;

  const navStyle = isMobile
    ? { ...styles.nav, padding: "12px 20px" }
    : styles.nav;

  const linksStyle = isMobile
    ? {
        ...styles.linksContainerMobile,
        ...(isOpen ? styles.linksMobileOpen : styles.linksMobileClosed),
      }
    : styles.linksContainer;

  const menuButtonStyle = isMobile
    ? styles.menuButton
    : styles.menuButtonHidden;

  return (
    <nav style={navStyle}>
      <h2 style={styles.logo}>
        <Logo/>
      </h2>

      {/* Mobile Hamburger Button */}
      <button style={menuButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        <span style={styles.menuLine} />
        <span style={styles.menuLine} />
        <span style={styles.menuLine} />
      </button>

      {/* Navigation Links */}
      <div style={linksStyle}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("home")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("home");
          }}
          onSetActive={() => handleSetActive("home")}
        >
          Home
        </Link>


        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("about")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("about");
          }}
          onSetActive={() => handleSetActive("about")}
        >
          About
        </Link>

        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("skills")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("skills");
          }}
          onSetActive={() => handleSetActive("skills")}
        >
          Skills
        </Link>

        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("education")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("education");
          }}
          onSetActive={() => handleSetActive("education")}
        >
          Education
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("projects")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("projects");
          }}
          onSetActive={() => handleSetActive("projects")}
        >
          Projects
        </Link>

        <Link
          to="devprofiles"
          spy={true}
          smooth={true}
          duration={600}
          offset={-70}
          style={getLinkStyle("devprofiles")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("devprofiles");
          }}
          onSetActive={() => handleSetActive("devprofiles")}
        >
          Profiles
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={600}
          offset={-10} // a bit less so contact gets detected
          style={getLinkStyle("contact")}
          onClick={() => {
            handleLinkClick();
            handleSetActive("contact");
          }}
          onSetActive={() => handleSetActive("contact")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#0F172A",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    letterSpacing: "1px",
  },

  linksContainer: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s ease, border-color 0.2s ease",
  },

  activeLink: {
    color: "#60A5FA",
    borderBottom: "2px solid #60A5FA",
  },

  menuButton: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },

  menuButtonHidden: {
    display: "none",
  },

  menuLine: {
    width: "22px",
    height: "2px",
    background: "#fff",
    borderRadius: "2px",
  },

  linksContainerMobile: {
    position: "absolute",
    top: "60px",
    right: 0,
    left: 0,
    background: "#0F172A",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "16px 0",
  },

  linksMobileOpen: {
    display: "flex",
  },

  linksMobileClosed: {
    display: "none",
  },
};

export default Navbar;

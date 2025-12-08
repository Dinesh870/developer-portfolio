import React, { useState, useEffect } from 'react';
import myImage from '../assets/myimage.png';

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Heading INSIDE the box */}
        <h2 style={styles.heading}>About Me</h2>

        <div
          style={{
            ...styles.content,
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '20px' : '40px',
          }}
        >
          {/* Left – Image */}
          <div style={styles.imageBox}>
            <img src={myImage} alt="Dinesh Kumar Singh" style={styles.image} />
          </div>

          {/* Right – Text */}
          <div style={styles.textBox}>
            <ul style={styles.list}>
              <li>
                I’m <strong>Dinesh Kumar Singh</strong>, a passionate{' '}
                <strong>Full Stack Developer</strong> focused on building clean, fast,
                and user-friendly web applications.
              </li>
              <li>
                I specialize in the <strong>MERN stack</strong> and love creating
                real-world, meaningful projects.
              </li>
              <li>
                Built full-stack apps like <strong>SolveHive</strong> and{' '}
                <strong>Homies</strong> with secure authentication and backend
                integration.
              </li>
              <li>
                Skilled in <strong>React.js, Node.js, Express.js, MongoDB, MySQL</strong>, and
                API development.
              </li>
              <li>
                Completed industrial training at{' '}
                <strong>Ardent Computech Pvt. Ltd.</strong> on the MERN stack.
              </li>
              <li>
                Solved <strong>600+ LeetCode problems</strong> with a contest rating of{' '}
                <strong>1564+</strong>.
              </li>
              <li>Experienced with Git, UI/UX basics, and modern development workflows.</li>
              <li>
                Always learning and exploring new technologies to grow as a developer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    background: "#F1F5F9"
    // padding: '40px 40px 10px 0px',
  },

  container: {
    width: '100%',
    // maxWidth: '1100px',
    // background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '30px 25px 40px 25px',
  },

  heading: {
    fontSize: '35px',
    textAlign: 'center',
    margin: '0 auto 20px auto',
    fontWeight: 'bold',
    paddingBottom: '10px',
    borderBottom: '3px solid #4f46e5',
    width: 'fit-content',
  },

  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBox: {
    width: '350px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  textBox: {
    maxWidth: '800px',
    flex: 1,
  },

  list: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
  },
};

export default About;

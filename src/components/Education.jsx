
function Education() {
  const education = [
    {
      degree: "Batchlor of Engineering (B.E.) in IT",
      institute: "University Institute of Technology, The University of Burdwan",
      year: "2021 - 2025",
      grade: "CGPA: 8.5/10",
    },
    {
      degree: "Higher Secondary (12th)",
      institute: "+2 Sri Radha Krishna Project High School Chitadhi",
      year: "2017 - 2019",
      grade: "Percentage: 79.40%",
    },
    {
      degree: "Secondary (10th)",
      institute: "Sri Radha Krishna High School Chitadhi",
      year: "2016 - 2017",
      grade: "Percentage: 79.40%",
    },
    {
      degree: "Industrial Training - MERN Stack",
      institute: "Ardent Computech Pvt. Ltd.",
      year: "2024",
      grade: "Completed",
    },
  ];

  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.heading}>Education</h2>
      <div style={styles.timeline}>
        {/* Vertical Line */}
        <div style={styles.verticalLine}></div>

        {education.map((edu, index) => (
          <div
            key={index}
            style={{
              ...styles.timelineItem,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={styles.timelinePointContainer}>
              <div style={styles.timelinePoint}></div>
              <span style={styles.yearBadge}>{edu.year}</span>
            </div>
            <div style={styles.timelineContent}>
              <h3 style={styles.degree}>{edu.degree}</h3>
              <p style={styles.institute}>{edu.institute}</p>
              <p style={styles.grade}>{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "#F1F5F9",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
  },
  heading: {
    marginBottom: "60px",
    fontWeight: "bold",
    borderBottom: "3px solid #4f46e5",
    width: "fit-content",
    margin: "0 auto 60px auto",
  },
  timeline: {
    position: "relative",
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },
  verticalLine: {
    position: "absolute",
    left: "50%",
    top: "0",
    transform: "translateX(-50%)",
    width: "4px",
    height: "100%",
    background: "linear-gradient(180deg, #4f46e5, #22c55e)",
    zIndex: "0",
    borderRadius: "2px",
  },
  timelineItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: "1",
  },
  timelinePointContainer: {
    position: "relative",
    minWidth: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: "1",
  },
  timelinePoint: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4f46e5, #22c55e)",
    marginBottom: "10px",
    border: "3px solid #fff",
    zIndex: "2",
  },
  yearBadge: {
    background: "#4f46e5",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  timelineContent: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    transition: "0.3s ease-in-out",
    width: "100%",
  },
  degree: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  institute: {
    fontSize: "16px",
    marginBottom: "4px",
  },
  grade: {
    fontSize: "14px",
    color: "#4f46e5",
    fontWeight: "bold",
  },
};

export default Education;

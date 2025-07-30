export default function Services() {
  const sectionStyle = {
    backgroundColor: "#f0f8ff", // Light pastel blue
    padding: "40px 20px",
    borderRadius: "10px",
    margin: "20px auto",
    maxWidth: "800px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
    color: "#003366",
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <ul style={listStyle}>
        <li>Windshield Replacement</li>
        <li>Wiper Blade Installation</li>
        <li>Glass Chip Repair</li>
        <li>Auto Detailing</li>
        <li>Insurance Assistance</li>
      </ul>
    </section>
  );
}

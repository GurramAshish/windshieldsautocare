export default function About() {
  return (
    <section>
      <style>
        {`
          section {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1.5rem;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .about-title {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1rem;
            border-left: 5px solid #007BFF;
            padding-left: 0.75rem;
          }

          .about-text {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #555;
          }
        `}
      </style>
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        We are a team of windshield and auto-care professionals serving the
        community with top-tier repairs, replacements, and detailing. Our
        mission is to restore your view and your vehicle’s value with every
        visit.
      </p>
    </section>
  );
}

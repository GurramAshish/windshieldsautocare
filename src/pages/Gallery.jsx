export default function Gallery() {
  return (
    <section>
      <style>
        {`
          section {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #e9f5ff; /* light blue */
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            text-align: center;
          }

          h2 {
            font-size: 2rem;
            font-weight: bold;
            color: #003366;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1.2rem;
            color: #555;
          }
        `}
      </style>

      <h2>Gallery</h2>
      <p>Photos coming soon. Stay tuned!</p>
    </section>
  );
}

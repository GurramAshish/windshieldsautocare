export default function Contact() {
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

          .contact-title {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1rem;
            border-left: 5px solid #007BFF;
            padding-left: 0.75rem;
          }

          .contact-info p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 0.5rem;
          }

          .contact-info strong {
            color: #000;
          }

          .map-frame {
            margin-top: 1.5rem;
            width: 100%;
            height: 300px;
            border: 0;
            border-radius: 8px;
          }
        `}
      </style>

      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <p><strong>Phone:</strong> +91 98854 33432</p>
        <p><strong>WhatsApp:</strong> +91 98854 33432</p>
        <p><strong>Email:</strong> devenrajput@gmail.com</p>
        <p><strong>Address:</strong>  Lodha Rd, Phase IV, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</p>
        <p><strong>Hours:</strong> Mon–Sun: 9am to 9pm, </p>
      </div>

      <iframe
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7740843377746!2d78.38969319999998!3d17.4705238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d8a8e5b13d%3A0x3fac6ee8330efb9b!2sWindshield%20World%20SD%20Auto%20Care!5e0!3m2!1sen!2sin!4v1753852742018!5m2!1sen!2sin" 
        allowFullScreen 
        loading="lazy" 
        title="Map"
      ></iframe>
    </section>
  );
}

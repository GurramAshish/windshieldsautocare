import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f8fc;
          color: #3393;
        }

        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        header {
          background-color: #003366;
          color: white;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-title {
          font-size: 24px;
          font-weight: bold;
          color: white
        }

        nav a {
          margin: 0 12px;
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        nav a:hover {
          text-decoration: underline;
          color: #ffdd57;
        }

        main {
          flex: 1;
          max-width: 1000px;
          margin: auto;
          padding: 40px 20px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }

        footer {
          background-color: #eaeaea;
          text-align: center;
          padding: 16px;
          font-size: 14px;
          color: #666;
        }

        @media (max-width: 600px) {
          .header-title {
            font-size: 18px;
          }

          nav a {
            display: inline-block;
            margin: 6px 8px;
          }

          main {
            padding: 20px 16px;
          }
        }
          section {
        font-family: Arial, sans-serif;
        color: #222;
      }

      .hero {
        text-align: center;
        padding: 4rem 1rem;
        background: linear-gradient(to right, #001F3F, #0074D9);
        color: white;
      }

      .hero h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: White
      }

      .hero p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
      }

      .hero a {
        background: white;
        color: #001F3F;
        font-weight: bold;
        padding: 0.6rem 1.5rem;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        transition: background 0.3s;
      }

      .hero a:hover {
        background: #f0f0f0;
      }

      .services {
        background: #f8f9fa;
        padding: 3rem 1rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        .services {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .service-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border: 1px solid #ddd;
      }

      .service-card h3 {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
      }

      .why-choose {
        background: #eef4f7;
        padding: 3rem 1rem;
        text-align: center;
      }

      .why-choose h3 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #003366;
      }

      .why-choose ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #333;
      }

      .why-choose li {
        margin: 0.5rem 0;
      }
      `}</style>

      <Router>
        <div className="app-wrapper">
          <header>
            <div className="header-container">
              <h1 className="header-title" >Windshield World SD Auto Care</h1>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </header>
             <div className="hero">
               <h2>Welcome to Windshield World SD Auto Care</h2>
               <p>Crystal-Clear Repairs, Hassle-Free Service</p>
               <Link to="/contact">Contact Us</Link>
             </div>
         
             {/* Services Overview */}
             <div className="services">
               <div className="service-card">
                 <h3>Windshield Replacement</h3>
                 <p>Expert glass replacement for all makes and models using OEM quality materials.</p>
               </div>
               <div className="service-card">
                 <h3>Insurance Assistance</h3>
                 <p>We help you with claim paperwork and smooth coordination with insurance companies.</p>
               </div>
               <div className="service-card">
                 <h3>Auto Detailing</h3>
                 <p>Complete exterior and interior cleaning to keep your car looking brand new.</p>
               </div>
             </div>
         
             {/* Why Choose Us */}
             <div className="why-choose">
               <h3>Why Choose Us?</h3>
               <ul>
                 <li> Same-day service available</li>
                 <li> Trusted by 5000+ happy customers</li>
                 <li> Located conveniently in the heart of the city</li>
                 <li> Trained professionals with years of experience</li>
               </ul>
             </div>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer>
            © 2025 Windshield World SD Auto Care. All rights reserved.
          </footer>
        </div>
      </Router>
    </>
  );
}

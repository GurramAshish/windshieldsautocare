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
          <h1>This is App.js</h1>
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

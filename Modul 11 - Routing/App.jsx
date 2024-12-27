/*
• Task 1:

• Set up a basic React Router with two routes: one for a Home page and one for an
About page. Display the appropriate content based on the URL.*/


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import CSS for responsiveness

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo">MyApp</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

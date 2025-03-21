import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Explore thousands of jobs from top companies worldwide</p>
        <div className="search-bar">
          <input type="text" placeholder="Search job title or company..." />
          <button>🔍 Search</button>
        </div>
      </section>

      {/* Trending Jobs */}
      <section className="trending-jobs">
        <h2>Trending Jobs</h2>
        <div className="jobs-grid">
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Google - New York, USA</p>
            <Link to="/jobs">Apply Now</Link>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Microsoft - Remote</p>
            <Link to="/jobs">Apply Now</Link>
          </div>
          <div className="job-card">
            <h3>Data Scientist</h3>
            <p>Amazon - San Francisco, USA</p>
            <Link to="/jobs">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1️⃣ Create Profile</h3>
            <p>Sign up and complete your profile in minutes.</p>
          </div>
          <div className="step">
            <h3>2️⃣ Apply for Jobs</h3>
            <p>Browse and apply for jobs that match your skills.</p>
          </div>
          <div className="step">
            <h3>3️⃣ Get Hired</h3>
            <p>Start your dream career with top companies.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Job Seekers</h2>
          <p>Find your dream job today.</p>
          <Link to="/register" className="cta-btn">Get Started</Link>
        </div>
        <div className="cta-box">
          <h2>For Employers</h2>
          <p>Post jobs & hire top talent.</p>
          <Link to="/admin" className="cta-btn">Post a Job</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

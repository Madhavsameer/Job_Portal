import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/RecentJobs.css"; // ✅ Import CSS

function RecentJobs() {
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5063/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return; // Ensure valid array

        const sortedJobs = data
          .filter(job => job.createdAt) // ✅ Filter jobs with createdAt
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // ✅ Sort by latest
          .slice(0, 8); // ✅ Show 8 latest jobs
        
        setRecentJobs(sortedJobs);
      });
  }, []);

  return (
    <div className="recent-jobs-container">
      <h2>🚀 Recent Jobs</h2>
      <div className="recent-jobs-grid">
        {recentJobs.length > 0 ? (
          recentJobs.map((job) => (
            <div key={job.id} className="recent-job-card">
              <div>
                <h3>{job.title}</h3>
                <p className="company-name">{job.company} - {job.location}</p>
                <p className="job-salary">Salary:  {job.salary}</p>
              </div>
              <Link to={`/jobs/${job.id}`}>
                <button className="view-details-btn">View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No recent jobs available.</p>
        )}
      </div>
    </div>
  );
}

export default RecentJobs;

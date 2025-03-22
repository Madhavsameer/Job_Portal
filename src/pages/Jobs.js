import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import "../Styles/Jobs.css"; // ✅ Import CSS

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5063/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  // 🔹 Extract Unique Job Titles (for filters)
  const jobTitles = ["All", ...new Set(jobs.map((job) => job.title))];

  // 🔹 Filter Jobs based on Search Input & Selected Title
  useEffect(() => {
    let updatedJobs = jobs;

    if (searchTerm) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTitle !== "All") {
      updatedJobs = updatedJobs.filter((job) => job.title === selectedTitle);
    }

    setFilteredJobs(updatedJobs);
  }, [searchTerm, selectedTitle, jobs]);

  return (
    <div className="job-container">
      <h2>Available Jobs</h2>

      {/* 🔹 Search Bar */}
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* 🔹 Dynamic Filter Buttons (Based on Job Titles) */}
      <div className="filter-buttons">
        {jobTitles.map((title) => (
          <button
            key={title}
            className={selectedTitle === title ? "active" : ""}
            onClick={() => setSelectedTitle(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* 🔹 Job Listings */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;

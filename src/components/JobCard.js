import React from "react";
// import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Salary: {job.salary}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;

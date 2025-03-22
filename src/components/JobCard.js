import React from "react";
import { Link } from "react-router-dom";
import "../Styles/JobCard.css"; // ✅ Import CSS for styling

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p>{job.description.substring(0, 100)}...</p> {/* Short preview */}
      <Link to={`/jobs/${job.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}

export default JobCard;

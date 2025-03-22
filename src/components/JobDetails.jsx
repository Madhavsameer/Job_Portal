import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/JobDetails.css"; // ✅ Import CSS for styling

function JobDetails() {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5063/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error("Error fetching job details:", err));
  }, [id]);

  if (!job) return <p>Loading job details...</p>;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobDetails;

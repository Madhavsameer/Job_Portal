import React, { useState } from "react";

function ApplyForm({ jobId }) {
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5063/api/jobs/${jobId}/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => alert("Application submitted!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="file" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} required />
      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplyForm;

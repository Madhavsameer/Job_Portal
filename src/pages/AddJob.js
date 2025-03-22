import React, { useState, useEffect } from "react";

function AddJob() {
  const [job, setJob] = useState({ title: "", description: "", salary: "", company: "", location: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = "/login"; // Redirect if not logged in
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      alert("You are not authorized to post jobs!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5063/api/jobs", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}` // ✅ Attach token
        },
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage}`);
      }

      alert("Job posted successfully!");

    } catch (error) {
      console.error("Error posting job:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Job Description"
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setJob({ ...job, location: e.target.value })}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default AddJob;

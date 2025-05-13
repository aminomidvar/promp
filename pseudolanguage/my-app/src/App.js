import React, { useState, useEffect } from "react";

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ name: "", familyName: "", email: "" });

  // Load saved records from local storage when the app starts
  useEffect(() => {
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(savedRecords);
  }, []);

  // Update form fields when user types
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Submit new record and save to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecords = [...records, formData];

    setRecords(updatedRecords); // Update state
    localStorage.setItem("records", JSON.stringify(updatedRecords)); // Save to local storage

    setFormData({ name: "", familyName: "", email: "" }); // Reset form
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User Form (Local Storage Enabled)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="familyName" placeholder="Family Name" value={formData.familyName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {/* Display Records */}
      <h3>Submitted Records (Saved in Local Storage)</h3>
      <table border="1" style={{ margin: "auto", width: "50%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.familyName}</td>
              <td>{record.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
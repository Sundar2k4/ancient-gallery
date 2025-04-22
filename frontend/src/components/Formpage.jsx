import React, { useState } from "react";
import './formpage.css'
const Formpage = () => {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    description: "",
    imageUrl: "",
    period: "",
    origin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/artifacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Artifact created successfully!");
        console.log(result);
        setFormData({
          _id: "",
          name: "",
          description: "",
          imageUrl: "",
          period: "",
          origin: "",
        });
      } else {
        alert("Error creating artifact.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{color:'black',marginBottom:'20px'}}>Add a New Artifact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Artifact ID:
            <input
              type="text"
              name="_id"
              value={formData._id}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Period:
            <input
              type="text"
              name="period"
              value={formData.period}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Origin:
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              required
            />
          </label>
          <div className="butto">
          <button type="submit">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Formpage;

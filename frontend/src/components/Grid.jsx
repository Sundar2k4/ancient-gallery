import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

const Grid = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArtifacts();
  }, []);

  const fetchArtifacts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://ancient-gallery-backend.onrender.com/api/artifacts");

      if (!response.ok) {
        throw new Error("Failed to fetch artifacts");
      }

      const data = await response.json();
      setArtifacts(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching artifacts:", err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading artifacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={fetchArtifacts}>Try Again</button>
      </div>
    );
  }

  if (artifacts.length === 0) {
    return (
      <div className="empty-state">
        <p>No artifacts found. Add some artifacts to display!</p>
        <Link to="/addart" className="add-artifact-btn">
          Add Artifact
        </Link>
      </div>
    );
  }

  return (
    <div id="grid" className="grid">
      {artifacts.map((artifact) => (
        <Link
          to={`/artifact/${artifact._id}`}
          key={artifact._id}
          className="griditem"
        >
          <div
            className="gridimg"
            style={{
              backgroundImage: `url(${
                artifact.imageUrl || "default-artifact.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="details">
            <p>{artifact.name}</p>
            <p>{artifact.period}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;

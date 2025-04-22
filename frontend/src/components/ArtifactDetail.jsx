import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ArtifactDetail.css'; // Assuming you're using a separate CSS file for styling

const ArtifactDetail = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        console.log(id);
        const response = await axios.get(`http://localhost:5000/api/artifacts/${id}`);
        setArtifact(response.data);
      } catch (error) {
        console.error('Error fetching artifact:', error);
        setError('Failed to load artifact. Please try again later.');
      }
    };

    if (id) {
      fetchArtifact();
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!artifact) {
    return <p>Loading...</p>;
  }

  return (
    <div className="artifact-detail-container">
      <h1 className="artifact-name">{artifact.name}</h1>
      <img
        src={artifact.imageUrl}
        alt={artifact.name}
        className="artifact-image"
      />
      <p className="artifact-description">{artifact.description}</p>
      <p className="artifact-period"><strong>Period:</strong> {artifact.period}</p>
      <p className="artifact-origin"><strong>Origin:</strong> {artifact.origin}</p>
    </div>
  );
};

export default ArtifactDetail;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/artGallery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define Artifact schema with custom string ID
const artifactSchema = new mongoose.Schema({
  _id: String, // Custom string ID
  name: String,
  description: String,
  imageUrl: String,
  period: String,
  origin: String,
});

const Artifact = mongoose.model('Artifact', artifactSchema);

// API to get all artifacts
app.get('/api/artifacts', async (req, res) => {
  try {
    const artifacts = await Artifact.find();
    res.json(artifacts);
  } catch (error) {
    res.status(500).send('Error fetching artifacts');
  }
});

// API to get a single artifact by ID
app.get('/api/artifacts/:id', async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.id);
    if (!artifact) return res.status(404).send('Artifact not found');
    res.json(artifact);
  } catch (error) {
    res.status(400).send('Invalid artifact ID');
  }
});

// API to create a new artifact
app.post('/api/artifacts', async (req, res) => {
  try {
    const { _id, name, description, imageUrl, period, origin } = req.body;
    const newArtifact = new Artifact({ _id, name, description, imageUrl, period, origin });
    await newArtifact.save();
    res.status(201).json(newArtifact);
  } catch (error) {
    res.status(500).send('Error creating artifact');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

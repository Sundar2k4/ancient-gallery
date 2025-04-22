const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://csundar993:S1RjXYDtC73UGJCE@cluster2.3g8fa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const artifactSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  imageUrl: String,
  period: String,
  origin: String,
});

const Artifact = mongoose.model('Artifact', artifactSchema);


app.get('/api/artifacts', async (req, res) => {
  try {
    const artifacts = await Artifact.find();
    res.json(artifacts);
  } catch (error) {
    res.status(500).send('Error fetching artifacts');
  }
});


app.get('/api/artifacts/:id', async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.id);
    if (!artifact) return res.status(404).send('Artifact not found');
    res.json(artifact);
  } catch (error) {
    res.status(400).send('Invalid artifact ID');
  }
});


app.post('/api/artifacts', async (req, res) => {
  try {

    const { _id, name, description, imageUrl, period, origin } = req.body;

    
    if (!_id || !name || !description || !imageUrl || !period || !origin) {
      return res.status(400).json({ error: "All fields are required." });
    }


    const newArtifact = new Artifact({ _id, name, description, imageUrl, period, origin });
    await newArtifact.save();

    res.status(201).json(newArtifact);
  } catch (error) {
    console.error("Error creating artifact:", error);
    res.status(500).json({ error: "Error creating artifact." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

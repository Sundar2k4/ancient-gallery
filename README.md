# Ancient Art Gallery - MERN Stack Project

An **Ancient Art Gallery** website built using the MERN (MongoDB, Express, React, Node.js) stack. The website showcases a variety of ancient artifacts with detailed information fetched from a MongoDB database. Users can explore artifacts and learn about their historical significance through an intuitive user interface.

## Live Demo

Check out the live demo of the Ancient Art Gallery here: [Ancient Art Gallery](https://sundar2k4.github.io/ancient-gallery/)

## Features

- 📜 **Artifact Display**: View a gallery of ancient artifacts with images and descriptions.
- 🔍 **Detailed Artifact Information**: Click on an artifact to access more detailed information about its history and origin.
- 🖼️ **Appealing Interface**: The website features a clean and responsive design, optimized for a seamless user experience.
- 💾 **MongoDB Integration**: All artifact data, including images and descriptions, is stored in a MongoDB database.
- 🛠️ **MERN Stack**: Built using MongoDB, Express, React, and Node.js for a scalable web application.

## Technologies Used

- **Frontend**: React.js
  - React components for creating the user interface.
  - CSS for a responsive and visually appealing gallery layout.
- **Backend**: Node.js, Express.js
  - Server-side logic to serve the static files and handle routing.
- **Database**: MongoDB
  - NoSQL database for storing artifact information.
  - Mongoose for schema-based data modeling and interaction with MongoDB.

## Project Structure

`├── build ├── node_modules ├── public ├── server │ └── server.js # Express server setup ├── src │ ├── components │ │ ├── ArtifactDetail.css │ │ ├── ArtifactDetail.jsx │ │ ├── firebaseConfig.js │ │ ├── Grid.css │ │ ├── Grid.jsx │ │ ├── Header.css │ │ ├── Header.jsx │ │ ├── Login.css │ │ ├── Login.jsx │ │ ├── Mainpage.css │ │ ├── Mainpage.jsx │ │ ├── Sidebar.css │ │ ├── Sidebar.jsx │ ├── images │ ├── App.css │ ├── App.jsx │ ├── App.test.js │ ├── index.css │ ├── index.jsx │ ├── logo.svg │ ├── reportWebVitals.js │ ├── setupTests.js`

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/ancient-art-gallery.git
cd ancient-gallery

```

## Installation

```bash
# Install dependencies:
npm install

# Run the backend server:
cd server
node server.js

# Run the frontend server:
# Navigate back to the ancient-gallery root directory:
cd ..
npm start
```

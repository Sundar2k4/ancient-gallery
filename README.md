# 🏛️ Ancient Gallery

Ancient Gallery is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to browse, view, and add details about historical artifacts. This app was created to simulate a digital archive or virtual museum experience.

---

## 🌐 Live Demo

🔗 Frontend: [https://ancient-gallery-frontend.onrender.com](https://ancient-gallery-frontend.onrender.com)  
🔗 Backend: [https://ancient-gallery-backend.onrender.com](https://ancient-gallery-backend.onrender.com)

---

## 🚀 Features

- 🔍 View a grid of historical artifacts with images and descriptions.
- 🖼️ Click on any artifact to view full details on a dedicated page.
- ➕ Add new artifacts using a user-friendly form.
- 🌍 RESTful API built with Express and MongoDB.
- 🔗 Frontend built with React and styled using CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Deployment**: Render (Frontend + Backend)

---

## 🧩 Folder Structure

```
/client            # React frontend
  /src
    /components    # React components (Grid, Form, Detail view, etc.)
    App.jsx
    index.js

/server            # Express backend
  /models          # Mongoose schema for artifacts
  /routes          # API routes for artifacts
  server.js        # Entry point
```

---

## 🧪 API Endpoints

| Method | Endpoint                     | Description                  |
|--------|------------------------------|------------------------------|
| GET    | `/api/artifacts`             | Fetch all artifacts          |
| GET    | `/api/artifacts/:id`         | Fetch single artifact        |
| POST   | `/api/artifacts`             | Create new artifact          |

---

## 📸 Screenshots

> _(Add screenshots or GIFs of your UI here for better showcase!)_

---

## 🧰 Installation & Setup (Local)

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/ancient-gallery.git
   cd ancient-gallery
   ```

2. **Backend Setup**  
   ```bash
   cd server
   npm install
   # Create a .env file and add your MongoDB URI
   npm start
   ```

3. **Frontend Setup**  
   ```bash
   cd client
   npm install
   npm start
   ```

---

## ⚙️ Environment Variables

In the backend `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

## ✨ Acknowledgements

Thanks to all the open-source contributors and the MERN community for tools and guidance!

---

## 📬 Contact

If you have any feedback or suggestions, feel free to reach out!

**Author**: Sundar

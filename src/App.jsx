
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid';
import ArtifactDetail from './components/ArtifactDetail'; // Import the new component
import Mainpage from './components/Mainpage'; // Import the Mainpage component

function App() {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/ancient-gallery' element={<Mainpage />} />
          <Route path="/grid" element={<Grid/>}/>
          <Route path="/artifact/:id" element={<ArtifactDetail/>} /> {/* New Route for Detail Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import { Quiz } from './pages/quiz'; 
import BuyPage from './pages/buy';
import RentPage from './pages/rent'; // Filename case check kar lena (rent.tsx vs Rent.tsx)
import PropertyDetails from './pages/propertydetails'; 

function App() {
  return (
    <Router>
      <div className="app-main-wrapper">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/quiz" element={<Quiz />} />
          
          {/* Dynamic Details Page */}
          <Route path="/property/:id" element={<PropertyDetails />} />

          {/* Fallback Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
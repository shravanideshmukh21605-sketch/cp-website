import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/cards';
import PropertyDetails from './pages/propertydetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

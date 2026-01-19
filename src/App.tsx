import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Your other routes like /quiz will go here later */}
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Your other routes like /quiz will go here later */}
      </Routes>
    </BrowserRouter>
  );
}
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
import { useState } from 'react';
import { Home, User } from 'lucide-react';
import { Quiz } from './pages/quiz';
import { HomePage } from './pages/home';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz'>('home');
  const [quizKey, setQuizKey] = useState(0);

  const handleHomeClick = () => {
    setCurrentPage('home');
    setQuizKey(prev => prev + 1);
  };

  const handleStartSearch = () => {
    setCurrentPage('quiz');
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <button onClick={handleHomeClick} className="navbar-brand">
          <Home size={24} fill="currentColor" />
          <span>Home</span>
        </button>
        <div className="navbar-profile">
          <User size={20} />
          <span>Profile</span>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' ? (
          <HomePage onStartSearch={handleStartSearch} />
        ) : (
          <Quiz key={quizKey} />
        )}
      </main>
    </div>
  );
}

export default App;
>>>>>>> 43f63647f0d7efc7422405e203494d86e3329cb4

import './quiz.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, Bed, Bath, Square } from 'lucide-react';
import { Results } from './results';

export const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    type: null as string | null,
    location: '',
    budget: 0,
    homeType: '',
  });

  const totalSteps = 4;

  // NEW: Navigation logic to go back to home page
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      if (nextStep === 3 && (!formData.budget || formData.budget === 0)) {
        const min = formData.type === 'rent' ? 5000 : 1000000;
        updateData('budget', min);
      }
      setCurrentStep(nextStep);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateData = (key: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getStepTitle = () => {
    if (currentStep === 1) return 'Are you looking to Buy or Rent?';
    if (currentStep === 2) return 'Preferred Location';
    if (currentStep === 3) {
      return formData.type === 'rent' ? 'Monthly Budget' : 'Budget Range';
    }
    return 'Home Type Preferences';
  };

  const homeTypeOptions = ['1 BHK', '2 BHK', '3 BHK', 'Villa', 'Bungalow'];

  const puneAreas = [
    'Select an area', 'Koregaon Park', 'Viman Nagar', 'Kalyani Nagar', 'Hinjewadi',
    'Wakad', 'Baner', 'Aundh', 'Pimple Saudagar', 'Kothrud', 'Karve Nagar',
    'Deccan', 'Shivajinagar', 'FC Road', 'JM Road', 'Khadki', 'Warje',
    'Hadapsar', 'Magarpatta', 'Kharadi', 'Wagholi', 'Kondhwa', 'Mohammed Wadi',
    'Balewadi', 'Sus', 'Hingne Khurd', 'Bavdhan', 'NIBM', 'Katraj',
    'Katraj Kondhwa', 'Bibvewadi', 'Swargate', 'Sinhagad Road', 'Model Colony', 'Camp Area'
  ];

  const budgetMin = formData.type === 'rent' ? 5000 : 1000000;
  const budgetMax = formData.type === 'rent' ? 100000 : 100000000;
  const budgetStep = formData.type === 'rent' ? 1000 : 100000;

  const formatBudget = (value: number) => {
    if (formData.type === 'rent') {
      if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L/mo`;
      return `₹${(value / 1000).toFixed(0)}k/mo`;
    }
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  if (showResults) {
    return <Results formData={formData} onReset={() => setShowResults(false)} />;
  }

  return (
    <div className="quiz-page-wrapper">
      {/* NEW: Navbar added here */}
      <nav className="quiz-navbar">
        <button onClick={handleGoHome} className="nav-back-home">
          ← Back to Home
        </button>
      </nav>

      <div className="quiz-card">
        <h1 className="quiz-title">{getStepTitle()}</h1>

        <div className="quiz-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="quiz-step"
            >
              {currentStep === 1 && (
                <div className="choice-container">
                  <div onClick={() => updateData('type', 'buy')} className={`choice-card ${formData.type === 'buy' ? 'active' : ''}`}>
                    <div className="icon-box"><Home size={48} /></div>
                    <span className="choice-label">Buy</span>
                  </div>
                  <div onClick={() => updateData('type', 'rent')} className={`choice-card ${formData.type === 'rent' ? 'active' : ''}`}>
                    <div className="icon-box"><Home size={48} /></div>
                    <span className="choice-label">Rent</span>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="location-dropdown-wrapper">
                  <Search className="search-icon" size={20} />
                  <select
                    className="location-dropdown"
                    value={formData.location}
                    onChange={(e) => updateData('location', e.target.value)}
                  >
                    {puneAreas.map((area) => (
                      <option key={area} value={area === 'Select an area' ? '' : area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {currentStep === 3 && (
                <div className="budget-slider-wrapper">
                  <div className="budget-slider-container">
                    <input
                      type="range"
                      min={budgetMin}
                      max={budgetMax}
                      step={budgetStep}
                      value={formData.budget >= budgetMin ? formData.budget : budgetMin}
                      onChange={(e) => updateData('budget', parseInt(e.target.value))}
                      className="budget-slider"
                    />
                    <div className="budget-slider-labels">
                      <span>{formatBudget(budgetMin)}</span>
                      <span>{formatBudget(budgetMax)}</span>
                    </div>
                  </div>
                  <div className="budget-display">
                    {formatBudget(formData.budget >= budgetMin ? formData.budget : budgetMin)}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="home-type-grid">
                  {homeTypeOptions.map((type) => (
                    <button
                      key={type}
                      onClick={() => updateData('homeType', type)}
                      className={`home-type-option ${formData.homeType === type ? 'active' : ''}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="nav-buttons">
          {currentStep > 1 && <button onClick={handleBack} className="btn-back">Back</button>}
          <button
            onClick={handleNext}
            className="btn-next"
            disabled={
              (currentStep === 1 && !formData.type) ||
              (currentStep === 2 && (!formData.location || !formData.location.trim())) ||
              (currentStep === 3 && (!formData.budget || formData.budget === 0)) ||
              (currentStep === 4 && !formData.homeType)
            }
          >
            {currentStep === totalSteps ? 'Finish' : 'Next'}
          </button>
        </div>

        <div className="dots-row">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`dot ${currentStep === step ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
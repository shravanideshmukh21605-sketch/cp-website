import { Bed, Bath, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './quiz.css';

interface ResultsProps {
  formData: {
    type: string | null;
    location: string;
    budget: number;
    homeType: string;
  };
  onReset: () => void;
}

export const Results = ({ formData, onReset }: ResultsProps) => {
  const navigate = useNavigate();

  // Ye properties array sirf results display ke liye hai
  const properties = [
    { id: 1, title: 'Modern Apartment in ' + formData.location, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', price: '₹1.5Cr', area: '1200 sqft', bedrooms: 3, bathrooms: 2, type: formData.homeType },
    { id: 2, title: 'Luxury Villa in ' + formData.location, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', price: '₹70L', area: '1500 sqft', bedrooms: 2, bathrooms: 2, type: formData.homeType },
    // ... add more as per your requirement
  ];

  return (
    <div className="results-page-wrapper">
      <div className="results-container">
        <div className="results-header">
          <h1 className="results-title">Property Results</h1>
          <button onClick={onReset} className="btn-reset">New Search</button>
        </div>
        <div className="results-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image"><img src={property.image} alt="" /></div>
              <div className="property-content">
                <div className="property-price">{property.price}</div>
                <h3 className="property-title">{property.title}</h3>
                <div className="property-details">
                  <div className="property-detail-item"><Bed size={18} /><span>{property.bedrooms} Beds</span></div>
                  <div className="property-detail-item"><Square size={18} /><span>{property.area}</span></div>
                </div>
                {/* ID ke basis pe navigation */}
                <button className="property-btn" onClick={() => navigate(`/property/${property.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
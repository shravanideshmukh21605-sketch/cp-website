import { Bed, Bath, Square } from 'lucide-react';
import './quiz.css';

interface FormData {
  type: string | null;
  location: string;
  budget: number;
  homeType: string;
}

interface ResultsProps {
  formData: FormData;
  onReset: () => void;
}

export const Results = ({ formData, onReset }: ResultsProps) => {
  // Mock property data based on form filters
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment in ' + formData.location,
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 0.8).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 0.9 / 100000).toFixed(1) + 'L',
      area: '1200 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 4,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Luxury ' + formData.homeType + ' in ' + formData.location,
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 1.1).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 1.05 / 100000).toFixed(1) + 'L',
      area: '1500 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 5,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Spacious ' + formData.homeType + ', ' + formData.location,
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 0.95).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 0.95 / 100000).toFixed(1) + 'L',
      area: '1800 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 4,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Elegant ' + formData.homeType + ' Property',
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 1.05).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 1.1 / 100000).toFixed(1) + 'L',
      area: '2000 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 6,
      bathrooms: 4,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Premium ' + formData.homeType + ' in ' + formData.location,
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 0.85).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 0.88 / 100000).toFixed(1) + 'L',
      area: '1400 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2027&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Beautiful ' + formData.homeType + ' Home',
      type: formData.homeType,
      price: formData.type === 'rent' 
        ? '₹' + (formData.budget * 1.15).toLocaleString('en-IN') + '/mo' 
        : '₹' + (formData.budget * 1.2 / 100000).toFixed(1) + 'L',
      area: '1600 sqft',
      bedrooms: formData.homeType.includes('1') ? 1 : formData.homeType.includes('2') ? 2 : formData.homeType.includes('3') ? 3 : 5,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="results-container">
      <div className="results-header">
        <h1 className="results-title">Property Results</h1>
        <p className="results-subtitle">
          Found {properties.length} properties matching your preferences
        </p>
        <button onClick={onReset} className="btn-reset">New Search</button>
      </div>
      <div className="results-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image">
              <img src={property.image} alt={property.title} />
            </div>
            <div className="property-content">
              <h3 className="property-title">{property.title}</h3>
              <div className="property-type">{property.type}</div>
              <div className="property-price">{property.price}</div>
              <div className="property-details">
                <div className="property-detail-item">
                  <Bed size={18} />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="property-detail-item">
                  <Bath size={18} />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="property-detail-item">
                  <Square size={18} />
                  <span>{property.area}</span>
                </div>
              </div>
              <button className="property-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

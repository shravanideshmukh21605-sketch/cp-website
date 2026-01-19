import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Maximize } from 'lucide-react';
import { propertyData, type Property } from '../data/mockdata'; 
import './propertydetails.css';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = propertyData.find((p: Property) => p.id === Number(id));

  if (!property) return <div className="details-page-wrapper"><h2>Property not found</h2></div>;

  return (
    <div className="details-page-wrapper">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Original Attractive Back Button */}
        <button className="back-btn-quiz" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} /> Back to Search Results
        </button>
      </div>

      <section className="property-main-container">
        <div className="property-layout-flex">
          
          {/* LEFT SIDE: Both Images with Same Size */}
          <div className="media-section">
            <div className="image-box-standard">
              <img src={property.image} alt="Main Property" />
            </div>

            {property.floorPlan && (
              <div className="floor-plan-section">
                <h4 style={{color: '#ff6b2b', marginBottom: '10px', marginTop: '20px'}}>Floor Plan</h4>
                <div className="image-box-standard">
                  <img src={property.floorPlan} alt="Floor Plan" />
                </div>
              </div>
            )}

            {/* Original Action Button */}
            <button className={`buy-sell-btn ${property.action}`}>
              {property.action === 'buy' ? 'Proceed to Buy' : 'Contact Seller'}
            </button>
          </div>

          {/* RIGHT SIDE: Info Area */}
          <div className="info-section">
            <h2>{property.title}</h2>
            <p className="location-text"><MapPin size={18}/> {property.location}</p>
            <p className="area-text"><Maximize size={18}/> {property.area}</p>

            <div className="price-tag">
              {property.price}
              <span className="old-price">{property.originalPrice}</span>
            </div>

            <p className="description-text">{property.description}</p>

            <div className="details-grid">
              <div className="detail-list">
                <h3>Amenities</h3>
                <ul>
                  {property.amenities.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-list">
                <h3>Highlights</h3>
                <ul>
                  {property.propertyFeatures.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
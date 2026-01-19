import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './cards.css';  // Importing local CSS file for the component

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  originalPrice: string;
  discount: string;
  action: 'buy' | 'sell';
  type: string;
  area: string;
}

const propertyData: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: 'Luxury 3BHK Apartment',
    location: 'Mumbai, India',
    price: '₹1,50,00,000',
    originalPrice: '₹1,80,00,000',
    discount: '17% off',
    action: 'buy',
    type: 'Apartment',
    area: '1850 sqft',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    title: 'Cozy 2BHK Villa',
    location: 'Bangalore, India',
    price: '₹70,00,000',
    originalPrice: '₹80,00,000',
    discount: '12% off',
    action: 'sell',
    type: 'Villa',
    area: '1350 sqft',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/originals/bc/96/9c/bc969ce14c0959130dd0c975fc2f3ec2.jpg',
    title: 'Sea View Penthouse',
    location: 'Goa, India',
    price: '₹2,00,00,000',
    originalPrice: '₹2,50,00,000',
    discount: '20% off',
    action: 'buy',
    type: 'Penthouse',
    area: '2600 sqft',
  },
  {
    id: 4,
    image: 'https://www.idesignarch.com/wp-content/uploads/Luxury-Modern-Loft-Studio-Apartment-Bangkok-Thailand_2-1024x1024.jpg', // Image URL for Modern Studio Apartment
    title: 'Modern Studio Apartment',
    location: 'Delhi, India',
    price: '₹40,00,000',
    originalPrice: '₹48,00,000',
    discount: '16% off',
    action: 'sell',
    type: 'Studio',
    area: '780 sqft',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    title: 'Luxury Villa with Pool',
    location: 'Pune, India',
    price: '₹3,20,00,000',
    originalPrice: '₹3,80,00,000',
    discount: '15% off',
    action: 'buy',
    type: 'Villa',
    area: '4200 sqft',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647',
    title: 'Farmhouse Retreat',
    location: 'Hyderabad, India',
    price: '₹1,10,00,000',
    originalPrice: '₹1,30,00,000',
    discount: '15% off',
    action: 'sell',
    type: 'Farmhouse',
    area: '3000 sqft',
  }
];

const Cards: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'buy' | 'sell'>('all');

  const filtered =
    filter === 'all'
      ? propertyData
      : propertyData.filter((p) => p.action === filter);

  return (
    <section className="property-container">
      <h1 className="hero-title">Premium Properties & Lands</h1>
      <p className="hero-subtitle">Find your perfect home across Pune</p>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button
          className={`filter-btn all ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>

        <button
          className={`filter-btn buy ${filter === 'buy' ? 'active' : ''}`}
          onClick={() => setFilter('buy')}
        >
          Buy
        </button>

        <button
          className={`filter-btn sell ${filter === 'sell' ? 'active' : ''}`}
          onClick={() => setFilter('sell')}
        >
          Sell
        </button>
      </div>

      {/* CARDS */}
      <div className="property-card-container">
        {filtered.map((p) => (
          <Link to={`/property/${p.id}`} key={p.id} className="property-card">
            <div className="image-box">
              <img src={p.image} alt={p.title} />
              <span className="tag">{p.type}</span>
            </div>

            <div className="property-card-details">
              <h3>{p.title}</h3>
              <p className="location">{p.location}</p>
              <p className="area">{p.area}</p>

              <p className="price">
                {p.price}
                <span>{p.originalPrice}</span>
              </p>

              <p className="discount">{p.discount}</p>

              <button className={`action-btn ${p.action}`}>
                {p.action === 'buy' ? 'Buy Property' : 'Sell Property'}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;

import React from 'react';
import { useParams } from 'react-router-dom';
import './propertydetails.css'; // Make sure to include your styling file

const propertyData = [
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
    description: 'A luxurious 3BHK apartment in the heart of Mumbai with stunning views and premium amenities.',
    amenities: ['Swimming Pool', 'Gym', 'Private Parking', '24/7 Security', 'High-speed WiFi'],
    propertyFeatures: ['3 Bedrooms', '2 Bathrooms', 'Spacious Living Room', 'Fully Furnished'],
    neighborhood: 'Located in a prime area with easy access to shopping centers, schools, and hospitals.',
    floorPlan: 'https://www.providentecopoliten.net.in/images/provident/provident-ecopolitan-3-bhk-apartment-floor-plan.webp',
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
    description: 'A cozy 2BHK villa with a private garden and peaceful surroundings.',
    amenities: ['Private Garden', 'Parking Space', '24/7 Water Supply'],
    propertyFeatures: ['2 Bedrooms', '2 Bathrooms', 'Large Balcony', 'Spacious Kitchen'],
    neighborhood: 'Located in a quiet residential area with parks and schools nearby.',
    floorPlan: 'https://cms.interiorcompany.com/wp-content/uploads/2025/01/36x47-plan-for-2-bhk-house.jpg',
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
    description: 'A penthouse with a breathtaking sea view, perfect for those seeking luxury living.',
    amenities: ['Private Pool', 'Gym', 'Jacuzzi', 'Sea View'],
    propertyFeatures: ['4 Bedrooms', '4 Bathrooms', 'Roof-top Terrace'],
    neighborhood: 'Located in a quiet neighborhood with excellent restaurants and shopping nearby.',
    floorPlan: 'https://storage.nekretnine1.hr/sites/4069/upload/listings/1708697995_zentrum-von-makarska-neue-wohnung-mit-meerblick-12.jpg',
  },
  {
    id: 4,
    image: 'https://www.idesignarch.com/wp-content/uploads/Luxury-Modern-Loft-Studio-Apartment-Bangkok-Thailand_1-1024x981.jpg', // Image URL for Modern Studio Apartment
    title: 'Modern Studio Apartment',
    location: 'Delhi, India',
    price: '₹40,00,000',
    originalPrice: '₹48,00,000',
    discount: '16% off',
    action: 'sell',
    type: 'Studio',
    area: '780 sqft',
    description: 'A modern studio apartment in the city center with all the amenities.',
    amenities: ['Fully Furnished', 'Smart Home Features', '24/7 Water Supply'],
    propertyFeatures: ['1 Bedroom', '1 Bathroom', 'Spacious Living Area'],
    neighborhood: 'Located in the heart of the city, close to shopping malls, restaurants, and parks.',
    floorPlan: 'https://www.maramani.com/cdn/shop/products/ID_11104_Floor_Plan-_new.jpg?v=1662962987&width=1650',
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
    description: 'A luxury villa with a private pool and spacious living area.',
    amenities: ['Swimming Pool', 'Garden', 'Private Parking', '24/7 Security'],
    propertyFeatures: ['5 Bedrooms', '6 Bathrooms', 'Home Theater', 'Wine Cellar'],
    neighborhood: 'Located in a peaceful suburban area with easy access to highways.',
    floorPlan: 'https://thumbs.dreamstime.com/b/floor-plan-house-swimming-pool-surrounded-trees-top-down-architectural-luxurious-outdoor-seating-various-364618756.jpg',
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
    description: 'A tranquil farmhouse retreat with vast open spaces.',
    amenities: ['Private Orchard', 'Pond', 'Outdoor Kitchen', 'Workshop Area'],
    propertyFeatures: ['4 Bedrooms', '3 Bathrooms', 'Large Backyard', 'Guest House'],
    neighborhood: 'Located in a serene countryside area, perfect for a peaceful getaway.',
    floorPlan: 'https://cdn.houseplansservices.com/content/kt1bth2q1m0c2q3c746jrq9f72/w991x660.jpg?v=2',
  }
];

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the property id from the URL
  const property = propertyData.find((p) => p.id === Number(id)); // Find the property based on the id

  if (!property) {
    return <div>Property not found</div>; // If the property is not found, show this message
  }

  return (
    <section className="property-details-container">
      <div className="property-details">
        <div className="image-container">
          <div className="image-box">
            <img src={property.image} alt={property.title} />
          </div>
          {/* Button positioned below the image */}
          <button className={`action-btn ${property.action}`}>
            {property.action === 'buy' ? 'Buy Property' : 'Sell Property'}
          </button>
        </div>

        <div className="property-info">
          <h2>{property.title}</h2>
          <p className="location">{property.location}</p>
          <p className="area">{property.area}</p>

          <p className="price">
            {property.price}
            <span>{property.originalPrice}</span>
          </p>

          <p className="discount">{property.discount}</p>

          <p className="description">{property.description}</p>

          <div className="amenities">
            <h3>Amenities:</h3>
            <ul>
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          <div className="property-features">
            <h3>Property Features:</h3>
            <ul>
              {property.propertyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="neighborhood">
            <h3>Neighborhood:</h3>
            <p>{property.neighborhood}</p>
          </div>

          {property.floorPlan && (
            <div className="floor-plan">
              <h3>Floor Plan:</h3>
              <img src={property.floorPlan} alt="Floor Plan" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

export interface Property {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  location: string;
  area: string;
  discount: string;
  description: string;
  image: string;
  floorPlan: string;
  action: "buy" | "sell" | "rent"; 
  amenities: string[];
  propertyFeatures: string[];
}

export const propertyData: Property[] = [
  {
    id: 1,
    title: "Skyline Mansion",
    price: "12.5 CR",
    originalPrice: "14.0 CR",
    location: "Malabar Hill, Mumbai",
    area: "4500 sq ft",
    discount: "10%",
    description: "A premium luxury mansion with sea view.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "buy",
    amenities: ["Private Pool", "Gym"],
    propertyFeatures: ["Sea View", "Smart Home"]
  },
  {
    id: 2,
    title: "Emerald Studio",
    price: "4.5 Lakh",
    originalPrice: "5.0 Lakh",
    location: "Jubilee Hills, Hyderabad",
    area: "1200 sq ft",
    discount: "5%",
    description: "Elegant rental studio for high-end lifestyle.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "rent",
    amenities: ["Park View", "Balcony"],
    propertyFeatures: ["Fully Furnished"]
  },
  {
    id: 3,
    title: "Azure Penthouse",
    price: "8.2 CR",
    originalPrice: "9.0 CR",
    location: "Whitefield, Bangalore",
    area: "3200 sq ft",
    discount: "8%",
    description: "Modern penthouse with city skyline view.",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "buy",
    amenities: ["Clubhouse", "Sauna"],
    propertyFeatures: ["High Ceiling"]
  },
  {
    id: 4,
    title: "The Royal Villa",
    price: "15.0 CR",
    originalPrice: "16.5 CR",
    location: "Udaipur, Rajasthan",
    area: "6000 sq ft",
    discount: "10%",
    description: "Heritage style villa with modern luxury.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "buy",
    amenities: ["Garden", "Courtyard"],
    propertyFeatures: ["Heritage"]
  },
  {
    id: 5,
    title: "Urban Loft",
    price: "2.1 Lakh",
    originalPrice: "2.5 Lakh",
    location: "Indiranagar, Bangalore",
    area: "1500 sq ft",
    discount: "15%",
    description: "Chic loft for creative professionals.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "rent",
    amenities: ["WiFi", "Cafe"],
    propertyFeatures: ["Industrial Design"]
  },
  {
    id: 6,
    title: "Ocean Whisper",
    price: "6.8 CR",
    originalPrice: "7.5 CR",
    location: "ECR, Chennai",
    area: "2800 sq ft",
    discount: "12%",
    description: "Beachfront property with private access.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "buy",
    amenities: ["Beach Access", "Infinity Pool"],
    propertyFeatures: ["Vastu Compliant"]
  },
  {
    id: 7,
    title: "Meadow Estate",
    price: "1.8 Lakh",
    originalPrice: "2.0 Lakh",
    location: "New Friends Colony, Delhi",
    area: "2200 sq ft",
    discount: "10%",
    description: "Classic bungalow style rental.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "rent",
    amenities: ["Private Lawn", "Servant Room"],
    propertyFeatures: ["Safe Locality"]
  },
  {
    id: 8,
    title: "The Glass House",
    price: "10.5 CR",
    originalPrice: "11.2 CR",
    location: "Banjara Hills, Hyderabad",
    area: "4000 sq ft",
    discount: "5%",
    description: "Architectural masterpiece with glass walls.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    floorPlan: "...",
    action: "buy",
    amenities: ["Library", "Wine Cellar"],
    propertyFeatures: ["Unique Architecture"]
  }
];
import { motion } from 'framer-motion';
import { Home, ArrowRight, Search, TrendingUp, Shield, Heart } from 'lucide-react';
import './home.css';

interface HomeProps {
  onStartSearch: () => void;
}

export const HomePage = ({ onStartSearch }: HomeProps) => {
  const features = [
    {
      icon: <Search size={32} />,
      title: 'Smart Search',
      description: 'Find your dream property with AI-powered filters'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Market Insights',
      description: 'Get real-time pricing and market trends'
    },
    {
      icon: <Shield size={32} />,
      title: 'Verified Listings',
      description: 'All properties are verified and authentic'
    },
    {
      icon: <Heart size={32} />,
      title: 'Personalized',
      description: 'Recommendations tailored to your preferences'
    }
  ];

  return (
    <div className="home-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="home-content"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="home-icon-wrapper"
        >
          <Home size={64} className="home-main-icon" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="home-title"
        >
          Find Your Perfect Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="home-subtitle"
        >
          Discover premium properties in Pune with our intelligent search platform.
          <br />
          Start your journey to finding your dream home today.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartSearch}
          className="home-cta-button"
        >
          <span>Start Your Search</span>
          <ArrowRight size={20} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="home-features"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="home-feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

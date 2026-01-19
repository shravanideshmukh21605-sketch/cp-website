import { Container, Title, Text, Button, Group, Box, Card, Image, Badge, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMapPin, IconChevronRight, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyData } from '../data/mockdata'; 
import Navbar from '../components/navbar'; // Imported Navbar

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 576px)');
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setIsVisible(true); }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - moveDistance : scrollLeft + moveDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0a0a0a', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <Box style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <Box style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)', 
          backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 
        }} />
        <Box style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1 
        }} />
        <Container size="xl" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box style={{ maxWidth: '800px' }}>
            <Title order={1} c="white" style={{ fontSize: isMobile ? '3.5rem' : '6rem', fontWeight: 900, opacity: isVisible ? 1 : 0, transition: '0.8s' }}>Find Your</Title>
            <Title order={1} c="#FF6B35" style={{ fontSize: isMobile ? '4rem' : '8rem', fontWeight: 900, marginBottom: '35px', opacity: isVisible ? 1 : 0, transition: '0.8s 0.2s' }}>Dream Home.</Title>
            
            {/* FIXED: Redirecting to Quiz Section */}
            <Button 
              size="xl" 
              radius="md" 
              color="orange" 
              onClick={() => navigate('/quiz')} 
              rightSection={<IconChevronRight size={24} />} 
              style={{ height: '80px', padding: '0 70px', fontSize: '1.6rem', fontWeight: 800 }}
            >
              Start Searching
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Properties Section */}
      <Box py={100}>
        <Container size="xl">
          <Group justify="space-between" align="flex-end" mb={50}>
            <Box>
              <Text c="orange" fw={800} tt="uppercase" style={{ letterSpacing: '3px' }}>Premium Collection</Text>
              <Title c="white" order={2} style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: 900 }}>Featured Estates</Title>
            </Box>
            {!isMobile && (
              <Group gap="md">
                <ActionIcon variant="outline" color="gray" size="xl" radius="xl" onClick={() => scroll('left')}><IconArrowLeft size={24} /></ActionIcon>
                <ActionIcon variant="outline" color="orange" size="xl" radius="xl" onClick={() => scroll('right')}><IconArrowRight size={24} /></ActionIcon>
              </Group>
            )}
          </Group>

          <Box ref={scrollRef} className="property-scroll-container" style={{ display: 'flex', overflowX: 'auto', gap: '25px', paddingBottom: '40px' }}>
            {propertyData.map((prop) => (
              <Box key={prop.id} style={{ minWidth: isMobile ? '85vw' : '380px', flexShrink: 0 }}>
                <Card 
                  radius="lg" 
                  p="md" 
                  style={{ 
                    // UPDATED: Faint White Glass Color
                    backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: '0.3s' 
                  }}
                >
                  <Card.Section><Image src={prop.image} height={280} /></Card.Section>
                  <Group justify="space-between" mt="md">
                    <Text c="white" fw={800} size="xl">{prop.title}</Text>
                    <Badge color="orange" variant="filled" size="xl">{prop.price}</Badge>
                  </Group>
                  <Group gap="xs" mt="sm"><IconMapPin size={18} color="#FF6B35" /><Text size="sm" c="gray.3" fw={600}>{prop.location}</Text></Group>
                  <Button fullWidth color="orange" variant="light" mt="xl" radius="md" fw={700} onClick={() => navigate(`/property/${prop.id}`)}>View Details</Button>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
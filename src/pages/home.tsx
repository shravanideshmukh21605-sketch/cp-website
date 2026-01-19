import { Container, Title, Text, Button, Group, Box, SimpleGrid, Card, Image, Badge, Drawer, Stack, Divider } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IconHome, IconMapPin, IconBed, IconUser, IconMail, IconId, IconPhone, IconHistory, IconBookmark, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockProperties = [
  { id: 1, title: 'Skyline Mansion', price: '12.5 CR', location: 'Malabar Hill, Mumbai', bhk: '4 BHK', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'The Glass House', price: '8.2 CR', location: 'Jubilee Hills, Hyderabad', bhk: '3 BHK', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Emerald Villa', price: '15.0 CR', location: 'Lutyens, Delhi', bhk: '5 BHK', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Azure Retreat', price: '5.5 CR', location: 'Indiranagar, Bangalore', bhk: '3 BHK', img: 'https://images.unsplash.com/photo-1600607687940-c52af084399e?auto=format&fit=crop&w=800&q=80' },
];

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 576px)');
  const [isVisible, setIsVisible] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#0a0a0a', margin: 0, padding: 0 }}>
      
      {/* 1. Transparent Premium Header */}
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          padding: '15px 0',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <Container size="xl" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Group gap="xs">
            <IconHome size={32} color="#FF6B35" stroke={2.5} />
            <Text size="xl" fw={900} c="white" style={{ letterSpacing: '3px' }}>
              PUREFRAME LABS
            </Text>
          </Group>

          <Group gap="xl" visibleFrom="sm">
            <Group gap={35} mr={20}>
              {['Buy', 'Rent', 'Sell'].map((item) => (
                <Text 
                  key={item} 
                  c="white" 
                  fw={800} 
                  size="md" 
                  tt="uppercase" 
                  style={{ cursor: 'pointer', transition: '0.3s' }}
                  className="nav-link-hover"
                >{item}</Text>
              ))}
            </Group>
            
            <Button 
              variant="filled" 
              color="white" 
              c="black"
              radius="xl" 
              fw={800}
              leftSection={<IconUser size={20} stroke={2.5} />}
              onClick={open}
              style={{ padding: '0 25px' }}
            >
              PROFILE
            </Button>
          </Group>
        </Container>
      </Box>

      <style>{`
        .nav-link-hover:hover { color: #FF6B35 !important; transform: translateY(-2px); }
        @keyframes premiumZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
      `}</style>

      {/* 2. Hero Section - Cinematic Zoom Effect */}
      <Box style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'premiumZoom 25s infinite alternate',
            zIndex: 0
          }}
        />
        
        <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1 }} />

        <Container size="xl" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box style={{ maxWidth: '800px' }}>
            <Text c="orange" fw={800} tt="uppercase" style={{ letterSpacing: '6px', marginBottom: '20px' }}>
              Excellence in Indian Real Estate
            </Text>
            <Title
              order={1}
              c="white"
              style={{
                fontSize: isMobile ? '3.5rem' : '6rem',
                fontWeight: 900,
                lineHeight: 0.9,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: '0.8s',
                textShadow: '0 4px 15px rgba(0,0,0,0.8)'
              }}
            >
              Find Your
            </Title>
            <Title
              order={1}
              c="#FF6B35"
              style={{
                fontSize: isMobile ? '4rem' : '8rem',
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: '35px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: '0.8s 0.2s',
                textShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              Dream Home.
            </Title>
            
            <Button
              size="xl"
              radius="md"
              color="orange"
              onClick={() => navigate('/quiz')} 
              rightSection={<IconChevronRight size={24} />}
              style={{ 
                height: '80px', 
                padding: '0 70px', 
                fontSize: '1.6rem', 
                fontWeight: 800,
                boxShadow: '0 20px 60px rgba(255, 107, 53, 0.5)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            >
              Start Searching
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 3. Featured Property Grid */}
      <Box py={100} style={{ backgroundColor: '#0a0a0a' }}>
        <Container size="xl">
          <Group justify="space-between" mb={60} align="flex-end">
            <Box>
              <Text c="orange" fw={800} tt="uppercase" style={{ letterSpacing: '3px' }}>Premium Collection</Text>
              <Title c="white" order={2} style={{ fontSize: '4rem', fontWeight: 900 }}>Featured Listings</Title>
            </Box>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {mockProperties.map((prop) => (
              <Card 
                key={prop.id} 
                radius="lg" 
                p="md"
                style={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Card.Section><Image src={prop.img} height={280} /></Card.Section>
                <Group justify="space-between" mt="md">
                  <Text c="white" fw={800} size="xl">{prop.title}</Text>
                  <Badge color="orange" variant="filled" size="xl">₹ {prop.price}</Badge>
                </Group>
                <Group gap="xs" mt="sm">
                  <IconMapPin size={18} color="#FF6B35" />
                  <Text size="sm" c="gray.4" fw={600}>{prop.location}</Text>
                </Group>
                <Button fullWidth color="orange" variant="light" mt="xl" radius="md" fw={700}>View details</Button>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 4. Profile Sidebar Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="md"
        title={<Text fw={900} size="xl" c="white">USER ACCOUNT</Text>}
        styles={{
          content: { backgroundColor: '#0a0a0a', color: 'white' },
          header: { backgroundColor: '#0a0a0a', borderBottom: '1px solid #333' }
        }}
      >
        <Stack gap="xl" mt="md">
          <Box>
            <Text c="orange" fw={800} size="sm" tt="uppercase" mb="md">Personal Information</Text>
            <Stack gap="sm">
              <Text size="sm">Email: gayatrirade98@gmail.com</Text>
              <Group gap="xs">
                <Text size="sm">Aadhar Status:</Text>
                <Badge color="green" variant="filled">Verified</Badge>
              </Group>
              <Text size="sm">Mobile: +91 98765 43210</Text>
            </Stack>
          </Box>
          <Divider color="#222" />
          <Button fullWidth color="orange" mt="xl" radius="md" size="lg" fw={800}>EDIT PROFILE</Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
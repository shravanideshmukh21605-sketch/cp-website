import React from 'react';
import { Container, Title, Text, Button, Group, Box, SimpleGrid, Card, Image, Badge } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { propertyData } from '../data/mockdata';
import Navbar from '../components/navbar'; // Imported Navbar component

export default function RentPage() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 576px)');
  const rentProperties = propertyData.filter(p => p.action === 'rent');

  return (
    <Box style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      position: 'relative',
    }}>
      
      {/* 1. THE ACTUAL BACKGROUND IMAGE LAYER */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 0
      }} />

      {/* 2. THE CONTENT LAYER */}
      <Box style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Reusable Navigation Bar Component */}
        <Navbar />

        <Container size="xl" pt={140} pb={100} style={{ position: 'relative' }}>
          <Box mb={60}>
            <Text c="orange" fw={800} tt="uppercase" style={{ letterSpacing: '5px', marginBottom: '10px' }}>
              Premium Living
            </Text>
            <Title c="white" order={1} style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 900 }}>
              Rental Collection
            </Title>
            <Text c="gray.4" size="lg" mt="md" style={{ maxWidth: '600px', fontWeight: 500 }}>
              Handpicked luxury rentals. Experience the finest architecture and comfort.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {rentProperties.map((prop) => (
              <Card
                key={prop.id}
                radius="lg"
                p="md"
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.4)', // Very transparent
                  backdropFilter: 'blur(12px)', // High blur for premium look
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Card.Section>
                  <Image src={prop.image} height={280} />
                </Card.Section>

                <Group justify="space-between" mt="md">
                  <Text c="white" fw={800} size="xl">{prop.title}</Text>
                  <Badge color="orange" variant="filled" size="xl">{prop.price}</Badge>
                </Group>

                <Group gap="xs" mt="sm">
                  <IconMapPin size={18} color="#FF6B35" />
                  <Text size="sm" c="gray.2" fw={600}>{prop.location}</Text>
                </Group>

                <Button
                  fullWidth
                  color="orange"
                  variant="filled"
                  mt="xl"
                  radius="md"
                  fw={700}
                  onClick={() => navigate(`/property/${prop.id}`)}
                >
                  View Details
                </Button>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
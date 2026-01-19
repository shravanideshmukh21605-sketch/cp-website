import React from 'react';
import { Container, Title, Text, Button, Group, Box, SimpleGrid, Card, Image, Badge } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { propertyData } from '../data/mockdata'; 
import Navbar from '../components/navbar';

export default function BuyPage() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 576px)');
  const buyProperties = propertyData.filter(p => p.action === 'buy');

  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0a0a0a', position: 'relative' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', zIndex: 0
      }} />

      <Box style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Container size="xl" pt={140} pb={100}>
          <Box mb={60}>
            <Text c="orange" fw={800} tt="uppercase" style={{ letterSpacing: '5px' }}>Exclusive Ownership</Text>
            <Title c="white" order={1} style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 900 }}>Investment Portfolio</Title>
          </Box>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {buyProperties.map((prop) => (
              <Card key={prop.id} radius="lg" p="md" style={{ backgroundColor: 'rgba(30, 30, 30, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Card.Section><Image src={prop.image} height={280} /></Card.Section>
                <Group justify="space-between" mt="md"><Text c="white" fw={800} size="xl">{prop.title}</Text><Badge color="orange" variant="filled" size="xl">{prop.price}</Badge></Group>
                <Group gap="xs" mt="sm"><IconMapPin size={18} color="#FF6B35" /><Text size="sm" c="gray.2" fw={600}>{prop.location}</Text></Group>
                <Button fullWidth color="orange" variant="filled" mt="xl" radius="md" fw={800} onClick={() => navigate(`/property/${prop.id}`)}>View Details</Button>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
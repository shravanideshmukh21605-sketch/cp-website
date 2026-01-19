import { Container, Text, Button, Group, Box } from '@mantine/core';
import { IconHome, IconUser } from '@tabler/icons-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '15px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container size="xl" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <Group gap="xs" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <IconHome size={32} color="#FF6B35" stroke={2.5} />
          <Text size="xl" fw={900} c="white" style={{ letterSpacing: '3px' }}>PUREFRAME LABS</Text>
        </Group>

        {/* Navigation Links */}
        <Group gap="xl" visibleFrom="sm">
          <Group gap={35}>
            {['Buy', 'Rent', 'Sell'].map((item) => {
              const path = `/${item.toLowerCase()}`;
              const active = isActive(path);
              return (
                <Text
                  key={item}
                  c={active ? "#FF6B35" : "white"}
                  fw={800}
                  size="md"
                  tt="uppercase"
                  style={{ cursor: 'pointer', transition: '0.2s' }}
                  onClick={() => navigate(path)}
                >
                  {item}
                </Text>
              );
            })}
          </Group>
          <Button 
            variant="filled" 
            color="white" 
            c="black" 
            radius="xl" 
            fw={800} 
            leftSection={<IconUser size={20} />}
          >
            PROFILE
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
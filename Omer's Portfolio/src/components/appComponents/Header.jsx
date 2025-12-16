// components/appComponents/Header.jsx
import { Box, Flex, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch("/HeaderLinks.json");
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <Box
      as="header"
      bg="#0A0A0F"
      borderBottom="2px solid"
      borderColor="#00F0FF"
      boxShadow="0 5px 20px rgba(0, 240, 255, 0.4)"
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl" py={4}>
        <Flex align="center" justify="center" flexWrap="wrap" gap={4}>
          {menuItems.map((item) => (
            <Box
              key={item.link}
              as="button"
              onClick={() => navigate(item.link)}
              px={{ base: 4, md: 6 }}
              py={2}
              color={location.pathname === item.link ? "#00F0FF" : "gray.400"}
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="2px"
              fontSize={{ base: "xs", md: "sm" }}
              position="relative"
              transition="all 0.3s ease"
              textShadow={
                location.pathname === item.link
                  ? "0 0 10px #00F0FF"
                  : "none"
              }
              _hover={{
                color: "#00F0FF",
                textShadow: "0 0 10px #00F0FF",
                cursor: "pointer",
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: location.pathname === item.link ? "100%" : "0%",
                height: "2px",
                bg: "#00F0FF",
                boxShadow: "0 0 10px #00F0FF",
                transition: "width 0.3s ease",
              }}
              sx={{
                "&:hover::after": {
                  width: "100%",
                  bg: "#FF006E",
                  boxShadow: "0 0 10px #FF006E",
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Flex>
      </Container>

      {/* Animated Grid Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.05}
        backgroundImage="linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)"
        backgroundSize="20px 20px"
        pointerEvents="none"
        zIndex={-1}
      />
    </Box>
  );
}
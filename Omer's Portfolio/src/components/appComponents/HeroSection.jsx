/* eslint-disable react-hooks/purity */
// components/appComponents/HeroSection.jsx
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function HeroSection({ title, subtitle }) {
  return (
    <Box
      bg="gray.900"
      bgGradient="linear(135deg, gray.900 0%, blue.900 50%, purple.900 100%)"
      position="relative"
      overflow="hidden"
      py={{ base: 20, md: 32 }}
      mb={0}
      borderBottom="1px solid"
      borderColor="gray.800"
    >
      {/* Animated background shapes */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width={{ base: "300px", md: "600px" }}
        height={{ base: "300px", md: "600px" }}
        borderRadius="full"
        bg="blue.800"
        opacity={0.3}
        filter="blur(80px)"
        animation="float 8s ease-in-out infinite"
      />
      
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        width={{ base: "250px", md: "500px" }}
        height={{ base: "250px", md: "500px" }}
        borderRadius="full"
        bg="purple.800"
        opacity={0.3}
        filter="blur(80px)"
        animation="float 10s ease-in-out infinite reverse"
      />

      {/* Geometric patterns */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.03}
        bgImage="radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)"
        bgSize="100px 100px"
      />

      <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center">
          {/* Icon with glow effect */}
{/*           {Icon && (
            <Box
              bg="whiteAlpha.100"
              p={8}
              borderRadius="3xl"
              backdropFilter="blur(20px)"
              boxShadow="0 10px 40px rgba(59, 130, 246, 0.3)"
              border="2px solid"
              borderColor="whiteAlpha.200"
              transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
              animation="pulse 3s ease-in-out infinite"
            >
              <Icon size={60} color="white" />
            </Box>
          )} */}

          {/* Title with gradient text */}
          <VStack spacing={4} mt={10}>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="white"
              fontWeight="extrabold"
              letterSpacing="tight"
              textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
              animation="fadeInUp 0.8s ease-out"
              lineHeight="1.2"
            >
              {title}
            </Heading>

            {/* Animated underline */}
            <Box
              width={{ base: "60px", md: "80px" }}
              height="5px"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
              borderRadius="full"
              animation="expandWidth 1s ease-out 0.3s both, shimmer 2s ease-in-out infinite"
            />
          </VStack>

          {/* Subtitle */}
          {subtitle && (
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="gray.200"
              maxW="3xl"
              lineHeight="tall"
              textShadow="0 2px 10px rgba(0, 0, 0, 0.2)"
              animation="fadeInUp 0.8s ease-out 0.4s both"
              fontWeight="medium"
            >
              {subtitle}
            </Text>
          )}

          {/* Floating particles effect */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="200%"
            height="200%"
            pointerEvents="none"
          >
            {[...Array(6)].map((_, i) => (
              <Box
                key={i}
                position="absolute"
                width={{ base: "4px", md: "6px" }}
                height={{ base: "4px", md: "6px" }}
                borderRadius="full"
                bg="white"
                opacity={0.3}
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                animation={`float ${5 + Math.random() * 5}s ease-in-out ${Math.random() * 2}s infinite`}
              />
            ))}
          </Box>
        </VStack>
      </Container>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translateY(-30px) translateX(5px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes expandWidth {
            from {
              width: 0;
            }
            to {
              width: 80px;
            }
          }

          @keyframes shimmer {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }
        `}
      </style>
    </Box>
  );
}
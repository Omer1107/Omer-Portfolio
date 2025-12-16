// pages/Experience.jsx
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Container,
  Flex,
  Badge,
  Icon,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCheckCircle, FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { map } from "lodash";
import { useEffect, useState } from "react";
import HeroSection from "../appComponents/HeroSection";

export default function Experience() {
  const [dataInCards, setDataInCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataInCards = async () => {
      try {
        const response = await fetch("./Experience.json");
        if (!response.ok) throw new Error("Failed to fetch experience data");
        const data = await response.json();
        setDataInCards(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load experience data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataInCards();
  }, []);

  if (isLoading) {
    return (
      <VStack minH="50vh" justify="center" bg="gray.900">
        <Spinner size="xl" color="blue.400" />
        <Text color="gray.400">Loading experience...</Text>
      </VStack>
    );
  }

  if (error) {
    return (
      <Container py={20} bg="gray.900">
        <VStack spacing={6}>
          <Heading color="red.300">Something went wrong</Heading>
          <Text color="gray.400">{error}</Text>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Box bg="gray.900" minH="100vh">
      <HeroSection
        title="Work Experience"
        subtitle="My professional journey and impact"
      />

      <Container maxW="container.lg" pb={20} mt={20}>
        <VStack spacing={10} align="stretch">
          {map(dataInCards, (data, index) => {
            const color = data?.color || "blue";

            return (
              <Box
                key={index}
                bg="gray.800"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                boxShadow="xl"
                borderLeft="6px solid"
                borderColor={`${color}.500`}
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.01)",
                  boxShadow: "2xl",
                }}
              >
                {/* Header */}
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  gap={4}
                  mb={4}
                >
                  <Box>
                    <Heading size="lg" color="#00F0FF" fontWeight="extrabold">
                      {data.heading}
                    </Heading>
                    <HStack mt={2} spacing={3}>
                      <Icon as={MdWork} color={`${color}.400`} />
                      <Text color="gray.400">{data.place}</Text>
                    </HStack>
                  </Box>

                  <VStack align="flex-end" spacing={2}>
                    <Badge
                      colorScheme={color}
                      px={4}
                      py={1}
                      borderRadius="full"
                    >
                      {data.role}
                    </Badge>
                    <Text fontSize="sm" color="gray.500">
                      {data.date}
                    </Text>
                  </VStack>
                </Flex>

                {/* Location */}
                <HStack mb={4}>
                  <Icon as={FaMapMarkerAlt} color={`${color}.400`} />
                  <Text color="gray.400">{data.location}</Text>
                </HStack>

                {/* Description */}
                <Text color="gray.300" lineHeight="tall" mb={6}>
                  {data.description}
                </Text>

                {/* Responsibilities */}
                <Box mb={6}>
                  <Heading size="md" mb={3} color="#00F0FF" fontWeight="extrabold">
                    Key Responsibilities
                  </Heading>
                  <VStack align="start" spacing={3}>
                    {map(data.keyResponsibilities || [], (item, idx) => (
                      <HStack key={idx} align="start">
                        <Icon
                          as={FaCheckCircle}
                          color={`${color}.400`}
                          mt={1}
                        />
                        <Text color="gray.400">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                {/* Technologies */}
                <Box>
                  <Heading size="md" mb={3} color="#00F0FF" fontWeight="extrabold">
                    Technologies Used
                  </Heading>
                  <Flex wrap="wrap" gap={3}>
                    {map(data.technologies || [], (tech, idx) => (
                      <Badge
                        key={idx}
                        px={4}
                        py={2}
                        borderRadius="full"
                        bg={`${color}.900`}
                        color={`${color}.300`}
                        border="1px solid"
                        borderColor={`${color}.700`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </VStack>
      </Container>
    </Box>
  );
}

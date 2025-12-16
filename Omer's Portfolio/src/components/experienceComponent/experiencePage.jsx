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

export default function ExperiencePage() {
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
        console.error("Error loading experience data:", error);
        setError("Failed to load experience data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataInCards();
  }, []);

  if (isLoading) {
    return (
      <>
        <VStack minH="50vh" justify="center" align="center" spacing={6} pb={20} bg="gray.900">
          <Text fontSize="lg" color="gray.400" fontWeight="medium">
            Loading Professional Experience...
          </Text>
          <Spinner size="xl" color="blue.500" thickness="4px" speed="0.65s" />
        </VStack>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Container maxW="container.xl" py={20} bg="gray.900">
          <VStack spacing={6} textAlign="center">
            <Box
              p={8}
              borderRadius="2xl"
              bg="rgba(254, 178, 178, 0.1)"
              border="2px solid"
              borderColor="red.700"
              maxW="md"
            >
              <Heading size="lg" color="red.300" mb={3}>
                ⚠️ Experience Data Unavailable
              </Heading>
              <Text color="gray.400" mb={4}>{error}</Text>
              <Button colorScheme="blue" onClick={() => window.location.reload()} size="lg" width="full">
                Retry Loading
              </Button>
            </Box>
          </VStack>
        </Container>
      </>
    );
  }

  const getColorValue = (color, type) => {
    if (type === "bg") return `${color}.900`;
    if (type === "text") return `${color}.300`;
    if (type === "border") return `${color}.800`;
    return `${color}.500`;
  };

  return (
    <Box bg="gray.900" minH="100vh">
      <HeroSection 
        title="Work Experience" 
        subtitle="My professional journey and accomplishments"
      />

      <Container maxW="container.xl" px={{ base: 4, md: 8 }} pb={20}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={8} position="relative">
            <Box
              position="absolute"
              left={{ base: "24px", md: "50%" }}
              top="0"
              bottom="0"
              width="3px"
              bg="blue.800"
              transform={{ md: "translateX(-1.5px)" }}
              display="block"
              zIndex="1"
            />

            {map(dataInCards, (data, index) => {
              const color = data?.color || "blue";
              const timelineColor = `${color}.500`;
              const badgeColor = `${color}.300`;
              const badgeBg = `${color}.900`;

              return (
                <Box
                  key={data?.id || index}
                  position="relative"
                  width="full"
                  display="flex"
                  flexDirection={{
                    base: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                  alignItems="stretch"
                  gap={{ base: 4, md: 8 }}
                >
                  <Box
                    position="absolute"
                    left={{ base: "20px", md: "50%" }}
                    top={{ base: "0", md: "24px" }}
                    width="12px"
                    height="12px"
                    borderRadius="full"
                    bg={timelineColor}
                    border="3px solid"
                    borderColor="gray.800"
                    transform={{ md: "translateX(-6px)" }}
                    zIndex="2"
                  />

                  <Box
                    display={{ base: "none", md: "flex" }}
                    width="50%"
                    justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
                    pr={index % 2 === 0 ? 8 : 0}
                    pl={index % 2 === 0 ? 0 : 8}
                  >
                    <Badge
                      bg={badgeBg}
                      color={badgeColor}
                      fontSize="md"
                      px={4}
                      py={2}
                      borderRadius="lg"
                      boxShadow="md"
                      border="1px"
                      borderColor={`${color}.800`}
                    >
                      {data.date}
                    </Badge>
                  </Box>

                  <Box
                    width={{ base: "full", md: "50%" }}
                    ml={{ base: "48px", md: "0" }}
                  >
                    <Box
                      bg="gray.800"
                      p={{ base: 6, md: 8 }}
                      borderRadius="2xl"
                      boxShadow="xl"
                      border="1px"
                      borderColor="gray.700"
                      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                      _hover={{
                        transform: "translateY(-8px)",
                        boxShadow: "2xl",
                        borderColor: timelineColor,
                      }}
                      position="relative"
                    >
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="4px"
                        bgGradient={`linear(to-r, ${timelineColor}, ${color}.300)`}
                        borderTopLeftRadius="2xl"
                        borderTopRightRadius="2xl"
                      />

                      <Box mb={6}>
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          justify="space-between"
                          align={{ base: "start", md: "center" }}
                          gap={4}
                        >
                          <Box>
                            <Heading as="h3" size="lg" mb={2} color="gray.100">
                              {data?.heading}
                            </Heading>
                            <Flex align="center" gap={2}>
                              <Icon as={MdWork} color={timelineColor} />
                              <Text fontSize="lg" color="gray.400" fontWeight="medium">
                                {data.place}
                              </Text>
                            </Flex>
                          </Box>
                          <Badge
                            bg={badgeBg}
                            color={badgeColor}
                            fontSize="md"
                            px={4}
                            py={2}
                            borderRadius="full"
                            fontWeight="bold"
                            border="1px"
                            borderColor={`${color}.800`}
                          >
                            {data?.role}
                          </Badge>
                        </Flex>
                      </Box>

                      <Box display={{ md: "none" }} mb={4}>
                        <Badge bg={badgeBg} color={badgeColor} fontSize="sm" px={3} py={1} borderRadius="lg">
                          {data.date}
                        </Badge>
                      </Box>

                      <Flex wrap="wrap" gap={4} mb={6}>
                        <Flex align="center" gap={2}>
                          <Icon as={FaMapMarkerAlt} color={timelineColor} />
                          <Text color="gray.400">{data.location}</Text>
                        </Flex>
                      </Flex>

                      <Text color="gray.100" mb={8} lineHeight="tall" fontSize="md">
                        {data.description}
                      </Text>

                      <Box mb={8}>
                        <Heading as="h4" size="md" mb={4} color="gray.100">
                          <HStack>
                            <FaCheckCircle />
                            <Text>Key Responsibilities</Text>
                          </HStack>
                        </Heading>
                        <VStack align="start" spacing={3}>
                          {map(data.keyResponsibilities || [], (responsibility, idx) => (
                            <Flex key={idx} align="start" gap={3}>
                              <Icon
                                as={FaCheckCircle}
                                color={`${color}.300`}
                                mt={1}
                              />
                              <Text color="gray.400">{responsibility}</Text>
                            </Flex>
                          ))}
                        </VStack>
                      </Box>

                      <Box>
                        <Heading as="h4" size="md" mb={4} color="gray.100">
                          <HStack>
                            <FaTools />
                            <Text>Technologies Used</Text>
                          </HStack>
                        </Heading>
                        <Flex wrap="wrap" gap={3}>
                          {map(data.technologies || [], (tech, idx) => (
                            <Badge
                              key={idx}
                              px={4}
                              py={2}
                              borderRadius="full"
                              bg={getColorValue(color, "bg")}
                              color={getColorValue(color, "text")}
                              fontSize="sm"
                              fontWeight="medium"
                              border="1px"
                              borderColor={getColorValue(color, "border")}
                              _hover={{ transform: "translateY(-2px)", boxShadow: "sm" }}
                              transition="all 0.2s"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
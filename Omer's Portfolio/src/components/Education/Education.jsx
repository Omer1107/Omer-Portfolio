// pages/Education.jsx
import { VStack, HStack, Box, Text, Heading, Container, Flex, Badge, Icon } from "@chakra-ui/react";
import { Spinner, Alert } from "@chakra-ui/react";
import { map } from "lodash";
import {  FaCalendar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import HeroSection from "../appComponents/HeroSection";

export default function Education() {
    const [information, setInformation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchInformation = async () => {
            try {
                const response = await fetch("./Information.json");
                const data = await response.json();
                setInformation(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setIsLoading(false);
            }
        };
        fetchInformation();
    }, []);

    if (isLoading) {
        return (
            <>
                <VStack minH="50vh" justify="center" align="center" bg="gray.900">
                    <Spinner size="xl" color="blue.500" thickness="4px" />
                    <Text mt={4} color="gray.400">Loading Education Data...</Text>
                </VStack>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Container maxW="container.xl" py={10} bg="gray.900">
                    <Alert.Root status="error" borderRadius="lg" bg="rgba(254, 178, 178, 0.1)" borderColor="red.700">
                        <Alert.Indicator />
                        <Alert.Title color="red.300">Error loading education data</Alert.Title>
                        <Alert.Description color="gray.400">Please try refreshing the page.</Alert.Description>
                    </Alert.Root>
                </Container>
            </>
        );
    }

    return (
        <Box bg="gray.900" minH="100vh">
            <HeroSection 
                title="Education" 
                subtitle="My academic journey and achievements"
            />
            
            <Container maxW="container.xl" px={{ base: 4, md: 8 }} pb={20} mt={20}>
                <VStack spacing={8} gap={8} align="stretch">
                    {map(information, (info, index) => (
                        <Box
                            key={info?.id || index}
                            bg="gray.800"
                            p={8}
                            borderRadius="2xl"
                            boxShadow="xl"
                            position="relative"
                            overflow="hidden"
                            transition="all 0.3s"
                            border="1px"
                            borderColor="gray.700"
                            _hover={{
                                transform: "scale(1.01)",
                                boxShadow: "2xl",
                                borderColor: "blue.600",
                            }}
                            sx={{
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '6px',
                                    height: '100%',
                                    bgGradient: 'linear(to-b, blue.600, purple.600)',
                                }
                            }}
                        >
                            <Flex align="center" justify="space-between" mb={4} flexWrap="wrap" gap={4}>
                                <Heading as="h3" size="lg" color="#00F0FF" fontWeight="bold">
                                    {info?.heading}
                                </Heading>
                                <Badge
                                    colorScheme="blue"
                                    fontSize="sm"
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    bg="blue.900"
                                    color="blue.300"
                                >
                                    {info?.headingColor || "Academic"}
                                </Badge>
                            </Flex>

                            <HStack mb={6} flexWrap="wrap" gap={4}>
                                <Flex align="center" gap={2}>
                                    <Box p={2} bg="blue.900" borderRadius="md" color="blue.400">
                                        <Icon as={PiMedalLight} />
                                    </Box>
                                    <Text fontWeight="medium" fontSize="lg" color="gray.100">
                                        {info.institute || "Institution"}
                                    </Text>
                                </Flex>

                                <Flex align="center" gap={2}>
                                    <Icon as={FaCalendar} color="gray.500" />
                                    <Text fontSize="sm" color="gray.400" fontWeight="medium">
                                        {info.Session}
                                    </Text>
                                </Flex>
                            </HStack>

                            <Text 
                                color="gray.400" 
                                mb={6} 
                                lineHeight="tall"
                                fontSize="md"
                                bg="gray.900"
                                p={4}
                                borderRadius="lg"
                            >
                                {info?.description}
                            </Text>

                            <Box>
                                <Heading 
                                    as="h4" 
                                    size="sm" 
                                    mb={3} 
                                    color="gray.100"
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <Box w={2} h={2} borderRadius="full" bg="blue.400" flexShrink={0} />
                                    Key Achievements
                                </Heading>
                                <VStack align="start" spacing={2}>
                                    {map(info.keyAchievements || [], (achieve, idx) => (
                                        <Flex 
                                            key={idx} 
                                            align="center" 
                                            gap={3}
                                            p={2}
                                            borderRadius="md"
                                            width="full"
                                            _hover={{ bg: "blue.900" }}
                                        >
                                            <Box w={2} h={2} borderRadius="full" bg="blue.400" flexShrink={0} />
                                            <Text fontSize="sm" color="gray.400">
                                                {achieve}
                                            </Text>
                                        </Flex>
                                    ))}
                                </VStack>
                            </Box>
                        </Box>
                    ))}
                </VStack>
            </Container>
        </Box>
    );
}
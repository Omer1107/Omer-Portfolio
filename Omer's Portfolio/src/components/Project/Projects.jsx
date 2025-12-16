// pages/ProjectPage.jsx
import { Box, Container, Grid, Heading, Text, VStack, HStack, Image, Button, Badge, Icon, Link, Spinner } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { map } from "lodash";
import { useEffect, useState } from "react";
import HeroSection from "../appComponents/HeroSection";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/Project.json");
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                setProjects(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error loading projects:", error);
                setError("Failed to load projects data");
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (isLoading) {
        return (
            <>
                <VStack minH="50vh" justify="center" align="center" spacing={6} pb={20} bg="gray.900">
                    <Text fontSize="lg" color="gray.400" fontWeight="medium">
                        Loading Projects...
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
                                ⚠️ Data Loading Error
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

    return (
        <Box bg="gray.900" minH="100vh">
            <HeroSection 
                title="My Projects" 
                subtitle="Explore my latest work and creative solutions"
            
            />
            
            <Container maxW="container.xl" px={{ base: 4, md: 8 }} pb={20}>
                {projects.length === 0 ? (
                    <VStack spacing={6} py={20} textAlign="center">
                        <Text fontSize="xl" color="gray.400">
                            No projects found in Project.json
                        </Text>
                    </VStack>
                ) : (
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={{ base: 8, md: 10 }}
                    >
                        {map(projects, (project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
}

function ProjectCard({ project }) {
    return (
        <Box
            bg="gray.800"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px"
            borderColor="gray.700"
            transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            _hover={{
                transform: "translateY(-12px)",
                boxShadow: "2xl",
                borderColor: "blue.400",
            }}
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box position="relative" overflow="hidden" height="250px">
                <Image
                    src={project?.image}
                    alt={project?.heading}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    transition="transform 0.6s ease"
                    _hover={{ transform: "scale(1.1)" }}
                    fallbackSrc={`https://via.placeholder.com/400x250/1a202c/ffffff?text=${encodeURIComponent(project?.heading)}`}
                />
                <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg="rgba(0,0,0,0.7)"
                    color={project?.category === "Full Stack" ? "green.400" : "blue.400"}
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    boxShadow="lg"
                    backdropFilter="blur(10px)"
                >
                    {project?.category || "Project"}
                </Box>
            </Box>

            <Box p={{ base: 6, md: 8 }} flex="1" display="flex" flexDirection="column">
                <VStack align="start" spacing={4} mb={6} flex="1">
                    <Heading as="h3" size="lg" color="gray.100" fontWeight="bold" lineHeight="1.2">
                        {project?.heading}
                    </Heading>
                    <Text color="gray.400" lineHeight="1.7" fontSize="md">
                        {project?.description}
                    </Text>
                </VStack>

                <Box wrap="wrap" gap={3} mb={8} display="flex">
                    {project?.tags?.slice(0, 4).map((tag, index) => (
                        <Badge
                            key={index}
                            px={4}
                            py={2}
                            borderRadius="full"
                            bg="blue.900"
                            color="blue.300"
                            fontSize="xs"
                            fontWeight="semibold"
                            border="1px"
                            borderColor="blue.800"
                            transition="all 0.2s"
                            _hover={{ transform: "translateY(-2px)", boxShadow: "sm" }}
                        >
                            {tag}
                        </Badge>
                    ))}
                    {project?.tags?.length > 4 && (
                        <Badge px={4} py={2} borderRadius="full" bg="gray.700" color="gray.400" fontSize="xs">
                            +{project.tags.length - 4} more
                        </Badge>
                    )}
                </Box>

                <HStack mt="auto" pt={4} borderTop="1px" borderColor="gray.700" spacing={3}>
                    <Link href={project?.link} target="_blank" _hover={{ textDecoration: "none" }} flex="1">
                        <Button leftIcon={<FaExternalLinkAlt />} bg="blue.500" color="white" size="md" width="100%" _hover={{ bg: "blue.600", transform: "translateY(-2px)", boxShadow: "lg" }} transition="all 0.3s">
                            Live Demo
                        </Button>
                    </Link>
                    <Link href={project?.github || project?.link} target="_blank" _hover={{ textDecoration: "none" }} flex="1">
                        <Button variant="outline" leftIcon={<FaGithub />} size="md" width="100%" color="gray.100" borderColor="gray.700" _hover={{ bg: "gray.700", transform: "translateY(-2px)", borderColor: "blue.400", color: "blue.400" }} transition="all 0.3s">
                            Source
                        </Button>
                    </Link>
                </HStack>
            </Box>
        </Box>
    );
}
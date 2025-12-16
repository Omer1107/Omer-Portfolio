import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiTensorflow,
  SiPandas,
} from "react-icons/si";
import omer from "../../assets/pic1.jpg";

const skills = [
  { name: "Python", icon: SiPython, color: "blue.400" },
  { name: "Java", icon: FaJava, color: "orange.400" },
  { name: "HTML / CSS", icon: FaHtml5, color: "red.400" },
  { name: "JavaScript", icon: SiJavascript, color: "yellow.400" },
  { name: "React", icon: FaReact, color: "cyan.400" },
  { name: "Node.js", icon: FaNodeJs, color: "green.400" },
  { name: "Express", icon: SiExpress, color: "gray.400" },
  { name: "MySQL", icon: SiMysql, color: "blue.500" },
  { name: "AI & ML", icon: SiTensorflow, color: "orange.500" },
  { name: "Data Science", icon: SiPandas, color: "purple.400" },
];

export default function Home() {
  return (
    <Box bg="gray.900" minH="100vh" position="relative" overflow="hidden">
      {/* Subtle gradient overlay */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        width="600px"
        height="600px"
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.1"
        pointerEvents="none"
      />

      {/* ================= HERO SECTION ================= */}
      <Container maxW="container.xl" px={{ base: 6, md: 12 }} pt={{ base: 12, md: 20 }} pb={{ base: 8, md: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
          gap={{ base: 12, lg: 20 }}
          alignItems="center"
        >
          {/* Left: Content */}
          <VStack align="start" spacing={6}>
            

            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                Muhammad Omer Ijaz
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.500"
                fontWeight="medium"
                mt={4}
              >
                Computer Science Student
              </Text>
            </Box>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              lineHeight="1.8"
              maxW="580px"
            >
              Full-stack developer and AI practitioner focused on building
              scalable, modern web applications and intelligent solutions.
            </Text>

            <HStack spacing={4} pt={2}>
              <Link href="/contact" _hover={{ textDecoration: "none" }}>
                <Button
                  rightIcon={<FaArrowRight />}
                  bg="blue.500"
                  color="white"
                  size="lg"
                  px={8}
                  height="56px"
                  fontSize="md"
                  fontWeight="semibold"
                  borderRadius="xl"
                  _hover={{
                    bg: "blue.600",
                    transform: "scale(1.03)",
                    boxShadow: "0 8px 24px rgba(66, 153, 225, 0.4)",
                  }}
                  _active={{ transform: "scale(0)" }}
                  transition="all 0.2s"
                >
                  Get In Touch
                </Button>
              </Link>

              <Link href="/Projects" _hover={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  size="lg"
                  px={8}
                  height="56px"
                  fontSize="md"
                  fontWeight="semibold"
                  color="gray.200"
                  borderColor="gray.600"
                  borderWidth="2px"
                  borderRadius="xl"
                  _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: "blue.400",
                    color: "blue.400",
                    transform: "scale(1.02)",
                  }}
                  _active={{ transform: "scale(0)" }}
                  transition="all 0.2s"
                >
                  View Projects
                </Button>
              </Link>
            </HStack>

            
          </VStack>

          {/* Right: Profile Image */}
          <Flex justify={{ base: "center", lg: "flex-end" }} position="relative">
            <Box position="relative">
              {/* Glow effect behind image */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="110%"
                height="110%"
                bg="blue.500"
                filter="blur(60px)"
                opacity="0.2"
                borderRadius="full"
                zIndex="0"
              />
              
              <Box
                position="relative"
                width={{ base: "300px", md: "400px", lg: "450px" }}
                height={{ base: "300px", md: "400px", lg: "450px" }}
                borderRadius="3xl"
                overflow="hidden"
                border="1px"
                borderColor="gray.700"
                bg="gray.800"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
                _hover={{
                  transform: "scale(1.02) rotate(-1deg)",
                  borderColor: "blue.400",
                }}
                transition="all 0.4s ease"
              >
                <Image
                  src={omer || "/placeholder.svg"}
                  alt="Muhammad Omer Ijaz"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Flex>
        </Grid>
      </Container>

      {/* ================= ABOUT & SKILLS SECTION ================= */}
      <Container maxW="container.xl" px={{ base: 6, md: 12 }} py={{ base: 12, md: 20 }}>
        {/* About Section - Full Width Card */}
        <Box
          bg="whiteAlpha.50"
          backdropFilter="blur(20px)"
          borderRadius="3xl"
          border="1px"
          borderColor="gray.700"
          p={{ base: 8, md: 12 }}
          mb={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
          _hover={{
            borderColor: "gray.600",
          }}
          transition="all 0.3s"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="4px"
            height="100%"
            bg="linear-gradient(to bottom, #3182CE, #63B3ED)"
          />
          
          <Heading
            size="xl"
            color="white"
            mb={6}
            fontWeight="bold"
          >
            About Me
          </Heading>
          
          <Text
            color="gray.300"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.9"
            maxW="900px"
          >
            Passionate Computer Science student focused on building real-world,
            scalable applications. I enjoy solving complex problems, working
            with modern web technologies, and exploring AI-driven solutions
            that create real impact.
          </Text>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading
            size="xl"
            color="white"
            mb={8}
            fontWeight="bold"
          >
            Technical Skills
          </Heading>

          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            spacing={{ base: 4, md: 5 }}
            gap={4}
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <Box
                  key={i}
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  borderRadius="2xl"
                  border="1px"
                  borderColor="gray.700"
                  p={6}
                  position="relative"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: skill.color,
                    transform: "scale(1.04)",
                    boxShadow: `0 12px 28px ${skill.color}33`,
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={3}>
                    <Flex
                      align="center"
                      justify="center"
                      w="56px"
                      h="56px"
                      bg="whiteAlpha.100"
                      borderRadius="xl"
                      color={skill.color}
                      fontSize="28px"
                    >
                      <Icon />
                    </Flex>
                    <Text
                      color="gray.200"
                      fontSize="sm"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      {skill.name}
                    </Text>
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>

      {/* Bottom spacing */}
      <Box h={{ base: 12, md: 20 }} />
    </Box>
  );
}
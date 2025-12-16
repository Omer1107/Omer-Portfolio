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

/* =========================
   SKILLS (ICON + LABEL)
========================= */
const skills = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "HTML / CSS", icon: FaHtml5 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "AI & ML", icon: SiTensorflow },
  { name: "Data Science", icon: SiPandas },
];

export default function HomePage() {
  return (
    <Box bg="gray.900" minH="100vh">
      {/* ================= HERO ================= */}
      <Container
        maxW="container.xl"
        px={{ base: 4, md: 8 }}
        py={{ base: 16, md: 24 }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <VStack align="start" spacing={8}>
            <Box>
              <Heading
                size={{ base: "2xl", lg: "3xl" }}
                color="gray.100"
                lineHeight="1.2"
              >
                Muhammad Omer Ijaz
              </Heading>
              <Text fontSize="xl" color="gray.400" mt={3}>
                Computer Science Student
              </Text>
            </Box>

            <Text
              fontSize="lg"
              color="gray.400"
              lineHeight="1.8"
              maxW="600px"
            >
              Full-stack developer and AI practitioner focused on building
              scalable, modern web applications and intelligent solutions.
            </Text>

            <HStack spacing={4} flexWrap="wrap">
              <Link href="/contact">
                <Button
                  leftIcon={<FaArrowRight />}
                  bg="blue.500"
                  color="white"
                  size="lg"
                  _hover={{
                    bg: "blue.600",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s"
                >
                  Contact Me
                </Button>
              </Link>

              <Link href="/Projects">
                <Button
                  variant="outline"
                  size="lg"
                  color="gray.100"
                  borderColor="gray.700"
                  _hover={{
                    bg: "gray.800",
                    borderColor: "blue.400",
                    color: "blue.400",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  View Projects
                </Button>
              </Link>
            </HStack>

            {/* SOCIAL LINKS */}
            <HStack spacing={4}>
              {[
                { icon: FaGithub, link: "https://github.com/Omer1107" },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaEnvelope, link: "https://mailto:omerijazmalik1107@gmail.com" },
              // eslint-disable-next-line no-unused-vars
              ].map(({ icon: Icon, link }, i) => (
                <Link key={i} href={link} target="_blank">
                  <Box
                    p={3}
                    bg="gray.800"
                    border="1px"
                    borderColor="gray.700"
                    borderRadius="lg"
                    color="gray.400"
                    _hover={{
                      color: "blue.400",
                      borderColor: "blue.400",
                      transform: "translateY(-3px)",
                    }}
                    transition="all 0.3s"
                  >
                    <Icon size={20} />
                  </Box>
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* RIGHT IMAGE */}
          <Flex justify="center">
            <Box
              bg="gray.800"
              border="1px"
              borderColor="gray.700"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              width={{ base: "280px", md: "380px" }}
              height={{ base: "280px", md: "380px" }}
            >
              <Image
                src={omer}
                alt="Profile"
                width="100%"
                height="100%"
                objectFit="cover"
                transition="transform 0.6s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>
          </Flex>
        </Grid>
      </Container>

      {/* ================= ABOUT + SKILLS ================= */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} pb={24}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.4fr 1fr" }}
          gap={{ base: 8, lg: 12 }}
        >
          {/* ABOUT */}
          <Box
            bg="gray.800"
            border="1px"
            borderColor="gray.700"
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="xl"
          >
            <Heading size="lg" color="gray.100" mb={4}>
              About Me
            </Heading>

            <Text color="gray.400" lineHeight="1.9" fontSize="md">
              Passionate Computer Science student focused on building real-world,
              scalable applications. I enjoy solving complex problems, working
              with modern web technologies, and exploring AI-driven solutions
              that create real impact.
            </Text>
          </Box>

          {/* SKILLS */}
          <Box
            bg="gray.800"
            border="1px"
            borderColor="gray.700"
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="xl"
          >
            <Heading size="lg" color="gray.100" mb={6}>
              Technical Skills
            </Heading>

            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={4}>
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <Flex
                    key={i}
                    align="center"
                    gap={3}
                    p={3}
                    bg="gray.900"
                    border="1px"
                    borderColor="gray.700"
                    borderRadius="xl"
                    color="gray.300"
                    _hover={{
                      borderColor: "blue.400",
                      color: "blue.400",
                      transform: "translateY(-2px)",
                      boxShadow: "md",
                    }}
                    transition="all 0.25s ease"
                  >
                    <Box fontSize="20px">
                      <Icon />
                    </Box>
                    <Text fontSize="sm" fontWeight="medium">
                      {skill.name}
                    </Text>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

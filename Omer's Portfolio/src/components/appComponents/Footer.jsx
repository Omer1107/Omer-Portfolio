// components/appComponents/Footer.jsx
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.200" pt={12} pb={8} borderTop="1px solid" borderColor="gray.800">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          mb={8}
        >
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text color="gray.400" fontSize="lg" fontWeight="medium">
                Connect with me
              </Text>
              <Flex gap={5} mt={1} flexWrap="wrap">
                <Link
                  target="_blank"
                  href="https://github.com/Omer1107"
                  _hover={{ transform: "translateY(-3px)" }}
                  transition="all 0.3s"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box
                    p={3}
                    bg="gray.800"
                    borderRadius="lg"
                    _hover={{
                      bg: "gray.700",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                    }}
                    transition="all 0.3s"
                  >
                    <Icon
                      as={FaGithub}
                      boxSize={6}
                      color="gray.400"
                      _hover={{ color: "white" }}
                    />
                  </Box>
                  <Text color="gray.400" fontSize="sm">
                    GitHub
                  </Text>
                </Link>
                <Link
                  target="_blank" 
                  href="https://mailto:omerijazmalik1107@gmail.com"
                  _hover={{ transform: "translateY(-3px)" }}
                  transition="all 0.3s"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box
                    p={3}
                    bg="gray.800"
                    borderRadius="lg"
                    _hover={{
                      bg: "gray.700",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                    }}
                    transition="all 0.3s"
                  >
                    <Icon
                      as={FaEnvelope}
                      boxSize={6}
                      color="gray.400"
                      _hover={{ color: "white" }}
                    />
                  </Box>
                  <Text color="gray.400" fontSize="sm">
                    Email
                  </Text>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/muhammad-omer-ijaz-b58a29328/"
                  _hover={{ transform: "translateY(-3px)" }}
                  transition="all 0.3s"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box
                    p={3}
                    bg="gray.800"
                    borderRadius="lg"
                    _hover={{
                      bg: "gray.700",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                    }}
                    transition="all 0.3s"
                  >
                    <Icon
                      as={FaLinkedin}
                      boxSize={6}
                      color="gray.400"
                      _hover={{ color: "white" }}
                    />
                  </Box>
                  <Text color="gray.400" fontSize="sm">
                    LinkedIn
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack align="start" spacing={6}>
              <Heading
                size="lg"
                color="white"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Box
                  w={2}
                  h={2}
                  borderRadius="full"
                  bg="blue.400"
                />
                Contact Info
              </Heading>

              <VStack align="start" spacing={5} width="100%">
                <Box
                  p={4}
                  bg="gray.800"
                  borderRadius="xl"
                  width="100%"
                  border="1px"
                  borderColor="gray.700"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "blue.600",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Text
                    fontWeight="semibold"
                    color="gray.400"
                    fontSize="sm"
                    mb={1}
                  >
                    Name
                  </Text>
                  <Text color="white" fontSize="lg" fontWeight="medium">
                    Muhammad Omer Ijaz
                  </Text>
                </Box>

                <Box
                  p={4}
                  bg="gray.800"
                  borderRadius="xl"
                  width="100%"
                  border="1px"
                  borderColor="gray.700"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "blue.600",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Text
                    fontWeight="semibold"
                    color="gray.400"
                    fontSize="sm"
                    mb={1}
                  >
                    Email
                  </Text>
                  <Link
                    href="mailto:omerijazmalik1107@gmail.com"
                    color="blue.300"
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{
                      textDecoration: "none",
                      color: "blue.200",
                    }}
                  >
                    omerijazmalik1107@gmail.com
                  </Link>
                </Box>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        <Box
          borderTop="1px"
          borderColor="gray.700"
          mb={6}
          width="100%"
          mt={4}
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          color="gray.400"
          fontSize="sm"
          gap={4}
        >
          <Text
            mb={{ base: 2, md: 0 }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Box w={2} h={2} borderRadius="full" bg="blue.400" />
            &copy; {new Date().getFullYear()} Muhammad Omer Ijaz. All rights reserved.
          </Text>
          <Text display="flex" alignItems="center" gap={2}>
            <Box w={2} h={2} borderRadius="full" bg="purple.400" />
            Built with React and Chakra UI
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
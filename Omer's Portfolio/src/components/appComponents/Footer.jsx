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
    <Box
      bg="gray.900"
      color="gray.200"
      pt={12}
      pb={8}
      borderTop="1px solid"
      borderColor="gray.800"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          mb={8}
        >
          <GridItem>
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={5} width="100%">
                <Box
                  pl={4}
                  borderRadius="xl"
                  width="100%"
                  border="1px"
                  transition="all 0.3s"
                >
                  <Text color="gray.400" fontSize="lg" fontWeight="extrabold">
                    Muhammad Omer Ijaz
                  </Text>
                </Box>

                <Box
                  pl={4}
                  borderRadius="xl"
                  width="100%"
                  border="1px"
                  transition="all 0.3s"
                >
                  <Box
                    href="mailto:omerijazmalik1107@gmail.com"
                    color="gray.400"
                    fontSize="lg"
                    fontWeight="extralight"
                  >
                    Full-stack developer and AI practitioner
                  </Box>
                </Box>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text color="gray.400" fontSize="lg" fontWeight="medium">
                Let's connect!
              </Text>
              <Flex gap={5} mt={1} flexWrap="wrap">
                <Link
                  target="_blank"
                  href="https://github.com/Omer1107"
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
          justify="center"
          align="center"
          color="gray.400"
          fontSize="sm"
          gap={4}
          mt={20}
        >
          <Text
            mb={{ base: 2, md: 0 }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            &copy; {new Date().getFullYear()} Muhammad Omer Ijaz. All rights
            reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

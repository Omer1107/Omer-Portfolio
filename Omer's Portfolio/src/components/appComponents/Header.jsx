import {
  Box,
  Flex,
  Container,
  Tabs,
} from "@chakra-ui/react";
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
      bg="gray.900"
      borderBottom="1px solid"
      borderColor="gray.800"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Container maxW="container.xl">
        <Flex h="16" align="center" justify="center">

          <Tabs.Root
            value={location.pathname}
            onValueChange={(e) => navigate(e.value)}
            variant="unstyled"
          >
            <Tabs.List gap={8}>
              {menuItems.map((item) => (
                <Tabs.Trigger
                  key={item.link}
                  value={item.link}
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.300"
                  _hover={{ color: "blue.400" }}
                  _selected={{
                    color: "blue.400",
                    borderBottom: "2px solid",
                    borderColor: "blue.400",
                  }}
                  pb="1"
                >
                  {item.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>

        </Flex>
      </Container>
    </Box>
  );
}

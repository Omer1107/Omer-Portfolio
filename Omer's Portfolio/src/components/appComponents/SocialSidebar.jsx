import React from 'react';
import { VStack, Box, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Omer1107',
      icon: FaGithub,

    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-omer-ijaz-b58a29328/',
      icon: FaLinkedin,
    
    },
    {
      name: 'Gmail',
      url: 'https://mailto:omerijazmalik1107@gmail.com',
      icon: SiGmail,
    
    }
  ];

  return (
    <Box
      position="fixed"
      left="15px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1000}
    >
      <VStack gap="15px">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="25px"
              height="25px"
              borderRadius="50%"
              background="rgba(34, 34, 34, 1)"
            //   border="1px solid rgba(255, 255, 255, 0.2)"
              transition="all 0.3s ease"
              _hover={{
                background: link.color,
                transform: 'scale(1.15)',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
              }}
              title={link.name}
              color="white"
            >
              <IconComponent size={18} />
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
};

export default SocialSidebar;

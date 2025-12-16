// pages/ContactPage.jsx
import { Box, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import Contact from "../components/Contact/Contact";
import HeroSection from "../components/appComponents/HeroSection";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully! (This is a demo - no actual email is sent)");
    reset();
  };

  return (
    <Box bg="gray.900" minH="100vh">
      <HeroSection
        title="Get In Touch"
        subtitle="Have a question or want to work together? Drop me a message!"
        icon={FaEnvelope}
      />

      <VStack p={6} pb={20}>
        <Contact
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      </VStack>
    </Box>
  );
}

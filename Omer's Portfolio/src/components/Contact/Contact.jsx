// components/appComponents/ContactForm.jsx
import {
  Box,
  Heading,
  VStack,
  Input,
  Flex,
  Button,
  HStack,
  Textarea,
  Field,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toaster } from "../ui/toaster";
import { FaPaperPlane } from "react-icons/fa";
import { send } from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const serviceID = "service_c9scdie";
      const templateID = "template_1bsudnm";
      const publicKey = "6X7VwqDj76dbpOZ-C";

      await send(serviceID, templateID, formData, publicKey);

      toaster.create({
        title: "Message sent!",
        description: "Your message has been sent successfully.",
        type: "success",
        duration: 5000,
        closable: true,
      });

      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toaster.create({
        title: "Failed to send message",
        description: "Please try again later.",
        type: "error",
        duration: 5000,
        closable: true,
      });
    }
  };

  return (
    <VStack p={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          flexDirection="column"
          gap={6}
          p={8}
          borderRadius="2xl"
          margin={{ base: 4, md: 24 }}
          bg="gray.800"
          border="1px"
          borderColor="gray.700"
          transition="all 0.3s"
        >
          {/* Name Field */}
          <Field.Root invalid={!!errors.title}>
            <Field.Label fontSize="md" fontWeight="semibold" color="#00F0FF" mb={2}>
              Name
            </Field.Label>
            <Input
              placeholder="Enter your full name"
              {...register("title", { required: "Name is required" })}
              size="lg"
              bg="gray.700"
              color="#00F0FF"
              _placeholder={{ color: "gray.400" }}
            />
            <Field.ErrorText color="red.500">{errors.title?.message}</Field.ErrorText>
          </Field.Root>

          {/* Email Field */}
          <Field.Root invalid={!!errors.email}>
            <Field.Label fontSize="md" fontWeight="semibold" color="#00F0FF" mb={2}>
              Email
            </Field.Label>
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              size="lg"
              bg="gray.700"
              color="#00F0FF"
              _placeholder={{ color: "gray.400" }}
            />
            <Field.ErrorText color="red.500">{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          {/* Subject Field */}
          <Field.Root>
            <Field.Label fontSize="md" fontWeight="semibold" color="#00F0FF" mb={2}>
              Subject
            </Field.Label>
            <Input
              placeholder="What is this regarding?"
              {...register("subject")}
              size="lg"
              bg="gray.700"
              color="#00F0FF"
              _placeholder={{ color: "gray.400" }}
            />
          </Field.Root>

          {/* Message Field */}
          <Field.Root invalid={!!errors.message}>
            <Field.Label fontSize="md" fontWeight="semibold" color="#00F0FF" mb={2}>
              Message
            </Field.Label>
            <Textarea
              placeholder="Type your message here..."
              {...register("message", { required: "Message is required" })}
              minHeight="200px"
              bg="gray.700"
              color="#00F0FF"
              _placeholder={{ color: "gray.400" }}
            />
            <Field.ErrorText color="red.500">{errors.message?.message}</Field.ErrorText>
          </Field.Root>

          {/* Submit Button */}
          <HStack flexWrap="wrap" width="100%" justifyContent="center" mt={2}>
            <Button
              type="submit"
              variant="solid"
              size="lg"
              width={{ base: "full", md: "xs" }}
              height="56px"
              bgGradient="linear(135deg, blue.600, cyan.500)"
              color="white"
              borderRadius="lg"
              fontWeight="bold"
              fontSize="lg"
              leftIcon={<FaPaperPlane />}
            >
              Send Message
            </Button>
          </HStack>
        </Flex>
      </form>
    </VStack>
  );
}

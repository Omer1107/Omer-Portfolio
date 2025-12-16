// components/appComponents/GiveContact.jsx
import {
  Input,
  Flex,
  Field,
  Button,
  HStack,
  Box,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { FaPaperPlane, FaUser, FaEnvelope, FaStickyNote } from "react-icons/fa";

export default function GiveContact({
  register,
  handleSubmit,
  errors,
  onSubmit,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDirection="column"
        gap={6}
        p={8}
        borderRadius="2xl"
        boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
        margin={{ base: 4, md: 24 }}
        bg="gray.800"
        border="1px"
        borderColor="gray.700"
        transition="all 0.3s"
        _hover={{
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)",
          borderColor: "blue.600",
        }}
      >
        {/* Name Field */}
        <Field.Root invalid={!!errors.title}>
          <Field.Label
            fontSize="md"
            fontWeight="semibold"
            color="gray.300"
            mb={2}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Icon as={FaUser} color="blue.400" />
            Name
          </Field.Label>
          <Input
            variant="outline"
            placeholder="Enter your full name"
            {...register("title", { required: "Name is required" })}
            size="lg"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="blue.600"
            bg="gray.700"
            color="gray.100"
            _placeholder={{ color: "gray.400" }}
            transition="all 0.2s"
            _hover={{
              borderColor: "blue.500",
            }}
            _focus={{
              borderColor: "blue.400",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.3)",
            }}
            _invalid={{
              borderColor: "red.400",
            }}
          />
          <Field.ErrorText fontSize="sm" mt={2} color="red.500" fontWeight="medium">
            {errors.title?.message}
          </Field.ErrorText>
        </Field.Root>

        {/* Email Field */}
        <Field.Root invalid={!!errors.email}>
          <Field.Label
            fontSize="md"
            fontWeight="semibold"
            color="gray.300"
            mb={2}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Icon as={FaEnvelope} color="blue.400" />
            Email
          </Field.Label>
          <Input
            type="email"
            placeholder="Enter your email address"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            size="lg"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="blue.600"
            bg="gray.700"
            color="gray.100"
            _placeholder={{ color: "gray.400" }}
            transition="all 0.2s"
            _hover={{
              borderColor: "blue.500",
            }}
            _focus={{
              borderColor: "blue.400",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.3)",
            }}
            _invalid={{
              borderColor: "red.400",
            }}
          />
          <Field.ErrorText fontSize="sm" mt={2} color="red.500" fontWeight="medium">
            {errors.email?.message}
          </Field.ErrorText>
        </Field.Root>

        {/* Subject Field */}
        <Field.Root>
          <Field.Label
            fontSize="md"
            fontWeight="semibold"
            color="gray.300"
            mb={2}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Icon as={FaStickyNote} color="blue.400" />
            Subject
          </Field.Label>
          <Input
            placeholder="What is this regarding?"
            {...register("subject")}
            size="lg"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="blue.600"
            bg="gray.700"
            color="gray.100"
            _placeholder={{ color: "gray.400" }}
            transition="all 0.2s"
            _hover={{
              borderColor: "blue.500",
            }}
            _focus={{
              borderColor: "blue.400",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.3)",
            }}
          />
        </Field.Root>

        {/* Message Field - Simple Textarea */}
        <Field.Root invalid={!!errors.message}>
          <Field.Label
            fontSize="md"
            fontWeight="semibold"
            color="gray.300"
            mb={2}
            width="100%"
          >
            Message
          </Field.Label>
          <Textarea
            placeholder="Type your message here..."
            {...register("message", { required: "Message is required" })}
            minHeight="200px"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="blue.600"
            bg="gray.700"
            color="gray.100"
            _placeholder={{ color: "gray.400" }}
            transition="all 0.2s"
            _hover={{
              borderColor: "blue.500",
            }}
            _focus={{
              borderColor: "blue.400",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.3)",
            }}
            _invalid={{
              borderColor: "red.400",
            }}
          />
          <Field.ErrorText fontSize="sm" mt={2} color="red.500" fontWeight="medium">
            {errors.message?.message}
          </Field.ErrorText>
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
            transition="all 0.3s"
            boxShadow="0 10px 25px rgba(66, 153, 225, 0.4)"
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "0 15px 35px rgba(66, 153, 225, 0.6)",
              bgGradient: "linear(135deg, blue.700, cyan.600)",
            }}
            _active={{
              transform: "translateY(-1px)",
            }}
            leftIcon={<FaPaperPlane />}
          >
            Send Message
          </Button>
        </HStack>
      </Flex>
    </form>
  );
}
import { Box, Heading, VStack } from "@chakra-ui/react"; 
import { useForm } from "react-hook-form"; 
import GiveContact from "./GiveContact";
 
export default function ContactForm (){



  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset, 
  } = useForm(); 
 
  const onSubmit = (data) => { 
    console.log("Form Data:", data); 
    reset(); 
  }; 
 
  return ( 
    <VStack  p={6}> 
      <Heading fontWeight={"normal"} fontStyle={"italic"} textAlign={"center"} fontSize="xl" mb={4}> 
       Contact Me 
      </Heading> 
      <GiveContact
        register={register} 
        handleSubmit={handleSubmit} 
        control={control} 
        errors={errors} 
        onSubmit={onSubmit} 
      /> 
    </VStack> 
  ); 
}

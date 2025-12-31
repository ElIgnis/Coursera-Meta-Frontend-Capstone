import React from "react";
import { Button, Text, Image, Heading, HStack, VStack, Flex } from "@chakra-ui/react";
import ScreenSection from "./ScreenSection";
import ReservationImage  from "../images/Reservation.jpg"
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const BookingSection = () => (
  <ScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495E57"
    mt="96px"
    p={8}
  >
      <HStack display={{ base: "none", lg: "flex" }} justifyContent="space-between" gap={16} color="black" width="100%">
        <VStack align="left" spacing={4}>
          <Heading as="h1" size="2xl" color="brand.white">
            Little Lemon
          </Heading>
          <Heading as="h2" size="lg" color="brand.white">
            Chicago
          </Heading>
          <Text fontSize="md" color="brand.white" maxWidth="400px">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Text>
          <Button 
            bg="brand.yellow"
            as={RouterLink}
            to="/booking"
            color="brand.black"
            width="min-content"
            padding="32px 32px"
          >
            Reserve a Table
          </Button>
        </VStack>
        <Image src={ReservationImage} alt="Hero Image" boxSize="400px" borderRadius="8px"/>
      </HStack>

      <VStack display={{ base: "flex", md: "flex" , lg: "none" }}>
        <Image src={ReservationImage} alt="Hero Image" boxSize="400px" borderRadius="8px"/>
        <VStack align="left" spacing={4}>
          <Heading as="h1" size="2xl" color="brand.white">
            Little Lemon
          </Heading>
          <Heading as="h2" size="lg" color="brand.white">
            Chicago
          </Heading>
          <Text fontSize="md" color="brand.white" maxWidth="400px">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Text>
          <Button 
            bg="brand.yellow" 
            color="brand.black"
            width="min-content"
            padding="32px 32px"
          >
            Reserve a Table
          </Button>
        </VStack>
      </VStack>

  </ScreenSection>
);

export default BookingSection;

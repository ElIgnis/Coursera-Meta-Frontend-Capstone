import ScreenSection from "./ScreenSection";
import { Text, Button, Heading, HStack, VStack, Image, Box } from "@chakra-ui/react";
import ReservationImage  from "../images/Reservation.jpg"

const AboutSection = () => {
  return (
    <ScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495E57"
    margin="128px 0px 512px 0px"
    p={8}
  >
      <HStack display={{ base: "none", lg: "flex" }} alignItems="start" justifyContent="space-between" color="black" width="100%">
        <VStack align="left" spacing={16} width="100%">
          <VStack align="left" spacing={4}>
            <Heading as="h1" size="2xl" color="brand.white">
              Little Lemon
            </Heading>
            <Heading as="h2" size="lg" color="brand.white">
              Chicago
            </Heading>
          </VStack>
          <Text fontSize="md" color="brand.white" maxWidth="400px">
              Rooted in generations of culinary tradition, our kitchen brings together the warmth of home-cooked Mediterranean flavors and the creativity of contemporary dining. Every dish is crafted with fresh, carefully sourced ingredients, honoring time-tested techniques while embracing new ideas that elevate each bite. Whether you’re sharing a meal with loved ones or discovering a favorite flavor for the first time, we aim to create a welcoming space where food, culture, and community come together.
          </Text>
        </VStack>
        <Box display="flex" justifyContent="flex-end" position="relative" width="100%" height="100%">
          <Box width="65%" position="relative">
            <Image
              src={ReservationImage}
              alt="Base image"
              position="relative"
              objectFit="cover"
              borderRadius="md"
              zIndex={1}
              boxShadow="lg"
            />

            <Image
              src={ReservationImage}
              alt="Overlapping image"
              objectFit="cover"
              position="absolute"
              top="10%"
              left="-35%"
              zIndex={0}
              borderRadius="md"
              boxShadow="lg"
            />
          </Box>
        </Box>
      </HStack>

      <VStack display={{ base: "flex", md: "flex" , lg: "none" }} align="center" spacing={8} height="fit-content">
          <VStack align="left" spacing={4}>
            <Heading as="h1" size="2xl" color="brand.white">
              Little Lemon
            </Heading>
            <Heading as="h2" size="lg" color="brand.white">
              Chicago
            </Heading>  
          </VStack>
          <VStack spacing={24}>
            <Box position="relative" width="80%" height="100%">
              <Box width="65%" position="relative">
                <Image
                  src={ReservationImage}
                  alt="Base image"
                  position="relative"
                  left="50%"
                  objectFit="cover"
                  borderRadius="md"
                  zIndex={1}
                  boxShadow="lg"
                />

                <Image
                  src={ReservationImage}
                  alt="Overlapping image"
                  objectFit="cover"
                  position="absolute"
                  top="15%"
                  zIndex={0}
                  borderRadius="md"
                  boxShadow="lg"
                />
              </Box>
            </Box>
            <Text fontSize="md" color="brand.white" maxWidth="400px">
              Rooted in generations of culinary tradition, our kitchen brings together the warmth of home-cooked Mediterranean flavors and the creativity of contemporary dining. Every dish is crafted with fresh, carefully sourced ingredients, honoring time-tested techniques while embracing new ideas that elevate each bite. Whether you’re sharing a meal with loved ones or discovering a favorite flavor for the first time, we aim to create a welcoming space where food, culture, and community come together.
            </Text>
          </VStack>
      </VStack>

  </ScreenSection>
  );
};

export default AboutSection;

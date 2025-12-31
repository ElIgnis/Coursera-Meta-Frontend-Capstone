import ScreenSection from "./ScreenSection";
import { Button, Heading, HStack, VStack, Box } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
  {
    title: "Greek Salad",
    description:"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/salad.jpg"),
  },
  {
    title: "Bruschetta",
    description:"Our Bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/bruschetta.jpg"),
  },
  {
    title: "Pasta Arrabbiata",
    description:"A spicy pasta dish made with tomatoes, garlic, and red chili peppers.",
    getImageSrc: () => require("../images/arrabbiata.jpg"),
  },
];

const SpecialsSection = () => {
  return (
    <ScreenSection
      backgroundColor="#F0F0F0"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >

      <VStack display={{ base: "none", lg: "flex" }} width="100%" gap={16}>
        <HStack justifyContent="space-between" width="100%" >
          <Heading as="h1" id="specials-section" color="brand.black">
            Specials
          </Heading>
          <Button 
            bg="brand.yellow" 
            color="brand.black"
            width="min-content"
            padding="32px 32px"
          >
            Online Menu
          </Button>
        </HStack>
        <Box display="grid" gap={8} gridTemplateColumns="repeat(3,minmax(0,1fr))">
          {/*  width="100%" justifyContent="center" alignItems="start" */}
          {specials.map((specialItem) => (
          <Card
            key={specialItem.title}
            title={specialItem.title}
            description={specialItem.description}
            imageSrc={specialItem.getImageSrc()}
          />
        ))}
        </Box>
      </VStack>

      <VStack display={{ base: "flex", md: "flex" , lg: "none" }} width="100%" gap={16}>
        <HStack justifyContent="space-between" width="100%" >
          <Heading as="h1" id="specials-section" color="brand.black">
            Specials
          </Heading>
          <Button 
            bg="brand.yellow" 
            color="brand.black"
            width="min-content"
            padding="32px 32px"
          >
            Online Menu
          </Button>
        </HStack>
        <Box display="grid" gap={8} gridTemplateColumns="repeat(1,minmax(0,1fr))">
          {specials.map((specialItem) => (
          <Card
            key={specialItem.title}
            title={specialItem.title}
            description={specialItem.description}
            imageSrc={specialItem.getImageSrc()}
          />
        ))}
        </Box>
      </VStack>


    </ScreenSection>
  );
};

export default SpecialsSection;

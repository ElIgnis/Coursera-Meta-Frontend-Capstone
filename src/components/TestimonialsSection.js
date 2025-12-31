import ScreenSection from "./ScreenSection";
import { Button, Heading, HStack, VStack, Box } from "@chakra-ui/react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    starRatings: 1,
    username:"UserOne",
    getProfilePhoto: () => require("../images/salad.jpg"),
    review: "Great food and excellent service! Highly recommend Little Lemon for a delightful dining experience.",
  },
  {
    starRatings: 2,
    username:"UserTwo",
    getProfilePhoto: () => require("../images/bruschetta.jpg"),
    review: "The ambiance was cozy, and the staff was friendly. The Mediterranean flavors were authentic and delicious.",
  },
  {
    starRatings: 3,
    username:"UserThree",
    getProfilePhoto: () => require("../images/arrabbiata.jpg"),
    review: "A hidden gem in the city! The menu offers a variety of options, and everything we tried was top-notch.", 
  },
  {
    starRatings: 4,
    username:"UserFour",
    getProfilePhoto: () => require("../images/salad.jpg"),
    review: "Little Lemon exceeded our expectations. The dishes were beautifully presented, and the flavors were outstanding.",
  },
];

const TestimonialsSection = () => {
  return (
    <ScreenSection
      backgroundColor="#E0E0E0"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      margin="64px 0"
    >

      <VStack display={{ base: "none", lg: "flex" }} width="100%" gap={16}>
        <Heading as="h1" id="testimonials-section" color="brand.black">
            Testimonials
        </Heading>
        <Box display="grid" gap={8} gridTemplateColumns="repeat(4,minmax(0,1fr))">
          {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.username}
            username={testimonial.username}
            starRatings={testimonial.starRatings}
            review={testimonial.review}
            imageSrc={testimonial.getProfilePhoto()}
          />
        ))}
        </Box>
      </VStack>

      <VStack display={{ base: "flex", md: "flex" , lg: "none" }} width="100%" gap={16}>
        <Heading as="h1" id="testimonials-section" color="brand.black">
            Testimonials
          </Heading>
        <Box display="grid" gap={8} gridTemplateColumns="repeat(1,minmax(0,1fr))">
          {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.username}
            username={testimonial.username}
            starRatings={testimonial.starRatings}
            review={testimonial.review}
            imageSrc={testimonial.getProfilePhoto()}
          />
        ))}
        </Box>
      </VStack>

    </ScreenSection>
  );
};

export default TestimonialsSection;

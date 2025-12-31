import { Heading, HStack, Image, Text, VStack, AspectRatio } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Testimonial = ({ username, starRatings, review, imageSrc }) => {
  return (
    <VStack borderRadius='xl' bg='white' overflow='hidden' color='black'
        align='left'
        padding='4'
        gap='4'
        width="100%">
        <Heading size='md'>Rating: {starRatings} stars</Heading>
        <HStack width="100%" gap={4}>
          <Image
              src={imageSrc}
              alt={username}
              width="64px"
              height="64px"
            />
          <Text fontWeight='bold' color='black'>{username}</Text>
        </HStack>
        <Text fontWeight='light' color='#4F4F4F'>{review}</Text>
      </VStack>
  );
};

export default Testimonial;

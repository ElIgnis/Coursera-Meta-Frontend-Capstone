import { Heading, Image, Text, VStack, AspectRatio } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    
    <VStack borderRadius='xl' bg='white' overflow='hidden'>
      <AspectRatio width="100%" ratio={4 / 3}>
        <Image
          src={imageSrc}
          alt={title}
        />
      </AspectRatio>
      <VStack
        color='black'
        align='left'
        padding='4'
        gap='4'
        width="100%"
      >
        <Heading size='lg' >{title}</Heading>
        <Text fontWeight='light' color='#4F4F4F'>{description}</Text>
        <a href='/#react-space' className='cta-link'>
          See More
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </a>
      </VStack>
      
      </VStack>
  );
};

export default Card;

import { VStack } from "@chakra-ui/react";

const ScreenSection = ({ children, isDarkBackground, customHeight, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      w="100%"
    >
      <VStack maxWidth="1280px" w="100%" h={customHeight} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default ScreenSection;

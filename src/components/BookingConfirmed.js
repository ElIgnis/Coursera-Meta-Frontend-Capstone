import ScreenSection from "./ScreenSection";
import { Heading, Text, VStack, Box } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom';

export default function BookingConfirmed () {
    const location = useLocation();
    if(!location.state) return;
    const { bookingData } = location.state;
    
    return (
        <ScreenSection
            isDarkBackground
            backgroundColor="#F0F0F0"
            py={16}
            spacing={8}
            mt="96px"
            h="85vh"
            color="black"
            >
            <VStack gap={16} alignItems="left">
                <Heading as="h1" size="xl">Your booking request has been confirmed!</Heading>
                <VStack ml={8} gap={8} alignItems="left">
                    <Text>Date: {bookingData.diningDate}</Text>
                    <Text>Time: {bookingData.diningTime}</Text>
                    <Text>Number of guests: {bookingData.numGuests}</Text>
                    <Text>Occassion: {bookingData.occasion}</Text>
                </VStack>
            </VStack>
            
            
        </ScreenSection>
    );
}
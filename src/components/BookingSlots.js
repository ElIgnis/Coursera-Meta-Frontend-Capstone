import { RadioGroup, Radio, VStack, HStack } from "@chakra-ui/react";

export default function BookingSlots(props) {
    
    return (
        <RadioGroup 
            onChange={props.onChange} 
            value={props.value}
            onBlur={props.onBlur}
            >
            <HStack display={{ base: "none", lg: "flex" }} spacing="24px">
                {props.availableTimes && props.availableTimes.map(availableTimeItem => ( 
                <Radio key={availableTimeItem} value={availableTimeItem}>{availableTimeItem}</Radio>
            ))}
            </HStack>
            <VStack display={{ base: "flex", lg: "none" }} spacing="16px" align="flex-start">
                {props.availableTimes && props.availableTimes.map(availableTimeItem => ( 
                <Radio key={availableTimeItem} value={availableTimeItem}>{availableTimeItem}</Radio>
            ))}
            </VStack>
            
        </RadioGroup>
    );
}
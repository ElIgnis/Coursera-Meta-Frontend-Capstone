import {useMemo} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import ScreenSection from "./ScreenSection";
import BookingSlots from "./BookingSlots";

const BookingFormSection = (props) => {

  const formInitialValues = useMemo(() => ({
      diningDate: props.todayDateStr ?? "",
      diningTime: "",
      numGuests: "",
      occasion: ""
    }), [props.todayDateStr]
  );

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values, actions) => {
      props.onSubmit(values).then(() => {
      actions.setSubmitting(false);
        actions.resetForm({
          diningDate: '', diningTime: '', numGuests: '',  occasion: ''
        });
    })},
    validationSchema: Yup.object({
      diningDate: Yup.date().required(" "),
      diningTime: Yup.string().oneOf(props.availableTimes, 'Please select a valid time slot').required(" "),
      numGuests: Yup.number().min(1, " ").max(20, " ").required(" "),
      occasion: Yup.string().required(" ")
    }),
  });

  // console.log(formik.values.diningDate);

  // useEffect(()=> {
  //   if(!formik.values.diningDate) return;
  //   if(!props.todayDateStr) return;

  //   formik.setFieldValue("diningDate", props.todayDateStr)
  // }, [props.todayDateStr])

  return (
    <ScreenSection
      isDarkBackground
      backgroundColor="#F0F0F0"
      py={16}
      spacing={8}
      mt="96px"
      h="85vh"
    >
      <VStack w="100%" alignItems="flex-start" color="brand.black">
        <Heading as="h1" id="contactme-section">
          Table Reservation
        </Heading>
        <Box p={8} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={8}>
              <FormControl isInvalid={formik.touched.diningDate && Boolean(formik.errors.diningDate)}>
                <FormLabel fontSize="lg" htmlFor="diningDate">Dining Date</FormLabel>
                <Input
                  id="diningDate"
                  name="diningDate"
                  onChange={(e) => {
                    //formik.handleChange(e);
                    props.onDateChange(e.target.value);}}
                  onBlur={formik.handleBlur}
                  value={formik.values.diningDate}
                  type="date"
                />
                <FormErrorMessage>Please input a proper date format</FormErrorMessage>
                <div>{ formik.errors.diningDate}</div>
              </FormControl>
              <FormControl isInvalid={formik.touched.diningTime && Boolean(formik.errors.diningTime)}>
                <FormLabel fontSize="lg" htmlFor="diningTime">Dining Time</FormLabel>
                <BookingSlots
                  availableTimes={props.availableTimes} 
                  value={formik.values.diningTime}
                  onChange={(value) => formik.setFieldValue("diningTime", value)}
                  onBlur={() => formik.setFieldTouched("diningTime", true)}
                />
                <FormErrorMessage>Please input a proper time format</FormErrorMessage>
                <div>{ formik.errors.diningTime}</div>
              </FormControl>
              <FormControl isInvalid={formik.touched.numGuests && Boolean(formik.errors.numGuests)}>
                <FormLabel fontSize="lg" htmlFor="numGuests">Number of Guests</FormLabel>
                <NumberInput
                  id="numGuests"
                  name="numGuests"
                  type="number"
                  min={1}
                  max={20}
                  onChange={(valueNumber) => formik.setFieldValue("numGuests", valueNumber)}
                  onBlur={() => formik.setFieldTouched("numGuests", true)}
                  value={formik.values.numGuests}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>Please input a valid number of guests</FormErrorMessage>
                <div>{ formik.errors.numGuests}</div>
              </FormControl>
              <FormControl isInvalid={formik.touched.occasion && Boolean(formik.errors.occasion)}>
                <FormLabel fontSize="lg" htmlFor="occasion" >Occasion</FormLabel>
                <Select id="occasion" name="occasion" onChange={(e)=>formik.setFieldValue("occasion", e.target.value)} onBlur={formik.handleBlur} value={formik.values.occasion} >
                  <option value="">Select an occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date-night">Date Night</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>Please select an occasion</FormErrorMessage>
                <div>{ formik.errors.occasion}</div>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit Reservation
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </ScreenSection>
  );
};

export default BookingFormSection;

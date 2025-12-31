import { useReducer, useState, useEffect } from "react";
import BookingFormSection from "./BookingFormSection";
import { useAlertContext } from "../context/alertContext";
import { useNavigate } from "react-router-dom";

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export default function BookingPage() {

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(today.getDate()).padStart(2, '0');

    const todayDateStr = `${yyyy}-${mm}-${dd}`;

    const [selectedDateAvailableTimes, setSelectedDateAvailableTimes] = useState([]);
    const [availableTimes , dispatch] = useReducer(bookingFormReducer, initialTimes);

    const navigate = useNavigate();

    function bookingFormReducer(state, action) {
        switch(action.type) {
            case "DATE_CHANGE":
                return action.payload;
            case "SUBMIT":
                return action.payload;
            default:
                return state;
        }
    }

    useEffect(() => {
        if(today) {
            const fetchTodayAvailableTimes = async () => {
                try {
                    const times = await fetchAPI(today);
                    dispatch({ type: "DATE_CHANGE", payload: times });
                } catch (error) {
                    console.log("Error fetching available times:", error);
                }
            };

            fetchTodayAvailableTimes();
        }
    }, [selectedDateAvailableTimes]);
            
    function handleDateChange(date) {
        setSelectedDateAvailableTimes(date);
    }

    async function handleFormSubmit(formData) {

        try {
            if(typeof submitAPI === 'function') {
                const formSubmitRsp = await submitAPI(formData);
                if(formSubmitRsp) {
                    navigate('/bookingconfirmed', {state:{bookingData: formData}});
                }
                else {
                    console.error("Form submission failed.");
                }
            }
        }
        catch (error) {
            console.error("Error submitting the form:", error);
        }
    }

    return (
        <BookingFormSection
        todayDateStr={todayDateStr}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmit={handleFormSubmit}
        />
    );
}
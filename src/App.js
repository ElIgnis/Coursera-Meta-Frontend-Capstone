import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { theme } from "./utils/Theme"
import { Routes, Route } from "react-router";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import { BrowserRouter } from "react-router-dom";
import BookingConfirmed from "./components/BookingConfirmed";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage /> } />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/bookingconfirmed" element={<BookingConfirmed />} />
            </Routes>
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BookingPage from './components/BookingPage';
import BookingConfirmed from './components/BookingConfirmed'
import App from './App';
import { AlertProvider } from './context/alertContext';

test('Renders the BookingForm heading', () => {
    render(
      <AlertProvider>
        <BookingPage />
    </AlertProvider>
  );
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('navigates to reservation page when clicking link', async () => {
  const user = userEvent.setup();
  
  render(
    <App />
  );
  
  // Click a navigation link
  const reservationLink = screen.getByText(/Reservations/i);
  await user.click(reservationLink);
  
  // Check if about page content appears
  expect(await screen.findByText("Table Reservation")).toBeInTheDocument();
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

test('reservation form submission', async () => {
  const user = userEvent.setup();
  global.submitAPI = jest.fn().mockResolvedValue(true);

  render(
    <MemoryRouter>
      <BookingPage/>
    </MemoryRouter>
  );

  const timeOptions = screen.getAllByRole('radio', { name: '18:00' });
  const diningDate = screen.getByLabelText(/Dining Date/i);
  const numGuest = screen.getByLabelText(/Number of Guests/i);
  const bday = screen.getByLabelText(/Occasion/i);

  await user.clear(diningDate);
  fireEvent.change(diningDate, {target: {value:'2025-12-25'}});
  await user.click(timeOptions[0]);
  await user.type(numGuest, '4');
  await user.selectOptions(bday, 'birthday');

  const submitButton = screen.getByRole('button', { name: /Submit Reservation/i });
  await user.click(submitButton);
  
  await waitFor(() => {
        expect(global.submitAPI).toHaveBeenCalled();
    });

  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledWith('/bookingconfirmed', {"state": {"bookingData": {"diningDate": "2025-12-31", "diningTime": "18:00", "numGuests": "4", "occasion": "birthday"}}});
  }, {timeout: 1000});
});

test('page routing to booking confirm', async () => {
  render(
    <MemoryRouter initialEntries={["/bookingconfirm"]}>
      <Routes>
        <Route
          path="/bookingconfirm"
          element={<BookingConfirmed />}
        />
      </Routes>
    </MemoryRouter>
  );
});
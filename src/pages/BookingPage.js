import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';

export default function BookingPage({ availableTimes, dispatch }) {
  const [bookings, setBookings] = useState([]);

  const handleReservation = (formData) => {
    setBookings([...bookings, formData]);
  };

  return (
    <main className="page-inner booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmitReservation={handleReservation}
      />

      <h2>Available Slots</h2>
      <ul className="booking-slots">
        {availableTimes && availableTimes.map((time) => {
          const booked = bookings.some(b => b.time === time);
          return <BookingSlot key={time} time={time} booked={booked} />;
        })}
      </ul>
    </main>
  );
}
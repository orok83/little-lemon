import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';

export default function BookingPage({ availableTimes, dispatch }) {
  const [bookings, setBookings] = useState([]);

  const handleReservation = (formData) => {
    setBookings([...bookings, formData]);
  };

  return (
    <main className="page-inner booking-page" aria-labelledby="booking-heading">
      <h1 id="booking-heading">Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmitReservation={handleReservation}
      />

      <section aria-labelledby="slots-heading">
        <h2 id="slots-heading">Available Slots</h2>
        <ul className="booking-slots">
          {availableTimes && availableTimes.map((time) => {
            const booked = bookings.some(b => b.time === time);
            return (
              <BookingSlot
                key={time}
                time={time}
                booked={booked}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
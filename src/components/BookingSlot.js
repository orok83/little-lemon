export default function BookingSlot({ time, booked }) {
  return (
    <li className={`booking-slot ${booked ? 'booked' : 'available'}`}>
      {time} {booked ? '(Booked)' : '(Available)'}
    </li>
  );
}
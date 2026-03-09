export default function BookingSlot({ time, booked }) {
    return (
        <li className={`booking-slot ${booked ? 'booked' : 'available'}`}>
            <span>{time}</span>
            <span className="status-label">
                {booked ? ' (reserved)' : ' (available)'}
            </span>
        </li>
    );
}

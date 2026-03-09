import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';

export default function BookingPage({ availableTimes, dispatch }) {
    // حالة لتخزين الحجوزات المؤكدة
    const [bookings, setBookings] = useState([]);

    // دالة لمعالجة الحجز الجديد عند إرسال النموذج
    const handleReservation = (formData) => {
        // إضافة الحجز الجديد للمصفوفة
        setBookings([...bookings, formData]);
        alert(`Booking confirmed for: ${formData.time}`);
    };

    return (
        <main className="page-inner booking-page">
            <h1>Reserve a Table</h1>
            {/* تمرير دالة handleReservation للنموذج */}
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                onSubmitReservation={handleReservation} 
            />

            <h2>Available Slots</h2>
            <ul className="booking-slots">
                {/* عرض المواعيد والتأكد من حالة كل موعد */}
                {availableTimes && availableTimes.map((time) => {
                    // التحقق مما إذا كان هذا الوقت موجوداً في الحجوزات
                    const isBooked = bookings.some(b => b.time === time);
                    return (
                        <BookingSlot 
                            key={time} 
                            time={time} 
                            booked={isBooked} 
                        />
                    );
                })}
            </ul>
        </main>
    );
}

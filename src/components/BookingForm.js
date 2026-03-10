// src/components/BookingForm.js
import { useState, useEffect } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    
    // حالة للتحقق من صحة النموذج بالكامل (Step 2)
    const [isFormValid, setIsFormValid] = useState(false);

    // مراقبة التغييرات لتحديث حالة زر الإرسال (Step 2)
    useEffect(() => {
        const isValid = date !== '' && time !== '' && guests >= 1 && guests <= 10 && occasion !== '';
        setIsFormValid(isValid);
    }, [date, time, guests, occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            submitForm({ date, time, guests, occasion });
        }
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="booking-form" 
            aria-label="Booking Form" // وسم دلالي للنموذج (Step 1)
        >
            {/* الخطوة 3: استخدام htmlFor لربط التسمية بالـ id الخاص بالحقل */}
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date" // يجب أن يطابق htmlFor
                min={new Date().toISOString().split('T')[0]}
                value={date}
                onChange={handleDateChange}
                required
                aria-required="true" // سمة ARIA للحقول المطلوبة (Step 2)
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                aria-required="true"
                aria-label="Select booking time" // وصف إضافي لقارئ الشاشة
            >
                <option value="">Select a time</option>
                {availableTimes && availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                required
                aria-required="true"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-required="true"
            >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {/* الخطوة 2: إضافة aria-label="On Click" لزر الإرسال كما هو مطلوب في التمرين */}
            <input 
                type="submit" 
                value="Make Your Reservation" 
                className={`yellow-btn ${!isFormValid ? 'disabled' : ''}`}
                disabled={!isFormValid}
                aria-label="On Click" // السمة المطلوبة تحديداً في التمرين
            />
        </form>
    );
}

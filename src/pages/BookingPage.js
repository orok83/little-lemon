// src/pages/BookingPage.js
import { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    const [pastBookings, setPastBookings] = useState([]);

    // جلب الحجوزات عند تحميل الصفحة
    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setPastBookings(savedBookings);
    }, []);

    return (
        <main className="page-inner booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
            />

            {/* عرض الحجوزات السابقة */}
            {pastBookings.length > 0 && (
                <div className="past-bookings">
                    <h2>حجوزاتك السابقة</h2>
                    <table className="bookings-table">
                        <thead>
                            <tr>
                                <th>التاريخ</th>
                                <th>الوقت</th>
                                <th>الضيوف</th>
                                <th>المناسبة</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastBookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.guests}</td>
                                    <td>{booking.occasion}</td>
                                </tr>))}
                            </tbody>
                        </table>
                        {/* <button 
                            className="clear-btn" 
                            onClick={() => {
                                localStorage.removeItem('bookings');
                                setPastBookings([]);
                            }}
                        >
                            مسح جميع الحجوزات
                        </button> */}
                </div>
                
            )}
        </main>
    );
}

// src/pages/ConfirmedBooking.js
import React from 'react';

const ConfirmedBooking = () => {
    return (
        <main className="page-inner confirmed-booking">
            <div className="confirmation-card">
                <h1>Your booking has been confirmed!</h1>
                <p>Thank you for choosing Little Lemon. We've received your reservation and will be expecting you.</p>
                <p>Booking details will be sent to your email shortly.</p>
                <button 
                    className="yellow-btn" 
                    onClick={() => window.location.href = '/'}
                >
                    Back to Home
                </button>
            </div>
        </main>
    );
};

export default ConfirmedBooking;

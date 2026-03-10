

import { initializeTimes, updateTimes } from './bookingReducer'; 

import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // أضف useNavigate
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import { submitAPI } from './api'; // استيراد دالة الإرسال
import ConfirmedBooking from './pages/ConfirmedBooking'; // استيراد الصفحة الجديدة



const specialsData = [
  { id: 1, title: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.", image: "greek_salad.jpg" },
  { id: 2, title: "Bruschetta", price: "$5.89", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", image: "bruchetta.svg" },
  { id: 3, title: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma's recipe book, every last ingredient has been sourced.", image: "lemon_dessert.jpg" }
];

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate(); // تعريف الـ navigate
    // دالة إرسال النموذج (Step 2)
// src/Main.js

const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
        // 1. جلب الحجوزات الحالية من LocalStorage (أو مصفوفة فارغة إذا لم توجد)
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        
        // 2. إضافة الحجز الجديد للمصفوفة
        const updatedBookings = [...existingBookings, formData];
        
        // 3. حفظ المصفوفة المحدثة في LocalStorage
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        
        // 4. الانتقال لصفحة التأكيد
        navigate('/confirmed');
    }
};


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage specialsData={specialsData} />} />
            <Route 
                path="/booking" 
                element={
                    <BookingPage 
                        availableTimes={availableTimes} 
                        dispatch={dispatch} 
                        submitForm={submitForm} // تمرير الدالة (Step 2)
                    />
                } 
            />
            {/* إضافة مسار صفحة التأكيد (Step 1) */}
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}
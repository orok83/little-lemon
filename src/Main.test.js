import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './bookingReducer';

import * as api from './api';


jest.mock('./api', () => ({
  fetchAPI: jest.fn()
}));

describe('Booking Reducer API Tests', () => {
    
    test('initializeTimes calls fetchAPI and returns a non-empty array', () => {
        // إعداد القيمة المتوقعة من الـ Mock
        const mockTimes = ["17:00", "18:00", "19:00"];
        api.fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();

        // التأكد من استدعاء الدالة
        expect(api.fetchAPI).toHaveBeenCalled();
        // التأكد من أن النتيجة هي مصفوفة غير فارغة وتطابق الـ Mock
        expect(result).toEqual(mockTimes);
        expect(result.length).toBeGreaterThan(0);
    });

    test('updateTimes calls fetchAPI with the provided date and returns new times', () => {
        const mockTimes = ["20:00", "21:00"];
        api.fetchAPI.mockReturnValue(mockTimes);

        const initialState = ["17:00"];
        const selectedDate = "2026-03-10";
        const action = { type: 'UPDATE_TIMES', payload: selectedDate };

        const result = updateTimes(initialState, action);

        // التأكد من استدعاء fetchAPI مع التاريخ الصحيح (ككائن Date)
        expect(api.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
        // التأكد من تحديث الحالة بالمواعيد الجديدة
        expect(result).toEqual(mockTimes);
    });
});


describe('BookingForm Validation Tests', () => {
    
    // الخطوة 1: اختبار سمات HTML5
    test('HTML5 validation attributes are applied correctly', () => {
        render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
        
        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);

        // التحقق من سمة required
        expect(dateInput).toBeRequired();
        expect(timeSelect).toBeRequired();
        expect(guestsInput).toBeRequired();
        expect(occasionSelect).toBeRequired();

        // التحقق من سمات الأرقام (min/max)
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        
        // التحقق من سمة min للتاريخ (يجب أن تكون تاريخ اليوم على الأقل)
        const today = new Date().toISOString().split('T')[0];
        expect(dateInput).toHaveAttribute('min', today);
    });

    // الخطوة 2: اختبار منطق JavaScript (تعطيل/تفعيل الزر)
    test('Submit button is disabled when form is invalid and enabled when valid', () => {
        render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
        
        const submitButton = screen.getByDisplayValue(/Make Your Reservation/i);
        
        // الحالة 1: النموذج فارغ (يجب أن يكون الزر معطلاً)
        expect(submitButton).toBeDisabled();

        // الحالة 2: ملء البيانات بشكل صحيح (يجب أن يتفعل الزر)
        fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2026-12-31' } });
        fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        // بعد ملء جميع الحقول، يجب أن يصبح الزر مفعلاً
        expect(submitButton).not.toBeDisabled();
    });

    test('Submit button remains disabled if guests count is out of range', () => {
        render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
        
        const submitButton = screen.getByDisplayValue(/Make Your Reservation/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);

        // ملء بيانات صحيحة ما عدا عدد الضيوف (أكبر من 10)
        fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2026-12-31' } });
        fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
        fireEvent.change(guestsInput, { target: { value: '15' } }); // قيمة غير صالحة
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        expect(submitButton).toBeDisabled();
    });
});
// استيراد الدالات المراد اختبارها
import { initializeTimes, updateTimes } from './bookingReducer';
// استيراد fetchAPI لمحاكاتها
import * as api from './api';

// محاكاة ملف api.js بالكامل
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

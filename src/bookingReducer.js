// src/bookingReducer.js
import { fetchAPI } from './api'; // تأكد من وجود الأقواس المتعرجة

export const initializeTimes = () => {
    const today = new Date();
    // تأكد من استدعاء الدالة مباشرة
    return fetchAPI(today); 
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // تأكد من تحويل التاريخ لكائن Date قبل إرساله
            const selectedDate = new Date(action.payload);
            return fetchAPI(selectedDate);
        default:
            return state;
    }
};

// src/Main.test.js
import { initializeTimes, updateTimes } from './bookingReducer'; // التعديل هنا

describe('Booking Reducer Functions', () => {
    test('initializeTimes returns the correct initial array of times', () => {
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });

    test('updateTimes returns the initial times when action is UPDATE_TIMES', () => {
        const initialState = [];
        const action = { type: 'UPDATE_TIMES', payload: '2026-03-10' };
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const result = updateTimes(initialState, action);
        expect(result).toEqual(expectedTimes);
    });
});

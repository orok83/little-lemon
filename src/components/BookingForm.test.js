import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm labels', () => {
    // نقوم برندر المكون مع تمرير props وهمية لتجنب الأخطاء
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    
    // البحث عن نص "Choose date" وهو أحد التسميات الثابتة في نموذجك
    const labelElement = screen.getByText("Choose date");
    
    // التأكد من وجود العنصر في الصفحة
    expect(labelElement).toBeInTheDocument();
});

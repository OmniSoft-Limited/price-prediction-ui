import { numUsersAverage, timelineMonthsAverage } from "../utils/Preprocessor/average";

test('Testing Number of Users Average', () => {
    const numUsers_1 = '01-10';
    const numUsers_2 = '01-100';
    const numUsers_3 = '500-1000';
    const numUsers_4 = '1000-10000';

    expect(numUsersAverage(numUsers_1)).toBe(5.5);
    expect(numUsersAverage(numUsers_2)).toBe(50.5);
    expect(numUsersAverage(numUsers_3)).toBe(750);
    expect(numUsersAverage(numUsers_4)).toBe(5500);
});

test('Testing Timeline Months Average', () => {
    const timelineMonths_1 = '1-12';
    const timelineMonths_2 = '1-6';
    const timelineMonths_3 = '5';
    const timelineMonths_4 = '4';

    expect(timelineMonthsAverage(timelineMonths_1)).toBe(6.5);
    expect(timelineMonthsAverage(timelineMonths_2)).toBe(3.5);
    expect(timelineMonthsAverage(timelineMonths_3)).toBe(5);
    expect(timelineMonthsAverage(timelineMonths_4)).toBe(4);
});
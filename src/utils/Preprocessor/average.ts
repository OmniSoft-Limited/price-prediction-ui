export function numUsersAverage(numUsers: string): number {
    console.log("numUsers", numUsers);
    const nums = numUsers.split('-').map(Number);
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
}

export function timelineMonthsAverage(timelineMonths: string): number {
    const nums = timelineMonths.split('-').map(Number);
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
}
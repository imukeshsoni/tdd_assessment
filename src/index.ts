export default function add(nums: string): number {
    if (!nums) return 0;
    const numbers = nums.split(',').map(Number);
    return calculateSum(numbers);
}

export function calculateSum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function splitNumbers(nums: string, delimeter: string): number[] {
    if(!nums) return [];
    return nums.split(delimeter).map(Number);
}
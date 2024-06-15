export default function add(nums: string): number {
    if (!nums) return 0;
    const numbers = splitNumbers(nums);
    return calculateSum(numbers);
}

export function calculateSum(numbers: number[]): number {
    if (numbers.some((num) => num < 0)) {
        throw new Error(`negative numbers not allowed: ${numbers.filter((num) => num < 0).join(', ')}`);
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function splitNumbers(nums: string): number[] {
    let delimiter = /,|\n/; // taking default delimiters as comma and newline
    let numbers = nums;

    if (nums.startsWith('//')) {
        const delimiterEndIndex = nums.indexOf('\n');
        delimiter = new RegExp(nums.substring(2, delimiterEndIndex));
        numbers = nums.substring(delimiterEndIndex + 1);
    }

    return numbers.split(delimiter).map(Number);
}

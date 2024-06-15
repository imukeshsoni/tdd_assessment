export default function calculator(nums: string): number {
    const [a, b] = nums.split(',').map(Number);
    return a + b;
}
export default function add(nums: string): number {
    if (!nums) return 0;
    const [a, b] = nums.split(',').map(Number);
    return a + b;
}
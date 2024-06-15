import add, { calculateSum, splitNumbers } from '../src/index';

describe('add', () => {
    it('should return 0', () => {
        expect(add('')).toBe(0);
    });

    it('should return 3', () => {
        expect(add('1,2')).toBe(3);
    });

    it('should return sum of n numbers', () => {
        expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
    });

    it('should return 6', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    it('should return 3', () => {
        expect(add('//;\n1;2')).toBe(3);
    });
});

describe('calculateSum', () => {
    it('should return 0', () => {
        expect(calculateSum([])).toBe(0);
    });

    it('should return 3', () => {
        expect(calculateSum([1, 2])).toBe(3);
    });

    it('should return sum of n numbers', () => {
        expect(calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });

    it('should throw error for negative numbers', () => {
        expect(() => calculateSum([-1, -2, -3])).toThrowError('negative numbers not allowed: -1, -2, -3');
    });

    it('should throw error for negative numbers', () => {
        expect(() => calculateSum([1, -2, -3])).toThrowError('negative numbers not allowed: -2, -3');
    });
});

describe('splitNumbers', () => {
    it('should return an array of numbers', () => {
        expect(splitNumbers('1,2,3,4,5,6,7,8,9,10')).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);
    });

    it('should return empty array', () => {
        expect(() => splitNumbers('')).toBeTruthy();
    });
});

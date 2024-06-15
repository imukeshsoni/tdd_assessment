import add from '../src/index'

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
});
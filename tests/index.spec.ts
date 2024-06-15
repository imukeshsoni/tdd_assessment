import add from '../src/index'

describe('add', () => {
    it('should return 0', () => {
        expect(add('')).toBe(0);
    });

    it('should return 3', () => {
        expect(add('1,2')).toBe(3);
    });
});
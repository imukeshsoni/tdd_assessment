import calculator  from '../src/index'

describe('calculator', () => {
    it('should return 3', () => {
        expect(calculator('1,2')).toBe(3);
    });
});
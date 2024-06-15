import  calculator  from '../src/index'

describe('calculator', () => {
    it('should return "Hello, world!"', () => {
        expect(calculator()).toBe('Hello, world!');
    });
});
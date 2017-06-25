const expect = require('expect');

var {isRealString} = require('./validation');
describe('isRealString', () => {
    it('should reject non-string values', () => {
        var result = isRealString(1);
        expect(result).toBe(false);
    });

    it('should reject non-string values', () => {
        var result = isRealString(' ');
        expect(result).toBe(false);
    });

    it('should reject non-string values', () => {
        var result = isRealString(' abc ');
        expect(result).toBe(true);
    });
});
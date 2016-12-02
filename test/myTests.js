var assert = require('assert');

beforeEach(function(){
    this.only();
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it('should even return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it('should return 1 when the value is not present', function () {
            assert.equal(1, [1, 2, 3].indexOf(2));
        });
        it('should even return 1 when the value is not present', function () {
            assert.equal(1, [1, 2, 3].indexOf(2));
        });
    });
});
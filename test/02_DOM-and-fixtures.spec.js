

describe('Sum', function() {

    it('should return sum of a and b', function() {

        //assert.ok('everything', 'everything is ok');

        var result = app.sum(1, 2);

        expect(result).equal(3);

    });

});

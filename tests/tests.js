var expect = chai.expect;

describe('max', function() {
	it('should be a number', function() {
		expect(function() {
			max('a', 1)
		}).to.throw('The first argument must be a number');
		expect(function() {
			max(1, 'a')
		}).to.throw('The second argument must be a number');
		expect(function() {
			max(true, 2) 
		}).to.throw('The first argument must be a number');
		expect(function() {
			max(1) 
		}).to.throw('The second argument must be a number');

	});
	it('should return the argument with the max value', function() {
		expect(max(1, 2)).to.equal(2);
		expect(max(30, 3)).to.equal(30);
		expect(max(0.4, 1.5)).to.equal(1.5);
		expect(max(-1, -5)).to.equal(-1);
	});
});

describe('maxOfThree', function() {
	it('should be a number', function() {
		expect(function() {
			maxOfThree('a', 1, 2)
		}).to.throw('The first argument must be a number');
		expect(function() {
			maxOfThree(2, 'b', 3)
		}).to.throw('The second argument must be a number');
		expect(function() {
			maxOfThree(1, 4, 'c')
		}).to.throw('The third argument must be a number');
		expect(function() {
			maxOfThree(1, 2)
		}).to.throw('The third argument must be a number');
	})
	it('should return the max', function() {
		expect(maxOfThree(1, 2, 3)).to.equal(3);
		expect(maxOfThree(-1, 10, 3)).to.equal(10);
		expect(maxOfThree(0.1, 0.5, 0)).to.equal(0.5);
		expect(maxOfThree(-1, -2, -3)).to.equal(-1);
	});
});

describe('isVowel', function(char) {
	it('should be a string') {
		expect(function() {
			isVowel(1)
		}).to.throw('The argument is not a string');
		expect(function() {
			isVowel([])
		}).to.throw('The argument is not a string');
		expect(function() {
			isVowel({foo: 'bar'})
		}).to.throw('The argument is not a string');
		expect(function() {
			isVowel(true)
		}).to.throw('The argument is not a string');
	}
	it('should have length 1') {
		expect(function() {
			isVowel('abc')
		}).to.throw('The argument is more than length 1');
		expect(function() {
			isVowel('Hello world')
		}).to.throw('The argument is more than length 1');
	}
})




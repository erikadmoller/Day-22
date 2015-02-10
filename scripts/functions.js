function max(a, b) {
	if(!_.isNumber(a)) {
		throw 'The first argument must be a number';
	}
	if(!_.isNumber(b)) {
		throw 'The second argument must be a number';
	}

	if(a >= b) {
		return a
	} else {
		return b
	}
}


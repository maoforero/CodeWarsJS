function squareSum(numbers){
	let total;
	for(let n in numbers){
		total += numbers[n]*2;
	}
	return total;
}

function squareSum(numbers){
	let total = 0;
	for(let n in numbers){
		total += numbers[n]**2;
	}
	return total;
}

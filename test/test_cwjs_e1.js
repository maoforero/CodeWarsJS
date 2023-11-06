describe('getGrade function', () => {
	test('returns F for averages less tan 60', () => {
		expect(getGrade(50,50,50)).toBe('F');
	
	});

	test('returns D for averages between 60 and 69', () => {
		expect(getGrade(60,65,70)).toBe('D');
	});

	test('returns C for averages between 70 and 79', () => {
		expect(getGrade(60, 65, 70)).toBe('D');
	});

	test('returns B for averages between 80 and 89', () => {
		expect(getGrade(80, 85, 90)).toBe('B');
	});

	test('returns A for averages between 90 and 100', () => {
		expect(getGrade(90, 95, 100)).toBe('A');
	});

	test('returns A for a perfect score of 100', () => {
		expect(getGrade(100, 100, 100)).toBe('A');
	});

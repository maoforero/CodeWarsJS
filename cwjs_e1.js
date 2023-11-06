func getGrade(s1, s2, s3){
  	let totalBase = 3;
	let averageScore = (s1, s2, s3) / totalBase;
	let score = null;

	if(averageScore < 60){
		return score = 'F';
	}else if(averageScore < 70){
		return score = 'D';
	}else if(averageScore < 80{
		return score = 'C';
	}else if(averageScore < 90){
		return score = 'B';
	}else if(averageScore <= 100){
		return score = 'A';
	}
	return score;
}

function factorial(inputNumber) {
    let initialArray = [];
    for (let i=1; i<=inputNumber; i++) {
      initialArray.push(i);
    };
	const initialValue = 1;
	return initialArray.reduce((accumulator, currentValue) => accumulator*currentValue, initialValue);
  }

console.log(factorial(-4));
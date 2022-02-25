const bmiCalculator = (weight, height) => {
    bmi = Math.round(weight / (height ** 2));
    return bmi;
}

angelasBMI = bmiCalculator(75, 1.65);
console.log(angelasBMI);

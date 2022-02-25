const lifeInWeeks = (age) => {
    ageOfDeath = 90;
    yearsLeft = ageOfDeath - age;

    daysLeft = yearsLeft * 365;
    weeksLeft = yearsLeft * 52;
    monthsLeft = yearsLeft * 12;

    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
}

lifeInWeeks(12);

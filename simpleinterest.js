function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate = new Date(document.getElementById('toDate').value);
    const interestType = document.getElementById('interestType').value;

    if (isNaN(principal) || isNaN(rate) || isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
        alert('Please enter valid numeric values and select valid dates.');
        return;
    }

    if (principal <= 0 || rate <= 0 || fromDate >= toDate) {
        alert('Values must be greater than zero, and "To Date" must be after "From Date".');
        return;
    }

    const timeDiff = toDate.getTime() - fromDate.getTime();
    const timeInDays = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
    console.log(timeInDays);
    const years = timeInDays / 365;
    console.log(years);

    let simpleInterest;
    if (interestType === 'percentage') {
        simpleInterest = (principal * (rate / 100) * years); // Assuming 365 days in a year
    } else if (interestType === 'rupees') {
        simpleInterest = (principal * (rate / 100) * (years * 12)); // No need to divide by 100 for rupees calculation
    }

    let resultText;
    if (interestType === 'percentage') {
        resultText = `Interest Type: ${rate} percentage`;
    } else if (interestType === 'rupees') {
        resultText = `Interest Type: ${rate} rupees`;
    }

    const interestInRupees = principal * (rate / 100) * (years * 12);
    console.log(interestInRupees);
    console.log(simpleInterest);
    document.getElementById('result').innerText = `Principal Amount:  ${principal}`;
    document.getElementById('result1').innerText = resultText;
    document.getElementById('result2').innerText = `Simple Interest:  ${simpleInterest}`;
    document.getElementById('result3').innerText = `Total Amount:  ${simpleInterest + principal}`;
}
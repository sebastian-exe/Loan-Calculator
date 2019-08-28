//listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//calculate results 
function calculateResults(e){
    console.log('Calculating...');

    //UI variables
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    //turn the value into a decimal
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value / 100 / 12);
    const calculatedPayments = parseFloat(years.value) * 12;
    
    //compute the monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    //check if it is a finite number
    if(isFinite){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    }else{
        console.log('Please check your numbers')

    }








    e.preventDefault();


}
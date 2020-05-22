


//document to listen to submit form
//TODO 

document.getElementById('loan-form').addEventListener('submit', function (e) {

    document.getElementById("loading").style.display = "block";
    setTimeout(calculateResults, 2000);
    e.preventDefault();//html has default behaviour
});

function calculateResults() {
    console.log("calculating");



    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");

    const monthlypayments = document.getElementById("monthly-payment");
    const totalpayments = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    //compute the loan monthly payments

    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principle * x * calculateInterest) / (x - 1);

    //push the values to the result output form

    if (isFinite(monthly)) {
        monthlypayments.value = monthly.toFixed(2);
        totalpayments.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = (monthly * calculatePayment - principle).toFixed(2);


        //show the Result
        document.getElementById("results").style.display = "block";


        //hide the spinner
        document.getElementById("loading").style.display = "none";


    } else {
        //create Error function and call it hear and should be able to clear it as well   
        
       showError("please check all values")

        // else if(amount.value < 0 || (amount.value).typeof !='number'){
        //     showError("please add loan ammount")
        // }
        // else if(interest < 0 || interest.typeof !='number'){
        //     showError("Please enter a valid interest rate")
            
        // }
        // else if(years > 1 && years.typeof !='number'){
        //     showError("Please enter valid amout of years")
        // }

    }

    function showError(error) {

        //hide the result as there is notting to show 

        document.getElementById("results").style.display = "none";

        //hide the loading spinner
        document.getElementById("loading").style.display = "none";

        //creating a div in html using javascript
        const errorDiv = document.createElement('div');

        //get the element where it is to be displayed
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        //Add Class from bootstrap

        errorDiv.className = "alert alert-danger";

        //create text node

        errorDiv.appendChild(document.createTextNode(error));


        //insert the error above the header

        card.insertBefore(errorDiv, heading);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 2000);

    }


}

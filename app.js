document.querySelector("#years").addEventListener("keyup",function(e){
if(e.keyCode===13){
  calculate();
}

e.preventDefault();
})
//defining an event listener for calculate button
document.getElementById("calculate").addEventListener("click",function(e){
  document.querySelector("#loading").style.display = "none";
   calculate();
   e.preventDefault();
});


function calculate(){
  document.querySelector("#loading").style.display = "block";
  //definition of variables
  const loanAmount = document.getElementById("loanAmount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  
  const monthlyPayment = document.getElementById("monthlyPayment");
  const totalPayment = document.getElementById("totalPayment");
  const totalInterest = document.getElementById("totalInterest");

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat((interest.value)/100/12);
  const calculatedPayments = parseFloat(years.value*12)

  const x = Math.pow(1+calculatedInterest,calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    removeLoader();
    showresults();
  }
  else{
    removeLoader();
    setTimeout(function(){
      const error = document.createElement('div');
      error.className = "alert alert-danger";
      error.id = "errorMessage";
      error.appendChild(document.createTextNode("Invalid Inputs! Please check and try again."));
      const card = document.querySelector('#cardMain');
      const heading = document.querySelector('#headingMain');
      card.appendChild(error);
      card.insertBefore(error,heading);
      
    },3000)
    setTimeout(function(){document.querySelector("#errorMessage").remove()},6000);
    
  }

}
//show errorTime
function showerrorTime(){
  setTimeout(showerror("Invalid Entries.Please Try Again!"),3000);
}
//remove error function
function removeError(){
  document.querySelector('.alert').remove();
}
//definition of loader function 
function removeLoader(){
  setTimeout(function(){document.querySelector("#loading").style.display = "none"},3000);
}
function showresults(){
  setTimeout(function(){document.querySelector("#results").style.display="block"},3000)
}
let income = prompt("Enter Your Income");

function calculateTax(income) {
  if (income <= 300000) {
    return "0%";
  } else if (income <= 600000) {
    return "5%";
  } else if (income <= 900000) {
    return "10%";
  } else if (income <= 1200000) {
    return "15%";
  } else if (income <= 1500000) {
    return "20%";
  } else {
    return "30%";
  }
}

let taxRate = calculateTax(income);
alert("Tax Rate is " + taxRate);

// Excercise_003
// Task
// Prompt the user to input their daily rate.
// Prompt the user to input the number of days they worked in the month.
// Prompt the user to input the number of overtime hours they've worked.
// Use the provided constant values for the various deductions.
// Deduction Constants
// SSS Contribution: PHP 500
// PhilHealth Contribution: PHP 300
// PAG-IBIG Contribution: PHP 200
// Overtime Calculation
// Overtime is computed as: overtime hours * (daily rate / 8) * 1.5 (assuming an 8-hour work day and 1.5 times the hourly rate for overtime).

// Total Payroll Calculation
// Compute the total payroll as: Total Payroll = (days worked * daily rate) + overtime pay - total deductions

// Finally, display the computed payroll amount using an alert.

let arawangSahod = prompt("Your daily rate");
let bilangNgAraw = prompt("Number of days you've worked in the month");
let higitSaOras = prompt("Number of overtime hours");

const deductions = {
  sssContribution: 500,
  philHealthContribution: 300,
  pagIbigContribution: 200,
};

let dailyWage = arawangSahod * bilangNgAraw;
let masHigitsaOras = (arawangSahod / 8) * 1.5;

console.log(masHigitsaOras);

let totalDeduction =
  deductions.sssContribution +
  deductions.philHealthContribution +
  deductions.pagIbigContribution;
console.log(totalDeduction);

let payrollCalculation = parseFloat(
  dailyWage + masHigitsaOras - totalDeduction
);

console.log(payrollCalculation);

console.log(alert("Your payroll Amount" + "\n" + payrollCalculation));

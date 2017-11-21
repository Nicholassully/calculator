/*
Before we start writing functions, we declared three global variables.
These are the outputs from our functions.
savedNumber is the first output of the number that is to be saved to operate on.
operator does what it says on the tin. It applies a mathematical operator to our
savedNumber and resets (for now) number's "Number" value to an empty string ("")
 */

let savedNumber = "";
let operator = "";
let number = "";
let result = "";
let equals = "";

/*
This function is triggered by onclick of the number 1 button.
Into our number variable, it assigns the data-value of button 1 to the number,
which in this case is "1". If onclick is triggered again, this will concatenate an additional "1"
to the previous string, giving "11". This stores the number for our Calculator.
 */

//TODO: Refactor button functions as they are very similar

function numberClick(id) {
  number += document.getElementById(id).getAttribute('data-value');
  showDisplay();
}

/*
This function is triggered by onclick of the "+" operator button.
Into our operator variable, it assigns the data-value of "+" to the operator, which in this case is our add button.
When this onclick function is triggered, this stores the operator so that at this stage we have our saveedNumber
and the operator to be used on that number.
 */

function selectOperator(input){
  operator = input;
  savedNumber = number;
  number = '';
  showDisplay();
}

function reset(){
  showDisplay();
  savedNumber = "";
  operator = "";
  number = "";
  result = "";
}

/*
This function is our main function for our calclulator and is triggered by the onclick function of our equals
button. This function tests which operator has been chosen and depending on that operator, it will
perform the relevant operation. This function takes in two strings (savedNumber and number) and turns them into Numbers with Number()
before operating on them.
 */
//TODO: Refactor to switchcase
function runCalc () {
if(operator == "+"){
	return Number(savedNumber) + Number(number);
}if(operator == "-"){
	return Number(savedNumber) - Number(number);
}if(operator == "*"){
	return Number(savedNumber) * Number(number);
}if(operator == "/"){
	return Number(savedNumber) / Number(number);
	}
};

function showDisplay(){
  document.getElementById('number').innerText = number;
  document.getElementById('operator').innerText = operator;
  document.getElementById('savedNumber').innerText = savedNumber;
  document.getElementById('result').innerHTML = result ? '<span>=</span>' + result : '';
}

function calcDisplay(){
  console.log('Current Number',number)
  console.log('saved Number',savedNumber)
  result = runCalc();
  showDisplay();
  reset();
}

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

/*
This function is triggered by onclick of the number 1 button.
Into our number variable, it assigns the data-value of button 1 to the number,
which in this case is "1". If onclick is triggered again, this will concatenate an additional "1"
to the previous string, giving "11". This stores the number for our Calculator.
 */

function button1() {
  number += document.getElementById('1').getAttribute('data-value');
  console.log(number)
}
function button2() {
  number += document.getElementById('2').getAttribute('data-value');
  console.log(number)
}
function button3() {
  number += document.getElementById('3').getAttribute('data-value');
  console.log(number)
}
function button4() {
  number += document.getElementById('4').getAttribute('data-value');
  console.log(number)
}
function button5() {
  number += document.getElementById('5').getAttribute('data-value');
  console.log(number)
}
function button6() {
  number += document.getElementById('6').getAttribute('data-value');
  console.log(number)
}
function button7() {
  number += document.getElementById('7').getAttribute('data-value');
  console.log(number)
}
function button8() {
  number += document.getElementById('8').getAttribute('data-value');
  console.log(number)
}
function button9() {
  number += document.getElementById('9').getAttribute('data-value');
  console.log(number)
}

/*
This function is triggered by onclick of the "+" operator button.
Into our operator variable, it assigns the data-value of "+" to the operator, which in this case is our add button.
When this onclick function is triggered, this stores the operator so that at this stage we have our saveedNumber
and the operator to be used on that number.
 */

function add(){
  operator = document.getElementById('add').getAttribute('data-value');
  savedNumber = number;
  number = '';
}
function subtract(){
  operator = document.getElementById('subtract').getAttribute('data-value');
  savedNumber = number;
  number = '';
}
function multiply(){
  operator = document.getElementById('multiply').getAttribute('data-value');
  savedNumber = number;
  number = '';
}
function divide(){
  operator = document.getElementById('divide').getAttribute('data-value');
  savedNumber = number;
  number = '';
}

function reset(){
  savedNumber = "";
  operator = "";
  number = "";
}

/*
This function is our main function for our calclulator and is triggered by the onclick function of our equals
button. This function tests which operator has been chosen and depending on that operator, it will
perform the relevant operation. This function takes in two strings (savedNumber and number) and turns them into Numbers with Number()
before operating on them.
 */

function runCalc () {
if(operator == "+"){
	return Number(number) + Number(savedNumber);
}if(operator == "-"){
	return Number(number) - Number(savedNumber);
}if(operator == "*"){
	return Number(number) * Number(savedNumber);
}if(operator == "/"){
	return Number(number) / Number(savedNumber);
	}
};

function calcDisplay(){
  console.log('Current Number',number)
  console.log('saved Number',savedNumber)
  savedNumber = runCalc();
  console.log (savedNumber);
}

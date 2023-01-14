// defult argument
function sum(number1, number2) {
  // if second argument is not passed then default value of number2 is 0
  number2 = number2 || 0;
  return number1 + number2;
}
// if we pass single argument
const result = sum(10);
console.log(result);
/*
// if number2 argument is not passed then it take 0 as it's value otherwise it will take it's assign value
function sum(number1,number2=0){
    return number1+number2;
}

const result =sum(10);
console.log("result =",result);
const result2 =sum(10,5);
console.log("result2 =",result2);
*/
/*
// defult argument
function sum(number1,number2){
    // if second argument is not passed then default value of number2 is 0
    if (number2==undefined){
        number2=0;
    }
    return number1+number2;
}
// if we pass single argument
const result =sum(10);
console.log(result);*/

/*
normal function
function sum(number1,number2){
    return number1+number2;
}

const result =sum(10,5);
console.log(result);*/

let date= new Date();
// console.log(today);
let date2=Date();
console.log(date2);
let timeNow=Date.now();
console.log(timeNow);//millisecond
let dateParse=Date.parse('2023-01-17');
console.log(date.toDateString());//millisecond

let utcMinutes=date.getUTCMinutes();
console.log(utcMinutes);

let date3=date.getDate();
console.log(date3);

let day=date.getDay();
console.log(day);

let year=date.getYear();
console.log(year);

let stringDate=date.toString();
console.log(stringDate);

let dateStringDate=date.toDateString();
console.log(dateStringDate);
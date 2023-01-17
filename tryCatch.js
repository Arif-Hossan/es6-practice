/*
try...catch
try...finally
try...catch...finally
*/
let x = 5;
console.log("x=", x);
try {
  console.log("inside try");
  console.log(y);
  console.log("after error"); //this is not return in clg because it's after error
} catch (error) {
  console.log("inside catch");
  console.error(error);
  console.log("after error from catch");
} finally {
  console.log("from finally"); //always executed
}

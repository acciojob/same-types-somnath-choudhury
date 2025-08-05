function isSameType(value1, value2) {
  //your js code here
	 // Convert inputs to numbers
    const num1 = Number(value1);
    const num2 = Number(value2);
    
    const bothNaN = Number.isNaN(num1) && Number.isNaN(num2);
    if (bothNaN) return true;

    // Check if both values are of the same type after conversion
    return typeof num1 === typeof num2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

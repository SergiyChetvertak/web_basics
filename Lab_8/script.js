                                                        //lab 8.1.1
var varString = "Hello";
var varNumber = 2007;
var varObject = {name: "Sergiy", age: 18};
var varArray = [4, 3, 2, 8];
var varFunction = function() { return "cucumber"; };
console.log( varString , typeof varString);
console.log( varNumber , typeof varNumber);
console.log( varObject , typeof varObject);
console.log( varArray , typeof varArray);
console.log( varFunction , typeof varFunction);
                                                        //lab 8.1.2
varString = 7438;
varNumber = "time";
console.log( varString , typeof varString);
console.log( varNumber , typeof varNumber);
                                                        //lab 8.1.3
let art = 78;
let art1 = "78";
console.log(art, typeof art);
console.log(art1, typeof art1);
                                                        //lab 8.1.4
riri = parseInt("12", 8);
ryry = 12..toString(2);
console.log(riri);
console.log(ryry);
                                                        //lab 8.2.1
var foo = 1; 
function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 
    alert(foo); 
} 
bar();
                                                        //lab 8.2.2
var a = 1; 
function b() { 
    a = 10; 
    return; 
} 
b(); 
console.log(a);
                                                        //lab 8.3.1
var z = 12;
console.log(-z);
var c = 7;
console.log(++c);
var d = 9;
console.log(d--);

var x = +"5";
var y = -"5";
console.log(x - y);
console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
var v = +"56";
var t = +"65";
console.log(v == t);
console.log(v === t);
console.log(v != t);
console.log(v !== t);
console.log(v > t);
console.log(v <= t);
console.log(v && t);
console.log(v += "5");

var score = 75;
var click = score > 50 ? "A"
          : score > 80 ? "B"
          : score > 75 ? "C"
          : "D";
console.log(click);
var click1 = score > 90 ? "A"
          : score > 74 ? "B"
          : score > 198 ? "C"
          : "D";
console.log(click1);
                                                        //lab 8.3.2
const gert = "Нехай завжди буде сонце";
const gert1 = "Нехай завжди буде небо";
const gert2 = "Нехай завжди буде мама";
const gert3 = "Нехай завжди буду я";
var virsh = gert.concat("\n" , gert1 ,"\n" , gert2 ,"\n" , gert3 , "\n");
console. log(virsh)
                                                        //lab 8.4.1
function maxSubArraySum(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
const line1 = [7, 34, -12, 5, 1, -2, -25, 17, 0];
const line2 = [4, -3, 1, 17, 6];
console.log(maxSubArraySum(line1));
console.log(maxSubArraySum(line2));
                                                        //lab 8.4.2
function addBig(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry) {
    const x = i >= 0 ? +a[i--] : 0;
    const y = j >= 0 ? +b[j--] : 0;
    const s = x + y + carry;
    res = (s % 10) + res;
    carry = Math.floor(s / 10);
  }

  return res;
}
console.log(addBig("6789012345", "9876543210"));
                                                        //lab 8.4.3
function arrayDifference(a, b) {
  const result = [...a];
  for (const item of b) {
    const index = result.indexOf(item);
    if (index !== -1) {
      result.splice(index, 1);
    }
  }
  return result;
}
console.log(arrayDifference([3,1,5,3], [1,5]));
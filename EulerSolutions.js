/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Tip: Do not modify the original array but create a new one.

Create a function that calculates the sum of the two lowest numbers given an array of positive integers.
*/

function modify(arr){
       var mapCopy = [];
       var sum = 0;
       
       if(arr.length > 4){
         mapCopy = arr.sort(function(a,b){
               return a - b;
         });
         sum = mapCopy[0] + mapCopy[1];
         return   "Sum should be " + sum.toString();
       }else{
           return [];
       }
}

modify([52, 76, 14, 12, 4]);

// Key

function g (s){
        str = s;
        c = '';
        key = 'K';
for(i=0; i<str.length; i++) {
    c += String.fromCharCode(str[i].charCodeAt(0).toString(10) ^ key.charCodeAt(0).toString(10)); // XORing with letter 'K'
}
return c;
}
// DECODE HEX STRING TO BYTE ARRAY 
var DecodeHexStringToByteArray = function (hexString) {
   var result = [];
   while (hexString.length >= 2) { 
   if(!isNaN(parseInt(hexString.substring(0, 2), 16))){
       result.push(parseInt(hexString.substring(0, 2), 16));
     }
       hexString = hexString.substring(1, hexString.length);
   }
 
   return result;
}
//abcdef
var str = "pufferfish";
DecodeHexStringToByteArray(str);

// For fun
function fisHex(name) {

var filteredHex = name.replace(/[^a-f]/i,"").split("");
 
 if (filteredHex.length>0) {
   return filteredHex.map(function(val){
     return parseInt(val,16);
   }).reduce(function(a,b){
    return a ^ b;
  });
 }else {
   return 0
  }
}
function Hex(name) {
  return name.split('').
              filter(function(n){ if (/[a-f]/gi.test(n)){ return n;}}).
              reduce(function(sum, item){return sum ^ parseInt(item, 16) }, 0);
}

Hex('e');

var i = 0;
function take(i){
var by3 = i % 3 === 0
var by5 = i % 5 === 0;
var both = i % 3 === 0 && i % 5 === 0;
var bs = i  ? by3 : 'Fizz'? by5 : 'Buzz'? both: 'FizzBuzz';
  return bs;    
}
for( i = 0; i < 21;i++){
       var r = take(i);
       if(r){
          console.log(r) 
       }
    
    
}

// FIZZBUZZ. FIZZ, BUZZ

for (var i = 1; i < 21; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

// Compare arrays
function compare(a,b){
    var arr = [];
    var a = a.split('');
    var b = b.split('');

    var counter = 0;
    for(var i = 0; i < a.length;i++){
            if(a[i] === b[i]){
                arr.push(a[i]);
           }
   }
    console.log(arr.length);
    
}    
    
    compare('aaabaabaabbbba','aaabababbbbaa');
 
 
 
 /*The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?*/

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
        return false;
    }
        return true;
}
var sum = 0,arr = [];

for(var i = 0, j=0; i < 100;i++,j++){
        if(isPrime(i)){
             arr.push(i);
        }
}








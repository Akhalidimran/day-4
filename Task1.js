//anonymous function
//1.Print odd numbers in an array
let odd = [1,2,3,4,5,6,7,8,9]
for(var i = 0 ; i< odd.length ; i++){
    if(odd[i]%2!=0){
    console.log(odd[i]) 
   };
};
//2.Convert all the strings to title caps in a string array
let strings = ["hello world"];
let titleCase = (str) =>
 {
  let words = str.split("");
  return words.map((word) => word[0].toUpperCase());
  
};
let titleCasedStrings = strings.map(titleCase);
console.log(titleCasedStrings);
//3.Sum of all numbers in an array
function array(arg1,arg2,arg3,arg4,arg5){
    for(var i = 0 ; i< array.length ; i++){
         sum = sum + array[i];
};
};
let result = (1+2+3+4+5);  
console.log(result);
//4.Return all the prime numbers in an array
function isPrime(number) {
     for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var primeNumbers = numbers.filter(isPrime);
  console.log(primeNumbers);

 // IIFE function

//1.Return all the palindromes in an array
(function() {
    var isPalindrome = function(str) {
      for (var i = 0, len = str.length; i < len / 1; i++) {
        if (str[i] !== str[len - 1 - i]) {
          return false;
       }
      }
      return true;
    };
  
    var arr = [121, 12321, 4334, 2222];
    var palindromes = arr.filter(isPalindrome);
  
    console.log(palindromes);
  })();
 //2. Return median of two sorted arrays of the same size.
 (function () {
    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [6, 7, 8, 9, 10];
  
    function getMedian(arr1, arr2) {
      var mergedArray = arr1.concat(arr2);
      var sortedArray = mergedArray.sort((a, b) => a - b);
      var median = (sortedArray[Math.floor((sortedArray.length - 1) / 2)] + sortedArray[Math.ceil((sortedArray.length - 1) / 2)]) / 2;
      return median;
    }

    var median = getMedian(arr1, arr2);
    console.log(median);
 })();
//3. Remove duplicates from an array
(function()
 {
      var arr = [1, 2, 3, 1, 2, 4];
      var set = new Set(arr);
      var arr = Array.from(set);
      console.log(arr); 
  })();
 //4. Rotate an array by k times
 const nums = [1,2,3,4,5,6,7];
 const k = 3;

 function arrayRotation(arr, numberofshift){
    for (let i =0; i < numberofshift; i++){
        arr.unshift(arr.pop());
        console.log('step ${i + 1}:', arr);
    }
 }
console.log( arrayRotation(nums, k));
 

 
 










  







 








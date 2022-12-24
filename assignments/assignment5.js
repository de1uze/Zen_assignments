//odd number
arr = [];
for (let i = 1; i < 26; i++) {
if (i%2!=0) {
    arr.push(i);
}
}
console.log(arr);

//string title to caps
function tocaps(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence;
    }
    tocaps("my name is pratik");

//sum of numbers in array
var arr = [4, 8, 7, 13, 12]
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum is " + sum) 

//return all prime numbers in array
function retprime(num) {
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }    
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
   return numArray;
  }
retprime(10);

//return all palindrome strings from the array
function isPalindrome(s)
{
	let a = s;
	s = s.split('').reverse().join('');
    return s == a;
}
function PalindromicStrings(arr,N)
{
	let ans = [];
    for (let i = 0; i < N; i++) {
    if (isPalindrome(arr[i])) {
    ans.push(arr[i]);
		}
	}
	return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;


let s = PalindromicStrings(arr, N);
if(s.length == 0)
	document.write("-1");
for(let st of s)
	document.write(st," ");



//return median of two different arrays
function getMedian(ar1, ar2, n)
{
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    document.write("Median is "+ getMedian(ar1, ar2, n1));
else
    document.write("Doesn't work for arrays of unequal size");



//remove duplicates from an array

var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}

//rotate an array k times
function RightRotate(a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
            document.write(a[n + i - k] + " ");
        }
        else {

            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);
  

//odd numbers using arrow functions
let  odd=()=>{
    let arr = [];
    for (let i = 0; i < 11; i++) {
        if (i%2!=0) {
            arr.push(i);
            
        }
        
    }
    console.log(arr);
}
odd();

//arrow functions to return all title to caps
let tocaps=(string)=> {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
    }
tocaps("my name is pratik");

//sum of all numbers in array
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let calc = (arr) => {
    for (let index = 0; index <arr.length; index++) {
     sum = sum + arr[index];  
    
    }
    console.log(sum);
}
calc(arr);

//return prime numbers in array
let checkPrime=(number)=> {
    let arr = [];
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
          
          return false;
        }
      }
      arr.push[i];
    }
    console.log(arr);
  }
checkPrime(15);

//palindrome in an array using arrow functions
let isPalindrome=(s)=>
{
	let a = s;
	s = s.split('').reverse().join('');
    return s == a;
}
function PalindromicStrings(arr,N)
{
	let ans = [];
    for (let i = 0; i < N; i++) {
    if (isPalindrome(arr[i])) {
    ans.push(arr[i]);
		}
	}
	return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;


let s = PalindromicStrings(arr, N);
if(s.length == 0)
	document.write("-1");
for(let st of s)
	console.log(st," ");


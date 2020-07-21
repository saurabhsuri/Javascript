console.log('hello');
/*Using variables*/
var b="Hello World";
var a=45;
console.log(b,a);

/**
* @ I gt an error here initially cuz I had put up script tag in the <head> but it should've been
* before the closing body tag.
* @ The below line changes the text given within <p> tags using javascript.
*/
document.getElementById('someText').innerHTML="Hey There";

/**
* @ Using variables-: Taking input from the user and printing it on the screen
*/
//var age=prompt('What is your age?');
//document.getElementById('someText').innerHTML=age;

/* @ Numbers*/
var num=10;
num=num+21;
console.log(num);

/**
* @ Functions
*/
function func()
{
	console.log("This is a function");
}

func();

/*String concatenation*/

/*function greetings()
{
	var name=prompt("What is your name?");
	console.log("Good morning "+name);
}
greetings();*/

var num=0;
while(num<10){
	num=num+1;
	console.log(num);
}
/**
* @ You can use let instead of var
* @ Datatypes
*/

let yourAge=18; //number
let yourName="String"; // string
let fullName={first:'John', last:'Doe'}; //object
let result=true; //boolean
let fruits=['apple','banana','oranges']; //array
let random; //undefined
let nothing=null; // value null

/**
* @ Escape a line/Line break
* @ '\n'
*/
var fruitss="banana"+"\n"+"apple";
console.log(fruitss);

/**
* @ String Functions and arrays
* @ length
* @ indexOf()
*/
var fruits1="banana";
var len=fruits1.length;
console.log(len);

var fruits2=['apples','mango','oranges','grapes'];
var len1=fruits2.length;
console.log(len1);

console.log(fruits1.indexOf('t'));//will o/p index where it found first character that matches if found and -1 if not found

var fruits3=['apples','mango','oranges','grapes'];
console.log(fruits3.indexOf('oranges')); //if you type mang, it would o/p -1

/*46:30*/
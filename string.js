// String:- String are the collection of the characters.

var str = "this is a string";
var str1 = ' My name is vatsal garg';
var str2= ` this is an apple`;

console.log(str2);

var a= str.toUpperCase();
console.log(a);

var a = str.toLowerCase()
console.log(a);

var c=str.replace('is' ,'IS');
console.log(c);

var c= str.replaceAll('is', 'IS')
console.log(c);

var size= " this is a cat";
var length= size.length;
console.log(length);

for (var i = 0; i < str.length; i++) { 
    console.log(str[i]); 
}

var a= " this is a good boy"
var a= a.split("IS");
console .log(a); 

var a =7+4+"3"+"3*7"+0;
console.log(a);

var file = "profile.jpg";
var compressFile = file.split('.')[0]+'.zip';
console.log(compressFile);

var x ="hello";
var y ="coder";
var z= x+" "+y;
console.log(z);
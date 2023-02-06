// 1#. Print numbers from 1 to 10



for(  var i=0; i<=10; i++)
{

    console.log(i);


}
// 2#. Print the odd numbers less than 100

for (var i=0; i<=100;  i+=2){
    console.log(i);
}

// 3#.Print the multiplication table with 7

for( var i=0; i<=10; i++){
    var row= "7 *" + i + " = " + 7 * i;
    console.log(row);
}

// 4# Print the multiplication tables with numbers from 1 to 10

for(var i=0; i<=10; i++){
    printTable(i);
    console.log('')
    
}

function printTable(i) { 
for (var i=0; i<=10; i++){
    var row= i + "*" + i + "=" + i *i;
    console.log(row)

}};

//#5 Calculate the sum of numbers from 1 to 10
var sum=0;
for (var i=0; i<=10; i++){
    sum= sum+i;
    //console.log(sum); if I console here it will show me 1, 3, 6, 10.... like that.

}
console.log(sum);

//#6 Calculate 10!
//Reminder n! = 1 * 2 * ... * n
var factorial=1
for(var i=1; i<=10; i++){

    factorial= factorial*i

}
console.log(factorial);

//#7 Calculate the sum of odd numbers greater than 10 and less or equal than 30

//Calculate the sum of even numbers greater than 10 and less or equal than 30

sum=0
for(var i=11; i<=30; i++){
    sum+=i

}
console.log(sum);

newSum=0;

for (var i=11; i<=30; i+=2){
    newSum=newSum+i;
}
console.log(newSum);

//#8 Create a function that will convert from Celsius to Fahrenheit
//Reminder: C = F – 32 / 1.8 
//or {(c/5= (f-32)/9)}
function celsiusTofarenhite(c){
    var farenhite=  (c*9)/5+32
    return farenhite;
}
var result= celsiusTofarenhite(20);

console.log(result);

//#9 Coding challenge #9
//Create a function that will convert from Fahrenheit to Celsius
//Reminder: C = F – 32 / 1.8

function farenhiteToCelsius(f){
    var  celsious=(f-32/9)*5
    return celsious
}
var r=  farenhiteToCelsius(20)
console.log(r);


//#10 Calculate the sum of numbers in an array of numbers.

 function sumOfArray (numbers){
    var sum=0;
    for( i=0; i< numbers.length; i++){
        var sum= sum+ numbers[i];
    }
    return sum;

 }

 var numbers= [34, 3, 4, 3, 6, 64, 33, 45, 48]
 var total= sumOfArray(numbers);

 console.log(total);

 //#11 Calculate the average of the numbers in an array of number

 function sumArray(n){
        x= n.length
        sum=0;
    for(var i=0; i<x; i++){
        var sum= sum+ n[i]
        
    }
    
    return sum/x
 }
 var values= [10, 20, 30, 40, 50, 60]
 var totalresult= sumArray(values)

 console.log(totalresult);

 //#11 Create a function that receives an array of numbers and returns an array containing only the positive numbers.
//Requirement: Use a “for” loop

function getPositive(numbers){
    let positiveNumbers=[];
   
    for(let  i=0; i<=numbers.length; i++){

      if(numbers[i] >=0){

        positiveNumbers.push(numbers[i])
        
      }
      

    }
    return positiveNumbers

    
}
let  arr= [4, 7, 22, -5, -4, -3, 89, 99, 00, 55, 67, ]
    let positiveNumbers= getPositive(arr);
    console.log(positiveNumbers);
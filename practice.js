// var result = 89;
// if (result > 0) {
//   if (result < 33) {
//     console.log("wow  tumi fail korco !! Now  Breakup dont call me again");
//   } else if (result >= 33 && result < 40) {
//     console.log("You just passed this exam (kono moto)");
//   } else if (result >= 40 && result < 50) {
//     console.log("your grade is D");
//   } else if (result >= 50 && result < 60) {
//     console.log("your grade is C");
//   } else if (result >= 60 && result < 70) {
//     console.log("your grade is B");
//   } else if (result >= 70 && result < 80) {
//     console.log("your grade is A-");
//   } else if (result >= 80 && result < 90) {
//     console.log("your grade is A+ ");
//   } else if (result > 90 && result <= 100) {
//     console.log("your grade is  excillent ");
//   } else {
//     console.log("cant not found please try again yoru grade range is 0-100");
//   }
// } else {
//   console.log("please try with positive number ");
// }


// var Tom = "N/A" ;
// var Jane = 66 ;
// var Peter = 95 ;
// var John = 56 ;
// var Me = 40 ;

// if(Tom <= 39){
//     console.log("Tom got F grade")
// }
// else if(Tom >= 40 && Tom < 50){
//     console.log("Tom got D grade")
// }
// else if (Tom >=50 && Tom < 60){
//     console.log("Tom got C grade")
// }
// else if(Tom >= 60 && Tom < 70){
//     console.log("Tom got B grade")
// }
// else if (Tom >= 70 && Tom < 80){
//     console.log("Tom got A grade")
// }
// else if(Tom >= 80){
//     console.log("Tom got A+ !!!!!Excellent!!!!!!!")
// }
// else {
//     console.log("Tom has not attended the exam")
// }



// var fruits = ['Apple', 'Banana', 'Orange'];

// // var Apple = fruits.indexOf('Apple');

// // console.log(Apple);

// fruits.pop();
// fruits.push("Watermelon");
// console.log(fruits);



// var num1 = 13 ;
// var num2 = 9 ;
// var num3 = 5 ;

// if ( num1 > num2 && num1 > num3){
//     console.log("Number 1 is the largest")
// }
// else if ( num2 > num3){
//     console.log("Number 2 is the largest")
// }

// else {
//     console.log("Number 3 is the largest")
// }


// var one =8 ;
// var two =8 ;
// var three = 9 ;

// if (one == two || one == three || two == three){
//     console.log('This is a Isosceles')
// }

// else {
//     console.log('This is nothing')
// }


// var num = 55 ;

// if ( num % 2 != 1){
//     console.log("even number")
// }

// else{
//     console.log("odd number")
// }



// for ( i = 0 ; i < 4 ; i ++){
//     console.log('ajke amar mon valo nei.')
// }


// for ( i = 58 ; i <= 98 ; i ++){
//     console.log(i)
// }

// for ( i = 412 ; i <= 456 ; i ++){
//     if( i % 2 == 0)
//     console.log(i)
// }

// for ( i = 581 ; i <= 623 ; i ++ ){
//     if ( i % 2 != 0)
//     console.log(i)f
// }

// var learnedThings = ['js', 'string', 'numeric', 'boolean', 'array', 'push']

// for ( i = 0 ; i < learnedThings.length ; i ++){
//     console.log(i)
// }

// var myPhones = ['symphony', 'mycell', 'oppo', 'samsung', 'iphone', 'pixel']

// i = 0 ; 
// while (i < myPhones.length){
//     console.log(myPhones[i]) ;
//       i++ 
// }




// for ( i = 30 ; i <= 86 ; i++){
//     console.log(i);
//     if(i == 44)
//     break
// }

// var booksPrice = ['50', '90','85', '200', '145', '285', '300', '111']

// for ( i = 0 ; i < booksPrice.length ; i++ ){
    
//     if(booksPrice[i] >= 200)
//     continue ;
//     console.log(booksPrice[i]);
// }





// var x ;

// console.log(x);

// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2 ;
// }

// var total = add(80, 20)
// console.log('total hobe', total)

// function getAverage(assignment1, assignment2, assignment3){
//     var total = assignment1 + assignment2 + assignment3 ;
//     var assignQuantity = 3 ;
//     const average = total / assignQuantity ;

//     return average ;
// }

// const assignment1 = 55 ;
// const assignment2 = 58 ;
// const assignment3 = 60 ;

// const myAverage = getAverage(assignment1, assignment2, assignment3)
// console.log("Bau tor result asche re", myAverage);

// function add(number1, number2){
//     var sum = number1 + number2 ;
//     return sum ;
// }

// var result1 = 40 ;
// var result2 = 50 ;

// var mainResult = add(result1, result2);
// console.log("ne di ki korechit", mainResult);


// function inchToFeet(inches){
//     var feet = inches / 12 ;
//     return feet ;
// }

// const myInches = 66 ;
// const myFeet = inchToFeet(myInches);
// console.log("Tahole tomar height hocche-", myFeet);

// var x = 90 ;
// var y = 2 ;
// var z = x % y ;
// if( z == 0 ){
//     console.log('this is a even number')
// }
// else if( z !== 0){
//     console.log( 'this is an odd number')
// }
// else{
//     console.log('this is nothing')
// }


// function evenOrOdd(number){
//     const varify = number % 2 ;
//     if( varify === 0){
//         return true ;
//     }
//     else{
//         return false ;
//     }
// }

// var x = evenOrOdd(99);
// console.log('check out', x);

// function varifyYear(year){
//     const varify = year % 4 ;
//     if( varify == 0){
//         return true ;
//     }
//     else {
//         return false ;
//     }
// }

// var checkYear = varifyYear(1900);
// console.log('checked', checkYear);

// function sumOfAnArray(numbers){
//     let sum = 0 ;
//     for( let i = 0 ; i < numbers.length ; i++){
//         const theValues = i ;
//         const elements = numbers[theValues] ;
//         sum = sum + elements ;
//         // console.log(theValues, elements, sum) ;
//     }
//     return sum ;
// }

// const theArray = [11, 12, 23, 24, 45, 55, 56, 77, 67, 88] ;


// function theOddNumbers(numbers){
//     let temp = [] ;
//     for( let i = 0 ; i < numbers.length ; i++){
        
//         const theValues = i ;
//         const elements = numbers[theValues] ;
//         if( elements % 2 !==0){
//             temp.push(elements);
//             // console.log(theValues, elements) ;
//         }
//     }
//     return temp ;
// }

// const theArray = [11, 12, 23, 24, 45, 55, 56, 77, 67, 88] ;
// const x = theOddNumbers(theArray) ;
// const oddNumberSum = sumOfAnArray(x);
// console.log(oddNumberSum) ;

// function getOddNumbers(numbers){
//     let theOddNumbers = [] ;
//     for( let i = 0 ; i < numbers.length ; i++){
//         const valuesAre = i ;
//         const elementsAre = numbers[valuesAre] ;
//         if( elementsAre % 2 ===1){
//             theOddNumbers.push(elementsAre) ;
//         }
//         // console.log(valuesAre, elementsAre)
//     }
//     return theOddNumbers ;
// }



// function sumOfTheOdds(numbers){
//     let sum = 0 ;
//     for( let i = 0 ; i < numbers.length ; i++){
//         const valuesAre = i ;
//         const elementsAre = numbers[valuesAre] ;
//         sum = sum + elementsAre ;
//     }
//     return sum ;
// }

// const givenArray = [12, 23, 45, 66, 77, 87, 44, 63]
// const x = getOddNumbers(givenArray) ;
// console.log(x) ;
// const y = sumOfTheOdds(givenArray) ;
// console.log(y) ;

// Sum of  1 + 2 + +3 + 4 + 5 + 6 + 7 + 8 + 9 + 10


// function totalSum(numbers){
//     let sum = 0 ;
//     for( let i = 1 ; i <= numbers.length ; i++){
//         sum = sum + i ;
//         console.log(i, sum)
//     }
//     return sum ;
// }

// const givenArray = [12, 23, 45, 66, 77, 87, 44, 63]
// let x = totalSum(givenArray) ;
// console.log(x) ;

// function sum ( hi ){
//     console.log(hi)
// }

// sum('nanaaaaaaa')

// function sum ( a, b){
//     var z = a + b ;
//     console.log(z);
// }

// var x = 86 ;
// var y = 99 ;
// sum (x, y)

// function a ( x ){
//     var z = ['ASDF', 'sdfas', 'sdasd', 'asdf']
//     var t = ['tdfs', 'fas', 'fgsdf']

//     if ( x == 'z'){
//         return z ;
//     }
//     else if ( x == 't'){
//         return t ;
//     }
//     else {
//         return "nai" ;
//     }
// }

// var s = a( 't' )
// console.log(s);

// function saySorry (number) {
//     for ( i = 0 ; i <= number ; i++){
//         console.log('sorry babe')
//     }
// }
// const x = saySorry(10) ;
// console.log(x) ;

// const x = '123456789' ;
// const y = x.slice(3, 7) ;
// console.log(y);


// if ( a > b && a > c){
//     console.log ( 'a is the winner')
// }
// else if ( b > a && b > c){
//     console.log ('b is the winner')
// }
// else {
//     console.log ('c is the winner')
// }



// function getMax ( ){
//     a = 45 ;
//     b = 55 ;
//     c = 99 ;
//     if ( a > b && a > c){
//         return a ;
//     }
//     else if ( b > a && b > c){
//         return b ;
//     }
//     else {
//         return c ;
//     }
// }

// const x = getMax() ;
// console.log (x);


// function getMax (a){
//     const x = 89 ;
//     const y = 56 ;
//     const z = 11 ;
//     if ( x > y && x > z ){
//         return ('x', x) ;
//     }
//     else if ( y > z && y > x){
//         return ('y', y) ;
//     }
//     else {
//         return ('z', z );
//     }
// }

// const x = 44 ;
// const y = 55 ;
// const z = 11 ;
// const m = getMax (x, y, z) ;
// // const n = getMax (y);
// // const p = getMax (z) ;

// console.log (m);
// // console.log (n);
// // console.log (p);

// function marks (mark){
//     if ( tr > sd && tr > gk ){
//         console.log ( "tr", tr)
//     }
//     else if ( sd > tr && sd > gk){
//         return "sd", sd ;
//     }
//     else {
//         return "gk", gk ;
//     }
// }

// const tr = 99 ;
// const sd = 55 ;
// const gk = 22 ;

// const getMax = marks ( tr, sd, gk) ;
// console.log (getMax) ;


// function getTallest (numbers){
//     let theLargest = numbers[0] ;
//     for ( let i = 0 ; i < numbers.length ; i++){
//         const valusAre = i ;
//         const theElements = numbers[valusAre] ;
//         if ( theElements > theLargest )
//         theLargest = theElements ;
//     }
//     return theLargest ;
// }


// const centemeters = [83, 45 ,65, 64, 36, 75, 89] ;
// const theTallest = getTallest(centemeters) ;
// console.log ("the tallest person is-", theTallest) ;

// function getLowest (numbers){
//     let xx = numbers[0] ;
//     for ( let i = 0 ; i < numbers.length ; i++){
//         const theValues = i ;
//         const theElements = numbers[theValues] ;
//         if ( theElements < xx){
//             xx = theElements ;
//         }
//     }
//     return xx ;
// }

// const inches = [95, 8, 66, 67, 98, 45] ;
// const theLowest = getLowest(inches) ;
// console.log (theLowest) ;


// function whoIstheTallest (inputs){
//     let theLargestIs = inputs [0] ;
//     for ( let i = 0 ; i < inputs.length ; i++){
//         const valuesAre = inputs[i] ;
//         const elementsAre = valuesAre ;
//     if ( elementsAre > theLargestIs) {
//         theLargestIs = elementsAre ;
//     }
//     }
//     return theLargestIs ;
// }

// const inchesAre = [44, 34, 56, 77, 44, 22, 100] ;
// const theTallest = whoIstheTallest(inchesAre) ;
// console.log ( "So the tallest person is - ", theTallest) ;

// const x = "0123456789" ;

// console.log(x.substring(2,5))

// const x = [0,1,2,3,4,5,6,7,8,9] ;
// const y = x.splice(2,5) ;
// console.log(y)


// const xal = ['a', 'b', 'c', 'd', 'a', 'c', 'v', 't', 'x', 'a', 'n', 'b', 'c', 'a'] ;

// function remove (nam){
//     let noya = [] ;
//     for ( let i = 0 ; i < nam.length ; i ++){
//         const asol = nam[i] ;
//         if ( noya.includes(asol) === false){
//             noya.push(asol) ;
//         }
//     }
//     return noya ;
// }
// const you = remove (xal) ;
// console.log (you) ;

// function removeKor (names) {
//     let real = [] ;
//     for ( let i = 0 ; i < names.length ; i ++){
//         const valuesAre = names [i] ;
//         if ( real.includes(valuesAre) === false){
//             real.push(valuesAre) ;
//         }
//     }
//     return real ;
// }

// const namesAre = ['geekay', 'tri', 'sudev', 'lipon', 'tri', 'geekay', 'sujon'] ;
// const realList = removeKor (namesAre) ;
// console.log(removeKor(realList)) ;

// function showOutput (numbers){
//     let suppose = [] ;
//     for ( let i = 0 ; i <= 50 ; i ++){
//         const numbersAre = numbers [i] ;
//         if ( numbersAre % 3 == 0){
//             console.log('foo')
//         }
//     }
// }


// showOutput()

// for ( let i = 0 ; i <= 50 ; i ++){
//     if (i % 3 ===0 && i % 5 ===0){
//         console.log ('foobar')
//     }
//     else if ( i % 5 === 0){
//         console.log ('baar')
//     }
//     else if ( i % 3 ===0 ){
//         console.log ('foo')
//     }
//     else {
//         console.log (i)
//     }
// }



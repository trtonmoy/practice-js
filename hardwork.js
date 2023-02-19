// let name = 'tonmoy' ;
// let age = 23 ;
// let calmPerson = true ;
// console.log (typeof(name)) ;
// console.log ( typeof(age)) ;
// console.log ( typeof (calmPerson)) ;

// let ages = [ 22, 44, 55, 66, 23, 66, 42] ;
// console.log (Array.isArray(ages)) ;
// console.log ( ages [4]) ;
// ages[3] = 99 ;
// console.log (ages) ;

// const ages = [2, 3, 4, 5, 6, 7] ;
// ages [4] =99 ;
// console.log (ages) ;

// let a = 44 ;
// let b = 54 ;
// let c = a + b ;
// console.log ( c );
// let d = a*b ;
// console.log ( d ) ;
// let e = a/b ;
// console.log ( e ) ;
// let f = a - b ;
// console.log ( f ) ;
// let x = a++ ;
// let y = b-- ;
// console.log ( a++ ) ;
// console.log ( b-- ) ;

// let a = 7 ;
// while ( a <= 19 ){
//     a ++ 
//     if ( a % 2 == 1){
//         console.log ( a ) ;
//     }
// }

// let ages = [1,233,3,4,5,446,7,344,334,22,35] ;
// for ( let i = 0 ; i < ages.length ; i ++){
//     console.log (ages[i]) ;
// }

// for ( let elements of ages){
//     console.log (elements) ;
// }

// for ( let i = 0 ; i < ages.length ; i ++){
//     if (ages[i] > 100){
//         console.log(ages[i])
//     }
// }

// function bestFriend (names) {
//     let theLargest = names [0] ;
//     for ( let i = 0 ; i < names.length ; i ++) {
//         const valuesAre = names[i] ;
//         if ( valuesAre > theLargest  ) {
//            theLargest = valuesAre ;
//         }
//     }
//     return theLargest ;
// }

// const friends = [ 11,22,44,55,77,88,99,15,85 ] ;
// const getTheName = bestFriend ( friends ) ;
// console.log ( getTheName ) ;

// function getPositives ( num ) {
//     let positives = [] ;
//     for ( let i = 0 ; i < num.length ; i ++) {
//         if ( num[i] > 0 ) {
//             positives.push (num [i]) ;
//         }
//         else {
//             break ;
//         }
//     }
//     return positives ;
// }

// const numbers = [ 11, 55, 77, 42, -65, 25, 35 ] ;
// const positiveNumbers = getPositives ( numbers) ;
// console.log ( positiveNumbers ) ;

// A function which returns the last character of a given string
// function returnLast(arr) {
//     return arr.at(-1);
//   }
  
//   let invoiceRef = "myinvoice01";
  
//   console.log(returnLast(invoiceRef)); // '1'
  
//   invoiceRef = "myinvoice02";
  
//   console.log(returnLast(invoiceRef)); // '2'

// let x = 'Hi my name is Tonmoy means Tonmoy'; 
// let y = x. replace(/Tonmoy/g, 'Jeet') ;
// console.log ( x, 'and', y) ;
  

// function getReverse (word) {
//     // let doSplit = word.split('')
//     let divide = "" ;
//     for ( let i = word.length-1 ; i >= 0 ; i--){
//         let valuesAre = word[i] ;
//         divide = divide + valuesAre ;
//     }
//     // let result = divide.join('') ;
//     return divide ;
// }

// const str = "GeeksforGeeks" ;
// console.log (getReverse(str)) ;

// function getVowel ( letter ) {
//     if ( letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ){
//         return 'vowel' ;
//     }
//     else {
//         return 'consonant' ;
//     }
// }
// const x = 'a' ;
// const y = getVowel (x) ;
// console.log (y) ;

// const totalCost = [
//     { name: "Dano Milk", price: 500 },
//      { name: "Taaza Tea", price: 200},
//       { name: 'Fresh Sugar', price:300}
//      ]

//      console.log (totalCost.price) ;

// function addition ( num ) {
//     let sum = 1 ;
//     for ( let i = 1 ; i<= num ; i++) {
//         sum = sum * i ;
//     }    
//     return sum ;
// }
// const x = 5 ;
// const y = addition ( x ) ;
// console.log ( y ) ;

// for ( let i = 1 ; i <= 10 ; i++)
// console.log (i + 'x' + '3', i*3);


// function getAnswer (m, n) {
//     if ( m > n ) {
//         let take = '' ;
//         for ( let i = m.length-1 ; i >= 0 ; i--) {
//             take += m[i] ;
//         }
//         return take ;
//     }    
//     else {
//         let leh = "" ;
//         for ( let i = n.length-1 ; i >= 0 ; i --) {
//             leh += n[i] ;
//         }
//         return leh ;
//     }
// }

// const a = 'tonmoy' ;
// const b = 'trishna' ;
// const x = getAnswer (a, b) ;
// console.log ( x ) ;

// function convert (num) {
//     const a = 0.001 ;
//     let x = a * num ;
//     return x ;
// }

// console.log(convert(3000)) ;

// function getReal (name) {
//     if ( name.indexOf('p') !== -1){
//         return 'ho bau' ;
//     }
//     else {
//         return 'false' ;
//     }
// }

// console.log(getReal('ssaas')) ;

// let x = [{fname:'John',},'fname'] ;
// console.log(typeof(x[0])) ;

// function pt (arr) {
//     if (  arr[1] === 'string' ){
//         return 'yes'
//     }
//     else {
//         return 'no' ;
//     }    
// }
// const m = pt(x) ;
// console.log(m) ;

// function findingBadData ( number ) {
//         let datas = [] ;
//     for ( let i = 0 ; i < number.length ; i ++) {
        
//         const valuesAre = number[i] ;
//         if ( valuesAre < 0 ) {
//             datas.push(valuesAre) ;
//         }
//         else if ( valuesAre > 0) {
//             return 'nai nai nai ani';
//         }
//     }
//     return datas.length ;
    
// }
// const hello = 'hel' ;
// const lol = findingBadData (hello) ;
// console.log(lol) ; 

function mindGame ( number ) {
    if (number > 0) {
     return ((number*3)+10)/2 - 5 ;
    }
 else {
     return 'please provide a valid value!!!'
 }
 }

 


 function evenOdd ( str ) {
    if ( typeof(str) !== 'string') {
        return 'You should provide a "string" as a parameter!!' ;
    }
    else if ( str.length % 2 == 0 ) {
        return 'even' ;
    }
    else if ( str.length % 2 !== 0 ) {
        return 'odd' ;
    }
}

 


function isLGSeven ( number ) {
    const substruction = number - 7 ;
    if ( typeof (number) !== 'number') {
        return 'I am sorry. I am not sure what you asking for...... '
    }
    
    else if( substruction < 7 ) {
        return substruction ;
    }
    else {
        return number *2 ;
    }
}



function findingBadData (number) {
    let badData = [] ;
    for ( let i = 0 ; i < number.length ; i++ ) {
        const datasAre = number[i] ;
        if ( datasAre < 0 ) {
            badData.push(datasAre) ;
        }
        else if ( typeof(number) == 'string' ) {
            return 'please enter a valid numeric figure!!!!!'
        }
    }
    return badData.length ;
}



function gemsToDiamond ( gem1, gem2, gem3 ) {
    const gem1Power = 21 ;
    const gem2Power = 32 ;
    const gem3Power = 43 ;
    const firstDiamondQuanity = gem1 * gem1Power ;
    const secondDiamondQuanity = gem2 * gem2Power ;
    const thirdDiamondQuantity = gem3 * gem3Power ;
    const totalDiamond = firstDiamondQuanity + secondDiamondQuanity + thirdDiamondQuantity ;
    if ( totalDiamond > 1000*2) {
        const weGot = totalDiamond - 2000 ;
        return weGot ;
    }
    else if ( totalDiamond < 1000*2 ) {
        return totalDiamond ;
    }
    else {
        return 'Something is not a valid. Please check your input values!!'
    }
}

console.log(gemsToDiamond(20,200,)) ;
// function unitary (n1, n2, n3){
//     const a = 5 ;
//     const b = 3 ;
//     const c = 10 ;

//     const m = n1 * a ;
//     const n = n2 * b ;
//     const o = n3 * c ;

//     const z = m + n + o ;

//     return z ;
// }

// const x = unitary(2, 2, 2) ;
// console.log ( "So, the total cost is : ", x)

// const phones = [
//     { name : 'iphone', camera : 13, price : 90000,},
//     { name : 'Samsung', camera : 100, price : 80000 },
//     { name : 'google', camera : 12, price : 70000,},
//     { name : 'nokia', camera : 40, price : 50000,}
// ] ;

// function cheapestPhone (take) {
//     let theCheapest = take[0] ;
//     for ( let i = 0 ; i < take.length ; i++){
//         const mySelection = take [i];
//         if ( mySelection.price < theCheapest.price ){
//             theCheapest = mySelection ;
//         }
//     }
//     return theCheapest ;
// }

// const myPhone = cheapestPhone (phones) ;
// console.log( myPhone) ;

// function getDiscount (ticketQuantity) {
//     const oneHundredPrice = 100 ;
//     const twoHundredPrice = 50 ;
//     const thirdHurndredPrice = 30 ;
//     if ( ticketQuantity <= 100 ){
//         const oneHundredTicket = oneHundredPrice * ticketQuantity ;
//         return oneHundredTicket
//     }
//     else if ( ticketQuantity > 100 && ticketQuantity <= 200){
//         // const firstHundred = ticketQuantity - 100 ;
//         const firstHundredCost = oneHundredPrice * 100 ;
//         const remainTicketAre = ticketQuantity - 100 ;
//         const remainTicketCost = remainTicketAre * 50 ;
//         const totalCost = firstHundredCost + remainTicketCost ;
//         return totalCost ;
//     }
//     else if ( ticketQuantity > 200){
//         const firstHundredCost = oneHundredPrice * 100 ;
//         const secondHundredConst = 100 * 50 ;
//         const remainTicketAre = ticketQuantity - 200 ;
//         const remainTicketCost = remainTicketAre  * thirdHurndredPrice ;
//         const total = firstHundredCost + secondHundredConst + remainTicketCost ;
//         return total ;
//     }
// }

// const tickets = getDiscount (500) ;
// console.log ( "Vaiya apka bill huyaaa : ye lo ji-- - -", tickets) ;

// let a = [1,2,3,4,5,6,7,8,9]

// for ( let i = 0 ; i <= a.length ; i ++ ){
//     if ( i > 5){
//         console.log( i )
//     }
// }

// function reverseWay ( giveMe ) {
//     let reverse = "" ;
//     for ( let i = giveMe.length - 1 ; i >= 0 ; i --){
//         let valuesAre = giveMe[i] ;  
//         reverse = reverse + valuesAre ;
//     }
//     return reverse ;
// }

// const sentence = "I am Tonmoy" ;
// const answer = reverseWay (sentence) ;
// console.log ( answer ) ;

// function reverseWord ( giveMe ){
//     const divide = giveMe.split(' ') ;
//     let takeHere = [] ;
//     for ( let i = divide.length - 1 ; i >= 0 ; i -- ){
//          const valuesAre = divide[i] ;
//          takeHere.push(valuesAre) ;
//     }
//     const results = takeHere.join(' ') ;
//     return results ;
// }

// const sentence = "once upon a time there was a Lion" ; 
// const reversedWords = reverseWord ( sentence ) ;
// console.log (reversedWords) ; 
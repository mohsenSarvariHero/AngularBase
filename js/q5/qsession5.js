console.log("session 5")

let numbers = [4,5,10,20,12,14,16,13,7]

// for(let i of numbers){
//     console.log(i)
// }

numbers.forEach((item)=>{
    console.log(item)
})



// 1 to 20 
// for(let i = 1 ; i<= 20 ; i++){
//     console.log(i)
// }

//arr= [1,2,3,4,5,6,7,8,9,10]
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)


//foreach
// 
let arr2= [10,2,6,8,12,15,20]
// let arr3=[]
// for(let i in arr2){
//     if(arr2[i] % 5 === 0 ){
//          arr3.push(arr2[i]);
//     }else{
//         console.log("not")
//     }

// }
let newFilter = arr2.filter((item)=>{
    return item % 5 === 0
})
console.log("filter "+newFilter)
//square 2  // [25,4,9,16,36]

let numberss = [5,2,3,4,6] 
// let newArr=[]
// for(let i of numberss){
//     let result = i * i;
//     newArr.push(result)
// }
// console.log(newArr)

let newAr = [numberss.map((item)=>{
    return item * item
})]
console.log(newAr)

let news = [];
numberss.forEach((item)=>{
    news.push(item * item)
})
console.log(news)

let numberNew = [2,4,5,7,10,3,9]








// numbers.forEach((item)=>{console.log(item)})



// function adding (){
//     let arr= [10,50,10]
//     arr.push([50,30])
//     console.log(arr)
// }
// adding()


// let odds = [];
// let evens=[]
// function odEv(array){
//     for(let i of array){
//         if(i % 2 == 0 ){
//             evens.push(i)
//         }else{
//             odds.push(i)
//         }
//     }
//     console.log(" evens " + evens)
//     console.log(" odds " + odds)
// }
// odEv(numbers)

// let oddst = [];
// let evenst=[]
// numbers.forEach((item)=>{
//     if(item % 2 == 0){
//         evenst.push(item)
//     }else{
//         oddst.push(item)
//     }
// })
// console.log(oddst)
// console.log(evenst)


// let number2 = [2,3,5,4,1]

// for(let j of number2){
//     let newArray=[]
//     let square = j * j
//     newArray.push(square)
// }
// console.log(newArray)
// let newArray=[]
// for(let j of number2){
    
//     let square = j * j
//     newArray.push(square)
// }
// console.log(newArray)

// let newNumber2 = number2.map((n)=>{
//     return n * n
// })
// console.log(newNumber2)

// let array2 = ['ad' , 1,2,'sdff',"dwer",4]

// let newNumber4 = array2.map((n)=>{
//     if(typeof n === "number"){
//         return "not number"
//     }else{
//         return n 
//     }
    
// })
// let news=[]
// number2.forEach((n)=>{
//     let res = n * n
//     news.push(res)
// })
// console.log(news)


// let array2 = ['ad' , 1,2,'sdff',"dwer",4]
// let newArr2 = []
// array2.forEach((n)=>{
//     if(typeof n === "number"){
//          newArr2.push("not number")
//     }else{
//         newArr2.push(n) 
//     }
    
// })
// console.log(newArr2)


// const information = [
//     {name : "zahra" , age : 22 , city : "mashhad"},
//     {name : "faeze" , age : 22 , city : "mashhad"},
//     {name : "narges" , age : 23 , city : "tehran"},
//     {name : "zahra" , age : 22 , city : "mashhad"},
// ]
// let newInfo = information.map((info)=>{
//     return {...info, age : info.age + 1}
// })
// console.log(newInfo)


// //

// let numberss = [2,4,1,5,3,8]
// let newNum = numberss.filter((n)=>{
//     return n % 2 === 0
// })
// console.log(newNum)

// let numberss = [2,4,1,5,3,8]
// let newNum = numberss.filter((n)=>n % 2 === 0)
// console.log(newNum)

// let Mashhad = information.filter((info)=>{
//     return info.city === "mashhad"
// })
// console.log(Mashhad)
// let Mashhad = information.filter((info)=>{
//     return info.city.includes("mashhad")
// })
// console.log(Mashhad)


// //
let num3 = [1,2,3]
// let sum = 0;
// for(let k of num3){
//     sum = sum + k
// }
// console.log(sum)
// let total = num3.reduce((sum,k)=>{
//     return sum + k
// })
// console.log(total)
let total = num3.reduce((sum,k)=>{
    return sum + k
},0)
console.log(total)
num3 = []
// let total = num3.reduce((sum,k)=>{
//     return sum + k
// },0)
// console.log(total)

let words = ['hello', ' : ', "mohsen"]
let strHello= words.reduce((result , currentWord)=>{
    return result + currentWord
},'')
console.log(strHello)

//exercise


// 1- Find Prime Numbers in an Array
// Given an array of numbers, use a loop to find prime numbers and store them in a new array
// let numbers = [2, 3, 4, 7, 10, 13, 17, 20, 23, 29];

// 2- Replace Even Numbers with "EVEN" and Odd Numbers with "ODD"  
//  Transform an array so that even numbers are replaced with `"EVEN"` and odd numbers with `"ODD"`.  
//  let numbers = [3, 8, 15, 22, 7, 10, 19];

// 3- Find the Longest Word in an Array
// Given an array of words, find the longest word.  
// let words = ["apple", "banana", "strawberry", "kiwi", "watermelon"];

// 4- Reverse Each Word in an Array  
// Given an array of words, return a new array where each word is reversed.  
let wordss = ["hello", "world", "JavaScript", "coding"];
const rev = wordss.map((item) => {
    return item.split("").reverse().join(""); // Fix: Split, reverse, and join
});
console.log(rev);
// 5- Count the Occurrences of Each Letter in a String
// Given a string, count how many times each letter appears.  
let str = "javascript";
let chars = {}; // Use an object to store character counts

for (let ch of str) {
    if (ch in chars) {
        chars[ch] += 1; // Increment count if character exists
    } else {
        chars[ch] = 1; // Initialize count if character appears for the first time
    }
}

console.log(chars);

// 6-
//  Filter Objects by a Specific Key Value
//  Given an array of people, filter those whose age is greater than 25.
//  const people = [
//     { name: "Ali", age: 22 },
//     { name: "Sara", age: 28 },
//     { name: "Reza", age: 30 },
//     { name: "Nina", age: 24 }
// ];


// 7-
// Find the First Duplicate in an Array 
// Find the first repeating number in an array.  
 
let numbersA = [2, 4, 5, 7, 8, 4, 9, 10, 5];

let newArr = [];
for (let item of numbersA) {
    if (newArr.includes(item)) {
        console.log(`First duplicated number: ${item}`);
        break; // Stop checking after the first duplicate
    } else {
        newArr.push(item);
    }
}

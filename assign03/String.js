// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];
console.log(statesInIndia.filter(name=>!/^[aeiou]/i.test(name)))
let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
console.log(str.split(' ').slice().reverse().join(' '))


// Q3) 
let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
string = string.split("")
string.splice(3,0,'ONES')
console.log(string.join(''))


// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// const myString = "Lorem ipsum dolor sit amet";
const myString = "Hello World";
String=myString.split(' ').join('')
let vowel=0;
let constants=0;
for( i of String){
    if(/[aeiou]/i.test(i)){
        vowel++;
    }
    else{
        constants++;
    }
}
console.log(`vowels are ${vowel} and nr of contants are ${constants}`)

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
function correctfn(word,wrong,correct){
    return word.replace(wrong,correct)
}
console.log(correctfn("Applet","et","e"))
// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.
function grtrthan5(inputArr){
    return inputArr.filter(nr=>nr>5)
}
console.log(grtrthan5([1,2,5,6,7,8]))
// Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
function Avgofobj(obj){
    let sum=0;
    let count=0;
    obj.scores.forEach(el=>{sum+=el;
        count++;
    })
    return sum/count;
}
function StudentAvg(students){
let result=[]
for(i of students){
    let output={}
    // let sum=0;
    output.name=i.name;
    output.average=Avgofobj(i)
    result.push(output)}
    return result
}
console.log(StudentAvg(students))
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.



// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedsum(nr){
    while(nr>=10){
        str=nr.toString()
        let int=str.split('')
        let sum=0;
        int.forEach(nr=>{sum+=Number(nr)
        })
        console.log(sum)
        nr=sum
    }
}
repeatedsum(456)
//2nd method which gives answer in O(1)
function repeatedsum2(nr){
    return 1+ (nr-1)%9
}
console.log(repeatedsum2(456))
// Q9) Write a function to count the number of words in a paragraph.
let paragraph="The tranquil village of Elmsford, nestled between rolling hills and ancient oak trees, was a place where time seemed to stand still. Cobblestone streets meandered past quaint cottages adorned with vibrant flower boxes, each bursting with petunias and marigolds. On any given morning, the aroma of freshly baked bread wafted through the air from the local bakery, mingling with the scent of dew-kissed grass. Villagers greeted each other with warm smiles and hearty handshakes, embodying a sense of community rarely seen in the hustle and bustle of modern life. The heart of Elmsford was its town square, a bustling yet serene spot where farmers' markets were held every Saturday. Stalls overflowed with an array of goods: from juicy, sun-ripened tomatoes and crisp apples to handmade crafts and aromatic spices. Children chased each other around the old stone fountain at the square's center, their laughter echoing off the surrounding buildings. In the evenings, as the sun dipped below the horizon, casting a golden glow over the landscape, the villagers gathered in the square for various festivities. Lanterns strung between trees flickered to life, casting a warm, inviting light. Musicians played folk tunes on fiddles and guitars, their melodies intertwining with the soft murmur of conversation and the clinking of glasses from the nearby tavern. The village storyteller, an elderly woman with a twinkle in her eye and a wealth of tales in her heart, often took center stage, enchanting both young and old with legends of yore. Life in Elmsford moved at a gentle pace, dictated not by the relentless march of the clock but by the rhythms of nature and the bonds of community. Here, the past and present danced in harmony, creating a timeless tapestry that wrapped around the hearts of all who called it home."
// console.log(str1.split(' ').length)
function countWords(paragraph){
    let cleanString=paragraph.replace(/[^A-Za-z ]+/g,'')
    console.log(cleanString)
    return cleanString.split(' ').length
}
console.log(countWords(paragraph))
// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverse(string){
    let res=''
    for(i of string){
        res=i+res;
    }
    return res
}
console.log(reverse('Hello'))
// Q11)
Input=
[
    student1={
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2={
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3= {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
   function avg(e){
    let sum=0;
    let c=0;
    for(i in e){
        c++;
        sum+=e[i]
    }
    return sum/c
}
let Output=[]
let j=1;
for(i in Input)
   {
    let obj={}
    let res={}
    obj.average=avg(Input[i])
    res[`student${j}`]=obj
    Output.push(res)
    j++;
   }
console.log(Output)
// Output=
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

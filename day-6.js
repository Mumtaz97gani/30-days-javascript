const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/* exs-1 */

/* for (let i=0;i<countries.length-1;i++){
    console.log("iterate using for",countries[i])
  } */
/* let i=0
while( i<countries.length-1){
    console.log("iterate using while",countries[i])
    i++
  } */
/* let i=0
do{
    console.log('iterate using do while',countries[i])
    i++
}
while(i<countries.length-1); */


/* #
   ##
   ###
   ####
   #####
   ######
   ####### */
/*    for (let i=0;i<7;i++){
    
    let hash="#"
    console.log(hash.repeat(i))

}
let counter=10
for (let i=1;i<11;i++){
    console.log(counter*i)
}

for (let i=1;i<11;i++){
    console.log(i**3);

}

for (let i=1;i<101;i++){
    if (i%2==0){
        console.log(i)
    }

}

for (let i=1;i<101;i++){
    if (i%2!=0){
        console.log(i)
    }
    
}
let sumOfAllNums=0
for (let i=1;i<101;i++){
    sumOfAllNums+=i
    
     
}
console.log(sumOfAllNums);   */  

/* let allEven=0
let allOdd =0
for (let i=1;i<101;i++){
    if (i%2==0){
        allEven+=i
    }
    else{
        allOdd+=i
    }
}
console.log("All Even:",allEven);
console.log('All Odd:',allOdd); */
/* 
let arr=[]
for (let i =1;i<6;i++){
    arr.unshift(i)
    
}
console.log(arr) */

/* const arr = [0,1,2,3,4,5,6,7,8,9];
let result = [];
for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result += arr[randomIndex];
}
console.log(result); */

/* const character="abcdefghijklmnopABCSDEFGHJGUH123456"
let rest= ""
for (let i =0;i<6;i++){
    const randomIn= Math.floor(Math.random()*character.length);
    rest += character[randomIn]
}
console.log(rest); */

/* exc-2
   q-2

const character="abcdefghijklmnopABCSDEFGHJGUH123456"
let rest= ""
for (let i =0;i<Math.floor(Math.random()*character.length);i++){
    const randomIn= Math.floor(Math.random()*character.length);
    rest += character[randomIn]
}
console.log(rest); */

/* exc-2
   q-2


const character="0123456789ABCDEF"
let rest= ""
for (let i =0;i<Math.floor(parseInt(Math.random()*character.length));i++){
    const randomIn= Math.floor(Math.random()*character.length);
    rest += character[randomIn]
}
console.log(rest);
 */
let newCountries=[]
for (let i=0;i<countries.length;i++){
    newCountries.unshift(countries[i].toUpperCase())
    
    
}
console.log(newCountries);

let arrLen=[]
var sum=0
for (let i=0;i<countries.length-1;i++){
    
    let sum = arrLen.unshift(countries[i].length)
    sum =0
}
console.log(sum);

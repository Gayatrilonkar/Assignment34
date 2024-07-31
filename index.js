const students =
[
    "Gayu", 
    "sahil",
    "kunal",
    "aaru",
    "rohan"

]
for (const stud of students)
   




console.log(`Hello ${stud}`)
const marks = [ 100,200,300,10]


let largest =marks[0]
for (const num of marks){
    if (num>largest){
        largest=num

    }
}
console.log(largest)



const numbers =[2,3,6,8,1,8,0,2]
let sum = 0;
for (let i=0;i<numbers.length; i++){
    if (numbers[i]%2==1){
        sum+=numbers[i]
    }
}
console.log(`sum : ${sum}`)
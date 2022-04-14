//const --fix value that can not be changed--NO CHANGE
//let--use let for variable that can be changed
//var--

const colors = ["green", "red", "rgba(133,122,200)","#f15025" ]
const btn = document.getElementById("btn")// selecting btn which is id 
const color = document.querySelector(".color")


function getRandomNumber(){
return Math.floor( math.random() * colors.length)// floor is the limit ex floor is  10 means 10.4 still ok but number from 10.5 and above is not ok that will give 11

}


//const --fix value that can not be changed--NO CHANGE
//let--use let for variable that can be changed


const colors = ["green", "red", "rgba(133,122,200)","#f15025" ]
const btn = document.getElementById("btn")// selecting btn which is id 
const color = document.querySelector(".color")

btn.addEventListener("click",function (){
const randomNumber = getRandomNumber()
//console.log(randomNumber) --we put console for check if code work properly
document.body.style.backgroundColor = colors[randomNumber]// document.body captures colors on array--target background color
color.textContent = colors[randomNumber]//target color class-it chnage value based on array color position
})






function getRandomNumber(){
return Math.floor( Math.random() * colors.length)// floor is the limit ex floor is  10 means 10.4 still ok but number from 10.5 and above is not ok that will give 11

}


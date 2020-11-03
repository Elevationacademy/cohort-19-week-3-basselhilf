//Callbacks & Arrow Functions
//ex-1
// const pushPull = function(funcname){
//     funcname()
// }
// const push = function () {
//     console.log("pushing it!")
//   }
//   const pull = function () {
//     console.log("pulling it!")
//   }
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

//ex-2
// const getTime = function(funcname){
//     const time = new Date()
//     funcname(time)
// }
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
//   getTime(returnTime)

//ex-3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = function(name){
//       console.log(name)
//   }
//   displayData(alert, logData, "I like to party")

//ex-4
// const sum = (x,y,z) => {console.log(x+y+z)}
// sum(5,6,10)

//ex-5
// const capitalize = (name) => { 
//    name = name.toLowerCase();
//    name =  name[0].toUpperCase() + name.substring(1)
//    console.log(name)
// }
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

//ex-6
// const commentOnWeather = (temp) => {console.log("its " + determineWeather(temp)) }
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
//   commentOnWeather(30) //returns "It's hot"
//   commentOnWeather(22) //returns "It's cold"

//ex-7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }   
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"   
//   const makeSound = sound => alert(sound)
//   explode(shineLight, makeSound, "BOOM")









    //ex-1
// const moveRight = function(){
//     const block = document.getElementById("block")
//     let left = parseInt(block.style.left) || 0
//     left += 15
//     block.style.left = left + "px"
// }
// const moveLeft = function(){
//     const block = document.getElementById("block")
//     let left = parseInt(block.style.left) || 0
//     left -= 15
//     block.style.left = left + "px"
// }
// const moveUp = function(){
//     const block = document.getElementById("block")
//     let moveup = parseInt(block.style.top) || 0
//     moveup -= 15
//     block.style.top = moveup + "px"
// }
// const moveDown = function(){
//     const block = document.getElementById("block")
//     let movedown = parseInt(block.style.top) || 0
//     movedown += 15
//     block.style.top = movedown + "px"
// }

//ex-2
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
//  const checkReservation = function(){
//     let  name = document.getElementById("input").value;
//     if(reservations[name] && !reservations[name].claimed) {
//         alert("Welcome in, " + name)
//       } else if (reservations[name] && reservations[name].claimed){
//         alert("Hmm, someone already claimed this reservation")
//       } else if (!reservations[name]) {
//         alert("You have no reservation")
//       }	
//   } 

//ex-3
// let main
// const getRandomColor = function() {
//     const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     return niceColors[randomPosition];
//   }
// const boxes = []
// for (let i=0; i<6;i++){
//     const box = document.createElement("div")
//     box.setAttribute("class","boxes")
//     box.onmouseenter=function(){
//         box.style.backgroundColor=getRandomColor()
//     }
//     container.appendChild(box)
    
// }
    //Form
    // const checkform = function(){
    // let  name = document.getElementById("name").value;
    // let  salary = document.getElementById("salary").value;
    // let  birthday = document.getElementById("birthday").value;
    // let phone = document.getElementById("phone").value;
    // if(name.length<2){
    //     const message = document.createElement("h2")
    //     message.innerHTML = "Name is missing"
    //     message.style.color="red"
    //     myForm.appendChild(message)
    // }
    // else if(salary<10000 || salary>16000 || salary.length == 0){
    //     const message = document.createElement("h2")
    //     message.innerHTML = "The salary must be greater than 10,000 but less than 16,000"
    //     message.style.color="red"
    //     myForm.appendChild(message)  
    // }
    // else if(birthday==0){
    //     const message = document.createElement("h2")
    //     message.innerHTML = "enter you birthday"
    //     message.style.color="red"
    //     myForm.appendChild(message)
    // }
    // else if(phone==0){
    //     const message = document.createElement("h2")
    //     message.innerHTML = "enter your phone number"
    //     message.style.color="red"
    //     message.setAttribute("class",)
    //     myForm.appendChild(message)   
    // }
    // else alert ("welcome !")
    // }
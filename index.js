// const deletebtn = document.getElementById ("deleteBtn")
// canceltn
// document. getElementById("cancelBtn");
// const counter = document.getElementById("counter");
// const hiddenBanner = document.quervSelector(" deleted!")
// let deletionTimer = null;

// function deletrCount(){
//     deletebtn.disabled = true;
//     let countDowninseconds = 5;

//     setInterval(() => {
//         updatecount(--countDowninseconds);
//     }, 1000);

//     setTimeout(() => {
//         performDeletion();
//     }, countDowninseconds * 1000);



// }



let increment = document.querySelector("#increment");

let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click", () => {
    counter ++;
    counterValue.innerText = counter;
})

decrement.addEventListener("click", () => {
    counter --;
    counterValue.innerText = counter;
})
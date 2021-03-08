let badgeValue = document.getElementById("badge2");
let storeValues = {date: 10-10-20, time: 10.00}

let timeNotAvailable1 = {
 date: 2021-03-24,
 time: 10.00
}
let timeNotAvailable2 = {
 date: 2021-03-25,
 time: 12.00
}

function getDate(){
 let inputDate = document.getElementById("datePicker").value;
 storeValues.date = inputDate;
 console.log(inputDate)
 console.log(storeValues)
}
function getTime(){
let inputTime = document.getElementById("timePicker").value;
 storeValues.time = inputTime;
 if(storeValues.time == '10:00' || storeValues.time == '00:00'){
    badgeValue.innerText = '10.30 AM';

 }else{
  badgeValue.innerText = inputTime
}

console.log(inputTime)
}

function getDuration(){
let inputDuration = document.getElementById("duration").value;
console.log(inputDuration)
}

function checkAvailability(){
if (storeValues.date == '2021-03-24' || storeValues.time == '23.00'){
 console.log('Not available')
}else{
  console.log('available')

}
}



dateBtn.addEventListener("click", getDate)
dateBtn.addEventListener("click", getTime)
dateBtn.addEventListener("click", getDuration)
dateBtn.addEventListener("click", checkAvailability)
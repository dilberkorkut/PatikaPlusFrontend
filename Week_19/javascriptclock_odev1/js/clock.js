


let userName = prompt("Kullanici adiniz")
let info =document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${userName}`

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes =  date.getMinutes();
    let seconds = date.getSeconds();
    let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    let day = days[date.getDay()]

    myClock.innerHTML = `${hours}:${minutes}:${seconds}:${day}`
}
setInterval(showTime, 1000);

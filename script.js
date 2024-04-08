// Digital Clock Program

function updateClock(){

    const now = new Date();
    let  hours = now.getHours();// for 12 hour clock removed .toString().padStart(2, 0)
    const meridiem = hours >= 12 ? "PM" : "AM"; // for 12 hour clock
    hours = hours % 12 || 12; // 12 hour clock
    hours = hours.toString().padStart(2, 0);// 12 hour clock
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
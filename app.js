const h = document.getElementById("hh");
const m = document.getElementById("mm");
const s = document.getElementById("ss");
const am_pm = document.getElementById("ampm");

function update_clock(){
    
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let AMPM = "AM";

    if(hour > 12){
        hour = hour - 12;
        AMPM = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    h.innerText = hour;
    m.innerText = minute;
    s.innerText = second;
    am_pm.innerText = AMPM;
    setTimeout(() => {
        update_clock();
    }, 1000);
}

update_clock();





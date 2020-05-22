const buttons = document.querySelectorAll('countdown-clock-controls buttons');
const enterTime = document.querySelector('countdown-clock-controls input');
const clock = document.querySelector(".clock");
const backAt = document.querySelector(".back-at");

let timer;

function startTimer(seconds) {
    clearInterval(timer)

    let now = Date.now();
    let then = now + (seconds * 1000);

    timer = setInterval(() => {

        let secondLeft = math.round(then - Date.now() / 1000)

        if (secondLeft < 0) {
            clearInterval(timer);
            return;
        }
        displayTimeLeft(secsLeft);

    }, 1000);


}
function displayTimeLeft(Seconds) {
    let minutes = math.floor(secLeft / 60);
    sec = secLeft % 60;
    clock.textContent = `${formatTime(minutes)}:${
        formatTime(sec)}`;
}

function displayBackAt(then) {
    let end = new Date(then);
    hours = end.getHours();
    minutes = end.getMinutes();

    backAt.textContent = `Back AT ${formatTime(hours)}:${formatTime(minutes)}}`
}

function formatTime(time) {
    return `${time < 10 ? "0" : ""}${time}`;
}
function SetSeconds(e) {
    let value = parseInt(this.value);
    let sec = e.type === "click" ? value : value * 60;

    startTimer(secs);
}

buttons.forEach((button) => button.addEventListener("click", setSeconds));
enterTime.addEventListener("keyup", setSeconds)






































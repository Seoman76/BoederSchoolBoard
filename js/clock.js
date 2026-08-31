/* ==========================================
   Böder SchoolBoard
   Version 0.2.2
   Uhr & Datum
========================================== */

function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    const time = now.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const today = now.toLocaleDateString("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    if (clock) {
        clock.textContent = time;
    }

    if (date) {
        date.textContent = today;
    }

}

updateClock();

setInterval(updateClock, 1000);
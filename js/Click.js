/* ==========================================
   Böder SchoolBoard
   Version 0.2
   Uhr & Datum
========================================== */

function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) {
        clock.textContent = now.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    if (date) {
        date.textContent = now.toLocaleDateString("de-DE", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }
}

updateClock();
setInterval(updateClock, 1000);

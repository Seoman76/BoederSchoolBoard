/* ==========================================
   Böder SchoolBoard
   Version 0.2.3
   Aktuelle Unterrichtsstunde erkennen
========================================== */

function highlightCurrentLesson(containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const rows = container.querySelectorAll("table tr");

    if (rows.length < 2) return;

    const now = new Date();

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

    // Samstag/Sonntag ignorieren
    const weekday = now.getDay();

    if (weekday === 0 || weekday === 6) return;

    // Montag = Spalte 2
    const dayColumn = weekday + 1;

    rows.forEach((row, index) => {

        if (index === 0) return;

        const cells = row.querySelectorAll("td");

        if (cells.length < 7) return;

        const time = cells[1].textContent.trim();

        if (!time.includes("-")) return;

        const parts = time.split("-");

        const start = parts[0].split(":");
        const end = parts[1].split(":");

        const startMinutes =
            parseInt(start[0]) * 60 +
            parseInt(start[1]);

        const endMinutes =
            parseInt(end[0]) * 60 +
            parseInt(end[1]);

        if (
            currentMinutes >= startMinutes &&
            currentMinutes < endMinutes
        ) {

            cells[0].classList.add("current-lesson");
            cells[1].classList.add("current-lesson");
            cells[dayColumn].classList.add("current-lesson");

        }

    });

}

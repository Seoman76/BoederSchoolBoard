/* ==========================================
   Böder SchoolBoard
   highlight.js
   Version 1.0
========================================== */

function highlightCurrentLesson(containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const table = container.querySelector("table");

    if (!table) return;

    // Alte Markierungen entfernen
    table.querySelectorAll(".current-lesson").forEach(cell => {
        cell.classList.remove("current-lesson");
    });

    table.querySelectorAll(".current-row").forEach(row => {
        row.classList.remove("current-row");
    });

    const rows = table.querySelectorAll("tr");

    const now = new Date();

    const weekday = now.getDay();

    // Nur Montag bis Freitag
    if (weekday < 1 || weekday > 5) return;

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

    // Montag = Spalte 2
    const dayColumn = weekday + 1;

    rows.forEach((row, index) => {

        if (index === 0) return;

        const cells = row.querySelectorAll("td");

        if (cells.length < 7) return;

        const timeText = cells[1].textContent.trim();

        const match = timeText.match(
            /^(\d{2}):(\d{2})-(\d{2}):(\d{2})$/
        );

        if (!match) return;

        const start =
            Number(match[1]) * 60 +
            Number(match[2]);

        const end =
            Number(match[3]) * 60 +
            Number(match[4]);

        if (currentMinutes >= start && currentMinutes < end) {

            // Ganze Zeile markieren
            row.classList.add("current-row");

            // Stunde + Uhrzeit markieren
            cells[0].classList.add("current-lesson");
            cells[1].classList.add("current-lesson");

            // Aktuelles Fach markieren
            if (cells[dayColumn]) {
                cells[dayColumn].classList.add("current-lesson");
            }

        }

    });

}

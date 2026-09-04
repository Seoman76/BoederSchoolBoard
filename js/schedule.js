/* ==========================================
   Böder SchoolBoard
   Version 0.3.1
   Aktuelle Unterrichtsstunde markieren
========================================== */

function highlightCurrentLesson(containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const table = container.querySelector("table");

    if (!table) return;

    table.querySelectorAll(".current-lesson").forEach(cell => {
        cell.classList.remove("current-lesson");
    });

    const rows = table.querySelectorAll("tr");

    const now = new Date();

    const weekday = now.getDay();

    if (weekday < 1 || weekday > 5) return;

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

    const isJooris = containerId === "joorisTable";

    rows.forEach((row, index) => {

        if (index === 0) return;

        const cells = row.querySelectorAll("td");

        if (isJooris) {

            // Jooris besitzt keine Zeitspalte.
            // Deshalb kann keine aktuelle Stunde
            // automatisch bestimmt werden.
            return;

        }

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

        if (currentMinutes >= start &&
            currentMinutes < end) {

            cells[0].classList.add("current-lesson");
            cells[1].classList.add("current-lesson");
            cells[weekday + 1].classList.add("current-lesson");

        }

    });

}

/* ==========================================
   Böder SchoolBoard
   Version 0.2.3
   Tabellen-Erzeugung
========================================== */

function createTable(data, targetId) {

    const container = document.getElementById(targetId);

    if (!container) return;

    if (!data || data.length === 0) {
        container.innerHTML = "<p>Keine Daten vorhanden.</p>";
        return;
    }

    const table = document.createElement("table");

    // Aktuellen Wochentag bestimmen
    const today = new Date().getDay();

    const dayMap = {
        1: "Montag",
        2: "Dienstag",
        3: "Mittwoch",
        4: "Donnerstag",
        5: "Freitag"
    };

    const todayName = dayMap[today];

    let todayColumn = -1;

    data.forEach((row, rowIndex) => {

        const tr = document.createElement("tr");

        row.forEach((cell, cellIndex) => {

            const element = document.createElement(
                rowIndex === 0 ? "th" : "td"
            );

            element.textContent = cell;

            // Position der Zelle speichern
            element.dataset.row = rowIndex;
            element.dataset.col = cellIndex;

            // Spalte des heutigen Tages finden
            if (rowIndex === 0 && cell.trim() === todayName) {
                todayColumn = cellIndex;
            }

            // Heutigen Wochentag hervorheben
            if (todayColumn !== -1 && cellIndex === todayColumn) {
                element.classList.add("today-column");
            }

            tr.appendChild(element);

        });

        table.appendChild(tr);

    });

    container.innerHTML = "";
    container.appendChild(table);

}

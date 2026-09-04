/* ==========================================
   Böder SchoolBoard
   Version 0.3.1
========================================== */

function createTable(data, targetId) {

    const container = document.getElementById(targetId);

    if (!container) return;

    container.innerHTML = "";

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

    // Tabelle erstellen
    data.forEach((row, rowIndex) => {

        const tr = document.createElement("tr");

        row.forEach((cell, cellIndex) => {

            const element = document.createElement(
                rowIndex === 0 ? "th" : "td"
            );

            element.textContent = cell;

            // Heutige Spalte merken
            if (rowIndex === 0 && cell.trim() === todayName) {
                todayColumn = cellIndex;
            }

            // Heutigen Tag hervorheben
            if (cellIndex === todayColumn) {
                element.classList.add("today-column");
            }

            tr.appendChild(element);

        });

        table.appendChild(tr);

    });

    container.appendChild(table);

}

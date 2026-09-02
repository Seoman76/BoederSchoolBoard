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

    const today = new Date().getDay();

    // Sonntag = 0
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

            // Header prüfen
            if (rowIndex === 0 && cell === todayName) {
                todayColumn = cellIndex;
            }

            // ganze Spalte markieren
            if (cellIndex === todayColumn && todayColumn !== -1) {
                element.classList.add("today-column");
            }

            tr.appendChild(element);

        });

        table.appendChild(tr);

    });

    container.innerHTML = "";
    container.appendChild(table);

}

/* ==========================================
   Böder SchoolBoard
   Version 0.3.0 Beta
========================================== */

function createTable(data, targetId) {

    const container = document.getElementById(targetId);

    if (!container) return;

    container.innerHTML = "";

    const table = document.createElement("table");

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

            const el = document.createElement(
                rowIndex === 0 ? "th" : "td"
            );

            el.textContent = cell;

            if (rowIndex === 0 && cell.trim() === todayName) {
                todayColumn = cellIndex;
            }

            if (todayColumn !== -1 && cellIndex === todayColumn) {
                el.classList.add("today-column");
            }

            tr.appendChild(el);

        });

        table.appendChild(tr);

    });

    container.appendChild(table);

}

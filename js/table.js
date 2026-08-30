/* ==========================================
   Böder SchoolBoard
   Version 0.2.1
   Tabellen-Erzeugung
========================================== */

function createTable(data, targetId) {

    const container = document.getElementById(targetId);

    if (!container) {
        console.error(`Container '${targetId}' nicht gefunden.`);
        return;
    }

    if (!data || data.length === 0) {
        container.innerHTML = "<p>Keine Daten vorhanden.</p>";
        return;
    }

    const table = document.createElement("table");

    data.forEach((row, rowIndex) => {

        const tr = document.createElement("tr");

        row.forEach(cell => {

            const element = document.createElement(
                rowIndex === 0 ? "th" : "td"
            );

            element.textContent = cell;

            tr.appendChild(element);

        });

        table.appendChild(tr);

    });

    container.innerHTML = "";
    container.appendChild(table);

}

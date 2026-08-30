/* ==========================================
   Böder SchoolBoard
   Version 0.2
   CSV -> HTML Tabelle
========================================== */

function createTable(csvText, targetId) {

    const rows = csvText
        .trim()
        .split("\n")
        .map(row => row.split(","));

    let html = "<table>";

    rows.forEach((row, index) => {

        html += "<tr>";

        row.forEach(cell => {

            const value = cell.replace(/^"|"$/g, "").trim();

            if (index === 0) {
                html += `<th>${value}</th>`;
            } else {
                html += `<td>${value}</td>`;
            }

        });

        html += "</tr>";

    });

    html += "</table>";

    document.getElementById(targetId).innerHTML = html;

}
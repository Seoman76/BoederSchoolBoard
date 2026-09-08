/* ==========================================
   Böder SchoolBoard
   table.js
   Version 1.0
========================================== */

function createTable(data, targetId) {

    const container = document.getElementById(targetId);

    if (!container) return;

    container.innerHTML = "";

    const table = document.createElement("table");

    const dayNames = [
        "",
        "montag",
        "dienstag",
        "mittwoch",
        "donnerstag",
        "freitag"
    ];

    const todayText = dayNames[new Date().getDay()];

    let todayColumn = -1;

    data.forEach((row, rowIndex) => {

        // Bei Jule nur Header + Stunden 1–6 anzeigen
        if (targetId === "juleTable" && rowIndex > 6) {
            return;
        }

        const tr = document.createElement("tr");

        row.forEach((cell, cellIndex) => {

            const element = document.createElement(
                rowIndex === 0 ? "th" : "td"
            );

            element.textContent = cell;

            // Aktuellen Wochentag im Header finden
            if (rowIndex === 0) {

                const text = String(cell)
                    .trim()
                    .toLowerCase();

                if (text.includes(today

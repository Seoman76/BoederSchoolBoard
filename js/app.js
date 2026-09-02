/* ==========================================
   Böder SchoolBoard
   Version 0.2.4 Foundation
========================================== */

async function loadAndDisplay(url, targetId) {

    const data = await loadSheet(url);

    const target = document.getElementById(targetId);

    if (!target) return;

    if (!data) {

        target.innerHTML = `
            <div style="padding:20px;color:#ef4444;">
                ❌ Stundenplan konnte nicht geladen werden.
            </div>
        `;

        return;

    }

    createTable(data, targetId);

}

async function startDashboard() {

    await Promise.all([

        loadAndDisplay(CONFIG.sheets.jojo, "jojoTable"),
        loadAndDisplay(CONFIG.sheets.jooris, "joorisTable"),
        loadAndDisplay(CONFIG.sheets.jule, "juleTable")

    ]);

    highlightCurrentLesson("jojoTable");
    highlightCurrentLesson("joorisTable");
    highlightCurrentLesson("juleTable");

    console.log("✅ Dashboard geladen");

}
setInterval(() => {

    highlightCurrentLesson("jojoTable");
    highlightCurrentLesson("joorisTable");
    highlightCurrentLesson("juleTable");

}, 60000);

document.addEventListener("DOMContentLoaded", () => {

    startDashboard();

    setInterval(startDashboard, CONFIG.refreshInterval);

});

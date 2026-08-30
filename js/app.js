/* ==========================================
   Böder SchoolBoard
   Version 0.2.1
   Hauptprogramm
========================================== */

async function loadAndDisplay(url, targetId) {

    const data = await loadSheet(url);

    if (data) {
        createTable(data, targetId);
    } else {
        const target = document.getElementById(targetId);

        if (target) {
            target.innerHTML = `
                <div style="padding:20px;color:#ff8080;">
                    ❌ Stundenplan konnte nicht geladen werden.
                </div>
            `;
        }
    }
}

async function startDashboard() {

    await Promise.all([

        loadAndDisplay(CONFIG.sheets.jojo, "jojoTable"),

        loadAndDisplay(CONFIG.sheets.jooris, "joorisTable"),

        loadAndDisplay(CONFIG.sheets.jule, "juleTable")

    ]);

    console.log("✅ Böder SchoolBoard gestartet");

}

document.addEventListener("DOMContentLoaded", () => {

    startDashboard();

    setInterval(startDashboard, CONFIG.refreshInterval);

});

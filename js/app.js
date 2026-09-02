/* ==========================================
   Böder SchoolBoard
   Version 0.2.6
   Hauptprogramm
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

    await loadWeather();

    updateCountdown();

    console.log("✅ Böder SchoolBoard gestartet");

}

document.addEventListener("DOMContentLoaded", async () => {

    await startDashboard();

    // Stundenpläne aktualisieren
    setInterval(startDashboard, CONFIG.refreshInterval);

    // Wetter alle 30 Minuten
    setInterval(loadWeather, 30 * 60 * 1000);

    // Countdown stündlich aktualisieren
    setInterval(updateCountdown, 60 * 60 * 1000);

});

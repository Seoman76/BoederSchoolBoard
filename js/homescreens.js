/* ==========================================
   Böder SchoolBoard
   Homescreens Edition
   Version 1.0
========================================== */

async function loadHomeScreen() {

    await Promise.all([

        loadAndDisplay(CONFIG.sheets.jojo, "jojoTable"),
        loadAndDisplay(CONFIG.sheets.jooris, "joorisTable"),
        loadAndDisplay(CONFIG.sheets.jule, "juleTable")

    ]);

    highlightCurrentLesson("jojoTable");
    highlightCurrentLesson("joorisTable");
    highlightCurrentLesson("juleTable");

}

async function startHomeScreen() {

    await loadHomeScreen();

    console.log("✅ Homescreens gestartet");

}

document.addEventListener("DOMContentLoaded", async () => {

    await startHomeScreen();

    // Stundenpläne alle 5 Minuten aktualisieren
    setInterval(loadHomeScreen, 5 * 60 * 1000);

    // Aktuelle Stunde jede Minute neu markieren
    setInterval(() => {

        highlightCurrentLesson("jojoTable");
        highlightCurrentLesson("joorisTable");
        highlightCurrentLesson("juleTable");

    }, 60 * 1000);

});

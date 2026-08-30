/* ==========================================
   Böder SchoolBoard
   Version 0.2
========================================== */

async function startDashboard() {

    try {

        const jojo = await loadSheet(CONFIG.sheets.jojo);
        createTable(jojo, "jojoTable");

        const jooris = await loadSheet(CONFIG.sheets.jooris);
        createTable(jooris, "joorisTable");

        const jule = await loadSheet(CONFIG.sheets.jule);
        createTable(jule, "juleTable");

        console.log("✅ Stundenpläne geladen");

    } catch (error) {

        console.error(error);

        document.getElementById("weather").textContent =
            "⚠️ Fehler beim Laden";

    }

}

startDashboard();
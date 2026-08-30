/* ==========================================
   Böder SchoolBoard
   Version 0.2.1
   Google Sheets Loader
========================================== */

async function loadSheet(url) {

    try {

        const response = await fetch(url, {
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const csv = await response.text();

        return parseCSV(csv);

    } catch (error) {

        console.error("Fehler beim Laden:", error);

        return null;

    }

}

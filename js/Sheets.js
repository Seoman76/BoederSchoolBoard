/* ==========================================
   Böder SchoolBoard
   Version 0.2
   Google Sheets Loader
========================================== */

async function loadSheet(url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Google Sheet konnte nicht geladen werden.");
    }

    const text = await response.text();

    return text;

}
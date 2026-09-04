/* ==========================================
   Google Sheets Loader
========================================== */

async function loadSheet(url){

    try{

        const response = await fetch(url);

        if(!response.ok){

            throw new Error("CSV konnte nicht geladen werden.");

        }

        const csv = await response.text();

        return parseCSV(csv);

    }

    catch(error){

        console.error(error);

        return null;

    }

}



/* ==========================================
   CSV Parser
========================================== */

function parseCSV(text){

    return text
        .trim()
        .split("\n")
        .map(row =>
            row.split(",").map(cell => cell.trim())
        );

}

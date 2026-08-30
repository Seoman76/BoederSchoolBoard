/* ==========================================
   Böder SchoolBoard
   Version 0.2.1
   CSV Parser
========================================== */

function parseCSV(csvText) {

    const lines = csvText
        .trim()
        .split(/\r?\n/);

    const delimiter = lines[0].includes(";") ? ";" : ",";

    return lines.map(line => {

        return line
            .split(delimiter)
            .map(cell =>
                cell
                    .trim()
                    .replace(/^"/, "")
                    .replace(/"$/, "")
            );

    });

}

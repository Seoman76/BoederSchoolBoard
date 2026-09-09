const plans = [

{
    name:"Jojo",
    url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR-l95auLVcne0kWg1Q5_tDhvXXpLeAUDtw_lHix1D_TyaJfSXHBdV6PZZ8DkHK6h_PqvWRtj7A5Vuf/pub?gid=0&single=true&output=csv"
},

{
    name:"Jooris",
    url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR-l95auLVcne0kWg1Q5_tDhvXXpLeAUDtw_lHix1D_TyaJfSXHBdV6PZZ8DkHK6h_PqvWRtj7A5Vuf/pub?gid=1017612760&single=true&output=csv"
},

{
    name:"Jule",
    url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR-l95auLVcne0kWg1Q5_tDhvXXpLeAUDtw_lHix1D_TyaJfSXHBdV6PZZ8DkHK6h_PqvWRtj7A5Vuf/pub?gid=175444478&single=true&output=csv"
}

];

async function loadBoard(plan){

    const csv = await fetch(plan.url).then(r=>r.text());

    // CSV robust parsen statt einfach nach Kommas zu splitten. :contentReference[oaicite:0]{index=0}
    const rows = csv.trim().split(/\r?\n/).map(line =>
        line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)?.map(cell =>
            cell.replace(/^"|"$/g,"").replace(/""/g,'"')
        ) || []
    );

    let html=`<div class="board">
    <h1>${plan.name}</h1>
    <table>`;

    rows.forEach(r=>{

        html+="<tr>";

        r.forEach(c=>{

            html+=`<td>${c}</td>`;

        });

        html+="</tr>";

    });

    html+="</table></div>";

    return html;

}

async function build(){

    const boards=document.getElementById("boards");

    boards.innerHTML="";

    for(const plan of plans){

        boards.innerHTML+=await loadBoard(plan);

    }

}

build();

setInterval(build,300000);

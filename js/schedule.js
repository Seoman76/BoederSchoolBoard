/* ==========================================
   Böder SchoolBoard
   Version 0.2.3 Foundation
========================================== */

function highlightCurrentLesson(containerId){

    const container=document.getElementById(containerId);

    if(!container) return;

    const table=container.querySelector("table");

    if(!table) return;

    const rows=table.querySelectorAll("tr");

    const weekday=new Date().getDay();

    if(weekday<1 || weekday>5) return;

    const currentMinutes=
        new Date().getHours()*60+
        new Date().getMinutes();

    rows.forEach((row,index)=>{

        if(index===0) return;

        const cells=row.querySelectorAll("td");

        if(cells.length<7) return;

        const value=cells[1].textContent.trim();

        const match=value.match(/(\d\d):(\d\d)-(\d\d):(\d\d)/);

        if(!match) return;

        const start=
            Number(match[1])*60+
            Number(match[2]);

        const end=
            Number(match[3])*60+
            Number(match[4]);

        if(currentMinutes>=start && currentMinutes<end){

            cells[0].classList.add("current-lesson");
            cells[1].classList.add("current-lesson");
            cells[weekday+1].classList.add("current-lesson");

        }

    });

}

/* ==========================================
   Böder SchoolBoard
   Version 0.2.2
   UI-Helfer
========================================== */

function setStatus(message, type = "ok") {

    const status = document.getElementById("status");

    if (!status) return;

    status.textContent = message;

    status.className = "";

    if (type === "ok") {
        status.classList.add("status-ok");
    } else {
        status.classList.add("status-error");
    }
}

function showLoading(targetId) {

    const target = document.getElementById(targetId);

    if (!target) return;

    target.innerHTML = `
        <div style="padding:20px;text-align:center;">
            ⏳ Lade Stundenplan...
        </div>
    `;
}
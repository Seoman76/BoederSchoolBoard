/* ==========================================
   Böder SchoolBoard
   Version 0.2.6
   Countdown
========================================== */

function daysUntil(dateString){

    const today = new Date();

    today.setHours(0,0,0,0);

    const target = new Date(dateString);

    target.setHours(0,0,0,0);

    const diff = target - today;

    return Math.ceil(diff / (1000*60*60*24));

}

function updateCountdown(){

    const holiday = document.getElementById("holidayCountdown");

    const festival = document.getElementById("festivalCountdown");

    if(!holiday || !festival) return;

    // Herbstferien NRW 2026
    const holidayDays = daysUntil("2026-10-12");

    if(holidayDays > 0){

        holiday.textContent =
            "🎉 Herbstferien: noch " +
            holidayDays +
            " Tage";

    }else{

        holiday.textContent =
            "🎉 Schöne Ferien!";

    }

    // Parookaville 2027

    const festivalDays = daysUntil("2027-07-16");

    festival.textContent =
        "🎵 Parookaville: noch " +
        festivalDays +
        " Tage";

}

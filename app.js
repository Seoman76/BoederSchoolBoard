function tick(){const n=new Date();
clock.textContent=n.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
date.textContent=n.toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});}
tick();setInterval(tick,1000);
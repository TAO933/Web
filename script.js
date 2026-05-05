function updateClock() {
    const now = new Date();
    
    // Time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // AM / PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = String(hours).padStart(2, '0');
    
    // Date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    
    // Days of week
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dayName = days[now.getDay()];
    
    // Update DOM
    document.getElementById('time').textContent = `${hoursStr}:${minutes}:${seconds}`;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('date').textContent = `${year} / ${month} / ${date}`;
    document.getElementById('day').textContent = dayName;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

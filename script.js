function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // เรียกใช้งานครั้งแรกเมื่อโหลดหน้า
function sendEmail() {
window.location.href = "mailto:59011607@kmitl.ac.th?subject=Subscription Request&body=I would like to subscribe for premium match predictions.";
}

document.addEventListener("DOMContentLoaded", () => {
  const scanBtn = document.getElementById("scanBtn");
  const spinner = document.getElementById("spinner");

  scanBtn.addEventListener("click", () => {
    spinner.style.display = "block";
    scanBtn.disabled = true;
    scanBtn.textContent = "Scanning...";

    chrome.storage.local.get("messageCount", (data) => {
      const count = data.messageCount || 3;

      // Simulate scan delay
      setTimeout(() => {
        spinner.style.display = "none";
        scanBtn.disabled = false;
        scanBtn.textContent = "📬 Scan Inbox";
        alert(`✅ Scanned ${count} messages successfully!`);
      }, 2000);
    });
  });
});


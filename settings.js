document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("messageCount");
  const saveBtn = document.getElementById("saveBtn");

  // Load saved setting
  chrome.storage.local.get("messageCount", (data) => {
    if (data.messageCount) {
      input.value = data.messageCount;
    }
  });

  // Save new setting
  saveBtn.addEventListener("click", () => {
    const count = parseInt(input.value);
    if (isNaN(count) || count < 1 || count > 10) {
      alert("Please enter a number between 1 and 10.");
      return;
    }

    chrome.storage.local.set({ messageCount: count }, () => {
      alert("✅ Settings saved!");
    });
  });
});

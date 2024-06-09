document.getElementById("save-options").addEventListener("click", () => {
  let selectedColor = document.getElementById("default-highlight-color").value;
  saveSelectedColor(selectedColor);
});

document.addEventListener("DOMContentLoaded", () => {
  loadSavedColor();
});

function saveSelectedColor(color) {
  chrome.storage.sync.set({ savedHighlightColor: color }, () => {
    alert("Options saved.");
  });
}

function loadSavedColor() {
  chrome.storage.sync.get("savedHighlightColor", (data) => {
    if (data.savedHighlightColor) {
      document.getElementById("default-highlight-color").value = data.savedHighlightColor;
    }
  });
}

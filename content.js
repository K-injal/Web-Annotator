let currentColor = "red";

function sendMessageToBackground(message) {
  console.log("Sending message to background:", message);
}


document.addEventListener("mouseup", () => {
  let selectedText = window.getSelection().toString();
  if (selectedText) {
    let range = window.getSelection().getRangeAt(0);
    let highlight = document.createElement("span");
    highlight.style.backgroundColor = currentColor;
    highlight.textContent = selectedText;
    range.deleteContents();
    range.insertNode(highlight);

    let note = prompt("Save the note", "");
    if (note) {
      highlight.setAttribute("data-note", note);
      let annotation = {
        text: selectedText,
        note: note,
        color: currentColor,
        url: window.location.href,
        date: new Date().toISOString()
      };
      sendMessageToBackground({ type: "save_annotation", annotation: annotation });
    }
  }
});


function onMessageReceived(message, sender, sendResponse) {
  if (message.type === "set_highlight_color") {
    currentColor = message.color;
  }
}

chrome.runtime.onMessage.addListener(onMessageReceived);

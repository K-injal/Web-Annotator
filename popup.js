function showAnnotations(filter = '') {
  chrome.runtime.sendMessage({ type: "get_annotations" }, (response) => {
    const annotationsList = document.getElementById("annotations-list");
    annotationsList.innerHTML = ""; 

    const filteredAnnotations = response.annotations.filter(annotation =>
      annotation.text.toLowerCase().includes(filter) || annotation.note.toLowerCase().includes(filter)
    );

    filteredAnnotations.forEach((annotation) => {
      const item = document.createElement("div");
      item.className = "annotation-item";
      item.innerHTML = `<strong>Text:</strong> ${annotation.text}<br><strong>Note:</strong> ${annotation.note}<br><strong>Color:</strong> ${annotation.color}<br><strong>URL:</strong> <a href="${annotation.url}" target="_blank">${annotation.url}</a><br><strong>Date:</strong> ${new Date(annotation.date).toLocaleString()}`;
      annotationsList.appendChild(item);
    });

    annotationsList.style.display = filteredAnnotations.length > 0 ? 'block' : 'none';
  });
}

document.getElementById("highlight-color").addEventListener("change", (event) => {
  const color = event.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "set_highlight_color", color: color });
  });
});

document.getElementById("view-annotations").addEventListener("click", () => {
  showAnnotations();
});

document.getElementById("export-annotations").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "get_annotations" }, (response) => {
    const annotations = response.annotations;
    const jsonAnnotations = JSON.stringify(annotations, null, 2); // Convert annotations to JSON string

    const blob = new Blob([jsonAnnotations], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'annotations.json';
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  });
});

document.getElementById("search-annotations").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  showAnnotations(query);
});

document.addEventListener("DOMContentLoaded", () => {
  showAnnotations();
});

const injection = document.querySelector("#injection") as HTMLInputElement;
const preview = document.querySelector("#preview") as HTMLInputElement;

if(!injection || !preview) throw new Error("Couldn't find injection or preview checkbox");

chrome.storage.sync.get(["injection", "preview"], ({ injection: injectionValue, preview: previewValue }) => {
  injection.checked = injectionValue;
  preview.checked = previewValue;
});

injection.addEventListener("change", event => {
  const target = event.target as HTMLInputElement;
  if (!target || !("checked" in target)) return;

  return chrome.storage.sync.set({ injection: target.checked });
});

preview.addEventListener("change", event => {
  const target = event.target as HTMLInputElement;
  if (!target || !("checked" in target)) return;

  return chrome.storage.sync.set({ preview: target.checked });
});

const injectionElement = document.querySelector("#injection") as HTMLInputElement;
const previewElement = document.querySelector("#preview") as HTMLInputElement;
const skipElement = document.querySelector("#skip") as HTMLInputElement;
const skipElementValue = document.querySelector("[data-skip]");

if(!injectionElement || !previewElement || !skipElement || !skipElementValue) throw new Error("Something went wrong");

// Set the initial values of the checkboxes inside chrome storage
chrome.storage.sync.get(["injection", "preview", "skip"], ({ injection: injectionValue, preview: previewValue }) => {
  injectionElement.checked = injectionValue;
  previewElement.checked = previewValue;
  skipElementValue.innerHTML = String(skipElement.value);
});

// Add event listeners to the "Injection" checkbox
injectionElement.addEventListener("change", event => {
  const target = event.target as HTMLInputElement;
  if (!target || !("checked" in target)) return;

  return chrome.storage.sync.set({ injection: target.checked });
});

// Add event listeners to the "Preview" checkbox
previewElement.addEventListener("change", event => {
  const target = event.target as HTMLInputElement;
  if (!target || !("checked" in target)) return;

  return chrome.storage.sync.set({ preview: target.checked });
});

// Add event listeners to the "Skip" input
skipElement.addEventListener("change", event => {
  const target = event.target as HTMLInputElement;
  if (!target || !("value" in target)) return;
  document.querySelector("[data-skip]")!.innerHTML = target.value;

  return chrome.storage.sync.set({ skip: Number(target.value) });
});

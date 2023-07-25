chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  if (!tab.url?.includes("youtube.com/shorts")) return;

  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["./content.js"],
  });
});

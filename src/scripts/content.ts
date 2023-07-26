enum Keys {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

const VIDEO_PLAYER_SELECTOR = "video[data-no-fullscreen]";

const storage = chrome.storage;

let interval: number;

interval = setInterval(() => {
  const video: HTMLVideoElement | null = document.querySelector(
    VIDEO_PLAYER_SELECTOR,
  );
  if (!video) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return;
    storage.sync.get(["injection", "skip"], ({ injection, skip }) => {
      if (!injection) return;

      switch (event.code) {
        case Keys.LEFT:
          video.currentTime -= skip || 5;
          break;
        case Keys.RIGHT:
          video.currentTime += skip || 5;
          break;
        default:
          break;
      }
    })
  };

  if (window.onkeydown === handleKeyDown) return;

  window.onkeydown = handleKeyDown;

  clearInterval(interval);

}, 1000);

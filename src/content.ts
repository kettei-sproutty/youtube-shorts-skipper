enum Keys {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

const VIDEO_PLAYER_SELECTOR = "video[data-no-fullscreen]";

let interval: number;

interval = setInterval(() => {
  const video: HTMLVideoElement | null = document.querySelector(
    VIDEO_PLAYER_SELECTOR,
  );
  if (!video) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return;

    switch (event.code) {
      case Keys.LEFT:
        video.currentTime -= 5;
        break;
      case Keys.RIGHT:
        video.currentTime += 5;
        break;
      default:
        break;
    }
  };

  if (window.onkeydown === handleKeyDown) return;

  window.onkeydown = handleKeyDown;

  clearInterval(interval);
}, 1000);

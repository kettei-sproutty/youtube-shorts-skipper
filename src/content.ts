let interval: number;

interval = setInterval(() => {
  const selector = "video[data-no-fullscreen]";
  const video: HTMLVideoElement | null = document.querySelector(selector);

  if (!video) return;

  enum Keys {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
  }

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

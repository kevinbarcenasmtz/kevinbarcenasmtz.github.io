(function () {
  function protectCanvas(canvas) {
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    canvas.addEventListener("dragstart", (e) => e.preventDefault());
  }

  function imgToCanvas(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    function draw() {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      canvas.style.cssText = img.style.cssText;
      canvas.className = img.className;
      canvas.style.maxWidth = "100%";
      canvas.style.height = "auto";
      canvas.style.display = "block";
      protectCanvas(canvas);
      img.replaceWith(canvas);
    }

    if (img.complete && img.naturalWidth > 0) {
      draw();
    } else {
      img.onload = draw;
    }
  }

  // Gallery slots (photos page)
  const grid = document.getElementById("photo-grid");
  if (grid) {
    grid.addEventListener("contextmenu", (e) => e.preventDefault());
    grid.querySelectorAll(".photo-slot[data-src]").forEach((slot) => {
      const img = new Image();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        canvas.style.cssText = "max-width:100%;height:auto;display:block;";
        protectCanvas(canvas);
        slot.appendChild(canvas);
      };

      img.src = slot.dataset.src;
    });
  }

  // Post body images (feed posts with embedded images)
  const postBody = document.querySelector(".post-body");
  if (postBody) {
    postBody.querySelectorAll("img").forEach(imgToCanvas);
  }
})();

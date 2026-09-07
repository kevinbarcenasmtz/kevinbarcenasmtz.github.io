(function () {
  function protectCanvas(canvas) {
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    canvas.addEventListener("dragstart", (e) => e.preventDefault());
  }

  // Click-to-expand lightbox for post-body images. The canvas that's
  // clicked gets moved into the overlay (not cloned, cloning a canvas
  // node doesn't copy its drawn bitmap) and moved back on close.
  let overlay, overlayInner, originalParent, originalNext;

  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.className = "img-zoom-overlay";
    overlayInner = document.createElement("div");
    overlayInner.className = "img-zoom-overlay__inner";
    overlay.appendChild(overlayInner);
    overlay.addEventListener("click", closeZoom);
    overlay.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeZoom();
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function closeZoom() {
    if (!overlay || !overlay.classList.contains("is-open")) return;
    const canvas = overlayInner.firstChild;
    if (canvas) {
      canvas.style.maxWidth = "100%";
      canvas.style.maxHeight = "";
      canvas.style.height = "auto";
      canvas.classList.remove("is-zoomed");
      originalParent.insertBefore(canvas, originalNext);
    }
    overlay.classList.remove("is-open");
    document.body.classList.remove("img-zoom-lock");
  }

  // Matches the overlay's own padding (2rem each side) so the canvas's
  // own max-size can never exceed the box it's centered in — plain vw/vh
  // units on the canvas ignored that padding and let it overflow to one
  // side, which threw off the centering.
  function openZoom(canvas) {
    ensureOverlay();
    originalParent = canvas.parentNode;
    originalNext = canvas.nextSibling;
    canvas.style.maxWidth = "calc(100vw - 4rem)";
    canvas.style.maxHeight = "calc(100vh - 4rem)";
    canvas.classList.add("is-zoomed");
    overlayInner.appendChild(canvas);
    overlay.classList.add("is-open");
    document.body.classList.add("img-zoom-lock");
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

      canvas.classList.add("zoomable");
      canvas.setAttribute("role", "button");
      canvas.setAttribute("tabindex", "0");
      canvas.setAttribute("aria-label", "Expand image");
      canvas.addEventListener("click", (e) => {
        e.stopPropagation();
        if (canvas.classList.contains("is-zoomed")) {
          closeZoom();
        } else {
          openZoom(canvas);
        }
      });
      canvas.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (canvas.classList.contains("is-zoomed")) {
            closeZoom();
          } else {
            openZoom(canvas);
          }
        }
      });

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

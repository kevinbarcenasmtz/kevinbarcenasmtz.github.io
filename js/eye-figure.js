(function () {
  const lines = Array.from(document.querySelectorAll("[data-eye-line]"));

  if (!lines.length) {
    return;
  }

  function toSvgPoint(svg, x, y) {
    const matrix = svg.getScreenCTM();

    if (!matrix) {
      return null;
    }

    const point = new DOMPoint(x, y);
    return point.matrixTransform(matrix.inverse());
  }

  function pointEye(event) {
    if (
      typeof event.clientX !== "number" ||
      typeof event.clientY !== "number"
    ) {
      return;
    }

    lines.forEach((line) => {
      const svg = line.ownerSVGElement;
      const point = svg && toSvgPoint(svg, event.clientX, event.clientY);

      if (!point) {
        return;
      }

      line.setAttribute("x2", point.x);
      line.setAttribute("y2", point.y);
    });
  }

  document.addEventListener("pointermove", pointEye, { passive: true });
  document.addEventListener("mousemove", pointEye, { passive: true });
})();

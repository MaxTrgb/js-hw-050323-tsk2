var isDragging = false,
  resizingElement,
  offsetX,
  offsetY,
  initialWidth,
  initialHeight,
  newWidth,
  newHeight;

const currentWidthValues = document.querySelectorAll(".current-width");
const resizers = document.querySelectorAll(".resizer");
const blocks = document.querySelectorAll(".block");
const container = document.querySelector(".main-container");

window.addEventListener("resize", updateCurrentWidthValues);

document.addEventListener("DOMContentLoaded", () => {
  updateCurrentWidthValues();
  resizers.forEach((resizer) => {
    resizer.addEventListener("mousedown", (e) => {
      isDragging = true;
      resizingElement = resizer.closest(".block");
      resizingElement.classList.add("getting-resized");
      initialWidth = resizingElement.offsetWidth;
      initialHeight = resizingElement.offsetHeight;
      offsetX = e.clientX;
      offsetY = e.clientY;
      container.style.cursor = "grabbing";
    });
  });
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;
    if (resizingElement.classList.contains("resize-bottom")) {
      newHeight = initialHeight + newY + "px";
      resizingElement.style.height = newHeight;
    } else if (resizingElement.classList.contains("resize-top")) {
      newHeight = initialHeight - newY + "px";
      resizingElement.style.height = newHeight;
    } else if (resizingElement.classList.contains("resize-left")) {
      newWidth = initialWidth - newX + "px";
      resizingElement.style.width = newWidth;
    } else if (resizingElement.classList.contains("resize-right")) {
      newWidth = initialWidth + newX + "px";
      resizingElement.style.width = newWidth;
    } else {
      console.log("no direction specified in class name");
    }
  }
  updateCurrentWidthValues();
});

document.addEventListener("mouseup", function (e) {
  isDragging = false;
  container.style.cursor = "auto";
  blocks.forEach((block) => {
    block.classList.remove("getting-resized");
  });
});

function updateCurrentWidthValues() {
  currentWidthValues.forEach((element) => {
    let newText =
      "Width: " +
      element.closest(".block").offsetWidth +
      "px," +
      " Height: " +
      element.closest(".block").offsetHeight +
      "px";
    element.textContent = newText;
  });
}

// Create a floating tooltip to display CSS styles
let tooltip = document.createElement("div");
tooltip.id = "css-viewer-tooltip";
document.body.appendChild(tooltip);

// Style the tooltip
tooltip.style.position = "fixed";
tooltip.style.background = "rgba(0, 0, 0, 0.8)";
tooltip.style.color = "white";
tooltip.style.padding = "8px";
tooltip.style.borderRadius = "5px";
tooltip.style.fontSize = "12px";
tooltip.style.display = "none";
tooltip.style.zIndex = "9999";
tooltip.style.whiteSpace = "pre-wrap";
tooltip.style.maxWidth = "250px";

// Function to get computed styles of an element
function getElementStyles(element) {
    let computedStyle = window.getComputedStyle(element);
    return `
<b>${element.tagName.toLowerCase()}</b> {
  color: ${computedStyle.color};
  background: ${computedStyle.backgroundColor};
  font-size: ${computedStyle.fontSize};
  margin: ${computedStyle.margin};
  padding: ${computedStyle.padding};
  border: ${computedStyle.border};
}`;
}

// Show tooltip on hover
document.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target !== tooltip) {
        tooltip.innerHTML = getElementStyles(target);
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    }
});

// Hide tooltip when mouse leaves
document.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
});

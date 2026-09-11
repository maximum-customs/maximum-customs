document.addEventListener("mousemove", (event) => {
    const x = event.clientX;  // horizontal position in the window
    const y = event.clientY;  // vertical position in the window
    console.log(x, y);
});
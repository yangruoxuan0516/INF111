let x = 0;
let y = 0;

document.addEventListener('mousemove', (event) => {
    x = event.pageX;
    y = event.pageY;
});

setInterval(() => {
    console.log("x", x, "y", y);
}, 1000);

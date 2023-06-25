const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let allObjects = []

let lastCall = new Date();
let game = new Game();

// const timeCounter = new GameObject();
// timeCounter.onUpdate = (delta) => console.log(delta);
// timeCounter.onClick = (x, y) => console.log(x, y);

// START MAIN GAME LOOP
function run() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentCall = new Date();

    allObjects = allObjects.filter(obj => !obj.is_deleted);
    allObjects.sort((a, b) => a.layer - b.layer);

    for (const obj of allObjects) {
        if (typeof obj.onUpdate === "function") {
            obj.onUpdate(currentCall - lastCall)
        }
        if (typeof obj.draw === "function") {
            obj.draw(ctx)
        }
    }
    lastCall = currentCall;

    game.process();

    requestAnimationFrame(run);
}

// ADD ONCLICK LISTENER
canvas.addEventListener('click', (event) => {
    const x = event.pageX - (canvas.offsetLeft + canvas.clientLeft);
    const y = event.pageY - (canvas.offsetTop + canvas.clientTop);

    for (const obj of allObjects) {
        if (typeof obj.clickEvent === "function") {
            obj.clickEvent(x, y)
        }
    }
});


// ADD HOVER LISTENER
window.addEventListener('mousemove', (event) => {
    const x = event.pageX - (canvas.offsetLeft + canvas.clientLeft);
    const y = event.pageY - (canvas.offsetTop + canvas.clientTop);

    // console.log(x, y)
    for (const obj of allObjects) {
        if (typeof obj.hoverEvent === "function") {
            obj.hoverEvent(x, y)
        }
    }
});

run();

game.startMenu();


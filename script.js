const start = document.querySelector(".start-button");
const stop = document.querySelector(".stop-button");
const keyevent = document.querySelector(".keyevent");
const keyposition = document.querySelector(".keyposition");

stop.disabled = true;

start.addEventListener("click", () => {
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);

  start.disabled = true;
  stop.disabled = false;
});

stop.addEventListener("click", () => {
  document.removeEventListener("keydown", keyDown);
  document.removeEventListener("keyup", keyUp);

  keyevent.textContent = "";
  keyposition.textContent = "";

  start.disabled = false;
  stop.disabled = true;
});

function keyDown(event) {
  keyevent.innerHTML = `${event.key} key is clicked`;
  keyposition.innerHTML = "Key is Down";
}

function keyUp(event) {
  keyevent.innerHTML = `${event.key} key is Released`;
  keyposition.innerHTML = "Key is Up";
}

function go() {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";
  }, 0);

  return new Promise(function (resolve, reject) {
    function handler(event) {
      event.target.removeEventListener("transitionend", handler);
      resolve(event.target);
    }
    div.addEventListener("transitionend", handler);
  });
}

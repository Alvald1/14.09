var last_id = 1;
function myFoo() {
  let div = document.getElementById("main");
  let con_f = document.getElementById("con" + last_id);
  let btn_f = con_f.children[0];
  let con = con_f.cloneNode(true);
  con.id = "con" + ++last_id;
  let btn = con.children[0];
  btn_f.setAttribute("disabled", true);
  btn.style.backgroundColor = randColor();
  div.appendChild(con);
  randPos();
}
function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

function randPos() {
  const box = document.getElementById("con" + last_id);
  let btn = box.children[0];
  const height = window.innerHeight - btn.style.height;
  const width = window.innerWidth - btn.style.width;
  let randY = Math.floor(Math.random() * height + 1);
  let randX = Math.floor(Math.random() * width + 1);
  box.style.transform = `translate(${randX}px, ${randY}px)`;
}

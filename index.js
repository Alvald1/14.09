var last_id = 1;
function myFoo() {
  var div = document.getElementById("con");
  var btn_f = document.getElementById("btn" + last_id);
  var btn = btn_f.cloneNode(true);
  btn.id = "btn" + ++last_id;
  btn_f.setAttribute("disabled", true);
  btn.style.backgroundColor = randColor();
  btn.style.left = "800px";
  div.appendChild(btn);
}
function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

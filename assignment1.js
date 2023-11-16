function onClick() {
  counter++;
  let contactme = document.querySelector("#contactme");
  contactme.remove();
  let date = document.querySelector("#date");
  let time = document.querySelector("#time");

  let aside = document.querySelector("aside");
  let p = document.createElement("p");
  p.innerHTML =
    "Thank You...\nYour message has been sent!\nYou sent message" +
    counter +
    " times:";
  aside.appenChild(p);
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerHTML = date.value + " " + time.value;
  ul.appendChild(li);
  aside.appendChild(ul);

  let a = document.createElement("a");
  a.innerHTML = "To send another message, click here";
  a.href = "index.html";
}
let counter = 0;
let submit = document.querySelector("#submitButton");
submit.addEventListener("click", onClick);

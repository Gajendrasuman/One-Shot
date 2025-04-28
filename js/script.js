// const el = document.querySelector("div");
// el.style.height = "100px"
// el.style.width = "100px"
// el.style.background = "#f00"

// const timeout = setTimeout((e = []) => {
//   e.forEach((f)=>
//   alert(f)
//   )
// }, 2 * 1000, ["hello", "world"])

// clearTimeout(timeout)

// const interval = setInterval(() => {
//   el.innerHTML = new Date
// }, 1 * 1000)
// clearInterval(interval)

// el.innerHTML = "<p>hack</p>"
// el.innerText = "<p>hack</p>"; //Prefered way

// const p = document.createElement("p");
// p.setAttribute("class", "p") //<p class="p"></p>
// p.innerText = "Hack" // <p class="p"> Hack</p>
// p.style.color = "white"
// el.appendChild(p)

// const e = el.getAttribute("class") // to get attribute values
// console.log(e)

// el.addEventListener("mouseover", () => {
//   el.style.background = "#0f0"
// })

// el.addEventListener("mouseout", () => {
//   el.style.background = "#f00"
// })

// el.removeEventListener("mouseout", () => {
//   el.style.background = "#f00"
// })
// el.removeEventListener("mouseover", () => {
//   el.style.background = "#0f0"
// })


const name = document.querySelector("input[type='text']");
const pass = document.querySelector("input[type='password']");
// console.log(name, color);

// name.oninput = (e) => {
//   console.log(e.value);
// }

// name.onkeyodown = (e) => {
//   console.log(e);
// }

const form = document.querySelector("form");
// form.onsubmit = (e) => {
//   e.preventDefault();
//   console.log(e)
//   const n = e.target[0].value;
//   const c = e.target[1].value;
//   console.log(n, c);
// }

const show = document.querySelector("#btn");

// let z = 0;
// show.onclick = () => {
//   if (z === 0) {
//     pass.setAttribute("type", "text")
//     z = 1;
//   } else {
//     pass.setAttribute("type", "password")
//     z = 0;
//   }
// }


const l = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(l.slice(2, 5));
const a = "dshfkhsk121dkfh1651sk"
// console.log(a.split("f")[1].replace(/[^A-Za-z]/g, ""));
// console.log(a.split("f")[1].replaceAll("k", ""));

const n = "c a d d f g h s"
// console.log(a.split("").sort()); //ASCII

// console.log(n.split(" ").join("-"));
// console.log(a.split("f")[1].replace(/[^A-Za-z]/g, ""));

const c = "apple mango orange grapes";


// console.log(c.split(" ").join ("\n"));


console.log(a.split("")
  .filter((a) => a == "f")
);


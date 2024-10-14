let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " How r u";

let divs = document.querySelectorAll(".box");
let idx=1;
for( div of divs){
    div.innerText = `new unique value ${idx} `;
    idx++;
}

// divs[0].innerText = "new value 1";
// divs[1].innerText = "new value 2";
// divs[2].innerText = "new value 3";

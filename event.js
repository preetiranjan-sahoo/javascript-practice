let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button 1 clicked");

//     let a= 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("inside hover div");
// };

// btn1.addEventListener("click", () =>{
//     console.log("clicked 1");
// })
// btn1.addEventListener("click", () =>{
//     console.log("clicked 2");
// })

// const handler3 = () =>{
//     console.log("clicked 3");
// }

// btn1.addEventListener("click", () =>{
//     console.log("clicked 4");
// })

// btn1.removeEventListener("click", handler3);

// let modeBtn = document.querySelector("#mode");
// let curMode = "Light";

// modeBtn.addEventListener("click", () => {
//     if(curMode == "Light"){
//         curMode="Dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         curMode = "Light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(curMode);
// })


let modeBtn = document.querySelector("#mode");
let curMode = "Light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if(curMode == "Light"){
        curMode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMode);
})

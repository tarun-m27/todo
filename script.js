let inp = document.getElementById("inp");
let ul = document.getElementById("ul");
let btn = document.getElementById("btn");
let temp = `<span  class='items'><li class='li' count='0'>***</li><button class='dlt'><img class='del' src='delete.svg'></button></span>`;

btn.addEventListener('click', () => {
    if (inp.value.trim() !== "") {
        let str = temp.replace("***", inp.value);
        ul.innerHTML += str;
        inp.value = ""; 
    } else {
        alert("Please add a task");
    }
});

ul.addEventListener('click', (event) => {
   if (event.target.classList.contains("del")) {
    let par = event.target.closest(".items");
        par.remove();
   }
});

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains("li")) {
        if(event.target.getAttribute("count")=="0"){
        event.target.style.textDecoration = "line-through";
        event.target.setAttribute("count","1")
        }
        else{
            event.target.style.textDecoration = null;
            event.target.setAttribute("count","0")
        }
    }
   
});
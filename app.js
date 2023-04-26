const loginBtn = document.querySelector("button");
const modal = document.querySelector(".modal");

loginBtn.onclick = () => {
    modal.style.visibility = "unset";
}

window.onclick = (event) => {
    if(event.target == modal){
        modal.style.visibility = "hidden";
    }
}

const btn = document.querySelector("#btn");

btn.onclick = () => {
    modal.style.visibility = "hidden"
}
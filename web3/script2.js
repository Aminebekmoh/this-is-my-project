let  Email = document.getElementById("email").value;
let  Password = document.getElementById("password").value;
let empty = document.getElementById("empty");
let creat = document.getElementById("creat");
let show = document.querySelector(".show");
let container = document.getElementById("container");
let bay = document.querySelector(".bay");

function login() {
    if (Email === "" || Password === "") {
       empty.style.display = "block"; 
    }else {
        show.style.display = "block";
    }
}

function signup() {
    creat.style.display = "inline-block";
    container.style.display = "none";
}

let x = ()=> {
    container.style.display = 'none';
    bay.style.display = 'inline-block';

}

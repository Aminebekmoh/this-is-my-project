let list = document.getElementById("List");
let input = document.getElementById("input");



function addtask(){
    if (input.value == "") {
        alert("Please enter a task.");
        
    }else{
    let li = document.createElement("li");
    li.innerHTML = input.value +' <button class="delete" onclick="this.parentElement.remove()">Delete</button>';
    list.appendChild(li);
    input.value = ""
return false;}
}

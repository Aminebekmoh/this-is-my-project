let nom = document.querySelector(".name")
let info = document.querySelector(".info")
const crew = document.querySelectorAll(".crew")
let bounty = document.querySelector('.bounty')
let fruit = document.querySelector('.fruit')
let job = document.querySelector('.job')
let size = document.querySelector('.size')
let status = document.querySelector('.status')
info.style.display="none"
async function get() {
    const respanse = await fetch("https://api.api-onepiece.com/v2/characters/en")
    const data = await respanse.json() 
    console.log(data);
    document.querySelector(".content").innerHTML += 
    `

    <select class="select" id="select" > 
        <option value="select">Select</option>
        ${data.map((characters) =>
            `<option value='${ characters  }'> ${characters.name}</option>`)}

    </select>
    
    `;
    const select = document.querySelector(".select")
    let h1 = document.querySelector(".h1")
    let age = document.querySelector(".age")
    

    select.addEventListener("change", (e) => {
    
    const selectedIndex = e.target.selectedIndex;
    h1.textContent=`${data[selectedIndex-1].name}`
    nom.textContent=`${data[selectedIndex-1].name}`

    crew.forEach((element, index) => {
        element.textContent = `${data[selectedIndex-1].crew.name}`;
    });
    bounty.textContent=`${data[selectedIndex-1].bounty}`
    if (data[selectedIndex-1].fruit && data[selectedIndex-1].fruit.name) {
        fruit.innerHTML = `${data[selectedIndex-1].fruit.name}`;
    } else {
        fruit.innerHTML = "No fruit";
    }

    job.textContent=`${data[selectedIndex-1].job}`
    size.textContent=`${data[selectedIndex-1].size}`
    status.textContent=`${data[selectedIndex-1].status}`

    info.style.display="block";

    

    age.textContent=`${data[selectedIndex].age}`
    

    })
}
get();

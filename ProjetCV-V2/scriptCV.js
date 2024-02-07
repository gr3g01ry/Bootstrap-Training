const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
console.log(tooltipTriggerList);
console.log(tooltipList);
// alert('test');
// $(document).ready(function(){
//     // $('[data-toggle="tooltip"]').tooltip(); 
//     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.
//   });

let changeColor=()=>{
    let h2Set=document.querySelector('#aboutMe h2');
    console.dir(h2Set);
    let test=setInterval(function(){
        h2Set.style.backgroundColor= randColor();
        changeFont();
        },500);
    setTimeout(()=>{
        clearInterval(test)
    },24000)
}
changeColor();

function randColor(){
    let r,g,b;
    r=Math.round(Math.random()*255);
    g=Math.round(Math.random()*255);
    b=Math.round(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

let arrayFont=['Arial','Segoe UI','cursive',"Comic Sans MS", "Comic Sans",'Tahoma', 'Geneva', 'Verdana', 'sans-serif', 'Bungee Spice','Moirai One', 'Pacifico','Single Day'];
let longTabArray=arrayFont.length;

let changeFont=()=>{
    let h2Set=document.querySelector('#aboutMe h2');
    h2Set.style.fontFamily=arrayFont[(Math.round(Math.random()*longTabArray))];
    // h2Set.style.fontFamily="Comic Sans MS";
    console.log(h2Set.style.fontFamily);
}
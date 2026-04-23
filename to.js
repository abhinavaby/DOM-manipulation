

    let range = prompt("enter the range");

for(let i=0;i<range;i++){
    let a= document.createElement("p");
    let b=prompt("enter the text");
    a.innerText = `${i + 1}. ${b}`; 
    document.body.appendChild(a);
   
   
}
document.querySelectorAll("p").forEach(p=>{
    p.addEventListener("click",()=>{
        p.style.textDecoration="line-through";
    })
})


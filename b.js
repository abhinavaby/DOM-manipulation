document.querySelectorAll("li").forEach(li=>{
    li.addEventListener("click",()=>{
        alert(li.innerText);
    })
})
document.querySelectorAll("li").forEach(i=>{
    i.style.color="red";
})
let a="a bh in av";
let b=a.split(" ");
console.log(b);
for(let i of a){
    console.log(i);
}


let c=[1,2,3,4,5];

c.forEach(i=>{
    console.log(i);
})
for(let i of c){
    console.log(i);
    
}
alert(document.getElementById("heading").innerText);
c.push(6);
console.log(c);
c.forEach(i=>{
    console.log(i);
})
c[2]=10;
console.log(c);
c.unshift(0);
console.log(c);
c.shift();
console.log(c);
console.log(c.indexOf(1));


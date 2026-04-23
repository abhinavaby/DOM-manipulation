const heading=document.getElementById("heading");
let num=10;
heading.innerHTML=`<h2>food `+10+` are us</h2>`;
heading.innerText=`food `+num+` are us`;
const fruits=document.getElementsByClassName("fruits");
fruits[0].innerHTML=`<h3>apple</h3>`;
fruits[1].innerText=`banana`;
fruits[2].innerHTML=`<h3>orange</h3>`;
const c=["blue","red","green"];
n=0;
addEventListener("click",()=>{
    heading.style.color=c[n];
   ;
    n++;
    if(n==c.length){
        n=0;
    }
})
alert(fruits.length);


setInterval(()=>{
    for(let fruit of fruits){
        fruit.style.color=c[n];
       
    }
    n++;
   
    if(n==c.length){
        n=0;
    }
},1000)

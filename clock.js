let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");

function clock(){
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();

    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }

    hrs.innerText=h;
    mins.innerText=m;
    secs.innerText=s;

}

setInterval(clock,1000);
function validate(){
    let username = document.getElementById("username").value;
    let ph = document.getElementById("ph").value;
    let email = document.getElementById("email").value;

    if(ph.length == 10 && email.includes("@")){
       


        alert("Registration successful");
        window.open("new.html");
    }
    else{
        alert("Registration failed");
    }

}
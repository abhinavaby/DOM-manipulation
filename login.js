function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(password.length==6){
        alert("Login successful");
        window.open("new.html");
    }
    else{
        alert("Login failed");
    }
}
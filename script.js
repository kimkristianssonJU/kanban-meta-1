
// hämta id från index.html
let userNameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let logInButton = document.getElementById('btnInlogg');

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
// inloggningsida ska inte visas
div2.style.display = "none";

divWrong = printOutWrong();
stayInlog();


logInButton.addEventListener("click", function(){

    fetch("users.json")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        for(i=0; i<json.length; i++)
        {
            if(userNameInput.value === json[i].name && passwordInput.value === json[i].pass)
            {
                div1.style.display = "none";
                div2.style.display = "initial";
                localStorage.setItem("userId", i);
                location.reload(); // för att log out button ska visas
            }else{
                divWrong.style.display = "initial";
            };
        }
    })
});

// en funktion till att visa meddelande om användare har skrivit fel user eller pass
function printOutWrong(){
    let div = document.createElement('div');
    div.id = "LogInPage2";
    document.body.appendChild(div);
    
    let header = document.createElement("h1");
    header.innerHTML = "Wrong user or password";
    div.appendChild(header);

    div.style.display = "none";
    return div;  
}

// skapa en log out button
function logOutForm(){
    let logOutBtn = document.createElement("button")
    logOutBtn.innerText = "Log out";
    logOutBtn.id = "logOut";
    div2.appendChild(logOutBtn);
}
// användaren ska vara inloggad om hen har redan skrivit rätt user och pass
function stayInlog(){
    let l = localStorage.getItem("userId");
    if (l !== null){
        div1.style.display = "none";
        div2.style.display = "initial";
        logOutForm();
        logOut();
    }
    else{
        div1.style.display = "initial";
        div2.style.display = "none";
    }
}
// rensa localStorage när användaren klickar på log out button
function logOut(){
    let logOutBtn = document.getElementById("logOut");
    logOutBtn.addEventListener("click", function(){
        localStorage.clear();
        location.reload();

    })
}

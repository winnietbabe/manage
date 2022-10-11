const passwordInput = document.getElementById("password")
const errorbtn = document.getElementById("errorbtn")
const error = document.getElementById("error")

checkMail = () =>{
    if (passwordInput === "qwerty@com"){
        error.innerText = " welcome "
        
    }
    else{
        // passwordInput.classList.style.display = "1px solid red"
        error.innerText = "please user email"
    }
} 
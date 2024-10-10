//my written json format data never fetch
//i always have to copy it from the notes section... 
//so firebase not takeing . as key 

let closeLoginBox = document.getElementById("closeBox"); //cross mark 
let hideBox = document.querySelector("#loginBox");//close loginpage
let clickLogin = document.querySelector("#loginBtn"); //navbar

closeLoginBox.addEventListener("click", ()=>{
    hideBox.style.display = "none";
})

clickLogin.addEventListener("click", ()=>{
    hideBox.style.display = "block";
})

//toggle signIn and signUp
let logToggle = document.getElementById("logToggle");
logToggle.style.cursor = "pointer";
let logOption = document.getElementById("logOption");
let hideP = document.querySelector("#loginBox  p");
logToggle.addEventListener("click", ()=>{
    let text = logToggle.innerText;
    if(text == "Sign Up"){
        logToggle.innerText = "Back";
        logOption.innerText = "Sign Up";
        hideP.style.display = "none";
    }
    else{
        logToggle.innerText = "Sign Up";
        logOption.innerText = "Sign In";
        hideP.style.display = "block";
    }
})

//sign in and signup control
//email address is itself a unique id
logOption.addEventListener("click",()=>{
    userAuthentication();
})
let users = [];
function userAuthentication(){
    let text = logOption.innerText;
    if(text == "Sign Up"){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let obj = {
            [email] : {password}
        };
        console.log(obj);

    }
}
let url = "https://serverstrikers024-default-rtdb.firebaseio.com/users";
async function fetchData(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error("error fetching data", error);
    }
}
fetchData(url);
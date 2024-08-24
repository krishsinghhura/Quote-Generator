let generate=document.querySelector(".generate");
let text=document.querySelector(".text");
let tweet=document.querySelector(".tweet");
let copy=document.querySelector("#copy");
let allBox=document.querySelector(".allbox");

let url="https://api.quotable.io/quotes/random";

async function api(){

    allBox.style.display="block";

    let response=await fetch(url);
    let data=await response.json();

    allBox.style.display="none";

    text.innerHTML=data[0].content;
}
function copied() {
    text.select();
    document.execCommand("copy");
}

function twitter(){
    window.open("https://twitter.com/intent/tweet?text="+text.innerHTML,"height=300 widht=600","Tweet Window");
}
tweet.addEventListener("click",twitter);
generate.addEventListener("click",api);
copy.addEventListener("click",copied);
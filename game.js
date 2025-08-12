let num=Math.round(Math.random()*100);
let life=10;

function game(){
    let a=document.querySelector("#message");
    let userinput = Number(document.querySelector("#display").value);
    life--;
    console.log(life);
    document.getElementById("message").style.display="block"
    if(userinput==num){
        location.href="win.html";
    }
    else if(life == 0){
        location.href="lose.html";
    }
    else if(userinput>num){
        a.innerHTML = "Oops! The number is too large and your life left is " + life;
    }
    else if(userinput<num){
       a.innerHTML = "Oops! The number is too small and your life left is " + life;
    }
    document.querySelector("#display").value="";
}
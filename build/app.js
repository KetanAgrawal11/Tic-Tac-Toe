let buttons= document.querySelectorAll(".btn");
let flag=1;
let count=0;
let isWinner=false;
let WinningPattens= [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let resetbtn=document.querySelector("#reset");
let Winner= document.querySelector(".display_Winner");
let result = document.querySelector(".winner")

const checkWinner=()=>{
    WinningPattens.forEach(pattern=>{
        if(buttons[pattern[0]].innerText==buttons[pattern[1]].innerText&&buttons[pattern[1]].innerText==buttons[pattern[2]].innerText&&buttons[pattern[2]].innerText!=""){
            result.innerText="Player "+buttons[pattern[0]].innerText+" is Winner!"
            Winner.classList.remove("hidden");
            Winner.classList.add("flex");
            buttons.forEach(btn =>{
                btn.disabled=true;
            });
            isWinner=true;
            return;
        }
    });
}


const reset = ()=>{
    buttons.forEach((btn) => {
        btn.innerText=""
        btn.disabled=false
        flag=1
        count=0
        Winner.classList.remove("flex");
        Winner.classList.add("hidden");
        isWinner=false;
        btn.style.color="#b0413e"
    });
}

buttons.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        
        if (flag==1){
            btn.innerText="X";
            btn.style.color="#219ebc"
            flag=0;
        }
        else{
            btn.innerText="O" ;
            flag=1;
        }
        btn.disabled=true;
        count++;
        if(count>=5)
            checkWinner();
        if(count>8&& !isWinner){    
            result.innerText="It's a Tie!"
            Winner.classList.remove("hidden");
            Winner.classList.add("flex");
        }
                
    });
});


resetbtn.addEventListener("click", reset);


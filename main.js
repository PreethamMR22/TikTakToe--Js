




let boxes=document.querySelectorAll(".box");
let turn0=true; //player0 and playerX
let reset=document.querySelector(".reset-btn");
let winnerdiv=document.querySelector(".winnerdiv");
let body=document.getElementsByTagName("body");
let winelement=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let newgame=document.querySelector(".newgame");




const resetitem=()=> {
  turn0=true;
  winnerdiv.classList.add("hide");
   for(box of boxes) {
    box.innerText="";
    box.classList.remove("brightBackground");
    box.classList.remove("boxdisable");
   }
   newgame.style.display='none';
   reset.style.display='block';

}


boxes.forEach((box)=> {
    

    box.addEventListener("click",()=> {
        box.classList.add("brightBackground");
        if(turn0==true) {
            box.innerText="O";
            turn0=false;
        }
        else {
            box.innerText="X";
            turn0=true;
        }
        box.classList.add("boxdisable");
        check(winelement,boxes);
    })

});
const disableboxes=()=> {
   for(box of boxes) {
    box.classList.add("boxdisable");
   }
};
let newelement=document.createElement("div");
const showwinner=(winner)=>  {
    disableboxes();
    let winnername;
    if(winner==='O') {
        winnername="Player 1";
    }
    else winnername="Player 2";
   
    newelement.innerText=winnername;
    newelement.style.height='10rem';
    newelement.style.width='17rem';
    newelement.style.fontSize='4rem';
    newelement.style.color='white';
    newelement.style.fontWeight='900';
    winnerdiv.append(newelement);
    winnerdiv.classList.remove("hide");
   
    body[0].classList.add("reducebrightness");
   
    //work on this
 
 boxes[0].style.opacity='0.1';
 boxes[1].style.opacity='0.1';
 boxes[2].style.opacity='0.1';
 boxes[3].style.opacity='0.1';
 boxes[4].style.opacity='0.1';
 boxes[5].style.opacity='0.1';
 boxes[6].style.opacity='0.1';
 boxes[7].style.opacity='0.1';
 boxes[8].style.opacity='0.1';
    
    newgame.style.display='block';
    reset.style.display='none';
 disableboxes();
}
const check=()=> 
{
    for(pattern of winelement) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1==pos2 && pos2==pos3) {
                showwinner(pos1);
    
            }
        }
    
       }
}
const newgameitem=()=> {
}
reset.onclick=()=> {
    console.log("The reset buton is clicked");
    resetitem();
}
newgame.onclick=()=> {
    resetitem();
    body[0].classList.remove("reducebrightness");


    boxes[0].style.opacity='1';
    boxes[1].style.opacity='1';
    boxes[2].style.opacity='1';
    boxes[3].style.opacity='1';
    boxes[4].style.opacity='1';
    boxes[5].style.opacity='1';
    boxes[6].style.opacity='1';
    boxes[7].style.opacity='1';
    boxes[8].style.opacity='1';

}

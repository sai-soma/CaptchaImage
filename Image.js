let images=document.querySelectorAll("img");
let resetBtn=document.querySelector("#reset");
let verifyBtn=document.querySelector("#verify");
let output=document.querySelector("#output")
console.log(resetBtn)
resetBtn.style.display="none";
verifyBtn.style.display="none";
let clickedTimes=0;
let clickArray=[];

images.forEach((elem,index)=>{
    elem.addEventListener("click",()=>{
        clickedTimes=clickedTimes+1;
        if (clickedTimes==2) 
        {   console.log(index);
            clickArray.push(elem)
            resetBtn.style.display="none";
            verifyBtn.style.display="";
        } 
        if (clickedTimes==1) 
        {   clickArray.push(elem)
            console.log(index)
            resetBtn.style.display="";
        }
        if (clickedTimes>2) {
            alert("You Can only select 2 images")
        }
    })
})
console.log(clickArray)
function check(){
    let str=``;
    if(clickArray[0].className==clickArray[1].className){
        alert("Verified!!");
       str=str+"You are a human. Congratulations!";
    }
    else{
        str=str+"We can't verify you as a human."
    }
    output.innerHTML=str;
}
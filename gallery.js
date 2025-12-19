var allImg=document.images;
console.log(allImg);
for(i=0;i<=allImg.length-1;i++){
    allImg[i].src=`./images/${i+1}.jpg`
    if(i%2==0){
        allImg[i].className="rightRotate"
    }
    else{
        allImg[i].className="leftRotate"
    }
}
function bigWindow(pathImg,val){
    // console.log(pathImg)
    document.getElementById("bigImage").style.display="flex";
    document.getElementById("img").style.backgroundImage=`url(${pathImg})`;
    document.getElementById("imageName").innerHTML=val;
}
function closeBigWindow(){
    document.getElementById("bigImage").style.display="none";
}
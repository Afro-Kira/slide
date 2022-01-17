
function back(lien,color,textColor,title){
   
    
    document.querySelector('#image').src =lien;
document.querySelector(".background").style.background=color;
document.querySelector('body').style.background=color ;
document.querySelector('body').style.color=textColor ;
document.querySelector('#title').innerHTML=title;
}

var FullImgBox = document.getElementById("FullImgBox"); 
var FullImg = document.getElementById("FullImg"); 

function openFullImg(src) 
{
    FullImgBox.style.display = "flex";
    FullImg.src = src;
}

function closeFullImg() 
{
    FullImgBox.style.display = 'none';
}

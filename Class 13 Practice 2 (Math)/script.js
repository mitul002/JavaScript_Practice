function Roll()
{
    let randomNumber = Math.ceil(Math.random()*6);
    let imageSource = "images/"+randomNumber+".png";
    document.getElementById('dice').src =imageSource;
}


//If we use this process we don't need to write anything in HTML file


document.getElementById('btn'). onclick = function ()
{
    document.getElementById('btn').innerHTML = "Message Sent";
    document.getElementById('btn').style.transform= "scale(1.5)";

}


document.getElementById('form').onkeypress=function()
{
    document.getElementById('txt').innerHTML ="Key Pressed 🙂"
}

document.getElementById('form').onkeyup= function() //where to do, what function to do
{
    document.getElementById('txt').innerHTML ="Key Release ☹️" //what to do
}

document.getElementById('body').onscroll=function()
{
    document.getElementById('txt').innerHTML ="Scrolling ↕️"
}


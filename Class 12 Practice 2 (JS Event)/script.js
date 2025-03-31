function Button() {
    // Access the button by its ID and change its content and style
    document.getElementById('btn').innerHTML = "Message Sent";
    document.getElementById('btn').style.transform= "scale(1.5)";
}

function keypress()
{
    document.getElementById('txt').innerHTML ="Key Pressed 🙂"
}

function keyrelease()
{
    document.getElementById('txt').innerHTML ="Key Release ☹️"
}


function onLoad()
{
    alert("loading... press OK")
    document.getElementById('txt2').innerHTML ="Website loaded"
} 

function windowResize()
{
    document.getElementById('textarea').style.height="200px";
    document.getElementById('form').style.fontFamily="arial";
    document.getElementById('form').style.color="dodgerblue";
}


function scroll()
{
    document.getElementById('txt').innerHTML="Scrollling ↕️"
}

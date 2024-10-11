//Event Driven Function

function isSubscribed()
{
    console.log("Subscribed")
}

function isLiked()
{
    console.log("Liked")
}


document.getElementById('btn1').addEventListener
('click',isSubscribed)

document.getElementById('btn2').addEventListener
('click',isLiked)


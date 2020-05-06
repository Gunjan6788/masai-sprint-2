var chessBox = document.getElementById("grid")
var div = []
var img = []


function btn(){
    var firstUser = document.getElementById("firstUser").value
    var secondUser = document.getElementById("secondUser").value
    document.getElementById("Player1").innerHTML = "Player1: "+firstUser
    document.getElementById("Player2").innerHTML = "Player2: "+secondUser
    document.getElementById("firstBox").hidden = true
}

for (i = 1; i <= 64; i++) {
    div[i] = document.createElement("div")
    img[i] = document.createElement("img")
    div[i].style.width = "70px"
    div[i].style.height = "70px"
    div[i].style.alignContent = "center"
    chessBox.append(div[i])

    div[i].setAttribute("class", "dropezone")
    img[i].setAttribute("id", "draggable")

    ////color of box/////////////////////////////////////////
    if (i >= 1 && i <= 8 || i >= 17 && i <= 24 || i >= 33 && i <= 40 || i >= 49 && i <= 56) {
        if (i % 2 == 0) {
            div[i].style.backgroundColor = "#757575"
        }
    }
    if (i >= 9 && i <= 16 || i >= 25 && i <= 32 || i >= 41 && i <= 48 || i >= 57 && i <= 64) {
        if (i % 2 == 1) {
            div[i].style.backgroundColor = "#757575"
        }
    }
    ////////////////////////////////////////////////////////

    ////////for black pieces////////////////////////////////////////////////////////////
    if (i == 1 || i == 8) {
        div[i].appendChild(img[i])
        img[i].src = "resources/elephant.png"
    }

    if (i == 2 || i == 7) {
        div[i].appendChild(img[i])
        img[i].src = "resources/knight.png"
    }

    if (i == 3 || i == 6) {
        div[i].appendChild(img[i])
        img[i].src = "resources/bishop.png"
    }
    if (i == 4) {
        div[4].appendChild(img[i])
        img[i].src = "resources/king.png"
    }
    if (i == 5) {
        div[5].appendChild(img[i])
        img[i].src = "resources/king.png"
    }
    if (i >= 9 && i <= 16) {
        div[i].appendChild(img[i])
        img[i].src = "resources/pawn.png"
    }
    /////////////////////////////////////////////////////////////////////////////

    /////////for white pieces /////////////////////////////////////////////////  
    if (i == 57 || i == 64) {
        div[i].appendChild(img[i])
        img[i].src = "resources/elephant-white.png"
    }

    if (i == 58 || i == 63) {
        div[i].appendChild(img[i])
        img[i].src = "resources/knight-white.png"
    }
    if (i == 59 || i == 62) {
        div[i].appendChild(img[i])
        img[i].src = "resources/bishop-white.png"
    }
    if (i == 60) {
        div[i].appendChild(img[i])
        img[i].src = "resources/king-white.png"
    }
    if (i == 61) {
        div[i].appendChild(img[i])
        img[i].src = "resources/king-white.png"
    }
    if (i >= 49 && i <= 56) {
        div[i].appendChild(img[i])
        img[i].src = "/home/masai/coding/sprint_2/resources/pawn-white.png"
    }
    ////////////////////////////////////////////////////////////////////////


}

var dragged
var img = document.getElementsByTagName("img")
var div = document.querySelectorAll("div")
var count = 0

for (var i = 0; i < img.length; i++) {

    img[i].addEventListener("drag", function (event) {

    });

    img[i].addEventListener("dragstart", function (event) {
        dragged = event.target
        event.target.style.opacity = "1"
    })

    div[i].addEventListener("dragenter", function (event) {
        if (event.target.className == "dropzone") {
            event.target.style.background = "purple";
        }

    });
    div[i].addEventListener("dragenter", function (event) {
        if(event.target.firstChild!=null)
            event.target.firstChild.remove()
    })
    div[i].addEventListener("dragover", function (event) {
        event.preventDefault()
        //event.target.childNodes.remove()
    })

    div[i].addEventListener("drop", function (event) {
        event.preventDefault()
        if (event.target.className = "dropezone") {
            dragged.parentNode.removeChild(dragged);
            dragged.parentNode = event.target
            console.log(dragged.parentNode)
            event.target.appendChild(dragged);
        }
    })
}

console.log(div[8].firstChild)
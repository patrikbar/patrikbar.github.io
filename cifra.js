function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
    }
function changeColor() {
    let newColor = getRandomColor();
    document.querySelector("#main").style.background = "none";
    document.querySelector("#main").style.backgroundColor = newColor;
    }
//-----------------------------------------------------------
function randInt(){
    let y = Math.floor(Math.random() * 101);
    return y;
}

let y = randInt();


window.onload = function() {
    randInt();
}

function preveriVnos(v){
    var dovoljeni=/^[0-9]+$/;
    if (!v.match(dovoljeni)){
        return false;
    }
}

function primerjava() {
    var x = document.getElementById("input").value;
    if(preveriVnos(x) == false) {
        vsebina = "Neveljaven vnos!";
        dodajVsebino(vsebina);
        return;
    }
    if(x < y) {
        vsebina = "Prenizko";
    }
    else if(x > y) {
        vsebina = "Previsoko";
    }
    else if(x = y) {
        vsebina = "Pravilno, čestitke! <a href='cifra.html' text-color=getRandomColor()>Pritisni</a>, če bi rad igral znova.";
    }
    dodajVsebino(vsebina)
    
}


function dodajVsebino(x) {
    document.getElementById("obvestilo").innerHTML = x;
}


//lahko tudi vnesemo s tipko enter
window.addEventListener("keyup", function(dogodek) {
    if(dogodek.keyCode === 13) {
        dogodek.preventDefault();
        document.getElementById("button").click();
    }
}, false)


let gumb = document.getElementById("button");
gumb.onclick = function() {
    changeColor();
    primerjava();
}
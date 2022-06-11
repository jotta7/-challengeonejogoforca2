var portal = document.querySelector('.portal')

function play(){
    mostrar()
    setInterval(onLoadPlay, 2000)
}
function adicionar(){
    mostrar()
    setInterval(onLoadAdd, 2000)
}
function creditos(){
    mostrar()
    setInterval(onLoadCredito, 2000)
}
function home(){
    mostrar()
    setInterval(onLoadHome, 2000)
}


function onLoadPlay(){
    location.href = "forca.html"
}

function onLoadHome(){
    location.href = "index.html"
}

function onLoadAdd(){
    
    location.href = "adiciona.html"
}

function onLoadCredito(){
    
    location.href = "creditos.html"
}

function mostrar(){
    portal.style.display = "block"
}


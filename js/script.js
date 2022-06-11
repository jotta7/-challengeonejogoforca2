let palavras = JSON.parse(localStorage.getItem("palavras"));
let tentativas = 6;
let listaDinamica = [];
let palavraCategoria;
let palavraSorteada;

const acertou = new Audio('./songs/Yeah.mp3')
const errou = new Audio('./songs/Idiot.mp3')
const perdeu = new Audio('./songs/perdeu.mp3')
const victory = new Audio('./songs/WubbaLubbaDubDubVenceu.mp3')

const dancaVic = document.querySelector('#r1')
const danca = document.querySelector('#r2')
const rezar = document.querySelector('#r3')
const raiva = document.querySelector('#r4')


sorteiaPalavra()
function sorteiaPalavra(){
    let indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;
} 

montarPalavra()
function montarPalavra(){
    const categoriaM = document.getElementById('categoria')
    categoriaM.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById('palavraSecreta')
    palavraTela.innerHTML = '';

    for(i = 0; i < palavraSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;" //esse conjunto para o js gera um espaço
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavra();
    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagem();
        errou.play();
        raiva.style.display = "block"
        setInterval(spanRaiva, 2500);

        if(tentativas == 0){
            perdeu.play();
            abreModal("Ha cara!", "não foi dessa vez ... A palavra secreta era <br>" + palavraSorteada);
        }
        
    }else{
        for(i = 0; i < palavraSorteada.length; i++){
            for(i=0; i < palavraSorteada.length; i++){
                if(palavraSorteada[i] == letra){
                    listaDinamica[i] = letra;
                    acertou.play()
                    danca.style.display = "block"
                    setInterval(spanDanca, 2500)
                }
        }
    }


    

        let vitoria = true;
        for(i=0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] != listaDinamica[i]){
                vitoria = false;
            }    
        }
        if(vitoria == true){
            abreModal("WubbaLubbaDubDub", "Você salvou o Morty ...")
            tentativas = 0;
            victory.play();
            dancaVic.style.display = "block"

        }
    }

}

function spanDanca(){
    danca.style.display = "none"
}

function spanReza(){
    rezar.style.display = "none"
}
function spanRaiva(){
    raiva.style.display = "none"
}

function carregaImagem(){
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./img/cabeca.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./img/corpo.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./img/umbraco.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./img/braços.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./img/umaperna.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            rezar.style.display = "block"
            setInterval(spanReza, 3000);
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;
        default:
            document.getElementById('imagem').style.background = "url('./img/forca0.png')"
            document.getElementById('imagem').style.backgroundSize = "cover" 
            break;   
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLongTitle");
    modalTitulo.innerText = titulo

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem

    $("#myModalCenter").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




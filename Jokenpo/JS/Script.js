var placarPC = parseInt; //variaveis para guardar o valor 
var placarPlayer  = parseInt;
var jogador
placarPC = 0;
placarPlayer = 0;

function nome(){
    jogador = prompt("Digite o seu nome!");
        
    if (jogador == '' || jogador == null) {
        return nome()
    }
    else if (jogador.length > 10){
            alert("número maximo de 10 Caracteres")
            return nome();
    }
    else{
        alert("Para ganhar atinja 10 pontos!!!")

        document.getElementById("NomeDoJogadorTitulo").textContent = jogador; 
        document.getElementById("NomeDoJogadorFoto").textContent = jogador;
    }
    
    document.getElementById("PlacarNumPC").textContent = placarPC;
    document.getElementById("PlacarNumPLAYER").textContent = placarPlayer;

}

function Seleciona(){
    

    var RadioPedra = document.getElementById('Pedra');
    var RadioPapel = document.getElementById('Papel');
    var RadioTesoura = document.getElementById('Tesoura');

    if (RadioPedra.checked) {
        document.getElementById("imagemplayer").src="IMGS/PedraIcon.png";
        document.getElementById("imagemplayer").style.width="150px";
        document.getElementById("imagemplayer").style.marginRight="-75px"
    }
    else if (RadioPapel.checked) {
        document.getElementById("imagemplayer").src="IMGS/PapelIcon.png";
        document.getElementById("imagemplayer").style.width="150px";
        document.getElementById("imagemplayer").style.marginRight="-75px"
    }
    else if (RadioTesoura.checked) {
        document.getElementById("imagemplayer").src="IMGS/TesouraIcon.jpg";
        document.getElementById("imagemplayer").style.width="150px";
        document.getElementById("imagemplayer").style.marginRight="-75px"
    }
}

function Jogar(){

    if (document.getElementById("Pedra").checked == false && document.getElementById("Tesoura").checked== false && document.getElementById("Papel").checked== false){
        alert("Selecione, Pedra, Papel ou Tesoura para poder jogar!!")
    }
    else{

        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById("imagemcomputador").src="IMGS/PedraIcon.png";
                document.getElementById("imagemcomputador").style.width="150px";
                document.getElementById("imagemcomputador").style.marginLeft="-72px"
                break;
            case 1:
                document.getElementById("imagemcomputador").src="IMGS/PapelIcon.png";
                document.getElementById("imagemcomputador").style.width="150px";
                document.getElementById("imagemcomputador").style.marginLeft="-72px"
                break;
            case 2:
                document.getElementById("imagemcomputador").src="IMGS/TesouraIcon.jpg";
                document.getElementById("imagemcomputador").style.width="150px";
                document.getElementById("imagemcomputador").style.marginLeft="-72px"
                break;
        }
        if ((document.getElementById("Pedra").checked== true && sorteio == 0)|| (document.getElementById("Papel").checked == true &&  sorteio == 1)|| (document.getElementById("Tesoura").checked == true &&  sorteio == 2)){
            alert("EMPATE");
        } 
    
        else if ((document.getElementById("Pedra").checked== true && sorteio == 2)|| (document.getElementById("Papel").checked == true &&  sorteio == 0)|| (document.getElementById("Tesoura").checked == true &&  sorteio == 1)){
            alert("Você Venceu!!")
            placarPlayer = placarPlayer + 1;
            document.getElementById("PlacarNumPLAYER").textContent = placarPlayer;
        } 
        else {
    
            alert("Computador venceu");
            
            placarPC = placarPC + 1;
            document.getElementById("PlacarNumPC").textContent = placarPC;
        }
    }
    return Vencedor();
}

function resetar(){
    placarPC=0;
    placarPlayer=0;
    document.getElementById("PlacarNumPC").textContent = 0;
    document.getElementById("PlacarNumPLAYER").textContent = 0;
    document.getElementById("Pedra").checked = false
    document.getElementById("Tesoura").checked = false
    document.getElementById("Papel").checked = false


    document.getElementById("imagemcomputador").src="IMGS/pc.png";
    document.getElementById("imagemcomputador").style.width="270px";
    document.getElementById("imagemcomputador").style.marginLeft="-135px"

    document.getElementById("imagemplayer").src="IMGS/pc.png";
    document.getElementById("imagemplayer").style.width="270px";
    document.getElementById("imagemplayer").style.marginRight="-135px"

}
function Vencedor(){
    if(placarPC == 10){
        alert("Computador venceu o jogo ;(")
        return resetar();
        return nome();
    }
    else if(placarPlayer == 10){
        alert("Parabéns você ganhou :D")
        return resetar();
        return nome();
    }
}

function MudarNick(){
    jogador = prompt("Digite o seu novo nickname:");
        
    if (jogador == '' || jogador == null) {
        return MudarNick()
    }
    else if (jogador.length > 10){
            alert("número maximo de 10 Caracteres")
            return MudarNick();
    }
    else{
        alert("Nickname atualizado!")
        document.getElementById("NomeDoJogadorTitulo").textContent = jogador; 
        document.getElementById("NomeDoJogadorFoto").textContent = jogador;
    }
}
//creazione variabili per i giocatori
var pcNumber = Math.floor(Math.random()*6) + 1;
console.log(pcNumber);
var playerNumber = Math.floor(Math.random()*6) + 1;
console.log(playerNumber);

//mostro i numeri assegnati ai giocatori
document.getElementById('num_p').innerHTML = "il tuo numero è " + playerNumber;
document.getElementById('num_pc').innerHTML = "il numero del pc è " + pcNumber;

//stabilisco vittoria sconfitta o parita con l'if
if(playerNumber > pcNumber){
    document.getElementById('vittoria').innerHTML = "Hai vinto";
}else if (playerNumber < pcNumber){
    document.getElementById('sconfitta').innerHTML = "Hai perso";
}
else {
    document.getElementById('parità').innerHTML = "pareggio";
}

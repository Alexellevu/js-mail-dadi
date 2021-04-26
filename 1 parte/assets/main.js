//Chiedi all’utente la sua email
var emailUtente = prompt('prego inserisci la tua e-mail');
console.log(emailUtente);

//controlla che sia nella lista di chi può accedere
var listaMail = ["fabio@gmail.com" , "federica@alice.it" , "claudia@libero.it"];
console.log(listaMail);
var control = false;

 for (var i = 0; i < listaMail.length ; i++){
    if (listaMail[i] == emailUtente){
        console.log('utente trovato');  
        control = true;
  }
  
}
//stampa un messaggio appropriato sull’esito del controllo.
if (control == true){
    document.getElementById('msg_ok').innerHTML = "Mail corretta, Accesso autorizzato";
}
else if(control == false ) {
    document.getElementById('msg_ok').innerHTML = "Mail errata, Accesso negato";
}


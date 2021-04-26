//Chiedi all’utente la sua email
var emailUtente = prompt('prego inserisci la tua e-mail');
console.log(emailUtente);

//controlla che sia nella lista di chi può accedere
var listaMail = ["fabio@gmail.com" , "federica@alice.it" , "claudia@libero.it"];
console.log(listaMail);
 for (var i = 0; i < 3; i++){
    if (listaMail[i] == emailUtente){
        console.log(listaMail[i]);  
      document.getElementById('msg_ok').innerHTML = "Accesso consentito";
  }
  else if (listaMail[i] != emailUtente){
          
          document.getElementById ('msg_no').innerHTML ="mail non valida, accesso negato";
              
      }
}

//stampa un messaggio appropriato sull’esito del controllo.
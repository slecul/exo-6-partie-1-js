// Déclaration de variable.
function valeur() {
  // On récupère les valeurs entrées par l'utilisateur.
  var nb1 = document.getElementById('firstNumber').value;
  var nb2 = document.getElementById('secondNumber').value;
  // On vérifie que les entrées sont bien des nombres.
  if(isNaN(nb1) && isNaN(nb2)){
    // Si ce n'en est pas, on préviens l'utilisateur qu'il s'est trompé.
    alert('Attention, vous n\'avez pas entré de nombres');
    // Si les entrées sont bien des nombres, on fait le calcul du modulo.
  }else{
    // On vérifie que la division est possible.
    if(nb2 == 0){
      // Si elle est impossible, on préviens l'utilisateur.
      alert('Il est impossible de diviser par 0! Retournez en primaire !');
      // Si elle est possible :
    }else{
      //On effectue le modulo pour récupérer le reste.
      var result = nb1%nb2;
      // On affiche le fâmeux reste.
      alert(result);
    }
  }
}

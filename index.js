function ImgsRandom(){

  var trocar=new Array()

  trocar[0]='<img src="imagens/logo2.jpg" alt=""/>';

  trocar[1]='<img src="imagens/logo3.jpg" alt=""/>';

  trocar[2]='<img src="imagens/logo4.jpg" alt=""/>';

  trocar[3]='<img src="imagens/logo5.jpg" alt=""/>';

  trocar[4]='<img src="imagens/logo6.jpg" alt=""/>';


  var whichtrocar=Math.floor(Math.random()*(trocar.length));

  document.getElementById("ImgsRandom").innerHTML = trocar[whichquote];

  }

  window.onload=ImgsRandom;
function experiencia(anos) {
    // código aqui
   
    if((anos >= 0) && (anos <= 1)){
        console.log("Iniciante");
    } else if ((anos >= 2) && (anos <= 3)){
        console.log("Intermediário");
    } else if((anos >= 4) && (anos <= 6)){
        console.log("Avançado")
    } else{
        console.log("Jedi Master");
    }

    }
  
   var anosEstudo = 7;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master
function temHabilidade(skills) {
    // código aqui
    var recebe = [];
    recebe = skills;
    var comprimento = recebe.length;

    for(var i = 0; i < comprimento; i++){
        if(recebe[i] == "Javascript"){
            console.log(`${recebe[i]} = true`);
        } else {
            console.log(`${recebe[i]} = false`);
        }
    }

   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false
   
   

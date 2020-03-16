var pares = [];
function varrer(x,y){        
    while(x <= y){
        if((x % 2) == 0){
            //pares.push(x);
            console.log(x);
        } 
        x++;
    }
}
varrer(32, 321);
//console.log(pares);
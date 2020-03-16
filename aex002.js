   
    function varrer(x,y){
        var x = x; var y = y;
        while(x < y) {
            if(x % 2 == 0 &&  y % 2 == 0){
                console.log(`x ${x} até ${y}`);
            }
        }
    }
varrer(32, 321);

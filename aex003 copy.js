function temHabilidade(skills) {
    // código aqui
    var recebe = [];
    recebe = skills;
    var comprimento = recebe.length;

    for(var i = 0; i < comprimento; i++){
        console.log(recebe);
    }

   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false
   
   
window.onload = function(){ 
    var fonteRecebedora = document.getElementById('rd-text_field-k7fa2ekx');
    fonteRecebedora.value = "Brands";
    $('#rd-text_field-k7fa2ekx').attr("disabled", true);
    $('#rd-radio_buttons_field-k7fa2eku_Para_eu_mesma, #rd-radio_buttons_field-k7fa2eku_Para_a_empresa').click(function(){     
        var chkEmpresa = document.getElementById("rd-radio_buttons_field-k7fa2eku_Para_a_empresa");
        var dvPassport = document.querySelector("#conversion-form > div.bricks-form__fieldset > div:nth-child(13)");
        var dvPassport2 = document.querySelector("#conversion-form > div.bricks-form__fieldset > div:nth-child(14)");        
        // dvPassport.style.display = chkEmpresa.checked ? "block" : "none";
        // dvPassport2.style.display = chkEmpresa.checked ? "block" : "none";
        if(chkEmpresa.checked == true){
            $("#rd-text_field-k7fa2ekv, #rd-text_field-k7fa2ekx").attr("required", "required");
            dvPassport.style.display = "block";
            dvPassport2.style.display = "block";
        } else{
            $("#rd-text_field-k7fa2ekv, #rd-text_field-k7fa2ekx").removeAttr("required");
            dvPassport.style.display = "none";
            dvPassport2.style.display = "none";
        }
    });
            
}

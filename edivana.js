window.onload = function(){ 
    var fonteRecebedora = $('input[placeholder="Fonte Recebedora"]');
    fonteRecebedora.val("Brands");    
    fonteRecebedora.attr("disabled",true);
    $('#rd-text_field-k7fa2ekx').attr("disabled", true);

    var chkEmpresa = document.getElementById("rd-radio_buttons_field-k7qrqde8_Para_a_empresa");
    var chkEuMesma = document.getElementById("rd-radio_buttons_field-k7qrqde8_Para_eu_mesma");
    var divCPF = document.querySelector("#conversion-form > div.bricks-form__fieldset > div:nth-child(12)");
    var dvPassport = document.querySelector("#conversion-form > div.bricks-form__fieldset > div:nth-child(13)");
    var dvPassport2 = document.querySelector("#conversion-form > div.bricks-form__fieldset > div:nth-child(14)"); 
    $("#rd-text_field-k7qrqdea, #rd-number_field-k7qrqdeb,#rd-number_field-k7qrqde9").removeAttr("required");        
    $("#rd-text_field-k7qrqdea, #rd-number_field-k7qrqdeb,#rd-number_field-k7qrqde9").val("");      
    /*
    $("#rd-number_field-k7qrqde9").attr("max", "11");
    $("#rd-number_field-k7qrqde9").attr("maxlength", "11");
    $("#rd-number_field-k7qrqde9").attr("size", "11");
     */
    dvPassport.style.display = "none";
    dvPassport2.style.display = "none";    

    $('#rd-radio_buttons_field-k7qrqde8_Para_a_empresa, #rd-radio_buttons_field-k7qrqde8_Para_eu_mesma').click(function(){     
       
        // dvPassport.style.display = chkEmpresa.checked ? "block" : "none";
        // dvPassport2.style.display = chkEmpresa.checked ? "block" : "none";
        if(chkEmpresa.checked == true){
            $("#rd-text_field-k7qrqdea, #rd-number_field-k7qrqdeb").attr("required", "required");
            $("#rd-number_field-k7qrqde9").removeAttr("required");
            $("#rd-number_field-k7qrqde9").val("");
            dvPassport.style.display = "block";
            dvPassport2.style.display = "block";
            divCPF.style.display = "none";
        }else if(chkEuMesma.checked == true){
            $("#rd-text_field-k7qrqdea, #rd-number_field-k7qrqdeb").removeAttr("required");
            $("#rd-number_field-k7qrqde9").attr("required", "required");
            $("#rd-text_field-k7qrqdea, #rd-number_field-k7qrqdeb").val("");
            divCPF.style.display = "block";
            dvPassport.style.display = "none";
            dvPassport2.style.display = "none";
        } else{
            
        }
    });
    var endImagem = 'https://www.5sgrupo.com.br/wp-content/uploads/2020/03/Encante-definitivamente-o-seu-cliente.png';
    var imagem = document.createElement('img');
    imagem.setAttribute('src',endImagem);        
    document.querySelector('#rd-section-jsdbj8lx').insertAdjacentElement('afterbegin',imagem).classList.add("imagem-top");
    var endImagem2 = 'https://www.5sgrupo.com.br//wp-content/uploads/2020/03/realização.png';
    var imagem2 = document.createElement('img');
    imagem2.setAttribute('src',endImagem2);        
    document.querySelector('#rd-section-jsdbj8lx').insertAdjacentElement('beforeend',imagem2).classList.add("imagem-rodape");        
}    




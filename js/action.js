function Limpa_formulario_cep(){
    document.getElementById("rua").innerHTML=("-");
    document.getElementById("bairro").innerHTML=("-");
    document.getElementById("cidade").innerHTML=("-");
    document.getElementById("estado").innerHTML=("-");
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("rua").innerHTML=(conteudo.logradouro);
        document.getElementById("bairro").innerHTML=(conteudo.bairro);
        document.getElementById("cidade").innerHTML=(conteudo.localidade);
        document.getElementById("estado").innerHTML=(conteudo.uf);
    }
    else{
        Limpa_formulario_cep();
        alert("Cep nao encontrado");
    }
}

function pesquisacep(){
    var valor = document.getElementById("i_cep").value;

    //somente digitos
    var cep = valor.replace(/\D/g, '');

    if(cep != ""){

        //Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){

            document.getElementById("rua").innerHTML=("...");
            document.getElementById("bairro").innerHTML=("...");
            document.getElementById("cidade").innerHTML=("...");
            document.getElementById("estado").innerHTML=("...");

            var script = document.createElement('script');
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meu_callback`;
            document.body.appendChild(script);
        }
        else{
            Limpa_formulario_cep();
            alert("Formato de CEP invalido!");
        }
        
    }else{
        Limpa_formulario_cep();
    }

}
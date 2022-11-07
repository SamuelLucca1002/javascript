//Verificador de idade
function verificar() {
    //Variaveis
   var data = new Date();
   var ano = data.getFullYear();
   var fAno = document.getElementById("txtano");
   var res = document.getElementById("res");

   if(fAno.value.length == 0 || fAno.value > ano) {
    window.alert("Verifique se as datas estão corretas e tente novamente");
   } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fAno.value)
        var genero = " "
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = "Homem"

            //Idade homem
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/masculino/foto-bebe-m.png')
            } else if(idade > 10 && idade <= 20) {
                //jovem
                img.setAttribute('src', 'imagens/masculino/foto-jovem-m.png')
            } else if(idade > 20 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/masculino/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/masculino/foto-idoso-m.png')
            }

        } else if(fsex[1].checked) {
            genero = "Mulher"

            //idade mulher
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/feminino/foto-bebe-f.png')
            } else if(idade > 10 && idade <= 20) {
                //jovem
                img.setAttribute('src', 'imagens/feminino/foto-jovem-f.png')
            } else if(idade > 20 && idade <= 50) {
                //adulta
                img.setAttribute('src', 'imagens/feminino/foto-adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/feminino/foto-idoso-f.png')
            }

        }
        res.style.textAlign = "center";
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos.`;
        res.appendChild(img);
   }
}
//fim do verificador
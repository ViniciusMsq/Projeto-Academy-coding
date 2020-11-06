let btn = document.querySelector("#btn");
let urlTeste = 'https://reqres.in/api/users?page=2'
let urlTeste2 = 'https://api.hgbrasil.com/weather?format=json-cors&key=076a071b&city_name=';
let obj;

let img = document.createElement("img");
let cidade = document.getElementById("cidade");
let data = document.getElementById("data");
let temp = document.getElementById("temp");
let humid = document.getElementById("humidade");
let desc = document.getElementById("descricao");
let card1 = document.getElementById("primeiroCard");
let card2 = document.getElementById("segundoCard");
let card3 = document.getElementById("terceiroCard");
let card4 = document.getElementById("quartoCard");

btn.addEventListener("click", function(){
    cidade.innerText="Cidade:  ";
    data.innerText="Data:  ";
    temp.innerText="Temperatura:  ";
    humid.innerText="Humidade:  ";
    desc.innerText="Descrição:  ";


    cityName = document.querySelector("#cityName");
    console.log(cityName.value)
    
    fetch(urlTeste2+cityName.value)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        obj = response;
        console.log(obj);
        cidade.innerText+="  "+ obj['results']['city'];
        data.innerText+="  "+ obj['results']['forecast'][0]['date'];
        temp.innerText+="  Max: " + obj['results']['forecast'][0]['max']+"°" + "- Min: " + obj['results']['forecast'][0]['min']+"°";
        humid.innerText+="  "+ obj['results']['humidity']+"%";
        desc.innerText+="  "+ obj['results']['description'];
        var codigo = obj['results']['img_id'];
        console.log(codigo);
        img.src="https://assets.hgbrasil.com/weather/images/"+codigo+".png";
        document.getElementById("imagem").appendChild(img);


        card1.innerText ="Data:  "+ obj['results']['forecast'][1]['date'];
        card2.innerText ="Data:  "+ obj['results']['forecast'][2]['date'];
        card3.innerText ="Data:  "+ obj['results']['forecast'][3]['date'];
        card4.innerText ="Data:  "+ obj['results']['forecast'][4]['date'];
        
        
        
    })
})
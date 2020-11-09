let btn = document.querySelector("#btn");
let urlTeste = 'https://reqres.in/api/users?page=2'
let urlTeste2 = 'https://api.hgbrasil.com/weather?format=json-cors&key=076a071b&city_name=';
let obj;
let caixaTexto = document.querySelector('#cityName');

let img = document.createElement("img");
let cidade = document.getElementById("cidade");
let data = document.getElementById("data");
let temp = document.getElementById("temp");
let humid = document.getElementById("humidade");
let desc = document.getElementById("descricao");

let dataCard1 = document.getElementById("dataCard1");
let tempMaxCard1 = document.getElementById("tempMaxCard1");
let tempMinCard1 = document.getElementById("tempMinCard1");
let textoCard1 = document.getElementById("textoCard1");

let dataCard2 = document.getElementById("dataCard2");
let tempMaxCard2 = document.getElementById("tempMaxCard2");
let tempMinCard2 = document.getElementById("tempMinCard2");
let textoCard2 = document.getElementById("textoCard2");

let dataCard3 = document.getElementById("dataCard3");
let tempMaxCard3 = document.getElementById("tempMaxCard3");
let tempMinCard3 = document.getElementById("tempMinCard3");
let textoCard3 = document.getElementById("textoCard3");

let dataCard4 = document.getElementById("dataCard4");
let tempMaxCard4 = document.getElementById("tempMaxCard4");
let tempMinCard4 = document.getElementById("tempMinCard4");
let textoCard4 = document.getElementById("textoCard4");


caixaTexto.addEventListener("click", function(){
    caixaTexto.value = "";
    console.log("texte caixa texto");
})

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
        img.width = 250;
        img.height = 170;
        document.getElementById("img").appendChild(img);
        
        
        dataCard1.innerText = obj['results']['forecast'][1]['date'] + " - " + obj['results']['forecast'][1]['weekday'];
        tempMaxCard1.innerText = "Max: " + obj['results']['forecast'][1]['max']+"°";
        tempMinCard1.innerText = "Min: " + obj['results']['forecast'][1]['min']+"°";
        textoCard1.innerText =  obj['results']['forecast'][1]['description'];

        dataCard2.innerText = obj['results']['forecast'][2]['date']+ " - " + obj['results']['forecast'][2]['weekday'];
        tempMaxCard2.innerText = "Max: " + obj['results']['forecast'][2]['max']+"°";
        tempMinCard2.innerText = "Min: " + obj['results']['forecast'][2]['min']+"°";
        textoCard2.innerText =  obj['results']['forecast'][2]['description'];

        dataCard3.innerText = obj['results']['forecast'][3]['date']+ " - " + obj['results']['forecast'][3]['weekday'];
        tempMaxCard3.innerText = "Max: " + obj['results']['forecast'][3]['max']+"°";
        tempMinCard3.innerText = "Min: " + obj['results']['forecast'][3]['min']+"°";
        textoCard3.innerText =  obj['results']['forecast'][3]['description'];
        
        dataCard4.innerText = obj['results']['forecast'][4]['date']+ " - " + obj['results']['forecast'][4]['weekday'];
        tempMaxCard4.innerText = "Max: " + obj['results']['forecast'][4]['max']+"°";
        tempMinCard4.innerText = "Min: " + obj['results']['forecast'][4]['min']+"°";
        textoCard4.innerText =  obj['results']['forecast'][4]['description'];
    })
})
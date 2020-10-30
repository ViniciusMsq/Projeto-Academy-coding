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

btn.addEventListener("click", function(){
    cityName = document.querySelector("#cityName");
    console.log(cityName.value)
    
    fetch(urlTeste2+cityName.value)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        obj = response;

        cidade.innerText+="  "+ obj['results']['city'];
        data.innerText+="  "+ obj['results']['forecast'][0]['date'];
        temp.innerText+="  Max: " + obj['results']['forecast'][0]['max']+"°" + "- Min: " + obj['results']['forecast'][0]['min']+"°";
        humid.innerText+="  "+ obj['results']['humidity']+"%";
        desc.innerText+="  "+ obj['results']['description'];
        
        img.src="https://assets.hgbrasil.com/weather/images/28n.png";

        document.getElementById("imagem").appendChild(img);

        
        console.log(obj);
        
    })
})
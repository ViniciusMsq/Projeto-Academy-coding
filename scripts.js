let btn = document.querySelector("#btn");
let urlTeste = 'https://reqres.in/api/users?page=2'
let urlTeste2 = 'https://api.hgbrasil.com/weather?format=json-cors&key=076a071b&city_name=';
let obj


btn.addEventListener("click", function(){
    cityName = document.querySelector("#cityName");
    console.log(cityName.value)
    fetch(urlTeste2+cityName.value)
    .then(function(response){
        return response.json();

    })
    .then(function(response){
        obj  = response;
        for(i = 0; i<10; i++){
            console.log("Data: "+ obj['results']['forecast'][i]['date'] + " Max: " + obj['results']['forecast'][i]['max'] + " Min: " + obj['results']['forecast'][i]['min']);
            
        }
    })
})
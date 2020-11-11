//pegando o botao de busca
let btn = document.querySelector("#btn");

//salvando a url da api
let url = 'https://api.hgbrasil.com/weather?format=json-cors&key=076a071b&city_name=';
let obj; // variavel para receber o objeto de retorno

//pegando a caixa de pesquisa
let caixaTexto = document.querySelector('#cityName');

//criando os elementos que o usuario ira visualizar como resposta
let img = document.createElement("img");
let cidade = document.getElementById("cidade");
let data = document.getElementById("data");
let temp = document.getElementById("temp");
let humid = document.getElementById("humidade");
let desc = document.getElementById("descricao");

//criando elementos para usar no card giratorio
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

//adicioando evento para deletar conteudo da caixa de pesquisa quando for selecionada
caixaTexto.addEventListener("click", function(){
    caixaTexto.value = "";
    console.log("texte caixa texto");
})

//evento para botao de busca
btn.addEventListener("click", function(){
    //certificar que o a pesquisa anterior seja substituida pelos valores padroes
    cidade.innerText="Cidade:  ";
    data.innerText="Data:  ";
    temp.innerText="Temperatura:  ";
    humid.innerText="Humidade:  ";
    desc.innerText="Descrição:  ";

    //pegando o nome da cidade desejada
    cityName = document.querySelector("#cityName");
    console.log(cityName.value)
    

    //se conectando a api, com a URL e com a cidade desejada
    fetch(url+cityName.value)
    .then(function(response){
        return response.json();//retornando o objeto de resposta
    })
    .then(function(response){
        //fazendo tratamento do objeto
        obj = response;
        console.log(obj);

        //exibindo informações do objeto recebido na tela
        cidade.innerText+="  "+ obj['results']['city'];
        data.innerText+="  "+ obj['results']['forecast'][0]['date'];
        temp.innerText+= " " + obj['results']['temp']+"°C" +"  | Max: " + obj['results']['forecast'][0]['max']+"°C" + "- Min: " + obj['results']['forecast'][0]['min']+"°C";
        humid.innerText+="  "+ obj['results']['humidity']+"%";
        desc.innerText+="  "+ obj['results']['description'];
        var codigo = obj['results']['img_id'];
        console.log(codigo);
        img.src="https://assets.hgbrasil.com/weather/images/"+codigo+".png";
        img.width = 250;
        img.height = 170;
        document.getElementById("img").appendChild(img);
        
        //colocando informações dos dias futuros recebidas pelo vetor dentro do objeto dentro de cada card correspondente
        dataCard1.innerText = obj['results']['forecast'][1]['date'] + " - " + obj['results']['forecast'][1]['weekday'];
        tempMaxCard1.innerText = "Max: " + obj['results']['forecast'][1]['max']+"°C";
        tempMinCard1.innerText = "Min: " + obj['results']['forecast'][1]['min']+"°C";
        textoCard1.innerText =  obj['results']['forecast'][1]['description'];

        dataCard2.innerText = obj['results']['forecast'][2]['date']+ " - " + obj['results']['forecast'][2]['weekday'];
        tempMaxCard2.innerText = "Max: " + obj['results']['forecast'][2]['max']+"°C";
        tempMinCard2.innerText = "Min: " + obj['results']['forecast'][2]['min']+"°C";
        textoCard2.innerText =  obj['results']['forecast'][2]['description'];

        dataCard3.innerText = obj['results']['forecast'][3]['date']+ " - " + obj['results']['forecast'][3]['weekday'];
        tempMaxCard3.innerText = "Max: " + obj['results']['forecast'][3]['max']+"°C";
        tempMinCard3.innerText = "Min: " + obj['results']['forecast'][3]['min']+"°C";
        textoCard3.innerText =  obj['results']['forecast'][3]['description'];
        
        dataCard4.innerText = obj['results']['forecast'][4]['date']+ " - " + obj['results']['forecast'][4]['weekday'];
        tempMaxCard4.innerText = "Max: " + obj['results']['forecast'][4]['max']+"°C";
        tempMinCard4.innerText = "Min: " + obj['results']['forecast'][4]['min']+"°C";
        textoCard4.innerText =  obj['results']['forecast'][4]['description'];
    })
})
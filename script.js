// Constantes e variaveis -------------------------------------------------------------------------------
const dark = document.querySelector(".container");
const formDark = document.querySelector(".form");
const textDark = document.querySelector(".form-text");

const btnDark = document.querySelector(".tema button");
const pesquisa = document.querySelector(".search input");
const pesquisaBtn = document.querySelector(".search button");

const pokemonName = document.querySelector(".pokemon span");
const id = document.querySelector(".id");
const front = document.querySelector(".front");
const back = document.querySelector(".back");


const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let valorID = 0;



// Funções ----------------------------------------------------------------------------------------------

// Requisção API
const getDataAPI = async(data) => {
    const urlAPI =  `https://pokeapi.co/api/v2/pokemon/${data}`
    const respAPI = await fetch(urlAPI);
    const resultAPI = await respAPI.json();
    return resultAPI;
}
 const showDataAPI = async(data) =>{
    const respostaAPI = await getDataAPI(data);

    // Alterar elementos DOM
    pokemonName.innerHTML = respostaAPI.name;
    id.innerHTML = "#00" + respostaAPI.id;
    if(respostaAPI.id > 9){
        id.innerHTML = "#0" + respostaAPI.id;
    }if (respostaAPI.id > 99){
        id.innerHTML = "#" + respostaAPI.id;
    }
    front.src = respostaAPI["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    back.src = respostaAPI["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["back_default"];
    pesquisa.value = "";
    valorID = respostaAPI.id;
 }
    

//  Fazer botão search funcionar
pesquisaBtn.addEventListener("click", (e) =>{
    e.preventDefault;
    const data = pesquisa.value.toLowerCase();
    showDataAPI(data);
});




pesquisa.addEventListener("keyup",(e) =>{
    if(e.code==="Enter"){
        const data = e.target.value.toLowerCase();
        showDataAPI(data);
    }
});



// Eventos ---------------------------------------------------------------------------------------------

// Mudar tema
btnDark.addEventListener("click", () =>{
    dark.classList.toggle("dark");
    formDark.classList.toggle("dark");
});

prev.addEventListener("click", () => {
    valorID -= 1;
    showDataAPI(valorID);
});
next.addEventListener("click", () => {
    valorID += 1;
    showDataAPI(valorID);
});

showDataAPI(valorID);

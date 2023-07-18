let pokemonShowList = [];
let pointer = 0;

window.addEventListener("load", async () => {
    try {
        await fetchPokemons(pointer);
        await showPokemon(pokemonShowList[0].name);
    } catch (error) {
        console.log(error);
    }
});

// Check scroll to bottom
document.getElementById('show-pokemon-list').addEventListener('scroll', () => {
    const blockShowPokemon = document.getElementById('show-pokemon-list');
    let documentHeight = blockShowPokemon.scrollHeight;
    let scrollNow = Math.ceil(blockShowPokemon.scrollTop + blockShowPokemon.clientHeight);
    if (scrollNow === documentHeight) {
        pointer += 20;
        fetchPokemons(pointer)
    }
})

// Get Pokemons
const fetchPokemons = async (cursor = pointer) => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${cursor}&limit=20`);
        const pokemons = await data.json();
        pokemonShowList.push(...pokemons.results);
        const newPoke = pokemonShowList.slice(cursor);
        for (let index = 0; index < newPoke.length; index++) {
            const resDetail = await fetchOnePokemon(newPoke[index].name);
            createEleList(newPoke[index].name, resDetail.sprites.front_default);
        }
    } catch (error) {
        console.log(error);
    }
}

// Get Pokemon
const fetchOnePokemon = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonDetail = await response.json();
        return pokemonDetail;
    } catch (error) {
        console.log(error);
    }
}

// Create Element
const createEleList = (dataName, dataImage) => {
    const divEle = document.createElement("div");
    const pokeBlock = document.createElement("div");
    const pokeImg = document.createElement("img");
    const pokeName = document.createElement("p");
    divEle.className = "col-4 p-2 user-select-none";
    pokeBlock.className = "bg-secondary h-100";
    pokeBlock.setAttribute("id", dataName)
    pokeBlock.setAttribute("onclick", `showPokemon('${dataName}')`)
    pokeImg.setAttribute("src", dataImage);
    pokeImg.setAttribute("width", 100);
    pokeBlock.appendChild(pokeImg);
    pokeName.innerHTML = `<h1>${dataName}</h1>`;
    pokeBlock.appendChild(pokeName);
    divEle.appendChild(pokeBlock);
    document.getElementById("pokemon-list").appendChild(divEle);
}

// Event Function
const showPokemon = async (pokemonName) => {
    try {
        const pokemonDetail = await fetchOnePokemon(pokemonName);
        let noStr = "" + pokemonDetail.id
        let noPad = "0000"
        let pokedexNo = noPad.substring(0, noPad.length - noStr.length) + noStr;
        document.getElementById("no-detail").innerHTML = '<h4>' + 'No.' + '<b>' + pokedexNo + '</b>' + '</h4>';
        document.getElementById("image-detail").setAttribute("src", pokemonDetail.sprites.front_default);
        document.getElementById("wh-detail").innerHTML = `
        <p><b>Weight:</b> ${pokemonDetail.weight}</p>
        <p><b>Height:</b> ${pokemonDetail.height}</p>
        `;
        document.getElementById("type-detail").innerHTML = "";
        pokemonDetail.types.map(({ type }) => {
            const eleType = document.createElement("span");
            eleType.className = "rounded-pill border border-dark ps-3 pe-3 m-1"
            eleType.innerHTML = type.name;
            document.getElementById("type-detail").append(eleType)
        })
    } catch (error) {
        console.log(error);
    }
}
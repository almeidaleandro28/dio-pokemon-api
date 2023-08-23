const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
const $pokemonList = document.getElementById("pokemons");

async function getData( url, offset, limit ){
  const response = await fetch( url );
  const pokemon = await response.json();
  return  pokemon.results
}

async function listPokemon(){
  const pokemons = await getData(url,limit,offset);
  
  const newList = pokemons.map( pokemon => {
    return ( PokemonToHtml( pokemon ) )
  })

  const newHtml = newList.join(" ")

  
  return $pokemonList.innerHTML += newList;
}

function PokemonToHtml(  pokemon ){
  return `<li class="pokemon">

        <span class="pokemonName">${pokemon.name}</span>
        <span class="pokemonNumber">01</span>

        <div class="pokemonDetails">

        <ol class="pokemonTypes">
          <li class="pokemonType">type 01</li>
          <li class="pokemonType">type 02</li>
        </ol>
    
        <img src="" alt=${pokemon.name}>

      </div>
      </li>`
  
}

listPokemon()

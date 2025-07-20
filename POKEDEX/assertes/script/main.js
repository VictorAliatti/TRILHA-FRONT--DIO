
function convertpokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertpokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

   // const listItems = []

    //for (let i = 0; i < pokemons.length; i++) {
   //     const pokemon = pokemons[i];
    ///    listItems.push(convertpokemonToLi(pokemon))
   // }

    //console.log(listItems)
//})

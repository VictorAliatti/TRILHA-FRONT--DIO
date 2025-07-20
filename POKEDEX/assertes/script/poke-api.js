const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other['official-artwork'].front_default

    // Novos detalhes adicionais
    pokemon.height = pokeDetail.height / 10 + ' m';
    pokemon.weight = pokeDetail.weight / 10 + ' kg';
    pokemon.abilities = pokeDetail.abilities.map((ab) => ab.ability.name).join(', ');

    // Base Stats
    pokeDetail.stats.forEach(stat => {
        const statName = stat.stat.name
        const baseStat = stat.base_stat

        switch(statName) {
            case 'hp':
                pokemon.hp = baseStat;
                break;
            case 'attack':
                pokemon.attack = baseStat;
                break;
            case 'defense':
                pokemon.defense = baseStat;
                break;
            case 'special-attack':
                pokemon.spAttack = baseStat;
                break;
            case 'special-defense':
                pokemon.spDefense = baseStat;
                break;
            case 'speed':
                pokemon.speed = baseStat;
                break;
        }
    });

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
} 

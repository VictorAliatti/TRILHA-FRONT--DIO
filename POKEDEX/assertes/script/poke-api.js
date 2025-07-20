const pokeApi = {}

class Pokemon {
  constructor() {
    this.number = 0
    this.name = ''
    this.types = []
    this.type = ''
    this.photo = ''
    this.height = ''
    this.weight = ''
    this.abilities = ''
    this.hp = 0
    this.attack = 0
    this.defense = 0
    this.spAttack = 0
    this.spDefense = 0
    this.speed = 0
  }
}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
  pokemon.types = types
  pokemon.type = types[0]

  pokemon.photo = pokeDetail.sprites.other['official-artwork'].front_default

  pokemon.height = (pokeDetail.height / 10) + ' m'
  pokemon.weight = (pokeDetail.weight / 10) + ' kg'
  pokemon.abilities = pokeDetail.abilities.map(ab => ab.ability.name).join(', ')

  pokeDetail.stats.forEach(stat => {
    switch (stat.stat.name) {
      case 'hp': pokemon.hp = stat.base_stat; break;
      case 'attack': pokemon.attack = stat.base_stat; break;
      case 'defense': pokemon.defense = stat.base_stat; break;
      case 'special-attack': pokemon.spAttack = stat.base_stat; break;
      case 'special-defense': pokemon.spDefense = stat.base_stat; break;
      case 'speed': pokemon.speed = stat.base_stat; break;
    }
  })

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => Promise.all(pokemons.map(pokeApi.getPokemonDetail)))
}

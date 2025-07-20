// Classe para representar um Pokémon com todos os detalhes
class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;

    // Detalhes adicionais
    height;
    weight;
    abilities;

    // Stats
    hp;
    attack;
    defense;
    spAttack;
    spDefense;
    speed;
}

// Exporta a classe para ser usada em outros arquivos
const pokemonModel = Pokemon;

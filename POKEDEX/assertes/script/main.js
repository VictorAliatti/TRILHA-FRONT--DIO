const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const modal = document.getElementById('pokemonModal')
const modalContent = document.getElementById('modalContent')
const closeModal = document.getElementById('closeModal')

const limit = 5
let offset = 0

function openPokemonModal(pokemon) {
    modalContent.innerHTML = `
        <div class="modal-card ${pokemon.type}">
            <div class="modal-header">
                <h2>#${pokemon.number} ${pokemon.name}</h2>
                <span class="type-label">${pokemon.types.map(type => `<span class="type ${type}">${type}</span>`).join('')}</span>
            </div>
            <img src="${pokemon.photo}" alt="${pokemon.name}" class="modal-img">
            <div class="modal-info">
                <p><strong>Altura:</strong> ${pokemon.height}</p>
                <p><strong>Peso:</strong> ${pokemon.weight}</p>
                <p><strong>Habilidades:</strong> ${pokemon.abilities}</p>
                <h3>Stats</h3>
                <ul class="stats">
                    <li><strong>HP:</strong> ${pokemon.hp}</li>
                    <li><strong>Ataque:</strong> ${pokemon.attack}</li>
                    <li><strong>Defesa:</strong> ${pokemon.defense}</li>
                    <li><strong>Sp. Ataque:</strong> ${pokemon.spAttack}</li>
                    <li><strong>Sp. Defesa:</strong> ${pokemon.spDefense}</li>
                    <li><strong>Velocidade:</strong> ${pokemon.speed}</li>
                </ul>
            </div>
        </div>
    `
    modal.style.display = 'flex'
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

function loadPokemonItens(offset , limit) {
    pokeApi.getPokemons(offset , limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" onclick='openPokemonModal(${JSON.stringify(pokemon)})'>
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

function fecharJanela() {
  window.close();
}

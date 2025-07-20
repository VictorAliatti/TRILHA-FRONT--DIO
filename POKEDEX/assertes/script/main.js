const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const modal = document.getElementById('pokemonModal')
const modalContent = document.getElementById('modalContent')
const closeModalBtn = document.getElementById('closeModal')

const limit = 8
let offset = 0

function openPokemonModal(pokemon) {
  modalContent.innerHTML = `
    <button id="closeModal">X</button>
    <div class="modal-card ${pokemon.type}">
      <div class="modal-header">
        <h2>#${pokemon.number} ${pokemon.name}</h2>
        <span class="type-label">
          ${pokemon.types.map(type => `<span class="type ${type}">${type}</span>`).join('')}
        </span>
      </div>
      <img src="${pokemon.photo}" alt="${pokemon.name}" class="modal-img" />
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

  // Reatribuir o evento fechar ao novo botão
  const closeBtn = document.getElementById('closeModal')
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then(pokemons => {
    pokemons.forEach(pokemon => {
      const li = document.createElement('li')
      li.classList.add('pokemon', pokemon.type)
      li.innerHTML = `
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
          <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}" />
        </div>
      `
      li.addEventListener('click', () => openPokemonModal(pokemon))
      pokemonList.appendChild(li)
    })
  })
}

// Inicializa lista
loadPokemonItens(offset, limit)

// Botão carregar mais
loadMoreButton.addEventListener('click', () => {
  offset += limit
  loadPokemonItens(offset, limit)
})

// Fecha modal clicando fora do conteúdo
modal.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.style.display = 'none'
  }
})

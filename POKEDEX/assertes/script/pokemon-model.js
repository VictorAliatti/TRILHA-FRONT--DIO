const modal = document.getElementById('pokemonModal')
const modalContent = document.getElementById('modalContent')
const closeModalBtn = document.getElementById('closeModal')

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

  // Reatribuir evento ao botão fechar, pois o botão foi recriado
  const newCloseBtn = document.getElementById('closeModal')
  newCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

// Fechar modal clicando fora do conteúdo
modal.addEventListener('click', event => {
  if(event.target === modal) {
    modal.style.display = 'none'
  }
})

export { openPokemonModal }

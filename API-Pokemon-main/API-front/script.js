function fetchFirstGenPokemon() {
    const firstGenIds = Array.from({ length: 151 }, (_, i) => i + 1); // Generate IDs from 1 to 151

    const promises = firstGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('1-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching first generation Pokemon:', error));
}

function generateCard(pokemonData) {
    const firstType = pokemonData.types[0].type.name; 

    const card = `
        <div class="card ${firstType}">
            <div class="card-inner">
                <div class="card-front">
                    <img class="pokemon-image" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                </div>
                <div class="card-back">
                    <h4><b>${pokemonData.name}</b></h4>
                    <div class="container">
                        <p><b>Species:</b> ${pokemonData.species.name}</p>
                        <p><b>Type:</b> ${firstType}</p>
                        <p><b>Abilities:</b> ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    return card;
}

fetchFirstGenPokemon()

function fetchSecondGenPokemon() {
    const secondGenIds = Array.from({ length: 100 }, (_, i) => i + 152); // Generate IDs from 152 to 251 for second generation

    const promises = secondGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('2-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching second generation Pokemon:', error));
}

fetchSecondGenPokemon();

function fetchThirdGenPokemon() {
    const thirdGenIds = Array.from({ length: 135 }, (_, i) => i + 252); // Generate IDs from 252 to 386 for third generation

    const promises = thirdGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('3-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching third generation Pokemon:', error));
}

fetchThirdGenPokemon();

function fetchFourthGenPokemon() {
    const fourthGenIds = Array.from({ length: 107 }, (_, i) => i + 387); // Generate IDs from 387 to 493 for fourth generation

    const promises = fourthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('4-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching fourth generation Pokemon:', error));
}

fetchFourthGenPokemon();

function fetchFifthGenPokemon() {
    const fifthGenIds = Array.from({ length: 156 }, (_, i) => i + 494); // Generate IDs from 494 to 649 for fifth generation

    const promises = fifthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('5-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching fifth generation Pokemon:', error));
}

fetchFifthGenPokemon();

function fetchSixthGenPokemon() {
    const sixthGenIds = Array.from({ length: 72 }, (_, i) => i + 650); // Generate IDs from 650 to 721 for sixth generation

    const promises = sixthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('6-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching sixth generation Pokemon:', error));
}

fetchSixthGenPokemon();


function fetchSeventhGenPokemon() {
    const seventhGenIds = Array.from({ length: 88 }, (_, i) => i + 722); // Generate IDs from 722 to 809 for seventh generation

    const promises = seventhGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('7-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching seventh generation Pokemon:', error));
}

fetchSeventhGenPokemon();

function fetchEighthGenPokemon() {
    const eighthGenIds = Array.from({ length: 89 }, (_, i) => i + 810); // Generate IDs from 810 to 898 for eighth generation

    const promises = eighthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('8-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching eighth generation Pokemon:', error));
}

fetchEighthGenPokemon();

function fetchNinthGenPokemon() {
    const ninthGenIds = Array.from({ length: 100 }, (_, i) => i + 899); // Generate IDs from 899 to 998 for ninth generation

    const promises = ninthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('9-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching ninth generation Pokemon:', error));
}

fetchNinthGenPokemon();



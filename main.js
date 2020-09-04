let pokemonDiv = document.querySelector('.pokemon');
pokemonDiv.innerHTML = '';
fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
.then(response => response.json())
.then(pokemon => {
    pokemon.results.map(element => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.sprites.front_default, element);
            let imgPokemon = result.sprites.front_default;
            console.log(result.sprites.front_default);
            pokemonDiv.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                                        <img src="${result.sprites.front_default}" alt="imagen pokemon" class="img-fluid">
                                        <h5>${element.name}</h5>
                                    </div>`
        });
    });
});
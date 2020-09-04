let pokemonDiv = document.querySelector('.pokemon-div');
pokemonDiv.innerHTML = '';
fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
.then(response => response.json())
.then(pokemones => {
    pokemones.results.map(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(result => {
            let imgPokemon = result.sprites.front_default;
            console.log(imgPokemon, pokemon);
            pokemonDiv.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 border border-dark rounded-lg text-center bg-light" style="max-width: 230px">
                                        <img src="${imgPokemon}" alt="imagen pokemon" class="img-fluid">
                                        <h5>${pokemon.name}</h5>
                                    </div>`
        });
    });
});

// `<div class="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" style="width: 18rem;">
//                                         <img src="${imgPokemon}" alt="imagen pokemon" class="img-fluid" style="min-width: 18rem;">
//                                         <div class="card-body">
//                                             <h5 class="card-title">${pokemon.name}</h5>
//                                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                                         </div>
//                                     </div>`


// `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
//                                         <img src="${imgPokemon}" alt="imagen pokemon" class="img-fluid">
//                                         <h5>${element.name}</h5>
//                                     </div>`
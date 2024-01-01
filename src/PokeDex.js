import React from 'react';
import useAxios from './hooks/useAxios';
import PokemonCard from './PokemonCard';
import PokemonSelect from './PokemonSelect';

// Formatting function for Pokémon data
const formatPokemonData = response => ({
  id: response.id,
  front: response.sprites.front_default,
  back: response.sprites.back_default,
  name: response.name,
  stats: response.stats.map(stat => ({
    value: stat.base_stat,
    name: stat.stat.name
  }))
});

function PokeDex() {
  const [pokemon, addPokemonData, clearPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon/",
    formatPokemonData
  );

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemonData} />
        <button onClick={clearPokemon}>Clear Pokémon</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(p => (
          <PokemonCard
            key={p.id}
            front={p.front}
            back={p.back}
            name={p.name}
            stats={p.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

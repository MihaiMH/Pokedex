import React from "react";
import "./PokeInfo.css"

export default function PokeInfo({ pokemon, onClose }) {
  return (
    <div className="pokeinfo">
      <div className="pokeinfo-content">
        <span className="close-button" onClick={onClose}>
          X
        </span>
        <div className="pokeinfo-base">
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="poke-image"
          />
        </div>
        <div className="poke-stats">
          {pokemon.stats.map((base) => (
            <p key={base.stat.name}>
              <strong>{base.stat.name}:</strong> {base.base_stat}
            </p>
          ))}
        </div>
        <div className="ability-container">
          {pokemon.abilities.map((ability) => (
            <div key={ability.ability.name} className="ability">
              {ability.ability.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react'

export default function PokemonList({ pokemon }) {
    const pokemonStyle = {
        padding: "5px"
    }

    return (
        <div >
            {pokemon.map(p => (
                <div style={pokemonStyle} key={p}>{p}</div>
            ))}
        </div>
    )
}

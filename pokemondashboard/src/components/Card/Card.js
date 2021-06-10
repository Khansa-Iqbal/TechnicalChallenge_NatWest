import React from 'react';
import './style.css';

function Card({pokemon})
    {
        return(
            <div>
                <div className = 'card'>
                    <img src= {pokemon.img} alt=''/>
                    <div className = 'cardInfo'>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Name: </h2>
                            <h2>{pokemon.name}</h2>
                        </div>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Types: </h2>
                            <h2>{pokemon.type.map((type, i)=>{
                                    return(
                                        <div className="Card__type" key={i}>
                                            {type}
                                        </div>
                                    )
                                })}
                            </h2>
                        </div>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Number: </h2>
                            <h2>{pokemon.num}</h2>
                        </div>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Height: </h2>
                            <h2>{pokemon.height}</h2>
                        </div>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Weight: </h2>
                            <h2>{pokemon.weight}</h2>
                        </div>
                        <div className = 'pokemonAttributes'>
                            <h2 className = 'labels'>Weaknesses: </h2>
                            <h2>{pokemon.weaknesses.map((weakness,i)=>{
                                    return(
                                        <div className = 'Card_weakness'  key={i}>
                                            {weakness}
                                        </div>
                                    )
                                })}
                            </h2>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
    export default Card;
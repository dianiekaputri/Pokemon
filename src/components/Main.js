import React from 'react';
import HubungiKamiForm from './HubungiKamiForm';
import Pokemon from "./Pokemon";
import itemPokemon from "./listpokemon.json"
class Main extends React.Component{
    render() {
        const listPokemon=itemPokemon;
        return(
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='hello-container'>
                        <h1>Hello, Pokemon hunter</h1>
                        <h2>Selamat datang di dunia Pokemon</h2>
                    </div>
                    <div className='pokemon-container'>
                        <h3>List Pokemon</h3>
                        <div className='list-card'>
                        {listPokemon.map((pokemon)=>{
                            return(
                                <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction} id={pokemon.id}/>
                            );
                        })}
                        </div>
                    </div>
                    {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                    <div className='hubungikami-container'>
                        <h3>Hubungi Kami</h3>
                        <HubungiKamiForm/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Main;
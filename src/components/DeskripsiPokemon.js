import React from 'react'
import { Link } from 'react-router-dom';
import itemPokemon from './listpokemon.json'
import { useParams } from 'react-router-dom'
function DeskripsiPokemon(){

        const listPokemon = itemPokemon;
        const params = useParams();

        return(
            <div className='main'>
                <h1>{ listPokemon[params.id].name }</h1>
                <img src={"."+listPokemon[params.id].image} alt="" /> 
                <h2>{ listPokemon[params.id].introduction }</h2>
                <Link className='btn' to={'/'}>Back</Link>
            </div>
        );
    }


export default DeskripsiPokemon;
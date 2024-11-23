import React, { useEffect, useState } from 'react'
import './index.css';
import axios from 'axios'

const App = () => {

    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        async function getPokemon() {
            try{
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                setName(res.data.name)
                setMoves(res.data.moves.length)
            }catch(e){
                alert("Error occure");
            }
        }
        getPokemon();
    }
    );

  return (
    <div style={{margin: 'auto', padding: '50px', justifyItems: ' center'}}>
        <h1>This is a <span style={{color: 'blue'}}>{name}</span></h1>
        <h1>It has <span style={{color: 'blue'}}>{moves}</span> moves</h1>
        <select onChange={(event)=>{setNum(event.target.value)}} style={{backgroundColor: 'bisque', padding: '5px 10px 5px 10px', borderRadius: '20px'}}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='25'>25</option>
        </select>
    </div>
  )
}

export default App

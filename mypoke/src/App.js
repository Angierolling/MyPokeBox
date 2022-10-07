import './token.css';
import React, {useState, useEffect} from 'react';

import './App.css';
import {api} from './api';

export const Ap = () => {

//function App() {

  const [pokemon,setPokemon] = useState('')

  

  useEffect(() => {
    api.allPokemons() 
  }, [])

  useEffect(() => {
    api.pokemon(3) 
  }, [])
  

  return (
    <main className="App">
      <></>
      <article className="card">

        <header className="card__header">
          <h2>Bulbasaur</h2>
          <p>#001</p>
        </header>

        <section className="card__section">
          <img></img>
          <div className="card_section--container">

           <div className="card__badge--grass">
            <p>Grass </p>
           </div>
           <div className="card__badge--poison">
           <p>Poison</p>
           </div>

          </div>
          <h3 className="about">About</h3>
          <div>

            <div className="card_section--container">
              <div>
                <svg>
                </svg>
                <p>6,9 kg</p>
              </div>

              <p>Weight</p>

            </div>

            <div>

              <div>
              <svg>
                </svg>
                <p>0,7 m</p>
              </div>

              <p>Height</p>

            </div>

          </div>
           
          <p>
            There is a plant seed soon its back rigth from the day this Pokémon is born. The seed slowly grows larger.
          </p>

         

        </section>

      </article>

    </main>
  );
}

export default App;

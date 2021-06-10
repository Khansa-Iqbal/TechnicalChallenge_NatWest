import {useState, useEffect} from 'react';
import {getAllPokemon} from './services/pokemon';
import Card from './components/Card';
import './index.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultUrl= 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  useEffect(()=>{
    async function fetchData() {
      let response= await getAllPokemon(defaultUrl);
      setPokemonData(response.pokemon);
      setLoading(false);
      
    }
    fetchData();
  },[]);

  return (
    <div>
      <NavBar></NavBar>
      <div>{
        loading ? <h1> Loading...</h1>:
        (
          <>
          <div className ='main'>
            {pokemonData
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((pokemon)=>{
              return <Card key={pokemon.id} pokemon= {pokemon}/>
            })}
          </div>
          </>
        )
      }</div>
      <Footer></Footer>
    </div>
  );
}


export default App;

import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageURL] = useState(['https://pokeapi.co/api/v2/pokemon'])
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
    return () => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageURL(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageURL(prevPageUrl)
  }

  if (loading) return "loading..."

  const body = {
    margin: '3rem',
    fontFamily: 'Arial'
  }

  return (
    <div style={body}>
      <h1 >Pokemon api</h1>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import PokeInfo from "../PokeInfo/PokeInfo";
import './Main.css';


export default function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const pokeLoad = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );

    const sortedData = pokemonData.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokeData(sortedData);
  };

  useEffect(() => {
    pokeLoad();
  }, [url]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  const linkStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
    color: "white",
  };

  return (
    <>
      <div className="nav">
        <nav className="nav-details">
          <Link to="/" style={linkStyle}>
            PokeDex
          </Link>
          <Link to="/about" style={linkStyle}>
            About the page
          </Link>
        </nav>
      </div>

      <div className="container">
        <div className="main-content">
          <Card
            pokeData={pokeData}
            loading={loading}
            onCardClick={handleCardClick}
          />
          {showModal && selectedPokemon && (
            <PokeInfo pokemon={selectedPokemon} onClose={handleCloseModal} />
          )}
        </div>
        <div className="btn-group">
          {prevUrl && (
            <button
              onClick={() => {
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => {
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

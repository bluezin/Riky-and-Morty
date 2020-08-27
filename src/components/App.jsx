/* eslint-disable no-plusplus */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
import React from 'react';
import '../styles/App.css';
import ricki from '../imagenes/logo.png';
import Caracteris from './Caracteris';
import Loading from './Loading';

const App = () => {
  const [caracteristicas, setCaracteristicas] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const handleClick = () => {
    setPage(page + 1);
  };

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => setCaracteristicas([...caracteristicas, ...data.results]));
  }, [page]);
 
  const [valor, setValor] = React.useState([]);
  const resultados = caracteristicas.filter(datos => {
    return `${datos.name}`.toLowerCase().includes(`${valor}`.toLowerCase());
  });
  return (
    <div className="App">
      <img src={ricki} alt="rick" className="Logo" />
      <input
        type="text"
        onChange={e => {
          setValor(e.target.value);
        }}
        placeholder="Buscar..."
      />
      {caracteristicas.length === 0 ? (
        <Loading />
      ) : (
        <div className="row">
          {resultados.length === 0 ? (
            <h1 className="NotFound">No se encontro lo que busca :(</h1>
          ) : (
            <>
              {resultados.map(item => {
                return (
                  <ul key={item.id}>
                    <Caracteris {...item} />
                  </ul>
                );
              })}
            </>
          )}
        </div>
      )}
      <button onClick={handleClick} type="button">
        Load More
      </button>
    </div>
  );
};

export default App;

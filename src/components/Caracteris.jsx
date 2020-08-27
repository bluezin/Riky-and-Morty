import React from 'react';
import '../styles/App.css';

const Caracteris = ({ name, image, status, species, gender }) => {
  return (
    <>
      <div className="content_1">
        <img src={image} alt={name} className="img" />
        <div className="contenedor_informacion">
          {name.length < 15 ? (
            <p className="Name">{name}</p>
          ) : (
            <p className="Name">{name.slice(0, 15)}</p>
          )}

          <p className="p">
            <strong>Status:</strong>
            {'       '}
            {status}
          </p>
          {species.length <= 19 ? (
            <p className="p">
              <strong>Species:</strong>
              {'     '}
              {species}
            </p>
          ) : (
            <p className="p">
              <strong>Species:</strong>
              {'     '}
              {species.slice(0, 12)}
            </p>
          )}

          <p className="p">
            <strong>Gender:</strong>
            {'       '}
            {gender}
          </p>
        </div>
      </div>
    </>
  );
};

export default Caracteris;

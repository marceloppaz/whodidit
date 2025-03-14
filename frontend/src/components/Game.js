import React from 'react';
import DropZone from './DropZone';
import DraggableCrime from './DraggableCrime';

const Game = ({ criminosos, crimesDisponiveis, matches, onDrop, onRemove, onCheckResults }) => {
    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {criminosos.map((criminoso, index) => (
                    <div key={index} className="criminoso-container">
                        <img src={criminoso.foto} alt={`Criminoso ${index}`} className="criminoso-img" />
                        <DropZone index={index} onDrop={onDrop} crimeSoltado={matches[index]} onRemove={onRemove} />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
                {crimesDisponiveis.map((crime) => (
                    <DraggableCrime key={crime.id} crime={crime.crime} id={crime.id} />
                ))}
            </div>
            <button onClick={onCheckResults} className="verify-button">
                Verificar
            </button>
        </div>
    );
};

export default Game;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { criminosos, matches } = location.state;

    const handleReiniciar = () => {
        navigate('/');
    };

    return (
        <div className="result-container">
            <h2 className="result-title">Gabarito</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {criminosos.map((criminoso, index) => (
                    <div key={index} className="result-item">
                        <img src={criminoso.foto} alt={`Criminoso ${index}`} className="criminoso-img" />
                        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{criminoso.crime}</div>
                    </div>
                ))}
            </div>

            <h2 className="result-title">Suas Respostas</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {criminosos.map((criminoso, index) => (
                    <div key={index} className="result-item">
                        <img src={criminoso.foto} alt={`Criminoso ${index}`} className="criminoso-img" />
                        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{matches[index] ? matches[index].crime : 'Nenhum crime selecionado'}</div>
                        <div className={`result-feedback ${matches[index] && matches[index].crime === criminoso.crime ? 'correct' : 'incorrect'}`}>
                            {matches[index] && matches[index].crime === criminoso.crime ? '✅' : '❌'}
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={handleReiniciar} className="reiniciar-button">
                Reiniciar
            </button>
        </div>
    );
};

export default ResultPage;
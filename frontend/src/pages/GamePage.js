import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from '../components/Game';

const GamePage = () => {
    const [criminosos, setCriminosos] = useState([]);
    const [crimesDisponiveis, setCrimesDisponiveis] = useState([]);
    const [matches, setMatches] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/criminosos')
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos:', data);

                // Seleciona 5 criminosos aleatórios
                const criminososAleatorios = data
                    .sort(() => Math.random() - 0.5) // Embaralha a lista
                    .slice(0, 5); // Seleciona os 5 primeiros

                setCriminosos(criminososAleatorios);

                // Adiciona um ID único para cada crime
                const crimesComIds = criminososAleatorios.map((c, index) => ({
                    id: `crime-${index}`,
                    crime: c.crime
                }));

                setCrimesDisponiveis(crimesComIds.sort(() => Math.random() - 0.5));
            })
            .catch(error => console.error('Erro ao buscar criminosos:', error));
    }, []);

    const handleDrop = (index, crimeId) => {
        const crime = crimesDisponiveis.find(c => c.id === crimeId) || Object.values(matches).find(c => c.id === crimeId);

        if (crime) {
            if (matches[index]) {
                setCrimesDisponiveis(prev => [...prev, matches[index]]);
            }

            setCrimesDisponiveis(prev => prev.filter(c => c.id !== crimeId));
            setMatches({ ...matches, [index]: crime });
        }
    };

    const handleRemove = (index) => {
        if (matches[index]) {
            setCrimesDisponiveis(prev => [...prev, matches[index]]);
            const newMatches = { ...matches };
            delete newMatches[index];
            setMatches(newMatches);
        }
    };

    const checkResults = () => {
        if (Object.keys(matches).length < criminosos.length) {
            alert('Preencha todas as zonas antes de verificar!');
            return;
        }

        // Navega para a página de resultado com os dados necessários
        navigate('/resultado', { state: { criminosos, matches } });
    };

    return (
        <Game
            criminosos={criminosos}
            crimesDisponiveis={crimesDisponiveis}
            matches={matches}
            onDrop={handleDrop}
            onRemove={handleRemove}
            onCheckResults={checkResults}
        />
    );
};

export default GamePage;
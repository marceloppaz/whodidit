import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

const App = () => {
    return (
        <Router>
            <DndProvider backend={HTML5Backend}>
                <Routes>
                    <Route path="/" element={<GamePage />} />
                    <Route path="/resultado" element={<ResultPage />} />
                </Routes>
            </DndProvider>
        </Router>
    );
};

export default App;
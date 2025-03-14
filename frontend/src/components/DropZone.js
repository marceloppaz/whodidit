import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ index, onDrop, crimeSoltado, onRemove }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'crime',
        drop: (item) => onDrop(index, item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`drop-zone ${isOver ? 'drop-zone-over' : ''}`}
        >
            {crimeSoltado ? (
                <>
                    {crimeSoltado.crime}
                    <button onClick={() => onRemove(index)} className="remove-button">
                        X
                    </button>
                </>
            ) : (
                <div className="drop-zone-question">
                    ?
                </div>
            )}
        </div>
    );
};

export default DropZone;
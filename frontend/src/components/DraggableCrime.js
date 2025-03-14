import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableCrime = ({ crime, id }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'crime',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={`draggable-crime ${isDragging ? 'draggable-crime-dragging' : ''}`}
        >
            {crime}
        </div>
    );
};

export default DraggableCrime;
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Brother;
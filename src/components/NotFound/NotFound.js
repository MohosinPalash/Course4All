import React from 'react';
import error from '../../404.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <img className="error-image" src={error} />
        </div>
    );
};

export default NotFound;
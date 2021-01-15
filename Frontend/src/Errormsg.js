import React from 'react';
import './Errormsg.css';
import servererror from './Images/500.png'

function Errormsg() {
    return (
        <div>
            <img className="errormsg" src={servererror}/>
        </div>
    )
}

export default Errormsg

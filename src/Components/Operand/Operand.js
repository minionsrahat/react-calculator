import React from 'react';
import { ACTIONS } from '../../App';
const Operand = ({dispatch,operation}) => {
    return (
        <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})} >{operation}</button>

    );
};

export default Operand;
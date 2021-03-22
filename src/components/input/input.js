import React from 'react';
import './input.css';
const INPUT = ({ onButtonsubmit, OninputChange, data }) => {
    return (
        <div className='space'>
            <input className='in' type='text' placeholder='add new!!' value={data.text} onChange={OninputChange}></input>
            <button className='button'
                type='submit'
                onClick={() => onButtonsubmit()}//onclick={onbuttonsubmit} dono same hai but this one is newsyntax
            >ADD</button>
        </div>
    )
}

export default INPUT;
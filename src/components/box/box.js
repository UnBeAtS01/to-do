import React from 'react';
import './box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function BOX({ remove, item, updatevalue }) {
    const ele = item.map(e => {
        return (<div>
            <div className='box' key={e.key}>
                <div className='box-first'>
                 <input className='input' key={e.key} value={e.text} onChange={(k) => updatevalue(k.target.value, e.key)} />
                </div>
                <span className='shift'>
                    <FontAwesomeIcon className='delete' icon='trash' onClick={() => remove(e.key)} />
                </span>
            </div>

        </div>

        )
    })
    return (
        <div className="todo-container">
            <FlipMove duration={300} easing="ease-in-out">{ele}</FlipMove>
        </div>
    )
}
export default BOX;

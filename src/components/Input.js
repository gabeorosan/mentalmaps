import React, {useState, useEffect} from 'react'
import Draggable from 'react-draggable'
import './style.css'
import {Line} from 'react-lineto';
const Input = ({note}) => {
    const [text, setText] = useState(note.text)
    const [adopting, setAdopting] = useState(false)
    useEffect(() => {
        
    }, [adopting])
    const adopt = (e) => {
        setAdopting(true)
        let domRect = e.target.getBoundingClientRect();
        console.log(domRect)
    }
    // document.addEventListener('click', setAdopting(false))
    return (
            <Draggable>
                <>
                <div className='input-container'>
                    <input className='input' type='text'/>
                    <button className='adopt-button' onClick={(e) => adopt(e)}>
                        <span className="dot"></span>
                    </button>
                </div>
                <div visibility = {adopting ? 'visible' : 'hidden'}>
                    <Line x0={0} y0={0} x1={100} y1={1000} />
                </div> 
                </>
            </Draggable>
        
        
    )
}

export default Input

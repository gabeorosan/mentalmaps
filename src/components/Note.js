import React, {useState, useEffect} from 'react'
import Draggable from 'react-draggable'
import './style.css'
import {Line, LineTo} from 'react-lineto';
import {useDispatch} from 'react-redux'
import { deleteNote } from '../actions/notes';
const Note = ({note, saveNotes}) => {
    const [text, setText] = useState(note.text)
    const [adopting, setAdopting] = useState(false)
    const [position, setPosition] = useState({x: note.position.x - 8, y: note.position.y - 29})
    const [line, setLine] = useState({x: position.x, y: position.y, x1: 0, y1: 0})
    const dispatch = useDispatch()
    useEffect(() => {
        if(adopting){
            document.addEventListener("mousemove", trackMouse)
            document.addEventListener("mousedown", checkAdopt)
        } else {
            document.removeEventListener("mousemove", trackMouse)
            document.removeEventListener("mousedown", checkAdopt)
        }
    }, [adopting])
    const removeNote = () => {
        saveNotes()
        dispatch(deleteNote(note.id))
    }
    const checkAdopt = (event) => {
        console.log(event.target)
        setAdopting(false)
    }
    const trackMouse = (event) => {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        let dot = document.getElementById(note.id)
        let {x, y} = dot.getBoundingClientRect()
        // let posX = dot.getBoundingClientRect().x
        // let posY = dot.getBoundingClientRect().y
        setLine({x, y, x1: event.pageX, y1: event.pageY})
        
    }
    // document.addEventListener('click', setAdopting(false))
    return (
        <div className='absolute'>
            <Draggable className='absolute' onStop = {(e) => setPosition({x: e.clientX, y: e.clientY})} defaultPosition={position}>
                <div className='container'id = {note.id}>
                    <div className='input-container'>
                        <input className='input'  value={text} onChange={(e) => setText(e.target.value)}/>
                        <button className='adopt-button' onClick={(e) => setAdopting(true)}>
                            <span className="dot" ></span>
                        </button>
                        <button onClick={() => removeNote()} className='delete-button'>delete</button>
                    </div>
                    {adopting && <div className='line'>
                        <Line x0={line.x} y0={line.y} x1={line.x1} y1={line.y1} />
                    </div> }
                
                </div>
            </Draggable>
        </div>
    )
}

export default Note

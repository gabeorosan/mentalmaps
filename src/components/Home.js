import React, {useState} from 'react'
import Input from './Input'
import { v4 as uuid } from 'uuid';
const Home = () => {
    const [notes, setNotes] = useState([])
    const createNote = () => {
        setNotes([...notes, {text: '', connections: [], id: uuid()}])
    }
    return (
        <div>
            <button onClick={() => createNote()}>
                New Note
            </button>
            {notes.map(n => <Input key={uuid()} noteInfo={n}/>)}
            
        </div>
    )
}

export default Home

import React, {useState, useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import {createNote, saveNotes, deleteNote, updateNote, getNotes} from '../actions/notes'
import Input from './Input'
import {v4 as uuid} from 'uuid'
const Notes = ({notes}) => {
    console.log('notes: ',notes)
    const [noteContents, setNoteContents] = useState(notes)
    const dispatch = useDispatch()
    console.log(noteContents)
    useEffect(() => {
        setNoteContents(notes)
    }, [notes])
    const handleChange = (newNote) => {
        console.log(newNote)
        setNoteContents(noteContents.map(n => n.id === newNote.id ? newNote : n))
    }
    return (
        <div>
            <button onClick={() => dispatch(createNote())}>
                New Note
            </button>
            {noteContents.map(n => <Input key={uuid()} note={n} onChange={handleChange}/>)}
            <button onClick={() => dispatch(saveNotes())}>save</button>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {notes: state.notes, ownProps}
}
export default connect(mapStateToProps)(Notes)

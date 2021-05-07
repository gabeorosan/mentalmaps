import React, {useState, useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import {createNote, saveNotes, deleteNote, updateNote, getNotes, updateNotes} from '../actions/notes'
import Input from './Note'
import {v4 as uuid} from 'uuid'
import './style.css'
const Notes = ({notes}) => {
    notes.map(n => console.log(n.position))
    const dispatch = useDispatch()
    const saveNotes = () => {
        let updatedNotes = notes.map(n => {
            let note = document.getElementById(n.id)
            if (note==='undefined') return
            console.log(notes.indexOf(n), note.getBoundingClientRect())
            let position = {x: note.getBoundingClientRect().x, y: note.getBoundingClientRect().y}
            let text = note.children[0].children[0].value
            return {...n, text: text, position: position}
        })
        dispatch(updateNotes(updatedNotes))
    }
    const newNote = () => {
        let updatedNotes = notes.map(n => {
            let note = document.getElementById(n.id)
            console.log(notes.indexOf(n), note.getBoundingClientRect())
            let position = {x: note.getBoundingClientRect().x, y: note.getBoundingClientRect().y}
            let temp1 = note.children[0]
            let text = temp1.children[0].value
            return {...n, text: text, position: position}
        })
        dispatch(updateNotes(updatedNotes))
        dispatch(createNote())
    }
    return (
        <div>
            <button onClick={() => newNote()}>
                New Note
            </button>
            {notes.map(n => <Input key={uuid()} note={n} saveNotes = {saveNotes}/>)}
            <button onClick={() => saveNotes()}>save</button>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {notes: state.notes, ownProps}
}
export default connect(mapStateToProps)(Notes)

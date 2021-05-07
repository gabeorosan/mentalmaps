import {v4 as uuid} from 'uuid'

export const createNote = () => {
    return {type: 'CREATE_NOTE', payload: {text: '', connections: {}, id: uuid(), position: {x: 0, y: 0}}}
}
export const getNotes = () => {
    let temp = JSON.parse(localStorage.getItem('notes'))
    if (temp ===null) temp = []
    return {type: 'GET_NOTES', payload: temp}
}
export const updateNote = (newNote) => {
    return {type: 'UPDATE_NOTE', payload: newNote}
}
export const updateNotes = (updatedNotes) => {
    return {type: 'UPDATE_NOTES', payload: updatedNotes}
}
export const deleteNote = (id) => {
    return {type: 'DELETE_NOTE', payload: id}
}
export const saveNotes = () => {
    return {type: 'SAVE_NOTES'}
}
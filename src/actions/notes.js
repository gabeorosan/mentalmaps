export const createNote = () => {
    return {type: 'CREATE_NOTE'}
}
export const getNotes = () => {
    let temp = JSON.parse(localStorage.getItem('notes'))
    return {type: 'GET_NOTES', payload: temp.notes}
}
export const updateNote = (newNote) => {
    return {type: 'UPDATE_NOTE', payload: newNote}
}
export const deleteNote = (id) => {
    return {type: 'DELETE_NOTE', payload: id}
}
export const saveNotes = () => {
    return {type: 'SAVE_NOTES'}
}
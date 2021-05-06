import {v4 as uuid} from 'uuid'
export default (notes = [], action) => {
    switch(action.type){
        case 'GET_NOTES':
            return action.payload
        case "CREATE_NOTE":
            return [...notes, {text: '', connections: {}, id: uuid()}]
        case 'UPDATE_NOTE':
            return notes.filter(n => n.id === action.payload.id ? action.payload : n)
        case 'DELETE_NOTE':
            return notes.filter(n => n.id !== action.payload.id)
        case "SAVE_NOTES":
            localStorage.setItem('notes', JSON.stringify({notes}))
            return notes
        default:
            return notes
    }
}
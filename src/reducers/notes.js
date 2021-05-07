import {v4 as uuid} from 'uuid'
export default (notes = [], action) => {
    switch(action.type){
        case 'GET_NOTES':
            return action.payload
        case "CREATE_NOTE":
            return [...notes, action.payload]
        case 'UPDATE_NOTE':
            return notes.filter(n => n.id === action.payload.id ? action.payload : n)
        case 'UPDATE_NOTES':
            localStorage.setItem('notes', JSON.stringify(action.payload))
            return action.payload
        case 'DELETE_NOTE':
            return notes.filter(n => n.id !== action.payload)
        case "SAVE_NOTES":
            localStorage.setItem('notes', JSON.stringify({notes}))
            return notes
        default:
            return notes
    }
}
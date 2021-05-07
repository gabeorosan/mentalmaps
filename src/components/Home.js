import React, {useState, useEffect} from 'react'
import Input from './Note'
import { v4 as uuid } from 'uuid';
import {connect, useDispatch} from 'react-redux'
import {createNote, saveNotes, getNotes} from '../actions/notes'
import Notes from './Notes';
const Home = ({notes}) => {
    const dispatch = useDispatch()
    
    return (
        <div className='home-container'>
            <Notes/>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {notes: state.notes}
}
export default connect(mapStateToProps)(Home)

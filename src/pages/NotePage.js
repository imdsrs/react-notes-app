import React, {useState, useEffect} from "react";
//import notes from "../assets/data";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

//**
//  old way of access 
//**
// const NotePage = () => {
//     console.log("props", this.p);
//     return(
//         <div>
//             <h1>single note test values</h1>
//         </div>
//     )
// }

const NotePage = () => {

  const {idValue} = useParams();
  let noteId = idValue;
  let navigate = useNavigate();

  let [note, setNote] = useState(null);
  
  //const note = notes.find(note => note.id === Number(noteId));

  let getNote = async() => {
    if(noteId !== 'new'){
      let response = await fetch(`http://localhost:8000/notes/${noteId}`);
      let data = await response.json();
      console.log(data);
      setNote(data);
    }
  }

  let updateNote = async() => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let deleteNote = async() => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify({...note, 'update': new Date()})
    });
    navigate('/');
  }

  let createNote = async() => {
    await fetch(`http://localhost:8000/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let handleSubmit = () => {
    if(noteId !== 'new' && !note.body){
      deleteNote();
    }
    else if(noteId !== 'new'){
      updateNote();
    }
    else if(noteId === 'new' && note !== null){
      createNote();
    }
    //updateNote();
    navigate('/');
  }

  useEffect(() => {
    getNote()
  }, [noteId]);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit}/>
          </Link>
        </h3>

        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}

      </div>

      {/* <h1>{note?.body}</h1> */}

      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>

    </div>
  )
}

export default NotePage;
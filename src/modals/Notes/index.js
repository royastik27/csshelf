import React from 'react';

import NotesComponent from './NotesComponent';
import './index.css';

/* TODO:
--> Add link to discussion text
*/

class AllNotes extends React.Component
{
    state = { notes_component: <p>Loading...</p> };

    async get_notes()
    {
        try {
            const res = await fetch('http://localhost:5000/api/notes', {
                method: "GET"
            });

            const data = await res.json();  // array
            
            // console.log(typeof data[0]);    // object

            this.setState({ notes_component: <NotesComponent data={data} /> });    
        }
        catch(err)
        {
            // console.log(err);

            this.setState({ notes_component: <p>Failed to load resource!</p> })
        }
    }

    componentDidMount()
    {
        this.get_notes();
    }
    
    render() {
        return (
            <div className="allnotes">
                {this.state.notes_component}
            </div>
        );
    }
};

function Notes() {
    return (
        <div>
            <h2>Notes 📄</h2>
            <hr></hr>

            <br />            
            <AllNotes />
        </div>
    );
  }

export default Notes;

import React from "react";
import Header from "./heading";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

function showNotes(notes){
    return(
        <Note 
            key={notes.key}
            title={notes.title}
            note={notes.content}
        />
    
    );
}

function App(){
    return(
    <div>
        <Header />
        <Footer />
        {notes.map(showNotes)}
    </div>
       
    );

}

export default App;
import React from "react";
import Header from "./heading";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";



function App(){
    return(
    <div>
        <Header />
        
        {notes.map((notes)=>
                        <Note 
            key={notes.key}
            title={notes.title}
            note={notes.content}
        />
)}

        <Footer />
    </div>
       
    );

}

export default App;
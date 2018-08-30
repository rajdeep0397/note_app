// console.log('Starting notes.js');

// module.exports.addNote=() => {
  // console.log('addNote');
  // return 'New note';
// };

 // module.exports.add=(a,b) =>{
// var c;
// c=a+b;

// return c;


 // };
const fs= require('fs');


var fetchNotes=()=>{


  try{
    var notesString=fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);

  }catch(e){
    return [];

  }

};

var saveNotes=(notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote =(title,body) => {
  var notes=fetchNotes();
  var note={
    title,
    body
  };




var duplicateNotes=notes.filter((note)=>note.title===title);

if( duplicateNotes.length ===0){
  notes.push(note);
  saveNotes(notes);
  return note;
}

  // var notesString=fs.readFileSync('notes-data.json');
  // notes=JSON.parse(notesString);

  // notes.push(note);
  // fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var getAll =() =>{
  return fetchNotes();
};

var readNode =(title) =>{

  var notes= fetchNotes();

  var filteredNotes =notes.filter((note)=>note.title === title);

  return filteredNotes[0];
};

var removeNode =(title) =>{
  //fetch note
  //filter note,removing the one with title argument
  //save new nodes arry

  var notes=fetchNotes();

  var filteredNotes=notes.filter((note)=>note.title !== title);
    saveNotes(filteredNotes);
    return  notes.length!== filteredNotes.length;
};


var logNote =(note)=>{

  console.log('---');
  console.log('Title:'+ note.title);
  console.log('Body:'+ note.body);
};

module.exports ={
  addNote,
  getAll,
  readNode,
  removeNode,
  logNote
};

// console.log('Starting app.js');

const fs= require('fs');
// const os= require('os');
const _=require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

const argv=yargs.argv;
// var command= process.argv[2];
var command=argv._[0];
// console.log('Command :', command);
// console.log('Process',process.argv);
// console.log('Yargs',argv);

if(command ==='add'){
var note=  notes.addNote(argv.title, argv.body);

if(note){
  console.log('Note created successfully!');

  notes.logNote(note);
  // console.log('---');
  // console.log('Title:'+ note.title);
  // console.log('Body:'+ note.body);
} else{
  console.log('Note title taken');
}

} else if(command==='list'){
  var allNotes=notes.getAll();
  console.log('Printing '+ allNotes.length +' note(s)..');
allNotes.forEach((note)=>notes.logNote(note));

}else if(command=='read'){
  var note = notes.readNode(argv.title);

  if(note){
    console.log('Note read successfully!');
    notes.logNote(note);
    // console.log('---');
    // console.log('Title:'+ note.title);
    // console.log('Body:'+ note.body);
  } else{
    console.log('Note not found');
  }

}else if(command=='remove'){
  var noteRemoved=notes.removeNode(argv.title);
  var message= noteRemoved ? 'Note was removed':'Note not found';
  console.log(message);
}else{
  console.log('Command not recognized');
}

// console.log(_.isString(true));
// console.log(_.isString("Rajdeep"));
// var filteredArray=_.uniq(['Rajdeep']);

// console.log(filteredArray);


// var res = notes.add(9,10);
// console.log('result:',res);

// var user=os.userInfo();

// fs.appendFile('greeting.txt',' Hello ' + user.username +'! '+ ' You are ' + notes.age + '.',function(err){
  // if (err){
    // console.log('Unable to write to file');
  // }
// });

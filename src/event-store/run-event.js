import fs from 'fs'
import * as candidate from '../candidate/candidate.js'
import * as employer from '../employer/employer.js'

function run(){
let rows='';
let events=fs.readFileSync("../event-store/event-store.txt", 'utf8');
rows = events.split('\n');
for(var i=0;i<rows.length-1;i++)
{
  let row;
  row=rows[i];
  var obj = JSON.parse(row);
  readEvent(obj);
}
}

function readEvent(obj) {
   if(obj.event=='addCandidate') 
   addCandidate(obj);
   if(obj.event=='updateCandidate')
   updateCandidate(obj);
   if(obj.event=='addEmployer')
   addEmployer(obj);
   if(obj.event=='addPosition')
   addPosition(obj);
   if(obj.event=='addJob')
   addJob(obj);
   if(obj.event=='deletePosition')
   deletePosition(obj);
   if(obj.event=='deleteJob')
   deleteJob(obj);
   if(obj.event=='updateEmployer')
   updateEmployer(obj);
   if(obj.event=='updatePosition')
   updatePosition(obj);
   if(obj.event=='updateJob')
   updateJob(obj);
  }

  function addCandidate(obj){
    delete obj.event;
     candidate.addNew(obj);
  }

 function updateCandidate(obj){
  delete obj.event;
    candidate.updateData(obj);
 }

 function addEmployer(obj){
  delete obj.event;
  employer.addNewEmployer(obj);
 }

 function addPosition(obj){
  delete obj.event;
  employer.addNewPosition(obj);
 }
 
 function addJob(obj){
  delete obj.event;
  employer.addNewJob(obj);
 }

 function deletePosition(obj){
  delete obj.event;
  employer.deletPosition(obj);
 }

function deleteJob(obj){
  delete obj.event;
  employer.deletJob(obj);
}

function updateEmployer(obj){
  delete obj.event;
  employer.updateEmployer(obj);
}

function updatePosition(obj){
  delete obj.event;
  employer.updatePosition(obj);
}

function updateJob(obj){
  delete obj.event;
  employer.updateJob(obj);
}

export {
    run
}
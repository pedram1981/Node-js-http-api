import * as add from '../candidate/add.js'
import * as update from '../candidate/update.js'
import * as find from '../candidate/find.js'
import * as login from '../candidate/login.js'
import * as data from '../db/generate-data.js'

var candidates=[];

async function addNew(newData) {
  load();
      let id=candidates.length;
      newData.id=id;
  let result=add.candidate(newData,candidates);
  return result;
}

function updateKepnerTregoe(newData) {
  load();
   let result=update.KepnerTregoe(newData,candidates);
  return result;
  }

async function findAll(){
  load();
  return candidates;
}

async function findById(id){
  load();
  return find.byId(id,candidates);
}

async function logIn(user_name,pass){
  load();
  return login.check(user_name,pass);
}


function set(candidatesNew) {
  data.setCandidates(candidatesNew);
}

function get() {
  load();
  return candidates;
}

function load(){
   candidates=data.getCandidates();
}

export {
   set,
   get,
  addNew,
  updateKepnerTregoe,
  findAll,
  findById,
  logIn
}

import * as add from '../employer/add.js'
import * as update from '../employer/update.js'
import * as remove from '../employer/delete.js'
import * as find from '../employer/find.js'
import * as login from '../employer/login.js'
import * as data from '../db/generate-data.js'

var employers=[];
var positions=[];
var jobs=[];
var loadflag=true;

function addNewPosition(newData) {
    load();
        let id=positions.length;
        newData.id=id;
    let result=add.position(newData,positions);
    return result;
  }

  async function addNewJob(newData) {
    load();
        let id=jobs.length;
        newData.id=id;
    let result=add.job(newData,jobs);
    return result;
  }

function updatePosition(newData) {
    load();
   let result=update.position(newData,positions);
  return result;
  }

 async function updateJob(newData) {
    load();
   let result=update.job(newData,jobs);
  return result;
  }

  async function deletPosition(data) {
    load();
   let result=remove.position(data.idPosition,positions);
  return result;
  }

 async function deletJob(data) {
    load();
   let result=remove.job(data.idEmployer,data.idJob,positions,jobs);
  return result;
  }

async function findAllEmployer(){
  load();
  return employers;
}

async function findAllPosition(){
  load();
  return positions;
}

async function findAllJob(){
  load();
  return jobs;
}

async function findEmployerById(idEmployer){
  load();
  return find.employerById(idEmployer);
}

async function  findPositionById(idPosition){
load();
 return find.positionById(idPosition);
}

async function findJobById(idJob){
  load();
  return find.jobById(idJob);
}

async function findJobByEmployerId(idEmployer){
  load();
  return find.jobByEmployerId(idEmployer);
}

async function findPositionByEmployerJobId(idJob,idEmployer){
  load();
  return find.positionByEmployerJobId(idJob,idEmployer);
}

function findJobDescriptionById(idPosition){
  load();
  return find.jobDescriptionById(idPosition);
}
async function logIn(user_name,pass){
  load();
  return login.check(user_name,pass);
}


function setEmployers(employersNew) {
  data.setEmployers(employersNew)
}

function getEmployers() {
  load();
  return employers;
}

function setPositions(positionsNew) {
    data.setPositions(positionsNew);
}

async function findAllPositionJob(){
    load();
    return find.allPosition();
  }

  function setJobs(jobsNew) {
    data.setJobs(jobsNew);
   }
  
  function getJobs() {
  load();
    return jobs;
  }

  function  getPositions(){
    load();
    return positions;
  }


function load(){
  
    employers=data.getEmployers();
    positions=data.getPositions();
    jobs=data.getJobs();
}
export {
    setEmployers,
    setPositions,
    setJobs,
    getEmployers,
    getPositions,
    getJobs,
    addNewPosition,
    addNewJob,
    updatePosition,
    updateJob,
    deletPosition,
    deletJob,
    findAllEmployer,
    findAllPosition,
    findAllJob,
    findEmployerById,
    findPositionById,
    findJobById,
    findJobByEmployerId,
    findPositionByEmployerJobId,
    findJobDescriptionById,
    findAllPositionJob,
    logIn
}

import fs from 'fs'

var positions=[],candidates=[],employers=[],jobs=[];
var seed=1;
var countPositions=5,countCandidates=5,countEmployers=1,countJobs=2;

function loadData(demo) {
  countPositions=5,countCandidates=5,countEmployers=1,countJobs=2;
  positions=[];candidates=[];employers=[];jobs=[];
  seed=1;
  employersData();
  jobsData();
  positionsData();
  candidatesData();
  createWeight();
}

function employersData() {
  var dataJson = fs.readFileSync("./src/db/employer.json");
  try{
    employers = JSON.parse(dataJson);
  }catch{}
 }
 

function jobsData() {
  jobs.push({id:0,idEmp:0,description:'Front end developer'});
  jobs.push({id:1,idEmp:0,description:'back end developer'});
}

function positionsData() {
  var dataJson = fs.readFileSync("./src/db/position.json");
  try{
    positions = JSON.parse(dataJson);
  }catch{}
}

function candidatesData() {
  var dataJson = fs.readFileSync("./src/db/Candidate.json");
  try{
    candidates = JSON.parse(dataJson);
  }catch{}
 
}

function createWeight() {
  seed=1;
  weightPosition();
  weightCandidate();
  }

function weightPosition(){
 for(let i=0;i<positions.length;i++) {
  positions[i].w={};
  setWeightPosition(i);
 }
}

function setWeightPosition(i) {
  let competence=Math.round(randomBetween(1,10));
  let confidence=Math.round(randomBetween(1,10));
  let salary=Math.round(randomBetween(1,10));
  let fit=Math.round(randomBetween(1,10));
  let education=Math.round(randomBetween(1,10));
  positions[i].w.competence=competence;
  positions[i].w.confidence=confidence;
  positions[i].w.salary=salary;
 positions[i].w.fit=fit;
 positions[i].w.education=education;
 }

function weightCandidate(){
 
  for(let i=0;i<candidates.length;i++) {
    candidates[i].w={};
    setWeightCandidate(i);
   
  }
 
}

function setWeightCandidate(i){
  let salary=Math.round(randomBetween(1,10));
  let naics=Math.round(randomBetween(1,10));
  let location=Math.round(randomBetween(1,10));
  let fit=Math.round(randomBetween(1,10));
  let benefits=Math.round(randomBetween(1,10));
  let competence=Math.round(randomBetween(1,10));
  let confidence=Math.round(randomBetween(1,10));
  let education=Math.round(randomBetween(1,10));
  candidates[i].w.salary=salary;
  candidates[i].w.naics=naics;
  candidates[i].w.location=location;
  candidates[i].w.benefits=benefits;
  candidates[i].w.fit=fit;
  candidates[i].w.competence=competence;
  candidates[i].w.confidence=confidence;
  candidates[i].w.education=education;
}

function generateRandomData() {
  let x = Math.abs(Math.sin(seed++)) ;
  return x;
}

function randomBetween(A,B) {
  let r = (generateRandomData()*(B-A)) + A;
  return r;
}

function getEmployers() {
  return employers;
}

function setEmployers(employersNew) {
  employers=employersNew;
 }

function getJobs() {
  return jobs;
}

function setJobs(jobsNew) {
  jobs=jobsNew;
 }

function getPositions() {
  return positions;
}

function setPositions(positionsNew) {
  positions=positionsNew;
 }

function getCandidates() {
  return candidates;
}

function setCandidates(candidatesNew) {
   candidates=candidatesNew;
  }

export {
  loadData,
  getEmployers,
  getJobs,
  getPositions,
  getCandidates,
  setCandidates,
  setPositions,
  setJobs,
  setEmployers
 
}

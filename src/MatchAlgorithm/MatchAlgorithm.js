import * as employer from '../employer/employer.js'
import * as candidate from '../candidate/candidate.js'
import * as ktCandidate from '../matchAlgorithm/factor-candidate.js'
import * as ktPosition from '../matchAlgorithm/factors-position.js'

async function candidateKt(empId){
 return candidatematchAlgorithm(empId);
}

async function candidateKtByPositionId(positionId,empId){
 return candidatematchAlgorithmByPositionId(positionId,empId);
  }

  async function candidatematchAlgorithmByPositionId(id,empId){
  let positions=employer.getPositions();
  let candidates=candidate.get();
  let employers=employer.getEmployers();
  let ktData=[];
  
 for(let i=0;i<candidates.length;i++) {
  let salary=ktCandidate.salary(positions[id].salary,candidates[i].salary
  ,candidates[i].w.salary);
  let score=salary;
  let information=[];
  let salary1=[];
  salary1.push("salary",salary);
  information.push(salary1);
  ktData.push({idCandidate:candidates[i].id,score,information});
 }

 for(let i=0;i<candidates.length;i++) {
  for(let j=0;j<candidates.length-1;j++) {
    if(ktData[j].score<ktData[j+1].score){
      let t=ktData[j];
      ktData[j]=ktData[j+1];
      ktData[j+1]=t;
    }

  }
}
 return ktData;
}

async function candidatematchAlgorithm(empId){
  let positions=employer.getPositions();
  let candidates=candidate.get();
  let employers=employer.getEmployers();
  let ktData=[];
  let information=[];
for(let c=0;c<candidates.length;c++) {
  information=[];
 for(let p=0;p<positions.length;p++) {  
  let salary=ktCandidate.salary(positions[p].salary,candidates[c].salary
    ,candidates[c].w.salary);
    let score=salary;
    information.push({idPosition:positions[p].id,score:score})
  }
  ktData.push({idCandidate:candidates[c].id,information:information});
}

  return ktData;
}



async function employermatchAlgorithm(){
  let positions=employer.getPositions();
  let candidates=candidate.get();
  let employers=employer.getEmployers();
  let ktData=[];
  let information=[];
for(let c=0;c<candidates.length;c++) {
  information=[];
 for(let p=0;p<positions.length;p++) {  
  let salary=ktPosition.salary(positions[p].salary,candidates[c].salary
    ,positions[p].w.salary);
    let score=salary;
    information.push({idPosition:positions[p].id,score:score})
  }
  ktData.push({idCandidate:candidates[c].id,information:information});
}

  return ktData;
}

async function employermatchAlgorithmByPositionId(p){
  let positions=employer.getPositions();
  let candidates=candidate.get();
  let ktData=[];
  
 for(let c=0;c<candidates.length;c++) {
  let salary=ktPosition.salary(positions[p].salary,candidates[c].salary
    ,positions[p].w.salary);
    let score=salary;
    let information=[];
    let salary1=[];
    salary1.push("salary",salary);
    
  information.push(salary1);
  ktData.push({idCandidate:candidates[c].id,score,information});
 }

 for(let i=0;i<candidates.length;i++) {
  for(let j=0;j<candidates.length-1;j++) {
    if(ktData[j].score<ktData[j+1].score){
      let t=ktData[j];
      ktData[j]=ktData[j+1];
      ktData[j+1]=t;
    }

  }
}
 return ktData;
}

async function candidateKtByCandidateId(id,empId){
  let positions=employer.getPositions();
  let candidates=candidate.get();
  let employers=employer.getEmployers();
  let ktData=[];
 for(let p=0;p<positions.length;p++){
   let salary=ktCandidate.salary(positions[p].salary,candidates[id].salary
    ,candidates[id].w.salary);
    let score=salary;
  ktData.push({id:positions[i].id,salary:salary,
         scroe:score
    })
  }

  return ktData;
}


export {
    candidateKt,
    candidateKtByPositionId,
    candidateKtByCandidateId,
    employermatchAlgorithm,
    employermatchAlgorithmByPositionId
}
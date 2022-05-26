import * as employer from '../employer/employer.js'


function jobByEmployerId(id) {
  let jobs=employer.getJobs();
  let jobsNew=[];
for(var i=0;i<jobs.length;i++) {
    if(jobs[i].idEmp==id) 
       jobsNew.push(jobs[i]);
    }
  return jobsNew;
}

function positionByEmployerJobId(idJob,idEmp){
  let jobs=employer.getJobs();
  let positions=employer.getPositions();
    let positionNew=[];
  for(var i=0;i<positions.length;i++) {
    if(positions[i].idEmp==idEmp & positions[i].idJob==idJob) {
       let info={};
       info=JSON.parse(JSON.stringify(positions[i]));
        //info.jobName=getJobName(positions[i].id_job,jobs);
       positionNew.push(info);
    }
  }
 return positionNew;
}

function allPosition(){
  let positions=employer.getPositions();
  let positionNew=[];
 for(var i=0;i<positions.length;i++) 
    positionNew.push({id:positions[i].id,idJob:positions[i].idJob,description:jobDescriptionById(positions[i].id)});
 return positionNew;
}


function jobDescriptionById(id)
{
  let position=employer.getPositions();
  let job=employer.getJobs();
  for(let i=0;i<job.length;i++)
  {
    if(position[id].idJob==job[i].id)
    return job[i].description;
  }
  return '-';
}

export {
  jobByEmployerId,
  positionByEmployerJobId,
  allPosition
}
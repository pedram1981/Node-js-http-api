import * as writeEvent from '../event-store/write-event.js'
import * as employerJs from '../employer/employer.js'
import * as message from '../controllers/message.js'


var positionsNew=[];
var jobsNew=[];

function position(info,data) {
 positionsNew=data;
 positionsNew.splice(info.idPosition, 1); 
 employerJs.setPositions(positionsNew);
 let newData={idPosition:idPosition}
 writeEvent.add(newData,'deletePosition');
 return message.successful();
}

function job(info,dataPosition,dataJob) {
  positionsNew=dataPosition;
  jobsNew=dataJob;

  try {
  for(let i=0;i<positionsNew.length;i++) {
      if(positionsNew[i].idJob==idJob & positionsNew[i].idEmployer==info.idEmployer) {
        positionsNew.splice(i, 1); 
        i--;
      }
   }
   for(i=0;i<jobsNew.length;i++) {
    if(job[i].idEmployer==info.idEmployer && job[i].id==info.idJob) {
      job.splice(i, 1); 
        i--;
        }
   }
   employerJs.setJobs(jobsNew);
   employerJs.setPositions(positionsNew);
   let newData={idEmployer:idEmployer,idJob:idJob}
   writeEvent.add(newData,'deleteJob'); 
   
  }
  catch{}
  return message.successful();
}

  export {
    position,
    job
  }


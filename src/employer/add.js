import * as writeEvent from '../event-store/write-event.js'
import * as employerJs from '../employer/employer.js'
import * as message from '../controllers/message.js'

var positionsNew=[];
var employersNew=[];
var jobsNew=[];
function employer(newData,data) {
    employersNew=data;
  let userName=newData.userName;
    if(checkUserName(userName)==0) {
      employersNew.push(newData);
      employerJs.setEmployers(candidateNew);
      writeEvent.add(newData,'addEmployer');
        return message.successful();
  }
  else
    return message.errorAddEmployer();
  }
  
  function position(newData,data) {
    positionsNew=data;
    positionsNew.push(newData);
    employerJs.setPositions(positionsNew);
    writeEvent.add(newData,'addPosition');
    return message.successful();
  }

  function job(newData,data) {
      jobsNew=data;
      jobsNew.push(newData);
      employerJs.setJobs(jobsNew);
      writeEvent.add(newData,'addJob');
        return message.successful();
  }

function checkUserName(userName) {
  for(var i=0;i<employersNew.length;i++) {
     if(employersNew[i].userName==userName)
     {
       return 1;
     }
  }
  return 0;
}


  export {
    employer,
    position,
    job
  }
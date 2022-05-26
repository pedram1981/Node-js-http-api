import * as writeEvent from '../event-store/write-event.js'
import * as employerJs from '../employer/employer.js'
import * as message from '../controllers/message.js'


var positionsNew=[];
var jobsNew=[];

function position(newData,data) {
    positionsNew=data;
    updatePosition(newData);
    employerJs.setPositions(positionsNew);
    writeEvent.add(newData,'updatePosition');
      return message.successful();
}

function updatePosition(newData) {
  positionsNew[newData.id].salary=newData.salary;
}

function job(newData,data) {
    jobsNew=data;
 
    employerJs.setJobs(jobsNew);
    writeEvent.add(newData,'updateJob');
      return message.successful();
}


  export {
    position,
    job
  }


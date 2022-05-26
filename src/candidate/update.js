import * as writeEvent from '../event-store/write-event.js'
import * as candidateJs from '../candidate/candidate.js'
import * as message from '../controllers/message.js'

var candidateNew=[];
function KepnerTregoe(newData,data) {
      candidateNew=data;
      updateKepnerTregoe(newData);
      candidateJs.set(candidateNew);
      writeEvent.add(newData,'updateFactor');
        return message.successful();
}
  
function updateKepnerTregoe(newData) {
  candidateNew[newData.id].salary=newData.salary;
  
  candidateNew[newData.id].w.salary=newData.wSalary;
  }

  export {
    KepnerTregoe
   
  }


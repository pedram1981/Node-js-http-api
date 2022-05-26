import * as candidateJs from '../candidate/candidate.js'
import * as message from '../controllers/message.js'

var candidateNew=[];
function candidate(newData,data) {
  candidateNew=data;
  let userName=newData.userName;
    if(checkUserName(userName)==0) {
      candidateNew.push(newData);
      candidateJs.set(candidateNew);
      return message.successful();
  }
  else
    return message.errorAddCandidate();
  }
  
  function checkUserName(userName) {
  for(var i=0;i<candidateNew.length;i++) {
     if(candidateNew[i].userName==userName)
     {
       return 1;
     }
  }
  return 0;
}


  export {
    candidate
  }
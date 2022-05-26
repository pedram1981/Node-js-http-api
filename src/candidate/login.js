import * as candidate from '../candidate/candidate.js'
import * as message from '../controllers/message.js'
var candidates=[];

function check(userName,pass) {
 candidates=candidate.get();
  let info={};
  for(var i=0;i<candidates.length;i++) {
    if(candidates[i].userName==userName && candidates[i].pass==pass) {
      info.id=candidates[i].id;
      info.id=candidates[i].id;
      info.salary=candidates[i].salary;
      info.w={};
      info.w.salary=candidates[i].w.salary;
      return message.successfulLoginCandidate(info);
    }
  }
  return message.errorLoginCandidate();
    
 }

 export {
  check
 }
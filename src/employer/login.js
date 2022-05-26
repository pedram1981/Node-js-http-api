import * as employer from '../employer/employer.js'
import * as message from '../controllers/message.js'
var employers=[];

function check(userName,pass) {
    employers=employer.getEmployers();
    let i=0;
    let info={};
       info.Id=-1;
       info.company_name='-';
       info.user_name='-';
       info.pass='-';
    for(i=0;i<employers.length;i++) {
      if(employers[i].userName==userName && employers[i].pass==pass)
      {
        info.Id=employers[i].id;
        info.companyName=employers[i].companyName;
        info.userName=employers[i].userName;
        info.userName=employers[i].employeesCount;
        info.userName=employers[i].domain;
        info.userName=employers[i].webSite;
        info.pass=employers[i].pass;
        return message.successfulLoginEmployer(info);
      }
    }
    return message.errorLoginEmployer();
 }

 export {
  check
 }
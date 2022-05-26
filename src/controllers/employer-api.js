import * as employer from '../employer/employer.js'
import * as kt from '../matchAlgorithm/matchAlgorithm.js'
import * as message from '../controllers/message.js'
import * as auth from '../controllers/authentication.js'
import url from 'url'

function send(req,res){
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,x-access-token');
     res.setHeader('Access-Control-Allow-Credentials', true);
     if(auth.verifyToken(req,res)){
     if(url.parse(req.url,true).pathname=='/employermatchAlgorithm' & req.method=='GET')
      matchAlgorithm(req,res);
     if(url.parse(req.url,true).pathname=='/employerTregoeByPosition' & req.method=='GET')
     matchAlgorithmByposition(req,res);
     if(url.parse(req.url,true).pathname=='/findJobByEmployerId' & req.method=='GET')
      findJobByEmployerId(req,res);
     if(url.parse(req.url,true).pathname=='/findPositionByEmployerJobId' & req.method=='GET')
      findPositionByEmployerJobId(req,res);
     if(url.parse(req.url,true).pathname=='/updatePosition' & req.method=='PUT')
      updatePosition(req,res);

     } else {
         res.end(JSON.stringify(message.errorToken()));
     }
}     
async function matchAlgorithm(req,res){
     try {
         
     const data=await kt.employermatchAlgorithm();
     res.end(JSON.stringify(data));
     } catch(error){
         res.end(JSON.stringify(message.errorController(error)));
     }
 }
 
 async function matchAlgorithmByposition(req,res){
     try {
          let idPosition=url.parse(req.url,true).query["idPosition"];
          const data=await kt.employermatchAlgorithmByPositionId(idPosition);
          res.end(JSON.stringify(data));
     } catch(error){
              res.end(JSON.stringify(message.errorController(error)));
          }
 }

 async function findJobByEmployerId(req,res){
     try {
          let idEmployer=url.parse(req.url,true).query["empId"];
            const data=await employer.findJobByEmployerId(idEmployer);
     res.end(JSON.stringify(data));
     } catch(error) {
          res.end(JSON.stringify(message.errorController(error)));
     }
 }
 
 async function findPositionByEmployerJobId(req,res){
     try {
          let idJob=url.parse(req.url,true).query["idJob"]; 
          let idEmployer=url.parse(req.url,true).query["idEmp"]; 
     const data=await employer.findPositionByEmployerJobId(idJob,idEmployer);
     res.end(JSON.stringify(data));
     } catch(error)  {
          res.end(JSON.stringify(message.errorController(error)));
     }
 }
 
 async function updatePosition(req,res){
     let data = '';
     req.on('data', chunk => {
       data += chunk;
     })
     req.on('end', () => {
         try{
         let updateData1=JSON.parse(data);
         const response1=employer.updatePosition(updateData1);
         res.end(JSON.stringify(response1));
         } catch(error) {
         res.end(JSON.stringify(message.errorController(error)));
         }
     })
    
 } 

 export {
     
     send
 }
 
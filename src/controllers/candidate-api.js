import * as candidate from '../candidate/candidate.js'
import * as employer from '../employer/employer.js'
import * as kt from '../kepner-tregoe/kepner-tregoe.js'
import * as message from '../controllers/message.js'
import * as auth from '../controllers/authentication.js'
import url from 'url'

function send(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if(auth.verifyToken(req,res)){
    if(url.parse(req.url,true).pathname=='/candidateMatch' & req.method=='GET')
     matchAlgorithm(req,res);
    if(url.parse(req.url,true).pathname=='/candidateMatchByPosition' & req.method=='GET')
     matchAlgorithmByposition(req,res);
    if(url.parse(req.url,true).pathname=='/candidateById' & req.method=='GET')
     byId(req,res);
    if(url.parse(req.url,true).pathname=='/updateMatchAlgorithmCandidate' & req.method=='PUT')
     updateMatchAlgorithm(req,res); 
    if(url.parse(req.url,true).pathname=='/candidateListPositions' & req.method=='GET')
    positionsJob(req,res);
   
    } else {
        res.end(JSON.stringify(message.errorToken()));
    }
}


async function matchAlgorithm(req,res){
    try {
        
    let empId=url.parse(req.url,true).query["empId"];
   // let candidateId=url.parse(req.url,true).query["candidateId"];
    
    const data=await kt.candidateKt(empId);
    res.end(JSON.stringify(data));
    } catch(error){
        res.end(JSON.stringify(message.errorController(error)));
    }
}

async function matchAlgorithmByposition(req,res){
    try {
    
    let idPosition=url.parse(req.url,true).query["idPosition"];
    let empId=url.parse(req.url,true).query["empId"];
    const data=await kt.candidateKtByPositionId(idPosition,empId);
    res.end(JSON.stringify(data));
    } catch(error){
        res.end(JSON.stringify(message.errorController(error)));
    }
}

async function byId(req,res){
    try {
        let idCandidate=url.parse(req.url,true).query["idCandidate"];
        const data=await candidate.findById(idCandidate);
        res.end(JSON.stringify(data));
    } catch(error) {
        res.end(JSON.stringify(message.errorController(error)));
    }
}


async function updateMatchAlgorithm(req,res){
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
        try{
        let updateData1=JSON.parse(data);
        const response1=candidate.updateMatchAlgorithm(updateData1);
        res.end(JSON.stringify(response1));
        } catch(error) {
        res.end(JSON.stringify(message.errorController(error)));
        }
    })
   
}


async function positionsJob(req,res){
    try {
    const data=await employer.findAllPositionJob();
    res.end(JSON.stringify(data));
    } catch(error) {
        res.end(JSON.stringify(message.errorController(error)));
    }
}



export {
       send
 }

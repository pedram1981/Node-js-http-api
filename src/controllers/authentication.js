import jwt from 'jsonwebtoken'
import * as message from '../controllers/message.js'
import * as employer from '../employer/employer.js'
import * as candidate from '../candidate/candidate.js'


function createToken( user,req,res ) {
  let token=jwt.sign(user,'aslkjdlkasjdlasow');
 return token;
  }

function verifyToken(req,res){
  const token=req.headers["x-access-token"];
  let next=true;
if(!token){
  res.end(JSON.stringify("we need token"));
} else {
jwt.verify(token,'aslkjdlkasjdlasow',(err,decoded)=>{
if(err){
  next=false;
 } else {
  next=true;
}
});
}
return next;
}

async function loginPost(req,res){
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    data=data.replace('userName=','');
    data=data.replace('pass=','');
let userName=data.substring(0,data.indexOf('&'));
let pass=data.substring(data.indexOf('&')+1,data.length);
logIn(req,res,userName,pass);
  })

}

async function logIn(req,res,userName,pass){
   try {
        const data=await candidate.logIn(userName,pass);
         if(data.status==200){
             let token=createToken(data.info,req,res);
          res.end(JSON.stringify({page:1,status:data.status,token:token}));
         }else {
          const data=await employer.logIn(userName,pass)
          if(data.status==200){
             let token=createToken(data.info,req,res);
          res.end(JSON.stringify({page:2,status:data.status,token:token}));
         }else {
              res.end(JSON.stringify(data));
         }
         }
      } catch(error) {
      res.end(JSON.stringify(message.errorController(error)));
  }
}

export {
  verifyToken,
  loginPost
}
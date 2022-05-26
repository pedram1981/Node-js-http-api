import fs from 'fs'

function add(data,eventApi) {
let obj=eventObject(data,eventApi);
fs.appendFileSync('./src/event-store/event-store.txt',JSON.stringify(obj));
fs.appendFileSync('./src/event-store/event-store.txt','\n');
}

function eventObject(data,eventApi) {
   let info={};
    info=JSON.parse(JSON.stringify(data))
    info.event=eventApi;
    return info;
 
  }

  export {
    add
  }
function byId(id,candidates) {
  let info={};
  info.id=candidates[id].id;
  info.salary=candidates[id].salary;
  info.naics=candidates[id].naics;
  info.location=candidates[id].location;
  info.benefits=candidates[id].benefits;
  info.fit=candidates[id].fit;
  info.w={};
  info.w.salary=candidates[id].w.salary;
  info.w.naics=candidates[id].w.naics;
  info.w.location=candidates[id].w.location;
  info.w.benefits=candidates[id].w.benefits;
  info.w.fit=candidates[id].w.fit;
  return info;    
 }

 export {
   byId
 }
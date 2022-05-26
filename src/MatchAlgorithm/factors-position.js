function salary(positionSalary,candidateSalary,weight) {
    return weight*calRateSalary(positionSalary/candidateSalary);
  }

  function calRateSalary(rate){
    let r1=[0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2];
    let r2=[1,2,3,4,5,6,7,8,9,10];
    let rate1=0;
    for(let i=r1.length;0<=i;i--){
      if(rate<=r1[i])
        rate1=r2[i];
      }
      if(2<rate)
       rate1=10;
    return rate1;
   }

   
export {
  salary
}
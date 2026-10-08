function prepareFood (next)
{
    setTimeout(()=>{
        console.log('Food is prepared');
         next();
    },3000);
}
function eatFood(next){
     setTimeout(()=>{
        console.log('Food is eaten');
         next();
    },2000);
}
function goToSchool(){ 
     setTimeout(()=>{
        console.log('went to the school');
    },1500);
}
prepareFood(()=>{
   eatFood(()=>{
    goToSchool();
   });
});

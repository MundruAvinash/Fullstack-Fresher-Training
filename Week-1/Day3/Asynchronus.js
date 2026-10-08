function prepareFood ()
{
    setTimeout(()=>{
        console.log('Food is prepared');

    },3000);
}
function eatFood(){
     setTimeout(()=>{
        console.log('Food is eaten');

    },2000);
}
function goToSchool(){
     setTimeout(()=>{
        console.log('Food is prepared');
    },1500);
}
prepareFood();
eatFood();
goToSchool();
let cleanRoom = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(`cleanRoom: resolved after 1s`);
  }, 1000);
});


let eatIcecream = function(){
  return new Promise(function (resolve, reject){
    console.log(`Icecream time! `);
    setTimeout( _=>{
      resolve('eatIcecream: resolved after 2s')
    },2000)
  })
}



cleanRoom
  .then(eatIcecream)


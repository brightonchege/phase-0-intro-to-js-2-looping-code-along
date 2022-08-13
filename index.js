// Code your solutions in this file


function writeCards(name,event){ 
  const thank = []
  for(let i = 0; i < name.length; i++){
    thank[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
  }
  return thank

}





function countDown(){
    let count = 10;
    while (count >= 0) {
      console.log(count--);
}
}
countDown()




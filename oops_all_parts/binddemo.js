const player={
  firstname : 'virat',
  lastname:'kohli',
  position:3,
  canbowl:false,
  getDetails:function(){
    console.log(this.firstname , this.lastname , "comes at no .", this.position)
  }
}
// const obj = function(){
//   console.log(this.getDetails())
// }

// let x=obj.bind(player)//this will retrun a new function with the provided  value
// x()

const obj = function (){
  this.getDetails()
}
obj.call(player )//call immediately calls the same function not calls a new function
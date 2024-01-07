var obj ={
  name:"sanket",
  company:"google",
  display:()=>{
    
      console.log(this.name , "works in ", this.company)
    
  }
}
var obj2 ={
  name:"sarthak",
  company:"facebook",
  display:function (){
    setTimeout(()=>{
      console.log(this.name , "works in ", this.company)
    },3000)
  }
}
 obj.display()//output is not coming due to arrow function , issue resolves due to lexical  scoping
obj2.display()
class Product{
  //discount =10;//it will become data member , here it  will come to every product
  //member function 
  
  buyProduct(){

  }
  constructor(n,p){
    //constructor function to create new real life  instances called as object
    //when we create an object this constructor is the first function to gets called.
    this.name=n,
    this.price=p
  }
  displayProduct(){
     console.log(this.name,this.price)     
  }
  
}

let  iphone = new Product("iphone",100000);
let macbook = new Product("mac",100000)

//iphone.displayProduct()   //this will also show the product

// console.log(iphone,macbook)
// console.log(typeof macbook)
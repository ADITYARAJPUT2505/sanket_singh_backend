function Product(n,p,c){
  this.name = n,
  this.price =p
  category.call(this,c)
}

function category(c){
  this.categoryName =c
  this.getCategoryName = function(){
    console.log(this.categoryName)
  }
}
Product.prototype =Object.create(category.prototype)

let p = new Product("iphone",10000,'electronics')
console.log(p)
p.getCategoryName()
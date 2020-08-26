export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  imageUrl:string;

  constructor(id,name,description='',price=0,imageUrl='https://s3-eu-west-1.amazonaws.com/yi-files/content/2018/08/5b6db57f722fd.jpg'){
   this.id=id
   this.name=name
   this.description=description
   this.price=price
   this.imageUrl=imageUrl


  }

}

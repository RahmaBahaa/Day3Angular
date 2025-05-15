import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productName:string ='';
  productList:{name:string, price:number, image:string, quantity:number}[] = [
    {
      name:"Black Jacket",
      price:100,
      image:"1.jpg",
      quantity:10
    },
    {
      name:"Coat",
      price:300,
      image:"2.jpg",
      quantity:0
    },
    {
      name:"Blover",
      price:150,
      image:"3.jpg",
      quantity:1
    },
    {
      name:"Jacket",
      price:150,
      image:"4.jpg",
      quantity:2
    },
    {
      name:"Summer T-shirt",
      price:200,
      image:"5.jpg",
      quantity:5
    },
  ];
  filterList:{name:string, price:number, image:string, quantity:number}[] = this.productList;


  filterProduct(){
    this.filterList = this.productName == ""?
     this.productList : this.productList.filter((product)=>product.name.toLowerCase().includes(this.productName.toLowerCase()))
  }
  decreaseQuantity(product:{name:string, price:number, image:string, quantity:number}){
    if (product.quantity > 0) {
    product.quantity--;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product:{name:string, price:number, image:string, quantity:number} = {
    name:"", price:0, image:"", quantity:0
  }
  @Output() myEvent = new EventEmitter();
  reduceQuantity(){
    this.myEvent.emit();
  }
}

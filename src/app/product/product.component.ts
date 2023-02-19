import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
title:string = "This The Product"
listProduct!:Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {id: 1, title: "Hoodie", price: 18, quantity: 0, like: 0, object: "hoodie.glb"},
      {id: 2, title: "Cap", price: 21, quantity: 10, like: 0, object: "Casquette.glb"},
      {id: 3, title: "MUG", price: 16, quantity: 8, like: 0, object: "MUG.glb"}, ]
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(l : number){
    this.listProduct[l].like++;
  }

}

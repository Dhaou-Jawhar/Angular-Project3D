import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
title:string = "This The Product"
listProduct!:Product[];

  //injecter le service dans le constructeur
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    //affecter la liste de service dans la liste du produit
    this.listProduct=this.service.listP
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(l : number){
    this.listProduct[l].like++;
  }

}

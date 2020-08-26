import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
 @Input() productItem:Product
  constructor(private msgService:MessangerService,private cartService:CartService) { }

  ngOnInit() {
  }

  handelAddTocat(){

   this.cartService.addProductToCart(this.productItem).subscribe(()=>{

     this.msgService.sendProductItem(this.productItem);
   })

  }

}

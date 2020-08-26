import { Component, OnInit } from "@angular/core";
import { MessangerService } from "src/app/services/messanger.service";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/models/cart-item";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  constructor(
    private msgService: MessangerService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.handelSubscription();
    this.loadCartItems();
  }

  handelSubscription() {
    this.msgService.getProductItem().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcuteTotal();
    });
  }

  calcuteTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}

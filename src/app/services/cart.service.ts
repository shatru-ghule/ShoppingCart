import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CartItem } from "../models/cart-item";
import { HttpClient } from "@angular/common/http";
import { cartUrl } from "../config/api";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private http: HttpClient) {}
  cartItems: CartItem[] = [];

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {

        for (let items of result) {
          let productExits = false;
          for (let index in this.cartItems) {
            if ( this.cartItems[index].productId === items.product.id) {
              this.cartItems[index].qty++;
              productExits = true;
              break;
            }
          }
          if (!productExits) {
           this.cartItems.push(new CartItem(items.id, items.product));
          }
        }
        return  this.cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

  removeItem(items:CartItem) {

    this.cartItems.splice(items.id,1);

  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
 subjct=new Subject()
  constructor() { }

  sendProductItem(product){

  this.subjct.next(product);

  }

  getProductItem(){
    return this.subjct.asObservable();

  }





}

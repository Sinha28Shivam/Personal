import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
 this.cartService.getProducts()
   
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    if(  confirm("Do you want to remove this item from the cart?") == true){
        this.cartService.removeCartItem(item);
    }   
    else{

    }
  }
  emptycart(){
  if(  confirm("Are you sure you want to empty cart?") == true){
    this.cartService.removeAllCart();
  }
  else{
   // alert("Items not deleted")
  }
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
imports: [
  FormsModule
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, private router:Router) { }
 

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  
  
  OnClickFunction(){
    this.router.navigate([`login`])
  }
 
}

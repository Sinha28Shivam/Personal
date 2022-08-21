import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getProductList(): never[] {
    throw new Error('Method not implemented.');
  }
  constructor(public router:Router){}
  title = 'E-medicine';
  OnClickFunction(){
    this.router.navigate(['/home']);  
  }
}

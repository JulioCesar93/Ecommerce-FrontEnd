import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  public paginaAtual = 1;

 constructor(private service: ProductService) {}

 ngOnInit() {
   this.getProduct();
 }

 getProduct() {

 }

 }

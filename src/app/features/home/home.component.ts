import { Component } from '@angular/core';
import { MainSecComponent } from './components/main-sec/main-sec.component';
import { WorksComponent } from './components/works/works.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSecComponent,WorksComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

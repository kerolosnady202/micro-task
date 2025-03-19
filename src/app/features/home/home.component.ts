import { Component } from '@angular/core';
import { MainSecComponent } from './components/main-sec/main-sec.component';
import { WorksComponent } from './components/works/works.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { WhatOthersSayComponent } from './components/what-others-say/what-others-say.component';
import { ClientsComponent } from './components/clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSecComponent,WorksComponent,ProductsComponent,SectorsComponent,ServicesComponent,WhatOthersSayComponent,ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

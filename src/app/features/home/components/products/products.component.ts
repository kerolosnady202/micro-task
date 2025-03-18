import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  secTitle:string="المنتجات"
  secSubTitle:string=" نقدم حلولًا تقنية مبتكرة لدعم الشركات في مختلف الصناعات، لمساعدتها على تحقيق النجاح والتحول الرقمي بكفاءة."
  boxs:{imgUrl:string,title:string,subTitle:string}[]=[
    {imgUrl:"assets/images/products/big-box.svg",title:'ERP',subTitle:'نظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلة'},
    {imgUrl:"assets/images/products/box1.svg",title:'نظام نقاط البيع المتنقلة',subTitle:'نظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلة'},
    {imgUrl:"assets/images/products/box2.svg",title:'نظام نقاط البيع المتنقلة',subTitle:'نظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلة'},
    {imgUrl:"assets/images/products/box1.svg",title:'نظام نقاط البيع المتنقلة',subTitle:'نظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلة'},
    {imgUrl:"assets/images/products/box3.svg",title:'نظام نقاط البيع المتنقلة',subTitle:'نظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلةنظام نقاط البيع المتنقلة'}
  ]
}

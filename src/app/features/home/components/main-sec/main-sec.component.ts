import { Component } from '@angular/core';

@Component({
  selector: 'app-main-sec',
  standalone: true,
  imports: [],
  templateUrl: './main-sec.component.html',
  styleUrl: './main-sec.component.scss'
})
export class MainSecComponent {
   mainTitle:string="أعمالك مبسطة,إدارة كل ما تحتاجه حسابات مالية";
   secondTitle:string="نقدم في ميكروتيك حلول ERP متكاملة لتعزيز الكفاءة وتحقيق أهداف شركتك."
   imgUrl:string='assets/images/main-sec.svg'
}

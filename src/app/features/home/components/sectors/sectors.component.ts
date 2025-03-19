import { Component } from '@angular/core';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.scss'
})
export class SectorsComponent {
  secTitle:string="حل متكامل ومرن يدعم العديد من القطاعات";
  secSubTitle:string=' نقدم حلولًا تقنية مبتكرة لدعم الشركات في مختلف الصناعات، لمساعدتها على تحقيق النجاح والتحول الرقمي بكفاءة.'
  sectorsBoxs:{imgUrl:string,label:string}[]=[
       {label:"sector1",imgUrl:'assets/images/sectors/sector1.svg'},
       {label:"sector2",imgUrl:'assets/images/sectors/sector2.svg'},
       {label:"sector3",imgUrl:'assets/images/sectors/sector3.svg'},
       {label:"sector4",imgUrl:'assets/images/sectors/sector4.svg'},
  ]
}

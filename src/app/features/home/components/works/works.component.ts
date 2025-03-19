import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
   sectionTitle:string="أعمالك مبسطة,إدارة كل ما تحتاجه في نظام  "
   activeItem: MenuItem | undefined;
   spantit:string='واحد'
   items: MenuItem[] | undefined;
   dataTitle:string="الماليات"
   data:any=[
   {label: 'تقارير وتحليلات المبيعات'},
   {label:  'إعداد الفواتير'},
   {label: 'إدارة طلبات البيع'},
   {label: 'تقارير وتحليلات المبيعات'},   
   ]
   ngOnInit() {
    this.items = [
        {
            label: 'المالية',
            icon: 'pi pi-money-bill',
            command: () => {
              this.dataTitle= 'المالية'
             //   this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'HR',
            icon: 'pi pi-user',
            command: () => {
              this.dataTitle='الموارد البشرية'
               // this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'المخازن',
            icon: 'pi pi-home',
            command: () => {
              this.dataTitle='المخازن'
             //   this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'المشتريات',
            icon: 'pi pi-shopping-cart',
            command: () => {
              this.dataTitle='المشتريات'
              //  this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        },
        {
            label: 'المبيعات',
            icon: 'pi pi-inbox',
            command: () => {
              this.dataTitle='الميبعات'
              //  this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];
    this.activeItem = this.items[0];
}
onActiveItemChange(event: MenuItem) {
  this.activeItem = event;
}
}

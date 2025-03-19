import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [SidebarModule,PanelMenuModule,CommonModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MobileSidebarComponent {
@Input() sidebarVisible!:any;
@Output() hideSidebar:EventEmitter<string>=new EventEmitter<string>()
 btn_title: string = "طلب عرض الاسعار"
 items: MenuItem[] | undefined;
  private _Router=inject(Router)
ngOnInit() {

  this.items = [
    {
      label: 'الرئيسية',
      command: () => {
        this._Router.navigate(['/']);
    }
    },


    {
      label: 'عن ميكروتيك',
      items: [
        {
          label: 'نبذه عنا',
          route: '/'
        },
        {
          label: 'فريقنا',
          route: '/'
        },
        {
          label: 'كلمة الرئيس التنفيذي',
          route: '/'
        }
      ]
    },
    {
      label: 'المنتجات',
      items: [
        {
          label: 'نظام نقاط البيع التجاري (Erp System)',
          route: '/'
        },
        {
          label: 'نظام نقاط البيع التجاري (O-Green)',
          route: '/'
        },
        {
          label: 'نظام نقاط البيع التجاري (O-Orange)',
          route: '/'
        },
        {
          label: 'نظام نقاط البيع التجاري (O-Red)',
          route: '/'
        },

      ]
    },
    {
      label: "شبكتنا",
      items: [
        { label: 'الشركاء ', route: '/' },
        { label: 'العملاء', route: '/' }
      ]
    },
    {
      label: 'المركز الاعلامي',
      items: [
        {
          label: 'اخبار ميكروتيك',
          route: '/'
        },
        {
          label: 'المعارض والمؤتمرات',
          route: '/'
        },
        {
          label: 'معرض الوسائط',
          route: '/'
        }
      ]
    },
    {
      label: 'الاسئلة الاشائعة',
      command: () => {
        this._Router.navigate(['/']);
    }
    },
    {
      label: 'اتصل بنا',
      command: () => {
        this._Router.navigate(['/']);
    }
    },
  ]
}
}

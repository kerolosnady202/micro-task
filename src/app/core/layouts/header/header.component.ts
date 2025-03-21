import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule,ButtonModule,MobileSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  innerWidth:number=window.innerWidth;
  nav_items: { label: string, url: string }[] = [
    { label: 'الرئيسية', url: 'home' },
    { label: 'عن ميكروتيك', url: 'about' },
    { label: 'المنتجات', url: 'news' },
    { label: 'شبكتنا', url: 'footer' },
    { label: 'المركز الاعلامي', url: 'footer' },
    { label: 'الاسئلة الاشائعة', url: 'footer' },
    { label: 'اتصل بنا', url: 'footer' },
  ]
  btn_title: string = "طلب عرض الاسعار"
  sidebarVisible:boolean=false
  private _Router=inject(Router)
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth
  }
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

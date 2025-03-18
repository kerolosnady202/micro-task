import { Routes } from '@angular/router';
import { MainlayoutComponent } from './core/layouts/mainlayout/mainlayout.component';

export const routes: Routes = [
    {path:"",component:MainlayoutComponent,children:[
        {path:"",redirectTo:"home",pathMatch:'full'},
        {path:"",loadChildren:()=>import('../app/features/home/home.routes').then((m)=>m.routes)}
    ]}
];

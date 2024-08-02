import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: SidebarPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}

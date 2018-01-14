import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OutputComponent } from './components/output/output.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/output',
    pathMatch: 'full'
  },
  {
    path: 'input',
    children: [],
    component: InputComponent
  },
  {
    path: 'output',
    children: [],
    component: OutputComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

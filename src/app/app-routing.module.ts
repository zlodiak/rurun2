import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OutputComponent } from './components/output/output.component';
import { TableComponent } from './components/output/table/table.component';
import { GraphComponent } from './components/output/graph/graph.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/output',
    pathMatch: 'full'
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'output',
    children: [
      { path: 'table', component: TableComponent },
      { path: 'graph', component: GraphComponent }
    ],
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

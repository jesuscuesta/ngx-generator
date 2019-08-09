import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxGeneratorComponent } from './ngx-generator.component';

const routes: Routes = [
  {
    path: 'category',
    component: NgxGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

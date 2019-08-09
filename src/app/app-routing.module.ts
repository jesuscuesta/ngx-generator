import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneradorSharedModule } from 'projects/jcuesta/ngx-generator/src/public-api';

const routes: Routes = [
  {
    path: 'category-rules',
    pathMatch: 'full',
    loadChildren: () =>
      import('../../projects/jcuesta/ngx-generator/src/public-api').then(m => m.GeneradorSharedModule)
  }];

@NgModule({
  imports: [
    GeneradorSharedModule.forChild(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

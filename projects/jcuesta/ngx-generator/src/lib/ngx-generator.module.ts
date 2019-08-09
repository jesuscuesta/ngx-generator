import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxGeneratorComponent } from './ngx-generator.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [NgxGeneratorComponent],
  imports: [
    AppRoutingModule,
    RouterModule.forChild([]),
  ],
  exports: [NgxGeneratorComponent]
})
export class NgxGeneratorModule { }

@NgModule({})
export class GeneradorSharedModule {
  static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxGeneratorModule,
      providers: []
    };
  }
}

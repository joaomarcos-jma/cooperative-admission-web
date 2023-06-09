import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorHandlerModule } from './handler/interceptor-handler.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, InterceptorHandlerModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error();
    }
  }
}

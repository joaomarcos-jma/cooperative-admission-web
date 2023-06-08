import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { BaseHeaderComponent } from './components/base-header/base-header.component';
import { BaseMenuComponent } from './components/base-menu/base-menu.component';

const DECLARATIONS = [BaseHeaderComponent, BaseMenuComponent];
const MODULES = [MaterialModule, RouterModule];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES, ...DECLARATIONS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}

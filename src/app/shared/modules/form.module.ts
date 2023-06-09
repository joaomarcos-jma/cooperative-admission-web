import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TextMaskModule } from 'angular2-text-mask';
import { UnmaskDirective } from '../directives/unmask.directive';

@NgModule({
  declarations: [UnmaskDirective],
  exports: [
    CommonModule,
    UnmaskDirective,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class FormModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UnmaskDirective } from '../directives/unmask.directive';
import { TextMaskModule } from 'angular2-text-mask';

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
  ],
})
export class FormModule {}

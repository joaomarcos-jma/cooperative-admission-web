import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'displayStatus' })
export class DisplayStatusPipe implements PipeTransform {
  transform(isActive: any): string {
    return isActive ? 'Regular' : 'Pendente Regularização';
  }
}

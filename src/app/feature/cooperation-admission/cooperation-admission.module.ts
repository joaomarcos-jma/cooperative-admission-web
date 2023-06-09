import { NgModule } from '@angular/core';
import { FormModule } from '../../shared/modules/form.module';
import { SeekCooperatorComponent } from './components/seek-cooperator/seek-cooperator.component';
import { CooperationAdmissionRoutingModule } from './cooperation-admission-routing.module';
import { DisplayStatusPipe } from 'src/app/shared/pipes/display-status.pipe';

@NgModule({
  declarations: [SeekCooperatorComponent, DisplayStatusPipe],
  imports: [FormModule, CooperationAdmissionRoutingModule],
})
export class CooperationAdmissionModule {}

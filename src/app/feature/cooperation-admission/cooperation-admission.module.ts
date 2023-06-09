import { NgModule } from '@angular/core';
import { FormModule } from '../shared/modules/form.module';
import { SeekCooperatorComponent } from './components/seek-cooperator/seek-cooperator.component';
import { CooperationAdmissionRoutingModule } from './cooperation-admission-routing.module';

@NgModule({
  declarations: [SeekCooperatorComponent],
  imports: [FormModule, CooperationAdmissionRoutingModule],
  providers: [],
})
export class CooperationAdmissionModule {}

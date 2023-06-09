import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SeekCooperatorComponent } from './components/seek-cooperator/seek-cooperator.component';
import { CooperationAdmissionRoutingModule } from './cooperation-admission-routing.module';

@NgModule({
  declarations: [SeekCooperatorComponent],
  imports: [ReactiveFormsModule, CooperationAdmissionRoutingModule],
  providers: [],
})
export class CooperationAdmissionModule {}

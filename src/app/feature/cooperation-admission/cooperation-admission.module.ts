import { NgModule } from '@angular/core';
import { FormModule } from '../../shared/modules/form.module';
import { SeekCooperatorComponent } from './components/seek-cooperator/seek-cooperator.component';
import { CooperationAdmissionRoutingModule } from './cooperation-admission-routing.module';
import { MembersService } from './services/members.service';

@NgModule({
  declarations: [SeekCooperatorComponent],
  imports: [FormModule, CooperationAdmissionRoutingModule],
  providers: [MembersService],
})
export class CooperationAdmissionModule {}

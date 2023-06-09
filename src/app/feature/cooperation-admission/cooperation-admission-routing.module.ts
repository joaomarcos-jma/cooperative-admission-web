import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeekCooperatorComponent } from './components/seek-cooperator/seek-cooperator.component';

const routes: Routes = [
  {
    path: '',
    component: SeekCooperatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooperationAdmissionRoutingModule {}

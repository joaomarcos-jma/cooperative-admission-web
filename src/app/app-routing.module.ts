import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cooperation-admission',
    pathMatch: 'full',
  },
  {
    path: 'cooperation-admission',
    loadChildren: () =>
      import(
        './feature/cooperation-admission/cooperation-admission.module'
      ).then((m) => m.CooperationAdmissionModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./feature/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

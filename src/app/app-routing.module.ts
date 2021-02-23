import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuspiceComponent } from './components/auspice/auspice.component';
import { IGVComponent } from './components/igv/igv.component';
import { MsaComponent } from './components/msa/msa.component';

const routes: Routes = [
  {path: 'msa', component: MsaComponent},
  {path: 'igv', component: IGVComponent},
  {path: 'au', component: AuspiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
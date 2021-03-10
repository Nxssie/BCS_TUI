import { GridsterComponent } from './components/gridster/gridster.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuspiceComponent } from './components/auspice/auspice.component';
import { HomeComponent } from './components/home/home.component';
import { IGVComponent } from './components/igv/igv.component';
import { MsaComponent } from './components/msa/msa.component';
import { NcbiComponent } from './components/ncbi/ncbi.component';
import { NcbiMsaComponent } from './components/ncbi-msa/ncbi-msa.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'msa', component: MsaComponent},
  {path: 'igv', component: IGVComponent},
  {path: 'au', component: AuspiceComponent},
  {path: 'ncbi', component: NcbiComponent},
  {path: 'ncbim', component: NcbiMsaComponent},
  {path: 'gridster', component: GridsterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
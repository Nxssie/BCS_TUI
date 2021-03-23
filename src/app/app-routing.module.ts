import { GridsterComponent } from './components/gridster/gridster.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuspiceComponent } from './components/auspice/auspice.component';
import { HomeComponent } from './components/home/home.component';
import { IGVComponent } from './components/igv/igv.component';
import { MsaComponent } from './components/msa/msa.component';
import { NcbiComponent } from './components/ncbi/ncbi.component';
import { NcbiMsaComponent } from './components/ncbi-msa/ncbi-msa.component';
import { ItolComponent } from './components/itol/itol.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'msa', component: MsaComponent},
  {path: 'igv', component: IGVComponent},
  {path: 'au', component: AuspiceComponent},
  {path: 'ncbi', component: NcbiComponent},
  {path: 'ncbimsa', component: NcbiMsaComponent},
  {path: 'itol', component: ItolComponent},
  {path: 'gridster', component: GridsterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IGVComponent, DialogIGVForm } from './components/igv/igv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MsaComponent } from './components/msa/msa.component';
import { AuspiceComponent } from './components/auspice/auspice.component';
import { NcbiComponent } from './components/ncbi/ncbi.component';
import { HomeComponent } from './components/home/home.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterComponent } from './components/gridster/gridster.component';
import { NcbiMsaComponent } from './components/ncbi-msa/ncbi-msa.component';
import { ItolComponent } from './components/itol/itol.component';
import { JbrowseComponent } from './components/jbrowse/jbrowse.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IGVComponent,
    DialogIGVForm,
    MsaComponent,
    AuspiceComponent,
    NcbiComponent,
    HomeComponent,
    GridsterComponent,
    NcbiMsaComponent,
    ItolComponent,
    JbrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    HttpClientModule,
    GridsterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

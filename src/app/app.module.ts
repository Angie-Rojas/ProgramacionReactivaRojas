import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TablaComponent } from './components/tabla/tabla.component';
import { AppMaterialModule } from './app.material.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransformarPipe } from './pipes/transformar.pipe';
import { PipePersonalizadaComponent } from './components/pipe-personalizada/pipe-personalizada.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    EditDialogComponent,
    TransformarPipe,
    PipePersonalizadaComponent,
    DirectivasComponent,
    NavbarComponent,
    DashboardComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

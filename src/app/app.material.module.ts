import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule ({
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})

export class AppMaterialModule{}

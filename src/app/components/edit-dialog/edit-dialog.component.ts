import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, INJECTOR, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../tabla/tabla.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      curso: new FormControl(data.curso),
      nota: new FormControl(data.nota)
    })
   }

  ngOnInit(): void {
  }

  actualizar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }

}

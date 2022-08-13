import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Curso } from '../tabla/tabla.component';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

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

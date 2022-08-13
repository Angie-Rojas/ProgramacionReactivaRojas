import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

export interface Curso {
  nombre: string;
  curso: string;
  nota: string;
}

const ELEMENT_DATA: Curso[] = [
  { nombre: 'Gabriela', curso: 'Diseño', nota: '4.1' },
  { nombre: 'Patricia', curso: 'Cálculo', nota: '3.5' },
  { nombre: 'Nicolle', curso: 'Animación', nota: '5.0' },
  { nombre: 'Sofía', curso: 'Videojuegos', nota: '3.8' },
  { nombre: 'María', curso: 'UX/UI', nota: '4.6' },
  { nombre: 'Talía', curso: 'Introducción', nota: '3.9' }
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})

export class TablaComponent implements OnInit {

  //Propiedades
  columnas: string[] = ['nombre', 'curso', 'nota', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Curso>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  agregar() {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        width: '350px'
      });
  }

  editar(elemento: Curso) {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        width: '350px',
        data: elemento
      });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(curso => curso.curso === resultado.curso);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Curso) {
    this.dataSource.data = this.dataSource.data.filter((curso: Curso) => curso.curso != elemento.curso);
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}

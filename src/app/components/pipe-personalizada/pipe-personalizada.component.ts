import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-personalizada',
  templateUrl: './pipe-personalizada.component.html',
  styleUrls: ['./pipe-personalizada.component.scss']
})
export class PipePersonalizadaComponent implements OnInit {

  cursos: any = [
    {
      nombre: 'Angular',
      duracion: {
        fechaInicio: new Date(2022, 0, 1),
        fechaFin: new Date(2022, 3, 1),
      },
      descripcion: 'Curso de Angular intermedio'
    },
    {
      nombre: 'ReactJS',
      duracion: {
        fechaInicio: new Date(2022, 3, 1),
        fechaFin: new Date(2022, 5, 1),
      },
      descripcion: 'Curso de ReactJS'
    },
    {
      nombre: 'UX/UI',
      duracion: {
        fechaInicio: new Date(2022, 6, 1),
        fechaFin: new Date(2022, 9, 1),
      },
      descripcion: 'Curso de UX/UI'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

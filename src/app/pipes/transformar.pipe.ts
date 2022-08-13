import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  meses: string[] = [
    'Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  transform(value: any, ...args: any[]): unknown {
    /*
    {
      fechaInicio. Date,
      fechaFin: Date
    }
    */
    let resultado: string;
    resultado = "De " + this.meses[value.fechaInicio.getMonth()] +" a " + this.meses[value.fechaFin.getMonth()]
    return resultado;
  }

}

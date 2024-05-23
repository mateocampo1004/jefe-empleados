import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [CommonModule, EmpleadoComponent],
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class JefeComponent {
  ordenDelJefe: string = 'Fabricar más chocolates';

  recibirRespuesta(respuesta: string) {
    console.log('Respuesta del empleado:', respuesta);
  }
}

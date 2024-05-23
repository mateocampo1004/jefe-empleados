import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() ordenDelJefe!: string;
  @Output() respuestaDelEmpleado = new EventEmitter<string>();

  responderAlJefe() {
    this.respuestaDelEmpleado.emit('Orden completada');
  }
}

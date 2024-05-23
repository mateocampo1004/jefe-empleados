import { Component } from '@angular/core';
import { JefeComponent } from './jefe/jefe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [JefeComponent],
})
export class AppComponent {
  title = 'jefe-empleados';
}

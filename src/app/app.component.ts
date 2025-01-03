import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchProveedores } from './divisions/organisms/search-proveedores/search-proveedores';
import { SoporteTecnico } from './divisions/organisms/soporte-tecnico/soporte-tecnico';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    SearchProveedores,
    SoporteTecnico
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practicando-angular';
}

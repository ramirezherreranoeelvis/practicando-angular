import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { Input } from '../../atoms/input/input';

@Component({
  selector: 'app-soporte-tecnico',
  standalone: true,
  imports: [Button, Input],
  templateUrl: './soporte-tecnico.html',
  styleUrl: './soporte-tecnico.scss'
})
export class SoporteTecnico {

}

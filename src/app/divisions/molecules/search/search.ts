import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { Input } from '../../atoms/input/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [Button, Input],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {

}

import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
@Component({
      selector: 'app-defer',
      standalone: true,
      imports: [],
      templateUrl: './defer.component.html',
      styleUrl: './defer.component.scss',
})
export class DeferComponent {

      isImageVisible = false;
      showImage() {
            this.isImageVisible = true;
      }
}

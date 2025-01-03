import { Component } from '@angular/core';
import { DeferComponent } from './defer/defer.component';
import { ForComponent } from './for/for.component';
import { IfElseElseifComponent } from './if-else-elseif/if-else-elseif.component';
import { SwitchComponent } from './switch/switch.component';



@Component({
      selector: 'app-control-flow',
      standalone: true,
      imports: [
            SwitchComponent,
            DeferComponent,
            ForComponent,
            IfElseElseifComponent
      ],
      templateUrl: './control-flow.component.html',
      styleUrl: './control-flow.component.scss',
})

export class ControlFlowComponent {
}
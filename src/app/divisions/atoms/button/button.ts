import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
        selector: 'app-button',
        standalone: true,
        imports: [],
        templateUrl: './button.html',
        styleUrls: ['./button.scss'],
})

export class Button {
        @Input() label: string = 'Button';
        @Output() action = new EventEmitter<void>();
        handleClick() {
                this.action.emit();
        }
}

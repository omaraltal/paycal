import { Component, EventEmitter, Input, Output } from '@angular/core';

let id = 0;

@Component({
  selector: 'shared-toggle',
  styleUrls: ['./toggle.component.scss'],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  @Input()
  checked = false;
  @Input() label: string;
  @Output() checkedChange = new EventEmitter<boolean>();
  id = `shared-toggle-${++id}`;

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  onKeydown(event: any) {
    if (event.key === ' ') {
      this.toggle();
      event.preventDefault();
    }
  }
}

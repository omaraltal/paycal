import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  @Input() value: number;
  @Output() valueChange = new EventEmitter();
  @ViewChild('input', { static: true }) input: ElementRef;
  test: number;

  showDisplay = true;

  setValue(value) {
    const el = this.input.nativeElement;
    const stripped = value.toString().replace(/[^0-9\.]/g, '');
    const parsed = parseFloat(stripped);
    if (parsed === this.value) {
      this.forceRedraw(parsed);
    }
    const selectionStart = this.input.nativeElement.selectionStart;
    let reversedSelectionStart = el.value.length - selectionStart;
    if (el.value.indexOf('.') < selectionStart) {
      reversedSelectionStart = reversedSelectionStart - 1;
    }
    if (parsed != 0) {
      this.valueChange.emit(parsed);
    }
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.setSelectionRange(
        el.value.length - reversedSelectionStart,
        el.value.length - reversedSelectionStart
      );
    }, 0);
  }

  private forceRedraw(value: number): void {
    this.value = 0;
    setTimeout(() => {
      this.value = value;
    }, 0);
  }
}

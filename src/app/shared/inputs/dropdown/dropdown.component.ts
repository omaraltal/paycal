import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

let id = 0;

@Component({
  selector: 'shared-dropdown',
  styleUrls: ['./dropdown.component.scss'],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() label: string;
  @Input() expanded = false;
  innerData: any;
  @Input() set data(data: any) {
    if (data[0].key && data[0].value) {
      this.innerData = data.map(d => d.value);
    } else {
      this.innerData = data;
    }
  }
  get data(): any {
    return this.innerData;
  }
  innerValue: any;
  @Input() set value(value: any) {
    this.innerValue = value;
    this.valueChange.emit(value);
  }
  get value(): any {
    return this.innerValue;
  }
  @Output() valueChange = new EventEmitter<any>();

  id = ++id;

  ngOnInit() {
    fromEvent(document, 'click')
      .pipe(tap(() => (this.expanded = false)))
      .subscribe();
  }

  toggleList() {
    this.expanded = !this.expanded;
  }

  setectItem(item) {
    this.value = item;
    this.expanded = false;
  }

  onLabelKeydown() {}
}

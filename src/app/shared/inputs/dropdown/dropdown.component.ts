import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

let id = 0;

@Component({
  selector: 'shared-dropdown',
  styleUrls: ['./dropdown.component.scss'],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() label = 'Income year';
  @Input() expanded = false;
  @Input() data = [2017, 2018, 2019];
  @Output() selectionChange = new EventEmitter<any>();
  selected: any;

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
    this.selected = item;
    this.selectionChange.emit(item);
    this.expanded = false;
  }

  onLabelKeydown() {}
}

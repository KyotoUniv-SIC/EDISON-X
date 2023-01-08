import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  @Input()
  mail?: string | null;

  @Output()
  appSubmit: EventEmitter<string>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(mail: string) {
    this.appSubmit.emit(mail);
  }
}

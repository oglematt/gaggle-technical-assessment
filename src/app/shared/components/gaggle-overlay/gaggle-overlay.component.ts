import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gaggle-overlay',
  templateUrl: './gaggle-overlay.component.html',
  styleUrls: ['./gaggle-overlay.component.scss']
})
export class GaggleOverlayComponent implements OnInit {

  @Output() closeOverlay: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Because any sane person knows the escape key should close a modal :)
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape")  {
      this.closeOverlay.emit(true)
    }
  }

  constructor() { }

  ngOnInit(): void { }

}

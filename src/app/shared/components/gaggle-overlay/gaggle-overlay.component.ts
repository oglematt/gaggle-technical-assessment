import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gaggle-overlay',
  templateUrl: './gaggle-overlay.component.html',
  styleUrls: ['./gaggle-overlay.component.scss']
})
export class GaggleOverlayComponent implements OnInit {

  @Input() showOverlay: boolean = false;
  @Output() showOverlayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Because any sane person knows the escape key should close a modal :)
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape")  {
      this.showOverlayChange.emit(false)
    }
  }

  constructor() { }

  ngOnInit(): void { }

}

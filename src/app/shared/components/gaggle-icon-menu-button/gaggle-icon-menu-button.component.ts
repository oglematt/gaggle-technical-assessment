import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gaggle-icon-menu-button',
  templateUrl: './gaggle-icon-menu-button.component.html',
  styleUrls: ['./gaggle-icon-menu-button.component.scss']
})
export class GaggleIconMenuButton implements OnInit {

  @Input() icon: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

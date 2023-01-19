import {
  Component, ElementRef,
  HostBinding, HostListener,
  Input,
  OnInit, ViewChild
} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-application-menu',
  templateUrl: './application-menu.component.html',
  styleUrls: ['./application-menu.component.scss']
})
export class ApplicationMenuComponent implements OnInit {

  @ViewChild('appMenu') appMenu!: ElementRef;
  @HostBinding("style.top") y = "0px";
  @HostBinding("style.left") x = "0px";
  @HostBinding("style.visibility") visibility = "hidden";
  @Input() @HostBinding("style.width") width = "175px"
  @Input() @HostBinding("style.min-width") minWidth = "200px";
  @Input() @HostBinding("style.height") height = "auto"
  @Input() @HostBinding("style.min-height") minHeight = "25px";

  constructor(
    private hostElRef: ElementRef,
    private loginService: LoginService
  ) { }

  ngOnInit(): void { }

  open(mouseEvent: MouseEvent): void {
    this.x = mouseEvent.pageX + 'px';
    this.y = mouseEvent.pageY + 'px';
    this.visibility = "visible";

    mouseEvent.stopPropagation();
  }

  close(): void {
    this.visibility = "hidden";
  }

  logout(): void {
    this.loginService.logout();
  }

  @HostListener('document:click', ['$event']) onDocumentClick(mouseEvent: MouseEvent) {
    // If the click happens outside the component, close it.
    if (this.visibility === "visible"
      && !this.hostElRef.nativeElement.contains(mouseEvent.target) ) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape")  {
      this.close();
    }
  }

}

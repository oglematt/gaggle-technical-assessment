import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ApplicationMenuComponent} from "../application-menu/application-menu.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public menuVisible: boolean = false;
  public menuTrigger!: MouseEvent;

  @ViewChild(ApplicationMenuComponent) appMenu!: ApplicationMenuComponent;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void { }

  showMenu(e: MouseEvent): void {
    this.appMenu.open(e);
  }

  logout() {
    this.loginService.logout();
  }

}

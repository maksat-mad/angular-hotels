import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'kk', 'ru']);
    translate.setDefaultLang(localStorage.getItem('lang') || 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  clickedOutside(): void {
    this.menuVariable = false;
    this.menu_icon_variable = false;
  }
}

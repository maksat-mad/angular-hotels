import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  standalone: true,
  imports: [ CommonModule, TranslateModule ]
})
export class ContactsComponent {
}

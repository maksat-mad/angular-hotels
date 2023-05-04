import {Component, inject} from "@angular/core";
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: 'app-exit-button',
  template: `<a class="exit-button bigger-on-hover text-decoration-none cursor-pointer" (click)="goBack()">
    <div class="button">
      <p class="button-text m-0">{{'Exit' | translate}}</p>
    </div>
  </a>`,
  styles: [`.exit-button {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1;
  }

  .button {
    background-color: #222222;
    padding: 5px 15px;
    border-radius: 12%;
  }

  .button-text {
    font-size: 20px;
    color: #FFFFFF;
  }
  `]
})
export class ExitButtonComponent {
  navigation = inject(NavigationService);

  goBack(): void {
    this.navigation.back();
  }
}
